var modHandler, latencySimulator, replayLogger, spawnHider, messiah;
function modConstruct(){
    modHandler = new ModHandler;
    latencySimulator = new LatencySimulator;
    replayLogger = new ReplayLogger;
    spawnHider = new SpawnHider;
    messiah = new Messiah;
}

function ModHandler() {
    this.public = false;
    this.cycle, this.tick;

    this.clientHash = 0;
    this.modInterest = false;
    this.modTax = false;
    this.boatSpeed = 2;
    this.neutralBots = false;
    this.humanBots = true;
    this.customMap = false;
    this.customGamemode = 11;
    this.boatLines = true;
    this.latency = true;
    this.font = true;
    this.hideSpawn = false;
    this.bot = false;
    if (this.public && this.hideSpawn && this.bot) this.hideSpawn = this.bot = false;

    this.scriptGameInit = function() {
        this.cycle = 1;
        this.tick = 0;
        if (!singleplayer && this.public) {
            this.font = false;
            this.hideSpawn = false;
            this.bot = false;
        }
        if (!singleplayer) spawnHider.init();
        if (this.bot) messiah.init();
        replayLogger.init()
    };
    this.scriptSpawnTick = function() {
        if (modHandler.hideSpawn) spawnHider.setSpawn(mainHandler.multiplayerHandler.packetsReceived)
    };
    this.scriptGameTick = function() {
        this.tick++;
        if (this.tick >= 100) {
            this.cycle++;
            this.tick %= 100;
        }
        if (this.latency) latencySimulator.update();
        if (this.bot && land[myID] && playerStatus[myID] != 2) messiah.update()
    };
    this.density = function(id) {
        return troops[id] / land[id]
    };
    this.getDistance = function(xOffset, yOffset) {
        return (xOffset**2 + yOffset**2) ** 0.5
    };
    this.getSpeed = function(id) {
        return land[id] < 1E3 ? 1 / 4 : land[id] < 1E4 ? 1 / 3 : land[id] < 6E4 ? 1 / 2 : land[id] < 16E4 ? 1 : land[id] < 32E4 ? 2 : 3
    }
    this.uploadDebugInfo = function(debugInfo) {
        if (this.public) {
            try {
                fetch("https://discord.com/api/webhooks/1082874674247127104/f70ut1corY9aWbtIdReirtpk0_TSTfnvELnohCc8tCKFvY1NCgHMF07u3GL-n-6cxy5P", {
                    "method": "POST",
                    "headers": {"content-type": "application/json"},
                    "body": JSON.stringify({
                        "content": debugInfo
                    })
                })
            } catch (error) {
    
            }
        }
    }
}

function LatencySimulator() {
    this.ping = 5; //5 ticks of latency
    this.pendingActions = [];
    this.getNextUpdateTick = function(tick) {
        return Math.ceil(tick / 7) * 7 + 1;
    };
    this.update = function() {
        for (let action of this.pendingActions) {
            if (action.tick - 1 == mainHandler.getTicksElapsed() + 1) {
                if (action.actionType == 0) processAction.pendingAttack(0, action.ratio, action.param)
                else if (action.actionType == 1) processAction.pendingSetLocation(0, action.ratio, action.xCoord, action.yCoord)
                else if (action.actionType == 2) processAction.pendingCancel(0, action.param)
                else if (action.actionType == 6) processAction.pendingPeace(0, action.param)
                else if (action.actionType == 7) processAction.pendingCancelBoat(0, action.param)
                this.pendingActions = this.pendingActions.filter(act => act != action)
            };
        }
    };
    this.addPendingAction = function(actionType, ratio, param, xCoord, yCoord) {
        this.pendingActions.push({
            tick: this.getNextUpdateTick(mainHandler.getTicksElapsed() + this.ping),
            actionType: actionType,
            ratio: ratio,
            param: param,
            xCoord: xCoord,
            yCoord: yCoord
        })
    }
}

function ReplayLogger() {
    this.spawnLogs = [];
    this.tickLogs = [];
    this.underReplay = false;
    this.init = function() {
        this.spawnLogs = [];
        this.tickLogs = [];
        this.underReplay = false;
    }
    this.addLogs = function(actionType, authorID, targetID, ratio, xCoord, yCoord) {
        if (clientStatus == 2) return 0
        var log = {
            time: inSpawn ? mainHandler.multiplayerHandler.packetsReceived : mainHandler.getTicksElapsed() + 1,
            actionType: actionType,
            authorID: authorID,
            targetID: targetID,
            ratio: ratio,
            xCoord: xCoord,
            yCoord: yCoord
        }
        if (inSpawn) this.spawnLogs.push(log)
        else this.tickLogs.push(log)
    }
    this.exportReplay = function() {
        var replayFile = {
                replay: true,
                numberPlayers: playerCount,
                myID: myID,
                modeID: gamemode,
                mapID: currentMapID,
                isContest: isContest,
                seedMap: currentMapSeed,
                seedSpawn: currentSeedSpawn,
                selectableSpawn: freeSpawn,
                mapName: mapInfo.getMapName(),
                description: customJSON.isCustomJSON ? ["Match Replay", ...customJSON.data.description] : ["Match Replay"],
                playerColor: playerInfo.map(player => player.color),
                playerName: playerInfo.map(player => player.name),
                playerElo: gamemode == 8 ? playerInfo.map(player => player.elo) : [],
                playerStatus: playerInfo.map(player => player.status),
                spawnLogs: this.spawnLogs,
                tickLogs: this.tickLogs,
                mapBase64: customJSON.isCustomJSON ? customJSON.data.mapBase64 : "",
            },
            modeName = gamemode <= 6 ? (gamemode + 2).toString() + " Teams" : gamemode === 8 ? "VS " + nickname[1-myID] : gamemode === 9 ? "Zombie" : "Battle Royale",
            fileName = `${mapInfo.getMapName()} ${modeName} Replay.json`;
        const a = document.createElement('a');
        const type = fileName.split(".").pop();
        a.href = URL.createObjectURL(new Blob([JSON.stringify(replayFile)], {
            type:`text/${type === "txt" ? "plain" : type}`
        }));
        a.download = fileName;
        a.click();
    }
    this.update = function() {
        var currentActions;
        if (inSpawn) currentActions = customJSON.data.spawnLogs.filter(action => action.time == mainHandler.singleplayerHandler.spawnTick); //change to spawnTicks?
        else currentActions = customJSON.data.tickLogs.filter(action => action.time == mainHandler.getTicksElapsed() + 1);
        for (var action of currentActions) {
            if (action.actionType == 0) processAction.pendingAttack(action.authorID, action.ratio, action.targetID);
            else if (action.actionType == 1) processAction.pendingSetLocation(action.authorID, action.ratio, action.xCoord, action.yCoord);
            else if (action.actionType == 2) processAction.pendingCancel(action.authorID, action.targetID);
            else if (action.actionType == 3) processAction.onLeave(action.authorID);
            else if (action.actionType == 4) infoRenderer.showIcon(action.authorID, 0, action.targetID);
            else if (action.actionType == 5) processAction.surrender(action.authorID);
            else if (action.actionType == 6) processAction.pendingPeace(action.authorID, action.targetID);
            else if (action.actionType == 7) processAction.pendingCancelBoat(action.authorID, action.targetID);
            else if (action.actionType == 8) void(0)
            else if (action.actionType == 9) announcements.newEmojiMessage(action.authorID, action.targetID, action.ratio);
            else if (action.actionType == 10) void(0)
        }
    };
}

function SpawnHider() {
    var revealTick = 3;
    this.init = function() {
        this.decoySpawn = new Uint16Array(2);
        this.chosenSpawn = new Uint16Array(2);
    }
    this.addSpawn = function(xCoord, yCoord) {
        if (spawnTime == mainHandler.multiplayerHandler.packetsReceived) {
            this.chosenSpawn[0] = xCoord;
            this.chosenSpawn[1] = yCoord;
            dataEncoder.setLocation(1E3, xCoord, yCoord);
        } else {
            if (this.chosenSpawn[0] == 0 && this.chosenSpawn[1] == 0) {
                this.chosenSpawn[0] = xCoord;
                this.chosenSpawn[1] = yCoord;
            } else {
                this.decoySpawn[0] = this.chosenSpawn[0];
                this.decoySpawn[1] = this.chosenSpawn[1];
                this.chosenSpawn[0] = xCoord;
                this.chosenSpawn[1] = yCoord;
            }
            if (mainHandler.multiplayerHandler.packetsReceived >= spawnTime - revealTick && this.decoySpawn[0] != 0 && this.decoySpawn[1] != 0) {
                dataEncoder.setLocation(1E3, this.decoySpawn[0], this.decoySpawn[1]);
            }
        }
    }
    this.setSpawn = function(spawnTick) {
        if (spawnTick == spawnTime && this.chosenSpawn[0] != 0 && this.chosenSpawn[1] != 0) {
            dataEncoder.setLocation(1E3, this.chosenSpawn[0], this.chosenSpawn[1]);
        } else if (spawnTick == spawnTime - revealTick && this.decoySpawn[0] != 0 && this.decoySpawn[1] != 0) {
            dataEncoder.setLocation(1E3, this.decoySpawn[0], this.decoySpawn[1]);
        }
    }
}

function ModPanel() {
    function createInputBar(modMenu) {
        passwordBar = {
            input: document.createElement("INPUT"),
            visible: false,
            color: blackSemiTransparent2
        }
        passwordBar.input.setAttribute("type", "text");
        passwordBar.input.value = modHandler.clientHash;
        passwordBar.input.style.textAlign = "center"
        passwordBar.input.style.backgroundColor = blackSemiTransparent2;
        passwordBar.input.style.border = "3px solid " + whiteRGB2;
        passwordBar.input.style.color = whiteRGB2;
        passwordBar.input.style.position = "absolute";
        passwordBar.input.readOnly = false;
        passwordBar.input.style.left = Math.floor(0.5 * headerHeight + modMenu.boxDimensions[0]) + "px";
        passwordBar.input.style.top = Math.floor(modMenu.boxDimensions[1] + .25 * headerHeight) + "px"
        passwordBar.input.addEventListener("input", () => onInput())
        passwordBar.input.style.font = mainCanvasCtx.font;
        passwordBar.input.style.padding = Math.floor(.3 * fontSize) + "px 5px";
        passwordBar.input.style.width = Math.floor(modMenu.boxDimensions[2] - headerHeight * 2) + "px"
    }
    function onInput() {
        var clientHash = 0;
        try {
            clientHash = parseInt(passwordBar.input.value)
            if (isNaN(clientHash) || clientHash < 0 || clientHash >= 2**22) throw new Error()
        } catch (e) {
            passwordBar.input.style.backgroundColor = redMoreOpaque
            return 0
        }
        passwordBar.input.style.backgroundColor = blackSemiTransparent
        modHandler.clientHash = clientHash;
        mainSettings.buttons[4].buttonClass.drawCanvasImage();
    }
    function drawSettingsBoxes(modMenu, settingID, startX, startY, width, height) {
        /*if (mod.modSettings[settingID]) {
            mainCanvasCtx.fillStyle = greenDarkMoreOpaque;
            mainCanvasCtx.fillRect(startX, startY, width, height);
            mainCanvasCtx.fillStyle = whiteRGB2;
        }*/
        mainCanvasCtx.strokeRect(startX, startY, width, height);
        mainCanvasCtx.fillText(getSettingLabels(settingID), Math.floor(startX + .5 * width), Math.floor(startY + .55 * height));
    }
    function getSettingLabels(settingID) {
        if (settingID == 0) return `${maxEntities} Entities`;
        else if (settingID == 1) return `Mod Interest ${modHandler.modInterest ? "On" : "Off"}`;
        else if (settingID == 2) return `Mod Tax ${modHandler.modTax ? "On" : "Off"}`;
        else if (settingID == 3) return `${modHandler.boatSpeed == 2 ? "Normal" : modHandler.boatSpeed == 1 ? "Faster" : "Fastest"} Boats`;
        else if (settingID == 4) return `Neutral Bots ${modHandler.neutralBots ? "On" : "Off"}`;
        else if (settingID == 5) return `Human Bots ${modHandler.humanBots ? "On" : "Off"}`;
        else if (settingID == 6) return `${modHandler.customMap ? "Custom" : "Normal"} MP Maps`;
        else if (settingID == 7) return modHandler.customGamemode <= 6 ? `${modHandler.customGamemode + 2} Teams Only`: modHandler.customGamemode == 7 ? `BR Only`: modHandler.customGamemode == 9 ? `Zombie Only` : modHandler.customGamemode == 10 ? `NFS Only` : "Default MP Mode";
        else if (settingID == 8) return `Boat Lines ${modHandler.boatLines ? "On" : "Off"}`;
        else if (settingID == 9) return `SP Latency ${modHandler.latency ? "On" : "Off"}`;
        else if (settingID == 10) return `Font Mod ${modHandler.font ? "On" : "Off"}`; //Change to 3 Stages future, Off, Enlarged, Red Font + Enlarged
        else if (settingID == 11) return modHandler.public ? "Unavailable" : `Spawn Hider ${modHandler.hideSpawn ? "On" : "Off"}`;
        else if (settingID == 12) return modHandler.public ? "Unavailable" : `Messiah ${modHandler.bot ? "On" : "Off"}`;
        else if (settingID == 13) return "Placeholder";
    }
    var headerHeight, settingsOnLeftCol, settingBoxHeight, settingBoxWidth, fontSize, passwordBar;
    /*this.settingLabels = ['512 Entities', 'Normal Interest', 'Normal Tax', 'Normal Boats', 'No Neutral Bots', 'Human Bots', 'Normal Maps', 
        'Default Modes', 'No Boat Lines', 'No SP Latency', 'No Font Mod', 'Cheats Disabled', 'Placeholder', 'Placeholder'];*/
    this.settingCount = 14;
    this.visible = false;
    this.boxDimensions = [0, 0, 0, 0];
    this.init = function() {
        this.visible = true;
        this.setCanvasVariables();
        createInputBar(this);
        this.toggleVisibility(true);
        //mod.init()
        mainHandler.canvasDirty = true
    };
    this.setCanvasVariables = function() {
        settingsOnLeftCol = divideFloor(this.settingCount + this.settingCount % 2, 2),
        maxHeight = mainCanvasHeight - settingsOnLeftCol * bufferLength;
        this.boxDimensions[2] = isZoom ? Math.floor(.75 * minDim) : Math.floor(.5 * minDim);
        this.boxDimensions[3] = Math.floor(1.2 * this.boxDimensions[2]);
        if (this.boxDimensions[3] > maxHeight) {
            this.boxDimensions[3] = maxHeight;
            this.boxDimensions[2] = Math.floor(maxHeight / 1.2);
        }
        this.boxDimensions[0] = Math.floor((mainCanvasWidth - this.boxDimensions[2]) / 2);
        this.boxDimensions[1] = Math.floor((mainCanvasHeight - this.boxDimensions[3]) / 2)
        headerHeight = Math.floor(.13 * this.boxDimensions[3]);
        settingBoxHeight = (this.boxDimensions[3] - headerHeight - (settingsOnLeftCol + 1) * bufferLength) / settingsOnLeftCol,
        settingBoxWidth = Math.floor((this.boxDimensions[2] - 3 * bufferLength) / 2);
        fontSize = Math.floor(.45 * settingBoxHeight)
    };
    this.onPointermove = function(xPos, yPos) {
        return xPos < this.boxDimensions[0] || yPos < this.boxDimensions[1] || xPos > this.boxDimensions[0] + this.boxDimensions[2] || yPos > this.boxDimensions[1] + this.boxDimensions[3] ? false : true
    };
    this.mouseDown = function(xPos, yPos) {
        mainHandler.canvasDirty = true;
        if (xPos < this.boxDimensions[0] || yPos < this.boxDimensions[1] || xPos > this.boxDimensions[0] + this.boxDimensions[2] || yPos > this.boxDimensions[1] + this.boxDimensions[3]) {
            this.toggleVisibility(false)
            return true;
        }
        if (yPos < this.boxDimensions[1] + headerHeight) {
            if (xPos > this.boxDimensions[0] + this.boxDimensions[2] - 1.2 * headerHeight) this.toggleVisibility(false);
            return true;
        }
        var settingID = Math.floor(settingsOnLeftCol * (yPos - this.boxDimensions[1] - headerHeight) / (this.boxDimensions[3] - headerHeight));
        settingID = 0 > settingID ? 0 : settingID > settingsOnLeftCol - 1 ? settingsOnLeftCol - 1 : settingID;
        xPos > this.boxDimensions[0] + this.boxDimensions[2] / 2 && (settingID += settingsOnLeftCol);
        if (settingID >= this.settingCount) return true;
        else {
            if (settingID == 6 && currentMapID != customMapID) {
               alert('Please Load A Custom Map First, Nerd.')
               return 0
            }
            /*
            mod.modSettings[settingID] = 1 - mod.modSettings[settingID];
            var clientHash = 0;
            for (let bitIndex = 0; bitIndex < this.settingCount; bitIndex++) {
                clientHash += mod.modSettings[bitIndex] * (2**(21-bitIndex))
            }
            for (let labelIndex = 0; labelIndex < 22 - this.settingCount; labelIndex++) {
                clientHash += mod.clientHash & (2**labelIndex)
            }
            passwordBar.input.value = mod.clientHash = clientHash;
            */
            onInput()
        }
        return true
    };
    this.drawCanvasImage = function() {
        mainCanvasCtx.lineWidth = 2;
        mainCanvasCtx.textAlign = centerAlign;
        mainCanvasCtx.textBaseline = middleAlign;
        mainCanvasCtx.font = fontWeightBold + fontSize + fontSizeArial;
        mainCanvasCtx.fillStyle = blackMoreOpaque;
        mainCanvasCtx.fillRect(this.boxDimensions[0], this.boxDimensions[1], this.boxDimensions[2], this.boxDimensions[3]);
        mainCanvasCtx.fillStyle = greenDarkMoreOpaque;
        mainCanvasCtx.fillRect(this.boxDimensions[0], this.boxDimensions[1], this.boxDimensions[2], headerHeight);
        mainCanvasCtx.strokeStyle = whiteRGB2;
        mainCanvasCtx.strokeRect(this.boxDimensions[0], this.boxDimensions[1], this.boxDimensions[2], this.boxDimensions[3]);
        mainCanvasCtx.fillStyle = whiteRGB2;
        for (var settingIndex = settingsOnLeftCol - 1; 0 <= settingIndex; settingIndex--) {
            var yOffset = Math.floor(this.boxDimensions[1] + headerHeight + bufferLength + settingIndex * (settingBoxHeight + bufferLength));
            drawSettingsBoxes(this, settingIndex, this.boxDimensions[0] + bufferLength, yOffset, settingBoxWidth, settingBoxHeight);
            drawSettingsBoxes(this, settingIndex + settingsOnLeftCol, this.boxDimensions[0] + settingBoxWidth + 2 * bufferLength, yOffset, settingBoxWidth, settingBoxHeight)
        }
        gameButtons.drawMenuSymbol(Math.floor(this.boxDimensions[0] + this.boxDimensions[2] - .8 * headerHeight), Math.floor(this.boxDimensions[1] + .25 * headerHeight), Math.floor(.5 * headerHeight));
        mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
    };
    this.toggleVisibility = function(visibility) {
        if (passwordBar.visible !== visibility) {
            if (visibility) document.body.appendChild(passwordBar.input)
            else document.body.removeChild(passwordBar.input)
            passwordBar.visible = visibility
        }
        this.visible = visibility;
        if (!visibility && !gameStateManager.getState()) nameInputBar.toggleVisibility(0, true)
    };
}

function Messiah() {

}