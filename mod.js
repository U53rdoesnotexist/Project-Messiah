var modHandler, latencySimulator, replayLogger, spawnHider, messiah;
function modConstruct(){
    modHandler = new ModHandler;
    latencySimulator = new LatencySimulator;
    replayLogger = new ReplayLogger;
    spawnHider = new SpawnHider;
    messiah = new Messiah;
}

function ModHandler() {
    this.cycle, this.tick;
    this.ticksLeft;
    this.font = true;
    this.latency = true;
    this.logger = true;
    this.hideSpawn = true;
    this.bot = true;
    this.boatLines = true;
    this.quickSpawn = false;
    this.scriptGameInit = function() {
        this.cycle = this.nextInfoSend = 1;
        this.tick = 0;
        if (singleplayer && inSpawn && this.quickSpawn) spawn.set(0, 605, 410), spawn.update();
        if (!singleplayer) spawnHider.init();
        if (this.bot) messiah.init();
        if (customJSON.isCustomJSON && customJSON.data.replay) replayLogger.init()
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
}

function LatencySimulator() {
    this.ping = 3; //5 ticks of latency
    this.pendingActions = [];
    this.nextInfoSend;
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
            fileName = mapInfo.getMapName()+'Replay.json';
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

function Messiah() {
    function doAttack(targetID, ratio) {
        if (singleplayer) {
            if (modHandler.latency) latencySimulator.addPendingAction(0, ratio, targetID, 0, 0)
            else processAttack(myID, targetID, ratio)
        } else dataEncoder.attack(ratio, targetID === maxEntities ? myID : targetID)
        messiah.pending.push({
            targetID: targetID,
            ratio: ratio,
            tick: latencySimulator.getNextUpdateTick(mainHandler.getTicksElapsed() + latencySimulator.ping)
        })
    }
    function getBorderRatio(authorID, targetID) {
        return messiah.borderingLandPixels[authorID].filter(pIndex => targetID === maxEntities ? pixel.isNeutral(pIndex) : pixel.strongIsOwner(targetID, pIndex)).length / messiah.borderingLandPixels[authorID].length
    }
    function borderLength(authorID, targetID) {
        return messiah.borderingLandPixels[authorID].filter(pIndex => targetID === maxEntities ? pixel.isNeutral(pIndex) : pixel.strongIsOwner(targetID, pIndex)).length
    }
    function alreadyAttacking(targetID, reinforcementThreshold) {
        return messiah.pending.findIndex(atk => atk.targetID == targetID) !== -1 || attacks.getRemainingTroopsFromTarget(myID, targetID) > reinforcementThreshold;
    }
    var earlyMicro;
    this.borderingLandPixels, this.borderingBots = null;
    this.opponent = null;
    this.pending = null;
    this.init = function() {
        earlyMicro = false;
        if (playerCount == 2) {
            this.opponent = {
                id: 1 - myID,
                distance: modHandler.getDistance(currentMapWidth, currentMapHeight) - 1
            }
        }
        this.pending = [];
        this.borderingBots = new Array(playerCount);
        this.borderingLandPixels = new Array(maxEntities);
        for (var idIndex = 0; idIndex < maxEntities; idIndex++) {
            this.borderingLandPixels[idIndex] = new Array();
            if (idIndex < playerCount) this.borderingBots[idIndex] = new Array();
        }
    }
    this.update = function() {
        if (modHandler.cycle == 1 && modHandler.tick == 1) {
            var startCoordinates = convertPointsToCoordinates(landBorderPixels[myID]);
            var endCoordinates = convertPointsToCoordinates(landBorderPixels[1]);
            var shortestDistance = [];
            for (startingPoint of startCoordinates){
                var distances = distance(...startingPoint, endCoordinates);
                shortestDistance.push(distances);
            }
            console.log(Math.min(...shortestDistance));
        }
        if (mainHandler.getTicksElapsed() == 1750) console.log(`1:37 Land: ${land[myID]} Troops: ${troops[myID]}`), gameStateManager.aK();
        if (mainHandler.getTicksElapsed() == 1250) console.log(`1:10 Land: ${land[myID]} Troops: ${troops[myID]}`);
        if (mainHandler.getTicksElapsed() == 1430) console.log(`1:20 Land: ${land[myID]} Troops: ${troops[myID]}`);
        latencySimulator.nextInfoSend = latencySimulator.getNextUpdateTick(mainHandler.getTicksElapsed());
        latencySimulator.nextInfoSend = latencySimulator.nextInfoSend - (modHandler.cycle - 1) * 100 >= 100 ? latencySimulator.nextInfoSend - (modHandler.cycle) * 100 : latencySimulator.nextInfoSend - (modHandler.cycle - 1) * 100;
        modHandler.ticksLeft = 99 - latencySimulator.nextInfoSend;
        this.updateBorderInfo();
        for (var pendingAction of this.pending) {
            if (pendingAction.tick + 7 <= mainHandler.getTicksElapsed() + 1) this.pending = this.pending.filter(action => action != pendingAction)
        }
        if (modHandler.cycle == 9 && modHandler.tick == 0) earlyMicro = land[myID] < 8E3

        if (modHandler.cycle <= 5) this.opening();
        else if (modHandler.cycle <= 9) this.continuousExpansion();
        if (modHandler.cycle >= 7) this.micro();
        if (modHandler.cycle >= 11 && modHandler.tick == 70) doAttack(maxEntities, 10)

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
                var owner = pixel.getOwner(pIndex2)
                if (pixel.entityControlled(pIndex2) && owner >= playerCount && !this.borderingBots[myID].includes(owner)) {
                    this.borderingBots[myID].push(owner);
                    this.borderingLandPixels[owner] = new Array();
                    for (var pIndex3 of landBorderPixels[owner]) {
                        for (var side2 = 3; side2 >= 0; side2--) {
                            var pIndex4 = pIndex3 + offset[side2];
                            if (!pixel.strongIsOwner(owner, pIndex4) && !this.borderingLandPixels[owner].includes(pIndex4)) this.borderingLandPixels[owner].push(pIndex4);
                        }
                    }
                }
            }
            //Update Opponent Border Info and Find Min Distance between us
            if (this.opponent != null) {
                for (var pIndex2 of landBorderPixels[this.opponent.id]) {
                    if (modHandler.tick % 5 == 1 && this.opponent.distance) this.opponent.distance = Math.min(modHandler.getDistance(pixel.toX(pIndex1) - pixel.toX(pIndex2), pixel.toY(pIndex1) - pixel.toY(pIndex2)) - 1, this.opponent.distance);
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
    this.opening = function() {
        if (alreadyAttacking(maxEntities, 0)) return 0
        var ratio = 0;
        const borderCondition = this.borderingBots[myID].length > 0 ? getBorderRatio(myID, maxEntities) < .8 ? 2 : 1 : 0
        const timings = (!singleplayer || modHandler.latency) ? [64, 69, 67, 65, 63] : [71, 76, 74, 72, 70],
            ratios = [282, 345, 321, 307, 320];
        if (modHandler.tick == timings[modHandler.cycle - 1] - (this.opponent != null && !this.opponent.getDistance || borderCondition == 2) ? 7 : 0) ratio = ratios[modHandler.cycle - 1] * (borderCondition == 1 ? 19/20 : 1);
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
    this.micro = function() {
        const upperTimeLimit = [70, 80];
        var ticksNeeded, updatesNeeded, borderBotLength, targetID, amount = 0;
        if (modHandler.tick >= 50) { //Attack Opening Encircled Bots
            for (var idIndex of this.borderingBots[myID]) {
                if (getBorderRatio(idIndex, myID) >= 0.98 && !alreadyAttacking(idIndex, 5000 * modHandler.getSpeed(myID) ** 1.5)) {
                    if (modHandler.tick <= 80 && (modHandler.density(idIndex) <= 0.5 || difficultyEngine.botTiming[idIndex - playerCount] + latencySimulator.getNextUpdateTick(mainHandler.getTicksElapsed() + 1) <= 90)) {
                        targetID = idIndex;
                        amount = 2.7 * land[idIndex];
                        break;
                    }
                }
            }
        } else if ((modHandler.cycle == 9 && earlyMicro || modHandler.cycle >= 10) && modHandler.tick <= upperTimeLimit[land[myID] <= 6E4 ? 0 : 1] && modHandler.tick > 10) {
            if (this.opponent == null || this.opponent != null && (this.opponent.distance >= 20 || troops[myID] >= 0.85 * troops[this.opponent.id])) {
                //If conditions allow, search and attack all bots which will attack within 7 ticks and does not border free land
                this.borderingBots[myID].sort((prev, next) => land[next] - land[prev]);
                for (var idIndex of this.borderingBots[myID]) {
                    if (!alreadyAttacking(idIndex, 5000 * modHandler.getSpeed(myID) ** 1.5) && this.cantAttackFreeLand(idIndex)) {
                        if (modHandler.density(idIndex) <= 0.5 || difficultyEngine.botTiming[idIndex - playerCount] <= 7) {
                            borderBotLength = Math.round(borderLength(idIndex, myID) / this.borderingLandPixels[idIndex].length) <= 15 ? Math.round(this.borderingLandPixels[idIndex].length * 0.15) : Math.round(borderLength(idIndex, myID) / this.borderingLandPixels[idIndex].length);
                            updatesNeeded = Math.round(land[idIndex]/borderBotLength);
                            ticksNeeded = Math.round(updatesNeeded/modHandler.getSpeed(myID));

                            targetID = idIndex;
                            amount = 2.8 * land[idIndex];
                            if (modHandler.ticksLeft / ticksNeeded >= 0.8 && modHandler.ticksLeft / ticksNeeded <= 1) amount = Math.round(amount / (modHandler.ticksLeft / ticksNeeded));
                            //if (modHandler.ticksLeft / ticksNeeded < 0.8) amount = Math.round(amount * (modHandler.ticksLeft / ticksNeeded < 0.6 ? 0.6 : modHandler.ticksLeft / ticksNeeded));

                            break;
                        }
                    }
                }
            }
        }
        if (amount && amount < 0.5 * troops[myID]) {
            amount = getMin(amount, Math.floor(0.15 * troops[myID]));
            doAttack(targetID, divideFloor(amount * 1E3, troops[myID]));
        }
    }
    this.cantAttackFreeLand = function(idIndex) {
        if (this.borderingLandPixels[idIndex].findIndex(pIndex => pixel.isNeutral(pIndex)) === -1 && !attacks.check(idIndex, maxEntities)) return true
        
        for (let i = 0; i < maxEntities; i++) {
            if (!(this.borderingLandPixels[idIndex].findIndex(pIndex => pixel.isNeutral(pIndex)) === -1) && attacks.check(idIndex, i) && !attacks.check(idIndex, maxEntities)) return true
        }
        return false
    }
    
}

function convertPointsToCoordinates(points) {
    return points.map(point => {
      const x = point % (currentMapWidth * 4) / 4;
      const y = Math.floor(point / (currentMapWidth * 4));
      return [x, y];
    });
  }

function distance(x1, y1, endpoints) {
    var distances = [];
    for (var i = 0; i < endpoints.length; i++) {
      var x2 = endpoints[i][0];
      var y2 = endpoints[i][1];
      var dist = Math.abs(x2 - x1) + Math.abs(y2 - y1);
      distances.push(dist);
    }
    return Math.max(...distances);
  }

  
  
  
  
  

  
  
  
  
  