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
    this.hideSpawn = true;
    this.bot = false;
    this.boatLines = true;
    this.scriptGameInit = function() {
        this.cycle = 1;
        this.tick = 0;
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

}