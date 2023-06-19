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
        this.attackMore = false;
        this.willAttackOpponent = false;
        this.gotAttacked = 0;
        this.pending = [];
        this.delayedBots = [];
        this.borderingBots = new Array(playerCount);
        this.borderingLandPixels = new Array(maxEntities);
        this.borderPixelsWithEntity = new Array(maxEntities);
        for (var idIndex = 0; idIndex < maxEntities; idIndex++) {
            this.borderingLandPixels[idIndex] = new Array();
            if (idIndex < playerCount) this.borderingBots[idIndex] = new Array();
        }
        //if (singleplayer && inSpawn) spawn.set(0, 315, 595), spawn.update();
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

    function doAttack(targetID, ratio) {
        if (ratio > 1000) ratio = 1000;
        if (singleplayer) {
            if (modHandler.latency) latencySimulator.addPendingAction(0, ratio, targetID, 0, 0)
            else processAttack(myID, targetID, ratio)
        } else dataEncoder.attack(ratio, targetID === maxEntities ? myID : targetID)
        console.log(nicknames[targetID], ratio);
        cheat.pending.push({
            targetID: targetID,
            ratio: ratio,
            tick: latencySimulator.getNextUpdateTick(mainHandler.getTicksElapsed() + modHandler.latency)
        })
    }
    this.opening = function() {
        if (alreadyAttacking(maxEntities, 0)) return 0
        var ratio = 0;
        const borderCondition = this.borderingBots[myID].length > 0 ? getBorderRatio(myID, maxEntities) < .8 ? 2 : 1 : 0
        const timings = (!singleplayer || modHandler.latency) ? [64, 69, 67, 65, 56] : [71, 76, 74, 72, 70],
            ratios = [282, 345, 321, 307, 432];
        if (modHandler.tick == timings[modHandler.cycle - 1] - (this.opponent != null && !this.opponent.distance || borderCondition == 2) ? 7 : 0) ratio = ratios[modHandler.cycle - 1] * (borderCondition == 1 ? 19/20 : 1);
        if (ratio) doAttack(maxEntities, ratio);
    }
    this.continuousExpansion = function() {
        
        const cycleAttackInitTimings = [[26, 33], [24, 31], [22, 29], [13, 20], [11, 18]],
            reinforcementThresholds = [850, 1250, 1000, 1000, 1000],
            reinforcementAmounts = [2250, 2500, 2500, 2000, 2000]
        if (alreadyAttacking(maxEntities, reinforcementThresholds[modHandler.cycle - 6])) return 0
        var amount = 0;
        const cycleIndex = modHandler.cycle - 6;
        if (cycleIndex <= 1 && this.opponent != null && !this.opponent.distance && troops[myID] < troops[this.opponent.id] && modHandler.tick == cycleAttackInitTimings[cycleIndex][1] || modHandler.tick == cycleAttackInitTimings[cycleIndex][0]) amount = 2500;
        else if (getBorderRatio(myID, maxEntities) < 1 && cycleIndex == 0 && modHandler.tick == cycleAttackInitTimings[cycleIndex][0] - 14) amount = 1;
        else if (modHandler.tick > cycleAttackInitTimings[cycleIndex][1] && modHandler.tick <= 84) amount = 1;
        if (amount == 1) amount = getBorderRatio(myID, maxEntities) <= 0.05 ? 0 : reinforcementAmounts[cycleIndex] *= getMin(1, 0.4 + getBorderRatio(myID, maxEntities))
        if (amount > troops[myID]) amount = troops[myID];
        if (amount) doAttack(maxEntities, divideFloor(amount * 1E3, troops[myID]))
    }

    this.update = function() {
        latencySimulator.nextInfoSend = latencySimulator.getNextUpdateTick(mainHandler.getTicksElapsed() + 1);
        latencySimulator.nextInfoSend = latencySimulator.nextInfoSend - (modHandler.cycle - 1) * 100 >= 100 ? latencySimulator.nextInfoSend - (modHandler.cycle) * 100 : latencySimulator.nextInfoSend - (modHandler.cycle - 1) * 100;
        modHandler.ticksLeft = 99 - latencySimulator.nextInfoSend;
        modHandler.updatesLeft = Math.round(modHandler.ticksLeft * modHandler.getSpeed(myID));

        if (this.opponent != null) {
            if (isAlive[this.opponent.id] != 1) this.opponent = null;
            if (attacks.check(this.opponent.id, myID) && modHandler.cycle != this.gotAttacked) this.gotAttacked = modHandler.cycle;
            if (modHandler.cycle >= 16 && modHandler.tick == 1) {
                if (modHandler.density(this.opponent.id) < 1) this.willAttackOpponent = true;
                else if (this.borderingBots[myID].length < 10 && modHandler.density(this.opponent.id) < 2) this.willAttackOpponent = true;
                else if (this.borderingBots[myID].length < 5 && modHandler.density(this.opponent.id) < 4) this.willAttackOpponent = true;
                else this.willAttackOpponent = false;
            }
        }
        this.updateBorderInfo();
        for (var pendingAction of this.pending) {
            if (pendingAction.tick + 7 <= mainHandler.getTicksElapsed() + 1) this.pending = this.pending.filter(action => action != pendingAction)
        }
        if (modHandler.cycle == 9 && modHandler.tick == 0) earlyMicro = land[myID] < 20E3//8E3

        if (modHandler.cycle <= 5) this.opening();
        else if (modHandler.cycle <= 9) this.continuousExpansion();
        if (modHandler.cycle >= 9) this.micro();//7
        if (modHandler.cycle >= 9 && modHandler.tick == 1) {
            let sumLandBorder = 0;
            for (var i of this.borderingBots[myID]) {
                sumLandBorder += land[i];
            }
            if (sumLandBorder / troops[myID] < 0.9) this.attackMore = true;
            if (this.opponent != null && (this.opponent.distance <= 50 || !this.opponent.distance)) this.attackMore = false;
        }
        if (this.willAttackOpponent == true && this.tick == 70) doAttack(this.opponent.id, 350);
        if (modHandler.cycle >= 9 && modHandler.tick == 80) doAttack(maxEntities, 10);
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
        let tenPercentIndex = Math.floor(sortedLand.length * 0.1);
        let tenPercent = sortedLand[tenPercentIndex];
        let stats = [tenPercent, median, q1, q3, avgLand];

        return stats
    }
    this.micro = function() {
        var targetID, amount = 0;
        //!alreadyAttacking(idIndex, 5000 * modHandler.getSpeed(myID) ** 1.5)
        //modHandler.tick <= upperTimeLimit[land[myID] <= 6E4 ? 0 : 1]
        /*for (let i of this.borderingLandPixels[idIndex]) {
            if (land[pixel.getOwner(i)] < stats[0]) {
                let remainingTroops = attacks.getRemainingTroopsFromTarget(idIndex, pixel.getOwner(i));
                if (attacks.check(idIndex, pixel.getOwner(i))) {
                    if (remainingTroops >= 2 * land[pixel.getOwner(i)] && remainingTroops >= land[idIndex] * 0.5) continue outerLoop;
                } 
            }
        }*/

        let stats = this.botsLandStats();
        if (modHandler.tick == 0) this.delayedBots = [];//reset array at the start of every cycle

        let minimumDensity = 0;
        if (this.opponent != null) {
            if (this.opponent.distance <= 100) minimumDensity = 0.5;
            if (this.opponent.distance <= 75) minimumDensity = 0.75;
            if (this.opponent.distance <= 50) minimumDensity = 1;
            if (this.opponent.distance <= 25) minimumDensity = 1.25;
            if (!this.opponent.distance && modHandler.cycle > 12) minimumDensity = 2;
            else if (!this.opponent.distance && modHandler.cycle == 9) minimumDensity = 0.75;
            else if (!this.opponent.distance) minimumDensity = 1.25;
            if (!this.opponent.distance && troops[this.opponent.id] > troops[myID]) minimumDensity += 0.25;
            if (!this.opponent.distance && troops[this.opponent.id] > troops[myID] * 1.2) minimumDensity += 0.25;
            if (!this.opponent.distance && troops[this.opponent.id] > troops[myID] * 1.5) minimumDensity += 0.5;
            if (this.opponent.distance && modHandler.cycle <= 12) minimumDensity -= 0.25;
            if (this.gotAttacked == modHandler.cycle) minimumDensity += 2;
            if (this.gotAttacked + 1 == modHandler.cycle) minimumDensity += 2;
            if (this.gotAttacked + 2 == modHandler.cycle) minimumDensity += 1;
            if (this.gotAttacked + 3 == modHandler.cycle) minimumDensity += 0.5;
        }
        if (modHandler.tick % 10 == 0 && this.opponent != null) console.log(minimumDensity, this.opponent.distance);
    
        outerLoop: for (var idIndex of this.borderingBots[myID]) {
            //attacking encircled bots
            if (modHandler.tick > latencySimulator.nextInfoSend || latencySimulator.nextInfoSend >= 95) break outerLoop; //fix end of the cycle and tick 0 attacks

            for (let i = 0; i < this.delayedBots.length; i++) { 
                if (this.delayedBots[i].id == idIndex) {
                    if (this.delayedBots[i].tick == latencySimulator.nextInfoSend && !alreadyAttacking(idIndex, 0)) {
                        targetID = idIndex;
                        if (modHandler.density(idIndex) <= 0.5 && !attacks.check(idIndex, maxEntities)) {
                            amount = 2.8 * land[idIndex];
                            //console.log(amount + "delayed");
                            break;
                        }
                        continue outerLoop;
                    }
                    continue outerLoop;
                }
            }
            //Attack Opening Encircled Bots
            if (!amount && !alreadyAttacking(idIndex, 0) && (modHandler.density(idIndex) <= 0.5 || difficultyEngine.botTiming[idIndex - playerCount] <= latencySimulator.nextInfoSend - modHandler.tick)) {
                if (getBorderRatio(idIndex, myID) >= 1 && !(attacks.getRemainingTroopsFromTarget(idIndex, myID) > 0) && attacks.getRemainingTroopsFromTarget(idIndex, 512) == 0 && modHandler.density(idIndex) <= 0.5) {
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
                        //console.log(amount + " encircled");
                    }
                    else continue outerLoop;
                }

                else if (!(getBorderRatio(idIndex, myID) >= 1) && !(attacks.getRemainingTroopsFromTarget(idIndex, myID) > 0) && ((modHandler.cycle == 9 && earlyMicro) || modHandler.cycle >= 10) && modHandler.density(myID) >= minimumDensity && !this.willAttackOpponent) {
                    //this.opponent == null this.opponent.distance >= 20
                    if (difficultyEngine.botTiming[idIndex - playerCount] <= latencySimulator.nextInfoSend - modHandler.tick && !this.canAttackFreeLand(idIndex)) {
                        
                        if (!this.attackMore) {
                            for (let i of this.borderingLandPixels[idIndex]) {
                                if (land[pixel.getOwner(i)] < stats[0]) continue outerLoop;
                            }
                        }
                        var updatesNeeded = distance.updateArrayToPoint(this.borderPixelsWithEntity[idIndex], this.getAllPixelsCoordinates(idIndex));
                        if (updatesNeeded[0]){
                            targetID = idIndex;
                            if (updatesNeeded[1] == land[idIndex]) amount = 2.7 * land[idIndex];
                            else amount = 2.8 * updatesNeeded[1];
                            //console.log(amount + " predicted");
                        } 
                        //Bot is too big, we might want to just send a bit
                        else continue outerLoop;                       
                    }

                    else if (modHandler.density(idIndex) <= 0.5 && !attacks.check(idIndex, maxEntities)) {
                        if (!this.attackMore) {
                            for (let i of this.borderingLandPixels[idIndex]) {
                                if (land[pixel.getOwner(i)] < stats[0]) continue outerLoop;
                            }
                        }

                        var updatesNeeded = distance.updateArrayToPoint(this.borderPixelsWithEntity[idIndex], this.getAllPixelsCoordinates(idIndex));
                        if (updatesNeeded[0]){
                            targetID = idIndex;
                            if (updatesNeeded[1] == land[idIndex]) amount = 2.7 * land[idIndex];
                            else amount = 2.8 * updatesNeeded[1];
                            //console.log(amount + " low density");
                        } 
                        //Bot is too big, we might want to just send a bit
                        else continue outerLoop;  
                    }
                }
            }
            
            if (amount && amount < troops[myID]) {
                //amount = getMin(amount, Math.floor(0.15 * troops[myID]));
                doAttack(targetID, divideFloor(amount * 1E3, troops[myID]));
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
                /*if (i < targetPointsLength * 0.6) {
                    returnedUpdates[0] = false;
                    //console.log("The bot is too big");
                    return returnedUpdates;
                }*/
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