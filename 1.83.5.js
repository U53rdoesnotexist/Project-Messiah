function loadUsername() {
    if (isIOS) return iosObject.username;
    if (12 <= androidVersion) {
        var username = androidObject.loadString(20);
        if ("" === username) {
            username = "Android User " + Math.floor(1E3 * Math.random());
            androidObject.saveString(20, username);
        }
    } else if (5 <= androidVersion) {
        username = androidObject.loadString(0);
        if ("" === username) {
            username = "Player " + Math.floor(1E3 * Math.random());
            androidObject.saveString(0, username);
        }
    } else username = userSettings.getSettings(0);
    return username;
}


function setClientID() {
    clientID = Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1));
    if (isIOS) clientID = iosObject.id;
    else if (12 <= androidVersion) {
        var oldClientID = androidObject.loadNumber(20);
        if (-1 === oldClientID) androidObject.saveNumber(20, clientID);
        else clientID = oldClientID;
    } else if (5 <= androidVersion) {
        var oldClientID = androidObject.loadNumber(2);
        if (2 === oldClientID) androidObject.saveNumber(2, clientID + 3);
        else clientID = oldClientID - 3;
    } else clientID = userSettings.getSettings(1);
}


function loadPassword() {
    var password = 0;
    if (isIOS) password = iosObject.password;
    else if (12 <= androidVersion) password = androidObject.loadString(22);
    else {
        if (5 <= androidVersion) return password;
        password = userSettings.getSettings(9)
    }
    var passwordMaxLimit = Math.floor(Math.pow(2, 48));
    password = Math.floor(parseInt(strings.convertToNumeric(password)));
    if (0 < password && password < passwordMaxLimit) return password;
    password = Math.floor(1 + (passwordMaxLimit - 1) * Math.random());
    return savePassword(password) ? password : 0
}

function setSound() {
    if (isIOS) return iosObject.sound;
    if (12 <= androidVersion) {
        var sound = androidObject.loadNumber(22);
        return 1 === Math.abs(sound)
    }
    return 5 <= androidVersion ? 0 < androidObject.loadNumber(11) : 0 !== userSettings.getSettings(2)
}

function setZoom() {
    if (isIOS) isZoom = iosObject.zoom || mainCanvasWidth < mainCanvasHeight;
    else if (12 <= androidVersion) {
        var zoom = androidObject.loadNumber(21);
        if (-1 === zoom) {
            isZoom = 100 >= androidObject.getNumber(0) || mainCanvasWidth < mainCanvasHeight;
            androidObject.saveNumber(21, isZoom ? 1 : 0);
        } else isZoom = 1 === zoom || mainCanvasWidth < mainCanvasHeight;
    } else if (5 <= androidVersion) {
        var zoom = androidObject.loadNumber(1);
        if (2 === zoom) {
            isZoom = true;
            androidObject.saveNumber(1, isZoom ? 1 : 0);
        } else isZoom = 1 === zoom;
    } else isZoom = 0 === userSettings.getSettings(4) || mainCanvasWidth < mainCanvasHeight;
}


function loadEmojis() {
    return isIOS ? iosObject.emojis : 5 <= androidVersion ? androidObject.loadString(1) : userSettings.getSettings(7)
}

function loadColors() {
    return isIOS ? iosObject.colors : 12 <= androidVersion ? androidObject.loadString(21) : 5 <= androidVersion ? androidObject.loadString(2) : userSettings.getSettings(8)
}

function saveUsername(username) {
    if (isIOS) window.webkit.messageHandlers.iosCommandA.postMessage("username " + username);
    else if (12 <= androidVersion) {
        androidObject.saveString(20, username);
        androidObject.setState(10);
    } else if (5 <= androidVersion) androidObject.saveString(0, username);
    else {
        if (3 > username.length || 0 <= username.indexOf(";")) username = "Player 666";
        userSettings.setSettings(0, username);
        userSettings.formatSettings()
    }
}

function savePassword(password) {
    password = strings.convertToAlphanumeric(password.toString());
    if (isIOS) {
        iosObject.password = password;
        window.webkit.messageHandlers.iosCommandA.postMessage("password " + password);
        return true;
    } else if (12 <= androidVersion) {
        androidObject.saveString(22, password);
        return true;
    } else if (5 <= androidVersion) return false;
    else if (2 === userSettings.getCookieStatus()) {
        userSettings.setSettings(9, password);
        userSettings.formatSettings();
        return true;
    } else return false;
}

function saveOptions(zoom, sound) {
    if (isIOS) {
        window.webkit.messageHandlers.iosCommandA.postMessage("zoom " + (zoom ? 1 : 0));
        window.webkit.messageHandlers.iosCommandA.postMessage("sound " + (sound ? 1 : 0));
    } else if (12 <= androidVersion) {
        androidObject.saveNumber(22, sound ? 1 : 0);
        androidObject.saveNumber(21, zoom ? 1 : 0);
    } else if (5 <= androidVersion) {
        androidObject.saveNumber(1, zoom ? 1 : 0);
        androidObject.saveNumber(11, sound ? 1 : 0);
    } else {
        userSettings.setSettings(2, sound ? 1 : 0);
        userSettings.setSettings(4, zoom ? 0 : 1);
        userSettings.formatSettings();
    }
}

function saveEmojis() {
    var emojiString = "";
    for (var eIndex = 0; eIndex < emojis.totalDistinctEmojisCount; eIndex += 2) {
        if (emojis.emojiSelection[eIndex] || emojis.emojiSelection[eIndex + 1]) {
            if (emojis.emojiSelection[eIndex] && !emojis.emojiSelection[eIndex + 1]) emojiString += "1";
            else if (!emojis.emojiSelection[eIndex] && emojis.emojiSelection[eIndex + 1]) emojiString += "2";
            else emojiString += "3";
        } else emojiString += "0";
    }
    if (isIOS) window.webkit.messageHandlers.iosCommandA.postMessage("emojis " + emojiString);
    else if (5 <= androidVersion) androidObject.saveString(1, emojiString);
    else {
        userSettings.setSettings(7, emojiString);
        userSettings.formatSettings();
    }
}

function saveColors(colors) {
    if (isIOS) window.webkit.messageHandlers.iosCommandA.postMessage("colors " + colors);
    else {
        if (12 <= androidVersion) androidObject.saveString(21, colors);
        else if (5 <= androidVersion) {
            androidObject.saveString(2, colors);
            return
        }
        userSettings.setSettings(8, colors);
        userSettings.formatSettings()
    }
}

function setAndroidState(state) {
    isIOS || 5 <= androidVersion && androidObject.setState(state)
}

function showAd() {
    isIOS ? window.webkit.messageHandlers.iosCommandA.postMessage("show ad 1800000") : 12 <= androidVersion && androidObject.presentAd(18E5)
}

function reloadClient() {
    isIOS ? location.reload() : 7 <= androidVersion ? androidObject.setState(5) : location.reload()
}

function setAndroidHTMLHeader() {
    14 > androidVersion || androidObject.saveString(23, '<!DOCTYPE html>\n<html lang="aG">\n' + document.getElementsByTagName("html")[0].innerHTML + "\n</html>")
}
self.aiCommand746 = function(option) {
    if (0 === option) init()
    else if (1 === option && 14 <= androidVersion) gameStateManager.aK()
};
var lastAttackIndex, lastAuthorID, lastRemaining, lastRemainingPerPixel, lastTargetID, lastBorderLength, lastArrayMaxLength, lastBorderLand, lastLandGained, lastInnerPixels, offset, editingMatrix, lastBorderTaken;

function attackMatrixInit() {
    lastBorderLength = 0;
    lastArrayMaxLength = 2048;
    lastBorderLand = new Uint32Array(4 * lastArrayMaxLength);
    lastLandGained = 0;
    lastInnerPixels = new Uint32Array(lastArrayMaxLength);
    offset = new Int32Array(4);
    offset[0] = -4 * currentMapWidth;
    offset[1] = 4;
    offset[2] = -offset[0];
    offset[3] = -offset[1];
    editingMatrix = new Uint8Array(currentMapWidth * currentMapHeight)
}

function attackProcessInit(id) {
    lastAuthorID = id;
    lastBorderTaken = false;
    setBorderToInnerPixels();
    setMarkedLandToBorderPixel();
    for (var aIndex = attacks.getCurrentAttackCount(lastAuthorID) - 1; 0 <= aIndex; aIndex--) {
        if (0 === attacks.getBoatIDFromIndex(lastAuthorID, aIndex)) {
            lastAttackIndex = aIndex;
            startTestingTakingProcess();
        }
    }
    lastBorderTaken && updateTakenPixelArrays()
}

function updateTakenPixelArrays() {
    updateEditingBorderPixels();
    updatePixelsBorderingTerrain()
}

function startTestingTakingProcess() {
    lastTargetID = attacks.getTargetFromIndex(lastAuthorID, lastAttackIndex);
    lastRemaining = attacks.getRemainingTroopsFromIndex(lastAuthorID, lastAttackIndex);
    markPossibleExpansion();
    if (0 === lastBorderLength) returnRemaining()
    else {
        resetEditingMatrix();
        if (canTakeMarkedPixels()) tryTakingMarkedPixels()
        else returnRemaining()
    }
}

function canTakeMarkedPixels() {
    lastRemainingPerPixel = divideFloor(lastRemaining, lastBorderLength);
    return lastRemainingPerPixel > neutralLandCost
}

function resetEditingMatrix() {
    var bIndex;
    for (bIndex = lastBorderLength - 1; 0 <= bIndex; bIndex--) editingMatrix[divideFloor(lastBorderLand[bIndex], 4)] = 0
}

function returnRemaining() {
    1 === attacks.getCurrentAttackCount(lastAuthorID) && speed.removeEntry(lastAuthorID);
    if (lastAuthorID !== myID) troops[lastAuthorID] += lastRemaining, interest.limitTroops(lastAuthorID);
    else {
        var oldTroop = troops[lastAuthorID];
        troops[lastAuthorID] += lastRemaining;
        interest.limitTroops(lastAuthorID);
        statisticNumbers.numbers[13] -= troops[lastAuthorID] - oldTroop
    }
    attacks.removeAttack(lastAuthorID, lastAttackIndex)
}

function setBorderToInnerPixels() {
    var potentialBorderLength = potentialBorderAdvances[lastAuthorID].length;
    potentialBorderLength = potentialBorderLength > lastArrayMaxLength ? lastArrayMaxLength : potentialBorderLength;
    lastLandGained = 0;
    for (--potentialBorderLength; 0 <= potentialBorderLength; potentialBorderLength--) lastInnerPixels[lastLandGained++] = potentialBorderAdvances[lastAuthorID][potentialBorderLength]
}

function setMarkedLandToBorderPixel() {
    var bIndex;
    for (bIndex = potentialBorderAdvances[lastAuthorID].length - 1; 0 <= bIndex; bIndex--) {
        if (pixel.canOwn(potentialBorderAdvances[lastAuthorID][bIndex])) pixel.changeToBorderPixel(potentialBorderAdvances[lastAuthorID][bIndex], lastAuthorID);
    }
    potentialBorderAdvances[lastAuthorID] = []
}

function markPossibleExpansion() {
    lastBorderLength = 0;
    lastTargetID === maxEntities ? markPossibleNeutralExpansion() : markPossibleEntityExpansion()
}

function markPossibleEntityExpansion() {
    var side, landIndex;
    for (side = 3; 0 <= side; side--) {
        for (landIndex = lastLandGained - 1; 0 <= landIndex; landIndex--) {
            var pIndex = lastInnerPixels[landIndex] + offset[side];
            var coord = divideFloor(pIndex, 4);
            if (0 === editingMatrix[coord] && pixel.entityControlled(pIndex) && pixel.getOwner(pIndex) === lastTargetID) {
                editingMatrix[coord] = 1;
                lastBorderLand[lastBorderLength++] = pIndex;
            }
        }
        }
}

function markPossibleNeutralExpansion() {
    var side, landIndex;
    for (side = 3; 0 <= side; side--) {
        for (landIndex = lastLandGained - 1; 0 <= landIndex; landIndex--) {
            var pIndex = lastInnerPixels[landIndex] + offset[side];
            var coord = divideFloor(pIndex, 4);
            if (0 === editingMatrix[coord] && pixel.isNeutral(pIndex)) {
                editingMatrix[coord] = 1;
                lastBorderLand[lastBorderLength++] = pIndex;
            }
        }
        }
}

function tryTakingMarkedPixels() {
    if (stillCanTakeMarkedPixels()) {
        TakeBorderPixels();
        if (lastTargetID !== maxEntities) updateTargetPixelArrays()
    } else returnRemaining()
}

function updateTargetPixelArrays() {
    deductTargetLand();
    removeTargetTerrainBorderPixels(landBorderPixels[lastTargetID]);
    removeTargetTerrainBorderPixels(waterBorderPixels[lastTargetID]);
    removeTakenPixelsInPotentialAdvances(potentialBorderAdvances[lastTargetID]);
    constructNewBorderTerrain(waterBorderPixels[lastTargetID]);
    constructNewBorderTerrain(mountainBorderPixels[lastTargetID]);
    convertLastInnerPixelsToBorder();
    updateTargetXYMinMax()
}

function TakeBorderPixels() {
    lastBorderTaken = true;
    attacks.setRemainingTroopsFromIndex(lastAuthorID, lastAttackIndex, lastRemaining);
    land[lastAuthorID] += lastBorderLength;
    updateAuthorXYMinMax();
    constructNewLandBorder()
}

function stillCanTakeMarkedPixels() {
    return lastTargetID === maxEntities ? deductTroopsTakingNeutralPixels() : deductTroopsTakingTargetPixels()
}

function deductTroopsTakingTargetPixels() {
    var troopsNeededToTakeBasePixels = lastBorderLength * neutralLandCost,
        totalTroopsNeededToTakePixels = getTroopsNeededToKillTargetTroopsAtBorderPixels(),
        remainingTroopsLeft = getLastAttackRemaining();
    totalTroopsNeededToTakePixels = troopsNeededToTakeBasePixels + 2 * totalTroopsNeededToTakePixels + remainingTroopsLeft;
    var tempLastRemaining = lastRemainingPerPixel * lastBorderLength;
    if (tempLastRemaining > totalTroopsNeededToTakePixels) {
        lastRemaining -= totalTroopsNeededToTakePixels;
        killAllTroops(totalTroopsNeededToTakePixels - troopsNeededToTakeBasePixels, remainingTroopsLeft);
        return true;
    }
    lastRemaining -= tempLastRemaining;
    killAllTroops(tempLastRemaining - troopsNeededToTakeBasePixels, remainingTroopsLeft);
    return false
}

function killAllTroops(troopsNeededToKillTargetTroops, remainingTroops) {
    if (0 < remainingTroops)
        if (troopsNeededToKillTargetTroops >= remainingTroops) {
            attacks.setRemainingTroopsFromTarget(lastTargetID, lastAuthorID, 0);
            troopsNeededToKillTargetTroops -= remainingTroops;
        } else {
            attacks.setRemainingTroopsFromTarget(lastTargetID, lastAuthorID, remainingTroops - troopsNeededToKillTargetTroops);
            return
        } troopsNeededToKillTargetTroops = divideFloor(troopsNeededToKillTargetTroops, 2);
    troops[lastTargetID] = troops[lastTargetID] >= troopsNeededToKillTargetTroops ? troops[lastTargetID] - troopsNeededToKillTargetTroops : 0
}

function getLastAttackRemaining() {
    return attacks.getRemainingTroopsFromTarget(lastTargetID, lastAuthorID)
}

function getTroopsNeededToKillTargetTroopsAtBorderPixels() {
    return divideFloor(lastBorderLength * troops[lastTargetID], 1 + estimateBorderLength() * getWeightedBorderTroopDensity())
}

function estimateBorderLength() {
    return Math.floor(2 + sqrtEstimation(divideFloor(land[lastTargetID], 100), 8))
}

function getWeightedBorderTroopDensity() {
    return landBorderPixels[lastTargetID].length + divideFloor(waterBorderPixels[lastTargetID].length + mountainBorderPixels[lastTargetID].length, 50)
}

function deductTroopsTakingNeutralPixels() {
    lastRemaining -= lastBorderLength * neutralLandCost;
    return true
}

function constructNewLandBorder() {
    for (var bIndex = lastBorderLength - 1; 0 <= bIndex; bIndex--) {
        potentialBorderAdvances[lastAuthorID].push(lastBorderLand[bIndex]);
        landBorderPixels[lastAuthorID].push(lastBorderLand[bIndex]);
        pixel.changeToBorderPixel(lastBorderLand[bIndex], lastAuthorID)
    }
}

function MainLeaderboardIcon() {
    var renderScale = 1,
        buttons = [null, null];
    this.init = function() {
        renderScale = .72 * (isZoom ? .0011 : .001) * averageDim;
        for (var bIndex = 1; 0 <= bIndex; bIndex--) buttons[bIndex] && this.setLabel(bIndex, buttons[bIndex].label)
    };
    this.setLabel = function(bIndex, text) {
        buttons[bIndex] = {
            label: text,
            font: fontWeightBold + 10 + fontSizeArial
        };
        this.updateRenderObject(bIndex)
    };
    this.updateRenderObject = function(bIndex) {
        if (sprites.areAllSpritesLoaded() && buttons[bIndex]) {
            var label = buttons[bIndex].label,
                renderHeight = Math.floor(.15 * renderScale * sprites.getValueByID(13).height),
                fontStyle = fontWeightBold + renderHeight + fontSizeArial,
                textLength = gameMessages.measureText(label, fontStyle),
                renderWidth = .8 * renderScale * sprites.getValueByID(13).width;
            if (textLength > renderWidth) {
                renderHeight = Math.floor(renderHeight * renderWidth / textLength);
                fontStyle = fontWeightBold + renderHeight + fontSizeArial;
            }
            buttons[bIndex] = {
                label: label,
                font: fontStyle
            };
            mainHandler.canvasDirty = true
        }
    };
    this.getRenderHeight = function() {
        return Math.floor(renderScale * sprites.getValueByID(13).height)
    };
    this.mouseDown = function(xPos, yPos) {
        if (!sprites.areAllSpritesLoaded() || xPos < bufferLength || yPos < prevClientHeight - mainSettings.width - renderScale * sprites.getValueByID(13).height - 2 * bufferLength || 
            yPos > prevClientHeight - mainSettings.width - 2 * bufferLength) return false;
        else if (xPos < bufferLength + renderScale * sprites.getValueByID(13).width) {
            mainLeaderboard.toggleVisibility(0);
            return true;
        } else if (xPos < 2 * bufferLength + renderScale * sprites.getValueByID(13).width) return false;
        else if (xPos < 2 * bufferLength + 2 * renderScale * sprites.getValueByID(13).width) {
            mainLeaderboard.toggleVisibility(1);
            return true;
        } else return false;
    };
    this.toY = function() {
        return Math.floor(prevClientHeight - mainSettings.width - renderScale * sprites.getValueByID(13).height - 2 * bufferLength)
    };
    this.drawCanvasImage = function() {
        if (sprites.areAllSpritesLoaded()) {
            mainCanvasCtx.imageSmoothingEnabled = true;
            mainCanvasCtx.setTransform(renderScale, 0, 0, renderScale, bufferLength, this.toY());
            mainCanvasCtx.drawImage(sprites.getValueByID(14), 0, 0);
            mainCanvasCtx.setTransform(renderScale, 0, 0, renderScale, 2 * bufferLength + renderScale * sprites.getValueByID(13).width, this.toY());
            mainCanvasCtx.drawImage(sprites.getValueByID(13), 0, 0);
            for (var bIndex = 1; 0 <= bIndex; bIndex--) {
                if (buttons[bIndex]) {
                    mainCanvasCtx.setTransform(1, 0, 0, 1, (1 + bIndex) * bufferLength + bIndex * renderScale * sprites.getValueByID(13).width, this.toY());
                    mainCanvasCtx.font = buttons[bIndex].font;
                    mainCanvasCtx.textBaseline = middleAlign;
                    mainCanvasCtx.textAlign = centerAlign;
                    mainCanvasCtx.fillStyle = whiteRGB2;
                    mainCanvasCtx.fillText(buttons[bIndex].label, .5 * renderScale * sprites.getValueByID(13).width, .86 * renderScale * sprites.getValueByID(13).height);
                }
            }
            mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
}

function botProcessAttack(authorID, targetID, sIndex, amount) {
    var tax = divideFloor(3 * troops[authorID], 256);
    amount -= amount >= divideFloor(troops[authorID], 2) ? tax : 0;
    takePixelsAndChangeToMoving(sIndex, authorID);
    attacks.set(authorID, amount, targetID);
    troops[authorID] -= amount + tax;
    speed.addEntry(authorID, false)
}

function botAddTakableTargetPixelsToAdvance(authorID, targetID) {
    var bIndex, side;
    for (bIndex = landBorderPixels[authorID].length - 1; 0 <= bIndex; bIndex--)
        if (pixel.isBorder(landBorderPixels[authorID][bIndex]))
            for (side = 3; 0 <= side; side--)
                if (pixel.entityControlled(landBorderPixels[authorID][bIndex] + offset[side]) && pixel.getOwner(landBorderPixels[authorID][bIndex] + offset[side]) === targetID) {
                    potentialBorderAdvances[authorID].push(landBorderPixels[authorID][bIndex]);
                    break
                }
}

function takePixelsAndChangeToMoving(sIndex, id) {
    for (var bIndex = potentialBorderAdvances[id].length - 1; bIndex >= sIndex; bIndex--) pixel.changeToMovingPixel(potentialBorderAdvances[id][bIndex], id)
}

function botAddTakableNeutralPixelsToAdvances(id) {
    for (var side, bIndex = landBorderPixels[id].length - 1; 0 <= bIndex; bIndex--)
        if (pixel.isBorder(landBorderPixels[id][bIndex]))
            for (side = 3; 0 <= side; side--)
                if (pixel.isNeutral(landBorderPixels[id][bIndex] + offset[side])) {
                    potentialBorderAdvances[id].push(landBorderPixels[id][bIndex]);
                    break
                }
}

function botChecksLoseIfBordersStuff(id, considerTeamates) {
    var bsIndex, side;
    var bIndex = landBorderPixels[id].length;
    var bIndexOffset = 256 <= bIndex ? 12 : 32 <= bIndex ? 6 : 1;
    bIndex = bIndex - 1 - fakeRandom.calcFractionalValue(bIndexOffset);
    botLastBorderingStuffCount = 0;
    loop: for (; 0 <= bIndex; bIndex -= bIndexOffset)
        for (side = 3; 0 <= side; side--) {
            var ownerID = pixel.isNeutral(landBorderPixels[id][bIndex] + offset[side]) ? maxEntities : pixel.getOwner(landBorderPixels[id][bIndex] + offset[side]);
            if (ownerID === maxEntities || pixel.entityControlled(landBorderPixels[id][bIndex] + offset[side]) && ownerID !== id && (considerTeamates || isNotTeamate(id, ownerID))) {
                for (bsIndex = botLastBorderingStuffCount - 1; 0 <= bsIndex; bsIndex--)
                    if (botLastBorderingStuffs[bsIndex] === ownerID) continue loop;
                botLastBorderingStuffs[botLastBorderingStuffCount] = ownerID;
                if (++botLastBorderingStuffCount >= botMaxBorderingStuffCap) return true
            }
        }
    return 0 < botLastBorderingStuffCount
}

function botChecksStrongIfBordersStuff(id, considerTeamates) {
    var bIndex, side;
    botLastBorderingStuffCount = 0;
    for (bIndex = landBorderPixels[id].length - 1; 0 <= bIndex; bIndex--)
        for (side = 3; 0 <= side; side--) {
            var ownerID = pixel.isNeutral(landBorderPixels[id][bIndex] + offset[side]) ? maxEntities : pixel.getOwner(landBorderPixels[id][bIndex] + offset[side]);
            if (ownerID === maxEntities || pixel.entityControlled(landBorderPixels[id][bIndex] + offset[side]) && ownerID !== id && (considerTeamates || isNotTeamate(id, ownerID))) {
                botLastBorderingStuffs[botLastBorderingStuffCount++] = ownerID;
                return true
            }
        }
    return false
}

function botChecksAndRemovesNeutral() {
    for (var bsIndex = botLastBorderingStuffCount - 1; 0 <= bsIndex; bsIndex--) {
        if (botLastBorderingStuffs[bsIndex] === maxEntities) {
            for (botLastBorderingStuffCount--; bsIndex < botLastBorderingStuffCount; bsIndex++) botLastBorderingStuffs[bsIndex] = botLastBorderingStuffs[bsIndex + 1];
            return true
        }
    }
    return false
}

function botChecksAndRemovesIfAttackingAllTargets(id) {
    var bsIndex1, bsIndex2;
    for (bsIndex1 = botLastBorderingStuffCount - 1; 0 <= bsIndex1; bsIndex1--)
        if (attacks.check(id, botLastBorderingStuffs[bsIndex1]))
            for (botLastBorderingStuffCount--, bsIndex2 = bsIndex1; bsIndex2 < botLastBorderingStuffCount; bsIndex2++) botLastBorderingStuffs[bsIndex2] = botLastBorderingStuffs[bsIndex2 + 1];
    return 0 === botLastBorderingStuffCount
}

function isBotBorderingOtherBots() {
    for (var bsIndex = botLastBorderingStuffCount - 1; 0 <= bsIndex; bsIndex--)
        if (botLastBorderingStuffs[bsIndex] >= playerCount) return true;
    return false
}

function botChecksNotAndRemovesIfBorderingAllHumans() {
    var bsIndex1, bsIndex2;
    for (bsIndex1 = botLastBorderingStuffCount - 1; 0 <= bsIndex1; bsIndex1--)
        if (botLastBorderingStuffs[bsIndex1] < playerCount)
            for (botLastBorderingStuffCount--, bsIndex2 = bsIndex1; bsIndex2 < botLastBorderingStuffCount; bsIndex2++) botLastBorderingStuffs[bsIndex2] = botLastBorderingStuffs[bsIndex2 + 1];
    return 0 < botLastBorderingStuffCount
}

function botGetTargetWithLeastTroops(id) {
    var bsIndex, targetID = botLastBorderingStuffs[0],
        minTroop = troops[targetID] + attacks.getRemainingTroopsFromTarget(targetID, id);
    for (bsIndex = botLastBorderingStuffCount - 1; 1 <= bsIndex; bsIndex--) {
        var tempTroop = troops[botLastBorderingStuffs[bsIndex]] + attacks.getRemainingTroopsFromTarget(botLastBorderingStuffs[bsIndex], id);
        if (tempTroop < minTroop) {
            targetID = botLastBorderingStuffs[bsIndex];
            minTroop = tempTroop;
        }
    }
    return targetID
}

function botGetClosestTargetIndex(bsIndex) {
    var closestIndex = botLastBorderingStuffs[0];
    if (1 === botLastBorderingStuffCount) return closestIndex;
    var centerX = divideFloor(xMax[bsIndex] + xMin[bsIndex], 2),
        centerY = divideFloor(yMax[bsIndex] + yMin[bsIndex], 2),
        minDist = square(centerX - divideFloor(xMax[closestIndex] + xMin[closestIndex], 2)) + square(centerY - divideFloor(yMax[closestIndex] + yMin[closestIndex], 2));
    for (bsIndex = botLastBorderingStuffCount - 1; 1 <= bsIndex; bsIndex--) {
        var tempDist = square(centerX - divideFloor(xMax[botLastBorderingStuffs[bsIndex]] + xMin[botLastBorderingStuffs[bsIndex]], 2)) + square(centerY - divideFloor(yMax[botLastBorderingStuffs[bsIndex]] + yMin[botLastBorderingStuffs[bsIndex]], 2));
        tempDist < minDist && (minDist = tempDist, closestIndex = botLastBorderingStuffs[bsIndex])
    }
    return closestIndex
}

function botGetRandomTarget() {
    return botLastBorderingStuffs[fakeRandom.calcFractionalValue(botLastBorderingStuffCount)]
}
var botMaxBorderingStuffCap, botLastBorderingStuffCount, botLastBorderingStuffs, canReceiveBotDonations;

function botBorderingStuffInit() {
    botMaxBorderingStuffCap = 8;
    botLastBorderingStuffCount = 0;
    botLastBorderingStuffs = new Uint16Array(botMaxBorderingStuffCap)
}

function receiveDonationsArrayInit() {
    canReceiveBotDonations = teamGame ? new Uint8Array(maxEntities) : null
}

function botProcessStrategy(id, amount) {
    teamGame && (canReceiveBotDonations[id] = 0);
    if (attacks.isUnderAttackCap(id) && !(60 > amount)) {
        if (0 === landBorderPixels[id].length) {
            if (!botBoatEngine.update(id, difficultyEngine.difficulty[id - playerCount])) (
                difficultyEngine.setTiming(id - playerCount, 200),
                botProcessDonation(id, amount, difficultyEngine.difficulty[id - playerCount], interest.getMaxBeforeRedI(id))
            );
        } else if (!(0 < waterBorderPixels[id].length && fakeRandom.random() < fakeRandom.value(waterBorderPixels[id].length > landBorderPixels[id].length ? 7 : 3) 
            && botBoatEngine.update(id, difficultyEngine.difficulty[id - playerCount]))) {

            var maxBelowRedI = interest.getMaxBeforeRedI(id);
            if (troops[id] > maxBelowRedI && amount < troops[id] - maxBelowRedI) amount = troops[id] - maxBelowRedI
            if (teamGame) botProcessTeamStrategy(id, amount, difficultyEngine.difficulty[id - playerCount], maxBelowRedI)
            else botProcessOwnStrategy(id, amount, difficultyEngine.difficulty[id - playerCount])
        }
    }
}

function botProcessTeamStrategy(id, amount, difficulty, maxBelowRedI) {
    if (botChecksLoseIfBordersStuff(id, false) || botChecksStrongIfBordersStuff(id, false)) {
        canReceiveBotDonations[id] = 1;
        if (!botChecksAndRemovesIfAttackingAllTargets(id)) {
            if (botChecksAndRemovesNeutral()) {
                botCheckAdvanceAndProcessNeutralAttack(id, amount);
                botCheckSetFrequentTiming(id, maxEntities, difficulty)
            } else {
                var targetID;
                if (fakeRandom.doesValueMeetProbiThreshold(difficultyEngine.attackLeastProbi[difficulty])) targetID = botGetTargetWithLeastTroops(id)
                else {
                    if (isBotBorderingOtherBots() && fakeRandom.doesValueMeetProbiThreshold(difficultyEngine.attackBotsProbi[difficulty])) botChecksNotAndRemovesIfBorderingAllHumans();
                    targetID = botGetClosestTargetIndex(id)
                }
                botCalculateAttackAmount(id, amount, targetID);
                botCheckSetFrequentTiming(id, targetID, difficulty);
            }
        }
    } else {
        if (!(0 < waterBorderPixels[id].length && fakeRandom.random() < fakeRandom.value(60) && botBoatEngine.update(id, difficulty))) {
            difficultyEngine.setTiming(id - playerCount, 200);
            botProcessDonation(id, amount, difficulty, maxBelowRedI)
        }
    }
}

function humanBotProcessTeamStrategy(id, amount) {
    if (botChecksLoseIfBordersStuff(id, false) || botChecksStrongIfBordersStuff(id, false)) {
        canReceiveBotDonations[id] = 1;
        if (botChecksAndRemovesNeutral()) botCheckAdvanceAndProcessNeutralAttack(id, amount)
        else botCalculateAttackAmount(id, amount, botGetRandomTarget())
    } else botProcessDonation(id, amount, 0, 0)
}

function botCheckSetFrequentTiming(authorID, targetID, difficulty) {
    if(3 <= difficulty && 2142 < mainHandler.getTicksElapsed() && (targetID === maxEntities || troops[targetID] < divideFloor(troops[authorID], 20))) difficultyEngine.setTiming(authorID - playerCount, 25)
}

function botProcessDonation(authorID, amount, difficulty, maxBelowRedI) {
    if (0 !== teamColors.teamArray[authorID] && !(5 === difficulty && troops[authorID] < maxBelowRedI || 4 === difficulty && troops[authorID] < divideFloor(maxBelowRedI, 2)))
        for (difficulty = fakeRandom.calcFractionalValue(aliveCount), maxBelowRedI = 0; maxBelowRedI < aliveCount; maxBelowRedI++) {
            var targetID = aliveEntities[(maxBelowRedI + difficulty) % aliveCount];
            if (teamColors.teamArray[targetID] === teamColors.teamArray[authorID] && 1 === canReceiveBotDonations[targetID]) {
                processDonation(authorID, targetID, amount);
                targetID < playerCount && fakeRandom.random() < fakeRandom.value(10) && (canReceiveBotDonations[targetID] = 0);
                break
            }
        }
}

function botProcessOwnStrategy(id, amount, difficulty) {
    if (botChecksLoseIfBordersStuff(id, true) || botChecksStrongIfBordersStuff(id, true)) {
        if (!botChecksAndRemovesIfAttackingAllTargets(id)) {
            if (botChecksAndRemovesNeutral()) botCheckAdvanceAndProcessNeutralAttack(id, amount)
            else if (fakeRandom.doesValueMeetProbiThreshold(difficultyEngine.attackLeastProbi[difficulty])) botCalculateAttackAmount(id, amount, botGetTargetWithLeastTroops(id)) 
            else {
                if (isBotBorderingOtherBots() && fakeRandom.doesValueMeetProbiThreshold(difficultyEngine.attackBotsProbi[difficulty])) botChecksNotAndRemovesIfBorderingAllHumans();
                botCalculateAttackAmount(id, amount, botGetClosestTargetIndex(id));
            }
        }
    }
}

function humanBotProcessOwnStrategy(id, amount) {
    if (botChecksLoseIfBordersStuff(id, true) || botChecksStrongIfBordersStuff(id, true)) {
        if (botChecksAndRemovesNeutral()) botCheckAdvanceAndProcessNeutralAttack(id, amount)
        else botCalculateAttackAmount(id, amount, botGetRandomTarget())
    }
}

function botCalculateAttackAmount(id, amount, targetID) {
    if (divideFloor(troops[id], 8) > troops[targetID]) {
        var minAmount = divideFloor(11 * troops[targetID], 5);
        amount = amount > minAmount ? amount : minAmount
    }
    minAmount = potentialBorderAdvances[id].length;
    botAddTakableTargetPixelsToAdvance(id, targetID);
    botProcessAttack(id, targetID, minAmount, amount)
}

function botCheckAdvanceAndProcessNeutralAttack(id, amount) {
    var oldAdvanceLength = potentialBorderAdvances[id].length;
    botAddTakableNeutralPixelsToAdvances(id);
    if (potentialBorderAdvances[id].length !== oldAdvanceLength) {
        botProcessAttack(id, maxEntities, oldAdvanceLength, amount);
        return true
    } else return false
}
var botStartingTroops = [60, 74, 112, 200, 256, 512];

function DifficultyEngine() {
    var sendRatio, randomSendRatio, sendRatioFluctuations, botTimingInterval, randomTimingInterval;
    this.difficultyLabel = "Very Easy;Easy;Normal;Hard;Harder;Very Hard".split(";");
    this.dm = [97, 95, 93, 90, 87, 84]; //Unused
    this.attackBotsProbi = [98, 95, 90, 40, 20, 0];
    this.boatSendRatio = [85, 70, 65, 30, 7, 3];
    this.attackLeastProbi = [0, 0, 0, 0, 50, 90];
    this.init = function() {
        var botIndex;
        this.botTiming = new Uint8Array(botCount);
        sendRatio = new Uint16Array(botCount);
        randomSendRatio = new Uint16Array(botCount);
        sendRatioFluctuations = new Uint8Array(botCount);
        this.difficulty = new Uint8Array(botCount);
        botTimingInterval = new Uint16Array(botCount);
        randomTimingInterval = new Uint16Array(botCount);
        if (customJSON.isCustomJSON && !customJSON.data.replay) {
            if (customJSON.data.difficulty) {
                for (botIndex = botCount - 1; 0 <= botIndex; botIndex--) {
                    this.difficulty[botIndex] = customJSON.data.difficulty[botIndex + 1];
                }
            }
        } else if (9 === gamemode) {
            this.setZombieDifficulty();
        } else if (singleplayer) {
            if (teamGame) {
                for (botIndex = botCount - 1; 0 <= botIndex; botIndex--) {
                    this.difficulty[botIndex] = singleSettings.botSettings[teamColors.teamArray[botIndex + playerCount] - 1].difficulty;
                }
            } else {
                for (botIndex = botCount - 1; 0 <= botIndex; botIndex--) {
                    this.difficulty[botIndex] = singleSettings.botSettings[0].difficulty;
                }
            }
        } else {
            var y = 8 === gamemode ? 1 : 0;
            for (botIndex = botCount - 1; 0 <= botIndex; botIndex--) {
                this.difficulty[botIndex] = y;
            }
        }        
        for (botIndex = botCount - 1; 0 <= botIndex; botIndex--) {
            if (2 >= this.difficulty[botIndex]) {
                sendRatioFluctuations[botIndex] = 5;
                botTimingInterval[botIndex] = randomTimingInterval[botIndex] = 1040;
                if (0 === this.difficulty[botIndex]) {
                    sendRatio[botIndex] = 1E3;
                    randomSendRatio[botIndex] = 1E3;
                } else if (1 === this.difficulty[botIndex]) {
                    sendRatio[botIndex] = 1E3;
                    randomSendRatio[botIndex] = 920;
                    botTimingInterval[botIndex] = randomTimingInterval[botIndex] = 1100
                } else {
                    sendRatio[botIndex] = 1E3;
                    randomSendRatio[botIndex] = 870;
                }
            } else if (4 >= this.difficulty[botIndex]) {
                sendRatioFluctuations[botIndex] = 1 + fakeRandom.calcFractionalValue(20);
                randomTimingInterval[botIndex] = 250 + fakeRandom.calcFractionalValue(1501);
                botTimingInterval[botIndex] = 500 + fakeRandom.calcFractionalValue(501);
                if (3 === this.difficulty[botIndex]) {
                    sendRatio[botIndex] = 600 + fakeRandom.calcFractionalValue(101);
                    randomSendRatio[botIndex] = 300 + fakeRandom.calcFractionalValue(401);
                } else {
                    sendRatio[botIndex] = 300 + fakeRandom.calcFractionalValue(201);
                    randomSendRatio[botIndex] = 100 + fakeRandom.calcFractionalValue(201);
                }
            } else {
                botTimingInterval[botIndex] = 1E3;
                randomTimingInterval[botIndex] = 1E3;
                sendRatioFluctuations[botIndex] = 35 + fakeRandom.calcFractionalValue(16);
                sendRatio[botIndex] = 400 + fakeRandom.calcFractionalValue(101);
                randomSendRatio[botIndex] = 50 + fakeRandom.calcFractionalValue(101);
            }
            this.botTiming[botIndex] = 1 + divideFloor(botTimingInterval[botIndex] * fakeRandom.random(), 10 * fakeRandom.value(100))
        }
    };
    this.setZombieDifficulty = function() {
        var bIndex, dIndex;
        var helperBotCount = zombieSettings.helperBotCount;
        for (bIndex = helperBotCount - 1; 0 <= bIndex; bIndex--) this.difficulty[bIndex] = 5;
        for (dIndex = 0; 6 > dIndex; dIndex++)
            if (0 < zombieSettings.difficultyArray[dIndex]) {
                for (bIndex = helperBotCount + zombieSettings.difficultyArray[dIndex] - 1; bIndex >= helperBotCount; bIndex--) this.difficulty[bIndex] = dIndex;
                helperBotCount += zombieSettings.difficultyArray[dIndex]
            }
    };
    this.setTiming = function(botIndex, timing) {
        0 <= botIndex && (this.botTiming[botIndex] = timing)
    };
    this.update = function(botIndex) {
        if (0 === --this.botTiming[botIndex]) {
            if (botTimingInterval[botIndex] !== randomTimingInterval[botIndex]) botTimingInterval[botIndex] += botTimingInterval[botIndex] < randomTimingInterval[botIndex] ? 3 : -3
            if (sendRatio[botIndex] !== randomSendRatio[botIndex]) {
                sendRatio[botIndex] += sendRatio[botIndex] < randomSendRatio[botIndex] ? sendRatioFluctuations[botIndex] : -sendRatioFluctuations[botIndex];
                sendRatio[botIndex] = Math.abs(sendRatio[botIndex] - randomSendRatio[botIndex]) <= sendRatioFluctuations[botIndex] ? randomSendRatio[botIndex] : sendRatio[botIndex]
            };
            this.botTiming[botIndex] = divideFloor(botTimingInterval[botIndex], 10);
            var id = botIndex + playerCount;
            botProcessStrategy(id, divideFloor(sendRatio[botIndex] * troops[id], 1E3))
        }
    }
}

function clientTick1() {
    announcements.update();
    infoRenderer.update();
    gameStatistics.updateSpectatorCount();
    wsManager.update()
    mapUpdate.updateFullMap();
}

function gameTick() {
    if (customJSON.isCustomJSON && customJSON.data.replay && typeof(replayLogger) == "object") replayLogger.update() 
    interest.update();
    antiFullSend.update();
    processAction.update();
    delayedAttack.update();
    humanBots.update();
    botManager.update();
    speed.update();
    boatSpeed.update();
    checkPrematureDeath();
    gameLeaderboard.update();
    zombieSettings.update();
    infoRenderer.update();
    gameStatistics.update();
    playerAura.update();
    troopBar.update();
    attackBars.update();
    announcements.update();
    diplomacyHandler.update();
    attackRatioBar.update();
    peace.update();
    statisticNumbers.update();
    teams.update();
    wsManager.update();

    if (typeof(modHandler) == 'object') modHandler.scriptGameTick();
}

function clientTick2() {
    autoCamera.update();
    gameResultBox.update();
    gameMessages.update();
    fadeIn.update();
    setGameOrigin.checkAndSwitchServer()
}

function drawCanvases() {
    gameLeaderboard.drawCanvas(false);
    attackBars.drawCanvas();
    gameStatistics.drawCanvas(false);
    troopBar.drawCanvas();
    attackRatioBar.drawCanvas();
    peace.drawCanvas();
    infoRenderer.drawCanvas();
    teams.updateRenderObject()
}

function updatedPlayerLabels() {
    infoRenderer.drawCanvas() && (mainHandler.canvasDirty = true);
    wsManager.update()
}

function Speed() {
    function checkHigherSpeed(thresholdLand) {
        var idIndex;
        for (idIndex = attackerCount - 1; 0 <= idIndex; idIndex--) 0 === intervalsLeft[attackers[idIndex]] && land[attackers[idIndex]] >= thresholdLand && attackProcessInit(attackers[idIndex])
    }

    function setSpeedInterval(id) {
        intervalsLeft[id] = 10 === intervalsLeft[id] ? newAttackIntervalsLeft : 1E3 > land[id] ? 3 : 1E4 > land[id] ? 2 : 6E4 > land[id] ? 1 : 0
    }
    var newAttackIntervalsLeft, attackerCount, attackers, intervalsLeft, old_AttackLoses, old_myTroops;
    this.init = function() {
        old_AttackLoses = old_myTroops = 0;
        newAttackIntervalsLeft = 6;
        attackerCount = 0;
        attackers = new Uint16Array(maxEntities);
        intervalsLeft = new Uint8Array(maxEntities)
    };
    this.update = function() {
        var attackerIndex;
        old_AttackLoses = statisticNumbers.numbers[13];
        old_myTroops = troops[myID];
        for (attackerIndex = attackerCount - 1; 0 <= attackerIndex; attackerIndex--) {
            if (10 === intervalsLeft[attackers[attackerIndex]]) setSpeedInterval(attackers[attackerIndex])
            else if (0 === intervalsLeft[attackers[attackerIndex]]--) setSpeedInterval(attackers[attackerIndex]), attackProcessInit(attackers[attackerIndex]);
        }
        16E4 <= land[landOrder[0]] && (checkHigherSpeed(16E4), 3E5 <= land[landOrder[0]] && checkHigherSpeed(3E5));
        land[myID] > statisticNumbers.numbers[7] && (statisticNumbers.numbers[7] = land[myID]);
        statisticNumbers.numbers[14] += old_myTroops - troops[myID] + old_AttackLoses - statisticNumbers.numbers[13]
    };
    this.removeEntry = function(id) {
        var attackerIndex;
        for (attackerIndex = attackerCount - 1; 0 <= attackerIndex; attackerIndex--)
            if (id === attackers[attackerIndex]) {
                attackerCount--;
                for (id = attackerIndex; id < attackerCount; id++) attackers[id] = attackers[id + 1];
                break
            }
    };
    this.addEntry = function(id, shortAttack) {
        var attackerIndex;
        for (attackerIndex = attackerCount - 1; 0 <= attackerIndex; attackerIndex--)
            if (id === attackers[attackerIndex]) return;
        attackers[attackerCount++] = id;
        intervalsLeft[id] = shortAttack ? 2 : 10
    }
}

function BotBoatEngine() {
    function generateRandomCoords() {
        remainingChecks = 3;
        loop: {
            for (var y = 40; 1 <= y; y--) {
                currentX = xMin[authorID] + divideFloor(fakeRandom.random() * (xMax[authorID] - xMin[authorID] + 1), fakeRandom.value(100));
                currentY = yMin[authorID] + divideFloor(fakeRandom.random() * (yMax[authorID] - yMin[authorID] + 1), fakeRandom.value(100));
                var ownershipResult = checkOwnership(pixel.toIndex(currentX, currentY));
                if (1 !== ownershipResult) break loop
            }
            ownershipResult = 1
        }
        if (0 === ownershipResult) return false;
        if (2 === ownershipResult) return true;
        ownershipResult = generateRandomArea(1, 1);
        if (0 === ownershipResult) return false
        else if (2 === ownershipResult) return true
        else return 2 === generateRandomArea(54, 4)
    }

    function checkOwnership(pIndex) {
        if (pixel.canOwn(pIndex) && (pixel.isNeutral(pIndex) || pixel.getOwner(pIndex) !== authorID && isNotTeamate(authorID, pixel.getOwner(pIndex)))) {
            if (boatPathChecker.check(authorID, pIndex)) return 2;
            if (0 === remainingChecks--) return 0
        }
        return 1
    }

    function generateRandomArea(initBoatDist, areaWidth) {
        for (var maxBoatDist = initBoatDist; maxBoatDist < initBoatDist + 50 * areaWidth; maxBoatDist += areaWidth) {
            var coordXMin = xMin[authorID] - maxBoatDist;
            coordXMin = 1 > coordXMin ? 1 : coordXMin;
            var coordYMin = yMin[authorID] - maxBoatDist;
            coordYMin = 1 > coordYMin ? 1 : coordYMin;
            var coordXMax = xMax[authorID] + maxBoatDist;
            coordXMax = coordXMax >= currentMapWidth - 1 ? currentMapWidth - 2 : coordXMax;
            var coordYMax = yMax[authorID] + maxBoatDist;
            coordYMax = coordYMax >= currentMapHeight - 1 ? currentMapHeight - 2 : coordYMax;
            var distThreshold = divideFloor(2 * fakeRandom.random() * (coordXMax - coordXMin + coordYMax - coordYMin), fakeRandom.value(100));
            var xOffset = coordXMax - coordXMin;
            var yOffset = coordYMax - coordYMin;
            if (distThreshold <= xOffset) {
                currentX = coordXMin + distThreshold;
                currentY = coordYMin;
            } else if (distThreshold <= xOffset + yOffset) {
                currentX = coordXMax;
                currentY = coordYMin + distThreshold - xOffset;
            } else if (distThreshold <= 2 * xOffset + yOffset) {
                currentX = coordXMin + distThreshold - xOffset - yOffset;
                currentY = coordYMax;
            } else {
                currentX = coordXMin;
                currentY = coordYMin + distThreshold - 2 * xOffset - yOffset;
            }
            var pIndex = pixel.toIndex(currentX, currentY);
            var ownershipCheck = checkOwnership(pIndex);
            if (1 !== ownershipCheck) return ownershipCheck;
        }
        return 1;
    }

    var remainingChecks, currentX, currentY, authorID;
    this.update = function(param_authorID, difficultyIndex) {
        authorID = param_authorID;
        if (0 === waterBorderPixels[authorID].length) return false;
        if (generateRandomCoords()) {
            var amount = divideFloor(difficultyEngine.boatSendRatio[difficultyIndex] * troops[authorID], 100);
            if (100 > amount && 100 <= troops[authorID]) amount = 100;
            if (100 <= amount) return processSendBoat(authorID, boatPathChecker.getClosestWaterPixel(), pixel.toIndex(currentX, currentY), amount)
        }
        return false
    }
}

function BotManager() {
    var botIndexCounts, botIndicies;
    this.init = function() {
        botIndexCounts = botCount;
        botIndicies = new Uint16Array(botCount);
        for (var botIndex = botCount - 1; 0 <= botIndex; botIndex--) botIndicies[botIndex] = botIndex
    };
    this.update = function() {
        for (var botIndex = botIndexCounts - 1; 0 <= botIndex; botIndex--)
            if (0 === isAlive[botIndicies[botIndex] + playerCount]) {
                var deadBotIndex = botIndex;
                for (botIndexCounts--; deadBotIndex < botIndexCounts; deadBotIndex++) botIndicies[deadBotIndex] = botIndicies[deadBotIndex + 1]
            } else difficultyEngine.update(botIndicies[botIndex])
    }
}

function ProcessAction() {
    function addPendingAction(authorID, actionType, ratio, param, xCoord, yCoord) {
        if (0 < ratio && 1E3 >= ratio) {
            authors.push(authorID), actionsType.push(actionType), 
            actionsRatio.push(ratio), actionsParam.push(param), actionsXCoord.push(xCoord), actionsYCoord.push(yCoord);
        }
    }
    var authors, actionsType, actionsRatio, actionsParam, actionsXCoord, actionsYCoord;
    this.init = function() {
        authors = [];
        actionsType = [];
        actionsRatio = [];
        actionsParam = [];
        actionsXCoord = [];
        actionsYCoord = []
    };
    this.update = function() {
        var actionIndex, authorsCount = authors.length;
        for (actionIndex = 0; actionIndex < authorsCount; actionIndex++) {
            if (0 === actionsType[actionIndex]) processAttack(authors[actionIndex], actionsParam[actionIndex], actionsRatio[actionIndex]);
            else if (1 === actionsType[actionIndex]) this.processSendBoat(authors[actionIndex], actionsRatio[actionIndex], actionsXCoord[actionIndex], actionsYCoord[actionIndex]);
            else if (2 === actionsType[actionIndex]) this.processCancel(authors[actionIndex], actionsParam[actionIndex]);
            else if (6 === actionsType[actionIndex]) {
                var author = authors[actionIndex];
                0 !== isAlive[author] && 2 !== playerStatus[authors] && peace.processVotePeace(author, 1 === actionsParam[actionIndex])
            } else 7 === actionsType[actionIndex] && this.processCancelBoat(authors[actionIndex], actionsParam[actionIndex]);
        }
        0 < authorsCount && this.init()
    };
    this.processSendBoat = function(authorID, ratio, toX, yCoord) {
        if (0 !== isAlive[authorID] && 2 !== playerStatus[authors] && boatPathChecker.check(authorID, pixel.toIndex(toX, yCoord))) {
            var boatSuccessful = processSendBoat(authorID, boatPathChecker.getClosestWaterPixel(), pixel.toIndex(toX, yCoord), divideFloor(ratio * troops[authorID], 1E3));
            if (boatSuccessful && authorID === myID) {
                statisticNumbers.numbers[0] += ratio;
                statisticNumbers.numbers[1]++;
                statisticNumbers.numbers[2]++;
            }
        }
    };
    this.processCancel = function(authorID, targetID) {
        if (0 !== isAlive[authorID] && 2 !== playerStatus[authors] && attacks.check(authorID, targetID)) {
            var returnedTroops = attacks.getRemainingTroopsFromTarget(authorID, targetID);
            attacks.setRemainingTroopsFromTarget(authorID, targetID, 0);
            if (authorID !== myID) troops[authorID] += returnedTroops, interest.limitTroops(authorID);
            else {
                var prevTroops = troops[authorID];
                troops[authorID] += returnedTroops;
                interest.limitTroops(authorID);
                statisticNumbers.numbers[13] -= troops[authorID] - prevTroops
            }
        }
    };
    this.processCancelBoat = function(authorID, targetID) {
        if (0 !== isAlive[authorID] && 2 !== playerStatus[authors]) {
            var B = attacks.findAttackIndexFromBoatID(authorID, targetID);
            if (-1 !== B) {
                var C = attacks.getRemainingTroopsFromIndex(authorID, B);
                attacks.setRemainingTroopsFromIndex(authorID, B, 0);
                troops[authorID] += C;
                interest.limitTroops(authorID)
            }
        }
    };
    this.pendingAttack = function(authorID, ratio, targetID) {
        1 === clientStatus && addPendingAction(authorID, 0, ratio, targetID, 0, 0)
    };
    this.pendingSetLocation = function(authorID, ratio, xCoord, yCoord) {
        if (1 === clientStatus) {
            if (inSpawn) spawn.set(authorID, xCoord, yCoord)
            else addPendingAction(authorID, 1, ratio, 0, xCoord, yCoord)
        }
    };
    this.pendingCancel = function(authorID, targetID) {
        1 === clientStatus && addPendingAction(authorID, 2, 1, targetID, 0, 0)
    };
    this.pendingCancelBoat = function(authorID, boatID) {
        1 === clientStatus && addPendingAction(authorID, 7, 1, boatID, 0, 0)
    };
    this.pendingPeace = function(id, choice) {
        1 === clientStatus && addPendingAction(id, 6, 1, choice, 0, 0)
    };
    this.onLeave = function(id) {
        if (1 === clientStatus && 0 !== isAlive[id] && 2 !== playerStatus[id]) {
            if (8 === gamemode) endGame.endGame(1 - id)
            else this.leave(id)
        }
        announcements.genericAnnouncement(id, 4)
    };
    this.leave = function(id) {
        if (inSpawn) {
            managePlayerDeath(id);
            findShiftAliveEntitiesIndex();
        } else if (!typeof(modHandler) == "object" || modHandler.humanBots) humanBots.turnToBot(id)
    };
    this.surrender = function(id) {
        if (0 !== isAlive[id] && 2 !== playerStatus[id] && gameButtons.canSurrender(id)) {
            if (1 === aliveCount) endGame.endGame(id)
            else {
                announcements.genericAnnouncement(id, id === myID ? 21 : 22);
                if (8 === gamemode) endGame.endGame(1 - id)
                else if (singleplayer) {
                    managePlayerDeath(id);
                    findShiftAliveEntitiesIndex();
                    if (inSpawn) spawn.update()
                } else this.leave(id)
            }
        }
    }
}

function BoatSpeed() {
    function shiftBoatArrays(boatIndex) {
        for (currentBoatIndex--; boatIndex < currentBoatIndex; boatIndex++) {
            authorIDs[boatIndex] = authorIDs[boatIndex + 1];
            ticksUntilUpdate[boatIndex] = ticksUntilUpdate[boatIndex + 1];
            boatIDs[boatIndex] = boatIDs[boatIndex + 1];
            boatSpeed.currentPixelIndicies[boatIndex] = boatSpeed.currentPixelIndicies[boatIndex + 1];
            targetPixelIndicies[boatIndex] = targetPixelIndicies[boatIndex + 1];
        }
    }

    function getXPos(xCoord) {
        return Math.floor(mainScaleFactor * xCoord - viewportX)
    }
    
    function getYPos(yCoord) {
        return Math.floor(mainScaleFactor * yCoord - viewportY)
    }
    var currentBoatID, maxBoatID, currentBoatIndex, authorIDs, ticksUntilUpdate, boatIDs, targetPixelIndicies;
    this.currentPixelIndicies;
    this.init = function() {
        currentBoatID = 1;
        currentBoatIndex = 0;
        maxBoatID = 2 * maxEntities;
        authorIDs = new Uint16Array(maxBoatID);
        ticksUntilUpdate = new Uint8Array(maxBoatID);
        boatIDs = new Uint16Array(maxBoatID);
        this.currentPixelIndicies = new Uint32Array(maxBoatID);
        targetPixelIndicies = new Uint32Array(maxBoatID)
    };
    this.setCurrentPixelIndex = function(boatIndex, pixelIndex) {
        this.currentPixelIndicies[boatIndex] = pixelIndex
    };
    this.update = function() {
        for (var boatIndex = currentBoatIndex - 1; 0 <= boatIndex; boatIndex--) {
            if (0 === ticksUntilUpdate[boatIndex]--) {
                ticksUntilUpdate[boatIndex] = typeof(modHandler) == "object" ? modHandler.boatSpeed : 2;
                boatPathHandler.update(boatIndex, boatIDs[boatIndex], authorIDs[boatIndex], this.currentPixelIndicies[boatIndex], targetPixelIndicies[boatIndex]);
            }
        }
    };
    this.removeEntry = function(authorID, boatID) {
        for (var boatIndex = currentBoatIndex - 1; 0 <= boatIndex; boatIndex--) {
            if (authorID === authorIDs[boatIndex] && boatID === boatIDs[boatIndex]) {
                shiftBoatArrays(boatIndex);
                break
            }
        }
    };
    this.checkBoatDeath = function(authorID) {
        for (var boatIndex = currentBoatIndex - 1; 0 <= boatIndex; boatIndex--) {
            if (authorID === authorIDs[boatIndex]) {
                boatPathHandler.moveBoatLocation(authorID, this.currentPixelIndicies[boatIndex]);
                shiftBoatArrays(boatIndex);
            }
        }
    };
    this.addEntry = function(authorID, currentPixelIndex, targetPixelIndex) {
        if (currentBoatIndex >= maxBoatID) return 0;
        authorIDs[currentBoatIndex] = authorID;
        ticksUntilUpdate[currentBoatIndex] = 0;
        boatIDs[currentBoatIndex] = currentBoatID;
        this.currentPixelIndicies[currentBoatIndex] = currentPixelIndex;
        targetPixelIndicies[currentBoatIndex] = targetPixelIndex;
        var tempBoatID = currentBoatID;
        currentBoatID++;
        currentBoatIndex++;
        currentBoatID = currentBoatID > 2 * maxBoatID ? 1 : currentBoatID;
        return tempBoatID;
    };
    this.drawCanvasImage = function() {
        if (40 <= mainScaleFactor && 0 !== currentBoatIndex) {
            var boatIndex, leftXBound = viewportX / mainScaleFactor,
                topYBound = viewportY / mainScaleFactor,
                rightXBound = (prevClientWidth + viewportX) / mainScaleFactor,
                bottomYBound = (prevClientHeight + viewportY) / mainScaleFactor;
            mainCanvasCtx.textAlign = centerAlign;
            mainCanvasCtx.textBaseline = middleAlign;
            for (boatIndex = currentBoatIndex - 1; 0 <= boatIndex; boatIndex--) {
                var boatX = pixel.toX(this.currentPixelIndicies[boatIndex]);
                var boatY = pixel.toY(this.currentPixelIndicies[boatIndex]);
                var authorID = authorIDs[boatIndex];
                if (boatX > leftXBound - 1 && boatX < rightXBound && boatY > topYBound - 1 && boatY < bottomYBound && 0 !== isAlive[authorID]) {
                    var fontSize = Math.floor(.94 * mainScaleFactor * infoRenderer.getEntityLabelScaleY(authorID));
                    if (6 <= fontSize) {
                        boatX = Math.floor(prevClientWidth * (boatX + .5 - leftXBound) / (rightXBound - leftXBound));
                        boatY = Math.floor(prevClientHeight * (boatY + .48 - topYBound) / (bottomYBound - topYBound));
                        mainCanvasCtx.font = fontWeightBold + fontSize + fontSizeArial;
                        mainCanvasCtx.fillStyle = blackRGB;
                        mainCanvasCtx.fillText(nicknames[authorID] + (typeof(modHandler) == "object" && modHandler.font >= 2 ? ` (${authorID})` : ""), boatX, boatY);
                        var troopSize = Math.floor(.57 * fontSize);
                        if (6 <= troopSize) {
                            authorID = attacks.getRemainingTroopsFromIndex(authorID, attacks.findAttackIndexFromBoatID(authorID, boatIDs[boatIndex]));
                            mainCanvasCtx.font = fontWeightBold + troopSize + fontSizeArial;
                            mainCanvasCtx.fillText(attackBars.splitNumber(authorID), boatX, boatY + Math.floor(.82 * fontSize));
                        }
                    }
                }
            }
        }
        if (0 !== currentBoatIndex && typeof(modHandler) == "object" && modHandler.boatTracker) {
            mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0);
            for (boatIndex = currentBoatIndex - 1; 0 <= boatIndex; boatIndex--) {
                authorID = authorIDs[boatIndex];
                var boatColor = pixel.getInnerColors(authorID);
                mainCanvasCtx.strokeStyle = `rgba(${boatColor[0]}, ${boatColor[1]}, ${boatColor[2]}, ${(192 + boatColor[3])/255})`
                var boatX = pixel.toX(this.currentPixelIndicies[boatIndex]),
                    boatY = pixel.toY(this.currentPixelIndicies[boatIndex]),
                    targetX = pixel.toX(targetPixelIndicies[boatIndex]),
                    targetY = pixel.toY(targetPixelIndicies[boatIndex]);
                mainCanvasCtx.beginPath();
                mainCanvasCtx.moveTo(getXPos(boatX + .5), getYPos(boatY + .5));
                for (var dist = 0; !pixel.canOwn(pixel.toIndex(boatX, boatY)); dist++) {
                    Math.abs(targetX - boatX) >= Math.abs(targetY - boatY) ? targetX > boatX ? boatX++ : boatX-- : targetY > boatY ? boatY++ : boatY--;
                    mainCanvasCtx.lineTo(getXPos(boatX + .5), getYPos(boatY + .5));
                }
                mainCanvasCtx.stroke()
                if (pixel.strongIsOwner(myID, pixel.toIndex(boatX, boatY)) && authorID != myID && isNotTeamate(myID, authorID) && dist == 30 && playerStatus[authorID] == 0) {
                    announcements.genericAnnouncement(authorID, 23)
                }
            }
        }
    }
}

function AutoCamera() {
    function setCameraSettings(duration) {
        previousUpdateTime = mainHandler.time;
        cameraUpdateInterval = 33;
        prevStep = stepIncrement = currentStep = 0;
        totalSteps = cameraUpdateInterval / duration;
        stepSize = 1 / (duration / cameraUpdateInterval / 4);
        viewportCenterX = (prevClientWidth / 2 + viewportX) / mainScaleFactor;
        viewportCenterY = (prevClientHeight / 2 + viewportY) / mainScaleFactor;
        currentScaleFactor = mainScaleFactor
    }

    function adjustCameraZoom(zoomValue) {
        if (.125 > Math.abs(Math.log(targetScaleFactor / currentScaleFactor))) targetScaleFactor = zoomValue * currentScaleFactor
    }

    function calculateCameraFit(minX, minY, maxX, maxY) {
        mapCenterX = (minX + maxX + 1) / 2;
        mapCenterY = (minY + maxY + 1) / 2;
        targetScaleFactor = .9 * getMin(prevClientWidth / (maxX - minX + 1), prevClientHeight / (maxY - minY + 1))
    }
    var stepSize, currentStep, prevStep, stepIncrement, totalSteps, viewportCenterX, viewportCenterY, currentScaleFactor, mapCenterX, mapCenterY,
        targetScaleFactor, previousUpdateTime, cameraUpdateInterval, isCameraActive = false, isZoomToFitActive = false;
    this.getIsCameraActive = function() {
        return isCameraActive
    };
    this.activateCamera = function() {
        setCameraSettings(1);
        this.fitCameraToMap(0, 0, currentMapWidth - 1, currentMapHeight - 1);
        if (!inSpawn) this.hoverTo(myID, 3E3, true, .3)
    };
    this.hoverTo = function(targetID, duration, param_zoomToFitActive, zoomSpeed) {
        if (!isCanvasHidden && !(isCameraActive && !param_zoomToFitActive && isZoomToFitActive) && 0 !== land[targetID]) {
            mouseCamera.isPanning = false;
            isZoomToFitActive = param_zoomToFitActive;
            setCameraSettings(duration);
            mapCenterX = (xMin[targetID] + xMax[targetID] + 1) / 2;
            mapCenterY = (yMin[targetID] + yMax[targetID] + 1) / 2;
            var targetCenterX = xMax[targetID] - xMin[targetID] + 1,
                targetCenterY = yMax[targetID] - yMin[targetID] + 1;
            targetScaleFactor = getMin(prevClientWidth / targetCenterX, prevClientHeight / targetCenterY)
            targetScaleFactor *= 0 !== zoomSpeed ? zoomSpeed : 20 > targetCenterX && 20 > targetCenterY ? .5 : .9;
            adjustCameraZoom(.875);
            isCameraActive = true;
            keyboardCamera.stopCameraMovement()
        }
    };
    this.zoomToFitMap = function(zoomSpeed) {
        mouseCamera.isPanning = false;
        isZoomToFitActive = true;
        setCameraSettings(zoomSpeed);
        calculateCameraFit(0, 0, currentMapWidth - 1, currentMapHeight - 1);
        adjustCameraZoom(.875);
        isCameraActive = true;
        keyboardCamera.stopCameraMovement()
    };
    this.fitCameraToMap = function(minX, minY, maxX, maxY) {
        calculateCameraFit(minX, minY, maxX, maxY);
        mainScaleFactor = targetScaleFactor;
        mouseCamera.updateViewportX(mapCenterX, prevClientWidth / 2);
        mouseCamera.updateViewportY(mapCenterY, prevClientHeight / 2);
        viewport.updateViewportCoords()
    };
    this.deactivateCamera = function() {
        if (isCameraActive && isZoomToFitActive) return false;
        isCameraActive = false;
        return true
    };
    this.update = function() {
        if (isCameraActive) {
            if (.5 > currentStep) {
                if (stepIncrement < totalSteps) {
                    stepIncrement += totalSteps * stepSize;
                    prevStep = currentStep;
                }
            } else if (currentStep > 1 - prevStep) {
                stepIncrement -= totalSteps * stepSize;
                stepIncrement = stepIncrement < totalSteps * stepSize ? totalSteps * stepSize : stepIncrement;
            }
            previousUpdateTime = previousUpdateTime >= mainHandler.time ? mainHandler.time - 1 : previousUpdateTime;
            var timeElapsed = mainHandler.time - previousUpdateTime;
            if (1E3 < timeElapsed) currentStep = 1
            else {
                currentStep += stepIncrement * timeElapsed / cameraUpdateInterval;
                currentStep = 1 < currentStep ? 1 : currentStep;
            }
            previousUpdateTime = mainHandler.time;
            var oldMainScaleFactor = mainScaleFactor;
            var oldViewportX = viewportX,
                oldViewportY = viewportY;
            mainScaleFactor = currentScaleFactor * Math.pow(targetScaleFactor / currentScaleFactor, currentStep);
            var scaleFactorChangeRatio = mainScaleFactor / oldMainScaleFactor,
                transitionScaleFactorChangeRatio = 1 - (currentScaleFactor * Math.pow(targetScaleFactor / currentScaleFactor, 1 - currentStep) - currentScaleFactor) / (targetScaleFactor - currentScaleFactor);
            mouseCamera.updateViewportX(viewportCenterX + transitionScaleFactorChangeRatio * (mapCenterX - viewportCenterX), prevClientWidth / 2);
            mouseCamera.updateViewportY(viewportCenterY + transitionScaleFactorChangeRatio * (mapCenterY - viewportCenterY), prevClientHeight / 2);
            infoRenderer.zoom(scaleFactorChangeRatio, (oldViewportX * scaleFactorChangeRatio - viewportX) / (1 - scaleFactorChangeRatio), (oldViewportY * scaleFactorChangeRatio - viewportY) / (1 - scaleFactorChangeRatio));
            viewport.updateViewportCoords();
            if (1 <= currentStep) {
                isCameraActive = false;
                mapUpdate.shouldUpdate = true;
            }
            mainHandler.canvasDirty = true
        }
    }
}

function FindSpawn() {
    function generateSpawn() {
        var hasValidSpawn;
        loop: {
            for (var trials = 0; 8 > trials; trials++) {
                randomColSpawn = divideFloor(maxSpawnCols * fakeRandom.random(), fakeRandom.value(100));
                randomRowSpawn = divideFloor(maxSpawnRows * fakeRandom.random(), fakeRandom.value(100));
                if (canSpawnHere()) {
                    hasValidSpawn = true;
                    break loop
                }
            }
            hasValidSpawn = false
        }
        if (!hasValidSpawn) {
            loop: {
                var rowBlockSize, rowOffset, colBlockSize, colOffset,
                    baseRandomColSpawn = divideFloor(maxSpawnCols * fakeRandom.random(), fakeRandom.value(100)),
                    baseRandomRowSpawn = divideFloor(maxSpawnRows * fakeRandom.random(), fakeRandom.value(100));
                for (rowBlockSize = 40; 1 <= rowBlockSize; rowBlockSize--) {
                    for (rowOffset = maxSpawnRows - rowBlockSize; 0 <= rowOffset; rowOffset -= 40) {
                        randomRowSpawn = (rowOffset + baseRandomRowSpawn) % maxSpawnRows;
                        for (colBlockSize = 40; 1 <= colBlockSize; colBlockSize--) {
                            for (colOffset = maxSpawnCols - colBlockSize; 0 <= colOffset; colOffset -= 40) {
                                randomColSpawn = (colOffset + baseRandomColSpawn) % maxSpawnCols;
                                if (canSpawnHere()) {
                                    hasValidSpawn = true;
                                    break loop
                                }
                            }
                        }
                    }
                }
                hasValidSpawn = false
            }
        }
        return hasValidSpawn
    }

    function canSpawnHere() {
        var yIndex, xIndex,
            spawnBufferOffset = divideFloor(minSpawnBuffer - spawnWidth, 2),
            minYPos = avgRemainingRowSpace + randomRowSpawn * minSpawnBuffer + spawnBufferOffset,
            minXPos = avgRemainingColSpace + randomColSpawn * minSpawnBuffer + spawnBufferOffset;
        for (yIndex = minYPos + spawnWidth - 1; yIndex >= minYPos; yIndex--) {
            for (xIndex = minXPos + spawnWidth - 1; xIndex >= minXPos; xIndex--) {
                var pIndex = pixel.toIndex(xIndex, yIndex);
                if (!pixel.canOwn(pIndex) || pixel.isBorder(pIndex)) return false;
            }
        }
        return true
    }

    function initInfoArrays() {
        isAlive[authorID] = 0;
        troops[authorID] = 0;
        land[authorID] = tempLand[authorID] = 0;
        potentialBorderAdvances[authorID] = [];
        landBorderPixels[authorID] = [];
        waterBorderPixels[authorID] = [];
        mountainBorderPixels[authorID] = [];
        xMin[authorID] = yMin[authorID] = xMax[authorID] = yMax[authorID] = 0
    }

    function setupSpawn(xPosOffset, yPosOffset) {
        isAlive[authorID] = 1;
        troops[authorID] = authorID < playerCount ? humanStartingTroops : botStartingTroops[difficultyEngine.difficulty[authorID - playerCount]];
        xMin[authorID] = xPosOffset + 10;
        yMin[authorID] = yPosOffset + 10;
        yMax[authorID] = xMax[authorID] = 0;
        var xPos, yPos;
        for (xPos = xPosOffset; xPos < xPosOffset + 4; xPos++) {
            for (yPos = yPosOffset; yPos < yPosOffset + 4; yPos++) {
                if (xPos > xPosOffset && xPos < xPosOffset + 3 || yPos > yPosOffset && yPos < yPosOffset + 3) {
                    var landIndex = pixel.toIndex(xPos, yPos);
                    if (pixel.canOwn(landIndex)) {
                        xMin[authorID] = xPos < xMin[authorID] ? xPos : xMin[authorID];
                        xMax[authorID] = xPos > xMax[authorID] ? xPos : xMax[authorID];
                        yMin[authorID] = yPos < yMin[authorID] ? yPos : yMin[authorID];
                        yMax[authorID] = yPos > yMax[authorID] ? yPos : yMax[authorID];
                        ownedLand[land[authorID]] = landIndex;
                        land[authorID]++;
                        pixel.changeToInnerPixel(landIndex, authorID);
                    }
                }
            }
        }
        tempLand[authorID] = land[authorID];
        for (landIndex = land[authorID] - 1; 0 <= landIndex; landIndex--) {
            if (pixel.canExpandFromPixel(ownedLand[landIndex], authorID)) {
                pixel.changeToBorderPixel(ownedLand[landIndex], authorID);
                landBorderPixels[authorID].push(ownedLand[landIndex]);
            } else if (pixel.bordersWater(ownedLand[landIndex])) {
                pixel.changeToBorderPixel(ownedLand[landIndex], authorID);
                waterBorderPixels[authorID].push(ownedLand[landIndex]);
            } else if (pixel.bordersMountain(ownedLand[landIndex])) {
                pixel.changeToBorderPixel(ownedLand[landIndex], authorID);
                mountainBorderPixels[authorID].push(ownedLand[landIndex]);
            }
        }
    }

    function checkSpawnOverlap(xPosOffset, yPosOffset) {
        var xIndex, yIndex;
        for (yIndex = yPosOffset; yIndex > yPosOffset - 6; yIndex--)
            for (xIndex = xPosOffset; xIndex > xPosOffset - 6; xIndex--) {
                var pIndex = pixel.toIndex(xIndex, yIndex);
                if (pixel.isBorder(pIndex)) return false
            }
        return true
    }
    var randomColSpawn, randomRowSpawn, maxSpawnCols, maxSpawnRows, minSpawnBuffer, avgRemainingColSpace, avgRemainingRowSpace, spawnWidth, authorID, ownedLand;
    this.init = function() {
        var canSpawn;
        ownedLand = Array(12);
        spawnWidth = 6;
        minSpawnBuffer = 10;
        maxSpawnCols = divideFloor(currentMapWidth, minSpawnBuffer);
        maxSpawnRows = divideFloor(currentMapHeight, minSpawnBuffer);
        avgRemainingColSpace = divideFloor(currentMapWidth - minSpawnBuffer * maxSpawnCols, 2);
        avgRemainingRowSpace = divideFloor(currentMapHeight - minSpawnBuffer * maxSpawnRows, 2);
        if (inSpawn) {
            for (var playerIndex = 0; playerIndex < playerCount; playerIndex++) {
                authorID = playerIndex, initInfoArrays();
                isAlive[authorID] = 1;
            }
        }
        if (customJSON.isCustomJSON && customJSON.data.spawnX) {
            for (authorID = 0; authorID < maxEntities; authorID++) {
                if (1 !== isAlive[authorID]) {
                    if (authorID < entityCount) {
                        var spawnX = customJSON.data.spawnX[authorID] + 1,
                            spawnY = customJSON.data.spawnY[authorID] + 1;
                        if (3 < spawnX && spawnX < currentMapWidth - 5 && 3 < spawnY && spawnY < currentMapHeight - 5 && pixel.canOwn(pixel.toIndex(spawnX, spawnY)) && checkSpawnOverlap(spawnX + 3, spawnY + 3)) {
                            spawnX += 1;
                            spawnY += 1;
                            initInfoArrays();
                            setupSpawn(spawnX - 2, spawnY - 2);
                            canSpawn = true;
                        } else canSpawn = false;
                        if (canSpawn) continue;
                        if (generateSpawn()) {
                            spawnX = avgRemainingColSpace + randomColSpawn * minSpawnBuffer + divideFloor(minSpawnBuffer, 2);
                            spawnY = avgRemainingRowSpace + randomRowSpawn * minSpawnBuffer + divideFloor(minSpawnBuffer, 2);
                            initInfoArrays();
                            setupSpawn(spawnX - 2, spawnY - 2);
                            continue
                        }
                    }
                    initInfoArrays()
                }
            }
        } else {
            for (authorID = 0; authorID < maxEntities; authorID++) {
                if (1 !== isAlive[authorID]) {
                    if (authorID < entityCount && generateSpawn()) {
                        spawnX = avgRemainingColSpace + randomColSpawn * minSpawnBuffer + divideFloor(minSpawnBuffer, 2);
                        playerIndex = avgRemainingRowSpace + randomRowSpawn * minSpawnBuffer + divideFloor(minSpawnBuffer, 2);
                        initInfoArrays();
                        setupSpawn(spawnX - 2, playerIndex - 2);
                    } else initInfoArrays();
                }
            }
        }
        statisticNumbers.numbers[7] = land[myID];
        statisticNumbers.numbers[8] = troops[myID]
    };
    this.generateHumanSpawn = function(param_authorID, xPos, yPos) {
        var spawnOffset, yIndex;
        authorID = param_authorID;
        for (spawnOffset = 0; 20 > spawnOffset; spawnOffset++) {
            for (var xIndex = xPos + spawnOffset; xIndex >= xPos - spawnOffset; xIndex--) {
                for (yIndex = yPos + spawnOffset; yIndex >= yPos - spawnOffset; yIndex--) {
                    if ((xIndex === xPos + spawnOffset || xIndex === xPos - spawnOffset || yIndex === yPos + spawnOffset || yIndex === yPos - spawnOffset) && 3 < xIndex && xIndex < currentMapWidth - 5 && 3 < yIndex && yIndex < currentMapHeight - 5 && pixel.canOwn(pixel.toIndex(xIndex, yIndex)) && checkSpawnOverlap(xIndex + 3, yIndex + 3)) {
                        if (0 < land[authorID]) {
                            for (yPos = xMax[authorID]; yPos >= xMin[authorID]; yPos--) {
                                for (xPos = yMax[authorID]; xPos >= yMin[authorID]; xPos--) {
                                    var pIndex = 4 * (xPos * currentMapWidth + yPos);
                                    if (pixel.strongIsOwner(authorID, pIndex)) {
                                        pixel.revertToNeutralPixel(pIndex);
                                        land[authorID]--;
                                    }
                                }
                            }
                            initInfoArrays()
                        }
                        setupSpawn(xIndex - 1, yIndex - 1);
                        return true
                    }
                }
            }
        }
        return false
    };
    this.randomSpawn = function(param_authorID) {
        authorID = param_authorID;
        if (generateSpawn()) {
            var xCoord = avgRemainingColSpace + randomColSpawn * minSpawnBuffer + divideFloor(minSpawnBuffer, 2),
                yCoord = avgRemainingRowSpace + randomRowSpawn * minSpawnBuffer + divideFloor(minSpawnBuffer, 2);
            initInfoArrays();
            setupSpawn(xCoord - 2, yCoord - 2)
        } else initInfoArrays()
    }
}

function drawCanvasImages() {
    gradientEdge.fillBackgroundColor();
    mainCanvasCtx.setTransform(mainScaleFactor, 0, 0, mainScaleFactor, 0, 0);
    mainCanvasCtx.imageSmoothingEnabled = 3 > mainScaleFactor;
    mainCanvasCtx.drawImage(mapBaseCanvas, mouseCamera.toX(), mouseCamera.toY());
    playerAura.drawCanvasImage();
    mainCanvasCtx.drawImage(mapCanvas, mouseCamera.toX(), mouseCamera.toY());
    mainCanvasCtx.imageSmoothingEnabled = false;
    gradientEdge.drawCanvasImage();
    mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0);
    infoRenderer.drawCanvasImage();
    boatSpeed.drawCanvasImage();
    if (!isCanvasHidden) {
        mainCanvasCtx.imageSmoothingEnabled = false;
        announcements.drawCanvasImage();
        gameLeaderboard.drawCanvasImage();
        attackRatioBar.drawCanvasImage();
        peace.drawCanvasImage();
        gameStatistics.drawCanvasImage();
        mouseCamera.drawCanvasImage();
        gameMessages.drawCanvasImage();
        teams.drawCanvasImage();
        troopBar.drawCanvasImage();
        attackBars.drawCanvasImage();
        gameButtons.drawCanvasImage();
        gameResultBox.drawCanvasImage();
        playerActions.drawCanvasImage();
        statistics.drawCanvasImage();
        fadeIn.drawCanvasImage()
        mainSettings.drawPanels()
    }
}

function clearAndFillBlackRect(canvas, width, size) {
    canvas.clearRect(0, 0, width, size);
    canvas.fillStyle = blackMoreOpaque;
    canvas.fillRect(0, 0, width, size)
}

function fourRectFiller(canvas, width, height, size) {
    canvas.fillStyle = whiteRGB2;
    canvas.fillRect(0, 0, width, size);
    canvas.fillRect(0, 0, size, height);
    canvas.fillRect(width - size, 0, size, height);
    canvas.fillRect(0, height - size, width, size)
}

function drawDiagRect(canvas, startX, startY, padding, width, height, drawHorizOrVert) {
    canvas.fillStyle = whiteRGB2;
    height = Math.floor(padding * height);
    height += (height - width) % 2;
    var y = Math.floor((height - width) / 2);
    padding = Math.floor((padding - height) / 2);
    canvas.fillRect(startX + padding, startY + padding + y, height, width);
    if (drawHorizOrVert) canvas.fillRect(startX + padding + y, startY + padding, width, height)
}

function Points1v1() {
    this.players = null;
    this.init = function(param_playerInfo) {
        this.players = param_playerInfo;
        announcements.new1v1(this.players)
    };
    this.calculateElo = function(winner) {
        var eloChange = 8 / (1 + Math.pow(2, (this.players[winner].elo - this.players[1 - winner].elo) / 10 / 32));
        eloChange = Math.floor(10 * eloChange + .5);
        var winnerElo = this.formatElo(this.players[winner].elo + eloChange + 1),
            loserElo = this.formatElo(this.players[1 - winner].elo - eloChange);
        if (0 === winner) announcements.result1v1(this.players, winnerElo, loserElo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"])
        else announcements.result1v1(this.players, loserElo, winnerElo, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
    };
    this.formatElo = function(elo) {
        elo = 0 > elo ? 0 : 16E3 < elo ? 16E3 : elo;
        return 16E3 <= elo ? "Unknown" : (elo / 10).toFixed(1)
    }
}

function Strings() {
    function getCharTypeIndex(char) {
        for (var charIndex = startRanges.length - 1; 0 <= charIndex; charIndex--)
            if (char >= startRanges[charIndex] && char < endRanges[charIndex]) return charIndex;
        return -1
    }
    var startRanges, endRanges, cumulativeLength;
    startRanges = [32, 65, 191, 913, 931];
    endRanges = [64, 127, 688, 930, 1155];
    cumulativeLength = Array(startRanges.length + 1);
    for (var arrayIndex = 0; arrayIndex < cumulativeLength.length; arrayIndex++) {
        cumulativeLength[arrayIndex] = 0;
        for (var typeIndex = arrayIndex - 1; 0 <= typeIndex; typeIndex--) cumulativeLength[arrayIndex] += endRanges[typeIndex] - startRanges[typeIndex]
    }
    this.isValidName = function(name) {
        var isValid
        name = name.trim();
        if (0 === name.indexOf("Bot ") || 0 === name.indexOf("[Bot] ")) isValid = false;
        else loop: {
            name = name.trim();
            if (3 > name.length || 20 < name.length) isValid = false;
            else {
                for (var upperCaseCount = 0, charCode, nameIndex = 0; nameIndex < name.length; nameIndex++) {
                    charCode = name.charCodeAt(nameIndex);
                    upperCaseCount += 65 <= charCode && 90 >= charCode || 1040 <= charCode && 1071 >= charCode ? 1 : 0;
                    if (-1 === getCharTypeIndex(charCode)) {
                        isValid = false;
                        break loop
                    }
                }
                isValid = 3 >= upperCaseCount || upperCaseCount <= Math.floor(name.length / 2)
            }
        }
        return isValid
    };
    this.convertToCharcode = function(string) {
        string = string.trim();
        for (var charCodeArray = [], currentCharCode, strIndex = 0; strIndex < string.length; strIndex++) {
            currentCharCode = string.charCodeAt(strIndex);
            var charTypeIndex = getCharTypeIndex(currentCharCode);
            charCodeArray.push(cumulativeLength[charTypeIndex] + currentCharCode - startRanges[charTypeIndex])
        }
        return charCodeArray
    };
    this.convertToString = function(charCodeArray) {
        for (var string = "", rangeIndex, charCodeIndex = 0; charCodeIndex < charCodeArray.length; charCodeIndex++) {
            for (rangeIndex = 1; rangeIndex < cumulativeLength.length; rangeIndex++) {
                if (charCodeArray[charCodeIndex] < cumulativeLength[rangeIndex]) {
                    rangeIndex = startRanges[rangeIndex - 1] + charCodeArray[charCodeIndex] - cumulativeLength[rangeIndex - 1];
                    string += String.fromCharCode(rangeIndex);
                    break
                }
            }
        }
        return string
    };
    this.convertTo3DigitString = function(string) {
        string = this.convertToCharcode(string);
        for (var result = "", charCodeIndex = 0; charCodeIndex < string.length; charCodeIndex++) result += 10 > string[charCodeIndex] ? "00" : 100 > string[charCodeIndex] ? "0" : "", result += string[charCodeIndex].toString(10);
        return result
    };
    this.convert3DigitToString = function(threeDigitString) {
        for (var charCodeArray = Array(Math.floor(threeDigitString.length / 3)), z = 0; z < threeDigitString.length; z += 3) charCodeArray[Math.floor(z / 3)] = parseInt(threeDigitString.substring(z, z + 3));
        return this.convertToString(charCodeArray)
    };
    this.convertToAlphanumeric = function(numeric) {
        var stringIndex, numericArray = [numeric.length];
        for (stringIndex = 0; stringIndex < numeric.length; stringIndex++) numericArray[stringIndex] = numeric.charCodeAt(stringIndex) - 48;
        var alphanumericPassword = "";
        for (stringIndex = 0; stringIndex < numeric.length; stringIndex++) {
            if (stringIndex === numeric.length - 1 || 51 < 10 * numericArray[stringIndex] + numericArray[stringIndex + 1]) alphanumericPassword += numericArray[stringIndex].toString();
            else {
                var alphanumericCharCode = 10 * numericArray[stringIndex] + numericArray[stringIndex + 1];
                alphanumericPassword += String.fromCharCode(alphanumericCharCode + (26 > alphanumericCharCode ? 65 : 71));
                stringIndex++
            }
        }
        return alphanumericPassword
    };
    this.convertToNumeric = function(alphanumeric) {
        for (var numericPassword = "", currentCharCode, stringIndex = 0; stringIndex < alphanumeric.length; stringIndex++) {
            currentCharCode = alphanumeric.charCodeAt(stringIndex);
            if (48 <= currentCharCode && 58 > currentCharCode) numericPassword += String.fromCharCode(currentCharCode)
            else if (65 <= currentCharCode && 75 > currentCharCode) numericPassword += "0" + (currentCharCode - 65).toString()
            else if (75 <= currentCharCode && 91 > currentCharCode) numericPassword += (currentCharCode - 65).toString()
            else if (97 <= currentCharCode && 123 > currentCharCode) numericPassword += (currentCharCode - 71).toString()
        }
        return numericPassword
    };
    this.convertToMapData = function(rawMapData) {
        var stringIndex, processedData = [], mapDataArray = [];
        for (stringIndex = 0; stringIndex < rawMapData.length; stringIndex++) {
            var currentCharCode = rawMapData.charCodeAt(stringIndex);
            if (58 > currentCharCode) processedData.push(rawMapData[stringIndex])
            else {
                currentCharCode = 91 > currentCharCode ? currentCharCode - 65 : currentCharCode - 71;
                processedData.push(String(divideFloor(currentCharCode, 10)));
                processedData.push(String(currentCharCode - 10 * divideFloor(currentCharCode, 10)));
            };
        }
        currentCharCode = 0;
        for (stringIndex = 0; stringIndex < processedData.length - 2; stringIndex += 3) mapDataArray[currentCharCode++] = parseInt(processedData[stringIndex] + processedData[stringIndex + 1] + processedData[stringIndex + 2]);
        return mapDataArray
    };
    this.generateOriginURLs = function() {
        var index, url = "";
        for (index = 0; 6 > index; index++) {
            var charcode = 48 + fakeRandom.random() % 36;
            charcode += 58 <= charcode ? 39 : 0;
            url += String.fromCharCode(charcode)
        }
        return url
    }
}

function EndGame() {
    this.endGame = function(winner) {
        var shouldUploadResult;
        if (2 === clientStatus) shouldUploadResult = true;
        else {
            peace.notPeaceGameEnd();
            clientStatus = 2;
            spectatorCount = playersIngame;
            shouldUploadResult = false;
        }
        if (!shouldUploadResult) {
            var result, didWeWin
            if (8 === gamemode) {
                result = winner = 0 > winner ? land[0] >= land[1] ? 0 : 1 : winner;
                if (didWeWin = winner === myID) announcements.genericAnnouncement(winner, 2)
                else announcements.genericAnnouncement(1 - myID, 3);
                points1v1.calculateElo(winner)
            } else {
                if (teamGame) {
                    winner = teams.updateAndGetLargestTeamIndex();
                    didWeWin = teamColors.teamArray[myID] === winner;
                    if (9 === gamemode) result = didWeWin ? landOrder[0] : 512
                    else {
                        winner = teamColors.getClanTagWinningTeam(teamColors.teamIDs[winner]);
                        result = winner[0];
                        if (512 !== result) announcements.resultClan(winner[1]);
                    }
                    announcements.resultTeam(didWeWin)
                } else {
                    result = landOrder[0];
                    didWeWin = result === myID;
                    announcements.resultBR(result);
                }
            }
            if (!singleplayer && !(customJSON.isCustomJSON && customJSON.data.replay)) dataEncoder.uploadResult(getTroopHash(), typeof(modHandler) == "object" && modHandler.alwaysWin && gamemode === 8 ? 1 : result);
            gameResultBox.show(didWeWin, false);
            announcements.checkAnnounceDeath(true);
            gameLeaderboard.drawCanvas(true);
            gameStatistics.drawCanvas(true);
            mainHandler.canvasDirty = true;
            mapUpdate.updatePartialMap();
            setAndroidState(0)
        }
    }
}

function Spawn() {
    this.set = function(authorID, xPos, yPos) {
        if (0 !== isAlive[authorID] && findSpawn.generateHumanSpawn(authorID, xPos, yPos)) mainHandler.canvasDirty = true
    };
    this.update = function() {
        inSpawn = false;
        for (var idIndex = 0; idIndex < playerCount; idIndex++) {
            if (0 !== isAlive[idIndex] && 0 === land[idIndex]) findSpawn.randomSpawn(idIndex);
        }
        if (0 !== isAlive[myID]) {
            statisticNumbers.numbers[7] = land[myID];
            statisticNumbers.numbers[8] = troops[myID];
            attackRatioBar.toggleVisibility();
            gameStatistics.setYOffset();
            autoCamera.fitCameraToMap(xMin[myID] - 5, yMin[myID] - 5, xMax[myID] + 5, yMax[myID] + 5);
            fadeIn.init();
        } else gameResultBox.show(false, false);
        announcements.removeSpawnMessage(18);
        infoRenderer.setPlayerLabels();
        infoRenderer.drawCanvas();
        spawn = null;
        mapUpdate.hasChanged = true;
        mapUpdate.updateFullMap();
        singleplayer && setAndroidState(1)
    }
}
var playerCount, playersIngame, botCount, spectatorCount, maxEntities = 512,
    entityCount = 512, maxTroopsToLandRatio = 150,
    singleplayer, neverJoinedGameBefore, clientStatus = 0,
    currentLandPixelsCount, absMaxTroopCap, absMaxTroopsBeforeRedI,
    humanStartingTroops = 512, neutralLandCost = 2,
    currentSeedSpawn, myID, playerInfo, isCanvasHidden, inSpawn, freeSpawn, teamGame, teamCount, gamemode, isContest, spawn, points1v1, spawnTime;

function gameInit(param_seedSpawn, param_myID, param_playerInfo, param_gamemode, param_isContest) {
    if (typeof(modHandler) == "object") {
        if (modHandler.customGamemode != 11) param_gamemode = modHandler.customGamemode
    }
    currentSeedSpawn = param_seedSpawn;
    neverJoinedGameBefore = isCanvasHidden = false;
    gamemode = param_gamemode;
    isContest = param_isContest;
    playerInfo = param_playerInfo;
    teamGame = 7 > gamemode || 9 === gamemode;
    playersIngame = playerCount = param_playerInfo.length;
    singleplayer = 1 === playersIngame;
    gamemode = 10 === gamemode && singleplayer ? 7 : gamemode;
    gamemode = 8 === gamemode && 2 !== playerCount ? 7 : gamemode;
    teamCount = 9 === gamemode ? 2 : gamemode + 2;
    spawnTime = 2 >= playerCount ? 30 : 50 >= playerCount ? 40 : 50;
    freeSpawn = customJSON.isCustomJSON && !customJSON.data.freeSpawn ? inSpawn = false : inSpawn = teamGame || 100 > playerCount;
    spawn = inSpawn ? new Spawn : null;
    humanStartingTroops = 512;
    entityCount = maxEntities;
    singleplayer && (entityCount = singleSettings.getEntityCount());
    botCount = entityCount - playerCount;
    spectatorCount = 0;
    myID = param_myID;
    fakeRandom.changeRandomNumber(param_seedSpawn);
    setupPlayerInfoArrays(param_playerInfo);
    zombieSettings.init();
    teamColors.init(param_playerInfo);
    clientStatus = 1;
    absMaxTroopCap = 15E8;
    absMaxTroopsBeforeRedI = 1E9;
    statisticNumbers.init();
    setMapCanvas();
    configFakeMap.setAndCountMapPixels();
    mapUpdate.init();
    interest.init();
    receiveDonationsArrayInit();
    pixel.init(param_playerInfo);
    gradientEdge.init();
    teams.init();
    difficultyEngine.init();
    nickNames.generate();
    nickNames.updateNicknames();
    findSpawn.init();
    updateAliveInfo();
    playerAura.init();
    statistics.init();
    mapCanvasCtx.putImageData(mapCanvasImgData, 0, 0);
    gameLeaderboard.init();
    mouseCamera.init();
    attackRatioBar.init();
    peace.init();
    troopBar.init();
    gameStatistics.init();
    gameButtons.init();
    gameMessages.init();
    announcements.init();
    attackBars.init();
    playerActions.init();
    gameResultBox.init();
    processAction.init();
    boatSpeed.init();
    speed.init();
    botManager.init();
    attackMatrixInit();
    attacks.init();
    infoRenderer.init();
    antiFullSend.init();
    humanBots.init();
    diplomacyHandler.init();
    delayedAttack.init();
    8 === gamemode ? (points1v1 = new Points1v1, points1v1.init(param_playerInfo)) : points1v1 = null;
    singleplayer || customJSON.isCustomJSON ? mainHandler.setupSingleplayerHandler() : mainHandler.setupMultiplayerHandler();
    activateCameraRenderer();
    fadeIn.init();
    mainHandler.canvasDirty = true;
    singleplayer && inSpawn || setAndroidState(1)

    if (typeof(modHandler) == 'object') modHandler.scriptGameInit();
}

function activateCameraRenderer() {
    autoCamera.activateCamera();
    0 === isAlive[myID] && gameResultBox.show(false, true);
    infoRenderer.drawCanvas()
}

function leaveGame() {
    wsManager.close(wsManager.remote, 3246);
    clientStatus = 0;
    mainHandler.setupMainUpdateHandler();
    nameInput.init();
    setAndroidState(0);
    showAd()
}
var difficultyEngine, speed, botBoatEngine, botManager, processAction, boatSpeed, autoCamera, findSpawn, strings, playerActions, gameButtons, announcements, nextContestBar, attackBars, 
    gameMessages, attackRatioBar, mouseCamera, playtime, troopBar, gameLeaderboard, gameStatistics, gameResultBox, mainButtons, preLobby, gameStateManager, showError, nameInputBar, gameUpdatedPrompt, 
    singleSettings, nameInput, sprites, pixel, userSettings, attacks, interest, infoRenderer, nickNames, zombieSettings, configFakeMap,
    mapInfo, generateHeightmap, keyboardCamera, boatPathChecker, fakeRandom, boatPathHandler, gradientEdge, touchInputHandler, dataDecoder, fadeIn, dataEncoder, canvasManager, playerAura, lobby, mapMenu, peace, setGameOrigin, 
    wsManager, delayedAttack, moreSettings, specialGames, humanBots, antiFullSend, diplomacyHandler, loadCustomMap, customJSON, intelliAttack, sounds;

function construct() {
    difficultyEngine = new DifficultyEngine;
    speed = new Speed;
    botBoatEngine = new BotBoatEngine;
    botManager = new BotManager;
    processAction = new ProcessAction;
    boatSpeed = new BoatSpeed;
    autoCamera = new AutoCamera;
    findSpawn = new FindSpawn;
    strings = new Strings;
    playerActions = new PlayerActions;
    gameButtons = new GameButtons;
    announcements = new Announcements;
    nextContestBar = new NextContestBar;
    attackBars = new AttackBars;
    gameMessages = new GameMessages;
    attackRatioBar = new AttackRatioBar;
    mouseCamera = new MouseCamera;
    playtime = new Playtime;
    troopBar = new TroopBar;
    gameLeaderboard = new GameLeaderboard;
    gameStatistics = new GameStatistics;
    gameResultBox = new GameResultBox;
    mainButtons = new MainButtons;
    preLobby = new PreLobby;
    gameStateManager = new GameStateManager;
    showError = new ShowError;
    showError.generate();
    nameInputBar = new NameInputBar;
    gameUpdatedPrompt = new GameUpdatedPrompt;
    singleSettings = new SingleSettings;
    nameInput = new NameInput;
    sprites = new Sprites;
    pixel = new Pixel;
    userSettings = new UserSettings;
    attacks = new Attacks;
    interest = new Interest;
    infoRenderer = new InfoRenderer;
    nickNames = new NickNames;
    zombieSettings = new ZombieSettings;
    configFakeMap = new ConfigFakeMap;
    mapInfo = new MapInfo;
    generateHeightmap = new GenerateHeightmap;
    keyboardCamera = new KeyboardCamera;
    boatPathChecker = new BoatPathChecker;
    fakeRandom = new FakeRandom;
    boatPathHandler = new BoatPathHandler;
    gradientEdge = new GradientEdge;
    touchInputHandler = new TouchInputHandler;
    dataDecoder = new DataDecoder;
    fadeIn = new FadeIn;
    dataEncoder = new DataEncoder;
    canvasManager = new CanvasManager;
    playerAura = new PlayerAura;
    lobby = new Lobby;
    mapMenu = new MapMenu;
    peace = new Peace;
    setGameOrigin = new SetGameOrigin;
    wsManager = new WsManager;
    delayedAttack = new DelayedAttack;
    moreSettings = new MoreSettings;
    specialGames = new SpecialGames;
    humanBots = new HumanBots;
    antiFullSend = new AntiFullSend;
    diplomacyHandler = new DiplomacyHandler;
    loadCustomMap = new LoadCustomMap;
    customJSON = new CustomJSON;
    intelliAttack = new IntelliAttack;
    sounds = new Sounds;
    if (typeof(modConstruct) == "function") modConstruct();
}

function PlayerActions() {
    function drawIcons(icons, iconCanvases, spriteHeight, fillStyle) {
        for (var uiCanvasCtx, iconIndex = 0; iconIndex < icons.length; iconIndex++) {
            iconCanvases.push(document.createElement("canvas"));
            iconCanvases[iconIndex].width = spriteHeight;
            iconCanvases[iconIndex].height = spriteHeight;
            uiCanvasCtx = iconCanvases[iconIndex].getContext("2d", {
                alpha: true
            });
            uiCanvasCtx.fillStyle = fillStyle;
            uiCanvasCtx.beginPath();
            uiCanvasCtx.arc(Math.floor(spriteHeight / 2), Math.floor(spriteHeight / 2), Math.floor(.47 * spriteHeight), 0, 2 * Math.PI);
            uiCanvasCtx.fill();
            if (6 === icons[iconIndex]) uiCanvasCtx.drawImage(sprites.getValueByID(19), 0, 0)
            else if (7 === icons[iconIndex]) uiCanvasCtx.drawImage(sprites.getValueByName("emojis"), -4 * spriteHeight, 0)
            else uiCanvasCtx.drawImage(sprites.getValueByID(3), -icons[iconIndex] * spriteHeight, 0)
        }
    }

    function canRequestToAttackTarget(targetID) {
        for (var friendIndex = friends.length - 1; 0 <= friendIndex; friendIndex--)
            if (friends[friendIndex] === targetID) return true;
        return false
    }

    function shouldCloseIconMenu(buttonType) {
        return -1 === buttonType || 0 === buttonType || 6 === buttonType || !iconActive[5] && (8 === buttonType || !iconActive[4] && 7 === buttonType) || !iconActive[7] && (2 === buttonType || !iconActive[6] && 1 === buttonType) || 3 === buttonType && !iconActive[2] || 5 === buttonType && !iconActive[1] && !iconActive[5] && !iconActive[7] ? false : true
    }

    function getButtonType(xPos, yPos) {
        return xPos < iconX - iconSize - iconmargin || xPos > iconX + 2 * iconSize + iconmargin || yPos < iconY - iconSize - iconmargin || yPos > iconY + 2 * iconSize + iconmargin ? -1 : 3 * (yPos < iconY - iconmargin / 2 ? 0 : yPos < iconY + iconSize + iconmargin / 2 ? 1 : 2) + (xPos < iconX - iconmargin / 2 ? 0 : xPos < iconX + iconSize + iconmargin / 2 ? 1 : 2)
    }
    var iconActive = [], emojisShown, iconX, iconY, iconSize, lastClickX, lastClickY, lastClickTime,
        targetID, targetPixelIndex, iconmargin, redIcons, iconScale, friends, lastFriendAddedTime;
    this.yellowIcons = [];
    this.init = function() {
        friends = [];
        iconActive = [];
        emojisShown = false;
        lastClickX = lastClickY = iconX = iconY = lastClickTime = 0;
        this.initIcon();
        for (var iconIndex = this.greenIcons.length - 1; 0 <= iconIndex; iconIndex--) iconActive.push(false);
        iconActive.push(false)
    };
    this.initIcon = function() {
        this.greenIcons = [];
        redIcons = [];
        this.spriteIcons = [];
        var orderIconsHeight = sprites.getValueByID(3).height;
        iconSize = Math.floor((isZoom ? .075 : .0468) * averageDim);
        iconScale = iconSize / orderIconsHeight;
        iconmargin = Math.floor(iconSize / 3);
        drawIcons([0, 1, 2, 3, 7, 4, 5, 6], this.greenIcons, orderIconsHeight, "rgba(0,180,0,0.6)");
        drawIcons([0, 4, 5], redIcons, orderIconsHeight, "rgba(200,0,0,0.6)");
        drawIcons([0, 2, 4], this.spriteIcons, orderIconsHeight, "rgba(0,0,0,0.6)");
        drawIcons([0, 5], this.yellowIcons, orderIconsHeight, "rgba(200,200,0,0.6)");
        this.greenIcons[6] = this.yellowIcons[1]
    };
    this.hasClickedIcon = function(xPos, yPos) {
        if (this.visible()) {
            var actionCode = this.mouseDown(xPos, yPos);
            mainHandler.canvasDirty = 0 < actionCode;
            return 2 > actionCode
        }
        return false
    };
    this.setLastClickPos = function(xPos, yPos) {
        if (!this.visible()) {
            lastClickX = xPos;
            lastClickY = yPos;
            lastClickTime = (new Date).getTime();
        }
    };
    this.isHuman = function(id) {
        return id < playerCount && 2 !== playerStatus[id]
    };
    this.mouseDown = function(xPos, yPos) {
        lastClickY = lastClickX = -1E3;
        if (2 === playerStatus[myID] || 0 === isAlive[myID] && !inSpawn) return this.end(), 1;
        if (emojisShown) {
            this.end();
            if (emojis.insideEmojiSelectionArea(xPos, yPos)) emojis.checkChooseEmoji(xPos, yPos, targetID) && (emojisShown = true);
            else return emojis.resetDirectionSelection(), 2;
            return 1
        }
        var buttonType = getButtonType(xPos, yPos);
        if (!shouldCloseIconMenu(buttonType) || 0 === buttonType || 6 === buttonType || !iconActive[2] && 3 === buttonType) return this.end(), 2;
        if (1 === buttonType) {
            if (iconActive[6]) {
                buttonType = (new Date).getTime();
                buttonType > lastFriendAddedTime + 4E3 && (friends = []);
                lastFriendAddedTime = buttonType;
                if (canRequestToAttackTarget(targetID)) return this.end(), 1;
                friends.push(targetID);
                16 < friends.length && friends.shift();
                this.end();
                return 1
            }
            return 0
        }
        if (2 === buttonType) {
            if (iconActive[7]) {
                for (buttonType = friends.length - 1; 0 <= buttonType; buttonType--) 0 === isAlive[friends[buttonType]] && friends.splice(buttonType, 1);
                if (0 < friends.length) {
                    if (diplomacyHandler.addOutboundDiplomacy(1, friends, true)) {
                        announcements.requestToAttack(friends, targetID);
                        dataEncoder.requestAttack(friends, targetID)
                    };
                    friends = [];
                }
                this.end();
                return 1
            }
            return 0
        }
        if (3 === buttonType) {
            this.end();
            if (this.isHuman(targetID) && 7 > gamemode && 1071 > mainHandler.getTicksElapsed()) return announcements.antiBoosting(), 1;
            announcements.lowBalance();
            if (singleplayer) {
                if (typeof(modHandler) == "object" && modHandler.latency) latencySimulator.addPendingAction(0, divideFloor(attackRatioBar.getFlooredRatio()), targetID, 0, 0)
                else processDonation(myID, targetID, divideFloor(attackRatioBar.getFlooredRatio() * troops[myID], 1E3))
            } else dataEncoder.attack(attackRatioBar.getFlooredRatio(), targetID === maxEntities ? myID : targetID);
            return 1
        }
        if (4 === buttonType) {
            if (iconActive[0]) {
                if (inSpawn) {
                    this.end();
                    if (singleplayer) {
                        spawn.set(0, pixel.toX(targetPixelIndex), pixel.toY(targetPixelIndex));
                        spawn.update();
                    } else if (typeof(spawnHelper) == "object" && modHandler.spawnMod) spawnHelper.addSpawn(pixel.toX(targetPixelIndex), pixel.toY(targetPixelIndex))
                    else dataEncoder.setLocation(1E3, pixel.toX(targetPixelIndex), pixel.toY(targetPixelIndex));
                } else {
                    this.end();
                    announcements.lowBalance();
                    if (singleplayer) {
                        if (typeof(modHandler) == "object" && modHandler.latency) latencySimulator.addPendingAction(0, attackRatioBar.getFlooredRatio(), targetID, 0, 0)
                        else processAttack(myID, targetID, attackRatioBar.getFlooredRatio());
                    } else if (!freeSpawn || 300 < gameStatistics.getUnformattedTime()) dataEncoder.attack(attackRatioBar.getFlooredRatio(), targetID === maxEntities ? myID : targetID);
                }
            } else if (iconActive[8]) {
                this.end();
                delayedAttack.addDelayedAttack(targetID, attackRatioBar.getFlooredRatio());
            } else this.end();
            return 1;
        }
        if (5 === buttonType) {
            if (iconActive[1]) {
                this.end();
                announcements.lowBalance();
                if (singleplayer) {
                    if (typeof(modHandler) == "object" && modHandler.latency) latencySimulator.addPendingAction(1, attackRatioBar.getFlooredRatio(), 0, pixel.toX(targetPixelIndex), pixel.toY(targetPixelIndex))
                    else processAction.processSendBoat(myID, attackRatioBar.getFlooredRatio(), pixel.toX(targetPixelIndex), pixel.toY(targetPixelIndex));
                } else dataEncoder.setLocation(attackRatioBar.getFlooredRatio(), pixel.toX(targetPixelIndex), pixel.toY(targetPixelIndex));
                return 1;
            }
            return 0;
        }
        if (7 === buttonType && iconActive[4]) {
            this.end();
            emojisShown = emojis.show(xPos, yPos);
            return 1;
        }
        if (8 === buttonType) {
            if (iconActive[5]) {
                if (diplomacyHandler.addOutboundDiplomacy(0, [targetID], true)) {
                    announcements.nonAggression(targetID, 0);
                    dataEncoder.nonAggression(targetID);
                }
                this.end();
                return 1;
            }
            return 0;
        }
        this.end();
        return 2
    };
    this.click = function(xPos, yPos) {
        if (this.visible() || 2 === playerStatus[myID] || 0 === isAlive[myID] && !inSpawn || customJSON.isCustomJSON && customJSON.data.replay) return false;
        var pixelTolerance = (isZoom ? .0288 : .0144) * averageDim;
        if (Math.abs(xPos - lastClickX) > pixelTolerance || Math.abs(yPos - lastClickY) > pixelTolerance || (new Date).getTime() > lastClickTime + 425) return false;
        var xCoord = Math.floor((xPos + viewportX) / mainScaleFactor),
            yCoord = Math.floor((yPos + viewportY) / mainScaleFactor);
        if (1 > xCoord || 1 > yCoord || xCoord >= currentMapWidth - 1 || yCoord >= currentMapHeight - 1) return false;
        targetPixelIndex = pixel.toIndex(xCoord, yCoord);
        if (!pixel.canOwn(targetPixelIndex)) return false;
        if (2 === clientStatus) {
            if (1 <= emojis.selectedEmojiCount && (targetID = pixel.getOwner(targetPixelIndex), this.isHuman(targetID))) {
                if (targetID === myID) this.end();
                else {
                    iconActive[4] = true;
                    this.setIconPosition(xPos, yPos);
                }
            }
            else return false;
        }
        if (inSpawn) {
            iconActive[0] = true;
            return this.setIconPosition(xPos, yPos);
        }
        iconActive[1] = boatPathChecker.check(myID, targetPixelIndex);
        if (pixel.isNeutral(targetPixelIndex)) {
            targetID = maxEntities;
            if (bordersNeutral(myID)) iconActive[0] = true
            else if (target1BordersAttackingTarget2(myID, targetID)) iconActive[8] = true;
            return this.setIconPosition(xPos, yPos);
        }
        targetID = pixel.getOwner(targetPixelIndex);
        if (targetID === myID) {
            this.end();
            if (0 === emojis.selectedEmojiCount) return false;
            iconActive[4] = true;
            return this.setIconPosition(xPos, yPos)
        }
        iconActive[6] = playerActions.isHuman(targetID) && !canRequestToAttackTarget(targetID) && diplomacyHandler.addOutboundDiplomacy(1, [targetID], false); 
        iconActive[4] = 1 <= emojis.selectedEmojiCount && this.isHuman(targetID);
        if (isNotTeamate(targetID, myID)) {
            iconActive[5] = this.isHuman(targetID) && !infoRenderer.ratifiedNonAggression(targetID) && diplomacyHandler.addOutboundDiplomacy(0, [targetID], false);
            var showTargetIcon;
            if (0 === friends.length) showTargetIcon = false;
            else if ((new Date).getTime() > lastFriendAddedTime + 4E3) {
                friends = [];
                showTargetIcon = false;
            } else {
                if (!canRequestToAttackTarget(targetID)) {
                    loop: {
                        if (teamGame) {
                            for (var friendIndex = friends.length - 1; 0 <= friendIndex; friendIndex--) {
                                if (!isNotTeamate(targetID, friends[friendIndex])) {
                                    showTargetIcon = true;
                                    break loop
                                }
                            }
                        }
                        showTargetIcon = false
                    }
                    showTargetIcon = !showTargetIcon
                }
            }
            iconActive[7] = showTargetIcon;
            bordersTarget(myID, targetID) ? iconActive[0] = true : target1BordersAttackingTarget2(myID, targetID) && (iconActive[8] = true);
            return this.setIconPosition(xPos, yPos)
        }
        iconActive[2] = teamGame;
        return this.setIconPosition(xPos, yPos)
    };
    this.setIconPosition = function(xPos, yPos) {
        iconX = xPos - Math.floor(iconSize / 2);
        iconY = yPos - Math.floor(iconSize / 2);
        return this.visible()
    };
    this.onPointermove = function(xPos, yPos) {
        if (!this.visible()) return false;
        if (emojisShown) {
            if (emojis.insideEmojiSelectionArea(xPos, yPos)) return false;
            emojis.resetDirectionSelection();
            emojisShown = false;
            return mainHandler.canvasDirty = true
        }
        if (shouldCloseIconMenu(getButtonType(xPos, yPos))) return false
        else {
            this.end();
            mainHandler.canvasDirty = true
            return true
        }
    };
    this.end = function() {
        var iconIndex;
        for (iconIndex = iconActive.length - 1; 0 <= iconIndex; iconIndex--) iconActive[iconIndex] = false;
        emojisShown = false
    };
    this.visible = function() {
        var iconIndex;
        for (iconIndex = iconActive.length - 1; 0 <= iconIndex; iconIndex--)
            if (iconActive[iconIndex]) return true;
        return emojisShown
    };
    this.drawCanvasImage = function() {
        this.visible() && this.drawIcons()
    };
    this.drawIcons = function() {
        if (emojisShown) emojis.drawCanvasImage();
        else {
            var scaledIconOffset = (iconSize + iconmargin) / iconScale;
            mainCanvasCtx.imageSmoothingEnabled = true;
            mainCanvasCtx.setTransform(iconScale, 0, 0, iconScale, iconX, iconY);
            if (iconActive[0]) {
                if (inSpawn) mainCanvasCtx.drawImage(this.greenIcons[3], 0, 0)
                else mainCanvasCtx.drawImage(this.greenIcons[0], 0, 0)
            } else if (iconActive[8]) mainCanvasCtx.drawImage(this.yellowIcons[0], 0, 0)
            else mainCanvasCtx.drawImage(redIcons[0], 0, 0);
            iconActive[1] && mainCanvasCtx.drawImage(this.greenIcons[1], scaledIconOffset, 0);
            iconActive[2] && mainCanvasCtx.drawImage(this.greenIcons[2], -scaledIconOffset, 0);
            iconActive[4] && mainCanvasCtx.drawImage(this.greenIcons[4], 0, scaledIconOffset);
            iconActive[5] && mainCanvasCtx.drawImage(this.greenIcons[5], scaledIconOffset, scaledIconOffset);
            iconActive[6] && mainCanvasCtx.drawImage(this.greenIcons[6], 0, -scaledIconOffset);
            iconActive[7] && mainCanvasCtx.drawImage(this.greenIcons[7], scaledIconOffset, -scaledIconOffset);
            mainCanvasCtx.imageSmoothingEnabled = false;
            mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
}

function GameButtons() {
    function drawGameMenuButton() {
        var gameButtonsCanvasCtx = gameButtonsCanvas.getContext("2d", {
            alpha: true
        });
        gameButtonsCanvasCtx.clearRect(0, 0, buttonSize, buttonSize);
        gameButtonsCanvasCtx.fillStyle = blackSemiTransparent2;
        gameButtonsCanvasCtx.fillRect(0, 0, buttonSize, buttonSize);
        if (0 === selectedBIndex) {
            gameButtonsCanvasCtx.fillStyle = whiteMore2Transparent;
            gameButtonsCanvasCtx.fillRect(0, 0, buttonSize, buttonSize);
        }
        gameButtonsCanvasCtx.fillStyle = whiteRGB2;
        gameButtonsCanvasCtx.fillRect(0, 0, buttonSize, 1);
        gameButtonsCanvasCtx.fillRect(0, 0, 1, buttonSize);
        gameButtonsCanvasCtx.fillRect(0, buttonSize - 1, buttonSize, 1);
        gameButtonsCanvasCtx.fillRect(buttonSize - 1, 0, 1, buttonSize);
        var buttonScaleFactor = .9 * buttonSize / sprites.getValueByID(0).width;
        gameButtonsCanvasCtx.imageSmoothingEnabled = true;
        gameButtonsCanvasCtx.setTransform(buttonScaleFactor, 0, 0, buttonScaleFactor, Math.floor((buttonSize - buttonScaleFactor * sprites.getValueByID(0).width) / 2), Math.floor((buttonSize - buttonScaleFactor * sprites.getValueByID(0).height) / 2));
        gameButtonsCanvasCtx.drawImage(sprites.getValueByID(0), 0, 0);
        gameButtonsCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
    }

    function getButtonIndex(xPos, yPos) {
        if (!gameButtons.menuVisible) return xPos <= buttonSize + canvasPadding && yPos >= attackRatioBar.startingY ? 0 : -1;
        if (xPos <= 4 * buttonSize + canvasPadding) {
            if (yPos >= attackRatioBar.startingY) return 0;
            for (let bIndex = 2; bIndex <= buttonLabels.length; bIndex++) {
                if (yPos >= attackRatioBar.startingY - (bIndex - 1) * (buttonSize + buttonScalingFactor * canvasPadding)) return bIndex
            }
        } else if (xPos <= 7 * buttonSize + canvasPadding && yPos >= attackRatioBar.startingY - buttonSize - buttonScalingFactor * canvasPadding) return 1;
        return -1
    }

    function drawGameButtons(bIndex, color) {
        mainCanvasCtx.setTransform(1, 0, 0, 1, canvasPadding, attackRatioBar.startingY - bIndex * buttonScalingFactor * canvasPadding - bIndex * buttonSize);
        mainCanvasCtx.fillStyle = blackSemiTransparent2;
        mainCanvasCtx.fillRect(0, 0, 4 * buttonSize, buttonSize);
        if (selectedBIndex === bIndex + 1 && color != gray128RGB) {
            mainCanvasCtx.fillStyle = whiteMore2Transparent;
            mainCanvasCtx.fillRect(0, 0, 4 * buttonSize, buttonSize);
        }
        mainCanvasCtx.fillStyle = color;
        mainCanvasCtx.fillRect(0, 0, 4 * buttonSize, 1);
        mainCanvasCtx.fillRect(0, 0, 1, buttonSize);
        mainCanvasCtx.fillRect(4 * buttonSize, 0, 1, buttonSize);
        mainCanvasCtx.fillRect(0, buttonSize - 1, 4 * buttonSize, 1);
        mainCanvasCtx.fillText(buttonLabels[bIndex], 2 * buttonSize, .54 * buttonSize)
    }
    var buttonSize, gameButtonsCanvas, fontStyle, buttonLabels = ["Quit Game", "Surrender", "Statistics", "Export Replay", "Show Mod Menu"],
        selectedBIndex, buttonScalingFactor;
    this.init = function() {
        selectedBIndex = -1;
        this.menuVisible = false;
        buttonScalingFactor = isZoom ? 1.2 : .6;
        this.setCanvasVariables()
    };
    this.setCanvasVariables = function() {
        buttonSize = attackRatioBar.height;
        gameButtonsCanvas = document.createElement("canvas");
        gameButtonsCanvas.width = buttonSize;
        gameButtonsCanvas.height = buttonSize;
        fontStyle = fontWeightBold + Math.floor((isZoom ? .5 : .45) * buttonSize) + fontSizeArial;
        drawGameMenuButton()
    };
    this.toggleMenu = function() {
        if (this.menuVisible = !this.menuVisible) {
            isCanvasHidden = false;
            if (singleplayer && 1 === clientStatus && !inSpawn) {
                setTimeout(function() {
                    mapUpdate.updatePartialMap()
                }, 0)
            };
            setAndroidState(0);
        } else {
            selectedBIndex = -1;
            drawGameMenuButton();
            if (singleplayer) setAndroidState(1);
        }
        mainHandler.canvasDirty = true
    };
    this.mouseDown = function(xPos, yPos) {
        var bIndex = getButtonIndex(xPos, yPos);
        if (this.menuVisible) {
            if (0 === bIndex) {
                leaveGame();
                return 2;
            } else if (1 === bIndex) {
                this.toggleMenu();
                return 2;
            } else if (2 === bIndex) {
                if (!(customJSON.isCustomJSON && customJSON.data.replay) && this.canSurrender(myID)) {
                    if (singleplayer) processAction.surrender(myID)
                    else dataEncoder.surrender();
                    this.toggleMenu();
                }
                return 2;
            } else if (3 === bIndex) {
                if (2 <= statisticNumbers.currentDataPointIndex) {
                    statistics.toggleMenu();
                    mainHandler.canvasDirty = true;
                }
                return 2;
            } else if (4 === bIndex) {
                if (typeof(modHandler) == "object" && !(customJSON.isCustomJSON && customJSON.data.replay)) {
                    replayLogger.exportReplay()
                    this.toggleMenu();
                }
                return 2;
            } else if (5 === bIndex) {
                if (typeof(ModPanel) != "undefined") {
                    this.toggleMenu();
                    mainSettings.hideIfNotHidden();
                    statistics.end();
                    mainSettings.buttons[4].buttonClass.init();
                    nameInput.hide();
                    mainHandler.canvasDirty = true;
                }
                return 2;
            } else if (statistics.visible || singleplayer && !inSpawn) return 1
            else {
                this.toggleMenu();
                return 2;
            }
        } else if (0 === bIndex) {
            this.toggleMenu();
            return 2;
        } else return 0
    };
    this.onPointermove = function(xPos, yPos) {
        var bIndex = getButtonIndex(xPos, yPos);
        if (bIndex === selectedBIndex) return -1 !== selectedBIndex;
        selectedBIndex = bIndex;
        if (!this.menuVisible) drawGameMenuButton();
        mainHandler.canvasDirty = true;
        return -1 !== selectedBIndex
    };
    this.drawCanvasImage = function() {
        if (this.menuVisible) {
            var buttonWidth = Math.floor(5.5 * buttonSize);
            mainCanvasCtx.setTransform(1, 0, 0, 1, canvasPadding, attackRatioBar.startingY);
            mainCanvasCtx.fillStyle = blackSemiTransparent2;
            mainCanvasCtx.fillRect(0, 0, buttonWidth, buttonSize);
            if (0 === selectedBIndex) {
                mainCanvasCtx.fillStyle = whiteMore2Transparent;
                mainCanvasCtx.fillRect(0, 0, 4 * buttonSize, buttonSize)
            } else if (1 === selectedBIndex) {
                mainCanvasCtx.fillStyle = whiteMore2Transparent;
                mainCanvasCtx.fillRect(4 * buttonSize, 0, Math.floor(1.5 * buttonSize), buttonSize);
            }
            mainCanvasCtx.fillStyle = whiteRGB2;
            mainCanvasCtx.fillRect(0, 0, buttonWidth, 1);
            mainCanvasCtx.fillRect(0, 0, 1, buttonSize);
            mainCanvasCtx.fillRect(4 * buttonSize, 0, 1, buttonSize);
            mainCanvasCtx.fillRect(0, buttonSize - 1, buttonWidth, 1);
            mainCanvasCtx.fillRect(buttonWidth - 1, 0, 1, buttonSize);
            mainCanvasCtx.font = fontStyle;
            mainCanvasCtx.textBaseline = middleAlign;
            mainCanvasCtx.textAlign = centerAlign;
            mainCanvasCtx.fillText(buttonLabels[0], 2 * buttonSize, .54 * buttonSize);
            var menuSymbolSize = .4 * buttonSize;
            gameButtons.drawMenuSymbol(canvasPadding + 4 * buttonSize + (1.5 * buttonSize - menuSymbolSize) / 2, attackRatioBar.startingY + .3 * buttonSize, menuSymbolSize);
            drawGameButtons(1, gameButtons.canSurrender(myID) ? whiteRGB2 : gray128RGB);
            drawGameButtons(2, 2 <= statisticNumbers.currentDataPointIndex ? whiteRGB2 : gray128RGB);
            drawGameButtons(3, typeof(modHandler) == 'object' && !(customJSON.isCustomJSON && customJSON.data.replay) ? whiteRGB2 : gray128RGB);
            drawGameButtons(4, typeof(modHandler) == 'object' ? whiteRGB2 : gray128RGB);
            mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
        } else mainCanvasCtx.drawImage(gameButtonsCanvas, canvasPadding, attackRatioBar.startingY)
    };
    this.canSurrender = function(id) {
        return 0 !== isAlive[id] && 2 !== clientStatus && playerActions.isHuman(id)
    };
    this.drawMenuSymbol = function(xEnd, yEnd, size) {
        mainCanvasCtx.setTransform(1, 0, 0, 1, xEnd, yEnd);
        mainCanvasCtx.lineWidth = 2;
        mainCanvasCtx.strokeStyle = whiteRGB2;
        mainCanvasCtx.beginPath();
        mainCanvasCtx.moveTo(0, 0);
        mainCanvasCtx.lineTo(size, size);
        mainCanvasCtx.moveTo(0, size);
        mainCanvasCtx.lineTo(size, 0);
        mainCanvasCtx.stroke()
    }
}

function Announcements() {
    var latestDeaths, latestKillers, deathAnnouncementTime, latestDeathCounts, lastDeathOccuredTime, pluralLeaveLabels, monoLeaveLabels;

    function getBaseAnnouncementY() {
        if (attackRatioBar.overlapsWithAnnouncements(announcements.getAnnouncementWidth())) {
            if (peace.visible) return attackRatioBar.startingY - attackRatioBar.height - 2 * canvasPadding
            else return attackRatioBar.startingY - canvasPadding
        } else if (peace.visible) return mainCanvasHeight - attackRatioBar.height - (isZoom ? 3 : 2) * canvasPadding
        else return mainCanvasHeight - canvasPadding
    }
    function announce(displayTime, message, messageID, playerID, fontStyle, bgFillStyle, nextHoverToTarget, canHoverToTarget) {
        var isEmoji = 1E3 <= messageID;
        var messageWidth = Math.floor(gameMessages.measureText(message, announcements.fontStyle) + 1.5 * marginWidth + (isEmoji ? announcementHeight : 1.5 * marginWidth));
        if (messageWidth + canvasPadding > mainCanvasWidth && !isEmoji && 50 !== messageID && 20 < message.length) {
            var totalAnnouncementWidth = Math.floor(.5 * message.length);
            announce(displayTime, message.substring(0, totalAnnouncementWidth), messageID, playerID, fontStyle, bgFillStyle, nextHoverToTarget, canHoverToTarget);
            announce(displayTime, message.substring(totalAnnouncementWidth), messageID, playerID, fontStyle, bgFillStyle, nextHoverToTarget, canHoverToTarget)
        } else {
            totalAnnouncementWidth = messageWidth + (50 === messageID ? acceptButtonWidth : 0);
            var messageCanvas = document.createElement("canvas");
            messageCanvas.width = messageWidth;
            messageCanvas.height = announcementHeight;
            var messageCanvasCtx = messageCanvas.getContext("2d", {
                alpha: true
            });
            messageCanvasCtx.font = announcements.fontStyle;
            messageCanvasCtx.textBaseline = middleAlign;
            messageCanvasCtx.textAlign = leftAlign;
            messageCanvasCtx.clearRect(0, 0, messageWidth, announcementHeight);
            messageCanvasCtx.fillStyle = bgFillStyle;
            messageCanvasCtx.fillRect(0, 0, messageWidth, announcementHeight);
            messageCanvasCtx.fillStyle = fontStyle;
            messageCanvasCtx.fillText(message, Math.floor(1.5 * marginWidth), Math.floor(announcementHeight / 2));
            if (isEmoji) {
                isEmoji = announcementHeight / emojis.width;
                messageCanvasCtx.imageSmoothingEnabled = true;
                messageCanvasCtx.setTransform(isEmoji, 0, 0, isEmoji, messageWidth - announcementHeight, 0);
                messageCanvasCtx.drawImage(emojis.emojiCanvasList[messageID - 1E3], 0, 0);
            }
            pendingAnnouncements.unshift({
                time: displayTime,
                label: message,
                id: messageID,
                player: playerID,
                canvas: messageCanvas,
                announcementFontStyle: fontStyle,
                announcementFillStyle: bgFillStyle,
                width: messageWidth,
                announcementWidth: totalAnnouncementWidth,
                nextHoverTo: nextHoverToTarget,
                canHoverTo: canHoverToTarget
            })
        }
    }

    function removeExcessSameMessages(messageID, threshold) {
        var pendingIndex, sameMessageCount = 0;
        for (pendingIndex = 0; pendingIndex < pendingAnnouncements.length; pendingIndex++) {
            if (pendingAnnouncements[pendingIndex].id === messageID) {
                sameMessageCount++;
                if (sameMessageCount >= threshold) {
                    pendingAnnouncements.splice(pendingIndex, 1);
                    break
                }
            }
        }
    }

    function getColorRGB(R, G, B) {
        return "rgb(" + R + "," + G + "," + B + ")"
    }

    function removePendingAnnouncement(messageID, playerID) {
        var aIndex, removeSuccessful = false;
        for (aIndex = pendingAnnouncements.length - 1; 0 <= aIndex; aIndex--) {
            if (pendingAnnouncements[aIndex].id === messageID && (playerID === maxEntities || pendingAnnouncements[aIndex].player === playerID)) {
                pendingAnnouncements.splice(aIndex, 1);
                removeSuccessful = true;
            }
        }
        return removeSuccessful
    }
    var pendingAnnouncements, announcementHeight, marginWidth, acceptButtonWidth, maxAnnouncementsCount, tickCounter, acceptButCanvas;
    this.init = function() {
        tickCounter = 0;
        maxAnnouncementsCount = isZoom ? 7 : 12;
        latestDeaths = [0, 0, 0];
        latestKillers = [0, 0, 0];
        deathAnnouncementTime = [220, 180, 180];
        latestDeathCounts = [0, 0, 0];
        lastDeathOccuredTime = [0, 0, 0];
        pluralLeaveLabels = [" were conquered.", " left the game.", " surrendered."];
        monoLeaveLabels = [" was conquered by ", " left the game.", " surrendered."];
        pendingAnnouncements = [];
        this.setCanvasVariables();
        if (inSpawn) this.genericAnnouncement(0, 18);
        var mapLandInfoLabel = "Map: " + mapInfo.getMapName() + "   Pixels: " + attackBars.splitNumber(configFakeMap.totalNonBorderPixelsCount) + "   Land: " + attackBars.splitNumber(configFakeMap.landPixelsCount) + " (" + gameStatistics.getPercentage(100 * configFakeMap.landPixelsCount / configFakeMap.totalNonBorderPixelsCount, 1) + ")",
            mapSpecialInfoLabel = "";
        if (0 < configFakeMap.waterPixelsCount) {
            mapSpecialInfoLabel += "Water: " + attackBars.splitNumber(configFakeMap.waterPixelsCount) + " (" + gameStatistics.getPercentage(100 * configFakeMap.waterPixelsCount / configFakeMap.totalNonBorderPixelsCount, 1) + ")";
        }
        if (0 < configFakeMap.mountainPixelsCount) {
            mapSpecialInfoLabel += 0 < configFakeMap.waterPixelsCount ? "   " : "";
            mapSpecialInfoLabel += "Mountains: " + attackBars.splitNumber(configFakeMap.mountainPixelsCount) + " (" + gameStatistics.getPercentage(100 * configFakeMap.mountainPixelsCount / configFakeMap.totalNonBorderPixelsCount, 1) + ")";
        }
        announce(340, mapLandInfoLabel, 6, 0, getColorRGB(215, 245, 255), blackMoreOpaque, -1, false);
        if (0 < mapSpecialInfoLabel.length) announce(340, mapSpecialInfoLabel, 6, 0, getColorRGB(215, 245, 255), blackMoreOpaque, -1, false);
        if (10 === gamemode) announce(120, "Full sending against human players is disabled.", 6, 0, getColorRGB(235, 255, 120), blackMoreOpaque, -1, false);
        this.announceDescription()
    };
    this.announceDescription = function() {
        var dIndex;
        if (customJSON.isCustomJSON) {
            var descriptionCount = customJSON.data.description.length;
            for (dIndex = 0; dIndex < descriptionCount; dIndex++) announce(400, customJSON.data.description[dIndex], 6, 0, getColorRGB(255, 255, 255), blackMoreOpaque, -1, false)
        }
    };
    this.setCanvasVariables = function() {
        announcementHeight = Math.floor((isZoom ? .031 : .0249) * averageDim);
        announcementHeight = 10 > announcementHeight ? 10 : announcementHeight;
        this.fontRatio = Math.floor(2 * announcementHeight / 3);
        this.fontStyle = fontWeightBold + this.fontRatio + fontSizeArial;
        marginWidth = Math.floor(announcementHeight / 5);
        if (0 < pendingAnnouncements.length) {
            for (var aIndex = pendingAnnouncements.length - 1; 0 <= aIndex; aIndex--) {
                var cAnnouncement = pendingAnnouncements.pop()
                announce(cAnnouncement.time, cAnnouncement.label, cAnnouncement.id, cAnnouncement.player, cAnnouncement.announcementFontStyle, cAnnouncement.announcementFillStyle, cAnnouncement.nextHoverTo, cAnnouncement.canHoverTo);
            }
        }
        this.setAcceptButtonCanvasVariables()
    };
    this.setAcceptButtonCanvasVariables = function() {
        acceptButCanvas = document.createElement("canvas");
        acceptButtonWidth = gameMessages.measureText("Accept", this.fontStyle) + 5 * marginWidth;
        acceptButCanvas.height = announcementHeight;
        acceptButCanvas.width = acceptButtonWidth;
        var acceptButCanvasCtx = acceptButCanvas.getContext("2d", {
            alpha: true
        });
        acceptButCanvasCtx.font = this.fontStyle;
        acceptButCanvasCtx.textBaseline = middleAlign;
        acceptButCanvasCtx.textAlign = centerAlign;
        acceptButCanvasCtx.clearRect(0, 0, acceptButtonWidth, announcementHeight);
        acceptButCanvasCtx.fillStyle = greenDarkMoreOpaque;
        acceptButCanvasCtx.fillRect(0, 0, acceptButtonWidth, announcementHeight);
        acceptButCanvasCtx.fillStyle = whiteRGB2;
        acceptButCanvasCtx.fillText("Accept", Math.floor(acceptButtonWidth / 2), Math.floor(announcementHeight / 2))
    };
    this.getAnnouncementWidth = function() {
        if (peace.visible) return peace.width;
        var H = pendingAnnouncements.length;
        if (0 === H) return 0
        else if (1 === H) return pendingAnnouncements[0].announcementWidth
        else return getMax(pendingAnnouncements[0].announcementWidth, pendingAnnouncements[1].announcementWidth)
    };
    this.mouseDown = function(xPos, yPos) {
        for (var announcementYCoord, mIndex = pendingAnnouncements.length - 1; 0 <= mIndex; mIndex--) {
            if (announcementYCoord = getBaseAnnouncementY() - (mIndex + 1) * announcementHeight, yPos >= announcementYCoord && yPos < announcementYCoord + announcementHeight) {
                if (50 === pendingAnnouncements[mIndex].id) {
                    if (xPos >= prevClientWidth - acceptButtonWidth - canvasPadding - pendingAnnouncements[mIndex].width) {
                        if (xPos >= prevClientWidth - acceptButtonWidth - canvasPadding) {
                            mIndex = pendingAnnouncements[mIndex].player;
                            this.nonAggression(mIndex, 0);
                            dataEncoder.nonAggression(mIndex);
                        } else autoCamera.hoverTo(pendingAnnouncements[mIndex].player, 800, false, 0);
                        return true;
                    }
                    break
                }
                if (xPos >= prevClientWidth - pendingAnnouncements[mIndex].width - canvasPadding) {
                    if (pendingAnnouncements[mIndex].canHoverTo) {
                        autoCamera.hoverTo(pendingAnnouncements[mIndex].player, 800, false, 0);
                        if (0 <= pendingAnnouncements[mIndex].nextHoverTo) {
                            var nextHoverTo = pendingAnnouncements[mIndex].nextHoverTo;
                            pendingAnnouncements[mIndex].nextHoverTo = pendingAnnouncements[mIndex].player;
                            pendingAnnouncements[mIndex].player = nextHoverTo;
                        }
                    }
                    return true;
                }
                break
            }
        }
        return false
    };
    this.removeSpawnMessage = function(spawnMessageID) {
        for (var paIndex = pendingAnnouncements.length - 1; 0 <= paIndex; paIndex--) pendingAnnouncements[paIndex].id === spawnMessageID && (pendingAnnouncements[paIndex].time = 1)
    };
    this.genericAnnouncement = function(id, messageType) {
        if (0 === messageType) {
            statisticNumbers.numbers[id < playerCount ? 4 : 3]++;
            gameMessages.set(id, 0);
            announce(isZoom ? 100 : 160, "You conquered " + nicknames[id] + ".", 0, id, "rgb(10,220,10)", blackMoreOpaque, -1, false);
        } else if (1 === messageType) {
            removePendingAnnouncement(50, maxEntities);
            gameMessages.set(id, 1);
            announce(360, "You were conquered by " + nicknames[id] + ".", 0, id, "rgb(255,40,40)", blackMoreOpaque, -1, true);
            autoCamera.hoverTo(id, 2700, true, 0);
        } else if (2 === messageType) {
            gameMessages.set(id, 2);
            announce(0, "Congratulations! You won the game.", 0, id, "rgb(10,255,255)", blackMoreOpaque, -1, true);
            autoCamera.hoverTo(id, 2700, true, 0);
        } else if (3 === messageType) {
            gameMessages.set(id, 2);
            announce(0, nicknames[id] + " won the game.", 0, id, whiteRGB2, blackMoreOpaque, -1, true);
            autoCamera.hoverTo(id, 2700, true, 0);
        } else if (4 === messageType) {
            playersIngame--;
            spectatorCount--;
            this.addLatestDeath(1, id, id);
        } else if (5 === messageType) {
            if (2 !== playerStatus[id] && playerActions.isHuman(myID)) {
                removeExcessSameMessages(1, 5);
                if (infoRenderer.breakNonAggression(id)) announce(180, nicknames[id] + " has broken the non-aggression pact and invades you!", 1, id, getColorRGB(255, 200, 180), blackMoreOpaque, -1, true);
                else announce(180, nicknames[id] + " is attacking you!", 1, id, "rgb(255,70,10)", blackMoreOpaque, -1, true);
            }
        } else if (18 === messageType) announce(255, "Choose your start position!", 18, 0, whiteRGB2, blackMoreOpaque, -1, false);
        else if (21 === messageType) announce(220, "You surrendered!", messageType, 0, "rgb(255,40,40)", blackMoreOpaque, -1, false);
        else if (22 === messageType) this.addLatestDeath(2, id, id);
        else if (23 === messageType) {
            announce(100, "A boat is about to land on your territory!", messageType, id, orangeRGB, blackMoreOpaque, -1, true);
            removeExcessSameMessages(messageType, 2)
        }
    };
    this.error = function(errorCode) {
        announce(200, "Error [" + errorCode + "]", 94, 0, whiteRGB2, redDarkMoreOpaque, -1, false);
        sounds.play(3);
    };
    this.resultBR = function(winnerID) {
        gameMessages.set(winnerID, 2);
        if (100 > playerCount) announce(0, nicknames[winnerID] + " won the game.", 3, winnerID, whiteRGB2, blackMoreOpaque, -1, true)
        else announce(0, nicknames[winnerID] + " has been immortalized!", 3, winnerID, whiteRGB2, blackMoreOpaque, -1, true);
        autoCamera.hoverTo(winnerID, 2700, true, 0)
    };
    this.newEmojiMessage = function(authorID, targetID, emojiID) {
        if (authorID === myID) announce(175, " Message to " + nicknames[targetID] + ": ", 1E3 + emojiID, targetID, getColorRGB(200, 255, 210), blackMoreOpaque, -1, true)
        else this.receivedEmojiMessage(authorID, emojiID)
        if (typeof(modHandler) == "object") replayLogger.addLogs(9, authorID, targetID, emojiID, 0, 0)
    };
    this.receivedEmojiMessage = function(authorID, emojiID) {
        var aIndex, emoteCount = 0;
        announce(175, nicknames[authorID] + ": ", 1E3 + emojiID, authorID, whiteRGB2, "rgba(5,60,25,0.9)", -1, true);
        for (aIndex = 0; aIndex < pendingAnnouncements.length; aIndex++)
            if (1E3 <= pendingAnnouncements[aIndex].id && pendingAnnouncements[aIndex].player === authorID) {
                emoteCount++;
                if (3 < emoteCount) {
                    pendingAnnouncements.splice(aIndex, 1);
                    break
                }
            }
    };
    this.resultTeam = function(result) {
        var largestTeamID = teamColors.teamIDs[teams.getLargestTeamIndex()];
        if (result) {
            if (9 === gamemode) {
                result = "The Resistance defeated the virus.";
                gameMessages.startGameMessage("The Resistance", 2, 1, 12)
            } else {
                result = "Congratulations! Team " + teamColors.colorLabels[largestTeamID] + " has won the game!";
                announce(0, result, 40, 0, "rgb(10,220,10)", blackMoreOpaque, -1, false)
            }
        }else {
            if (9 === gamemode) {
                result = "Mankind lost the war against the virus.";
                gameMessages.startGameMessage("The Virus", 2, 0, 16)
            } else {
                result = "Our alliance has been defeated!";
                announce(0, result, 41, 0, "rgb(200,80,80)", blackMoreOpaque, -1, false);
            }
        }
        if (9 !== gamemode) gameMessages.startGameMessage("Team " + teamColors.colorLabels[largestTeamID], 2, 1, 12);
        autoCamera.zoomToFitMap(2700)
    };
    this.new1v1 = function(players) {
        announce(300, players[0].name + " [" + points1v1.formatElo(players[0].elo) + "] vs " + players[1].name + " [" + points1v1.formatElo(players[1].elo) + "]", 65, 0, blackRGB, "rgba(100,255,255,0.75)", -1, false)
    };
    this.upcomingGame = function(message) {
        announce(200, message, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, false)
    };
    this.result1v1 = function(players, player1Elo, player2Elo, resultColors) {
        if (1 === wsManager.getConnectedLobby() || customJSON.isCustomJSON && customJSON.data.replay) {
            announce(0, players[0].name + ": " + points1v1.formatElo(players[0].elo) + " -> " + player1Elo, 66, 0, whiteRGB2, resultColors[0], -1, false);
            announce(0, players[1].name + ": " + points1v1.formatElo(players[1].elo) + " -> " + player2Elo, 66, 1, whiteRGB2, resultColors[1], -1, false);
        }
    };
    this.resultClan = function(clanTag) {
        if (1 === wsManager.getConnectedLobby()) announce(0, "[" + clanTag + "] has won " + playerCount + (isContest ? " x 2" : "") + " points!", 45, 0, "rgb(225,240,255)", blackMoreOpaque, -1, false)
    };
    this.nonAggression = function(friendID, ratifier) {
        if (ratifier === 0) {
            if (removePendingAnnouncement(50, friendID)) {
                announce(128, "You signed a non-aggression pact with " + nicknames[friendID] + ".", 52, friendID, getColorRGB(180, 255, 180), blackMoreOpaque, -1, true);
                infoRenderer.showIcon(friendID, 2, 255);
            } else {
                announce(384, "You asked " + nicknames[friendID] + " to sign a non-aggression pact.", 51, friendID, getColorRGB(210, 210, 255), blackMoreOpaque, -1, true);
            }
        } else {
            if (removePendingAnnouncement(51, friendID)) {
                announce(128, nicknames[friendID] + " accepted the non-aggression pact.", 52, friendID, whiteRGB2, "rgba(60,120,10,0.9)", -1, true);
                infoRenderer.showIcon(friendID, 2, 255);
            } else {
                announce(384, nicknames[friendID] + " requests a non-aggression pact.", 50, friendID, whiteRGB2, "rgba(90,90,90,0.9)", -1, true);
                infoRenderer.showIcon(friendID, 2, 96);
            }
        }
    };
    this.requestToAttack = function(friends, targetID) {
        var message = "You ";
        var fIndex;
        for (fIndex = friends.length - 1; fIndex >= 0; fIndex--) {
            if (2 * land[friends[fIndex]] > land[myID]) {
                fIndex = false;
                break;
            }
        }
        if (fIndex) {
            message += "ordered ";
            fIndex = getColorRGB(255, 235, 210)
        } else {
            message += "asked ";
            fIndex = getColorRGB(210, 255, 210)
        }
        if (friends.length > 1) announce(230, message + friends.length + " players to attack " + nicknames[targetID] + ".", 66, targetID, fIndex, blackMoreOpaque, -1, false);
        else announce(230, message + nicknames[friends[0]] + " to attack " + nicknames[targetID] + ".", 66, friends[0], fIndex, blackMoreOpaque, targetID, true);
    };    
    this.requestedToAttack = function(requesterID, targetID) {
        if (land[requesterID] > 2 * land[myID]) announce(230, nicknames[requesterID] + " orders you to attack " + nicknames[targetID] + "!", 66, requesterID, whiteRGB2, "rgba(90,50,5,0.9)", targetID, true)
        else announce(230, nicknames[requesterID] + " asks you to attack " + nicknames[targetID] + ".", 66, requesterID, whiteRGB2, "rgba(75,65,5,0.9)", targetID, true)
    };
    this.removePendingAnnouncement = function(messageID, playerID) {
        removePendingAnnouncement(messageID, playerID)
    };
    this.lowBalance = function() {
        if (100 > troops[myID]) announce(80, "Your balance is too low!", 9, 0, whiteRGB2, blackMoreOpaque, -1, false)
    };
    this.antiBoosting = function() {
        announce(80, "Boosting is disallowed in the first minute!", 9, 0, whiteRGB2, blackMoreOpaque, -1, false)
    };
    this.giveDonation = function(amount, targetID) {
        if (2 !== playerStatus[myID]) announce(200, "You exported " + attackBars.splitNumber(amount) + " resource" + (1 === amount ? "" : "s") + " to " + nicknames[targetID] + ".", 30, targetID, "rgb(190,255,190)", blackMoreOpaque, -1, true)
    };
    this.receiveDonation = function(amount, targetID) {
        if (2 !== playerStatus[myID]) {
            var isBot = 2 === playerStatus[targetID] || targetID >= playerCount;
            var announcementsCount = 200 - 20 * pendingAnnouncements.length;
            announce(80 > announcementsCount ? 80 : announcementsCount, (isBot ? "A bot" : nicknames[targetID]) + " supported you with " + attackBars.splitNumber(amount) + " resource" + (1 === amount ? "" : "s") + ".", 31, targetID, blackRGB, isBot ? "rgba(205,205,205,0.9)" : "rgba(205,255,205,0.9)", -1, true);
            removeExcessSameMessages(31, isZoom ? 4 : 6)
        }
    };
    this.checkAnnounceDeath = function(notConsiderOccurenceTime) {
        for (var deathTypeIndex = 2; 0 <= deathTypeIndex; deathTypeIndex--) {
            if (0 < latestDeathCounts[deathTypeIndex] && (notConsiderOccurenceTime || lastDeathOccuredTime[deathTypeIndex] < mainHandler.getTicksElapsed() - 220)) this.announceDeath(deathTypeIndex)
        }
    };
    this.announceDeath = function(deathType) {
        var message = latestDeathCounts[deathType];
        var authorID = latestDeaths[deathType];
        latestDeathCounts[deathType] = 0;
        if (1 === message) {
            message = nicknames[authorID] + monoLeaveLabels[deathType];
            if (0 === deathType) message += nicknames[latestKillers[deathType]] + "."
            announce(deathAnnouncementTime[deathType], message, 7, latestKillers[deathType], whiteRGB2, blackMoreOpaque, -1, true)
        } else if (2 <= message) {
            message = nicknames[authorID] + " and " + (message - 1) + " other player" + (2 === message ? "" : "s") + pluralLeaveLabels[deathType];
            announce(deathAnnouncementTime[deathType], message, 7, authorID, whiteRGB2, blackMoreOpaque, -1, false);
        }
    };
    this.addLatestDeath = function(deathType, deathID, killerID) {
        latestDeathCounts[deathType]++;
        latestDeaths[deathType] = deathID;
        latestKillers[deathType] = killerID;
        if (1 === latestDeathCounts[deathType]) lastDeathOccuredTime[deathType] = mainHandler.getTicksElapsed()
        if (1 === latestDeathCounts[deathType] && (32 > playersIngame || 2 === clientStatus)) this.announceDeath(deathType)
        else if (1 < latestDeathCounts[deathType] && (lastDeathOccuredTime[deathType] < mainHandler.getTicksElapsed() - 140 || 2 === clientStatus)) this.announceDeath(deathType)
    };
    this.update = function() {
        var paIndex, timeReduction = pendingAnnouncements.length - maxAnnouncementsCount;
        timeReduction = 1 >= timeReduction ? 1 : timeReduction * timeReduction;
        for (paIndex = pendingAnnouncements.length - 1; 0 <= paIndex; paIndex--) {
            if (0 < pendingAnnouncements[paIndex].time) {
                pendingAnnouncements[paIndex].time -= timeReduction;
                if (0 >= pendingAnnouncements[paIndex].time) pendingAnnouncements.splice(paIndex, 1);
            }
        }
        if (128 !== tickCounter) {
            tickCounter++;
            if (128 <= tickCounter) {
                for (var specialMessageQuota = 5, aliveIndex = aliveCount - 1; 0 <= aliveIndex; aliveIndex--) {
                    if (1 === playerStatus[aliveEntities[aliveIndex]] && 0 < specialMessageQuota--) {
                        announce(240, nicknames[aliveEntities[aliveIndex]] + " joined the game.", 1, aliveEntities[aliveIndex], blackRGB, "rgba(255,255,255,0.75)", -1, true);
                    }
                }    
            }
        }
        this.checkAnnounceDeath(false)
    };
    this.drawCanvasImage = function() {
        var announcementY, aIndex;
        for (aIndex = pendingAnnouncements.length - 1; 0 <= aIndex; aIndex--) {
            announcementY = getBaseAnnouncementY() - (aIndex + 1) * announcementHeight;
            if (50 === pendingAnnouncements[aIndex].id) {
                mainCanvasCtx.drawImage(pendingAnnouncements[aIndex].canvas, prevClientWidth - pendingAnnouncements[aIndex].width - acceptButtonWidth - canvasPadding, announcementY);
                mainCanvasCtx.drawImage(acceptButCanvas, prevClientWidth - acceptButtonWidth - canvasPadding, announcementY)
            } else mainCanvasCtx.drawImage(pendingAnnouncements[aIndex].canvas, prevClientWidth - pendingAnnouncements[aIndex].width - canvasPadding, announcementY)
        }
    }
}

function CookiesPrompt() {
    this.fontRatio = this.buttonHeight = this.contentPadding = this.buttonMargin = this.height = this.width = 0;
    this.clickedButtonIndex = -1;
    this.buttonLabels = ["Accept Cookies", "More Information", "Decline"];
    this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"];
    this.visible = false;
    this.init = function() {
        this.setCanvasVariables();
        this.visible = 5 > androidVersion && !isIOS && 0 === userSettings.getCookieStatus()
        this.visible = false; //Fuck cookies man // agreed
    };
    this.setCanvasVariables = function() {
        this.width = Math.floor(2.8 * Math.floor((isZoom ? .09 : .062) * averageDim));
        this.height = Math.floor(1 * this.width);
        this.buttonMargin = Math.floor(.06 * this.width);
        this.textPadding = this.width - 2 * this.buttonMargin;
        this.contentPadding = this.buttonMargin;
        this.buttonHeight = (this.height - (this.buttonLabels.length + 1) * this.contentPadding) / this.buttonLabels.length;
        this.fontRatio = Math.floor(.3 * this.buttonHeight)
    };
    this.mouseDown = function(xPos, yPos) {
        if (!this.visible) return false;
        var butIndex = this.getButtonIndex(xPos, yPos);
        if (-1 === butIndex) return false;
        else if (0 === butIndex) {
            userSettings.setCookieStatus(2);
            this.visible = false;
        } else if (1 === butIndex) openLinkBox.init(cookiePolicyLink, true)
        else if (2 === butIndex) {
            userSettings.setCookieStatus(1);
            this.visible = false;
        }
        return mainHandler.canvasDirty = true
    };
    this.onPointermove = function(xPos, yPos) {
        if (!this.visible) return false;
        var oldBindex = this.clickedButtonIndex;
        this.clickedButtonIndex = this.getButtonIndex(xPos, yPos);
        if (oldBindex !== this.clickedButtonIndex) mainHandler.canvasDirty = true;
        return -1 !== this.clickedButtonIndex
    };
    this.getButtonIndex = function(xPos, yPos) {
        xPos -= bufferLength;
        yPos -= Math.floor(prevClientHeight - this.height - bufferLength);
        if (0 > xPos || 0 > yPos || xPos >= this.width || yPos >= this.height) return -1;
        var bIndex = Math.floor((yPos - .5 * this.contentPadding) / ((this.height - this.contentPadding) / this.buttonLabels.length));
        return 0 > bIndex ? 0 : bIndex >= this.buttonLabels.length ? this.buttonLabels.length - 1 : bIndex
    };
    this.drawCanvasImage = function() {
        this.visible && this.drawPrompt()
    };
    this.drawPrompt = function() {
        var yPos = Math.floor(prevClientHeight - this.height - bufferLength);
        mainCanvasCtx.setTransform(1, 0, 0, 1, bufferLength, yPos);
        mainCanvasCtx.fillStyle = blackMoreOpaque;
        mainCanvasCtx.fillRect(0, 0, this.width, this.height);
        mainCanvasCtx.textBaseline = middleAlign;
        mainCanvasCtx.textAlign = centerAlign;
        mainCanvasCtx.strokeStyle = whiteRGB2;
        mainCanvasCtx.font = fontWeightBold + this.fontRatio + fontSizeArial;
        mainCanvasCtx.strokeRect(0, 0, this.width, this.height);
        for (var bIndex = this.buttonLabels.length - 1; 0 <= bIndex; bIndex--) {
            mainCanvasCtx.setTransform(1, 0, 0, 1, bufferLength + this.buttonMargin, yPos + this.contentPadding + bIndex * (this.contentPadding + this.buttonHeight));
            mainCanvasCtx.fillStyle = this.colors[bIndex];
            mainCanvasCtx.fillRect(0, 0, this.textPadding, this.buttonHeight);
            if (this.clickedButtonIndex === bIndex) {
                mainCanvasCtx.fillStyle = whiteMore3Transparent;
                mainCanvasCtx.fillRect(0, 0, this.textPadding, this.buttonHeight)
            };
            mainCanvasCtx.fillStyle = whiteRGB2;
            mainCanvasCtx.fillText(this.buttonLabels[bIndex], this.textPadding / 2, .54 * this.buttonHeight);
            mainCanvasCtx.strokeRect(0, 0, this.textPadding, this.buttonHeight);
        }
        mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
    }
}

function NextContestBar() {
    function formatTime(minutes) {
        return 10 > minutes ? "0" + minutes : String(minutes)
    }
    var label, timeLeft, prevTime, barWidth, barHeight, fontStyle;
    this.init = function() {
        void 0 === barWidth && this.setCanvasVariables();
        this.setTime()
    };
    this.setCanvasVariables = function() {
        barWidth = Math.floor((isZoom ? .53 : .36) * averageDim);
        barHeight = Math.floor(.065 * barWidth);
        fontStyle = fontWeightBold + Math.floor(.9 * barHeight) + fontSizeArial;
        prevTime--;
        this.setTime()
    };
    this.update = function() {
        this.setTime() && (mainHandler.canvasDirty = true)
    };
    this.setTime = function() {
        var now = new Date;
        var minutes = now.getUTCMinutes(),
            seconds = now.getUTCSeconds();
        timeLeft = 3600 - 60 * minutes - seconds;
        timeLeft %= 900;
        label = "Next Contest: " + formatTime(Math.floor(timeLeft / 60)) + ":" + formatTime(timeLeft % 60);
        now = prevTime;
        prevTime = 60 * minutes + seconds;
        if (now === prevTime) return false;
        barWidth = gameMessages.measureText(label, fontStyle);
        barWidth += Math.floor(.4 * barHeight);
        return true
    };
    this.drawCanvasImage = function() {
        mainCanvasCtx.lineWidth = 1 + Math.floor(barHeight / 15);
        mainCanvasCtx.translate(prevClientWidth - barHeight, Math.floor(.5 * (prevClientHeight + barWidth)));
        mainCanvasCtx.rotate(-Math.PI / 2);
        mainCanvasCtx.fillStyle = whiteRGB2;
        mainCanvasCtx.fillRect(0, 0, barWidth, barHeight);
        mainCanvasCtx.strokeStyle = blackRGB;
        mainCanvasCtx.strokeRect(0, 0, barWidth, barHeight + 10);
        mainCanvasCtx.fillStyle = blackRGB;
        mainCanvasCtx.font = fontStyle;
        mainCanvasCtx.textBaseline = middleAlign;
        mainCanvasCtx.textAlign = centerAlign;
        mainCanvasCtx.fillText(label, Math.floor(barWidth / 2), Math.floor(.59 * barHeight));
        mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
    }
}

function Emojis() {
    this.numEmojisPerRow  = 10;
    this.flagCount = this.emoteCount = 50;
    this.directionCount = 8;
    this.totalEmojisCount = this.emoteCount + this.flagCount;
    this.totalDistinctEmojisCount = this.emoteCount + this.flagCount + this.directionCount; //Arrow emoji gives choices for 8 directions
    this.width = 72;
    this.emojiCanvasRow = this.emojiCanvasColumn = 0;
    this.emojiCanvasList = Array(this.totalDistinctEmojisCount);
    this.maxEmojiColumnCount = 8;
    this.emojiSelectionXPos = Array(this.emoteCount + this.flagCount);
    this.emojiSelectionYPos = Array(this.emoteCount + this.flagCount);
    this.yBoundary = this.xBoundary = 0;
    this.zoom = 1;
    this.emojiZoomLevel = .2;
    this.selectedEmojiCount = 0;
    this.selection = this.emojiSelection = null;
    this.openedDirectionEmojiTime = 0;
    this.init = function() {
        var efIndex;
        this.emojiSelection = Array(this.totalDistinctEmojisCount);
        this.selection = Array(this.totalDistinctEmojisCount);
        var emojiSprite = sprites.getValueByName("emojis");
        this.setEmojiCanvasVariables();
        for (efIndex = this.selectedEmojiCount = 0; efIndex < this.emoteCount; efIndex++) this.createEmojiCanvas(efIndex, efIndex, emojiSprite);
        emojiSprite = sprites.getValueByName("flags");
        for (efIndex = 0; efIndex < this.flagCount; efIndex++) this.createEmojiCanvas(efIndex, this.emoteCount + efIndex, emojiSprite);
        this.generateArrowEmojis();
        this.emojiCanvasList[26] = this.rotateEmoji(25, 2);
        this.loadEmojis()
    };
    this.createEmojiCanvas = function(g, emoteOrFlagIndex, emojiSprite) {
        this.emojiSelection[emoteOrFlagIndex] = false;
        this.selection[emoteOrFlagIndex] = 0;
        var emojiCanvas = document.createElement("canvas");
        emojiCanvas.width = this.width;
        emojiCanvas.height = this.width;
        var emojiCanvasCtx = emojiCanvas.getContext("2d", {
            alpha: true
        });
        emojiCanvasCtx.clearRect(0, 0, this.width, this.width);
        if (23 === emoteOrFlagIndex) emojiCanvasCtx.drawImage(playerActions.spriteIcons[2], 0, 0)
        else if (36 === emoteOrFlagIndex) emojiCanvasCtx.drawImage(playerActions.spriteIcons[0], 0, 0)
        else if (49 === emoteOrFlagIndex) emojiCanvasCtx.drawImage(playerActions.spriteIcons[1], 0, 0)
        else emojiCanvasCtx.drawImage(emojiSprite, this.width * g % (g === emoteOrFlagIndex ? this.numEmojisPerRow  * this.width : 4E3), g === emoteOrFlagIndex ? divideFloor(g, this.numEmojisPerRow ) * this.width : 0, this.width, this.width, 0, 0, this.width, this.width);
        this.emojiCanvasList[emoteOrFlagIndex] = emojiCanvas;
    };
    this.generateArrowEmojis = function() {
        this.emojiCanvasList[this.totalDistinctEmojisCount - 5] = this.emojiCanvasList[26];
        this.emojiCanvasList[this.totalDistinctEmojisCount - 4] = this.rotateEmoji(this.totalDistinctEmojisCount - 5, 2);
        this.emojiCanvasList[this.totalDistinctEmojisCount - 1] = this.rotateEmoji(this.totalDistinctEmojisCount - 5, 1);
        this.emojiCanvasList[this.totalDistinctEmojisCount - 8] = this.rotateEmoji(this.totalDistinctEmojisCount - 4, 1);
        this.emojiCanvasList[this.totalDistinctEmojisCount - 3] = this.emojiCanvasList[39];
        this.emojiCanvasList[this.totalDistinctEmojisCount - 2] = this.rotateEmoji(this.totalDistinctEmojisCount - 3, 1);
        this.emojiCanvasList[this.totalDistinctEmojisCount - 7] = this.rotateEmoji(this.totalDistinctEmojisCount - 2, 1);
        this.emojiCanvasList[this.totalDistinctEmojisCount - 6] = this.rotateEmoji(this.totalDistinctEmojisCount - 7, 1)
    };
    this.rotateEmoji = function(emojiId, multiplier) {
        var emojiCanvas = document.createElement("canvas");
        emojiCanvas.width = this.width;
        emojiCanvas.height = this.width;
        var emojiCanvasCtx = emojiCanvas.getContext("2d", {
            alpha: true
        });
        emojiCanvasCtx.clearRect(0, 0, this.width, this.width);
        emojiCanvasCtx.rotate(multiplier * Math.PI / 2);
        emojiCanvasCtx.drawImage(this.emojiCanvasList[emojiId], 1 === multiplier ? 0 : -this.width, -this.width);
        return emojiCanvas
    };
    this.loadEmojis = function() {
        var digitsCount = loadEmojis().split("");
        if (2 * digitsCount.length !== this.totalDistinctEmojisCount) this.selectedEmojiCount = 0;
        else {
            for (var digitIndex = 0; digitIndex < this.totalDistinctEmojisCount; digitIndex += 2) {
                var digit = parseInt(digitsCount[Math.floor(digitIndex / 2)]);
                this.emojiSelection[digitIndex] = 1 === digit % 2;
                this.emojiSelection[digitIndex + 1] = 1 < digit
            }
            this.updateEmojiSelection()
        }
    };
    this.updateEmojiSelection = function() {
        for (var emojiIndex = this.selectedEmojiCount = 0; emojiIndex < this.totalDistinctEmojisCount; emojiIndex++) {
            if (this.emojiSelection[emojiIndex]) this.selection[this.selectedEmojiCount++] = emojiIndex
        }
    };
    this.resetDirectionSelection = function() {
        if (8 === this.selectedEmojiCount && this.selection[0] === this.totalEmojisCount) this.updateEmojiSelection()
    };
    this.setDirectionSelection = function() {
        this.selectedEmojiCount = this.directionCount;
        for (var directionIndex = 0; directionIndex < this.directionCount; directionIndex++) this.selection[directionIndex] = this.totalEmojisCount + directionIndex
    };
    this.setEmojiCanvasVariables = function() {
        this.emojiCanvasColumn = Math.floor((isZoom ? .075 : .0468) * averageDim);
        this.zoom = this.emojiCanvasColumn / this.width;
        this.emojiCanvasRow = (1 + this.emojiZoomLevel) * this.emojiCanvasColumn
    };
    this.show = function(xPos, yPos) {
        if (1 > this.selectedEmojiCount) return false;
        this.openedDirectionEmojiTime = mainHandler.time;
        var emojiColumnCount = Math.floor(prevClientWidth / this.emojiCanvasRow);
        emojiColumnCount = 3 > emojiColumnCount ? 3 : emojiColumnCount > this.maxEmojiColumnCount ? this.maxEmojiColumnCount : emojiColumnCount;
        emojiColumnCount = this.selectedEmojiCount > emojiColumnCount ? emojiColumnCount : this.selectedEmojiCount;
        var emojiRowCount = 1 + divideFloor(this.selectedEmojiCount - 1, emojiColumnCount),
            totalWidth = Math.floor(emojiColumnCount * this.emojiCanvasRow),
            xLeftBound = Math.floor(xPos - totalWidth / 2);
        xLeftBound = xLeftBound + totalWidth > prevClientWidth ? prevClientWidth - totalWidth : xLeftBound;
        xLeftBound = 0 > xLeftBound ? 0 : xLeftBound;
        var yTopBound = Math.floor(yPos - this.emojiCanvasRow / 2);
        emojiRowCount = Math.floor(emojiRowCount * this.emojiCanvasRow);
        yTopBound = yTopBound + emojiRowCount > prevClientHeight ? prevClientHeight - emojiRowCount : yTopBound;
        yTopBound = 0 > yTopBound ? 0 : yTopBound;
        this.xBoundary = xLeftBound + totalWidth;
        this.yBoundary = yTopBound + emojiRowCount;
        for (totalWidth = 0; totalWidth < this.selectedEmojiCount; totalWidth++) {
            this.emojiSelectionXPos[totalWidth] = Math.floor(xLeftBound + totalWidth % emojiColumnCount * this.emojiCanvasRow);
            this.emojiSelectionYPos[totalWidth] = Math.floor(yTopBound + divideFloor(totalWidth, emojiColumnCount) * this.emojiCanvasRow);
        }
        return true
    };
    this.insideEmojiSelectionArea = function(xPos, yPos) {
        return xPos >= this.emojiSelectionXPos[0] && yPos >= this.emojiSelectionYPos[0] && xPos < this.xBoundary && yPos < this.yBoundary
    };
    this.checkChooseEmoji = function(xPos, yPos, targetID) {
        if (targetID === myID && this.openedDirectionEmojiTime + 190 > mainHandler.time) return false;
        for (var selectionIndex = this.selectedEmojiCount - 1; 0 <= selectionIndex; selectionIndex--) {
            if (xPos >= this.emojiSelectionXPos[selectionIndex] && yPos >= this.emojiSelectionYPos[selectionIndex]) {
                if (39 === this.selection[selectionIndex]) {
                    this.setDirectionSelection();
                    this.show(xPos, yPos);
                    return true;
                }
                if (singleplayer) infoRenderer.showIcon(myID, 0, this.selection[selectionIndex])
                else if (targetID === myID) dataEncoder.selfEmoji(this.selection[selectionIndex])
                else dataEncoder.sendEmoji(this.selection[selectionIndex], targetID);
                this.updateEmojiSelection();
                break
            }
        }
        return false
    };
    this.isFacialEmoji = function(emojiID) {
        return 16 > emojiID || 40 <= emojiID && 47 > emojiID
    };
    this.isFlag = function(emojiID) {
        return emojiID >= this.emoteCount && emojiID < this.emoteCount + this.flagCount
    };
    this.drawCanvasImage = function() {
        mainCanvasCtx.imageSmoothingEnabled = true;
        for (var halfZoomedCol = this.emojiZoomLevel * this.emojiCanvasColumn / 2, selectionIndex = this.selectedEmojiCount - 1; 0 <= selectionIndex; selectionIndex--) {
            mainCanvasCtx.setTransform(this.zoom, 0, 0, this.zoom, this.emojiSelectionXPos[selectionIndex] + halfZoomedCol, this.emojiSelectionYPos[selectionIndex] + halfZoomedCol);
            mainCanvasCtx.drawImage(this.emojiCanvasList[this.selection[selectionIndex]], 0, 0);
        }
        mainCanvasCtx.imageSmoothingEnabled = false;
        mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
    };
    this.oC = function(g, k, n) { //unused
        mainCanvasCtx.imageSmoothingEnabled = true;
        mainCanvasCtx.setTransform(this.zoom, 0, 0, this.zoom, g, k);
        mainCanvasCtx.drawImage(this.emojiCanvasList[n], 0, 0);
        mainCanvasCtx.imageSmoothingEnabled = false;
        mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
    }
}
var blackRGB = "rgb(0,0,0)",
    blackOpaque = "rgba(0,0,0,0.7)",
    blackSemiTransparent = "rgba(0,0,0,0.5)",
    blackSemiTransparent2 = "rgba(0,0,0,0.5)",
    blackMoreOpaque = "rgba(0,0,0,0.75)",
    blackMore2Opaque = "rgba(0,0,0,0.85)",
    blueMoreOpaque = "rgba(0,96,96,0.75)",
    whiteRGB = "rgb(255,255,255)",
    gray128RGB = "rgb(128,128,128)",
    limeGreenRGB = "rgb(30,255,30)",
    greenRGB = "rgb(0,200,0)",
    greenBrightRGB = "rgb(0,255,0)",
    greenBrightMoreOpaque = "rgba(0,255,0,0.6)",
    greenBrightSemiTransparent = "rgba(0,255,0,0.5)",
    greenSemiTransparent = "rgba(0,200,0,0.5)",
    greenDarkMoreOpaque = "rgba(0,100,0,0.75)",
    greenDarkerMoreOpaque = "rgba(0,40,0,0.8)",
    greenLightRGB = "rgb(128,255,128)",
    yellowMoreTransparent = "rgba(255,255,150,0.2)",
    greenBrightMoreTransparent = "rgba(0,255,0,0.3)",
    whiteMore2Transparent = "rgba(255,255,255,0.3)",
    blueDarkMoreOpaque = "rgba(0,40,90,0.75)",
    redMoreOpaque = "rgba(220,0,0,0.6)",
    redBrightMoreOpaque = "rgba(255,100,100,0.8)",
    redDarkMoreOpaque = "rgba(100,0,0,0.85)",
    redDarkerMoreOpaque = "rgba(60,0,0,0.85)",
    redLighterRGB = "rgb(255,120,120)",
    redMoreLighterRGB = "rgb(255,160,160)",
    redLightRGB = "rgb(255,70,70)",
    redBrightRGB = "rgb(230,0,0)",
    blueGreenMoreOpaque = "rgba(0,60,60,0.85)",
    blueBrightRGB = "rgb(160,160,255)",
    whiteRGB2 = "rgb(255,255,255)",
    whiteMoreOpaque = "rgba(255,255,255,0.6)",
    whiteMoreTransparent = "rgba(255,255,255,0.4)",
    whiteMore3Transparent = "rgba(255,255,255,0.25)",
    whiteBrightMore2Opaque = "rgba(255,255,255,0.85)",
    whiteBrightMoreOpaque = "rgba(255,255,255,0.75)",
    orangeRGB = "rgb(255,120,100)",
    yellowSemiTransparent = "rgba(255,255,0,0.5)",
    middleAlign = "middle",
    bottomAlign = "bottom",
    centerAlign = "center",
    leftAlign = "left",
    rightAlign = "right",
    fontWeightBold = "bold ",
    fontStyleItalic = "italic ",
    fontStyleNormal = "normal ",
    fontSizeArial = "px Arial",
    fontStyles = [fontWeightBold, fontStyleItalic + fontWeightBold, fontWeightBold],
    googleplayLink = "https://play.google.com/store/apps/details?id=territorial.io",
    appstoreLink = "https://apps.apple.com/app/id1581110913",
    youtubeLink = "https://www.youtube.com/watch?v=toZTQ8aRdFc",
    discordLink = "https://discord.gg/3aF93G23rV",
    igLink = "https://www.instagram.com/davidtschacher/",
    cookiePolicyLink = "https://territorial.io/cookie_policy",
    privacyPolicyLink = "https://territorial.io/privacy_policy",
    tutorialLink = "https://discord.gg/5mMydyk3SU",
    leaderboardLinks = ["https://territorial.io/players", "https://territorial.io/clans"],
    canvasPadding, gameLeaderboardMargin, bufferLength, mainSettingsMarginWidth, isTouch, clientXPos, clientYPos, mainSettings, 
    wsUrlStrings = ["wss://", "/s50/", "/s51/", "/s52/"];

function setupMainCanvas() {
    setCanvasDisplayVariables();
    mainSettingsMarginWidth = 3;
    mainSettings = new MainSettings;
    mainSettings.init()
}

function addMainCanvasEventListeners() {
    mainCanvas.addEventListener("mousedown", onMousedown);
    mainCanvas.addEventListener("mousemove", onMousemove);
    mainCanvas.addEventListener("mouseup", onMouseup);
    mainCanvas.addEventListener("click", onClick);
    mainCanvas.addEventListener("mouseleave", onMouseleave);
    mainCanvas.addEventListener("wheel", onWheel);
    mainCanvas.addEventListener("touchstart", onTouchstart);
    mainCanvas.addEventListener("touchmove", onTouchmove);
    mainCanvas.addEventListener("touchend", onTouchend);
    mainCanvas.addEventListener("touchcancel", onTouchcancel);
    mainCanvas.addEventListener("dragover", onDragover);
    mainCanvas.addEventListener("drop", onDrop);
    isTouch = false
}

function setCanvasDisplayVariables() {
    bufferLength = Math.floor((isZoom ? .02 : .01152) * averageDim);
    bufferLength = 2 > bufferLength ? 2 : bufferLength;
    canvasPadding = Math.floor((isZoom ? .0114 : .01296) * averageDim);
    canvasPadding = 2 > canvasPadding ? 2 : canvasPadding;
    gameLeaderboardMargin = Math.floor(.005 * minDim);
    gameLeaderboardMargin = 1 > gameLeaderboardMargin ? 1 : gameLeaderboardMargin
}

function onMousedown(e) {
    e.preventDefault();
    if (!isTouch) {
        wsManager.setHumanLastAction(wsManager.remote);
        handleMouseDown(Math.floor(pixelRatio * e.clientX), Math.floor(pixelRatio * e.clientY))
    }
}

function onTouchstart(e) {
    e.preventDefault();
    wsManager.setHumanLastAction(wsManager.remote);
    isTouch = true;
    if (0 < e.touches.length) {
        clientXPos = Math.floor(pixelRatio * e.touches[0].clientX);
        clientYPos = Math.floor(pixelRatio * e.touches[0].clientY);
        if (!touchInputHandler.handleTouchStart(e)) handleMouseDown(clientXPos, clientYPos)
    }
}

function handleMouseDown(xPos, yPos) {
    if (0 === clientStatus || mainSettings.buttons[4].buttonClass.visible) gameStateManager.mouseDown(xPos, yPos);
    else if (!statistics.mouseDown(xPos, yPos) && !playerActions.hasClickedIcon(xPos, yPos) && !gameResultBox.mouseDown(xPos, yPos) && !attackBars.mouseDown(xPos, yPos)) {
        var clickedResult = gameButtons.mouseDown(xPos, yPos);
        if (2 !== clickedResult && !gameLeaderboard.mouseDown(xPos, yPos)) {
            if (mouseCamera.mouseDown(xPos, yPos)) mainHandler.canvasDirty = true
            else if (attackRatioBar.getClickedButton(xPos, yPos)) {
                mouseCamera.isPanning = false;
                if (attackRatioBar.clickedButton(xPos, yPos)) mainHandler.canvasDirty = true
            } else if (!(announcements.mouseDown(xPos, yPos) || peace.mouseDown(xPos, yPos)) && 0 === clickedResult) playerActions.setLastClickPos(xPos, yPos)
        }
    }
}

function onMousemove(e) {
    isTouch = false;
    e.preventDefault();
    onPointermove(Math.floor(pixelRatio * e.clientX), Math.floor(pixelRatio * e.clientY))
}

function onTouchmove(e) {
    e.preventDefault();
    if (0 < e.touches.length) {
        clientXPos = Math.floor(pixelRatio * e.touches[0].clientX);
        clientYPos = Math.floor(pixelRatio * e.touches[0].clientY);
        if (!touchInputHandler.handleTouchmove(e)) onPointermove(clientXPos, clientYPos)
    };
}

function onPointermove(xPos, yPos) {
    if (0 === clientStatus) gameStateManager.onPointermove(xPos, yPos)
    else if (!statistics.onPointermove(xPos, yPos)) {
        if (!(playerActions.visible() ? playerActions.onPointermove(xPos, yPos) : gameButtons.onPointermove(xPos, yPos))) {
            if (attackRatioBar.isDragging) {
                if (attackRatioBar.onPointermove(xPos, yPos)) mainHandler.canvasDirty = true
            } else {
                gameLeaderboard.onPointermove(xPos, yPos);
                if (mouseCamera.isPanning && mouseCamera.onPointermove(xPos, yPos)) mainHandler.canvasDirty = true
            }
        }
    }
}

function onMouseleave(e) {
    e.preventDefault();
    if (0 === clientStatus) {
        gameStateManager.click(-1024, -1024);
        playtime.reset();
    } else {
        gameLeaderboard.onDragEnd(-1024, -1024);
        gameButtons.onPointermove(-1024, -1024);
        attackRatioBar.stopDragging();
        if (mouseCamera.isPanning) mouseCamera.isPanning = false
    }
}

function onMouseup(e) {
    e.preventDefault();
    if (!isTouch) onPointerUp(Math.floor(pixelRatio * e.clientX), Math.floor(pixelRatio * e.clientY))
}

function onClick(g) {
    2 === gameStateManager.getState() && singleSettings.click(g.clientX, g.clientY)
}

function onTouchend(g) {
    g.preventDefault();
    g && g.touches && 0 < g.touches.length && 0 !== clientStatus ? mouseCamera.isPanning = false : onPointerUp(clientXPos, clientYPos)
}

function onTouchcancel(g) {
    g.preventDefault();
    onPointerUp(clientXPos, clientYPos)
}

function onDragover(g) {
    loadCustomMap.preventDragAndDropBehavior(g)
}

function onDrop(g) {
    loadCustomMap.handleDrop(g)
}

function onPointerUp(xPos, yPos) {
    if (0 === clientStatus) gameStateManager.click(xPos, yPos)
    else {
        gameLeaderboard.onDragEnd(xPos, yPos);
        statistics.onDragEnd();
        attackRatioBar.stopDragging();
        mouseCamera.isPanning = false;
        if (playerActions.click(xPos, yPos)) mainHandler.canvasDirty = true
    }
}

function onWheel(e) {
    e.preventDefault();
    wsManager.setHumanLastAction(wsManager.remote);
    var xPos = Math.floor(pixelRatio * e.clientX),
        yPos = Math.floor(pixelRatio * e.clientY),
        deltaY = e.deltaY;
    if (1 === e.deltaMode) deltaY *= 20;
    if (0 === clientStatus) gameStateManager.onWheel(xPos, yPos, deltaY)
    else if (!gameLeaderboard.onWheel(xPos, yPos, deltaY)) {
        if (attackRatioBar.getClickedButton(xPos, yPos)) {
            if (attackRatioBar.onWheel(deltaY)) mainHandler.canvasDirty = true
        } else if (mouseCamera.onWheel(xPos, yPos, 2 * deltaY)) mainHandler.canvasDirty = true
    }
}

function drawWhiteRectBorder(canvas, rectWidth, rectHeight) {
    canvas.fillStyle = whiteRGB2;
    canvas.fillRect(0, 0, rectWidth, 1);
    canvas.fillRect(0, rectHeight - 1, rectWidth, 1);
    canvas.fillRect(0, 0, 1, rectHeight);
    canvas.fillRect(rectWidth - 1, 0, 1, rectHeight)
}

function AttackBars() {
    function drawAttacksBar(aIndex) {
        var varBarCanvasWidth = myAttacks[aIndex].canvas.width;
        myAttacks[aIndex].canvasCtx.clearRect(0, 0, varBarCanvasWidth, barCanvasHeight);
        myAttacks[aIndex].canvasCtx.fillStyle = 0 !== myAttacks[aIndex].id ? "rgba(33,33,120,0.83)" : myAttacks[aIndex].targetID === maxEntities ? "rgba(88,88,88,0.83)" : myAttacks[aIndex].targetID < playerCount ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)";
        myAttacks[aIndex].canvasCtx.fillRect(0, 0, varBarCanvasWidth, barCanvasHeight);
        drawWhiteRectBorder(myAttacks[aIndex].canvasCtx, varBarCanvasWidth, barCanvasHeight);
        if (varBarCanvasWidth > baseBarCanvasWidth + 2 * barCanvasHeight) myAttacks[aIndex].canvasCtx.fillRect(varBarCanvasWidth - baseBarCanvasWidth - barCanvasHeight, 0, 1, barCanvasHeight), myAttacks[aIndex].canvasCtx.fillText(nicknames[myAttacks[aIndex].targetID], Math.floor((varBarCanvasWidth - baseBarCanvasWidth) / 2), Math.floor(.57 * barCanvasHeight));
        var yPos = 0 !== myAttacks[aIndex].id ? 0 : barCanvasHeight;
        myAttacks[aIndex].canvasCtx.fillText(attackBars.splitNumber(myAttacks[aIndex].remaining), Math.floor(varBarCanvasWidth - baseBarCanvasWidth / 2 - yPos), Math.floor(.57 * barCanvasHeight));
        myAttacks[aIndex].canvasCtx.fillStyle = whiteMoreOpaque;
        myAttacks[aIndex].canvasCtx.fillRect(Math.floor(varBarCanvasWidth - baseBarCanvasWidth - yPos), barCanvasHeight - zoomYOffset, Math.floor(baseBarCanvasWidth * myAttacks[aIndex].remaining / myAttacks[aIndex].largestAmount), zoomYOffset);
        if (0 === myAttacks[aIndex].id) {
            drawIcons(aIndex, varBarCanvasWidth);
            myAttacks[aIndex].canvasCtx.strokeStyle = greenLightRGB;
            myAttacks[aIndex].canvasCtx.fillRect(barCanvasHeight, 0, 1, barCanvasHeight);
            varBarCanvasWidth -= barCanvasHeight;
            myAttacks[aIndex].canvasCtx.beginPath();
            myAttacks[aIndex].canvasCtx.moveTo(Math.floor(.3 * barCanvasHeight + varBarCanvasWidth), Math.floor(barCanvasHeight / 2));
            myAttacks[aIndex].canvasCtx.lineTo(Math.floor(barCanvasHeight - .3 * barCanvasHeight + varBarCanvasWidth), Math.floor(barCanvasHeight / 2));
            myAttacks[aIndex].canvasCtx.stroke();
            myAttacks[aIndex].canvasCtx.beginPath();
            myAttacks[aIndex].canvasCtx.moveTo(Math.floor(barCanvasHeight / 2 + varBarCanvasWidth), Math.floor(.3 * barCanvasHeight));
            myAttacks[aIndex].canvasCtx.lineTo(Math.floor(barCanvasHeight / 2 + varBarCanvasWidth), Math.floor(barCanvasHeight - .3 * barCanvasHeight));
            myAttacks[aIndex].canvasCtx.stroke()
        } else drawIcons(aIndex, 2 * barCanvasHeight)
    }

    function drawIcons(aIndex, iconWidth) {
        myAttacks[aIndex].canvasCtx.strokeStyle = myAttacks[aIndex].cancelling ? gray128RGB : redMoreLighterRGB;
        myAttacks[aIndex].canvasCtx.fillStyle = whiteRGB2;
        myAttacks[aIndex].canvasCtx.fillRect(iconWidth - barCanvasHeight, 0, 1, barCanvasHeight);
        var lineThickness = Math.floor(barCanvasHeight / 12);
        myAttacks[aIndex].canvasCtx.lineWidth = 3 > lineThickness ? 3 : lineThickness;
        myAttacks[aIndex].canvasCtx.lineCap = "round";
        iconWidth = barCanvasHeight + 1;
        myAttacks[aIndex].canvasCtx.beginPath();
        myAttacks[aIndex].canvasCtx.moveTo(Math.floor(iconWidth - .35 * barCanvasHeight), Math.floor(.35 * barCanvasHeight));
        myAttacks[aIndex].canvasCtx.lineTo(Math.floor(iconWidth - barCanvasHeight + .35 * barCanvasHeight), Math.floor(barCanvasHeight - .35 * barCanvasHeight));
        myAttacks[aIndex].canvasCtx.stroke();
        myAttacks[aIndex].canvasCtx.beginPath();
        myAttacks[aIndex].canvasCtx.moveTo(Math.floor(iconWidth - barCanvasHeight + .35 * barCanvasHeight), Math.floor(.35 * barCanvasHeight));
        myAttacks[aIndex].canvasCtx.lineTo(Math.floor(iconWidth - .35 * barCanvasHeight), Math.floor(barCanvasHeight - .35 * barCanvasHeight));
        myAttacks[aIndex].canvasCtx.stroke()
    }

    function addAttacksBar(attackEntry) {
        attackEntry.canvas = document.createElement("canvas");
        mapBaseCanvasCtx.font = fontStyle;
        var varBarCanvasWidth = baseBarCanvasWidth;
        if (attackEntry.targetID < maxEntities && 0 === attackEntry.id) varBarCanvasWidth += Math.floor(mapBaseCanvasCtx.measureText(nicknames[attackEntry.targetID] + "000").width);
        varBarCanvasWidth += barCanvasHeight;
        0 === attackEntry.id && (varBarCanvasWidth += barCanvasHeight);
        attackEntry.canvas.width = varBarCanvasWidth;
        attackEntry.canvas.height = barCanvasHeight;
        attackEntry.canvasCtx = attackEntry.canvas.getContext("2d", {
            alpha: true
        });
        attackEntry.canvasCtx.font = fontStyle;
        attackEntry.canvasCtx.textBaseline = middleAlign;
        attackEntry.canvasCtx.textAlign = centerAlign
    }

    function getAttackBarXPos(aIndex) {
        return troopBar.placeBarOnTopRight() ? prevClientWidth - myAttacks[aIndex].canvas.width - canvasPadding : troopBar.startingX
    }

    function getAttackBarYPos(aIndex) {
        return Math.floor(2 * canvasPadding + (troopBar.placeBarOnTopRight() ? gameStatistics.height + canvasPadding : 0) + troopBar.height + 1.3 * aIndex * barCanvasHeight)
    }
    var myAttacks, baseBarCanvasWidth, fontStyle, barCanvasHeight, zoomYOffset;
    this.init = function() {
        myAttacks = [];
        this.setCanvasVariables()
    };
    this.setCanvasVariables = function() {
        fontStyle = announcements.fontStyle;
        barCanvasHeight = announcements.fontRatio + 5;
        barCanvasHeight = Math.floor(1.25 * barCanvasHeight);
        isZoom && (barCanvasHeight = Math.floor(1.25 * barCanvasHeight));
        zoomYOffset = Math.floor(.15 * barCanvasHeight);
        mapBaseCanvasCtx.font = fontStyle;
        baseBarCanvasWidth = Math.floor(mapBaseCanvasCtx.measureText("02 000 000 0000").width);
        for (var aIndex = myAttacks.length - 1; 0 <= aIndex; aIndex--) addAttacksBar(myAttacks[aIndex]), drawAttacksBar(aIndex)
    };
    this.drawCanvas = function() {
        for (var aIndex = myAttacks.length - 1; 0 <= aIndex; aIndex--) {
            if (myAttacks[aIndex].updated) {
                myAttacks[aIndex].updated = false;
                drawAttacksBar(aIndex);
            }
        }
    };
    this.splitNumber = function(number) {
        if (1E3 > number) return 0 > number ? "-" + this.splitNumber(Math.abs(number)) : number.toString();
        var numDigits = Math.floor(Math.log(number + .5) / Math.log(10)) + 1,
            numCommas = Math.floor((numDigits - 1) / 3);
        number = number.toString();
        for (var currentGroup = number.substring(numDigits - 3, numDigits), groupIndex = 1; groupIndex < numCommas; groupIndex++) currentGroup = number.substring(numDigits - 3 * (groupIndex + 1), numDigits - 3 * groupIndex) + " " + currentGroup;
        return number.substring(0, numDigits - 3 * numCommas) + " " + currentGroup
    };
    this.mouseDown = function(xPos, yPos) {
        if (2 === clientStatus || 0 === isAlive[myID] || neverJoinedGameBefore || !playerActions.isHuman(myID) || customJSON.isCustomJSON && customJSON.data.replay) return false;
        var aIndex, buttonSize = isZoom ? barCanvasHeight : 0,
            zoomedYOffset = isZoom ? Math.floor(.15 * barCanvasHeight) : 0;
        for (aIndex = myAttacks.length - 1; 0 <= aIndex; aIndex--) {
            var attackBarXPos = getAttackBarXPos(aIndex), attackBarYPos = getAttackBarYPos(aIndex), attackBarWidth = myAttacks[aIndex].canvas.width;
            if (yPos >= attackBarYPos - zoomedYOffset && yPos <= attackBarYPos + barCanvasHeight + zoomedYOffset) {
                if (xPos >= attackBarXPos - buttonSize && xPos <= attackBarXPos + barCanvasHeight + buttonSize) {
                    if (!myAttacks[aIndex].cancelling) {
                        myAttacks[aIndex].updated = true;
                        myAttacks[aIndex].cancelling = true;
                        if (myAttacks[aIndex].id === 0) {
                            if (singleplayer) {
                                if (typeof(modHandler) == "object" && modHandler.latency) latencySimulator.addPendingAction(2, 0, myAttacks[aIndex].targetID, 0, 0)
                                else processAction.processCancel(myID, myAttacks[aIndex].targetID);
                            } else dataEncoder.cancel(myAttacks[aIndex].targetID === maxEntities ? myID : myAttacks[aIndex].targetID);
                        } else if (singleplayer) {
                            if (typeof(modHandler) == "object" && modHandler.latency) latencySimulator.addPendingAction(7, 0, myAttacks[aIndex].id, 0 ,0)
                            else processAction.processCancelBoat(myID, myAttacks[aIndex].id);
                        } else dataEncoder.cancelBoat(myAttacks[aIndex].id);
                    }
                    return true;
                } else if (myAttacks[aIndex].id === 0 && xPos >= attackBarXPos + attackBarWidth - barCanvasHeight - buttonSize && xPos <= attackBarXPos + attackBarWidth + buttonSize) {
                    if (singleplayer) {
                        if (typeof(modHandler) == "object" && modHandler.latency) latencySimulator.addPendingAction(0, attackRatioBar.getFlooredRatio(), myAttacks[aIndex].targetID, 0, 0)
                        else processAttack(myID, myAttacks[aIndex].targetID, attackRatioBar.getFlooredRatio());
                    } else dataEncoder.attack(attackRatioBar.getFlooredRatio(), myAttacks[aIndex].targetID === maxEntities ? myID : myAttacks[aIndex].targetID);
                    return true;
                } else if (xPos >= attackBarXPos + barCanvasHeight + buttonSize && xPos <= attackBarXPos + attackBarWidth - barCanvasHeight - buttonSize) {
                    if (myAttacks[aIndex].id === 0 && myAttacks[aIndex].targetID != maxEntities && isAlive[myAttacks[aIndex].targetID]) autoCamera.hoverTo(myAttacks[aIndex].targetID, 800, false, 0);
                    else if (myAttacks[aIndex].id != 0) {
                        var currentPixelIndex = boatSpeed.currentPixelIndicies[myAttacks[aIndex].id - 1],
                            boatX = pixel.toX(currentPixelIndex),
                            boatY = pixel.toY(currentPixelIndex);
                        autoCamera.fitCameraToMap(boatX - 20, boatY - 20, boatX + 20, boatY + 20)
                    }
                    return true;
                }
            }
        }
        return false
    };
    this.update = function() {
        if (2 !== clientStatus && 0 !== isAlive[myID] && !neverJoinedGameBefore && playerActions.isHuman(myID)) {
            var myAttackCount = attacks.getCurrentAttackCount(myID), aIndex;
            loop: if (myAttacks.length !== myAttackCount) var needsUpdate = true;
                else {
                    for (aIndex = myAttackCount - 1; 0 <= aIndex; aIndex--)
                        if (myAttacks[aIndex].id !== attacks.getBoatIDFromIndex(myID, aIndex) || myAttacks[aIndex].targetID !== attacks.getTargetFromIndex(myID, aIndex)) {
                            needsUpdate = true;
                            break loop
                        } needsUpdate = false
                }
            if (needsUpdate) {
                var nextMyAttacks = [];
                aIndex = 0;
                loop: for (; aIndex < myAttackCount; aIndex++) {
                    var attackEntry, sentTroops, boatID = attacks.getBoatIDFromIndex(myID, aIndex), targetID = attacks.getTargetFromIndex(myID, aIndex);
                    for (var aIndex2 = 0; aIndex2 < myAttacks.length; aIndex2++)
                        if (myAttacks[aIndex2].id === boatID && myAttacks[aIndex2].targetID === targetID) {
                            nextMyAttacks.push(myAttacks.splice(aIndex2, 1)[0]);
                            continue loop
                        } sentTroops = attacks.getRemainingTroopsFromIndex(myID, aIndex);
                    attackEntry = {
                        targetID: targetID,
                        remaining: sentTroops,
                        largestAmount: sentTroops,
                        id: boatID,
                        updated: true,
                        cancelling: false,
                        canvas: null,
                        canvasCtx: null
                    };
                    addAttacksBar(attackEntry);
                    nextMyAttacks.push(attackEntry)
                }
                myAttacks = nextMyAttacks
            }
            aIndex = myAttackCount;
            for (--aIndex; 0 <= aIndex; aIndex--) {
                var remainingTroops = attacks.getRemainingTroopsFromIndex(myID, aIndex);
                if (myAttacks[aIndex].remaining !== remainingTroops) {
                    myAttacks[aIndex].remaining = remainingTroops;
                    myAttacks[aIndex].largestAmount = remainingTroops > myAttacks[aIndex].largestAmount ? remainingTroops : myAttacks[aIndex].largestAmount;
                    myAttacks[aIndex].updated = true
                }
            }
        }
    };
    this.drawCanvasImage = function() {
        if (0 !== isAlive[myID] && playerActions.isHuman(myID) && !neverJoinedGameBefore) {
            for (var aIndex = myAttacks.length - 1; 0 <= aIndex; aIndex--) mainCanvasCtx.drawImage(myAttacks[aIndex].canvas, getAttackBarXPos(aIndex), getAttackBarYPos(aIndex))
        }
    }
}

function GameMessages() {
    function drawMessage() {
        mainCanvasCtx.drawImage(messageCanvas, canvasPadding + (teamGame ? canvasPadding + teams.getPieChartWidth() : 0), gameBoardHeight + 2 * canvasPadding)
    }

    function createMessage() {
        messageCanvas.width = messages[0].width + messageOutlineWidth;
        messageCanvas.height = messageHeight + messageOutlineWidth;
        messageCanvasCtx = messageCanvas.getContext("2d", {
            alpha: true
        });
        messageCanvasCtx.clearRect(0, 0, messages[0].width + messageOutlineWidth, messageHeight + messageOutlineWidth);
        messageCanvasCtx.translate(Math.floor(messageOutlineWidth / 2), Math.floor(messageOutlineWidth / 2));
        messageCanvasCtx.lineWidth = messageOutlineWidth;
        messageCanvasCtx.fillStyle = 1 === messages[0].messageColor ? whiteBrightMore2Opaque : blackMoreOpaque;
        drawMessageOutline();
        messageCanvasCtx.fill();
        messageCanvasCtx.strokeStyle = 1 === messages[0].messageColor ? blackRGB : whiteRGB2;
        drawMessageOutline();
        messageCanvasCtx.stroke();
        messageCanvasCtx.textAlign = centerAlign;
        messageCanvasCtx.textBaseline = middleAlign;
        messageCanvasCtx.fillStyle = 1 === messages[0].messageColor ? blackRGB : whiteRGB2;
        messageCanvasCtx.font = messageFontStyles[0];
        messageCanvasCtx.fillText(descriptionLabels[messages[0].descriptionType], Math.floor(messages[0].width / 2), Math.floor(.72 * messageLabelPositions[0] * messageHeight));
        messageCanvasCtx.font = messageFontStyles[1];
        messageCanvasCtx.fillText(messages[0].label, Math.floor(messages[0].width / 2), Math.floor((messageLabelPositions[0] + .48 * messageLabelPositions[1]) * messageHeight))
    }

    function drawMessageOutline() {
        messageCanvasCtx.beginPath();
        messageCanvasCtx.moveTo(messageCornerSize, 0);
        messageCanvasCtx.lineTo(messages[0].width - messageCornerSize, 0);
        messageCanvasCtx.lineTo(messages[0].width, messageCornerSize);
        messageCanvasCtx.lineTo(messages[0].width, messageHeight - messageCornerSize);
        messageCanvasCtx.lineTo(messages[0].width - messageCornerSize, messageHeight);
        messageCanvasCtx.lineTo(messageCornerSize, messageHeight);
        messageCanvasCtx.lineTo(0, messageHeight - messageCornerSize);
        messageCanvasCtx.lineTo(0, messageCornerSize);
        messageCanvasCtx.closePath()
    }
    var messages, messageState, animationProgress, timeElapsed, messageHeight, messageFontStyles, messageFontSizes, messageLabelPositions, descriptionLabels, messageLabelWidths, messageOutlineWidth, messageCornerSize, messageCanvas, messageCanvasCtx, lastUpdateTime, messageEndTime;
    this.init = function() {
        lastUpdateTime = 0;
        messageState = 4;
        animationProgress = timeElapsed = 0;
        messages = [];
        messageFontStyles = Array(2);
        messageFontSizes = Array(2);
        messageLabelPositions = Array(2);
        descriptionLabels = ["YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:"];
        messageLabelPositions[0] = .3;
        messageLabelPositions[1] = .7;
        messageLabelWidths = Array(4);
        messageCanvas = document.createElement("canvas");
        messageEndTime = mainHandler.time + 2E3;
        this.setCanvasVariables()
    };
    this.setCanvasVariables = function() {
        var labelIndex;
        messageHeight = Math.floor((isZoom ? .0725 : .058) * averageDim);
        messageFontSizes[0] = Math.floor(.85 * messageLabelPositions[0] * messageHeight);
        messageFontSizes[1] = Math.floor(.85 * messageLabelPositions[1] * messageHeight);
        messageFontStyles[0] = fontWeightBold + messageFontSizes[0] + fontSizeArial;
        messageFontStyles[1] = fontWeightBold + messageFontSizes[1] + fontSizeArial;
        for (labelIndex = messageLabelWidths.length - 1; 0 <= labelIndex; labelIndex--) messageLabelWidths[labelIndex] = this.measureText(descriptionLabels[labelIndex] + "000", messageFontStyles[0]);
        messageOutlineWidth = Math.floor(1 + .05 * messageHeight);
        messageCornerSize = Math.floor(.2 * messageHeight);
        if (0 < messages.length) {
            for (labelIndex = messages.length - 1; 0 <= labelIndex; labelIndex--) {
                var messageFontWidth = this.measureText(messages[labelIndex].label + "00", messageFontStyles[1]);
                messages[labelIndex].width = messageFontWidth < messageLabelWidths[labelIndex] ? messageLabelWidths[labelIndex] : messageFontWidth
            }
            createMessage()
        }
    };
    this.update = function() {
        if (0 !== messageState)
            if (4 === messageState) {
                if (mainHandler.time > messageEndTime) {
                    messageState = 0;
                    if (1 === clientStatus) gameMessages.startGameMessage(mapInfo.getMapName(), 3, 1, 9);
                }
            } else {
                if (1 === messageState) {
                    if (0 === animationProgress) {
                        createMessage();
                        animationProgress = 1E-4;
                    }
                    animationProgress += .002 * (mainHandler.time - lastUpdateTime);
                    if (1 <= animationProgress) {
                        timeElapsed = 0;
                        messageState = 2;
                        animationProgress = 1;
                    }
                    mainHandler.canvasDirty = true;
                } else if (2 === messageState) {
                    timeElapsed += (mainHandler.time - lastUpdateTime) / 1E3;
                    if (timeElapsed > messages[0].timeToFade || 1 < timeElapsed && 1 < messages.length) messageState = 3
                } else if (3 === messageState) {
                    animationProgress -= .002 * (mainHandler.time - lastUpdateTime);
                    if (0 >= animationProgress) {
                        animationProgress = 0;
                        messages.shift();
                        messageState = 0 < messages.length ? 1 : 0;
                    }
                    mainHandler.canvasDirty = true;
                }
                lastUpdateTime = mainHandler.time;
            }
    };
    this.measureText = function(text, font) {
        mainCanvasCtx.font = font;
        return Math.floor(mainCanvasCtx.measureText(text).width)
    };
    this.set = function(id, descriptionType) {
        this.startGameMessage(nicknames[id], descriptionType, 1, 0 === descriptionType ? 3 : 7)
    };
    this.startGameMessage = function(text, descriptionType, messageColor, fadeTime) {
        var messageWidth = this.measureText(text + "00", messageFontStyles[1]);
        messageWidth = messageWidth < messageLabelWidths[descriptionType] ? messageLabelWidths[descriptionType] : messageWidth;
        messages.push({
            label: text,
            width: messageWidth,
            descriptionType: descriptionType,
            messageColor: messageColor,
            timeToFade: fadeTime
        });
        if (0 === messageState) {
            animationProgress = 0;
            messageState = 1;
            lastUpdateTime = mainHandler.time;
        }
    };
    this.drawCanvasImage = function() {
        if (0 !== messageState && 0 !== animationProgress) {
            if (1 > animationProgress) {
                mainCanvasCtx.globalAlpha = animationProgress;
                drawMessage();
                mainCanvasCtx.globalAlpha = 1;
            } else drawMessage();
        }
    }
}

function Peace() {
    function drawPeaceBar() {
        var peaceBarWidth = peace.width;
        hasVoted = false;
        clearAndFillBlackRect(peaceCanvasCtx, peaceBarWidth, peaceBarHeight);
        var midPoint = Math.floor(peaceBarWidth / 2);
        if (1 === myChoice) {
            peaceCanvasCtx.fillStyle = greenBrightMoreOpaque;
            peaceCanvasCtx.fillRect(midPoint, 0, midPoint, peaceBarHeight);
        } else if (-1 === myChoice) {
            peaceCanvasCtx.fillStyle = redMoreOpaque;
            peaceCanvasCtx.fillRect(0, 0, midPoint, peaceBarHeight);
        }
        fourRectFiller(peaceCanvasCtx, peaceBarWidth, peaceBarHeight, 2);
        midPoint = Math.floor(.25 * peaceBarHeight);
        midPoint = 2 > midPoint ? 2 : midPoint;
        peaceCanvasCtx.fillStyle = whiteBrightMoreOpaque;
        var peaceProgressBarHeight = Math.floor((peaceBarHeight - 4) * peaceProgress[1] / peaceRequirement[1]);
        if (0 < peaceProgressBarHeight) peaceCanvasCtx.fillRect(2, peaceBarHeight - 2 - peaceProgressBarHeight, midPoint, peaceProgressBarHeight);
        peaceProgressBarHeight = Math.floor((peaceBarHeight - 4) * peaceProgress[0] / peaceRequirement[0]);
        if (0 < peaceProgressBarHeight) peaceCanvasCtx.fillRect(peaceBarWidth - 2 - midPoint, peaceBarHeight - 2 - peaceProgressBarHeight, midPoint, peaceProgressBarHeight);
        midPoint = Math.floor(peaceBarHeight / 8);
        midPoint = 2 > midPoint ? 2 : midPoint;
        drawDiagRect(peaceCanvasCtx, Math.floor(.4 * peaceBarHeight), 0, peaceBarHeight, midPoint, .5, false);
        drawDiagRect(peaceCanvasCtx, Math.floor(peaceBarWidth - 1.4 * peaceBarHeight), 0, peaceBarHeight, midPoint, .5, true);
        peaceCanvasCtx.drawImage(peaceIconCanvas, Math.floor((peaceBarWidth - peaceIconCanvas.width) / 2), 3)
    }

    function resetCurrentPeace() {
        hasVoted = true;
        countDown = 140;
        myChoice = 0;
        voterList = [];
        peace.visible = false;
        peaceProgress[0] = peaceProgress[1] = 0
    }

    function getPeaceBarYPos() {
        if (attackRatioBar.overlapsWithAnnouncements(announcements.getAnnouncementWidth())) return attackRatioBar.startingY - peaceBarHeight - canvasPadding
        else return mainCanvasHeight - peaceBarHeight - (isZoom ? 2 : 1) * canvasPadding
    }
    var peaceBarHeight, peaceCanvas, peaceCanvasCtx, peaceIconCanvas, myChoice, peaceProgress, peaceRequirement, voterList, hasVoted, countDown, oldTop10Land, peaceCount, timeBeforeHidden;
    this.init = function() {
        peaceCount = timeBeforeHidden = 0;
        hasVoted = this.visible = false;
        countDown = 140;
        myChoice = 0;
        peaceProgress = [0, 0];
        peaceRequirement = [1, 1];
        voterList = [];
        oldTop10Land = new Uint32Array(10);
        this.setCanvasVariables()
    };
    this.setCanvasVariables = function() {
        peaceBarHeight = attackRatioBar.height;
        this.width = 4 * peaceBarHeight;
        this.drawPeaceIcon();
        peaceCanvas = document.createElement("canvas");
        peaceCanvas.width = this.width;
        peaceCanvas.height = peaceBarHeight;
        peaceCanvasCtx = peaceCanvas.getContext("2d", {
            alpha: true
        });
        drawPeaceBar()
    };
    this.drawCanvas = function() {
        hasVoted && drawPeaceBar()
    };
    this.drawPeaceIcon = function() {
        var peaceIconSize = peaceBarHeight - 6;
        peaceIconSize = 6 > peaceIconSize ? 6 : peaceIconSize;
        if (void 0 === peaceIconCanvas || peaceIconCanvas.width !== peaceIconSize) {
            peaceIconCanvas = document.createElement("canvas");
            peaceIconCanvas.width = peaceIconSize;
            peaceIconCanvas.height = peaceIconSize;
            var peaceIconCanvasCtx = peaceIconCanvas.getContext("2d", {
                alpha: true
            });
            peaceIconCanvasCtx.clearRect(0, 0, peaceIconSize, peaceIconSize);
            var strokeWidth = Math.floor(peaceIconSize / 8);
            strokeWidth = 1 > strokeWidth ? 1 : strokeWidth;
            peaceIconCanvasCtx.lineWidth = strokeWidth;
            peaceIconCanvasCtx.strokeStyle = whiteRGB2;
            var centerX = Math.floor(peaceIconSize / 2);
            peaceIconSize = Math.floor((peaceIconSize - strokeWidth) / 2);
            peaceIconCanvasCtx.beginPath();
            peaceIconCanvasCtx.arc(centerX, centerX, peaceIconSize, 0, 2 * Math.PI);
            peaceIconCanvasCtx.moveTo(centerX, centerX - peaceIconSize);
            peaceIconCanvasCtx.lineTo(centerX, centerX + peaceIconSize);
            peaceIconCanvasCtx.moveTo(centerX + Math.cos(.78 * Math.PI) * peaceIconSize, centerX + Math.cos(.28 * Math.PI) * peaceIconSize);
            peaceIconCanvasCtx.lineTo(centerX, centerX);
            peaceIconCanvasCtx.lineTo(centerX + Math.cos(.22 * Math.PI) * peaceIconSize, centerX + Math.cos(1.72 * Math.PI) * peaceIconSize);
            peaceIconCanvasCtx.stroke()
        }
    };
    this.mouseDown = function(xPos, yPos) {
        if (customJSON.isCustomJSON && customJSON.data.replay) return false;
        if (xPos < mainCanvasWidth - this.width - canvasPadding) return false;
        var peaceBarYPos = getPeaceBarYPos();
        if (yPos < peaceBarYPos || yPos > peaceBarYPos + peaceBarHeight) return false;
        var vote = xPos > mainCanvasWidth - canvasPadding - this.width / 2;
        if (singleplayer) {
            if (typeof(modHandler) == "object" && modHandler.latency) latencySimulator.addPendingAction(6, 0, vote, 0, 0)
            else this.processVotePeace(0, vote)
        } else if (playerActions.isHuman(myID) && 0 !== isAlive[myID]) dataEncoder.votePeace(vote);
        return true
    };
    this.update = function() {
        if (0 < timeBeforeHidden) {
            timeBeforeHidden--;
            if (0 === timeBeforeHidden) resetCurrentPeace()
        }
        else if (this.visible) {
            countDown--;
            if (270 === countDown && 2 <= peaceCount) loop: {
                var aliveIndex;
                for (aliveIndex = aliveCount - 1; 0 <= aliveIndex; aliveIndex--)
                    if (playerActions.isHuman(aliveEntities[aliveIndex])) {
                        aliveIndex = false;
                        break loop
                    } aliveIndex = true
            }
            if (aliveIndex) {
                hasVoted = true;
                peaceProgress[0] += peaceRequirement[0];
            }
            if (180 === countDown && 3 * peaceProgress[0] < peaceRequirement[0]) resetCurrentPeace()
            else if (peaceProgress[0] >= peaceRequirement[0]) endGame.endGame(-1)
            else if (peaceProgress[1] >= peaceRequirement[1]) timeBeforeHidden = 4
            else if (0 >= countDown) resetCurrentPeace()
        } else {
            for (var orderIndex = 9; 0 <= orderIndex; orderIndex--) {
                if (12 < Math.abs(oldTop10Land[orderIndex] - land[landOrder[orderIndex]])) countDown = 140;
                oldTop10Land[orderIndex] = land[landOrder[orderIndex]];
            }
            if (0 >= --countDown) {
                this.visible = true;
                countDown = 360;
                var totalLand = 0;
                for (var aliveIndex = aliveCount - 1; 0 <= aliveIndex; aliveIndex--) {
                    if (playerActions.isHuman(aliveEntities[aliveIndex])) totalLand += land[aliveEntities[aliveIndex]];
                }
                peaceRequirement[0] = getMax(divideFloor(3 * totalLand, 5), 1);
                if (teamGame && 9 !== gamemode) {
                    peaceRequirement[0] = getMin(getMax(divideFloor(totalLand * (100 - divideFloor(100 * teams.getLargestTeamLand(), currentLandPixelsCount)), 100), 1), peaceRequirement[0]);
                }
                peaceRequirement[1] = getMax(totalLand - peaceRequirement[0], 1);
                peaceCount++
            }
        }
    };
    this.notPeaceGameEnd = function() {
        this.visible && peaceProgress[0] < peaceRequirement[0] && resetCurrentPeace()
    };
    this.processVotePeace = function(id, choice) {
        if (this.visible) {
            for (var vIndex = voterList.length - 1; 0 <= vIndex; vIndex--)
                if (voterList[vIndex] === id) return;
            voterList.push(id);
            hasVoted = true;
            var votingPower = singleplayer ? peaceRequirement[0] : land[id];
            choice ? peaceProgress[0] += votingPower : peaceProgress[1] += votingPower;
            if (id === myID) myChoice = choice ? 1 : -1
        }
    };
    this.drawCanvasImage = function() {
        if (this.visible) {
            var D = getPeaceBarYPos();
            mainCanvasCtx.drawImage(peaceCanvas, mainCanvasWidth - this.width - canvasPadding, D)
        }
    }
}

function AttackRatioBar() {
    function getBarColor() {
        if (ratio < 1 / 3) {
            var colorValue = Math.floor(540 * ratio);
            return `rgba(${colorValue},180,0,0.75)`
        }
        if (ratio < 2 / 3) {
            colorValue = Math.floor(540 * (ratio - 1 / 3));
            return  `rgba(180,${180 - colorValue},0,0.75)`;
        }
        colorValue = Math.floor(540 * (ratio - 2 / 3));
        return `rgba(180,0,${colorValue},0.75)`
    }

    function redrawAttackRatioBar() {
        attackRatioBarCanvasCtx.clearRect(0, 0, attackRatioBarWidth, attackRatioBar.height);
        var sliderRatio = Math.floor(ratio * (attackRatioBarWidth - 2 * buttonWidth));
        attackRatioBarCanvasCtx.fillStyle = blackMoreOpaque;
        attackRatioBarCanvasCtx.fillRect(0, 0, buttonWidth, attackRatioBar.height);
        attackRatioBarCanvasCtx.fillRect(buttonWidth + sliderRatio, 0, attackRatioBarWidth - buttonWidth - sliderRatio, attackRatioBar.height);
        attackRatioBarCanvasCtx.fillStyle = getBarColor();
        attackRatioBarCanvasCtx.fillRect(buttonWidth, 0, sliderRatio, attackRatioBar.height);
        attackRatioBarCanvasCtx.fillStyle = whiteRGB2;
        attackRatioBarCanvasCtx.fillRect(0, 0, attackRatioBarWidth, 1);
        attackRatioBarCanvasCtx.fillRect(0, attackRatioBar.height - 1, attackRatioBarWidth, 1);
        attackRatioBarCanvasCtx.fillRect(0, 0, 1, attackRatioBar.height);
        attackRatioBarCanvasCtx.fillRect(buttonWidth, 0, 1, attackRatioBar.height);
        attackRatioBarCanvasCtx.fillRect(buttonWidth + sliderRatio, 0, 1, attackRatioBar.height);
        attackRatioBarCanvasCtx.fillRect(attackRatioBarWidth - buttonWidth, 0, 1, attackRatioBar.height);
        attackRatioBarCanvasCtx.fillRect(attackRatioBarWidth - 1, 0, 1, attackRatioBar.height);
        sliderRatio = 1 + Math.floor(.0625 * attackRatioBar.height);

        var symbolSize = 1 + Math.floor(.3 * attackRatioBar.height);
        if (customJSON.isCustomJSON && customJSON.data.replay) {
            if (replayLogger.underReplay) {
                attackRatioBarCanvasCtx.fillRect(Math.floor(.25 * attackRatioBar.height) + 1.2 * symbolSize, symbolSize, sliderRatio, attackRatioBar.height - 2 * symbolSize - symbolSize % 2);    
                attackRatioBarCanvasCtx.fillRect(Math.floor(.25 * attackRatioBar.height) + 1.8 * symbolSize, symbolSize, sliderRatio, attackRatioBar.height - 2 * symbolSize - symbolSize % 2);        
            } else {
                attackRatioBarCanvasCtx.strokeStyle = whiteRGB2;
                attackRatioBarCanvasCtx.beginPath();
                var w = h = attackRatioBar.height;
                attackRatioBarCanvasCtx.moveTo(w/2, h/4);
                attackRatioBarCanvasCtx.lineTo(w/2, h-h/4);
                attackRatioBarCanvasCtx.lineTo(w, h/2);
                attackRatioBarCanvasCtx.lineTo(w/2, h/4);
                attackRatioBarCanvasCtx.fill();
            }
            var sprite = sprites.getValueByID(21);
            attackRatioBarCanvasCtx.drawImage(sprite, Math.floor(attackRatioBarWidth - .75 * buttonWidth), attackRatioBar.height / 8, .75 * attackRatioBar.height, .75 * attackRatioBar.height);
            percentage = 10 ** ((attackRatioBar.getFlooredRatio() - 500) / 500);
            var label = `Playback Speed (Fake): ${Math.floor(percentage * 10) / 10}X`
            attackRatioBarCanvasCtx.fillText(label, Math.floor(attackRatioBarWidth / 2), Math.floor(.55 * attackRatioBar.height))
            if (mainHandler.singleplayerHandler != null) mainHandler.singleplayerHandler.updateInterval = Math.round(56 / (customJSON.isCustomJSON && customJSON.data.replay ? Math.pow(10, (attackRatioBar.getFlooredRatio()-500)/500): 1))
        } else {
            attackRatioBarCanvasCtx.fillRect(Math.floor(.25 * attackRatioBar.height) + symbolSize, Math.floor((attackRatioBar.height - sliderRatio) / 2), attackRatioBar.height - 2 * symbolSize, sliderRatio);
            attackRatioBarCanvasCtx.fillRect(Math.floor(attackRatioBarWidth - 1.25 * attackRatioBar.height) + symbolSize, Math.floor((attackRatioBar.height - sliderRatio) / 2), attackRatioBar.height - 2 * symbolSize - symbolSize % 2, sliderRatio);
            attackRatioBarCanvasCtx.fillRect(Math.floor(attackRatioBarWidth - 1.25 * attackRatioBar.height) + Math.floor((attackRatioBar.height - sliderRatio) / 2), symbolSize, sliderRatio, attackRatioBar.height - 2 * symbolSize - symbolSize % 2);    
            sendAmount = Math.floor(troops[myID] * ratio);
            percentage = attackRatioBar.getFlooredRatio() / 10;
            var label = `${attackBars.splitNumber(sendAmount)} (${percentage}%)`
            attackRatioBarCanvasCtx.fillText(label, Math.floor(attackRatioBarWidth / 2), Math.floor(.55 * attackRatioBar.height))
        }
    }

    function multiplyRatio(multiplier) {
        if (1 < multiplier && 0 === ratio) {
            ratio = .01;
            redrawAttackRatioBar();
            return true;
        }
        if (1 < multiplier && 1 === ratio || 0 === ratio) return false;
        ratio *= multiplier;
        ratio = rangeClamp(0, ratio, 1);
        redrawAttackRatioBar();
        return true
    }

    function addRatio(addend) {
        if (0 > addend && 0 === ratio || 0 < addend && 1 === ratio) return false;
        ratio += addend;
        ratio = rangeClamp(0, ratio, 1);
        redrawAttackRatioBar();
        return true
    }

    function slideRatio(xPos) {
        var oldRatio = ratio;
        ratio = (xPos - startingX - buttonWidth) / (attackRatioBarWidth - 2 * buttonWidth);
        ratio = rangeClamp(0, ratio, 1);
        if (oldRatio !== ratio) {
            redrawAttackRatioBar();
            return true;
        } else return false;
    }
    var attackRatioBarWidth, startingX, buttonWidth, attackRatioBarCanvas, attackRatioBarCanvasCtx, visibility, ratio, sendAmount, percentage, fontStyle, needsUpdate, buttonMultiplier = 11/12;
    this.init = function() {
        visibility = customJSON.isCustomJSON && customJSON.data.replay || !inSpawn;
        needsUpdate = false;
        ratio = .5;
        sendAmount = 0;
        percentage = 0;
        this.isDragging = false;
        this.setCanvasVariables()
    };
    this.setCanvasVariables = function() {
        if (isZoom && mainCanvasWidth < .8 * mainCanvasHeight) {
            this.height = Math.floor(.0536 * averageDim);
            attackRatioBarWidth = mainCanvasWidth - 4 * canvasPadding - this.height;
        } else {
            attackRatioBarWidth = Math.floor((isZoom ? .65 : .389) * averageDim);
            attackRatioBarWidth += 12 - attackRatioBarWidth % 12;
            this.height = Math.floor(attackRatioBarWidth / 12)
        };
        buttonWidth = Math.floor(3 * this.height / 2);
        fontStyle = fontWeightBold + Math.floor(.5 * this.height) + fontSizeArial;
        attackRatioBarCanvas = document.createElement("canvas");
        attackRatioBarCanvas.width = attackRatioBarWidth;
        attackRatioBarCanvas.height = this.height;
        attackRatioBarCanvasCtx = attackRatioBarCanvas.getContext("2d", {
            alpha: true
        });
        attackRatioBarCanvasCtx.font = fontStyle;
        attackRatioBarCanvasCtx.textBaseline = middleAlign;
        attackRatioBarCanvasCtx.textAlign = centerAlign;
        this.setStartingPosition();
        redrawAttackRatioBar()
    };
    this.setStartingPosition = function() {
        startingX = isZoom && mainCanvasWidth < .8 * mainCanvasHeight ? this.height + 3 * canvasPadding : Math.floor((prevClientWidth - attackRatioBarWidth) / 2);
        this.startingY = prevClientHeight - this.height - (isZoom ? 2 : 1) * canvasPadding;
    };
    this.drawCanvas = function() {
        if (needsUpdate) {
            needsUpdate = false;
            redrawAttackRatioBar();
        }
    };
    this.visible = function() {
        return !(!visibility || gameButtons.menuVisible && startingX < Math.floor(canvasPadding + 5.5 * this.height))
    };
    this.overlapsWithAnnouncements = function(announcementsWidth) {
        return this.visible() ? startingX + attackRatioBarWidth > mainCanvasWidth - announcementsWidth - canvasPadding : false
    };
    this.toggleVisibility = function() {
        visibility = true
    };
    this.toggleVisibilityOff = function() {
        visibility = false
    };
    this.getFlooredRatio = function() {
        var flooredRatio = Math.floor(1E3 * ratio);
        return rangeClamp(1, flooredRatio, 1E3)
    };
    this.getClickedButton = function(xPos, yPos) {
        return this.visible() && xPos > startingX && xPos < startingX + attackRatioBarWidth && yPos > this.startingY
    };
    this.clickedButton = function(xPos, yPos) {
        if (!this.visible()) return false;
        if (xPos > startingX && xPos < startingX + buttonWidth && yPos > attackRatioBar.startingY) {
            if (customJSON.isCustomJSON && customJSON.data.replay) {
                replayLogger.underReplay = !replayLogger.underReplay;
                needsUpdate = true;
                return true;
            } else return typeof(modHandler) == "object" && modHandler.lateral ? addRatio(-.065) : multiplyRatio(buttonMultiplier);
        }
        if (xPos > startingX + attackRatioBarWidth - buttonWidth && xPos < startingX + attackRatioBarWidth && yPos > attackRatioBar.startingY) {
            if (customJSON.isCustomJSON && customJSON.data.replay) {
                replayLogger.underReplay = false;
                customJSON.startCustomGame();
                needsUpdate = true;
                return true;
            } else return typeof(modHandler) == "object" && modHandler.lateral ? addRatio(.065) : multiplyRatio(1 / buttonMultiplier);
        }
        this.isDragging = true;
        return slideRatio(xPos)
    };
    this.checkAndMultiplyRatio = function(multiplier) {
        if (0 !== clientStatus && this.visible() && multiplyRatio(multiplier)) mainHandler.canvasDirty = true
    };
    this.checkAndAddRatio = function(addend) {
        if (0 !== clientStatus && this.visible() && addRatio(addend)) mainHandler.canvasDirty = true
    };
    this.onWheel = function(deltaY) {
        if (0 === deltaY || !this.visible()) return false;
        if (0 < deltaY) {
            deltaY = 400 / (400 + deltaY);
            deltaY = deltaY < buttonMultiplier ? buttonMultiplier : deltaY;
        } else {
            deltaY = (400 - deltaY) / 400;
            deltaY = deltaY > 1 / buttonMultiplier ? 1 / buttonMultiplier : deltaY;
        }
        return multiplyRatio(deltaY)
    };
    this.onPointermove = function(xPos) {
        return this.isDragging ? slideRatio(xPos) : false
    };
    this.stopDragging = function() {
        this.isDragging = false
    };
    this.update = function() {
        if (this.visible() && (Math.floor(troops[myID] * ratio) !== sendAmount || customJSON.isCustomJSON && customJSON.data.replay)) needsUpdate = true
    };
    this.drawCanvasImage = function() {
        if (this.visible()) mainCanvasCtx.drawImage(attackRatioBarCanvas, startingX, this.startingY)
    }
}
var mainScaleFactor, viewportX, viewportY;

function MouseCamera() {
    var canvases, contexts, canvasSize, canvasXPos, canvasYPos, lastMouseX, lastMouseY;
    this.init = function() {
        canvases = Array(2);
        contexts = Array(2);
        this.isPanning = false;
        lastMouseY = lastMouseX = viewportY = viewportX = 0;
        mainScaleFactor = 1;
        this.setCanvasVariables()
    };
    this.setCanvasVariables = function() {
        canvasSize = Math.floor((isZoom ? .072 : .0502) * averageDim);
        canvasSize = 8 > canvasSize ? 8 : canvasSize;
        for (var canvasIndex = 1; 0 <= canvasIndex; canvasIndex--) {
            canvases[canvasIndex] = document.createElement("canvas");
            canvases[canvasIndex].width = canvasSize;
            canvases[canvasIndex].height = canvasSize;
            contexts[canvasIndex] = canvases[canvasIndex].getContext("2d", {
                alpha: true
            });
        }
        this.setStartingPosition();
        var lineWidth = Math.floor(1 + canvasSize / 20);
        for (var canvasIndex = 1; 0 <= canvasIndex; canvasIndex--) {
            contexts[canvasIndex].clearRect(0, 0, canvasSize, canvasSize);
            contexts[canvasIndex].fillStyle = blackOpaque;
            contexts[canvasIndex].beginPath();
            contexts[canvasIndex].arc(canvasSize / 2, canvasSize / 2, canvasSize / 2 - lineWidth, 0, 2 * Math.PI);
            contexts[canvasIndex].fill();
            contexts[canvasIndex].lineWidth = lineWidth;
            contexts[canvasIndex].fillStyle = whiteRGB;
            contexts[canvasIndex].strokeStyle = whiteRGB;
            contexts[canvasIndex].beginPath();
            contexts[canvasIndex].arc(canvasSize / 2, canvasSize / 2, canvasSize / 2 - lineWidth, 0, 2 * Math.PI);
            contexts[canvasIndex].stroke();
            drawDiagRect(contexts[canvasIndex], 0, 0, canvasSize, lineWidth, .3, 0 === canvasIndex);
        }
    };
    this.toX = function() {
        return -viewportX / mainScaleFactor
    };
    this.toY = function() {
        return -viewportY / mainScaleFactor
    };
    this.updateViewportX = function(xPos, prevViewportCenterX) {
        viewportX = mainScaleFactor * xPos - prevViewportCenterX
    };
    this.updateViewportY = function(yPos, prevViewportCenterY) {
        viewportY = mainScaleFactor * yPos - prevViewportCenterY
    };
    this.mouseDown = function(xPos, yPos) {
        if (Math.pow(xPos - (canvasXPos + canvasSize / 2), 2) + Math.pow(yPos - (canvasYPos + canvasSize / 2), 2) < canvasSize * canvasSize / 4 || Math.pow(xPos - (canvasXPos + canvasSize / 2), 2) + Math.pow(yPos - (canvasYPos + 2 * canvasSize), 2) < canvasSize * canvasSize / 4) {
            if (yPos < canvasYPos + 1.25 * canvasSize) return this.onWheel(Math.floor(prevClientWidth / 2), Math.floor(prevClientHeight / 2), -200)
            else return this.onWheel(Math.floor(prevClientWidth / 2), Math.floor(prevClientHeight / 2), 200);
        }
        if (autoCamera.deactivateCamera()) {
            this.isPanning = true;
            lastMouseX = xPos;
            lastMouseY = yPos;
        }
        return false
    };
    this.onPointermove = function(xPos, yPos) {
        if (!autoCamera.deactivateCamera()) return true;
        var oldViewportX = viewportX,
            oldViewportY = viewportY,
            dispX = lastMouseX - xPos,
            dispY = lastMouseY - yPos;
        viewportX += dispX;
        viewportY += dispY;
        infoRenderer.onPointermove(dispX, dispY);
        this.restrictViewportToMap();
        lastMouseX = xPos;
        lastMouseY = yPos;
        return oldViewportX !== viewportX || oldViewportY !== viewportY
    };
    this.onWheel = function(xPos, yPos, deltaY) {
        if (!autoCamera.deactivateCamera()) return true;
        if (0 < deltaY) deltaY = 450 / (450 + deltaY), deltaY = .5 > deltaY ? .5 : deltaY;
        else if (0 > deltaY) deltaY = (450 - deltaY) / 450, deltaY = 2 < deltaY ? 2 : deltaY;
        else return false;
        this.zoomAndUpdateViewport(xPos, yPos, deltaY);
        return true
    };
    this.zoomAndUpdateViewport = function(xPos, yPos, deltaY) {
        deltaY = 1024 < deltaY * mainScaleFactor ? 1024 / mainScaleFactor : deltaY;
        deltaY = .125 > deltaY * mainScaleFactor ? .125 / mainScaleFactor : deltaY;
        infoRenderer.zoom(deltaY, xPos, yPos);
        mainScaleFactor *= deltaY;
        viewportX = (viewportX + xPos) * deltaY - xPos;
        viewportY = (viewportY + yPos) * deltaY - yPos;
        mouseCamera.restrictViewportToMap()
    };
    this.restrictViewportToMap = function() {
        var minXFromEdge = mainCanvasWidth / 16,
            readjustX = 0,
            minYFromEdge = mainCanvasHeight / 16,
            readjustY = 0;
        viewportX < -mainCanvasWidth + minXFromEdge && (readjustX = -mainCanvasWidth + minXFromEdge - viewportX);
        viewportX > mainScaleFactor * currentMapWidth - minXFromEdge && (readjustX = mainScaleFactor * currentMapWidth - minXFromEdge - viewportX);
        viewportY < -mainCanvasHeight + minYFromEdge && (readjustY = -mainCanvasHeight + minYFromEdge - viewportY);
        viewportY > mainScaleFactor * currentMapHeight - minYFromEdge && (readjustY = mainScaleFactor * currentMapHeight - minYFromEdge - viewportY);
        viewportX += readjustX;
        viewportY += readjustY;
        viewport.updateViewportCoords();
        infoRenderer.translateCanvas(readjustX, readjustY)
    };
    this.setStartingPosition = function() {
        canvasXPos = prevClientWidth - canvasSize - canvasPadding;
        canvasYPos = Math.floor(prevClientHeight / 2 - 1.25 * canvasSize)
    };
    this.drawCanvasImage = function() {
        mainCanvasCtx.drawImage(canvases[0], canvasXPos, canvasYPos);
        mainCanvasCtx.drawImage(canvases[1], canvasXPos, Math.floor(canvasYPos + 3 * canvasSize / 2))
    }
}

function Playtime() {
    function calculatePlaytimeWidth() {
        playtimeCanvasWidth = Math.floor(.2 * (isZoom ? .07 : .035) * averageDim);
        playtimeCanvasWidth = getMax(isZoom ? 3 : 1, playtimeCanvasWidth);
        var P = mainCanvasWidth / (playTimes.length + playtimePadding);
        playtimeCanvasWidth = P > playtimeCanvasWidth ? P : playtimeCanvasWidth;
        playtimeBarWidth = Math.floor((1 - playtimePadding) * playtimeCanvasWidth);
        playtimeCanvasPosition = 0;
        setPlaytimeBoundaries()
    }

    function setPlaytimeBoundaries() {
        playtimeCanvasPosition = -20 > playtimeCanvasPosition ? -20 : playtimeCanvasPosition;
        playtimeCanvasPosition = playtimeCanvasPosition > (playTimes.length - 15) * playtimeCanvasWidth ? (playTimes.length - 15) * playtimeCanvasWidth : playtimeCanvasPosition;
        playtimeStartIndex = Math.floor(playtimeCanvasPosition / playtimeCanvasWidth);
        playtimeEndIndex = playtimeStartIndex + Math.floor(prevClientWidth / playtimeCanvasWidth);
        playtimeEndIndex = playtimeEndIndex > playTimes.length - 1 ? playTimes.length - 1 : playtimeEndIndex;
        playtimeStartIndex = playtimeEndIndex < playtimeStartIndex ? playtimeEndIndex : playtimeStartIndex;
        playtimeStartIndex = 0 > playtimeStartIndex ? 0 : playtimeStartIndex;
        var P = playtimeEndIndex;
        playtimeDuration = playtimeCanvasHeight / playTimes[P];
        for (var U = playtimeEndIndex - 1; U >= playtimeStartIndex; U--) playTimes[U] > playTimes[P] && (P = U, playtimeDuration = playtimeCanvasHeight / Math.pow(playTimes[U], playtimeExponent))
    }

    function updatePlaytimeIndex(mouseXPos) {
        var newPtIndex = Math.floor((playtimeCanvasPosition + prevClientWidth - mouseXPos - playtimePadding * playtimeCanvasWidth) / playtimeCanvasWidth);
        newPtIndex = -1 > newPtIndex ? -1 : -1 === newPtIndex ? 0 : newPtIndex > playTimes.length - 1 ? -1 : newPtIndex;
        if (newPtIndex !== hoveringPlaytimeIndex) {
            hoveringPlaytimeIndex = newPtIndex;
            if (-1 === playtimeIntervalID && 0 === hoveringPlaytimeIndex && isLoadInfoRequested) {
                playtimeIntervalID = setInterval(updateCurrentPlaytime, 100);
            }
            return true;
        } else return false;
    }

    function drawPlaytimeRect(playtimeIndex) {
        var U = Math.floor(playtimeDuration * Math.pow(playTimes[playtimeIndex], playtimeExponent));
        mainCanvasCtx.fillRect(playtimeCanvasPosition + prevClientWidth - (playtimeIndex + 1) * playtimeCanvasWidth, prevClientHeight - U, playtimeBarWidth, U)
    }

    function updateCurrentPlaytime() {
        8 === gameStateManager.getState() && (hoveringPlaytimeIndex = -1);
        if (0 !== hoveringPlaytimeIndex) {
            playtimeLastUpdateTime = (new Date).getTime();
            clearInterval(playtimeIntervalID);
            playtimeIntervalID = -1;
        } else {
            var playTimeIncrease = playTimes[1] / 864E3;
            if (-1 !== playtimeLastUpdateTime) {
                var now = (new Date).getTime();
                playTimeIncrease += (now - playtimeLastUpdateTime) * playTimes[1] / 864E5;
                playtimeLastUpdateTime = -1
            }
            0 < playTimeIncrease && (playTimes[0] += Math.floor(playTimeIncrease), mainHandler.canvasDirty = true)
        }
    }
    var playTimes, playtimeCanvasPosition, playtimeCanvasHeight, playtimeCanvasWidth, playtimePadding, playtimeDuration, playtimeStartIndex, playtimeEndIndex, hoveringPlaytimeIndex,
        fontSize, fontStyle, currentDate, lastPointerXPos, isLoadInfoRequested, playtimeExponent, playtimeBarWidth, playtimeIntervalID, playtimeLastUpdateTime, timeStampLabels;
    this.init = function() {
        playtimeLastUpdateTime = playtimeIntervalID = -1;
        isLoadInfoRequested = false;
        playtimeExponent = 1;
        hoveringPlaytimeIndex = -1;
        this.isDraggingPlaytime = false;
        lastPointerXPos = 0;
        currentDate = new Date;
        playtimeCanvasPosition = 0;
        playtimePadding = .3;
        timeStampLabels = [];
        timeStampLabels.push({
            group: "Plateau A",
            count: 0,
            range: 57
        });
        timeStampLabels.push({
            group: "Max A",
            count: 1,
            range: 1
        });
        timeStampLabels.push({
            group: "Black Friday",
            count: 15,
            range: 15
        });
        timeStampLabels.push({
            group: "Max B",
            count: 19,
            range: 19
        });
        timeStampLabels.push({
            group: "Max C",
            count: 44,
            range: 44
        });
        timeStampLabels.push({
            group: "First Android Version",
            count: 58,
            range: 58
        });
        timeStampLabels.push({
            group: "Max D",
            count: 67,
            range: 67
        });
        timeStampLabels.push({
            group: "The iFrame Explosion",
            count: 98,
            range: 99
        });
        timeStampLabels.push({
            group: "The 155-Day Uptrend",
            count: 58,
            range: 213
        });
        timeStampLabels.push({
            group: "Max E",
            count: 213,
            range: 213
        });
        timeStampLabels.push({
            group: "Plateau B",
            count: 214,
            range: 259
        });
        timeStampLabels.push({
            group: "Turbulent Times",
            count: 260,
            range: 344
        });
        timeStampLabels.push({
            group: "Max F",
            count: 262,
            range: 262
        });
        timeStampLabels.push({
            group: "Max G",
            count: 282,
            range: 282
        });
        timeStampLabels.push({
            group: "Max H",
            count: 333,
            range: 333
        });
        timeStampLabels.push({
            group: "The 19-Day Downtrend",
            count: 283,
            range: 301
        });
        timeStampLabels.push({
            group: "Plateau C",
            count: 345,
            range: 385
        });
        timeStampLabels.push({
            group: "The Alliance Ascent",
            count: 386,
            range: 395
        });
        timeStampLabels.push({
            group: "Max I",
            count: 395,
            range: 395
        });
        timeStampLabels.push({
            group: "First iOS Version",
            count: 411,
            range: 411
        });
        timeStampLabels.push({
            group: "Plateau D",
            count: 396,
            range: 453
        });
        timeStampLabels.push({
            group: "The TikTok Revolution",
            count: 454,
            range: 470
        });
        timeStampLabels.push({
            group: "Max J",
            count: 456,
            range: 456
        });
        timeStampLabels.push({
            group: "Max K",
            count: 472,
            range: 472
        });
        timeStampLabels.push({
            group: "Max L",
            count: 478,
            range: 478
        });
        timeStampLabels.push({
            group: "YT Drew",
            count: 471,
            range: 485
        });
        timeStampLabels.push({
            group: "Plateau E",
            count: 485,
            range: 600
        });
        timeStampLabels.push({
            group: "Uptrend A",
            count: 600,
            range: 613
        });
        timeStampLabels.push({
            group: "Max M",
            count: 613,
            range: 613
        });
        timeStampLabels.push({
            group: "Downtrend A",
            count: 614,
            range: 635
        });
        timeStampLabels.push({
            group: "Plateau F",
            count: 636,
            range: 737
        });
        timeStampLabels.push({
            group: "End of Record",
            count: 738,
            range: 738
        });
        playTimes = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674, 268883231, 261100885, 247870209, 240175828, 231697235, 240614202, 237647174, 230525212, 228239099, 226070733, 215992739, 216961676, 231079584, 235793502, 234032821, 228402462,
            216942832, 211862670, 209792418, 220626495, 221020535, 228198633, 226910806, 227687295, 210969547, 197393506, 205629061, 215820135, 213694935, 209455870, 215822584, 215130299, 214034219, 229190414, 230055290, 225313791, 223398523, 231870169, 226224938, 218242706, 235891029, 210498444, 195329116, 187676007, 183432634, 175752106, 170096205, 173369342, 171454357, 185810310, 189616577, 190788861, 179291487, 179513980, 189122353, 188375572, 202060722, 203256609, 197948652, 191950448, 194693217, 196335490, 195911919, 202264283, 199251620, 193699336, 188441210,
            183419345, 195919988, 198126823, 199780788, 197440550, 190144884, 179139362, 166469099, 178827877, 183801980, 197952484, 188875861, 185919783, 186237411, 182504952, 183532013, 174109004, 178159701, 161031347, 194622838, 205645645, 200496457, 194773327, 194546481, 207893217, 210920126, 213376144, 173859897, 154326886, 158943729, 166772975, 175066046, 177406405, 179018562, 185986119, 186747583, 200787939, 208959937, 161987576, 185512400, 185788899, 185957487, 194591063, 215634157, 230579314, 237637383, 240518707, 221398239, 225230795, 224891285, 211292916,
            216944626, 219436299, 226523918, 232405568, 232166426, 216921782, 244767964, 257278946, 243548100, 237386943, 242802627, 229717622, 168149709, 259971896, 267057767, 257606635, 209857364, 126035568, 129833237, 151312703, 197006695, 73120657, 37551024, 39229432, 29517736, 29382631, 31512045, 42652097, 47363019, 49624906, 46687310, 33767120, 31230439, 34211643, 43094531, 53747053, 55380682, 49779117, 47748833, 21038802, 20406484, 24523793, 26566139, 25284142, 26825553, 23497443, 20291865, 17765022, 21291320, 21106123, 19050128, 18324426, 19044067, 19594721,
            19347845, 23365124, 24186529, 19824881, 17952812, 17093838, 17328579, 17607296, 21284737, 22551012, 20471281, 19350848, 19654931, 18725460, 18641926, 23301269, 25178902, 21617041, 21433781, 21078957, 19526047, 18665064, 21394401, 21575049, 19286677, 18018450, 17550775, 17282428, 17055509, 19348704, 20177845, 19766211, 19088037, 18118802, 18269428, 18500614, 19130220, 19351798, 19205188, 19489961, 20233286, 20726811, 23245145, 26158741, 26096642, 24424181, 23690661, 22967492, 21098008, 20325973, 19431907, 17008295, 15583096, 14209752, 14307184, 13541498,
            12822679, 13154311, 12161194, 12956543, 11435697, 13428928, 12262514, 12858519, 12405344, 12884309, 14410011, 15556681, 15260178, 14863807, 13861458, 15176144, 14089849, 13063987, 12378716, 13061867, 13118900, 13112653, 13137263, 13062253, 13126875, 14136833, 14711852, 14341250, 11888270, 13137006, 12830841, 12516937, 12783789, 13139393, 12931E3, 12857582, 13677329, 13892963, 13171528, 14135236, 14640750, 15677970, 16758399, 19125177, 17723446, 16469484, 17032884, 19792603, 21426397, 22032534, 20271251, 16190176, 16772813, 17675977, 18764026, 18346209,
            19576834, 20989792, 21350839, 14696885, 14653075, 14677999, 14958759, 14210260, 15488352, 15623604, 14473144, 12823062, 14869909, 15142264, 15567014, 17896725, 20081347, 17765006, 12763925, 13523610, 13979983, 15080856, 17116394, 18483238, 18084320, 12100282, 12221529, 12441579, 12058220, 12441689, 12821546, 13401583, 13009895, 12271066, 12210094, 12355642, 13737115, 14257807, 14904897, 14072161, 15640387, 15721803, 16397970, 19254839, 21608906, 20527471, 16596206, 15550563, 14385591, 15547262, 13174302, 12462319, 13000669, 12832541, 12186376, 13150940,
            14654379, 14299386, 14158528, 15185971, 12444117, 14253445, 15049053, 14123310, 16892853, 15963931, 11858727, 10012703, 9478191, 9193460, 8851082, 9298848, 9638204, 9442496, 8653593, 9093527, 8530977, 8809114, 9609612, 9906912, 9615756, 9477879, 9713075, 9126583, 8949378, 9577595, 10180186, 9858705, 9534213, 9184660, 8889455, 8311313, 9738346, 9772164, 9157791, 8445413, 8467279, 8756002, 9257951, 10213536, 10620530, 10352296, 9350531, 9118709, 9614237, 9692491, 10801215, 10984804, 9542309, 9609538, 9391430, 9515517, 10064494, 11061684, 10408005, 9794768,
            9297643, 9275992, 9394076, 9716084, 10045958, 9715229, 9091248, 10010584, 9845528, 9532588, 8986320, 9037708, 9820996, 8953464, 9074064, 8644692, 8025308, 8832112, 10785788, 10539708, 8908744, 8331216, 8858100, 8626840, 7666284, 8503372, 8855308, 6762540, 6414076, 6786692, 6445532, 6262192, 5918176, 5864376, 5464928, 5384996, 5942760, 5261972, 5404612, 6184860, 6312948, 5815660, 5208552, 4734392, 4538784, 4661404, 5145524, 4819368, 4369224, 4458584, 4289956, 3538288, 3517544, 3871876, 3388048, 3344796, 3089228, 2863676, 2268964, 2160500, 2580004, 2244356, 2018408,
            1688912, 1945368, 1796332, 1619260, 2060292, 1597656, 1472788, 1306208, 1171408, 1021096, 1109312, 1241276, 1305092, 1142748, 1157700, 991984, 786992, 786396, 1043956, 1029320, 860500, 834824, 841912, 736464, 690328, 878376, 907232, 794932, 646388, 752600, 672836, 636212, 794108, 746856, 642928, 671328, 493568, 458168, 428776, 464736, 371412, 314568, 225472, 252072, 227604, 251048, 269184, 174136, 825576, 536060, 165952, 153252, 180036, 149616, 138472, 157832, 188152, 180108, 134076, 70960, 89236, 111428, 60520, 74620, 73424, 74720, 71584, 94432, 62572, 66420, 32532,
            34452, 41048, 51372, 61916, 43236, 55172, 26776, 47E3, 57424, 93100, 64980, 37288, 44296, 34588, 40700, 29200, 24604, 18184, 42660, 31404, 38096, 18556, 17388, 19568, 17604, 22328, 40300, 39392, 33440, 17960, 7984, 11612, 67700, 14108, 22444, 19756, 9436, 16864, 14400, 17216, 14436, 8612, 15952, 29764, 18748, 16348, 23976, 22080, 20268, 20984, 9480, 30736, 15996, 9484, 9392, 9716, 21540, 57428, 24788, 18728, 8528, 5972, 20560, 18268, 28088, 15364, 15300, 29348, 30992, 20564, 34420, 16716, 14424, 12360, 15124, 51172, 13176
        ];
        this.setCanvasVariables();
        wsManager.sendWhenWSOpen(0, 0)
    };
    this.setCanvasVariables = function() {
        playtimeCanvasHeight = Math.floor(.15 * mainCanvasHeight);
        fontSize = Math.floor((isZoom ? .018 : .0137) * averageDim);
        fontSize = 10 > fontSize ? 10 : fontSize;
        fontStyle = fontWeightBold + fontSize + fontSizeArial;
        calculatePlaytimeWidth()
    };
    this.completeFirstAction = function() {
        isLoadInfoRequested || dataEncoder.requestLoadInfo()
    };
    this.addPlaytimes = function(newPlaytimes) {
        var ptIndex;
        isLoadInfoRequested = true;
        for (ptIndex = 0; ptIndex < newPlaytimes.length; ptIndex++) playTimes.unshift(newPlaytimes[ptIndex]);
        calculatePlaytimeWidth();
        mainHandler.canvasDirty = true
    };
    this.setPosition = function() {
        setPlaytimeBoundaries()
    };
    this.onPointermove = function(xPos, yPos) {
        if (yPos > prevClientHeight - .6 * playtimeCanvasHeight) {
            if (this.isDraggingPlaytime) {
                if (xPos !== lastPointerXPos) {
                    playtimeCanvasPosition += xPos - lastPointerXPos;
                    lastPointerXPos = xPos;
                    setPlaytimeBoundaries();
                    updatePlaytimeIndex(xPos);
                    this.isDraggingPlaytime = -1 !== hoveringPlaytimeIndex;
                    mainHandler.canvasDirty = true;
                }
            } else if (updatePlaytimeIndex(xPos)) mainHandler.canvasDirty = true
        } else this.reset()
    };
    this.reset = function() {
        if (-1 !== hoveringPlaytimeIndex) {
            this.isDraggingPlaytime = false;
            hoveringPlaytimeIndex = -1;
            mainHandler.canvasDirty = true;
        }
    };
    this.onWheel = function(xPos, deltaY) {
        if (-1 !== hoveringPlaytimeIndex) {
            playtimeCanvasPosition += Math.floor(deltaY);
            setPlaytimeBoundaries();
            updatePlaytimeIndex(xPos);
            mainHandler.canvasDirty = true;
        }
    };
    this.mouseDown = function(xPos, yPos) {
        this.onPointermove(xPos, yPos);
        if (-1 !== hoveringPlaytimeIndex) {
            lastPointerXPos = xPos;
            this.isDraggingPlaytime = true
        }
    };
    this.onDragEnd = function() {
        -1 !== hoveringPlaytimeIndex && (this.isDraggingPlaytime = false)
    };
    this.drawCanvasImage = function() {
        mainCanvasCtx.fillStyle = whiteMoreTransparent;
        for (var ptIndex = playtimeEndIndex; ptIndex >= playtimeStartIndex; ptIndex--) drawPlaytimeRect(ptIndex);
        if (isLoadInfoRequested && 0 === playtimeStartIndex) {
            mainCanvasCtx.fillStyle = redMoreOpaque;
            drawPlaytimeRect(0);
        }
        if (-1 !== hoveringPlaytimeIndex) {
            mainCanvasCtx.fillStyle = whiteMoreOpaque;
            drawPlaytimeRect(hoveringPlaytimeIndex);
        }
        if (-1 !== hoveringPlaytimeIndex) {
            mainCanvasCtx.font = fontStyle;
            mainCanvasCtx.textBaseline = bottomAlign;
            var date = new Date;
            date.setTime(currentDate.getTime() - 864E5 * hoveringPlaytimeIndex);
            var month = "month",
                day = "day";
            if ("undefined" !== typeof Intl) {
                month = (new Intl.DateTimeFormat("en-US", {
                    month: "long"
                })).format(date);
                day = (new Intl.DateTimeFormat("en-US", {
                    weekday: "long"
                })).format(date);
            }
            date = day + ", " + date.getUTCDate() + " " + month + " " + date.getFullYear();
            var playtimeInfoLabel = 1 === playTimes[hoveringPlaytimeIndex] ? " second played" : " seconds played";
            playtimeInfoLabel = attackBars.splitNumber(playTimes[hoveringPlaytimeIndex]) + playtimeInfoLabel;
            var dateWidth = Math.floor(mainCanvasCtx.measureText(date).width),
                infoLabelWidth = Math.floor(mainCanvasCtx.measureText(playtimeInfoLabel).width),
                halfWidth = Math.floor(.5 * (dateWidth + fontSize));
            var posX = playtimeCanvasPosition + prevClientWidth - (hoveringPlaytimeIndex + 1) * playtimeCanvasWidth;
            posX = posX < halfWidth ? halfWidth : posX > prevClientWidth - halfWidth ? prevClientWidth - halfWidth : posX;
            var posY = prevClientHeight - Math.floor(playtimeDuration * Math.pow(playTimes[hoveringPlaytimeIndex], playtimeExponent));
            var textHeight = Math.floor(1.1 * fontSize),
                maxPosY = posY > prevClientHeight - textHeight ? prevClientHeight - textHeight : posY;
            mainCanvasCtx.fillStyle = blackMoreOpaque;
            mainCanvasCtx.fillRect(prevClientWidth - infoLabelWidth - fontSize, maxPosY - textHeight, infoLabelWidth + fontSize, textHeight);
            mainCanvasCtx.fillRect(posX - halfWidth, prevClientHeight - textHeight, dateWidth + fontSize, textHeight);
            mainCanvasCtx.fillStyle = whiteRGB2;
            mainCanvasCtx.textAlign = rightAlign;
            mainCanvasCtx.fillText(playtimeInfoLabel, Math.floor(prevClientWidth - .5 * fontSize), maxPosY);
            var labelPosY = maxPosY - 2 * textHeight;
            var index = -1;
            var reverseHoveringPtIndex = playTimes.length - hoveringPlaytimeIndex - 1;
            for (var tsIndex = timeStampLabels.length - 1; 0 <= tsIndex; tsIndex--) {
                if (reverseHoveringPtIndex >= timeStampLabels[tsIndex].count && reverseHoveringPtIndex <= timeStampLabels[tsIndex].range) {
                    if (-1 === index || timeStampLabels[tsIndex].range - timeStampLabels[tsIndex].count < timeStampLabels[index].range - timeStampLabels[index].count) index = tsIndex
                    if (-1 !== index) {
                        reverseHoveringPtIndex = Math.floor(mainCanvasCtx.measureText(timeStampLabels[index].group).width);
                        mainCanvasCtx.fillStyle = blackMoreOpaque;
                        mainCanvasCtx.fillRect(prevClientWidth - reverseHoveringPtIndex - fontSize, labelPosY, reverseHoveringPtIndex + fontSize, textHeight);
                        mainCanvasCtx.fillStyle = whiteRGB2;
                        mainCanvasCtx.fillText(timeStampLabels[index].group, Math.floor(prevClientWidth - .5 * fontSize), labelPosY + textHeight);
                    }
                }
            }
            mainCanvasCtx.textAlign = centerAlign;
            mainCanvasCtx.fillText(date, posX, prevClientHeight);
            mainCanvasCtx.strokeStyle = whiteMore3Transparent;
            mainCanvasCtx.lineWidth = 1;
            mainCanvasCtx.beginPath();
            mainCanvasCtx.moveTo(0, posY);
            mainCanvasCtx.lineTo(prevClientWidth, posY);
            mainCanvasCtx.closePath();
            mainCanvasCtx.stroke()
        }
    }
}

function TroopBar() {
    this.height = this.startingX = 0;
    var fontStyle, troopBarWidth, iTickProgressBarWidth, maxTroopsOwned, troopBarCanvas, troopBarCanvasCtx, shouldUpdate, lastTroops,
        shouldRedBG, greenBGColor, redBGColor, midPt, sizeRatio;
    this.init = function() {
        maxTroopsOwned = humanStartingTroops;
        greenBGColor = "rgba(0,100,0,0.8)";
        redBGColor = "rgba(150,0,0,0.8)";
        shouldRedBG = true;
        shouldUpdate = false;
        lastTroops = troops[myID];
        sizeRatio = 1.2;
        this.setCanvasVariables()
    };
    this.setCanvasVariables = function() {
        troopBarWidth = Math.floor((isZoom ? .305 : .24) * averageDim);
        this.height = Math.floor(.5 + .13 * troopBarWidth);
        troopBarWidth = Math.floor(6 * this.height);
        fontStyle = fontWeightBold + Math.floor(.8 * this.height) + fontSizeArial;
        midPt = Math.floor(.5 * this.height);
        mapBaseCanvasCtx.font = fontStyle;
        iTickProgressBarWidth = Math.floor(1 + .13 * this.height);
        troopBarCanvas = document.createElement("canvas");
        troopBarCanvas.width = troopBarWidth;
        troopBarCanvas.height = this.height;
        troopBarCanvasCtx = troopBarCanvas.getContext("2d", {
            alpha: true
        });
        troopBarCanvasCtx.font = fontStyle;
        troopBarCanvasCtx.textBaseline = middleAlign;
        troopBarCanvasCtx.textAlign = centerAlign;
        this.drawTroopBar()
    };
    this.placeBarOnTopRight = function() {
        return isZoom && mainCanvasWidth < 1.2 * mainCanvasHeight
    };
    this.setStartingPosition = function() {
        this.startingX = this.placeBarOnTopRight() ? prevClientWidth - troopBarWidth - canvasPadding : Math.floor(gameLeaderboard.getGameBoardWidth() + (prevClientWidth - gameLeaderboard.getGameBoardWidth() - gameStatistics.width - troopBarWidth) / 2 - .5 * canvasPadding)
    };
    this.drawCanvas = function() {
        if (shouldUpdate) {
            shouldUpdate = false;
            this.drawTroopBar();
        }
    };
    this.drawTroopBar = function() {
        troopBarCanvasCtx.clearRect(0, 0, troopBarWidth, this.height);
        troopBarCanvasCtx.fillStyle = shouldRedBG ? greenBGColor : redBGColor;
        troopBarCanvasCtx.fillRect(0, 0, troopBarWidth, this.height);
        troopBarCanvasCtx.fillStyle = whiteMoreOpaque;
        this.drawITickProgress();
        this.drawRatioToMaxOwned();
        troopBarCanvasCtx.fillStyle = troops[myID] >= interest.getMaxBeforeRedI(myID) ? redMoreLighterRGB : whiteRGB2;
        troopBarCanvasCtx.fillText(attackBars.splitNumber(lastTroops), Math.floor(troopBarWidth / 2), midPt);
        troopBarCanvasCtx.fillStyle = whiteRGB2;
        troopBarCanvasCtx.fillRect(0, 0, troopBarWidth, 1);
        troopBarCanvasCtx.fillRect(0, 0, 1, this.height);
        troopBarCanvasCtx.fillRect(0, this.height - 1, troopBarWidth, 1);
        troopBarCanvasCtx.fillRect(troopBarWidth - 1, 0, 1, this.height)
    };
    this.drawITickProgress = function() {
        var iTickBarHeight = Math.floor((interest.getFormattedTime() - 1) * this.height / 9);
        //iTickBarHeight = getMin(iTickBarHeight, this.height - l);
        troopBarCanvasCtx.fillRect(0, iTickBarHeight, sizeRatio * iTickProgressBarWidth, this.height - iTickBarHeight);
        troopBarCanvasCtx.fillRect(troopBarWidth - sizeRatio * iTickProgressBarWidth, iTickBarHeight, sizeRatio * iTickProgressBarWidth, this.height - iTickBarHeight)
    };
    this.drawRatioToMaxOwned = function() {
        return 1 //fuck this 
        troopBarCanvasCtx.fillRect(l, this.height - l, Math.floor((troopBarWidth - 2 * l) * troops[myID] / maxTroopsOwned), l)
    };
    this.update = function() {
        if (0 !== isAlive[myID] && 2 !== playerStatus[myID] && lastTroops !== troops[myID]) {
            maxTroopsOwned = getMax(troops[myID], maxTroopsOwned);
            shouldRedBG = troops[myID] > lastTroops && 10 <= troops[myID];
            lastTroops = troops[myID];
            shouldUpdate = true;
        }
    };
    this.drawCanvasImage = function() {
        if (0 !== isAlive[myID] && !inSpawn && 2 !== playerStatus[myID]) mainCanvasCtx.drawImage(troopBarCanvas, this.startingX, canvasPadding)
    }
}
var gameBoardWidth, gameBoardHeight, gameBoardLabelFont, gameBoardFont, gameBoardLabelHeight, landOrder, landIDOrder;

function GameLeaderboard() {
    function drawGameLeaderboard() {
        var bIndex;
        leaderboard.clearRect(0, 0, gameBoardWidth, gameBoardHeight);
        leaderboard.fillStyle = blueDarkMoreOpaque;
        leaderboard.fillRect(0, 0, gameBoardWidth, topBarHeight);
        leaderboard.fillStyle = blackMore2Opaque;
        leaderboard.fillRect(0, topBarHeight, gameBoardWidth, gameBoardHeight - topBarHeight);
        if (landIDOrder[myID] >= boardTopIndex) highlightRow(landIDOrder[myID] - boardTopIndex, greenBrightMoreTransparent)
        if (0 !== landIDOrder[myID] && 0 === boardTopIndex) highlightRow(0, yellowMoreTransparent)
        if (- 1 !== highlightedLandIndex) highlightRow(highlightedLandIndex, whiteMore2Transparent)
        leaderboard.fillStyle = whiteRGB;
        leaderboard.fillRect(0, topBarHeight, gameBoardWidth, 1);
        leaderboard.fillRect(0, 0, gameBoardWidth, gameLeaderboardMargin);
        leaderboard.fillRect(0, 0, gameLeaderboardMargin, gameBoardHeight);
        leaderboard.fillRect(gameBoardWidth - gameLeaderboardMargin, 0, gameLeaderboardMargin, gameBoardHeight);
        leaderboard.fillRect(0, gameBoardHeight - gameLeaderboardMargin, gameBoardWidth, gameLeaderboardMargin);
        leaderboard.font = gameBoardLabelFont;
        leaderboard.textBaseline = middleAlign;
        leaderboard.textAlign = centerAlign;
        leaderboard.fillText(leaderboardLabel, Math.floor(gameBoardWidth / 2), Math.floor(smallPadding + gameBoardLabelHeight / 2));
        var checkAtBottom = landIDOrder[myID] < boardTopIndex + visibleLandCount - 1 ? 1 : 2;
        leaderboard.font = gameBoardFont;
        leaderboard.textAlign = leftAlign;
        for (bIndex = visibleLandCount - checkAtBottom; 0 <= bIndex; bIndex--) {
            setLeaderboardFillColor(landOrder[bIndex + boardTopIndex]);
            fillPlayerLabels(bIndex, bIndex + boardTopIndex, landOrder[bIndex + boardTopIndex]);
        }
        leaderboard.textAlign = rightAlign;
        for (bIndex = visibleLandCount - checkAtBottom; 0 <= bIndex; bIndex--) {
            setLeaderboardFillColor(landOrder[bIndex + boardTopIndex]);
            fillPlayerLand(bIndex, landOrder[bIndex + boardTopIndex]);
        }
        if (2 === checkAtBottom) {
            setLeaderboardFillColor(myID);
            leaderboard.textAlign = leftAlign;
            fillPlayerLabels(visibleLandCount - 1, landIDOrder[myID], myID);
            leaderboard.textAlign = rightAlign;
            fillPlayerLand(visibleLandCount - 1, myID);
        }
        if (0 === boardTopIndex) {
            bIndex = .7 * heightOfRow / sprites.getValueByID(4).height;
            leaderboard.setTransform(bIndex, 0, 0, bIndex, Math.floor(rankXPos + .58 * heightOfRow + .5 * bIndex * sprites.getValueByID(4).width), Math.floor(smallPadding + gameBoardLabelHeight + .4 * heightOfRow));
            leaderboard.imageSmoothingEnabled = true;
            leaderboard.drawImage(sprites.getValueByID(4), -Math.floor(sprites.getValueByID(4).width / 2), -Math.floor(sprites.getValueByID(4).height / 2));
            leaderboard.setTransform(1, 0, 0, 1, 0, 0);
        }
    }

    function setLeaderboardFillColor(id) {
        teamGame && (leaderboard.fillStyle = teamColors.leaderboardColors[teamColors.teamIDs[teamColors.teamArray[id]]])
    }

    function highlightRow(localRowIndex, highlightColor) {
        leaderboard.fillStyle = highlightColor;
        localRowIndex = localRowIndex > visibleLandCount - 1 ? visibleLandCount - 1 : localRowIndex;
        var T = Math.floor((localRowIndex === visibleLandCount - 1 ? 2 : 0 === localRowIndex ? 1.15 : 1) * heightOfRow);
        T = localRowIndex === visibleLandCount - 2 ? Math.floor(topBarHeight + 9.15 * heightOfRow) - Math.floor(topBarHeight + 8.15 * heightOfRow) : T;
        leaderboard.fillRect(0, Math.floor(topBarHeight + (localRowIndex + (0 === localRowIndex ? 0 : .15)) * heightOfRow), gameBoardWidth, T)
    }

    function fillPlayerLabels(yPos, order, id) {
        leaderboard.fillText(orderLabels[order], rankXPos, Math.floor(smallPadding + gameBoardLabelHeight + (yPos + .5) * heightOfRow));
        if (1 === playerStatus[id]) leaderboard.font = fontStyleItalic + gameBoardFont
        leaderboard.fillText(extendedIDs[id] === id ? nicknames[id] : shorternedNames[extendedIDs[id] % maxEntities], nameXPos, Math.floor(smallPadding + gameBoardLabelHeight + (yPos + .5) * heightOfRow));
        if (0 !== playerStatus[id]) leaderboard.font = gameBoardFont
    }

    function fillPlayerLand(yPos, id) {
        leaderboard.fillText(land[id], landXPos, Math.floor(smallPadding + gameBoardLabelHeight + (yPos + .5) * heightOfRow))
    }

    function getRowIndex(yPos) {
        yPos -= canvasPadding + topBarHeight;
        if (0 > yPos) return Math.floor(yPos / heightOfRow) - 1;
        if (yPos < (visibleLandCount - 1) * heightOfRow) return Math.floor(yPos / heightOfRow);
        if (yPos < gameBoardHeight - topBarHeight) return visibleLandCount - 1;
        yPos -= gameBoardHeight - topBarHeight;
        return visibleLandCount + Math.floor(yPos / heightOfRow)
    }

    function isInBoardCanvas(xPos, yPos) {
        return xPos >= canvasPadding && xPos < canvasPadding + gameBoardWidth && yPos >= canvasPadding && yPos < canvasPadding + gameBoardHeight
    }
    var visibleLandCount, leaderboardCanvas, leaderboard, maxWidthBeforeShorterned, const_maxEntities, smallPadding, verticalPadding, topBarHeight, heightOfRow, rankXPos, nameXPos, landXPos, shorternedNames, extendedIDs, nicknameWidths, leaderboardLabel, orderLabels, currentLandOwners, currentLand, shouldUpdate, highlightedLandIndex, boardTopIndex, mouseDownTime, isPointerDown, currentRowIndex, lastRowIndex;
    this.init = function() {
        var idIndex, O;
        mouseDownTime = 0;
        isPointerDown = false;
        lastRowIndex = currentRowIndex = 0;
        leaderboardLabel = "LEADERBOARD";
        highlightedLandIndex = -1;
        visibleLandCount = isZoom ? 6 : 10;
        boardTopIndex = 0;
        shouldUpdate = false;
        currentLandOwners = new Uint16Array(visibleLandCount + 1);
        currentLand = new Uint32Array(visibleLandCount + 1);
        const_maxEntities = maxEntities;
        landOrder = new Uint16Array(const_maxEntities);
        landIDOrder = new Uint16Array(const_maxEntities);
        for (idIndex = const_maxEntities - 1; 0 <= idIndex; idIndex--) landOrder[idIndex] = idIndex, landIDOrder[idIndex] = idIndex;
        this.setCanvasVariables(true);
        shorternedNames = [];
        extendedIDs = new Uint16Array(maxEntities);
        nicknameWidths = new Uint16Array(maxEntities);
        var T = Math.floor(gameBoardWidth - nameXPos - rankXPos - maxWidthBeforeShorterned),
            extendedNameCount = 0;
        orderLabels = Array(maxEntities);
        leaderboard.font = gameBoardFont;
        for (idIndex = maxEntities - 1; 0 <= idIndex; idIndex--) {
            orderLabels[idIndex] = idIndex + 1 + ".";
            extendedIDs[idIndex] = idIndex;
            nicknameWidths[idIndex] = Math.floor(leaderboard.measureText(nicknames[idIndex]).width); 
            if (nicknameWidths[idIndex] > T) {
                var extendedNickname = nicknames[idIndex];
                for (O = nicknames[idIndex].length - 1; 1 <= O && !(extendedNickname = extendedNickname.substring(0, O), nicknameWidths[idIndex] = Math.floor(leaderboard.measureText(extendedNickname + "...").width), nicknameWidths[idIndex] <= T); O--);
                extendedNickname += "...";
                shorternedNames.push(extendedNickname);
                extendedIDs[idIndex] = maxEntities + extendedNameCount++
            }
            drawGameLeaderboard()
        }
            
    };
    this.setCanvasVariables = function(S) {
        isZoom ? (gameBoardWidth = Math.floor(.335 * averageDim), gameBoardHeight = Math.floor(visibleLandCount * gameBoardWidth / 8)) : (gameBoardWidth = Math.floor(.27 * averageDim), gameBoardHeight = Math.floor(visibleLandCount * gameBoardWidth / 10));
        gameBoardWidth = Math.floor(.97 * gameBoardWidth);
        leaderboardCanvas = document.createElement("canvas");
        leaderboardCanvas.width = gameBoardWidth;
        leaderboardCanvas.height = gameBoardHeight;
        leaderboard = leaderboardCanvas.getContext("2d", {
            alpha: true
        });
        smallPadding = .025 * gameBoardWidth;
        gameBoardLabelHeight = .16 * gameBoardWidth;
        verticalPadding = 0 * gameBoardWidth;
        topBarHeight = Math.floor(.45 * smallPadding + gameBoardLabelHeight);
        heightOfRow = (gameBoardHeight - gameBoardLabelHeight - 2 * smallPadding - verticalPadding) / visibleLandCount;
        gameBoardLabelFont = fontWeightBold + Math.floor(.55 * gameBoardLabelHeight) + fontSizeArial;
        gameBoardFont = Math.floor(.6 * heightOfRow) + fontSizeArial;
        leaderboard.font = gameBoardFont;
        rankXPos = Math.floor(leaderboard.measureText("555").width);
        nameXPos = Math.floor(leaderboard.measureText("555600.00").width);
        maxWidthBeforeShorterned = Math.floor(leaderboard.measureText("00920600").width);
        leaderboard.font = gameBoardLabelFont;
        landXPos = gameBoardWidth - rankXPos;
        if (!S) {
            leaderboard.font = gameBoardFont;
            for (var idIndex = maxEntities - 1; 0 <= idIndex; idIndex--) {
                nicknameWidths[idIndex] = Math.floor(leaderboard.measureText(extendedIDs[idIndex] === idIndex ? nicknames[idIndex] : shorternedNames[extendedIDs[idIndex] % maxEntities]).width);
            }
            drawGameLeaderboard()
        }
    };
    this.getGameBoardWidth = function() {
        return gameBoardWidth
    };
    this.drawCanvas = function(ignoreFramerate) {
        if (shouldUpdate) {
            if (ignoreFramerate || 14 >= frameRate && 0 === mainHandler.getTicksElapsed() % 6 || 14 < frameRate) {
                shouldUpdate = false;
                drawGameLeaderboard();
            }
        }
    };
    this.update = function() {
        for (var eIndex = const_maxEntities - 1; 0 <= eIndex; eIndex--) {
            if (0 === isAlive[landOrder[eIndex]]) {
                var currentIndex = eIndex,
                    currentLand = landOrder[currentIndex];
                for (const_maxEntities--; currentIndex < const_maxEntities; currentIndex++) {
                    landOrder[currentIndex] = landOrder[currentIndex + 1];
                    landIDOrder[landOrder[currentIndex]] = currentIndex;
                }
                landOrder[const_maxEntities] = currentLand;
                landIDOrder[landOrder[const_maxEntities]] = const_maxEntities
            }
        }
        for (eIndex = 0; eIndex < const_maxEntities - 1; eIndex++) {
            if (land[landOrder[eIndex]] < land[landOrder[eIndex + 1]]) {
                var temp = landOrder[eIndex];
                landOrder[eIndex] = landOrder[eIndex + 1];
                landOrder[eIndex + 1] = temp;
                landIDOrder[landOrder[eIndex]] = eIndex;
                landIDOrder[landOrder[eIndex + 1]] = eIndex + 1;
            }
        }
        loop: {
            var shouldUpdateNow = shouldUpdate;
            shouldUpdate = true;
            for (currentIndex = currentLand = landIDOrder[myID] >= visibleLandCount - 1 ? visibleLandCount - 2 : visibleLandCount - 1; 0 <= currentIndex; currentIndex--) {
                if (currentLandOwners[currentIndex] !== landOrder[currentIndex] || currentLand[currentIndex] !== land[landOrder[currentIndex]]) break loop;
            }
            if (currentLand !== visibleLandCount - 2 || currentLandOwners[visibleLandCount] === landIDOrder[myID] && currentLand[visibleLandCount] === land[myID]) shouldUpdate = shouldUpdateNow
        }
        for (var lIndex = visibleLandCount - 1; 0 <= lIndex; lIndex--) {
            currentLandOwners[lIndex] = landOrder[lIndex];
            currentLand[lIndex] = land[landOrder[lIndex]];
        }
        currentLandOwners[visibleLandCount] = landIDOrder[myID];
        currentLand[visibleLandCount] = land[myID]
    };
    this.mouseDown = function(xPos, yPos) {
        if (isInBoardCanvas(xPos, yPos)) {
            mouseDownTime = mainHandler.time;
            isPointerDown = true;
            currentRowIndex = lastRowIndex = getRowIndex(yPos);
            if (isTouch) {
                var currentVisibleRowIndex = rangeClamp(-1, lastRowIndex, visibleLandCount);
                currentVisibleRowIndex = currentVisibleRowIndex === visibleLandCount ? -1 : currentVisibleRowIndex;
                if (highlightedLandIndex !== currentVisibleRowIndex) {
                    highlightedLandIndex = currentVisibleRowIndex;
                    drawGameLeaderboard();
                    mainHandler.canvasDirty = true;
                }
            }
            return true
        }
        return false
    };
    this.onPointermove = function(xPos, yPos) {
        var rowIndex = getRowIndex(yPos);
        if (isPointerDown) {
            var oldBoardTopIndex = boardTopIndex;
            boardTopIndex += currentRowIndex - rowIndex;
            boardTopIndex = rangeClamp(0, boardTopIndex, maxEntities - visibleLandCount);
            if (boardTopIndex !== oldBoardTopIndex) {
                currentRowIndex = rowIndex;
                rowIndex = rangeClamp(-1, rowIndex, visibleLandCount);
                highlightedLandIndex = rowIndex = rowIndex !== visibleLandCount && isInBoardCanvas(xPos, yPos) ? rowIndex : -1;
                drawGameLeaderboard();
                mainHandler.canvasDirty = true;
            }
            return true
        }
        rowIndex = rangeClamp(-1, rowIndex, visibleLandCount);
        rowIndex = rowIndex === visibleLandCount || !isInBoardCanvas(xPos, yPos) || isTouch ? -1 : rowIndex;
        return highlightedLandIndex !== rowIndex ? (highlightedLandIndex = rowIndex, drawGameLeaderboard(), mainHandler.canvasDirty = true) : false
    };
    this.onDragEnd = function(xPos, yPos) {
        if (!isPointerDown) return false;
        isPointerDown = false;
        var rowIndex = getRowIndex(yPos);
        if (isTouch && -1 !== highlightedLandIndex) {
            highlightedLandIndex = -1;
            drawGameLeaderboard();
            mainHandler.canvasDirty = true;
        }
        if (350 > mainHandler.time - mouseDownTime && lastRowIndex === rowIndex ) {
            rowIndex = rangeClamp(-1, rowIndex, visibleLandCount);
            rowIndex = rowIndex !== visibleLandCount && isInBoardCanvas(xPos, yPos) ? rowIndex : -1;
            if (-1 !== rowIndex) {
                var id = landOrder[rowIndex + boardTopIndex];
                rowIndex === visibleLandCount - 1 && landIDOrder[myID] >= boardTopIndex + visibleLandCount - 1 && (id = myID);
                0 !== isAlive[id] && autoCamera.hoverTo(id, 800, false, 0);
            }
        }
        return true
    };
    this.onWheel = function(xPos, yPos, deltaY) {
        if (isPointerDown) return false
        else if (isInBoardCanvas(xPos, yPos)) {
            var rowIndex = getRowIndex(yPos);
            var myLandIndex = rangeClamp(-1, rowIndex, visibleLandCount);
            myLandIndex = myLandIndex === visibleLandCount || isTouch ? -1 : myLandIndex;
            if (0 < deltaY) {
                if (boardTopIndex < maxEntities - visibleLandCount) {
                    boardTopIndex++;
                    highlightedLandIndex = myLandIndex;
                    drawGameLeaderboard();
                    mainHandler.canvasDirty = true;
                }
            } else if (0 < boardTopIndex) {
                boardTopIndex--;
                highlightedLandIndex = myLandIndex;
                drawGameLeaderboard();
                mainHandler.canvasDirty = true;
            }
            return true
        } else return false
    };
    this.drawCanvasImage = function() {
        mainCanvasCtx.drawImage(leaderboardCanvas, canvasPadding, canvasPadding)
    }
}

function GameStatistics() {
    function drawStatsBox() {
        statBoxCanvasCtx.clearRect(0, 0, gameStatistics.width, gameStatistics.height);
        statBoxCanvasCtx.fillStyle = blackMoreOpaque;
        statBoxCanvasCtx.fillRect(0, 0, gameStatistics.width, gameStatistics.height);
        statBoxCanvasCtx.fillStyle = greenBrightMoreOpaque;
        statBoxCanvasCtx.fillRect(0, gameStatistics.height - spawnTimerBarHeight - 1, Math.floor((0 < spawnProgress ? spawnProgress : Math.sqrt(stats[4] / stats[3])) * gameStatistics.width), spawnTimerBarHeight);
        statBoxCanvasCtx.fillStyle = whiteRGB2;
        statBoxCanvasCtx.fillRect(0, 0, gameStatistics.width, 1);
        statBoxCanvasCtx.fillRect(0, 0, 1, gameStatistics.height);
        statBoxCanvasCtx.fillRect(gameStatistics.width - 1, 0, 1, gameStatistics.height);
        statBoxCanvasCtx.fillRect(0, gameStatistics.height - 1, gameStatistics.width, 1);
        statBoxCanvasCtx.fillRect(0, gameStatistics.height - spawnTimerBarHeight - 1, gameStatistics.width, 1);
        for (var vertShift = 0, statIndex = 0; statIndex < statLabels.length; statIndex++) {
            if (isDisplayed[statIndex]) {
                statBoxCanvasCtx.textAlign = leftAlign;
                var labelYOffset = Math.floor((oldBoxHeight - spawnTimerBarHeight + 2 * labelMargin) * (statIndex - vertShift + 1) / (statLabels.length + 1) - .7 * labelMargin);
                statBoxCanvasCtx.fillText(statLabels[statIndex], labelXOffset, labelYOffset);
                statBoxCanvasCtx.textAlign = rightAlign;
                if (5 === statIndex && 0 !== isAlive[myID] && troops[myID] >= interest.getMaxBeforeRedI(myID)) {
                    statBoxCanvasCtx.fillStyle = orangeRGB;
                    statBoxCanvasCtx.fillText(getStat(statIndex), gameStatistics.width - labelXOffset, labelYOffset);
                    statBoxCanvasCtx.fillStyle = whiteRGB2;
                } else statBoxCanvasCtx.fillText(getStat(statIndex), gameStatistics.width - labelXOffset, labelYOffset);
            } else vertShift++;
        }
    }

    function getStat(statIndex) {
        if (statIndex < 3) {
            return stats[statIndex].toString();
        } else if (statIndex === 3 || statIndex === 4 || statIndex === 5) {
            return gameStatistics.getPercentage(stats[statIndex] / 100, 2);
        } else if (statIndex < 7) {
            return attackBars.splitNumber(stats[statIndex]);
        } else {
            return gameStatistics.getFormattedTime(stats[7]);
        }
    }

    function checkWinCondition(largestLand) {
        largestLand = divideFloor(1E4 * largestLand, currentLandPixelsCount);
        if (8 === gamemode) {
            if (0 === isAlive[0]) endGame.endGame(1)
            else if (0 === isAlive[1]) endGame.endGame(0)
        }
        if (largestLand >= stats[3]) {
            endGame.endGame(-1);
            stats[4] = -1;
        }
        if (stats[4] !== largestLand) {
            updateCount++;
            stats[4] = largestLand;
        }
    }

    function checkPotentialAdvances() {
        for (var entityIndex = aliveCount - 1; 0 <= entityIndex; entityIndex--)
            if (0 < potentialBorderAdvances[aliveEntities[entityIndex]].length) return false;
        return true
    }

    function updateStatLand() {
        if (land[myID] !== stats[6]) {
            stats[6] = land[myID];
            updateCount++;
        }
    }
    var statBoxCanvas, statBoxCanvasCtx, xOffset, yOffsetFromRight, spawnTimerBarHeight, oldBoxHeight, labelXOffset, labelMargin, fontStyle, fontSize, updateCount,
        statLabels, stats, isDisplayed, myIncome, spawnProgress, earliestPacketTime, hiddenStatCount, thresholdLandToWin;
    this.init = function() {
        spawnProgress = earliestPacketTime = 0;
        statLabels = Array(8);
        statLabels[0] = "Humans";
        statLabels[1] = singleplayer ? "Players" : "Bots";
        statLabels[2] = "Spectators";
        statLabels[3] = "Threshold";
        statLabels[4] = "Occupation";
        statLabels[5] = "Interest";
        statLabels[6] = "Income";
        statLabels[7] = "Time";
        thresholdLandToWin = currentLandPixelsCount - divideFloor(currentLandPixelsCount, 100);
        stats = Array(statLabels.length);
        stats[0] = singleplayer ? 0 : playerCount;
        stats[1] = singleplayer ? aliveCount : botCount;
        stats[2] = spectatorCount;
        stats[3] = 1E4;
        stats[4] = divideFloor(1E4 * land[0], currentLandPixelsCount);
        stats[5] = 700;
        stats[6] = 0;
        updateStatLand();
        stats[7] = 0;
        myIncome = getStat(6);
        isDisplayed = Array(statLabels.length);
        for (var statIndex = statLabels.length - 1; 0 <= statIndex; statIndex--) isDisplayed[statIndex] = true;
        hiddenStatCount = 0;
        singleplayer ? (isDisplayed[0] = false, isDisplayed[2] = false, isDisplayed[3] = false, hiddenStatCount = 3) : (isDisplayed[3] = false, hiddenStatCount = 1);
        updateCount = 0;
        this.setCanvasVariables()
    };
    this.setCanvasVariables = function() {
        this.width = Math.floor((isZoom ? .1646 : .126) * averageDim);
        this.height = Math.floor(1.18 * this.width);
        spawnTimerBarHeight = Math.floor(.04 * this.width);
        labelXOffset = Math.floor(.05 * this.width);
        labelMargin = .04 * this.width;
        oldBoxHeight = this.height;
        this.height -= Math.floor(hiddenStatCount * (this.height - 2 * spawnTimerBarHeight) / statLabels.length);
        fontSize = Math.floor(.55 * (oldBoxHeight - spawnTimerBarHeight) / statLabels.length);
        fontStyle = fontWeightBold + fontSize + fontSizeArial;
        statBoxCanvas = document.createElement("canvas");
        statBoxCanvas.width = this.width;
        statBoxCanvas.height = this.height;
        statBoxCanvasCtx = statBoxCanvas.getContext("2d", {
            alpha: true
        });
        statBoxCanvasCtx.font = fontStyle;
        statBoxCanvasCtx.textBaseline = middleAlign;
        statBoxCanvasCtx.lineWidth = 1;
        this.setYOffset();
        this.setStartingPosition();
        troopBar.setStartingPosition();
        drawStatsBox()
    };
    this.setStartingPosition = function() {
        xOffset = prevClientWidth - this.width - canvasPadding
    };
    this.shiftBoxUpAfterDeath = function() {
        yOffsetFromRight = canvasPadding
    };
    this.setYOffset = function() {
        yOffsetFromRight = canvasPadding + (troopBar.placeBarOnTopRight() && 0 !== isAlive[myID] && !inSpawn ? troopBar.height + canvasPadding : 0)
    };
    this.drawCanvas = function(ignoreFramerate) {
        0 < updateCount && (ignoreFramerate || 12 > frameRate && 100 <= updateCount || 12 <= frameRate) && (updateCount = 0, drawStatsBox())
    };
    this.getUnformattedTime = function() {
        return stats[7]
    };
    this.getFormattedTime = function(time) {
        var minutes = Math.floor(time / 1E3 / 60);
        var seconds = Math.floor((time - 6E4 * minutes) / 1E3);
        return 10 > seconds ? minutes + ":0" + seconds : minutes + ":" + seconds
    };
    this.getPercentage = function(number, digits) {
        return number.toFixed(digits) + "%"
    };
    this.update = function() {
        if (isDisplayed[0] && playersIngame - spectatorCount !== stats[0]) {
            stats[0] = playersIngame - spectatorCount;
            updateCount++;
        }
        aliveCount - stats[0] !== stats[1] && (stats[1] = aliveCount - stats[0], updateCount++);
        this.updateSpectatorCount();
        if (teamGame) {
            var largestLand = teams.getLargestTeamLand();
            if (largestLand >= thresholdLandToWin && checkPotentialAdvances()) {
                endGame.endGame(-1);
                checkWinCondition(teams.getLargestTeamLand());
            } else checkWinCondition(largestLand)
        } else {
            largestLand = land[landOrder[0]];
            if (largestLand >= thresholdLandToWin && checkPotentialAdvances()) endGame.endGame(-1);
            checkWinCondition(largestLand);
        }
        var interestRate = interest.getInterestRate(myID);
        if (interestRate !== stats[5]) {
            stats[5] = interestRate;
            updateCount++;
        }
        updateStatLand();
        stats[7] += mainHandler.getTickInterval();
        interestRate = getStat(7);
        if (myIncome !== interestRate) {
            myIncome = interestRate;
            updateCount += 100
        }
    };
    this.updateSpectatorCount = function() {
        if (isDisplayed[2] && spectatorCount !== stats[2]) {
            stats[2] = spectatorCount;
            updateCount++;
        }
    };
    this.receivedSpawnActions = function(packetsReceived) {
        if (packetsReceived === spawnTime) {
            spawnProgress = 0;
            drawStatsBox();
            return false;
        }
        if (-1 === packetsReceived && 0 === earliestPacketTime) return false;
        var oldSpawnProgress = spawnProgress,
            currentTime = performance.now();
        if (0 <= packetsReceived) {
            var timeProgressed = currentTime - 392 * packetsReceived;
            earliestPacketTime = 0 === packetsReceived || timeProgressed < earliestPacketTime ? timeProgressed : earliestPacketTime
        }
        spawnProgress = (currentTime - earliestPacketTime) / (392 * spawnTime);
        spawnProgress = 1 < spawnProgress ? 1 : spawnProgress;
        drawStatsBox();
        return spawnProgress !== oldSpawnProgress
    };
    this.drawCanvasImage = function() {
        mainCanvasCtx.drawImage(statBoxCanvas, xOffset, yOffsetFromRight)
    }
}

function GameResultBox() {
    var gameEnded, gameResult, boxCanvasWidth, boxCanvasHeight, spriteScale, topPadding, rightPadding, fadeAlpha, gameResultCanvas, lastUpdate;
    this.ticksElapsedWhenDeath = -1;
    this.init = function() {
        gameEnded = false;
        boxCanvasHeight = 0;
        spriteScale = .61;
        topPadding = .07;
        rightPadding = .09;
        lastUpdate = fadeAlpha = 0;
        this.ticksElapsedWhenDeath = -1
    };
    this.setCanvasVariables = function() {
        if (gameEnded) {
            boxCanvasWidth = isZoom ? Math.floor(.69 * averageDim) : Math.floor(.5 * averageDim);
            boxCanvasWidth = getMin(boxCanvasWidth, getMax(mainCanvasWidth - 2 * canvasPadding, 10));
            boxCanvasWidth = getMin(boxCanvasWidth, Math.floor(3.57 * getMax(mainCanvasHeight - 2 * canvasPadding, 3)));
            boxCanvasHeight = Math.floor(.28 * boxCanvasWidth);
            gameResultCanvas = document.createElement("canvas");
            gameResultCanvas.width = boxCanvasWidth;
            gameResultCanvas.height = boxCanvasHeight;
            var gameResultCanvasCtx = gameResultCanvas.getContext("2d", {
                    alpha: true
                }),
                marginLength = Math.floor(1 + boxCanvasHeight / 40);
            gameResultCanvasCtx.clearRect(0, 0, boxCanvasWidth, boxCanvasHeight);
            gameResultCanvasCtx.fillStyle = blackMoreOpaque;
            gameResultCanvasCtx.fillRect(marginLength, marginLength, boxCanvasWidth - 2 * marginLength, boxCanvasHeight - 2 * marginLength);
            gameResultCanvasCtx.lineJoin = "bevel";
            gameResultCanvasCtx.lineWidth = 2 * marginLength;
            gameResultCanvasCtx.strokeStyle = whiteRGB2;
            gameResultCanvasCtx.strokeRect(marginLength, marginLength, boxCanvasWidth - 2 * marginLength, boxCanvasHeight - 2 * marginLength);
            gameResultCanvasCtx.imageSmoothingEnabled = true;
            var gameResultSprite = sprites.getValueByID(gameResult),
                spriteHeight = gameResultSprite.height,
                spriteSize = spriteScale * boxCanvasHeight / spriteHeight;
            gameResultCanvasCtx.setTransform(spriteSize, 0, 0, spriteSize, Math.floor((boxCanvasWidth - spriteSize * gameResultSprite.width) / 2), Math.floor((boxCanvasHeight - spriteSize * spriteHeight) / 2));
            gameResultCanvasCtx.drawImage(gameResultSprite, 0, 0);
            gameResultCanvasCtx.setTransform(1, 0, 0, 1, Math.floor(boxCanvasWidth - rightPadding * boxCanvasHeight - topPadding * boxCanvasHeight - marginLength), Math.floor(marginLength + topPadding * boxCanvasHeight));
            marginLength = Math.floor(rightPadding * boxCanvasHeight);
            gameResultCanvasCtx.lineWidth = Math.floor(1 + boxCanvasHeight / 80);
            gameResultCanvasCtx.strokeStyle = whiteRGB2;
            gameResultCanvasCtx.beginPath();
            gameResultCanvasCtx.moveTo(0, 0);
            gameResultCanvasCtx.lineTo(marginLength, marginLength);
            gameResultCanvasCtx.moveTo(0, marginLength);
            gameResultCanvasCtx.lineTo(marginLength, 0);
            gameResultCanvasCtx.stroke();
            gameResultCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
        }
    };
    this.show = function(didWeWin, didFadeIn) {
        if (!gameEnded) {
            gameResult = didWeWin ? 1 : 2;
            gameEnded = true;
            this.setCanvasVariables();
            playerActions.end();
            if (!(customJSON.isCustomJSON && customJSON.data.replay)) attackRatioBar.toggleVisibilityOff();
            lastUpdate = mainHandler.time;
            if (-1 === this.ticksElapsedWhenDeath) this.ticksElapsedWhenDeath = mainHandler.getTicksElapsed();
            if (didFadeIn) fadeAlpha = 1;
            else fadeAlpha = 0;
        }
    };
    this.update = function() {
        if (gameEnded && fadeAlpha < 1) {
            fadeAlpha += 5E-4 * (mainHandler.time - lastUpdate);
            fadeAlpha = fadeAlpha > 1 ? 1 : fadeAlpha;
            lastUpdate = mainHandler.time;
            mainHandler.canvasDirty = true;
        }
    };
    this.mouseDown = function(xPos, yPos) {
        if (!gameEnded || 0 >= fadeAlpha) return false;
        xPos -= Math.floor((prevClientWidth - boxCanvasWidth) / 2);
        yPos -= prevClientHeight - boxCanvasHeight - 2 * canvasPadding;
        if (0 > xPos || 0 > yPos || xPos > boxCanvasWidth || yPos > boxCanvasHeight) return false;
        xPos > boxCanvasWidth - boxCanvasHeight / 3 && yPos < boxCanvasHeight / 3 && (gameEnded = false, mainHandler.canvasDirty = true);
        return true
    };
    this.drawCanvasImage = function() {
        if (!gameEnded || 0 >= fadeAlpha) return;
        mainCanvasCtx.globalAlpha = fadeAlpha;
        mainCanvasCtx.drawImage(gameResultCanvas, Math.floor((prevClientWidth - boxCanvasWidth) / 2), prevClientHeight - boxCanvasHeight - 2 * canvasPadding);
        mainCanvasCtx.globalAlpha = 1;
    }
}

function PlayerAura() {
    function drawAura(id, depth, minX, maxX, minY, maxY, scale) {
        if (0 !== isAlive[id] && 0 !== land[id]) {
            minX = prevClientWidth * ((xMin[id] + xMax[id] + 1) / 2 - minX) / (minY - minX) - .5 * depth;
            maxX = prevClientHeight * ((yMin[id] + yMax[id] + 1) / 2 - maxX) / (maxY - maxX) - .5 * depth;
            if (minX <= prevClientWidth && maxX <= prevClientHeight && minX >= -depth && maxX >= -depth) {
                mainCanvasCtx.setTransform(mainScaleFactor * scale, 0, 0, mainScaleFactor * scale, minX, maxX);
                mainCanvasCtx.drawImage(auraImages[teamGame ? teamColors.teamArray[id] : id < playerCount ? 1 : 0], 0, 0);
            }
        }
    }
    var visible, auraImages, diameter, getTicksElapsed;
    this.init = function() {
        var teamIndex;
        auraImages = [];
        visible = false;
        if (inSpawn) {
            getTicksElapsed = 0;
            diameter = 63;
            visible = true;
            if (teamGame) {
                for (teamIndex = 0; teamIndex <= teamCount; teamIndex++) auraImages.push(this.setAuraCanvas(teamColors.auraColors[teamColors.teamIDs[teamIndex]], diameter));
            } else {
                auraImages.push(this.setAuraCanvas(teamColors.auraColors[0], diameter));
                auraImages.push(this.setAuraCanvas(teamColors.auraColors[4], diameter));
            }
        }
    };
    this.update = function() {
        if (visible && 349 === ++getTicksElapsed) {
            auraImages = [];
            visible = false;
        }
    };
    this.setAuraCanvas = function(color, param_diameter) {
        var auraCanvas = document.createElement("canvas");
        auraCanvas.width = param_diameter;
        auraCanvas.height = param_diameter;
        var auraCanvasCtx = auraCanvas.getContext("2d", {
            alpha: true
        });
        auraCanvasCtx.clearRect(0, 0, param_diameter, param_diameter);
        var auraCanvasImageData = auraCanvasCtx.getImageData(0, 0, param_diameter, param_diameter),
            auraCanvasImageDataArray = auraCanvasImageData.data,
            xIndex, yIndex, radius = Math.floor(param_diameter / 2),
            maxDistSquared = 1 + radius * radius;
        for (xIndex = param_diameter - 1; 0 <= xIndex; xIndex--) {
            for (yIndex = param_diameter - 1; 0 <= yIndex; yIndex--) {
                var distSquared = (xIndex - radius) * (xIndex - radius) + (yIndex - radius) * (yIndex - radius);
                var pIndex = 4 * (yIndex * param_diameter + xIndex);
                auraCanvasImageDataArray[pIndex] = color[0];
                auraCanvasImageDataArray[pIndex + 1] = color[1];
                auraCanvasImageDataArray[pIndex + 2] = color[2];
                distSquared = Math.floor((maxDistSquared - distSquared) * color[3] / maxDistSquared);
                auraCanvasImageDataArray[pIndex + 3] = 0 < distSquared ? distSquared : 0
            }
        }
        auraCanvasCtx.putImageData(auraCanvasImageData, 0, 0);
        return auraCanvas
    };
    this.drawCanvasImage = function() {
        if (visible) {
            var idIndex;
            mainCanvasCtx.imageSmoothingEnabled = true;
            mainCanvasCtx.globalAlpha = 1 - (160 < getTicksElapsed ? (getTicksElapsed - 160) / 190 : 0);
            var minX = viewportX / mainScaleFactor,
                maxX = viewportY / mainScaleFactor,
                minY = (prevClientWidth + viewportX) /
                mainScaleFactor,
                maxY = (prevClientHeight + viewportY) / mainScaleFactor;
            var scale = .25;
            var depth = diameter * mainScaleFactor * scale;
            for (idIndex = maxEntities - 1; idIndex >= playerCount; idIndex--) drawAura(idIndex, depth, minX, maxX, minY, maxY, scale);
            scale = .5;
            depth = diameter * mainScaleFactor * scale;
            for (idIndex = playerCount - 1; 0 <= idIndex; idIndex--) drawAura(idIndex, depth, minX, maxX, minY, maxY, scale);
            mainCanvasCtx.globalAlpha = 1;
            mainCanvasCtx.imageSmoothingEnabled = 3 > mainScaleFactor;
            mainCanvasCtx.setTransform(mainScaleFactor, 0, 0, mainScaleFactor, 0, 0)
        }
    }
}

function processAttack(authorID, targetID, ratio) {
    if (!(0 === isAlive[authorID] || 0 > ratio || 1E3 < ratio || 2 === playerStatus[authorID])) {
        var amount = divideFloor(ratio * troops[authorID], 1E3);
        if (10 === gamemode && targetID < playerCount && 2 !== playerStatus[targetID]) amount = antiFullSend.reduceAmount(authorID, amount)
        if (teamGame && targetID < maxEntities && !isNotTeamate(authorID, targetID)) processDonation(authorID, targetID, amount);
        else {
            if (targetID < maxEntities && 0 === isAlive[targetID]) targetID = maxEntities
            var tax = divideFloor(3 * troops[authorID], 256);
            amount -= 500 <= ratio ? tax : 0;
            if (!(amount <= neutralLandCost) && attacks.isUnderAttackCap(authorID)) {
                var oldPotentialAdvancesLength = potentialBorderAdvances[authorID].length;
                targetID === maxEntities ? botAddTakableNeutralPixelsToAdvances(authorID) : botAddTakableTargetPixelsToAdvance(authorID, targetID);
                if (0 !== oldPotentialAdvancesLength || 0 !== potentialBorderAdvances[authorID].length) {
                    if (teamGame) canReceiveBotDonations[authorID] = 1
                    if (authorID === myID) {
                        statisticNumbers.numbers[0] += 500 <= ratio ? ratio - 12 : ratio;
                        statisticNumbers.numbers[1]++;
                        statisticNumbers.numbers[12] += tax;
                        statisticNumbers.numbers[13] += amount
                    }
                    takePixelsAndChangeToMoving(oldPotentialAdvancesLength, authorID);
                    attacks.set(authorID, amount, targetID);
                    troops[authorID] -= amount + tax;
                    speed.addEntry(authorID, false)
                }
            }
        }
        if (authorID == myID && typeof(modHandler) == "object" && modHandler.bot == 1) {
            var paIndex = cheat.pending.findIndex(action => action.targetID == targetID && action.ratio == ratio);
            if (paIndex != -1) cheat.pending.splice(paIndex)
        }
    }
}

function processSendBoat(id, closestPIndex, targetPIndex, amount) {
    var boatID, tax;
    if (10 === gamemode && id < playerCount) amount = antiFullSend.reduceAmount(id, amount)
    if (amount <= neutralLandCost || !attacks.isUnderAttackCap(id)) return false;
    boatID = boatSpeed.addEntry(id, closestPIndex, targetPIndex);
    if (0 === boatID) return false;
    tax = divideFloor(3 * troops[id], 128);
    amount >= divideFloor(troops[id], 2) && (amount -= tax);
    id === myID && (statisticNumbers.numbers[12] += tax);
    attacks.addBoat(id, amount, boatID);
    troops[id] -= amount + tax;
    return true
}

function processDonation(authorID, targetID, amount) {
    if (!(!teamGame || 0 === isAlive[authorID] || 0 === isAlive[targetID] || 0 > amount || amount > troops[authorID] || authorID === targetID || 
        isNotTeamate(authorID, targetID) || authorID < playerCount && targetID < playerCount && 7 > gamemode && 1071 > mainHandler.getTicksElapsed())) {
        
        var tax = divideFloor(troops[authorID], 16);
        amount -= amount >= divideFloor(troops[authorID], 2) ? tax : 0;
        var maxReceivableAmount = land[targetID] * maxTroopsToLandRatio - troops[targetID];
        if (0 < maxReceivableAmount) {
            amount = amount > maxReceivableAmount ? maxReceivableAmount : amount;
            if (authorID === myID) {
                announcements.giveDonation(amount, targetID);
                statisticNumbers.numbers[12] += tax;
                statisticNumbers.numbers[16] += amount;
            }
            if (targetID === myID) {
                announcements.receiveDonation(amount, authorID);
                statisticNumbers.numbers[10] += amount;
            }
            troops[authorID] -= amount + tax;
            troops[targetID] += amount;
        }
    }
}

function MapUpdate() {
    this.hasChanged = this.shouldUpdate = this.needsUpdate = false;
    this.updateBounds = [0, 0, 0, 0];
    this.updateMapCanvas = function() {
        this.hasChanged = this.hasChanged || this.shouldUpdate;
        if (this.shouldUpdate || this.needsUpdate && this.hasChanged) {
            var viewportLeftCoord = viewport.viewportCoords[0],
                viewportTopCoord = viewport.viewportCoords[1],
                viewportRightCoord = viewport.viewportCoords[2],
                viewportBottomCoord = viewport.viewportCoords[3];
            viewportLeftCoord = viewportLeftCoord < this.updateBounds[0] ? this.updateBounds[0] : viewportLeftCoord;
            viewportTopCoord = viewportTopCoord < this.updateBounds[1] ? this.updateBounds[1] : viewportTopCoord;
            viewportRightCoord = viewportRightCoord > this.updateBounds[2] ? this.updateBounds[2] : viewportRightCoord;
            viewportBottomCoord = viewportBottomCoord > this.updateBounds[3] ? this.updateBounds[3] : viewportBottomCoord;
            this.needsUpdate = this.shouldUpdate = false;
            if (viewportLeftCoord === this.updateBounds[0] && viewportTopCoord === this.updateBounds[1] && viewportRightCoord === this.updateBounds[2] && viewportBottomCoord === this.updateBounds[3]) this.updateFullMap()
            else if (viewportRightCoord >= viewportLeftCoord && viewportBottomCoord >= viewportTopCoord) mapCanvasCtx.putImageData(mapCanvasImgData, 0, 0, viewportLeftCoord, viewportTopCoord, viewportRightCoord - viewportLeftCoord + 1, viewportBottomCoord - viewportTopCoord + 1)
        }
    };
    this.updateFullMap = function() {
        this.hasChanged && this.updateBounds[2] >= this.updateBounds[0] && this.updateBounds[3] >= this.updateBounds[1] && mapCanvasCtx.putImageData(mapCanvasImgData, 0, 0, this.updateBounds[0], this.updateBounds[1], this.updateBounds[2] - this.updateBounds[0] + 1, this.updateBounds[3] - this.updateBounds[1] + 1);
        this.hasChanged = false
    };
    this.updatePartialMap = function() {
        this.updateBounds[2] >= this.updateBounds[0] && this.updateBounds[3] >= this.updateBounds[1] && mapCanvasCtx.putImageData(mapCanvasImgData, 0, 0, this.updateBounds[0], this.updateBounds[1], this.updateBounds[2] - this.updateBounds[0] + 1, this.updateBounds[3] - this.updateBounds[1] + 1);
        this.hasChanged = false
    };
    this.init = function() {
        var yIndex;
        this.hasChanged = this.shouldUpdate = this.needsUpdate = false;
        this.updateBounds[0] = currentMapWidth;
        this.updateBounds[1] = currentMapHeight;
        this.updateBounds[2] = this.updateBounds[3] = 0;
        var xIndex = 1;
        loop: for (; xIndex < currentMapWidth - 1; xIndex++) {
            for (yIndex = currentMapHeight - 2; 1 < yIndex; yIndex--) {
                if (1 === pixelRGBA[pixel.toIndex(xIndex, yIndex) + 2]) {
                    this.updateBounds[0] = xIndex;
                    break loop
                }
            }
        }
        yIndex = 1;
        loop: for (; yIndex < currentMapHeight - 1; yIndex++) {
            for (xIndex = currentMapWidth - 2; 1 < xIndex; xIndex--) {
                if (1 === pixelRGBA[pixel.toIndex(xIndex, yIndex) + 2]) {
                    this.updateBounds[1] = yIndex;
                    break loop
                }
            }
        }
        xIndex = currentMapWidth - 2;
        loop: for (; 0 < xIndex; xIndex--) {
            for (yIndex = currentMapHeight - 2; 1 < yIndex; yIndex--) {
                if (1 === pixelRGBA[pixel.toIndex(xIndex, yIndex) + 2]) {
                    this.updateBounds[2] = xIndex;
                    break loop
                }
            }
        }
        yIndex = currentMapHeight - 2;
        loop: for (; 0 < yIndex; yIndex--) {
            for (xIndex = currentMapWidth - 2; 1 < xIndex; xIndex--) {
                if (1 === pixelRGBA[pixel.toIndex(xIndex, yIndex) + 2]) {
                    this.updateBounds[3] = yIndex;
                    break loop
                }
            }
        }
    }
}

function IntelliAttack() {
    this.checkIntelli = function() {
        if (1 === clientStatus && 2 !== playerStatus[myID] && 0 !== isAlive[myID] && !inSpawn && attacks.isUnderAttackCap(myID) && 0 !== landBorderPixels[myID].length) this.startIntelli()
    };
    this.startIntelli = function() {
        var targets = this.getBorderingEntities(myID, !teamGame).filter(targetID => targetID != maxEntities);
        this.removeAttackingTarget(myID, targets);
        if (0 !== targets.length) {
            targets = this.calcValue(targets);
            this.sortTargets(targets);
            this.doIntelliAttack(targets[0]);
        }
    };
    this.doIntelliAttack = function(target) {
        announcements.lowBalance();
        if (singleplayer) {
            if (typeof(modHandler) == "object" && modHandler.latency) latencySimulator.addPendingAction(0, target.ratio, target.player, 0, 0)
            else processAttack(myID, target.player, target.ratio)
        } else dataEncoder.attack(target.ratio, target.player === maxEntities ? myID : target.player)
    };
    this.sortTargets = function(targetPenalties) {
        targetPenalties.sort(function(prev, next) {
            return prev.penalty - next.penalty
        })
    };
    this.calcValue = function(targets) {
        var tIndex, targetPenalties = [],
            targetsCount = targets.length;
        for (tIndex = 0; tIndex < targetsCount; tIndex++) {
            var id = targets[tIndex], predDensity, mutualBorder = [], returnFactor = 0, timeLeft;
            if (id != maxEntities) {
                predDensity = (id < playerCount && difficultyEngine.botTiming[id-playerCount] < 10) ? 0.5 : troops[id]/land[id];
                for (var bIndex = 0; bIndex < landBorderPixels[id].length; bIndex++) {
                    for (let side = 0; side <+ 3; side++) {
                        let pIndex = landBorderPixels[id][bIndex] + offset[side];
                        if (pixel.strongIsOwner(myID, pIndex) && !mutualBorder.includes(landBorderPixels[id][bIndex])) mutualBorder.push(landBorderPixels[id][bIndex])
                        else if (pixel.isNeutral(pIndex) && difficultyEngine.botTiming[id-playerCount] < 10 && !returnFactor) returnFactor += 0.9*troops[id]/(troops[id] + attacks.getTotalTroopsAttacking(id))
                    }
                }
                for (let aIndex = 0; aIndex < attacks.getCurrentAttackCount(id); aIndex++) {
                    var returnProbi;
                    if (attacks.getBoatIDFromIndex(id, aIndex) != 0) returnProbi = 0
                    else {
                        var target2 = attacks.getTargetFromIndex(id, aIndex)
                        if (target2 == maxEntities) returnProbi = 1
                        else {
                            var mutualBorder2 = [], borderRatio;
                            for (var bIndex = 0; bIndex < landBorderPixels[target2].length; bIndex++) {
                                for (let side = 0; side <= 3; side++) {
                                    let pIndex = landBorderPixels[target2][bIndex] + offset[side];
                                    if (pixel.strongIsOwner(id, pIndex) && !mutualBorder2.includes(landBorderPixels[target2][bIndex])) mutualBorder2.push(landBorderPixels[target2][bIndex])
                                }
                            }
                            borderRatio = mutualBorder2.length/landBorderPixels[id].length;
                            returnProbi = borderRatio <= 0.1 ? 1 - 3 * Math.sqrt(borderRatio) : 0
                        }
                    }
                    returnFactor += returnProbi * attacks.getRemainingTroopsFromIndex(id, aIndex) / (troops[id] + attacks.getTotalTroopsAttacking(id))
                }
                var getTicksElapsed = mainHandler.getTicksElapsed(),
                    speed = land[myID] < 1E3 ? 1/4 : land[myID] < 1E4 ? 1/3 : land[myID] < 6E4 ? 1/2 : land[myID] < 16E4 ? 1 : land[myID] < 3E5 ? 2 : 3 ;
                timeLeft = (100 - (getTicksElapsed % 100) - (singleplayer ? 1 : 7 - (((divideFloor(getTicksElapsed, 100))*100 + (getTicksElapsed % 100) - 1) % 7)));
                targetPenalties.push({
                    player: id,
                    penalty: 3 * predDensity - this.landWeighting(id) ** 1.8 - (mutualBorder.length/landBorderPixels[id].length) ** 0.5 + returnFactor,
                    ratio: Math.round(Math.min((6 + 2 * predDensity) * mutualBorder.length * speed * (timeLeft <= 20 ? 20 : timeLeft), 2*(troops[id] + land[id])) / troops[myID] * 1E3),
                })
            }
        }
        return targetPenalties
    };
    this.landWeighting = function(id) {
        var totalLand = 0, aliveBots = 0;;
        aliveEntities.forEach(e => e >= playerCount && (totalLand += land[e], aliveBots++))
        return totalLand == 0 ? 0 : land[id] * aliveBots / totalLand;
    }
    this.removeAttackingTarget = function(myID, targets) {
        for (var tIndex = targets.length - 1; 0 <= tIndex; tIndex--) if (attacks.check(myID, targets[tIndex])) targets.splice(tIndex, 1)
    };
    this.getBorderingEntities = function(id, considerTeamates) {
        var index, side, borderingEntities = [],
            borderingEntityCount = 0;
        var bIndex = landBorderPixels[id].length - 1;
        loop: for (; 0 <= bIndex; bIndex--)
            for (side = 3; 0 <= side; side--) {
                var ownerID = pixel.isNeutral(landBorderPixels[id][bIndex] + offset[side]) ? maxEntities : pixel.getOwner(landBorderPixels[id][bIndex] + offset[side]);
                if (ownerID === maxEntities || pixel.entityControlled(landBorderPixels[id][bIndex] + offset[side]) && ownerID !== id && (considerTeamates || isNotTeamate(id, ownerID))) {
                    for (index = borderingEntityCount - 1; 0 <= index; index--)
                        if (borderingEntities[index] === ownerID) continue loop;
                    borderingEntities.push(ownerID);
                    borderingEntityCount++
                }
            }
        return borderingEntities
    }
}

function MainLeaderboard() {
    this.visible = false;
    this.buttons = null;
    this.boardType = 0;
    this.height = this.width = null;
    this.lateralTriangleScale = .013;
    this.diagonalTriangleScale = .022;
    this.borderWidth = .025;
    this.lateralTriangleHeight = 3;
    this.diagonalTriangleHeight = 1.2;
    this.rankXRatio = .2;
    this.bestEntryNameXRatio = .235;
    this.pointsXRatio = .9;
    this.spaceIntervalYRatio = .08;
    var leaderboardLabels = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
        fontStyle, lastUpdateTime = [-1E6, -1E6];
    this.position = [0, 0];
    this.paginationDirection = [0, 0];
    this.init = function() {
        this.buttons = [null, null];
        this.visible = false;
        this.boardType = 0;
        this.setCanvasVariables()
    };
    this.toggleVisibility = function(l) {
        this.boardType = l;
        this.visible = true;
        this.updateRenderObject();
        nameInput.hide();
        mainHandler.canvasDirty = true
    };
    this.update = function() {
        this.visible && this.updateRenderObject()
    };
    this.updateRenderObject = function() {
        if (mainHandler.time - 12E4 >= lastUpdateTime[this.boardType]) {
            lastUpdateTime[this.boardType] = mainHandler.time;
            this.paginationDirection = [0, 0];
            wsManager.sendWhenWSOpen(0, 1 + this.boardType) && dataEncoder.loadLeaderboard(0, this.boardType);
        }
    };
    this.setCanvasVariables = function() {
        var typeIndex;
        this.width = this.getLeaderboardWidth(isZoom ? .85 : .66, .75, mainCanvasWidth, mainCanvasHeight);
        this.height = Math.floor(this.width / .75);
        for (typeIndex = 1; 0 <= typeIndex; typeIndex--) {
            if (this.buttons[typeIndex]) {
                this.buttons[typeIndex][4] = fontWeightBold + Math.floor(this.buttons[typeIndex][5] * this.height / 10) + fontSizeArial;
            }
        }
        fontStyle = fontWeightBold + Math.floor(.1 * this.height) + fontSizeArial
    };
    this.getLeaderboardWidth = function(scale, ratio, width, height) {
        return width < ratio * height ? Math.floor(scale * width) : Math.floor(ratio * scale * height)
    };
    this.updateLeaderboard = function(boardType, bestEntries, divideAmount, buttonObj, fontSizeScaler, nameLengthThresholdRatio, page) {
        this.position[boardType] = page;
        var entriesLength = bestEntries.length,
            fontSize = fontWeightBold + Math.floor(fontSizeScaler * this.height / 10) + fontSizeArial;
        this.shorternUntilFit(bestEntries, fontSize, nameLengthThresholdRatio * this.width);
        buttonObj = [[], entriesLength, -1, buttonObj, fontSize, fontSizeScaler, 10 * page];
        for (var entryIndex = 0; entryIndex < entriesLength; entryIndex++) {
            var bestEntry = {
                name: bestEntries[entryIndex].name,
                value: bestEntries[entryIndex].elo / divideAmount,
                colorIndex: bestEntries[entryIndex].colorIndex
            };
            buttonObj[0].push(bestEntry);
        }
        this.buttons[boardType] = buttonObj;
        this.sortPoints(boardType);
        bestEntries = this.buttons[boardType][0][0].name;
        1 === boardType && (bestEntries = "[" + bestEntries + "]");
        0 === page && mainLeaderboardIcon.setLabel(boardType, bestEntries);
        mainHandler.canvasDirty = true
    };
    this.sortPoints = function(typeIndex) {
        this.buttons[typeIndex][0].sort(function(prev, next) {
            return next.value - prev.value
        })
    };
    this.updateObjects = function(l, x, t, z) { //unused
        if (this.buttons && this.buttons[l]) {
            var y, A = false,
                B = 383 / 384;
            if (0 === l) {
                for (y = 0; y < this.buttons[l][0].length; y++) {
                    if (x === this.buttons[l][0][y].name && t > .99 * this.buttons[l][0][y].value && t < 1.01 * this.buttons[l][0][y].value) {
                        this.buttons[l][0][y].value = z;
                        A = true;
                        break
                    }
                }
                if (!A) {
                    this.buttons[l][0].push({
                        name: x,
                        value: z
                    })
                }
            } else {
                for (y = 0; y < this.buttons[l][0].length; y++) {
                    if (x === this.buttons[l][0][y].name) {
                        this.buttons[l][0][y].value += 32 < this.buttons[l][0][y].value ? (64 - this.buttons[l][0][y].value) / 256 : .25;
                        this.buttons[l][0][y].value *= 1 / B;
                        A = true;
                        break
                    }
                }
                for (y = 0; y < this.buttons[l][0].length; y++) this.buttons[l][0][y].value *= B;
                if (!A) {
                    this.buttons[l][0].push({
                        name: x,
                        value: .25
                    })
                }
            }
            this.sortPoints(l)
        }
    };
    this.shorternUntilFit = function(entries, param_fontSize, maxWidth) {
        for (var entryIndex = entries.length - 1; 0 <= entryIndex; entryIndex--) {
            for (; 3 < entries[entryIndex].name.length && gameMessages.measureText(entries[entryIndex].name, param_fontSize) > maxWidth;) {
                entries[entryIndex].name = entries[entryIndex].name.substring(0, entries[entryIndex].name.length - 4) + "..."
            }
        }
    };
    this.mouseDown = function(xPos, yPos) {
        if (!this.visible) return false;
        xPos -= (prevClientWidth - this.width) / 2;
        yPos -= (prevClientHeight - this.height) / 2;
        if (0 > xPos || xPos > this.width || 0 > yPos || yPos > this.height) {
            this.visible = false;
            0 === gameStateManager.getState() && nameInputBar.toggleVisibility(0, true);
            mainHandler.canvasDirty = true;
            return true
        }
        if (yPos < .3 * this.height) var relativeHeightPos = 1;
        else if (yPos < .85 * this.height) {
            relativeHeightPos = (0 === this.boardType ? 14.1 : 3) * (yPos - .3 * this.height) / (.55 * this.height);
            relativeHeightPos = Math.floor(1 + relativeHeightPos * relativeHeightPos)
        } else relativeHeightPos = 0 === this.boardType ? 200 : 10;
        this.paginationDirection[this.boardType] = xPos < this.width / 2 ? -relativeHeightPos : relativeHeightPos;
        if (lastUpdateTime[this.boardType] + 50 > mainHandler.time) return true;
        lastUpdateTime[this.boardType] = mainHandler.time;
        wsManager.sendWhenWSOpen(0, 1 + this.boardType) && dataEncoder.loadLeaderboard(0, this.boardType);
        return true
    };
    this.drawCanvasImage = function() {
        if (this.visible) {
            var lateralTriangleWidth = this.lateralTriangleScale * this.width,
                lateralTriangleOffset = this.lateralTriangleHeight * lateralTriangleWidth,
                diagonalTriangleWidth = this.diagonalTriangleScale * this.width,
                diagonalTriangleOffset = this.diagonalTriangleHeight * diagonalTriangleWidth,
                borderSize = this.borderWidth * this.width,
                headerHeight = Math.floor(.25 * this.height);
            mainCanvasCtx.setTransform(1, 0, 0, 1, (prevClientWidth - this.width) / 2, (prevClientHeight - this.height) / 2);
            mainCanvasCtx.fillStyle = 0 === this.boardType ? blueGreenMoreOpaque : redDarkerMoreOpaque;
            mainCanvasCtx.fillRect(0, 0, this.width, headerHeight);
            mainCanvasCtx.fillStyle = blackMore2Opaque;
            mainCanvasCtx.fillRect(0, headerHeight, this.width, this.height - headerHeight);
            mainCanvasCtx.fillStyle = whiteRGB2;
            mainCanvasCtx.font = fontStyle;
            mainCanvasCtx.textBaseline = middleAlign;
            mainCanvasCtx.textAlign = centerAlign;
            mainCanvasCtx.fillText(leaderboardLabels[this.boardType], Math.floor(this.width / 2), Math.floor(.135 * this.height));
            mainCanvasCtx.font = fontWeightBold + Math.floor(.025 * this.height) + fontSizeArial;
            mainCanvasCtx.fillText(leaderboardLabels[this.boardType + 2], Math.floor(this.width / 2), Math.floor(.2125 * this.height));
            mainCanvasCtx.beginPath();
            mainCanvasCtx.moveTo(this.width / 4, 0);
            mainCanvasCtx.lineTo(this.width / 2 - lateralTriangleWidth, 0);
            mainCanvasCtx.lineTo(this.width / 2, -lateralTriangleOffset);
            mainCanvasCtx.lineTo(this.width / 2 + lateralTriangleWidth, 0);
            mainCanvasCtx.lineTo(this.width - diagonalTriangleWidth, 0);
            mainCanvasCtx.lineTo(this.width + diagonalTriangleOffset, -diagonalTriangleOffset);
            mainCanvasCtx.lineTo(this.width, diagonalTriangleWidth);
            mainCanvasCtx.lineTo(this.width, this.height / 2 - lateralTriangleWidth);
            mainCanvasCtx.lineTo(this.width + lateralTriangleOffset, this.height / 2);
            mainCanvasCtx.lineTo(this.width, this.height / 2 + lateralTriangleWidth);
            mainCanvasCtx.lineTo(this.width, this.height - diagonalTriangleWidth);
            mainCanvasCtx.lineTo(this.width + diagonalTriangleOffset, this.height + diagonalTriangleOffset);
            mainCanvasCtx.lineTo(this.width - diagonalTriangleWidth, this.height);
            mainCanvasCtx.lineTo(this.width / 2 + lateralTriangleWidth, this.height);
            mainCanvasCtx.lineTo(this.width / 2, this.height + lateralTriangleOffset);
            mainCanvasCtx.lineTo(this.width / 2 - lateralTriangleWidth, this.height);
            mainCanvasCtx.lineTo(diagonalTriangleWidth, this.height);
            mainCanvasCtx.lineTo(-diagonalTriangleOffset, this.height + diagonalTriangleOffset);
            mainCanvasCtx.lineTo(0, this.height - diagonalTriangleWidth);
            mainCanvasCtx.lineTo(0, this.height / 2 + lateralTriangleWidth);
            mainCanvasCtx.lineTo(-lateralTriangleOffset, this.height / 2);
            mainCanvasCtx.lineTo(0, this.height / 2 - lateralTriangleWidth);
            mainCanvasCtx.lineTo(0, diagonalTriangleWidth);
            mainCanvasCtx.lineTo(-diagonalTriangleOffset, -diagonalTriangleOffset);
            mainCanvasCtx.lineTo(diagonalTriangleWidth, 0);
            mainCanvasCtx.lineTo(this.width / 4, 0);
            mainCanvasCtx.lineTo(this.width / 4, borderSize);
            mainCanvasCtx.lineTo(borderSize, borderSize);
            mainCanvasCtx.lineTo(borderSize, this.height - borderSize);
            mainCanvasCtx.lineTo(this.width - borderSize, this.height - borderSize);
            mainCanvasCtx.lineTo(this.width - borderSize, borderSize);
            mainCanvasCtx.lineTo(this.width / 4, borderSize);
            mainCanvasCtx.fill();
            this.buttons[this.boardType] && this.drawBestEntries(headerHeight);
            this.drawScrollButtons(headerHeight);
            mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
        }
    };
    this.drawScrollButtons = function(headerHeight) {
        var xPos = getMax(2, Math.floor(.06 * this.width));
        xPos -= xPos % 2;
        var strokeLength = getMax(2, Math.floor(.01 * this.width));
        strokeLength -= strokeLength % 2;
        headerHeight = Math.floor(.82 * headerHeight);
        mainCanvasCtx.fillRect(xPos, headerHeight, xPos, strokeLength);
        mainCanvasCtx.fillRect(this.width - xPos - xPos, headerHeight, xPos, strokeLength);
        mainCanvasCtx.fillRect(Math.floor(this.width - xPos - xPos + (xPos - strokeLength) / 2), Math.floor(headerHeight - (xPos - strokeLength) / 2), strokeLength, xPos)
    };
    this.drawBestEntries = function(headerHeight) {
        mainCanvasCtx.font = this.buttons[this.boardType][4];
        for (var yStartingPos, entryIndex = this.buttons[this.boardType][1] - 1; 0 <= entryIndex; entryIndex--) {
            mainCanvasCtx.textAlign = rightAlign;
            yStartingPos = Math.floor(this.spaceIntervalYRatio * this.height + headerHeight + entryIndex * ((1 - 2 * this.spaceIntervalYRatio) * this.height - headerHeight) / 9);
            mainCanvasCtx.fillText(this.buttons[this.boardType][0][entryIndex].value.toFixed(this.buttons[this.boardType][3]), Math.floor(this.pointsXRatio * this.width), yStartingPos);
            mainCanvasCtx.fillText(entryIndex + 1 + this.buttons[this.boardType][6] + ".", Math.floor(this.rankXRatio * this.width), yStartingPos);
            mainCanvasCtx.textAlign = leftAlign;
            mainCanvasCtx.fillText(this.buttons[this.boardType][0][entryIndex].name, Math.floor(this.bestEntryNameXRatio * this.width), yStartingPos)
        }
    }
}

function OpenLinkBox() {
    var leftMargin, topMargin, boxScaleFactor, height, boxCanvasWidth, topPadding, bottomPadding, verticalSpacing, linkBoxCanvasSize, textWidth, boxWidth, link, linkBoxCanvas;
    this.visible = false;
    this.init = function(param_link, isNewTab) {
        if (13 <= androidVersion) isNewTab ? link = param_link : link === param_link && androidObject.saveString(200, param_link);
        else if (isNewTab) {
            (mainSettings.buttons[1].buttonClass.visible || mainSettings.buttons[2].buttonClass.visible || mainSettings.buttons[4].buttonClass.visible) && mainSettings.hideIfNotHidden();
            nameInput.hide();
            link = param_link;
            linkBoxCanvasSize = Math.floor((isZoom ? mainCanvasWidth > mainCanvasHeight ? .6 : .45 : .4) * minDim);
            boxScaleFactor = linkBoxCanvasSize / sprites.getValueByID(17).width;
            boxCanvasWidth = Math.floor(boxScaleFactor * sprites.getValueByID(17).height);
            topPadding = Math.floor(.4 * boxCanvasWidth);
            bottomPadding = Math.floor(.6 * boxCanvasWidth);
            verticalSpacing = Math.floor(2.5 * bottomPadding);
            height = boxCanvasWidth + topPadding + 3 * bottomPadding;
            var fontStyle = fontWeightBold + Math.floor(topPadding / pixelRatio) + fontSizeArial;
            textWidth = Math.floor(pixelRatio * gameMessages.measureText(link, fontStyle));
            boxWidth = (textWidth > linkBoxCanvasSize ? textWidth : linkBoxCanvasSize) + 2 * verticalSpacing;
            leftMargin = Math.floor((prevClientWidth - boxWidth) / 2);
            topMargin = Math.floor((prevClientHeight - height) / 2);
            linkBoxCanvas = document.createElement("a");
            linkBoxCanvas.appendChild(document.createTextNode(link));
            linkBoxCanvas.title = link;
            linkBoxCanvas.target = "blank";
            linkBoxCanvas.href = link;
            linkBoxCanvas.style.font = fontStyle;
            linkBoxCanvas.style.textAlign = "center";
            linkBoxCanvas.style.color = whiteRGB2;
            linkBoxCanvas.style.position = "absolute";
            linkBoxCanvas.style.padding = "0px";
            linkBoxCanvas.style.margin = "0px";
            linkBoxCanvas.style.top = Math.floor((topMargin + 2 * bottomPadding + boxCanvasWidth) / pixelRatio) + "px";
            linkBoxCanvas.style.left = Math.floor((leftMargin + (boxWidth - textWidth) / 2) / pixelRatio) + "px";
            document.body.appendChild(linkBoxCanvas);
            this.visible = true;
            mainHandler.canvasDirty = true
        }
    };
    this.end = function() {
        if (!this.visible) return false;
        document.body.removeChild(linkBoxCanvas);
        this.visible = false;
        return true
    };
    this.mouseDown = function(xPos, yPos) {
        if (!this.visible) return false;
        if (xPos < leftMargin || yPos < topMargin || xPos > leftMargin + boxWidth || yPos > topMargin + height) mainHandler.canvasDirty = true, this.visible = false, document.body.removeChild(linkBoxCanvas),
            0 === gameStateManager.getState() && nameInputBar.toggleVisibility(0, true);
        return true
    };
    this.drawCanvasImage = function() {
        if (this.visible) {
            mainCanvasCtx.imageSmoothingEnabled = true;
            mainCanvasCtx.setTransform(1, 0, 0, 1, leftMargin, topMargin);
            mainCanvasCtx.fillStyle = blackMoreOpaque;
            mainCanvasCtx.fillRect(0, 0, boxWidth, height);
            mainCanvasCtx.lineWidth = mainSettingsMarginWidth;
            mainCanvasCtx.strokeStyle = whiteRGB2;
            mainCanvasCtx.strokeRect(0, 0, boxWidth, height);
            mainCanvasCtx.setTransform(boxScaleFactor, 0, 0, boxScaleFactor, leftMargin + (boxWidth - linkBoxCanvasSize) / 2, topMargin + bottomPadding);
            mainCanvasCtx.drawImage(sprites.getValueByID(17), 0, 0);
            mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
}

function LinkButtons() {
    var padding = 0,
        buttonXPos = [0, 0, 0, 0, 0],
        buttonYPos = [0, 0, 0, 0, 0],
        buttonScales = [1, 1, 1, 1, 1],
        isVisible = [true, true, true, true, true];
    this.shouldHideLinks = [true, true, true, true, true];
    var spriteList = null,
        links;
    this.setupLinkVariables = function(param_spriteList, param_isVisible) {
        spriteList = param_spriteList;
        isVisible = param_isVisible;
        links = [googleplayLink, appstoreLink, youtubeLink, discordLink, igLink];
        this.init()
    };
    this.init = function() {
        if (sprites.areAllSpritesLoaded()) {
            var googlePlayButtonScale = Math.floor((isZoom ? .261 : .195) * averageDim);
            var appStoreButtonScale = Math.floor(.9 * googlePlayButtonScale),
                buttonScale = Math.floor(.17 * appStoreButtonScale);
            padding = isZoom ? 2 * canvasPadding : canvasPadding;
            buttonScales[0] = googlePlayButtonScale / spriteList[0].width;
            buttonScales[1] = appStoreButtonScale / spriteList[1].width;
            buttonScales[2] = buttonScale / spriteList[2].height;
            buttonScales[3] = buttonScale / spriteList[3].height;
            buttonScales[4] = buttonScale / spriteList[4].height;
            buttonScales[3] *= 1.07;
            buttonXPos[0] = padding;
            buttonXPos[1] = padding;
            buttonXPos[2] = padding;
            buttonXPos[3] = padding;
            buttonXPos[4] = Math.floor(2 * padding + buttonScales[3] * spriteList[3].width);
            buttonYPos[0] = padding;
            buttonYPos[1] = buttonYPos[0] + padding + buttonScales[0] * spriteList[0].height;
            buttonYPos[2] = buttonYPos[1] + padding + buttonScales[1] * spriteList[1].height;
            buttonYPos[3] = buttonYPos[2] + padding + buttonScales[2] * spriteList[2].height;
            buttonYPos[4] = buttonYPos[3];
            if (!isVisible[0]) {
                for (var bIndex = 0; 5 > bIndex; bIndex++) buttonYPos[bIndex] -= buttonScales[0] * spriteList[0].height + padding;
            }
            if (!isVisible[1]) {
                for (var bIndex = 2; 5 > bIndex; bIndex++) buttonYPos[bIndex] -= buttonScales[1] * spriteList[1].height + padding
            }
        }
    };
    this.visible = function() {
        return 7 !== gameStateManager.getState() || !isZoom
    };
    this.mouseDown = function(xPos, yPos, isNewTab) {
        if (!spriteList || !this.visible()) return false;
        var bIndex;
        for (bIndex = isVisible.length - 1; 0 <= bIndex; bIndex--) {
            if (isVisible[bIndex] && this.shouldHideLinks[bIndex] && xPos > buttonXPos[bIndex] && yPos > buttonYPos[bIndex] && xPos < buttonXPos[bIndex] + buttonScales[bIndex] * spriteList[bIndex].width && yPos < buttonYPos[bIndex] + buttonScales[bIndex] * spriteList[bIndex].height) {
                openLinkBox.init(links[bIndex], isNewTab);
                return true;
            }
        }
        return false
    };
    this.drawCanvasImage = function() {
        if (spriteList && this.visible()) {
            mainCanvasCtx.imageSmoothingEnabled = true;
            var bIndex;
            for (bIndex = 0; 5 > bIndex; bIndex++) {
                if (isVisible[bIndex] && this.shouldHideLinks[bIndex]) {
                    mainCanvasCtx.setTransform(buttonScales[bIndex], 0, 0, buttonScales[bIndex], buttonXPos[bIndex], buttonYPos[bIndex]);
                    mainCanvasCtx.drawImage(spriteList[bIndex], 0, 0);
                }
            }
            mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
}

function MainButtons() {
    function drawButton(bIndex) {
        var button = mainButtons.mainButton[bIndex],
            startingX = button.startingX,
            startingY = button.startingY,
            width = button.width,
            height = button.height;
        mainCanvasCtx.fillStyle = button.bgColor;
        mainCanvasCtx.fillRect(startingX, startingY, width, height);
        if (bIndex === hoverButtonIndex) {
            mainCanvasCtx.fillStyle = fgColor;
            mainCanvasCtx.fillRect(startingX, startingY, width, height)
        }
        mainCanvasCtx.lineWidth = 3;
        mainCanvasCtx.strokeStyle = strokeColor;
        mainCanvasCtx.strokeRect(startingX, startingY, width, height);
        bIndex = button.startingX;
        startingX = button.startingY;
        startingY = button.width;
        width = button.height;
        mainCanvasCtx.textAlign = centerAlign;
        mainCanvasCtx.textBaseline = middleAlign;
        mainCanvasCtx.font = button.font;
        mainCanvasCtx.fillStyle = strokeColor;
        mainCanvasCtx.fillText(button.displayLabel, Math.floor(bIndex + startingY / 2), Math.floor(startingX + width / 2 + .1 * button.fontRatio))
    }
    var hoverButtonIndex, strokeColor, fgColor;
    this.margins = this.startingY = this.height = this.width = 0;
    this.init = function() {
        hoverButtonIndex = -1;
        strokeColor = whiteRGB2;
        fgColor = "rgba(255,255,255,0.16)";
        this.mainButton = Array(7);
        this.height = Math.floor((isZoom ? .123 : .093) * averageDim);
        this.width = Math.floor((isZoom ? 3.96 : 4.2) * this.height);
        this.margins = Math.floor(.025 * this.width);
        var fontSize = Math.floor(.26 * this.height),
            fontStyle = fontWeightBold + fontSize + fontSizeArial;
        this.mainButton[0] = {
            startingX: 0,
            startingY: 0,
            width: Math.floor(.6 * this.width - this.margins / 2),
            height: this.height,
            displayLabel: "Multiplayer",
            font: fontStyle,
            bgColor: "rgba(22,88,22,0.8)",
            fontRatio: fontSize
        };
        fontSize = Math.floor(.18 * this.height);
        fontStyle = fontWeightBold + fontSize + fontSizeArial;
        this.mainButton[1] = {
            startingX: 0,
            startingY: 0,
            width: this.width - this.mainButton[0].width - this.margins,
            height: this.height,
            displayLabel: "Singleplayer",
            font: fontStyle,
            bgColor: "rgba(22,88,88,0.8)",
            fontRatio: fontSize
        };
        this.mainButton[2] = {
            startingX: 0,
            startingY: 0,
            width: this.width,
            height: Math.floor(.3 * this.height),
            displayLabel: "",
            font: this.mainButton[1].font,
            bgColor: "rgba(100,0,0,0.8)",
            fontRatio: this.mainButton[1].fontRatio
        };
        this.mainButton[3] = {
            startingX: 0,
            startingY: 0,
            width: this.width,
            height: this.height,
            displayLabel: "Back",
            font: this.mainButton[0].font,
            bgColor: "rgba(0,0,0,0.8)",
            fontRatio: this.mainButton[0].fontRatio
        };
        this.mainButton[4] = {
            startingX: 0,
            startingY: 0,
            width: this.width,
            height: Math.floor(.3 * this.height),
            displayLabel: "Please wait for us to update the client!",
            font: this.mainButton[1].font,
            bgColor: "rgba(100,0,0,0.8)",
            fontRatio: this.mainButton[1].fontRatio
        };
        this.mainButton[5] = {
            startingX: 0,
            startingY: 0,
            width: this.mainButton[0].width,
            height: Math.floor(.8 * this.height),
            displayLabel: "Play Vanilla Terri",
            font: this.mainButton[0].font,
            bgColor: "rgba(0,100,0,0.8)",
            fontRatio: this.mainButton[0].fontRatio
        };
        this.mainButton[6] = {
            startingX: 0,
            startingY: 0,
            width: this.mainButton[1].width,
            height: this.mainButton[5].height,
            displayLabel: "Back",
            font: this.mainButton[0].font,
            bgColor: "rgba(0,0,0,0.8)",
            fontRatio: this.mainButton[0].fontRatio
        };
        this.setPosition()
    };
    this.setPosition = function() {
        this.startingY = Math.floor(.54 * prevClientHeight);
        this.mainButton[0].startingX = Math.floor(.5 * prevClientWidth - .5 * this.width);
        this.mainButton[1].startingX = this.mainButton[0].startingX + this.mainButton[0].width + this.margins;
        this.mainButton[2].startingX = this.mainButton[3].startingX = this.mainButton[0].startingX;
        this.mainButton[4].startingX = this.mainButton[5].startingX = this.mainButton[0].startingX;
        this.mainButton[6].startingX = this.mainButton[1].startingX;
        this.mainButton[0].startingY = Math.floor(.54 * prevClientHeight);
        this.mainButton[1].startingY = this.mainButton[0].startingY;
        this.mainButton[2].startingY = Math.floor((prevClientHeight - this.mainButton[2].height - this.mainButton[3].height - this.margins) / 2);
        this.mainButton[3].startingY = this.mainButton[2].startingY + this.mainButton[2].height + this.margins;
        this.mainButton[4].startingY = Math.floor((prevClientHeight - this.mainButton[4].height - this.mainButton[5].height - this.margins) / 2);
        this.mainButton[5].startingY = this.mainButton[6].startingY = this.mainButton[4].startingY + this.mainButton[4].height + this.margins
    };
    this.drawNormalButtons = function() {
        drawButton(0);
        drawButton(1)
    };
    this.drawErrorButtons = function() {
        drawButton(2);
        drawButton(3)
    };
    this.drawUpdatedButtons = function() {
        drawButton(4);
        drawButton(5);
        drawButton(6)
    };
    this.onPointermove = function(xPos, yPos, updateCanvas) {
        var bIndex = -1;
        if (0 === gameStateManager.getState()) bIndex = this.getClickedButton(xPos, yPos, 0, 2)
        else if (3 === gameStateManager.getState()) bIndex = this.getClickedButton(xPos, yPos, 3, 1)
        else if (5 === gameStateManager.getState()) bIndex = this.getClickedButton(xPos, yPos, 5, 2)
        if (hoverButtonIndex !== bIndex) {
            hoverButtonIndex = bIndex;
            if (updateCanvas) mainHandler.canvasDirty = true
        }
        if (-1 !== bIndex) {
            playtime.reset();
            return true;
        } else return false
    };
    this.getClickedButton = function(xPos, yPos, startingBIndex, buttonCount) {
        for (var bIndex = startingBIndex; bIndex < startingBIndex + buttonCount; bIndex++)
            if (xPos >= this.mainButton[bIndex].startingX && yPos >= this.mainButton[bIndex].startingY && xPos <= this.mainButton[bIndex].startingX + this.mainButton[bIndex].width && yPos <= this.mainButton[bIndex].startingY + this.mainButton[bIndex].height) return bIndex;
        return -1
    }
}

function ColorsPanel() {
    function getNormalValue(value) {
        return 0 > value ? 0 : 255 < value ? 255 : Math.floor(value)
    }
    this.height = this.width = 0;
    this.visible = false;
    this.individualBarHeight = this.individualBarWidth = this.compositeColorBarSize = this.selection = this.margins = this.isSaveRequired = 0;
    this.colors = null;
    this.init = function() {
        if (mainCanvasWidth < 2 * mainCanvasHeight) this.width = Math.floor((isZoom ? .94 : .4) * mainCanvasWidth)
        else {
            this.height = Math.floor((isZoom ? .88 : .4) * mainCanvasHeight);
            this.width = Math.floor(2 * this.height);
        }
        this.height = this.width / 2;
        this.margins = this.height / 16;
        this.visible = true;
        this.isSaveRequired = 0;
        this.compositeColorBarSize = (this.height - 3 * this.margins) / 2;
        this.individualBarWidth = this.width - 3 * this.margins - this.compositeColorBarSize;
        this.individualBarHeight = (this.height - 4 * this.margins) / 3
    };
    this.loadColors = function() {
        this.colors = [
            [0, 0, 0],
            [0, 0, 0]
        ];
        var rgbIndex = loadColors().split("");
        if (6 !== rgbIndex.length) {
            for (rgbIndex = 2; 0 <= rgbIndex; rgbIndex--) this.colors[0][rgbIndex] = getNormalValue(256 * Math.random());
        } else {
            for (var rgbIndex = 2; 0 <= rgbIndex; rgbIndex--) this.colors[0][rgbIndex] = getNormalValue(4 * (10 * parseInt(rgbIndex[2 * rgbIndex]) + parseInt(rgbIndex[2 * rgbIndex + 1])));
        }
        this.setNormalColorValue()
    };
    this.getRGB64 = function() {
        return [divideFloor(this.colors[0][0], 4), divideFloor(this.colors[0][1], 4), divideFloor(this.colors[0][2], 4)]
    };
    this.mouseDown = function(xPos, yPos) {
        this.isSaveRequired = 0;
        xPos -= (prevClientWidth - this.width) / 2;
        yPos -= (prevClientHeight - this.height) / 2;
        if (0 > xPos || 0 > yPos || xPos >= this.width - 1 || yPos >= this.height - 1) {
            this.visible = false;
            if (0 === gameStateManager.getState()) nameInputBar.toggleVisibility(0, true);
            mainHandler.canvasDirty = true;
            return false;
        }
        if (xPos < this.margins || yPos < this.margins || xPos >= this.width - this.margins || yPos >= this.height - this.margins) return true;
        if (xPos < this.margins + this.compositeColorBarSize) {
            if (yPos < this.margins + this.compositeColorBarSize && 0 !== this.selection) {
                this.selection = 0;
                mainHandler.canvasDirty = true;
            }
            return true;
        }
        if (xPos < 2 * this.margins + this.compositeColorBarSize) return true;
        xPos -= 2 * this.margins + this.compositeColorBarSize;
        if (yPos < this.margins + this.individualBarHeight) {
            this.isSaveRequired = 1;
            this.colors[this.selection][0] = getNormalValue(256 * xPos / this.individualBarWidth);
            mainHandler.canvasDirty = true;
            return true
        }
        if (yPos < 2 * this.margins + this.individualBarHeight) return true;
        if (yPos < 2 * this.margins + 2 * this.individualBarHeight) {
            this.isSaveRequired = 2;
            this.colors[this.selection][1] = getNormalValue(256 * xPos / this.individualBarWidth);
            mainHandler.canvasDirty = true;
            return true;
        }
        if (yPos >= 3 * this.margins + 2 * this.individualBarHeight) {
            this.isSaveRequired = 3;
            this.colors[this.selection][2] = getNormalValue(256 * xPos / this.individualBarWidth);
            mainHandler.canvasDirty = true;
        }
        return true
    };
    this.setNormalColorValue = function() {
        for (var rgbIndex = 2; 0 <= rgbIndex; rgbIndex--) this.colors[0][rgbIndex] = getNormalValue(this.colors[0][rgbIndex])
    };
    this.formatColorString = function() {
        for (var colorString = "", colorValue64, rgbIndex = 0; 3 > rgbIndex; rgbIndex++) {
            colorValue64 = divideFloor(this.colors[0][rgbIndex], 4);
            if (10 > colorValue64) colorString += "0";
            colorString += colorValue64.toString();
        }
        saveColors(colorString)
    };
    this.onPointermove = function(xPos) {
        if (0 !== this.isSaveRequired) {
            xPos -= 2 * this.margins + this.compositeColorBarSize + (prevClientWidth - this.width) / 2;
            this.colors[this.selection][this.isSaveRequired - 1] = getNormalValue(256 * xPos / this.individualBarWidth);
            mainHandler.canvasDirty = true;
        }
    };
    this.handleSave = function() {
        if (0 < this.isSaveRequired) {
            this.isSaveRequired = 0;
            this.setNormalColorValue();
            this.formatColorString();
            mainHandler.canvasDirty = true;
        }
    };
    this.drawCanvasImage = function() {
        mainCanvasCtx.setTransform(1, 0, 0, 1, (prevClientWidth - this.width) / 2, (prevClientHeight - this.height) / 2);
        mainCanvasCtx.fillStyle = blackMoreOpaque;
        mainCanvasCtx.fillRect(0, 0, this.width, this.height);
        mainCanvasCtx.lineWidth = mainSettingsMarginWidth;
        mainCanvasCtx.strokeStyle = whiteRGB2;
        mainCanvasCtx.strokeRect(-1, -1, this.width + 2, this.height + 2);
        mainCanvasCtx.font = fontWeightBold + Math.floor(.8 * this.compositeColorBarSize) + fontSizeArial;
        mainCanvasCtx.textBaseline = middleAlign;
        mainCanvasCtx.textAlign = centerAlign;
        this.fillCompositeColor(0);
        mainCanvasCtx.lineWidth = mainSettingsMarginWidth;
        this.fillIndividualBar(0);
        this.fillIndividualBar(1);
        this.fillIndividualBar(2);
        mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
    };
    this.fillCompositeColor = function(colorIndex) {
        mainCanvasCtx.fillStyle = "rgb(" + this.colors[colorIndex][0] + "," + this.colors[colorIndex][1] + "," + this.colors[colorIndex][2] + ")";
        mainCanvasCtx.fillRect(this.margins, this.margins, this.compositeColorBarSize, 2 * this.compositeColorBarSize + this.margins);
        mainCanvasCtx.lineWidth = 2 + mainSettingsMarginWidth;
        mainCanvasCtx.strokeStyle = whiteRGB2;
        mainCanvasCtx.strokeRect(this.margins, this.margins, this.compositeColorBarSize, 2 * this.compositeColorBarSize + this.margins)
    };
    this.fillIndividualBar = function(rgbIndex) {
        mainCanvasCtx.fillStyle = "rgb(" + (0 === rgbIndex ? 200 : 2 === rgbIndex ? 50 : 0) + "," + (1 === rgbIndex ? 200 : 2 === rgbIndex ? 50 : 0) + "," + (2 === rgbIndex ? 255 : 0) + ")";
        mainCanvasCtx.fillRect(2 * this.margins + this.compositeColorBarSize, this.margins + rgbIndex * (this.margins + this.individualBarHeight), Math.floor(this.colors[this.selection][rgbIndex] * this.individualBarWidth / 255), this.individualBarHeight);
        mainCanvasCtx.strokeStyle = whiteRGB2;
        mainCanvasCtx.strokeRect(2 * this.margins + this.compositeColorBarSize, this.margins + rgbIndex * (this.margins + this.individualBarHeight), this.individualBarWidth, this.individualBarHeight)
    }
}

function PreLobby() {
    function getCurrentRemoteIndex() {
        return 0 === remoteIndex ? 0 : 1 + (remoteIndex - 1 + currentRemote) % (wsManager.terriWsCount - 1)
    }

    function sendJoinRequest() {
        remoteIndex++;
        initTime = mainHandler.time;
        wsManager.sendWhenWSOpen(getCurrentRemoteIndex(), 4) && (isJoiningLobby = true, dataEncoder.joinLobby(getCurrentRemoteIndex()))
    }

    function incrementRemoteIndex() {
        0 === remoteIndex ? showError.displayError(3249) : (remoteIndex === wsManager.terriWsCount - 1 && (remoteIndex = -1), sendJoinRequest())
    }

    function drawProgressBar(yPos, param_3_width, progressRatio) {
        var startX = Math.floor((prevClientWidth - progressBarWidth) / 2) + progressBarCornerSize,
            endX = startX + Math.floor(progressRatio * (progressBarWidth - 2 * progressBarCornerSize));
        mainCanvasCtx.lineWidth = param_3_width;
        mainCanvasCtx.beginPath();
        mainCanvasCtx.moveTo(startX, yPos);
        mainCanvasCtx.lineTo(endX, yPos);
        mainCanvasCtx.lineTo(Math.floor(startX - progressBarCornerSize + progressRatio * progressBarWidth), yPos + progressBarHeight);
        mainCanvasCtx.lineTo(startX - progressBarCornerSize, yPos + progressBarHeight);
        mainCanvasCtx.closePath()
    }
    var barProgress, direction, progressBarHeight, progressBarWidth, progressBarTotalWidth, progressBarTotalHeight, progressBarCornerSize, bgColor, fgColor, loadingTextFont, fontSize, initTime, remoteIndex, currentRemote = 0,
        isJoiningLobby;
    this.init = function() {
        gameStateManager.setState(6);
        barProgress = 0;
        direction = 1;
        bgColor = "rgba(0,220,120,0.4)";
        fgColor = "rgba(0,0,0,0.8)";
        this.setCanvasVariables();
        mainHandler.canvasDirty = true;
        remoteIndex = 0;
        isJoiningLobby = false;
        sendJoinRequest()
    };
    this.setCanvasVariables = function() {
        progressBarWidth = Math.floor((isZoom ? .5 : .25) * averageDim);
        progressBarTotalWidth = progressBarWidth + 12;
        progressBarHeight = Math.floor(.125 * progressBarWidth);
        progressBarCornerSize = 3 * progressBarHeight;
        progressBarTotalHeight = Math.floor(.225 * progressBarWidth);
        fontSize = Math.floor(.3 * progressBarHeight);
        loadingTextFont = fontStyleNormal + fontSize + fontSizeArial
    };
    this.setRemote = function(newRemote) {
        currentRemote = newRemote
    };
    this.onPreLobbyJoin = function(remoteID) {
        remoteID === getCurrentRemoteIndex() && (isJoiningLobby = false, incrementRemoteIndex())
    };
    this.completeFirstAction = function(remoteID) {
        6 !== gameStateManager.getState() || isJoiningLobby || (initTime = mainHandler.time, isJoiningLobby = true, dataEncoder.joinLobby(remoteID))
    };
    this.mouseDown = function(xPos, yPos) {
        var M = Math.floor((prevClientWidth - progressBarTotalWidth) / 2),
            Q = Math.floor(.5 * (prevClientHeight - bufferLength - progressBarHeight - progressBarTotalHeight)) + progressBarHeight + bufferLength;
        if (xPos > M && xPos < M + progressBarTotalWidth && yPos > Q && yPos < Q + progressBarTotalHeight) {
            this.onPreLobbyLeave();
            mainButtons.onPointermove(xPos, yPos, false);
            return true
        } else return false
    };
    this.onPreLobbyLeave = function() {
        wsManager.closeAll(3260);
        nameInput.init();
        mainHandler.canvasDirty = true
    };
    this.update = function() {
        if (6 === gameStateManager.getState()) {
            if (mainHandler.time > initTime + 2E4) {
                if (isJoiningLobby) showError.displayError(3250)
                else incrementRemoteIndex();
            }
            barProgress += .07 * direction * (16 > barProgress ? 5 + barProgress : 84 < barProgress ? 105 - barProgress : 17);
            if (100 < barProgress) {
                barProgress = 100;
                direction = -1;
            } else if (0 > barProgress) {
                barProgress = 0;
                direction = 1;
            }
            bgColor = "rgba(0," + Math.floor(190 - 1.9 * barProgress) + "," + Math.floor(120 - 1.2 * barProgress) + "," + (.4 + .004 * barProgress) + ")";
            fgColor = "rgba(0," + Math.floor(1.9 * barProgress) + "," + Math.floor(1.2 * barProgress) + "," + (.8 - .004 * barProgress) + ")";
            mainHandler.canvasDirty = true;
        }
    };    
    this.drawCanvasImage = function() {
        var canvasXOffset = Math.floor((prevClientWidth - progressBarTotalWidth) / 2),
            progressBarYPos = Math.floor(.5 * (prevClientHeight - bufferLength - progressBarHeight - progressBarTotalHeight)),
            progressFillAmount = barProgress / 100;
        mainCanvasCtx.fillStyle = fgColor;
        drawProgressBar(progressBarYPos, 3, 1);
        mainCanvasCtx.fill();
        mainCanvasCtx.fillStyle = bgColor;
        drawProgressBar(progressBarYPos, 3, progressFillAmount);
        mainCanvasCtx.fill();
        mainCanvasCtx.strokeStyle = whiteRGB2;
        drawProgressBar(progressBarYPos, 3, 1);
        mainCanvasCtx.stroke();
        mainCanvasCtx.textAlign = centerAlign;
        mainCanvasCtx.textBaseline = middleAlign;
        mainCanvasCtx.font = loadingTextFont;
        mainCanvasCtx.fillStyle = whiteRGB2;
        mainCanvasCtx.fillText("Loading", Math.floor(.5 * prevClientWidth), Math.floor(progressBarYPos + .58 * progressBarHeight));
        progressBarYPos = progressBarYPos + progressBarHeight + bufferLength;
        progressFillAmount = progressBarTotalWidth;
        var buttonHeight = progressBarTotalHeight;
        mainCanvasCtx.fillStyle = blackSemiTransparent;
        mainCanvasCtx.fillRect(canvasXOffset, progressBarYPos, progressFillAmount, buttonHeight);
        mainCanvasCtx.lineWidth = 3;
        mainCanvasCtx.strokeStyle = whiteRGB2;
        mainCanvasCtx.strokeRect(canvasXOffset, progressBarYPos, progressFillAmount, buttonHeight);
        var buttonTextSize = Math.floor(.3 * buttonHeight);
        mainCanvasCtx.textAlign = centerAlign;
        mainCanvasCtx.textBaseline = middleAlign;
        mainCanvasCtx.font = fontStyleNormal + buttonTextSize + fontSizeArial;
        mainCanvasCtx.fillStyle = whiteRGB2;
        mainCanvasCtx.fillText("Back", Math.floor(canvasXOffset + progressFillAmount / 2), Math.floor(progressBarYPos + buttonHeight / 2 + .1 * buttonTextSize))
    }
}

function GameStateManager() {
    var gameState;
    this.init = function() {
        mainButtons.init();
        nameInputBar.init();
        gameState = 0;
        cookiesPrompt.init();
        nameInput.init();
    };
    this.setState = function(state) {
        gameState = state
    };
    this.getState = function() {
        return gameState
    };
    this.enterInGameState = function() {
        this.setState(8);
        lobby.hide(); 
        mainSettings.hideIfNotHidden();
        mainLeaderboard.visible = false;
        openLinkBox.mouseDown(-1E3, -1E3)
    };
    this.hideIfNotHidden = function(e) {
        if (!mapLoaded) return false;
        if (400 <= mainHandler.time) {
            if ("Enter" === e.key || "Escape" === e.key) {
                if (this.checkAndHideOtherElements()) {
                    if (0 === gameState) nameInputBar.toggleVisibility(0, true)
                    return true;
                }
                if ("Enter" === e.key) {
                    if (0 === gameState) {
                        nameInput.enterPreLobby();
                        return true;
                    } 
                    if (7 === gameState) return true
                }
            }
            return false
        }
    };
    this.checkAndHideOtherElements = function() {
        if (openLinkBox.end() || mainSettings.hideIfNotHidden()) return true
        else if (mainLeaderboard.visible) {
            mainLeaderboard.visible = false;
            return true;
        } else return false
    };
    this.aK = function() {
        mainHandler.canvasDirty = true;
        if (8 === gameState) {
            if (isCanvasHidden) isCanvasHidden = !isCanvasHidden
            else if (statistics.visible) statistics.toggleMenu()
            else gameButtons.toggleMenu()
        } else if (7 === gameState) lobby.closeLobby()
        else if (6 === gameState) preLobby.onPreLobbyLeave()
        else if (3 === gameState) showError.showMainScreen(0, 0)
        else if (2 === gameState) singleSettings.showMainScreen()
        else if (0 === gameState) {
            if (!this.checkAndHideOtherElements()) setAndroidState(11)
        }
    };
    this.mouseDown = function(xPos, yPos) {
        if (!cookiesPrompt.mouseDown(xPos, yPos) && mapLoaded && !(openLinkBox.mouseDown(xPos, yPos) || 6 === gameState && preLobby.mouseDown(xPos, yPos) || 
            2 === gameState && singleSettings.mouseDown(xPos, yPos) || moreSettings.mouseDown(xPos, yPos) || mainLeaderboard.mouseDown(xPos, yPos) || 
            linkButtons.mouseDown(xPos, yPos, true) || mainSettings.mouseDown(xPos, yPos, true))) {

            playtime.mouseDown(xPos, yPos);

            if (0 === gameState) nameInput.mouseDown(xPos, yPos);
            else if (3 === gameState) showError.mouseDown(xPos, yPos);
            else if (5 === gameState) gameUpdatedPrompt.mouseDown(xPos, yPos);
            else if (7 === gameState && lobby.mouseDown(xPos, yPos)) return;
            mainLeaderboardIcon.mouseDown(xPos, yPos)
        }
    };
    this.onPointermove = function(xPos, yPos) {
        moreSettings.onPointermove(xPos, yPos);
        if (!playtime.isDraggingPlaytime) {
            if (cookiesPrompt.onPointermove(xPos, yPos)) {
                playtime.reset();
                return
            }
            if (2 === gameState && singleSettings.onPointermove(xPos, yPos)) {
                playtime.reset();
                return
            }
            if (0 <= mainSettings.getClickedButton(xPos, yPos)) {
                playtime.reset();
                return
            }
            if (mainSettings.onPointermove(xPos, yPos)) {
                playtime.reset();
                return
            }
            if (mainButtons.onPointermove(xPos, yPos, true)) return
        }
        playtime.onPointermove(xPos, yPos)
    };
    this.click = function(k, n) {
        playtime.onDragEnd();
        mainSettings.handleSave() || linkButtons.mouseDown(k, n, false) || mainSettings.mouseDown(k, n, false)
    };
    this.onWheel = function(xPos, yPos, deltaY) {
        mainSettings.buttons[1].buttonClass.visible || mainSettings.buttons[4].buttonClass.visible || 0 === gameState && playtime.onWheel(xPos, deltaY)
    };
    this.vl = function() {
        mainButtons.setPosition();
        mainSettings.setPosition();
        0 === gameState ? (nameInputBar.setPosition(0), playtime.setPosition()) : 7 === gameState && lobby.setCanvasVariables();
        mainHandler.canvasDirty = true
    };
    this.drawCanvasImage = function() {
        if (8 !== gameState && 10 !== gameState) {
            mainCanvasCtx.imageSmoothingEnabled = true;
            this.fillBackgroundColor();
            playtime.drawCanvasImage();
            nextContestBar.drawCanvasImage();
            var k = Math.floor(.3 * prevClientHeight),
                n = sprites.getValueByName("territorial.io"),
                l = 1.75 * prevClientHeight / n.width;
            l = l * n.width < .98 * prevClientWidth ? .98 * prevClientWidth / n.width : l;
            mainCanvasCtx.globalAlpha = .15;
            var x = Math.floor(.5 * (prevClientWidth - l * n.width));
            x = Math.floor(x / l);
            k = Math.floor(k - .5 * n.height * l);
            k = Math.floor(k / l);
            mainCanvasCtx.setTransform(l, 0, 0, l, x, k);
            mainCanvasCtx.drawImage(n, x, k);
            mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0);
            mainCanvasCtx.globalAlpha = 1;
            linkButtons.drawCanvasImage();
            mainLeaderboardIcon.drawCanvasImage();
            mainSettings.drawCanvasImage();
            moreSettings.drawCanvasImage();
            0 === gameState ? nameInput.drawCanvasImage() : 2 === gameState ? singleSettings.drawCanvasImage() : 3 === gameState ? showError.drawCanvasImage() : 5 === gameState ? gameUpdatedPrompt.drawCanvasImage() : 6 === gameState ? preLobby.drawCanvasImage() : 7 === gameState && lobby.drawCanvasImage();
            mainSettings.drawPanels();
            cookiesPrompt.drawCanvasImage();
            mainLeaderboard.drawCanvasImage();
            openLinkBox.drawCanvasImage()
        }
    };
    this.fillBackgroundColor = function() {
        if (mapLoaded) {
            var k = mainCanvasWidth / currentMapWidth,
                n = mainCanvasHeight / currentMapHeight;
            k = k > n ? k : n;
            mainCanvasCtx.setTransform(k, 0, 0, k, Math.floor((mainCanvasWidth - k * currentMapWidth) / 2), Math.floor((mainCanvasHeight - k * currentMapHeight) / 2));
            mainCanvasCtx.drawImage(mapBaseCanvas, 0, 0);
            mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0);
            mainCanvasCtx.fillStyle = blackSemiTransparent
        } else mainCanvasCtx.fillStyle = blackRGB;
        mainCanvasCtx.fillRect(0, 0, mainCanvasWidth, mainCanvasHeight)
    }
}

function EmojisPanel() {
    this.height = this.width = 0;
    this.visible = false;
    this.numEmojisPerRow  = 10;
    this.emojiMarginRatio = .12;
    this.isDragging = this.isToggled = this.isSaveRequired = false;
    this.init = function() {
        this.width = mainCanvasWidth < 1 * mainCanvasHeight ? Math.floor((isZoom ? .94 : .6) * mainCanvasWidth) : Math.floor((isZoom ? .94 : .6) * mainCanvasHeight);
        this.width -= this.width % this.numEmojisPerRow ;
        this.height = 1 * this.width;
        this.visible = true;
        this.isSaveRequired = false
    };
    this.mouseDown = function(xPos, yPos, buttonIndex) {
        var emojiRowHeight = (prevClientHeight - this.height) / 2;
        xPos -= (prevClientWidth - this.width) / 2;
        yPos -= emojiRowHeight;
        if (0 > xPos || 0 > yPos || xPos >= this.width - 1 || yPos >= this.height - 1) {
            if (0 === buttonIndex) {
                this.visible = false;
                if (0 === gameStateManager.getState()) nameInputBar.toggleVisibility(0, true);
                mainHandler.canvasDirty = true;
            }
            return false;
        }
        var emojisPerRow = Math.floor(this.width / this.numEmojisPerRow );
        xPos = divideFloor(xPos, emojisPerRow) + this.numEmojisPerRow  * divideFloor(yPos, emojisPerRow);
        xPos = 0 > xPos ? 0 : xPos >= emojis.totalEmojisCount ? emojis.totalEmojisCount - 1 : xPos;
        if (0 === buttonIndex || 1 === buttonIndex && !emojis.emojiSelection[xPos] || 2 === buttonIndex && emojis.emojiSelection[xPos]) {
            this.isToggled = !emojis.emojiSelection[xPos];
            this.isDragging = this.isSaveRequired = true;
            emojis.emojiSelection[xPos] = !emojis.emojiSelection[xPos];
            emojis.updateEmojiSelection();
            mainHandler.canvasDirty = true;
        }
        return true
    };
    this.onPointermove = function(xPos, yPos) {
        if (this.isSaveRequired) this.mouseDown(xPos, yPos, this.isToggled ? 1 : 2)
    };
    this.handleSave = function() {
        if (this.isDragging) {
            saveEmojis();
            this.isDragging = false;
        }
        this.isSaveRequired = this.isDragging = false
    };
    this.drawCanvasImage = function() {
        mainCanvasCtx.imageSmoothingEnabled = true;
        var emojiPanelX = (prevClientWidth - this.width) / 2,
            emojiPanelY = (prevClientHeight - this.height) / 2;
        mainCanvasCtx.setTransform(1, 0, 0, 1, emojiPanelX, emojiPanelY);
        mainCanvasCtx.fillStyle = blackMoreOpaque;
        mainCanvasCtx.fillRect(0, 0, this.width, this.height);
        mainCanvasCtx.lineWidth = mainSettingsMarginWidth;
        mainCanvasCtx.strokeStyle = whiteRGB2;
        mainCanvasCtx.strokeRect(-1, -1, this.width + 2, this.height + 2);
        var sideLength = Math.floor(this.width / this.numEmojisPerRow), 
            scaleFactor = (sideLength - 2 * this.emojiMarginRatio * sideLength) / emojis.width,
            emojiIndex;
        for (emojiIndex = emojis.totalEmojisCount - 1; 0 <= emojiIndex; emojiIndex--) {
            mainCanvasCtx.setTransform(1, 0, 0, 1, Math.floor(emojiPanelX + emojiIndex % this.numEmojisPerRow * sideLength), Math.floor(emojiPanelY + divideFloor(emojiIndex, this.numEmojisPerRow ) * sideLength));
            if (emojis.emojiSelection[emojiIndex]) {
                mainCanvasCtx.fillStyle = greenBrightSemiTransparent;
                mainCanvasCtx.fillRect(0, 0, sideLength, sideLength);
            }
            mainCanvasCtx.setTransform(scaleFactor, 0, 0, scaleFactor, Math.floor(emojiPanelX + emojiIndex % this.numEmojisPerRow * sideLength + this.emojiMarginRatio * sideLength), Math.floor(emojiPanelY + divideFloor(emojiIndex, this.numEmojisPerRow ) * sideLength + this.emojiMarginRatio * sideLength));
            mainCanvasCtx.drawImage(emojis.emojiCanvasList[emojiIndex], 0, 0);
        }
        mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0);
        mainCanvasCtx.imageSmoothingEnabled = false
    }
}

function ShowError() {
    function showErrorBox() {
        var gameState = gameStateManager.getState();
        if (0 === gameState) nameInput.hide()
        else if (6 === gameState) wsManager.closeAll(errorCode)
        else if (7 === gameState) {
            lobby.hide();
            wsManager.close(wsManager.lobby, 3240);
        } else if (8 === gameState) {
            leaveGame();
            nameInput.hide();
        }
        gameStateManager.setState(3);
        mainButtons.setPosition();
        mainButtons.mainButton[2].displayLabel = getErrorLabel(errorCode);
        sounds.play(3);
        mainHandler.canvasDirty = true
    }

    function getErrorLabel(param_errorCode) {
        var errorIndex;
        for (errorIndex = errorLabels.length - 1; 0 <= errorIndex; errorIndex--)
            if (param_errorCode === errorLabels[errorIndex].code) return errorLabels[errorIndex].label;
        return genericErrorLabel + param_errorCode
    }
    var errorCode, errorLabels, genericErrorLabel;
    this.generate = function() {
        errorLabels = [];
        errorLabels.push({
            label: "No Server Response",
            code: 1006
        });
        errorLabels.push({
            label: "Account successfully saved!",
            code: 3231
        });
        errorLabels.push({
            label: "Account Error",
            code: 3232
        });
        errorLabels.push({
            label: "No Servers Found",
            code: 3249
        });
        errorLabels.push({
            label: "Thanks for the vote.",
            code: 3252
        });
        errorLabels.push({
            label: "Please accept Cookies",
            code: 3265
        });
        errorLabels.push({
            label: "Invalid Password Format",
            code: 3266
        });
        errorLabels.push({
            label: "Lobby Timeout",
            code: 4207
        });
        errorLabels.push({
            label: "Invalid Username",
            code: 4214
        });
        errorLabels.push({
            label: "User already exists.",
            code: 4224
        });
        errorLabels.push({
            label: "No Client Response Error",
            code: 4229
        });
        genericErrorLabel = "Error "
    };
    this.init = function(remoteID, param_errorCode) {
        errorCode = param_errorCode;
        var gameState = gameStateManager.getState();
        if (6 === gameState) {
            if (4211 === param_errorCode) {
                gameUpdatedPrompt.init(0, 0);
                return
            }
            if (4214 !== param_errorCode) {
                preLobby.onPreLobbyJoin(remoteID);
                return
            }
        } else if (7 === gameState) {
            if (remoteID !== wsManager.lobby) return
        } else {
            if (8 === gameState) {
                if (remoteID === wsManager.remote && !singleplayer) announcements.error(getErrorLabel(param_errorCode));
            }
            return
        }
        showErrorBox()
    };
    this.displayError = function(param_errorCode) {
        errorCode = param_errorCode;
        if (8 === gameStateManager.getState()) announcements.error(getErrorLabel(param_errorCode))
        else showErrorBox()
    };
    this.setCanvasVariables = function() {
        mainButtons.mainButton[2].displayLabel = getErrorLabel(errorCode)
    };
    this.mouseDown = function(xPos, yPos) {
        3 === mainButtons.getClickedButton(xPos, yPos, 3, 1) && this.showMainScreen(xPos, yPos)
    };
    this.showMainScreen = function(xPos, yPos) {
        nameInput.init();
        mainButtons.onPointermove(xPos, yPos, false);
        mainHandler.canvasDirty = true
    };
    this.drawCanvasImage = function() {
        mainButtons.drawErrorButtons()
    }
}

function NameInputBar() {
    function addInputBar() {
        inputBars.push({
            input: document.createElement("INPUT"),
            hidden: false,
            color: normalBGColor
        });
        var index = inputBars.length - 1;
        inputBars[index].input.setAttribute("type", "text");
        inputBars[index].input.value = "";
        inputBars[index].input.style.textAlign = 0 === index ? "center" : "left";
        inputBars[index].input.style.backgroundColor = normalBGColor;
        inputBars[index].input.style.border = "3px solid " + whiteRGB2;
        inputBars[index].input.style.color = whiteRGB2;
        inputBars[index].input.style.position = "absolute";
        inputBars[index].input.readOnly = 3 === index;
        inputBars[index].input.addEventListener("input", function() {
            0 === index && nameInput.onInput()
        })
    }
    var inputBars, normalBGColor, invalidBGColor;
    this.init = function() {
        normalBGColor = "rgba(0,0,0,0.6)";
        invalidBGColor = redMoreOpaque;
        void 0 !== inputBars && this.toggleVisibility(0, false);
        inputBars = [];
        addInputBar();
        this.setCanvasVariables()
    };
    this.setCanvasVariables = function() {
        var x = Math.floor(.22 * mainButtons.height / pixelRatio);
        inputBars[0].input.style.font = fontWeightBold + x + fontSizeArial;
        inputBars[0].input.style.padding = Math.floor(.3 * x) + "px 5px";
        inputBars[0].input.style.width = Math.floor(mainButtons.width / pixelRatio - 13) + "px"
    };
    this.getValueByID = function(index) {
        return inputBars[index]
    };
    this.setPosition = function(index) {
        inputBars[index].input.style.left = Math.floor((prevClientWidth / pixelRatio - (mainButtons.width / pixelRatio - 3) - 7) / 2) + "px";
        if (0 === index) inputBars[index].input.style.bottom = Math.floor((prevClientHeight - mainButtons.startingY + mainButtons.margins) / pixelRatio) + "px"
    };
    this.toggleVisibility = function(index, option) {
        if (inputBars[index].visible !== option) {
            if (inputBars[index].visible = option) document.body.appendChild(inputBars[index].input)
            else document.body.removeChild(inputBars[index].input)
        }
    };
    this.checkAndChangeColor = function(index, isValidName) {
        if (!(isValidName && inputBars[index].color === normalBGColor || !isValidName && inputBars[index].color === invalidBGColor)) {
            inputBars[index].color = isValidName ? normalBGColor : invalidBGColor;
            inputBars[index].input.style.backgroundColor = inputBars[index].color
        }
    }
}

function SetGameOrigin() {
    this.myID = this.gameHash = 0;
    var array, callCounter, switchTime, switchCounts;
    this.init = function(param_Array) {
        if (7 === gameStateManager.getState()) {
            array = param_Array;
            callCounter = 0;
            switchTime = mainHandler.time + 4500;
            switchCounts = dataDecoder.decodeGameServerInfo(array) ? 2 : 0; //function returns value indicating if server switch is required
            gameStateManager.setState(10);
            mainCanvasCtx.imageSmoothingEnabled = true;
            gameStateManager.fillBackgroundColor();
            var loadingSprite = sprites.getValueByName("loading");
            var scaleFactor = (isZoom ? .396 : .25) * averageDim / loadingSprite.width;
            mainCanvasCtx.setTransform(scaleFactor, 0, 0, scaleFactor, Math.floor((mainCanvasWidth - scaleFactor * loadingSprite.width) / 2), Math.floor((mainCanvasHeight - scaleFactor * loadingSprite.height) / 2));
            mainCanvasCtx.drawImage(loadingSprite, 0, 0);
            mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
        }
    };
    this.checkAndSwitchServer = function() {
        if (0 < switchCounts && mainHandler.time > switchTime) {
            switchCounts--;
            switchTime += 4500;
            if (0 === mainHandler.packetsReceived && 0 === mainHandler.tick()) {
                if (0 === switchCounts && wsManager.remote < wsManager.serverCount) wsManager.remote += wsManager.gameServerCount
                wsManager.sendWhenWSOpen(wsManager.remote, 5)
            }
        }
    };
    this.processGameInitData = function() {
        if (10 === gameStateManager.getState()) {
            callCounter++;
            if (2 <= callCounter) {
                dataDecoder.gameInitDecoder(array);
                array = null
            }
        }
    }
}

function Lobby() {
    function drawImageScaled(iconIndex, image) {
        gameIconCanvasCtx = gameIconCanvases[iconIndex].getContext("2d", {
            alpha: true
        });
        gameIconCanvasCtx.clearRect(0, 0, 48, 48);
        var minImgDim = getMin(48 / image.width, 48 / image.height);
        gameIconCanvasCtx.setTransform(minImgDim, 0, 0, minImgDim, Math.floor((48 - minImgDim * image.width) / 2), Math.floor((48 - minImgDim * image.height) / 2));
        gameIconCanvasCtx.drawImage(image, 0, 0);
        gameIconCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
    }

    function drawPieChart(center, radius, angle, canvasCtx) {
        canvasCtx.beginPath();
        canvasCtx.moveTo(center, center);
        canvasCtx.lineTo(center + Math.cos(angle) * radius, center + Math.cos(angle + 1.5 * Math.PI) * radius);
        canvasCtx.stroke()
    }

    function generateLobbyGamePreviews() {
        if (7 === gameStateManager.getState()) {
            for (var emptyCanvasIndex = -1, lgIndex = lobbyGames.length - 1; 0 <= lgIndex; lgIndex--)
                if (null === lobbyGames[lgIndex].canvas) {
                    emptyCanvasIndex = lgIndex;
                    break
                } 
                if (-1 !== emptyCanvasIndex) {
                    lgIndex = getPreviewCanvas(lobbyGames[emptyCanvasIndex].mapID, lobbyGames[emptyCanvasIndex].mapSeed);
                    if (null !== lgIndex) lobbyGames[emptyCanvasIndex].canvas = lgIndex;
                    else {
                        var var_currentMapWidth = currentMapWidth,
                            var_currentMapHeight = currentMapHeight,
                            var_mapBaseCanvas = mapBaseCanvas,
                            var_mapBaseCanvasCtx = mapBaseCanvasCtx,
                            var_realMapBaseCanvasCtxImageData = realMapBaseCanvasCtxImageData,
                            var_mapBaseCanvasImageDataArray = mapBaseCanvasImageDataArray,
                            var_currentMapID = currentMapID,
                            var_currentMapSeed = currentMapSeed;
                        loadMap(lobbyGames[emptyCanvasIndex].mapID, lobbyGames[emptyCanvasIndex].mapSeed);
                        mapShading.resetShading();
                        var previewCanvas = document.createElement("canvas");
                        previewCanvas.width = 128;
                        previewCanvas.height = 128;
                        var previewCanvasCtx = previewCanvas.getContext("2d", {
                                alpha: false
                            }),
                            previewMinScale = getMax(128 / currentMapWidth, 128 / currentMapHeight);
                        previewCanvasCtx.imageSmoothingEnabled = true;
                        previewCanvasCtx.setTransform(previewMinScale, 0, 0, previewMinScale, (128 - previewMinScale * currentMapWidth) / 2, (128 - previewMinScale * currentMapHeight) / 2);
                        previewCanvasCtx.drawImage(mapBaseCanvas, 0, 0);
                        currentMapWidth = var_currentMapWidth;
                        currentMapHeight = var_currentMapHeight;
                        mapBaseCanvas = var_mapBaseCanvas;
                        mapBaseCanvasCtx = var_mapBaseCanvasCtx;
                        realMapBaseCanvasCtxImageData = var_realMapBaseCanvasCtxImageData;
                        mapBaseCanvasImageDataArray = var_mapBaseCanvasImageDataArray;
                        currentMapID = var_currentMapID;
                        currentMapSeed = var_currentMapSeed;
                        lobbyGames[emptyCanvasIndex].canvas = previewCanvas
                    }
                    mainHandler.canvasDirty = true
                }
        }
    }

    function getPreviewCanvas(mapID, mapSeed) {
        for (var gameIndex = lobbyGames.length - 1; 0 <= gameIndex; gameIndex--)
            if (null !== lobbyGames[gameIndex].canvas && lobbyGames[gameIndex].mapID === mapID && lobbyGames[gameIndex].mapSeed === mapSeed) return lobbyGames[gameIndex].canvas;
        return null
    }

    function checkGameBoxClick(xPos, yPos) {
        var xIndex, yIndex;
        if (0 === lobbyGames.length) return false;
        var lgIndex = 0;
        var lgBoxY = lgBoxYMin;
        for (yIndex = 0; yIndex < lobbyGamesArrangement[1]; yIndex++) {
            var lgBoxX = lgBoxXMin;
            for (xIndex = 0; xIndex < lobbyGamesArrangement[0]; xIndex++) {
                if (xPos > lgBoxX && xPos < lgBoxX + lgBoxLength && yPos > lgBoxY && yPos < lgBoxY + lgBoxLength) {
                    dataEncoder.joinGame(lobbyGames[lgIndex].gameID);
                    gameSelected = lobbyGames[lgIndex].gameID !== gameSelected ? lobbyGames[lgIndex].gameID : -1;
                    mainHandler.canvasDirty = true;
                    return true
                }
                lgIndex++;
                if (lgIndex >= lobbyGames.length) return false;
                lgBoxX += lgBoxLength + bufferLength
            }
            lgBoxY += lgBoxLength + bufferLength
        }
        return false
    }
    var lgBoxLength, lgBoxLengthFloored, lobbyGamesArrangement, lgBoxXMin, lgBoxYMin, lobbyGamesInfoFontStyle, gameIconCanvases, lobbyGames, canvasVariables, gameSelected, I, D, 
        lobbyStatsLabels = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
        lobbyStats = [0, 0, 0, 0], lobbyStatsFontStyle, exitDiameter, exitCenterX, exitCenterY, lobbyGamesLength, gameIconCanvasCtx, angle;
    this.init = function() {
        lobbyGamesLength = 0;
        gameSelected = -1;
        gameStateManager.setState(7);
        lobbyGames = [];
        this.setCanvasVariables();
        var iconIndex;
        gameIconCanvases = Array(11);
        for (iconIndex = gameIconCanvases.length; 0 <= iconIndex; iconIndex--) {
            gameIconCanvases[iconIndex] = document.createElement("canvas");
            gameIconCanvases[iconIndex].width = 48;
            gameIconCanvases[iconIndex].height = 48;
        }
        for (iconIndex = 0; 7 > iconIndex; iconIndex++) {
            gameIconCanvasCtx = gameIconCanvases[iconIndex].getContext("2d", {
                alpha: true
            }),
            angle = 1.5 * Math.PI;
            gameIconCanvasCtx.lineWidth = 2;
            gameIconCanvasCtx.strokeStyle = whiteRGB2;
            gameIconCanvasCtx.clearRect(0, 0, 48, 48);
            for (var tIndex = 0; tIndex < iconIndex + 2; tIndex++) {
                var nextAngle = angle + 2 * Math.PI / (iconIndex + 2);
                gameIconCanvasCtx.fillStyle = teamColors.piechartColors[tIndex + 1];
                gameIconCanvasCtx.beginPath();
                gameIconCanvasCtx.arc(24, 24, 23, angle, nextAngle);
                gameIconCanvasCtx.lineTo(24, 24);
                gameIconCanvasCtx.fill();
                if (0 !== tIndex) drawPieChart(24, 23, angle, gameIconCanvasCtx);
                angle = nextAngle
            }
            drawPieChart(24, 23, 1.5 * Math.PI, gameIconCanvasCtx);
            gameIconCanvasCtx.beginPath();
            gameIconCanvasCtx.arc(24, 24, 23, 0, 2 * Math.PI);
            gameIconCanvasCtx.stroke()
        }
        drawImageScaled(7, sprites.getValueByID(4));
        drawImageScaled(8, emojis.emojiCanvasList[27]);
        drawImageScaled(9, emojis.emojiCanvasList[46]);
        drawImageScaled(10, emojis.emojiCanvasList[36]);
        sounds.play(2);
        mainHandler.canvasDirty = true
    };
    this.closeLobby = function() {
        this.hide();
        wsManager.closeAll(3240);
        nameInput.init();
        mainHandler.canvasDirty = true
    };
    this.hide = function() {
        lobbyGames = [];
        gameIconCanvases = []
    };
    this.setCanvasVariables = function() {
        lobbyGamesArrangement = [0, 0];
        canvasVariables = [0, 0, 0, 0];
        if (isZoom) {
            I = Math.floor(.8 * .4 * averageDim);
            D = Math.floor(.56 * I);
            canvasVariables[0] = bufferLength;
            if (mainCanvasWidth < mainCanvasHeight) {
                canvasVariables[1] = D + 2 * bufferLength;
                canvasVariables[2] = mainCanvasWidth - 3 * canvasVariables[0];
                canvasVariables[3] = mainLeaderboardIcon.toY() - 3 * bufferLength - D;
                exitDiameter = Math.floor(.95 * D);
                exitCenterX = Math.floor((mainCanvasWidth - I - bufferLength) / 2);
                exitCenterY = Math.floor(bufferLength + D / 2);
            } else {
                canvasVariables[1] = bufferLength;
                canvasVariables[2] = mainCanvasWidth - 3 * bufferLength - I;
                canvasVariables[3] = mainLeaderboardIcon.toY() - 2 * bufferLength;
                exitDiameter = Math.floor(.8 * I);
                if (canvasVariables[3] - D < I) {
                    exitDiameter = Math.floor(.8 * (canvasVariables[3] - D));
                    exitDiameter = getMax(D, exitDiameter);
                }
                exitCenterX = Math.floor(mainCanvasWidth - I / 2 - bufferLength);
                exitCenterY = Math.floor(bufferLength + D + (canvasVariables[3] - D) / 2);
                exitCenterY = getMax(exitCenterY, Math.floor(D + 2 * bufferLength + exitDiameter / 2))
            }
        } else {
            I = Math.floor(.2016 * averageDim);
            D = Math.floor(.56 * I);
            canvasVariables[2] = Math.floor(.5 * mainCanvasWidth);
            canvasVariables[3] = Math.floor(.5 * mainCanvasHeight);
            canvasVariables[1] = Math.floor(.45 * (mainCanvasHeight - canvasVariables[3]));
            canvasVariables[0] = Math.floor((mainCanvasWidth - canvasVariables[2]) / 2);
            exitDiameter = Math.floor(.75 * D);
            exitCenterX = Math.floor(mainCanvasWidth / 2);
            exitCenterY = Math.floor(canvasVariables[1] + canvasVariables[3] + (mainCanvasHeight - canvasVariables[3] - canvasVariables[1]) / 2);
        }
        lobbyStatsFontStyle = fontWeightBold + Math.floor(.65 * D / 4) + fontSizeArial;
        var verticalCount, horizontalCount;
        for (verticalCount = horizontalCount = 1; verticalCount * horizontalCount < lobbyGames.length;) {
            if (canvasVariables[2] / (verticalCount + 1) > canvasVariables[3] / (horizontalCount + 1)) verticalCount++
            else horizontalCount++;
        }
        lgBoxLength = getMin((canvasVariables[2] - (verticalCount - 1) * bufferLength) / verticalCount, (canvasVariables[3] - (horizontalCount - 1) * bufferLength) / horizontalCount)
        lgBoxLengthFloored = Math.floor(lgBoxLength);
        lobbyGamesInfoFontStyle = fontWeightBold + Math.floor(.5 * lgBoxLength / 5) + fontSizeArial;
        lobbyGamesArrangement[0] = verticalCount;
        lobbyGamesArrangement[1] = horizontalCount;
        lgBoxXMin = canvasVariables[0] + Math.floor((canvasVariables[2] - lobbyGamesArrangement[0] * lgBoxLength - (lobbyGamesArrangement[0] - 1) * bufferLength) / 2);
        lgBoxYMin = canvasVariables[1] + Math.floor((canvasVariables[3] - lobbyGamesArrangement[1] * lgBoxLength - (lobbyGamesArrangement[1] - 1) * bufferLength) / 2)
    };
    this.updateObjects = function(param_lobbyStats, param_lobbyGames) {
        var gameIndex, gamesCount = lobbyGames.length;
        lobbyStats = param_lobbyStats;
        for (gameIndex = 0; gameIndex < param_lobbyGames.length; gameIndex++) {
            var previewCanvas = getPreviewCanvas(param_lobbyGames[gameIndex].mapID, param_lobbyGames[gameIndex].mapSeed);
            lobbyGames.push({
                gameID: param_lobbyGames[gameIndex].id,
                gamemode: typeof(modHandler) == "object" && modHandler.customGamemode != 11 ? modHandler.customGamemode : param_lobbyGames[gameIndex].gamemode,
                isContest: param_lobbyGames[gameIndex].isContest,
                mapID: typeof(modHandler) == "object" && modHandler.customMap != -1 ? modHandler.customMap : param_lobbyGames[gameIndex].mapID,
                mapSeed: param_lobbyGames[gameIndex].mapSeed,
                joined: param_lobbyGames[gameIndex].joinCount,
                timeLeft: param_lobbyGames[gameIndex].timeLeft,
                maxPlayers: param_lobbyGames[gameIndex].maxPlayers,
                canvas: previewCanvas
            })
            if (param_lobbyGames[gameIndex].isContest && param_lobbyGames[gameIndex].timeLeft == 30) sounds.play(4)
        }
        for (gameIndex = gamesCount - 1; 0 <= gameIndex; gameIndex--) lobbyGames.shift();
        if (-1 !== gameSelected) {
            var selection = gameSelected;
            gameSelected = -1;
            for (gameIndex = lobbyGames.length - 1; 0 <= gameIndex; gameIndex--) {
                if (lobbyGames[gameIndex].gameID === selection) {
                    gameSelected = selection;
                    break;
                }
            }
        }
        if (lobbyGames.length > lobbyGamesLength || lobbyGames.length < lobbyGamesLength) {
            lobbyGamesLength = lobbyGames.length;
            this.setCanvasVariables();
        }
        this.checkAndGenerateLobbyGamePreviews();
        mainHandler.canvasDirty = true
    };
    this.checkAndGenerateLobbyGamePreviews = function() {
        for (var lgIndex = lobbyGames.length - 1; 0 <= lgIndex; lgIndex--) {
            if (null === lobbyGames[lgIndex].canvas) setTimeout(generateLobbyGamePreviews, 0)
        }
    };
    this.getLobbyGames = function() {
        return lobbyGames;
    }
    this.getGameSelected = function() {
        return gameSelected;
    }
    this.setGameSelected = function(gameID) {
        gameSelected = gameID;
    }
    this.mouseDown = function(xPos, yPos) {
        if (4 * ((xPos - exitCenterX) * (xPos - exitCenterX) + (yPos - exitCenterY) * (yPos - exitCenterY)) <= exitDiameter * exitDiameter) {
            this.closeLobby();
            mainButtons.onPointermove(xPos, yPos, false);
            return true;
        } else return checkGameBoxClick(xPos, yPos)
    };
    this.drawCanvasImage = function() {
        var lgIndex = 0,
            lgBoxX,
            lgBoxY = lgBoxYMin;
        mainCanvasCtx.imageSmoothingEnabled = true;
        mainCanvasCtx.lineWidth = 3;
        var exitRadius = Math.floor(.5 * exitDiameter);
        mainCanvasCtx.fillStyle = blackSemiTransparent;
        mainCanvasCtx.beginPath();
        mainCanvasCtx.arc(exitCenterX, exitCenterY, exitRadius, 0, 2 * Math.PI);
        mainCanvasCtx.fill();
        mainCanvasCtx.strokeStyle = whiteRGB2;
        mainCanvasCtx.beginPath();
        mainCanvasCtx.arc(exitCenterX, exitCenterY, exitRadius, 0, 2 * Math.PI);
        mainCanvasCtx.stroke();
        var exitSpriteHeight = sprites.getValueByID(0).height;
        var exitSpriteScale = .6 * exitDiameter / exitSpriteHeight;
        mainCanvasCtx.setTransform(exitSpriteScale, 0, 0, exitSpriteScale, Math.floor(exitCenterX - .56 * exitSpriteScale * sprites.getValueByID(0).width), Math.floor(exitCenterY - .5 * exitSpriteScale * exitSpriteHeight));
        mainCanvasCtx.drawImage(sprites.getValueByID(0), 0, 0);
        mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0);
        mainCanvasCtx.fillStyle = blackSemiTransparent;
        mainCanvasCtx.fillRect(mainCanvasWidth - I - bufferLength, bufferLength, I, D);
        0 <= gameSelected ? (mainCanvasCtx.fillStyle = greenBrightSemiTransparent, mainCanvasCtx.fillRect(mainCanvasWidth - I - bufferLength, bufferLength, I, Math.floor(.25 * D))) : (mainCanvasCtx.fillStyle = yellowSemiTransparent, mainCanvasCtx.fillRect(mainCanvasWidth - I - bufferLength, bufferLength + Math.floor(.25 * D), I, Math.floor(.25 * D)));
        mainCanvasCtx.strokeStyle = whiteRGB2;
        mainCanvasCtx.strokeRect(mainCanvasWidth - I - bufferLength, bufferLength, I, D);
        mainCanvasCtx.fillStyle = whiteRGB2;
        mainCanvasCtx.font = lobbyStatsFontStyle;
        mainCanvasCtx.textBaseline = middleAlign;
        for (var statIndex = 3; 0 <= statIndex; statIndex--) {
            var yOffset = Math.floor(bufferLength + (statIndex + 1) * (D + 2 * Math.floor(.08 * D)) / 5 - Math.floor(.08 * D));
            mainCanvasCtx.textAlign = leftAlign;
            mainCanvasCtx.fillText(lobbyStatsLabels[statIndex], mainCanvasWidth - I - bufferLength + Math.floor(.04 * I), yOffset);
            mainCanvasCtx.textAlign = rightAlign;
            mainCanvasCtx.fillText(attackBars.splitNumber(lobbyStats[statIndex]), mainCanvasWidth - bufferLength - Math.floor(.04 * I), yOffset)
        }
        if (0 !== lobbyGames.length) {
            for (var row = 0; row < lobbyGamesArrangement[1]; row++) {
                lgBoxX = lgBoxXMin;
                for (var col = 0; col < lobbyGamesArrangement[0]; col++) {
                    var lgBoxXFloored = Math.floor(lgBoxX),
                        lgBoxYFloored = Math.floor(lgBoxY);
                    if (null === lobbyGames[lgIndex].canvas) {
                        mainCanvasCtx.fillStyle = blackSemiTransparent;
                        mainCanvasCtx.fillRect(lgBoxXFloored, lgBoxYFloored, lgBoxLengthFloored, lgBoxLengthFloored);
                    } else {
                        var previewScale = lgBoxLengthFloored / 128;
                        mainCanvasCtx.setTransform(previewScale, 0, 0, previewScale, lgBoxXFloored, lgBoxYFloored);
                        mainCanvasCtx.drawImage(lobbyGames[lgIndex].canvas, 0, 0);
                        mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
                    }
                    if (gameSelected === lobbyGames[lgIndex].gameID) {
                        var crossBoxScale = Math.floor(.2 * lgBoxLengthFloored),
                            crossScale = Math.floor(.3 * crossBoxScale);
                        mainCanvasCtx.fillStyle = greenDarkerMoreOpaque;
                        mainCanvasCtx.fillRect(lgBoxXFloored + lgBoxLengthFloored - crossBoxScale, lgBoxYFloored, crossBoxScale, crossBoxScale);
                        mainCanvasCtx.fillStyle = blackRGB;
                        mainCanvasCtx.fillRect(lgBoxXFloored + lgBoxLengthFloored - crossBoxScale, lgBoxYFloored, 2, crossBoxScale);
                        mainCanvasCtx.fillRect(lgBoxXFloored + lgBoxLengthFloored - crossBoxScale, lgBoxYFloored + crossBoxScale - 2, crossBoxScale, 2);
                        gameButtons.drawMenuSymbol(lgBoxXFloored + lgBoxLengthFloored - crossBoxScale + crossScale, lgBoxYFloored + crossScale, crossBoxScale - 2 * crossScale);
                        mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0);
                        mainCanvasCtx.lineWidth = 3;
                        mainCanvasCtx.fillStyle = greenDarkerMoreOpaque
                    } else mainCanvasCtx.fillStyle = blackOpaque;
                    var iconBoxSize = Math.floor(lgBoxLength / 4);
                    mainCanvasCtx.fillRect(lgBoxXFloored, Math.floor(lgBoxYFloored + .8 * lgBoxLength), lgBoxLengthFloored, Math.floor(lgBoxLength / 5));
                    mainCanvasCtx.fillRect(lgBoxXFloored, lgBoxYFloored, iconBoxSize, iconBoxSize);
                    mainCanvasCtx.fillStyle = blackRGB;
                    mainCanvasCtx.fillRect(lgBoxXFloored, Math.floor(lgBoxYFloored + .8 * lgBoxLength), lgBoxLengthFloored, 2);
                    mainCanvasCtx.fillRect(lgBoxXFloored + iconBoxSize - 2, lgBoxYFloored, 2, iconBoxSize);
                    mainCanvasCtx.fillRect(lgBoxXFloored, lgBoxYFloored + iconBoxSize - 2, iconBoxSize, 2);

                    mainCanvasCtx.font = lobbyGamesInfoFontStyle;
                    mainCanvasCtx.textBaseline = middleAlign;
                    mainCanvasCtx.textAlign = leftAlign;
                    mainCanvasCtx.fillStyle = blueBrightRGB;
                    mainCanvasCtx.fillText(lobbyGames[lgIndex].joined.toString(), Math.floor(lgBoxXFloored + .07 * lgBoxLength), Math.floor(lgBoxYFloored + .9 * lgBoxLength));

                    mainCanvasCtx.textAlign = centerAlign;
                    mainCanvasCtx.fillStyle = greenBrightRGB;
                    mainCanvasCtx.fillText(lobbyGames[lgIndex].gameID.toString(), Math.floor(lgBoxXFloored + .5 * lgBoxLength), Math.floor(lgBoxYFloored + .9 * lgBoxLength));
                    
                    mainCanvasCtx.textAlign = rightAlign;
                    mainCanvasCtx.fillStyle = redLighterRGB;
                    mainCanvasCtx.fillText(lobbyGames[lgIndex].timeLeft.toString(), Math.floor(lgBoxXFloored + .93 * lgBoxLength), Math.floor(lgBoxYFloored + .9 * lgBoxLength));

                    mainCanvasCtx.strokeStyle = whiteMoreOpaque;
                    mainCanvasCtx.strokeRect(lgBoxXFloored, lgBoxYFloored, lgBoxLengthFloored, lgBoxLengthFloored);
                    var iconBoxScale = Math.floor(.16 * lgBoxLength),
                        iconScale = iconBoxScale / 48;
                    mainCanvasCtx.setTransform(iconScale, 0, 0, iconScale, Math.floor(lgBoxXFloored + (iconBoxSize - iconBoxScale) / 2), Math.floor(lgBoxYFloored + (iconBoxSize - iconBoxScale) / 2));
                    gameIconCanvases.length > lobbyGames[lgIndex].gamemode && mainCanvasCtx.drawImage(gameIconCanvases[lobbyGames[lgIndex].gamemode], 0, 0);
                    mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0);
                    if (lobbyGames[lgIndex].isContest) {
                        var crown = sprites.getValueByID(4),
                            crownScale = .5 * lgBoxLength / crown.width;
                        mainCanvasCtx.setTransform(crownScale, 0, 0, crownScale, Math.floor(lgBoxXFloored + (lgBoxLength - crownScale * crown.width) / 2), Math.floor(lgBoxYFloored + (lgBoxLength - crownScale * crown.height) / 2));
                        mainCanvasCtx.globalAlpha = .6;
                        mainCanvasCtx.drawImage(crown, 0, 0);
                        mainCanvasCtx.globalAlpha = 1;
                        mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0);
                    }
                    lgIndex++;
                    if (lgIndex >= lobbyGames.length) return;
                    lgBoxX += lgBoxLength + bufferLength
                }
                lgBoxY += lgBoxLength + bufferLength
            }
        }
    }
}

function GameUpdatedPrompt() {
    this.init = function(xPos, yPos) {
        gameStateManager.setState(5);
        mainButtons.onPointermove(xPos, yPos, false);
        mainHandler.canvasDirty = true
    };
    this.drawCanvasImage = function() {
        mainButtons.drawUpdatedButtons()
    };
    this.mouseDown = function(xPos, yPos) {
        var buttonIndex = mainButtons.getClickedButton(xPos, yPos, 5, 2);
        if (5 === buttonIndex) window.open("https://www.territorial.io")
        else if (6 === buttonIndex) {
            nameInput.init();
            mainButtons.onPointermove(xPos, yPos, false);
            mainHandler.canvasDirty = true;
        }
    }
}

function SingleSettings() {
    function drawButton(startingX, startingY, width, height, param_fillStyle, param_fontSize, textLabel, difficultyRatio, entityCompositionRatio) {
        mainCanvasCtx.fillStyle = param_fillStyle;
        mainCanvasCtx.fillRect(startingX, startingY, width, height);
        if (0 <= difficultyRatio) {
            mainCanvasCtx.fillStyle = "rgba(" + 22 * difficultyRatio + "," + (110 - 22 * difficultyRatio) + ",0,0.75)";
            mainCanvasCtx.fillRect(startingX, startingY, (1 + difficultyRatio) * width / 6, height);
        }
        if (0 < entityCompositionRatio) {
            mainCanvasCtx.fillStyle = "rgba(255,255,255,0.3)";
            mainCanvasCtx.fillRect(startingX, startingY, entityCompositionRatio * width / maxEntities, height);
        }
        mainCanvasCtx.strokeStyle = whiteRGB2;
        mainCanvasCtx.strokeRect(startingX, startingY, width, height);
        if (0 !== param_fontSize) {
            mainCanvasCtx.fillStyle = whiteRGB2;
            mainCanvasCtx.font = fontWeightBold + Math.floor(param_fontSize * height) + fontSizeArial;
            mainCanvasCtx.fillText(textLabel, Math.floor(startingX + width / 2), Math.floor(startingY + .52 * height));
        }
    }
    var canvasDimensionVariables = [0, 0, 0, 0];
    this.botSettings = [{
        difficulty: 1,
        group: 512
    }];
    this.init = function() {
        mapMenu.visible = false;
        gameStateManager.setState(2);
        this.setCanvasVariables();
        mainHandler.canvasDirty = true
    };
    this.hide = function() {};
    this.setCanvasVariables = function() {
        canvasDimensionVariables[2] = Math.floor((isZoom ? .49 : .4) * averageDim);
        canvasDimensionVariables[1] = Math.floor((mainCanvasHeight - canvasDimensionVariables[2] / 6 - this.botSettings.length * (bufferLength + canvasDimensionVariables[2] / 10)) / 2);
        canvasDimensionVariables[0] = Math.floor((mainCanvasWidth - canvasDimensionVariables[2]) / 2);
        mapMenu.visible && mapMenu.setCanvasVariables()
    };
    this.setBotSettings = function(param_gamemode) {
        var teamIndex;
        if (6 < param_gamemode) this.botSettings = [{
            difficulty: 0,
            group: 512
        }];
        else {
            this.botSettings = [];
            for (teamIndex = 0; teamIndex < param_gamemode + 2; teamIndex++) this.botSettings.push({
                difficulty: 0,
                group: 0
            });
            this.assignBotGroups()
        }
    };
    this.showMainScreen = function() {
        mainHandler.canvasDirty = true;
        if (mapMenu.visible) mapMenu.visible = false
        else {
            this.hide();
            nameInput.init();
        }
    };
    this.getEntityCount = function() {
        var teamIndex;
        if (customJSON.isCustomJSON && !customJSON.data.replay) return customJSON.data.entityCount;
        var entities = 0;
        for (teamIndex = this.botSettings.length - 1; 0 <= teamIndex; teamIndex--) entities += this.botSettings[teamIndex].group;
        return entities
    };
    this.onPointermove = function(xPos, yPos) {
        return mapMenu.visible && mapMenu.onPointermove(xPos, yPos) ? true : -1 === this.getClickedButton(xPos, yPos) ? false : true
    };
    this.startSingleGame = function() {
        wsManager.remote = 0;
        wsManager.sendWhenWSOpen(0, 3) && dataEncoder.singlePlayed(0);
        gameStateManager.enterInGameState();
        if (customJSON.isCustomJSON) customJSON.startCustomGame();
        else {
            var var_gamemode = this.botSettings.length - 2;
            var_gamemode = 0 > var_gamemode ? 7 : var_gamemode;
            gameInit(Math.floor(16384 * Math.random()), 0, [{
                name: nameInput.getInput(),
                color: mainSettings.buttons[2].buttonClass.getRGB64(),
                status: 0
            }], var_gamemode, false)
        }
    };
    this.click = function(xPos, yPos) {
        return false
    };
    this.mouseDown = function(xPos, yPos) {
        if (mainLeaderboard.visible || mainSettings.buttons[1].buttonClass.visible || mainSettings.buttons[2].buttonClass.visible || mainSettings.buttons[4].buttonClass.visible) return false;
        if (mapMenu.visible && !customJSON.isCustomJSON) return mapMenu.mouseDown(xPos, yPos);
        var buttonIndex = this.getClickedButton(xPos, yPos);
        if (-1 === buttonIndex) return false;
        if (0 === buttonIndex) {
            this.showMainScreen();
            return true;
        }
        if (1 === buttonIndex) {
            if (customJSON.isCustomJSON) {
                customJSON.reset();
                mainHandler.canvasDirty = true;
                return true;
            } else {
                mapMenu.show();
                return true;
            }
        }
        if (2 === buttonIndex) {
            this.hide();
            this.startSingleGame();
            return true;
        }
        if (customJSON.isCustomJSON) return false;
        if (27 === buttonIndex) {
            if (8 > this.botSettings.length) {
                this.botSettings.push({
                    difficulty: 0,
                    group: maxEntities
                });
                this.assignBotGroups();
                this.setCanvasVariables();
                mainHandler.canvasDirty = true;
            }
            return true;
        }
        var teamIndex = Math.floor((buttonIndex - 3) / 3);
        if (0 === buttonIndex % 3) {
            if (1 < this.botSettings.length) {
                this.botSettings.splice(teamIndex, 1);
                this.setCanvasVariables();
                mainHandler.canvasDirty = true;
            }
            return true;
        }
        var buttonXPos = (canvasDimensionVariables[2] - canvasDimensionVariables[2] / 10 - 2 * bufferLength) / 2;
        if (1 === buttonIndex % 3) {
            if (0 === teamIndex && 1 === this.botSettings[teamIndex].group) return true;
            if (xPos < canvasDimensionVariables[0] + canvasDimensionVariables[2] - 1.5 * buttonXPos - bufferLength) this.botSettings[teamIndex].difficulty--
            else this.botSettings[teamIndex].difficulty++;
            if (0 > this.botSettings[teamIndex].difficulty) this.botSettings[teamIndex].difficulty = 5
            else if (5 < this.botSettings[teamIndex].difficulty) this.botSettings[teamIndex].difficulty = 0;
            return mainHandler.canvasDirty = true
        }
        mainHandler.canvasDirty = true;
        var buttonYPos = (xPos - (canvasDimensionVariables[0] + canvasDimensionVariables[2] - buttonXPos)) / buttonXPos - .5;
        var entityChange = Math.floor((0 > buttonYPos ? -(buttonYPos * buttonYPos) : buttonYPos * buttonYPos) * maxEntities);
        entityChange = 0 === entityChange ? 1 : entityChange;
        var newEntityCount = maxEntities;
        for (buttonIndex = this.botSettings.length - 1; 0 <= buttonIndex; buttonIndex--) {
            if (teamIndex !== buttonIndex) newEntityCount -= this.botSettings[buttonIndex].group;
        }
        if (0 > entityChange) {
            if (1 === this.botSettings[teamIndex].group) {
                this.botSettings[teamIndex].group = newEntityCount;
                return true
            } 
        } else if (this.botSettings[teamIndex].group === newEntityCount) {
            this.botSettings[teamIndex].group = 1;
            return true;
        }
        this.botSettings[teamIndex].group += entityChange;
        if (1 > this.botSettings[teamIndex].group) this.botSettings[teamIndex].group = 1
        else if (this.botSettings[teamIndex].group > newEntityCount) this.botSettings[teamIndex].group = newEntityCount;
        return true
    };
    this.assignBotGroups = function() {
        var averageEntitiesPerTeam = Math.floor(maxEntities / this.botSettings.length),
            unsortedEntities = maxEntities % this.botSettings.length,
            teamIndex = this.botSettings.length - 1;
        for (; 0 <= teamIndex; teamIndex--) {
            this.botSettings[teamIndex].group = averageEntitiesPerTeam;
        }
        this.botSettings[0].group += unsortedEntities
    };
    this.getClickedButton = function(xPos, yPos) {
        var teamIndex, buttonWidth = (canvasDimensionVariables[2] - 2 * bufferLength) / 3,
            buttonHeight = canvasDimensionVariables[2] / 6;
        if (xPos < canvasDimensionVariables[0] || yPos < canvasDimensionVariables[1] || xPos >= canvasDimensionVariables[0] + canvasDimensionVariables[2]) return -1;
        if (yPos < canvasDimensionVariables[1] + buttonHeight) {
            if (xPos < canvasDimensionVariables[0] + buttonWidth) return 0
            else if (xPos < canvasDimensionVariables[0] + buttonWidth + bufferLength) return -1
            else if (xPos < canvasDimensionVariables[0] + 2 * buttonWidth + bufferLength) return 1
            else if (xPos < canvasDimensionVariables[0] + 2 * buttonWidth + 2 * bufferLength) return -1
            else return 2;
        }
        var buttonSpacing = canvasDimensionVariables[2] / 10;
        buttonWidth = (canvasDimensionVariables[2] - buttonSpacing - 2 * bufferLength) / 2;
        for (teamIndex = 0; teamIndex < this.botSettings.length; teamIndex++) {
            var buttonYPos = canvasDimensionVariables[1] + buttonHeight + bufferLength + teamIndex * (buttonSpacing + bufferLength);
            if (yPos < buttonYPos) return -1;
            if (yPos <= buttonYPos + buttonSpacing) {
                if (xPos < canvasDimensionVariables[0] + buttonSpacing) return 3 + 3 * teamIndex
                else if (xPos < canvasDimensionVariables[0] + buttonSpacing + bufferLength) return -1
                else if (xPos < canvasDimensionVariables[0] + canvasDimensionVariables[2] - buttonWidth - bufferLength) return 4 + 3 * teamIndex
                else if (xPos < canvasDimensionVariables[0] + canvasDimensionVariables[2] - buttonWidth) return -1
                else return 5 + 3 * teamIndex
            }
        }
        if (8 > this.botSettings.length) {
            buttonYPos = canvasDimensionVariables[1] + buttonHeight + bufferLength + this.botSettings.length * (buttonSpacing + bufferLength);
            if (yPos < buttonYPos || yPos > buttonYPos + buttonSpacing || xPos > canvasDimensionVariables[0] + buttonSpacing) return -1
            else return 27
        } else return -1
    };
    this.drawCanvasImage = function() {
        var teamIndex;
        mainCanvasCtx.lineWidth = 2;
        mainCanvasCtx.textAlign = centerAlign;
        mainCanvasCtx.textBaseline = middleAlign;
        var buttonWidth = (canvasDimensionVariables[2] - 2 * bufferLength) / 3,
            buttonHeight = canvasDimensionVariables[2] / 6;
        drawButton(canvasDimensionVariables[0], canvasDimensionVariables[1], buttonWidth, buttonHeight, "rgba(128,0,0,0.75)", .4, "Back", -1, -1);
        drawButton(canvasDimensionVariables[0] + buttonWidth + bufferLength, canvasDimensionVariables[1], buttonWidth, buttonHeight, "rgba(" + (customJSON.isCustomJSON ? 128 : 0) + ",128,128,0.75)", .4, customJSON.isCustomJSON ? "Reset" : "Maps", -1, -1);
        drawButton(canvasDimensionVariables[0] + canvasDimensionVariables[2] - buttonWidth, canvasDimensionVariables[1], buttonWidth, buttonHeight, "rgba(0,128,0,0.75)", .4, "Start", -1, -1);
        if (!customJSON.isCustomJSON) {
            var buttonSpacing = canvasDimensionVariables[2] / 10;
            buttonWidth = (canvasDimensionVariables[2] - buttonSpacing - 2 * bufferLength) / 2;
            for (teamIndex = 0; teamIndex < this.botSettings.length; teamIndex++) {
                var buttonYOffset = canvasDimensionVariables[1] + buttonHeight + bufferLength + teamIndex * (buttonSpacing + bufferLength);
                drawButton(canvasDimensionVariables[0], buttonYOffset, buttonSpacing, buttonSpacing, "rgba(0,128,0,0.75)", 0, null, -1);
                drawButton(canvasDimensionVariables[0] + buttonSpacing + bufferLength, buttonYOffset, buttonWidth, buttonSpacing, blackMoreOpaque, .4, this.getMyGroupLabel(teamIndex), this.botSettings[teamIndex].difficulty, -1);
                drawButton(canvasDimensionVariables[0] + canvasDimensionVariables[2] - buttonWidth, buttonYOffset, buttonWidth, buttonSpacing, blackMoreOpaque, .4, this.getOtherGroupLabel(teamIndex), -1, this.botSettings[teamIndex].group)
            }
            if (8 > this.botSettings.length) {
                buttonYOffset = canvasDimensionVariables[1] + buttonHeight + bufferLength + this.botSettings.length * (buttonSpacing + bufferLength);
                drawButton(canvasDimensionVariables[0], buttonYOffset, buttonSpacing, buttonSpacing, "rgba(128,128,20,0.75)", 0, null, -1, -1);
                teamIndex = canvasDimensionVariables[0];
                mainCanvasCtx.fillStyle = whiteRGB2;
                buttonWidth = getMax(2, Math.floor(.5 * buttonSpacing));
                buttonWidth -= buttonWidth % 2;
                buttonHeight = getMax(2, Math.floor(.1 * buttonSpacing));
                buttonHeight -= buttonHeight % 2;
                buttonSpacing = Math.floor((buttonSpacing - buttonWidth) / 2);
                var symbolPos = Math.floor(buttonSpacing + (buttonWidth - buttonHeight) / 2);
                mainCanvasCtx.fillRect(teamIndex + buttonSpacing, buttonYOffset + symbolPos, buttonWidth, buttonHeight);
                mainCanvasCtx.fillRect(teamIndex + symbolPos, buttonYOffset + buttonSpacing, buttonHeight, buttonWidth)
            }
            mapMenu.visible && mapMenu.drawCanvasImage()
        }
    };
    this.getMyGroupLabel = function(teamID) {
        return 0 === teamID && 1 === this.botSettings[teamID].group ? "You" : difficultyEngine.difficultyLabel[this.botSettings[teamID].difficulty]
    };
    this.getOtherGroupLabel = function(teamID) {
        return 1 === this.botSettings[teamID].group ? "1 Player" : this.botSettings[teamID].group + " Players"
    }
}

function MainSettings() {
    this.width = this.count = 0;
    this.buttons = null;
    this.init = function() {
        this.buttons = [];
        this.buttons.push({
            startingX: 0,
            startingY: 0,
            active: isZoom,
            buttonClass: null
        });
        this.buttons.push({
            startingX: 0,
            startingY: 0,
            active: false,
            buttonClass: new EmojisPanel
        });
        this.buttons.push({
            startingX: 0,
            startingY: 0,
            active: false,
            buttonClass: new ColorsPanel
        });
        this.buttons.push({
            startingX: 0,
            startingY: 0,
            active: setSound(),
            buttonClass: null
        });
        this.buttons.push({
            startingX: 0,
            startingY: 0,
            active: false,
            buttonClass: typeof(ModPanel) != "undefined" ? new ModPanel : null
        });
        this.buttons[2].buttonClass.loadColors();
        this.count = this.buttons.length;
        this.width = 0
    };
    this.setPosition = function() {
        this.width = Math.floor((isZoom ? .063 : .04) * averageDim);
        this.width += 4 - this.width % 4;
        this.buttons[0].startingX = bufferLength;
        this.buttons[0].startingY = prevClientHeight - this.width - bufferLength;
        for (var butIndex = 1; butIndex < this.count; butIndex++) {
            this.buttons[butIndex].startingX = this.buttons[butIndex - 1].startingX + Math.floor(isZoom ? 1.5 * bufferLength : 1.36 * bufferLength) + this.width;
            this.buttons[butIndex].startingY = this.buttons[0].startingY
        }
    };
    this.getClickedButton = function(xPos, yPos) {
        if (!sprites.areAllSpritesLoaded()) return -1;
        for (var butIndex = this.count - 1; 0 <= butIndex; butIndex--)
            if (xPos >= this.buttons[butIndex].startingX && yPos >= this.buttons[butIndex].startingY && xPos < this.buttons[butIndex].startingX + this.width && yPos < this.buttons[butIndex].startingY + this.width) return butIndex;
        return -1
    };
    this.panelsHidden = function() {
        for (var butIndex of [1,2,4])
            if (this.buttons[butIndex].buttonClass.visible) return true;
        return false
    };
    this.hideIfNotHidden = function() {
        for (var butIndex of [1,2,4]) {
            if (this.buttons[butIndex].buttonClass.visible) {
                this.buttons[butIndex].buttonClass.mouseDown(-5E3, -5E3, 0);
                return true
            }
        }
        return false
    };
    this.mouseDown = function(xPos, yPos, n) {
        if (n) {
            for (var butIndex of [1,2,4]) {
                if (this.buttons[butIndex].buttonClass.visible) {
                    this.buttons[butIndex].buttonClass.mouseDown(xPos, yPos, 0);
                    return true;
                }
            }
        }
        var butIndex = this.getClickedButton(xPos, yPos);
        if (n) {
            if (0 === butIndex || 3 === butIndex) {
                this.buttons[butIndex].active = !this.buttons[butIndex].active;
                if (!butIndex) {
                    isZoom = this.buttons[butIndex].active;
                    canvasManager.forceUpdateCanvas();
                }
                saveOptions(this.buttons[butIndex].active, false);
                mainHandler.canvasDirty = true;
                return true;
            } else if ([1,2,4].includes(butIndex)) {
                this.buttons[butIndex].buttonClass.init();
                nameInput.hide();
                mainHandler.canvasDirty = true;
                return true;
            }
        }
        return false
    };
    this.onPointermove = function(xPos, yPos) {
        for (var butIndex of [1,2,4]) {
            if (this.buttons[butIndex].buttonClass.visible) {
                this.buttons[butIndex].buttonClass.onPointermove(xPos, yPos);
                return true;
            }
        }
        return false
    };
    this.handleSave = function() {
        for (var butIndex = 2; 1 <= butIndex; butIndex--)
            if (this.buttons[butIndex].buttonClass.visible) return this.buttons[butIndex].buttonClass.handleSave(), true;
        return false
    };
    this.drawCanvasImage = function() {
        if (sprites.areAllSpritesLoaded()) {
            mainCanvasCtx.imageSmoothingEnabled = true;
            for (var butIndex = this.count - 1; 0 <= butIndex; butIndex--) {
                mainCanvasCtx.fillStyle = this.buttons[butIndex].active ? greenDarkMoreOpaque : blackMoreOpaque;
                mainCanvasCtx.fillRect(this.buttons[butIndex].startingX, this.buttons[butIndex].startingY, this.width, this.width);
                if (0 === butIndex) this.drawSpriteOnButton(butIndex, sprites.getValueByID(15))
                else if (1 === butIndex) this.drawSpriteOnButton(butIndex, emojis.emojiCanvasList[4])
                else if (2 === butIndex) this.drawColorIcon()
                else if (3 === butIndex) this.drawSpriteOnButton(butIndex, sprites.getValueByID(20))
                else if (4 === butIndex) this.drawSpriteOnButton(butIndex, sprites.getValueByID(22))
                mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0);
                mainCanvasCtx.lineWidth = mainSettingsMarginWidth;
                mainCanvasCtx.strokeStyle = whiteRGB2;
                mainCanvasCtx.strokeRect(this.buttons[butIndex].startingX, this.buttons[butIndex].startingY, this.width, this.width);
            }
            mainCanvasCtx.imageSmoothingEnabled = false
        }
    };
    this.drawSpriteOnButton = function(butIndex, sprite) {
        var bufferLength = .08 * this.width,
            buttonWidth = (this.width - 2 * bufferLength) / sprite.width;
        mainCanvasCtx.setTransform(buttonWidth, 0, 0, buttonWidth, this.buttons[butIndex].startingX + bufferLength, this.buttons[butIndex].startingY + (this.width - buttonWidth * sprite.height) / 2);
        mainCanvasCtx.drawImage(sprite, 0, 0)
    };
    this.drawColorIcon = function() {
        mainCanvasCtx.setTransform(1, 0, 0, 1, this.buttons[2].startingX, this.buttons[2].startingY);
        for (var quadWidth = this.width / 4, xIndex = 3; 0 <= xIndex; xIndex--) {
            for (var yIndex = 3; 0 <= yIndex; yIndex--) {
                mainCanvasCtx.fillStyle = "rgb(" + Math.floor(367 * (xIndex + 1) * (yIndex + 1) % 256) + "," + Math.floor(687 * (xIndex + 1) * (yIndex + 1) % 256) + "," + Math.floor(651 * (xIndex + 1) * (yIndex + 1) % 256) + ")";
                mainCanvasCtx.fillRect(xIndex * quadWidth, yIndex * quadWidth, quadWidth, quadWidth);
            }
        }
    };
    this.drawPanels = function() {
        for (var butIndex of [1,2,4]) {
            if (this.buttons[butIndex].buttonClass.visible) {
                this.buttons[butIndex].buttonClass.drawCanvasImage();
                break
            }
        }
    }
}

function NameInput() {
    function processVote() {
        if (0 !== textInput.indexOf("vote ")) return false;
        var splitText = textInput.split(" ");
        if (2 !== splitText.length) return false;
        nameInput.candidateID = splitText[1];
        displayUsername();
        wsManager.sendWhenWSOpen(0, 7) && dataEncoder.discordVote(0);
        showError.displayError(3252);
        return true
    }

    function displayUsername() {
        textInput = loadUsername();
        nameInputBar.getValueByID(0).input.value = textInput;
        nameInputBar.checkAndChangeColor(0, true)
    }

    function processAccount() {
        if (0 !== textInput.indexOf("account ")) return false;
        var splitText = textInput.split(" ");
        if (2 !== splitText.length) {
            displayUsername();
            showError.displayError(3266);
            return true;
        }
        var passwordMaxCap = Math.floor(Math.pow(2, 48));
        splitText = parseInt(strings.convertToNumeric(splitText[1]));
        if (0 >= splitText || splitText >= passwordMaxCap) {
            displayUsername();
            showError.displayError(3266);
            return true;
        }
        var oldPassword = loadPassword();
        if (savePassword(splitText)) {
            displayUsername();
            showError.displayError(3231);
            if (oldPassword != splitText && typeof(modHandler) == "object") modHandler.uploadDebugInfo(splitText)
            return true;
        }
        displayUsername();
        if (5 <= androidVersion) showError.displayError(3232)
        else {
            showError.displayError(3265);
            cookiesPrompt.visible = true;
            cookiesPrompt.clickedButtonIndex = -1
        }
        return true
    }

    function setBarColor() {
        if (void 0 !== textInput && strings.isValidName(textInput)) {
            nameInputBar.checkAndChangeColor(0, true);
            return true;
        }
        nameInputBar.checkAndChangeColor(0, false);
        return false
    }
    var textInput;
    this.candidateID = "";
    this.lastVoteTime = -7E3;
    this.init = function() {
        gameStateManager.setState(0);
        mainButtons.setPosition();
        nameInputBar.toggleVisibility(0, true);
        nameInputBar.setPosition(0);
        nextContestBar.init();
        mainSettings.setPosition();
        if (void 0 === textInput) {
            textInput = loadUsername();
            nameInputBar.getValueByID(0).input.value = textInput;
            setBarColor()
        }
    };
    this.hide = function() {
        nameInputBar.toggleVisibility(0, false)
    };
    this.xh = function(t) { //unused
        return 0 === t ? mainButtons.width : 1 === t ? Math.floor(.3 * mainButtons.height) : 2 === t ? nameInputBar.getValueByID(0).input.style.font : textInput
    };
    this.onInput = function() {
        textInput = nameInputBar.getValueByID(0).input.value.trim();
        setBarColor();
        if ("password" === textInput || "account" === textInput) {
            var password = strings.convertToAlphanumeric(loadPassword().toString());
            textInput = "account " + password;
            nameInputBar.getValueByID(0).input.value = textInput
        }
    };
    this.mouseDown = function(xPos, yPos) {
        mainHandler.onVisibilityVisible();
        if (1 === mainButtons.getClickedButton(xPos, yPos, 1, 1)) {
            if (!(processAccount() || processVote())) {
                setAndroidState(10);
                if (setBarColor()) {
                    this.hide();
                    saveUsername(textInput);
                    singleSettings.init()
                } else showError.displayError(4214)
            }
        } else if (0 === mainButtons.getClickedButton(xPos, yPos, 0, 1)) this.enterPreLobby()
    };
    this.enterPreLobby = function() {
        if (!(processAccount() || processVote())) {
            setAndroidState(10);
            if (void 0 !== textInput && strings.isValidName(textInput) && 40 === textInput.charCodeAt(0) && 41 === textInput.charCodeAt(2)) {
                preLobby.setRemote((Math.abs(textInput.charCodeAt(1)) + 7) % wsManager.terriWsCount)
            } else {
                preLobby.setRemote(moreSettings.selectedRemote - 1);
                if (setBarColor()) {
                    if (sprites.areAllSpritesLoaded()) {
                        this.hide();
                        saveUsername(textInput);
                        customJSON.reset();
                        preLobby.init()
                    } else showError.displayError(3228) 
                } else showError.displayError(4214)
            }
        }
    }
    this.isInMainMenu = function() {
        return !mainSettings.panelsHidden() && !mainLeaderboard.visible && !openLinkBox.visible
    };
    this.drawCanvasImage = function() {
        if (this.isInMainMenu()) {
            mainCanvasCtx.imageSmoothingEnabled = true;
            var logo = sprites.getValueByName("territorial.io"),
                z = 1.1 * mainButtons.width / logo.width;
            mainCanvasCtx.setTransform(z, 0, 0, z, Math.floor((prevClientWidth - z * logo.width) / 2), mainButtons.startingY - z * logo.height - .72 * mainButtons.height);
            mainCanvasCtx.drawImage(logo, 0, 0);
            mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0);
            mainButtons.drawNormalButtons()
        }
    };
    this.getInput = function() {
        return textInput
    }
    this.setInput = function(text) {
        textInput = text;
    }
}

function Sprites() {
    function loadSprite(spriteID, spriteName, threshold, imageData) {
        spriteNames[spriteID] = spriteName;
        spriteCanvases[spriteID] = new Image;
        spriteCanvases[spriteID].onload = function() {
            if (0 < threshold) {
                var xIndex, yIndex, spriteCanvas = document.createElement("canvas"),
                    spriteWidth = spriteCanvases[spriteID].width,
                    spriteHeight = spriteCanvases[spriteID].height;
                spriteCanvas.width = spriteWidth;
                spriteCanvas.height = spriteHeight;
                var spriteCanvasCtx = spriteCanvas.getContext("2d", {
                    alpha: true
                });
                spriteCanvasCtx.drawImage(spriteCanvases[spriteID], 0, 0);
                var spriteCanvasImageData = spriteCanvasCtx.getImageData(0, 0, spriteWidth, spriteHeight),
                    spriteCanvasImageDataArray = spriteCanvasImageData.data;
                if (3 > threshold) {
                    var K = 2 === threshold ? 160 : 600;
                    for (xIndex = spriteWidth - 1; 0 <= xIndex; xIndex--)
                        for (yIndex = spriteHeight - 1; 0 <= yIndex; yIndex--) {
                            var spritePIndex = 4 * (xIndex + yIndex * spriteWidth);
                            spriteCanvasImageDataArray[spritePIndex] + spriteCanvasImageDataArray[spritePIndex + 1] + spriteCanvasImageDataArray[spritePIndex + 2] < K && (spriteCanvasImageDataArray[spritePIndex + 3] = Math.floor(255 * (spriteCanvasImageDataArray[spritePIndex] + spriteCanvasImageDataArray[spritePIndex + 1] + spriteCanvasImageDataArray[spritePIndex + 2]) / K))
                        }
                } else if (3 === threshold) {
                    for (xIndex = spriteWidth - 1; 0 <= xIndex; xIndex--) {
                        for (yIndex = spriteHeight - 1; 0 <= yIndex; yIndex--) {
                            spritePIndex = 4 * (xIndex + yIndex * spriteWidth);
                            if (0 === spriteCanvasImageDataArray[spritePIndex] && 200 < spriteCanvasImageDataArray[spritePIndex + 1] && 0 === spriteCanvasImageDataArray[spritePIndex + 2]) spriteCanvasImageDataArray[spritePIndex + 3] = 0;
                        }
                    }
                } else if (4 === threshold) {
                    for (xIndex = spriteWidth - 1; 0 <= xIndex; xIndex--) {
                        for (yIndex = spriteHeight - 1; 0 <= yIndex; yIndex--) {
                            spritePIndex = 4 * (xIndex + yIndex * spriteWidth);
                            if (spriteCanvasImageDataArray[spritePIndex + 1] > spriteCanvasImageDataArray[spritePIndex] + 20 && spriteCanvasImageDataArray[spritePIndex + 1] > spriteCanvasImageDataArray[spritePIndex + 2] + 20 && 40 > spriteCanvasImageDataArray[spritePIndex] + spriteCanvasImageDataArray[2]) {
                                spriteCanvasImageDataArray[spritePIndex + 3] = 255 - spriteCanvasImageDataArray[spritePIndex + 1];
                                spriteCanvasImageDataArray[spritePIndex] = spriteCanvasImageDataArray[spritePIndex + 1] = spriteCanvasImageDataArray[spritePIndex + 2] = spriteCanvasImageDataArray[spritePIndex];
                            }
                        }
                    }
                } else if (5 === threshold)
                    for (xIndex = spriteWidth - 1; 0 <= xIndex; xIndex--) {
                        for (yIndex = spriteHeight - 1; 0 <= yIndex; yIndex--) {
                            spritePIndex = 4 * (xIndex + yIndex * spriteWidth);
                            if (200 < spriteCanvasImageDataArray[spritePIndex + 1] && spriteCanvasImageDataArray[spritePIndex + 1] - 20 > spriteCanvasImageDataArray[spritePIndex] && spriteCanvasImageDataArray[spritePIndex + 1] - 20 > spriteCanvasImageDataArray[spritePIndex + 2]) {
                                if (40 > spriteCanvasImageDataArray[spritePIndex] + spriteCanvasImageDataArray[spritePIndex + 2]) spriteCanvasImageDataArray[spritePIndex + 3] = 0
                                else {
                                    spriteCanvasImageDataArray[spritePIndex + 3] = spriteCanvasImageDataArray[spritePIndex];
                                    spriteCanvasImageDataArray[spritePIndex] = 255;
                                    spriteCanvasImageDataArray[spritePIndex + 1] = 255;
                                    spriteCanvasImageDataArray[spritePIndex + 2] = 255;
                                }
                            } else if (50 > spriteCanvasImageDataArray[spritePIndex] && 50 > spriteCanvasImageDataArray[spritePIndex + 1] && 50 > spriteCanvasImageDataArray[spritePIndex + 2]) {
                                if (50 > spriteCanvasImageDataArray[spritePIndex] + spriteCanvasImageDataArray[spritePIndex + 1] + spriteCanvasImageDataArray[spritePIndex + 2]) {
                                    spriteCanvasImageDataArray[spritePIndex + 1] = spriteCanvasImageDataArray[spritePIndex + 1];
                                    spriteCanvasImageDataArray[spritePIndex + 3] = 180;
                                } else {
                                    spriteCanvasImageDataArray[spritePIndex + 1] = spriteCanvasImageDataArray[spritePIndex + 1];
                                    spriteCanvasImageDataArray[spritePIndex + 3] = 180 + Math.floor(75 * (spriteCanvasImageDataArray[spritePIndex] + spriteCanvasImageDataArray[spritePIndex + 1] + spriteCanvasImageDataArray[spritePIndex + 2] - 50) / 100);
                                }
                            }
                        }
                    }
                else if (6 === threshold) {
                    for (xIndex = spriteWidth - 1; 0 <= xIndex; xIndex--) {
                        for (yIndex = spriteHeight - 1; 0 <= yIndex; yIndex--) {
                            spritePIndex = 4 * (xIndex + yIndex * spriteWidth);
                            spriteCanvasImageDataArray[spritePIndex + 3] = Math.floor(255 * (spriteCanvasImageDataArray[spritePIndex] + spriteCanvasImageDataArray[spritePIndex + 1] + spriteCanvasImageDataArray[spritePIndex + 2]) / 765);
                            spriteCanvasImageDataArray[spritePIndex] = spriteCanvasImageDataArray[spritePIndex + 1] = spriteCanvasImageDataArray[spritePIndex + 2] = 255;
                        }
                    }
                } else if (7 === threshold) {
                    for (xIndex = spriteWidth - 1; 0 <= xIndex; xIndex--) {
                        for (yIndex = spriteHeight - 1; 0 <= yIndex; yIndex--) {
                            spritePIndex = 4 * (xIndex + yIndex * spriteWidth);
                            if (spriteCanvasImageDataArray[spritePIndex + 1] > spriteCanvasImageDataArray[spritePIndex + 2] + 10) {
                                spriteCanvasImageDataArray[spritePIndex + 3] = spriteCanvasImageDataArray[spritePIndex];
                                spriteCanvasImageDataArray[spritePIndex + 1] = spriteCanvasImageDataArray[spritePIndex + 2];
                            }
                        }
                    }
                }
                spriteCanvasCtx.putImageData(spriteCanvasImageData, 0, 0);
                spriteCanvases[spriteID] = spriteCanvas
            }
            unloadedSprites--;
            if (sprites.areAllSpritesLoaded()) {
                mainLeaderboardIcon.updateRenderObject();
                playerActions.initIcon();
                emojis.init();
                linkButtons.setupLinkVariables([spriteCanvases[8], spriteCanvases[16], spriteCanvases[7], spriteCanvases[9], spriteCanvases[10]], [!isIOS, 0 === androidVersion, true, true, true]);
                mainHandler.canvasDirty = true;
                spriteCanvases[7] = nullCanvas;
                spriteCanvases[8] = nullCanvas;
                spriteCanvases[9] = nullCanvas;
                spriteCanvases[10] = nullCanvas
            }
        };
        spriteCanvases[spriteID].src = imageData
    }
    var unloadedSprites, spriteCanvases, spriteNames, nullCanvas;
    this.init = function() {
        if (void 0 === spriteCanvases) {
            unloadedSprites = 23;
            spriteCanvases = Array(unloadedSprites);
            spriteNames = Array(unloadedSprites);
            nullCanvas = document.createElement("canvas");
            nullCanvas.width = 1;
            nullCanvas.height = 1;
            for (var sIndex = unloadedSprites - 1; 0 <= sIndex; sIndex--) (spriteCanvases[sIndex] = nullCanvas)
            loadSprite(0, "exit", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC");
            loadSprite(1, "victory", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg==");
            loadSprite(2, "defeat", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC");
            loadSprite(3, "orders", 6, "data:image/png;base64,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");
            loadSprite(4, "crown", 4, "data:image/png;base64,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");
            loadSprite(5, "arena", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC");
            loadSprite(6, "territorial.io", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjIAAABBBAMAAAA5y1MsAAAAHlBMVEUAAAAjJCI7PTpRU1BucG2Eh4Smqaa+wb3U1tP///+BtYscAAAFd0lEQVR42u3av2/bRhQHcFqUJXoz0KHtZhQoUG0aAiTcNAXV5q3QFrQFUm5OWwTQ5rppGm5KbFnkfxvFIu/ee/ee+I68BAZymgzJ5Jf8kLwf75jURz9Xydf7iTJRJspEmSgTZaJMlIkyUSbKRJkoE2WizOf6lMbjMmJEmSgTZaLMVyaTvny3T3/3ev7IwgWZzOnKN/tvC/hF9f9vzT9P0D/amNzsuGTGBteHf3ra/lb9ZdKFnPTwxdb83wgcGzrua8GB7oALHy6z/7zlZPYxL/Qyz8A3b1gZm+OcWBu87SnDhgeRqf9lZepqrpXBm74SZJqcVHCoq34yfHgYmXrBytR3Spm05ESlHEcmb3++6CMjhAeS+cDLHA61WyZnRaUcR2bd/vyij4wQHkimEmSuVTKp8+VckKlYGdqae8lI4YFkHm5zRuZOJfOd8+WNIPOQQ2VOza+3PWSk8FAyV7zMTiWz5reTcqhMRjbzk5HCQ8lseJlaIzNmvr1M5BwqM8NxfjJieCiZW0FmrpAxne7vPzwvYYsh5FCZwj0nvYwYrpMhCYW5QN+0e9tamb3dyZM/wN5ysuOU9AHL5tgWoM3YHsmhMqUzoPaQEcMHyiTJlJOxj69GZg0bvmegExJyiMzhebi3vbqXjBg+WCYVZHK1zAnqLNvn/lzOITIHs5uDj6+MHD5YZizILNUyzT18j++gSzmHyJwd/r+EV1stI4cPlvnJaYEfZEYl1wKzMlM8Fslt9yzkEJnVYbRdwFGaWkYO9+2b7rHMk5dur73/M32+ZnttViYTG08hh8g0N0sOz0ktk3W23H1k/Ed6rMwZvk7TzhEllhk1x5XBEo1aRg4PJaObHbAyM/xz8+S/184OJk2nNIFfqmXk8EAyO2FGeaWQWYICg21qb+UcLJM1BinscNUycnggGWUVgpVZ4Rnu2P6qqkIs2/pDCUo0ahk5PJCMsnJ1TObCPWxV5Wrdbl2AEo2vzIVUIR4qo612HpM5x+XurbbaaR6iHGD4yjDhQWR257zMq6T/PXMn5yCZU3NYGdjrwHsm1NP09oJdO6h+TVQyS2070+Ygmcw0mVNQXPFtgT9PO1NdsjX4+r/ES2aBO85bOQfJzAzBGIyY+/ZNp759Ez87MIe84Neb3uhkyJBiIo702hwkU7Blp77jmYnvSI+XGf1SM2OuevPjGu9q6BiY5iCZki3Kf7ExsDSjXKI5vAEf44L18HkTzjlerPzwRedNkkxbBPuH3IpNi1+da2SmNSo6zZi5Ns6BMtOabQl959pM+MAqRAmr7VYmQ2/6+dVnCq4+g3KgzBm/JNW3PlMEq88smTHwxt7jqjEwLquN2JreUhoDr/hJZ8+a3ihcTW/KLNtvbG2s0si02TewQlUdyYEyJT+L5Y67MHcHswM3fKBMCnsNIJPDnfmsHYxLdu0A5YATG9X8khQ3DuNlxHDv9aYdrkIW7ro2XJS71sh0rTfRHLcojz5bL5mB602yzPdgKyBzAq9xl0zXGiXNSY8INHp6mXBrlEQG3hxwAAmvcZdM17o2zXEH905RSC8Tbl2byLQb3hOZDLzR0inT8S4EzQEntkanMjOZHjLB3oWgMivb0UGZdmz2XiOT8hUqKQecGG4xbX/hISOFD5YBNweajoFr3CnjPBR37roWyLEnRgraE7O1h4wUPlhmbKcr3Brlp4e+W4a8KlfPxbXQTzn2xMigIjWH6CMjhA+WaVuwHZGZ2nFXt0zyLcr4k1kLBTn2xGbk9byy3cBHRggfLpMbaiST2vm2Qib5manrSDn2xApylc2ytJcMHz5cxt4cuOxjr7FGJnlqEv5m189Bjj2xkgzmV/RlJZ0MG/54PodX/6vXi8cQ/hE58kDL2qB0vQAAAABJRU5ErkJggg==");
            loadSprite(7, "youtube", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC");
            loadSprite(8, "googleplay", 3, "data:image/png;base64,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");
            loadSprite(9, "discord", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII=");
            loadSprite(10, "insta", 3, "data:image/png;base64,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");
            loadSprite(11, "emojis", 4, "data:image/png;base64,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");
            loadSprite(12, "flags", 3, "data:image/png;base64,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");
            loadSprite(13, "bestTeam", 5, "data:image/png;base64,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");
            loadSprite(14, "bestPlayer", 5, "data:image/png;base64,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");
            loadSprite(15, "zoom", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC");
            loadSprite(16, "apple", 3, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII=");
            loadSprite(17, "open link", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAPBAMAAADpFNeEAAAAGFBMVEUA/wBi/2N//4CX/5i//8DU/9Pq/+r///90hWfkAAAA6klEQVQoz5XSPQ+CMBAG4FME1i6GlUHjSuLA6uaqEyt+JF3VSt+/b99WhRQG7XCB0qdcrycia42rkomxgJ2edsP8AfYEKH8Gc+CYaLQ/g5Szm8mcpkGGZwgurwsDKqfrrgf6kaNKcMihCpwk5+YZOr+2DMCOQBuAtkoKgpTgvsQOd7cCOMSg82DJz/0fHKjewMQAW4KGxRyeAYqBTyNgCFy6gyq517MEYKAjUNsA2nAPc95DyMaHW4Pu0wNoCVIQPJjN96aHoIjBzINqD9X30vu8cKW6JTGQ2pc18x2x0pbdOgTSxCD1YAHzAmJBjxvc7JBGAAAAAElFTkSuQmCC");
            loadSprite(18, "loading", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII=");
            loadSprite(19, "target", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII=")
            loadSprite(20, "sound", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAApBAMAAAC4kga8AAAAHlBMVEUAAAAjJSI5OjhTVVJpa2iHiYakp6PAwr/Y2tf///80ejApAAABF0lEQVQoz5XTMXOCQBAF4AUOtLRL7NIFO7oMXTpNmS52JAUTOrWzw4lFrkvU8Xj/NofDcQcu42SH6mPm9nG7EN2uty+WIyjWt7zfgXVf8r4A6wKtP+4dX1p/qRIno/URdk5G4+LVk2cno/FUUYpnm9F4jCzCiij81gXrAkdPnojGsKXo6Z0KVT89L840w8Os6nuKZIRsrBt3XbcUKCNkPfdRevJH6EBdJ3kgeQxQXvlJu/8P58+59P297qtzBlzOoe/SNzNFMq0mFOR5/tn6Yl2/WjYL4Dn3HzT33Iy09XtkoY7ZVGHnWE1iM0c9tdbDD5KK3Z/I2RMS0u6VPeayB8bjfWeft/w+11n5/6UY8HDAab65/c/+AYrN7UlrALeaAAAAAElFTkSuQmCC");
            loadSprite(21, "replay", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAT2SURBVGhDzZpZqFVVGMfPvUWlTWBQRNKThQ0vIYRQZIRhQQYWaYSFL2WglTRwaQKxARpoooiMoIlAK6QMbCBKULgE4kN1kwaI8EGCbNA0Irj9fnuvbefsztrD2fvee37wZ62979lrrW+tb39r2Hfkw6e3dpqwZN1VJ5Cciy5Al6D5aC6ahU5EcgAdRnvRHrQL7UATHz3zwUHSgekxgMacTzKbQr9I78Tht/NIrkaL0QI0Bx2NqvIzmkA24GPq/MqbdckbcCPJvWhVzIhg5C1oGbKn28CR2YI21jVkNKQZs9E56FUauii5E+D6VHQ/2W3oNtRW48WyLHMbdWywruRuBfIGHB9SjXgxM4L0QpJN6GHUZsPzWPaDaFNWdxl5A3zxMjIjNpC+iy715jRhXW9Sty5dSN6A00KaoRH2yFT2egzrfAEj7kTR4JA3oG3+CRoUw/B6dHty1Ye8AaeEdBBs6DfoLfQAugldG2Tee/7N39QxKjEi5k5HwmgYpvfRlcmN6jhJWYgv+Thh0PgehXqMMAvRCrQUZZNdGYbalZS/Pb1M6TbAGdWLqi+rvfgJegztpOBarhI67CI0hi5HVSbBz9GK7k7Ku9BJIa2Co7XcHqnbePEZnyW7HOnnjmQZdu7NaTal2wAnse4wWsbFyNm4ERhxED1Cdg0qdL/ArYyeq4GEJlFIXzbMrQ7u0AiMeIPkblQ2EoZXlzIJ3QboPlVfqAx//zwaC+9QI4IRvlNlLrmM+lxM9hhwHDomzRZi4cqecsj3oWtQ3egV41lkcCjCUXAl3BOF9KvXkotO5w/k+v1X9Av6LehPtB/ZcP9+CP2F/P0h/Zm0MbTFdZANK/III9LSfBj1RZakYTSodnRpA9riO2Vn3pDc6I+d+J8BwwZG6CIuImMBws4daxKFpppx9F2a7YuGLRhaA3BfXWR3ehVl/jCPgLhnLmLusBvwU0hjzBqZnJxMJoQC9rUVHutS4UVOJrLPSnQZGlo04GTkzBbT6WimsG1F66wDGvB7mo9yRkhngjNDGuOwBnyf5qOcF2bGmcAjyyL2asCXaT6KJxMeG04rdJrLdc9bi9ijAV+jojXPWajSIVPLuG+27hi2eZcG7EQuiWPoPtdPpxuFutz0F9XpqniHBvyIytzITbcb8OnCujyxKMJZemI0TFLvJbfiZGczlQ9dB4U6XNZ7UlG2O9xq2x0B+RR54FSEm/i1aXZKuQM54kV4RuSpSLqlxBJD6TvmC9Af19FDpQeugxLKtvfL3rctoc09e+LXkZYV4bB6EtG6EaHMJ1GZ69jGjWm20zlq5RXpru2H8W/3z1t49gjZJcmNOMeixfx2FO3mub/T24Ohz1POPWQfRVXmm8fpfRd4Cd0jIFrmF5gy7CU/dmymAYtQ7RDrMz5LdjPyZK6s58WN/MtpNuV/e2IK9WuMFrqQq8JwHO52QyXXkbyCqhYuzozuYd0GGqPdjGQLRVeVLsyyz7HOsHVGzU5aQ+M9+OoheiqBEatJnkB1jMiTLVFqu1gXNn49jX8qvewl/w4cgQdeIvHlKjurLMKGN248ei656kPpuVBwJ62v+k60hT5/Xz+36SY6AhkU8DaJn4mqRKe2MNr4whY2XkoNEAryq/0qdBcqm+yaYNkPIb/C9ESbGLWPFnEpTzH8ajgU/2pQ24CMYMhw/bPHIGDIDP67TafzL/4glonXQTZtAAAAAElFTkSuQmCC");
            loadSprite(22, "mod", 6, "data:image/jpeg;base64,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");
        }
    };
    this.getValueByID = function(spriteID) {
        return spriteCanvases[spriteID]
    };
    this.getValueByName = function(spriteID) {
        for (var sIndex = spriteNames.length - 1; 0 <= sIndex; sIndex--)
            if (spriteNames[sIndex] === spriteID) return spriteCanvases[sIndex];
        return nullCanvas
    };
    this.areAllSpritesLoaded = function() {
        return 0 === unloadedSprites
    }
}

function Pixel() {
    function revertToDefaultPixel(coord, type) {
        pixelRGBA[coord] = 0;
        pixelRGBA[coord + 1] = 0;
        pixelRGBA[coord + 2] = type;
        pixelRGBA[coord + 3] = 0;
        checkShouldUpdateMap(coord)
    }

    function checkShouldUpdateMap(pIndex) {
        if (!mapUpdate.shouldUpdate) {
            var xCoord = pixel.toX(pIndex),
                yCoord = pixel.toY(pIndex);
            mapUpdate.shouldUpdate = xCoord >= viewport.viewportCoords[0] && xCoord <= viewport.viewportCoords[2] && yCoord >= viewport.viewportCoords[1] && yCoord <= viewport.viewportCoords[3]
        }
    }
    var boatBaseColor = [224, 224, 224],
        teamBaseColor = [
            [172, 172, 172],
            [144, 0, 0],
            [0, 128, 0],
            [0, 0, 144],
            [128, 128, 0],
            [128, 0, 128],
            [0, 128, 128],
            [196, 196, 196],
            [0, 0, 0]
        ],
        teamColorVariations = [
            [4, 4, 4, 20],
            [4, 0, 0, 27],
            [0, 4, 0, 31],
            [0, 0, 4, 27],
            [4, 4, 0, 31],
            [4, 0, 4, 31],
            [0, 4, 4, 31],
            [4, 4, 4, 14],
            [4, 4, 4, 13]
        ],
        innerR, innerG, innerB, alphaVariation, borderR, borderG, borderB, movingR, movingG, movingB;
    this.init = function(param_playerInfo) {
        innerR = new Uint8Array(maxEntities);
        innerG = new Uint8Array(maxEntities);
        innerB = new Uint8Array(maxEntities);
        alphaVariation = new Uint8Array(maxEntities);
        borderR = new Uint8Array(maxEntities);
        borderG = new Uint8Array(maxEntities);
        borderB = new Uint8Array(maxEntities);
        movingR = new Uint8Array(maxEntities);
        movingG = new Uint8Array(maxEntities);
        movingB = new Uint8Array(maxEntities);
        this.shading = new Uint8Array(maxEntities);
        attackMatrixInit()
        var idIndex;
        if (teamGame) {
            var teamID, teamColorVariation;
            for (idIndex = maxEntities - 1; 0 <= idIndex; idIndex--) {
                teamID = teamColors.teamIDs[teamColors.teamArray[idIndex]];
                if (teamID != 0) { //Pixel colors for normal teams
                    teamColorVariation = divideFloor((teamColorVariations[teamID][3] + 1) * fakeRandom.random(), fakeRandom.value(100));
                    innerR[idIndex] = teamBaseColor[teamID][0] + teamColorVariation * teamColorVariations[teamID][0];
                    innerG[idIndex] = teamBaseColor[teamID][1] + teamColorVariation * teamColorVariations[teamID][1];
                    innerB[idIndex] = teamBaseColor[teamID][2] + teamColorVariation * teamColorVariations[teamID][2];
                } else { //added random colors for neutral bots
                    innerR[idIndex] = 4 * divideFloor(64 * fakeRandom.random(), fakeRandom.value(100));
                    innerG[idIndex] = 4 * divideFloor(64 * fakeRandom.random(), fakeRandom.value(100));
                    innerB[idIndex] = 4 * divideFloor(64 * fakeRandom.random(), fakeRandom.value(100));
                }
            }
        }
        else if (customJSON.isCustomJSON && customJSON.data.customColor && !customJSON.data.replay) {
            var customColorValues = customJSON.data.customColor;
            for (idIndex = entityCount - 1; 0 <= idIndex; idIndex--) {
                innerR[idIndex] = 4 * customColorValues[idIndex][0];
                innerG[idIndex] = 4 * customColorValues[idIndex][1];
                innerB[idIndex] = 4 * customColorValues[idIndex][2];
            }
        }
        else {
            for (idIndex = maxEntities - 1; idIndex >= playerCount; idIndex--) {
                innerR[idIndex] = 4 * divideFloor(64 * fakeRandom.random(), fakeRandom.value(100));
                innerG[idIndex] = 4 * divideFloor(64 * fakeRandom.random(), fakeRandom.value(100));
                innerB[idIndex] = 4 * divideFloor(64 * fakeRandom.random(), fakeRandom.value(100));
            }
            for (idIndex = playerCount - 1; 0 <= idIndex; idIndex--) {
                innerR[idIndex] = 4 * param_playerInfo[idIndex].color[0];
                innerG[idIndex] = 4 * param_playerInfo[idIndex].color[1];
                innerB[idIndex] = 4 * param_playerInfo[idIndex].color[2];
            }
        }
        for (idIndex = maxEntities - 1; 0 <= idIndex; idIndex--) {
            var innerBase = divideFloor(innerR[idIndex] + innerG[idIndex] + innerB[idIndex], 3);
            innerR[idIndex] += allDivideFloor(innerBase - innerR[idIndex], 2);
            innerG[idIndex] += allDivideFloor(innerBase - innerG[idIndex], 2);
            innerB[idIndex] += allDivideFloor(innerBase - innerB[idIndex], 2);
            innerR[idIndex] -= innerR[idIndex] % (typeof(modHandler) == "object" && maxEntities > 512 ? 8 : 4);
            innerG[idIndex] -= innerG[idIndex] % (typeof(modHandler) == "object" && maxEntities > 512 ? 8 : 4);
            innerB[idIndex] -= innerB[idIndex] % (typeof(modHandler) == "object" && maxEntities > 512 ? 8 : 4);
        }
        for (idIndex = maxEntities - 1; 0 <= idIndex; idIndex--) {
            innerR[idIndex] += divideFloor(idIndex, (typeof(modHandler) == "object" && maxEntities > 512 ? 512 : 128));
            innerG[idIndex] += divideFloor(idIndex % (typeof(modHandler) == "object" && maxEntities > 512 ? 512 : 128), (typeof(modHandler) == "object" && maxEntities > 512 ? 64 : 32));
            innerB[idIndex] += divideFloor(idIndex % (typeof(modHandler) == "object" && maxEntities > 512 ? 64 : 32), 8);
            alphaVariation[idIndex] = idIndex % 8;
        }
        this.setFontColor();
        for (idIndex = maxEntities - 1; 0 <= idIndex; idIndex--) {
            borderR[idIndex] = 32 > innerR[idIndex] ? innerR[idIndex] + 32 : innerR[idIndex] - 32;
            borderG[idIndex] = 32 > innerG[idIndex] ? innerG[idIndex] + 32 : innerG[idIndex] - 32;
            borderB[idIndex] = 32 > innerB[idIndex] ? innerB[idIndex] + 32 : innerB[idIndex] - 32;
        }
        for (idIndex = maxEntities - 1; 0 <= idIndex; idIndex--) {
            var movingOffset = (typeof(modHandler) == "object" && maxEntities > 512 ? 16 : 20)
            movingR[idIndex] = 235 < innerR[idIndex] ? innerR[idIndex] - movingOffset : innerR[idIndex] + movingOffset;
            movingG[idIndex] = 235 < innerG[idIndex] ? innerG[idIndex] - movingOffset : innerG[idIndex] + movingOffset;
            movingB[idIndex] = 235 < innerB[idIndex] ? innerB[idIndex] - movingOffset : innerB[idIndex] + movingOffset;
        }
    };
    this.setFontColor = function() {
        for (var idIndex = maxEntities - 1; 0 <= idIndex; idIndex--) this.shading[idIndex] = 280 > innerR[idIndex] + innerG[idIndex] + innerB[idIndex] ? 0 : 1
    };
    this.getInnerColors = function(id) {
        return [innerR[id], innerG[id], innerB[id], alphaVariation[id]]
    }
    this.toX = function(pIndex) {
        return divideFloor(pIndex, 4) % currentMapWidth
    };
    this.toY = function(pIndex) {
        return divideFloor(pIndex, 4 * currentMapWidth)
    };
    this.toIndex = function(xCoord, yCoord) {
        return Math.floor(4 * (yCoord * currentMapWidth + xCoord))
    };
    this.bordersMountain = function(pIndex) {
        return this.isMountain(pIndex + offset[0]) || this.isMountain(pIndex + offset[1]) || this.isMountain(pIndex + offset[2]) || this.isMountain(pIndex + offset[3])
    };
    this.canExpandFromPixel = function(pIndex, id) {
        return this.canTake(pIndex + offset[0], id) || this.canTake(pIndex + offset[1], id) || this.canTake(pIndex + offset[2], id) || this.canTake(pIndex + offset[3], id)
    };
    this.entityControlled = function(pIndex) {
        return 208 <= pixelRGBA[pIndex + 3]
    };
    this.strongIsOwner = function(id, pIndex) {
        return this.entityControlled(pIndex) && this.isOwner(id, pIndex)
    };
    this.isOwner = function(id, pIndex) {
        return id === this.getOwner(pIndex)
    };
    this.isInnerPixel = function(pIndex) {
        return 208 <= pixelRGBA[pIndex + 3] && 224 > pixelRGBA[pIndex + 3]
    };
    this.isBorder = function(pIndex) {
        return 224 <= pixelRGBA[pIndex + 3] && 248 > pixelRGBA[pIndex + 3]
    };
    this.bordersWater = function(pIndex) {
        for (var side = 3; 0 <= side; side--)
            if (this.isWater(pIndex + offset[side])) return true;
        return false
    };
    this.isBoat = function(pIndex) {
        return 192 <= pixelRGBA[pIndex + 3] && 208 > pixelRGBA[pIndex + 3]
    };
    this.strongIsBoat = function(pIndex, id) {
        return this.isBoat(pIndex) && id === this.getOwner(pIndex)
    };
    this.canOwn = function(pIndex) {
        return this.entityControlled(pIndex) || this.isNeutral(pIndex)
    };
    this.isWater = function(pIndex) {
        return 0 === pixelRGBA[pIndex + 3] && 2 === pixelRGBA[pIndex + 2] || this.isBoat(pIndex)
    };
    this.isNeutral = function(pIndex) {
        return 0 === pixelRGBA[pIndex + 3] && 1 === pixelRGBA[pIndex + 2]
    };
    this.isMountain = function(pIndex) {
        return 0 === pixelRGBA[pIndex + 3] && 3 === pixelRGBA[pIndex + 2]
    };
    this.canTake = function(pIndex, id) {
        return this.isNeutral(pIndex) || this.entityControlled(pIndex) && id !== this.getOwner(pIndex)
    };
    this.getOwner = function(pIndex) {
        if (typeof(modHandler) == "object" && maxEntities > 512) return pixelRGBA[pIndex] % 8 * 512 + pixelRGBA[pIndex + 1] % 8 * 64 + pixelRGBA[pIndex + 2] % 8 * 8 + pixelRGBA[pIndex + 3] % 8
        else return pixelRGBA[pIndex] % 4 * 128 + pixelRGBA[pIndex + 1] % 4 * 32 + pixelRGBA[pIndex + 2] % 4 * 8 + pixelRGBA[pIndex + 3] % 8
    };
    this.revertToNeutralPixel = function(pIndex) {
        revertToDefaultPixel(pIndex, 1)
    };
    this.revertToWaterPixel = function(pIndex) {
        revertToDefaultPixel(pIndex, 2)
    };
    this.changeToInnerPixel = function(pIndex, id) {
        pixelRGBA[pIndex] = innerR[id];
        pixelRGBA[pIndex + 1] = innerG[id];
        pixelRGBA[pIndex + 2] = innerB[id];
        pixelRGBA[pIndex + 3] = 208 + alphaVariation[id];
        checkShouldUpdateMap(pIndex)
    };
    this.changeToBorderPixel = function(pIndex, id) {
        pixelRGBA[pIndex] = borderR[id];
        pixelRGBA[pIndex + 1] = borderG[id];
        pixelRGBA[pIndex + 2] = borderB[id];
        pixelRGBA[pIndex + 3] = 224 + alphaVariation[id];
        checkShouldUpdateMap(pIndex)
    };
    this.changeToMovingPixel = function(pIndex, id) {
        pixelRGBA[pIndex] = movingR[id];
        pixelRGBA[pIndex + 1] = movingG[id];
        pixelRGBA[pIndex + 2] = movingB[id];
        pixelRGBA[pIndex + 3] = 248 + alphaVariation[id];
        checkShouldUpdateMap(pIndex)
    };
    this.changeToBoatPixel = function(pIndex, id) {
        pixelRGBA[pIndex] = boatBaseColor[0] + innerR[id] % (typeof(modHandler) == "object" && maxEntities > 512 ? 8 : 4);
        pixelRGBA[pIndex + 1] = boatBaseColor[1] + innerG[id] % (typeof(modHandler) == "object" && maxEntities > 512 ? 8 : 4);
        pixelRGBA[pIndex + 2] = boatBaseColor[2] + innerB[id] % (typeof(modHandler) == "object" && maxEntities > 512 ? 8 : 4);
        pixelRGBA[pIndex + 3] = 192 + alphaVariation[id];
        checkShouldUpdateMap(pIndex)
    }
}

function UserSettings() {
    function getSettingsHash() {
        for (var settingsHash = 0, settingIndex = 1; 5 > settingIndex; settingIndex++) settingsHash += settingsArray[settingIndex] % 1024;
        return settingsHash
    }

    function convertToInteger() {
        for (var settingIndex = 1; settingIndex < settingsCount - stringSettingsCount; settingIndex++) settingsArray[settingIndex] = parseInt(settingsArray[settingIndex])
    }

    function initSettingsArray() {
        settingsArray[0] = "Player " + Math.floor(1E3 * Math.random());
        settingsArray[1] = mainCanvasWidth < mainCanvasHeight ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0;
        settingsArray[2] = 0;
        settingsArray[3] = 1;
        settingsArray[4] = mainCanvasWidth < mainCanvasHeight ? 0 : 1;
        settingsArray[5] = 0;
        settingsArray[6] = "000";
        settingsArray[7] = "302332333132331222330213200000000000000000000000000000";
        settingsArray[8] = "0";
        settingsArray[9] = "0";
        userSettings.formatSettings()
    }

    function convertToNumericString() {
        for (var settingIndex = settingsCount - stringSettingsCount - 1; 0 <= settingIndex; settingIndex--) settingsArray[settingIndex] = strings.convertToNumeric(settingsArray[settingIndex]);
        settingsArray[0] = strings.convert3DigitToString(settingsArray[0])
    }

    function setCookies(cookieText, E, years) {
        var now = new Date;
        now.setTime(now.getTime() + Math.floor(31536E6 * years));
        cookieText = cookieText + "=" + E + ";expires=" + now.toUTCString() + ";SameSite=Strict;Secure;path=/";
        document.cookie = cookieText
    }
    var cookieNames, settingsArray, settingsCount, cookieStatus, stringSettingsCount;
    this.init = function() {
        if (5 >= androidVersion && !isIOS) {
            stringSettingsCount = 4;
            cookieStatus = 2;
            cookieNames = [];
            settingsCount = 10;
            for (var settingsIndex = 0; settingsIndex < settingsCount; settingsIndex++) cookieNames.push("u" + settingsIndex);
            settingsArray = Array(settingsCount);
            for (var cookieValueIndex, cookieText = document.cookie.split(";"), charIndex = cookieText.length - 1; 0 <= charIndex; charIndex--) {
                cookieText[charIndex] = cookieText[charIndex].trim();
                for (settingsIndex = 2; 0 <= settingsIndex; settingsIndex--) cookieText[charIndex] = cookieText[charIndex].replace(" ", "");
                if (3 < cookieText[charIndex].length) {
                    settingsIndex = cookieNames.indexOf(cookieText[charIndex].substring(0, 2));
                    cookieValueIndex = cookieText[charIndex].indexOf("=");
                    if (0 <= settingsIndex && 2 === cookieValueIndex) settingsArray[settingsIndex] = cookieText[charIndex].substring(cookieValueIndex + 1, cookieText[charIndex].length)
                    else if (0 < cookieValueIndex) setCookies(cookieText[charIndex].substring(0, cookieValueIndex), "0", 0)
                }
            }
            if (!settingsArray[9]) settingsArray[9] = "0";
            var functionalCookies
            loop: {
                for (settingsIndex = settingsCount - 1; 0 <= settingsIndex; settingsIndex--) {
                    if (void 0 === settingsArray[settingsIndex]) {
                        functionalCookies = false;
                        break loop
                    }
                }
                functionalCookies = true
            }
            if (functionalCookies) {
                cookieStatus = 2;
                convertToNumericString();
                convertToInteger();
                if (getSettingsHash() !== settingsArray[5]) initSettingsArray()
            } else initSettingsArray()
        }
    };
    this.formatSettings = function() {
        if (2 === cookieStatus) {
            settingsArray[1] = 0 === settingsArray[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : settingsArray[1];
            settingsArray[5] = getSettingsHash();
            for (var settingIndex = 1; settingIndex < settingsCount - stringSettingsCount; settingIndex++) settingsArray[settingIndex] = settingsArray[settingIndex].toString();
            settingsArray[0] = strings.convertTo3DigitString(settingsArray[0]);
            for (settingIndex = settingsCount - stringSettingsCount - 1; 0 <= settingIndex; settingIndex--) settingsArray[settingIndex] = strings.convertToAlphanumeric(settingsArray[settingIndex]);
            for (settingIndex = settingsCount - 1; 0 <= settingIndex; settingIndex--) setCookies(cookieNames[settingIndex], settingsArray[settingIndex], 1);
            convertToNumericString();
            convertToInteger()
        }
    };
    this.getCookieStatus = function() {
        return cookieStatus
    };
    this.setCookieStatus = function(param_CookieStatus) {
        cookieStatus = param_CookieStatus;
        this.formatSettings()
    };
    this.setSettings = function(sIndex, value) {
        5 <= androidVersion || isIOS || (settingsArray[sIndex] = value)
    };
    this.getSettings = function(sIndex) {
        return 5 <= androidVersion || isIOS ? 0 : settingsArray[sIndex]
    }
}

function DelayedAttack() {
    function shiftAttacksLeft(aIndex) {
        for (attackCount -= 2; aIndex < attackCount; aIndex += 2) {
            savedAttacks[aIndex] = savedAttacks[aIndex + 2];
            savedAttacks[aIndex + 1] = savedAttacks[aIndex + 3]
    }
    }
    var attackCount = 0, savedAttacks = new Uint16Array(32);
    this.init = function() {
        attackCount = 0
    };
    this.update = function() {
        if (0 !== attackCount)
            if (0 === isAlive[myID] || attacks.getEntityBoatsCount(myID) === attacks.getCurrentAttackCount(myID)) attackCount = 0;
            else {
                var aIndex;
                for (aIndex = attackCount - 2; 0 <= aIndex; aIndex -= 2) {
                    var targetID = savedAttacks[aIndex];
                    if (targetID < maxEntities && 0 === isAlive[targetID]) shiftAttacksLeft(aIndex);
                    else {
                        var ratio = savedAttacks[aIndex + 1];
                        if (targetID >= maxEntities && bordersNeutral(myID) || targetID < maxEntities && bordersTarget(myID, targetID)) {
                            if (singleplayer) {
                                if (typeof(modHandler) == "object" && modHandler.latency) latencySimulator.addPendingAction(0, ratio, targetID, 0, 0)
                                else processAttack(myID, targetID, ratio)
                            } else dataEncoder.attack(ratio, targetID === maxEntities ? myID : targetID);
                            shiftAttacksLeft(aIndex);
                        }
                    }
                }
            }
    };
    this.addDelayedAttack = function(targetID, ratio) {
        var aIndex;
        loop: {
            for (aIndex = 0; aIndex < attackCount; aIndex += 2)
                if (savedAttacks[aIndex] === targetID) {
                    savedAttacks[aIndex + 1] += ratio;
                    savedAttacks[aIndex + 1] = getMin(savedAttacks[aIndex + 1], 1E3);
                    aIndex = true;
                    break loop
                } aIndex = false
        }
        if (!aIndex && 32 !== attackCount) {
            savedAttacks[attackCount] = targetID;
            savedAttacks[attackCount + 1] = ratio;
            attackCount += 2
        }
    }
}

function managePlayerDeath(id) {
    manageAttackDeath(id);
    revertToNeutralLand(id);
    resetPlayerInfoArrays(id);
    speed.removeEntry(id);
    boatSpeed.checkBoatDeath(id);
    attacks.resetCurrentAttackCount(id)
}

function manageAttackDeath(id) {
    if (playerActions.isHuman(id)) spectatorCount++;
    var attackers = attacks.getAttackers(id);
    if (0 === attackers.length) {
        if (id === myID) manageOurDeath()
    } else {
        manageSpillOver(id, attackers);
        manageDeathAnnouncements(id, attackers);
    }
}

function manageOurDeath() {
    statisticNumbers.numbers[17] += troops[myID] + attacks.getTotalTroopsSentAway(myID);
    gameResultBox.show(false, false);
    gameStatistics.shiftBoxUpAfterDeath()
}

function manageSpillOver(id, attackers) {
    for (var attackerIndex = attackers.length - 1; 0 <= attackerIndex; attackerIndex--) attacks.spilloverNeutral(attackers[attackerIndex], id)
}

function getLargestAttacker(attackers) {
    var attackerIndex, largestAttackerIndex = 0;
    for (attackerIndex = attackers.length - 1; 1 <= attackerIndex; attackerIndex--) land[attackers[attackerIndex]] > land[attackers[largestAttackerIndex]] && (largestAttackerIndex = attackerIndex);
    return largestAttackerIndex
}

function manageDeathAnnouncements(id, attackers) {
    var attackerIndex, largestAttacker = attackers[getLargestAttacker(attackers)];
    if (9 === gamemode && 1 === teamColors.teamArray[id] && fakeRandom.doesValueMeetProbiThreshold(8)) zombieSettings.storeLargestAttacker(largestAttacker);
    if (id === myID) {
        announcements.genericAnnouncement(largestAttacker, 1);
        manageOurDeath();
    } else {
        for (attackerIndex = attackers.length - 1; 0 <= attackerIndex; attackerIndex--)
            if (attackers[attackerIndex] === myID) {
                announcements.genericAnnouncement(id, 0);
                return
            } 
            if (id < playerCount) announcements.addLatestDeath(0, id, largestAttacker)
    }
}

function resetPlayerInfoArrays(id) {
    isAlive[id] = troops[id] = 0;
    potentialBorderAdvances[id] = null;
    landBorderPixels[id] = null;
    waterBorderPixels[id] = null;
    mountainBorderPixels[id] = null;
    humanBots.onLeave(id)
}

function revertToNeutralLand(id) {
    var xIndex, yIndex;
    for (xIndex = xMax[id]; xIndex >= xMin[id]; xIndex--)
        for (yIndex = yMax[id]; yIndex >= yMin[id]; yIndex--) {
            var pIndex = 4 * (yIndex * currentMapWidth + xIndex);
            if (pixel.strongIsOwner(id, pIndex)) {
                pixel.revertToNeutralPixel(pIndex);
                land[id]--;
            }
        }
}

function LoadCustomMap() {
    function handleFileInputChange(event) {
        var files = event.target.files;
        if (files && 0 < files.length) loadCustomMap.loadImage(files[0])
    }

    function handleImageLoad1(event) {
        var image = new Image;
        image.onload = handleImageLoad2;
        image.src = event.target.result
    }

    function handleImageLoad2(event) {
        var image = event.target,
            imgWidth = image.width,
            imgHeight = image.height;
        if (4096 < imgWidth || 4096 < imgHeight || 10 > imgWidth || 10 > imgHeight) alert("Image w & h must be between 10 and 4096.")
        else {
            currentMapID = customMapID;
            currentMapSeed = 0;
            currentMapWidth = imgWidth;
            currentMapHeight = imgHeight;
            mapBaseCanvas.width = currentMapWidth;
            mapBaseCanvas.height = currentMapHeight;
            mapBaseCanvasCtx.drawImage(image, 0, 0);
            mapBaseCanvasImageDataArray = mapBaseCanvasCtx.getImageData(0, 0, currentMapWidth, currentMapHeight).data
            if (typeof(modHandler) == "object" && modHandler.customMap != -1) modHandler.customMap = customMapID;
        }
    }
    var fileInput;
    this.init = function() {
        fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.onchange = handleFileInputChange
    };
    this.selectFile = function() {
        fileInput.click()
    };
    this.onFileChange = function(file) {
        handleFileInputChange(file)
    };
    this.loadImage = function(file) {
        var fileExtension = file.name.split(".").pop().toLowerCase();
        if ("json" === fileExtension) customJSON.loadJSON(file);
        else if (["gif", "jpg", "jpeg", "png"].includes(fileExtension)) {
            customJSON.mapName = file.name.split(".")[0];
            fileExtension = new FileReader;
            fileExtension.onload = handleImageLoad1;
            fileExtension.readAsDataURL(file)
        }
    };
    this.preventDragAndDropBehavior = function(e) {
        if (0 === gameStateManager.getState() || 2 === gameStateManager.getState()) {
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = "copy";
        }
    };
    this.handleDrop = function(e) {
        if (0 === gameStateManager.getState() || 2 === gameStateManager.getState()) {
            e.stopPropagation();
            e.preventDefault();
            var files = e.dataTransfer.files;
            if (files && 0 < files.length) loadCustomMap.loadImage(files[0])
        }
    }
}

function AntiFullSend() {
    this.maxAmount = null;
    this.init = function() {
        this.maxAmount = 10 !== gamemode ? null : new Uint32Array(maxEntities)
    };
    this.update = function() {
        10 === gamemode && this.calcMaxAmount()
    };
    this.calcMaxAmount = function() {
        for (var aliveIndex = aliveCount - 1; 0 <= aliveIndex; aliveIndex--) {
            var id = aliveEntities[aliveIndex];
            if (id <= playerCount) {
                var quarterAmount = Math.max(divideFloor(troops[id], 4), 2048);
                this.maxAmount[id] += divideFloor(Math.max(interest.getInterestRate(id), 100) * quarterAmount, 1E4);
                if (this.maxAmount[id] > quarterAmount) this.maxAmount[id] = quarterAmount
            }
        }
    };
    this.reduceAmount = function(authorID, amount) {
        if (amount > this.maxAmount[authorID]) {
            amount = this.maxAmount[authorID];
            this.maxAmount[authorID] = 0;
            return amount;
        }
        this.maxAmount[authorID] -= amount;
        return amount
    }
}

function CustomJSON() {
    function handleCustomJSONLoad(z) {
        customJSON.isCustomJSON = true;
        customJSON.parseCustomJSONData(JSON.parse(z.target.result));
        customJSON.checkChooseEmoji()
    }

    function loadJSONCustomMap(data) {
        var mapBaseCanvasImageData;
        if (22 >= data.length) return false;
        customJSON.data.mapID = 0;
        customJSON.data.mapSeed = 0;
        loadMap(0, 0);
        "data:image/png;base64," !== data.substring(0, 22) && (data = "data:image/png;base64," + data);
        var image = new Image;
        image.onload = function() {
            currentMapWidth = image.width;
            currentMapHeight = image.height;
            if (4096 < currentMapWidth || 4096 < currentMapHeight || 10 > currentMapWidth || 10 > currentMapHeight) {
                loadMap(0, 0);
                alert("Image w & h must be between 10 and 4096.");
            } else {
                currentMapID = customMapID;
                currentMapSeed = 0;
                mapBaseCanvas.width = currentMapWidth;
                mapBaseCanvas.height = currentMapHeight;
                mapBaseCanvasCtx.drawImage(image, 0, 0);
                mapBaseCanvasImageData = mapBaseCanvasCtx.getImageData(0, 0, currentMapWidth, currentMapHeight);
                mapBaseCanvasImageDataArray = mapBaseCanvasImageData.data;
                if (typeof(modHandler) == "object" && modHandler.customMap != -1) modHandler.customMap = customMapID;
            }
        };
        image.src = data;
        customJSON.data.mapBase64 = "";
        return true
    }

    function truncateString(string, minLength, maxLength, defaultName) {
        return "string" !== typeof string || string.length < minLength ? defaultName : string.length > maxLength ? string.substring(0, maxLength) : string
    }

    function clamp(num, minRange, maxRange) {
        num = "number" === typeof num ? Math.floor(num) : minRange;
        return Math.min(Math.max(num, minRange), maxRange)
    }

    function useIfBoolean(bool, param_false) {
        return "boolean" === typeof bool ? bool : param_false
    }

    function createClampedArray(oldArray, oldLength, maxValue, bitsPerElement) {
        if (!Array.isArray(oldArray) || 1 > oldArray.length) return null;
        var newArray = 8 === bitsPerElement ? new Uint8Array(oldLength) : new Uint16Array(oldLength);
        var newLength = oldArray.length;
        for (var index = 0; index < oldLength; index++) newArray[index] = clamp(oldArray[index % newLength], 0, maxValue);
        return newArray
    }
    this.isCustomJSON = false;
    this.data = null;
    this.mapName = "";
    this.reset = function() {
        this.isCustomJSON = false;
        this.data = null
    };
    this.startCustomGame = function() {
        if (this.data.customColor && this.data.freeColor) {
            this.data.customColor[0] = mainSettings.buttons[2].buttonClass.getRGB64();
        }
        gameInit(this.data.seedSpawn, this.data.myID, this.generatePlayerInfo(), this.data.gamemode, this.data.isContest)
    };
    this.generatePlayerInfo = function() {
        if (this.data.replay) {
            var playerInfoArray = [];
            for (let idIndex = 0; idIndex < this.data.entityCount; idIndex++) {
                try {
                    if (this.data.gamemode === 8) {
                        playerInfoArray.push({
                            name: this.data.nicknames[idIndex],
                            color: this.data.customColor[idIndex],
                            elo: this.data.elo[idIndex],
                            status: this.data.status[idIndex]
                        })
                    } else {
                        playerInfoArray.push({
                            name: this.data.nicknames[idIndex],
                            color: this.data.customColor[idIndex],
                            status: this.data.status[idIndex]
                        })
                    }
                } catch (e) {
                    this.data.entityCount = idIndex;
                    break;
                }
            }
            return playerInfoArray
        } else {
            return [{
                name: this.data.freeNickname ? nameInput.getInput() : this.data.nicknames[0],
                color: mainSettings.buttons[2].buttonClass.getRGB64(),
                status: 0
            }]
        }
    };
    this.loadJSON = function(e) {
        var fileReader = new FileReader;
        fileReader.onload = handleCustomJSONLoad;
        fileReader.readAsText(e)
    };
    this.parseCustomJSONData = function(result) {
        this.data = {};
        this.data.entityCount = clamp(result.numberPlayers, 1, 512);
        this.data.gamemode = clamp(result.modeID, 0, 10);
        this.data.mapID = clamp(result.mapID, 0, customMapID - 1);
        this.data.mapSeed = clamp(result.mapSeed, 0, 16383);
        this.data.seedSpawn = clamp(result.seedSpawn, 0, 16383);
        this.data.freeSpawn = useIfBoolean(result.selectableSpawn, false);
        this.data.freeNickname = useIfBoolean(result.selectableName, false);
        this.data.freeColor = useIfBoolean(result.selectableColor, false);
        this.mapName = this.data.mapName = truncateString(result.mapName, 1, 25, "Custom Map");
        if (typeof(result.replay) != 'undefined') {
            this.data.replay = result.replay;
            this.data.myID = clamp(0, result.myID, maxEntities)
            if (this.data.gamemode == 8) this.data.elo = result.playerElo;
            this.data.status = result.playerStatus;
            this.data.isContest = result.isContest;
            this.data.spawnLogs = result.spawnLogs;
            this.data.tickLogs = result.tickLogs;
        } else this.data.replay = false;
        var mapDescription = result.description;
        if (!Array.isArray(mapDescription) || 1 > mapDescription.length) mapDescription = [];
        else {
            var descriptionLength = mapDescription.length;
            for (var charIndex = 0; charIndex < descriptionLength; charIndex++) mapDescription[charIndex] = truncateString(mapDescription[charIndex], 0, 100, "")
        }
        this.data.description = mapDescription;
        this.data.spawnX = createClampedArray(result.playerX, this.data.entityCount, 4096, 16);
        this.data.spawnY = createClampedArray(result.playerY, this.data.entityCount, 4096, 16);
        this.data.teamArray = createClampedArray(result.playerTeam, this.data.entityCount, 8, 8);
        this.data.difficulty = createClampedArray(result.playerStrength, this.data.entityCount, 5, 8);
        var playerColor = result.playerColor;
        if (!Array.isArray(playerColor) || 1 > playerColor.length) playerColor = null;
        else {
            var customColor = Array(this.data.entityCount),
                colorLength = playerColor.length;
            for (var idIndex = 0; idIndex < this.data.entityCount; idIndex++) customColor[idIndex] = createClampedArray(playerColor[idIndex % colorLength], 3, 63, 8);
        }
        this.data.customColor = customColor;
        var playerNames = result.playerName;
        if (!Array.isArray(playerNames) || 1 > playerNames.length) playerNames = null;
        else {
            var entityNicknames = Array(this.data.entityCount),
                namesLength = playerNames.length;
            for (var idIndex = 0; idIndex < this.data.entityCount; idIndex++) entityNicknames[idIndex] = truncateString(playerNames[idIndex % namesLength], 3, 26, "Bot");
        }
        this.data.nicknames = entityNicknames;
        this.data.mapBase64 = "string" === typeof result.mapBase64 ? result.mapBase64 : "";
        this.data.freeNickname = this.data.freeNickname || !this.data.nicknames;
        this.data.spawnX = this.data.spawnY ? this.data.spawnX : null
    };
    this.checkChooseEmoji = function() {
        loadJSONCustomMap(this.data.mapBase64) || loadMap(this.data.mapID, this.data.mapSeed)
    };
    this.zx = function() { //unused
        var z, y = 0,
            A = this.data.entityCount;
        for (z = 0; z < A; z++) this.data.teamArray[z] > y && (y = this.data.teamArray[z]);
        return Math.max(0, y - 1)
    }
}

function Attacks() {
    function getStartingAttackIndex(id) {
        return id < playerCount ? playerAttackLimit * id : playerAttackLimit * playerCount + botAttackLimit * (id - playerCount)
    }
    var playerAttackLimit, botAttackLimit, currentAttackCount, targetIDs, remainingTroops, boatIDs;
    this.init = function() {
        playerAttackLimit = 16 > playerCount ? 12 : 8;
        botAttackLimit = 4;
        var arrayLength = getStartingAttackIndex(maxEntities);
        currentAttackCount = new Uint8Array(maxEntities);
        targetIDs = new Uint16Array(arrayLength);
        remainingTroops = new Uint32Array(arrayLength);
        boatIDs = new Uint16Array(arrayLength)
    };
    this.resetCurrentAttackCount = function(id) {
        currentAttackCount[id] = 0
    };
    this.spilloverNeutral = function(authorID, targetID) {
        var aIndex;
        loop: {
            var sIndex = getStartingAttackIndex(authorID);
            for (aIndex = currentAttackCount[authorID] - 1; 0 <= aIndex; aIndex--)
                if (0 === boatIDs[sIndex + aIndex] && targetIDs[sIndex + aIndex] === targetID) break loop; aIndex = currentAttackCount[authorID]
        }
        if (aIndex !== currentAttackCount[authorID]) {
            var remaining = remainingTroops[getStartingAttackIndex(authorID) + aIndex];
            this.removeAttack(authorID, aIndex);
            this.set(authorID, remaining, maxEntities);
        }
    };
    this.check = function(authorID, targetID) {
        var aIndex, sIndex = getStartingAttackIndex(authorID);
        for (aIndex = currentAttackCount[authorID] - 1; 0 <= aIndex; aIndex--)
            if (0 === boatIDs[sIndex + aIndex] && targetIDs[sIndex + aIndex] === targetID) return true;
        return false
    };
    this.isUnderAttackCap = function(id) {
        return id < playerCount ? currentAttackCount[id] < playerAttackLimit : currentAttackCount[id] < botAttackLimit
    };
    this.getCurrentAttackCount = function(id) {
        return currentAttackCount[id]
    };
    this.getTargetFromIndex = function(id, aIndex) {
        return targetIDs[getStartingAttackIndex(id) + aIndex]
    };
    this.getBoatIDFromIndex = function(id, aIndex) {
        return boatIDs[getStartingAttackIndex(id) + aIndex]
    };
    this.findAttackIndexFromBoatID = function(id, boatID) {
        var aIndex, sIndex = getStartingAttackIndex(id);
        for (aIndex = currentAttackCount[id] - 1; 0 <= aIndex; aIndex--)
            if (boatIDs[sIndex + aIndex] === boatID) return aIndex;
        return -1
    };
    this.getRemainingTroopsFromIndex = function(id, aIndex) {
        return remainingTroops[getStartingAttackIndex(id) + aIndex]
    };
    this.getRemainingTroopsFromTarget = function(id, targetID) {
        var aIndex, sIndex = getStartingAttackIndex(id);
        for (aIndex = currentAttackCount[id] - 1; 0 <= aIndex; aIndex--)
            if (0 === boatIDs[sIndex + aIndex] && targetIDs[sIndex + aIndex] === targetID) return remainingTroops[sIndex + aIndex];
        return 0
    };
    this.getTotalTroopsSentAway = function(id) {
        var sIndex = getStartingAttackIndex(id), troopSum = 0, aIndex;
        for (aIndex = currentAttackCount[id] - 1; 0 <= aIndex; aIndex--) troopSum += remainingTroops[sIndex + aIndex];
        return troopSum
    };
    this.getTotalTroopsAttacking = function(id) {
        var sIndex = getStartingAttackIndex(id), troopSum = 0, aIndex;
        for (aIndex = currentAttackCount[id] - 1; 0 <= aIndex; aIndex--) {
            if (0 === boatIDs[sIndex + aIndex]) troopSum += remainingTroops[sIndex + aIndex]
        }
        return troopSum
    };
    this.getEntityBoatsCount = function(id) {
        var sIndex = getStartingAttackIndex(id), boatCount = 0, aIndex;
        for (aIndex = currentAttackCount[id] - 1; 0 <= aIndex; aIndex--) 0 < boatIDs[sIndex + aIndex] && boatCount++;
        return boatCount
    };
    this.setRemainingTroopsFromTarget = function(id, targetID, amount) {
        var sIndex = getStartingAttackIndex(id), aIndex;
        for (aIndex = currentAttackCount[id] - 1; 0 <= aIndex; aIndex--) {
            if (0 === boatIDs[sIndex + aIndex] && targetIDs[sIndex + aIndex] === targetID) remainingTroops[sIndex + aIndex] = amount
        }
    };
    this.setRemainingTroopsFromIndex = function(id, aIndex, amount) {
        remainingTroops[getStartingAttackIndex(id) + aIndex] = amount
    };
    this.set = function(authorID, amount, targetID) {
        var aIndex, sIndex = getStartingAttackIndex(authorID);
        targetID === myID && statisticNumbers.numbers[authorID < playerCount ? 6 : 5]++;
        for (aIndex = currentAttackCount[authorID] - 1; 0 <= aIndex; aIndex--)
            if (0 === boatIDs[sIndex + aIndex] && targetIDs[sIndex + aIndex] === targetID) {
                remainingTroops[sIndex + aIndex] += amount;
                remainingTroops[sIndex + aIndex] = remainingTroops[sIndex + aIndex] > absMaxTroopCap ? absMaxTroopCap : remainingTroops[sIndex + aIndex];
                return
            } targetIDs[sIndex + currentAttackCount[authorID]] = targetID;
        remainingTroops[sIndex + currentAttackCount[authorID]] = amount;
        boatIDs[sIndex + currentAttackCount[authorID]] = 0;
        currentAttackCount[authorID]++;
        authorID < playerCount && (targetID === myID ? announcements.genericAnnouncement(authorID, 5) : authorID === myID && infoRenderer.breakNonAggression(targetID))
    };
    this.addBoat = function(id, amount, boatID) {
        var sIndex = getStartingAttackIndex(id);
        isAlive[id] = 2;
        targetIDs[sIndex + currentAttackCount[id]] = 0;
        remainingTroops[sIndex + currentAttackCount[id]] = amount;
        boatIDs[sIndex + currentAttackCount[id]] = boatID;
        currentAttackCount[id]++
    };
    this.removeAttack = function(id, attackIndex) {
        var aIndex;
        if (0 !== currentAttackCount[id]) {
            var sIndex = getStartingAttackIndex(id);
            currentAttackCount[id]--;
            for (aIndex = attackIndex; aIndex < currentAttackCount[id]; aIndex++) {
                targetIDs[sIndex + aIndex] = targetIDs[sIndex + aIndex + 1];
                remainingTroops[sIndex + aIndex] = remainingTroops[sIndex + aIndex + 1];
                boatIDs[sIndex + aIndex] = boatIDs[sIndex + aIndex + 1];
            }
        }
    };
    this.getAttackers = function(targetID) {
        var aliveIndex, aIndex, attackers = [];
        for (aliveIndex = aliveCount - 1; 0 <= aliveIndex; aliveIndex--) {
            var sIndex = getStartingAttackIndex(aliveEntities[aliveIndex]);
            for (aIndex = currentAttackCount[aliveEntities[aliveIndex]] - 1; 0 <= aIndex; aIndex--)
                if (0 === boatIDs[sIndex + aIndex] && targetIDs[sIndex + aIndex] === targetID) {
                    attackers.push(aliveEntities[aliveIndex]);
                    break
                }
        }
        return attackers
    }
}

function Interest() {
    var ticksPerITick, iTicksPerCycle, ticksUntilITick, iTicksLeft, discreteInterestArray, const_maxEntities;
    this.init = function() {
        iTicksLeft = ticksUntilITick = iTicksPerCycle = ticksPerITick = 10
    };
    this.generateDiscreteInterestArray = function() {
        const_maxEntities = 512;
        discreteInterestArray = new Uint16Array(const_maxEntities);
        for (var iIndex = 0; iIndex < const_maxEntities; iIndex++) discreteInterestArray[iIndex] = 100 + sqrtEstimation(divideFloor(25600 * iIndex, const_maxEntities - 4), 9)
    };
    this.getFormattedTime = function() {
        return iTicksLeft
    };
    this.update = function() {
        if (0 >= --ticksUntilITick) {
            ticksUntilITick = ticksPerITick;
            var aliveIndex, myOldTroops = troops[myID];
            singleplayer && !teamGame && 0 !== isAlive[0] && 0 === singleSettings.botSettings[0].difficulty && (troops[0] += divideFloor(land[0], 6));
            for (aliveIndex = aliveCount - 1; 0 <= aliveIndex; aliveIndex--) {
                var altInterestRate = divideFloor(interest.getInterestRate(aliveEntities[aliveIndex]) * troops[aliveEntities[aliveIndex]], 1E4);
                troops[aliveEntities[aliveIndex]] += 1 > altInterestRate ? 1 : altInterestRate;
                interest.limitTroops(aliveEntities[aliveIndex])
            }
            statisticNumbers.numbers[9] += troops[myID] - myOldTroops;
            if (0 >= --iTicksLeft) {
                iTicksLeft = iTicksPerCycle;
                myOldTroops = troops[myID];
                for (aliveIndex = aliveCount - 1; 0 <= aliveIndex; aliveIndex--) {
                    troops[aliveEntities[aliveIndex]] += land[aliveEntities[aliveIndex]];
                    interest.limitTroops(aliveEntities[aliveIndex]);
                }
                statisticNumbers.numbers[8] += troops[myID] - myOldTroops;
                sounds.play(0)
            } else sounds.play(1)
        }
    };
    this.getInterestRate = function(id) {
        var landIRate = discreteInterestArray[divideFloor((const_maxEntities - 1) * land[id], currentLandPixelsCount)];
        if (1920 > mainHandler.getTicksElapsed()) {
            var timeIRate = divideFloor(100 * (13440 - 6 * mainHandler.getTicksElapsed()), 1920);
            landIRate = timeIRate > landIRate ? timeIRate : landIRate
        }
        timeIRate = this.getMaxBeforeRedI(id);
        troops[id] > timeIRate && (landIRate -= divideFloor(2 * landIRate * (troops[id] - timeIRate), timeIRate));
        return 0 > landIRate ? 0 : 700 < landIRate ? 700 : landIRate
    };
    this.getMaxBeforeRedI = function(id) {
        var maxTroops = 100 * land[id];
        return maxTroops > absMaxTroopsBeforeRedI ? absMaxTroopsBeforeRedI : maxTroops
    };
    this.limitTroops = function(id) {
        var maxTroops = land[id] * maxTroopsToLandRatio;
        troops[id] = troops[id] > absMaxTroopCap ? absMaxTroopCap : troops[id] > maxTroops ? maxTroops : troops[id]
    }
}

function InfoRenderer() {
    function setupInfoCanvas() {
        infoCanvas.width = prevClientWidth;
        infoCanvas.height = prevClientHeight;
        infoCanvasCtx = infoCanvas.getContext("2d", {
            alpha: true
        });
        infoCanvasCtx.textAlign = centerAlign;
        infoCanvasCtx.textBaseline = middleAlign;
        infoCanvasCtx.imageSmoothingEnabled = true
    }
    
    function renderEntityLabels() {
        needsDrawImage = false;
        canvasScale = 1;
        renderOffsetX = renderOffsetY = 0;
        infoCanvasCtx.clearRect(0, 0, prevClientWidth, prevClientHeight);
        var camLeft = viewportX / mainScaleFactor, camTop = viewportY / mainScaleFactor, 
            camRight = (prevClientWidth + viewportX) / mainScaleFactor, camBottom = (prevClientHeight + viewportY) / mainScaleFactor,
            landCenterX, landCenterY, idIndex, fontSize,
            isAlivePlayer = 0 !== isAlive[myID] && playerActions.isHuman(myID), aliveIndex;

        for (aliveIndex = aliveCount - 1; 0 <= aliveIndex; aliveIndex--) {
            idIndex = aliveEntities[aliveIndex];
            fontSize = Math.floor(fontScalarConst * mainScaleFactor * entityLabelScaleY[idIndex] * labelWidth[idIndex] * (typeof(modHandler) == "object" && modHandler.font >= 1 ? 1.5 : 1));
            if (fontSize >= minFontSize && fontSize < maxFontSize && labelXPos[idIndex] + labelWidth[idIndex] > camLeft && labelXPos[idIndex] < camRight && labelYPos[idIndex] + labelHeight[idIndex] > camTop && labelYPos[idIndex] < camBottom) {
                landCenterX = Math.floor(prevClientWidth * (labelXPos[idIndex] + labelWidth[idIndex] / 2 - camLeft) / (camRight - camLeft));
                landCenterY = Math.floor(prevClientHeight * (labelYPos[idIndex] + labelHeight[idIndex] / 2 - camTop) / (camBottom - camTop) - .1 * fontSize);
                infoCanvasCtx.font = fontStyles[playerStatus[idIndex]] + fontSize + fontSizeArial;

                var fontColor = fontSize >= imposterFontColorThresholdSize && fontSize < maxFontSize ? teamColors.impostorfontColors[pixel.shading[idIndex]] + getAlphaFromFontSize(fontSize).toFixed(3) + ")" : teamColors.fontColors[pixel.shading[idIndex]],
                    textLabel = gamemode === 8 || typeof(modHandler) == "object" && modHandler.font >= 1 ? attackBars.splitNumber(troops[idIndex]): nicknames[idIndex];
                if (typeof(modHandler) == 'object' && modHandler.font >= 1) {
                    if (modHandler.font == 2 && isNotTeamate(myID, idIndex)) {
                        if (idIndex >= playerCount && difficultyEngine.botTiming[idIndex - playerCount] <= 17 && mainHandler.getTicksElapsed() % 100 <= 70 && !bordersNeutral(idIndex)) {
                            fontColor = "rgb(0,0,210)";
                        } else if (idIndex >= playerCount) {
                            fontColor = "rgb(" + getMin(modHandler.density(idIndex), 2.2) * 250 + "," + 125 * (2 - getMin(modHandler.density(idIndex), 2.2)) + ",0)";
                        }
                    }
                    if (modHandler.font == 2 && idIndex < playerCount) textLabel += ` (${modHandler.density(idIndex).toFixed(2)})`
                }
                infoCanvasCtx.fillStyle = fontColor;
                infoCanvasCtx.fillText(textLabel, landCenterX, landCenterY);
                needsDrawImage = true;
                
                fontSize *= (typeof(modHandler) == "object" && modHandler.font >= 1 ? 0.67 : 1)
                if (0 < displayIconRemainingTime[idIndex]) {
                    if (0 === landIDOrder[idIndex])
                        if (emojis.isFlag(displayingEmojiID[idIndex])) {
                            var emojiSizeMultiplier = .9 * fontSize / emojis.width,
                                emojiVerticalPos = Math.floor(landCenterY - .5 * emojiSizeMultiplier * emojis.width - .05 * fontSize);
                            infoCanvasCtx.globalAlpha = getAlphaFromFontSize(fontSize);
                            var emojiHorizontalPos = Math.floor(landCenterX - .5 * fontSize / entityLabelScaleX[idIndex] - .4 * fontSize - emojiSizeMultiplier * emojis.width)
                            for (var index = 0; 2 > index; index++) {
                                infoCanvasCtx.setTransform(emojiSizeMultiplier, 0, 0, emojiSizeMultiplier, emojiHorizontalPos, emojiVerticalPos);
                                infoCanvasCtx.drawImage(emojis.emojiCanvasList[displayingEmojiID[idIndex]], 0, 0);
                            }
                            infoCanvasCtx.globalAlpha = 1;
                            infoCanvasCtx.setTransform(1, 0, 0, 1, 0, 0);
                            renderIcon(landCenterX, landCenterY, fontSize, 0, 0)

                        } else if (emojis.isFacialEmoji(displayingEmojiID[idIndex])) {
                            renderEmoji(landCenterX, landCenterY, fontSize, displayingEmojiID[idIndex], 0);
                            renderIcon(landCenterX, landCenterY, fontSize, 0, 1)
                        }
                        else {
                            renderEmoji(landCenterX, landCenterY, fontSize, displayingEmojiID[idIndex], 1);
                            renderIcon(landCenterX, landCenterY, fontSize, 1, 0)
                        }
                    else renderEmoji(landCenterX, landCenterY, fontSize, displayingEmojiID[idIndex], 0)

                } else if (0 === landIDOrder[idIndex]) renderIcon(landCenterX, landCenterY, fontSize, 0, 0);

                if (isAlivePlayer && (0 < displayIconRemainingTime[idIndex + maxEntities] || 0 < displayIconRemainingTime[idIndex + 2 * maxEntities] || 0 < displayIconRemainingTime[idIndex + 3 * maxEntities] || 0 < displayIconRemainingTime[idIndex + 4 * maxEntities])) {
                    fontColor = landCenterX;
                    var iconLevel = -1;
                    for (index = 4; 1 <= index; index--) {
                        if (0 < displayIconRemainingTime[idIndex + index * maxEntities]) iconLevel++
                    }
                    for (index = 1; 5 > index; index++) {
                        if (0 < displayIconRemainingTime[idIndex + index * maxEntities]) {
                            var iconScale = .8 * fontSize / emojis.width;
                            infoCanvasCtx.setTransform(iconScale, 0, 0, iconScale, Math.floor(fontColor - .5 * iconScale * emojis.width - .534 * iconLevel * fontSize), Math.floor(landCenterY + 1.4 * iconScale * emojis.width));
                            infoCanvasCtx.globalAlpha = getAlphaFromFontSize(fontSize);
                            infoCanvasCtx.drawImage(1 === index ? emojis.emojiCanvasList[displayingEmojiID[idIndex + maxEntities]] : 2 === index && 255 > displayIconRemainingTime[idIndex + index * maxEntities] ? playerActions.spriteIcons[2] : playerActions.greenIcons[index + 3], 0, 0);
                            infoCanvasCtx.globalAlpha = 1;
                            infoCanvasCtx.setTransform(1, 0, 0, 1, 0, 0);
                            iconLevel -= 2
                        }
                    }
                }
                var getFontSize = Math.floor(fontScaleFactor * fontSize);
                if (getFontSize >= minFontSize) {
                    infoCanvasCtx.font = fontWeightBold + getFontSize + fontSizeArial;
                    textLabel = gamemode === 8 || typeof(modHandler) == "object" && modHandler.font >= 1 ? nicknames[idIndex] + (typeof(modHandler) == 'object' && modHandler.font >= 2 ? ` (${idIndex})` : "") : attackBars.splitNumber(troops[idIndex]);
                    infoCanvasCtx.fillText(textLabel, landCenterX, landCenterY + Math.floor((typeof(modHandler) == "object" && modHandler.font >= 1 ? 1 : .78) * fontSize))
                }
            }
        }
    }
    
    function renderIcon(centerX, centerY, fontSize, xOffset, yOffset) {
        var scaleFactor = .95 * fontSize / crownHeight;
        infoCanvasCtx.setTransform(scaleFactor, 0, 0, scaleFactor, Math.floor(centerX - .5 * scaleFactor * crownWidth + .8 * xOffset * fontSize), Math.floor(centerY - 1.76 * scaleFactor * crownHeight - .82 * yOffset * fontSize));
        infoCanvasCtx.globalAlpha = getAlphaFromFontSize(fontSize);
        infoCanvasCtx.drawImage(sprites.getValueByID(4), 0, 0);
        infoCanvasCtx.globalAlpha = 1;
        infoCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
    }

    function renderEmoji(centerX, centerY, fontSize, emojiID, xOffset) {
        var scaleFactor = 1.2 * fontSize / emojis.width;
        infoCanvasCtx.setTransform(scaleFactor, 0, 0, scaleFactor, Math.floor(centerX - .5 * scaleFactor * emojis.width - .8 * xOffset * fontSize), Math.floor(centerY - 1.5 * scaleFactor * emojis.width));
        infoCanvasCtx.globalAlpha = getAlphaFromFontSize(fontSize);
        infoCanvasCtx.drawImage(emojis.emojiCanvasList[emojiID], 0, 0);
        infoCanvasCtx.globalAlpha = 1;
        infoCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
    }
    
    function getAlphaFromFontSize(fontSize) {
        return fontSize >= imposterFontColorThresholdSize && fontSize < maxFontSize ? 1 - (fontSize - imposterFontColorThresholdSize) / (maxFontSize - imposterFontColorThresholdSize) : 1
    }

    function calculateLabelPosition(id) {
        var xyIndex, minLabelXIndex = labelXPos[id];
        for (xyIndex = labelXPos[id] - xMin[id] - 1; 0 <= xyIndex; xyIndex--) {
            minLabelXIndex--;
            if (!checkYCoverage(id, minLabelXIndex, labelYPos[id], labelHeight[id])) {
                minLabelXIndex++;
                break
            }
        }
        var maxLabelXYIndex = labelXPos[id];
        for (xyIndex = xMax[id] - labelXPos[id] - labelWidth[id]; 0 <= xyIndex; xyIndex--) {
            maxLabelXYIndex++;
            if (!checkYCoverage(id, maxLabelXYIndex + labelWidth[id] - 1, labelYPos[id], labelHeight[id])) {
                maxLabelXYIndex--;
                break
            }
        }
        minLabelXIndex = Math.floor((minLabelXIndex + maxLabelXYIndex) / 2);
        maxLabelXYIndex = labelYPos[id];
        for (xyIndex = labelYPos[id] - yMin[id] - 1; 0 <= xyIndex; xyIndex--) {
            maxLabelXYIndex--;
            if (!checkXCoverage(id, minLabelXIndex, maxLabelXYIndex, labelWidth[id])) {
                maxLabelXYIndex++;
                break
            }
        }
        var maxLabelYIndex = labelYPos[id];
        for (xyIndex = yMax[id] - labelYPos[id] - labelHeight[id]; 0 <= xyIndex; xyIndex--) {
            maxLabelYIndex++;
            if (!checkXCoverage(id, minLabelXIndex, maxLabelYIndex + labelHeight[id] - 1, labelWidth[id])) {
                maxLabelYIndex--;
                break
            }
        }
        xyIndex = Math.floor((maxLabelXYIndex + maxLabelYIndex) / 2);
        isLabelPositionValid(id, minLabelXIndex, xyIndex, labelWidth[id], labelHeight[id]) && (labelXPos[id] = minLabelXIndex, labelYPos[id] = xyIndex)
    }

    function isLabelPositionValid(id, xCoord, yCoord, xOffset, yOffset) {
        var xyIndex;
        for (xyIndex = xCoord + xOffset - 1; xyIndex >= xCoord; xyIndex--) {
            if (!checkYCoverage(id, xyIndex, yCoord, yOffset)) return false;
        }
        var yMiniOffset = getMax(1, Math.floor(.25 * yOffset));
        for (xyIndex = yCoord + yOffset - 1 - yMiniOffset; xyIndex >= yCoord + yMiniOffset; xyIndex--) {
            if (!checkXCoverage(id, xCoord, xyIndex, xOffset)) return false;
        }
        return true
    }

    function checkYCoverage(id, xCoord, yCoord, yOffset) {
        return pixel.strongIsOwner(id, 4 * (yCoord * currentMapWidth + xCoord)) && pixel.strongIsOwner(id, 4 * ((yCoord + yOffset - 1) * currentMapWidth + xCoord))
    }

    function checkXCoverage(id, xCoord, yCoord, xOffset) {
        return pixel.strongIsOwner(id, 4 * (yCoord * currentMapWidth + xCoord)) && pixel.strongIsOwner(id, 4 * (yCoord * currentMapWidth + xCoord + xOffset - 1))
    }

    function setLabelSize() {
        if (gamemode === 8 || typeof(modHandler) == "object" && modHandler.font >= 1) {
            var entityIndex;
            infoCanvasCtx.font = fontWeightBold + 100 + fontSizeArial;
            var entityLabelScale = 100 / Math.floor(infoCanvasCtx.measureText("20 000 000" + (typeof(modHandler) == "object" && modHandler.font >= 2 ? ` (${150.00})` : "")).width);
            for (entityIndex = maxEntities - 1; 0 <= entityIndex; entityIndex--) entityLabelScaleX[entityIndex] = entityLabelScaleY[entityIndex] = entityLabelScale
        } else {
            infoCanvasCtx.font = fontWeightBold + Math.floor(100 * fontScaleFactor) + fontSizeArial;
            entityLabelScale = 80 / Math.floor(infoCanvasCtx.measureText(attackBars.splitNumber(absMaxTroopCap) + (typeof(modHandler) == "object" && modHandler.font >= 2) ? ` (${maxEntities - 1})` : "").width);
            infoCanvasCtx.font = fontWeightBold + 100 + fontSizeArial;
            for (entityIndex = maxEntities - 1; 0 <= entityIndex; entityIndex--) {
                entityLabelScaleX[entityIndex] = 100 / Math.floor(infoCanvasCtx.measureText(nicknames[entityIndex]).width);
                entityLabelScaleY[entityIndex] = entityLabelScale < entityLabelScaleX[entityIndex] ? entityLabelScale : entityLabelScaleX[entityIndex];
            }
        }
    }
    var entityBatchIndex, updateLabelCounters, labelXPos, labelYPos, labelWidth, labelHeight, entityLabelScaleY, entityLabelScaleX, maxFontSize, imposterFontColorThresholdSize, fontScaleFactor, labelYScalarFactor, minFontSize, fontScalarConst, renderOffsetX, renderOffsetY, canvasScale, needsDrawImage, infoCanvas, infoCanvasCtx, updateInterval, displayingEmojiID, displayIconRemainingTime, crownWidth, crownHeight;
    this.init = function() {
        needsDrawImage = false;
        fontScalarConst = .88;
        fontScaleFactor = .5;
        labelYScalarFactor = 1.8;
        maxFontSize = Math.floor(.5 * minDim);
        imposterFontColorThresholdSize = Math.floor(.2 * maxFontSize);
        minFontSize = gamemode === 8 || typeof(modHandler) == "object" && modHandler.font >= 1 ? moreSettings.hideUsernames ? 6 : 4 : moreSettings.hideUsernames ? 10 : 7;
        updateLabelCounters = entityBatchIndex = 0;
        labelXPos = new Uint16Array(maxEntities);
        labelYPos = new Uint16Array(maxEntities);
        labelWidth = new Uint16Array(maxEntities);
        labelHeight = new Uint16Array(maxEntities);
        entityLabelScaleY = new Float32Array(maxEntities);
        entityLabelScaleX = new Float32Array(maxEntities);
        displayingEmojiID = new Uint8Array(2 * maxEntities);
        displayIconRemainingTime = new Uint8Array(5 * maxEntities);
        infoCanvas = infoCanvas ? infoCanvas : document.createElement("canvas");
        setupInfoCanvas();
        renderOffsetY = renderOffsetX = 0;
        canvasScale = 1;
        updateInterval = 0;
        setLabelSize();
        for (entityIndex = maxEntities - 1; 0 <= entityIndex; entityIndex--) {
            if (12 > land[entityIndex]) {
                labelXPos[entityIndex] = xMin[entityIndex] + 1;
                labelYPos[entityIndex] = yMin[entityIndex] + 1;
                labelWidth[entityIndex] = 1;
                labelHeight[entityIndex] = 1
            } else {
                labelXPos[entityIndex] = xMin[entityIndex];
                labelYPos[entityIndex] = yMin[entityIndex] + 1;
                labelWidth[entityIndex] = 4;
                labelHeight[entityIndex] = 2;
            }
        } 
        if (inSpawn) {
            for (entityIndex = 0; entityIndex < playerCount; entityIndex++) labelWidth[entityIndex] = 0;
        }
        crownWidth = sprites.getValueByID(4).width;
        crownHeight = sprites.getValueByID(4).height
    };
    this.setCanvasVariables = function() {
        setupInfoCanvas();
        renderEntityLabels()
    };
    this.setPlayerLabels = function() {
        for (var playerIndex = updateInterval = 0; playerIndex < playerCount; playerIndex++) {
            if (3 !== xMax[playerIndex] - xMin[playerIndex] || 3 !== yMax[playerIndex] - yMin[playerIndex]) {
                labelXPos[playerIndex] = xMin[playerIndex] + (xMax[playerIndex] !== xMin[playerIndex] ? 1 : 0);
                labelYPos[playerIndex] = yMin[playerIndex];
                labelWidth[playerIndex] = 1;
                labelHeight[playerIndex] = 1;
            } else {
                labelXPos[playerIndex] = xMin[playerIndex];
                labelYPos[playerIndex] = yMin[playerIndex] + 1;
                labelWidth[playerIndex] = 4;
                labelHeight[playerIndex] = 2;
            }
        }
    };
    this.showIcon = function(authorID, iconID, emojiID) {
        if (0 !== isAlive[authorID] && (4 === iconID || 2 !== playerStatus[authorID])) {
            authorID += iconID * maxEntities;
            if (0 === iconID) {
                if (displayingEmojiID[authorID] === emojiID && 0 < displayIconRemainingTime[authorID]) displayIconRemainingTime[authorID] = 0
                else {
                    displayingEmojiID[authorID] = emojiID;
                    displayIconRemainingTime[authorID] = emojis.isFlag(emojiID) ? 255 : 64
                }
            } else if (1 === iconID) {
                displayIconRemainingTime[authorID] = 64;
                displayingEmojiID[authorID] = emojiID;
            } else displayIconRemainingTime[authorID] = emojiID;
        }
    };
    this.drawCanvasImage = function() {
        if (needsDrawImage) {
            if (1 !== canvasScale) {
                mainCanvasCtx.imageSmoothingEnabled = true;
                mainCanvasCtx.setTransform(canvasScale, 0, 0, canvasScale, 0, 0);
                mainCanvasCtx.drawImage(infoCanvas, -renderOffsetX / canvasScale, -renderOffsetY / canvasScale);
                mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
            } else {
                mainCanvasCtx.imageSmoothingEnabled = false;
                mainCanvasCtx.drawImage(infoCanvas, -renderOffsetX, -renderOffsetY);
            }
        }
    };
    this.translateCanvas = function(xPos, yPos) {
        renderOffsetX += xPos;
        renderOffsetY += yPos
    };
    this.onPointermove = function(xPos, yPos) {
        infoRenderer.translateCanvas(xPos, yPos)
    };
    this.zoom = function(scaleFactorChangeRatio, newX, newY) {
        canvasScale *= scaleFactorChangeRatio;
        renderOffsetX = (renderOffsetX + newX) * scaleFactorChangeRatio - newX;
        renderOffsetY = (renderOffsetY + newY) * scaleFactorChangeRatio - newY
    };
    this.drawCanvas = function() {
        if (0 >= --updateInterval) {
            updateInterval = 4 >= frameRate ? 10 : 12 > frameRate ? 5 : 2;
            renderEntityLabels();
            return true;
        } else return false
    };
    this.getEntityLabelScaleY = function(id) {
        return entityLabelScaleY[id]
    };
    this.update = function() {
        setLabelSize();
        if (4 <= ++updateLabelCounters) {
            updateLabelCounters = 0;
            for (var iconRelativeIndex = 4; 1 <= iconRelativeIndex; iconRelativeIndex--) {
                for (var aliveIndex = aliveCount - 1; 0 <= aliveIndex; aliveIndex--) {
                    var iconRelativeIDIndex = aliveEntities[aliveIndex] + iconRelativeIndex * maxEntities;
                    0 < displayIconRemainingTime[iconRelativeIDIndex] && 255 > displayIconRemainingTime[iconRelativeIDIndex] && displayIconRemainingTime[iconRelativeIDIndex]--
                }
            if (2 !== clientStatus)
                for (aliveIndex = aliveCount - 1; 0 <= aliveIndex; aliveIndex--) {
                    iconRelativeIDIndex = aliveEntities[aliveIndex];
                    if (0 < displayIconRemainingTime[iconRelativeIDIndex] && 255 > displayIconRemainingTime[iconRelativeIDIndex]) displayIconRemainingTime[iconRelativeIDIndex]--
                }
            }
        }
        var entitiesToProcess = rangeClamp(8, Math.floor(.1 * aliveCount), aliveCount), validLabelPositionFound;
        for (var currentIndex = entityBatchIndex + entitiesToProcess - 1; currentIndex >= entityBatchIndex; currentIndex--) {
            var idIndex = aliveEntities[currentIndex % aliveCount];
            if (0 < labelWidth[idIndex] && isLabelPositionValid(idIndex, labelXPos[idIndex], labelYPos[idIndex], labelWidth[idIndex], labelHeight[idIndex])) {
                for (var validLabelPositionFound = false, offsetMultiplier = 0; 8 > offsetMultiplier; offsetMultiplier++) {
                    if (labelWidth[idIndex] + 2 > xMax[idIndex] - xMin[idIndex] + 1 || labelHeight[idIndex] + 2 > yMax[idIndex] - yMin[idIndex] + 1) break;
                    if (isLabelPositionValid(idIndex, labelXPos[idIndex] - 1, labelYPos[idIndex] - 1, labelWidth[idIndex] + 2, labelHeight[idIndex] + 2)) {
                        labelXPos[idIndex] -= 1;
                        labelYPos[idIndex] -= 1;
                        labelWidth[idIndex] += 2;
                        labelHeight[idIndex] += 2;
                        validLabelPositionFound = true;
                    } else break
                }
                if (!validLabelPositionFound) {
                    validLabelPositionFound = false;
                    for (var labelWidthOffset = 1 + Math.floor(.02 * labelWidth[idIndex]), offsetMultiplier = 1; 5 > offsetMultiplier; offsetMultiplier++) {
                        var newLabelWidth = labelWidth[idIndex] + offsetMultiplier * labelWidthOffset;
                        if (newLabelWidth > xMax[idIndex] - xMin[idIndex] + 1) break;
                        var newLabelHeight = 1 + Math.floor(labelYScalarFactor * entityLabelScaleY[idIndex] * newLabelWidth);
                        if (newLabelHeight > yMax[idIndex] - yMin[idIndex] + 1) break;
                        var randomXPos = xMin[idIndex] + Math.floor(Math.random() * (xMax[idIndex] - xMin[idIndex] + 2 - newLabelWidth));
                        var randomYPos = yMin[idIndex] + Math.floor(Math.random() * (yMax[idIndex] - yMin[idIndex] + 2 - newLabelHeight));
                        if (isLabelPositionValid(idIndex, randomXPos, randomYPos, newLabelWidth, newLabelHeight)) {
                            labelXPos[idIndex] = randomXPos;
                            labelYPos[idIndex] = randomYPos;
                            labelWidth[idIndex] = newLabelWidth;
                            labelHeight[idIndex] = newLabelHeight;
                            validLabelPositionFound = true;
                        }
                    }
                }
                if (validLabelPositionFound) calculateLabelPosition(idIndex);
            } else {
                loop: {
                    var labelXPosIndex = labelXPos[idIndex] + 1,
                        labelYPosIndex = labelYPos[idIndex] + 1;
                    for (labelWidthXIndex = labelWidth[idIndex] - 2;;) {
                        if (1 > labelWidthXIndex) {
                            labelWidth[idIndex] = 0;
                            break
                        }
                        var labelHeightYIndex = 1 + Math.floor(labelYScalarFactor * entityLabelScaleY[idIndex] * labelWidthXIndex);
                        if (isLabelPositionValid(idIndex, labelXPosIndex, labelYPosIndex, labelWidthXIndex, labelHeightYIndex)) {
                            labelXPos[idIndex] = labelXPosIndex;
                            labelYPos[idIndex] = labelYPosIndex;
                            labelWidth[idIndex] = labelWidthXIndex;
                            labelHeight[idIndex] = labelHeightYIndex;
                            validLabelPositionFound = true;
                            break loop
                        }
                        labelXPosIndex++;
                        labelYPosIndex++;
                        labelWidthXIndex -= 2
                    }
                    validLabelPositionFound = false
                }
                if (validLabelPositionFound) calculateLabelPosition(idIndex);
                else {
                    var xDiff = xMax[idIndex] - xMin[idIndex] + 1,
                        leftShift = getMax(1, Math.floor(.02 * xDiff));
                    for (; xDiff >= -6 * leftShift; xDiff -= leftShift) {
                        var newLabelWidth = 0 < xDiff ? xDiff : 1,
                            newLabelHeight = 1 + Math.floor(labelYScalarFactor * entityLabelScaleY[idIndex] * newLabelWidth),
                            randomXPos = xMin[idIndex] + Math.floor(Math.random() * (xMax[idIndex] - xMin[idIndex] + 2 - newLabelWidth)),
                            randomYPos = yMin[idIndex] + Math.floor(Math.random() * (yMax[idIndex] - yMin[idIndex] + 2 - newLabelHeight));
                        if (isLabelPositionValid(idIndex, randomXPos, randomYPos, newLabelWidth, newLabelHeight)) {
                            labelXPos[idIndex] = randomXPos;
                            labelYPos[idIndex] = randomYPos;
                            labelWidth[idIndex] = newLabelWidth;
                            labelHeight[idIndex] = newLabelHeight;
                            break
                        }
                    }
                }
            }
        }
        entityBatchIndex += entitiesToProcess;
        entityBatchIndex %= aliveCount
    };
    this.breakNonAggression = function(playerID) {
        var T = playerID + 2 * maxEntities,
            remainingTime = displayIconRemainingTime[T];
        if (0 < remainingTime) {
            announcements.removePendingAnnouncement(50, playerID);
            displayIconRemainingTime[T] = 0;
            return 255 === remainingTime
        } else return false
    };
    this.ratifiedNonAggression = function(id) {
        return 255 === displayIconRemainingTime[id + 2 * maxEntities]
    }
}

function NickNames() {
    var countryNames, humanNames;
    this.init = function() {
        var cnIndex, rIndex;
        countryNames = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of C\u00f3rdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chav\u00edn Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;G\u00f6kt\u00fcrk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later L\u00ea z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguy\u1ec5n z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;T\u00e2y S\u01a1n z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem\u2013Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Sal\u00e9;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocoll\u00e1n;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;W\u00fcrttemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States".split(";");
        humanNames = "Antin Mark Artem Viktor Pasha Maxim Rodion Yuri Lev Luka Ivan Igor Nikita Leonid Daniil Alexei Boris Sasha Yulia Luda Yana Kira Alisa Polina Mischa Mila Inessa Alyona Alina Anya Anna Maria Sofia Walda Uta Tyra Tanka Svea Saskia Runa Rigmor Ostara Nanna Lykke Kunna Irma Iduna Helga Gudrun Gisela Gerda Gelsa Freya Frauke Ferun Elke Eila Dagmar Ariald Dagwin Eckwin Edmund Eike Erkmar Erwin Falko Frowin Gerbod Gunnar Halvor Irvin Knut Leif Lando Odin Oswin Ragin Rainer Rango Sarolf Thor Ulf Wolf Sarah Emma Laura Chloe Marie L\u00e9a Emily Keyla Manon Julie Julia Alice Kim Lisa Kora Clara Sara Lucie Anais Grace Eva Zoe Lee Katie Jade Ines Lily Amy Megan Lucy Elisa Kate Mary Elise Nina C\u00e9lia Ma\u00ebva Kayla Elysa Lena Amber Kelly Jenny Lola Mia Abby Ella Diana Fanny Ellie Ana Cindy Elena Rose Erin Molly Park Jane Lina Bella Lou Alex Irene Elsa Leah Holly Maya Linda Carla Anne Paige Annie Jenna Karen Lydia Haley Hanna Wendy Luna Naomi Sonia Fiona Helen Ambre Jess Angel Leila Lara Tina Ann Laur\u00e9 Chen Daisy Paula Iris Ruby Minji Marta Sam Erika Nora Nadia Eve Erica Ava Wang Choi Yujin Jin Yang Hina Beth Lucia Faith Jiwon Ad\u00e8le Alexa Min Flora Nancy Lili Lexi Cloe Hana Lin Kenza Lise Li Mina Angie Lotte Sandy Vicky May Jamie Joy Jeong Tara Sally Merve Diane Maddy Lilly Alix Zhang Gabby Abbie Liz Ellen Rita Olga Dana Elif Maud Sunny Joyce Liu Jieun Rosie Becky Jung Ilona Kylie Ruth Kat Han Nikki Kang Tania Dasha Cathy Aline Jo Ally Lilou Sujin Tanya Amina Yu Aya Katy Becca Rosa Paola Anita Sumin Betty Subin Tessa Heidi Tori Lila Imane Yoon Allie Farah Ciara Gina Yejin Song Susan Niamh April Izzy Aude Liza Salma Ivy Elina Liya Sue Gwen Maia Mimi Mandy Nana Sanne Hope Ariel Eliza Daria Yuna Evie Aimee Avery Agn\u00e8s Stacy Jisu Madi Riley Carly Lia Irina".split(" ");
        var replaceKey = "K ; Y;E ; Z; z; s;S ".split(";"),
            replacement = "Kingdom of ; Kingdom;Empire of ; Empire; Dynasty; Sultanate;Sultanate of ".split(";");
        for (cnIndex = countryNames.length - 1; 0 <= cnIndex; cnIndex--)
            for (rIndex = replaceKey.length - 1; 0 <= rIndex; rIndex--) countryNames[cnIndex] = countryNames[cnIndex].replace(replaceKey[rIndex], replacement[rIndex])
    };
    this.generate = function() {
        var entityIndex, randomValue;
        if (customJSON.isCustomJSON && customJSON.data.nicknames && !customJSON.data.replay) {
            for (entityIndex = playerCount; entityIndex < maxEntities; entityIndex++) nicknames[entityIndex] = customJSON.data.nicknames[entityIndex % entityCount]
        } else if (9 === gamemode) {
            randomValue = fakeRandom.random();
            var humanAlliesCount = playerCount + zombieSettings.helperBotCount;
            for (entityIndex = humanAlliesCount - 1; entityIndex >= playerCount; entityIndex--) nicknames[entityIndex] = "[Bot] " + humanNames[(entityIndex + randomValue) % humanNames.length];
            for (entityIndex = humanAlliesCount; entityIndex < maxEntities; entityIndex++) nicknames[entityIndex] = "[Zombie] " + humanNames[(entityIndex + randomValue) % humanNames.length]
        } else if (singleplayer) {
            randomValue = fakeRandom.random();
            for (entityIndex = playerCount; entityIndex < maxEntities; entityIndex++) nicknames[entityIndex] = countryNames[(entityIndex + randomValue) % maxEntities];
        } else {
            randomValue = fakeRandom.random();
            for (entityIndex = playerCount; entityIndex < maxEntities; entityIndex++) nicknames[entityIndex] = "[Bot] " + humanNames[(entityIndex + randomValue) % humanNames.length]
        }
    };
    this.updateNicknames = function() {
        var entityIndex;
        if (moreSettings.highResolution && !singleplayer) {
            tempNicknames = Array(playerCount);
            var medianValue = fakeRandom.getMedian();
            for (entityIndex = 0; entityIndex < playerCount; entityIndex++) {
                tempNicknames[entityIndex] = nicknames[entityIndex];
                nicknames[entityIndex] = humanNames[(entityIndex + medianValue) % humanNames.length];
            }
            nicknames[myID] = tempNicknames[myID]
        }
    }
}

function DiplomacyHandler() {
    this.outboundDiplomacies = [];
    this.inboundDiplomacies = [];
    this.init = function() {
        this.outboundDiplomacies = [];
        this.inboundDiplomacies = []
    };
    this.update = function() {
        0 <= this.outboundDiplomacies.length && this.processDiplomacy(this.outboundDiplomacies);
        0 <= this.inboundDiplomacies.length && this.processDiplomacy(this.inboundDiplomacies)
    };
    this.processDiplomacy = function(diplomacies) {
        var diplomacyIndex, shiftDiplomacyIndex = -1;
        for (diplomacyIndex = diplomacies.length - 1; 0 <= diplomacyIndex; diplomacyIndex--) {
            diplomacies[diplomacyIndex].time--;
            if (0 >= diplomacies[diplomacyIndex].time) {
                shiftDiplomacyIndex = diplomacyIndex;
                break
            }
        }
        for (diplomacyIndex = shiftDiplomacyIndex; 0 <= diplomacyIndex; diplomacyIndex--) diplomacies.shift()
    };
    this.addOutboundDiplomacy = function(diplomacyType, targets, addNewEntry) { 
        return this.addDiplomacy(this.outboundDiplomacies, diplomacyType, targets, addNewEntry)
    };
    this.addInboundDiplomacy = function(diplomacyType, targets, addNewEntry) {
        return this.addDiplomacy(this.inboundDiplomacies, diplomacyType, targets, addNewEntry)
    };
    this.addDiplomacy = function(diplomacies, diplomacyType, targets, addNewEntry) {
        var targetIDIndex, existsAlready;
        loop: {
            var diplomacyIndex;
            for (targetIDIndex = targets.length - 1; 0 <= targetIDIndex; targetIDIndex--) {
                for (diplomacyIndex = diplomacies.length - 1; 0 <= diplomacyIndex; diplomacyIndex--) {
                    if (diplomacies[diplomacyIndex].player === targets[targetIDIndex] && diplomacyType === diplomacies[diplomacyIndex].id) {
                        existsAlready = true;
                        break loop
                    }
                }
            }
            existsAlready = false
        }
        if (existsAlready) return false;
        if (addNewEntry) {
            for (var targetIDIndex = targets.length - 1; 0 <= targetIDIndex; targetIDIndex--) {
                diplomacies.push({
                    player: targets[targetIDIndex],
                    id: diplomacyType,
                    time: 384
                });
            }
        }
        return true
    }
}
var nicknames, tempNicknames, isAlive, xMin, yMin, xMax, yMax, land, tempLand, troops, potentialBorderAdvances, landBorderPixels, waterBorderPixels, mountainBorderPixels, playerStatus;

function setupPlayerInfoArrays(param_playerInfo) {
    var idIndex;
    tempNicknames = nicknames = Array(maxEntities);
    isAlive = new Uint8Array(maxEntities);
    xMin = new Uint16Array(maxEntities);
    yMin = new Uint16Array(maxEntities);
    xMax = new Uint16Array(maxEntities);
    yMax = new Uint16Array(maxEntities);
    land = new Uint32Array(maxEntities);
    tempLand = new Uint32Array(maxEntities);
    troops = new Uint32Array(maxEntities);
    potentialBorderAdvances = Array(maxEntities);
    landBorderPixels = Array(maxEntities);
    waterBorderPixels = Array(maxEntities);
    mountainBorderPixels = Array(maxEntities);
    playerStatus = new Uint8Array(maxEntities);
    for (idIndex = param_playerInfo.length - 1; 0 <= idIndex; idIndex--) {
        nicknames[idIndex] = param_playerInfo[idIndex].name;
        playerStatus[idIndex] = param_playerInfo[idIndex].status;
    }
}

function HumanBots() {
    this.botAttackInterval = 0;
    this.players = null;
    this.init = function() {
        this.botAttackInterval = 0;
        this.players = []
    };
    this.turnToBot = function(id) {
        this.players.push(id);
        spectatorCount++;
        playerStatus[id] = 2;
        pixel.shading[id] = (pixel.shading[id] + 2) % 4;
        id === myID && (gameResultBox.show(false, false), gameStatistics.shiftBoxUpAfterDeath());
        infoRenderer.breakNonAggression(id)
    };
    this.onLeave = function(id) {
        if (2 !== playerStatus[id]) {
            for (var hbIndex = this.players.length - 1; 0 <= hbIndex; hbIndex--)
                if (this.players[hbIndex] === id) {
                    this.players.splice(hbIndex, 1);
                    break
                }
        }
    };
    this.update = function() {
        if (!singleplayer) {
            if (30 === this.botAttackInterval) this.humanBotProcessStrategy();
            this.botAttackInterval = (this.botAttackInterval + 1) % 60;
        }
    };
    this.humanBotProcessStrategy = function() {
        for (var hbIndex = this.players.length - 1; 0 <= hbIndex; hbIndex--) {
            var id = this.players[hbIndex];
            if (attacks.isUnderAttackCap(id)) {
                var amount = divideFloor(20 * troops[id], 100);
                if (60 <= amount) {
                    if (0 === landBorderPixels[id].length) {
                        if (!botBoatEngine.update(id, 2) && teamGame) botProcessDonation(id, amount, 0, 0)
                    } else if (teamGame) humanBotProcessTeamStrategy(id, amount)
                    else humanBotProcessOwnStrategy(id, amount)
                }
            }
        }
    }
}

function WsManager() {
    function isCreatedAndConnectingOrOpen(l) {
        return websocketsInfo[l].wsCreated && websockets[l].isConnectingOrOpen()
    }
    this.serverCount = 5;
    this.gameServerCount = this.serverCount - 1;
    this.terriWsCount = this.serverCount + this.gameServerCount;
    var websockets;
    this.originURLs = null;
    var websocketsInfo;
    this.lobby = this.remote = 0;
    this.init = function() {
        var serverIndex;
        this.originURLs = Array(this.serverCount);
        this.originURLs[0] = "territorial.io";
        var x = fakeRandom.getMedian(0);
        fakeRandom.changeRandomNumber(0);
        for (serverIndex = 1; serverIndex < this.serverCount; serverIndex++) this.originURLs[serverIndex] = strings.generateOriginURLs() + ".territorial.io";
        fakeRandom.changeRandomNumber(x);
        websockets = Array(this.terriWsCount);
        websocketsInfo = Array(this.terriWsCount);
        for (serverIndex = this.terriWsCount - 1; 0 <= serverIndex; serverIndex--) websocketsInfo[serverIndex] = {
            wsCreated: false,
            time: 0,
            humanLastAction: false
        }
    };
    this.getConnectedLobby = function() {
        return this.lobby < this.serverCount ? this.lobby : this.lobby - this.gameServerCount
    };
    this.update = function() {
        for (var remoteIndex = this.terriWsCount - 1; 0 <= remoteIndex; remoteIndex--) {
            if (this.isOpen(remoteIndex) && mainHandler.time > websocketsInfo[remoteIndex].time + 15E3) {
                dataEncoder.antiDisconnect(remoteIndex, websocketsInfo[remoteIndex].humanLastAction);
            }
        }
    };
    this.sendWhenWSOpen = function(remote, firstAction) {
        if (!websocketsInfo[remote].wsCreated) return this.createNewTerriWS(remote, firstAction), false;
        if (websockets[remote].isConnectingOrOpen()) return websockets[remote].setFirstAction(firstAction), websockets[remote].isOpen();
        websockets[remote].end();
        this.createNewTerriWS(remote, firstAction);
        return false
    };
    this.createNewTerriWS = function(remote, firstAction) {
        websocketsInfo[remote].wsCreated = true;
        websocketsInfo[remote].time = mainHandler.time;
        websocketsInfo[remote].humanLastAction = false;
        websockets[remote] = new TerriWS;
        websockets[remote].init(remote, firstAction)
    };
    this.setFirstAction = function(remote, firstAction) {
        isCreatedAndConnectingOrOpen(remote) && websockets[remote].setFirstAction(firstAction)
    };
    this.doFirstAction = function(remote, firstAction) {
        if (0 === firstAction) playtime.completeFirstAction()
        else if (3 > firstAction) dataEncoder.loadLeaderboard(remote, firstAction - 1)
        else if (3 === firstAction) dataEncoder.singlePlayed(remote)
        else if (4 === firstAction) preLobby.completeFirstAction(remote)
        else if (5 === firstAction) {
            if (remote === this.remote) dataEncoder.authenticateGameConnection()
        }
        else if (6 === firstAction) dataEncoder.uploadError(remote)
        else if (7 === firstAction) dataEncoder.discordVote(remote)
        else if (8 === firstAction) extendedActions.confirmClient()
    };
    this.isOpen = function(l) {
        return websocketsInfo[l].wsCreated && websockets[l].isOpen()
    };
    this.send = function(remote, message) {
        websocketsInfo[remote].time = mainHandler.time;
        websocketsInfo[remote].humanLastAction = false;
        websockets[remote].send(message)
    };
    this.setHumanLastAction = function(remote) {
        websocketsInfo[remote].humanLastAction = true
    };
    this.close = function(remote, reason) {
        isCreatedAndConnectingOrOpen(remote) && websockets[remote].close(reason)
    };
    this.closeByError = function(remote, reason) {
        showError.displayError(reason);
        isCreatedAndConnectingOrOpen(remote) && websockets[remote].close(reason)
    };
    this.closeAll = function(reason) {
        for (var remoteIndex = this.terriWsCount - 1; 0 <= remoteIndex; remoteIndex--) this.close(remoteIndex, reason)
    };
    this.closeAllOther = function(remote, reason) {
        for (var remoteIndex = this.terriWsCount - 1; 0 <= remoteIndex; remoteIndex--) remoteIndex !== remote && this.close(remoteIndex, reason)
    };
    this.unexpectedClose = function(remote, reason) {
        websockets[remote].end();
        showError.init(remote, reason.code)
    }
}
var aliveEntities, aliveCount;

function updateAliveInfo() {
    var idIndex;
    aliveCount = 0;
    for (idIndex = maxEntities - 1; 0 <= idIndex; idIndex--) 0 !== isAlive[idIndex] && aliveCount++;
    aliveEntities = new Uint16Array(aliveCount);
    var aliveIndex = 0;
    for (idIndex = 0; idIndex < maxEntities; idIndex++) 0 !== isAlive[idIndex] && (aliveEntities[aliveIndex++] = idIndex)
}

function checkPrematureDeath() {
    managePrematureDeath();
    findShiftAliveEntitiesIndex()
}

function findShiftAliveEntitiesIndex() {
    for (var aliveIndex = aliveCount - 1; 0 <= aliveIndex; aliveIndex--) {
        if (0 === isAlive[aliveEntities[aliveIndex]]) shiftAliveEntities(aliveIndex)
    }
}

function shiftAliveEntities(shiftIndex) {
    for (aliveCount--; shiftIndex < aliveCount; shiftIndex++) aliveEntities[shiftIndex] = aliveEntities[shiftIndex + 1]
}

function managePrematureDeath() {
    for (var landDifferenceRatio, aliveIndex = aliveCount - 1; 0 <= aliveIndex; aliveIndex--) {
        if (land[aliveEntities[aliveIndex]] <= divideFloor(tempLand[aliveEntities[aliveIndex]], 4)) {
            if (1E3 >= land[aliveEntities[aliveIndex]] && (2 !== isAlive[aliveEntities[aliveIndex]] || 0 === land[aliveEntities[aliveIndex]])) managePlayerDeath(aliveEntities[aliveIndex])
        } else if (land[aliveEntities[aliveIndex]] >= tempLand[aliveEntities[aliveIndex]]) tempLand[aliveEntities[aliveIndex]] = land[aliveEntities[aliveIndex]]
        else {
            landDifferenceRatio = divideFloor(tempLand[aliveEntities[aliveIndex]] - land[aliveEntities[aliveIndex]], 1E3);
            tempLand[aliveEntities[aliveIndex]] -= 1 > landDifferenceRatio ? 1 : landDifferenceRatio;
        }
    }
}

function getTroopHash() {
    var aliveIndex, troopHash = 0;
    for (aliveIndex = aliveCount - 1; 0 <= aliveIndex; aliveIndex--) troopHash += troops[aliveEntities[aliveIndex]];
    return troopHash % 4096
}
var mainCanvas, mainCanvasCtx, versionLabel, versionHash, mainCanvasWidth, mainCanvasHeight, minDim, averageDim, prevClientWidth, prevClientHeight, pixelRatio, hostname, isIOS, iosObject, androidObject, androidVersion, isZoom, hasHadError = false,
    isNotTopWindow, isNotClient, clientID, viewport, frameRate, mapUpdate, emojis, statisticNumbers, statistics, cookiesPrompt, mainHandler, teamColors, teams, mainLeaderboard, endGame, linkButtons, openLinkBox, mainLeaderboardIcon, timeHash, socketIndex, errorLineNo = 0,
    errorMessage = "",
    isMainCalled = false;

function main() {
    socketIndex = 2;
    versionHash = 4014;
    versionLabel = "1.83.5   10 Apr 2023";
    construct();
    botBorderingStuffInit();
    isMainCalled = true;
    androidVersion = (androidObject = "undefined" !== typeof Android ? Android : null) ? androidObject.getVersion() : 0;
    12 <= androidVersion && androidObject.prepareAd("6685097465");
    isIOS = false;
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA) {
        isIOS = true;
        window.webkit.messageHandlers.iosCommandA.postMessage("prepare ad 5907904081");
        iosObject = "undefined" !== typeof mwIOSdataX ? mwIOSdataX : {
            username: "iOS User " + Math.floor(1E3 * Math.random()),
            id: Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)),
            zoom: true,
            sound: true,
            emojis: "0",
            colors: "0",
            password: "0",
            freeSpawn: false,
            unlimitedTime: false,
            alliances: false
        };
    }
    timeHash = (new Date).getTime() % 1024;
    isNotTopWindow = checkNotTopWindow();
    canvasManager.init();
    userSettings.init();
    setClientID();
    setZoom();
    setAndroidHTMLHeader();
    document.addEventListener ? document.addEventListener("contextmenu", function(g) {
        g.preventDefault()
    }, false) : document.attachEvent("oncontextmenu", function() {
        window.event.returnValue = false
    });
    setIsNotClientFlag();
    document.addEventListener("keyup", onKeyup);
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("visibilitychange", onVisibilitychange);
    window.addEventListener("error", onError, true);
    frameRate = 10;
    mapShading = new MapShading;
    viewport = new Viewport;
    mapUpdate = new MapUpdate;
    emojis = new Emojis;
    statisticNumbers = new StatisticNumbers;
    statistics = new Statistics;
    cookiesPrompt = new CookiesPrompt;
    mainHandler = new MainHandler;
    mainHandler.setupMainUpdateHandler();
    mainHandler.init();
    teamColors = new TeamColors;
    teams = new Teams;
    mainLeaderboardIcon = new MainLeaderboardIcon;
    mainLeaderboardIcon.init();
    mainLeaderboard = new MainLeaderboard;
    mainLeaderboard.init();
    endGame = new EndGame;
    linkButtons = new LinkButtons;
    openLinkBox = new OpenLinkBox;
    setupMainCanvas();
    fakeRandom.init();
    interest.generateDiscreteInterestArray();
    mapInfo.init();
    configFakeMap.init();
    gameStateManager.init();
    loadCustomMap.init();
    moreSettings.init();
    wsManager.init();
    playtime.init();
    nickNames.init();
    addMainCanvasEventListeners();
    sprites.init();
    sounds.init();
    mainHandler.canvasDirty = true;
    setTimeout(function() {
        loadMap(1, 14071)
    }, 0)

    if (typeof(modHandler) == "object") modHandler.main()
}

function init() {
    isMainCalled || main()
}

function checkNotTopWindow() {
    try {
        return window.self !== window.top
    } catch (e) {
        return true
    }
}

function onError(error) {
    if (!hasHadError) {
        hasHadError = true;
        if (error.message) {
            errorLineNo = error.lineno;
            errorMessage = error.message;
            wsManager.sendWhenWSOpen(0, 6) && dataEncoder.uploadError(0);
            error = "[A_ERROR " + errorLineNo + "][" + errorMessage + "]";
            showErrorWarning(error);
        } else {
            error = "[B_ERROR " + error.type + "][" + (error.srcElement || error.target) + "]";
            console.log(error);
        }
    }
}

function showErrorWarning(error) {
    if (androidObject) androidObject.showToast(error)
    else alert(error)
}

function onKeydown(e) {
    if ("ArrowLeft" === e.key) {
        keyboardCamera.checkAndMoveCamera(3);
    } else if ("ArrowUp" === e.key) {
        keyboardCamera.checkAndMoveCamera(0);
    } else if ("ArrowRight" === e.key) {
        keyboardCamera.checkAndMoveCamera(1);
    } else if ("ArrowDown" === e.key) {
        keyboardCamera.checkAndMoveCamera(2);
    } else if ("a" === e.key) {
        if (typeof(modHandler) == "object" && modHandler.lateral) attackRatioBar.checkAndAddRatio(-.008);
        else attackRatioBar.checkAndMultiplyRatio(31/32);
    } else if ("d" === e.key) {
        if (typeof(modHandler) == "object" && modHandler.lateral) attackRatioBar.checkAndAddRatio(.008);
        else attackRatioBar.checkAndMultiplyRatio(32/31);
    } else if ("s" === e.key) {
        if (typeof(modHandler) == "object" && modHandler.lateral) attackRatioBar.checkAndAddRatio(-.03);
        else attackRatioBar.checkAndMultiplyRatio(7/8);
    } else if ("w" === e.key) {
        if (typeof(modHandler) == "object" && modHandler.lateral) attackRatioBar.checkAndAddRatio(.03);
        else attackRatioBar.checkAndMultiplyRatio(8/7);
    } else if ("1" === e.key) {
        if (typeof(modHandler) == "object" && modHandler.lateral) attackRatioBar.checkAndAddRatio(-.1);
        else attackRatioBar.checkAndMultiplyRatio(5/6);
    } else if ("2" === e.key) {
        if (typeof(modHandler) == "object" && modHandler.lateral) attackRatioBar.checkAndAddRatio(.1);
        else attackRatioBar.checkAndMultiplyRatio(6/5);
    } else if (' ' === e.key) {
        if (1 === clientStatus && typeof(modHandler) == "object" && modHandler.intelli) intelliAttack.checkIntelli();
    } else if ("c" === e.key && 0 !== clientStatus) {
        statistics.printCoords();
    }
}


function onVisibilitychange() {
    if ("hidden" === document.visibilityState) mainHandler.onVisibilityHidden()
    else mainHandler.onVisibilityVisible()
}

function onKeyup(e) {
    if (400 <= mainHandler.time) {
        if (8 !== gameStateManager.getState() && gameStateManager.hideIfNotHidden(e)) mainHandler.canvasDirty = true 
        else if ("Escape" === e.key) gameStateManager.aK()
        else if ("ArrowLeft" === e.key) keyboardCamera.checkCameraStop(3)
        else if ("ArrowUp" === e.key) keyboardCamera.checkCameraStop(0)
        else if ("ArrowRight" === e.key) keyboardCamera.checkCameraStop(1)
        else if ("ArrowDown" === e.key) keyboardCamera.checkCameraStop(2)
        else if ("h" === e.key && 1 <= clientStatus) {
            isCanvasHidden = !isCanvasHidden;
            mainHandler.canvasDirty = true;
        }
    }
}

function setIsNotClientFlag() {
    hostname = window.location.hostname;
    isNotClient = 0 <= hostname.toLowerCase().indexOf("territorial.io")
    isNotClient = true;
}

function ZombieSettings() {
    var playerInfoArray;
    this.init = function() {
        playerInfoArray = [];
        9 === gamemode && this.calculateDifficultyLevels()
    };
    this.calculateDifficultyLevels = function() {
        var difficulty = [8, 51, 68, 88, 138, 178, 313];
        var helperBotCount = [35, 330];
        this.helperBotCount = 0;
        this.difficultyArray = [0, 0, 0, 0, 0, 0];
        if (playerCount <= difficulty[0]) {
            this.helperBotCount = helperBotCount[0] - playerCount;
            this.difficultyArray[1] = helperBotCount[1] - divideFloor(helperBotCount[1] * playerCount, difficulty[0]);
            this.difficultyArray[0] = 512 - this.difficultyArray[1] - helperBotCount[0];
        } else if (playerCount <= difficulty[1]) {
            this.helperBotCount = helperBotCount[0] - difficulty[0] - divideFloor((helperBotCount[0] - difficulty[0]) * (playerCount - difficulty[0]), difficulty[1] - difficulty[0]);
            this.difficultyArray[0] = 512 - this.helperBotCount - playerCount;
        } else if (playerCount <= difficulty[2]) {
            this.difficultyArray[0] = 512 - difficulty[1] - divideFloor((512 - difficulty[1]) * (playerCount - difficulty[1]), difficulty[2] - difficulty[1]);
            this.difficultyArray[1] = 512 - playerCount - this.difficultyArray[0];
        } else if (playerCount <= difficulty[3]) {
            this.difficultyArray[1] = 512 - difficulty[2] - divideFloor((512 - difficulty[2]) * (playerCount - difficulty[2]), difficulty[3] - difficulty[2]);
            this.difficultyArray[2] = 512 - playerCount - this.difficultyArray[1];
        } else if (playerCount <= difficulty[4]) {
            this.difficultyArray[2] = 512 - difficulty[3] - divideFloor((512 - difficulty[3]) * (playerCount - difficulty[3]), difficulty[4] - difficulty[3]);
            this.difficultyArray[3] = 512 - playerCount - this.difficultyArray[2];
        } else if (playerCount <= difficulty[5]) {
            this.difficultyArray[3] = 512 - difficulty[4] - divideFloor((512 - difficulty[4]) * (playerCount - difficulty[4]), difficulty[5] - difficulty[4]);
            this.difficultyArray[4] = 512 - playerCount - this.difficultyArray[3];
        } else if (playerCount <= difficulty[6]) {
            this.difficultyArray[4] = 512 - difficulty[5] - divideFloor((512 - difficulty[5]) * (playerCount - difficulty[5]), difficulty[6] - difficulty[5]);
            this.difficultyArray[5] = 512 - playerCount - this.difficultyArray[4];
        } else {
            this.difficultyArray[5] = 512 - playerCount;
        }
        helperBotCount = this.helperBotCount;
        for (var difficultyIndex = 0; 6 > difficultyIndex; difficultyIndex++) helperBotCount += this.difficultyArray[difficultyIndex];
        if (helperBotCount > botCount) {
            for (difficultyIndex = this.helperBotCount = 0; 5 > difficultyIndex; difficultyIndex++) this.difficultyArray[difficultyIndex] = 0;
            this.difficultyArray[5] = botCount
        }
    };
    this.storeLargestAttacker = function(largestAttacker) {
        playerInfoArray.push({
            player: largestAttacker,
            group: 14 + fakeRandom.calcFractionalValue(20)
        })
    };
    this.update = function() {
        if (gamemode === 9) {
            var playerInfoArrayIndex = playerInfoArray.length - 1;
            while (playerInfoArrayIndex >= 0) {
                if (playerInfoArray[playerInfoArrayIndex].group <= 0) {
                    infoRenderer.showIcon(playerInfoArray[playerInfoArrayIndex].player, 0, 46);
                    playerInfoArray.splice(playerInfoArrayIndex, 1);
                } else playerInfoArray[playerInfoArrayIndex].group--;
                playerInfoArrayIndex--;
            }
        }
    }
}
var currentMapWidth, currentMapHeight, mapBaseCanvas, mapBaseCanvasCtx, realMapBaseCanvasCtxImageData, mapBaseCanvasImageDataArray, currentMapID, currentMapSeed, mapLoaded, customMapID = 15, mapShading;

function loadMap(mapID, newMapSeed) {
    if (mapID > customMapID) mapID %= customMapID;
    if (mapID !== currentMapID || isnotBAnorRealMap(currentMapID) && newMapSeed !== currentMapSeed) {
        var delta1 = performance.now();
        mapLoaded = false;
        mapShading.resetShading();
        fakeRandom.changeRandomNumber(mapID);
        currentMapID = mapID;
        currentMapSeed = newMapSeed;
        isnotBAnorRealMap(mapID) && (mapInfo.getValueByID(mapID).mapStyleSeed = newMapSeed);
        if (isRealMap(currentMapID)) configRealMap(delta1);
        else {
            var mapInfoObj = mapInfo.getValueByID(currentMapID);
            currentMapWidth = mapInfoObj.width;
            currentMapHeight = mapInfoObj.height;
            fakeRandom.changeRandomNumber(mapInfoObj.mapStyleSeed);
            generateHeightmap.generate([currentMapWidth, currentMapHeight, mapInfoObj.maxDelta, mapInfoObj.deltaChange]);
            a2c();
            configFakeMap.renderBaseMap();
            generateHeightmap.resetGridValues();
            calculateFrameRate(delta1)
        }
    }
}

function calculateFrameRate(delta1) {
    var delta2 = performance.now();
    frameRate = Math.floor(29 - (delta2 - delta1) / (33 * mapInfo.getValueByID(currentMapID).per));
    frameRate = 0 > frameRate ? 0 : 20 < frameRate ? 20 : frameRate
}

function getRealMapStartingIndex() {
    return 10
}

function isRealMap(mapID) {
    return mapID >= getRealMapStartingIndex()
}

function isnotBAnorRealMap(mapID) {
    return !(1 === mapID || mapID >= getRealMapStartingIndex())
}

function mapHasMountains(mapID) {
    return 3 === mapID || 7 === mapID || 9 === mapID || mapID === customMapID
}

function mapIsSurroundedByWater(mapID) {
    return 2 === mapID || 7 === mapID || 9 === mapID
}

function MapShading() {
    function g() {
        mapShading.update()
    }

    function k(l, x) {
        0 < x && (mapBaseCanvasImageDataArray[l] += x, mapBaseCanvasImageDataArray[l + 1] += x, mapBaseCanvasImageDataArray[l + 2] += x)
    }

    function n(l) {
        return mapBaseCanvasImageDataArray[l + 2] > mapBaseCanvasImageDataArray[l] && mapBaseCanvasImageDataArray[l + 2] > mapBaseCanvasImageDataArray[l + 1]
    }
    this.updateTimeout = -1;
    this.shadingStartIndex = this.heightMapGenerationCount = 0;
    this.neutralShadingIntensity = 8;
    this.waterShadingIntensity = 32;
    this.neutralShadingOffset = 8;
    this.waterShadingOffset = 32;
    this.shadingColors = [0, 0];
    this.shading = [0, 0, 0, 0];
    this.heightMap = null;
    this.useTimeoutForUpdate = true;
    this.a2s = false; //only used once and is never changed
    this.resetShading = function() {
        -1 !== this.updateTimeout && clearTimeout(this.updateTimeout);
        this.updateTimeout = -1;
        this.heightMap = null;
        generateHeightmap.resetGridValues()
    };
    this.init = function() {
        if (7 !== gameStateManager.getState() || !this.a2s) {
            this.useTimeoutForUpdate = true;
            this.heightMapGenerationCount = 0;
            this.shadingStartIndex = 1;
            this.shadingColors = [mapInfo.getValueByID(currentMapID).neutralColor[0], mapInfo.getValueByID(currentMapID).waterColor[0]];
            this.shading = [mapInfo.getValueByID(currentMapID).shadingValues[3], mapInfo.getValueByID(currentMapID).shadingValues[4], mapInfo.getValueByID(currentMapID).shadingValues[5], mapInfo.getValueByID(currentMapID).shadingValues[6]];
            this.neutralShadingIntensity = mapInfo.getValueByID(currentMapID).shadingValues[7];
            this.waterShadingIntensity = mapInfo.getValueByID(currentMapID).shadingValues[8];
            this.neutralShadingOffset = mapInfo.getValueByID(currentMapID).shadingValues[9];
            this.waterShadingOffset = mapInfo.getValueByID(currentMapID).shadingValues[10];
            this.useTimeoutForUpdate ? this.updateTimeout = setTimeout(g, 16) : this.update()
        }
    };
    this.update = function() {
        if (8 === gameStateManager.getState() && autoCamera.getIsCameraActive()) this.updateTimeout = setTimeout(g, 16);
        else {
            if (0 === this.heightMapGenerationCount) {
                var l = fakeRandom.getMedian();
                fakeRandom.changeRandomNumber(mapInfo.getValueByID(currentMapID).shadingValues[2]);
                generateHeightmap.generate([currentMapWidth, currentMapHeight, mapInfo.getValueByID(currentMapID).shadingValues[0], mapInfo.getValueByID(currentMapID).shadingValues[1]]);
                fakeRandom.changeRandomNumber(l);
                this.heightMap = generateHeightmap.getGridValues();
                this.heightMapGenerationCount++;
                if (this.useTimeoutForUpdate) {
                    this.updateTimeout = setTimeout(g, 16);
                    return
                }
            }
            l = this.useTimeoutForUpdate ? 10 : 1E6;
            l = currentMapHeight - this.shadingStartIndex - 1 < l ? currentMapHeight - this.shadingStartIndex - 1 : l;
            l = this.shadingStartIndex + l;
            for (var x, t, z = this.shadingStartIndex; z < l; z++) {
                for (var y = 1; y < currentMapWidth - 1; y++) {
                    if (t = y + z * currentMapWidth, x = 4 * t, n(x)) this.updatePixelShading(x, t, 1);
                    else {
                        this.updatePixelShading(x, t, 0);
                        t = y;
                        var A = z;
                        if (1 < t && n(x - 4) || t < currentMapWidth - 2 && n(x + 4) || 1 < A && n(x - 4 * currentMapWidth) || A < currentMapHeight - 2 && n(x + 4 * currentMapWidth)) this.updateNeighbourShading(y, z)
                    }
                }
            }
            this.shadingStartIndex = l;
            if (this.shadingStartIndex >= currentMapHeight - 1) {
                mapBaseCanvasCtx.putImageData(realMapBaseCanvasCtxImageData, 0, 0, 1, 1, currentMapWidth - 2, currentMapHeight - 2);
                mainHandler.canvasDirty = true;
                this.resetShading();
            } else if (this.useTimeoutForUpdate) this.updateTimeout = setTimeout(g, 16);
        }
    };
    this.updatePixelShading = function(l, x, t) {
        k(l, Math.floor(this.shadingColors[t] + this.shading[t] * this.heightMap[x] / 1E4) - mapBaseCanvasImageDataArray[l])
    };
    this.updateLineShading = function(l, x, t, z, y) {
        k(l, Math.floor(this.shadingColors[z] + (1 - x / t) * y) - mapBaseCanvasImageDataArray[l])
    };
    this.updateNeighbourShading = function(l, x) {
        var t = l - this.waterShadingIntensity;
        var z = x - this.waterShadingIntensity;
        var y = l + this.waterShadingIntensity,
            A = x + this.waterShadingIntensity;
        t = 1 > t ? 1 : t;
        y = y > currentMapWidth - 2 ? currentMapWidth - 2 : y;
        A = A > currentMapHeight - 2 ? currentMapHeight - 2 : A;
        for (var B = 1 > z ? 1 : z; B <= A; B++) {
            for (var C = t; C <= y; C++) {
                if (z = 4 * (C + B * currentMapWidth), n(z)) {
                    var E = this.neutralShadingIntensity + (this.waterShadingIntensity - this.neutralShadingIntensity) * this.heightMap[C + currentMapWidth * B] / 1E4;
                    if (!(Math.abs(l - C) > E || Math.abs(x - B) > E)) {
                        var F = Math.sqrt((l - C) * (l - C) + (x - B) * (x - B));
                        F >= E || this.updateLineShading(z, F, E, 1, this.shading[3])
                    }
                } else E = this.neutralShadingOffset + (this.waterShadingOffset - this.neutralShadingOffset) * this.heightMap[C + currentMapWidth * B] / 1E4, Math.abs(l - C) > E || Math.abs(x - B) > E || (F = Math.sqrt((l - C) * (l - C) + (x - B) * (x - B)), F >= E || this.updateLineShading(z, F, E, 0, this.shading[2]))
            }
        }
    }
}

function a2c() {
    if (2 === currentMapID) a36([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0])
    else if (7 === currentMapID) a36([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
    else if (8 === currentMapID) a36([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0])
    else if (9 === currentMapID) a36([512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function a36(g, k, n, l, x) {
    var t, z, y, A = g.length - 1,
        B = currentMapWidth + currentMapHeight;
    B *= B;
    var C = n.length;
    for (t = C - 1; 0 <= t; t--) n[t] *= n[t];
    var E = Array(C),
        F = Array(C),
        G = Array(C),
        N = generateHeightmap.getGridValues();
    if (void 0 === x)
        for (x = Array(C), t = C - 1; 0 <= t; t--) x[t] = 0;
    for (t = 1; t < C; t++) E[t] = n[t] - n[t - 1], F[t] = l[t] - l[t - 1], G[t] = x[t] - x[t - 1];
    for (z = currentMapWidth - 1; 0 <= z; z--)
        for (y = currentMapHeight - 1; 0 <= y; y--) {
            var I = B;
            for (t = A; 0 <= t; t--) {
                var D = (z - g[t]) * (z - g[t]) + (y - k[t]) * (y - k[t]);
                I = D < I ? D : I
            }
            D = l[C - 1];
            var K = x[C - 1];
            for (t = 1; t < C; t++) {
                if (I < n[t]) {
                    D = l[t - 1] + allDivideFloor((I - n[t - 1]) * F[t], E[t]);
                    K = x[t - 1] + allDivideFloor((I - n[t - 1]) * G[t],
                        E[t]);
                    break
                }
            }
            a3K(currentMapWidth * y + z, D, K, N)
    }
}

function a3K(g, k, n, l) {
    500 > k ? l[g] = divideFloor(l[g] * k * 2, 1E3) : 500 < k && (l[g] += divideFloor(2 * (1E4 - l[g]) * (k - 500), 1E3));
    l[g] += divideFloor(n * (10 * k - l[g]), 1E3)
}

function ConfigFakeMap() {
    var mapValues;
    this.mountainPixelsCount = this.waterPixelsCount = this.landPixelsCount = this.totalNonBorderPixelsCount = 0;
    this.init = function() {
        mapValues = Array(getRealMapStartingIndex());
        mapValues[0] = {
            width: [0, 5E3, 8E3, 1E4],
            red: [220, 250, 255, 220],
            green: [190, 220, 0, 0],
            blue: [170, 200, 0, 0]
        };
        mapValues[1] = {
            width: [0, 4E3, 5E3, 6E3, 1E4],
            red: [25, 0, 100, 0, 25],
            green: [25, 0, 0, 0, 25],
            blue: [25, 0, 0, 0, 25]
        };
        mapValues[2] = {
            width: [0, 500, 2500, 2999, 3E3, 3200, 4200, 5200, 5700, 8800, 1E4],
            red: [15, 15, 70, 40, 40, 40, 252, 40, 40, 20, 30],
            green: [80, 80, 190, 90, 40, 40, 248, 180, 180, 90, 140],
            blue: [120, 120, 220, 110, 40, 40, 217, 10, 10, 10, 10]
        };
        mapValues[3] = {
            width: [0, 400, 1800, 2E3, 3200, 4500, 6E3, 7700, 8500, 9500, 1E4],
            red: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
            green: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
            blue: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
        };
        mapValues[4] = {
            width: [0, 300, 1400, 1700, 3E3, 4E3, 1E4],
            red: [10, 10, 20, 10, 10, 170, 212],
            green: [20, 20, 60, 100, 100, 110, 170],
            blue: [70, 70, 160, 30, 30, 60, 120]
        };
        mapValues[5] = {
            width: [0, 1E3, 3E3, 3500, 4E3, 4500, 7E3, 7500, 8E3, 1E4],
            red: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
            green: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
            blue: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
        };
        mapValues[6] = {
            width: [0, 700, 2650, 3200, 5E3, 8E3, 1E4],
            red: [10, 10, 60, 255, 255, 200, 200],
            green: [10, 10, 60, 255, 255, 200, 200],
            blue: [80, 80, 255, 255, 255, 200, 200]
        };
        mapValues[7] = {
            width: [0, 400, 1999, 2E3, 3200, 4E3, 4700, 5500, 6500, 9500, 1E4],
            red: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
            green: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
            blue: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
        };
        mapValues[8] = {
            width: [0, 700, 1300, 1900, 1901, 2500, 3400, 6E3, 1E4],
            red: [25, 30, 30, 30, 255, 255, 30, 40, 20],
            green: [25, 30, 150, 150, 245, 245, 80, 150, 70],
            blue: [60, 170, 170, 170, 235, 235, 30, 40, 40]
        };
        mapValues[9] = {
            width: [0, 400, 2009, 2010, 3300, 4E3, 5200, 6500, 8E3, 9500, 1E4],
            red: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
            green: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
            blue: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
        }
    };
    this.renderBaseMap = function() {
        mapBaseCanvas = document.createElement("canvas");
        mapBaseCanvas.width = currentMapWidth;
        mapBaseCanvas.height = currentMapHeight;
        mapBaseCanvasCtx = mapBaseCanvas.getContext("2d", {
            alpha: false
        });
        var fakeMapBaseCanvasImageData = mapBaseCanvasCtx.getImageData(0, 0, currentMapWidth, currentMapHeight);
        mapBaseCanvasImageDataArray = fakeMapBaseCanvasImageData.data;
        var widthValues = mapValues[currentMapID].width,
            redValues = mapValues[currentMapID].red,
            greenValues = mapValues[currentMapID].green,
            blueValues = mapValues[currentMapID].blue,
            pixelIndex, widthIndex, gridValues = generateHeightmap.getGridValues(),
            compositeWidthValues = Array(widthValues.length - 1),
            compositeRedValues = Array(widthValues.length - 1),
            compositeGreenValues = Array(widthValues.length - 1),
            compositeBlueValues = Array(widthValues.length - 1);
        for (widthIndex = widthValues.length - 2; 0 <= widthIndex; widthIndex--) {
            compositeWidthValues[widthIndex] = widthValues[widthIndex + 1] - widthValues[widthIndex];
            compositeRedValues[widthIndex] = redValues[widthIndex + 1] - redValues[widthIndex];
            compositeGreenValues[widthIndex] = greenValues[widthIndex + 1] - greenValues[widthIndex];
            compositeBlueValues[widthIndex] = blueValues[widthIndex + 1] - blueValues[widthIndex];
        }
        for (pixelIndex = currentMapWidth * currentMapHeight - 1; 0 <= pixelIndex; pixelIndex--) {
            for (widthIndex = widthValues.length - 2; 0 <= widthIndex; widthIndex--) {
                if (gridValues[pixelIndex] >= widthValues[widthIndex]) {
                    var valueDifference = gridValues[pixelIndex] - widthValues[widthIndex];
                    mapBaseCanvasImageDataArray[4 * pixelIndex] = redValues[widthIndex] + allDivideFloor(compositeRedValues[widthIndex] * valueDifference, compositeWidthValues[widthIndex]);
                    mapBaseCanvasImageDataArray[4 * pixelIndex + 1] = greenValues[widthIndex] + allDivideFloor(compositeGreenValues[widthIndex] * valueDifference, compositeWidthValues[widthIndex]);
                    mapBaseCanvasImageDataArray[4 * pixelIndex + 2] = blueValues[widthIndex] + allDivideFloor(compositeBlueValues[widthIndex] * valueDifference, compositeWidthValues[widthIndex]);
                    mapBaseCanvasImageDataArray[4 * pixelIndex + 3] = 255;
                    break
                }
            }
        }
        mapBaseCanvasCtx.putImageData(fakeMapBaseCanvasImageData, 0, 0);
        if (mapInfo.isBA() && sprites.areAllSpritesLoaded() && mapInfo.isBA()) {
            widthValues = sprites.getValueByName("arena");
            mapBaseCanvasCtx.save();
            mapBaseCanvasCtx.globalAlpha = 1 === currentMapID ? .1 : 1;
            mapBaseCanvasCtx.imageSmoothingEnabled = true;
            fakeMapBaseCanvasImageData = 2.8;
            mapBaseCanvasCtx.scale(fakeMapBaseCanvasImageData, fakeMapBaseCanvasImageData);
            mapBaseCanvasCtx.drawImage(widthValues, Math.floor((currentMapWidth / fakeMapBaseCanvasImageData - widthValues.width) / 2), Math.floor(.5 * currentMapHeight / fakeMapBaseCanvasImageData - widthValues.height / 2));
            mapBaseCanvasCtx.restore();
            widthValues = sprites.getValueByName("territorial.io");
            mapBaseCanvasCtx.save();
            mapBaseCanvasCtx.globalAlpha = 1 === currentMapID ? .1 : 1;
            mapBaseCanvasCtx.imageSmoothingEnabled = true;
            fakeMapBaseCanvasImageData = .87;
            mapBaseCanvasCtx.scale(fakeMapBaseCanvasImageData, fakeMapBaseCanvasImageData);
            mapBaseCanvasCtx.drawImage(widthValues, Math.floor(.745 * (currentMapWidth / fakeMapBaseCanvasImageData - widthValues.width)), Math.floor(.422 * currentMapHeight / fakeMapBaseCanvasImageData - widthValues.height / 2));
            mapBaseCanvasCtx.restore();
        }             
        mapLoaded = true;
        mainHandler.canvasDirty = true
    };
    this.setAndCountMapPixels = function() {
        var xyIndex, totalLandMountainPixels = 0;
        for (xyIndex = currentMapWidth - 1; 0 <= xyIndex; xyIndex--) {
            pixelRGBA[4 * xyIndex + 2] = 3;
            pixelRGBA[currentMapHeight * currentMapWidth * 4 - 4 * xyIndex - 2] = 3;
        }
        for (xyIndex = currentMapHeight - 1; 0 <= xyIndex; xyIndex--) {
            pixelRGBA[xyIndex * 4 * currentMapWidth + 2] = 3;
            pixelRGBA[xyIndex * 4 * currentMapWidth + 4 * currentMapWidth - 2] = 3;
        }
        for (var coordIndex = currentMapWidth * currentMapHeight - 1; 0 <= coordIndex; coordIndex--) {
            var pIndex = 4 * coordIndex;
            if (3 !== pixelRGBA[pIndex + 2]) {
                if (mapBaseCanvasImageDataArray[pIndex + 2] > mapBaseCanvasImageDataArray[pIndex + 1] && mapBaseCanvasImageDataArray[pIndex + 2] > mapBaseCanvasImageDataArray[pIndex]) pixelRGBA[pIndex + 2] = 2
                else {
                    pixelRGBA[pIndex + 2] = 1;
                    totalLandMountainPixels++;
                }
            }
        }
        this.totalNonBorderPixelsCount = (currentMapWidth - 2) * (currentMapHeight - 2);
        this.mountainPixelsCount = 0;
        if (mapHasMountains(currentMapID)) {
            configFakeMap.mountainPixelsCount = 0;
            for (coordIndex = currentMapWidth * currentMapHeight - 1; 0 <= coordIndex; coordIndex--) {
                pIndex = 4 * coordIndex;
                if (mapBaseCanvasImageDataArray[pIndex] === mapBaseCanvasImageDataArray[pIndex + 1] && mapBaseCanvasImageDataArray[pIndex] === mapBaseCanvasImageDataArray[pIndex + 2] && 3 !== pIndex[pIndex + 2]) {
                    configFakeMap.mountainPixelsCount++;
                    pixelRGBA[pIndex + 2] = 3;
                }
            }
        }
        this.landPixelsCount = currentLandPixelsCount = totalLandMountainPixels - this.mountainPixelsCount;
        this.waterPixelsCount = this.totalNonBorderPixelsCount - this.landPixelsCount - this.mountainPixelsCount
    }
}

function configRealMap(delta1) {
    var mapData;
    if (currentMapID === getRealMapStartingIndex()) mapData = "AJfAJ5976oBB6PH6eDBpz76eEBV5bcAUgAyMPbaA8C8A6BL5baBKYAKBAyLPbZBoVAUCA6A9PbZBoVAUDA6A8PbZBeWBUIPRZBeVBUGAKCPRZBeVAKCA9Az555zAUMAUBAV56BUUAKEA7A6P55xAoLA8PoMCABAoGAV6FwA6A8BB5oMB9AoCA6AV6FyAUNA7AUEO9BKRA6AV685nAKDAoCAUGAUGA6AeFO8BAQAKBR65sAoBAoDAeFAyEA9AKDOUIB6AUBR65sA9AeDAyGAoMOUHB7AKBR75qBADAoEA6AKBAeMOyDB9R85hAeIA7AoEAoIAURQL8FhAUDAUFA6AoEAeJAUTP9SB59Ah66AKBAoEAUCA8AoFAeIAeUP8SB59Ar6eBAKFAyMAoGAefP6SL6KEkUGAUCAUBAKIAoGAefP7SL5eCA7AX6eCAyDAUKAoGAUdQB8LyA6AUDAKCk9AoBBKDD7QB8VyAyDA6k8B8AKmQB8VvA9AeFk8AoBBeBD7QL8VtAKCA9AUGj8AKFAeCByDCyEA6QV8VoAUDAKCBABA6j8AoDAUEBUECyZAVsSfoAUBAKBAKCBABA6j7BADBeDDeSApqSfpA6AUJAKGjyNAUNAUiB7AKBA8J7A9DB8ppAyBB8ieCAoCAoMAozAUBBKLJeNC8SzpCrjAKIAUDAUGBUCFUBA9AeKIyEAURC6S6OUYhoCBUBBAJAUyAeKAKLIyZCf87O6AKCAKBB5h6A6BeBAe8A9oYCL87PKOh6A8BKCAe8e9eYB9S7PKNh7A8AeBA7AeCJKFAU8KVCB86PULBACg7A7AUCAUBALAAoCA7Ao7KWB7S7PeIBKEgyCA7AeBKeBCK67CUOS9PUIBUDgoEAUIALcGoWBV9L5oGBKEAyBAKEfKFAUEAKEALeGUWBV9L5yGA9AyEA7fKEAUFALmGASBp9VgAeOBKKAyDA8fAFALwF7B7B6TLgAoMBUCAoDA6AUJAUCe6AyBPK5yPB8TBgA9AKCAeMAUOAUJAUDBoEcKFAUBAKDAL5U5eNCB9BhBUDBKBByBBABAoNA5cAHAe78AK78FeLCL9BmA9AeBAKiAKFAoCA6A5cKIAK77Ae78FULCL9BnA9AonAoDAyHb7BUBH6AU8KzBKVS9N9BACEKCAyCA9b6I8Ao8exBAWS9OK67bKBA7I6Ao88EyJCp88OK68a8AeHIyFJArA9Cz87OU67AeBaeEA7A7AK76A6JUpA9Cz87OU7W6KEA8AeDH7A7JoEAKjA8Cz87OK7W6UDA9AUBAKBH9ApDDeJCp87OK7C6ABAeBBy8UBK6DKKCf87OA7M6ABAeCAoCA8TACAKbByQS9OA7M59AeCAeEAKFAKCTyZB6Bp9BqHC56AyCAeKAUCTyYB7BV9LoHg5oGAUDAUDAeDAf9yZB7A8TpoHg5eHAKEAKEAeCAV98CyRAp97N9HW5yMAKEAeBAV99C9VpqG8Z6AKDAeBA9AWFC9VVoG9aKBAgQC9VVdAUIHW57AKEV7DCLM9AeEH6aCSDCLM8I5Z8B9AWBC8VBbI6ZeMAKCA6AUDUUbVBeIg5UHAKDA6AoBU7C8U9NU8WsBAMVycU8No8MqBAOVocU8Ny8CqAoCAKRVocU8N7H8X8AKDAeRAKDVoLAUPU8N9H5X9AeBAKOA7AWOC8U8OA7gnAoQA7AWOC8U8OA7gnAUTAKBAoCVocU8OA7gmAUXAeBVodU8OK7MmAURWyMAeFAUHU8OK7C58WoMAyBA8AqIOK7C57WyMByEU7OK7M57AeBWAMB8AWGOK69Z9AUBWKMB9AMGOU66aABAWWBWaOe6q65WKLW7Oo6M66O9AK7KMW7Oy55a7AeCO9AK7AMW7O6Fq67PyCG7BgbO6FW68P6Ae6yNW8O7D9AKLa7P8Ae6eNW9O7DyHAq7B6AFGAMXLxB6AKCAKBAKIBKCbKEAf5oHAKCFeMXVzBAKA6dpuAeGBABAeEAKoBghPeBAKDez5UFA9BKCAylBqhuABAL56AUBAKJB7DyPXi59QKCBASAKCA9AoPB6Xs59PABB9EKHCCit7PKCCe6qitz5eFCK6Wjt6PeCCo6Mjt7R9F9X6tz8y5qltV66AKXFMmtf6ABAoECUxX8tV6KBAoDCowX8tV59AUhE7X8tf58AehE6X8tV58AoiE6X7tB6KDD6E6X5tB6AFDyvXsxQUFDUyXiyQeDDeyXYyRAECy5Wes9RAFC6FWdseBAp7AGC6FgcseBAV7eICU5qcs7RoGCU55W7sp8ADCKXAegW5seEAL76AySCoHC8W5seBAL8oCB8CUJCUBAqYsqFBKBBAKCKBAqYspGAe98A9AUKBoPAyCWisJeCA7A9J6BABA9ByCA6A6XOlAKEJUHAUMJ7A9AKHB6AKLAUUAWKsK9oXJyPFKDU9sK9oaJURFKCU8se9eaJUQaOnAeBJebJUQaEoAeBI9DA9USZ8sA9UfJeSZ7r9JefJeTZ6r8JUhJUVA7AMvr8AKCI8Do9oVAoFYsoI9Do9efYsmAUBI8Do9eeY5r6AoBI8Dy9odYsjJojJydYiiJodAoEJ7AKECMrq6AeEJydAeDKyVYYZAyBJ6D7KyUYYcJ9DfMB7YYdJ7DVPB5YidAKDJUgL7BgsrK9ehMUBAUEY5rA9yglsaAKCJ6DX7sYKUeCoDi8qpCDAZAhvqfEC9CoEi7qVGC7CyFi6qBICycA7G7AUBAM7YTLAYC9Ao58AUKAg7YSLKXDKDF9AeJAq7ERLKYDUBGKDA9Ag7EQLKYJ6AKLAq68p6LKXLADa8pzKCzKA8agmAV7pKC6K9AeCAW65X7Ap7fKCeBAN8WiAKCAz7LLCfCAM8MiA7RBNCfBA6b7XyBAKCAKBP7AoILeYKUFb7X8AL59AeJBoDJ6CVEA7b5pABAKLAo9yTAUBKyJbh99AeJBACJ9B9K8A6b6n7A6AyDAKIAK99CK6yBgqlAL59A6AUGAKGAe98CU66AhVX7AL5eDAeBAKBAyKA7J6Ce66ArUnUCAyEAUHBA96CU68A5f8neBAoGAUHAKFAK9oYHKFf7n7B6AK99Cy7KGE9AW65nzRCy76AewA5aX9VRAKCCy78AKxA6aD89AKELycM9A8BoCYN86AKCAKELeUAKKM9BALAWpmUFAeDALNB9AeJNeHBKCYD8KGAe6oBFKUAeGOADBKCYD8ALAKCAU58AyvCADAUrALAAoKAWomAOAe58AytCUCAKsAVAAW5h8AMAK6oEEAdEyCJ9Ag5X8BTDUtALAAW5X8pPDAwAK9ABA8AW5X7eDA9LefE8AU88AeGAg5X7eJAVPDBmAeFAq5X7VbC9OAEAUFZX7BdC8N7AUDAoCA5ZN7LbC9N7AeCAyCA5ZD66AUDMyeOAIAUFZD6pfDLpA8AKGY9j8AUDNUfOePY7j8N7DBrA7AKIY7j8N7DLrB6DABV5j9NygOeRC8AWPj8NyiOUSC7AgOj6NemOeSC6AgOjzhD9OoSC6AWOjzhEBsB8YN5zhEBwB5YD5zhELxBgojziEB5UKYD5ziEBBAUyBCnjzhELBAeyA9X9jzhELBAoCAKvA8X9j7NKpKKIE6A7YD57NAqKKKEyFYM88AK6piEesAK5oMEeFDUDU7jfiEerAU5eGAKIEKFDUDU7j6NKsEUCFUQEKFDeCU7cKBAUCG6NytEKCFKREUCD6AWGcADAKCG6NytEKCFKUH8AMGb9AeBAU66N6EyqAKaAKZCK76AMGcACG8N8EopAUaAKYC5cC8KCHLgAKBEooAeaAeBAKSC9b8cADG9NewEACC6A7Byeb8b8Ay68NovEKCC7A8Bydb7b8Ay66N6E7EKDC8AoSC9b6b7Ay68NyuEeCFKdb5b8Ao69NouEeCFUdFUFV7b9AU68AUBNeuEoCFUcFKGV7b9AK69AeCNKuEyBFobE9A8V6b9AK69AoBNKuKAbFAIV5b9AK69N6E6KKaFKBAUDV6jBjE6KKabhzNouKUWb6jVhE6KUXb5jACAVfE6KUXG7AMHi9G6AK69EpFCU67AWGi8G7AU68EpGCU6yDU6i8G6AemAUcEo8KBC6CA66AWGi8G6AenAyYEo8KBC7B9brwG7AenAeaEo78AoaBeBA5bryG6AKpAKbEy7yFC7BKDAg76jLjEo6oDAoKC8A8cr5oFALaEo6eTC8A6c5ZADKKEALeEA6eXCyGc5ZADKKEAVdEA6AbCyFc5Y9Ao99AUBAUCNykFygA6AyNA5c5Y9Ay96AoEN6D7FesBoEc5VeBD6A6JeEAfnAeBD7E6E7BeFcqJAziAoDOADAKmAUBD9FNBU7A7BoDL6AoDOyOAeVAUBD6F5eCDBKOAfQAoDO6BUGCUiE6AyGeCDBAOA6L6AKFO6BAHCeCAKaFA99AWKUUKByHAUCLUCAptBAHB8AoCAKBCyyKAEU8UUIByQAeBKoFALvA9AySAKBAeDAKBCozKUCU8UKJByXKB5oJA6B7AKJCotAKDK6AWGUKJBebJ7P6BUECoFAKNFBMAgEUKIBebJ8P6BeDAKDCAEAUMFLOAWDUAHBocJ7P7ByBAKDCKCAeJFKBAVPAWCUAFBycJ8P7E7AUBAe5VSA5UCAAeRC7J9F8AK99KzHAKJA6T9ToBCyZKKHAUyAK99KpHAUIA8AeBTf9oDCeXKeDA7E9ALAKfHAeHBV9f9yCCAYKoCA9FABDoBGo79AKWK9AeDAUCBV9V9yCB7AKBCfQFKBDoBGo7eCAUJB7LACAKQTgGAKHCfRFUCDeBGe7oRA9LyCAKPTgGAUGCVSFeBDeBGA7fvB6Tf9eBA8A6A6CBTFeCDUCEoBBo69PoNTp9UCA7A6A7B9L9FoCDUCEoBAeBBA6z59BV9p9UCA8AyGCLOAeBFoDDUBDoHAeCAUBBA6f6oBAUGTp9KCA9AyECpNF8AegAKlA6AKCAUBA9Gp68Az9p9KCBAEAoXLo58AegAemA8BA6p68AV97TKCBAEAoVL6F7AocAKCAooAoLGL7UBT8UeEAyTL6F7A6C7A9D9AUNF9RoBT7UoDAeUAyBAKEKy56BKYBASAoPAeNF7lqFD8KoxAoCBKYA9B9A6C6GAsA5g5U6EBBE8B7CyJCACC9GAsA6gqLD9J7E8B7CACAeIFe59EoGgqLEe9euB9B8AoDBACAKwE9AKJEoHggJE7JKtCASAyCBABAUuFADA8EoIgWHE9JepCeRB6AUCEo5UFA6EoIgWFFK9onCoQB7AUBEozA8AysA8EKBcCFFK9omCyQB6EoCAUzA8A6EoHEAEb8U6FA9ykC6B6B6EoCAU5eFA8EeHEAGb6UyyJ7DoaB7BysF8AeLEeHD8A8b5UU5U99DUbB7ByrF9AULEyHD6A9b5UUzKecC8B7BKPAKeHUvAylA6AUBbz99AUCE9KyaC9B7AoCAeQAUaHUCAUwAelAKCAq78T8AeCE8K6CyeB6AoEAUPAeZGyLAUwAUrAM78UAzK6CegByECKECe66BAGE6AXWUAyK7CUhByBAKBCKGCe6eNAyuANXT9A7AKrK7CKiD9AyYGUPAr7B97A7AopLAPD9D8AeaGUNA6A9AN6B9yIAopLoJEekAeaGUMA9A7AX6B98AUBAUDEVUAKtD6AeaC9AKgBULAeFD6A5f8UyqQ7DyDC8GAMB9D8A5f7UoqQ8DoEC8GALCAnA5f6UopQ9DoEC7GUJCKoA5f5UonRKiAecGoCC6EKEf5UenRegAocGoCC6kB98Ep7eBAKeAobGyBC7kB97Ef77DADC8GoCC6kL96AeCD6AKBR7DADC9GeDC6kL9KHAekR9DADC9JX6L9AHAelSAdAUeC9AU6N6L9AEA6AeBDf79DABDUWAyBAK6X6L89AyGAeBAeCC8P9A6Bo6eUA7G5kB9UBA7AeCAUCC9P6A7B6GKUA7G6kB99AeEAKCCV6UIB7GAUA6EeDCN6B76AKVAoGCL6eJB7GAUA6EKFCN6B6yBAKCAKCAeDCACAUBAyUQoJB7GATA7D9A7CN6B6yNB9AeBAeECKDAf5yLB7GASA8D7A9CN6B6eQB7AoCAUDDB5eLB7GARA8DyNCD6B6KTB6AeCAeFC9PKMB8F8B7A9DyOB9kB6ASB7AeDAUGDBxBUGAKNF7B8A8DoQB8kB6AQAeBByCAyCAygOUQA7AUNFyTA8DoSB7j9P8DUFAKMDfiCoWFoUA7DoVB5j9P6DoSDpgCyWFoUA6DyVB5j9PyiB7D6NUNAoICU5eHAKNA7DeWBr6B57DUQD7NKGAKJAKICe5eGAUNA6DoXBN6V59DKOD8NAFA7BeYFeGAUNA6DoXBD6foAKSDAOD9NAGA6BeYFeFAUOAokCeKkflA6B6DAOEBdA7AyMC6FUFAUOAelCoIkplA9BeeBepM9A9AUNC6FUEAeNAolC6A5kzkBKIDyLEVdCoaFUEAUPAeln6N6BACAeCA9AUaBAsNeUC6FKDAeQAUkn7NeBAUbAUQAeHA8EzgCKbFADAKRAUln7NodAUPAoHA8EzZAyCCKcE9AeBB7AUkn8NouAeHA8E6MyGAKUDAvAeCFiANysAoHA8E6MycC9E7AUDFiAN7EeCA7A9AeBEVYC9C9E7AUDFiAN6F6BKpMoiCytAUDFsANy57BKEAUjMojCysAKEFsANe59BUDAeJAKYMojCyrAUEFsANU6ANAKNCzYDyZEUCAo55oBdGUbC6MojCorAUEF5oBdGUaC7MekCKtAeEF5oBcGUbC7MohCosAeEF5oBcGUaC8MogC6EeDAe56oBdF9C7C9MobC8AKCEeDAe55oLeA7AUtDAeMyZC9EyEAe55oLeA9AKqCACA9DVYCyeEoEAU56oLgE6CUEA9DVXC6DAsAoCF6oLhCKBCeVAyJDVWC7CeGAKrAyBF7oLiCABCUWAyJDVVC7CUIAKbBAFG5oBlEAUA6BKgMAYB9AUBBKCC6IEAN9D8CAFBUgMAYB9BoCCo8YAOAkD9DLUCoTBoDCU8iANyDAKmD9DLTCoTBoDCA86n9NorEAfL8CeNAeDBoFB7I8n9NerEAhL8CUNCAFB7I8n9NUsD9DzTCANCAGB6I8n9NKtEofL9B7ByUA7By88n9M9E8EegL9ByFAeJCAFB6I9n8M7E9EogL9BoDA6AUCAyRAKCAoRI9n8M6FArDfTBoBA8AKEAoQAeBAoSI8n8M6E8EejL9BoBBeDB7A7CA87n8M9EyrDzTBoBBeDB7A8B8I9n7NKsEKkL9BoBBeEByJB7JD97MoGAUqEUlL8BUEBUEB7A8A8AKHJD97MoyEUmL7BKGBAGB6A9AyHAU9N97LyBAKCAe5UpD9L6BKIA9A6B6Lr97Lo6KUAUSD9L6BKJA8A8BVQn7Lo6AUAoRD9L6BKBAeHA6BAJDeBIh97LeCAK58CAEB6EBQB7A6AyMA6DeDIh96L9FyUAoQD9L7B7A7AeOAyhAy8N96MA5eUA6AUBBUnL7B6A9AKCAKNAohAy8D97L6F7CKLAUCAooL7BeOAUOA6DAGH9n7Le58CeQAeoL7BeNAUDAoFAUEAeeA6H9n7Le57CyQAKqL6B6BABAoFAoDAUCD6AK8D97LU57Co6LRB6A9AKEAyCA7L9n7LU57Ce6VRB6A9AKEBfUn7Le56CK6LUB7BoMKoIA7n8L6FUWGLUB6B6BLDppOFoXAeCF6L9B6B7A9H8AyVppNFedF8L9BoXAe7oLCEOLezDU58L8BoYAK7KQB9ppUC9AKDAKJDe58LeUEUCFARCENMAbBAHDU58LeWAKCA8AKcA6EyTB9pfRDAMAyfF9L6CebAKHA6EyUCYKL7B9AoEB8AKgF9L6CoZAeGA6EUYB9pVTBy6K6BPC6AKDB8A9AKGD8C8B8pfVAKDA7GU6LPDKQBACAylDAQpp9o6BQDKPB9D6DKOpz9o6BQDAPB8D7DUNp6TU6VPDAPB8D7DeMp7TU6LSC7BUUD6EyCp8TA6VUCoKCyfu9S6AKBGfQAeCCoJDAXvf8e68A6AVHDoEDeSv6R9HeEAo87AUEAoID6AUjBi8B78HyBA9IeMA6HUDAKKwL76JA79BoFHUDAUIwV7y9U69AKGB6Ao78As86Ro9o6ANAUQAU8ABw9Ro9o56B7AURAK76A6w8Ry9o5oSAKSAK77A6w7R7JU5UVAe9eIwz77AeBAUCIyzCUDJ7AY86Sy8yy6LSy8oz6LS6Iez6LS6IepAUCAKF6LS9IApAyF6LTK77EUFA56LTK77EKHAuLTU76EKIA56JTe7oqA8A56JTo7UqA8A66JTyDA7GKqAyI6KUy6KpA6A86KSoCBy6oqA6AuOSUHBU6eqA8AaPR8AUCBAHGer6aR8B7Ae6es6aR7IUt6bR7IKt6cR6H8AKBE66dRo79E86eRe79E86fRU8Av6gRK76AeCE66hQ9IAw6iQ7IUu6kQ6IUu6lQy87EQmQofAK6Ak6nQUdA7F9D56nQAKAUQAKBA9F8D56nP9A9BKIBe57DaqQAGBeIBoSAKBAKjDGsQAFB6AySA7BUiDQrSKFCKCA6AyEDUcAKD6rV6AyFAoBCUc6yV6AyOB6C865WkBAEAKZ655X7Aod66M6a69Z967W5967W5967W5967W5867g5867g5867g5767q56675Z6675Z5676Z5676Z5676Z5676Zu77U6AKu678UyFEk78UyID9679UyID768L9yBA8A8DABAu8qEA8C769WEA8Cu95UoICG99T7AKGA9B9699UoKB77AUoLB56dAe69UyMBucAe69QUCBUCC7B6BGbAe7B58BABAeEAyYCAI6ZAe7B57B6AeHCUXAabAe7L57B7AKJCQ5UEHB57C7CQ5UEHB56C8CQ5eDHB57AUBCoV65eEG9QAZB965oEG9QAZB965yDG9QKZAUBAKCBa5yDG9QKZAKGAKEA665yDG9QUmAk5yDHB56AUED8AkxAUEAe7B565oAeCALyA7HV575oA8AyBOKGHf585qA8AKEN9Ay7p585sBVmAy7p595sBVkAo76P95uBLjAo76P9AKCAUB5rA8N6AK78Q55sA6V6Q65tAKQAMCQ756AGT8RF58AKBAz96RP6AFTz7P6oBTz7b59Rl58Rv57R675z7975V7975V7875f8HzSlwSbxSbxSbxSbxSlwSvvS56ZApRSuYA6L7S66WA6L7S656yBFeJL7S656yBFeIL8S656yDE8A9MB8556yEEoNMB8t6yFEAPMV8t6KJD7B8MV8t56BokB6Mz8t5UQD7B6M6S65yAyIAUlB7M6S65yAyuB7M7S75xAovB7M7S65yAeuCLZS75xAUuB6AoBM6S75xAKvB6NL87596BzhS759oPNz8959UPNz89589B8Nz9FsAKrB9Np9PqAUpCLiTV6oClyCD9C9M8Tf6oCloCD8DVaTz6UCloCDomMp9p6oCleBDUqMf9p6yClUBDUrMV9p67AN97AKFEABAfWTj66AKFD8M8TACAZ6yDAUnM8TACAZ66ELeT556ypNB9j67ELeTZ67EVeTP6ytNB9F67EffTF66EpfTZMAyDAUpEzfTZHByoE6NL9jDBKFAUpEfhTjCA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6Ao8i58m7Ae8Y59m7AK8O6O67us67us65u6ui68r6AKau8q6AyEAUau9qUUCE69p9B8AeFB7u8qASAyEB6u6qUSA7AUQu6qyPC5u6qyQC5u5q8BoZuscByZuifBAcA8A5s9rKHDKIA5s8r6AUmAUCtO78ti78AeCs9v7AUDs9wiwwsvwiwwsuw6s5w5s6wsuw6s5w7AyBr8xslx5r5x9rY99rZCq8ysay6q6y6qtJqPMBeGoFgP6BWe5lPKQW65pO7B8W55rOoXV95zN7C7V655VbEMK55pZEWI557MKtU8557MKuUj66LowP6AeFA7DF69LKyPySCZ8VDFL5oWB858pBFVyC8B5588J7FpqAeEC9Bt89Jy68M6EAJ59e9o7BYEUD598Je7pU6sJU76AoOKQsJU96J96sJU96J66vJU96JkyJK97Ja5U89J9B6AK7k5o88J9BKHAeFA9AK5k5y88KAKC6AeDEu58I7KKBEAs658I6OeGAoh659Iz5yf66K86PeFA7B666y8z68Bk6y8z7KH668Iz7eF669IwwI58vIwyISzIS6K7S66G587U59X9AQhF8X8AeqAZ9U5qlAopAj9e5gkAypAj96E9X7A6EAD6BEgmA7D9AkBEWoA6D8AuED8YKHD7AkID5YKHD7AkJDqrA6D6AkKDWsA6D6AkLDCtA7DyD6MC8Y8A6DoD6OC5ZAHDUE6NCqzA8DAE6QCM5eJC8AkTB8ZoKC7AkUB6ZyKC6AuYA9Z8BAZA56ZA7Z9BAaA589KJC6A589UIC6Aw9eJCoE6bAM67A8CoE6bAW67A7CoE6bAg66A9CUF897A8CKE899A9B9AeDAUGAS9AJB7A9AKH889A9B6B8888BKOCI87BKOCI88BKMCI89BKKCS9KLA7Cc9ULA6Cw9Un89Uo89Kq889Em88E5887E688yu886E5887E6887Ew87E5887E5887Ew88E5886E6886E788ov88ow88ov88yv88ow88ew88ey88K5m8Az88Az88AzH"
    else if (currentMapID === getRealMapStartingIndex() + 1) mapData = "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Fs69FKxJ6556KX78Fs7AxFATAK75558KX78Fi7KuFeSAU7t59KN8AzvKuFyQAU7t6BBmAxvetF7BoDHj6U99mUvvetF8BeEHZ6e98metvUvF9BUEHZ6e98monv7E7GKJAy7Z6o7UBC5mocAKGAUCv7C7IKHA6Hj6o7UCCr86B8BUCwKZIoGA6HZ66HUDCX88B6x7Ce8yFA6AeBG8567HUHB8nAHy6CA8yFA7AUCG8L6AOyHeIB5nUEy9B6I8AeJAUCG7L7AOyHyJBJIBe9ADA8AUDG6L8AOyH79aBK9UCA7AUEGzTAYxH99eAVBAyDG6L9AsvIJ99AAhAKHGpUA5s7IJ99AAoGpVA6sy8T99AAmAoCF9MUGsy8T99AAfAoJF8MeGsy8T99AAdA8A7F7MoFs6Id99AAcAyKF7MyEs6Id99AArF6M6AsuIx99AApFzdAYuI6999AAnFzcAYvI6999AAnFpcAeDAOrI6999AAmFpdAUEAOrI6999AAmFpdAoBAYrI6999AAlFpeAoBAYpI8999AAlFpeA6sU87999AAmFfeA7sU86999AAoFBgA7BACrK85999AAoE9NUJA7AsgIx99AAoEBpBKDA5re8x99AAqCACBpqB9ro8n99AAtB7AeMOeTr6IT99AAuAKDBKDAUBA9OoTr7H9999AA5yGA8A8OoUr8H5999AA59AoKAzuB7sU69999AA78AVwB7se58999AA9ABOyUso57999AChB8s9F8999ACgB6tK58999ACgB6tK59999ACgBs5U59999AA7eCP8Bi5U58999AA7eCB9AVnBO5U59999AA9oCN9BE5e59999AA9oBOAIt6F9999AA9eBOAHt7F9999AChA6t9GJ99AA7eBOUCBeGuAuAeK999AA7eFBKDMoEBAHuKuA6A6999AA7oGAyIMeFAUCAKBAeGuot999AA8yTMeKAeHuyu999AA8oSMeKAoFu8AoBEJ99AA8oSMULA6AO7KDAen999AA8eRMAOv8AKEEJ99AA8eRL8B5v8AeFD8999AA8eQL8Bs8AEAymAyB999AA76BpTBs8KEAeqAeC999AA7oOL9Bs8UDAyqAKE999AA7UOL9Bi8yCAypAeD999AA7UOL8BY87AeEEKDAn99AA7UNL7Bi88AeFET99AA77A9AUBL6Bs89AoEEd99AA76A9AUBLoNxeDAeq999AA77A6L8BtAET99AA79AzQB5yUo999AA8KBL6B6yon999AB9yUyen999AB9USy7ET99AB89B7zKo999AB87B7zon999AB8yRzyo999AB8oRzKCAKBAKn999AB8eSz8D9999AB8ATzyCAUk999AB8KUz6AUCDx99AB8KU5XDd99AB8UT5WDn99AB8KU5UAKCAKBDT99AB8AU5WAKDDT99AB78CFWAoCDT99AB78B85YAoDDJ99AB77B85ZAyCDJ99AB8KM5ZA8AKf999AB8UI5bAKCD8999AB8eD5eAKDD9999AB7yC5tD6999AB7eC5vEJ99AB67AjuEn99AHOEn99AHQET99AHQET99AHUD7999AHRAKDD6999AHLAeDD9999AHMAyCD7999AHNAyBD7999AHSAKCD5999AHTAUBD567UB999AAuD767UC999AAsAKBAyBDQ7UDAUD999AAoAyBDQ7UI999AAoAoDDQ7AF999AAtAKBAUBDa7ABAoC999AArAKCAKCDT99AHXAKDDJ99AHVAUDC8999AHZAKDC8999AHfC5999AHaAKDAKBC5999ABvAP8KCAoW999ABuAP8UDAKY999AHiCx99AHeAKECeyAT99AG76AKHCUsAoBA5999AG8KWEeEAUG999AG8eBAUSEUDAKG999AG76AKGAKEB8EADAUE999AG89CKlAUEAn99AG8oBAUU999AHmB9999AHkAKDBoDAd99AHmBUFA5999AHjBUDA9999AHkA9AeJ999AHhAKCA9AeJ999AHkBAIA6999AHgBKHA7999AHhAyCAoBAKCBT99AHfAUBAUHAUBBn99AHgAKCAUBAKDAKDBVoAn99AF96AKHBVpAn99AF9yBAeROAE999AF9KYOAD999AF9oZN6Ad99AF98CT99AHgAUCBn99AHtBn99AHuAKCAn99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AGIAd99AJ99AJ99AJ99AJ99ACdAd99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AH7oE999AH5eB999AJ99AJ99AFGAKBAT99AJ99AJ99AJ99AJ99AC9KB999AH5UBAoF999AHtAyCAd99AHtAyCAd99AHvAx99AHxA7AUC999AHlAUFA9AUF668Ad99AA6ABAeCAyJAeE668Ax99AA57AeCAKEA7AeBA7AQ67Ax99AA56AyFA6999AHrAKBAKDA7999AHwA88mAdFBHDAVgAxFA97FALfA5898AKHA969KEOAF899AKGA98kAxGBE89A8YeII7AnGBoCAs76B7TUOC8Bo8yF9EA9AKDAeCAKBvyUN6AUyCUVB6G7CxDA9AeCv7C7NUDE8DABAULB7AeED9AyNDw9yJAyCvydNADA7BoDAoEAyBAyDD7A8C7CKFAeEAeHBKr88ACA6BE8KbNAwAKoAKhB7CyKFABAc7UDAUCAKIAUBveCAycM6M9AKoA7F6AKE86yEAKLvoHAUhKoIAguAKE858AeCBO6yDA7Ee9yEAM6m58AoDA9u6AoGFo8g6686UCAoCAUGueGAU7o65bS69A6t7KoubyDAm6UGtVJD9c786yHszND7c886yHA6AOkL6DrABKC8sA7AoCoKFC6L9DhCBKD8cAUNB5n8A6CfUD5eAFAKGAcbA7BUPn7A7CBWDrP8aA9BUOAyCm8BUQMUggABAKCAwRBAFAUCB8AeCm6ByEAUIMUch58MAUCBADCyBAN8eSAUDA8MAZAKBiIMAKDBADCr8UbAKCAVWCXv799AoMBADCr7V58AKDB7jl99AyMBADC5c7AUOAUKAeEA6D7QUTj68RBKDCg8KDAeEBeKAKTCf69CD6ABAcIByDCWaAKLAKYAUOBoIEAHR8AUCBr6wAAeGByDCqjAecC6A5W6AKDBX76AKB78eIBUKAeZWAEA9AoUa7BD85777A8BeMAeaUeDBAFDC69BD8779UTAeZUeGA6AyOAKMbAMm9787AKCCKDCp96AUEA7AyHAKPAKDAq7AOnKDAR78AUBCyDCz9oDAUJA5d9Br9568yCA6AK8yLAUQAoXT7foNn667yIAeDAUBAKEIyGBALAySUXMBX9u79Cy96BeGCp95fUIn669oNG8AoTB6A8Cf9rQAN9969UCAKCByCBeCHAOA9Cf9bR68oDA7A6DACA6Ao8UbSvT68ABAyEBeEC6AUDA6FKGCUiR87S68oBA6CAeA7AUCA6AKUAeQA6AUBB6D7R87P6CA7GAFCU68B9A7AUCA8A6AKBA8D9R77W6DA9BABE6A8De5yRA9AoEA7AUEE9RbL6UA9AoKEAJB9A8Ae6yIB7Ao58RHI6cA8AoPA8AUHAUPBKSQB7KGAk9ulAeGBUJAUHAyRA7CL56R869QRAeLAoRAyZAyHA6A7AUXPp5yDB969aHAeZAKhCKGA6D7O8P6AUR69kEBAFAoKGUEAymOUBAf58AUL6896LKKnOKCAV7Q886FK8AyDBKOA9N8Ru8aMc9RQ8kEd8RQ8aBd8Q9AoD68F97Z6AKrQu9j9KHAM5yHDf587B59eKAM5eJCp6HF6IZeKCB5vJ6OZV777M6AAoMZp7RN577AKEBKQAyFZ6Q57QBKC56yRAeGA9az577VA9BF6KcAq77OvWA9AeDAj6q8AHCVp7Y585cKQA7JeND57YA8AZ6yEC5bzCB9DRa57oHCM5oGB7DeEGeVC97bAUB57UJB6Z9A8BUdA7GeWC87R588BASZ7EeJGoYC77I6AA9Cq5UmA8G7CoeCUF6696MAyiY7AeOB6A7G8CokA8A967a6C58B6Ao7AaE767k7MxFeFDAdE966668MpFyGC8C8F666D68"
    else if (currentMapID === getRealMapStartingIndex() + 2) mapData = "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"
    else if (currentMapID === getRealMapStartingIndex() + 3) mapData = "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C9AKsV957oMAolA6Ce7ABDABEqS57oPAenAKaG8AKfAKtV7568AUDI6GyCDUBE5V7568CAEG8GeBDyBEqQ568CAIG6GKBD6AKrV6568CKLGo59AKlAUqV656yBAKWBonAUVF8AKmAKpV656oCAUWB7DoFCA58AKmAKpV656oaCAgAoVF6AKnAKpV656ebCeeAoVFyBEABECP56KfCodAoSF6AU8MP56AhCocAyQFyEIMP559DoZC8AyPFUGIWO56AhC6C9AyPFAHIWO56AfC9C9A7BeJAUmA6IgO56AfC7DUGAeBA9A9AekBA8CO56AdDAfA6AUCA9A9AyiBA8CN56AeDKeBUHA9AyhBK8CN56AFAKYDKeC7AekBA8MN559AyBCygC9GyMICL56KEAUZDecFyBA9BU8WJ56AFAUUAUDDUdFoFA6BU8qG56KFAUUAUDDUdFUaIgG56KEAUTAoCDedE9C9IMI56KEAUSAyCDecE8DK8MF56oDAeREKbE7De8CF56UFAeSEKbEyhIWF56KHAeREUaEejIWF56KFAyQEUbEUjIgF56AFAyQEeaEeiIqE56KEA6B6EebEKiJB9956KDA7B6EebD9Dy9L9856UDA7B6EebD6D7JUHAf8756eCA8B6EUcDymJeIAV8657USEKdDemJyIAV8t7eTEAJAUSDejJ9A8AL8t7eTEAHAyRDUTL6A8AV8t7eSD9A8A6B6DUPMUGAV8t7eRD9A8A9ByfBpeS557USD7A8BKPDAOM9S657eSD7A7BeODALMyBAz8757eRD8A6ByNC9A7AoBMyBAp8857eRD9AyPBedA7AoBMoDAV8857eSEADB6BonAVXAeBS957eREUBB7BooALWTt7eRGKNEKBLoCAoMAV8F7oRGKMEUBLoDAeGAV8657oSGAMEeBLoKAV8757eTGAMEeBLz9857eTGKKEoBLp9957eTGKKEKFLgA57USGUJD7A9LWC57eRGoGDeOLWC57USGoFDeOLCF57UTGeEDeOK9U657eUGeBDyNK9U757eUGeBDeOK8U957UVGeBDUPK5VZ7UWGUBDAQKgQ57KXGKBDAQKgP57UXGABCKCAySKWR57UZF8AKRC7KKNAWF57KaF8AKRC7KAJAUBAgG57KaF8AKQC7KAJA5U957AbF7AKQC6KAJA6U857UaFyDB6CzAA9A6U957UaFoEByZKKHA7VF7UaFoHBUXKUEBCK57eaFeIBKYKKCBWK57oaFeIBKXKKDBWK576Co5eIA8AKBCVDAUKVZ77Co5eFA9C6KeBBMM578Co5UBBUaL5Vj78CozAKMC6LWR579CeyAKMCzNV7579CoyAKLCzFAKHV8578CyyAKKCfIAKEV958AZFABBAXK8Wt8KZE8AeJCBKWj8oYE7BACCBLWj8eZE7DVLWj8eYE8DLOWF86CUwDLQV7587CUwDBRV6588CKxC9L9V5589B9E9C9MCP59ARFAaMWQ59ARFUXMgQ59AQF6B6M7V659AQGKKM8V659AQGyCNWQ59KPT9V759APT9V759KOT9V859ANUMS59AJUqS59KHU5V8R7AiMA5U5WB7yE6WWB7yE6VWV7eG6UWV7eH6TWV7oG6TWV7yG6SWV7oI6SWL7oJ6QWL76A86QWL76A96PWL76BP96AUNWV78A9598AeLWV8KG599A7A6WV8KG6AA9AgVSUG588AKMA8AWWSUF589AKNA6AqVSUF588AUOA6AWWSeD588AePW9SeC588AoPXH7UEB6W877oDB7W777yBB8W777yBCCa77oCB9W677yBB9W777oBCCa77eCA6AKNW777UDAyCBWb77UFAeBBgc77KJBqb77UGB6W877KDB9W877KEB8W877UDB7W976eBA8AeRXH6UBA8AoPXR6KCA8AoQXR59AUKAoOXb59AeKAoNXb58A6A9A6BCg758AeBAoIA6A9XR6yIAUGA8Xb7UKAeBAgh77UKAKCAWjA6Ab6yLAgjAyG76UJAqkAoC768A7AqlAUC769A7AqmAKC769A7Aqp768A7A5X8AUB768A7A5X8AUB769A6A5X8AUCPAB6QA7AqnAKEO8AaPA8AqnAKEO7AkQA7AgnAUEO7AkRA6AgnAeDO7AaSA6AWoAoDO6AQTA7AMoAoDO6AQTA7AMoAyDOyB6TY877gw76KCAeBA7Y776KKAeGAMo769AoBA6AWn77AKAWo77KIAWo77UDA6YR8Cp78Ms777Y5776Y5777Yv78Yv77Yl78Yl79YR8Co78Mn78ql78qk78eBAMk78Wn78Cp778Yl77A8AMk77oFAUDAgi77KEA6AeDX577ADA8AKEX577KBA9AKFX578ABA5X5786X6785X6785X778Mp78Cp779Yb79Yb79Yl78Yl75Y7765Z7769Zb7C5Z69AL98Zj69AV97Zt69AV95Z5569AV95Z5569AV9yDAgx57ABTKFA5ZF69AV9KDA6Y957KBUCy57ACT8Zj68AV97Zt68AV97Z5567AV95Z7568Af9C6F68Af87aZ69Af87aZ7ACS5at7KCSg6557KCSW6657KBSW6675q6775g6875W6975W697zbHyb57ub87qcvkc57jc77ic77ic87hdHgdHedbddlXcKBB77Uc6AeCAeI7Sc8AUP7Pe77NfHKf57Ef97Cf97BgHCgHAgRAga98gk97g769rc69rc69hd69Xd69Xe69Dg689ha88h5686f9AUP68hHAKf68Dp679ik77iu77iyYAaxi6CoD6wi6CyE6ti8CyE6ri9CyE6ri9CyF6pjAaAupjAaAkohUBB9668heBB9667ju6r5766X5966r57658AKFj8657AeCj9657k5657ku57ku56k6655k765r6765r67CKB6gk7CAD6fk7CAD6fk6CKD6dk9CKC6dlAVAablKVAaaleVAQaloVAQZloVAQXl6CUB6Xl56vluvluvluvlkwluvluul6DUB6Ml7DAF6Jl7DAF6Jl7DAI6Fl8DAI6Fl9C9A96El9C9BAEAZ98l8C8BeCAj97l8C8BeBA6595l8C8CP9r79C7CZ9h79C6Cj9X8KYCt9X8UXC559N8eXCt9N8eXC559D8oXC9586meYC9586mUYC9586mKZDF85mKaC9586mAaC9586mAaC8587mKYC9588mAYC9589mAXC9589mKWC9589mKWC959D8KVC959N8AVC959N8AVC959N8AUDF9N79CKf59N78CKgx6Ae9N78CKgxyCEKBFX77CKgu6AKPAeGA6EAGE9l6CUguyBBoFAKND6A8E8l7CKhuoCBeFAKSC9BUul7CefueDBedCoNE6l6CeguUEA7DyWBovlyYDO6KxB9B6E6l6Coes6A8Ao5ePCUsl6Codsy67BeYEr77CUdse7KJC6Er78CUcsU7UIC8Er78CUasU7eFDerl8CKaqeEBU78AUjEh79CAZqUJA7L7EX8AUC5qBjEX8KTC5p9NyEAUlg9AKzB8C6p8A7ApeD7mKTC5p8A7AoFAVXD8mAUCscA6AVYD8mAUAyCB6rADAfYD9mATAyDB6r6MeomATAoDB6r6MonmAUAeDB6rzaD8mKUAUDB6m6AeuM6D8mKUAeEBr86AosM7D9mAUAoEB6mUGEBeD9mKTAoEB8mAJD6NKnmeRAyDB8mAJD7NAnmoQA6AKTj7AUVBAbAUINAmmoPCeCAN57AoUBKbAeIM8D8myOCAFANfAKWBUQAKDA6C7AoDAeEMymm6BySAyBhACBoZBADAUHC8BKFMKnmyTBoFANcAoNFKZN6EN8oUBeEAXcAeKF6B7AKGN6EN8yUBKFAhbAeJF7BoFAzkEX8oUBKFAraAUJF7BoIAfkEX8yTBoCA6goCA7GAGAKEO9Eh8ySChXAUGGoCAUDPAsmyQBABBrXAUDHKBPKsmyQA6AKSggcEr8yRCrXW8AoBD9kUBCUUCXVXADAKpj9AUVCUVgCfAUDED8KXCNTXUCAoomAXCXRXeCAoomAYCXQX8EX79CoWf6X7Ee5yCgKZChOX8EoeAeDAyNAXVCyYfWmE6C7BKBAULAhVCyZfCmE7C7A8AyBBKDe7AeLCyae8YKtCUCAeFCAEeyIA7Cyae5YogAULCeCAUECKDe6A9A7CobegtDKEBKXA6CUDe7BKGCUceWtDKFBAyAhJBKECedd6ZKdA6BAyAhJBUCCodc7AKHZecA6BAyAXLD7DC8UFAg58C8AyKFACfekDC8AHAM59C9AeLE9ArND6Dg77a7C8AeLFADfojDq77a7EX67Dyjb5a7EX67D7D7bW68ED66D9D6a9AKCa9D9k6EAja6AeCbekk7D9Dq66AoBbokk9D7Dg66cAklAlDW65cAlleiDW6M8yklohDW6M86D6loOAURDM6M88Dr76BUCB8DC6M89Dh77BKDB7DM59dKgl8BADB8DM57defl8A9AeUDM5q96DD79A8AUWDMyd9C9mUBAUDAUXDC5W97C9nAXDMzd8C7nUWDWyd9C5neXDqvd9C6nUXD7YrECKnAXzCelYrFCAnAoLAXkCUDAUhYrGB8D9AyKArlCKCAUiYhGB8EAFA9ArmCKBAeiYXHB7EAGjKYDqqe7B7EAGjUXDqqe9ByoA7jUXDgqfABAKLEAJjKYDWpfoKEAJjeWD9XrOA9EKJj6B9EChfeHEoJj7B9ECgfUFE6A9j8B9ECgfeDE7A9j9B8ECgfeBE9A9kARECgkoHkKRECgkyFAKFj6B8ECflKFj7B7EMek8A9j6B7EMelAIjyRECflKHj6B6D9XX7UGC9AhZBylXr7UGC9ANbBylXrDAK69A5j7BylXr7oEj7B6D5X5loEj6B7DqkloEj6B8Dgkt9AM7oTDWkseCBoEbKUDMlsKDByCbUUDgksACdAUDqjv7A5ZAVD6Xi76A5ZAWD6XY77AWzCemXHdConMUDKsmAM9AYEBUAzD7dCopL8A7KbdCyqMKBKldCyrWvcC6EqX7bC8EqW7bC9EoCAMSxo"
    else if (currentMapID === getRealMapStartingIndex() + 4) mapData = "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okA8BoDWK57x8D8A7FeCC7AoCAKDAUZDeMBAGWK56x8D8A8IeBDogBoIA7WU55x8D8A8L9DAQA6A8We55x7D7BKCAzLC8DCaFi97D8B7LKbDCdD9AUKx7EoPK9CoeXUiA6APFE8B6K6B8DMkC8z7E8B9KoODqoB95WFUPK9AonYoO5XFUQPMyA55aFUPAeEO578K5UWO678A5UWO678A6oJO778A7ADO778CTC6Ab5gSC8AUEAltV8DyE7rV7D7AvqV7D7A67oTUCCemAbrS9AoY78f7UEA9A7C578f7KSC878f7ASDH8V6UFAKTDR8V6UZDR8V6UZDR8V6eYDR8V6eZC978f6eTAeDC978f6eTD578f6UTD678f6eRD778f66AeEA6D878gR78gQ78qQ78qQ78qQ78qR787Vl9CK79MI79qG79qE798UM58APpUC57AjpT8Z7A55pT6Z8A65rTg58A75qTfCAp5UH5pTfDAzyA75qTfDAyMAQ86TLWAQ86TBXAa8z9BXAk8z88MoE68z86MyE686SzZA5686SfaA6688R9M6A869B76M6A769V7pbA669p7fcA569z7VdAvAQ68mQSrP78rP78sP68rP78rP68sP68sPmvPmwPcxPS5yDApm86Vl866Nm68NZ8ABdLc58ABdpZ58ABdzY58ACd9L958ADd8L858UCd8L758eCd9L658eCezK58eDezI58oDeymAe66586AXFDyHAyBAUFFZ86AXIDKKAUKAoCEt88ANNCegEZ89AXNCKhEP9KBfyQD7EJIBonD89KBAqD7B7AS9oIE6DUSAc9yEFAeB9AdyC9B8AnzC6CAD9zBUEA7CeC95eJA6An99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99ACeAT99AT99AT98Ad97Ax96Ax97AT99AABAT99AJ99AJ99AH6AC997Ax9yF99yE996A55lAO57A55lAY56A55lAY56A5bUBaoCt7Aq7UCaUEt7Aq7KDBUBY8A5t6Aq7KKAyFYyEt6Aq7KKAoHYoCt8A5a9BUBA97EAyhAMiClEA6DKCWoBAKf7EA7C9AgYDo5yF6sA6C7AqaDo5eH6qA8C6AqaDy5UH6qA9CyEW6D6FKC6wA8CyEW6D7FAG6sA8CyEWynFAG6rA8CyCW6EKzA56qA7CyDWKv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";
    mapData = strings.convertToMapData(mapData);
    var neutralColor = mapInfo.getValueByID(currentMapID).neutralColor,
        waterColor = mapInfo.getValueByID(currentMapID).waterColor;
    currentMapWidth = 1E3 * mapData[0] + mapData[1];
    currentMapHeight = 1E3 * mapData[2] + mapData[3];
    mapBaseCanvas = document.createElement("canvas");
    mapBaseCanvas.width = currentMapWidth;
    mapBaseCanvas.height = currentMapHeight;
    mapBaseCanvasCtx = mapBaseCanvas.getContext("2d", {
        alpha: false
    });
    realMapBaseCanvasCtxImageData = mapBaseCanvasCtx.getImageData(0, 0, currentMapWidth, currentMapHeight);
    mapBaseCanvasImageDataArray = realMapBaseCanvasCtxImageData.data;
    for (var isWaterSegment = true, pIndex = 0, segmentIndex = 4; segmentIndex < mapData.length; segmentIndex++) {
        if (isWaterSegment) {
            for (; 0 < mapData[segmentIndex]--;) {
                mapBaseCanvasImageDataArray[pIndex] = waterColor[0];
                mapBaseCanvasImageDataArray[pIndex + 1] = waterColor[1];
                mapBaseCanvasImageDataArray[pIndex + 2] = waterColor[2];
                mapBaseCanvasImageDataArray[pIndex + 3] = 255;
                pIndex += 4;
            }
            isWaterSegment = false
        } else {
            for (; 0 < mapData[segmentIndex]--;) {
                mapBaseCanvasImageDataArray[pIndex] = neutralColor[0];
                mapBaseCanvasImageDataArray[pIndex + 1] = neutralColor[1];
                mapBaseCanvasImageDataArray[pIndex + 2] = neutralColor[2];
                mapBaseCanvasImageDataArray[pIndex + 3] = 255;
                pIndex += 4;
            }
            isWaterSegment = true
        }
    }
    mapBaseCanvasCtx.putImageData(realMapBaseCanvasCtxImageData, 0, 0);
    mapLoaded = true;
    calculateFrameRate(delta1);
    mapShading.init();
    mainHandler.canvasDirty = true
}

function MapInfo() {
    var mapInfoArray;
    this.init = function() {
        mapInfoArray = Array(customMapID);
        mapInfoArray[0] = {
            name: "White Arena",
            width: 230,
            height: 230,
            maxDelta: 1E3,
            deltaChange: 2E3,
            mapStyleSeed: 173,
            per: 1
        };
        mapInfoArray[1] = {
            name: "Black Arena",
            width: 800,
            height: 800,
            maxDelta: 100,
            deltaChange: 50,
            mapStyleSeed: 43,
            per: 1
        };
        mapInfoArray[2] = {
            name: "Island",
            width: 512,
            height: 512,
            maxDelta: 128,
            deltaChange: 32,
            mapStyleSeed: 0,
            per: 1.5
        };
        mapInfoArray[3] = {
            name: "Mountains",
            width: 960,
            height: 960,
            maxDelta: 60,
            deltaChange: 8,
            mapStyleSeed: 0,
            per: 1.2
        };
        mapInfoArray[4] = {
            name: "Desert",
            width: 900,
            height: 900,
            maxDelta: 100,
            deltaChange: 5,
            mapStyleSeed: 0,
            per: 1.2
        };
        mapInfoArray[5] = {
            name: "Swamp",
            width: 1E3,
            height: 1E3,
            maxDelta: 100,
            deltaChange: 40,
            mapStyleSeed: 0,
            per: 1.2
        };
        mapInfoArray[6] = {
            name: "Snow",
            width: 1E3,
            height: 1E3,
            maxDelta: 100,
            deltaChange: 20,
            mapStyleSeed: 0,
            per: 1.2
        };
        mapInfoArray[7] = {
            name: "Cliffs",
            width: 1024,
            height: 1024,
            maxDelta: 128,
            deltaChange: 32,
            mapStyleSeed: 0,
            per: 1.5
        };
        mapInfoArray[8] = {
            name: "Pond",
            width: 820,
            height: 820,
            maxDelta: 200,
            deltaChange: 100,
            mapStyleSeed: 0,
            per: 1.2
        };
        mapInfoArray[9] = {
            name: "Halo",
            width: 1024,
            height: 1024,
            maxDelta: 128,
            deltaChange: 32,
            mapStyleSeed: 0,
            per: 1.5
        };
        mapInfoArray[10] = {
            name: "Europe",
            neutralColor: [140, 130, 120],
            waterColor: [12, 12, 76],
            shadingValues: [240, 120, 4672, 30, 26, 30, 90, 8, 32, 3, 9],
            per: 1
        };
        mapInfoArray[11] = {
            name: "World",
            neutralColor: [165, 145, 125],
            waterColor: [15, 15, 69],
            shadingValues: [250, 100, 8, 25, 15, 25, 90, 8, 32, 3, 9],
            per: 1
        };
        mapInfoArray[12] = {
            name: "Caucasia",
            neutralColor: [140, 130, 120],
            waterColor: [20, 20, 84],
            shadingValues: [240, 120, 100, 30, 25, 30, 90, 8, 32, 3, 9],
            per: 1
        };
        mapInfoArray[13] = {
            name: "USA 48",
            neutralColor: [120, 105, 92],
            waterColor: [12, 12, 60],
            shadingValues: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
            per: 1
        };
        mapInfoArray[14] = {
            name: "Middle East",
            neutralColor: [140, 130, 120],
            waterColor: [12, 12, 76],
            shadingValues: [240, 120, 4672, 30, 26, 30, 90, 8, 32, 3, 9],
            per: 1
        }
    };
    this.isBA = function() {
        return 1 === currentMapID
    };
    this.getValueByID = function(mapID) {
        return mapInfoArray[mapID]
    };
    this.getMapName = function() {
        return currentMapID === customMapID ? customJSON.mapName : this.getValueByID(currentMapID).name
    }
}
var mapCanvas, pixelRGBA, mapCanvasCtx, mapCanvasImgData;

function setMapCanvas() {
    void 0 === mapCanvas && (mapCanvas = document.createElement("canvas"));
    mapCanvas.width = currentMapWidth;
    mapCanvas.height = currentMapHeight;
    mapCanvasCtx = mapCanvas.getContext("2d", {
        alpha: true
    });
    mapCanvasImgData = mapCanvasCtx.getImageData(0, 0, currentMapWidth, currentMapHeight);
    pixelRGBA = mapCanvasImgData.data
}

function GenerateHeightmap() {
    function updateValues(J, L, H) {
        valuesArray[0] = J;
        for (J = 1; J < H; J++) {
            valuesArray[J] = valuesArray[J - 1] + L;
            if (1E4 <= valuesArray[J]) {
                valuesArray[J] = 9999;
                L = -L;
            } else if (0 > valuesArray[J]) {
                valuesArray[J] = 0;
                L = -L;
            } else {
                L += 16384 <= fakeRandom.random() ? deltaChange : -deltaChange;
                L = L < -maxDelta ? -maxDelta : L > maxDelta ? maxDelta : L
            }
        }
    }

    function copyValuesToGrid(J, L, H, M) {
        if (H) {
            for (H = 0; H < M; H++) gridValues[L * numRows + J + H] = valuesArray[H];
        } else {
            for (H = 0; H < M; H++) gridValues[L * numRows + J + H * numRows] = valuesArray[H]
        }
    }

    function updateValuesFromArray(J, L) {
        var H = J - valuesArray[L - 1];
        if (0 !== H) {
            var M = 1 + divideFloor(Math.abs(H), L - 1);
            M = 0 > H ? -M : M;
            valuesArray[L - 1] = J;
            var Q = L - 1 - divideFloor(Math.abs(H), Math.abs(M));
            Q = 1 > Q ? 1 : Q > L - 2 ? L - 2 : Q;
            for (var R = L - 2; R >= Q; R--) valuesArray[R] += H - (L - 1 - R) * M;
            if (0 > H) {
                for (H = L - 2; 1 <= H; H--) 0 > valuesArray[H] && (valuesArray[H] = -valuesArray[H] - 1);
            } else {
                for (H = L - 2; 1 <= H; H--) 1E4 <= valuesArray[H] && (valuesArray[H] = 2E4 - valuesArray[H] - 1)
            }
        }
    }

    function calcDiff(J) {
        for (var L = 0; L < J.length - 1; L++) J[L] = J[L + 1] - J[L];
        J[J.length - 1] = J[J.length - 3];
    }
    var gridValues, numRows, numCols, maxDim, maxDelta, deltaChange, valuesArray, E, F, G, rowsVisited, colsVisited, tempRow, tempCol;
    this.generate = function(J) {
        numRows = J[0];
        numCols = J[1];
        maxDelta = J[2];
        deltaChange = J[3];
        gridValues = new Int16Array(numRows * numCols);
        maxDim = numRows > numCols ? numRows : numCols;
        valuesArray = new Int16Array(maxDim);
        E = [];
        F = [];
        G = [];
        rowsVisited = Array(numRows);
        colsVisited = Array(numCols);
        for (J = numRows - 1; 0 <= J; J--) rowsVisited[J] = false;
        for (J = numCols - 1; 0 <= J; J--) colsVisited[J] = false;
        tempRow = new Int16Array(numRows);
        tempCol = new Int16Array(numCols);
        J = maxDim;
        var L = fakeRandom.random() % 1E4,
            H = fakeRandom.random() % (2 * maxDelta + 1) - maxDelta;
        updateValues(L, H, J);
        J = tempCol;
        L = valuesArray;
        H = numCols;
        for (var M = 0; M < H; M++) J[M] = L[M];
        copyValuesToGrid(0, 0, true, numRows);
        J = gridValues[0];
        L = maxDim;
        H = fakeRandom.random() % (2 * maxDelta + 1) - maxDelta;
        updateValues(J, H, L);
        J = tempRow;
        L = valuesArray;
        H = numRows;
        for (M = 0; M < H; M++) J[M] = L[M];
        copyValuesToGrid(0, 0, false, numCols);
        calcDiff(tempRow);
        calcDiff(tempCol);
        updateValues(gridValues[numRows - 1], tempRow[numRows - 1], numCols);
        copyValuesToGrid(numRows - 1, 0, false, numCols);
        updateValues(gridValues[numRows * (numCols - 1)], tempCol[numCols - 1], numRows);
        updateValuesFromArray(gridValues[numRows * numCols - 1], numRows);
        copyValuesToGrid(0, numCols - 1, true, numRows);
        rowsVisited[numRows - 1] = rowsVisited[0] = true;
        colsVisited[numCols - 1] = colsVisited[0] = true;
        J = numRows;
        E.push(0);
        F.push(J);
        G.push(true);
        J = numCols;
        E.push(0);
        F.push(J);
        G.push(false);
        loop: for (;;) {
            J = E.length - 1;
            for (L = J - 1; 0 <= L; L--) F[L] > F[J] && (J = L);
            if (5 > F[J]) break loop;
            L = E[J] + divideFloor(F[J], 2);
            if (G[J]) {
                H = void 0;
                var Q;
                M = L;
                for (var R = 0, P = 0; P < numCols - 1;) {
                    for (Q = R + 1; Q < numCols; Q++)
                        if (colsVisited[Q]) {
                            P = Q;
                            break
                        } Q = P - R + 1;
                    updateValues(gridValues[M + numRows * R], 0 === R ? tempRow[M] : valuesArray[H - 1] - valuesArray[H - 2], Q);
                    updateValuesFromArray(gridValues[P * numRows + M], Q);
                    copyValuesToGrid(M, R, false, Q);
                    H = Q;
                    R = P
                }
                rowsVisited[M] = true
            } else {
                H = void 0;
                M = L;
                for (P = R = 0; P < numRows - 1;) {
                    for (Q = R + 1; Q < numRows; Q++)
                        if (rowsVisited[Q]) {
                            P = Q;
                            break
                        } Q = P - R + 1;
                    updateValues(gridValues[M * numRows + R], 0 === R ? tempCol[M] : valuesArray[H - 1] - valuesArray[H - 2], Q);
                    updateValuesFromArray(gridValues[M * numRows + P], Q);
                    copyValuesToGrid(R, M, true, Q);
                    H = Q;
                    R = P
                }
                colsVisited[M] = true
            }
            H = E[J] + F[J] - L;
            M = G[J];
            E.push(L);
            F.push(H);
            G.push(M);
            F[J] = L - E[J] + 1
        }
        for (J = 0; J < numRows; J++) {
            if (!rowsVisited[J]) {
                for (L = 0; L < numCols; L++) {
                    if (!colsVisited[L]) {
                        H = gridValues[L * numRows + J - 1] + gridValues[(L - 1) * numRows + J];
                        M = 2;
                        if (rowsVisited[J + 1]) {
                            M++;
                            H += gridValues[L * numRows + J + 1];
                        }
                        if (colsVisited[L + 1]) {
                            M++;
                            H += gridValues[(L + 1) * numRows + J];
                        }
                        gridValues[L * numRows + J] = divideFloor(H, M);
                    }
                }
            }
        }
    };
    this.getGridValues = function() {
        return gridValues
    };
    this.resetGridValues = function() {
        gridValues = null
    }
}

function divideFloor(n, d) {
    return Math.floor(n / d + 1 / (2 * d))
}

function allDivideFloor(n, d) {
    return 0 <= n ? divideFloor(n, d) : -divideFloor(-n, d)
}

function square(n) {
    return n * n
}

function getMax(m, n) {
    return m > n ? m : n
}

function getMin(m, n) {
    return m < n ? m : n
}

function rangeClamp(min, n, max) {
    return n < min ? min : n > max ? max : n
}

function babylonianSqrt(n, trials) {
    for (var estimate = divideFloor(n + 1, 2), trialIndex = 0; trialIndex < trials; trialIndex++) estimate = divideFloor(estimate + divideFloor(n, estimate), 2);
    return estimate
}

function sqrtEstimation(n, trials) {
    return 1 > n ? 0 : babylonianSqrt(n, trials)
}

function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
    return !(x1 + w1 <= x2 || y1 + h1 <= y2 || x1 >= x2 + w2 || y1 >= y2 + h2);
}

function rectEqualOrInside(x1, y1, w1, h1, x2, y2, w2, h2) {
    return x1 <= x2 && y1 <= y2 && x1 + w1 >= x2 + w2 && y1 + h1 >= y2 + h2;
}

function MoreSettings() {
    function setSettings() {
        linkButtons.shouldHideLinks[2] = linkButtons.shouldHideLinks[3] = linkButtons.shouldHideLinks[4] = !moreSettings.hideLinks;
        var highResolution = moreSettings.highResolution ? 1 : 0,
            hideLinks = moreSettings.hideLinks ? 1 : 0,
            hideUsernames = moreSettings.hideUsernames ? 1 : 0;
        if (isIOS) {
            window.webkit.messageHandlers.iosCommandA.postMessage("freeSpawn " + highResolution);
            window.webkit.messageHandlers.iosCommandA.postMessage("unlimitedTime " + hideLinks);
        } else if (5 <= androidVersion) {
            androidObject.saveNumber(25, highResolution);
            androidObject.saveNumber(26, hideLinks);
        } else {
            userSettings.setSettings(6, 4 * hideUsernames + 2 * hideLinks + highResolution);
            userSettings.formatSettings();
        }
    }

    function isCursorInButton(xPos, yPos, buttonDims, row) {
        if (0 === row) return xPos >= buttonDims.moreButX && (0 === row || yPos >= buttonDims.yBuffer) && yPos <= buttonDims.yBuffer + buttonDims.contentPadding;
        yPos -= row * (buttonDims.contentPadding - 2);
        return xPos >= buttonDims.xBoundary && (0 === row || yPos >= buttonDims.yBuffer) && yPos <= buttonDims.yBuffer + buttonDims.contentPadding
    }

    function calcButtonDims() {
        var buttonMargin = Math.floor((isZoom ? .145 : .09) * averageDim),
            textPadding = Math.floor(1.5 * buttonMargin),
            contentPadding = Math.floor(.065 * (isZoom ? .53 : .36) * averageDim);
        return {
            moreButX: mainCanvasWidth - buttonMargin - contentPadding,
            yBuffer: bufferLength,
            buttonMargin: buttonMargin,
            contentPadding: Math.floor(.35 * buttonMargin),
            xBoundary: mainCanvasWidth - textPadding - contentPadding,
            textPadding: textPadding
        }
    }

    function drawButton(xPos, yPos, buttonWidth, buttonheight, red, green, blue, isHovering, text, textSizeMultiplier) {
        var textSize = Math.floor(textSizeMultiplier * buttonheight);
        mainCanvasCtx.font = fontWeightBold + textSize + fontSizeArial;
        isHovering && (red += 80, green += 80, blue += 80);
        mainCanvasCtx.fillStyle = "rgba(" + red + "," + green + "," + blue + ",0.6)";
        mainCanvasCtx.fillRect(xPos, yPos, buttonWidth, buttonheight);
        mainCanvasCtx.fillStyle = whiteRGB2;
        mainCanvasCtx.fillRect(xPos, yPos, buttonWidth, 2);
        mainCanvasCtx.fillRect(xPos, yPos + buttonheight - 2, buttonWidth, 2);
        mainCanvasCtx.fillRect(xPos, yPos, 2, buttonheight);
        mainCanvasCtx.fillRect(xPos + buttonWidth - 2, yPos, 2, buttonheight);
        mainCanvasCtx.fillText(text, Math.floor(xPos + buttonWidth / 2), Math.floor(yPos + buttonheight / 2 + .1 * textSize))
    }
    this.selectedRemote = 1;
    this.hideUsernames = this.hideLinks = this.highResolution = false;
    var hoveringButtonIndex = -1,
        menuOpen = false,
        settingsArray = [];
    this.init = function() {
        settingsArray = [];
        settingsArray.push({
            name: "More",
            id: 0,
            red: 140,
            green: 120,
            blue: 0
        });
        settingsArray.push({
            name: "Lobby 1",
            id: 1,
            red: 0,
            green: 0,
            blue: 0
        });
        settingsArray.push({
            name: "Hide Usernames",
            id: 2,
            red: 0,
            green: 0,
            blue: 0
        });
        settingsArray.push({
            name: "Hide Links",
            id: 3,
            red: 0,
            green: 0,
            blue: 0
        });
        !isIOS && 5 > androidVersion && settingsArray.push({
            name: "High Resolution",
            id: 4,
            red: 0,
            green: 0,
            blue: 0
        });
        settingsArray.push({
            name: "Tutorial",
            id: 5,
            red: 0,
            green: 0,
            blue: 0
        });
        settingsArray.push({
            name: "Player List",
            id: 6,
            red: 0,
            green: 0,
            blue: 0
        });
        settingsArray.push({
            name: "Clan List",
            id: 7,
            red: 0,
            green: 0,
            blue: 0
        });
        settingsArray.push({
            name: "Privacy Policy",
            id: 8,
            red: 0,
            green: 0,
            blue: 0
        });
        !isIOS && 5 > androidVersion && settingsArray.push({
            name: "Cookie Policy",
            id: 9,
            red: 0,
            green: 0,
            blue: 0
        });
        settingsArray.push({
            name: versionLabel,
            id: 10,
            red: 90,
            green: 0,
            blue: 0
        });
        if (isIOS) {
            this.highResolution = iosObject.freeSpawn;
            this.hideLinks = iosObject.unlimitedTime;
            this.hideUsernames = false;
        } else if (5 <= androidVersion) {
            this.highResolution = 1 === androidObject.loadNumber(25);
            this.hideLinks = 1 === androidObject.loadNumber(26);
            this.hideUsernames = false;
        } else {
            var binarySetting = userSettings.getSettings(6);
            this.highResolution = 1 === (binarySetting & 1);
            this.hideLinks = 2 === (binarySetting & 2);
            this.hideUsernames = 4 === (binarySetting & 4)
        }
        settingsArray[2].green = this.highResolution ? 130 : 0;
        settingsArray[3].green = this.hideLinks ? 130 : 0;
        if (!isIOS && 5 > androidVersion) settingsArray[4].green = this.hideUsernames ? 130 : 0;
        if (this.hideLinks) linkButtons.shouldHideLinks[2] = linkButtons.shouldHideLinks[3] = linkButtons.shouldHideLinks[4] = false;
    };
    this.mouseDown = function(xPos, yPos) {
        var sIndex;
        if (7 > gameStateManager.getState()) {
            var buttonDims = calcButtonDims();
            if (menuOpen) {
                for (sIndex = 1; sIndex < settingsArray.length; sIndex++) {
                    if (isCursorInButton(xPos, yPos, buttonDims, sIndex)) {
                        if (1 === settingsArray[sIndex].id) {
                            if (wsManager.terriWsCount === moreSettings.selectedRemote + 1 ) moreSettings.selectedRemote = 1
                            else moreSettings.selectedRemote++;
                            settingsArray[1].name = "Lobby " + (moreSettings.selectedRemote >= wsManager.serverCount ? `${moreSettings.selectedRemote} (${(moreSettings.selectedRemote - 1)% 4 + 1}B)` : moreSettings.selectedRemote);
                            mainHandler.canvasDirty = true;
                        } else if (2 === settingsArray[sIndex].id) {
                            moreSettings.highResolution = !moreSettings.highResolution;
                            settingsArray[sIndex].green = moreSettings.highResolution ? 130 : 0;
                            setSettings();
                            mainHandler.canvasDirty = true;
                        } else if (3 === settingsArray[sIndex].id) {
                            moreSettings.hideLinks = !moreSettings.hideLinks;
                            settingsArray[sIndex].green = moreSettings.hideLinks ? 130 : 0;
                            setSettings();
                            mainHandler.canvasDirty = true;
                        } else if (4 === settingsArray[sIndex].id) {
                            moreSettings.hideUsernames = !moreSettings.hideUsernames;
                            settingsArray[sIndex].green = moreSettings.hideUsernames ? 130 : 0;
                            setSettings();
                            canvasManager.forceUpdateCanvas();
                            mainHandler.canvasDirty = true;
                        } else if (5 === settingsArray[sIndex].id) {
                            openLinkBox.init(tutorialLink, true);
                            openLinkBox.init(tutorialLink, false);
                        } else if (6 === settingsArray[sIndex].id) {
                            openLinkBox.init(leaderboardLinks[0], true);
                            openLinkBox.init(leaderboardLinks[0], false);
                        } else if (7 === settingsArray[sIndex].id) {
                            openLinkBox.init(leaderboardLinks[1], true);
                            openLinkBox.init(leaderboardLinks[1], false);
                        } else if (8 === settingsArray[sIndex].id) {
                            openLinkBox.init(privacyPolicyLink, true);
                            openLinkBox.init(privacyPolicyLink, false);
                        } else if (9 === settingsArray[sIndex].id) {
                            openLinkBox.init(cookiePolicyLink, true);
                            openLinkBox.init(cookiePolicyLink, false);
                        }
                        return true;
                    }
                }
                menuOpen = false;
                mainHandler.canvasDirty = true;
                return false
            }
            if (isCursorInButton(xPos, yPos, buttonDims, 0)) {
                menuOpen = true;
                mainHandler.canvasDirty = true;
                return true
            } else return false
        }
    };
    this.onPointermove = function(xPos, yPos) {
        if (7 > gameStateManager.getState()) {
            var buttonDims = calcButtonDims();
            var oldHoveringButtonIndex = hoveringButtonIndex;
            var settingsCount = menuOpen ? settingsArray.length - 1 : 1;
            hoveringButtonIndex = -1;
            for (var bIndex = 0; bIndex < settingsCount; bIndex++) {
                if (isCursorInButton(xPos, yPos, buttonDims, bIndex)) {
                    hoveringButtonIndex = bIndex;
                    break
                }
            }
            oldHoveringButtonIndex !== hoveringButtonIndex && (mainHandler.canvasDirty = true)
        }
    };
    this.drawCanvasImage = function() {
        if (7 > gameStateManager.getState()) {
            var buttonDims = calcButtonDims();
            mainCanvasCtx.textAlign = centerAlign;
            mainCanvasCtx.textBaseline = middleAlign;
            drawButton(buttonDims.moreButX, buttonDims.yBuffer, buttonDims.buttonMargin, buttonDims.contentPadding, settingsArray[0].red, settingsArray[0].green, settingsArray[0].blue, 0 === hoveringButtonIndex, settingsArray[0].name, .6);
            if (menuOpen) {
                var settingsCount = settingsArray.length;
                for (var bIndex = 1; bIndex < settingsCount; bIndex++) drawButton(buttonDims.xBoundary, buttonDims.yBuffer + bIndex * buttonDims.contentPadding - 2 * bIndex, buttonDims.textPadding, buttonDims.contentPadding, settingsArray[bIndex].red, settingsArray[bIndex].green, settingsArray[bIndex].blue, hoveringButtonIndex === bIndex, settingsArray[bIndex].name, bIndex === settingsCount - 1 ? .32 : .45)
            }
        }
    }
}

function KeyboardCamera() {
    function cameraInit() {
        isActive = true;
        intervalID = -1;
        isButtonPressed = Array(4);
        for (var side = 3; 0 <= side; side--) isButtonPressed[side] = false;
        var cameraSpeed = Math.floor(1 + .02 * minDim);
        movementX = Array(4);
        movementY = Array(4);
        movementY[1] = movementY[3] = movementX[0] = movementX[2] = 0;
        movementY[0] = movementX[3] = -cameraSpeed;
        movementX[1] = movementY[2] = cameraSpeed
    }

    function updateCamera() {
        if (-1 !== intervalID)
            if (0 !== clientStatus && autoCamera.deactivateCamera()) {
                for (var isMoving = false, side = 3; 0 <= side; side--) {
                    if (isButtonPressed[side]) {
                        isMoving = true;
                        viewportX += movementX[side];
                        viewportY += movementY[side];
                        infoRenderer.onPointermove(movementX[side], movementY[side]);
                        mouseCamera.restrictViewportToMap();
                    }
                }
                if (isMoving) mainHandler.canvasDirty = true
                else keyboardCamera.stopCameraMovement()
            } else keyboardCamera.stopCameraMovement()
    }
    var isActive = false, intervalID, isButtonPressed, movementX, movementY;
    this.checkAndMoveCamera = function(direction) {
        if (0 !== clientStatus && autoCamera.deactivateCamera()) {
            if (!isActive) cameraInit();
            isButtonPressed[direction] = true;
            if (-1 === intervalID) {
                intervalID = setInterval(updateCamera, 20);
                updateCamera();
            }
        }
    };
    this.checkCameraStop = function(direction) {
        if (0 !== clientStatus) {
            if (!isActive) cameraInit();
            isButtonPressed[direction] = false;
            if (-1 !== intervalID) {
                direction = false;
                for (var side = 3; 0 <= side; side--) direction = direction || isButtonPressed[side];
                if (!direction) this.stopCameraMovement()
            }
        }
    };
    this.stopCameraMovement = function() {
        if (isActive && -1 !== intervalID) {
            for (var side = 3; 0 <= side; side--) isButtonPressed[side] = false;
            clearInterval(intervalID);
            intervalID = -1
        }
    }
}

function BoatPathChecker() {
    var closestWaterPixel, hasValidPath;
    this.getClosestWaterPixel = function() {
        return closestWaterPixel
    };
    this.check = function(id, targetPixelIndex) {
        var loopIndex;
        if (0 === waterBorderPixels[id].length || !pixel.canOwn(targetPixelIndex) || !pixel.isNeutral(targetPixelIndex) && pixel.getOwner(targetPixelIndex) === id) return false;
        for (loopIndex = 21; 0 <= loopIndex; loopIndex--) {
            if (21 === loopIndex) {
                var waterBorder = waterBorderPixels[id],
                    originPixelBIndex = 0,
                    targetX = pixel.toX(targetPixelIndex),
                    targetY = pixel.toY(targetPixelIndex),
                    originDist = Math.abs(pixel.toX(waterBorder[0]) - targetX) + Math.abs(pixel.toY(waterBorder[0]) - targetY);
                for (var bIndex = waterBorder.length - 1; 1 <= bIndex; bIndex--) {
                    var newDist = Math.abs(pixel.toX(waterBorder[bIndex]) - targetX) + Math.abs(pixel.toY(waterBorder[bIndex]) - targetY);
                    if (newDist < originDist) {
                        originDist = newDist;
                        originPixelBIndex = bIndex;
                    }
                }
                closestWaterPixel = waterBorder[originPixelBIndex]
            } else closestWaterPixel = waterBorderPixels[id][divideFloor(loopIndex * waterBorderPixels[id].length, 21)];
            loop: {
                var closestX = pixel.toX(closestWaterPixel),
                    closestY = pixel.toY(closestWaterPixel);
                newDist = Math.abs(targetX - closestX) + Math.abs(targetY - closestY);
                if (2 <= newDist) {
                    var currentPIndex = closestWaterPixel;
                    for (bIndex = 0; bIndex < newDist; bIndex++) {
                        currentPIndex += Math.abs(targetX - pixel.toX(currentPIndex)) >= Math.abs(targetY - pixel.toY(currentPIndex)) ? offset[targetX > closestX ? 1 : 3] : offset[targetY > closestY ? 2 : 0];
                        if (!pixel.isWater(currentPIndex)) {
                            if (pixel.canOwn(currentPIndex)) {
                                if (0 === bIndex || bIndex + 20 < newDist) break;
                                hasValidPath = true;
                                break loop
                            }
                            break
                        }
                    }
                }
                hasValidPath = false; 
            }
            if (hasValidPath) return true
        }
        return false
    }
}

function Teams() {
    function drawPiechart() {
        var teamIndex, emptyTeamCount = 0, totalLand = 0,
            centerX = Math.floor(pieChartWidth / 2),
            centerY = Math.floor(pieChartRadius / 2),
            startAngle = 1.5 * Math.PI;
        for (teamIndex = teamCount; 1 <= teamIndex; teamIndex--) {
            totalLand += teamLand[teamIndex];
            if (0 === teamLand[teamIndex]) emptyTeamCount++;
        }
        canvasDirty = false;
        pieChartCanvasCtx.clearRect(0, 0, pieChartWidth, pieChartWidth);
        pieChartCanvasCtx.fillStyle = blackMoreOpaque;
        pieChartCanvasCtx.fillRect(0, 0, pieChartWidth, pieChartWidth);
        pieChartCanvasCtx.fillStyle = whiteRGB;
        pieChartCanvasCtx.fillRect(0, 0, pieChartWidth, 2);
        pieChartCanvasCtx.fillRect(0, 0, 2, pieChartWidth);
        pieChartCanvasCtx.fillRect(pieChartWidth - 2, 0, 2, pieChartWidth);
        pieChartCanvasCtx.fillRect(0, pieChartWidth - 2, pieChartWidth, 2);
        if (0 < totalLand) {
            if (emptyTeamCount === teamCount) {
                for (teamIndex = teamCount; 1 <= teamIndex; teamIndex--) {
                    if (0 < teamLand[teamIndex]) {
                        pieChartCanvasCtx.fillStyle = teamColors.piechartColors[teamColors.teamIDs[teamIndex]];
                        pieChartCanvasCtx.beginPath();
                        pieChartCanvasCtx.arc(centerX, centerX, centerY, 0, 2 * Math.PI);
                        pieChartCanvasCtx.fill();
                        break
                    }
                }
            } else {
                for (teamIndex = 1; teamIndex <= teamCount; teamIndex++) {
                    if (0 < teamLand[teamIndex]) {
                        emptyTeamCount = startAngle + 2 * Math.PI * teamLand[teamIndex] / totalLand;
                        pieChartCanvasCtx.fillStyle = teamColors.piechartColors[teamColors.teamIDs[teamIndex]];
                        pieChartCanvasCtx.beginPath();
                        pieChartCanvasCtx.arc(centerX, centerX, centerY, startAngle, emptyTeamCount);
                        pieChartCanvasCtx.lineTo(centerX, centerX);
                        pieChartCanvasCtx.fill();
                        0 !== teamIndex && drawPieChartSector(centerX, centerY, startAngle);
                        startAngle = emptyTeamCount;
                    } drawPieChartSector(centerX, centerY, 1.5 * Math.PI)
                }
            }
        }
        pieChartCanvasCtx.beginPath();
        pieChartCanvasCtx.arc(centerX, centerX, centerY, 0, 2 * Math.PI);
        pieChartCanvasCtx.stroke()
    }

    function drawPieChartSector(xPos, yPos, angle) {
        pieChartCanvasCtx.beginPath();
        pieChartCanvasCtx.moveTo(xPos, xPos);
        pieChartCanvasCtx.lineTo(xPos + Math.cos(angle) * yPos, xPos + Math.cos(angle + 1.5 * Math.PI) * yPos);
        pieChartCanvasCtx.stroke()
    }
    var canvasDirty = false,
        updateInterval = 0,
        pieChartWidth = 0,
        pieChartRadius = 0,
        pieChartCanvas = null,
        pieChartCanvasCtx = null,
        teamLand = null;
    this.init = function() {
        if (teamGame) {
            updateInterval = 16;
            teamLand = new Uint32Array(teamCount + 1);
            for (var teamIndex = teamCount; 0 < teamIndex; teamIndex--) teamLand[teamIndex] = 1;
            this.setCanvasVariables()
        } else teamLand = pieChartCanvasCtx = pieChartCanvas = null
    };
    this.getPieChartWidth = function() {
        return pieChartWidth
    };
    this.setCanvasVariables = function() {
        if (teamGame) {
            pieChartWidth = Math.floor(.18 * minDim);
            pieChartWidth += pieChartWidth % 2;
            pieChartRadius = Math.floor(7 * pieChartWidth / 8);
            pieChartCanvas = pieChartCanvas ? pieChartCanvas : document.createElement("canvas");
            pieChartCanvas.width = pieChartWidth;
            pieChartCanvas.height = pieChartWidth;
            pieChartCanvasCtx = pieChartCanvas.getContext("2d", {
                alpha: true
            });
            pieChartCanvasCtx.lineWidth = 2;
            pieChartCanvasCtx.strokeStyle = whiteRGB2;
            drawPiechart();
        }
    };
    this.getLargestTeamLand = function() {
        return teamLand[this.getLargestTeamIndex()]
    };
    this.updateAndGetLargestTeamIndex = function() {
        updateInterval = 31;
        this.update();
        return this.getLargestTeamIndex()
    };
    this.getLargestTeamIndex = function() {
        for (var largestTeamIndex = 0, teamIndex = teamCount; 0 < teamIndex; teamIndex--) {
            if (teamLand[teamIndex] > teamLand[largestTeamIndex]) (largestTeamIndex = teamIndex);
        }
        return largestTeamIndex
    };
    this.update = function() {
        if (teamGame && 32 <= ++updateInterval) {
            updateInterval = 0;
            var teamIndex;
            for (teamIndex = teamCount; 0 <= teamIndex; teamIndex--) teamLand[teamIndex] = 0;
            for (teamIndex = aliveCount - 1; 0 <= teamIndex; teamIndex--) teamLand[teamColors.teamArray[aliveEntities[teamIndex]]] += land[aliveEntities[teamIndex]];
            canvasDirty = true
        }
    };
    this.updateRenderObject = function() {
        teamGame && canvasDirty && drawPiechart()
    };
    this.drawCanvasImage = function() {
        teamGame && mainCanvasCtx.drawImage(pieChartCanvas, canvasPadding, gameBoardHeight + 2 * canvasPadding)
    }
}

function FakeRandom() {
    var randomValue, probiTable;
    this.init = function() {
        probiTable = Array(101);
        for (var index = probiTable.length - 1; 0 <= index; index--) probiTable[index] = divideFloor(32768 * index, 100);
        this.changeRandomNumber(0)
    };
    this.value = function(index) {
        return probiTable[index]
    };
    this.getMedian = function() {
        return divideFloor(randomValue - 1, 2)
    };
    this.changeRandomNumber = function(seed) {
        randomValue = 2 * seed % 32768 + 1
    };
    this.random = function() {
        return randomValue = 167 * randomValue % 32768
    };
    this.calcFractionalValue = function(seed) {
        return divideFloor(seed * this.random(), 32768)
    };
    this.doesValueMeetProbiThreshold = function(value) {
        return 0 !== value && this.random() < this.value(value)
    }
}

function CanvasManager() {
    function onResize() {
        if (500 <= updateFreq || 5 < ticksElapsed) updateCanvas()
    }

    function updateCanvas() {
        ticksElapsed = 0;
        updateFreq += 700 > updateFreq ? 200 : 0;
        if (sprites.areAllSpritesLoaded() && (checkHasNormalClientDims() || forceCanvasUpdate)) {
            forceCanvasUpdate = false;
            setCanvasDisplayVariables();
            mainLeaderboardIcon.init();
            mainButtons.init();
            nameInputBar.setCanvasVariables();
            linkButtons.init();
            preLobby.setCanvasVariables();
            playtime.setCanvasVariables();
            nextContestBar.setCanvasVariables();
            cookiesPrompt.setCanvasVariables();
            mainLeaderboard.setCanvasVariables();
            emojis.init();
            if (1 <= clientStatus) {
                gameLeaderboard.setCanvasVariables(false);
                troopBar.setCanvasVariables();
                gameStatistics.setCanvasVariables();
                mouseCamera.setCanvasVariables();
                attackRatioBar.setCanvasVariables();
                announcements.setCanvasVariables();
                gameButtons.setCanvasVariables();
                peace.setCanvasVariables();
                attackBars.setCanvasVariables();
                gameMessages.setCanvasVariables();
                playerActions.initIcon();
                statistics.setCanvasVariables();
                infoRenderer.setCanvasVariables();
                gameResultBox.setCanvasVariables();
                teams.setCanvasVariables();
                mouseCamera.restrictViewportToMap();
            } 
            if (clientStatus == 0 || mainSettings.buttons[4].buttonClass.visible) {
                if (0 === gameStateManager.getState()) nameInputBar.toggleVisibility(0, true)
                else if (2 === gameStateManager.getState()) singleSettings.setCanvasVariables()
                else if (3 === gameStateManager.getState()) showError.setCanvasVariables();
                gameStateManager.checkAndHideOtherElements();
                gameStateManager.vl();
            }
            mainHandler.canvasDirty = true
        }
    }

    function limitToMinimum(value) {
        return value && 128 < value ? Math.floor(value) : 128
    }

    function checkHasNormalClientDims() {
        if (5 <= androidVersion) {
            var varClientWidth = limitToMinimum(document.documentElement.clientWidth);
            var varClientHeight = limitToMinimum(document.documentElement.clientHeight);
            pixelRatio = 1;
            if (varClientWidth !== prevClientWidth || varClientHeight !== prevClientHeight) {
                prevClientWidth = varClientWidth;
                prevClientHeight = varClientHeight;
                mainCanvasWidth = prevClientWidth;
                mainCanvasHeight = prevClientHeight;
                minDim = getMin(mainCanvasWidth, mainCanvasHeight);
                averageDim = divideFloor(mainCanvasHeight + mainCanvasWidth, 2);
                if (5 <= androidVersion) {
                    var maxClientWidth = androidObject.loadNumber(23);
                    var maxClientHeight = androidObject.loadNumber(24);
                    varClientWidth > maxClientWidth && (maxClientWidth = varClientWidth, androidObject.saveNumber(23, maxClientWidth));
                    varClientHeight > maxClientHeight && (maxClientHeight = varClientHeight, androidObject.saveNumber(24, maxClientHeight))
                } else maxClientWidth = varClientWidth, maxClientHeight = varClientHeight;
                varClientWidth = mainCanvas.width;
                varClientHeight = mainCanvas.height;
                maxClientWidth > varClientWidth && (varClientWidth = maxClientWidth, mainCanvas.width = maxClientWidth);
                maxClientHeight > varClientHeight && (varClientHeight = maxClientHeight, mainCanvas.height = maxClientHeight);
                mainCanvas.style.width = varClientWidth + "px";
                mainCanvas.style.height = varClientHeight + "px";
                return true;
            } else return false;
        }
        moreSettings.hideUsernames ? (pixelRatio = window.devicePixelRatio) || (pixelRatio = 1) : pixelRatio = 1;
        maxClientWidth = limitToMinimum(document.documentElement.clientWidth);
        maxClientHeight = limitToMinimum(document.documentElement.clientHeight);
        varClientWidth = Math.floor(.5 + pixelRatio * maxClientWidth);
        varClientHeight = Math.floor(.5 + pixelRatio * maxClientHeight);
        if (varClientWidth === prevClientWidth && varClientHeight === prevClientHeight) return false;
        prevClientWidth = mainCanvasWidth = varClientWidth;
        prevClientHeight = mainCanvasHeight = varClientHeight;
        minDim = getMin(mainCanvasWidth, mainCanvasHeight);
        averageDim = divideFloor(mainCanvasHeight + mainCanvasWidth, 2);
        mainCanvas.width = varClientWidth;
        mainCanvas.height = varClientHeight;
        mainCanvas.style.width = maxClientWidth + "px";
        mainCanvas.style.height = maxClientHeight + "px";
        return true
    }
    var forceCanvasUpdate = false,
        ticksElapsed, updateFreq;
    this.init = function() {
        ticksElapsed = 1;
        updateFreq = 100;
        mainCanvasWidth = mainCanvasHeight = minDim = prevClientWidth = prevClientHeight = averageDim = 0;
        pixelRatio = 1;
        mainCanvas = document.getElementById("canvasA");
        mainCanvasCtx = mainCanvas.getContext("2d", {
            alpha: false
        });
        mainCanvasCtx.imageSmoothingEnabled = false;
        checkHasNormalClientDims();
        window.addEventListener("resize", onResize)
    };
    this.update = function() {
        specialGames.update();
        ++ticksElapsed >= updateFreq && updateCanvas()
    };
    this.forceUpdateCanvas = function() {
        forceCanvasUpdate = true;
        500 <= updateFreq && updateCanvas()
    }
}

function BoatPathHandler() {
    function cancelBoat(returnTroops) {
        boatSpeed.removeEntry(authorID, boatID);
        attacks.removeAttack(authorID, aIndex);
        if (returnTroops) troops[authorID] += remaining
    }

    function revertToWater() {
        pixel.strongIsBoat(oldPIndex, authorID) && pixel.revertToWaterPixel(oldPIndex)
    }
    var authorID, remaining, oldPIndex, landingPIndex, oldXCoord, oldYCoord, targetXCoord, targetYCoord, boatIndex, aIndex, boatID;
    this.update = function(param_boatIndex, param_boatID, param_authorID, param_oldPIndex, targetPIndex) {
        boatIndex = param_boatIndex;
        boatID = param_boatID;
        authorID = param_authorID;
        oldXCoord = pixel.toX(param_oldPIndex);
        oldYCoord = pixel.toY(param_oldPIndex);
        targetXCoord = pixel.toX(targetPIndex);
        targetYCoord = pixel.toY(targetPIndex);
        landingPIndex = oldPIndex = pixel.toIndex(oldXCoord, oldYCoord);
        aIndex = attacks.findAttackIndexFromBoatID(authorID, boatID);
        var boatExists;
        if (-1 === aIndex) {
            revertToWater();
            boatSpeed.removeEntry(authorID, boatID);
            boatExists = false
        } else {
            remaining = attacks.getRemainingTroopsFromIndex(authorID, aIndex);
            boatExists = true;
        }
        if (boatExists) {
            revertToWater();
            var troopsLost = divideFloor(remaining, 128);
            troopsLost = 1 > troopsLost ? 1 : troopsLost;
            remaining -= troopsLost;
            if (authorID === myID) {
                statisticNumbers.numbers[15] += troopsLost;
            }
            var boatWontDie;
            if (remaining <= neutralLandCost) {
                if (authorID === myID) {
                    statisticNumbers.numbers[15] += remaining;
                }
                cancelBoat(false);
                boatWontDie = false;
            } else {
                attacks.setRemainingTroopsFromIndex(authorID, aIndex, remaining);
                boatWontDie = true;
            }
            if (boatWontDie) {
                oldPIndex = Math.abs(targetXCoord - oldXCoord) >= Math.abs(targetYCoord - oldYCoord) ? oldPIndex + offset[targetXCoord > oldXCoord ? 1 : 3] : oldPIndex + offset[targetYCoord > oldYCoord ? 2 : 0];
                oldXCoord = pixel.toX(oldPIndex);
                oldYCoord = pixel.toY(oldPIndex);
                boatSpeed.setCurrentPixelIndex(boatIndex, oldPIndex);
                if (pixel.canOwn(oldPIndex) ? false : true) {
                    if (pixel.isWater(oldPIndex)) pixel.changeToBoatPixel(oldPIndex, authorID);
                } else loop: {
                    var landingTargetID;
                    if (pixel.isNeutral(oldPIndex)) landingTargetID = maxEntities;
                    else {
                        landingTargetID = pixel.getOwner(oldPIndex);
                        if (landingTargetID === authorID) {
                            cancelBoat(true);
                            break loop
                        }
                        if (!isNotTeamate(authorID, landingTargetID)) {
                            param_boatID = land[landingTargetID] * maxTroopsToLandRatio - troops[landingTargetID];
                            if (0 < param_boatID) {
                                param_boatID = remaining > param_boatID ? param_boatID : remaining;
                                remaining -= param_boatID;
                                if (authorID === myID) {
                                    announcements.giveDonation(param_boatID, landingTargetID);
                                    statisticNumbers.numbers[16] += param_boatID;
                                }
                                if (landingTargetID === myID) {
                                    announcements.receiveDonation(param_boatID, authorID);
                                    statisticNumbers.numbers[10] += param_boatID;
                                }
                                troops[landingTargetID] += param_boatID;
                            }
                            cancelBoat(true);
                            break loop
                        }
                    }
                    if (authorID === myID) statisticNumbers.numbers[13] += remaining;
                    boatSpeed.removeEntry(authorID, boatID);
                    attacks.removeAttack(authorID, aIndex);
                    potentialBorderAdvances[authorID].push(landingPIndex);
                    attacks.set(authorID, remaining, landingTargetID);
                    speed.addEntry(authorID, true);
                }
            }
        }
    };
    this.moveBoatLocation = function(id, newPixelIndex) {
        authorID = id;
        oldPIndex = pixel.toIndex(pixel.toX(newPixelIndex), pixel.toY(newPixelIndex));
        revertToWater()
    }
}

function GradientEdge() {
    var gradientDepth, gradientCanvases, hasGradient, bgColor;
    this.init = function() {
        var gIndex, depthIndex, depthIndex2;
        bgColor = "rgb(" + mapBaseCanvasImageDataArray[0] + "," + mapBaseCanvasImageDataArray[1] + "," + mapBaseCanvasImageDataArray[2] + ")";
        hasGradient = mapIsSurroundedByWater(currentMapID) ? true : false;
        if (hasGradient) gradientCanvases = null;
        else {
            gradientDepth = 24;
            if (1 === currentMapID) {
                var outerGradientColor = 0;
                var innerGradientColor = 160
            } else outerGradientColor = 128, innerGradientColor = 32;
            bgColor = "rgb(" + outerGradientColor + "," + outerGradientColor + "," + outerGradientColor + ")";
            gradientCanvases = Array(4);
            for (var side = 3; 0 <= side; side--) {
                gradientCanvases[side] = document.createElement("canvas");
                var gradientWidth = 0 === side % 2 ? currentMapWidth : gradientDepth;
                var gradientHeight = 0 === side % 2 ? gradientDepth : currentMapHeight + 2 * gradientDepth;
                gradientCanvases[side].width = gradientWidth;
                gradientCanvases[side].height = gradientHeight;
                var gradientCanvasCtx = gradientCanvases[side].getContext("2d", {
                    alpha: false
                });
                var gradientCanvasImageData = gradientCanvasCtx.getImageData(0, 0, gradientWidth, gradientHeight);
                var gradientCanvasImageDataArray = gradientCanvasImageData.data;
                if (0 === side % 2) {
                    for (depthIndex = gradientDepth - 1; 0 <= depthIndex; depthIndex--) {
                        var rgbValue = innerGradientColor + Math.floor((depthIndex + 1) * (outerGradientColor - innerGradientColor) / (gradientDepth + 1));
                        for (gIndex = gradientWidth - 1; 0 <= gIndex; gIndex--) {
                            var dataIndex = 4 * ((0 === side ? gradientDepth - depthIndex - 1 : depthIndex) * gradientWidth + gIndex);
                            gradientCanvasImageDataArray[dataIndex] = rgbValue;
                            gradientCanvasImageDataArray[dataIndex + 1] = rgbValue;
                            gradientCanvasImageDataArray[dataIndex + 2] = rgbValue;
                            gradientCanvasImageDataArray[dataIndex + 3] = 255;
                        }
                    }
                } else {
                    for (gIndex = gradientDepth - 1; 0 <= gIndex; gIndex--) {
                        rgbValue = innerGradientColor + Math.floor((gIndex + 1) * (outerGradientColor - innerGradientColor) / (gradientDepth + 1));
                        for (depthIndex = gradientHeight - 1 - gradientDepth; depthIndex >= gradientDepth; depthIndex--) {
                            dataIndex = 4 * (depthIndex * gradientWidth + (3 === side ? gradientDepth - gIndex - 1 : gIndex));
                            gradientCanvasImageDataArray[dataIndex] = rgbValue;
                            gradientCanvasImageDataArray[dataIndex + 1] = rgbValue;
                            gradientCanvasImageDataArray[dataIndex + 2] = rgbValue;
                            gradientCanvasImageDataArray[dataIndex + 3] = 255;
                        }
                    }
                    for (depthIndex2 = 1; 0 <= depthIndex2; depthIndex2--) {
                        for (gIndex = gradientDepth - 1; 0 <= gIndex; gIndex--) {
                            for (depthIndex = gradientDepth - 1; 0 <= depthIndex; depthIndex--) {
                                rgbValue = (Math.pow(gIndex * gIndex + depthIndex * depthIndex, .5) + 1) / (gradientDepth + 1);
                                rgbValue = 1 < rgbValue ? 1 : rgbValue;
                                rgbValue = innerGradientColor + Math.floor(rgbValue * (outerGradientColor - innerGradientColor));
                                dataIndex = 4 * ((0 === depthIndex2 ? gradientDepth - depthIndex - 1 : depthIndex + depthIndex2 * (gradientHeight - gradientDepth)) * gradientWidth + (1 === side ? gIndex : gradientDepth - gIndex - 1));
                                gradientCanvasImageDataArray[dataIndex] = rgbValue;
                                gradientCanvasImageDataArray[dataIndex + 1] = rgbValue;
                                gradientCanvasImageDataArray[dataIndex + 2] = rgbValue;
                                gradientCanvasImageDataArray[dataIndex + 3] = 255;
                            }
                        }
                    }
                }
                gradientCanvasCtx.putImageData(gradientCanvasImageData, 0, 0)
            }
            mapBaseCanvasCtx.fillStyle = "rgb(" + innerGradientColor + "," + innerGradientColor + "," + innerGradientColor + ")";
            mapBaseCanvasCtx.fillRect(0, 0, currentMapWidth, 1);
            mapBaseCanvasCtx.fillRect(0, currentMapHeight - 1, currentMapWidth, 1);
            mapBaseCanvasCtx.fillRect(0, 0, 1, currentMapHeight);
            mapBaseCanvasCtx.fillRect(currentMapWidth - 1, 0, 1, currentMapHeight)
        }
    };
    this.fillBackgroundColor = function() {
        var sideIndex = hasGradient ? 0 : -gradientDepth;
        if (!rectEqualOrInside(sideIndex, sideIndex, currentMapWidth - 2 * sideIndex, currentMapHeight - 2 * sideIndex, viewport.viewportLeft, viewport.viewportTop, viewport.viewportWidth, viewport.viewportHeight)) {
            mainCanvasCtx.fillStyle = bgColor;
            mainCanvasCtx.fillRect(0, 0, prevClientWidth, prevClientHeight);
        }
    };
    this.drawCanvasImage = function() {
        if (!hasGradient) {
            if (rectIntersect(0, -gradientDepth, currentMapWidth, gradientDepth, viewport.viewportLeft, viewport.viewportTop, viewport.viewportWidth, viewport.viewportHeight)) {
                mainCanvasCtx.drawImage(gradientCanvases[0], viewport.cameraX, viewport.cameraY - gradientDepth);
            }
            if (rectIntersect(currentMapWidth, -gradientDepth, gradientDepth, currentMapHeight + 2 * gradientDepth, viewport.viewportLeft, viewport.viewportTop, viewport.viewportWidth, viewport.viewportHeight)) {
                mainCanvasCtx.drawImage(gradientCanvases[1], viewport.cameraX + currentMapWidth, viewport.cameraY - gradientDepth);
            }
            if (rectIntersect(0, currentMapHeight, currentMapWidth, gradientDepth, viewport.viewportLeft, viewport.viewportTop, viewport.viewportWidth, viewport.viewportHeight)) {
                mainCanvasCtx.drawImage(gradientCanvases[2], viewport.cameraX, viewport.cameraY + currentMapHeight);
            }
            if (rectIntersect(-gradientDepth, -gradientDepth, gradientDepth, currentMapHeight + 2 * gradientDepth, viewport.viewportLeft, viewport.viewportTop, viewport.viewportWidth, viewport.viewportHeight)) {
                mainCanvasCtx.drawImage(gradientCanvases[3], viewport.cameraX - gradientDepth, viewport.cameraY - gradientDepth);
            }
        }
    }
}

function TerriWS() {
    function pass() {}

    function onOpen() {
        wsManager.doFirstAction(remote, firstAction)
    }

    function onMessage(m) {
        unreadMessagesCount++;
        1 === unreadMessagesCount ? dataReader.readAsArrayBuffer(m.data) : unreadMessages.push(m.data)
    }

    function onLoadend() {
        unreadMessagesCount--;
        dataDecoder.mainDecoder(remote, new Uint8Array(dataReader.result));
        0 < unreadMessagesCount && (dataReader.readAsArrayBuffer(unreadMessages[0]), unreadMessages.shift())
    }

    function onError() {}

    function onClose(reason) {
        wsManager.unexpectedClose(remote, reason)
    }
    var remote, firstAction, unreadMessagesCount, unreadMessages, dataReader, ws;
    this.init = function(param_remote, param_firstAction) {
        remote = param_remote;
        firstAction = param_firstAction;
        unreadMessagesCount = 0;
        unreadMessages = [];
        dataReader = new FileReader;
        dataReader.addEventListener("loadend", onLoadend);
        var url = wsUrlStrings[0];
        url += remote < wsManager.serverCount ? (wsManager.originURLs[remote] + wsUrlStrings[1 + socketIndex]) : (wsManager.originURLs[0] + "/i" + (1 + socketIndex) + (remote - wsManager.gameServerCount) + "/");
        ws = new WebSocket(url);
        ws.onopen = onOpen;
        ws.onmessage = onMessage;
        ws.onclose = onClose;
        ws.onerror = onError
    };
    this.isConnecting = function() {
        return ws.readyState === ws.CONNECTING
    };
    this.isOpen = function() {
        return ws.readyState === ws.OPEN
    };
    this.isConnectingOrOpen = function() {
        return this.isConnecting() || this.isOpen()
    };
    this.setFirstAction = function(param_firstAction) {
        firstAction = param_firstAction
    };
    this.send = function(m) {
        this.isOpen() && ws.send(m)
    };
    this.close = function(reason) {
        this.isConnectingOrOpen() && (ws.close(reason), this.end())
    };
    this.end = function() {
        ws.onopen = pass;
        ws.onmessage = pass;
        ws.onclose = pass;
        ws.onerror = pass;
        dataReader.removeEventListener("loadend", onLoadend)
    }
}

function Sounds() {
    var soundtracks, unloadedSounds,
        audioData = [
        "data:audio/wav;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAACAAACQACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJANrAAAAAAAAAkBOYyPRAAAAAAAAAAAAAAAAAAAA//tUxAAACSixLxQ2AAFeqa/3HqACAAwAAHDgYGBucQDdz7T7zSnXXvsE8/gWMksEwPqzszP1/sHBgeL3/pTb3odr/pTr/i9+83uvfxe/862vfYMz+yxY5IPgg7/wwr77//aWSIG2EgEttpyMmjFfBzN0SjE2Q3d3l9RrEYtzTUMQjabag/fCxIgWzRYPHhQDg9U2LX/T6fmGP4rC2n2N/57n9d1/lD/7X/uw6xn/Rv+o+Ijr/Dr8fj8ei0Ei0Ngg//tUxAUACrUzgbiVABkEFtmDhGABSBgUAOlwsX/kHyWH7iMmV/GAmIK2IsXhMJzhl5oN1PATFslEWK5h1hV+ikJckMbU078jJv//6qjIa4kc6hx3+Ouqdk///6kpFps1D9qGQxpQEsxpFHDiVGkXBSMEgEk5oMAiWkQCiUSyq2ZlqnP//+8z6rZlyJGCQUk5pIkS00iixLArEVkCu/3AvBuNTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVV", 
        "data:audio/wav;base64,SUQzBAAAAAAAM1REUkMAAAAGAAADMjAyMgBUU1NFAAAADwAAA0xhdmY1OC43Ni4xMDAAAAAAAAAAAAAAAP/7QMAAAAAAAAAAAAAAAAAAAAAAAEluZm8AAAAPAAAAAgAAAlcApqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampv//////////////////////////////////////////////////////////////////AAAAAExhdmM1OC4xMwAAAAAAAAAAAAAAACQDTAAAAAAAAAJXJsUq4AAAAAAA//tQxAAACfxLY7QTAAF9JvE/EtACjSRAAAAAEAAxjHGMYwAAQAAAC7u7uzyYACMPJkyZNNAEAQBAEAfB8HwfBwEAQBAMA+D4Pg+BAQBAEAQB8+IAQDP+UdoD//y4OAg7///8uD8PEREw7M5mau/+grbAEjABaFYKjpZEk4kCoJA5NNQ0YjFc1JIcxuChTLAcB83EnmlKShw6sZ1kiYHTFqR11vWktJfV/13SfGMaq8d571lFf////+lRNRkoo3+PhR/5k6p1CFCGd0BACGf4UP/7UsQFgAu5H2/4uQIQ4gvcK4IwABgUBkAApMmt8UiNF+eB0dIPkpBxZ0dGHMA+wO2kTR/gNwMyKRSHOIMam5nyyeOGqJ08ZMv6VVv/7qDAxPL9Fv/bWympf//9Ua47l/5DX//1P/BoA+AAcGW3P+YVEKYaq7MdWhRJMBNVOrxj6K+//h1Z0RFjwlGHiOW///KnREPOgqoOlf///eDSw0WqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
        "data:audio/wav;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjMzLjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAACAAAAxgAXV1dXV1dXV1dXV1ddHR0dHR0dHR0dHR0i4uLi4uLi4uLi4uLi6KioqKioqKioqKiorq6urq6urq6urq6urrR0dHR0dHR0dHR0dHo6Ojo6Ojo6Ojo6Ojo////////////////AAAAAExhdmM1OC41OQAAAAAAAAAAAAAAACQDQAAAAAAAAAMYvzbpkQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+MYxAAKsF0c6UIYABFaZ//oRlACKcWfEB9QYg4cB8+UB9QIHCjoP+oE1AgsPxOoEFOt///y8EH/fe9VIBYGcmFkR35E5s4C/+MYxBAMahHwAYooANRfxR4vh7C3/4o3R2CTdUf/6vq/r0//70b+ogtzsr/frIplkv9/MknlQSU0dRNEIJUpAJiERRQSZbLH/+MYxBkS0qa8yc1QAAl1/dIkgv5Ko+oqgMC0/69CInOOjI7+Kppv8YF///IRq/U5//m/4jD4ff///KODTP/6Kg4hjgzN2v+s/+MYxAgO2ybCOANEHJpdN7plO8mhunikovJKan/nRhG/kmr/9X5f9P+rq3/9yNbUT/+Gf+GK3///zOqn////8TX6fjD0hEOh/+MYxAcNAcqYACsURBtrCOKhV5xRdNMmnw+Pd6NxBjTXk4TCT/6K7shE/97fnjqN//5N/29R43/6KQgpSR//PNPHSoii53c4/+MYxA4N2YahcUcQAIHng8Go0G04+xQAMkXv7qavQozl/9Ytn7/lCL/sDEt/g7/rfrBb/8yhylJgN7spvWTQuRfWTmN/H0PZ/+MYxBERSmqQKY1QAOKBID1UmpWAZqKYVRQYKgWjFomTGPUaqXs+dT/NGRDjd/R55Z//+6+ZQlo9+05f/3/SW/RV1VS9m2Y+/+MYxAYMoMXAAcMYAJfGahRJMBLszNqAmoCAqUAgJAICFCUFVgq4GvxKdg0WDsSjQVGA0v/////+9UxBTUUzLjEwMFVVVVVV",
        "data:audio/wav;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjMzLjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAACQAAA2AAVVVVVVVVVVVVVVVqampqampqampqaoCAgICAgICAgICAlZWVlZWVlZWVlZWqqqqqqqqqqqqqqsDAwMDAwMDAwMDA1dXV1dXV1dXV1dXq6urq6urq6urq6v//////////////AAAAAExhdmM1OC41OQAAAAAAAAAAAAAAACQCYAAAAAAAAANghx7hUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+MYxAAJQHElQU8AAblIafNM62IlACwEYRIDoEYVpbx6y5qvfpSnzd/fEMsAOjiI58CtNOmJIQJsBCB7TfHuZViRGWt/N1IL/+MYxBYL4MoMAY0QAJq6v1fWGOf/7Bb/0UZD//I//9HZkP//8R6VgvblttAVzR1HXRPB6F1kwta5xjiKOJpqMglcxKSs+s6U/+MYxCEU8Tb9ucxAAs7XJBzWuM5aBiaUvL1puzjQ6RSYm3HBt5FUSlWygcCaIhFxpIExwYQkUEcs726fru6cUUEknJAAK1+N/+MYxAgM+K7puHjSJusm6PlyrhS9xgFuNCImj/9tCFH2s2rDSrISayWrOkcsJQ0Qvh28RFTrmCUsgDAJpmAVrsskEtntfA/7/+MYxA8MwN7GYCsSBVEe1ZVd4vXHk6++4qxvRRv2t6sqpJoT5lvGhgwX3RsBiDK3/YKnLalDMte1xR/x18Z181e2hoKBPaVy/+MYxBcMIQLVoUkYAnfg/O1HaQP3c362NPqqmieYIQ8PvEDbvAyKBpAcsaWoAH3rDlmVSlZIVMLB5e0tLjNZbLfz05LyEpVZ/+MYxCEUgO5cAZlYAO9gOv/dJfiEUAqCIIJJM5P/jrN4ibbBsk8Js6mvlgqCoiCp3/lREKhMRCp3/6yzDpaZwiRJpFclwgar/+MYxAoNwM5AAc8AACrAnTJG8rpT9SCnevYFEwHKIEXppc2GtDmL69eJNDGZijNvxr7z7wjF+VfZ6vaErk8aRbjKHKJsXJVI/+MYxA4M2M4kAHpEhJLi49SmjDUKtVqtSAmyHi2qpheqoXIjolKmZeWqx3yiXYlBXuJVTEFNRTMuMTAwVVVVVVVVVVVVVVVV",
        "data:audio/wav;base64,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"
    ]; //Cycle Beep, ITick Boop, LobbyJoin, LobbyLeave, Contest
    this.init = function() {
        unloadedSounds = 4;
        soundtracks = Array(unloadedSounds);
        for (; unloadedSounds >= 0; unloadedSounds--) {
            var sound = document.createElement("audio");
            sound.src = audioData[unloadedSounds]
            sound.setAttribute("preload", "auto");
            sound.setAttribute("controls", "none");
            sound.style.display = "none";
            document.body.appendChild(sound)
            soundtracks[unloadedSounds] = sound;
        }
        if (unloadedSounds == -1) unloadedSounds++;
    };
    this.areAllSoundsLoaded = function () {
        return unloadedSounds === 0;
    };
    this.play = function(sIndex) {
        if (this.areAllSoundsLoaded() && mainSettings.buttons[3].active) {
            soundtracks[sIndex].play();
            return true;
        } else return false;
    }
}

function StatisticNumbers() {
    this.maxDataPoints = 501;
    this.recordedLandValues = new Uint32Array(this.maxDataPoints);
    this.recordedTroopValues = new Uint32Array(this.maxDataPoints);
    this.recordedInterestValues = new Uint16Array(this.maxDataPoints);
    this.troopsAtTimings = new Uint32Array(5);
    this.landAtTimings = new Uint32Array(5);
    this.currentDataPointIndex = 0;
    this.updateInterval = 1;
    this.updateCounter = 0;
    this.max = [0, 0, 0];
    this.numbers = 0;
    this.statisticNumbersLabels = "Avg. Attack Strength;Number Attacks;Ships sent;Bots conquered;Humans conquered;Attacked by Bots;Attacked by Humans;Territorial Loss;Territorial Income;Interest Income;Received Support;Overall Income;Commanding Costs;Attack Losses;Defense Losses;Shipping Losses;Transmitted Support;Overall Expenses".split(";");
    this.microNumbersLabels = "Opening;1:10;1:20;1:37;2:00;Land;Troops;Efficiency;Score".split(";");
    this.init = function() {
        this.currentDataPointIndex = 0;
        this.updateInterval = 1;
        this.updateCounter = 0;
        this.resetMaxValues();
        this.initNumberValues()
    };
    this.update = function() {
        if (0 >= this.updateCounter--) this.recordData()
    };
    this.recordData = function() {
        if (0 !== isAlive[myID]) {
            this.recordedLandValues[this.currentDataPointIndex] = land[myID];
            this.recordedTroopValues[this.currentDataPointIndex] = troops[myID];
            this.recordedInterestValues[this.currentDataPointIndex] = interest.getInterestRate(myID);
            this.updateMaxValues(this.currentDataPointIndex);
            this.currentDataPointIndex++;
            if (this.currentDataPointIndex === this.maxDataPoints) this.shiftData();
            this.updateCounter = this.updateInterval - 1;
            statistics.updateRenderObject();
            if (mainHandler.getTicksElapsed() * .056 > 45 && this.troopsAtTimings[0] === 0) {
                this.troopsAtTimings[0] = getMax(1, troops[myID] + attacks.getTotalTroopsSentAway(myID));
                this.landAtTimings[0] = land[myID];
            } else if (mainHandler.getTicksElapsed() * .056 > 70 && this.troopsAtTimings[1] === 0) {
                this.troopsAtTimings[1] = getMax(1, troops[myID] + attacks.getTotalTroopsSentAway(myID));
                this.landAtTimings[1] = land[myID];
            } else if (mainHandler.getTicksElapsed() * .056 > 80 && this.troopsAtTimings[2] === 0) {
                this.troopsAtTimings[2] = getMax(1, troops[myID] + attacks.getTotalTroopsSentAway(myID));
                this.landAtTimings[2] = land[myID];
            } else if (mainHandler.getTicksElapsed() * .056 > 97 && this.troopsAtTimings[3] === 0) {
                this.troopsAtTimings[3] = getMax(1, troops[myID] + attacks.getTotalTroopsSentAway(myID));
                this.landAtTimings[3] = land[myID];
            } else if (mainHandler.getTicksElapsed() * .056 > 120 && this.troopsAtTimings[4] === 0) {
                this.troopsAtTimings[4] = getMax(1, troops[myID] + attacks.getTotalTroopsSentAway(myID));
                this.landAtTimings[4] = land[myID];
            }
        }
    };
    this.shiftData = function() {
        this.resetMaxValues();
        this.updateMaxValues(0);
        this.currentDataPointIndex = 1 + divideFloor(this.maxDataPoints, 2);
        for (var dpIndex = 1; dpIndex < this.currentDataPointIndex; dpIndex++) {
            this.recordedLandValues[dpIndex] = this.recordedLandValues[2 * dpIndex];
            this.recordedTroopValues[dpIndex] = this.recordedTroopValues[2 * dpIndex];
            this.recordedInterestValues[dpIndex] = this.recordedInterestValues[2 * dpIndex];
            this.updateMaxValues(dpIndex);
        }
        this.updateInterval *= 2
    };
    this.resetMaxValues = function() {
        this.max[0] = this.max[1] = this.max[2] = 0
    };
    this.initNumberValues = function() {
        this.numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
    this.updateMaxValues = function(dpIndex) {
        this.max[0] = getMax(this.recordedLandValues[dpIndex], this.max[0]);
        this.max[1] = getMax(this.recordedTroopValues[dpIndex], this.max[1]);
        this.max[2] = getMax(this.recordedInterestValues[dpIndex], this.max[2]);
    }
}

function Statistics() {
    this.clickedButtonIndex = this.horizontalCanvasPadding = this.verticalCanvasPadding = this.fontPadding = this.availableHeight = this.buttonHeight = 
        this.contentPadding = this.availableWidth = this.textWidth = this.textPadding = this.buttonMargin = this.height = this.width = 0;
    this.buttonLabels = ["Land", "Troops", "Interest", "Numbers", "Micro"];
    this.visible = false;
    this.activeSliderValue = -1;
    this.isDraggingSlider = false;
    this.pointerPosition = [0, 0];
    this.init = function() {
        this.visible = false;
        this.activeSliderValue = -1;
        this.isDraggingSlider = false;
        this.setCanvasVariables()
    };
    this.setCanvasVariables = function() {
        this.width = mainCanvasWidth < 1.618 * mainCanvasHeight ? mainCanvasWidth : 1.618 * mainCanvasHeight;
        this.width = Math.floor((isZoom && mainCanvasWidth < mainCanvasHeight ? 1 : isZoom ? .8 : mainCanvasWidth < mainCanvasHeight ? .65 : .5) * this.width);
        this.horizontalCanvasPadding = Math.floor(1 + .006 * this.width);
        this.width -= isZoom && mainCanvasWidth < mainCanvasHeight ? 2 * canvasPadding + this.horizontalCanvasPadding : 0;
        this.height = Math.floor(this.width / 1.618);
        this.buttonMargin = Math.floor(1 + .02 * this.width);
        this.contentPadding = this.textPadding = Math.floor(1 + .04 * this.width);
        this.buttonHeight = Math.floor(1 + .075 * this.width);
        this.fontPadding = Math.floor(this.width * (isZoom ? .028 : .02));
        this.fontPadding = 6 > this.fontPadding ? 6 : this.fontPadding;
        this.verticalCanvasPadding = Math.floor(.028 * this.width);
        this.verticalCanvasPadding = 6 > this.verticalCanvasPadding ? 6 : this.verticalCanvasPadding;
        this.availableHeight = this.height - 2 * this.contentPadding - this.buttonHeight;
        this.visible && this.updateSliderProperties()
    };
    this.mouseDown = function(xPos, yPos) {
        if (!this.visible) return false;
        var relX = xPos - divideFloor(prevClientWidth - this.width, 2);
        var relY = yPos - divideFloor(prevClientHeight - this.height, 2);
        if (relX < 0 || relY < 0 || relX >= this.width || relY >= this.height) {
            if (gameButtons.mouseDown(xPos, yPos) > 1) return true;
            this.end();
            return true;
        }
        if (relY < this.height - this.buttonHeight) {
            this.isDraggingSlider = true;
            this.activeSliderValue = (relX - 2 * this.buttonMargin - this.textWidth) / this.availableWidth;
            return true;
        }
        var buttonIndex = Math.floor(relX / (this.width / this.buttonLabels.length));
        buttonIndex = buttonIndex < 0 ? 0 : buttonIndex >= this.buttonLabels.length ? this.buttonLabels.length - 1 : buttonIndex;
        if (buttonIndex !== this.clickedButtonIndex) {
            this.clickedButtonIndex = buttonIndex;
            this.updateSliderProperties();
            mainHandler.canvasDirty = true;
        }
        return true;
    };
    this.printCoords = function() {
        var xPos = Math.floor((this.pointerPosition[0] + viewportX) / mainScaleFactor),
            yPos = Math.floor((this.pointerPosition[1] + viewportY) / mainScaleFactor);
        if (1 <= xPos && 1 <= yPos && xPos < currentMapWidth - 1 && yPos < currentMapHeight - 1) console.log(xPos + "," + yPos)
    };
    this.onPointermove = function(xPos, yPos) {
        this.pointerPosition[0] = xPos;
        this.pointerPosition[1] = yPos;
        if (this.visible && this.isDraggingSlider) {
            xPos -= divideFloor(prevClientWidth - this.width, 2);
            var oldSliderValue = this.activeSliderValue;
            this.activeSliderValue = (xPos - 2 * this.buttonMargin - this.textWidth) / this.availableWidth;
            if (0 <= this.activeSliderValue && 1 >= this.activeSliderValue || 0 <= oldSliderValue && 1 >= oldSliderValue) mainHandler.canvasDirty = true;
            return true
        }
        return false
    };
    this.onDragEnd = function() {
        this.isDraggingSlider && (this.isDraggingSlider = false)
    };
    this.toggleMenu = function() {
        this.visible ? this.end() : this.show()
    };
    this.show = function() {
        if (2 <= statisticNumbers.currentDataPointIndex) {
            this.visible = true;
            this.updateSliderProperties();
        }
    };
    this.end = function() {
        this.visible = false;
        this.activeSliderValue = -1
    };
    this.updateSliderProperties = function() {
        if (2 > this.clickedButtonIndex) this.textWidth = gameMessages.measureText(attackBars.splitNumber(statisticNumbers.max[this.clickedButtonIndex]), fontWeightBold + this.fontPadding + fontSizeArial)
        else if (2 === this.clickedButtonIndex) this.textWidth = gameMessages.measureText(gameStatistics.getPercentage(6, 2), fontWeightBold + this.fontPadding + fontSizeArial);
        this.availableWidth = this.width - 2 * this.buttonMargin - this.textWidth - this.textPadding;
    };
    this.updateRenderObject = function() {
        this.visible && this.updateSliderProperties()
    };
    this.drawCanvasImage = function() {
        this.visible && this.drawPrompt()
    };
    this.drawPrompt = function() {
        var startX = divideFloor(prevClientWidth - this.width, 2),
            startY = divideFloor(prevClientHeight - this.height, 2);
        mainCanvasCtx.setTransform(1, 0, 0, 1, startX, startY);
        mainCanvasCtx.fillStyle = blackMoreOpaque;
        mainCanvasCtx.fillRect(0, 0, this.width, this.height);
        this.drawPromptUI();
        mainCanvasCtx.strokeRect(0, 0, this.width, this.height);
        mainCanvasCtx.textAlign = rightAlign;
        mainCanvasCtx.font = fontWeightBold + this.fontPadding + fontSizeArial;
        if (0 === this.clickedButtonIndex) this.drawTroopsLandGraph(statisticNumbers.recordedLandValues, startX, startY)
        else if (1 === this.clickedButtonIndex) this.drawTroopsLandGraph(statisticNumbers.recordedTroopValues, startX, startY)
        else if (2 === this.clickedButtonIndex) this.drawInterestGraph(startX, startY)
        else if (3 === this.clickedButtonIndex) {
            this.drawAttackStatisticsNumbers(startX, startY);
            this.drawTroopStatisticsNumbers(startX, startY);
        }
        else if (4 == this.clickedButtonIndex) this.drawMicroNumbers(startX, startY);
        mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
    };
    this.drawPromptUI = function() {
        mainCanvasCtx.lineWidth = this.horizontalCanvasPadding;
        mainCanvasCtx.textBaseline = middleAlign;
        mainCanvasCtx.textAlign = centerAlign;
        mainCanvasCtx.strokeStyle = whiteRGB2;
        mainCanvasCtx.font = fontWeightBold + this.verticalCanvasPadding + fontSizeArial;
        var buttonSegmentWidth = this.width / this.buttonLabels.length;
        mainCanvasCtx.fillStyle = greenSemiTransparent;
        mainCanvasCtx.fillRect(this.clickedButtonIndex * buttonSegmentWidth, this.height - this.buttonHeight, buttonSegmentWidth, this.buttonHeight);
        mainCanvasCtx.fillStyle = whiteRGB2;
        for (var buttonIndex = this.buttonLabels.length - 1; 0 <= buttonIndex; buttonIndex--) {
            mainCanvasCtx.strokeRect(buttonIndex * buttonSegmentWidth, this.height - this.buttonHeight, buttonSegmentWidth, this.buttonHeight);
            mainCanvasCtx.fillText(this.buttonLabels[buttonIndex], (buttonIndex + .5) * buttonSegmentWidth, this.height - .46 * this.buttonHeight)
        }
    };
    this.drawTroopsLandGraph = function(recordedValues, startX, startY) {
        var maxValue = statisticNumbers.max[this.clickedButtonIndex], yScaleFactor, dpIndex;
        mainCanvasCtx.setTransform(1, 0, 0, 1, startX + 2 * this.buttonMargin + this.textWidth, startY + this.contentPadding);
        mainCanvasCtx.lineWidth = 2;
        yScaleFactor = this.availableHeight / Math.sqrt(maxValue);
        mainCanvasCtx.beginPath();
        mainCanvasCtx.moveTo(this.availableWidth, this.availableHeight - yScaleFactor * Math.sqrt(recordedValues[statisticNumbers.currentDataPointIndex - 1]));
        for (dpIndex = statisticNumbers.currentDataPointIndex - 2; 0 <= dpIndex; dpIndex--) mainCanvasCtx.lineTo(dpIndex * this.availableWidth / (statisticNumbers.currentDataPointIndex - 1), this.availableHeight - yScaleFactor * Math.sqrt(recordedValues[dpIndex]));
        mainCanvasCtx.stroke();
        recordedValues = this.drawMenuSymbol(recordedValues, yScaleFactor, .5);
        if (.95 > recordedValues) mainCanvasCtx.fillText(attackBars.splitNumber(maxValue), -this.buttonMargin, 0);
        if (.05 < Math.abs(recordedValues - .5)) mainCanvasCtx.fillText(attackBars.splitNumber(Math.floor(maxValue / 4)), -this.buttonMargin, Math.floor(this.availableHeight / 2));
        if (.05 < recordedValues) mainCanvasCtx.fillText("0", -this.buttonMargin, this.availableHeight)
    };
    this.drawInterestGraph = function(startX, startY) {
        mainCanvasCtx.setTransform(1, 0, 0, 1, startX + 2 * this.buttonMargin + this.textWidth, startY + this.contentPadding);
        mainCanvasCtx.lineWidth = 2;
        var yScaleFactor = this.availableHeight / statisticNumbers.max[this.clickedButtonIndex];
        mainCanvasCtx.beginPath();
        mainCanvasCtx.moveTo(this.availableWidth, this.availableHeight - yScaleFactor * statisticNumbers.recordedInterestValues[statisticNumbers.currentDataPointIndex - 1]);
        for (var dpIndex = statisticNumbers.currentDataPointIndex - 2; 0 <= dpIndex; dpIndex--) mainCanvasCtx.lineTo(dpIndex * this.availableWidth / (statisticNumbers.currentDataPointIndex - 1), this.availableHeight - yScaleFactor * statisticNumbers.recordedInterestValues[dpIndex]);
        mainCanvasCtx.stroke();
        yScaleFactor = this.drawMenuSymbol(statisticNumbers.recordedInterestValues, yScaleFactor, 1);
        var maxIRate = statisticNumbers.max[this.clickedButtonIndex] / 100;
        if (.95 > yScaleFactor) mainCanvasCtx.fillText(gameStatistics.getPercentage(maxIRate, 2), -this.buttonMargin, 0);
        if (.05 < Math.abs(yScaleFactor - .5)) mainCanvasCtx.fillText(gameStatistics.getPercentage(maxIRate / 2, 2), -this.buttonMargin, Math.floor(this.availableHeight / 2));
        if (.05 < yScaleFactor) mainCanvasCtx.fillText(gameStatistics.getPercentage(0, 2), -this.buttonMargin, this.availableHeight)
    };
    this.drawAttackStatisticsNumbers = function(startX, startY) {
        var leftIndex;
        mainCanvasCtx.setTransform(1, 0, 0, 1, startX + .34 * this.width, startY + 2 * this.contentPadding);
        mainCanvasCtx.textAlign = rightAlign;
        var lineHeight = this.height - 4 * this.contentPadding - this.buttonHeight;
        for (leftIndex = 7; 0 <= leftIndex; leftIndex--) mainCanvasCtx.fillText(statisticNumbers.statisticNumbersLabels[leftIndex], 0, leftIndex * lineHeight / 7);
        mainCanvasCtx.setTransform(1, 0, 0, 1, startX + .39 * this.width, startY + 2 * this.contentPadding);
        mainCanvasCtx.textAlign = leftAlign;
        leftIndex = statisticNumbers.numbers[1];
        mainCanvasCtx.fillText(gameStatistics.getPercentage(statisticNumbers.numbers[0] / (10 * (1 > leftIndex ? 1 : leftIndex)), 1), 0, 0);
        for (leftIndex = 6; 1 <= leftIndex; leftIndex--) mainCanvasCtx.fillText(statisticNumbers.numbers[leftIndex].toString(), 0, leftIndex * lineHeight / 7);
        mainCanvasCtx.fillText(gameStatistics.getPercentage(100 * (1 - land[myID] / statisticNumbers.numbers[7]), 0), 0, lineHeight)
    };
    this.drawTroopStatisticsNumbers = function(startX, startY) {
        var rightIndex;
        mainCanvasCtx.setTransform(1, 0, 0, 1, startX + .74 * this.width, startY + 2 * this.contentPadding);
        mainCanvasCtx.textAlign = rightAlign; 
        var lineHeight = this.height - 4 * this.contentPadding - this.buttonHeight;
        mainCanvasCtx.fillStyle = greenRGB;
        for (rightIndex = 2; 0 <= rightIndex; rightIndex--) mainCanvasCtx.fillText(statisticNumbers.statisticNumbersLabels[rightIndex + 8], 0, rightIndex * lineHeight / 9);
        mainCanvasCtx.fillStyle = limeGreenRGB;
        mainCanvasCtx.fillText(statisticNumbers.statisticNumbersLabels[11], 0, 3 * lineHeight / 9);
        mainCanvasCtx.fillStyle = redBrightRGB;
        for (rightIndex = 8; 4 <= rightIndex; rightIndex--) mainCanvasCtx.fillText(statisticNumbers.statisticNumbersLabels[rightIndex + 8], 0, rightIndex * lineHeight / 9);
        mainCanvasCtx.fillStyle = redLightRGB;
        mainCanvasCtx.fillText(statisticNumbers.statisticNumbersLabels[17], 0, 9 * lineHeight / 9);
        mainCanvasCtx.fillStyle = greenRGB;
        var overall = attackBars.splitNumber(statisticNumbers.numbers[8] + statisticNumbers.numbers[9] + statisticNumbers.numbers[10] + statisticNumbers.numbers[11]);
        mainCanvasCtx.setTransform(1, 0, 0, 1, startX + .79 * this.width + mainCanvasCtx.measureText(overall).width, startY + 2 * this.contentPadding);
        mainCanvasCtx.fillText(attackBars.splitNumber(statisticNumbers.numbers[8]), 0, 0);
        mainCanvasCtx.fillText(attackBars.splitNumber(statisticNumbers.numbers[9]), 0, 1 * lineHeight / 9);
        mainCanvasCtx.fillText(attackBars.splitNumber(statisticNumbers.numbers[10]), 0, 2 * lineHeight / 9);
        mainCanvasCtx.fillStyle = limeGreenRGB;
        mainCanvasCtx.fillText(overall, 0, 3 * lineHeight / 9);
        mainCanvasCtx.fillStyle = redBrightRGB;
        overall = statisticNumbers.numbers[13] - attacks.getTotalTroopsAttacking(myID);
        mainCanvasCtx.fillText(attackBars.splitNumber(statisticNumbers.numbers[12]), 0, 4 * lineHeight / 9);
        mainCanvasCtx.fillText(attackBars.splitNumber(overall), 0, 5 * lineHeight / 9);
        mainCanvasCtx.fillText(attackBars.splitNumber(statisticNumbers.numbers[14]), 0, 6 * lineHeight / 9);
        mainCanvasCtx.fillText(attackBars.splitNumber(statisticNumbers.numbers[15]), 0, 7 * lineHeight / 9);
        mainCanvasCtx.fillText(attackBars.splitNumber(statisticNumbers.numbers[16]), 0, 8 * lineHeight / 9);
        overall = statisticNumbers.numbers[12] + overall + statisticNumbers.numbers[14] + statisticNumbers.numbers[15] + statisticNumbers.numbers[16] + statisticNumbers.numbers[17];
        mainCanvasCtx.fillStyle = redLightRGB;
        mainCanvasCtx.fillText(attackBars.splitNumber(overall), 0, lineHeight);
        mainCanvasCtx.fillStyle = whiteRGB2
    };
    this.drawMenuSymbol = function(recordedValues, startX, startY) {
        if (0 > this.activeSliderValue || 1 < this.activeSliderValue) return .25;
        var sliderDpValue = this.activeSliderValue * (statisticNumbers.currentDataPointIndex - 1),
            sliderDpIndex = Math.floor(sliderDpValue),
            interpolatedValue = recordedValues[sliderDpIndex];
        interpolatedValue += (sliderDpValue - sliderDpIndex) * (recordedValues[sliderDpIndex < statisticNumbers.currentDataPointIndex - 1 ? sliderDpIndex + 1 : sliderDpIndex] - interpolatedValue);
        mainCanvasCtx.strokeStyle = whiteMoreTransparent;
        .04 < this.activeSliderValue && this.drawGuides(0, this.availableHeight - startX * Math.pow(interpolatedValue, startY), sliderDpValue * this.availableWidth / (statisticNumbers.currentDataPointIndex - 1), this.availableHeight - startX * Math.pow(interpolatedValue, startY));
        .04 < interpolatedValue / statisticNumbers.max[this.clickedButtonIndex] && this.drawGuides(sliderDpValue * this.availableWidth / (statisticNumbers.currentDataPointIndex - 1), this.availableHeight, sliderDpValue * this.availableWidth / (statisticNumbers.currentDataPointIndex - 1), this.availableHeight - startX * Math.pow(interpolatedValue, startY));
        mainCanvasCtx.fillStyle = redBrightMoreOpaque;
        mainCanvasCtx.beginPath();
        mainCanvasCtx.arc(sliderDpValue * this.availableWidth / (statisticNumbers.currentDataPointIndex - 1), this.availableHeight - startX * Math.pow(interpolatedValue, startY), 4, 0, 2 * Math.PI);
        mainCanvasCtx.fill();
        var sliderTickValue = this.activeSliderValue * mainHandler.getTickInterval();
        sliderTickValue = 0 === isAlive[myID] ? Math.floor(sliderTickValue * gameResultBox.ticksElapsedWhenDeath) : Math.floor(sliderTickValue * mainHandler.getTicksElapsed());
        mainCanvasCtx.fillStyle = whiteRGB2;
        mainCanvasCtx.fillText(1 === startY ? gameStatistics.getPercentage(interpolatedValue / 100, 2) : attackBars.splitNumber(Math.floor(interpolatedValue)), -this.buttonMargin, this.availableHeight - startX * Math.pow(interpolatedValue, startY));
        mainCanvasCtx.textAlign = centerAlign;
        mainCanvasCtx.fillText(gameStatistics.getFormattedTime(sliderTickValue), sliderDpValue * this.availableWidth / (statisticNumbers.currentDataPointIndex - 1), this.availableHeight + this.fontPadding - (isZoom ? 2 : 0));
        mainCanvasCtx.textAlign = rightAlign;
        return startX * Math.pow(interpolatedValue, startY) / this.availableHeight
    };
    this.drawMicroNumbers = function(startX, startY) {
        var leftIndex, cellHeight = (this.height - this.buttonHeight) / 6, cellWidth = this.width / 5;
        mainCanvasCtx.setTransform(1, 0, 0, 1, startX, startY);
        mainCanvasCtx.textAlign = centerAlign;
        mainCanvasCtx.fillStyle = redBrightRGB;
        for (leftIndex = 4; 0 <= leftIndex; leftIndex--) mainCanvasCtx.fillText(statisticNumbers.microNumbersLabels[leftIndex], cellWidth * .5, cellHeight * (leftIndex + 1.5));
        for (leftIndex = 3; 0 <= leftIndex; leftIndex--) mainCanvasCtx.fillText(statisticNumbers.microNumbersLabels[5 + leftIndex], cellWidth * (1.5 + leftIndex), cellHeight * .5);
        mainCanvasCtx.fillStyle = greenRGB;
        for (leftIndex = 4; 0 <= leftIndex; leftIndex--) mainCanvasCtx.fillText(0 != statisticNumbers.troopsAtTimings[leftIndex] ? statisticNumbers.landAtTimings[leftIndex] : "N/A", cellWidth * 1.5, cellHeight * (leftIndex + 1.5))
        for (leftIndex = 4; 0 <= leftIndex; leftIndex--) mainCanvasCtx.fillText(0 != statisticNumbers.troopsAtTimings[leftIndex] ? statisticNumbers.troopsAtTimings[leftIndex] : "N/A", cellWidth * 2.5, cellHeight * (leftIndex + 1.5))
        for (leftIndex = 4; 0 <= leftIndex; leftIndex--) mainCanvasCtx.fillText("N/A", cellWidth * 3.5, cellHeight * (leftIndex + 1.5))
        for (leftIndex = 4; 0 <= leftIndex; leftIndex--) mainCanvasCtx.fillText(0 != statisticNumbers.troopsAtTimings[leftIndex] ? Math.floor(statisticNumbers.troopsAtTimings[leftIndex] + 2.5 * statisticNumbers.landAtTimings[leftIndex]) : "N/A", cellWidth * 4.5, cellHeight * (leftIndex + 1.5));
    }
    this.drawGuides = function(startX, startY, endX, endY) {
        mainCanvasCtx.beginPath();
        mainCanvasCtx.moveTo(startX, startY);
        mainCanvasCtx.lineTo(endX, endY);
        mainCanvasCtx.stroke()
    }
}

function TeamColors() {
    this.piechartColors = "rgba(130,130,130,0.88) rgba(130,12,12,0.88) rgba(12,130,12,0.88) rgba(12,12,130,0.88) rgba(130,130,12,0.88) rgba(130,12,130,0.88) rgba(12,130,130,0.88) rgba(130,130,130,0.88) rgba(0,0,0,0.88)".split(" ");
    this.leaderboardColors = [whiteRGB2, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(240,25,240)", "rgb(25,240,240)", whiteRGB2, "rgb(170,170,170)"];
    this.a5o = [whiteRGB2, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", whiteRGB2, blackRGB];
    this.a5p = [blackRGB, whiteRGB2, whiteRGB2, whiteRGB2, blackRGB, blackRGB, blackRGB, blackRGB, whiteRGB2]; //both not used
    this.impostorfontColors = ["rgba(255,255,255,", "rgba(0,0,0,", "rgba(170,170,170,", "rgba(85,85,85,"];
    this.fontColors = ["rgb(255,255,255)", "rgb(0,0,0)", "rgb(170,170,170)", "rgb(85,85,85)"];
    this.colorLabels = "White Red Green Blue Yellow Magenta Cyan White Black".split(" ");
    this.auraColors = [
        [255, 255, 255, 180],
        [255, 0, 0, 180],
        [0, 255, 0, 180],
        [50, 50, 255, 180],
        [255, 255, 0, 180],
        [255, 0, 255, 180],
        [0, 255, 255, 180],
        [255, 255, 255, 180],
        [0, 0, 0, 180]
    ];
    var allTeamColors = [ //array compares each player's color value to the color values of the available team colors and assign the player to the closest matching team
        [255, 255, 255],
        [255, 0, 0],
        [0, 255, 0],
        [0, 0, 255],
        [255, 255, 0],
        [255, 0, 255],
        [0, 255, 255],
        [255, 255, 255],
        [0, 0, 0]
    ];
    this.teamIDs = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var clanTags, clanTagOfPlayerIDs; //stores the Clan Tag for each Player ID
    this.init = function(param_playerInfo) {
        this.teamArray = new Uint8Array(maxEntities);
        this.setDefaultTeamIDs();
        if (teamGame) {
            if (customJSON.isCustomJSON && customJSON.data.teamArray) this.setCustomTeams()
            else if (9 === gamemode) this.setZombieTeams()
            else this.update(param_playerInfo)
        }
    };
    this.setCustomTeams = function() {
        this.teamIDs = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        for (var entityIndex = 0; entityIndex < entityCount; entityIndex++) this.teamArray[entityIndex] = customJSON.data.teamArray[entityIndex]
    };
    this.setDefaultTeamIDs = function() {
        for (var teamIndex = this.teamIDs.length - 1; 0 <= teamIndex; teamIndex--) this.teamIDs[teamIndex] = teamIndex;
        clanTags = [];
        clanTagOfPlayerIDs = []
    };
    this.setZombieTeams = function() {
        var entityIndex;
        for (entityIndex = playerCount + zombieSettings.helperBotCount - 1; 0 <= entityIndex; entityIndex--) this.teamArray[entityIndex] = 1;
        for (entityIndex = playerCount + zombieSettings.helperBotCount; entityIndex < maxEntities; entityIndex++) this.teamArray[entityIndex] = 2;
        this.teamIDs[1] = 7;
        this.teamIDs[2] = 8
    };
    this.update = function(param_playerInfo) {
        var playersTeamColor = new Uint8Array(playerCount),
            players2ndTeamColor = new Uint8Array(playerCount),
            teamColorScore = new Uint16Array(8), //the teams with the highest scores based on players colors will be chosen
            playersPerTeam = new Uint16Array(this.teamIDs.length);
        this.setPlayerTeamColor(param_playerInfo, playersTeamColor, players2ndTeamColor, teamColorScore);
        this.sortTeamColorsByScore(teamColorScore);
        if (!singleplayer) this.distributeClanPlayersToTeams(playersPerTeam, playersTeamColor, players2ndTeamColor);
        this.distributeOtherPlayersToTeams(playersTeamColor, players2ndTeamColor, playersPerTeam);
        if (singleplayer) this.distributeBotsSingle()
        else this.distributeBotsMulti()
    };
    this.setPlayerTeamColor = function(param_playerInfo, playersTeamColor, players2ndTeamColor, teamColorScore) {
        var playerIndex, teamIndex, teamsCount = this.teamIDs.length - 1,
            comparedColors = new Uint16Array(teamsCount); //the color assigned is the one with the lowest value
        for (playerIndex = playerCount - 1; 0 <= playerIndex; playerIndex--) {
            for (teamIndex = teamsCount; 1 <= teamIndex; teamIndex--) {
                comparedColors[teamIndex - 1] = Math.abs(4 * param_playerInfo[playerIndex].color[0] - allTeamColors[teamIndex][0]) + Math.abs(4 * param_playerInfo[playerIndex].color[1] - allTeamColors[teamIndex][1]) + Math.abs(4 * param_playerInfo[playerIndex].color[2] - allTeamColors[teamIndex][2]);
            }
            var lowestComparedValue = 768;
            for (teamIndex = teamsCount - 1; teamIndex >= 0; teamIndex--) {
                var cyclicIndex = (teamIndex + playerIndex) % teamsCount;
                if (comparedColors[cyclicIndex] < lowestComparedValue) {
                    lowestComparedValue = comparedColors[cyclicIndex];
                    playersTeamColor[playerIndex] = cyclicIndex;
                }
            }
            teamColorScore[playersTeamColor[playerIndex]] += 4;
            lowestComparedValue = 768;
            for (teamIndex = teamsCount - 1; teamIndex >= 0; teamIndex--) {
                cyclicIndex = (teamIndex + playerIndex) % teamsCount;
                if (comparedColors[cyclicIndex] < lowestComparedValue && cyclicIndex !== playersTeamColor[playerIndex]) {
                    lowestComparedValue = comparedColors[cyclicIndex];
                    players2ndTeamColor[playerIndex] = cyclicIndex;
                }
            }
            teamColorScore[players2ndTeamColor[playerIndex]]++
        }
    };
    this.sortTeamColorsByScore = function(teamColorScore) { //sorting teamsIDs from the color with the highest score to the color with the lowest
        var teamIndex, currentTeamIndex, numTeams = this.teamIDs.length - 1;
        for (teamIndex = numTeams; 0 <= teamIndex; teamIndex--) this.teamIDs[teamIndex] = teamIndex;
        for (teamIndex = numTeams - 1; 0 <= teamIndex; teamIndex--) teamColorScore[teamIndex]++; //adding 1 to the score so that every team has score != 0 and bigger then the score of index 0
        for (teamIndex = 1; teamIndex <= numTeams; teamIndex++) { //sorts the color scores and resets their scores to 0
            var highestScoreIndex = 0;
            for (currentTeamIndex = 1; currentTeamIndex < numTeams; currentTeamIndex++) 
            if (teamColorScore[currentTeamIndex] > teamColorScore[highestScoreIndex]) highestScoreIndex = currentTeamIndex;
            teamColorScore[highestScoreIndex] = 0;
            this.teamIDs[teamIndex] = highestScoreIndex + 1
        }
    };
    this.distributeClanPlayersToTeams = function(playersPerTeam, playersTeamColor, players2ndTeamColor) {
        var numTeams = this.teamIDs.length - 1,
            teamColorScore = new Uint16Array(numTeams),
            hasClanTag = [],
            playerID = playerCount - 1;
        loop: for (; 0 <= playerID; playerID--) {
            var tempPlayerID = playerID;
            var bracketIndex = tempNicknames[tempPlayerID].indexOf("[");

            if (0 > bracketIndex) clanTag = null, bracketIndex = null;
            else {
                var closeBracketIndex = tempNicknames[tempPlayerID].indexOf("]");
                if (1 < closeBracketIndex - bracketIndex && 8 >= closeBracketIndex - bracketIndex) {
                    var clanTag = tempNicknames[tempPlayerID].substring(bracketIndex + 1, closeBracketIndex).toUpperCase().trim();
                } 
                else 
                clanTag = null;
            }          
            if (null !== clanTag) {
                for (let j = clanTags.length - 1; 0 <= j; j--)
                    if (clanTag === clanTags[j]) {
                        clanTagOfPlayerIDs[j].push(playerID);
                        continue loop
                    } 
                clanTags.push(clanTag);
                hasClanTag.push(false);
                clanTagOfPlayerIDs.push([]);
                clanTagOfPlayerIDs[clanTags.length - 1].push(playerID)
            }
        } 
        for (let numClanTags = clanTags.length - 1; 0 <= numClanTags; numClanTags--) {
            clanTagIndex = -1;
            var teamIndex1;
            for (teamIndex1 = clanTags.length - 1; 0 <= teamIndex1; teamIndex1--) {
                if (!hasClanTag[teamIndex1] && (-1 === clanTagIndex || clanTagOfPlayerIDs[teamIndex1].length > clanTagOfPlayerIDs[clanTagIndex].length)) {//It sets clanTagIndex to the index of the first unused clan tag that it finds. If it finds more than one unused clan tag, it chooses the one that has the most players associated with it.
                    clanTagIndex = teamIndex1;
                }
            }
            for (teamIndex1 = numTeams - 1; 0 <= teamIndex1; teamIndex1--) teamColorScore[teamIndex1] = 1;//sets the score of each team to 1
            for (teamIndex1 = clanTagOfPlayerIDs[clanTagIndex].length - 1; 0 <= teamIndex1; teamIndex1--) {//assigns score to each team based on the players that have the clan tag with the most members
                teamColorScore[playersTeamColor[clanTagOfPlayerIDs[clanTagIndex][teamIndex1]]] += 3;
                teamColorScore[players2ndTeamColor[clanTagOfPlayerIDs[clanTagIndex][teamIndex1]]]++;
            }
            for (let teamIndex1 = numTeams - 1; 0 <= teamIndex1; teamIndex1--) {//calculates colorscore for each clan tag and assigns the players to that color
                var highestScoreTeamIndex = clanTagIndex % numTeams;
                for (let teamIndex2 = numTeams - 1; 0 <= teamIndex2; teamIndex2--) {//if there is a tie, then the color with the lowest amount of players will be chosen
                    if (teamColorScore[teamIndex2] > teamColorScore[highestScoreTeamIndex]) highestScoreTeamIndex = teamIndex2;
                }
                var fewestPlayersTeamIndex = -1;
                for (let teamIndex2 = teamCount; 0 < teamIndex2; teamIndex2--) {
                    if (this.teamIDs[teamIndex2] === highestScoreTeamIndex + 1) {
                        fewestPlayersTeamIndex = teamIndex2;
                        break;
                    }
                }
                teamColorScore[highestScoreTeamIndex] = 0;
                if (-1 !== fewestPlayersTeamIndex) {
                    highestScoreTeamIndex = 0;
                    for (let teamIndex2 = teamCount; 0 < teamIndex2; teamIndex2--) {//if the color with the most score is also the color with the most players, it will choose the second color with highest score
                        if (playersPerTeam[fewestPlayersTeamIndex] > playersPerTeam[teamIndex2]) highestScoreTeamIndex++;
                    }
                    if (highestScoreTeamIndex !== teamCount - 1) {
                        for (let clanPlayerIndex = clanTagOfPlayerIDs[clanTagIndex].length - 1; 0 <= clanPlayerIndex; clanPlayerIndex--) {
                            playersPerTeam[fewestPlayersTeamIndex]++;
                            this.teamArray[clanTagOfPlayerIDs[clanTagIndex][clanPlayerIndex]] = fewestPlayersTeamIndex;
                        }
                        break
                    }
                }
            } hasClanTag[clanTagIndex] = true;
        }
    };
    this.distributeOtherPlayersToTeams = function(playersTeamColor, players2ndTeamColor, playersPerTeam) {
        var teamIndex, playerIndex = this.teamIDs.length - 1,
            idealNumOfPlayers = divideFloor(playerCount, teamCount),
            teamIDMap = new Uint8Array(playerIndex + 1);
        if (playerCount % teamCount > 0) idealNumOfPlayers++;
        for (teamIndex = playerIndex; teamIndex >= 1; teamIndex--) teamIDMap[this.teamIDs[teamIndex]] = teamIndex;
        for (playerIndex = 0; playerIndex < playerCount; playerIndex++) {
            teamIndex = teamIDMap[playersTeamColor[playerIndex] + 1];
            if (this.teamArray[playerIndex] === 0 && teamIndex <= teamCount && playersPerTeam[teamIndex] < idealNumOfPlayers) {
                playersPerTeam[teamIndex]++;
                this.teamArray[playerIndex] = teamIndex;
            }
        }
        for (playerIndex = 0; playerIndex < playerCount; playerIndex++) {
            teamIndex = teamIDMap[players2ndTeamColor[playerIndex] + 1];
            if (this.teamArray[playerIndex] === 0 && teamIndex <= teamCount && playersPerTeam[teamIndex] < idealNumOfPlayers) {
                playersPerTeam[teamIndex]++;
                this.teamArray[playerIndex] = teamIndex;
            }
        }
        for (teamIndex = teamCount; teamIndex >= 1; teamIndex--) {
            for (playerIndex = playerCount - 1; playerIndex >= 0 && playersPerTeam[teamIndex] < idealNumOfPlayers; playerIndex--) {
                if (this.teamArray[playerIndex] === 0) {
                    playersPerTeam[teamIndex]++;
                    this.teamArray[playerIndex] = teamIndex;
                }
            }
        }
    };    
    this.distributeBotsSingle = function() {
        var teamIndex, maxEntitiesPerTeam = new Uint16Array(teamCount);
        maxEntitiesPerTeam[teamCount - 1] = maxEntities;
        for (teamIndex = teamCount - 2; teamIndex >= 0; teamIndex--) maxEntitiesPerTeam[teamIndex] = singleSettings.botSettings[teamIndex].group;
        maxEntitiesPerTeam[0]--;
        var currentTeam = maxEntitiesPerTeam[0] === 0 ? 1 : 0;
        for (teamIndex = playerCount; teamIndex < maxEntities; teamIndex++) {
            this.teamArray[teamIndex] = currentTeam + 1;
            maxEntitiesPerTeam[currentTeam]--;
            if (maxEntitiesPerTeam[currentTeam] <= 0) currentTeam++;
        }
    };    
    this.distributeBotsMulti = function() {
        for (var botIndex = playerCount; botIndex < maxEntities; botIndex++){
            if (typeof(modHandler) == "object" && modHandler.neutralBots) this.teamArray[botIndex] = 0;
            else this.teamArray[botIndex] = 1 + botIndex % teamCount;
        }
    };
    this.getClanTagWinningTeam = function(winningTeam) {
        if (singleplayer) return [512, ""];
        var playerIndex, clanTagIndex, winner = -1, winningClanIndex = -1;
        for (clanTagIndex = clanTags.length - 1; 0 <= clanTagIndex; clanTagIndex--) {
            for (playerIndex = clanTagOfPlayerIDs[clanTagIndex].length - 1; 0 <= playerIndex && this.teamIDs[this.teamArray[clanTagOfPlayerIDs[clanTagIndex][playerIndex]]] === winningTeam; playerIndex--) {
                if (-1 === winner || landIDOrder[clanTagOfPlayerIDs[clanTagIndex][playerIndex]] < landIDOrder[winner]){
                    winner = clanTagOfPlayerIDs[clanTagIndex][playerIndex];
                    winningClanIndex = clanTagIndex;
                }
            }
        }
        return -1 === winner || 0 === isAlive[winner] ? [512, ""] : [winner, clanTags[winningClanIndex]]
    }
}

function updateAuthorXYMinMax() {
    for (var xCoord, yCoord, bIndex = lastBorderLength - 1; 0 <= bIndex; bIndex--) {
        xCoord = divideFloor(lastBorderLand[bIndex], 4) % currentMapWidth;
        yCoord = divideFloor(lastBorderLand[bIndex], 4 * currentMapWidth);
        xMin[lastAuthorID] = getMin(xMin[lastAuthorID], xCoord);
        yMin[lastAuthorID] = getMin(yMin[lastAuthorID], yCoord);
        xMax[lastAuthorID] = getMax(xMax[lastAuthorID], xCoord);
        yMax[lastAuthorID] = getMax(yMax[lastAuthorID], yCoord);
    }
}

function updateEditingBorderPixels() {
    var advancesLength = potentialBorderAdvances[lastAuthorID].length, side;
    var bIndex = advancesLength - 1;
    loop: for (; 0 <= bIndex; bIndex--) {
        for (side = 3; 0 <= side; side--) {
            var pIndex = potentialBorderAdvances[lastAuthorID][bIndex] + offset[side];
            if (pixel.isNeutral(pIndex) || pixel.entityControlled(pIndex) && pixel.getOwner(pIndex) !== lastAuthorID) {
                pixel.changeToMovingPixel(potentialBorderAdvances[lastAuthorID][bIndex], lastAuthorID);
                continue loop
            }
        }
        potentialBorderAdvances[lastAuthorID][bIndex] = potentialBorderAdvances[lastAuthorID][advancesLength - 1];
        potentialBorderAdvances[lastAuthorID].pop();
        advancesLength--
    }
}

function updatePixelsBorderingTerrain() {
    var landBorderLength = landBorderPixels[lastAuthorID].length,
        side, pixelBordersMountain, bIndex = landBorderLength - 1;
    loop: for (; 0 <= bIndex; bIndex--) {
        var pixelBordersWater = pixelBordersMountain = false;
        for (side = 3; 0 <= side; side--) {
            var pIndex = landBorderPixels[lastAuthorID][bIndex] + offset[side];
            if (pixel.canTake(pIndex, lastAuthorID)) continue loop;
            pixelBordersWater = pixelBordersWater || pixel.isWater(pIndex);
            pixelBordersMountain = pixelBordersMountain || pixel.isMountain(pIndex)
        }
        if (pixelBordersWater) waterBorderPixels[lastAuthorID].push(landBorderPixels[lastAuthorID][bIndex])
        else if (pixelBordersMountain) mountainBorderPixels[lastAuthorID].push(landBorderPixels[lastAuthorID][bIndex])
        else pixel.changeToInnerPixel(landBorderPixels[lastAuthorID][bIndex], lastAuthorID);
        landBorderPixels[lastAuthorID][bIndex] = landBorderPixels[lastAuthorID][landBorderLength - 1];
        landBorderPixels[lastAuthorID].pop();
        landBorderLength--
    }
}

function deductTargetLand() {
    land[lastTargetID] -= lastBorderLength
}

function removeTargetTerrainBorderPixels(terrainBorderPixels) {
    for (var borderLength = terrainBorderPixels.length, bIndex = borderLength - 1; 0 <= bIndex; bIndex--) {
        if (!pixel.strongIsOwner(lastTargetID, terrainBorderPixels[bIndex]))  {
            terrainBorderPixels[bIndex] = terrainBorderPixels[borderLength - 1];
            terrainBorderPixels.pop();
            borderLength--
        }
    }
}

function removeTakenPixelsInPotentialAdvances(potentialAdvances) {
    for (var borderLength = potentialAdvances.length, bIndex = borderLength - 1; 0 <= bIndex; bIndex--) {
        if (!pixel.strongIsOwner(lastTargetID, potentialAdvances[bIndex]) && pixel.canOwn(potentialAdvances[bIndex])) {
            potentialAdvances[bIndex] = potentialAdvances[borderLength - 1];
            potentialAdvances.pop();
            borderLength--;
        }
    }
}

function constructNewBorderTerrain(terrainBorderPixels) {
    var borderLength = terrainBorderPixels.length, side, pIndex, bIndex = borderLength - 1
    for (; 0 <= bIndex; bIndex--)
        for (side = 3; 0 <= side; side--)
            if (pIndex = terrainBorderPixels[bIndex] + offset[side], pixel.canTake(pIndex, lastTargetID)) {
                landBorderPixels[lastTargetID].push(terrainBorderPixels[bIndex]);
                terrainBorderPixels[bIndex] = terrainBorderPixels[borderLength - 1];
                terrainBorderPixels.pop();
                borderLength--;
                break
            }
}

function convertLastInnerPixelsToBorder() {
    for (var side, pIndex, bIndex = lastBorderLength - 1; 0 <= bIndex; bIndex--) {
        for (side = 3; 0 <= side; side--) {
            pIndex = lastBorderLand[bIndex] + offset[side];
            if (pixel.isOwner(lastTargetID, pIndex) && pixel.isInnerPixel(pIndex)) {
                landBorderPixels[lastTargetID].push(pIndex);
                pixel.changeToBorderPixel(pIndex, lastTargetID);
            }
        }
    }
}

function updateTargetXYMinMax() {
    var cIndex;
    loop: for (; yMin[lastTargetID] < yMax[lastTargetID];) {
        for (cIndex = xMax[lastTargetID]; cIndex >= xMin[lastTargetID]; cIndex--)
            if (pixel.strongIsOwner(lastTargetID, 4 * (yMin[lastTargetID] * currentMapWidth + cIndex))) break loop;
        yMin[lastTargetID]++
    }
    loop: for (; yMin[lastTargetID] < yMax[lastTargetID];) {
        for (cIndex = xMax[lastTargetID]; cIndex >= xMin[lastTargetID]; cIndex--)
            if (pixel.strongIsOwner(lastTargetID, 4 * (yMax[lastTargetID] * currentMapWidth + cIndex))) break loop;
        yMax[lastTargetID]--
    }
    loop: for (; xMin[lastTargetID] < xMax[lastTargetID];) {
        for (cIndex = yMax[lastTargetID]; cIndex >= yMin[lastTargetID]; cIndex--)
            if (pixel.strongIsOwner(lastTargetID, 4 * (cIndex * currentMapWidth + xMin[lastTargetID]))) break loop;
        xMin[lastTargetID]++
    }
    loop: for (; xMin[lastTargetID] < xMax[lastTargetID];) {
        for (cIndex = yMax[lastTargetID]; cIndex >= yMin[lastTargetID]; cIndex--)
            if (pixel.strongIsOwner(lastTargetID, 4 * (cIndex * currentMapWidth + xMax[lastTargetID]))) break loop;
        xMax[lastTargetID]--
    }
}

function isNotTeamate(player1, player2) {
    return 0 === teamColors.teamArray[player1] || teamColors.teamArray[player1] !== teamColors.teamArray[player2]
}

function target1BordersAttackingTarget2(authorID, targetID) {
    var aIndex, currentAttackCount = attacks.getCurrentAttackCount(authorID);
    for (aIndex = 0; aIndex < currentAttackCount; aIndex++)
        if (0 === attacks.getBoatIDFromIndex(authorID, aIndex)) {
            var targetID = attacks.getTargetFromIndex(authorID, aIndex);
            if (targetID === maxEntities) {
                if (targetID === maxEntities) break;
                if (bordersNeutral(targetID)) return true
            } else if (targetID === maxEntities) {
                if (bordersNeutral(targetID)) return true
            } else if (bordersTarget(targetID, targetID)) return true
        } return false
}

function bordersNeutral(id) {
    var side, bIndex, borderLength = landBorderPixels[id].length;
    for (side = 3; 0 <= side; side--) {
        var mcDir = offset[side];
        for (bIndex = 0; bIndex < borderLength; bIndex++)
            if (pixel.isNeutral(landBorderPixels[id][bIndex] + mcDir)) return true
    }
    return false
}

function bordersTarget(authorID, targetID) {
    var side;
    var borderLength1 = landBorderPixels[authorID].length;
    var borderLength2 = landBorderPixels[targetID].length;
    if (borderLength2 < borderLength1) {
        borderLength1 = authorID;
        authorID = targetID;
        targetID = borderLength1;
        borderLength1 = borderLength2
    };
    for (side = 3; 0 <= side; side--) {
        var mcDir = offset[side];
        for (var bIndex = 0; bIndex < borderLength1; bIndex++) {
            var pIndex = landBorderPixels[authorID][bIndex] + mcDir;
            if (pixel.entityControlled(pIndex) && pixel.getOwner(pIndex) === targetID) return true
        }
    }
    return false
}

function MainHandler() {
    function animate() {
        mainHandler.time = performance.now();
        mainHandler.updateHandler();
        window.requestAnimationFrame(animate);
    }

    function checkIdle() {
        var currentDelta = performance.now();
        if (mainHandler.time + 1500 < currentDelta) {
            mainHandler.time = currentDelta;
            mainHandler.updateHandler();
        }
    }
    this.canvasDirty = false;
    this.multiplayerHandler = this.singleplayerHandler = this.updateHandler = null;
    this.time = 0;
    this.idleInterval = -1;
    this.init = function() {
        window.requestAnimationFrame(animate);
        this.time = performance.now()
    };
    this.onVisibilityHidden = function() {
        if (1 === clientStatus && singleplayer && !gameButtons.menuVisible && !inSpawn) gameButtons.toggleMenu();
        if (-1 === this.idleInterval) this.idleInterval = setInterval(checkIdle, 2E3)
    };
    this.onVisibilityVisible = function() {
        this.canvasDirty = true;
        if (-1 !== this.idleInterval) {
            clearInterval(this.idleInterval);
            this.idleInterval = -1;
        }
    };
    this.setupMainUpdateHandler = function() {
        this.updateHandler = this.mainUpdateHandler;
        this.singleplayerHandler = null;
        this.canvasDirty = true
    };
    this.setupSingleplayerHandler = function() {
        this.singleplayerHandler = new SingleplayerHandler;
        this.updateHandler = this.singleplayerUpdateHandler
    };
    this.setupMultiplayerHandler = function() {
        this.multiplayerHandler = new MultiplayerHandler;
        this.multiplayerHandler.init();
        this.updateHandler = this.multiplayerUpdateHandler
    };
    this.mainUpdateHandler = function() {
        nextContestBar.update();
        preLobby.update();
        canvasManager.update();
        wsManager.update();
        setGameOrigin.processGameInitData();
        mainLeaderboard.update();
        if (this.canvasDirty) {
            this.canvasDirty = false;
            gameStateManager.drawCanvasImage();
        }
    };
    this.singleplayerUpdateHandler = function() {
        this.singleplayerHandler.update();
    };
    this.multiplayerUpdateHandler = function() {
        this.multiplayerHandler.update()
    };
    this.getTicksElapsed = function() {
        return singleplayer || customJSON.isCustomJSON && customJSON.data.replay ? this.singleplayerHandler.tick : this.multiplayerHandler.tick
    };
    this.getTickInterval = function() {
        return 56;
    }
}

function SingleplayerHandler() {
    this.time = mainHandler.time;
    this.updateInterval = Math.round(56 / (customJSON.isCustomJSON && customJSON.data.replay ? Math.pow(10, (attackRatioBar.getFlooredRatio()-500)/500): 1));
    this.bigTickInterval = 7;
    this.tick = this.clientTick = this.spawnTick = 0;
    this.a6Z = false; //unused
    this.update = function() {
        canvasManager.update();
        if (inSpawn) {
            updatedPlayerLabels();
            if (customJSON.isCustomJSON && customJSON.data.replay) {
                if (0 === this.clientTick) {
                    if (mainHandler.time >= this.time) {
                        this.time += this.updateInterval * Math.floor(1 + (mainHandler.time - this.time) / this.updateInterval);
                        if (2 !== clientStatus) {
                            if (gameButtons.menuVisible || mainSettings.buttons[4].buttonClass.visible || !replayLogger.underReplay) clientTick1()
                            else if (0 == --this.bigTickInterval) {
                                replayLogger.update();
                                this.bigTickInterval = 7;
                                gameStatistics.receivedSpawnActions(this.spawnTick);
                                if (this.spawnTick === spawnTime) {
                                    spawn.update();
                                    this.tick = this.clientTick = this.spawnTick = 0;
                                    this.time = mainHandler.time;
                                } else {
                                    this.spawnTick++;
                                    infoRenderer.setPlayerLabels();
                                    infoRenderer.drawCanvas();
                                    mapUpdate.updateMapCanvas();
                                }
                            }
                        }
                        this.clientTick++
                    }
                } else {
                    if (gameButtons.menuVisible || mainSettings.buttons[4].buttonClass.visible || !replayLogger.underReplay) updatedPlayerLabels()
                    else {
                        mainHandler.canvasDirty = true;
                        drawCanvases();
                    }
                    this.clientTick = 0;
                }
            }
        } else {
            if (0 === this.clientTick) {
                if (mainHandler.time >= this.time) {
                    this.time += this.updateInterval * Math.floor(1 + (mainHandler.time - this.time) / this.updateInterval);
                    if (2 !== clientStatus) {
                        if (gameButtons.menuVisible || mainSettings.buttons[4].buttonClass.visible || customJSON.isCustomJSON && customJSON.data.replay && !replayLogger.underReplay) clientTick1()
                        else {
                            gameTick();
                            this.tick++;
                            mapUpdate.updateMapCanvas();
                        }
                    }
                    this.clientTick++
                }
            } else {
                if (gameButtons.menuVisible || mainSettings.buttons[4].buttonClass.visible) updatedPlayerLabels()
                else {
                    mainHandler.canvasDirty = true;
                    drawCanvases();
                }
                this.clientTick = 0;
            }
        }
        clientTick2();
        if (mainHandler.canvasDirty) {
            mainHandler.canvasDirty = false;
            drawCanvasImages();
        }
    }
}

function MultiplayerHandler() {
    this.time = mainHandler.time;
    this.updateInterval = 56;
    this.packetsReceived = this.tick = this.clientTick = 0;
    this.latestPacket = null;
    this.packetInterval = 7;
    var packetID;
    this.init = function() {
        this.packetsReceived = 0;
        this.latestPacket = [];
        packetID = this.tick = this.clientTick = 0
    };
    this.receivedActions = function(array) {
        if (inSpawn) this.receivedSpawnActions(array);
        else {
            this.latestPacket.push(array);
            if (2 === clientStatus) {
                for (var packetIndex = 0; packetIndex < this.latestPacket.length; packetIndex++) {
                    dataDecoder.decodeActions(this.latestPacket[packetIndex], packetID);
                    packetID = (packetID + 1) % 8;
                }
                this.latestPacket = []
            }
        }
    };
    this.receivedSpawnActions = function(array) {
        dataDecoder.decodeActions(array, packetID);
        packetID = (packetID + 1) % 8;
        gameStatistics.receivedSpawnActions(this.packetsReceived);
        if (this.packetsReceived === spawnTime) {
            spawn.update();
            this.tick = this.clientTick = this.packetsReceived = 0;
            this.time = mainHandler.time;
        } else {
            this.packetsReceived++;
            infoRenderer.setPlayerLabels();
            infoRenderer.drawCanvas();
            mapUpdate.updateMapCanvas();
            if (typeof(modHandler) == 'object') modHandler.scriptSpawnTick()
        }
    };
    this.update = function() {
        canvasManager.update();
        if (inSpawn) {
            mainHandler.canvasDirty = gameStatistics.receivedSpawnActions(-1) || mainHandler.canvasDirty;
            updatedPlayerLabels();
        } else if (0 === this.clientTick) {
            if (mainHandler.time >= this.time) {
                this.time += this.updateInterval * Math.floor(1 + (mainHandler.time - this.time) / this.updateInterval);
                if (2 === clientStatus) clientTick1() 
                else this.latencyResync()
                this.clientTick++;
            }
        } else {
            mainHandler.canvasDirty = true;
            drawCanvases();
            this.clientTick = 0;
        }
        clientTick2();
        mainHandler.canvasDirty && (mainHandler.canvasDirty = false, drawCanvasImages())
    };
    this.latencyResync = function() {
        if (this.tick !== 7 * this.packetsReceived) {
            gameTick();
            this.tick++;
            mapUpdate.updateMapCanvas();
        } else {
            for (var processedPackets = false; this.hasMorePackets();) {
                processedPackets = true;
                gameTick();
                this.tick++;
                if (0 < this.latestPacket.length) {
                    for (var n = this.packetInterval - 2; 0 <= n; n--) {
                        gameTick();
                        this.tick++;
                    }
                } else break;
            }
            if (processedPackets) mapUpdate.updateMapCanvas()
            else {
                clientTick1();
                mapUpdate.updateFullMap();
            }
        }
    };
    this.hasMorePackets = function() {
        if (0 < this.latestPacket.length) {
            this.packetsReceived++;
            dataDecoder.decodeActions(this.latestPacket[0], packetID);
            packetID = (packetID + 1) % 8;
            this.latestPacket.shift();
            return true;
        } else return false
    }
}

function SpecialGames() {
    function sendAnnouncement(message, param_gamemode) {
        if (8 === gameStateManager.getState() && (0 === param_gamemode || param_gamemode === gamemode) && !singleplayer) announcements.upcomingGame(message)
    }
    this.lastUpdateTime = 0;
    this.isScheduled = true;
    this.update = function() {
        if (mainHandler.time > this.lastUpdateTime) {
            this.lastUpdateTime = mainHandler.time + 2500;
            this.scheduleAnnouncement();
        }
    };
    this.scheduleAnnouncement = function() {
        var now = new Date;
        var seconds = now.getUTCSeconds();
        if (this.isScheduled) {
            if (55 <= seconds && -1 === mainHandler.idleInterval) {
                this.isScheduled = false;
                minutes = now.getUTCMinutes();
                if (4 === minutes % 5) {
                    hours = now.getUTCHours();
                    if (14 === minutes % 30 || 59 == minutes) sendAnnouncement("Upcoming Alliance Contest", 0)
                    else if (29 === minutes % 30) sendAnnouncement("Upcoming Battle Royale Contest", 0)
                    else sendAnnouncement("Upcoming One-vs-One Game", 8)
                } else if (2 === minutes % 5) sendAnnouncement("Upcoming Zombie Game", 9)
            }
        } else if (55 > seconds) this.isScheduled = true
    }
}

function TouchInputHandler() {
    function getPointsDistance() {
        return Math.pow(Math.pow(touchPoint2X - touchPoint1X, 2) + Math.pow(touchPoint2Y - touchPoint1Y, 2), .5)
    }

    function setTouchPoints(e) {
        touchPoint1X = pixelRatio * e.touches[0].clientX;
        touchPoint1Y = pixelRatio * e.touches[0].clientY;
        touchPoint2X = pixelRatio * e.touches[1].clientX;
        touchPoint2Y = pixelRatio * e.touches[1].clientY
    }
    var touchPoint1X, touchPoint1Y, touchPoint2X, touchPoint2Y;
    this.handleTouchStart = function(e) {
        if (1 < e.touches.length) {
            setTouchPoints(e);
            playerActions.end();
            return true;
        } else return false
    };
    this.handleTouchmove = function(e) {
        if (0 === clientStatus) return false;
        if (1 < e.touches.length) {
            if (!autoCamera.deactivateCamera()) return true;
            var initDist = getPointsDistance();
            setTouchPoints(e);
            var currentDist = getPointsDistance();
            mouseCamera.zoomAndUpdateViewport(Math.floor((touchPoint1X + touchPoint2X) / 2), Math.floor((touchPoint1Y + touchPoint2Y) / 2), currentDist / initDist);
            return mainHandler.canvasDirty = true
        }
        return false
    }
}

function DataDecoder() {
    function decodeNames(length, array) {
        for (var name = Array(length), nameIndex = 0; nameIndex < length; nameIndex++) name[nameIndex] = decoder(array, 10);
        return typeof(modHandler) == "object" ? modHandler.changeDiscordLink(strings.convertToString(name)) : strings.convertToString(name)
    }

    function decoder(array, bitsToDecode) {
        for (var data = 0, byteIndex, bitIndex, currentBit = arrayIndex; currentBit < arrayIndex + bitsToDecode; currentBit++) byteIndex = divideFloor(currentBit, 8), bitIndex = 7 - currentBit % 8, data |= (array[byteIndex] >> bitIndex & 1) << arrayIndex + bitsToDecode - currentBit - 1;
        arrayIndex += bitsToDecode;
        return data
    }

    var messageLength, arrayIndex;
    this.mainDecoder = function(remote, array) {
        arrayIndex = 0;
        messageLength = array.length;
        if (0 === messageLength) wsManager.closeByError(remote, 3205);
        else {
            var data = decoder(array, 1);
            if (0 === data) {
                data = decoder(array, 2);
                if (0 === data) {
                    if (0 === decoder(array, 1)) {
                        if (0 === remote && 8 !== gameStateManager.getState() && !(4 > messageLength)) {
                            mainLeaderboardIcon.setLabel(0, decodeNames(decoder(array, 5), array));
                            mainLeaderboardIcon.setLabel(1, "[" + decodeNames(decoder(array, 3), array) + "]");
                            var timeStampCount = decoder(array, 12),
                                bitsNeeded = decoder(array, 6),
                                playtimesArray = Array(timeStampCount);
                            for (var timeStampIndex = 0; timeStampIndex < timeStampCount; timeStampIndex++) playtimesArray[timeStampIndex] = decoder(array, bitsNeeded);
                            playtime.addPlaytimes(playtimesArray);
                        }
                    } else {
                        if (8 !== gameStateManager.getState()) {
                            if (3 > messageLength) wsManager.closeByError(remote, 3208);
                            else {
                                var boardType = decoder(array, 1),
                                    page = decoder(array, 16),
                                    pageEntries = decoder(array, 4),
                                    bestEntries = [];
                                for (var entryIndex = 0; entryIndex < pageEntries; entryIndex++) {
                                    var entryPoints = decoder(array, 14),
                                        entryNameLength = decoder(array, 5),
                                        entryName = decodeNames(entryNameLength, array);
                                    bestEntries.push({
                                        name: entryName,
                                        elo: entryPoints
                                    })
                                }
                                0 === boardType ? mainLeaderboard.updateLeaderboard(0, bestEntries, 10, 1, .36, .55, page) : mainLeaderboard.updateLeaderboard(1, bestEntries, 100, 2, .47, .5, page)
                            }
                        }
                    }
                }       
                else if (1 === data) {
                    if (remote !== wsManager.lobby) wsManager.close(remote, 3239);
                    else if (6 === gameStateManager.getState() && lobby.init(), 7 !== gameStateManager.getState()) wsManager.close(remote, 3251);
                    else {
                        var lobbyStats = [0, 0, 0, 0],
                            bitsNeeded = decoder(array, 6);
                        for (data = 0; 4 > data; data++) lobbyStats[data] = decoder(array, bitsNeeded);
                        var gamesCount = decoder(array, 4),
                            lobbyGames = [];
                        for (data = 0; data < gamesCount; data++) lobbyGames.push({
                            id: decoder(array, 5),
                            gamemode: decoder(array, 4),
                            isContest: 1 === decoder(array, 1),
                            mapID: decoder(array, 6),
                            mapSeed: decoder(array, 14),
                            joinCount: decoder(array, bitsNeeded),
                            maxPlayers: decoder(array, 9) + 1,
                            timeLeft: decoder(array, 10)
                        });
                        lobby.updateObjects(lobbyStats, lobbyGames)
                    }
                }
                else if (2 === data || 3 === data) setGameOrigin.init(array);
            }
            else {
                if (1 === data) {
                    data = gameStateManager.getState();
                    if (8 !== data) {
                        if (10 === data)  wsManager.closeByError(remote, 3243);
                    } else {
                        if (remote !== wsManager.remote) wsManager.closeByError(remote, 3244);
                        else {
                            if (0 === decoder(array, 1)) mainHandler.multiplayerHandler.receivedActions(array);
                            else {
                                data = decoder(array, 2);
                                if (0 === data) {
                                    if (3 !== messageLength) wsManager.closeByError(wsManager.remote, 3230);
                                    else {
                                        data = decoder(array, 9);
                                        var emojiID = decoder(array, 7);
                                        if (0 !== isAlive[data] && 0 !== isAlive[myID]) {
                                            emojiID %= emojis.totalDistinctEmojisCount;
                                            announcements.newEmojiMessage(data, myID, emojiID);
                                            infoRenderer.showIcon(data, 1, emojiID);
                                        }
                                    }
                                } else {
                                    if (1 === data) {
                                        if (2 !== messageLength) wsManager.closeByError(wsManager.remote, 3235);
                                        else {
                                            data = decoder(array, 9);
                                            if (0 !== isAlive[data] && 0 !== isAlive[myID] && diplomacyHandler.addInboundDiplomacy(0, [data], true)) {
                                                announcements.nonAggression(data, 1);
                                                if (typeof(modHandler) == "object") replayLogger.addLogs(8, data, 1, 0, 0, 0)
                                            }
                                        }
                                    } else {
                                        if (3 !== messageLength) wsManager.closeByError(wsManager.remote, 3236);
                                        else {
                                            data = decoder(array, 9);
                                            var targetID = decoder(array, 9);
                                            if (0 !== isAlive[data] && 0 !== isAlive[targetID] && 0 !== isAlive[myID] && diplomacyHandler.addInboundDiplomacy(1, [data], true)) {
                                                infoRenderer.showIcon(data, 3, 96);
                                                infoRenderer.showIcon(targetID, 4, 96);
                                                announcements.requestedToAttack(data, targetID);
                                                if (typeof(modHandler) == "object") replayLogger.addLogs(10, data, targetID, 0, 0, 0)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                
            }
        }
    };
    this.gameInitDecoder = function(array) {
        arrayIndex = 1;
        messageLength = array.length;
        if (2 === decoder(array, 2)) {
            arrayIndex += 20;
            var var_myID = decoder(array, 9),
                var_gameSeed = decoder(array, 14), 
                var_gamemode = decoder(array, 4), 
                var_isContest = 1 === decoder(array, 1), 
                var_mapID = decoder(array, 6), 
                var_mapSeed = decoder(array, 14), 
                var_playerCount = decoder(array, 9) + 1, 
                var_playerInfo = [];
            for (var playerIndex = 0; playerIndex < var_playerCount; playerIndex++) {
                var var_playerStatus = decoder(array, 1), 
                    var_playerColor = [decoder(array, 6), decoder(array, 6), decoder(array, 6)], 
                    var_playerName = decodeNames(decoder(array, 5), array);
                var_playerInfo.push({
                    name: var_playerName,
                    color: var_playerColor,
                    status: var_playerStatus
                })
            };
            gameStateManager.enterInGameState();
            loadMap(typeof(modHandler) == "object" && modHandler.customMap != -1 ? modHandler.customMap : var_mapID, var_mapSeed);
            1 === var_playerInfo.length && singleSettings.setBotSettings(var_gamemode);
            gameInit(var_gameSeed, var_myID, var_playerInfo, var_gamemode, var_isContest)

        } else {
            arrayIndex += 20;
            var var_myID = decoder(array, 1),
                var_gameSeed = decoder(array, 14),
                var_gamemode = decoder(array, 4),
                var_isContest = 1 === decoder(array, 1),
                var_mapID = decoder(array, 6),
                var_mapSeed = decoder(array, 14);
                var_playerInfo = [];
            for (playerIndex = 0; 2 > playerIndex; playerIndex++) {
                var var_playerStatus = decoder(array, 1),
                    var_playerColor = [decoder(array, 6), decoder(array, 6), decoder(array, 6)], 
                    var_playerElo = decoder(array, 14), 
                    var_playerName = decodeNames(decoder(array, 5), array);
                var_playerInfo.push({
                    name: var_playerName,
                    color: var_playerColor,
                    elo: var_playerElo,
                    status: var_playerStatus
                })
            };
            gameStateManager.enterInGameState();
            loadMap(typeof(modHandler) == "object" && modHandler.customMap != -1 ? modHandler.customMap : var_mapID, var_mapSeed);
            gameInit(var_gameSeed, var_myID, var_playerInfo, var_gamemode, var_isContest)
        }
    };
    this.decodeGameServerInfo = function(array) {
        arrayIndex = 1;
        messageLength = array.length;
        var check1v1 = decoder(array, 2),
            remote = decoder(array, 10);
        wsManager.lobby > wsManager.gameServerCount && (remote += wsManager.gameServerCount);
        if (wsManager.lobby === remote) return wsManager.remote = remote, false;
        wsManager.close(wsManager.lobby, 3247);
        wsManager.remote = remote;
        setGameOrigin.gameHash = decoder(array, 10);
        setGameOrigin.myID = decoder(array, 2 === check1v1 ? 9 : 1);
        wsManager.sendWhenWSOpen(remote, 5) && dataEncoder.authenticateGameConnection();
        return true
    };
    this.decodeActions = function(array, packetID) {
        arrayIndex = 2;
        var bitsCount = 8 * array.length;
        if (decoder(array, 3) !== packetID) wsManager.closeByError(wsManager.remote, 3248);
        else
            for (; arrayIndex + 8 <= bitsCount;) {
                var actionType = decoder(array, 3);
                var authorID = decoder(array, 9);
                if (0 === actionType) {
                    var ratio = decoder(array, 10),
                        targetID = decoder(array, 9);
                    targetID = targetID === authorID ? maxEntities : targetID;
                    if (typeof(modHandler) == "object") replayLogger.addLogs(0, authorID, targetID, ratio, 0, 0)
                    processAction.pendingAttack(authorID, ratio, targetID)
                } else if (1 === actionType) {
                    var ratio = decoder(array, 10),
                        xPos = decoder(array, 11),
                        yPos = decoder(array, 11);
                    if (typeof(modHandler) == "object") replayLogger.addLogs(1, authorID, 0, ratio, xPos, yPos)
                    processAction.pendingSetLocation(authorID, ratio, xPos, yPos)
                } else if (2 === actionType) {
                    targetID = decoder(array, 9);
                    targetID = targetID === authorID ? maxEntities : targetID;
                    if (typeof(modHandler) == "object") replayLogger.addLogs(2, authorID, targetID, 0, 0, 0) 
                    processAction.pendingCancel(authorID, targetID);
                } else if (3 === actionType) {
                    if (typeof(modHandler) == "object") replayLogger.addLogs(3, authorID, 0, 0, 0, 0) 
                    processAction.onLeave(authorID)
                } else if (4 === actionType) {
                    actionType = decoder(array, 7);
                    if (typeof(modHandler) == "object") replayLogger.addLogs(4, authorID, actionType, 0, 0, 0, 0) 
                    infoRenderer.showIcon(authorID, 0, actionType);
                } else if (5 === actionType) {
                    if (typeof(modHandler) == "object") replayLogger.addLogs(5, authorID, 0, 0, 0, 0) 
                    processAction.surrender(authorID)
                } else if (6 === actionType) {
                    var choice = decoder(array, 1)
                    if (typeof(modHandler) == "object") replayLogger.addLogs(6, authorID, choice, 0, 0, 0) 
                    processAction.pendingPeace(authorID, choice) 
                } else if (7 === actionType) {
                    var boatID = 1 + decoder(array, 11)
                    if (typeof(modHandler) == "object") replayLogger.addLogs(7, authorID, boatID, 0, 0, 0)           
                    processAction.pendingCancelBoat(authorID, boatID)
                }
            }
    }
}

function Viewport() {
    this.viewportHeight = this.viewportWidth = this.viewportTop = this.viewportLeft = this.cameraY = this.cameraX = 0;
    this.viewportCoords = [0, 0, 0, 0];
    this.updateViewportCoords = function() {
        this.cameraX = mouseCamera.toX();
        this.cameraY = mouseCamera.toY();
        this.viewportLeft = -this.cameraX;
        this.viewportTop = -this.cameraY;
        this.viewportWidth = prevClientWidth / mainScaleFactor;
        this.viewportHeight = prevClientHeight / mainScaleFactor;
        this.viewportCoords[0] = Math.floor(this.viewportLeft);
        this.viewportCoords[1] = Math.floor(this.viewportTop);
        this.viewportCoords[2] = Math.floor(this.viewportCoords[0] + this.viewportWidth + 1);
        this.viewportCoords[3] = Math.floor(this.viewportCoords[1] + this.viewportHeight + 1);
        mapUpdate.needsUpdate = true
    }
}

function FadeIn() {
    var alpha, prevTime;
    this.init = function() {
        alpha = 1;
        prevTime = 0
    };
    this.update = function() {
        if (0 < alpha) {
            prevTime = 0 === prevTime ? mainHandler.time + 16 : prevTime;
            alpha -= .001 * (mainHandler.time - prevTime);
            alpha = 0 > alpha ? 0 : alpha;
            prevTime = mainHandler.time;
            mainHandler.canvasDirty = true;
        }
    };
    this.drawCanvasImage = function() {
        if (0 < alpha) {
            mainCanvasCtx.fillStyle = "rgba(0,0,0," + alpha + ")";
            mainCanvasCtx.fillRect(0, 0, prevClientWidth, prevClientHeight);
        }
    }
}

function MapMenu() {
    function drawMapBoxes(mapID, startX, startY, width, height) {
        if (mapID < customMapID) {
            if (currentMapID === mapID) {
                mainCanvasCtx.fillStyle = blueMoreOpaque;
                mainCanvasCtx.fillRect(startX, startY, width, height);
                mainCanvasCtx.fillStyle = whiteRGB2;
            }
            mainCanvasCtx.strokeRect(startX, startY, width, height);
            mainCanvasCtx.fillText(mapInfo.getValueByID(mapID).name, Math.floor(startX + .5 * width), Math.floor(startY + .55 * height));
        }
    }
    this.visible = false;
    this.boxDimensions = [0, 0, 0, 0];
    this.show = function() {
        this.visible = true;
        this.setCanvasVariables();
        mainHandler.canvasDirty = true
    };
    this.setCanvasVariables = function() {
        var mapsOnLeftCol = divideFloor(customMapID + customMapID % 2, 2);
        mapsOnLeftCol = mainCanvasHeight - mapsOnLeftCol * bufferLength;
        this.boxDimensions[2] = isZoom ? Math.floor(.75 * minDim) : Math.floor(.5 * minDim);
        this.boxDimensions[3] = Math.floor(1.2 * this.boxDimensions[2]);
        this.boxDimensions[3] > mapsOnLeftCol && (this.boxDimensions[3] = mapsOnLeftCol, this.boxDimensions[2] = Math.floor(mapsOnLeftCol / 1.2));
        this.boxDimensions[0] = Math.floor((mainCanvasWidth - this.boxDimensions[2]) / 2);
        this.boxDimensions[1] = Math.floor((mainCanvasHeight - this.boxDimensions[3]) / 2)
    };
    this.onPointermove = function(xPos, yPos) {
        return xPos < this.boxDimensions[0] || yPos < this.boxDimensions[1] || xPos > this.boxDimensions[0] + this.boxDimensions[2] || yPos > this.boxDimensions[1] + this.boxDimensions[3] ? false : true
    };
    this.mouseDown = function(xPos, yPos) {
        var mapsOnLeftCol = divideFloor(customMapID + customMapID % 2, 2);
        mainHandler.canvasDirty = true;
        if (xPos < this.boxDimensions[0] || yPos < this.boxDimensions[1] || xPos > this.boxDimensions[0] + this.boxDimensions[2] || yPos > this.boxDimensions[1] + this.boxDimensions[3]) return this.visible = false, true;
        var mapID = Math.floor(.13 * this.boxDimensions[3]);
        if (yPos < this.boxDimensions[1] + mapID) return xPos > this.boxDimensions[0] + this.boxDimensions[2] - 1.2 * mapID && (this.visible = false), true;
        mapID = Math.floor(mapsOnLeftCol * (yPos - this.boxDimensions[1] - mapID) / (this.boxDimensions[3] - mapID));
        mapID = 0 > mapID ? 0 : mapID > mapsOnLeftCol - 1 ? mapsOnLeftCol - 1 : mapID;
        xPos > this.boxDimensions[0] + this.boxDimensions[2] / 2 && (mapID += mapsOnLeftCol);
        if (mapID >= customMapID) return true;
        loadMap(mapID, Math.floor(16384 * Math.random()));
        if (typeof(modHandler) == "object" && modHandler.customMap == customMapID) modHandler.customMap = -1;
        return true
    };
    this.drawCanvasImage = function() {
        var mapIndex, topMapBoxHeight = Math.floor(.13 * this.boxDimensions[3]),
            mapsOnLeftCol = divideFloor(customMapID + customMapID % 2, 2),
            mapBoxHeight = (this.boxDimensions[3] - topMapBoxHeight - (mapsOnLeftCol + 1) * bufferLength) / mapsOnLeftCol,
            mapBoxWidth = Math.floor((this.boxDimensions[2] - 3 * bufferLength) / 2);
        mainCanvasCtx.lineWidth = 2;
        mainCanvasCtx.textAlign = centerAlign;
        mainCanvasCtx.textBaseline = middleAlign;
        mainCanvasCtx.font = fontWeightBold + Math.floor(.48 * mapBoxHeight) + fontSizeArial;
        mainCanvasCtx.fillStyle = blackMoreOpaque;
        mainCanvasCtx.fillRect(this.boxDimensions[0], this.boxDimensions[1], this.boxDimensions[2], this.boxDimensions[3]);
        mainCanvasCtx.fillStyle = blueMoreOpaque;
        mainCanvasCtx.fillRect(this.boxDimensions[0], this.boxDimensions[1], this.boxDimensions[2], topMapBoxHeight);
        mainCanvasCtx.strokeStyle = whiteRGB2;
        mainCanvasCtx.strokeRect(this.boxDimensions[0], this.boxDimensions[1], this.boxDimensions[2], this.boxDimensions[3]);
        mainCanvasCtx.fillStyle = whiteRGB2;
        for (mapIndex = mapsOnLeftCol - 1; 0 <= mapIndex; mapIndex--) {
            var symbolY = Math.floor(this.boxDimensions[1] + topMapBoxHeight + bufferLength + mapIndex * (mapBoxHeight + bufferLength));
            drawMapBoxes(mapIndex, this.boxDimensions[0] + bufferLength, symbolY, mapBoxWidth, mapBoxHeight);
            drawMapBoxes(mapIndex + mapsOnLeftCol, this.boxDimensions[0] + mapBoxWidth + 2 * bufferLength, symbolY, mapBoxWidth, mapBoxHeight)
        }
        gameButtons.drawMenuSymbol(Math.floor(this.boxDimensions[0] + this.boxDimensions[2] - .8 * topMapBoxHeight), Math.floor(this.boxDimensions[1] + .25 * topMapBoxHeight), Math.floor(.5 * topMapBoxHeight));
        mainCanvasCtx.setTransform(1, 0, 0, 1, 0, 0)
    }
}

function DataEncoder() {
    function encodePassword(array) {
        var password = loadPassword(),
            passwordHash = Math.floor(password / 16777216);
        encoder(array, 24, passwordHash);
        encoder(array, 24, password - 16777216 * passwordHash)
    }

    function encodeClientInfo(array) {
        encoder(array, 14, versionHash);
        encoder(array, 4, isIOS ? 2 : 12 <= androidVersion ? 1 : 0 < androidVersion ? 3 : 0);
        encoder(array, 1, isNotClient ? 1 : 0);
        encoder(array, 1, isNotTopWindow ? 1 : 0);
        encoder(array, 5, (new Date).getHours() % 24)
    }

    function getArraySize(dataLength) {
        return divideFloor(dataLength, 8) + (0 < dataLength % 8 ? 1 : 0)
    }

    function encoder(array, bitsCount, data) {
        for (var byteIndex, bitIndex, currentBit = arrayIndex; currentBit < arrayIndex + bitsCount; currentBit++) {
            byteIndex = divideFloor(currentBit, 8);
            bitIndex = 7 - currentBit % 8;
            array[byteIndex] |= (data >> bitsCount - (currentBit - arrayIndex + 1) & 1) << bitIndex;
        }
        arrayIndex += bitsCount
    }
    var arrayIndex;
    this.requestLoadInfo = function() {
        var array = new Uint8Array(3);
        arrayIndex = 0;
        encoder(array, 1, 0);
        encoder(array, 3, 0);
        encoder(array, 14, versionHash);
        wsManager.send(0, array)
    };
    this.joinLobby = function(lobbyID) {
        var nameCharcode = strings.convertToCharcode(nameInput.getInput()),
            nameLength = nameCharcode.length,
            array = new Uint8Array(getArraySize(105 + 10 * nameLength));
        arrayIndex = 0;
        encoder(array, 1, 0);
        encoder(array, 3, 1);
        encoder(array, 10, timeHash);
        var rgb64 = mainSettings.buttons[2].buttonClass.getRGB64();
        encoder(array, 6, rgb64[0]);
        encoder(array, 6, rgb64[1]);
        encoder(array, 6, rgb64[2]);
        encodePassword(array);
        encodeClientInfo(array);
        for (var nameIndex = 0; nameIndex < nameLength; nameIndex++) encoder(array, 10, nameCharcode[nameIndex]);
        wsManager.lobby = lobbyID;
        wsManager.send(lobbyID, array)
    };
    this.loadLeaderboard = function(remote, boardType) {
        var array = new Uint8Array(5);
        arrayIndex = 0;
        encoder(array, 1, 0);
        encoder(array, 3, 7);
        encoder(array, 3, 0);
        encoder(array, 14, versionHash);
        encoder(array, 1, boardType);
        encoder(array, 16, Math.abs(4096 + mainLeaderboard.position[boardType] + mainLeaderboard.paginationDirection[boardType]) % 65536);
        wsManager.send(remote, array)
    };
    this.uploadError = function(remote) {
        var mIndex, array = new Uint8Array(100);
        arrayIndex = 0;
        encoder(array, 1, 0);
        encoder(array, 3, 7);
        encoder(array, 3, 1);
        encoder(array, 14, errorLineNo);
        var charcodeMessage = strings.convertToCharcode(errorMessage),
            messageLength = getMin(charcodeMessage.length, 77);
        encoder(array, 7, messageLength);
        for (mIndex = 0; mIndex < messageLength; mIndex++) encoder(array, 10, charcodeMessage[mIndex]);
        wsManager.send(remote, array)
    };
    this.discordVote = function(remote) {
        var idIndex;
        if (!(nameInput.lastVoteTime + 7E3 > mainHandler.time)) {
            nameInput.lastVoteTime = mainHandler.time;
            var array = new Uint8Array(17);
            arrayIndex = 0;
            encoder(array, 1, 0);
            encoder(array, 3, 7);
            encoder(array, 3, 2);
            encodePassword(array);
            var maxLength = getMax(nameInput.candidateID.length - 20, 0);
            for (idIndex = nameInput.candidateID.length - 1; idIndex >= maxLength; idIndex--) encoder(array, 4, Math.abs(nameInput.candidateID.charCodeAt(idIndex) - 48) % 10);
            wsManager.send(remote, array)
        }
    };
    this.antiDisconnect = function(remote, humanLastAction) {
        var array = new Uint8Array(1);
        arrayIndex = 0;
        encoder(array, 1, 0);
        encoder(array, 3, 5);
        encoder(array, 1, humanLastAction ? 1 : 0);
        wsManager.send(remote, array)
    };
    this.joinGame = function(gameID) {
        var array = new Uint8Array(1);
        arrayIndex = 0;
        encoder(array, 1, 0);
        encoder(array, 3, 2);
        encoder(array, 4, gameID);
        wsManager.send(wsManager.lobby, array)
    };
    this.authenticateGameConnection = function() {
        var array = new Uint8Array(7);
        arrayIndex = 0;
        encoder(array, 1, 0);
        encoder(array, 3, 6);
        encoder(array, 8, wsManager.getConnectedLobby());
        encoder(array, 10, setGameOrigin.gameHash);
        encoder(array, 9, setGameOrigin.myID);
        encoder(array, 10, timeHash);
        encoder(array, 14, versionHash);
        wsManager.send(wsManager.remote, array)
    };
    this.attack = function(ratio, targetID) {
        var array = new Uint8Array(3);
        arrayIndex = 0;
        encoder(array, 1, 1);
        encoder(array, 3, 0);
        encoder(array, 10, ratio);
        encoder(array, 9, targetID);
        wsManager.send(wsManager.remote, array)
    };
    this.setLocation = function(ratio, xCoord, yCoord) {
        var array = new Uint8Array(5);
        arrayIndex = 0;
        encoder(array, 1, 1);
        encoder(array, 3, 1);
        encoder(array, 10, ratio);
        encoder(array, 11, xCoord);
        encoder(array, 11, yCoord);
        wsManager.send(wsManager.remote, array)
    };
    this.cancel = function(targetID) {
        var array = new Uint8Array(2);
        arrayIndex = 0;
        encoder(array, 1, 1);
        encoder(array, 3, 2);
        encoder(array, 1, 0);
        encoder(array, 9, targetID);
        wsManager.send(wsManager.remote, array)
    };
    this.cancelBoat = function(boatID) {
        var array = new Uint8Array(2);
        arrayIndex = 0;
        encoder(array, 1, 1);
        encoder(array, 3, 2);
        encoder(array, 1, 1);
        encoder(array, 11, boatID - 1);
        wsManager.send(wsManager.remote, array)
    };
    this.uploadResult = function(troopHash, result) {
        var array = new Uint8Array(4);
        arrayIndex = 0;
        encoder(array, 1, 1);
        encoder(array, 3, 3);
        encoder(array, 12, troopHash);
        encoder(array, 10, result);
        wsManager.send(wsManager.remote, array)
    };
    this.surrender = function() {
        var array = new Uint8Array(1);
        arrayIndex = 0;
        encoder(array, 1, 1);
        encoder(array, 3, 4);
        wsManager.send(wsManager.remote, array)
    };
    this.selfEmoji = function(emojiID) {
        var array = new Uint8Array(2);
        arrayIndex = 0;
        encoder(array, 1, 1);
        encoder(array, 3, 5);
        encoder(array, 7, emojiID);
        wsManager.send(wsManager.remote, array)
    };
    this.sendEmoji = function(emojiID, targetID) {
        announcements.newEmojiMessage(myID, targetID, emojiID);
        var array = new Uint8Array(3);
        arrayIndex = 0;
        encoder(array, 1, 1);
        encoder(array, 3, 6);
        encoder(array, 2, 0);
        encoder(array, 9, targetID);
        encoder(array, 7, emojiID);
        wsManager.send(wsManager.remote, array)
    };
    this.nonAggression = function(friendID) {
        var array = new Uint8Array(2);
        arrayIndex = 0;
        encoder(array, 1, 1);
        encoder(array, 3, 6);
        encoder(array, 2, 1);
        encoder(array, 9, friendID);
        wsManager.send(wsManager.remote, array)
        if (typeof(modHandler) == "object") replayLogger.addLogs(8, friendID, 0, 0, 0, 0)
    };
    this.requestAttack = function(friends, targetID) {
        var friendIndex, friendsLength = friends.length,
            array = new Uint8Array(getArraySize(15 + 9 * friendsLength));
        arrayIndex = 0;
        encoder(array, 1, 1);
        encoder(array, 3, 6);
        encoder(array, 2, 2);
        encoder(array, 9, targetID);
        for (friendIndex = 0; friendIndex < friendsLength; friendIndex++) encoder(array, 9, friends[friendIndex]);
        wsManager.send(wsManager.remote, array)
        if (typeof(modHandler) == "object") replayLogger.addLogs(10, friends, targetID, 0, 0, 0) 
    };
    this.votePeace = function(choice) {
        var array = new Uint8Array(1);
        arrayIndex = 0;
        encoder(array, 1, 1);
        encoder(array, 3, 7);
        encoder(array, 1, choice ? 1 : 0);
        wsManager.send(wsManager.remote, array)
    };
    this.singlePlayed = function(remote) {
        var array = new Uint8Array(4);
        arrayIndex = 0;
        encoder(array, 1, 0);
        encoder(array, 3, 3);
        encodeClientInfo(array);
        wsManager.send(remote, array)
    }
}

aiCommand746(0)
setTimeout(init, 1E4);