function Messiah() {
    function getBorderRatio(authorID, targetID) {
        return cheat.borderingLandPixels[authorID].filter(pIndex => targetID === maxEntities ? pixel.isNeutral(pIndex) : pixel.strongIsOwner(targetID, pIndex)).length / cheat.borderingLandPixels[authorID].length
    }

    function getBorderLength(authorID, targetID) {
        return cheat.borderingLandPixels[authorID].filter(pIndex => targetID === maxEntities ? pixel.isNeutral(pIndex) : pixel.strongIsOwner(targetID, pIndex)).length
    }

    function alreadyAttacking(targetID, reinforcementThreshold) {
        return cheat.pending.findIndex(atk => atk.targetID == targetID) !== -1 || attacks.getRemainingTroopsFromTarget(myID, targetID) > reinforcementThreshold;
    }

    function approxPendingAmount() {
        var initialTroops = troops[myID];
        var pendingITick = divideFloor(modHandler.tick, 10);
        return cheat.pending.reduce(function(accumulator, obj) {
            if (obj.iTick > pendingITick) {
                pendingITick++;
                initialTroops *= interest.getInterestRate(myID)
            }
            const amount = obj.ratio * initialTroops / 1E3;
            initialTroops -= amount;
            return accumulator + amount;
        }, 0);
    }
    
    function botsLandStats() {
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
        let percent10Index = Math.floor(sortedLand.length * 0);
        let percent10 = sortedLand[percent10Index];
        let stats = [percent10, median, q1, q3, avgLand];
        return stats
    }

    function getOpeningRatio(earlySend, adjustedTiming) {
        if (earlySend) {
            if (modHandler.cycle == 1) return 282;
            const layersCanTake = Math.floor((100 - 7 - adjustedTiming) * modHandler.getSpeed(myID)),
                neutBorderRatio = getBorderRatio(myID, maxEntities),
                layerAddend = neutBorderRatio > .9 ? 4 : neutBorderRatio > .6 ? 3 : 2,
                initBorder = getBorderLength(myID, maxEntities);
            var landCanTake = 0;
            for (let lIndex = 0; lIndex < layersCanTake; lIndex++) {
                landCanTake += initBorder + layerAddend * lIndex;
            }
            return divideFloor(2E3 * landCanTake, troops[myID])
        } else return [282, 345, 321, 307, 437][modHandler.cycle - 1]; //We will use Vkij v4 for now, perhaps change later depending on map size
                                                                       //No we won't :)
    }

    function canAttack() {
        const _this = cheat;
        //This function is used to determine if the bot can attack, by evaluating its distance from opponents and its troop count/density ratio, as well as if it is currently being attacked.
        if (_this.opponent != null) {
            if (modHandler.cycle <= 9 && !_this.opponent.distance) {
                if (attacks.getRemainingTroopsFromTarget(_this.opponent.id, myID) > .1 * troops[myID] || modHandler.density(myID) < getMax(1.5, modHandler.density(_this.opponent.id) - .5) && troops[myID] - approxPendingAmount() <= .9 * troops[_this.opponent.id]) return false;
                else return true;
            } else {
                //If the Bot is currently being attacked and _this attack is strong (Define strong? 1-fifth of my troops), it cannot attack.
                if (attacks.getRemainingTroopsFromTarget(_this.opponent.id, myID) > .2*troops[myID] && modHandler.density(myID) <= 6) return false; 
                //If the opponent is not in range, the bot can attack; Our distance to density formula will be as follows: Either troops >= .85 Opp. troops or density >= getMax(oppDens, 5) - (minDistance/50)
                else if (troops[myID] - approxPendingAmount() < .85 * troops[_this.opponent.id] && modHandler.density(myID) < getMin(modHandler.density(_this.opponent.id) - 0.5, 5) - _this.opponent.distance/25) return false;
                else return true;
            }
            
        }
        else return true;
        
    }

    function doAttack(targetID, ratio) {
        if (singleplayer) {
            if (modHandler.latency) latencySimulator.addPendingAction(0, ratio, targetID, 0, 0)
            else processAttack(myID, targetID, ratio)
        } else dataEncoder.attack(ratio, targetID === maxEntities ? myID : targetID)
        
        cheat.pending.push({
            targetID: targetID,
            ratio: ratio,
            tick: latencySimulator.getNextUpdateTick(mainHandler.getTicksElapsed() + 1 + modHandler.latency) //need +1 or not?
        })
    }

    function doCancel(targetID) {
        if (singleplayer) {
            if (modHandler.latency) latencySimulator.addPendingAction(2, 0, targetID, 0, 0)
            else processAction.processCancel(myID, targetID)
            
            const aIndex = myAttacks.findIndex(atk => atk.targetID === targetID);
            if (aIndex != -1) myAttacks[aIndex].cancelling = true;
        } else dataEncoder.cancel(targetID === maxEntities ? myID : targetID)
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
                distance: distance.getTravelDistance(currentMapWidth, currentMapHeight) - 1
            }
        }
        else this.opponent = null;

        this.pending = [];
        this.delayedBots = [];
        this.delayedBotsAmount;
        this.borderingBots = new Array(playerCount);
        this.borderingLandPixels = new Array(maxEntities);
        this.borderPixelsWithEntity = new Array(maxEntities);
        for (var idIndex = 0; idIndex < maxEntities; idIndex++) {
            this.borderingLandPixels[idIndex] = new Array();
            if (idIndex < playerCount) this.borderingBots[idIndex] = new Array();
        }
        if (singleplayer && inSpawn && modHandler.customSetup != null) {
            spawn.set(myID, modHandler.customSetup.x, modHandler.customSetup.y);
            replayLogger.addLogs(1, myID, 0, 1E3, modHandler.customSetup.x, modHandler.customSetup.y);
            spawn.update();
        }
    };
    this.onAttacked = function(attackerID, amount) {
        if (alreadyAttacking(attackerID, 0)) return 0
        if (this.opponent != null && this.opponent.id == attackerID) { // if attacked by opponent
            if (modHandler.cycle <= 8 && modHandler.density(myID) <= 1.5 || modHandler.cycle > 8 && modHandler.density(myID) <= 6) { // if density is low such that not a good idea to tank an attack
                if (attacks.getRemainingTroopsFromTarget(myID, maxEntities) >= amount * .3) doCancel(maxEntities); //Get troops back if we can
                if (modHandler.cycle <= 8 && modHandler.density(attackerID) <= 1 && modHandler.density(myID) >= 1 || modHandler.cycle > 8 && modHandler.density(attackerID) <= 2 && modHandler.density(myID) >= 2) {
                    //We should check if their density is so low (perhaps below 1) so that in addition to countering, we can also attack them back and steal land
                    //Thing is, our troops may be low so we should check if we should just match their attack or we have enough to attack them back
                    if (troops[myID] >= 1.5 * troops[attackerID] + amount) { //If we have enough troops to attack them back
                        const landCanTake = distance.updateArrayToPoint(this.borderPixelsWithEntity[attackerID], this.getAllPixelsCoordinates(attackerID))[1];
                        amount = getMin(troops[myID], amount + landCanTake * (modHandler.density(attackerID) + 2));
                    }
                }
                doAttack(attackerID, getMin(divideFloor(amount * 1E3, troops[myID]), 800))
                //Currently, we only match their attacks.
            }
        }
    };
    this.opening = function() { //Recommended by ChatGPT and edited by me kek
        if (alreadyAttacking(maxEntities, 0)) {
            //If our next update tick will be in another cycle, we want to cancel the attack
            if (Math.ceil(latencySimulator.getNextUpdateTick(mainHandler.getTicksElapsed() + 1) / 100) != modHandler.cycle) {
                doCancel(maxEntities)
            }
            return 0;
        }
        //Bordercondition determines if we border a bot. If so, we want to attack with a lower ratio. If our border with neut land is too small, we want to attack with earlier but with a higher ratio.
        const isB2BSpawn = (this.opponent != null && this.opponent.distance <= 8), //If we are B2B with the opponent, we want to attack earlier
            borderCondition = this.borderingBots[myID].length > 0 ? getBorderRatio(myID, maxEntities) < .8 ? 2 : 1 : 0,
            timings = isB2BSpawn ? [64, 69, 67, 58, 56] : [71, 76, 74, 72, 63].map(e => e - (singleplayer && !modHandler.latency ? 1 : 7)),
            adjustedTiming = timings[modHandler.cycle - 1] - (borderCondition == 2 && !isB2BSpawn ? 7 : 0),
            ratio = getOpeningRatio(isB2BSpawn || borderCondition == 2, adjustedTiming) * (borderCondition == 1 ? 24/25 : 1);
        //This is to ensure that, if initially we did not plan to adjust our timing earlier, we do not adjust our timing later on which causes us to skip the attack
        //Since we won't attack anymore if alreadyAttack is true, we can just check if the tick is greater than the adjusted timing
        if (modHandler.tick >= adjustedTiming && modHandler.tick <= adjustedTiming + 14) doAttack(maxEntities, ratio); 
    };
    this.continuousExpansion = function() {
        const cycleAttackInitTimings = [[26, 33], [24, 31], [15, 22], [13, 20], [11, 18]],
              reinforcementThresholds = [850, 1250, 1000, 1000, 1000],
              reinforcementAmounts = [2500, 2500, 2500, 2000, 2000],
              cycleIndex = modHandler.cycle - 6;
        if (alreadyAttacking(maxEntities, reinforcementThresholds[this.opponent != null && !this.opponent.distance ? 0 : cycleIndex])) return 0
        var amount = 0;
        if (cycleIndex <= 1 && modHandler.tick == cycleAttackInitTimings[cycleIndex][1] || (this.opponent == null || this.opponent != null && this.opponent.distance >= 10) && modHandler.tick == cycleAttackInitTimings[cycleIndex][0]) amount = 2000
        else if (getBorderRatio(myID, maxEntities) < 1 && cycleIndex == 0 && modHandler.tick == cycleAttackInitTimings[cycleIndex][0] - 14) amount = 1;
        else if (modHandler.tick > cycleAttackInitTimings[cycleIndex][1] && modHandler.tick <= 84) amount = 1;
        if (amount == 1) amount = getBorderRatio(myID, maxEntities) <= 0.05 ? 0 : reinforcementAmounts[cycleIndex] *= getMin(1, 0.4 + getBorderRatio(myID, maxEntities))
        if (amount > troops[myID]) amount = troops[myID];
        if (amount && canAttack()) doAttack(maxEntities, divideFloor(amount * 1E3, troops[myID]))
    };
    this.update = function() {
        if (!isAlive[myID] || gamemode === 8 && this.opponent != null && !isAlive[this.opponent.id]) return 0;
        modHandler.gameSpeed = 1;
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
        if (modHandler.cycle >= 9 && modHandler.tick == 80) doAttack(maxEntities, 10);
        //if (modHandler.cycle >= 9 && !alreadyAttacking(maxEntities, 500) && !this.borderingLandPixels[myID].findIndex(pIndex => pixel.isNeutral(pIndex)) === -1) console.log(1), doAttack(maxEntities, Math.floor(land[myID] / troops[myID] * 100));
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
                this.borderPixelsWithEntity[this.opponent.id] = new Array();
                for (var pIndex2 of landBorderPixels[this.opponent.id]) {
                    if (modHandler.tick % 5 == 1 && this.opponent.distance) this.opponent.distance = getMin(distance.getTravelDistance(pixel.toX(pIndex1) - pixel.toX(pIndex2), pixel.toY(pIndex1) - pixel.toY(pIndex2)) - 1, this.opponent.distance);
                    if (!this.borderingLandPixels[this.opponent.id].length) {
                        for (var side = 3; side >= 0; side--) {
                            var pIndex3 = pIndex2 + offset[side];
                            if (!pixel.strongIsOwner(this.opponent.id, pIndex3) && !this.borderingLandPixels[this.opponent.id].includes(pIndex3)) this.borderingLandPixels[this.opponent.id].push(pIndex3);
                            var owner = pixel.getOwner(pIndex3)
                            if (pixel.entityControlled(pIndex3) && owner >= playerCount && !this.borderingBots[this.opponent.id].includes(owner)) this.borderingBots[this.opponent.id].push(owner)
                            if (!pixel.strongIsOwner(this.opponent.id, pIndex3) && pixel.strongIsOwner(myID, pIndex3) && !this.borderPixelsWithEntity[this.opponent.id].includes(pIndex3)) {
                                this.borderPixelsWithEntity[this.opponent.id].push(pIndex3);
                            }
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
    };
    this.micro = function() {
        //!alreadyAttacking(idIndex, 5000 * modHandler.getSpeed(myID) ** 1.5)
        //modHandler.tick <= upperTimeLimit[land[myID] <= 6E4 ? 0 : 1]
        var targetID, amount = 0, isDelayedBot = false;
        let stats = botsLandStats();
        if (modHandler.tick == 0) this.delayedBots = []; //reset array at the start of every cycle
        outerLoop: for (var idIndex of this.borderingBots[myID]) {
            //attacking encircled bots
            if (modHandler.tick > latencySimulator.nextInfoSend || latencySimulator.nextInfoSend >= 95) break outerLoop; //fix end of the cycle and tick 0 attacks
            this.delayedBotsAmount = 0;
            for (let i = 0; i < this.delayedBots.length; i++) { 
                this.delayedBotsAmount += land[this.delayedBots[i].id] * 3;
                if (this.delayedBots[i].id == idIndex) {
                    if (this.delayedBots[i].tick != latencySimulator.nextInfoSend) {
                        var updatesNeeded = distance.updateArrayToPoint(this.borderPixelsWithEntity[idIndex], this.getAllPixelsCoordinates(idIndex));
                        if (updatesNeeded[0] >= modHandler.updatesLeft) this.delayedBots[i].tick == latencySimulator.nextInfoSend;
                    }
                    if (this.delayedBots[i].tick == latencySimulator.nextInfoSend && !alreadyAttacking(idIndex, 0)) { 
                        if (modHandler.density(idIndex) <= 0.7 && !attacks.check(idIndex, maxEntities)) {
                            /*for (let i of this.borderingLandPixels[idIndex]) {
                                if (land[pixel.getOwner(i)] < stats[0]) {
                                    let remainingTroops = attacks.getRemainingTroopsFromTarget(idIndex, pixel.getOwner(i));
                                    if (attacks.check(idIndex, pixel.getOwner(i))) {
                                        if (remainingTroops >= 2 * land[pixel.getOwner(i)] && remainingTroops >= land[idIndex] * 0.5) continue outerLoop;
                                    } 
                                }
                            }*/
                            targetID = idIndex;
                            var updatesNeeded = distance.updateArrayToPoint(this.borderPixelsWithEntity[idIndex], this.getAllPixelsCoordinates(idIndex));
                            if (getBorderRatio(idIndex, myID) >= 1) amount = 2.8 * land[idIndex];
                            else amount = 2.8 * updatesNeeded[1];
                            isDelayedBot = true;
                            //console.log(nicknames[idIndex] + " delayed", land[idIndex]);
                            this.delayedBots.splice(idIndex, 1);
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
                        //console.log(nicknames[idIndex] + " encircled");
                    }
                    else continue outerLoop;
                }
                else if (!(getBorderRatio(idIndex, myID) >= 1) && !(attacks.getRemainingTroopsFromTarget(idIndex, myID) > 0) && ((modHandler.cycle == 9 && earlyMicro) || modHandler.cycle >= 10)) {
                    //this.opponent == null this.opponent.distance >= 20
                    if (difficultyEngine.botTiming[idIndex - playerCount] <= latencySimulator.nextInfoSend - modHandler.tick && !this.canAttackFreeLand(idIndex)) {
                        /*if (!this.attackMore) {
                            for (let i of this.borderingLandPixels[idIndex]) {
                                if (land[pixel.getOwner(i)] < stats[0]) continue outerLoop;
                                //if (getBorderRatio(idIndex, pixel.getOwner(i)) < 0.04) continue outerLoop;
                            }
                        }*/
                        var updatesNeeded = distance.updateArrayToPoint(this.borderPixelsWithEntity[idIndex], this.getAllPixelsCoordinates(idIndex));
                        if (updatesNeeded[0]) {
                            targetID = idIndex;
                            if (updatesNeeded[1] == land[idIndex]) amount = 2.7 * land[idIndex];
                            else amount = 2.8 * updatesNeeded[1];
                            //console.log(nicknames[idIndex] + " predicted")
                        } 
                        //Bot is too big, we might want to just send a bit
                        else continue outerLoop;                       
                    }
                    else if (modHandler.density(idIndex) <= 0.4 && !attacks.check(idIndex, maxEntities)) {
                        /*if (!this.attackMore) {
                            for (let i of this.borderingLandPixels[idIndex]) {
                                if (land[pixel.getOwner(i)] < stats[0]) continue outerLoop;
                            }
                        }*/
                        /*let willTakeTonsOfLand = false;
                        let attackingAway = true;
                        for (let i of this.borderingLandPixels[idIndex]) {
                            let j = pixel.getOwner(i);
                            if (attacks.check(idIndex, j)) {
                                if (land[j] < stats[0]) {
                                    let remainingTroops = attacks.getRemainingTroopsFromTarget(idIndex, j);
                                    if (remainingTroops >= 2 * land[j] && remainingTroops >= land[idIndex] / 2) continue outerLoop;
                                }
                                //if (getBorderRatio(idIndex, j) < 0.1) continue outerLoop;
                                if (modHandler.density(j) < 0.4 || difficultyEngine.botTiming[j - playerCount] <= latencySimulator.nextInfoSend - modHandler.tick + 7) willTakeTonsOfLand = true;
                                if (this.borderingBots[myID].includes(j)) attackingAway = false;
                            }
                        }*/
                        var updatesNeeded = distance.updateArrayToPoint(this.borderPixelsWithEntity[idIndex], this.getAllPixelsCoordinates(idIndex));
                        if (updatesNeeded[0]) {
                            targetID = idIndex;
                            if (updatesNeeded[1] == land[idIndex]) amount = 2.7 * land[idIndex];
                            else amount = 2.8 * updatesNeeded[1];
                            //console.log(nicknames[idIndex] + " low d");
                            //updatesNeeded[0] - modHandler.updatesLeft < 30 * modHandler.getSpeed(myID)
                            /*if (updatesNeeded[1] == land[idIndex]) {
                                if (attackingAway && willTakeTonsOfLand) amount = 2.7 * updatesNeeded[1];
                                else if (attackingAway) amount = 2.6 * updatesNeeded[1];
                                else if (willTakeTonsOfLand) amount = 2.4 * updatesNeeded[1];//f
                                else amount = 2.7 * updatesNeeded[1];
                                console.log(nicknames[idIndex] + " density normal", attackingAway, willTakeTonsOfLand);
                            }
                            else if (updatesNeeded[1] > land[idIndex] * 0.9) {
                                if (attackingAway && willTakeTonsOfLand) amount = 3.9 * updatesNeeded[1];
                                else if (attackingAway) amount = 2.7 * updatesNeeded[1];
                                else if (willTakeTonsOfLand) amount = 2.7 * updatesNeeded[1];
                                else amount = 2.7 * updatesNeeded[1];
                                console.log(nicknames[idIndex] + " density force kill 90", attackingAway, willTakeTonsOfLand);
                            } 
                            else if (updatesNeeded[1] > land[idIndex] * 0.8) {
                                if (attackingAway && willTakeTonsOfLand) amount = 2.7 * updatesNeeded[1];
                                else if (attackingAway) amount = 3.3 * updatesNeeded[1];//f
                                else if (willTakeTonsOfLand) amount = 2.7 * updatesNeeded[1];
                                else amount = 2.9 * updatesNeeded[1];//f
                                console.log(nicknames[idIndex] + " density force kill 80", attackingAway, willTakeTonsOfLand);
                            } 
                            else if (updatesNeeded[1] > land[idIndex] * 0) {
                                if (attackingAway && willTakeTonsOfLand) amount = 2.7 * updatesNeeded[1];//f
                                else if (attackingAway) amount = 2.7 * updatesNeeded[1];
                                else if (willTakeTonsOfLand) amount = 2.7 * updatesNeeded[1];
                                else amount = 2.6 * updatesNeeded[1];
                                console.log(nicknames[idIndex] + " density take part " + Math.round(updatesNeeded[1]/land[idIndex]*100)/100, attackingAway, willTakeTonsOfLand);
                            } */
                        } 
                        //Bot is too big, we might want to just send a bit
                        else continue outerLoop;  
                    }
                }
            }
            if (amount && amount < troops[myID] && canAttack()) {
                if (isDelayedBot || (!isDelayedBot && troops[myID] - amount >= this.delayedBotsAmount)) {
                    doAttack(targetID, divideFloor(amount * 1E3, troops[myID]));
                    break outerLoop;
                }
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
