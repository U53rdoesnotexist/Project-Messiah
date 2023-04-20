var modHandler, discordWeb, latencySimulator, replayLogger, spawnHelper, cheat, extendedActions, distance;
function modConstruct(){
    modHandler = new ModHandler;
    discordWeb = new DiscordWeb;
    latencySimulator = new LatencySimulator;
    replayLogger = new ReplayLogger;
    spawnHelper = new SpawnHelper;
    extendedActions = new ExtendedActions;
    modHandler.updateCheatModules();
    distance = new Distance;
}

function ModHandler() {
    this.public = false;
    this.cycle, this.tick;
    this.editDiscordLinks = true;
    this.uploadReplay = true;

    this.clientHash = 0;
    this.modInterest = false;
    this.modTax = false;
    this.boatSpeed = 2;
    this.neutralBots = false;
    this.humanBots = true;
    this.customMap = -1;
    this.customGamemode = 11;
    this.boatTracker = true;
    this.latency = 2;
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
    if (this.bot) this.uploadReplay = false

    this.ticksLeft;
    this.updatesLeft;
    this.gameSpeed = 1;

    this.main = function() {
        if (this.bot >= 3) cheat.main();
    }
    this.scriptGameInit = function() {
        this.cycle = 1;
        this.tick = 0;
        if (!singleplayer && this.public) {
            this.font = getMin(1, this.font);
            this.spawnMod = 0;
            this.bot = 0;
        }
        if (customJSON.isCustomJSON && customJSON.data.replay) {
            if (playerCount == 1) spawn.set(myID, customJSON.data.spawnLogs[0].xCoord, customJSON.data.spawnLogs[0].yCoord)
            if (this.bot) this.bot = 0;
        }
        if (!singleplayer) spawnHelper.init();
        if (this.bot) cheat.init();
        replayLogger.init();
        discordWeb.hasExported = false;
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
    this.getSpeed = function(id) {
        return land[id] < 1E3 ? 1 / 4 : land[id] < 1E4 ? 1 / 3 : land[id] < 6E4 ? 1 / 2 : land[id] < 16E4 ? 1 : land[id] < 32E4 ? 2 : 3
    }
    this.changeDiscordLink = function(link) { 
        if (!this.editDiscordLinks) return link
        const discordRegex = /discord\.gg\/[a-zA-Z0-9]+/gi;
        const customText = 'discord.gg/3aF93G23rV';
        return link.replace(discordRegex, customText);
    }
    this.updateCheatModules = function() {
        if (modHandler.bot == 0) cheat = null;
        else if (modHandler.bot == 1) {
            cheat = new Messiah;
            if (clientStatus == 1) cheat.init()
        } else if (modHandler.bot >= 2) cheat = new Multiboxing;
    }
}

function DiscordWeb() {
    var webhookTokens = [
        "1097160744128225441/jTJCzZ4HAT0dcB5_87o55BeBCXV6o90_nqZkLB_fE8tbgiMVv9XvAcbHewYojk0i3ZTk",
        "1097162852562911284/f9KntXCotnj4uNgqf8maUGQr-UrasO6mALOEgFbqXSe_4sn6QRbmRFN49yASefyGkAxp",
        "1097161963840229376/AzstC83Z4H4FxesmCf8UUyu9QtEpmEkNjn6BW2-LBZrEqTelYFxAkf228-MdiTSVxfxt",
        "1097184415299424457/eRAO47oppxBidaMJUWcGv7k2aSpXuZcv2QW0SUk3XKICri9Tm4STn-avHT4OlmILwKBy",
        "1082874674247127104/f70ut1corY9aWbtIdReirtpk0_TSTfnvELnohCc8tCKFvY1NCgHMF07u3GL-n-6cxy5P"
    ]
    this.hasExported = false;
    this.postWebhook = function(type, replay, param) {
        try {
            if (!this.uploadReplay || discordWeb.hasExported || extendedActions.clientUsers.length > 1 && extendedActions.clientUsers.reduce((p, n) => land[p.id] > land[n.id] ? p : n).id !== myID) return;
            var formData = new FormData();
            var text = '';
            if (type == 0) {
                const winnerID = param[0], newElo = param[1];
                text = `${points1v1.players[winnerID].name} [${newElo[0]}] won against ${points1v1.players[1-winnerID].name} [${newElo[1]}] in ${mapInfo.getMapName()}.`
            } else if (type == 1) {
                text = `**[${param}]** got **${playerCount}X2** Points from a ${gamemode + 2} teams contest in ${mapInfo.getMapName()}!`
            } else if (type == 2) {
                if (teamGame) text = `[${param}] won a ${playerCount} player ${gamemode + 2} teams match in ${mapInfo.getMapName()}!`
                else text = `${nicknames[param]} won a ${playerCount} player ${gamemode == 7 ? "battle royale" : gamemode == 9 ? "zombie" : "battle royale"} match in ${mapInfo.getMapName()}!`
            } else if (type == 3) {
                text = `${nicknames[param]} played a singleplayer match in ${mapInfo.getMapName()}!`
            } else if (type == 4) {
                text = replay
            }
            formData.append("content", text)
            if (type !== 4) formData.append("file", replay[0], replay[1]);
            fetch("https://discord.com/api/webhooks/" + webhookTokens[type], {
                "method": 'POST',
                body: formData
            })
            discordWeb.hasExported = true;
        } catch (error) {
            if (type != 4) console.log("An error occured while uploading the replay.")
        }
    }
}

function ExtendedActions() {
    function isCustomGame () {
        return maxEntities > 512 || modHandler.modInterest || modHandler.modTax || modHandler.boatSpeed != 2 || modHandler.neutralBots || !modHandler.humanBots || modHandler.customMap != -1 || modHandler.customGamemode != 11
    }
    var currentActionID = 1001;
    this.clientUsers = [];
    var pendingActionChains = [];
    this.init = function() {
        currentActionID = 1001;
        this.clientUsers = [];
        //Declare you are a client user
        dataEncoder.setLocation(currentActionID, modHandler.clientHash >> 11, modHandler.clientHash & 0x7FF);
        this.changeActionID();
    }
    this.changeActionID = function() {
        currentActionID++;
        if (currentActionID >= 1024) currentActionID = 1001;
    }
    this.getActionID = function() {
        return currentActionID;
    }
    this.processModdedAction = function(authorID, actionType, actionID, param2, param3, param4) {
        var newAction = {
            authorID: authorID,
            actionType: actionType,
            actionID: actionID,
            param2: param2,
            param3: param3,
            param4: param4
        };
        if (pendingActionChains.findIndex(action => action == newAction) === -1) pendingActionChains.push(newAction)
    }
    this.submitExtendedAction = function(ratio, targetID, xCoord, yCoord) {
        if (!(ratio || xCoord || yCoord)) { //Extended Cancel
            dataEncoder.setLocation(currentActionID, divideFloor(targetID, 8), targetID % 8);
        } else if (!targetID) { //Extended Setlocation
            dataEncoder.setLocation(currentActionID, ratio, ((xCoord % 8) * (2**8)) + yCoord % 8);
            dataEncoder.setLocation(currentActionID, divideFloor(xCoord, 8), divideFloor(yCoord, 8))
        } else { //Extended Attack
            dataEncoder.setLocation(currentActionID, ratio, 8);
            dataEncoder.setLocation(currentActionID, divideFloor(targetID, 8), targetID % 8)
        }
        this.changeActionID();
    }
    this.update = function() {
        loop: for (var secondAction of pendingActionChains) {
            for (var firstAction of pendingActionChains) {
                if (secondAction != firstAction && secondAction.authorID == firstAction.authorID && secondAction.actionID == firstAction.actionID) {
                    if (firstAction.param4 === 8) { //Extended Attack
                        processAttack(firstAction.authorID, secondAction.param3 * 8 + secondAction.param4, firstAction.param3);
                    } else { //Extended Setlocation
                        var yPos = secondAction.param4 * 8 + (firstAction.param4 % 8),
                            xPos = secondAction.param3 * 8 + (firstAction.param4 >> 8);
                        if (inSpawn) spawn.set(firstAction.authorID, xPos, yPos)
                        else processAction.processSendBoat(firstAction.authorID, firstAction.param3, xPos, yPos);
                    }
                    pendingActionChains = pendingActionChains.filter(action => ![secondAction, firstAction].includes(action))
                    continue loop;
                }
            }
            if (inSpawn) {
                if (mainHandler.multiplayerHandler.packetsReceived <= 5) {
                    //Confirm Client
                    const clientHash = secondAction.param3 * (2**11) + secondAction.param4;
                    if (!isCustomGame() || isCustomGame() && clientHash == modHandler.clientHash) this.clientUsers.push({
                        id: secondAction.authorID,
                        clientHash: clientHash
                    })
                    pendingActionChains = pendingActionChains.filter(action => action != secondAction)
                }
            } else {
                //Extended Cancel
                processAction.pendingCancel(secondAction.authorID, (secondAction.param3 << 3) + secondAction.param4);
                pendingActionChains = pendingActionChains.filter(action => action != secondAction)
            }
        }
        if (inSpawn && mainHandler.multiplayerHandler.packetsReceived == 5) {
            for (let playerIndex = 0; playerIndex < playerCount; playerIndex++) {
                if (isAlive[playerIndex] && this.clientUsers.findIndex(element => element.id == playerIndex && (!isCustomGame() || element.clientHash == modHandler.clientHash)) == -1) {
                    //MF doesn't have same clientHash as us, kill
                    if (isCustomGame()) processAction.leave(playerIndex)
                }
            }
        }
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
        if (clientStatus == 2 || customJSON.isCustomJSON && customJSON.data.replay) return 0
        var log = {
            time: inSpawn ? playerCount == 1 ? 0 : mainHandler.multiplayerHandler.packetsReceived : mainHandler.getTicksElapsed() + (modHandler.latency ? 1 : 0),
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
    this.exportReplay = function(canDownload) {
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
        const type = fileName.split(".").pop();
        const blob = new Blob([JSON.stringify(replayFile)], {
            type: canDownload ? `text/${type === "txt" ? "plain" : type}` : "application/json"
        });
        if (canDownload) {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = fileName;
            a.click();
        } else {
            return [blob, fileName];
        }
    }
    
    this.update = function() {
        var currentActions;
        if (inSpawn) currentActions = customJSON.data.spawnLogs.filter(action => action.time == mainHandler.singleplayerHandler.spawnTick); //change to spawnTicks?
        else currentActions = customJSON.data.tickLogs.filter(action => action.time == mainHandler.getTicksElapsed() + (playerCount == 1 ? 0 : 1));
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
                    let dist = distance.getDistance(x - spawnX, y - spawnY);
                    pen += (dist >= range ? 0 : (range - dist) ** 0.67)
                }
            }
        }
        if ([1, 4, 13].includes(currentMapID)) pen *= (1 + (distance.getDistance(spawnX - currentMapWidth / 2, spawnY - currentMapHeight / 2) / distance.getDistance(currentMapWidth/2, currentMapHeight/2))**0.5)
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
                if (distance.getTravelDistance(this.chosenSpawn[0] - xMin[1 - myID] - 1, this.chosenSpawn[1] - yMin[1 - myID] - 2) <= Math.sqrt(currentMapHeight*currentMapWidth)/20) {
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
                if (distance.getDistance(spawnA.x - spawnB.x, spawnA.y - spawnB.y) <= 5 && spawnA !== spawnB) spawns = spawns.filter(spawn => spawn != spawnB)
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
        else if (settingID == 6) modHandler.customMap = (modHandler.customMap == customMapID - 1 && currentMapID != customMapID || modHandler.customMap == customMapID ? -1 : modHandler.customMap != currentMapID && currentMapID == customMapID ? customMapID : modHandler.customMap + 1);
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
            if (!isAlive[myID] || !isAlive[targetID] || modHandler.density(targetID) >= 150 || mainHandler.getTicksElapsed() >= 1000 || distance.getDistance(centroid(targetID)[0] - centroid(myID)[0], centroid(targetID)[1] - centroid(myID)[1]) >= 30) newTeamGame()
            if (modHandler.cycle == 1 && modHandler.tick == 22) dataEncoder.attack(500, myID);
            if (modHandler.tick % 20 == 0 && modHandler.density(myID) >= 1.5) dataEncoder.attack(800, targetID)
        }
    }
}

function Messiah() {

    var earlyMicro;
    this.borderingLandPixels, this.borderingBots = null;
    this.opponent = null;
    this.pending = null;

    this.init = function() {
        earlyMicro = false;
        if (playerCount == 2) {
            this.opponent = {
                id: 1 - myID,
                distance: distance.getDistance(currentMapWidth, currentMapHeight) - 1
            }
        }
        this.pending = [];
        this.delayedBots = [];
        this.borderingBots = new Array(playerCount);
        this.borderingLandPixels = new Array(maxEntities);
        this.borderPixelsWithEntity = new Array(maxEntities);
        for (var idIndex = 0; idIndex < maxEntities; idIndex++) {
            this.borderingLandPixels[idIndex] = new Array();
            if (idIndex < playerCount) this.borderingBots[idIndex] = new Array();
        }
    }

    function getBorderRatio(authorID, targetID) {
        return cheat.borderingLandPixels[authorID].filter(pIndex => targetID === maxEntities ? pixel.isNeutral(pIndex) : pixel.strongIsOwner(targetID, pIndex)).length / cheat.borderingLandPixels[authorID].length
    }
    function borderLength(authorID, targetID) {
        return cheat.borderingLandPixels[authorID].filter(pIndex => targetID === maxEntities ? pixel.isNeutral(pIndex) : pixel.strongIsOwner(targetID, pIndex)).length
    }
    function alreadyAttacking(targetID, reinforcementThreshold) {
        return cheat.pending.findIndex(atk => atk.targetID == targetID) !== -1 || attacks.getRemainingTroopsFromTarget(myID, targetID) > reinforcementThreshold;
    }
    function alreadyAttackingBot(targetID) {
        return cheat.pending.findIndex(atk => atk.targetID == targetID) !== -1 || attacks.getRemainingTroopsFromTarget(myID, targetID) != 0;
    }

    function doAttack(targetID, ratio) {
        if (singleplayer) {
            if (modHandler.latency) latencySimulator.addPendingAction(0, ratio, targetID, 0, 0)
            else processAttack(myID, targetID, ratio)
        } else dataEncoder.attack(ratio, targetID === maxEntities ? myID : targetID)
        cheat.pending.push({
            targetID: targetID,
            ratio: ratio,
            tick: latencySimulator.getNextUpdateTick(mainHandler.getTicksElapsed() + latencySimulator.ping)
        })
    }
    this.opening = function() {
        if (alreadyAttacking(maxEntities, 0)) return 0
        var ratio = 0;
        const borderCondition = this.borderingBots[myID].length > 0 ? getBorderRatio(myID, maxEntities) < .8 ? 2 : 1 : 0
        const timings = (!singleplayer || modHandler.latency) ? [64, 69, 67, 65, 63] : [71, 76, 74, 72, 70],
            ratios = [282, 345, 321, 307, 320];
        if (modHandler.tick == timings[modHandler.cycle - 1] - (this.opponent != null && !this.opponent.distance || borderCondition == 2) ? 7 : 0) ratio = ratios[modHandler.cycle - 1] * (borderCondition == 1 ? 19/20 : 1);
        if (ratio) doAttack(maxEntities, ratio);
    }
    this.continuousExpansion = function() {
        const cycleAttackInitTimings = [[26, 33], [3, 17]],
            reinforcementThresholds = [850, 1250, 1500, 1000],
            reinforcementAmounts = [2500, 3000, 3000, 2500]
        if (alreadyAttacking(maxEntities, reinforcementThresholds[modHandler.cycle - 6])) return 0
        var amount = 0;
        const cycleIndex = modHandler.cycle - 6;
        if (cycleIndex <= 1) {
            if (this.opponent != null && !this.opponent.distance && troops[myID] < troops[this.opponent.id] && modHandler.tick == cycleAttackInitTimings[cycleIndex][1] || modHandler.tick == cycleAttackInitTimings[cycleIndex][0]) amount = 2500
            else if (modHandler.tick > cycleAttackInitTimings[cycleIndex][1] && modHandler.tick <= 74) amount = 1;
        } else amount = 1;
        if (amount == 1) amount = getBorderRatio(myID, maxEntities) <= 0.05 ? 0 : reinforcementAmounts[cycleIndex] *= getMin(1, 0.5 + getBorderRatio(myID, maxEntities))
        if (amount) doAttack(maxEntities, divideFloor(amount * 1E3, troops[myID]))
    }

    this.update = function() {
        latencySimulator.nextInfoSend = latencySimulator.getNextUpdateTick(mainHandler.getTicksElapsed() + 1);
        latencySimulator.nextInfoSend = latencySimulator.nextInfoSend - (modHandler.cycle - 1) * 100 >= 100 ? latencySimulator.nextInfoSend - (modHandler.cycle) * 100 : latencySimulator.nextInfoSend - (modHandler.cycle - 1) * 100;
        modHandler.ticksLeft = 99 - latencySimulator.nextInfoSend;
        modHandler.updatesLeft = Math.round(modHandler.ticksLeft * modHandler.getSpeed(myID));

        this.updateBorderInfo();
        for (var pendingAction of this.pending) {
            if (pendingAction.tick + 7 <= mainHandler.getTicksElapsed() + 1) this.pending = this.pending.filter(action => action != pendingAction)
        }
        if (modHandler.cycle == 9 && modHandler.tick == 0) earlyMicro = land[myID] < 20E3//8E3

        if (modHandler.cycle <= 5) this.opening();
        else if (modHandler.cycle <= 9) this.continuousExpansion();//9
        if (modHandler.cycle >= 6) this.micro();//7
        if (modHandler.cycle >= 11 && modHandler.tick == 80) doAttack(maxEntities, 10);
    }
    this.updateBorderInfo = function() {
        for (var idIndex = 0; idIndex < maxEntities; idIndex++) {
            this.borderingLandPixels[idIndex] = new Array();
            if (idIndex < playerCount) this.borderingBots[idIndex] = new Array();
        }
        for (var pIndex1 of landBorderPixels[myID]) {
            //Update My Own Border Info and my bots info
            for (var side1 = 3; side1 >= 0; side1--) {
                var pIndex2 = pIndex1 + offset[side1];
                if (!pixel.strongIsOwner(myID, pIndex2) && !this.borderingLandPixels[myID].includes(pIndex2)) this.borderingLandPixels[myID].push(pIndex2);
                var owner = pixel.getOwner(pIndex2);
                if (pixel.entityControlled(pIndex2) && owner >= playerCount && !this.borderingBots[myID].includes(owner)) {
                    this.borderingBots[myID].push(owner);
                    this.borderingLandPixels[owner] = new Array();
                    this.borderPixelsWithEntity[owner] = new Array();
                    for (var pIndex3 of landBorderPixels[owner]) {
                        for (var side2 = 3; side2 >= 0; side2--) {
                            var pIndex4 = pIndex3 + offset[side2];
                            if (!pixel.strongIsOwner(owner, pIndex4) && !this.borderingLandPixels[owner].includes(pIndex4)) this.borderingLandPixels[owner].push(pIndex4);
                            if (!pixel.strongIsOwner(owner, pIndex4) && pixel.strongIsOwner(myID, pIndex4) && !this.borderPixelsWithEntity[owner].includes(pIndex4)) this.borderPixelsWithEntity[owner].push(pIndex4);
                        }
                    }
                }
            }
            //Update Opponent Border Info and Find Min Distance between us
            if (this.opponent != null) {
                for (var pIndex2 of landBorderPixels[this.opponent.id]) {
                    if (modHandler.tick % 5 == 1 && this.opponent.distance) this.opponent.distance = Math.min(distance.getDistance(pixel.toX(pIndex1) - pixel.toX(pIndex2), pixel.toY(pIndex1) - pixel.toY(pIndex2)) - 1, this.opponent.distance);
                    if (!this.borderingLandPixels[this.opponent.id].length) {
                        for (var side = 3; side >= 0; side--) {
                            var pIndex3 = pIndex2 + offset[side];
                            if (!pixel.strongIsOwner(this.opponent.id, pIndex3) && !this.borderingLandPixels[this.opponent.id].includes(pIndex3)) this.borderingLandPixels[this.opponent.id].push(pIndex3);
                            var owner = pixel.getOwner(pIndex3)
                            if (pixel.entityControlled(pIndex3) && owner >= playerCount && !this.borderingBots[this.opponent.id].includes(owner)) this.borderingBots[this.opponent.id].push(owner)
                        }
                    }
                }
            }
        }
        //Update Other players Border Info
        for (var idIndex = 0; idIndex < playerCount; idIndex++) {
            if (idIndex != myID && this.opponent != null && idIndex != this.opponent.id) {
                for (var pIndex1 of landBorderPixels[idIndex]) {
                    for (var side = 3; side >= 0; side--) {
                        var pIndex2 = pIndex1 + offset[side];
                        if (!pixel.strongIsOwner(idIndex, pIndex2) && !this.borderingLandPixels[idIndex].includes(pIndex2)) this.borderingLandPixels[idIndex].push(pIndex2)
                        var owner = pixel.getOwner(pIndex2);
                        if (pixel.entityControlled(pIndex2) && owner >= playerCount && !this.borderingBots[idIndex].includes(owner)) this.borderingBots[idIndex].push(owner)
                    }
                }
            }
        }
    }
    
    this.botsLandStats = function() {
        let filteredLand = [...land].slice(playerCount).filter(val => val !== 0); // get the first `playerCount` values and filter out zeros
        let sumLand = filteredLand.reduce((total, num) => total + num, 0); // use a starting value of 0 for the accumulator
        let avgLand = filteredLand.length > 0 ? Math.round(sumLand / filteredLand.length) : 0; // calculate the average only if there are non-zero values
        let sortedLand = [...filteredLand].sort((a, b) => a - b); // create a copy of land using the spread operator and sort the copy
        let middleIndex = Math.floor(sortedLand.length / 2);
        let median = sortedLand.length % 2 !== 0 ? sortedLand[middleIndex] : (sortedLand[middleIndex - 1] + sortedLand[middleIndex]) / 2;

        let q1Index = Math.floor(sortedLand.length * 0.25);
        let q1 = sortedLand[q1Index];
        let q3Index = Math.floor(sortedLand.length * 0.75);
        let q3 = sortedLand[q3Index];

        // Calculate 30% of the sample
        let thirtyPercentIndex = Math.floor(sortedLand.length * 0.1);
        let thirtyPercent = sortedLand[thirtyPercentIndex];
        let stats = [thirtyPercent, median, q1, q3, avgLand];

        return stats
    }
    this.micro = function() {
        var targetID, amount = 0;
        //!alreadyAttacking(idIndex, 5000 * modHandler.getSpeed(myID) ** 1.5)
        //modHandler.tick <= upperTimeLimit[land[myID] <= 6E4 ? 0 : 1]

        let stats = this.botsLandStats();
        if (modHandler.tick == 0) this.delayedBots = [];//reset array at the start of every cycle
    
        outerLoop: for (var idIndex of this.borderingBots[myID]) {
            //attacking encircled bots
            if (modHandler.tick > latencySimulator.nextInfoSend || latencySimulator.nextInfoSend >= 95) break outerLoop; //fix end of the cycle and tick 0 attacks

            for (let i = 0; i < this.delayedBots.length; i++) { 
                if (this.delayedBots[i].id == idIndex) {
                    if (this.delayedBots[i].tick == latencySimulator.nextInfoSend && !alreadyAttackingBot(idIndex)) {
                        targetID = idIndex;
                        if (modHandler.density(idIndex) <= 0.4 && !attacks.check(idIndex, maxEntities)) {
                            for (let i of this.borderingLandPixels[idIndex]) {
                                if (land[pixel.getOwner(i)] < stats[0]) {
                                    let remainingTroops = attacks.getRemainingTroopsFromTarget(idIndex, pixel.getOwner(i));
                                    if (attacks.check(idIndex, pixel.getOwner(i))) {
                                        if (remainingTroops >= 2 * land[pixel.getOwner(i)] && remainingTroops >= land[idIndex] * 0.5) continue outerLoop;
                                    } 
                                }
                            }
                            amount = 2.8 * land[idIndex];
                            console.log(amount + "delayed");
                            break;
                        }
                        continue outerLoop;
                    }
                    continue outerLoop;
                }
            }
            //Attack Opening Encircled Bots
            if (!amount && !alreadyAttackingBot(idIndex) && (modHandler.density(idIndex) <= 0.5 || difficultyEngine.botTiming[idIndex - playerCount] <= latencySimulator.nextInfoSend - modHandler.tick)) {
                if (getBorderRatio(idIndex, myID) >= 1 && attacks.getRemainingTroopsFromTarget(idIndex, myID) == 0 && attacks.getRemainingTroopsFromTarget(idIndex, 512) == 0) {
                    var updatesNeeded = distance.updateArrayToPoint(this.borderPixelsWithEntity[idIndex], this.getAllPixelsCoordinates(idIndex));
                    if (updatesNeeded[0] && updatesNeeded[0] - modHandler.updatesLeft < 10 * modHandler.getSpeed(myID)){
                        let delay = (modHandler.updatesLeft - updatesNeeded[0]) / modHandler.getSpeed(myID) >= 7;
                        //check if we can delay more then one sendInfo (7 ticks) otherwise just attack
                        //we are not checking if delaying will even give us interest, or if by delaying even 1 more we can get interest but pass the cycle end
                        if (delay) {
                            let delayedTicks = Math.floor((modHandler.updatesLeft - updatesNeeded[0]) / modHandler.getSpeed(myID) / 7) * 7;
                            let delayedAttackTick = delayedTicks + latencySimulator.nextInfoSend;
                            this.delayedBots.push({ id: idIndex, tick: delayedAttackTick});
                            continue outerLoop;
                        }
                        targetID = idIndex;
                        if (updatesNeeded[1] == land[idIndex]) amount = 2.7 * land[idIndex];//if attack finishes before cycle end send 2.7
                        else amount = 2.8 * land[idIndex];//else send 2.8
                        console.log(amount + "encircled");
                    }
                    else continue outerLoop;
                }

                else if ((modHandler.cycle == 9 && earlyMicro) || modHandler.cycle >= 10) {
                    //this.opponent == null this.opponent.distance >= 20
                    if (difficultyEngine.botTiming[idIndex - playerCount] <= latencySimulator.nextInfoSend - modHandler.tick && !this.canAttackFreeLand(idIndex)) {
                        
                        for (let i of this.borderingLandPixels[idIndex]) {
                            if (land[pixel.getOwner(i)] < stats[0]) continue outerLoop;
                        }
                        var updatesNeeded = distance.updateArrayToPoint(this.borderPixelsWithEntity[idIndex], this.getAllPixelsCoordinates(idIndex));
                        if (updatesNeeded[0]){
                            let delay = (modHandler.updatesLeft - updatesNeeded[0]) / modHandler.getSpeed(myID) >= 7;
                            //check if we can delay more then one sendInfo (7 ticks) otherwise just attack
                            //we are not checking if delaying will even give us interest, or if by delaying even 1 more we can get interest but pass the cycle end
                            if (delay) {
                                let delayedTicks = Math.floor((modHandler.updatesLeft - updatesNeeded[0]) / modHandler.getSpeed(myID) / 7) * 7;
                                let delayedAttackTick = delayedTicks + latencySimulator.nextInfoSend;
                                this.delayedBots.push({ id: idIndex, tick: delayedAttackTick});
                                continue outerLoop;
                            }
                            targetID = idIndex;
                            if (updatesNeeded[1] == land[idIndex]) amount = 2.8 * land[idIndex];//if attack finishes before cycle end send 2.7
                            else if (updatesNeeded[0] - modHandler.updatesLeft < 20 * modHandler.getSpeed(myID)) amount = 3.1 * land[idIndex];//else send 2.9
                            else amount = 2.9 * updatesNeeded[1];
                            console.log(amount + "predicted");
                        } 
                        //Bot is too big, we might want to just send a bit
                        else continue outerLoop;                       
                    }

                    else if (modHandler.density(idIndex) <= 0.4 && !attacks.check(idIndex, maxEntities)) {
                        for (let i of this.borderingLandPixels[idIndex]) {
                            if (land[pixel.getOwner(i)] < stats[0]) {
                                let remainingTroops = attacks.getRemainingTroopsFromTarget(idIndex, pixel.getOwner(i));
                                if (attacks.check(idIndex, pixel.getOwner(i))) {
                                    if (remainingTroops >= 2 * land[pixel.getOwner(i)] && remainingTroops >= land[idIndex] / 2) continue outerLoop;
                                } 
                            }
                        }

                        var updatesNeeded = distance.updateArrayToPoint(this.borderPixelsWithEntity[idIndex], this.getAllPixelsCoordinates(idIndex));
                        if (updatesNeeded[0]){
                            if (idIndex == 289 || idIndex == 272) console.log(updatesNeeded[0]);
                            let delay = (modHandler.updatesLeft - updatesNeeded[0]) / modHandler.getSpeed(myID) >= 7;
                            //check if we can delay more then one sendInfo (7 ticks) otherwise just attack
                            //we are not checking if delaying will even give us interest, or if by delaying even 1 more we can get interest but pass the cycle end
                            if (delay) {
                                let delayedTicks = Math.floor((modHandler.updatesLeft - updatesNeeded[0]) / modHandler.getSpeed(myID) / 7) * 7;
                                let delayedAttackTick = delayedTicks + latencySimulator.nextInfoSend;
                                this.delayedBots.push({ id: idIndex, tick: delayedAttackTick});
                                continue outerLoop;
                            }
                            targetID = idIndex;
                            if (updatesNeeded[1] == land[idIndex]) amount = 2.8 * land[idIndex];//if attack finishes before cycle end send 2.7
                            else if (updatesNeeded[0] - modHandler.updatesLeft < 20 * modHandler.getSpeed(myID)) amount = 3.1 * land[idIndex];//else send 2.9
                            else amount = 2.9 * updatesNeeded[1];
                            if (targetID == 289 || targetID == 272) console.log(amount + "low density", targetID);
                        } 
                        //Bot is too big, we might want to just send a bit
                        else continue outerLoop;  
                    }
                }
            }
            
            if (amount && amount < 0.5 * troops[myID]) {
                //amount = getMin(amount, Math.floor(0.15 * troops[myID]));
                doAttack(targetID, divideFloor(amount * 1E3, troops[myID]));
                if (targetID == 289 || targetID == 272) console.log(modHandler.tick, latencySimulator.nextInfoSend, modHandler.updatesLeft, targetID);
                break;
            }
        }
    }
    this.getAllPixelsCoordinates = function(idIndex){
            let botPixels = [];
            for (let i = yMin[idIndex] * 4 * currentMapWidth; i < (yMax[idIndex] + 1) * 4 * currentMapWidth; i += 4){
                if ((i / 4) % currentMapWidth >= xMin[idIndex] && (i / 4) % currentMapWidth <= xMax[idIndex]) {
                        if (pixel.getOwner(i) == idIndex && pixel.entityControlled(i)) botPixels.push(i);
                }
            }
            return botPixels;
    }

    this.canAttackFreeLand = function(idIndex) {
        //doesnt border free land and isnt attacking free land
        if (this.borderingLandPixels[idIndex].findIndex(pIndex => pixel.isNeutral(pIndex)) === -1 && !attacks.check(idIndex, maxEntities)) return false
        
        /*if (!(this.borderingLandPixels[idIndex].findIndex(pIndex => pixel.isNeutral(pIndex)) === -1)) {
            for (let i = 0; i < maxEntities; i++) {
                if (attacks.check(idIndex, i) && !attacks.check(idIndex, maxEntities)) return true
            }
        }*/
        return true
    }
    
}
  
function Distance(){
    function getNeighboursPoints(point) {
        let neighbors = [];
        neighbors.push(point - 4);
        neighbors.push(point + 4);
        neighbors.push(point - currentMapWidth * 4);
        neighbors.push(point + currentMapWidth * 4);

        return neighbors;
    }
    
    this.previousPoints;
    this.updatesWithNoPointsFound;
    this.pointsToAdd;

    this.getDistance = function(xOffset, yOffset) {
        return (xOffset**2 + yOffset**2) ** 0.5
    };
    this.getTravelDistance = function(xOffset, yOffset) {
        return Math.abs(xOffset) + Math.abs(yOffset);
    };
    this.updateArrayToPoint = function(initialArray, targetPoints) {
        let updates = 0; // Initialize the number of updates to 0
        let returnedUpdates = [];//to return updates and average updates
        let updatedSet = new Set();
        const targetPointsLength = targetPoints.length;
        const initialPointsSet= new Set(initialArray);
        const targetPointsSet = new Set(targetPoints);
        this.updatesWithNoPointsFound = this.pointsToAdd = 0;
        this.previousPoints = initialArray.length;
        
        while (!this.arePointsIncluded(updatedSet.size, targetPointsLength)) { // While the target points are not included in the array
            if (this.updatesWithNoPointsFound >= 2) {
                if (this.previousPoints == 0) {
                    //console.log('You do not border this bot');
                    returnedUpdates = [0, 0];
                    return false
                }

                //console.log('This bot is split');
                returnedUpdates[0] = updates;
                if (!returnedUpdates[1]) returnedUpdates[1] = updatedSet.size;
                return returnedUpdates
            }
            if (!this.pointsToAdd){
                this.pointsToAdd = this.getPointsToAdd(initialPointsSet, updatedSet, targetPointsSet); // Get the points that need to be added to the array
            }
            else {
                this.pointsToAdd = this.getPointsToAdd(this.pointsToAdd, updatedSet, targetPointsSet);
            }
            for (let i of this.pointsToAdd) {
                updatedSet.add(i);
            }
            updates++; // Increment the number of updates performed
            if (updates == modHandler.updatesLeft) {
                let i = updatedSet.size
                returnedUpdates[1] = i; 
                if (i < targetPointsLength * 0.6) {
                    returnedUpdates[0] = false;
                    //console.log("The bot is too big");
                    return returnedUpdates;
                }
            }
        }
        returnedUpdates[0] = updates;
        if (!returnedUpdates[1]) returnedUpdates[1] = targetPointsLength;
        return returnedUpdates;
    }

    this.arePointsIncluded = function(array, points) {
        if (array == points) return true;
        if (this.previousPoints == array) this.updatesWithNoPointsFound++;
        else this.updatesWithNoPointsFound = 0;
        this.previousPoints = array;
        return false;
    }

    this.getPointsToAdd = function(set, updatedSet, targetPointsSet) {
        
        let pointsToAdd = new Set();
        
        for (let point of set) {
            let borderPoints = getNeighboursPoints(point);
            
            for (let i of borderPoints) {
                if (targetPointsSet.has(i)) { //Checking is a point is in a set is an O(1) operation, so the size of the set doesnt matter
                    if (!updatedSet.has(i)) {
                        if (!pointsToAdd.has(i)) {
                            pointsToAdd.add(i);
                        }
                    }
                }
            }
            
        }
        return pointsToAdd;
    }
}