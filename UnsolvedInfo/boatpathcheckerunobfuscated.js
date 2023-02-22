//Fuck this shit

this.check = function(id, targetPixelIndex) { //OG Loop
    var l;
    if (0 === waterBorderPixels[id].length || !pixel.canOwn(targetPixelIndex) || !pixel.isNeutral(targetPixelIndex) && pixel.getOwner(targetPixelIndex) === id) return !1;
    for (l = 21; 0 <= l; l--) {
        if (21 === l) {
            var x = waterBorderPixels[id],
                t = targetPixelIndex,
                z = pixel.toX(t);
            t = pixel.toY(t);
            var y = 0;
            var A = pixel.toX(x[0]);
            var B = pixel.toY(x[0]);
            A = Math.abs(A - z) + Math.abs(B - t);
            for (B = x.length - 1; 1 <= B; B--) {
                var C = pixel.toX(x[B]);
                var E = pixel.toY(x[B]);
                C = Math.abs(C - z) + Math.abs(E - t);
                C < A && (A = C, y = B)
            }
            closestWaterPixel = x[y]
        } else closestWaterPixel = waterBorderPixels[id][divideFloor(l * waterBorderPixels[id].length, 21)];
        a: {
            B = closestWaterPixel;y = targetPixelIndex;x = pixel.toX(B);z = pixel.toY(B);t = pixel.toX(y);y = pixel.toY(y);A = Math.abs(t -
                x) + Math.abs(y - z);
            if (!(2 > A))
                for (C = B, B = 0; B < A; B++)
                    if (C = Math.abs(t - pixel.toX(C)) >= Math.abs(y - pixel.toY(C)) ? C + offset[t > x ? 1 : 3] : C + offset[y > z ? 2 : 0], !pixel.isWater(C)) {
                        if (pixel.canOwn(C)) {
                            if (0 === B || B + 20 < A) break;
                            x = !0;
                            break a
                        }
                        break
                    } x = !1
        }
        if (x) return !0
    }
    return !1
}

this.check = function(playerId, targetPixelIndex) { //Chat loop
    if (waterBorderPixels[playerId].length === 0 || !pixel.canOwn(targetPixelIndex) ||
        (!pixel.isNeutral(targetPixelIndex) && pixel.getOwner(targetPixelIndex) === playerId)) {
        return false;
    }
    for (let i = 21; i >= 0; i--) {
        let closestPixel;
        if (i === 21) {
            const pixels = waterBorderPixels[playerId];
            const targetX = pixel.toX(targetPixelIndex);
            const targetY = pixel.toY(targetPixelIndex);
            let minDist = Math.abs(pixel.toX(pixels[0]) - targetX) + Math.abs(pixel.toY(pixels[0]) - targetY);
            for (let j = 1; j < pixels.length; j++) {
                const pixelX = pixel.toX(pixels[j]);
                const pixelY = pixel.toY(pixels[j]);
                const dist = Math.abs(pixelX - targetX) + Math.abs(pixelY - targetY);
                if (dist < minDist) {
                    minDist = dist;
                    closestPixel = pixels[j];
                }
            }
        } else {
            closestPixel = waterBorderPixels[playerId][divideFloor(i * waterBorderPixels[playerId].length, 21)];
        }
        const startPixel = closestPixel;
        const endPixel = targetPixelIndex;
        const startX = pixel.toX(startPixel);
        const startY = pixel.toY(startPixel);
        const endX = pixel.toX(endPixel);
        const endY = pixel.toY(endPixel);
        const dist = Math.abs(startX - endX) + Math.abs(startY - endY);
        if (dist < 2) {
            continue;
        }
        let currPixel = startPixel;
        for (let j = 0; j < dist; j++) {
            const currX = pixel.toX(currPixel);
            const currY = pixel.toY(currPixel);
            const isXClosest = Math.abs(endX - currX) >= Math.abs(endY - currY);
            currPixel = isXClosest ? currPixel + offset[endX > currX ? 1 : 3] : currPixel + offset[endY > currY ? 2 : 0];
            if (!pixel.isWater(currPixel)) {
                if (pixel.canOwn(currPixel)) {
                    if (j === 0 || j + 20 < dist) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    break;
                }
            }
        }
    }
    return false;
}


this.check = function(id, targetPixelIndex) { //My Failed Loop
    var loopIndex, hasValidPath;
    if (0 === waterBorderPixels[id].length || !pixel.canOwn(targetPixelIndex) || !pixel.isNeutral(targetPixelIndex) && pixel.getOwner(targetPixelIndex) === id) return !1;
    for (loopIndex = 21; 0 <= loopIndex; loopIndex--) {
        if (21 === loopIndex) {
            var waterBorder = waterBorderPixels[id],
                targetX = pixel.toX(targetPixelIndex),
                targetY = pixel.toY(targetPixelIndex),
                originPixelBIndex = 0,
                originX = pixel.toX(waterBorder[0]),
                originY = pixel.toY(waterBorder[0]),
                originDist = Math.abs(originX - targetX) + Math.abs(originY - targetY);
            for (var bIndex = waterBorder.length - 1; 1 <= bIndex; bIndex--) {
                var startX = pixel.toX(waterBorder[bIndex]),
                    startY = pixel.toY(waterBorder[bIndex]),
                    newDist = Math.abs(startX - targetX) + Math.abs(startY - targetY);
                newDist < originDist && (originDist = newDist, originPixelBIndex = bIndex)
            }
            closestWaterPixel = waterBorder[originPixelBIndex]
        } else closestWaterPixel = waterBorderPixels[id][divideFloor(loopIndex * waterBorderPixels[id].length, 21)];
        a: {
            var startX = pixel.toX(closestWaterPixel),
                startY = pixel.toY(closestWaterPixel),
                targetX = pixel.toX(targetPixelIndex),
                targetY = pixel.toY(targetPixelIndex),
                originDist = Math.abs(targetX - startX) + Math.abs(targetY - startY);
            if (!(2 > originDist))
                for (var nextCoord = closestWaterPixel, distIndex = 0; distIndex < originDist; distIndex++)
                    nextCoord = Math.abs(targetX - pixel.toX(nextCoord)) >= Math.abs(targetY - pixel.toY(nextCoord)) ? nextCoord + offset[targetX > startX ? 1 : 3] : nextCoord + offset[targetY > startY ? 2 : 0]; 
                    if (!pixel.isWater(nextCoord)) {
                        if (pixel.canOwn(nextCoord)) {
                            if (0 === distIndex || distIndex + 20 < originDist) break;
                            hasValidPath = !0;
                            break a
                        }
                        break
                    } hasValidPath = !1
        }
        if (hasValidPath) return !0
    }
    return !1
}

