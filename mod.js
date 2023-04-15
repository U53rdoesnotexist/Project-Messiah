var modHandler, latencySimulator, replayLogger, spawnHelper, cheat, extendedActions;
function modConstruct(){
    modHandler = new ModHandler;
    latencySimulator = new LatencySimulator;
    replayLogger = new ReplayLogger;
    spawnHelper = new SpawnHelper;
    extendedActions = new ExtendedActions;
    modHandler.updateCheatModules();
}

function ModHandler() {
    this.public = false;
    this.cycle, this.tick;
    this.editDiscordLinks = true;

    this.clientHash = 0;
    this.modInterest = false;
    this.modTax = false;
    this.boatSpeed = 2;
    this.neutralBots = false;
    this.humanBots = true;
    this.customMap = -1;
    this.customGamemode = 11;
    this.boatTracker = true;
    this.latency = 5;
    this.font = 2;
    this.lateral = false;
    this.intelli = false;
    this.alwaysWin = false;
    this.spawnMod = 0;
    this.bot = 0;
    if (this.public) {
        this.bot = this.alwaysWin = this.intelli = false;
        this.spawnMod = this.font = 0;
    }

    this.main = function() {
        if (this.bot >= 3) cheat.main();
    }
    this.scriptGameInit = function() {
        this.cycle = 1;
        this.tick = 0;
        if (!singleplayer && this.public) {
            this.font = getMin(2, this.font);
            this.spawnMod = 0;
            this.bot = 0;
        }
        if (!singleplayer) spawnHelper.init();
        if (this.bot) cheat.init();
        replayLogger.init()
    };
    this.scriptSpawnTick = function() {
        if (modHandler.spawnMod) spawnHelper.setSpawn(mainHandler.multiplayerHandler.packetsReceived)
        if (modHandler.bot >= 3) cheat.spawnTick()
    };
    this.scriptGameTick = function() {
        this.tick++;
        if (this.tick >= 100) {
            this.cycle++;
            this.tick %= 100;
        }
        if (this.latency) latencySimulator.update();
        if (this.bot) cheat.update()
    };
    this.density = function(id) {
        return troops[id] / land[id]
    };
    this.getDistance = function(xOffset, yOffset) {
        return (xOffset**2 + yOffset**2) ** 0.5
    };
    this.getTravelDistance = function(xOffset, yOffset) {
        return Math.abs(xOffset) + Math.abs(yOffset);
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
    this.changeDiscordLink = function(link) { 
        if (!this.editDiscordLinks) return link
        const discordRegex = /discord\.gg\/[a-zA-Z0-9]+/gi;
        const customText = 'discord.gg/3aF93G23rV';
        return link.replace(discordRegex, customText);
    }
    this.updateCheatModules = function() {
        if (modHandler.bot == 0) cheat = null;
        else if (modHandler.bot == 1) cheat = new Messiah;
        else if (modHandler.bot >= 2) cheat = new Multiboxing;
    }
}

function ExtendedActions() {
    var currentActionID = 1001;
    this.init = function() {
        /*It's modded
        if (modHandler.modInterest || modHandler.modTax || modHandler.boatSpeed != 2 || modHandler.neutralBots || !modHandler.humanBots || modHandler.customMap != -1 || modHandler.customGamemode != 11) {
            dataEncoder.setLocation()
        }*/
    }
    this.changeActionID = function() {
        currentActionID++;
        if (currentActionID >= 1024) currentActionID = 1001;
    }
    this.getActionID = function() {
        return currentActionID;
    }
}

function LatencySimulator() {
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
            tick: this.getNextUpdateTick(mainHandler.getTicksElapsed() + modHandler.latency),
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
            modeName = gamemode <= 6 ? (gamemode + 2).toString() + " Teams" : gamemode === 8 ? "VS " + nicknames[1-myID] : gamemode === 9 ? "Zombie" : "Battle Royale",
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

function SpawnHelper() {
    function penalty(spawnX, spawnY) {
        var pen = 0, range = (currentMapID == 1 ? 65 : currentMapID == 3 ? 50 : [4, 5, 6].includes(currentMapID) ? 70 : [8, 12, 14].includes(currentMapID) ? 55 : [10, 13].includes(currentMapID) ? 45 : Math.round((currentMapHeight * currentMapWidth / entityCount) ** 0.5));
        for (let x = spawnX - range; x <= spawnX + range; x++) {
            for (let y = spawnY - range; y <= spawnY + range; y++) {
                if (!pixel.isNeutral(pixel.toIndex(x, y))) {
                    let dist = modHandler.getDistance(x - spawnX, y - spawnY);
                    pen += (dist >= range ? 0 : (range - dist) ** 0.67)
                }
            }
        }
        if ([1, 4, 13].includes(currentMapID)) pen *= (1 + (modHandler.getDistance(spawnX - currentMapWidth / 2, spawnY - currentMapHeight / 2) / modHandler.getDistance(currentMapWidth/2, currentMapHeight/2))**0.5)
        return Math.round(pen);
    }

    var revealTick = 3,
        bufferTick = 0;
    this.init = function() {
        this.decoyOrBackup = new Uint16Array(2);
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
                this.decoyOrBackup[0] = this.chosenSpawn[0];
                this.decoyOrBackup[1] = this.chosenSpawn[1];
                this.chosenSpawn[0] = xCoord;
                this.chosenSpawn[1] = yCoord;
            }
            if (modHandler.spawnMod == 1) {
                if (mainHandler.multiplayerHandler.packetsReceived >= spawnTime - revealTick && this.decoyOrBackup[0] != 0 && this.decoyOrBackup[1] != 0) {
                    dataEncoder.setLocation(1E3, this.decoyOrBackup[0], this.decoyOrBackup[1]);
                }
            }
        }
    }
    this.setSpawn = function(spawnTick) {
        if (modHandler.spawnMod == 1) {
            if (spawnTick == spawnTime - bufferTick && this.chosenSpawn[0] != 0 && this.chosenSpawn[1] != 0) {
                dataEncoder.setLocation(1E3, this.chosenSpawn[0], this.chosenSpawn[1]);
            } else if (spawnTick == spawnTime - revealTick && this.decoyOrBackup[0] != 0 && this.decoyOrBackup[1] != 0) {
                dataEncoder.setLocation(1E3, this.decoyOrBackup[0], this.decoyOrBackup[1]);
            }
        } else if (modHandler.spawnMod == 2 && playerCount == 2 && spawnTick >= spawnTime - bufferTick) {
            if (xMin[1 - myID]) {
                if (modHandler.getTravelDistance(this.chosenSpawn[0] - xMin[1 - myID] - 1, this.chosenSpawn[1] - yMin[1 - myID] - 2) <= Math.sqrt(currentMapHeight*currentMapWidth)/20) {
                    dataEncoder.setLocation(1E3, this.decoyOrBackup[0], this.decoyOrBackup[1]);
                }
            } else dataEncoder.setLocation(1E3, this.chosenSpawn[0], this.chosenSpawn[1]);
        }
        
    }
    this.spawnGenerator = function() {
        var spawns = [];
        for (let x = Math.round(currentMapWidth / 8); x < currentMapWidth; x += Math.round(currentMapWidth / 8)) {
            for (let y = Math.round(currentMapHeight / 8); y < currentMapHeight; y += Math.round(currentMapHeight / 8)) {
                if (pixel.canOwn(pixel.toIndex(x, y))) {
                    let spawn = {
                        x: x,
                        y: y,
                        penalty: 0,
                        min: !1,
                    }
                    spawns.push(spawn)
                }
            }
        }
        for (let spawn of spawns) {
            spawn.penalty = penalty(spawn.x, spawn.y);
            while (!spawn.min) {
                var up = penalty(spawn.x, spawn.y + 2), down = penalty(spawn.x, spawn.y - 2),
                    left = penalty(spawn.x - 2, spawn.y), right = penalty(spawn.x + 2, spawn.y),
                    penalties = [spawn.penalty, up, down, left, right],
                    side = penalties.findIndex(penalty => penalty == Math.min(...penalties));
                spawn.penalty = Math.min(...penalties);
                switch (side) {
                    case 0:
                        spawn.min = !0
                        break;
                    case 1:
                        spawn.y += 2
                        break;
                    case 2:
                        spawn.y -= 2
                        break;
                    case 3:
                        spawn.x -= 2
                        break;
                    case 4:
                        spawn.x += 2
                        break;
                }
            }
        }   
        for (let spawnA of spawns) {
            for (let spawnB of spawns) {
                if (modHandler.getDistance(spawnA.x - spawnB.x, spawnA.y - spawnB.y) <= 5 && spawnA !== spawnB) spawns = spawns.filter(spawn => spawn != spawnB)
            }
        }
        spawns.sort(function (a, b) {
            return (a.penalty > b.penalty) ? 1 : ((b.penalty > a.penalty) ? -1 : 0)
        });
        return spawns;
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
        passwordBar.input.style.left = Math.floor(.5 * modMenu.boxDimensions[2] + modMenu.boxDimensions[0]) + "px";
        passwordBar.input.style.right = Math.floor(mainCanvasWidth - modMenu.boxDimensions[0] - modMenu.boxDimensions[2] + headerHeight) + "px";
        passwordBar.input.style.top = Math.floor(modMenu.boxDimensions[1] + .25 * headerHeight) + "px"
        passwordBar.input.style.bottom = Math.floor(mainCanvasHeight - modMenu.boxDimensions[1] - .75 * headerHeight) + "px"
        passwordBar.input.addEventListener("input", () => onInput())
        passwordBar.input.style.font = mainCanvasCtx.font;
        passwordBar.input.style.padding = Math.floor(.3 * fontSize) + "px 5px";
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
    function drawSettingsBoxes(settingID, startX, startY, width, height) {
        if (clientStatus >= 1 && (settingID <= 7 || settingID == 15 && modHandler.bot > 1)) {
            if (getButtonColor(settingID)) {
                mainCanvasCtx.fillStyle = greenDarkerMoreOpaque;
                mainCanvasCtx.fillRect(startX, startY, width, height);
                mainCanvasCtx.fillStyle = gray128RGB;
            } else {
                mainCanvasCtx.fillStyle = blackSemiTransparent2;
                mainCanvasCtx.fillRect(startX, startY, width, height);
                mainCanvasCtx.fillStyle = gray128RGB;
            }
        } else if (getButtonColor(settingID)) {
            mainCanvasCtx.fillStyle = greenDarkMoreOpaque;
            mainCanvasCtx.fillRect(startX, startY, width, height);
            mainCanvasCtx.fillStyle = whiteRGB2;
        } else mainCanvasCtx.fillStyle = whiteRGB2;
        
        mainCanvasCtx.strokeRect(startX, startY, width, height);
        mainCanvasCtx.fillText(getSettingLabels(settingID), Math.floor(startX + .5 * width), Math.floor(startY + .55 * height));
    }
    function getSettingLabels(settingID) {
        if (settingID == 0) return `${maxEntities} Entities`;
        else if (settingID == 1) return `Mod Interest ${modHandler.modInterest ? "On" : "Off"}`;
        else if (settingID == 2) return `Mod Tax ${modHandler.modTax ? "On" : "Off"}`;
        else if (settingID == 3) return `${modHandler.boatSpeed == 2 ? "Normal" : modHandler.boatSpeed == 1 ? "Faster" : "Very Fast"} Boats`;
        else if (settingID == 4) return `Neutral Bots ${modHandler.neutralBots ? "On" : "Off"}`;
        else if (settingID == 5) return `Human Bots ${modHandler.humanBots ? "On" : "Off"}`;
        else if (settingID == 6) return (modHandler.customMap == -1 ? "Normal Maps" : modHandler.customMap < customMapID ? mapInfo.getValueByID(modHandler.customMap).name: "Custom Maps") + " Only";
        else if (settingID == 7) return modHandler.customGamemode <= 6 ? `${modHandler.customGamemode + 2} Teams Only`: modHandler.customGamemode == 7 ? `BR Only`: modHandler.customGamemode == 9 ? `Zombie Only` : modHandler.customGamemode == 10 ? `NoFullSend Only` : "Default MP Mode";
        else if (settingID == 8) return `Boat Tracker ${modHandler.boatTracker ? "On" : "Off"}`;
        else if (settingID == 9) return `${!modHandler.latency ? "SP Lag Sim Off" : "SP Lag: " + modHandler.latency.toString() + " Ticks"}`;
        else if (settingID == 10) return !modHandler.font ? "Font Mod Off" : modHandler.font == 1 ? "Enlarged Font" : "RGB fonts";
        else if (settingID == 11) return `${modHandler.lateral ? "Uniform" : "Normal"} Hotkeys`;
        else if (settingID == 12) return modHandler.public ? "Unavailable" : "IntelliAttack " + (modHandler.intelli ? "On" : "Off");
        else if (settingID == 13) return modHandler.public ? "Unavailable" : `Always Win ${modHandler.alwaysWin ? "On" : "Off"}`
        else if (settingID == 14) return modHandler.public ? "Unavailable" : modHandler.spawnMod == 0 ? "Spawn Mod Off" : modHandler.spawnMod == 1 ? "Decoy Spawn" : "B2B Evader";
        else if (settingID == 15) return modHandler.public ? "Unavailable" : !modHandler.bot ? "Cheats Off" : modHandler.bot == 1 ? "Messiah Mode" : modHandler.bot == 2 ? "Smart Multiboxing" : modHandler.bot == 3 ? "AI Mode" : "Operation Neptune";
        else return "Unavailable"
    }
    function changeSettings(settingID) {
        if (settingID == 0) maxEntities *= (maxEntities >= 4096 ? 1/8 : 2);
        else if (settingID == 1) modHandler.modInterest = !modHandler.modInterest;
        else if (settingID == 2) modHandler.modTax = !modHandler.modTax;
        else if (settingID == 3) modHandler.boatSpeed -= (modHandler.boatSpeed > 0 ? 1 : -2);
        else if (settingID == 4) modHandler.neutralBots = !modHandler.neutralBots;
        else if (settingID == 5) modHandler.humanBots = !modHandler.humanBots;
        else if (settingID == 6) modHandler.customMap = (modHandler.customMap == customMapID - 1 && currentMapID != customMapID || modHandler.customMap == customMapID ? -1 : modHandler.customMap + 1);
        else if (settingID == 7) modHandler.customGamemode += (modHandler.customGamemode == 7 ? 2 : modHandler.customGamemode >= 11 ? -11 : 1);
        else if (settingID == 8) modHandler.boatTracker = !modHandler.boatTracker;
        else if (settingID == 9) modHandler.latency += (modHandler.latency >= 7 ? -7 : 1);
        else if (settingID == 10) modHandler.font = (modHandler.font >= (clientStatus >= 1 && !singleplayer && modHandler.public ? 1 : 2) ? 0 : modHandler.font + 1);
        else if (settingID == 11) modHandler.lateral = !modHandler.lateral;
        else if (settingID == 12 && !modHandler.public) modHandler.intelli = !modHandler.intelli;
        else if (settingID == 13 && !modHandler.public) modHandler.alwaysWin = !modHandler.alwaysWin;
        else if (settingID == 14 && !modHandler.public) {
            modHandler.spawnMod += (modHandler.spawnMod == 2 ? -2 : 1)
            if (modHandler.spawnMod) spawnHelper.init()
        } else if (settingID == 15 && !modHandler.public) {
            if ([0,1].includes(modHandler.bot) && clientStatus >= 1) modHandler.bot = 1 - modHandler.bot
            else modHandler.bot += (modHandler.bot >= 4 ? -4 : 1)
            modHandler.updateCheatModules();
        }
        else return false
    }
    function getButtonColor(settingID) {
        if (settingID == 0) return maxEntities != 512;
        else if (settingID == 1) return modHandler.modInterest;
        else if (settingID == 2) return modHandler.modTax;
        else if (settingID == 3) return modHandler.boatSpeed != 2;
        else if (settingID == 4) return modHandler.neutralBots;
        else if (settingID == 5) return !modHandler.humanBots;
        else if (settingID == 6) return modHandler.customMap != -1;
        else if (settingID == 7) return modHandler.customGamemode != 11;
        else if (settingID == 8) return modHandler.boatTracker;
        else if (settingID == 9) return modHandler.latency;
        else if (settingID == 10) return modHandler.font;
        else if (settingID == 11) return modHandler.lateral;
        else if (settingID == 12) return modHandler.intelli;
        else if (settingID == 13) return modHandler.alwaysWin;
        else if (settingID == 14) return modHandler.spawnMod;
        else if (settingID == 15) return modHandler.bot;
        else return false
    }
    var headerHeight, settingsOnLeftCol, settingBoxHeight, settingBoxWidth, fontSize, passwordBar;
    this.settingCount = 16;
    this.visible = false;
    this.boxDimensions = [0, 0, 0, 0];
    this.init = function() {
        this.visible = true;
        this.setCanvasVariables();
        createInputBar(this);
        this.toggleVisibility(true);
        this.drawCanvasImage();
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
            if (clientStatus >= 1 && (settingID <= 7 || settingID == 15 && modHandler.bot > 1)) return true;
            changeSettings(settingID);
            onInput()
        }
        return true
    };
    this.drawCanvasImage = function() {
        mainCanvasCtx.lineWidth = 2;
        mainCanvasCtx.textAlign = centerAlign;
        mainCanvasCtx.textBaseline = middleAlign;
        mainCanvasCtx.fillStyle = blackMoreOpaque;
        mainCanvasCtx.fillRect(this.boxDimensions[0], this.boxDimensions[1], this.boxDimensions[2], this.boxDimensions[3]);
        mainCanvasCtx.fillStyle = greenDarkMoreOpaque;
        mainCanvasCtx.fillRect(this.boxDimensions[0], this.boxDimensions[1], this.boxDimensions[2], headerHeight);
        mainCanvasCtx.strokeStyle = whiteRGB2;
        mainCanvasCtx.strokeRect(this.boxDimensions[0], this.boxDimensions[1], this.boxDimensions[2], this.boxDimensions[3]);
        mainCanvasCtx.fillStyle = whiteRGB2;
        mainCanvasCtx.font = fontWeightBold + 1.6 *fontSize + fontSizeArial;
        mainCanvasCtx.fillText("Mod Menu", this.boxDimensions[0] + this.boxDimensions[2] / 4, this.boxDimensions[1] + .53 * headerHeight)
        mainCanvasCtx.font = fontWeightBold + fontSize + fontSizeArial;
        for (var settingIndex = settingsOnLeftCol - 1; 0 <= settingIndex; settingIndex--) {
            var yOffset = Math.floor(this.boxDimensions[1] + headerHeight + bufferLength + settingIndex * (settingBoxHeight + bufferLength));
            drawSettingsBoxes(settingIndex, this.boxDimensions[0] + bufferLength, yOffset, settingBoxWidth, settingBoxHeight);
            drawSettingsBoxes(settingIndex + settingsOnLeftCol, this.boxDimensions[0] + settingBoxWidth + 2 * bufferLength, yOffset, settingBoxWidth, settingBoxHeight)
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

function Multiboxing() {
    function newTeamGame() {
        if (clientStatus >= 1) leaveGame();
        setTimeout(function () {
            nameInput.enterPreLobby();
            setTimeout(() => joinTeamGame(), 1000)
        }, 500);
    }
    function joinTeamGame() {
        const lobbyGames = lobby.getLobbyGames();
        if (lobbyGames == undefined) setTimeout(() => joinTeamGame(), 1000);
        else if (lobbyGames.find(game => game.gameID == lobby.getGameSelected() && game.gamemode <= 6 && (modHandler.bot == 4 || !game.isContest)) != undefined) return 1;
        else { 
            for (var game of lobbyGames) {
                if (game.gamemode <= 6 && game.gameID != lobby.getGameSelected() && (modHandler.bot == 4 || !game.isContest) && game.timeLeft >= 2) {
                    dataEncoder.joinGame(game.gameID);
                    lobby.setGameSelected(game.gameID);
                    return 1;
                }
            }
            setTimeout(() => joinTeamGame(), 1000);
        }
    }
    function checkLastActiveTime() {
        if (new Date().getTime() >= lastActiveTime + 90E3) {
            location.reload();
        }
        setTimeout(() => checkLastActiveTime() , 120E3);
    }
    function centroid(id) {
        return [(xMin[id] + xMax[id])/2, (yMin[id] + yMax[id])/2];
    }
    var allies, allyIndex, spawns, tag = ['', "GΡT", 'еz'][2], targetTag = "UNION", targets, targetID, lastActiveTime = new Date().getTime();
    this.main = function() {
        const name = modHandler.bot == 2 ? `[${tag}] ${Math.floor(Math.random()*999)+1}` : modHandler.bot == 3 ? `Terri[${tag}]-${Math.floor(Math.random()*999)+1}` : modHandler.bot == 4 && `[${tag}] fk ${targetTag.toLowerCase()}`;
        nameInput.setInput(name);
        saveUsername(name);
        if (modHandler.bot >= 3) {
            lastActiveTime = new Date().getTime();
            checkLastActiveTime();
            setTimeout(() => newTeamGame(), 5000)
        }
        
    }
    this.init = function() {
        allies = [];
        targets = [];
        nicknames.forEach(function (element, index) {
            if (element.includes(tag)) allies.push(index);
            if (index == myID) allyIndex = allies.length -1;
            if (modHandler.bot == 4) {
                
                const nickname = element.toUpperCase();
                if (nickname.indexOf(`[${targetTag}]`) == nickname.indexOf('[') && nickname.indexOf('[') != -1) targets.push(index)
            }
        });
        if (modHandler.bot == 4) {
            if (allyIndex >= 4 * targets.length) newTeamGame();
            targetID = targets[Math.floor(allyIndex / 4)];

        } else if ([2,3].includes(modHandler.bot)) {
            spawns = [];
            if (freeSpawn) {
                spawns = spawnHelper.spawnGenerator();
                if (spawns.length >= allies.length) spawns.splice(allies.length, spawns.length - allies.length);
            }
        }
        lastActiveTime = new Date().getTime()
    }
    this.spawnTick = function() {
        if ([2,3].includes(modHandler.bot) && land[myID] == 0 && inSpawn && 1 === mainHandler.multiplayerHandler.packetsReceived) {
            if (allyIndex < spawns.length) {
                setTimeout(() => dataEncoder.setLocation(1E3, spawns[allyIndex].x, spawns[allyIndex].y), 1000)
            }
        } else if (modHandler.bot == 4 && inSpawn && spawnTime - 1 <= mainHandler.multiplayerHandler.packetsReceived) {
            const direction = allyIndex % 4, offsets = [[1, 0], [3, 1], [2, 3], [0, 2]][direction];
            dataEncoder.setLocation(1E3, xMin[targetID] + offsets[0], yMin[targetID] + offsets[1]);
        }
    }
    this.update = function() {
        if (modHandler.bot == 3) newTeamGame()
        else if (modHandler.bot == 4) {
            if (!isAlive[myID] || !isAlive[targetID] || modHandler.density(targetID) >= 150 || mainHandler.getTicksElapsed() >= 1000 || modHandler.getDistance(centroid(targetID)[0] - centroid(myID)[0], centroid(targetID)[1] - centroid(myID)[1]) >= 30) newTeamGame()
            if (modHandler.cycle == 1 && modHandler.tick == 22) dataEncoder.attack(500, myID);
            if (modHandler.tick % 20 == 0 && modHandler.density(myID) >= 1.5) dataEncoder.attack(800, targetID)
        }
    }
}