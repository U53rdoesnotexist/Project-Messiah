function o() {
    if (p) return q.username;
    if (12 <= r) {
        var a = s.loadString(20);
        "" === a && (a = "Android User " + Math.floor(1E3 * Math.random()), s.saveString(20, a))
    } else 5 <= r ? (a = s.loadString(0), "" === a && (a = "Player " + Math.floor(1E3 * Math.random()), s.saveString(0, a))) : a = t.u(0);
    return a
}

function v() {
    w = Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1));
    if (p) w = q.id;
    else if (12 <= r) {
        var a = s.loadNumber(20); - 1 === a ? s.saveNumber(20, w) : w = a
    } else 5 <= r ? (a = s.loadNumber(2), 2 === a ? s.saveNumber(2, w + 3) : w = a - 3) : w = t.u(1)
}

function x() {
    var a = 0;
    if (p) a = q.password;
    else if (12 <= r) a = s.loadString(22);
    else {
        if (5 <= r) return a;
        a = t.u(9)
    }
    var b = Math.floor(Math.pow(2, 48));
    a = Math.floor(parseInt(a0.a1(a)));
    if (0 < a && a < b) return a;
    a = Math.floor(1 + (b - 1) * Math.random());
    return a2(a) ? a : 0
}

function a3() {
    if (p) a4 = q.zoom || a5 < a6;
    else if (12 <= r) {
        var a = s.loadNumber(21); - 1 === a ? (a4 = 100 >= s.getNumber(0) || a5 < a6, s.saveNumber(21, a4 ? 1 : 0)) : a4 = 1 === a || a5 < a6
    } else 5 <= r ? (a = s.loadNumber(1), 2 === a ? (a4 = !0, s.saveNumber(1, a4 ? 1 : 0)) : a4 = 1 === a) : a4 = 0 === t.u(4) || a5 < a6
}

function a8() {
    return p ? q.emojis : 5 <= r ? s.loadString(1) : t.u(7)
}

function a9() {
    return p ? q.colors : 12 <= r ? s.loadString(21) : 5 <= r ? s.loadString(2) : t.u(8)
}

function aA(a) {
    if (p) window.webkit.messageHandlers.iosCommandA.postMessage("username " + a);
    else if (12 <= r) s.saveString(20, a), s.setState(10);
    else if (5 <= r) s.saveString(0, a);
    else {
        if (3 > a.length || 0 <= a.indexOf(";")) a = "Player 666";
        t.aB(0, a);
        t.aC()
    }
}

function a2(a) {
    a = a0.aD(a.toString());
    return p ? (q.password = a, window.webkit.messageHandlers.iosCommandA.postMessage("password " + a), !0) : 12 <= r ? (s.saveString(22, a), !0) : 5 <= r ? !1 : 2 === t.aE() ? (t.aB(9, a), t.aC(), !0) : !1
}

function aF(a, b) {
    p ? (window.webkit.messageHandlers.iosCommandA.postMessage("zoom " + (a ? 1 : 0)), window.webkit.messageHandlers.iosCommandA.postMessage("sound " + (b ? 1 : 0))) : 12 <= r ? (s.saveNumber(22, b ? 1 : 0), s.saveNumber(21, a ? 1 : 0)) : 5 <= r ? (s.saveNumber(1, a ? 1 : 0), s.saveNumber(11, b ? 1 : 0)) : (t.aB(2, b ? 1 : 0), t.aB(4, a ? 0 : 1), t.aC())
}

function aH() {
    for (var a = "", b = 0; b < aJ.aK; b += 2) a += aJ.aL[b] || aJ.aL[b + 1] ? aJ.aL[b] && !aJ.aL[b + 1] ? "1" : !aJ.aL[b] && aJ.aL[b + 1] ? "2" : "3" : "0";
    p ? window.webkit.messageHandlers.iosCommandA.postMessage("emojis " + a) : 5 <= r ? s.saveString(1, a) : (t.aB(7, a), t.aC())
}

function aM(a) {
    if (p) window.webkit.messageHandlers.iosCommandA.postMessage("colors " + a);
    else {
        if (12 <= r) s.saveString(21, a);
        else if (5 <= r) {
            s.saveString(2, a);
            return
        }
        t.aB(8, a);
        t.aC()
    }
}

function aN(a) {
    p || 5 <= r && s.setState(a)
}

function aP() {
    p ? window.webkit.messageHandlers.iosCommandA.postMessage("show ad 1800000") : 12 <= r && s.presentAd(18E5)
}

function aQ() {
    p ? location.reload() : 7 <= r ? s.setState(5) : location.reload()
}

function aR() {
    14 > r || s.saveString(23, '<!DOCTYPE html>\n<html lang="aU">\n' + document.getElementsByTagName("html")[0].innerHTML + "\n</html>")
}
self.aiCommand746 = function(a) {
    0 === a ? aW() : 1 !== a || 14 > r || aX.aY()
};
var aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al;

function am() {
    ae = 0;
    af = 2048;
    ag = new Uint32Array(4 * af);
    ah = 0;
    ai = new Uint32Array(af);
    aj = new Int32Array(4);
    aj[0] = -4 * an;
    aj[1] = 4;
    aj[2] = -aj[0];
    aj[3] = -aj[1];
    ak = new Uint8Array(an * ao)
}

function ap(a) {
    aa = a;
    al = !1;
    aq();
    ar();
    for (a = as.at(aa) - 1; 0 <= a; a--) 0 === as.au(aa, a) && (aZ = a, av());
    al && aw()
}

function aw() {
    ax();
    ay()
}

function av() {
    ad = as.az(aa, aZ);
    ab = as.b0(aa, aZ);
    b1();
    0 === ae ? b2() : (b3(), b4() ? b5() : b2())
}

function b4() {
    ac = b6(ab, ae);
    return ac > b7
}

function b3() {
    var a;
    for (a = ae - 1; 0 <= a; a--) ak[b6(ag[a], 4)] = 0
}

function b2() {
    1 === as.at(aa) && b8.b9(aa);
    if (aa !== bA) bB[aa] += ab, bC.bD(aa);
    else {
        var a = bB[aa];
        bB[aa] += ab;
        bC.bD(aa);
        bE.bF[13] -= bB[aa] - a
    }
    as.bG(aa, aZ)
}

function aq() {
    var a = bI[aa].length;
    a = a > af ? af : a;
    ah = 0;
    for (--a; 0 <= a; a--) ai[ah++] = bI[aa][a]
}

function ar() {
    var a;
    for (a = bI[aa].length - 1; 0 <= a; a--) bJ.bK(bI[aa][a]) && bJ.bL(bI[aa][a], aa);
    bI[aa] = []
}

function b1() {
    ae = 0;
    ad === bM ? bN() : bO()
}

function bO() {
    var a, b;
    for (a = 3; 0 <= a; a--)
        for (b = ah - 1; 0 <= b; b--) {
            var d = ai[b] + aj[a];
            var c = b6(d, 4);
            0 === ak[c] && bJ.bS(d) && bJ.bT(d) === ad && (ak[c] = 1, ag[ae++] = d)
        }
}

function bN() {
    var a, b;
    for (a = 3; 0 <= a; a--)
        for (b = ah - 1; 0 <= b; b--) {
            var d = ai[b] + aj[a];
            var c = b6(d, 4);
            0 === ak[c] && bJ.bU(d) && (ak[c] = 1, ag[ae++] = d)
        }
}

function b5() {
    bV() ? (bW(), ad !== bM && bX()) : b2()
}

function bX() {
    bY();
    bZ(ba[ad]);
    bZ(bb[ad]);
    bc(bI[ad]);
    bd(bb[ad]);
    bd(be[ad]);
    bf();
    bg()
}

function bW() {
    al = !0;
    as.bh(aa, aZ, ab);
    bi[aa] += ae;
    bj();
    bk()
}

function bV() {
    return ad === bM ? bl() : bm()
}

function bm() {
    var a = ae * b7,
        b = bp(),
        d = br();
    b = a + 2 * b + d;
    var c = ac * ae;
    if (c > b) return ab -= b, bu(b - a, d), !0;
    ab -= c;
    bu(c - a, d);
    return !1
}

function bu(a, b) {
    if (0 < b)
        if (a >= b) as.bv(ad, aa, 0), a -= b;
        else {
            as.bv(ad, aa, b - a);
            return
        } a = b6(a, 2);
    bB[ad] = bB[ad] >= a ? bB[ad] - a : 0
}

function br() {
    return as.bw(ad, aa)
}

function bp() {
    return b6(ae * bB[ad], 1 + bx() * by())
}

function bx() {
    return Math.floor(2 + bz(b6(bi[ad], 100), 8))
}

function by() {
    return ba[ad].length + b6(bb[ad].length + be[ad].length, 50)
}

function bl() {
    ab -= ae * b7;
    return !0
}

function bk() {
    for (var a = ae - 1; 0 <= a; a--) bI[aa].push(ag[a]), ba[aa].push(ag[a]), bJ.bL(ag[a], aa)
}

function c0() {
    var a = 1,
        b = [null, null];
    this.c3 = function() {
        a = .72 * (a4 ? .0011 : .001) * c4;
        for (var d = 1; 0 <= d; d--) b[d] && this.c5(d, b[d].z)
    };
    this.c5 = function(d, c) {
        b[d] = {
            z: c,
            font: c7 + 10 + c8
        };
        this.c9(d)
    };
    this.c9 = function(d) {
        if (cA.cB() && b[d]) {
            var c = b[d].z,
                f = Math.floor(.15 * a * cA.cD(13).height),
                e = c7 + f + c8,
                h = cG.measureText(c, e),
                g = .8 * a * cA.cD(13).width;
            h > g && (f = Math.floor(f * g / h), e = c7 + f + c8);
            b[d] = {
                z: c,
                font: e
            };
            cI.cJ = !0
        }
    };
    this.cK = function() {
        return Math.floor(a * cA.cD(13).height)
    };
    this.cL = function(d, c) {
        return !cA.cB() || d < cO || c < cP -
            cQ.cF - a * cA.cD(13).height - 2 * cO || c > cP - cQ.cF - 2 * cO ? !1 : d < cO + a * cA.cD(13).width ? (cR.cS(0), !0) : d < 2 * cO + a * cA.cD(13).width ? !1 : d < 2 * cO + 2 * a * cA.cD(13).width ? (cR.cS(1), !0) : !1
    };
    this.cT = function() {
        return Math.floor(cP - cQ.cF - a * cA.cD(13).height - 2 * cO)
    };
    this.cU = function() {
        if (cA.cB()) {
            cV.imageSmoothingEnabled = !0;
            cV.setTransform(a, 0, 0, a, cO, this.cT());
            cV.drawImage(cA.cD(14), 0, 0);
            cV.setTransform(a, 0, 0, a, 2 * cO + a * cA.cD(13).width, this.cT());
            cV.drawImage(cA.cD(13), 0, 0);
            for (var d = 1; 0 <= d; d--) b[d] && (cV.setTransform(1, 0, 0, 1, (1 + d) *
                cO + d * a * cA.cD(13).width, this.cT()), cV.font = b[d].font, cV.textBaseline = cW, cV.textAlign = cX, cV.fillStyle = cY, cV.fillText(b[d].z, .5 * a * cA.cD(13).width, .86 * a * cA.cD(13).height));
            cV.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
}

function cZ(a, b, d, c) {
    var f = b6(3 * bB[a], 256);
    c -= c >= b6(bB[a], 2) ? f : 0;
    cd(d, a);
    as.ce(a, c, b);
    bB[a] -= c + f;
    b8.cf(a, !1)
}

function cg(a, b) {
    var d, c;
    for (d = ba[a].length - 1; 0 <= d; d--)
        if (bJ.ci(ba[a][d]))
            for (c = 3; 0 <= c; c--)
                if (bJ.bS(ba[a][d] + aj[c]) && bJ.bT(ba[a][d] + aj[c]) === b) {
                    bI[a].push(ba[a][d]);
                    break
                }
}

function cd(a, b) {
    for (var d = bI[b].length - 1; d >= a; d--) bJ.ck(bI[b][d], b)
}

function cl(a) {
    for (var b, d = ba[a].length - 1; 0 <= d; d--)
        if (bJ.ci(ba[a][d]))
            for (b = 3; 0 <= b; b--)
                if (bJ.bU(ba[a][d] + aj[b])) {
                    bI[a].push(ba[a][d]);
                    break
                }
}

function cm(a, b) {
    var d, c;
    var f = ba[a].length;
    var e = 256 <= f ? 12 : 32 <= f ? 6 : 1;
    f = f - 1 - cs.ct(e);
    cu = 0;
    a: for (; 0 <= f; f -= e)
        for (c = 3; 0 <= c; c--) {
            var h = bJ.bU(ba[a][f] + aj[c]) ? bM : bJ.bT(ba[a][f] + aj[c]);
            if (h === bM || bJ.bS(ba[a][f] + aj[c]) && h !== a && (b || cv(a, h))) {
                for (d = cu - 1; 0 <= d; d--)
                    if (cw[d] === h) continue a;
                cw[cu] = h;
                if (++cu >= cx) return !0
            }
        }
    return 0 < cu
}

function cy(a, b) {
    var d, c;
    cu = 0;
    for (d = ba[a].length - 1; 0 <= d; d--)
        for (c = 3; 0 <= c; c--) {
            var f = bJ.bU(ba[a][d] + aj[c]) ? bM : bJ.bT(ba[a][d] + aj[c]);
            if (f === bM || bJ.bS(ba[a][d] + aj[c]) && f !== a && (b || cv(a, f))) return cw[cu++] = f, !0
        }
    return !1
}

function cz() {
    var a;
    for (a = cu - 1; 0 <= a; a--)
        if (cw[a] === bM) {
            for (cu--; a < cu; a++) cw[a] = cw[a + 1];
            return !0
        } return !1
}

function d1(a) {
    var b, d;
    for (b = cu - 1; 0 <= b; b--)
        if (as.d2(a, cw[b]))
            for (cu--, d = b; d < cu; d++) cw[d] = cw[d + 1];
    return 0 === cu
}

function d3() {
    var a;
    for (a = cu - 1; 0 <= a; a--)
        if (cw[a] >= d4) return !0;
    return !1
}

function d5() {
    var a, b;
    for (a = cu - 1; 0 <= a; a--)
        if (cw[a] < d4)
            for (cu--, b = a; b < cu; b++) cw[b] = cw[b + 1];
    return 0 < cu
}

function d6(a) {
    var b, d = cw[0],
        c = bB[d] + as.bw(d, a);
    for (b = cu - 1; 1 <= b; b--) {
        var f = bB[cw[b]] + as.bw(cw[b], a);
        f < c && (d = cw[b], c = f)
    }
    return d
}

function d9(a) {
    var b = cw[0];
    if (1 === cu) return b;
    var d = b6(dD[a] + dE[a], 2),
        c = b6(dG[a] + dH[a], 2),
        f = dJ(d - b6(dD[b] + dE[b], 2)) + dJ(c - b6(dG[b] + dH[b], 2));
    for (a = cu - 1; 1 <= a; a--) {
        var e = dJ(d - b6(dD[cw[a]] + dE[cw[a]], 2)) + dJ(c - b6(dG[cw[a]] + dH[cw[a]], 2));
        e < f && (f = e, b = cw[a])
    }
    return b
}

function dK() {
    return cw[cs.ct(cu)]
}
var cx, cu, cw, dL;

function dM() {
    cx = 8;
    cu = 0;
    cw = new Uint16Array(cx)
}

function dN() {
    dL = dO ? new Uint8Array(bM) : null
}

function dP(a, b) {
    dO && (dL[a] = 0);
    if (as.dR(a) && !(60 > b))
        if (0 === ba[a].length) dS.dT(a, dU.cb[a - d4]) || (dU.dV(a - d4, 200), dW(a, b, dU.cb[a - d4], bC.dX(a)));
        else if (!(0 < bb[a].length && cs.random() < cs.value(bb[a].length > ba[a].length ? 7 : 3) && dS.dT(a, dU.cb[a - d4]))) {
        var d = bC.dX(a);
        bB[a] > d && b < bB[a] - d && (b = bB[a] - d);
        dO ? dY(a, b, dU.cb[a - d4], d) : dZ(a, b, dU.cb[a - d4])
    }
}

function dY(a, b, d, c) {
    cm(a, !1) || cy(a, !1) ? (dL[a] = 1, d1(a) || (cz() ? (db(a, b), dc(a, bM, d)) : (cs.dd(dU.de[d]) ? c = d6(a) : (d3() && cs.dd(dU.dg[d]) && d5(), c = d9(a)), df(a, b, c), dc(a, c, d)))) : 0 < bb[a].length && cs.random() < cs.value(60) && dS.dT(a, d) || (dU.dV(a - d4, 200), dW(a, b, d, c))
}

function dh(a, b) {
    cm(a, !1) || cy(a, !1) ? (dL[a] = 1, cz() ? db(a, b) : df(a, b, dK())) : dW(a, b, 0, 0)
}

function dc(a, b, d) {
    3 <= d && 2142 < cI.di() && (b === bM || bB[b] < b6(bB[a], 20)) && dU.dV(a - d4, 25)
}

function dW(a, b, d, c) {
    if (0 !== dk.dl[a] && !(5 === d && bB[a] < c || 4 === d && bB[a] < b6(c, 2)))
        for (d = cs.ct(dm), c = 0; c < dm; c++) {
            var f = dn[(c + d) % dm];
            if (dk.dl[f] === dk.dl[a] && 1 === dL[f]) {
                dp(a, f, b);
                f < d4 && cs.random() < cs.value(10) && (dL[f] = 0);
                break
            }
        }
}

function dZ(a, b, d) {
    !cm(a, !0) && !cy(a, !0) || d1(a) || (cz() ? db(a, b) : cs.dd(dU.de[d]) ? df(a, b, d6(a)) : (d3() && cs.dd(dU.dg[d]) && d5(), df(a, b, d9(a))))
}

function dq(a, b) {
    if (cm(a, !0) || cy(a, !0)) cz() ? db(a, b) : df(a, b, dK())
}

function df(a, b, d) {
    if (b6(bB[a], 8) > bB[d]) {
        var c = b6(11 * bB[d], 5);
        b = b > c ? b : c
    }
    c = bI[a].length;
    cg(a, d);
    cZ(a, d, c, b)
}

function db(a, b) {
    var d = bM,
        c = bI[a].length;
    cl(a);
    return bI[a].length !== c ? (cZ(a, d, c, b), !0) : !1
}
var ds = [60, 74, 112, 200, 256, 512];

function dt() {
    var a, b, d, c, f, e;
    this.e0 = "Very Easy;Easy;Normal;Hard;Harder;Very Hard".split(";");
    this.e1 = [97, 95, 93, 90, 87, 84];
    this.dg = [98, 95, 90, 40, 20, 0];
    this.e2 = [85, 70, 65, 30, 7, 3];
    this.de = [0, 0, 0, 0, 50, 90];
    this.c3 = function() {
        var h;
        a = new Uint8Array(e4);
        b = new Uint16Array(e4);
        d = new Uint16Array(e4);
        c = new Uint8Array(e4);
        this.cb = new Uint8Array(e4);
        f = new Uint16Array(e4);
        e = new Uint16Array(e4);
        if (e5.e6) {
            if (e5.e7.e8)
                for (h = e4 - 1; 0 <= h; h--) this.cb[h] = e5.e7.e8[h + 1]
        } else if (9 === e9) this.eA();
        else if (eB)
            if (dO)
                for (h = e4 - 1; 0 <=
                    h; h--) this.cb[h] = eC.eD[dk.dl[h + d4] - 1].bR;
            else
                for (h = e4 - 1; 0 <= h; h--) this.cb[h] = eC.eD[0].bR;
        else {
            var g = 8 === e9 ? 1 : 0;
            for (h = e4 - 1; 0 <= h; h--) this.cb[h] = g
        }
        for (h = e4 - 1; 0 <= h; h--) 2 >= this.cb[h] ? (c[h] = 5, f[h] = e[h] = 1040, 0 === this.cb[h] ? (b[h] = 1E3, d[h] = 1E3) : 1 === this.cb[h] ? (b[h] = 1E3, d[h] = 920, f[h] = e[h] = 1100) : (b[h] = 1E3, d[h] = 870)) : 4 >= this.cb[h] ? (c[h] = 1 + cs.ct(20), e[h] = 250 + cs.ct(1501), f[h] = 500 + cs.ct(501), 3 === this.cb[h] ? (b[h] = 600 + cs.ct(101), d[h] = 300 + cs.ct(401)) : (b[h] = 300 + cs.ct(201), d[h] = 100 + cs.ct(201))) : (f[h] = 1E3, e[h] = 1E3, c[h] =
            35 + cs.ct(16), b[h] = 400 + cs.ct(101), d[h] = 50 + cs.ct(101)), a[h] = 1 + b6(f[h] * cs.random(), 10 * cs.value(100))
    };
    this.eA = function() {
        var h, g;
        var k = eG.eH;
        for (h = k - 1; 0 <= h; h--) this.cb[h] = 5;
        for (g = 0; 6 > g; g++)
            if (0 < eG.eI[g]) {
                for (h = k + eG.eI[g] - 1; h >= k; h--) this.cb[h] = g;
                k += eG.eI[g]
            }
    };
    this.dV = function(h, g) {
        0 <= h && (a[h] = g)
    };
    this.dT = function(h) {
        if (0 === --a[h]) {
            f[h] !== e[h] && (f[h] += f[h] < e[h] ? 3 : -3);
            b[h] !== d[h] && (b[h] += b[h] < d[h] ? c[h] : -c[h], b[h] = Math.abs(b[h] - d[h]) <= c[h] ? d[h] : b[h]);
            a[h] = b6(f[h], 10);
            var g = h + d4;
            dP(g, b6(b[h] * bB[g], 1E3))
        }
    }
}

function eM() {
    eN.dT();
    eO.dT();
    eP.eQ();
    eR.dT()
}

function eS() {
    bC.dT();
    eT.dT();
    eU.dT();
    eV.dT();
    eW.dT();
    eX.dT();
    b8.dT();
    eY.dT();
    eZ();
    ea.dT();
    eG.dT();
    eO.dT();
    eP.dT();
    eb.dT();
    ec.dT();
    ed.dT();
    eN.dT();
    ee.dT();
    ef.dT();
    eg.dT();
    bE.dT();
    eh.dT();
    eR.dT()
}

function ei() {
    ej.dT();
    ek.dT();
    cG.dT();
    el.dT();
    em.en()
}

function eo() {
    ea.ep(!1);
    ed.ep();
    eP.ep(!1);
    ec.ep();
    ef.ep();
    eg.ep();
    eO.ep();
    eh.c9()
}

function eq() {
    eO.ep() && (cI.cJ = !0);
    eR.dT()
}

function er() {
    function a(k) {
        var l;
        for (l = c - 1; 0 <= l; l--) 0 === e[f[l]] && bi[f[l]] >= k && ap(f[l])
    }

    function b(k) {
        e[k] = 10 === e[k] ? d : 1E3 > bi[k] ? 3 : 1E4 > bi[k] ? 2 : 6E4 > bi[k] ? 1 : 0
    }
    var d, c, f, e, h, g;
    this.c3 = function() {
        h = g = 0;
        d = 6;
        c = 0;
        f = new Uint16Array(bM);
        e = new Uint8Array(bM)
    };
    this.dT = function() {
        var k;
        h = bE.bF[13];
        g = bB[bA];
        for (k = c - 1; 0 <= k; k--) 10 === e[f[k]] ? b(f[k]) : 0 === e[f[k]]-- && (b(f[k]), ap(f[k]));
        16E4 <= bi[f0[0]] && (a(16E4), 3E5 <= bi[f0[0]] && a(3E5));
        bi[bA] > bE.bF[7] && (bE.bF[7] = bi[bA]);
        bE.bF[14] += g - bB[bA] + h - bE.bF[13]
    };
    this.b9 = function(k) {
        var l;
        for (l = c - 1; 0 <= l; l--)
            if (k === f[l]) {
                c--;
                for (k = l; k < c; k++) f[k] = f[k + 1];
                break
            }
    };
    this.cf = function(k, l) {
        var m;
        for (m = c - 1; 0 <= m; m--)
            if (k === f[m]) return;
        f[c++] = k;
        e[k] = l ? 2 : 10
    }
}

function f5() {
    function a() {
        c = 3;
        a: {
            for (var g = 40; 1 <= g; g--) {
                f = dE[h] + b6(cs.random() * (dD[h] - dE[h] + 1), cs.value(100));
                e = dH[h] + b6(cs.random() * (dG[h] - dH[h] + 1), cs.value(100));
                var k = b(bJ.fF(f, e));
                if (1 !== k) break a
            }
            k = 1
        }
        if (0 === k) return !1;
        if (2 === k) return !0;
        k = d(1, 1);
        return 0 === k ? !1 : 2 === k ? !0 : 2 === d(54, 4)
    }

    function b(g) {
        if (bJ.bK(g) && (bJ.bU(g) || bJ.bT(g) !== h && cv(h, bJ.bT(g)))) {
            if (fD.d2(h, g)) return 2;
            if (0 === c--) return 0
        }
        return 1
    }

    function d(g, k) {
        for (var l, m, u, y, z, G, B, n = g; n < g + 50 * k; n += k)
            if (l = dE[h] - n, l = 1 > l ? 1 : l, m = dH[h] - n, m = 1 >
                m ? 1 : m, u = dD[h] + n, u = u >= an - 1 ? an - 2 : u, y = dG[h] + n, y = y >= ao - 1 ? ao - 2 : y, B = b6(2 * cs.random() * (u - l + y - m), cs.value(100)), z = u - l, G = y - m, B <= z ? (f = l + B, e = m) : B <= z + G ? (f = u, e = m + B - z) : B <= 2 * z + G ? (f = l + B - z - G, e = y) : (f = l, e = m + B - 2 * z - G), l = b(bJ.fF(f, e)), 1 !== l) return l;
        return 1
    }
    var c, f, e, h;
    this.dT = function(g, k) {
        h = g;
        if (0 === bb[h].length) return !1;
        if (a()) {
            var l = b6(dU.e2[k] * bB[h], 100);
            100 > l && 100 <= bB[h] && (l = 100);
            if (100 <= l) return fC(h, fD.fE(), bJ.fF(f, e), l)
        }
        return !1
    }
}

function fQ() {
    var a, b;
    this.c3 = function() {
        a = e4;
        b = new Uint16Array(e4);
        for (var d = e4 - 1; 0 <= d; d--) b[d] = d
    };
    this.dT = function() {
        for (var d = a - 1; 0 <= d; d--)
            if (0 === fT[b[d] + d4]) {
                var c = d;
                for (a--; c < a; c++) b[c] = b[c + 1]
            } else dU.dT(b[d])
    }
}

function fV() {
    function a(g, k, l, m, u, y) {
        0 < l && 1E3 >= l && (b.push(g), d.push(k), c.push(l), f.push(m), e.push(u), h.push(y))
    }
    var b, d, c, f, e, h;
    this.c3 = function() {
        b = [];
        d = [];
        c = [];
        f = [];
        e = [];
        h = []
    };
    this.dT = function() {
        var g, k = b.length;
        for (g = 0; g < k; g++)
            if (0 === d[g]) fZ(b[g], f[g], c[g]);
            else if (1 === d[g]) this.fa(b[g], c[g], e[g], h[g]);
        else if (2 === d[g]) this.fb(b[g], f[g]);
        else if (6 === d[g]) {
            var l = b[g];
            0 !== fT[l] && 2 !== fh[b] && eg.fl(l, 1 === f[g])
        } else 7 === d[g] && this.fd(b[g], f[g]);
        0 < k && this.c3()
    };
    this.fa = function(g, k, l, m) {
        0 !== fT[g] && 2 !==
            fh[b] && fD.d2(g, bJ.fF(l, m)) && fC(g, fD.fE(), bJ.fF(l, m), b6(k * bB[g], 1E3)) && g === bA && (bE.bF[0] += k, bE.bF[1]++, bE.bF[2]++)
    };
    this.fb = function(g, k) {
        if (0 !== fT[g] && 2 !== fh[b] && as.d2(g, k)) {
            var l = as.bw(g, k);
            as.bv(g, k, 0);
            if (g !== bA) bB[g] += l, bC.bD(g);
            else {
                var m = bB[g];
                bB[g] += l;
                bC.bD(g);
                bE.bF[13] -= bB[g] - m
            }
        }
    };
    this.fd = function(g, k) {
        if (0 !== fT[g] && 2 !== fh[b]) {
            var l = as.fj(g, k);
            if (-1 !== l) {
                var m = as.b0(g, l);
                as.bh(g, l, 0);
                bB[g] += m;
                bC.bD(g)
            }
        }
    };
    this.fm = function(g, k, l) {
        1 === fn && a(g, 0, k, l, 0, 0)
    };
    this.fp = function(g, k, l, m) {
        1 === fn && (fq ?
            fr.ce(g, l, m) : a(g, 1, k, 0, l, m))
    };
    this.fs = function(g, k) {
        1 === fn && a(g, 2, 1, k, 0, 0)
    };
    this.ft = function(g, k) {
        1 === fn && a(g, 7, 1, k, 0, 0)
    };
    this.fu = function(g, k) {
        1 === fn && a(g, 6, 1, k, 0, 0)
    };
    this.fv = function(g) {
        1 === fn && 0 !== fT[g] && 2 !== fh[g] && (8 === e9 ? fw.fx(1 - g) : this.fy(g));
        eN.fz(g, 4)
    };
    this.fy = function(g) {
        fq ? (g0(g), g1()) : eW.g2(g)
    };
    this.g3 = function(g) {
        0 !== fT[g] && 2 !== fh[g] && g4.g5(g) && (1 === dm ? fw.fx(g) : (eN.fz(g, g === bA ? 21 : 22), 8 === e9 ? fw.fx(1 - g) : eB ? (g0(g), g1(), fq && fr.dT()) : this.fy(g)))
    }
}

function g8() {
    function a(l) {
        for (c--; l < c; l++) f[l] = f[l + 1], e[l] = e[l + 1], h[l] = h[l + 1], g[l] = g[l + 1], k[l] = k[l + 1]
    }
    var b, d, c, f, e, h, g, k;
    this.c3 = function() {
        b = 1;
        c = 0;
        d = 2 * bM;
        f = new Uint16Array(d);
        e = new Uint8Array(d);
        h = new Uint16Array(d);
        g = new Uint32Array(d);
        k = new Uint32Array(d)
    };
    this.gE = function(l, m) {
        g[l] = m
    };
    this.dT = function() {
        for (var l = c - 1; 0 <= l; l--) 0 === e[l]-- && (e[l] = 2, gF.dT(l, h[l], f[l], g[l], k[l]))
    };
    this.b9 = function(l, m) {
        var u;
        for (u = c - 1; 0 <= u; u--)
            if (l === f[u] && m === h[u]) {
                a(u);
                break
            }
    };
    this.gH = function(l) {
        var m;
        for (m =
            c - 1; 0 <= m; m--) l === f[m] && (gF.gI(l, g[m]), a(m))
    };
    this.cf = function(l, m, u) {
        if (c >= d) return 0;
        f[c] = l;
        e[c] = 0;
        h[c] = b;
        g[c] = m;
        k[c] = u;
        l = b;
        b++;
        c++;
        b = b > 2 * d ? 1 : b;
        return l
    };
    this.cU = function() {
        if (!(40 > gL || 0 === c)) {
            var l, m = gQ / gL,
                u = gR / gL,
                y = (gS + gQ) / gL,
                z = (cP + gR) / gL;
            cV.textAlign = cX;
            cV.textBaseline = cW;
            for (l = c - 1; 0 <= l; l--) {
                var G = bJ.gT(g[l]);
                var B = bJ.cT(g[l]);
                var n = f[l];
                if (G > m - 1 && G < y && B > u - 1 && B < z && 0 !== fT[n]) {
                    var D = Math.floor(.94 * gL * eO.gU(n));
                    if (!(6 > D)) {
                        G = Math.floor(gS * (G + .5 - m) / (y - m));
                        B = Math.floor(cP * (B + .48 - u) / (z - u));
                        cV.font = c7 +
                            D + c8;
                        cV.fillStyle = gV;
                        cV.fillText(gW[n], G, B);
                        var C = Math.floor(.57 * D);
                        6 > C || (n = as.b0(n, as.fj(n, h[l])), cV.font = c7 + C + c8, cV.fillText(ed.gX(n), G, B + Math.floor(.82 * D)))
                    }
                }
            }
        }
    }
}

function gY() {
    function a(C) {
        G = cI.gq;
        B = 33;
        e = h = f = 0;
        g = B / C;
        c = 1 / (C / B / 4);
        k = (gS / 2 + gQ) / gL;
        l = (cP / 2 + gR) / gL;
        m = gL
    }

    function b(C) {
        .125 > Math.abs(Math.log(z / m)) && (z = C * m)
    }

    function d(C, E, A, F) {
        u = (C + A + 1) / 2;
        y = (E + F + 1) / 2;
        C = gS / (A - C + 1);
        E = cP / (F - E + 1);
        z = .9 * (C < E ? C : E)
    }
    var c, f, e, h, g, k, l, m, u, y, z, G, B, n = !1,
        D = !1;
    this.gr = function() {
        return n
    };
    this.gs = function() {
        a(1);
        this.gt(0, 0, an - 1, ao - 1);
        fq || this.gu(bA, 3E3, !0, .3)
    };
    this.gu = function(C, E, A, F) {
        if (!(gw || n && !A && D || 0 === bi[C])) {
            gx.gy = !1;
            D = A;
            a(E);
            u = (dE[C] + dD[C] + 1) / 2;
            y = (dH[C] + dG[C] + 1) / 2;
            E = dD[C] -
                dE[C] + 1;
            C = dG[C] - dH[C] + 1;
            A = gS / E;
            var J = cP / C;
            z = A < J ? A : J;
            z *= 0 !== F ? F : 20 > E && 20 > C ? .5 : .9;
            b(.875);
            n = !0;
            h1.h2()
        }
    };
    this.h3 = function(C) {
        gx.gy = !1;
        D = !0;
        a(C);
        d(0, 0, an - 1, ao - 1);
        b(.875);
        n = !0;
        h1.h2()
    };
    this.gt = function(C, E, A, F) {
        d(C, E, A, F);
        gL = z;
        gx.hA(u, gS / 2);
        gx.hB(y, cP / 2);
        hC.hD()
    };
    this.hE = function() {
        if (n && D) return !1;
        n = !1;
        return !0
    };
    this.dT = function() {
        if (n) {
            .5 > f ? h < g && (h += g * c, e = f) : f > 1 - e && (h -= g * c, h = h < g * c ? g * c : h);
            G = G >= cI.gq ? cI.gq - 1 : G;
            var C = cI.gq - G;
            1E3 < C ? f = 1 : (f += h * C / B, f = 1 < f ? 1 : f);
            G = cI.gq;
            var E = gL;
            C = gQ;
            var A = gR;
            gL = m * Math.pow(z /
                m, f);
            E = gL / E;
            var F = 1 - (m * Math.pow(z / m, 1 - f) - m) / (z - m);
            gx.hA(k + F * (u - k), gS / 2);
            gx.hB(l + F * (y - l), cP / 2);
            eO.zoom(E, (C * E - gQ) / (1 - E), (A * E - gR) / (1 - E));
            hC.hD();
            1 <= f && (n = !1, hM.hN = !0);
            cI.cJ = !0
        }
    }
}

function hO() {
    function a() {
        var B;
        a: {
            for (B = 0; 8 > B; B++)
                if (e = b6(g * cs.random(), cs.value(100)), h = b6(k * cs.random(), cs.value(100)), b()) {
                    B = !0;
                    break a
                } B = !1
        }
        if (!B) a: {
            var n, D, C, E;B = b6(g * cs.random(), cs.value(100));
            var A = b6(k * cs.random(), cs.value(100));
            for (n = 40; 1 <= n; n--)
                for (D = k - n; 0 <= D; D -= 40)
                    for (h = (D + A) % k, C = 40; 1 <= C; C--)
                        for (E = g - C; 0 <= E; E -= 40)
                            if (e = (E + B) % g, b()) {
                                B = !0;
                                break a
                            } B = !1
        }
        return B
    }

    function b() {
        var B, n;
        var D = b6(l - y, 2);
        var C = u + h * l + D,
            E = m + e * l + D;
        for (B = C + y - 1; B >= C; B--)
            for (n = E + y - 1; n >= E; n--)
                if (D = bJ.fF(n, B), !bJ.bK(D) ||
                    bJ.ci(D)) return !1;
        return !0
    }

    function d() {
        fT[z] = 0;
        bB[z] = 0;
        bi[z] = ho[z] = 0;
        bI[z] = [];
        ba[z] = [];
        bb[z] = [];
        be[z] = [];
        dE[z] = dH[z] = dD[z] = dG[z] = 0
    }

    function c(B, n) {
        fT[z] = 1;
        bB[z] = z < d4 ? hp : ds[dU.cb[z - d4]];
        dE[z] = B + 10;
        dH[z] = n + 10;
        dG[z] = dD[z] = 0;
        var D, C;
        for (D = B; D < B + 4; D++)
            for (C = n; C < n + 4; C++)
                if (D > B && D < B + 3 || C > n && C < n + 3) {
                    var E = bJ.fF(D, C);
                    bJ.bK(E) && (dE[z] = D < dE[z] ? D : dE[z], dD[z] = D > dD[z] ? D : dD[z], dH[z] = C < dH[z] ? C : dH[z], dG[z] = C > dG[z] ? C : dG[z], G[bi[z]] = E, bi[z]++, bJ.hs(E, z))
                } ho[z] = bi[z];
        for (E = bi[z] - 1; 0 <= E; E--) bJ.ht(G[E], z) ? (bJ.bL(G[E],
            z), ba[z].push(G[E])) : bJ.hu(G[E]) ? (bJ.bL(G[E], z), bb[z].push(G[E])) : bJ.hv(G[E]) && (bJ.bL(G[E], z), be[z].push(G[E]))
    }

    function f(B, n) {
        var D, C;
        for (C = n; C > n - 6; C--)
            for (D = B; D > B - 6; D--) {
                var E = bJ.fF(D, C);
                if (bJ.ci(E)) return !1
            }
        return !0
    }
    var e, h, g, k, l, m, u, y, z, G;
    this.c3 = function() {
        var B;
        G = Array(12);
        y = 6;
        l = 10;
        g = b6(an, l);
        k = b6(ao, l);
        m = b6(an - l * g, 2);
        u = b6(ao - l * k, 2);
        if (fq)
            for (B = 0; B < d4; B++) z = B, d(), fT[z] = 1;
        if (e5.e6 && e5.e7.hV)
            for (z = 0; z < bM; z++) {
                if (1 !== fT[z]) {
                    if (z < ha) {
                        var n = e5.e7.hV[z] + 1;
                        B = e5.e7.hg[z] + 1;
                        3 < n && n < an - 5 && 3 < B && B < ao - 5 &&
                            bJ.bK(bJ.fF(n, B)) && f(n + 3, B + 3) ? (n += 1, B += 1, d(), c(n - 2, B - 2), B = !0) : B = !1;
                        if (B) continue;
                        if (a()) {
                            n = m + e * l + b6(l, 2);
                            B = u + h * l + b6(l, 2);
                            d();
                            c(n - 2, B - 2);
                            continue
                        }
                    }
                    d()
                }
            } else
                for (z = 0; z < bM; z++) 1 !== fT[z] && (z < ha && a() ? (n = m + e * l + b6(l, 2), B = u + h * l + b6(l, 2), d(), c(n - 2, B - 2)) : d());
        bE.bF[7] = bi[bA];
        bE.bF[8] = bB[bA]
    };
    this.hw = function(B, n, D) {
        var C, E;
        z = B;
        for (C = 0; 20 > C; C++)
            for (B = n + C; B >= n - C; B--)
                for (E = D + C; E >= D - C; E--)
                    if ((B === n + C || B === n - C || E === D + C || E === D - C) && 3 < B && B < an - 5 && 3 < E && E < ao - 5 && bJ.bK(bJ.fF(B, E)) && f(B + 3, E + 3)) {
                        if (0 < bi[z]) {
                            for (D = dD[z]; D >=
                                dE[z]; D--)
                                for (n = dG[z]; n >= dH[z]; n--) C = 4 * (n * an + D), bJ.i0(z, C) && (bJ.i1(C), bi[z]--);
                            d()
                        }
                        c(B - 1, E - 1);
                        return !0
                    } return !1
    };
    this.i2 = function(B) {
        z = B;
        if (a()) {
            B = m + e * l + b6(l, 2);
            var n = u + h * l + b6(l, 2);
            d();
            c(B - 2, n - 2)
        } else d()
    }
}

function i3() {
    i4.i5();
    cV.setTransform(gL, 0, 0, gL, 0, 0);
    cV.imageSmoothingEnabled = 3 > gL;
    cV.drawImage(i6, gx.gT(), gx.cT());
    eb.cU();
    cV.drawImage(i7, gx.gT(), gx.cT());
    cV.imageSmoothingEnabled = !1;
    i4.cU();
    cV.setTransform(1, 0, 0, 1, 0, 0);
    eO.cU();
    eY.cU();
    gw || (cV.imageSmoothingEnabled = !1, eN.cU(), ea.cU(), ef.cU(), eg.cU(), eP.cU(), gx.cU(), cG.cU(), eh.cU(), ec.cU(), ed.cU(), g4.cU(), ek.cU(), i8.cU(), i9.cU(), el.cU())
}

function iA(a, b, d) {
    a.clearRect(0, 0, b, d);
    a.fillStyle = iC;
    a.fillRect(0, 0, b, d)
}

function iD(a, b, d, c) {
    a.fillStyle = cY;
    a.fillRect(0, 0, b, c);
    a.fillRect(0, 0, c, d);
    a.fillRect(b - c, 0, c, d);
    a.fillRect(0, d - c, b, c)
}

function iF(a, b, d, c, f, e, h) {
    a.fillStyle = cY;
    e = Math.floor(c * e);
    e += (e - f) % 2;
    var g = Math.floor((e - f) / 2);
    c = Math.floor((c - e) / 2);
    a.fillRect(b + c, d + c + g, e, f);
    h && a.fillRect(b + c + g, d + c, f, e)
}

function iL() {
    this.iM = null;
    this.c3 = function(a) {
        this.iM = a;
        eN.iN(this.iM)
    };
    this.iO = function(a) {
        var b = 8 / (1 + Math.pow(2, (this.iM[a].iQ - this.iM[1 - a].iQ) / 10 / 32));
        b = Math.floor(10 * b + .5);
        var d = this.iT(this.iM[a].iQ + b + 1);
        b = this.iT(this.iM[1 - a].iQ - b);
        0 === a ? eN.iV(this.iM, d, b, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : eN.iV(this.iM, b, d, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
    };
    this.iT = function(a) {
        a = 0 > a ? 0 : 16E3 < a ? 16E3 : a;
        return 16E3 <= a ? "Unknown" : (a / 10).toFixed(1)
    }
}

function iW() {
    function a(f) {
        for (var e = b.length - 1; 0 <= e; e--)
            if (f >= b[e] && f < d[e]) return e;
        return -1
    }
    var b, d, c;
    (function() {
        b = [32, 65, 191, 913, 931];
        d = [64, 127, 688, 930, 1155];
        c = Array(b.length + 1);
        for (var f = 0; f < c.length; f++) {
            c[f] = 0;
            for (var e = f - 1; 0 <= e; e--) c[f] += d[e] - b[e]
        }
    })();
    this.ib = function(f) {
        f = f.trim();
        if (0 === f.indexOf("Bot ") || 0 === f.indexOf("[Bot] ")) f = !1;
        else a: {
            f = f.trim();
            var e = f.length;
            if (3 > e || 20 < e) f = !1;
            else {
                for (var h = 0, g, k = 0; k < e; k++)
                    if (g = f.charCodeAt(k), h += 65 <= g && 90 >= g || 1040 <= g && 1071 >= g ? 1 : 0, -1 === a(g)) {
                        f = !1;
                        break a
                    } f = 3 < h && h > Math.floor(e / 2) ? !1 : !0
            }
        }
        return f
    };
    this.ii = function(f) {
        f = f.trim();
        for (var e = f.length, h = [], g, k = 0; k < e; k++) {
            g = f.charCodeAt(k);
            var l = a(g);
            h.push(c[l] + g - b[l])
        }
        return h
    };
    this.ij = function(f) {
        for (var e = "", h = f.length, g, k = 0; k < h; k++)
            for (g = 1; g < c.length; g++)
                if (f[k] < c[g]) {
                    g = b[g - 1] + f[k] - c[g - 1];
                    e += String.fromCharCode(g);
                    break
                } return e
    };
    this.ik = function(f) {
        f = this.ii(f);
        for (var e = "", h = 0; h < f.length; h++) e += 10 > f[h] ? "00" : 100 > f[h] ? "0" : "", e += f[h].toString(10);
        return e
    };
    this.il = function(f) {
        for (var e = Array(Math.floor(f.length /
                3)), h = 0; h < f.length; h += 3) e[Math.floor(h / 3)] = parseInt(f.substring(h, h + 3));
        return this.ij(e)
    };
    this.aD = function(f) {
        var e, h = [f.length];
        for (e = 0; e < f.length; e++) h[e] = f.charCodeAt(e) - 48;
        var g = "";
        for (e = 0; e < f.length; e++)
            if (e === f.length - 1 || 51 < 10 * h[e] + h[e + 1]) g += h[e].toString();
            else {
                var k = 10 * h[e] + h[e + 1];
                g += String.fromCharCode(k + (26 > k ? 65 : 71));
                e++
            } return g
    };
    this.a1 = function(f) {
        for (var e = "", h, g = 0; g < f.length; g++) h = f.charCodeAt(g), 48 <= h && 58 > h ? e += String.fromCharCode(h) : 65 <= h && 75 > h ? e += "0" + (h - 65).toString() : 75 <= h && 91 >
            h ? e += (h - 65).toString() : 97 <= h && 123 > h && (e += (h - 71).toString());
        return e
    };
    this.im = function(f) {
        var e = f.length,
            h, g = [];
        for (h = 0; h < e; h++) {
            var k = f.charCodeAt(h);
            58 > k ? g.push(f[h]) : (k = 91 > k ? k - 65 : k - 71, g.push(String(b6(k, 10))), g.push(String(k - 10 * b6(k, 10))))
        }
        e = g.length - 2;
        k = 0;
        f = [];
        for (h = 0; h < e; h += 3) f[k++] = parseInt(g[h] + g[h + 1] + g[h + 2]);
        return f
    };
    this.ip = function() {
        var f, e = "";
        for (f = 0; 6 > f; f++) {
            var h = 48 + cs.random() % 36;
            h += 58 <= h ? 39 : 0;
            e += String.fromCharCode(h)
        }
        return e
    }
}

function ir() {
    this.fx = function(a) {
        if (2 === fn) var b = !0;
        else eg.j9(), fn = 2, jA = jB, b = !1;
        if (!b) {
            if (8 === e9) {
                var d = a = 0 > a ? bi[0] >= bi[1] ? 0 : 1 : a;
                (b = a === bA) ? eN.fz(a, 2): eN.fz(1 - bA, 3);
                iy.iO(a)
            } else dO ? (a = eh.iz(), b = dk.dl[bA] === a, 9 === e9 ? d = b ? f0[0] : 512 : (a = dk.j0(dk.j1[a]), d = a[0], 512 !== d && eN.j2(a[1])), eN.j3(b)) : (d = f0[0], b = d === bA, eN.j4(d));
            eB || j5.j6(j7(), d);
            ek.show(b, !1);
            eN.jC(!0);
            ea.ep(!0);
            eP.ep(!0);
            cI.cJ = !0;
            hM.jD();
            aN(0)
        }
    }
}

function jE() {
    this.ce = function(a, b, d) {
        0 !== fT[a] && jF.hw(a, b, d) && (cI.cJ = !0)
    };
    this.dT = function() {
        fq = !1;
        for (var a = 0; a < d4; a++) 0 !== fT[a] && 0 === bi[a] && jF.i2(a);
        0 !== fT[bA] ? (bE.bF[7] = bi[bA], bE.bF[8] = bB[bA], ef.cS(), eP.jG(), ej.gt(dE[bA] - 5, dH[bA] - 5, dD[bA] + 5, dG[bA] + 5), el.c3()) : ek.show(!1, !1);
        eN.jH(18);
        eO.jI();
        eO.ep();
        fr = null;
        hM.jJ = !0;
        hM.jK();
        eB && aN(1)
    }
}
var d4, jB, e4, jA, bM = 512,
    ha = 512,
    jL = 150,
    eB, jM, fn = 0,
    jN, jO, jP, hp = 512,
    b7 = 2,
    bA, gw, fq, jQ, dO, jR, e9, jS, fr, iy, jT;

function jU(a, b, d, c, f) {
    jM = gw = !1;
    e9 = c;
    jS = f;
    dO = 7 > e9 || 9 === e9;
    jB = d4 = d.length;
    eB = 1 === jB;
    e9 = 10 === e9 && eB ? 7 : e9;
    e9 = 8 === e9 && 2 !== d4 ? 7 : e9;
    jR = 9 === e9 ? 2 : e9 + 2;
    jT = 2 >= d4 ? 30 : 50 >= d4 ? 40 : 50;
    jQ = e5.e6 && !e5.e7.jZ ? fq = !1 : fq = dO || 100 > d4;
    fr = fq ? new jE : null;
    hp = 512;
    ha = bM;
    eB && (ha = eC.ja());
    e4 = ha - d4;
    jA = 0;
    bA = b;
    cs.jb(a);
    jc(d);
    eG.c3();
    dk.c3(d);
    fn = 1;
    jO = 15E8;
    jP = 1E9;
    bE.c3();
    jd();
    je.jf();
    hM.c3();
    bC.c3();
    dN();
    bJ.c3(d);
    i4.c3();
    eh.c3();
    dU.c3();
    jg.jh();
    jg.ji();
    jF.c3();
    jj();
    eb.c3();
    i9.c3();
    jk.putImageData(jl, 0, 0);
    ea.c3();
    gx.c3();
    ef.c3();
    eg.c3();
    ec.c3();
    eP.c3();
    g4.c3();
    cG.c3();
    eN.c3();
    ed.c3();
    i8.c3();
    ek.c3();
    eU.c3();
    eY.c3();
    b8.c3();
    eX.c3();
    am();
    as.c3();
    eO.c3();
    eT.c3();
    eW.c3();
    ee.c3();
    eV.c3();
    8 === e9 ? (iy = new iL, iy.c3(d)) : iy = null;
    eB ? cI.jm() : cI.jn();
    jo();
    el.c3();
    cI.cJ = !0;
    eB && fq || aN(1)
}

function jo() {
    ej.gs();
    0 === fT[bA] && ek.show(!1, !0);
    eO.ep()
}

function jp() {
    eR.close(eR.jq, 3246);
    fn = 0;
    cI.jr();
    js.c3();
    aN(0);
    aP()
}
var dU, b8, dS, eX, eU, eY, ej, jF, a0, i8, g4, eN, jt, ed, cG, ef, gx, ju, ec, ea, eP, ek, jv, jw, aX, jx, jy, jz, eC, js, cA, bJ, t, as, bC, eO, jg, eG, je, k0, k1, h1, fD, cs, gF, i4, k2, k3, el, j5, k4, eb, k5, k6, eg, em, eR, eV, k7, k8, eW, eT, ee, k9, e5;

function kA() {
    dU = new dt;
    b8 = new er;
    dS = new f5;
    eX = new fQ;
    eU = new fV;
    eY = new g8;
    ej = new gY;
    jF = new hO;
    a0 = new iW;
    i8 = new kB;
    g4 = new kC;
    eN = new kD;
    jt = new kE;
    ed = new kF;
    cG = new kG;
    ef = new kH;
    gx = new kI;
    ju = new kJ;
    ec = new kK;
    ea = new kL;
    eP = new kM;
    ek = new kN;
    jv = new kO;
    jw = new kP;
    aX = new kQ;
    jx = new kR;
    jx.jh();
    jy = new kS;
    jz = new kT;
    eC = new kU;
    js = new kV;
    cA = new kW;
    bJ = new kX;
    t = new kY;
    as = new kZ;
    bC = new ka;
    eO = new kb;
    jg = new kc;
    eG = new kd;
    je = new ke;
    k0 = new kf;
    k1 = new kg;
    h1 = new kh;
    fD = new ki;
    cs = new kj;
    gF = new kk;
    i4 = new kl;
    k2 = new km;
    k3 = new kn;
    el = new ko;
    j5 = new kp;
    k4 = new kq;
    eb = new kr;
    k5 = new ks;
    k6 = new kt;
    eg = new ku;
    em = new kv;
    eR = new kw;
    eV = new kx;
    k7 = new ky;
    k8 = new kz;
    eW = new l0;
    eT = new l1;
    ee = new l2;
    k9 = new l3;
    e5 = new l4
}

function kB() {
    function a(E, A, F, J) {
        for (var K, I = 0; I < E.length; I++) {
            A.push(document.createElement("canvas"));
            A[I].width = F;
            A[I].height = F;
            K = A[I].getContext("2d", {
                alpha: !0
            });
            var N = F,
                P = K;
            P.fillStyle = J;
            P.beginPath();
            P.arc(Math.floor(N / 2), Math.floor(N / 2), Math.floor(.47 * N), 0, 2 * Math.PI);
            P.fill();
            6 === E[I] ? K.drawImage(cA.cD(19), 0, 0) : 7 === E[I] ? K.drawImage(cA.lN("emojis"), -4 * F, 0) : K.drawImage(cA.cD(3), -E[I] * F, 0)
        }
    }

    function b(E) {
        for (var A = D.length - 1; 0 <= A; A--)
            if (D[A] === E) return !0;
        return !1
    }

    function d(E) {
        return -1 === E ||
            0 === E || 6 === E || !f[5] && (8 === E || !f[4] && 7 === E) || !f[7] && (2 === E || !f[6] && 1 === E) || 3 === E && !f[2] || 5 === E && !f[1] && !f[5] && !f[7] ? !1 : !0
    }

    function c(E, A) {
        return E < h - k - G || E > h + 2 * k + G || A < g - k - G || A > g + 2 * k + G ? -1 : 3 * (A < g - G / 2 ? 0 : A < g + k + G / 2 ? 1 : 2) + (E < h - G / 2 ? 0 : E < h + k + G / 2 ? 1 : 2)
    }
    var f = [],
        e, h, g, k, l, m, u, y, z, G, B, n, D, C;
    this.lE = [];
    this.c3 = function() {
        D = [];
        f = [];
        e = !1;
        l = m = h = g = u = 0;
        this.lF();
        for (var E = this.lG.length - 1; 0 <= E; E--) f.push(!1);
        f.push(!1)
    };
    this.lF = function() {
        this.lG = [];
        B = [];
        this.lH = [];
        var E = cA.cD(3).height;
        k = Math.floor((a4 ? .075 : .0468) * c4);
        n = k / E;
        G = Math.floor(k / 3);
        a([0, 1, 2, 3, 7, 4, 5, 6], this.lG, E, "rgba(0,180,0,0.6)");
        a([0, 4, 5], B, E, "rgba(200,0,0,0.6)");
        a([0, 2, 4], this.lH, E, "rgba(0,0,0,0.6)");
        a([0, 5], this.lE, E, "rgba(200,200,0,0.6)");
        this.lG[6] = this.lE[1]
    };
    this.lP = function(E, A) {
        if (this.lQ()) {
            var F = this.cL(E, A);
            cI.cJ = 0 < F;
            return 2 > F
        }
        return !1
    };
    this.lR = function(E, A) {
        this.lQ() || (l = E, m = A, u = (new Date).getTime())
    };
    this.lS = function(E) {
        return E < d4 && 2 !== fh[E]
    };
    this.cL = function(E, A) {
        m = l = -1E3;
        if (2 === fh[bA] || 0 === fT[bA] && !fq) return this.lT(), 1;
        if (e) {
            this.lT();
            if (aJ.lU(E, A)) aJ.lV(E, A, y) && (e = !0);
            else return aJ.lW(), 2;
            return 1
        }
        var F = c(E, A);
        if (!d(F) || 0 === F || 6 === F || !f[2] && 3 === F) return this.lT(), 2;
        if (1 === F) {
            if (f[6]) {
                F = (new Date).getTime();
                F > C + 4E3 && (D = []);
                C = F;
                if (b(y)) return this.lT(), 1;
                D.push(y);
                16 < D.length && D.shift();
                this.lT();
                return 1
            }
            return 0
        }
        if (2 === F) {
            if (f[7]) {
                for (F = D.length - 1; 0 <= F; F--) 0 === fT[D[F]] && D.splice(F, 1);
                0 < D.length && (ee.lc(1, D, !0) && (eN.ld(D, y), j5.le(D, y)), D = []);
                this.lT();
                return 1
            }
            return 0
        }
        if (3 === F) {
            this.lT();
            if (this.lS(y) && 7 > e9 && 1071 > cI.di()) return eN.lf(),
                1;
            eN.lg();
            eB ? dp(bA, y, b6(ef.lh() * bB[bA], 1E3)) : j5.li(ef.lh(), y === bM ? bA : y);
            return 1
        }
        if (4 === F) return f[0] ? fq ? (this.lT(), eB ? (fr.ce(0, bJ.gT(z), bJ.cT(z)), fr.dT()) : j5.lk(1E3, bJ.gT(z), bJ.cT(z))) : (this.lT(), eN.lg(), eB ? fZ(bA, y, ef.lh()) : (!jQ || 300 < eP.lj()) && j5.li(ef.lh(), y === bM ? bA : y)) : f[8] ? (this.lT(), eV.ll(y, ef.lh())) : this.lT(), 1;
        if (5 === F) return f[1] ? (this.lT(), eN.lg(), eB ? eU.fa(bA, ef.lh(), bJ.gT(z), bJ.cT(z)) : j5.lk(ef.lh(), bJ.gT(z), bJ.cT(z)), 1) : 0;
        if (7 === F && f[4]) return this.lT(), e = aJ.show(E, A), 1;
        if (8 === F) return f[5] ?
            (ee.lc(0, [y], !0) && (eN.lm(y, 0), j5.ln(y)), this.lT(), 1) : 0;
        this.lT();
        return 2
    };
    this.click = function(E, A) {
        if (this.lQ() || 2 === fh[bA] || 0 === fT[bA] && !fq) return !1;
        var F = (a4 ? .0288 : .0144) * c4;
        if (Math.abs(E - l) > F || Math.abs(A - m) > F || (new Date).getTime() > u + 425) return !1;
        F = Math.floor((E + gQ) / gL);
        var J = Math.floor((A + gR) / gL);
        if (1 > F || 1 > J || F >= an - 1 || J >= ao - 1) return !1;
        var K = J * an * 4 + 4 * F;
        if (!bJ.bK(K)) return !1;
        if (2 === fn) return 1 <= aJ.lr && (y = bJ.bT(K), this.lS(y)) ? (y === bA && this.lT(), f[4] = !0, this.ls(E, A)) : !1;
        z = bJ.fF(F, J);
        if (fq) return f[0] = !0, this.ls(E, A);
        f[1] = fD.d2(bA, z);
        if (bJ.bU(K)) return y = bM, lt(bA) ? f[0] = !0 : lu(bA, y) && (f[8] = !0), this.ls(E, A);
        y = bJ.bT(K);
        if (y === bA) {
            this.lT();
            if (0 === aJ.lr) return !1;
            f[4] = !0;
            return this.ls(E, A)
        }
        F = f;
        J = y;
        J = i8.lS(J) && !b(J) && ee.lc(1, [J], !1);
        F[6] = J;
        f[4] = 1 <= aJ.lr && this.lS(y);
        if (cv(y, bA)) {
            f[5] = this.lS(y) && !eO.lw(y) && ee.lc(0, [y], !1);
            F = f;
            J = y;
            if (0 === D.length) J = !1;
            else if ((new Date).getTime() > C + 4E3) D = [], J = !1;
            else {
                if (K = !b(J)) {
                    b: {
                        if (dO)
                            for (K = D.length - 1; 0 <= K; K--)
                                if (!cv(J, D[K])) {
                                    J = !0;
                                    break b
                                } J = !1
                    }
                    K = !J
                }
                J = K
            }
            F[7] = J;
            ly(bA,
                y) ? f[0] = !0 : lu(bA, y) && (f[8] = !0);
            return this.ls(E, A)
        }
        f[2] = dO;
        return this.ls(E, A)
    };
    this.ls = function(E, A) {
        h = E - Math.floor(k / 2);
        g = A - Math.floor(k / 2);
        return this.lQ()
    };
    this.m0 = function(E, A) {
        if (!this.lQ()) return !1;
        if (e) {
            if (aJ.lU(E, A)) return !1;
            aJ.lW();
            e = !1;
            return cI.cJ = !0
        }
        return d(c(E, A)) ? !1 : (this.lT(), cI.cJ = !0)
    };
    this.lT = function() {
        var E;
        for (E = f.length - 1; 0 <= E; E--) f[E] = !1;
        e = !1
    };
    this.m1 = function() {
        this.lT()
    };
    this.lQ = function() {
        var E;
        for (E = f.length - 1; 0 <= E; E--)
            if (f[E]) return !0;
        return e
    };
    this.cU = function() {
        this.lQ() &&
            this.m2()
    };
    this.m2 = function() {
        if (e) aJ.cU();
        else {
            var E = (k + G) / n;
            cV.imageSmoothingEnabled = !0;
            cV.setTransform(n, 0, 0, n, h, g);
            f[0] ? fq ? cV.drawImage(this.lG[3], 0, 0) : cV.drawImage(this.lG[0], 0, 0) : f[8] ? cV.drawImage(this.lE[0], 0, 0) : cV.drawImage(B[0], 0, 0);
            f[1] && cV.drawImage(this.lG[1], E, 0);
            f[2] && cV.drawImage(this.lG[2], -E, 0);
            f[4] && cV.drawImage(this.lG[4], 0, E);
            f[5] && cV.drawImage(this.lG[5], E, E);
            f[6] && cV.drawImage(this.lG[6], 0, -E);
            f[7] && cV.drawImage(this.lG[7], E, -E);
            cV.imageSmoothingEnabled = !1;
            cV.setTransform(1,
                0, 0, 1, 0, 0)
        }
    }
}

function kC() {
    function a() {
        var l = f.getContext("2d", {
            alpha: !0
        });
        l.clearRect(0, 0, c, c);
        l.fillStyle = mB;
        l.fillRect(0, 0, c, c);
        0 === g && (l.fillStyle = mC, l.fillRect(0, 0, c, c));
        l.fillStyle = cY;
        l.fillRect(0, 0, c, 1);
        l.fillRect(0, 0, 1, c);
        l.fillRect(0, c - 1, c, 1);
        l.fillRect(c - 1, 0, 1, c);
        var m = .9 * c / cA.cD(0).width;
        l.imageSmoothingEnabled = !0;
        l.setTransform(m, 0, 0, m, Math.floor((c - m * cA.cD(0).width) / 2), Math.floor((c - m * cA.cD(0).height) / 2));
        l.drawImage(cA.cD(0), 0, 0);
        l.setTransform(1, 0, 0, 1, 0, 0)
    }

    function b(l, m) {
        if (!g4.m8) return l <= c +
            mJ && m >= ef.fY ? 0 : -1;
        if (l <= 4 * c + mJ) {
            if (m >= ef.fY) return 0;
            if (m >= ef.fY - c - k * mJ) return 2;
            if (m >= ef.fY - 2 * (c + k * mJ)) return 3
        } else if (l <= 7 * c + mJ && m >= ef.fY - c - k * mJ) return 1;
        return -1
    }

    function d(l, m) {
        cV.setTransform(1, 0, 0, 1, mJ, ef.fY - l * k * mJ - l * c);
        cV.fillStyle = mB;
        cV.fillRect(0, 0, 4 * c, c);
        g === l + 1 && m === cY && (cV.fillStyle = mC, cV.fillRect(0, 0, 4 * c, c));
        cV.fillStyle = m;
        cV.fillRect(0, 0, 4 * c, 1);
        cV.fillRect(0, 0, 1, c);
        cV.fillRect(4 * c, 0, 1, c);
        cV.fillRect(0, c - 1, 4 * c, 1);
        cV.fillText(h[l], 2 * c, .54 * c)
    }
    var c, f, e, h = ["Quit Game", "Surrender", "Statistics"],
        g, k;
    this.c3 = function() {
        g = -1;
        this.m8 = !1;
        k = a4 ? 1.2 : .6;
        this.m9()
    };
    this.m9 = function() {
        c = ef.dA;
        f = document.createElement("canvas");
        f.width = c;
        f.height = c;
        e = c7 + Math.floor((a4 ? .5 : .45) * c) + c8;
        a()
    };
    this.mE = function() {
        (this.m8 = !this.m8) ? (gw = !1, eB && 1 === fn && !fq && (setTimeout(function() {
            hM.jD()
        }, 0), aN(0))) : (g = -1, a(), eB && aN(1));
        cI.cJ = !0
    };
    this.cL = function(l, m) {
        var u = b(l, m);
        return this.m8 ? 0 === u ? (jp(), 2) : 1 === u ? (this.mE(), 2) : 2 === u ? (this.g5(bA) && (eB ? eU.g3(bA) : j5.mH(), this.mE()), 2) : 3 === u && 2 <= bE.mI ? (i9.mE(), cI.cJ = !0, 2) : i9.lQ ||
            eB && !fq ? 1 : (this.mE(), 2) : 0 === u ? (this.mE(), 2) : 0
    };
    this.m0 = function(l, m) {
        var u = b(l, m);
        if (u === g) return -1 !== g;
        g = u;
        this.m8 || a();
        cI.cJ = !0;
        return -1 !== g
    };
    this.cU = function() {
        if (this.m8) {
            var l = Math.floor(5.5 * c);
            cV.setTransform(1, 0, 0, 1, mJ, ef.fY);
            cV.fillStyle = mB;
            cV.fillRect(0, 0, l, c);
            0 === g ? (cV.fillStyle = mC, cV.fillRect(0, 0, 4 * c, c)) : 1 === g && (cV.fillStyle = mC, cV.fillRect(4 * c, 0, Math.floor(1.5 * c), c));
            cV.fillStyle = cY;
            cV.fillRect(0, 0, l, 1);
            cV.fillRect(0, 0, 1, c);
            cV.fillRect(4 * c, 0, 1, c);
            cV.fillRect(0, c - 1, l, 1);
            cV.fillRect(l - 1,
                0, 1, c);
            cV.font = e;
            cV.textBaseline = cW;
            cV.textAlign = cX;
            cV.fillText(h[0], 2 * c, .54 * c);
            l = .4 * c;
            g4.mN(mJ + 4 * c + (1.5 * c - l) / 2, ef.fY + .3 * c, l);
            d(1, g4.g5(bA) ? cY : mP);
            2 <= bE.mI && d(2, cY);
            cV.setTransform(1, 0, 0, 1, 0, 0)
        } else cV.drawImage(f, mJ, ef.fY)
    };
    this.g5 = function(l) {
        return 0 !== fT[l] && 2 !== fn && i8.lS(l)
    };
    this.mN = function(l, m, u) {
        cV.setTransform(1, 0, 0, 1, l, m);
        cV.lineWidth = 2;
        cV.strokeStyle = cY;
        cV.beginPath();
        cV.moveTo(0, 0);
        cV.lineTo(u, u);
        cV.moveTo(0, u);
        cV.lineTo(u, 0);
        cV.stroke()
    }
}

function kD() {
    var a, b, d, c, f, e, h;

    function g() {
        return ef.mr(eN.mo()) ? eg.lQ ? ef.fY - ef.dA - 2 * G : ef.fY - G : eg.lQ ? a6 - ef.dA - (a4 ? 3 : 2) * G : a6 - G
    }

    function k(A, F, J, K, I, N, P, Q) {
        var O = 1E3 <= J;
        var Z = Math.floor(cG.measureText(F, eN.cE) + 1.5 * B + (O ? z : 1.5 * B));
        if (Z + G > a5 && !O && 50 !== J && 20 < F.length) {
            var T = Math.floor(.5 * F.length);
            k(A, F.substring(0, T), J, K, I, N, P, Q);
            k(A, F.substring(T), J, K, I, N, P, Q)
        } else {
            var U = J - 1E3;
            T = Z + (50 === J ? n : 0);
            var ca = document.createElement("canvas");
            ca.width = Z;
            ca.height = z;
            var L = ca.getContext("2d", {
                alpha: !0
            });
            L.font =
                eN.cE;
            L.textBaseline = cW;
            L.textAlign = mv;
            L.clearRect(0, 0, Z, z);
            L.fillStyle = N;
            L.fillRect(0, 0, Z, z);
            L.fillStyle = I;
            L.fillText(F, Math.floor(1.5 * B), Math.floor(z / 2));
            O && (O = z / aJ.cF, L.imageSmoothingEnabled = !0, L.setTransform(O, 0, 0, O, Z - z, 0), L.drawImage(aJ.lJ[U], 0, 0));
            y.unshift({
                gq: A,
                z: F,
                id: J,
                player: K,
                m4: ca,
                mi: I,
                mj: N,
                cF: Z,
                mp: T,
                mk: P,
                ml: Q
            })
        }
    }

    function l(A, F) {
        var J, K = 0,
            I = y.length;
        for (J = 0; J < I; J++)
            if (y[J].id === A && (K++, K >= F)) {
                y.splice(J, 1);
                break
            }
    }

    function m(A, F, J) {
        return "rgb(" + A + "," + F + "," + J + ")"
    }

    function u(A, F) {
        var J, K = !1;
        for (J = y.length - 1; 0 <= J; J--) y[J].id !== A || F !== bM && y[J].player !== F || (y.splice(J, 1), K = !0);
        return K
    }
    var y, z, G, B, n, D, C, E;
    this.c3 = function() {
        C = 0;
        D = a4 ? 7 : 12;
        a = [0, 0, 0];
        b = [0, 0, 0];
        d = [220, 180, 180];
        c = [0, 0, 0];
        f = [0, 0, 0];
        e = [" were conquered.", " left the game.", " surrendered."];
        h = [" was conquered by ", " left the game.", " surrendered."];
        y = [];
        this.m9();
        fq && this.fz(0, 18);
        var A = "Map: " + k0.nR() + "   Pixels: " + ed.gX(je.nS) + "   Land: " + ed.gX(je.nT) + " (" + eP.nU(100 * je.nT / je.nS, 1) + ")",
            F = "";
        0 < je.nW && (F += "Water: " + ed.gX(je.nW) +
            " (" + eP.nU(100 * je.nW / je.nS, 1) + ")");
        0 < je.nX && (F += 0 < je.nW ? "   " : "", F += "Mountains: " + ed.gX(je.nX) + " (" + eP.nU(100 * je.nX / je.nS, 1) + ")");
        k(340, A, 6, 0, m(215, 245, 255), iC, -1, !1);
        0 < F.length && k(340, F, 6, 0, m(215, 245, 255), iC, -1, !1);
        10 === e9 && k(120, "Full sending against human players is disabled.", 6, 0, m(235, 255, 120), iC, -1, !1);
        this.md()
    };
    this.md = function() {
        var A;
        if (e5.e6) {
            var F = e5.e7.me.length;
            for (A = 0; A < F; A++) k(400, e5.e7.me[A], 6, 0, m(255, 255, 255), iC, -1, !1)
        }
    };
    this.m9 = function() {
        var A;
        z = Math.floor((a4 ? .031 : .0249) * c4);
        z = 10 > z ? 10 : z;
        this.cC = Math.floor(2 * z / 3);
        this.cE = c7 + this.cC + c8;
        G = mJ;
        B = Math.floor(z / 5);
        if (0 < y.length) {
            var F = y;
            y = [];
            for (A = F.length - 1; 0 <= A; A--) k(F[A].gq, F[A].z, F[A].id, F[A].player, F[A].mi, F[A].mj, F[A].mk, F[A].ml)
        }
        this.mm()
    };
    this.mm = function() {
        E = document.createElement("canvas");
        n = cG.measureText("Accept", this.cE) + 5 * B;
        E.height = z;
        E.width = n;
        var A = E.getContext("2d", {
            alpha: !0
        });
        A.font = this.cE;
        A.textBaseline = cW;
        A.textAlign = cX;
        A.clearRect(0, 0, n, z);
        A.fillStyle = mn;
        A.fillRect(0, 0, n, z);
        A.fillStyle = cY;
        A.fillText("Accept",
            Math.floor(n / 2), Math.floor(z / 2))
    };
    this.mo = function() {
        if (eg.lQ) return eg.cF;
        var A = y.length;
        return 0 === A ? 0 : 1 === A ? y[0].mp : mq(y[0].mp, y[1].mp)
    };
    this.cL = function(A, F) {
        for (var J = g(), K, I = y.length - 1; 0 <= I; I--)
            if (K = J - (I + 1) * z, F >= K && F < K + z) {
                if (50 === y[I].id) {
                    if (A >= gS - n - G - y[I].cF) return A >= gS - n - G ? (I = y[I].player, this.lm(I, 0), j5.ln(I)) : ej.gu(y[I].player, 800, !1, 0), !0;
                    break
                }
                if (A >= gS - y[I].cF - G) return y[I].ml && (ej.gu(y[I].player, 800, !1, 0), 0 <= y[I].mk && (J = y[I].mk, y[I].mk = y[I].player, y[I].player = J)), !0;
                break
            } return !1
    };
    this.jH =
        function(A) {
            for (var F = y.length - 1; 0 <= F; F--) y[F].id === A && (y[F].gq = 1)
        };
    this.fz = function(A, F) {
        0 === F ? (bE.bF[A < d4 ? 4 : 3]++, cG.ce(A, 0), k(a4 ? 100 : 160, "You conquered " + gW[A] + ".", 0, A, "rgb(10,220,10)", iC, -1, !1)) : 1 === F ? (u(50, bM), cG.ce(A, 1), k(360, "You were conquered by " + gW[A] + ".", 0, A, "rgb(255,40,40)", iC, -1, !0), ej.gu(A, 2700, !0, 0)) : 2 === F ? (cG.ce(A, 2), k(0, "Congratulations! You won the game.", 0, A, "rgb(10,255,255)", iC, -1, !0), ej.gu(A, 2700, !0, 0)) : 3 === F ? (cG.ce(A, 2), k(0, gW[A] + " won the game.", 0, A, cY, iC, -1, !0), ej.gu(A, 2700,
            !0, 0)) : 4 === F ? (jB--, jA--, this.mx(1, A, A)) : 5 === F ? 2 !== fh[A] && i8.lS(bA) && (l(1, 5), eO.mz(A) ? k(180, gW[A] + " has broken the non-aggression pact and invades you!", 1, A, m(255, 200, 180), iC, -1, !0) : k(180, gW[A] + " is attacking you!", 1, A, "rgb(255,70,10)", iC, -1, !0)) : 18 === F ? k(255, "Choose your start position!", 18, 0, cY, iC, -1, !1) : 21 === F ? k(220, "You surrendered!", F, 0, "rgb(255,40,40)", iC, -1, !1) : 22 === F && this.mx(2, A, A)
    };
    this.n0 = function(A) {
        k(200, "Error [" + A + "]", 94, 0, cY, n2, -1, !1)
    };
    this.j4 = function(A) {
        cG.ce(A, 2);
        100 > d4 ? k(0, gW[A] +
            " won the game.", 3, A, cY, iC, -1, !0) : k(0, gW[A] + " has been immortalized!", 3, A, cY, iC, -1, !0);
        ej.gu(A, 2700, !0, 0)
    };
    this.n3 = function(A, F, J) {
        A === bA ? k(175, " Message to " + gW[F] + ": ", 1E3 + J, F, m(200, 255, 210), iC, -1, !0) : this.n6(A, J)
    };
    this.n6 = function(A, F) {
        var J, K = 0;
        k(175, gW[A] + ": ", 1E3 + F, A, cY, "rgba(5,60,25,0.9)", -1, !0);
        for (J = 0; J < y.length; J++)
            if (1E3 <= y[J].id && y[J].player === A && (K++, 3 < K)) {
                y.splice(J, 1);
                break
            }
    };
    this.j3 = function(A) {
        var F = dk.j1[eh.nA()];
        A ? (9 === e9 ? (A = "The Resistance defeated the virus.", cG.nB("The Resistance",
            2, 1, 12)) : A = "Congratulations! Team " + dk.c2[F] + " has won the game!", k(0, A, 40, 0, "rgb(10,220,10)", iC, -1, !1)) : (9 === e9 ? (A = "Mankind lost the war against the virus.", cG.nB("The Virus", 2, 0, 16)) : A = "Our alliance has been defeated!", k(0, A, 41, 0, "rgb(200,80,80)", iC, -1, !1));
        9 !== e9 && cG.nB("Team " + dk.c2[F], 2, 1, 12);
        ej.h3(2700)
    };
    this.iN = function(A) {
        k(300, A[0].name + " [" + iy.iT(A[0].iQ) + "] vs " + A[1].name + " [" + iy.iT(A[1].iQ) + "]", 65, 0, gV, "rgba(100,255,255,0.75)", -1, !1)
    };
    this.nC = function(A) {
        k(200, A, 0, 0, "rgb(40,255,200)",
            "rgba(10,60,40,0.9)", -1, !1)
    };
    this.iV = function(A, F, J, K) {
        1 === eR.nE() && (k(0, A[0].name + ": " + iy.iT(A[0].iQ) + " -> " + F, 66, 0, cY, K[0], -1, !1), k(0, A[1].name + ": " + iy.iT(A[1].iQ) + " -> " + J, 66, 1, cY, K[1], -1, !1))
    };
    this.j2 = function(A) {
        1 === eR.nE() && k(0, "[" + A + "] has won " + d4 + (jS ? " x 2" : "") + " points!", 45, 0, "rgb(225,240,255)", iC, -1, !1)
    };
    this.lm = function(A, F) {
        0 === F ? u(50, A) ? (k(128, "You signed a non-aggression pact with " + gW[A] + ".", 52, A, m(180, 255, 180), iC, -1, !0), eO.nG(A, 2, 255)) : k(384, "You asked " + gW[A] + " to sign a non-aggression pact.",
            51, A, m(210, 210, 255), iC, -1, !0) : u(51, A) ? (k(128, gW[A] + " accepted the non-aggression pact.", 52, A, cY, "rgba(60,120,10,0.9)", -1, !0), eO.nG(A, 2, 255)) : (k(384, gW[A] + " requests a non-aggression pact.", 50, A, cY, "rgba(90,90,90,0.9)", -1, !0), eO.nG(A, 2, 96))
    };
    this.ld = function(A, F) {
        var J = "You ",
            K;
        a: {
            for (K = A.length - 1; 0 <= K; K--)
                if (2 * bi[A[K]] > bi[bA]) {
                    K = !1;
                    break a
                } K = !0
        }
        K ? (J += "ordered ", K = m(255, 235, 210)) : (J += "asked ", K = m(210, 255, 210));
        1 < A.length ? k(230, J + A.length + " players to attack " + gW[F] + ".", 66, F, K, iC, -1, !0) : k(230, J + gW[A[0]] +
            " to attack " + gW[F] + ".", 66, A[0], K, iC, F, !0)
    };
    this.nJ = function(A, F) {
        bi[A] > 2 * bi[bA] ? k(230, gW[A] + " orders you to attack " + gW[F] + "!", 66, A, cY, "rgba(90,50,5,0.9)", F, !0) : k(230, gW[A] + " asks you to attack " + gW[F] + ".", 66, A, cY, "rgba(75,65,5,0.9)", F, !0)
    };
    this.nL = function(A, F) {
        u(A, F)
    };
    this.lg = function() {
        100 <= bB[bA] || k(80, "Your balance is too low!", 9, 0, cY, iC, -1, !1)
    };
    this.lf = function() {
        k(80, "Boosting is disallowed in the first minute!", 9, 0, cY, iC, -1, !1)
    };
    this.nM = function(A, F) {
        2 !== fh[bA] && k(200, "You exported " + ed.gX(A) +
            " resource" + (1 === A ? "" : "s") + " to " + gW[F] + ".", 30, F, "rgb(190,255,190)", iC, -1, !0)
    };
    this.nO = function(A, F) {
        if (2 !== fh[bA]) {
            var J = 2 === fh[F] || F >= d4;
            var K = 200 - 20 * y.length;
            k(80 > K ? 80 : K, (J ? "A bot" : gW[F]) + " supported you with " + ed.gX(A) + " resource" + (1 === A ? "" : "s") + ".", 31, F, gV, J ? "rgba(205,205,205,0.9)" : "rgba(205,255,205,0.9)", -1, !0);
            l(31, a4 ? 4 : 6)
        }
    };
    this.jC = function(A) {
        var F, J = cI.di();
        for (F = 2; 0 <= F; F--) 0 < c[F] && (A || f[F] < J - 220) && this.nZ(F)
    };
    this.nZ = function(A) {
        var F = c[A];
        var J = a[A];
        c[A] = 0;
        1 === F ? (F = gW[J] + h[A], 0 === A && (F +=
            gW[b[A]] + "."), k(d[A], F, 7, b[A], cY, iC, -1, !0)) : 2 <= F && (F = gW[J] + " and " + (F - 1) + " other player" + (2 === F ? "" : "s") + e[A], k(d[A], F, 7, J, cY, iC, -1, !1))
    };
    this.mx = function(A, F, J) {
        var K = cI.di(),
            I = c[A] + 1;
        c[A]++;
        a[A] = F;
        b[A] = J;
        1 === I && (f[A] = K);
        1 === I && (32 > jB || 2 === fn) ? this.nZ(A) : 1 < I && (f[A] < K - 140 || 2 === fn) && this.nZ(A)
    };
    this.dT = function() {
        var A, F = y.length - D;
        F = 1 >= F ? 1 : F * F;
        for (A = y.length - 1; 0 <= A; A--) 0 < y[A].gq && (y[A].gq -= F, 0 >= y[A].gq && y.splice(A, 1));
        if (128 !== C && (C++, !(128 > C)))
            for (A = 5, F = dm - 1; 0 <= F; F--) 1 === fh[dn[F]] && 0 < A-- && k(240, gW[dn[F]] +
                " joined the game.", 1, dn[F], gV, "rgba(255,255,255,0.75)", -1, !0);
        this.jC(!1)
    };
    this.cU = function() {
        for (var A = g(), F, J = y.length - 1; 0 <= J; J--) F = A - (J + 1) * z, 50 === y[J].id ? (cV.drawImage(y[J].m4, gS - y[J].cF - n - G, F), cV.drawImage(E, gS - n - G, F)) : cV.drawImage(y[J].m4, gS - y[J].cF - G, F)
    }
}

function nc() {
    this.cC = this.ne = this.nd = this.iI = this.dA = this.cF = 0;
    this.c6 = -1;
    this.m5 = ["Accept Cookies", "More Information", "Decline"];
    this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"];
    this.lQ = !1;
    this.c3 = function() {
        this.m9();
        this.lQ = 5 > r && !p && 0 === t.aE()
    };
    this.m9 = function() {
        this.cF = Math.floor(2.8 * Math.floor((a4 ? .09 : .062) * c4));
        this.dA = Math.floor(1 * this.cF);
        this.iI = Math.floor(.06 * this.cF);
        this.iJ = this.cF - 2 * this.iI;
        this.nd = this.iI;
        this.ne = (this.dA - (this.m5.length + 1) * this.nd) / this.m5.length;
        this.cC = Math.floor(.3 * this.ne)
    };
    this.cL = function(a, b) {
        if (!this.lQ) return !1;
        var d = this.ng(a, b);
        if (-1 === d) return !1;
        0 === d ? (t.nh(2), this.lQ = !1) : 1 === d ? ni.c3(nj, !0) : 2 === d && (t.nh(1), this.lQ = !1);
        return cI.cJ = !0
    };
    this.m0 = function(a, b) {
        if (!this.lQ) return !1;
        var d = this.c6;
        this.c6 = this.ng(a, b);
        d !== this.c6 && (cI.cJ = !0);
        return -1 !== this.c6
    };
    this.ng = function(a, b) {
        a -= cO;
        b -= Math.floor(cP - this.dA - cO);
        if (0 > a || 0 > b || a >= this.cF || b >= this.dA) return -1;
        var d = Math.floor((b - .5 * this.nd) / ((this.dA - this.nd) / this.m5.length));
        return 0 >
            d ? 0 : d >= this.m5.length ? this.m5.length - 1 : d
    };
    this.cU = function() {
        this.lQ && this.nk()
    };
    this.nk = function() {
        var a = cO,
            b = Math.floor(cP - this.dA - cO);
        cV.setTransform(1, 0, 0, 1, a, b);
        cV.fillStyle = iC;
        cV.fillRect(0, 0, this.cF, this.dA);
        cV.textBaseline = cW;
        cV.textAlign = cX;
        cV.strokeStyle = cY;
        cV.font = c7 + this.cC + c8;
        cV.strokeRect(0, 0, this.cF, this.dA);
        for (var d = this.m5.length - 1; 0 <= d; d--) cV.setTransform(1, 0, 0, 1, a + this.iI, b + this.nd + d * (this.nd + this.ne)), cV.fillStyle = this.colors[d], cV.fillRect(0, 0, this.iJ, this.ne), this.c6 === d && (cV.fillStyle =
            nl, cV.fillRect(0, 0, this.iJ, this.ne)), cV.fillStyle = cY, cV.fillText(this.m5[d], this.iJ / 2, .54 * this.ne), cV.strokeRect(0, 0, this.iJ, this.ne);
        cV.setTransform(1, 0, 0, 1, 0, 0)
    }
}

function kE() {
    function a(g) {
        return 10 > g ? "0" + g : String(g)
    }
    var b, d, c, f, e, h;
    this.c3 = function() {
        void 0 === f && this.m9();
        this.setTime()
    };
    this.m9 = function() {
        f = Math.floor((a4 ? .53 : .36) * c4);
        e = Math.floor(.065 * f);
        h = c7 + Math.floor(.9 * e) + c8;
        c--;
        this.setTime()
    };
    this.dT = function() {
        this.setTime() && (cI.cJ = !0)
    };
    this.setTime = function() {
        var g = new Date;
        var k = g.getUTCMinutes(),
            l = g.getUTCSeconds();
        d = 3600 - 60 * k - l;
        d %= 900;
        b = "Next Contest: " + a(Math.floor(d / 60)) + ":" + a(d % 60);
        g = c;
        c = 60 * k + l;
        if (g === c) return !1;
        f = cG.measureText(b, h);
        f +=
            Math.floor(.4 * e);
        return !0
    };
    this.cU = function() {
        cV.lineWidth = 1 + Math.floor(e / 15);
        cV.translate(gS - e, Math.floor(.5 * (cP + f)));
        cV.rotate(-Math.PI / 2);
        cV.fillStyle = cY;
        cV.fillRect(0, 0, f, e);
        cV.strokeStyle = gV;
        cV.strokeRect(0, 0, f, e + 10);
        cV.fillStyle = gV;
        cV.font = h;
        cV.textBaseline = cW;
        cV.textAlign = cX;
        cV.fillText(b, Math.floor(f / 2), Math.floor(.59 * e));
        cV.setTransform(1, 0, 0, 1, 0, 0)
    }
}

function nu() {
    this.nv = 10;
    this.nx = this.nw = 50;
    this.ny = 8;
    this.nz = this.nw + this.nx;
    this.aK = this.nw + this.nx + this.ny;
    this.cF = 72;
    this.o1 = this.o0 = 0;
    this.lJ = Array(this.aK);
    this.o2 = 8;
    this.o3 = Array(this.nw + this.nx);
    this.o4 = Array(this.nw + this.nx);
    this.fO = this.fN = 0;
    this.zoom = 1;
    this.o5 = .2;
    this.lr = 0;
    this.o6 = this.aL = null;
    this.o7 = 0;
    this.c3 = function() {
        var a;
        this.aL = Array(this.aK);
        this.o6 = Array(this.aK);
        var b = cA.lN("emojis");
        this.o9();
        for (a = this.lr = 0; a < this.nw; a++) this.oA(a, a, b);
        b = cA.lN("flags");
        for (a = 0; a < this.nx; a++) this.oA(a,
            this.nw + a, b);
        this.oC();
        this.lJ[26] = this.oD(25, 2);
        this.oE()
    };
    this.oA = function(a, b, d) {
        this.aL[b] = !1;
        this.o6[b] = 0;
        var c = document.createElement("canvas");
        c.width = this.cF;
        c.height = this.cF;
        var f = c.getContext("2d", {
            alpha: !0
        });
        f.clearRect(0, 0, this.cF, this.cF);
        23 === b ? f.drawImage(i8.lH[2], 0, 0) : 36 === b ? f.drawImage(i8.lH[0], 0, 0) : 49 === b ? f.drawImage(i8.lH[1], 0, 0) : f.drawImage(d, this.cF * a % (a === b ? this.nv * this.cF : 4E3), a === b ? b6(a, this.nv) * this.cF : 0, this.cF, this.cF, 0, 0, this.cF, this.cF);
        this.lJ[b] = c
    };
    this.oC = function() {
        this.lJ[this.aK -
            5] = this.lJ[26];
        this.lJ[this.aK - 4] = this.oD(this.aK - 5, 2);
        this.lJ[this.aK - 1] = this.oD(this.aK - 5, 1);
        this.lJ[this.aK - 8] = this.oD(this.aK - 4, 1);
        this.lJ[this.aK - 3] = this.lJ[39];
        this.lJ[this.aK - 2] = this.oD(this.aK - 3, 1);
        this.lJ[this.aK - 7] = this.oD(this.aK - 2, 1);
        this.lJ[this.aK - 6] = this.oD(this.aK - 7, 1)
    };
    this.oD = function(a, b) {
        var d = document.createElement("canvas");
        d.width = this.cF;
        d.height = this.cF;
        var c = d.getContext("2d", {
            alpha: !0
        });
        c.clearRect(0, 0, this.cF, this.cF);
        c.rotate(b * Math.PI / 2);
        c.drawImage(this.lJ[a], 1 === b ?
            0 : -this.cF, -this.cF);
        return d
    };
    this.oE = function() {
        var a = a8().split("");
        if (2 * a.length !== this.aK) this.lr = 0;
        else {
            for (var b = 0; b < this.aK; b += 2) {
                var d = parseInt(a[Math.floor(b / 2)]);
                this.aL[b] = 1 === d % 2;
                this.aL[b + 1] = 1 < d
            }
            this.oH()
        }
    };
    this.oH = function() {
        for (var a = this.lr = 0; a < this.aK; a++) this.aL[a] && (this.o6[this.lr++] = a)
    };
    this.lW = function() {
        8 === this.lr && this.o6[0] === this.nz && this.oH()
    };
    this.oI = function() {
        this.lr = this.ny;
        for (var a = 0; a < this.ny; a++) this.o6[a] = this.nz + a
    };
    this.o9 = function() {
        this.o0 = Math.floor((a4 ? .075 :
            .0468) * c4);
        this.zoom = this.o0 / this.cF;
        this.o1 = (1 + this.o5) * this.o0
    };
    this.show = function(a, b) {
        if (1 > this.lr) return !1;
        this.o7 = cI.gq;
        var d = Math.floor(gS / this.o1);
        d = 3 > d ? 3 : d > this.o2 ? this.o2 : d;
        d = this.lr > d ? d : this.lr;
        var c = 1 + b6(this.lr - 1, d),
            f = Math.floor(d * this.o1),
            e = Math.floor(a - f / 2);
        e = e + f > gS ? gS - f : e;
        e = 0 > e ? 0 : e;
        var h = Math.floor(b - this.o1 / 2);
        c = Math.floor(c * this.o1);
        h = h + c > cP ? cP - c : h;
        h = 0 > h ? 0 : h;
        this.fN = e + f;
        this.fO = h + c;
        for (f = 0; f < this.lr; f++) this.o3[f] = Math.floor(e + f % d * this.o1), this.o4[f] = Math.floor(h + b6(f, d) * this.o1);
        return !0
    };
    this.lU = function(a, b) {
        return !(a < this.o3[0] || b < this.o4[0] || a >= this.fN || b >= this.fO)
    };
    this.lV = function(a, b, d) {
        if (d === bA && this.o7 + 190 > cI.gq) return !1;
        for (var c = this.lr - 1; 0 <= c; c--)
            if (a >= this.o3[c] && b >= this.o4[c]) {
                if (39 === this.o6[c]) return this.oI(), this.show(a, b), !0;
                eB ? eO.nG(bA, 0, this.o6[c]) : d === bA ? j5.oM(this.o6[c]) : j5.oN(this.o6[c], d);
                this.oH();
                break
            } return !1
    };
    this.oO = function(a) {
        return 16 > a || 40 <= a && 47 > a
    };
    this.oP = function(a) {
        return a >= this.nw && a < this.nw + this.nx
    };
    this.cU = function() {
        cV.imageSmoothingEnabled = !0;
        for (var a = this.o5 * this.o0 / 2, b = this.lr - 1; 0 <= b; b--) cV.setTransform(this.zoom, 0, 0, this.zoom, this.o3[b] + a, this.o4[b] + a), cV.drawImage(this.lJ[this.o6[b]], 0, 0);
        cV.imageSmoothingEnabled = !1;
        cV.setTransform(1, 0, 0, 1, 0, 0)
    };
    this.oQ = function(a, b, d) {
        cV.imageSmoothingEnabled = !0;
        cV.setTransform(this.zoom, 0, 0, this.zoom, a, b);
        cV.drawImage(this.lJ[d], 0, 0);
        cV.imageSmoothingEnabled = !1;
        cV.setTransform(1, 0, 0, 1, 0, 0)
    }
}
var gV = "rgb(0,0,0)",
    oR = "rgba(0,0,0,0.7)",
    oS = "rgba(0,0,0,0.5)",
    mB = "rgba(0,0,0,0.5)",
    iC = "rgba(0,0,0,0.75)",
    oT = "rgba(0,0,0,0.85)",
    oU = "rgba(0,96,96,0.75)",
    oV = "rgb(255,255,255)",
    mP = "rgb(128,128,128)",
    oW = "rgb(30,255,30)",
    oX = "rgb(0,200,0)",
    oY = "rgb(0,255,0)",
    oZ = "rgba(0,255,0,0.6)",
    oa = "rgba(0,255,0,0.5)",
    ob = "rgba(0,200,0,0.5)",
    mn = "rgba(0,100,0,0.75)",
    oc = "rgba(0,40,0,0.8)",
    od = "rgb(128,255,128)",
    oe = "rgba(255,255,150,0.2)",
    of = "rgba(0,255,0,0.3)",
    mC = "rgba(255,255,255,0.3)",
    og = "rgba(0,40,90,0.75)",
    oh = "rgba(220,0,0,0.6)",
    oi = "rgba(255,100,100,0.8)",
    n2 = "rgba(100,0,0,0.85)",
    oj = "rgba(60,0,0,0.85)",
    ok = "rgb(255,120,120)",
    ol = "rgb(255,160,160)",
    om = "rgb(255,70,70)",
    on = "rgb(230,0,0)",
    oo = "rgba(0,60,60,0.85)",
    op = "rgb(160,160,255)",
    cY = "rgb(255,255,255)",
    oq = "rgba(255,255,255,0.6)",
    or = "rgba(255,255,255,0.4)",
    nl = "rgba(255,255,255,0.25)",
    os = "rgba(255,255,255,0.85)",
    ot = "rgba(255,255,255,0.75)",
    ou = "rgb(255,120,100)",
    ov = "rgba(255,255,0,0.5)",
    cW = "middle",
    ow = "bottom",
    cX = "center",
    mv = "left",
    ox = "right",
    c7 = "bold ",
    oy = "italic ",
    oz = "normal ",
    c8 = "px Arial",
    p0 = [c7, oy + c7, c7],
    p1 = "https://play.google.com/store/apps/details?id=territorial.io",
    p2 = "https://apps.apple.com/app/id1581110913",
    p3 = "https://www.youtube.com/watch?v=toZTQ8aRdFc",
    p4 = "https://discord.gg/pthqvpTXmh",
    p5 = "https://www.instagram.com/davidtschacher/",
    nj = "https://territorial.io/cookie_policy",
    p6 = "https://territorial.io/privacy_policy",
    p7 = "https://territorial.io/tutorial",
    p8 = ["https://territorial.io/players", "https://territorial.io/clans"],
    mJ, p9, cO, pA, pB, pC, pD, cQ, pE = ["wss://",
        "/s50/", "/s51/", "/s52/"
    ];

function pF() {
    pG();
    pA = 3;
    cQ = new pH;
    cQ.c3()
}

function pI() {
    pJ.addEventListener("mousedown", pK);
    pJ.addEventListener("mousemove", pL);
    pJ.addEventListener("mouseup", pM);
    pJ.addEventListener("click", pN);
    pJ.addEventListener("mouseleave", pO);
    pJ.addEventListener("wheel", pP);
    pJ.addEventListener("touchstart", pQ);
    pJ.addEventListener("touchmove", pR);
    pJ.addEventListener("touchend", pS);
    pJ.addEventListener("touchcancel", pT);
    pJ.addEventListener("dragover", pU);
    pJ.addEventListener("drop", pV);
    pB = !1
}

function pG() {
    cO = Math.floor((a4 ? .02 : .01152) * c4);
    cO = 2 > cO ? 2 : cO;
    mJ = Math.floor((a4 ? .0114 : .01296) * c4);
    mJ = 2 > mJ ? 2 : mJ;
    p9 = Math.floor(.005 * pW);
    p9 = 1 > p9 ? 1 : p9
}

function pK(a) {
    a.preventDefault();
    pB || (eR.pY(eR.jq), pZ(Math.floor(pa * a.clientX), Math.floor(pa * a.clientY)))
}

function pQ(a) {
    a.preventDefault();
    eR.pY(eR.jq);
    pB = !0;
    0 < a.touches.length && (pC = Math.floor(pa * a.touches[0].clientX), pD = Math.floor(pa * a.touches[0].clientY), k2.pb(a) || pZ(pC, pD))
}

function pZ(a, b) {
    if (0 === fn) aX.cL(a, b);
    else if (!(i9.cL(a, b) || i8.lP(a, b) || ek.cL(a, b) || ed.cL(a, b))) {
        var d = g4.cL(a, b);
        2 === d || ea.cL(a, b) || (gx.cL(a, b) ? cI.cJ = !0 : ef.pd(a, b) ? (gx.gy = !1, ef.pe(a, b) && (cI.cJ = !0)) : eN.cL(a, b) || eg.cL(a, b) || 0 === d && i8.lR(a, b))
    }
}

function pL(a) {
    pB = !1;
    a.preventDefault();
    pf(Math.floor(pa * a.clientX), Math.floor(pa * a.clientY))
}

function pR(a) {
    a.preventDefault();
    0 < a.touches.length && (pC = Math.floor(pa * a.touches[0].clientX), pD = Math.floor(pa * a.touches[0].clientY), k2.pg(a) || pf(pC, pD))
}

function pf(a, b) {
    0 === fn ? aX.m0(a, b) : i9.m0(a, b) || (i8.lQ() ? i8.m0(a, b) : g4.m0(a, b) || (ef.ph ? ef.m0(a, b) && (cI.cJ = !0) : (ea.m0(a, b), gx.gy && gx.m0(a, b) && (cI.cJ = !0))))
}

function pO(a) {
    a.preventDefault();
    0 === fn ? (aX.click(-1024, -1024), ju.pi()) : (ea.pj(-1024, -1024), g4.m0(-1024, -1024), ef.pk(), gx.gy && (gx.gy = !1))
}

function pM(a) {
    a.preventDefault();
    pB || pl(Math.floor(pa * a.clientX), Math.floor(pa * a.clientY))
}

function pN(a) {
    2 === aX.pm() && eC.click(a.clientX, a.clientY)
}

function pS(a) {
    a.preventDefault();
    a && a.touches && 0 < a.touches.length && 0 !== fn ? gx.gy = !1 : pl(pC, pD)
}

function pT(a) {
    a.preventDefault();
    pl(pC, pD)
}

function pU(a) {
    k9.pn(a)
}

function pV(a) {
    k9.po(a)
}

function pl(a, b) {
    0 === fn ? aX.click(a, b) : (ea.pj(a, b), i9.pj(), ef.pk(), gx.gy = !1, i8.click(a, b) && (cI.cJ = !0))
}

function pP(a) {
    a.preventDefault();
    eR.pY(eR.jq);
    var b = Math.floor(pa * a.clientX),
        d = Math.floor(pa * a.clientY),
        c = a.deltaY;
    1 === a.deltaMode && (c *= 20);
    0 === fn ? aX.pp(b, d, c) : ea.pp(b, d, c) || (ef.pd(b, d) ? ef.pp(c) && (cI.cJ = !0) : gx.pp(b, d, 2 * c) && (cI.cJ = !0))
}

function pq(a, b, d) {
    a.fillStyle = cY;
    a.fillRect(0, 0, b, 1);
    a.fillRect(0, d - 1, b, 1);
    a.fillRect(0, 0, 1, d);
    a.fillRect(b - 1, 0, 1, d)
}

function kF() {
    function a(m) {
        var u = e[m].m4.width;
        e[m].iB.clearRect(0, 0, u, k);
        e[m].iB.fillStyle = 0 !== e[m].id ? "rgba(33,33,120,0.83)" : e[m].ca === bM ? "rgba(88,88,88,0.83)" : e[m].ca < d4 ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)";
        e[m].iB.fillRect(0, 0, u, k);
        pq(e[m].iB, u, k);
        u > h + 2 * k && (e[m].iB.fillRect(u - h - k, 0, 1, k), e[m].iB.fillText(gW[e[m].ca], Math.floor((u - h) / 2), Math.floor(.57 * k)));
        var y = 0 !== e[m].id ? 0 : k;
        e[m].iB.fillText(ed.gX(e[m].cb), Math.floor(u - h / 2 - y), Math.floor(.57 * k));
        e[m].iB.fillStyle = oq;
        e[m].iB.fillRect(Math.floor(u -
            h - y), k - l, Math.floor(h * e[m].cb / e[m].q5), l);
        0 === e[m].id ? (b(m, u), e[m].iB.strokeStyle = od, e[m].iB.fillRect(k, 0, 1, k), u -= k, e[m].iB.beginPath(), e[m].iB.moveTo(Math.floor(.3 * k + u), Math.floor(k / 2)), e[m].iB.lineTo(Math.floor(k - .3 * k + u), Math.floor(k / 2)), e[m].iB.stroke(), e[m].iB.beginPath(), e[m].iB.moveTo(Math.floor(k / 2 + u), Math.floor(.3 * k)), e[m].iB.lineTo(Math.floor(k / 2 + u), Math.floor(k - .3 * k)), e[m].iB.stroke()) : b(m, 2 * k)
    }

    function b(m, u) {
        e[m].iB.strokeStyle = e[m].q6 ? mP : ol;
        e[m].iB.fillStyle = cY;
        e[m].iB.fillRect(u - k, 0,
            1, k);
        var y = Math.floor(k / 12);
        e[m].iB.lineWidth = 3 > y ? 3 : y;
        e[m].iB.lineCap = "round";
        u = k + 1;
        e[m].iB.beginPath();
        e[m].iB.moveTo(Math.floor(u - .35 * k), Math.floor(.35 * k));
        e[m].iB.lineTo(Math.floor(u - k + .35 * k), Math.floor(k - .35 * k));
        e[m].iB.stroke();
        e[m].iB.beginPath();
        e[m].iB.moveTo(Math.floor(u - k + .35 * k), Math.floor(.35 * k));
        e[m].iB.lineTo(Math.floor(u - .35 * k), Math.floor(k - .35 * k));
        e[m].iB.stroke()
    }

    function d(m) {
        m.m4 = document.createElement("canvas");
        px.font = g;
        var u = h;
        m.ca < bM && 0 === m.id && (u += Math.floor(px.measureText(gW[m.ca] +
            "000").width));
        u += k;
        0 === m.id && (u += k);
        m.m4.width = u;
        m.m4.height = k;
        m.iB = m.m4.getContext("2d", {
            alpha: !0
        });
        m.iB.font = g;
        m.iB.textBaseline = cW;
        m.iB.textAlign = cX
    }

    function c(m) {
        return ec.qR() ? gS - e[m].m4.width - mJ : ec.fX
    }

    function f(m) {
        return Math.floor(2 * mJ + (ec.qR() ? eP.dA + mJ : 0) + ec.dA + 1.3 * m * k)
    }
    var e, h, g, k, l;
    this.c3 = function() {
        e = [];
        this.m9()
    };
    this.m9 = function() {
        g = eN.cE;
        k = eN.cC + 5;
        k = Math.floor(1.25 * k);
        a4 && (k = Math.floor(1.25 * k));
        l = Math.floor(.15 * k);
        px.font = g;
        h = Math.floor(px.measureText("02 000 000 0000").width);
        for (var m =
                e.length - 1; 0 <= m; m--) d(e[m]), a(m)
    };
    this.ep = function() {
        for (var m = e.length - 1; 0 <= m; m--) e[m].q0 && (e[m].q0 = !1, a(m))
    };
    this.gX = function(m) {
        if (1E3 > m) return 0 > m ? "-" + this.gX(Math.abs(m)) : m.toString();
        var u = Math.floor(Math.log(m + .5) / Math.log(10)) + 1,
            y = Math.floor((u - 1) / 3);
        m = m.toString();
        for (var z = m.substring(u - 3, u), G = 1; G < y; G++) z = m.substring(u - 3 * (G + 1), u - 3 * G) + " " + z;
        return m.substring(0, u - 3 * y) + " " + z
    };
    this.cL = function(m, u) {
        if (2 === fn || 0 === fT[bA] || jM || !i8.lS(bA)) return !1;
        var y, z = a4 ? k : 0,
            G = a4 ? Math.floor(.15 * k) : 0;
        for (y =
            e.length - 1; 0 <= y; y--) {
            var B = c(y);
            var n = f(y);
            var D = e[y].m4.width;
            if (u >= n - G && u <= n + k + G) {
                if (m >= B - z && m <= B + k + z) return e[y].q6 || (e[y].q0 = !0, e[y].q6 = !0, 0 === e[y].id ? eB ? eU.fb(bA, e[y].ca) : j5.qK(e[y].ca === bM ? bA : e[y].ca) : eB ? eU.fd(bA, e[y].id) : j5.qL(e[y].id)), !0;
                if (0 === e[y].id && m >= B + D - k - z && m <= B + D + z) return eB ? fZ(bA, e[y].ca, ef.lh()) : j5.li(ef.lh(), e[y].ca === bM ? bA : e[y].ca), !0
            }
        }
        return !1
    };
    this.dT = function() {
        if (2 !== fn && 0 !== fT[bA] && !jM && i8.lS(bA)) {
            var m = as.at(bA);
            b: if (e.length !== m) var u = !0;
                else {
                    for (u = m - 1; 0 <= u; u--)
                        if (e[u].id !==
                            as.au(bA, u) || e[u].ca !== as.az(bA, u)) {
                            u = !0;
                            break b
                        } u = !1
                }
            if (u) {
                var y, z = [];
                u = 0;
                b: for (; u < m; u++) {
                    var G = as.au(bA, u);
                    var B = as.az(bA, u);
                    for (y = 0; y < e.length; y++)
                        if (e[y].id === G && e[y].ca === B) {
                            z.push(e.splice(y, 1)[0]);
                            continue b
                        } y = as.b0(bA, u);
                    G = {
                        ca: B,
                        cb: y,
                        q5: y,
                        id: G,
                        q0: !0,
                        q6: !1,
                        m4: null,
                        iB: null
                    };
                    d(G);
                    z.push(G)
                }
                e = z
            }
            for (--m; 0 <= m; m--) u = as.b0(bA, m), e[m].cb !== u && (e[m].cb = u, e[m].q5 = u > e[m].q5 ? u : e[m].q5, e[m].q0 = !0)
        }
    };
    this.cU = function() {
        if (0 !== fT[bA] && i8.lS(bA) && !jM)
            for (var m = e.length - 1; 0 <= m; m--) cV.drawImage(e[m].m4, c(m),
                f(m))
    }
}

function kG() {
    function a() {
        cV.drawImage(B, mJ + (dO ? mJ + eh.qf() : 0), qg + 2 * mJ)
    }

    function b() {
        B.width = c[0].width + z;
        B.height = g + z;
        n = B.getContext("2d", {
            alpha: !0
        });
        n.clearRect(0, 0, c[0].width + z, g + z);
        n.translate(Math.floor(z / 2), Math.floor(z / 2));
        n.lineWidth = z;
        n.fillStyle = 1 === c[0].qd ? os : iC;
        d();
        n.fill();
        n.strokeStyle = 1 === c[0].qd ? gV : cY;
        d();
        n.stroke();
        n.textAlign = cX;
        n.textBaseline = cW;
        n.fillStyle = 1 === c[0].qd ? gV : cY;
        n.font = k[0];
        n.fillText(u[c[0].qc], Math.floor(c[0].width / 2), Math.floor(.72 * m[0] * g));
        n.font = k[1];
        n.fillText(c[0].z, Math.floor(c[0].width /
            2), Math.floor((m[0] + .48 * m[1]) * g))
    }

    function d() {
        n.beginPath();
        n.moveTo(G, 0);
        n.lineTo(c[0].width - G, 0);
        n.lineTo(c[0].width, G);
        n.lineTo(c[0].width, g - G);
        n.lineTo(c[0].width - G, g);
        n.lineTo(G, g);
        n.lineTo(0, g - G);
        n.lineTo(0, G);
        n.closePath()
    }
    var c, f, e, h, g, k, l, m, u, y, z, G, B, n, D, C;
    this.c3 = function() {
        D = 0;
        f = 4;
        e = h = 0;
        c = [];
        k = Array(2);
        l = Array(2);
        m = Array(2);
        u = ["YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:"];
        m[0] = .3;
        m[1] = .7;
        y = Array(4);
        B = document.createElement("canvas");
        C = cI.gq + 2E3;
        this.m9()
    };
    this.m9 =
        function() {
            var E;
            g = Math.floor((a4 ? .0725 : .058) * c4);
            l[0] = Math.floor(.85 * m[0] * g);
            l[1] = Math.floor(.85 * m[1] * g);
            k[0] = c7 + l[0] + c8;
            k[1] = c7 + l[1] + c8;
            for (E = y.length - 1; 0 <= E; E--) y[E] = this.measureText(u[E] + "000", k[0]);
            z = Math.floor(1 + .05 * g);
            G = Math.floor(.2 * g);
            if (0 < c.length) {
                for (E = c.length - 1; 0 <= E; E--) {
                    var A = this.measureText(c[E].z + "00", k[1]);
                    c[E].width = A < y[E] ? y[E] : A
                }
                b()
            }
        };
    this.dT = function() {
        if (0 !== f)
            if (4 === f) cI.gq > C && (f = 0, 1 === fn && cG.nB(k0.nR(), 3, 1, 9));
            else {
                if (1 === f) 0 === e && (b(), e = 1E-4), e += .002 * (cI.gq - D), 1 <= e && (h = 0,
                    f = 2, e = 1), cI.cJ = !0;
                else if (2 === f) {
                    if (h += (cI.gq - D) / 1E3, h > c[0].gp || 1 < h && 1 < c.length) f = 3
                } else 3 === f && (e -= .002 * (cI.gq - D), 0 >= e && (e = 0, c.shift(), f = 0 < c.length ? 1 : 0), cI.cJ = !0);
                D = cI.gq
            }
    };
    this.measureText = function(E, A) {
        cV.font = A;
        return Math.floor(cV.measureText(E).width)
    };
    this.ce = function(E, A) {
        this.nB(gW[E], A, 1, 0 === A ? 3 : 7)
    };
    this.nB = function(E, A, F, J) {
        var K = this.measureText(E + "00", k[1]);
        K = K < y[A] ? y[A] : K;
        c.push({
            z: E,
            width: K,
            qc: A,
            qd: F,
            gp: J
        });
        0 === f && (e = 0, f = 1, D = cI.gq)
    };
    this.cU = function() {
        0 !== f && 0 !== e && (1 > e ? (cV.globalAlpha =
            e, a(), cV.globalAlpha = 1) : a())
    }
}

function ku() {
    function a() {
        var n = eg.cF;
        u = !1;
        iA(e, n, c);
        var D = Math.floor(n / 2);
        1 === g ? (e.fillStyle = oZ, e.fillRect(D, 0, D, c)) : -1 === g && (e.fillStyle = oh, e.fillRect(0, 0, D, c));
        iD(e, n, c, 2);
        D = Math.floor(.25 * c);
        D = 2 > D ? 2 : D;
        e.fillStyle = ot;
        var C = Math.floor((c - 4) * k[1] / l[1]);
        0 < C && e.fillRect(2, c - 2 - C, D, C);
        C = Math.floor((c - 4) * k[0] / l[0]);
        0 < C && e.fillRect(n - 2 - D, c - 2 - C, D, C);
        D = Math.floor(c / 8);
        D = 2 > D ? 2 : D;
        iF(e, Math.floor(.4 * c), 0, c, D, .5, !1);
        iF(e, Math.floor(n - 1.4 * c), 0, c, D, .5, !0);
        e.drawImage(h, Math.floor((n - h.width) / 2), 3)
    }

    function b() {
        u = !0;
        y = 140;
        g = 0;
        m = [];
        eg.lQ = !1;
        k[0] = k[1] = 0
    }

    function d() {
        return ef.mr(eN.mo()) ? ef.fY - c - mJ : a6 - c - (a4 ? 2 : 1) * mJ
    }
    var c, f, e, h, g, k, l, m, u, y, z, G, B;
    this.c3 = function() {
        G = B = 0;
        u = this.lQ = !1;
        y = 140;
        g = 0;
        k = [0, 0];
        l = [1, 1];
        m = [];
        z = new Uint32Array(10);
        this.m9()
    };
    this.m9 = function() {
        c = ef.dA;
        this.cF = 4 * c;
        this.qr();
        f = document.createElement("canvas");
        f.width = this.cF;
        f.height = c;
        e = f.getContext("2d", {
            alpha: !0
        });
        a()
    };
    this.ep = function() {
        u && a()
    };
    this.qr = function() {
        var n = c - 6;
        n = 6 > n ? 6 : n;
        if (void 0 === h || h.width !== n) {
            h = document.createElement("canvas");
            h.width = n;
            h.height = n;
            var D = h.getContext("2d", {
                alpha: !0
            });
            D.clearRect(0, 0, n, n);
            var C = Math.floor(n / 8);
            C = 1 > C ? 1 : C;
            D.lineWidth = C;
            D.strokeStyle = cY;
            var E = Math.floor(n / 2);
            n = Math.floor((n - C) / 2);
            D.beginPath();
            D.arc(E, E, n, 0, 2 * Math.PI);
            D.moveTo(E, E - n);
            D.lineTo(E, E + n);
            D.moveTo(E + Math.cos(.78 * Math.PI) * n, E + Math.cos(.28 * Math.PI) * n);
            D.lineTo(E, E);
            D.lineTo(E + Math.cos(.22 * Math.PI) * n, E + Math.cos(1.72 * Math.PI) * n);
            D.stroke()
        }
    };
    this.cL = function(n, D) {
        if (n < a5 - this.cF - mJ) return !1;
        var C = d();
        if (D < C || D > C + c) return !1;
        C = n > a5 - mJ -
            this.cF / 2;
        eB ? this.fl(0, C) : i8.lS(bA) && 0 !== fT[bA] && j5.qu(C);
        return !0
    };
    this.dT = function() {
        if (0 < B) B--, 0 === B && b();
        else if (this.lQ) {
            y--;
            var n;
            if (n = 270 === y && 2 <= G) a: {
                for (n = dm - 1; 0 <= n; n--)
                    if (i8.lS(dn[n])) {
                        n = !1;
                        break a
                    } n = !0
            }
            n && (u = !0, k[0] += l[0]);
            180 === y && 3 * k[0] < l[0] ? b() : k[0] >= l[0] ? fw.fx(-1) : k[1] >= l[1] ? B = 4 : 0 >= y && b()
        } else {
            for (n = 9; 0 <= n; n--) 12 < Math.abs(z[n] - bi[f0[n]]) && (y = 140), z[n] = bi[f0[n]];
            n = 0 >= --y ? !0 : !1;
            if (n) {
                this.lQ = !0;
                y = 360;
                var D = 0;
                for (n = dm - 1; 0 <= n; n--) i8.lS(dn[n]) && (D += bi[dn[n]]);
                l[0] = mq(b6(3 * D, 5), 1);
                dO && 9 !==
                    e9 && (l[0] = qz(mq(b6(D * (100 - b6(100 * eh.r0(), jN)), 100), 1), l[0]));
                l[1] = mq(D - l[0], 1);
                G++
            }
        }
    };
    this.j9 = function() {
        this.lQ && k[0] < l[0] && b()
    };
    this.fl = function(n, D) {
        var C;
        if (this.lQ) {
            for (C = m.length - 1; 0 <= C; C--)
                if (m[C] === n) return;
            m.push(n);
            u = !0;
            C = eB ? l[0] : bi[n];
            D ? k[0] += C : k[1] += C;
            n === bA && (g = D ? 1 : -1)
        }
    };
    this.cU = function() {
        if (this.lQ) {
            var n = d();
            cV.drawImage(f, a5 - this.cF - mJ, n)
        }
    }
}

function kH() {
    function a() {
        if (m < 1 / 3) {
            var B = Math.floor(540 * m);
            return "rgba(" + B + ",180,0,0.75)"
        }
        if (m < 2 / 3) return B = Math.floor(540 * (m - 1 / 3)), "rgba(180," + (180 - B) + ",0,0.75)";
        B = Math.floor(540 * (m - 2 / 3));
        return "rgba(180,0," + B + ",0.75)"
    }

    function b() {
        k.clearRect(0, 0, f, ef.dA);
        var B = Math.floor(m * (f - 2 * h));
        k.fillStyle = iC;
        k.fillRect(0, 0, h, ef.dA);
        k.fillRect(h + B, 0, f - h - B, ef.dA);
        k.fillStyle = a();
        k.fillRect(h, 0, B, ef.dA);
        k.fillStyle = cY;
        k.fillRect(0, 0, f, 1);
        k.fillRect(0, ef.dA - 1, f, 1);
        k.fillRect(0, 0, 1, ef.dA);
        k.fillRect(h, 0, 1, ef.dA);
        k.fillRect(h + B, 0, 1, ef.dA);
        k.fillRect(f - h, 0, 1, ef.dA);
        k.fillRect(f - 1, 0, 1, ef.dA);
        B = 1 + Math.floor(.0625 * ef.dA);
        var n = 1 + Math.floor(.3 * ef.dA);
        k.fillRect(Math.floor(.25 * ef.dA) + n, Math.floor((ef.dA - B) / 2), ef.dA - 2 * n, B);
        k.fillRect(Math.floor(f - 1.25 * ef.dA) + n, Math.floor((ef.dA - B) / 2), ef.dA - 2 * n - n % 2, B);
        k.fillRect(Math.floor(f - 1.25 * ef.dA) + Math.floor((ef.dA - B) / 2), n, B, ef.dA - 2 * n - n % 2);
        u = Math.floor(bB[bA] * m);
        k.fillText(ed.gX(u), Math.floor(f / 2), Math.floor(.55 * ef.dA))
    }

    function d(B) {
        if (1 < B && 0 === m) return m = .01, b(), !0;
        if (1 < B &&
            1 === m || 0 === m) return !1;
        m *= B;
        m = 1 < m ? 1 : 0 > m ? 0 : m;
        b();
        return !0
    }

    function c(B) {
        var n = m;
        m = (B - e - h) / (f - 2 * h);
        m = 0 > m ? 0 : m;
        m = 1 < m ? 1 : m;
        return n !== m ? (b(), !0) : !1
    }
    var f, e, h, g, k, l, m, u, y, z, G = 11 / 12;
    this.c3 = function() {
        l = !fq;
        z = !1;
        m = .5;
        u = 0;
        this.ph = !1;
        this.m9()
    };
    this.m9 = function() {
        a4 && a5 < .8 * a6 ? (this.dA = Math.floor(.0536 * c4), f = a5 - 4 * mJ - this.dA) : (f = Math.floor((a4 ? .65 : .389) * c4), f += 12 - f % 12, this.dA = Math.floor(f / 12));
        h = Math.floor(3 * this.dA / 2);
        y = c7 + Math.floor(.5 * this.dA) + c8;
        g = document.createElement("canvas");
        g.width = f;
        g.height = this.dA;
        k = g.getContext("2d", {
            alpha: !0
        });
        k.font = y;
        k.textBaseline = cW;
        k.textAlign = cX;
        this.r6();
        b()
    };
    this.r6 = function() {
        e = a4 && a5 < .8 * a6 ? this.dA + 3 * mJ : Math.floor((gS - f) / 2);
        this.fY = cP - this.dA - (a4 ? 2 : 1) * mJ
    };
    this.ep = function() {
        z && (z = !1, b())
    };
    this.lQ = function() {
        return !(!l || g4.m8 && e < Math.floor(mJ + 5.5 * this.dA))
    };
    this.mr = function(B) {
        return this.lQ() ? e + f > a5 - B - mJ : !1
    };
    this.cS = function() {
        l = !0
    };
    this.qv = function() {
        l = !1
    };
    this.lh = function() {
        var B = Math.floor(1E3 * m);
        return 0 >= B ? 1 : 1E3 < B ? 1E3 : B
    };
    this.pd = function(B, n) {
        return this.lQ() &&
            B > e && B < e + f && n > this.fY
    };
    this.pe = function(B, n) {
        if (!this.lQ()) return !1;
        if (B > e && B < e + h && n > ef.fY) return d(G);
        if (B > e + f - h && B < e + f && n > ef.fY) return d(1 / G);
        this.ph = !0;
        return c(B)
    };
    this.rH = function(B) {
        0 !== fn && this.lQ() && d(B) && (cI.cJ = !0)
    };
    this.pp = function(B) {
        if (0 === B || !this.lQ()) return !1;
        0 < B ? (B = 400 / (400 + B), B = B < G ? G : B) : (B = (400 - B) / 400, B = B > 1 / G ? 1 / G : B);
        return d(B)
    };
    this.m0 = function(B, n) {
        return this.ph ? c(B, n) : !1
    };
    this.pk = function() {
        this.ph = !1
    };
    this.dT = function() {
        this.lQ() && Math.floor(bB[bA] * m) !== u && (z = !0)
    };
    this.cU = function() {
        this.lQ() &&
            cV.drawImage(g, e, this.fY)
    }
}
var gL, gQ, gR;

function kI() {
    var a, b, d, c, f, e, h;
    this.c3 = function() {
        a = Array(2);
        b = Array(2);
        this.gy = !1;
        h = e = gR = gQ = 0;
        gL = 1;
        this.m9()
    };
    this.m9 = function() {
        d = Math.floor((a4 ? .072 : .0502) * c4);
        d = 8 > d ? 8 : d;
        for (var g = 1; 0 <= g; g--) a[g] = document.createElement("canvas"), a[g].width = d, a[g].height = d, b[g] = a[g].getContext("2d", {
            alpha: !0
        });
        this.r6();
        g = Math.floor(1 + d / 20);
        for (var k = 1; 0 <= k; k--) b[k].clearRect(0, 0, d, d), b[k].fillStyle = oR, b[k].beginPath(), b[k].arc(d / 2, d / 2, d / 2 - g, 0, 2 * Math.PI), b[k].fill(), b[k].lineWidth = g, b[k].fillStyle = oV, b[k].strokeStyle =
            oV, b[k].beginPath(), b[k].arc(d / 2, d / 2, d / 2 - g, 0, 2 * Math.PI), b[k].stroke(), iF(b[k], 0, 0, d, g, .3, 0 === k)
    };
    this.gT = function() {
        return -gQ / gL
    };
    this.cT = function() {
        return -gR / gL
    };
    this.hA = function(g, k) {
        gQ = gL * g - k
    };
    this.hB = function(g, k) {
        gR = gL * g - k
    };
    this.cL = function(g, k) {
        if (Math.pow(g - (c + d / 2), 2) + Math.pow(k - (f + d / 2), 2) < d * d / 4 || Math.pow(g - (c + d / 2), 2) + Math.pow(k - (f + 2 * d), 2) < d * d / 4) return k < f + 1.25 * d ? this.pp(Math.floor(gS / 2), Math.floor(cP / 2), -200) : this.pp(Math.floor(gS / 2), Math.floor(cP / 2), 200);
        ej.hE() && (this.gy = !0, e = g, h = k);
        return !1
    };
    this.m0 = function(g, k) {
        if (!ej.hE()) return !0;
        var l = gQ,
            m = gR,
            u = e - g,
            y = h - k;
        gQ += u;
        gR += y;
        eO.m0(u, y);
        this.rW();
        e = g;
        h = k;
        return l !== gQ || m !== gR
    };
    this.pp = function(g, k, l) {
        if (!ej.hE()) return !0;
        if (0 < l) l = 450 / (450 + l), l = .5 > l ? .5 : l;
        else if (0 > l) l = (450 - l) / 450, l = 2 < l ? 2 : l;
        else return !1;
        this.rX(g, k, l);
        return !0
    };
    this.rX = function(g, k, l) {
        l = 1024 < l * gL ? 1024 / gL : l;
        l = .125 > l * gL ? .125 / gL : l;
        eO.zoom(l, g, k);
        gL *= l;
        gQ = (gQ + g) * l - g;
        gR = (gR + k) * l - k;
        gx.rW()
    };
    this.rW = function() {
        var g = a5 / 16,
            k = 0,
            l = a6 / 16,
            m = 0;
        gQ < -a5 + g && (k = -a5 + g - gQ);
        gQ > gL * an - g && (k = gL * an -
            g - gQ);
        gR < -a6 + l && (m = -a6 + l - gR);
        gR > gL * ao - l && (m = gL * ao - l - gR);
        gQ += k;
        gR += m;
        hC.hD();
        eO.re(k, m)
    };
    this.r6 = function() {
        c = gS - d - mJ;
        f = Math.floor(cP / 2 - 1.25 * d)
    };
    this.cU = function() {
        cV.drawImage(a[0], c, f);
        cV.drawImage(a[1], c, Math.floor(f + 3 * d / 2))
    }
}

function kJ() {
    function a() {
        k = Math.floor(.2 * (a4 ? .07 : .035) * c4);
        k = mq(a4 ? 3 : 1, k);
        var I = a5 / (e.length + l);
        k = I > k ? I : k;
        A = Math.floor((1 - l) * k);
        h = 0;
        b()
    }

    function b() {
        h = -20 > h ? -20 : h;
        h = h > (e.length - 15) * k ? (e.length - 15) * k : h;
        u = Math.floor(h / k);
        y = u + Math.floor(gS / k);
        y = y > e.length - 1 ? e.length - 1 : y;
        u = y < u ? y : u;
        u = 0 > u ? 0 : u;
        var I = y;
        m = g / e[I];
        for (var N = y - 1; N >= u; N--) e[N] > e[I] && (I = N, m = g / Math.pow(e[N], E))
    }

    function d(I) {
        I = Math.floor((h + gS - I - l * k) / k);
        I = -1 > I ? -1 : -1 === I ? 0 : I > e.length - 1 ? -1 : I;
        return I !== z ? (z = I, -1 === F && 0 === z && C && (F = setInterval(f,
            100)), !0) : !1
    }

    function c(I) {
        var N = Math.floor(m * Math.pow(e[I], E));
        cV.fillRect(h + gS - (I + 1) * k, cP - N, A, N)
    }

    function f() {
        8 === aX.pm() && (z = -1);
        if (0 !== z) J = (new Date).getTime(), clearInterval(F), F = -1;
        else {
            var I = e[1] / 864E3;
            if (-1 !== J) {
                var N = (new Date).getTime();
                I += (N - J) * e[1] / 864E5;
                J = -1
            }
            0 < I && (e[0] += Math.floor(I), cI.cJ = !0)
        }
    }
    var e, h, g, k, l, m, u, y, z, G, B, n, D, C, E, A, F, J, K;
    this.c3 = function() {
        J = F = -1;
        C = !1;
        E = 1;
        z = -1;
        this.ru = !1;
        D = 0;
        n = new Date;
        h = 0;
        l = .3;
        K = [];
        K.push({
            n7: "Plateau A",
            bH: 0,
            pX: 57
        });
        K.push({
            n7: "Max A",
            bH: 1,
            pX: 1
        });
        K.push({
            n7: "Black Friday",
            bH: 15,
            pX: 15
        });
        K.push({
            n7: "Max B",
            bH: 19,
            pX: 19
        });
        K.push({
            n7: "Max C",
            bH: 44,
            pX: 44
        });
        K.push({
            n7: "First Android Version",
            bH: 58,
            pX: 58
        });
        K.push({
            n7: "Max D",
            bH: 67,
            pX: 67
        });
        K.push({
            n7: "The iFrame Explosion",
            bH: 98,
            pX: 99
        });
        K.push({
            n7: "The 155-Day Uptrend",
            bH: 58,
            pX: 213
        });
        K.push({
            n7: "Max E",
            bH: 213,
            pX: 213
        });
        K.push({
            n7: "Plateau B",
            bH: 214,
            pX: 259
        });
        K.push({
            n7: "Turbulent Times",
            bH: 260,
            pX: 344
        });
        K.push({
            n7: "Max F",
            bH: 262,
            pX: 262
        });
        K.push({
            n7: "Max G",
            bH: 282,
            pX: 282
        });
        K.push({
            n7: "Max H",
            bH: 333,
            pX: 333
        });
        K.push({
            n7: "The 19-Day Downtrend",
            bH: 283,
            pX: 301
        });
        K.push({
            n7: "Plateau C",
            bH: 345,
            pX: 385
        });
        K.push({
            n7: "The Alliance Ascent",
            bH: 386,
            pX: 395
        });
        K.push({
            n7: "Max I",
            bH: 395,
            pX: 395
        });
        K.push({
            n7: "First iOS Version",
            bH: 411,
            pX: 411
        });
        K.push({
            n7: "Plateau D",
            bH: 396,
            pX: 453
        });
        K.push({
            n7: "The TikTok Revolution",
            bH: 454,
            pX: 470
        });
        K.push({
            n7: "Max J",
            bH: 456,
            pX: 456
        });
        K.push({
            n7: "Max K",
            bH: 472,
            pX: 472
        });
        K.push({
            n7: "Max L",
            bH: 478,
            pX: 478
        });
        K.push({
            n7: "YT Drew",
            bH: 471,
            pX: 485
        });
        K.push({
            n7: "Plateau E",
            bH: 485,
            pX: 600
        });
        K.push({
            n7: "Uptrend A",
            bH: 600,
            pX: 613
        });
        K.push({
            n7: "Max M",
            bH: 613,
            pX: 613
        });
        K.push({
            n7: "Downtrend A",
            bH: 614,
            pX: 635
        });
        K.push({
            n7: "Plateau F",
            bH: 636,
            pX: 737
        });
        K.push({
            n7: "End of Record",
            bH: 738,
            pX: 738
        });
        e = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674, 268883231, 261100885, 247870209, 240175828, 231697235, 240614202, 237647174, 230525212, 228239099, 226070733, 215992739, 216961676, 231079584, 235793502, 234032821, 228402462,
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
        this.m9();
        eR.rw(0, 0)
    };
    this.m9 = function() {
        g = Math.floor(.15 *
            a6);
        G = Math.floor((a4 ? .018 : .0137) * c4);
        G = 10 > G ? 10 : G;
        B = c7 + G + c8;
        a()
    };
    this.ry = function() {
        C || j5.rz()
    };
    this.s0 = function(I) {
        var N;
        C = !0;
        for (N = 0; N < I.length; N++) e.unshift(I[N]);
        a();
        cI.cJ = !0
    };
    this.s4 = function() {
        b()
    };
    this.m0 = function(I, N) {
        N > cP - .6 * g ? this.ru ? I !== D && (h += I - D, D = I, b(), d(I), this.ru = -1 !== z, cI.cJ = !0) : d(I) && (cI.cJ = !0) : this.pi()
    };
    this.pi = function() {
        -1 !== z && (this.ru = !1, z = -1, cI.cJ = !0)
    };
    this.pp = function(I, N) {
        -1 !== z && (h += Math.floor(N), b(), d(I), cI.cJ = !0)
    };
    this.cL = function(I, N) {
        this.m0(I, N); - 1 !== z && (D = I, this.ru = !0)
    };
    this.pj = function() {
        -1 !== z && (this.ru = !1)
    };
    this.cU = function() {
        cV.fillStyle = or;
        for (var I = y; I >= u; I--) c(I);
        C && 0 === u && (cV.fillStyle = oh, c(0)); - 1 !== z && (cV.fillStyle = oq, c(z));
        if (-1 !== z) {
            cV.font = B;
            cV.textBaseline = ow;
            I = new Date;
            I.setTime(n.getTime() - 864E5 * z);
            var N = "month",
                P = "day";
            "undefined" !== typeof Intl && (N = (new Intl.DateTimeFormat("en-US", {
                month: "long"
            })).format(I), P = (new Intl.DateTimeFormat("en-US", {
                weekday: "long"
            })).format(I));
            I = P + ", " + I.getUTCDate() + " " + N + " " + I.getFullYear();
            var Q = 1 === e[z] ? " second played" :
                " seconds played";
            Q = ed.gX(e[z]) + Q;
            var O = Math.floor(cV.measureText(I).width),
                Z = Math.floor(cV.measureText(Q).width),
                T = Math.floor(.5 * (O + G));
            N = h + gS - (z + 1) * k;
            N = N < T ? T : N > gS - T ? gS - T : N;
            P = cP - Math.floor(m * Math.pow(e[z], E));
            var U = Math.floor(1.1 * G),
                ca = P > cP - U ? cP - U : P;
            cV.fillStyle = iC;
            cV.fillRect(gS - Z - G, ca - U, Z + G, U);
            cV.fillRect(N - T, cP - U, O + G, U);
            cV.fillStyle = cY;
            cV.textAlign = ox;
            cV.fillText(Q, Math.floor(gS - .5 * G), ca);
            Q = ca - 2 * U;
            O = -1;
            Z = e.length - z - 1;
            for (T = K.length - 1; 0 <= T; T--) Z >= K[T].bH && Z <= K[T].pX && (-1 === O || K[T].pX - K[T].bH < K[O].pX -
                K[O].bH) && (O = T); - 1 !== O && (Z = Math.floor(cV.measureText(K[O].n7).width), cV.fillStyle = iC, cV.fillRect(gS - Z - G, Q, Z + G, U), cV.fillStyle = cY, cV.fillText(K[O].n7, Math.floor(gS - .5 * G), Q + U));
            cV.textAlign = cX;
            cV.fillText(I, N, cP);
            cV.strokeStyle = nl;
            cV.lineWidth = 1;
            cV.beginPath();
            cV.moveTo(0, P);
            cV.lineTo(gS, P);
            cV.closePath();
            cV.stroke()
        }
    }
}

function kK() {
    this.dA = this.fX = 0;
    var a, b, d, c, f, e, h, g, k, l, m, u, y;
    this.c3 = function() {
        f = hp;
        m = "rgba(0,100,0,0.8)";
        u = "rgba(150,0,0,0.8)";
        l = !0;
        g = !1;
        k = bB[bA];
        this.m9()
    };
    this.m9 = function() {
        b = Math.floor((a4 ? .305 : .24) * c4);
        this.dA = Math.floor(.5 + .13 * b);
        b = Math.floor(6 * this.dA);
        a = c7 + Math.floor(.8 * this.dA) + c8;
        y = Math.floor(.5 * this.dA);
        px.font = a;
        d = mJ;
        c = Math.floor(1 + .13 * this.dA);
        e = document.createElement("canvas");
        e.width = b;
        e.height = this.dA;
        h = e.getContext("2d", {
            alpha: !0
        });
        h.font = a;
        h.textBaseline = cW;
        h.textAlign = cX;
        this.sP()
    };
    this.qR = function() {
        return a4 && a5 < 1.2 * a6
    };
    this.r6 = function() {
        this.qR() ? this.fX = gS - b - mJ : this.fX = Math.floor(ea.sQ() + (gS - ea.sQ() - eP.cF - b) / 2 - .5 * mJ)
    };
    this.ep = function() {
        g && (g = !1, this.sP())
    };
    this.sP = function() {
        h.clearRect(0, 0, b, this.dA);
        h.fillStyle = l ? m : u;
        h.fillRect(0, 0, b, this.dA);
        h.fillStyle = oq;
        this.sR();
        this.sS();
        h.fillStyle = bB[bA] >= bC.dX(bA) ? ol : cY;
        h.fillText(ed.gX(k), Math.floor(b / 2), y);
        h.fillStyle = cY;
        h.fillRect(0, 0, b, 1);
        h.fillRect(0, 0, 1, this.dA);
        h.fillRect(0, this.dA - 1, b, 1);
        h.fillRect(b - 1, 0, 1, this.dA)
    };
    this.sR = function() {
        var z = Math.floor((bC.sT() - 1) * this.dA / 9);
        z = qz(z, this.dA - c);
        h.fillRect(0, z, c, this.dA - z);
        h.fillRect(b - c, z, c, this.dA - z)
    };
    this.sS = function() {
        h.fillRect(c, this.dA - c, Math.floor((b - 2 * c) * bB[bA] / f), c)
    };
    this.dT = function() {
        0 !== fT[bA] && 2 !== fh[bA] && k !== bB[bA] && (f = mq(bB[bA], f), l = bB[bA] > k && 10 <= bB[bA], k = bB[bA], g = !0)
    };
    this.cU = function() {
        0 === fT[bA] || fq || 2 === fh[bA] || cV.drawImage(e, this.fX, d)
    }
}
var sU, qg, sV, sW, sX, f0, sY;

function kL() {
    function a() {
        var L;
        l.clearRect(0, 0, sU, qg);
        l.fillStyle = og;
        l.fillRect(0, 0, sU, G);
        l.fillStyle = oT;
        l.fillRect(0, G, sU, qg - G);
        sY[bA] >= O && d(sY[bA] - O, of);
        0 !== sY[bA] && 0 === O && d(0, oe); - 1 !== Q && d(Q, mC);
        l.fillStyle = oV;
        l.fillRect(0, G, sU, 1);
        l.fillRect(0, 0, sU, p9);
        l.fillRect(0, 0, p9, qg);
        l.fillRect(sU - p9, 0, p9, qg);
        l.fillRect(0, qg - p9, sU, p9);
        l.font = sV;
        l.textBaseline = cW;
        l.textAlign = cX;
        l.fillText(J, Math.floor(sU / 2), Math.floor(y + sX / 2));
        var H = sY[bA] < O + g - 1 ? 1 : 2;
        l.font = sW;
        l.textAlign = mv;
        for (L = g - H; 0 <= L; L--) b(f0[L + O]),
            c(L, L + O, f0[L + O]);
        l.textAlign = ox;
        for (L = g - H; 0 <= L; L--) b(f0[L + O]), f(L, f0[L + O]);
        2 === H && (b(bA), l.textAlign = mv, c(g - 1, sY[bA], bA), l.textAlign = ox, f(g - 1, bA));
        0 === O && (L = .7 * B / cA.cD(4).height, l.setTransform(L, 0, 0, L, Math.floor(n + .58 * B + .5 * L * cA.cD(4).width), Math.floor(y + sX + .4 * B)), l.imageSmoothingEnabled = !0, l.drawImage(cA.cD(4), -Math.floor(cA.cD(4).width / 2), -Math.floor(cA.cD(4).height / 2)), l.setTransform(1, 0, 0, 1, 0, 0))
    }

    function b(L) {
        dO && (l.fillStyle = dk.t6[dk.j1[dk.dl[L]]])
    }

    function d(L, H) {
        l.fillStyle = H;
        L = L > g - 1 ? g - 1 : L;
        var M = Math.floor((L === g - 1 ? 2 : 0 === L ? 1.15 : 1) * B);
        M = L === g - 2 ? Math.floor(G + 9.15 * B) - Math.floor(G + 8.15 * B) : M;
        l.fillRect(0, Math.floor(G + (L + (0 === L ? 0 : .15)) * B), sU, M)
    }

    function c(L, H, M) {
        l.fillText(K[H], n, Math.floor(y + sX + (L + .5) * B));
        1 === fh[M] && (l.font = oy + sW);
        l.fillText(A[M] === M ? gW[M] : E[A[M] % bM], D, Math.floor(y + sX + (L + .5) * B));
        0 !== fh[M] && (l.font = sW)
    }

    function f(L, H) {
        l.fillText(bi[H], C, Math.floor(y + sX + (L + .5) * B))
    }

    function e(L) {
        L -= mJ + G;
        if (0 > L) return Math.floor(L / B) - 1;
        if (L < (g - 1) * B) return Math.floor(L / B);
        if (L < qg - G) return g -
            1;
        L -= qg - G;
        return g + Math.floor(L / B)
    }

    function h(L, H) {
        return L >= mJ && L < mJ + sU && H >= mJ && H < mJ + qg
    }
    var g, k, l, m, u, y, z, G, B, n, D, C, E, A, F, J, K, I, N, P, Q, O, Z, T, U, ca;
    this.c3 = function() {
        var L, H;
        Z = 0;
        T = !1;
        ca = U = 0;
        J = "LEADERBOARD";
        Q = -1;
        g = a4 ? 6 : 10;
        O = 0;
        P = !1;
        I = new Uint16Array(g + 1);
        N = new Uint32Array(g + 1);
        u = bM;
        f0 = new Uint16Array(u);
        sY = new Uint16Array(u);
        for (L = u - 1; 0 <= L; L--) f0[L] = L, sY[L] = L;
        this.m9(!0);
        E = [];
        A = new Uint16Array(bM);
        F = new Uint16Array(bM);
        var M = Math.floor(sU - D - n - m),
            R = 0;
        K = Array(bM);
        l.font = sW;
        for (L = bM - 1; 0 <= L; L--)
            if (K[L] =
                L + 1 + ".", A[L] = L, F[L] = Math.floor(l.measureText(gW[L]).width), F[L] > M) {
                var S = gW[L];
                for (H = gW[L].length - 1; 1 <= H && !(S = S.substring(0, H), F[L] = Math.floor(l.measureText(S + "...").width), F[L] <= M); H--);
                S += "...";
                E.push(S);
                A[L] = bM + R++
            } a()
    };
    this.m9 = function(L) {
        a4 ? (sU = Math.floor(.335 * c4), qg = Math.floor(g * sU / 8)) : (sU = Math.floor(.27 * c4), qg = Math.floor(g * sU / 10));
        sU = Math.floor(.97 * sU);
        k = document.createElement("canvas");
        k.width = sU;
        k.height = qg;
        l = k.getContext("2d", {
            alpha: !0
        });
        y = .025 * sU;
        sX = .16 * sU;
        z = 0 * sU;
        G = Math.floor(.45 * y + sX);
        B = (qg - sX - 2 * y - z) / g;
        sV = c7 + Math.floor(.55 * sX) + c8;
        sW = Math.floor(.6 * B) + c8;
        l.font = sW;
        n = Math.floor(l.measureText("555").width);
        D = Math.floor(l.measureText("555600.00").width);
        m = Math.floor(l.measureText("00920600").width);
        l.font = sV;
        C = sU - n;
        if (!L) {
            l.font = sW;
            for (L = bM - 1; 0 <= L; L--) F[L] = Math.floor(l.measureText(A[L] === L ? gW[L] : E[A[L] % bM]).width);
            a()
        }
    };
    this.sQ = function() {
        return sU
    };
    this.ep = function(L) {
        P && (L || 14 >= t0 && 0 === cI.di() % 6 || 14 < t0) && (P = !1, a())
    };
    this.dT = function() {
        for (var L = u - 1; 0 <= L; L--)
            if (0 === fT[f0[L]]) {
                var H =
                    L,
                    M = f0[H];
                for (u--; H < u; H++) f0[H] = f0[H + 1], sY[f0[H]] = H;
                f0[u] = M;
                sY[f0[u]] = u
            } M = u - 1;
        for (H = 0; H < M; H++) bi[f0[H]] < bi[f0[H + 1]] && (L = f0[H], f0[H] = f0[H + 1], f0[H + 1] = L, sY[f0[H]] = H, sY[f0[H + 1]] = H + 1);
        a: {
            L = P;P = !0;
            for (H = M = sY[bA] >= g - 1 ? g - 2 : g - 1; 0 <= H; H--)
                if (I[H] !== f0[H] || N[H] !== bi[f0[H]]) break a;
            if (M !== g - 2 || I[g] === sY[bA] && N[g] === bi[bA]) P = L
        }
        for (L = g - 1; 0 <= L; L--) I[L] = f0[L], N[L] = bi[f0[L]];
        I[g] = sY[bA];
        N[g] = bi[bA]
    };
    this.cL = function(L, H) {
        if (h(L, H)) {
            Z = cI.gq;
            T = !0;
            U = ca = e(H);
            if (pB) {
                var M = tJ(-1, ca, g);
                M = M === g ? -1 : M;
                Q !== M && (Q = M, a(), cI.cJ = !0)
            }
            return !0
        }
        return !1
    };
    this.m0 = function(L, H) {
        var M = e(H);
        if (T) {
            var R = O;
            O += U - M;
            O = tJ(0, O, bM - g);
            O !== R && (U = M, M = tJ(-1, M, g), Q = M = M !== g && h(L, H) ? M : -1, a(), cI.cJ = !0);
            return !0
        }
        M = tJ(-1, M, g);
        M = M === g || !h(L, H) || pB ? -1 : M;
        return Q !== M ? (Q = M, a(), cI.cJ = !0) : !1
    };
    this.pj = function(L, H) {
        if (!T) return !1;
        T = !1;
        var M = e(H);
        pB && -1 !== Q && (Q = -1, a(), cI.cJ = !0);
        if (350 > cI.gq - Z && ca === M && (M = tJ(-1, M, g), M = M !== g && h(L, H) ? M : -1, -1 !== M)) {
            var R = f0[M + O];
            M === g - 1 && sY[bA] >= O + g - 1 && (R = bA);
            0 !== fT[R] && ej.gu(R, 800, !1, 0)
        }
        return !0
    };
    this.pp = function(L, H, M) {
        return T ?
            !1 : h(L, H) ? (L = e(H), L = tJ(-1, L, g), L = L === g || pB ? -1 : L, 0 < M ? O < bM - g && (O++, Q = L, a(), cI.cJ = !0) : 0 < O && (O--, Q = L, a(), cI.cJ = !0), !0) : !1
    };
    this.cU = function() {
        cV.drawImage(k, mJ, mJ)
    }
}

function kM() {
    function a() {
        h.clearRect(0, 0, eP.cF, eP.dA);
        h.fillStyle = iC;
        h.fillRect(0, 0, eP.cF, eP.dA);
        h.fillStyle = oZ;
        h.fillRect(0, eP.dA - l - 1, Math.floor((0 < A ? A : Math.sqrt(D[4] / D[3])) * eP.cF), l);
        h.fillStyle = cY;
        h.fillRect(0, 0, eP.cF, 1);
        h.fillRect(0, 0, 1, eP.dA);
        h.fillRect(eP.cF - 1, 0, 1, eP.dA);
        h.fillRect(0, eP.dA - 1, eP.cF, 1);
        h.fillRect(0, eP.dA - l - 1, eP.cF, 1);
        for (var I = 0, N = 0; N < n.length; N++)
            if (C[N]) {
                h.textAlign = mv;
                var P = Math.floor((m - l + 2 * y) * (N - I + 1) / (n.length + 1) - .7 * y);
                h.fillText(n[N], u, P);
                h.textAlign = ox;
                5 === N && 0 !== fT[bA] &&
                    bB[bA] >= bC.dX(bA) ? (h.fillStyle = ou, h.fillText(b(N), eP.cF - u, P), h.fillStyle = cY) : h.fillText(b(N), eP.cF - u, P)
            } else I++
    }

    function b(I) {
        return 3 > I ? D[I].toString() : 3 === I ? eP.nU(D[I] / 100, 2) : 4 === I ? eP.nU(D[I] / 100, 2) : 5 === I ? eP.nU(D[I] / 100, 2) : 7 > I ? ed.gX(D[I]) : eP.sT(D[7])
    }

    function d(I) {
        I = b6(1E4 * I, jN);
        8 === e9 && (0 === fT[0] ? fw.fx(1) : 0 === fT[1] && fw.fx(0));
        I >= D[3] && (fw.fx(-1), D[4] = -1);
        D[4] !== I && (B++, D[4] = I)
    }

    function c() {
        for (var I = dm - 1; 0 <= I; I--)
            if (0 < bI[dn[I]].length) return !1;
        return !0
    }

    function f() {
        bi[bA] !== D[6] && (D[6] = bi[bA],
            B++)
    }
    var e, h, g, k, l, m, u, y, z, G, B, n, D, C, E, A, F, J, K;
    this.c3 = function() {
        A = F = 0;
        n = Array(8);
        n[0] = "Humans";
        n[1] = eB ? "Players" : "Bots";
        n[2] = "Spectators";
        n[3] = "Threshold";
        n[4] = "Occupation";
        n[5] = "Interest";
        n[6] = "Income";
        n[7] = "Time";
        K = jN - b6(jN, 100);
        D = Array(n.length);
        D[0] = eB ? 0 : d4;
        D[1] = eB ? dm : e4;
        D[2] = jA;
        D[3] = 1E4;
        D[4] = b6(1E4 * bi[0], jN);
        D[5] = 700;
        D[6] = 0;
        f();
        D[7] = 0;
        E = b(6);
        C = Array(n.length);
        for (var I = n.length - 1; 0 <= I; I--) C[I] = !0;
        J = 0;
        eB ? (C[0] = !1, C[2] = !1, C[3] = !1, J = 3) : (C[3] = !1, J = 1);
        B = 0;
        this.m9()
    };
    this.m9 = function() {
        this.cF = Math.floor((a4 ?
            .1646 : .126) * c4);
        this.dA = Math.floor(1.18 * this.cF);
        l = Math.floor(.04 * this.cF);
        u = Math.floor(.05 * this.cF);
        y = .04 * this.cF;
        m = this.dA;
        this.dA -= Math.floor(J * (this.dA - 2 * l) / n.length);
        G = Math.floor(.55 * (m - l) / n.length);
        z = c7 + G + c8;
        e = document.createElement("canvas");
        e.width = this.cF;
        e.height = this.dA;
        h = e.getContext("2d", {
            alpha: !0
        });
        h.font = z;
        h.textBaseline = cW;
        h.lineWidth = 1;
        this.jG();
        this.r6();
        ec.r6();
        a()
    };
    this.r6 = function() {
        g = gS - this.cF - mJ
    };
    this.tW = function() {
        k = mJ
    };
    this.jG = function() {
        k = mJ + (ec.qR() && 0 !== fT[bA] && !fq ? ec.dA +
            mJ : 0)
    };
    this.ep = function(I) {
        0 < B && (I || 12 > t0 && 100 <= B || 12 <= t0) && (B = 0, a())
    };
    this.lj = function() {
        return D[7]
    };
    this.sT = function(I) {
        var N = Math.floor(I / 1E3 / 60);
        I = Math.floor((I - 6E4 * N) / 1E3);
        return 10 > I ? N + ":0" + I : N + ":" + I
    };
    this.nU = function(I, N) {
        return I.toFixed(N) + "%"
    };
    this.dT = function() {
        C[0] && jB - jA !== D[0] && (D[0] = jB - jA, B++);
        dm - D[0] !== D[1] && (D[1] = dm - D[0], B++);
        this.eQ();
        if (dO) {
            var I = eh.r0();
            I >= K && c() ? (fw.fx(-1), d(eh.r0())) : d(I)
        } else I = bi[f0[0]], I >= K && c() && fw.fx(-1), d(I);
        I = bC.ti(bA);
        I !== D[5] && (D[5] = I, B++);
        f();
        D[7] +=
            cI.tj();
        I = b(7);
        E !== I && (E = I, B += 100)
    };
    this.eQ = function() {
        C[2] && jA !== D[2] && (D[2] = jA, B++)
    };
    this.tk = function(I) {
        if (I === jT) return A = 0, a(), !1;
        if (-1 === I && 0 === F) return !1;
        var N = A,
            P = performance.now();
        if (0 <= I) {
            var Q = P - 392 * I;
            F = 0 === I || Q < F ? Q : F
        }
        A = (P - F) / (392 * jT);
        A = 1 < A ? 1 : A;
        a();
        return A !== N
    };
    this.cU = function() {
        cV.drawImage(e, g, k)
    }
}

function kN() {
    var a, b, d, c, f, e, h, g, k, l;
    this.tp = -1;
    this.c3 = function() {
        a = !1;
        c = 0;
        f = .61;
        e = .07;
        h = .09;
        l = g = 0;
        this.tp = -1
    };
    this.m9 = function() {
        if (a) {
            d = a4 ? Math.floor(.69 * c4) : Math.floor(.5 * c4);
            d = qz(d, mq(a5 - 2 * mJ, 10));
            d = qz(d, Math.floor(3.57 * mq(a6 - 2 * mJ, 3)));
            c = Math.floor(.28 * d);
            k = document.createElement("canvas");
            k.width = d;
            k.height = c;
            var m = k.getContext("2d", {
                    alpha: !0
                }),
                u = Math.floor(1 + c / 40);
            m.clearRect(0, 0, d, c);
            m.fillStyle = iC;
            m.fillRect(u, u, d - 2 * u, c - 2 * u);
            m.lineJoin = "bevel";
            m.lineWidth = 2 * u;
            m.strokeStyle = cY;
            m.strokeRect(u,
                u, d - 2 * u, c - 2 * u);
            m.imageSmoothingEnabled = !0;
            var y = cA.cD(b),
                z = y.height,
                G = f * c / z;
            m.setTransform(G, 0, 0, G, Math.floor((d - G * y.width) / 2), Math.floor((c - G * z) / 2));
            m.drawImage(y, 0, 0);
            m.setTransform(1, 0, 0, 1, Math.floor(d - h * c - e * c - u), Math.floor(u + e * c));
            u = Math.floor(h * c);
            m.lineWidth = Math.floor(1 + c / 80);
            m.strokeStyle = cY;
            m.beginPath();
            m.moveTo(0, 0);
            m.lineTo(u, u);
            m.moveTo(0, u);
            m.lineTo(u, 0);
            m.stroke();
            m.setTransform(1, 0, 0, 1, 0, 0)
        }
    };
    this.show = function(m, u) {
        a || (b = m ? 1 : 2, a = !0, this.m9(), i8.m1(), ef.qv(), l = cI.gq, -1 === this.tp &&
            (this.tp = cI.di()), g = u ? 1 : 0)
    };
    this.dT = function() {
        !a || 1 <= g || (g += 5E-4 * (cI.gq - l), g = 1 < g ? 1 : g, l = cI.gq, cI.cJ = !0)
    };
    this.cL = function(m, u) {
        if (!a || 0 >= g) return !1;
        m -= Math.floor((gS - d) / 2);
        u -= cP - c - 2 * mJ;
        if (0 > m || 0 > u || m > d || u > c) return !1;
        m > d - c / 3 && u < c / 3 && (a = !1, cI.cJ = !0);
        return !0
    };
    this.cU = function() {
        !a || 0 >= g || (cV.globalAlpha = g, cV.drawImage(k, Math.floor((gS - d) / 2), cP - c - 2 * mJ), cV.globalAlpha = 1)
    }
}

function kr() {
    function a(e, h, g, k, l, m, u) {
        0 !== fT[e] && 0 !== bi[e] && (g = gS * ((dE[e] + dD[e] + 1) / 2 - g) / (l - g) - .5 * h, k = cP * ((dH[e] + dG[e] + 1) / 2 - k) / (m - k) - .5 * h, g > gS || k > cP || g < -h || k < -h || (cV.setTransform(gL * u, 0, 0, gL * u, g, k), cV.drawImage(d[dO ? dk.dl[e] : e < d4 ? 1 : 0], 0, 0)))
    }
    var b, d, c, f;
    this.c3 = function() {
        var e;
        d = [];
        b = !1;
        if (fq)
            if (f = 0, c = 63, b = !0, dO)
                for (e = 0; e <= jR; e++) d.push(this.tw(dk.tx[dk.j1[e]], c));
            else d.push(this.tw(dk.tx[0], c)), d.push(this.tw(dk.tx[4], c))
    };
    this.dT = function() {
        b && 349 === ++f && (d = [], b = !1)
    };
    this.tw = function(e, h) {
        var g =
            document.createElement("canvas");
        g.width = h;
        g.height = h;
        var k = g.getContext("2d", {
            alpha: !0
        });
        k.clearRect(0, 0, h, h);
        var l = k.getImageData(0, 0, h, h),
            m = l.data,
            u, y, z = Math.floor(h / 2),
            G = 1 + z * z;
        for (u = h - 1; 0 <= u; u--)
            for (y = h - 1; 0 <= y; y--) {
                var B = (u - z) * (u - z) + (y - z) * (y - z);
                var n = 4 * (y * h + u);
                m[n] = e[0];
                m[n + 1] = e[1];
                m[n + 2] = e[2];
                B = Math.floor((G - B) * e[3] / G);
                m[n + 3] = 0 < B ? B : 0
            }
        k.putImageData(l, 0, 0);
        return g
    };
    this.cU = function() {
        if (b) {
            var e;
            cV.imageSmoothingEnabled = !0;
            cV.globalAlpha = 1 - (160 < f ? (f - 160) / 190 : 0);
            var h = gQ / gL,
                g = gR / gL,
                k = (gS + gQ) /
                gL,
                l = (cP + gR) / gL;
            var m = .25;
            var u = c * gL * m;
            for (e = bM - 1; e >= d4; e--) a(e, u, h, g, k, l, m);
            m = .5;
            u = c * gL * m;
            for (e = d4 - 1; 0 <= e; e--) a(e, u, h, g, k, l, m);
            cV.globalAlpha = 1;
            cV.imageSmoothingEnabled = 3 > gL;
            cV.setTransform(gL, 0, 0, gL, 0, 0)
        }
    }
}

function fZ(a, b, d) {
    if (!(0 === fT[a] || 0 > d || 1E3 < d || 2 === fh[a])) {
        var c = b6(d * bB[a], 1E3);
        10 === e9 && b < d4 && 2 !== fh[b] && (c = eT.u4(a, c));
        if (dO && b < bM && !cv(a, b)) dp(a, b, c);
        else {
            b < bM && 0 === fT[b] && (b = bM);
            var f = b6(3 * bB[a], 256);
            c -= 500 <= d ? f : 0;
            if (!(c <= b7) && as.dR(a)) {
                var e = bI[a].length;
                b === bM ? cl(a) : cg(a, b);
                if (0 !== e || 0 !== bI[a].length) dO && (dL[a] = 1), a === bA && (bE.bF[0] += 500 <= d ? d - 12 : d, bE.bF[1]++, bE.bF[12] += f, bE.bF[13] += c), cd(e, a), as.ce(a, c, b), bB[a] -= c + f, b8.cf(a, !1)
            }
        }
    }
}

function fC(a, b, d, c) {
    10 === e9 && a < d4 && (c = eT.u4(a, c));
    if (c <= b7 || !as.dR(a)) return !1;
    b = eY.cf(a, b, d);
    if (0 === b) return !1;
    d = b6(3 * bB[a], 128);
    c >= b6(bB[a], 2) && (c -= d);
    a === bA && (bE.bF[12] += d);
    as.u5(a, c, b);
    bB[a] -= c + d;
    return !0
}

function dp(a, b, d) {
    if (!(!dO || 0 === fT[a] || 0 === fT[b] || 0 > d || d > bB[a] || a === b || cv(a, b) || a < d4 && b < d4 && 7 > e9 && 1071 > cI.di())) {
        var c = b6(bB[a], 16);
        d -= d >= b6(bB[a], 2) ? c : 0;
        var f = bi[b] * jL - bB[b];
        0 >= f || (d = d > f ? f : d, a === bA && (eN.nM(d, b), bE.bF[12] += c, bE.bF[16] += d), b === bA && (eN.nO(d, a), bE.bF[10] += d), bB[a] -= d + c, bB[b] += d)
    }
}

function u6() {
    this.jJ = this.hN = this.u7 = !1;
    this.u8 = [0, 0, 0, 0];
    this.u9 = function() {
        this.jJ = this.jJ || this.hN;
        if (this.hN || this.u7 && this.jJ) {
            var a = hC.uA[0],
                b = hC.uA[1],
                d = hC.uA[2],
                c = hC.uA[3];
            a = a < this.u8[0] ? this.u8[0] : a;
            b = b < this.u8[1] ? this.u8[1] : b;
            d = d > this.u8[2] ? this.u8[2] : d;
            c = c > this.u8[3] ? this.u8[3] : c;
            this.u7 = this.hN = !1;
            a === this.u8[0] && b === this.u8[1] && d === this.u8[2] && c === this.u8[3] ? this.jK() : d >= a && c >= b && jk.putImageData(jl, 0, 0, a, b, d - a + 1, c - b + 1)
        }
    };
    this.jK = function() {
        this.jJ && this.u8[2] >= this.u8[0] && this.u8[3] >=
            this.u8[1] && jk.putImageData(jl, 0, 0, this.u8[0], this.u8[1], this.u8[2] - this.u8[0] + 1, this.u8[3] - this.u8[1] + 1);
        this.jJ = !1
    };
    this.jD = function() {
        this.u8[2] >= this.u8[0] && this.u8[3] >= this.u8[1] && jk.putImageData(jl, 0, 0, this.u8[0], this.u8[1], this.u8[2] - this.u8[0] + 1, this.u8[3] - this.u8[1] + 1);
        this.jJ = !1
    };
    this.c3 = function() {
        var a;
        this.jJ = this.hN = this.u7 = !1;
        this.u8[0] = an;
        this.u8[1] = ao;
        this.u8[2] = this.u8[3] = 0;
        var b = 1;
        a: for (; b < an - 1; b++)
            for (a = ao - 2; 1 < a; a--)
                if (1 === uB[bJ.fF(b, a) + 2]) {
                    this.u8[0] = b;
                    break a
                } a = 1;
        a: for (; a < ao -
            1; a++)
            for (b = an - 2; 1 < b; b--)
                if (1 === uB[bJ.fF(b, a) + 2]) {
                    this.u8[1] = a;
                    break a
                } b = an - 2;
        a: for (; 0 < b; b--)
            for (a = ao - 2; 1 < a; a--)
                if (1 === uB[bJ.fF(b, a) + 2]) {
                    this.u8[2] = b;
                    break a
                } a = ao - 2;
        a: for (; 0 < a; a--)
            for (b = an - 2; 1 < b; b--)
                if (1 === uB[bJ.fF(b, a) + 2]) {
                    this.u8[3] = a;
                    break a
                }
    }
}

function uC() {
    this.lQ = !1;
    this.mQ = null;
    this.uD = 0;
    this.dA = this.cF = null;
    this.uE = .013;
    this.uF = .022;
    this.uG = .025;
    this.uI = 3;
    this.uJ = 1.2;
    this.uK = .2;
    this.uL = .235;
    this.uM = .9;
    this.uN = .08;
    var a = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
        b, d = [-1E6, -1E6];
    this.position = [0, 0];
    this.uS = [0, 0];
    this.c3 = function() {
        this.mQ = [null, null];
        this.lQ = !1;
        this.uD = 0;
        this.m9()
    };
    this.cS = function(c) {
        this.uD = c;
        this.lQ = !0;
        this.c9();
        js.tv();
        cI.cJ = !0
    };
    this.dT = function() {
        this.lQ && this.c9()
    };
    this.c9 = function() {
        cI.gq -
            12E4 >= d[this.uD] && (d[this.uD] = cI.gq, this.uS = [0, 0], eR.rw(0, 1 + this.uD) && j5.uT(0, this.uD))
    };
    this.m9 = function() {
        var c;
        this.cF = this.uU(a4 ? .85 : .66, .75, a5, a6);
        this.dA = Math.floor(this.cF / .75);
        for (c = 1; 0 <= c; c--) this.mQ[c] && (this.mQ[c][4] = c7 + Math.floor(this.mQ[c][5] * this.dA / 10) + c8);
        b = c7 + Math.floor(.1 * this.dA) + c8
    };
    this.uU = function(c, f, e, h) {
        return e < f * h ? Math.floor(c * e) : Math.floor(f * c * h)
    };
    this.uV = function(c, f, e, h, g, k, l) {
        this.position[c] = l;
        var m = f.length,
            u = c7 + Math.floor(g * this.dA / 10) + c8;
        this.ua(f, u, k * this.cF);
        h = [
            [], m, -1, h, u, g, 10 * l
        ];
        for (g = 0; g < m; g++) k = {
            name: f[g].name,
            value: f[g].iQ / e,
            colorIndex: f[g].colorIndex
        }, h[0].push(k);
        this.mQ[c] = h;
        this.ub(c);
        f = this.mQ[c][0][0].name;
        1 === c && (f = "[" + f + "]");
        0 === l && uc.c5(c, f);
        cI.cJ = !0
    };
    this.ub = function(c) {
        this.mQ[c][0].sort(function(f, e) {
            return e.value - f.value
        })
    };
    this.ud = function(c, f, e, h) {
        if (this.mQ && this.mQ[c]) {
            var g, k = !1,
                l = 383 / 384;
            if (0 === c) {
                for (g = 0; g < this.mQ[c][0].length; g++)
                    if (f === this.mQ[c][0][g].name && e > .99 * this.mQ[c][0][g].value && e < 1.01 * this.mQ[c][0][g].value) {
                        this.mQ[c][0][g].value =
                            h;
                        k = !0;
                        break
                    } k || this.mQ[c][0].push({
                    name: f,
                    value: h
                })
            } else {
                for (g = 0; g < this.mQ[c][0].length; g++)
                    if (f === this.mQ[c][0][g].name) {
                        this.mQ[c][0][g].value += 32 < this.mQ[c][0][g].value ? (64 - this.mQ[c][0][g].value) / 256 : .25;
                        this.mQ[c][0][g].value *= 1 / l;
                        k = !0;
                        break
                    } for (g = 0; g < this.mQ[c][0].length; g++) this.mQ[c][0][g].value *= l;
                k || this.mQ[c][0].push({
                    name: f,
                    value: .25
                })
            }
            this.ub(c)
        }
    };
    this.ua = function(c, f, e) {
        for (var h = c.length - 1; 0 <= h; h--)
            for (; 3 < c[h].name.length && cG.measureText(c[h].name, f) > e;) c[h].name = c[h].name.substring(0,
                c[h].name.length - 4) + "..."
    };
    this.cL = function(c, f) {
        if (!this.lQ) return !1;
        c -= (gS - this.cF) / 2;
        f -= (cP - this.dA) / 2;
        if (0 > c || c > this.cF || 0 > f || f > this.dA) return this.lQ = !1, 0 === aX.pm() && jy.cS(0, !0), cI.cJ = !0;
        if (f < .3 * this.dA) var e = 1;
        else f < .85 * this.dA ? (e = (0 === this.uD ? 14.1 : 3) * (f - .3 * this.dA) / (.55 * this.dA), e = Math.floor(1 + e * e)) : e = 0 === this.uD ? 200 : 10;
        this.uS[this.uD] = c < this.cF / 2 ? -e : e;
        if (d[this.uD] + 50 > cI.gq) return !0;
        d[this.uD] = cI.gq;
        eR.rw(0, 1 + this.uD) && j5.uT(0, this.uD);
        return !0
    };
    this.cU = function() {
        if (this.lQ) {
            var c = this.uE *
                this.cF,
                f = this.uI * c,
                e = this.uF * this.cF,
                h = this.uJ * e,
                g = this.uG * this.cF,
                k = Math.floor(.25 * this.dA);
            cV.setTransform(1, 0, 0, 1, (gS - this.cF) / 2, (cP - this.dA) / 2);
            cV.fillStyle = 0 === this.uD ? oo : oj;
            cV.fillRect(0, 0, this.cF, k);
            cV.fillStyle = oT;
            cV.fillRect(0, k, this.cF, this.dA - k);
            cV.fillStyle = cY;
            cV.font = b;
            cV.textBaseline = cW;
            cV.textAlign = cX;
            cV.fillText(a[this.uD], Math.floor(this.cF / 2), Math.floor(.135 * this.dA));
            cV.font = c7 + Math.floor(.025 * this.dA) + c8;
            cV.fillText(a[this.uD + 2], Math.floor(this.cF / 2), Math.floor(.2125 * this.dA));
            cV.beginPath();
            cV.moveTo(this.cF / 4, 0);
            cV.lineTo(this.cF / 2 - c, 0);
            cV.lineTo(this.cF / 2, -f);
            cV.lineTo(this.cF / 2 + c, 0);
            cV.lineTo(this.cF - e, 0);
            cV.lineTo(this.cF + h, -h);
            cV.lineTo(this.cF, e);
            cV.lineTo(this.cF, this.dA / 2 - c);
            cV.lineTo(this.cF + f, this.dA / 2);
            cV.lineTo(this.cF, this.dA / 2 + c);
            cV.lineTo(this.cF, this.dA - e);
            cV.lineTo(this.cF + h, this.dA + h);
            cV.lineTo(this.cF - e, this.dA);
            cV.lineTo(this.cF / 2 + c, this.dA);
            cV.lineTo(this.cF / 2, this.dA + f);
            cV.lineTo(this.cF / 2 - c, this.dA);
            cV.lineTo(e, this.dA);
            cV.lineTo(-h, this.dA + h);
            cV.lineTo(0,
                this.dA - e);
            cV.lineTo(0, this.dA / 2 + c);
            cV.lineTo(-f, this.dA / 2);
            cV.lineTo(0, this.dA / 2 - c);
            cV.lineTo(0, e);
            cV.lineTo(-h, -h);
            cV.lineTo(e, 0);
            cV.lineTo(this.cF / 4, 0);
            cV.lineTo(this.cF / 4, g);
            cV.lineTo(g, g);
            cV.lineTo(g, this.dA - g);
            cV.lineTo(this.cF - g, this.dA - g);
            cV.lineTo(this.cF - g, g);
            cV.lineTo(this.cF / 4, g);
            cV.fill();
            this.mQ[this.uD] && this.uj(k);
            this.uk(k);
            cV.setTransform(1, 0, 0, 1, 0, 0)
        }
    };
    this.uk = function(c) {
        var f = mq(2, Math.floor(.06 * this.cF));
        f -= f % 2;
        var e = mq(2, Math.floor(.01 * this.cF));
        e -= e % 2;
        c = Math.floor(.82 * c);
        cV.fillRect(f,
            c, f, e);
        cV.fillRect(this.cF - f - f, c, f, e);
        cV.fillRect(Math.floor(this.cF - f - f + (f - e) / 2), Math.floor(c - (f - e) / 2), e, f)
    };
    this.uj = function(c) {
        cV.font = this.mQ[this.uD][4];
        for (var f, e = this.mQ[this.uD][1] - 1; 0 <= e; e--) cV.textAlign = ox, f = Math.floor(this.uN * this.dA + c + e * ((1 - 2 * this.uN) * this.dA - c) / 9), cV.fillText(this.mQ[this.uD][0][e].value.toFixed(this.mQ[this.uD][3]), Math.floor(this.uM * this.cF), f), cV.fillText(e + 1 + this.mQ[this.uD][6] + ".", Math.floor(this.uK * this.cF), f), cV.textAlign = mv, cV.fillText(this.mQ[this.uD][0][e].name,
            Math.floor(this.uL * this.cF), f)
    }
}

function ul() {
    var a, b, d, c, f, e, h, g, k, l, m, u, y;
    this.lQ = !1;
    this.c3 = function(z, G) {
        if (13 <= r) G ? u = z : u === z && s.saveString(200, z);
        else if (G) {
            (cQ.mQ[1].iw.lQ || cQ.mQ[2].iw.lQ) && cQ.uv();
            js.tv();
            u = z;
            k = Math.floor((a4 ? a5 > a6 ? .6 : .45 : .4) * pW);
            d = k / cA.cD(17).width;
            f = Math.floor(d * cA.cD(17).height);
            e = Math.floor(.4 * f);
            h = Math.floor(.6 * f);
            g = Math.floor(2.5 * h);
            c = f + e + 3 * h;
            var B = c7 + Math.floor(e / pa) + c8;
            l = Math.floor(pa * cG.measureText(u, B));
            m = (l > k ? l : k) + 2 * g;
            a = Math.floor((gS - m) / 2);
            b = Math.floor((cP - c) / 2);
            y = document.createElement("a");
            y.appendChild(document.createTextNode(u));
            y.title = u;
            y.target = "blank";
            y.href = u;
            y.style.font = B;
            y.style.textAlign = "center";
            y.style.color = cY;
            y.style.position = "absolute";
            y.style.padding = "0px";
            y.style.margin = "0px";
            y.style.top = Math.floor((b + 2 * h + f) / pa) + "px";
            y.style.left = Math.floor((a + (m - l) / 2) / pa) + "px";
            document.body.appendChild(y);
            this.lQ = !0;
            cI.cJ = !0
        }
    };
    this.lT = function() {
        if (!this.lQ) return !1;
        document.body.removeChild(y);
        this.lQ = !1;
        return !0
    };
    this.cL = function(z, G) {
        if (!this.lQ) return !1;
        if (z < a || G < b || z > a + m || G >
            b + c) cI.cJ = !0, this.lQ = !1, document.body.removeChild(y), 0 === aX.pm() && jy.cS(0, !0);
        return !0
    };
    this.cU = function() {
        this.lQ && (cV.imageSmoothingEnabled = !0, cV.setTransform(1, 0, 0, 1, a, b), cV.fillStyle = iC, cV.fillRect(0, 0, m, c), cV.lineWidth = pA, cV.strokeStyle = cY, cV.strokeRect(0, 0, m, c), cV.setTransform(d, 0, 0, d, a + (m - k) / 2, b + h), cV.drawImage(cA.cD(17), 0, 0), cV.setTransform(1, 0, 0, 1, 0, 0))
    }
}

function uw() {
    var a = 0,
        b = [0, 0, 0, 0, 0],
        d = [0, 0, 0, 0, 0],
        c = [1, 1, 1, 1, 1],
        f = [!0, !0, !0, !0, !0];
    this.ux = [!0, !0, !0, !0, !0];
    var e = null,
        h;
    this.uy = function(g, k) {
        e = g;
        f = k;
        h = [p1, p2, p3, p4, p5];
        this.c3()
    };
    this.c3 = function() {
        if (cA.cB()) {
            var g = Math.floor((a4 ? .261 : .195) * c4);
            var k = Math.floor(.9 * g),
                l = Math.floor(.17 * k);
            a = a4 ? 2 * mJ : mJ;
            c[0] = g / e[0].width;
            c[1] = k / e[1].width;
            c[2] = l / e[2].height;
            c[3] = l / e[3].height;
            c[4] = l / e[4].height;
            c[3] *= 1.07;
            b[0] = a;
            b[1] = a;
            b[2] = a;
            b[3] = a;
            b[4] = Math.floor(2 * a + c[3] * e[3].width);
            d[0] = a;
            d[1] = d[0] + a + c[0] * e[0].height;
            d[2] = d[1] + a + c[1] * e[1].height;
            d[3] = d[2] + a + c[2] * e[2].height;
            d[4] = d[3];
            if (!f[0])
                for (g = 0; 5 > g; g++) d[g] -= c[0] * e[0].height + a;
            if (!f[1])
                for (g = 2; 5 > g; g++) d[g] -= c[1] * e[1].height + a
        }
    };
    this.lQ = function() {
        return !(7 === aX.pm() && a4)
    };
    this.cL = function(g, k, l) {
        if (!e || !this.lQ()) return !1;
        var m;
        for (m = f.length - 1; 0 <= m; m--)
            if (f[m] && this.ux[m] && g > b[m] && k > d[m] && g < b[m] + c[m] * e[m].width && k < d[m] + c[m] * e[m].height) return ni.c3(h[m], l), !0;
        return !1
    };
    this.cU = function() {
        if (e && this.lQ()) {
            cV.imageSmoothingEnabled = !0;
            var g;
            for (g = 0; 5 > g; g++) f[g] &&
                this.ux[g] && (cV.setTransform(c[g], 0, 0, c[g], b[g], d[g]), cV.drawImage(e[g], 0, 0));
            cV.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
}

function kO() {
    function a(f) {
        var e = jv.v2[f],
            h = e.fX,
            g = e.fY,
            k = e.cF,
            l = e.dA;
        cV.fillStyle = e.v5;
        cV.fillRect(h, g, k, l);
        f === b && (cV.fillStyle = c, cV.fillRect(h, g, k, l));
        cV.lineWidth = 3;
        cV.strokeStyle = d;
        cV.strokeRect(h, g, k, l);
        f = e.fX;
        h = e.fY;
        g = e.cF;
        k = e.dA;
        cV.textAlign = cX;
        cV.textBaseline = cW;
        cV.font = e.font;
        cV.fillStyle = d;
        cV.fillText(e.nm, Math.floor(f + g / 2), Math.floor(h + k / 2 + .1 * e.cC))
    }
    var b, d, c;
    this.fK = this.fY = this.dA = this.cF = 0;
    this.c3 = function() {
        b = -1;
        d = cY;
        c = "rgba(255,255,255,0.16)";
        this.v2 = Array(7);
        this.dA = Math.floor((a4 ?
            .123 : .093) * c4);
        this.cF = Math.floor((a4 ? 3.96 : 4.2) * this.dA);
        this.fK = Math.floor(.025 * this.cF);
        var f = Math.floor(.26 * this.dA),
            e = c7 + f + c8;
        this.v2[0] = {
            fX: 0,
            fY: 0,
            cF: Math.floor(.6 * this.cF - this.fK / 2),
            dA: this.dA,
            nm: "Multiplayer",
            font: e,
            v5: "rgba(22,88,22,0.8)",
            cC: f
        };
        f = Math.floor(.18 * this.dA);
        e = c7 + f + c8;
        this.v2[1] = {
            fX: 0,
            fY: 0,
            cF: this.cF - this.v2[0].cF - this.fK,
            dA: this.dA,
            nm: "Singleplayer",
            font: e,
            v5: "rgba(22,88,88,0.8)",
            cC: f
        };
        this.v2[2] = {
            fX: 0,
            fY: 0,
            cF: this.cF,
            dA: Math.floor(.3 * this.dA),
            nm: "",
            font: this.v2[1].font,
            v5: "rgba(100,0,0,0.8)",
            cC: this.v2[1].cC
        };
        this.v2[3] = {
            fX: 0,
            fY: 0,
            cF: this.cF,
            dA: this.dA,
            nm: "Back",
            font: this.v2[0].font,
            v5: "rgba(0,0,0,0.8)",
            cC: this.v2[0].cC
        };
        this.v2[4] = {
            fX: 0,
            fY: 0,
            cF: this.cF,
            dA: Math.floor(.3 * this.dA),
            nm: "The game was updated!",
            font: this.v2[1].font,
            v5: "rgba(100,0,0,0.8)",
            cC: this.v2[1].cC
        };
        this.v2[5] = {
            fX: 0,
            fY: 0,
            cF: this.v2[0].cF,
            dA: Math.floor(.8 * this.dA),
            nm: "Reload",
            font: this.v2[0].font,
            v5: "rgba(0,100,0,0.8)",
            cC: this.v2[0].cC
        };
        this.v2[6] = {
            fX: 0,
            fY: 0,
            cF: this.v2[1].cF,
            dA: this.v2[5].dA,
            nm: "Back",
            font: this.v2[0].font,
            v5: "rgba(0,0,0,0.8)",
            cC: this.v2[0].cC
        };
        this.s4()
    };
    this.s4 = function() {
        this.fY = Math.floor(.54 * cP);
        this.v2[0].fX = Math.floor(.5 * gS - .5 * this.cF);
        this.v2[1].fX = this.v2[0].fX + this.v2[0].cF + this.fK;
        this.v2[2].fX = this.v2[3].fX = this.v2[0].fX;
        this.v2[4].fX = this.v2[5].fX = this.v2[0].fX;
        this.v2[6].fX = this.v2[1].fX;
        this.v2[0].fY = Math.floor(.54 * cP);
        this.v2[1].fY = this.v2[0].fY;
        this.v2[2].fY = Math.floor((cP - this.v2[2].dA - this.v2[3].dA - this.fK) / 2);
        this.v2[3].fY = this.v2[2].fY + this.v2[2].dA + this.fK;
        this.v2[4].fY = Math.floor((cP -
            this.v2[4].dA - this.v2[5].dA - this.fK) / 2);
        this.v2[5].fY = this.v2[6].fY = this.v2[4].fY + this.v2[4].dA + this.fK
    };
    this.v6 = function() {
        a(0);
        a(1)
    };
    this.v8 = function() {
        a(2);
        a(3)
    };
    this.v9 = function() {
        a(4);
        a(5);
        a(6)
    };
    this.m0 = function(f, e, h) {
        var g = -1;
        0 === aX.pm() ? g = this.pd(f, e, 0, 2) : 3 === aX.pm() ? g = this.pd(f, e, 3, 1) : 5 === aX.pm() && (g = this.pd(f, e, 5, 2));
        b !== g && (b = g, h && (cI.cJ = !0));
        return -1 !== g ? (ju.pi(), !0) : !1
    };
    this.pd = function(f, e, h, g) {
        for (var k = h; k < h + g; k++)
            if (f >= this.v2[k].fX && e >= this.v2[k].fY && f <= this.v2[k].fX + this.v2[k].cF &&
                e <= this.v2[k].fY + this.v2[k].dA) return k;
        return -1
    }
}

function vC() {
    function a(b) {
        return 0 > b ? 0 : 255 < b ? 255 : Math.floor(b)
    }
    this.dA = this.cF = 0;
    this.lQ = !1;
    this.vG = this.vF = this.vE = this.o6 = this.fK = this.vD = 0;
    this.colors = null;
    this.c3 = function() {
        a5 < 2 * a6 ? this.cF = Math.floor((a4 ? .94 : .4) * a5) : (this.dA = Math.floor((a4 ? .88 : .4) * a6), this.cF = Math.floor(2 * this.dA));
        this.dA = this.cF / 2;
        this.fK = this.dA / 16;
        this.lQ = !0;
        this.vD = 0;
        this.vE = (this.dA - 3 * this.fK) / 2;
        this.vF = this.cF - 3 * this.fK - this.vE;
        this.vG = (this.dA - 4 * this.fK) / 3
    };
    this.vH = function() {
        this.colors = [
            [0, 0, 0],
            [0, 0, 0]
        ];
        var b = a9().split("");
        if (6 !== b.length)
            for (b = 2; 0 <= b; b--) this.colors[0][b] = a(256 * Math.random());
        else
            for (var d = 2; 0 <= d; d--) this.colors[0][d] = a(4 * (10 * parseInt(b[2 * d]) + parseInt(b[2 * d + 1])));
        this.vJ()
    };
    this.vK = function() {
        return [b6(this.colors[0][0], 4), b6(this.colors[0][1], 4), b6(this.colors[0][2], 4)]
    };
    this.cL = function(b, d) {
        this.vD = 0;
        var c = (cP - this.dA) / 2;
        b -= (gS - this.cF) / 2;
        d -= c;
        if (0 > b || 0 > d || b >= this.cF - 1 || d >= this.dA - 1) return this.lQ = !1, 0 === aX.pm() && jy.cS(0, !0), cI.cJ = !0, !1;
        if (b < this.fK || d < this.fK || b >= this.cF - this.fK || d >= this.dA - this.fK) return !0;
        if (b < this.fK + this.vE) return d < this.fK + this.vE && 0 !== this.o6 && (this.o6 = 0, cI.cJ = !0), !0;
        if (b < 2 * this.fK + this.vE) return !0;
        b -= 2 * this.fK + this.vE;
        if (d < this.fK + this.vG) return this.vD = 1, this.colors[this.o6][0] = a(256 * b / this.vF), cI.cJ = !0;
        if (d < 2 * this.fK + this.vG) return !0;
        if (d < 2 * this.fK + 2 * this.vG) return this.vD = 2, this.colors[this.o6][1] = a(256 * b / this.vF), cI.cJ = !0;
        d >= 3 * this.fK + 2 * this.vG && (this.vD = 3, this.colors[this.o6][2] = a(256 * b / this.vF), cI.cJ = !0);
        return !0
    };
    this.vJ = function() {
        for (var b = 2; 0 <= b; b--) this.colors[0][b] =
            a(this.colors[0][b])
    };
    this.vL = function() {
        for (var b = "", d, c = 0; 3 > c; c++) d = b6(this.colors[0][c], 4), 10 > d && (b += "0"), b += d.toString();
        aM(b)
    };
    this.m0 = function(b) {
        0 !== this.vD && (b -= 2 * this.fK + this.vE + (gS - this.cF) / 2, this.colors[this.o6][this.vD - 1] = a(256 * b / this.vF), cI.cJ = !0)
    };
    this.vM = function() {
        0 < this.vD && (this.vD = 0, this.vJ(), this.vL(), cI.cJ = !0)
    };
    this.cU = function() {
        cV.setTransform(1, 0, 0, 1, (gS - this.cF) / 2, (cP - this.dA) / 2);
        cV.fillStyle = iC;
        cV.fillRect(0, 0, this.cF, this.dA);
        cV.lineWidth = pA;
        cV.strokeStyle = cY;
        cV.strokeRect(-1,
            -1, this.cF + 2, this.dA + 2);
        cV.font = c7 + Math.floor(.8 * this.vE) + c8;
        cV.textBaseline = cW;
        cV.textAlign = cX;
        this.vN(0);
        cV.lineWidth = pA;
        this.vO(0);
        this.vO(1);
        this.vO(2);
        cV.setTransform(1, 0, 0, 1, 0, 0)
    };
    this.vN = function(b) {
        cV.fillStyle = "rgb(" + this.colors[b][0] + "," + this.colors[b][1] + "," + this.colors[b][2] + ")";
        cV.fillRect(this.fK, this.fK, this.vE, 2 * this.vE + this.fK);
        cV.lineWidth = 2 + pA;
        cV.strokeStyle = cY;
        cV.strokeRect(this.fK, this.fK, this.vE, 2 * this.vE + this.fK)
    };
    this.vO = function(b) {
        cV.fillStyle = "rgb(" + (0 === b ? 200 : 2 === b ? 50 :
            0) + "," + (1 === b ? 200 : 2 === b ? 50 : 0) + "," + (2 === b ? 255 : 0) + ")";
        cV.fillRect(2 * this.fK + this.vE, this.fK + b * (this.fK + this.vG), Math.floor(this.colors[this.o6][b] * this.vF / 255), this.vG);
        cV.strokeStyle = cY;
        cV.strokeRect(2 * this.fK + this.vE, this.fK + b * (this.fK + this.vG), this.vF, this.vG)
    }
}

function kP() {
    function a() {
        return 0 === n ? 0 : 1 + (n - 1 + D) % (eR.va - 1)
    }

    function b() {
        n++;
        B = cI.gq;
        eR.rw(a(), 4) && (C = !0, j5.vb(a()))
    }

    function d() {
        0 === n ? jx.vg(3249) : (n === eR.va - 1 && (n = -1), b())
    }

    function c(E, A, F) {
        var J = Math.floor((gS - g) / 2) + m,
            K = J + Math.floor(F * (g - 2 * m));
        cV.lineWidth = A;
        cV.beginPath();
        cV.moveTo(J, E);
        cV.lineTo(K, E);
        cV.lineTo(Math.floor(J - m + F * g), E + h);
        cV.lineTo(J - m, E + h);
        cV.closePath()
    }
    var f, e, h, g, k, l, m, u, y, z, G, B, n, D = 0,
        C;
    this.c3 = function() {
        aX.setState(6);
        f = 0;
        e = 1;
        u = "rgba(0,220,120,0.4)";
        y = "rgba(0,0,0,0.8)";
        this.m9();
        cI.cJ = !0;
        n = 0;
        C = !1;
        b()
    };
    this.m9 = function() {
        g = Math.floor((a4 ? .5 : .25) * c4);
        k = g + 12;
        h = Math.floor(.125 * g);
        m = 3 * h;
        l = Math.floor(.225 * g);
        G = Math.floor(.3 * h);
        z = oz + G + c8
    };
    this.vY = function(E) {
        D = E
    };
    this.vc = function(E) {
        E === a() && (C = !1, d())
    };
    this.ry = function(E) {
        6 !== aX.pm() || C || (B = cI.gq, C = !0, j5.vb(E))
    };
    this.cL = function(E, A) {
        var F = Math.floor((gS - k) / 2),
            J = Math.floor(.5 * (cP - cO - h - l)) + h + cO;
        return E > F && E < F + k && A > J && A < J + l ? (this.vh(), jv.m0(E, A, !1), !0) : !1
    };
    this.vh = function() {
        eR.vi(3260);
        js.c3();
        cI.cJ = !0
    };
    this.dT = function() {
        6 ===
            aX.pm() && (C ? cI.gq > B + 2E4 && jx.vg(3250) : cI.gq > B + 2E4 && d(), f += .07 * e * (16 > f ? 5 + f : 84 < f ? 105 - f : 17), 100 < f ? (f = 100, e = -1) : 0 > f && (f = 0, e = 1), u = "rgba(0," + Math.floor(190 - 1.9 * f) + "," + Math.floor(120 - 1.2 * f) + "," + (.4 + .004 * f) + ")", y = "rgba(0," + Math.floor(1.9 * f) + "," + Math.floor(1.2 * f) + "," + (.8 - .004 * f) + ")", cI.cJ = !0)
    };
    this.cU = function() {
        var E = Math.floor((gS - k) / 2),
            A = Math.floor(.5 * (cP - cO - h - l)),
            F = f / 100;
        cV.fillStyle = y;
        c(A, 3, 1);
        cV.fill();
        cV.fillStyle = u;
        c(A, 3, F);
        cV.fill();
        cV.strokeStyle = cY;
        c(A, 3, 1);
        cV.stroke();
        cV.textAlign = cX;
        cV.textBaseline =
            cW;
        cV.font = z;
        cV.fillStyle = cY;
        cV.fillText("Loading", Math.floor(.5 * gS), Math.floor(A + .58 * h));
        A = A + h + cO;
        F = k;
        var J = l;
        cV.fillStyle = oS;
        cV.fillRect(E, A, F, J);
        cV.lineWidth = 3;
        cV.strokeStyle = cY;
        cV.strokeRect(E, A, F, J);
        var K = Math.floor(.3 * J);
        cV.textAlign = cX;
        cV.textBaseline = cW;
        cV.font = oz + K + c8;
        cV.fillStyle = cY;
        cV.fillText("Back", Math.floor(E + F / 2), Math.floor(A + J / 2 + .1 * K))
    }
}

function kQ() {
    var a;
    this.c3 = function() {
        jv.c3();
        jy.c3();
        a = 0;
        vq.c3();
        js.c3()
    };
    this.setState = function(b) {
        a = b
    };
    this.pm = function() {
        return a
    };
    this.vs = function() {
        this.setState(8);
        k5.tv();
        cQ.uv();
        cR.lQ = !1;
        ni.cL(-1E3, -1E3)
    };
    this.uv = function(b) {
        if (!vt) return !1;
        if (!(400 > cI.gq)) {
            if ("Enter" === b.key || "Escape" === b.key) {
                if (this.vu()) return 0 === a && jy.cS(0, !0), !0;
                if ("Enter" === b.key) {
                    if (0 === a) return js.vv(), !0;
                    if (7 === a) return !0
                }
            }
            return !1
        }
    };
    this.vu = function() {
        return ni.lT() || cQ.uv() ? !0 : cR.lQ ? (cR.lQ = !1, !0) : !1
    };
    this.aY =
        function() {
            cI.cJ = !0;
            8 === a ? gw ? gw = !gw : i9.lQ ? i9.mE() : g4.mE() : 7 === a ? k5.vw() : 6 === a ? jw.vh() : 3 === a ? jx.vx(0, 0) : 2 === a ? eC.vx() : 0 === a && (this.vu() || aN(11))
        };
    this.cL = function(b, d) {
        if (!vq.cL(b, d) && vt && !(ni.cL(b, d) || 6 === a && jw.cL(b, d) || 2 === a && eC.cL(b, d) || k7.cL(b, d) || cR.cL(b, d) || vy.cL(b, d, !0) || cQ.cL(b, d, !0))) {
            ju.cL(b, d);
            if (0 === a) js.cL(b, d);
            else if (3 === a) jx.cL(b, d);
            else if (5 === a) jz.cL(b, d);
            else if (7 === a && k5.cL(b, d)) return;
            uc.cL(b, d)
        }
    };
    this.m0 = function(b, d) {
        k7.m0(b, d);
        if (!ju.ru) {
            if (vq.m0(b, d)) {
                ju.pi();
                return
            }
            if (2 ===
                a && eC.m0(b, d)) {
                ju.pi();
                return
            }
            if (0 <= cQ.pd(b, d)) {
                ju.pi();
                return
            }
            if (cQ.m0(b, d)) {
                ju.pi();
                return
            }
            if (jv.m0(b, d, !0)) return
        }
        ju.m0(b, d)
    };
    this.click = function(b, d) {
        ju.pj();
        cQ.vM() || vy.cL(b, d, !1) || cQ.cL(b, d, !1)
    };
    this.pp = function(b, d, c) {
        cQ.mQ[1].iw.lQ || 0 === a && ju.pp(b, c)
    };
    this.vz = function() {
        jv.s4();
        cQ.s4();
        0 === a ? (jy.s4(0), ju.s4()) : 7 === a && k5.m9();
        cI.cJ = !0
    };
    this.cU = function() {
        if (8 !== a && 10 !== a) {
            cV.imageSmoothingEnabled = !0;
            this.i5();
            ju.cU();
            jt.cU();
            var b = Math.floor(.3 * cP),
                d = cA.lN("territorial.io"),
                c = 1.75 * cP / d.width;
            c = c * d.width < .98 * gS ? .98 * gS / d.width : c;
            cV.globalAlpha = .15;
            var f = Math.floor(.5 * (gS - c * d.width));
            f = Math.floor(f / c);
            b = Math.floor(b - .5 * d.height * c);
            b = Math.floor(b / c);
            cV.setTransform(c, 0, 0, c, f, b);
            cV.drawImage(d, f, b);
            cV.setTransform(1, 0, 0, 1, 0, 0);
            cV.globalAlpha = 1;
            vy.cU();
            uc.cU();
            cQ.cU();
            k7.cU();
            0 === a ? js.cU() : 2 === a ? eC.cU() : 3 === a ? jx.cU() : 5 === a ? jz.cU() : 6 === a ? jw.cU() : 7 === a && k5.cU();
            cQ.w1();
            vq.cU();
            cR.cU();
            ni.cU()
        }
    };
    this.i5 = function() {
        if (vt) {
            var b = a5 / an,
                d = a6 / ao;
            b = b > d ? b : d;
            cV.setTransform(b, 0, 0, b, Math.floor((a5 - b * an) /
                2), Math.floor((a6 - b * ao) / 2));
            cV.drawImage(i6, 0, 0);
            cV.setTransform(1, 0, 0, 1, 0, 0);
            cV.fillStyle = oS
        } else cV.fillStyle = gV;
        cV.fillRect(0, 0, a5, a6)
    }
}

function w4() {
    this.dA = this.cF = 0;
    this.lQ = !1;
    this.nv = 10;
    this.bP = .12;
    this.w6 = this.w5 = this.vD = !1;
    this.c3 = function() {
        this.cF = a5 < 1 * a6 ? Math.floor((a4 ? .94 : .6) * a5) : Math.floor((a4 ? .94 : .6) * a6);
        this.cF -= this.cF % this.nv;
        this.dA = 1 * this.cF;
        this.lQ = !0;
        this.vD = !1
    };
    this.cL = function(a, b, d) {
        var c = (cP - this.dA) / 2;
        a -= (gS - this.cF) / 2;
        b -= c;
        if (0 > a || 0 > b || a >= this.cF - 1 || b >= this.dA - 1) return 0 === d && (this.lQ = !1, 0 === aX.pm() && jy.cS(0, !0), cI.cJ = !0), !1;
        c = Math.floor(this.cF / this.nv);
        a = b6(a, c) + this.nv * b6(b, c);
        a = 0 > a ? 0 : a >= aJ.nz ? aJ.nz - 1 :
            a;
        if (0 === d || 1 === d && !aJ.aL[a] || 2 === d && aJ.aL[a]) this.w5 = !aJ.aL[a], this.w6 = this.vD = !0, aJ.aL[a] = !aJ.aL[a], aJ.oH(), cI.cJ = !0;
        return !0
    };
    this.m0 = function(a, b) {
        this.vD && this.cL(a, b, this.w5 ? 1 : 2)
    };
    this.vM = function() {
        this.w6 && (aH(), this.w6 = !1);
        this.vD = this.w6 = !1
    };
    this.cU = function() {
        cV.imageSmoothingEnabled = !0;
        var a = (gS - this.cF) / 2,
            b = (cP - this.dA) / 2;
        cV.setTransform(1, 0, 0, 1, a, b);
        cV.fillStyle = iC;
        cV.fillRect(0, 0, this.cF, this.dA);
        cV.lineWidth = pA;
        cV.strokeStyle = cY;
        cV.strokeRect(-1, -1, this.cF + 2, this.dA + 2);
        for (var d = Math.floor(this.cF /
                this.nv), c = (d - 2 * this.bP * d) / aJ.cF, f = aJ.nz - 1; 0 <= f; f--) cV.setTransform(1, 0, 0, 1, Math.floor(a + f % this.nv * d), Math.floor(b + b6(f, this.nv) * d)), aJ.aL[f] && (cV.fillStyle = oa, cV.fillRect(0, 0, d, d)), cV.setTransform(c, 0, 0, c, Math.floor(a + f % this.nv * d + this.bP * d), Math.floor(b + b6(f, this.nv) * d + this.bP * d)), cV.drawImage(aJ.lJ[f], 0, 0);
        cV.setTransform(1, 0, 0, 1, 0, 0);
        cV.imageSmoothingEnabled = !1
    }
}

function kR() {
    function a() {
        var e = aX.pm();
        0 === e ? js.tv() : 6 === e ? eR.vi(d) : 7 === e ? (k5.tv(), eR.close(eR.w9, 3240)) : 8 === e && (jp(), js.tv());
        aX.setState(3);
        jv.s4();
        jv.v2[2].nm = b(d);
        cI.cJ = !0
    }

    function b(e) {
        var h;
        for (h = c.length - 1; 0 <= h; h--)
            if (e === c[h].code) return c[h].z;
        return f + e
    }
    var d, c, f;
    this.jh = function() {
        c = [];
        c.push({
            z: "No Server Response",
            code: 1006
        });
        c.push({
            z: "Account successfully saved!",
            code: 3231
        });
        c.push({
            z: "Account Error",
            code: 3232
        });
        c.push({
            z: "No Servers Found",
            code: 3249
        });
        c.push({
            z: "Thanks for the vote.",
            code: 3252
        });
        c.push({
            z: "Please accept Cookies",
            code: 3265
        });
        c.push({
            z: "Invalid Password Format",
            code: 3266
        });
        c.push({
            z: "Lobby Timeout",
            code: 4207
        });
        c.push({
            z: "Invalid Username",
            code: 4214
        });
        c.push({
            z: "User already exists.",
            code: 4224
        });
        c.push({
            z: "No Client Response Error",
            code: 4229
        });
        f = "Error "
    };
    this.c3 = function(e, h) {
        d = h;
        var g = aX.pm();
        if (6 === g) {
            if (4211 === h) {
                jz.c3(0, 0);
                return
            }
            if (4214 !== h) {
                jw.vc(e);
                return
            }
        } else if (7 === g) {
            if (e !== eR.w9) return
        } else {
            8 === g && (e !== eR.jq || eB || eN.n0(b(h)));
            return
        }
        a()
    };
    this.vg = function(e) {
        d =
            e;
        8 === aX.pm() ? eN.n0(b(e)) : a()
    };
    this.m9 = function() {
        jv.v2[2].nm = b(d)
    };
    this.cL = function(e, h) {
        3 === jv.pd(e, h, 3, 1) && this.vx(e, h)
    };
    this.vx = function(e, h) {
        js.c3();
        jv.m0(e, h, !1);
        cI.cJ = !0
    };
    this.cU = function() {
        jv.v8()
    }
}

function kS() {
    function a() {
        b.push({
            input: document.createElement("INPUT"),
            lQ: !1,
            color: d
        });
        var f = b.length - 1;
        b[f].input.setAttribute("type", "text");
        b[f].input.value = "";
        b[f].input.style.textAlign = 0 === f ? "center" : "left";
        b[f].input.style.backgroundColor = d;
        b[f].input.style.border = "3px solid " + cY;
        b[f].input.style.color = cY;
        b[f].input.style.position = "absolute";
        b[f].input.readOnly = 3 === f;
        b[f].input.addEventListener("input", function() {
            0 === f && js.wG()
        })
    }
    var b, d, c;
    this.c3 = function() {
        d = "rgba(0,0,0,0.6)";
        c = oh;
        void 0 !==
            b && this.cS(0, !1);
        b = [];
        a();
        this.m9()
    };
    this.m9 = function() {
        var f = Math.floor(.22 * jv.dA / pa);
        b[0].input.style.font = c7 + f + c8;
        b[0].input.style.padding = Math.floor(.3 * f) + "px 5px";
        b[0].input.style.width = Math.floor(jv.cF / pa - 13) + "px"
    };
    this.cD = function(f) {
        return b[f]
    };
    this.s4 = function(f) {
        b[f].input.style.left = Math.floor((gS / pa - (jv.cF / pa - 3) - 7) / 2) + "px";
        0 === f && (b[f].input.style.bottom = Math.floor((cP - jv.fY + jv.fK) / pa) + "px")
    };
    this.cS = function(f, e) {
        b[f].lQ !== e && ((b[f].lQ = e) ? document.body.appendChild(b[f].input) : document.body.removeChild(b[f].input))
    };
    this.wH = function(f, e) {
        e && b[f].color === d || !e && b[f].color === c || (b[f].color = e ? d : c, b[f].input.style.backgroundColor = b[f].color)
    }
}

function kv() {
    this.wK = this.wJ = 0;
    var a, b, d, c;
    this.c3 = function(f) {
        if (7 === aX.pm()) {
            a = f;
            b = 0;
            d = cI.gq + 4500;
            c = k3.wP(a) ? 2 : 0;
            aX.setState(10);
            cV.imageSmoothingEnabled = !0;
            aX.i5();
            f = cA.lN("loading");
            var e = (a4 ? .396 : .25) * c4 / f.width;
            cV.setTransform(e, 0, 0, e, Math.floor((a5 - e * f.width) / 2), Math.floor((a6 - e * f.height) / 2));
            cV.drawImage(f, 0, 0);
            cV.setTransform(1, 0, 0, 1, 0, 0)
        }
    };
    this.en = function() {
        0 < c && cI.gq > d && (c--, d += 4500, 0 === cI.wR && 0 === cI.wS && (0 === c && eR.jq < eR.wT && (eR.jq += eR.wU), eR.rw(eR.jq, 5)))
    };
    this.wV = function() {
        10 === aX.pm() &&
            (b++, 2 <= b && (k3.wW(a), a = null))
    }
}

function ks() {
    function a(I, N) {
        var P = u[I].getContext("2d", {
            alpha: !0
        });
        P.clearRect(0, 0, 48, 48);
        var Q = 48 / N.width,
            O = 48 / N.height;
        Q = O < Q ? O : Q;
        P.setTransform(Q, 0, 0, Q, Math.floor((48 - Q * N.width) / 2), Math.floor((48 - Q * N.height) / 2));
        P.drawImage(N, 0, 0);
        P.setTransform(1, 0, 0, 1, 0, 0)
    }

    function b(I, N, P, Q) {
        Q.beginPath();
        Q.moveTo(I, I);
        Q.lineTo(I + Math.cos(P) * N, I + Math.cos(P + 1.5 * Math.PI) * N);
        Q.stroke()
    }

    function d() {
        if (7 === aX.pm()) {
            for (var I = -1, N = y.length - 1; 0 <= N; N--)
                if (null === y[N].m4) {
                    I = N;
                    break
                } if (-1 !== I) {
                N = c(y[I].xD, y[I].xE);
                if (null !== N) y[I].m4 = N;
                else {
                    N = an;
                    var P = ao,
                        Q = i6,
                        O = px,
                        Z = xK,
                        T = xL,
                        U = x9,
                        ca = xA;
                    xM(y[I].xD, y[I].xE);
                    xN.xO();
                    var L = document.createElement("canvas");
                    L.width = 128;
                    L.height = 128;
                    var H = L.getContext("2d", {
                            alpha: !1
                        }),
                        M = 128 / an,
                        R = 128 / ao;
                    R > M && (M = R);
                    H.imageSmoothingEnabled = !0;
                    H.setTransform(M, 0, 0, M, (128 - M * an) / 2, (128 - M * ao) / 2);
                    H.drawImage(i6, 0, 0);
                    an = N;
                    ao = P;
                    i6 = Q;
                    px = O;
                    xK = Z;
                    xL = T;
                    x9 = U;
                    xA = ca;
                    y[I].m4 = L
                }
                cI.cJ = !0
            }
        }
    }

    function c(I, N) {
        for (var P = y.length - 1; 0 <= P; P--)
            if (null !== y[P].m4 && y[P].xD === I && y[P].xE === N) return y[P].m4;
        return null
    }

    function f(I, N) {
        var P, Q;
        if (0 === y.length) return !1;
        var O = 0;
        var Z = l;
        for (Q = 0; Q < g[1]; Q++) {
            var T = k;
            for (P = 0; P < g[0]; P++) {
                if (I > T && I < T + e && N > Z && N < Z + e) return j5.xQ(y[O].xB), G = y[O].xB !== G ? y[O].xB : -1, cI.cJ = !0;
                O++;
                if (O >= y.length) return !1;
                T += e + cO
            }
            Z += e + cO
        }
        return !1
    }
    var e, h, g, k, l, m, u, y, z, G, B, n, D = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
        C = [0, 0, 0, 0],
        E, A, F, J, K;
    this.c3 = function() {
        K = 0;
        G = -1;
        aX.setState(7);
        y = [];
        this.m9();
        var I;
        u = Array(11);
        for (I = u.length; 0 <= I; I--) u[I] = document.createElement("canvas"), u[I].width = 48,
            u[I].height = 48;
        for (I = 0; 7 > I; I++) {
            var N = I + 2,
                P = u[N - 2].getContext("2d", {
                    alpha: !0
                }),
                Q = 1.5 * Math.PI;
            P.lineWidth = 2;
            P.strokeStyle = cY;
            P.clearRect(0, 0, 48, 48);
            for (var O = 0; O < N; O++) {
                var Z = Q + 2 * Math.PI / N;
                var T = Q,
                    U = Z,
                    ca = P;
                ca.fillStyle = dk.x1[O + 1];
                ca.beginPath();
                ca.arc(24, 24, 23, T, U);
                ca.lineTo(24, 24);
                ca.fill();
                0 !== O && b(24, 23, Q, P);
                Q = Z
            }
            b(24, 23, 1.5 * Math.PI, P);
            P.beginPath();
            P.arc(24, 24, 23, 0, 2 * Math.PI);
            P.stroke()
        }
        a(7, cA.cD(4));
        a(8, aJ.lJ[27]);
        a(9, aJ.lJ[46]);
        a(10, aJ.lJ[36]);
        cI.cJ = !0
    };
    this.vw = function() {
        this.tv();
        eR.vi(3240);
        js.c3();
        cI.cJ = !0
    };
    this.tv = function() {
        y = [];
        u = []
    };
    this.m9 = function() {
        var I, N;
        g = [0, 0];
        z = [0, 0, 0, 0];
        a4 ? (B = Math.floor(.8 * .4 * c4), n = Math.floor(.56 * B), z[0] = cO, a5 < a6 ? (z[1] = n + 2 * cO, z[2] = a5 - 3 * z[0], z[3] = uc.cT() - 3 * cO - n, A = Math.floor(.95 * n), F = Math.floor((a5 - B - cO) / 2), J = Math.floor(cO + n / 2)) : (z[1] = cO, z[2] = a5 - 3 * cO - B, z[3] = uc.cT() - 2 * cO, A = Math.floor(.8 * B), z[3] - n < B && (A = Math.floor(.8 * (z[3] - n)), A = mq(n, A)), F = Math.floor(a5 - B / 2 - cO), J = Math.floor(cO + n + (z[3] - n) / 2), J = mq(J, Math.floor(n + 2 * cO + A / 2)))) : (B = Math.floor(.2016 * c4), n = Math.floor(.56 *
            B), z[2] = Math.floor(.5 * a5), z[3] = Math.floor(.5 * a6), z[1] = Math.floor(.45 * (a6 - z[3])), z[0] = Math.floor((a5 - z[2]) / 2), A = Math.floor(.75 * n), F = Math.floor(a5 / 2), J = Math.floor(z[1] + z[3] + (a6 - z[3] - z[1]) / 2));
        E = c7 + Math.floor(.65 * n / 4) + c8;
        for (I = N = 1; I * N < y.length;) z[2] / (I + 1) > z[3] / (N + 1) ? I++ : N++;
        var P = (z[2] - (I - 1) * cO) / I;
        var Q = (z[3] - (N - 1) * cO) / N;
        e = P < Q ? P : Q;
        h = Math.floor(e);
        m = c7 + Math.floor(.5 * e / 5) + c8;
        g[0] = I;
        g[1] = N;
        k = z[0] + Math.floor((z[2] - g[0] * e - (g[0] - 1) * cO) / 2);
        l = z[1] + Math.floor((z[3] - g[1] * e - (g[1] - 1) * cO) / 2)
    };
    this.ud = function(I,
        N) {
        var P, Q = y.length;
        C = I;
        for (P = 0; P < N.length; P++) {
            var O = c(N[P].x9, N[P].xA);
            y.push({
                xB: N[P].id,
                jX: N[P].jX,
                jY: N[P].xC,
                xD: N[P].x9,
                xE: N[P].xA,
                joined: N[P].xF,
                nr: N[P].vm,
                xG: N[P].xG,
                m4: O
            })
        }
        for (P = Q - 1; 0 <= P; P--) y.shift();
        if (-1 !== G)
            for (O = G, G = -1, P = y.length - 1; 0 <= P; P--)
                if (y[P].xB === O) {
                    G = O;
                    break
                } if (y.length > K || y.length < K) K = y.length, this.m9();
        this.xH();
        cI.cJ = !0
    };
    this.xH = function() {
        for (var I = y.length - 1; 0 <= I; I--) null === y[I].m4 && setTimeout(d, 0)
    };
    this.cL = function(I, N) {
        return 4 * ((I - F) * (I - F) + (N - J) * (N - J)) <= A * A ? (this.vw(),
            jv.m0(I, N, !1), !0) : f(I, N)
    };
    this.cU = function() {
        var I = 0,
            N = l;
        cV.imageSmoothingEnabled = !0;
        cV.lineWidth = 3;
        var P = Math.floor(.5 * A);
        cV.fillStyle = oS;
        cV.beginPath();
        cV.arc(F, J, P, 0, 2 * Math.PI);
        cV.fill();
        cV.strokeStyle = cY;
        cV.beginPath();
        cV.arc(F, J, P, 0, 2 * Math.PI);
        cV.stroke();
        P = cA.cD(0).height;
        var Q = .6 * A / P;
        cV.setTransform(Q, 0, 0, Q, Math.floor(F - .56 * Q * cA.cD(0).width), Math.floor(J - .5 * Q * P));
        cV.drawImage(cA.cD(0), 0, 0);
        cV.setTransform(1, 0, 0, 1, 0, 0);
        cV.fillStyle = oS;
        cV.fillRect(a5 - B - cO, cO, B, n);
        0 <= G ? (cV.fillStyle = oa, cV.fillRect(a5 -
            B - cO, cO, B, Math.floor(.25 * n))) : (cV.fillStyle = ov, cV.fillRect(a5 - B - cO, cO + Math.floor(.25 * n), B, Math.floor(.25 * n)));
        cV.strokeStyle = cY;
        cV.strokeRect(a5 - B - cO, cO, B, n);
        cV.fillStyle = cY;
        cV.font = E;
        cV.textBaseline = cW;
        P = Math.floor(.04 * B);
        Q = Math.floor(.08 * n);
        for (var O = 3; 0 <= O; O--) {
            var Z = Math.floor(cO + (O + 1) * (n + 2 * Q) / 5 - Q);
            cV.textAlign = mv;
            cV.fillText(D[O], a5 - B - cO + P, Z);
            cV.textAlign = ox;
            cV.fillText(ed.gX(C[O]), a5 - cO - P, Z)
        }
        if (0 !== y.length)
            for (Q = 0; Q < g[1]; Q++) {
                Z = k;
                for (P = 0; P < g[0]; P++) {
                    O = I;
                    var T = Math.floor(Z),
                        U = Math.floor(N);
                    if (null === y[O].m4) cV.fillStyle = oS, cV.fillRect(T, U, h, h);
                    else {
                        var ca = h / 128;
                        cV.setTransform(ca, 0, 0, ca, T, U);
                        cV.drawImage(y[O].m4, 0, 0);
                        cV.setTransform(1, 0, 0, 1, 0, 0)
                    }
                    if (G === y[O].xB) {
                        ca = T;
                        var L = U,
                            H = Math.floor(.2 * h),
                            M = Math.floor(.3 * H);
                        cV.fillStyle = oc;
                        cV.fillRect(ca + h - H, L, H, H);
                        cV.fillStyle = gV;
                        cV.fillRect(ca + h - H, L, 2, H);
                        cV.fillRect(ca + h - H, L + H - 2, H, 2);
                        g4.mN(ca + h - H + M, L + M, H - 2 * M);
                        cV.setTransform(1, 0, 0, 1, 0, 0);
                        cV.lineWidth = 3;
                        cV.fillStyle = oc
                    } else cV.fillStyle = oR;
                    L = Math.floor(e / 4);
                    cV.fillRect(T, Math.floor(U + .8 * e), h, Math.floor(e /
                        5));
                    cV.fillRect(T, U, L, L);
                    cV.fillStyle = gV;
                    cV.fillRect(T, Math.floor(U + .8 * e), h, 2);
                    cV.fillRect(T + L - 2, U, 2, L);
                    cV.fillRect(T, U + L - 2, L, 2);
                    cV.font = m;
                    cV.textBaseline = cW;
                    cV.textAlign = mv;
                    cV.fillStyle = op;
                    cV.fillText(y[O].joined.toString(), Math.floor(T + .07 * e), Math.floor(U + .9 * e));
                    256 >= y[O].xG && (cV.textAlign = cX, cV.fillStyle = oY, cV.fillText(y[O].xG.toString(), Math.floor(T + .5 * e), Math.floor(U + .9 * e)));
                    cV.textAlign = ox;
                    cV.fillStyle = ok;
                    cV.fillText(y[O].nr.toString(), Math.floor(T + .93 * e), Math.floor(U + .9 * e));
                    cV.strokeStyle =
                        oq;
                    cV.strokeRect(T, U, h, h);
                    H = Math.floor(.16 * e);
                    ca = H / 48;
                    cV.setTransform(ca, 0, 0, ca, Math.floor(T + (L - H) / 2), Math.floor(U + (L - H) / 2));
                    u.length > y[O].jX && cV.drawImage(u[y[O].jX], 0, 0);
                    cV.setTransform(1, 0, 0, 1, 0, 0);
                    y[O].jY && (O = cA.cD(4), ca = .5 * e / O.width, cV.setTransform(ca, 0, 0, ca, Math.floor(T + (e - ca * O.width) / 2), Math.floor(U + (e - ca * O.height) / 2)), cV.globalAlpha = .6, cV.drawImage(O, 0, 0), cV.globalAlpha = 1, cV.setTransform(1, 0, 0, 1, 0, 0));
                    I++;
                    if (I >= y.length) return;
                    Z += e + cO
                }
                N += e + cO
            }
    }
}

function kT() {
    this.c3 = function(a, b) {
        aX.setState(5);
        jv.m0(a, b, !1);
        cI.cJ = !0
    };
    this.cU = function() {
        jv.v9()
    };
    this.cL = function(a, b) {
        var d = jv.pd(a, b, 5, 2);
        5 === d ? aQ() : 6 === d && (js.c3(), jv.m0(a, b, !1), cI.cJ = !0)
    }
}

function kU() {
    function a(d, c, f, e, h, g, k, l, m) {
        cV.fillStyle = h;
        cV.fillRect(d, c, f, e);
        0 <= l && (cV.fillStyle = "rgba(" + 22 * l + "," + (110 - 22 * l) + ",0,0.75)", cV.fillRect(d, c, (1 + l) * f / 6, e));
        0 < m && (cV.fillStyle = "rgba(255,255,255,0.3)", cV.fillRect(d, c, m * f / bM, e));
        cV.strokeStyle = cY;
        cV.strokeRect(d, c, f, e);
        0 !== g && (cV.fillStyle = cY, cV.font = c7 + Math.floor(g * e) + c8, cV.fillText(k, Math.floor(d + f / 2), Math.floor(c + .52 * e)))
    }
    var b = [0, 0, 0, 0];
    this.eD = [{
        bR: 0,
        n7: 512
    }];
    this.c3 = function() {
        k6.lQ = !1;
        aX.setState(2);
        this.m9();
        cI.cJ = !0
    };
    this.tv = function() {};
    this.m9 = function() {
        b[2] = Math.floor((a4 ? .49 : .4) * c4);
        b[1] = Math.floor((a6 - b[2] / 6 - this.eD.length * (cO + b[2] / 10)) / 2);
        b[0] = Math.floor((a5 - b[2]) / 2);
        k6.lQ && k6.m9()
    };
    this.xZ = function(d) {
        var c;
        if (6 < d) this.eD = [{
            bR: 0,
            n7: 512
        }];
        else {
            this.eD = [];
            for (c = 0; c < d + 2; c++) this.eD.push({
                bR: 0,
                n7: 0
            });
            this.xa()
        }
    };
    this.vx = function() {
        cI.cJ = !0;
        k6.lQ ? k6.lQ = !1 : (this.tv(), js.c3())
    };
    this.ja = function() {
        var d;
        if (e5.e6) return e5.e7.xb;
        var c = 0;
        for (d = this.eD.length - 1; 0 <= d; d--) c += this.eD[d].n7;
        return c
    };
    this.m0 = function(d, c) {
        return k6.lQ &&
            k6.m0(d, c) ? !0 : -1 === this.pd(d, c) ? !1 : !0
    };
    this.xc = function() {
        eR.jq = 0;
        eR.rw(0, 3) && j5.xd(0);
        aX.vs();
        if (e5.e6) e5.xe();
        else {
            var d = this.eD.length - 2;
            d = 0 > d ? 7 : d;
            jU(Math.floor(16384 * Math.random()), 0, [{
                name: js.xf(),
                xg: cQ.mQ[2].iw.vK(),
                xh: 0
            }], d, !1)
        }
    };
    this.click = function(d, c) {
        return !1
    };
    this.cL = function(d, c) {
        if (cR.lQ || cQ.mQ[1].iw.lQ || cQ.mQ[2].iw.lQ) return !1;
        if (k6.lQ && !e5.e6) return k6.cL(d, c);
        var f = this.pd(d, c);
        if (-1 === f) return !1;
        if (0 === f) return this.vx(), !0;
        if (1 === f) return e5.e6 ? (e5.pi(), cI.cJ = !0) : k6.show(), !0;
        if (2 ===
            f) return this.tv(), this.xc(), !0;
        if (e5.e6) return !1;
        if (27 === f) return 8 > this.eD.length && (this.eD.push({
            bR: 0,
            n7: bM
        }), this.xa(), this.m9(), cI.cJ = !0), !0;
        var e = Math.floor((f - 3) / 3);
        if (0 === f % 3) return 1 < this.eD.length && (this.eD.splice(e, 1), this.m9(), cI.cJ = !0), !0;
        var h = (b[2] - b[2] / 10 - 2 * cO) / 2;
        if (1 === f % 3) {
            if (0 === e && 1 === this.eD[e].n7) return !0;
            d < b[0] + b[2] - 1.5 * h - cO ? this.eD[e].bR-- : this.eD[e].bR++;
            0 > this.eD[e].bR ? this.eD[e].bR = 5 : 5 < this.eD[e].bR && (this.eD[e].bR = 0);
            return cI.cJ = !0
        }
        cI.cJ = !0;
        var g = (d - (b[0] + b[2] - h)) / h - .5;
        g = Math.floor((0 > g ? -(g * g) : g * g) * bM);
        g = 0 === g ? 1 : g;
        h = bM;
        for (f = this.eD.length - 1; 0 <= f; f--) e !== f && (h -= this.eD[f].n7);
        if (0 > g) {
            if (1 === this.eD[e].n7) return this.eD[e].n7 = h, !0
        } else if (this.eD[e].n7 === h) return this.eD[e].n7 = 1, !0;
        this.eD[e].n7 += g;
        1 > this.eD[e].n7 ? this.eD[e].n7 = 1 : this.eD[e].n7 > h && (this.eD[e].n7 = h);
        return !0
    };
    this.xa = function() {
        for (var d = Math.floor(bM / this.eD.length), c = bM % this.eD.length, f = this.eD.length - 1; 0 <= f; f--) this.eD[f].n7 = d;
        this.eD[0].n7 += c
    };
    this.pd = function(d, c) {
        var f, e = (b[2] - 2 * cO) / 3,
            h = b[2] /
            6;
        if (d < b[0] || c < b[1] || d >= b[0] + b[2]) return -1;
        if (c < b[1] + h) return d < b[0] + e ? 0 : d < b[0] + e + cO ? -1 : d < b[0] + 2 * e + cO ? 1 : d < b[0] + 2 * e + 2 * cO ? -1 : 2;
        var g = b[2] / 10;
        e = (b[2] - g - 2 * cO) / 2;
        for (f = 0; f < this.eD.length; f++) {
            var k = b[1] + h + cO + f * (g + cO);
            if (c < k) return -1;
            if (!(c > k + g)) return d < b[0] + g ? 3 + 3 * f : d < b[0] + g + cO ? -1 : d < b[0] + b[2] - e - cO ? 4 + 3 * f : d < b[0] + b[2] - e ? -1 : 5 + 3 * f
        }
        return 8 > this.eD.length ? (k = b[1] + h + cO + this.eD.length * (g + cO), c < k || c > k + g || d > b[0] + g ? -1 : 27) : -1
    };
    this.cU = function() {
        var d;
        cV.lineWidth = 2;
        cV.textAlign = cX;
        cV.textBaseline = cW;
        var c = (b[2] -
                2 * cO) / 3,
            f = b[2] / 6;
        a(b[0], b[1], c, f, "rgba(128,0,0,0.75)", .4, "Back", -1, -1);
        a(b[0] + c + cO, b[1], c, f, "rgba(" + (e5.e6 ? 128 : 0) + ",128,128,0.75)", .4, e5.e6 ? "Reset" : "Maps", -1, -1);
        a(b[0] + b[2] - c, b[1], c, f, "rgba(0,128,0,0.75)", .4, "Start", -1, -1);
        if (!e5.e6) {
            var e = b[2] / 10;
            c = (b[2] - e - 2 * cO) / 2;
            for (d = 0; d < this.eD.length; d++) {
                var h = b[1] + f + cO + d * (e + cO);
                a(b[0], h, e, e, "rgba(0,128,0,0.75)", 0, null, -1);
                a(b[0] + e + cO, h, c, e, iC, .4, this.xj(d), this.eD[d].bR, -1);
                a(b[0] + b[2] - c, h, c, e, iC, .4, this.xk(d), -1, this.eD[d].n7)
            }
            if (8 > this.eD.length) {
                h = b[1] +
                    f + cO + this.eD.length * (e + cO);
                a(b[0], h, e, e, "rgba(128,128,20,0.75)", 0, null, -1, -1);
                d = b[0];
                cV.fillStyle = cY;
                c = mq(2, Math.floor(.5 * e));
                c -= c % 2;
                f = mq(2, Math.floor(.1 * e));
                f -= f % 2;
                e = Math.floor((e - c) / 2);
                var g = Math.floor(e + (c - f) / 2);
                cV.fillRect(d + e, h + g, c, f);
                cV.fillRect(d + g, h + e, f, c)
            }
            k6.lQ && k6.cU()
        }
    };
    this.xj = function(d) {
        return 0 === d && 1 === this.eD[d].n7 ? "You" : dU.e0[this.eD[d].bR]
    };
    this.xk = function(d) {
        return 1 === this.eD[d].n7 ? "1 Player" : this.eD[d].n7 + " Players"
    }
}

function pH() {
    this.cF = this.bH = 0;
    this.mQ = null;
    this.c3 = function() {
        this.mQ = [];
        this.mQ.push({
            fX: 0,
            fY: 0,
            mF: a4,
            iw: null
        });
        this.mQ.push({
            fX: 0,
            fY: 0,
            mF: !1,
            iw: new w4
        });
        this.mQ.push({
            fX: 0,
            fY: 0,
            mF: !1,
            iw: new vC
        });
        this.mQ[2].iw.vH();
        this.bH = this.mQ.length;
        this.cF = 0
    };
    this.s4 = function() {
        this.cF = Math.floor((a4 ? .063 : .04) * c4);
        this.cF += 4 - this.cF % 4;
        this.mQ[0].fX = cO;
        this.mQ[0].fY = cP - this.cF - cO;
        for (var a = 1; a < this.bH; a++) this.mQ[a].fX = this.mQ[a - 1].fX + Math.floor(a4 ? 1.5 * cO : 3.7 * cO) + this.cF, this.mQ[a].fY = this.mQ[0].fY
    };
    this.pd =
        function(a, b) {
            if (!cA.cB()) return -1;
            for (var d = this.bH - 1; 0 <= d; d--)
                if (a >= this.mQ[d].fX && b >= this.mQ[d].fY && a < this.mQ[d].fX + this.cF && b < this.mQ[d].fY + this.cF) return d;
            return -1
        };
    this.xn = function() {
        for (var a = 2; 1 <= a; a--)
            if (this.mQ[a].iw.lQ) return !0;
        return !1
    };
    this.uv = function() {
        return this.mQ[1].iw.lQ ? (this.mQ[1].iw.cL(-5E3, -5E3, 0), !0) : this.mQ[2].iw.lQ ? (this.mQ[2].iw.cL(-5E3, -5E3), !0) : !1
    };
    this.cL = function(a, b, d) {
        if (d) {
            if (this.mQ[1].iw.lQ) return this.mQ[1].iw.cL(a, b, 0), !0;
            if (this.mQ[2].iw.lQ) return this.mQ[2].iw.cL(a,
                b), !0
        }
        a = this.pd(a, b);
        if (d) {
            if (0 === a) return this.mQ[a].mF = !this.mQ[a].mF, a4 = this.mQ[a].mF, k4.xo(), aF(this.mQ[0].mF, !1), !0;
            if (1 <= a && 3 > a) return this.mQ[a].iw.c3(), js.tv(), cI.cJ = !0
        }
        return !1
    };
    this.m0 = function(a, b) {
        return this.mQ[1].iw.lQ ? (this.mQ[1].iw.m0(a, b), !0) : this.mQ[2].iw.lQ ? (this.mQ[2].iw.m0(a), !0) : !1
    };
    this.vM = function() {
        for (var a = 2; 1 <= a; a--)
            if (this.mQ[a].iw.lQ) return this.mQ[a].iw.vM(), !0;
        return !1
    };
    this.cU = function() {
        if (cA.cB()) {
            cV.imageSmoothingEnabled = !0;
            for (var a = this.bH - 1; 0 <= a; a--) cV.fillStyle =
                this.mQ[a].mF ? mn : iC, cV.fillRect(this.mQ[a].fX, this.mQ[a].fY, this.cF, this.cF), 0 === a ? this.xp(a, cA.cD(15)) : 1 === a ? this.xq() : 2 === a && this.xr(), cV.setTransform(1, 0, 0, 1, 0, 0), cV.lineWidth = pA, cV.strokeStyle = cY, cV.strokeRect(this.mQ[a].fX, this.mQ[a].fY, this.cF, this.cF);
            cV.imageSmoothingEnabled = !1
        }
    };
    this.xp = function(a, b) {
        var d = .08 * this.cF,
            c = (this.cF - 2 * d) / b.width;
        cV.setTransform(c, 0, 0, c, this.mQ[a].fX + d, this.mQ[a].fY + (this.cF - c * b.height) / 2);
        cV.drawImage(b, 0, 0)
    };
    this.xq = function() {
        var a = .06 * this.cF,
            b = (this.cF - 2 *
                a) / aJ.cF;
        cV.setTransform(b, 0, 0, b, this.mQ[1].fX + a, this.mQ[1].fY + a);
        cV.drawImage(aJ.lJ[4], 0, 0)
    };
    this.xr = function() {
        cV.setTransform(1, 0, 0, 1, this.mQ[2].fX, this.mQ[2].fY);
        for (var a = this.cF / 4, b = 3; 0 <= b; b--)
            for (var d = 3; 0 <= d; d--) cV.fillStyle = "rgb(" + Math.floor(367 * (b + 1) * (d + 1) % 256) + "," + Math.floor(687 * (b + 1) * (d + 1) % 256) + "," + Math.floor(651 * (b + 1) * (d + 1) % 256) + ")", cV.fillRect(b * a, d * a, a, a)
    };
    this.w1 = function() {
        for (var a = 2; 1 <= a; a--)
            if (this.mQ[a].iw.lQ) {
                this.mQ[a].iw.cU();
                break
            }
    }
}

function kV() {
    function a() {
        if (0 !== f.indexOf("vote ")) return !1;
        var e = f.split(" ");
        if (2 !== e.length) return !1;
        js.xs = e[1];
        b();
        eR.rw(0, 7) && j5.y3(0);
        jx.vg(3252);
        return !0
    }

    function b() {
        f = o();
        jy.cD(0).input.value = f;
        jy.wH(0, !0)
    }

    function d() {
        if (0 !== f.indexOf("account ")) return !1;
        var e = f.split(" ");
        if (2 !== e.length) return b(), jx.vg(3266), !0;
        var h = Math.floor(Math.pow(2, 48));
        e = parseInt(a0.a1(e[1]));
        if (0 >= e || e >= h) return b(), jx.vg(3266), !0;
        if (a2(e)) return b(), jx.vg(3231), !0;
        b();
        5 <= r ? jx.vg(3232) : (jx.vg(3265), vq.lQ = !0, vq.c6 = -1);
        return !0
    }

    function c() {
        if (void 0 !== f && a0.ib(f)) return jy.wH(0, !0), !0;
        jy.wH(0, !1);
        return !1
    }
    var f;
    this.xs = "";
    this.xt = -7E3;
    this.c3 = function() {
        aX.setState(0);
        jv.s4();
        jy.cS(0, !0);
        jy.s4(0);
        jt.c3();
        cQ.s4();
        void 0 === f && (f = o(), jy.cD(0).input.value = f, c())
    };
    this.tv = function() {
        jy.cS(0, !1)
    };
    this.xv = function(e) {
        return 0 === e ? jv.cF : 1 === e ? Math.floor(.3 * jv.dA) : 2 === e ? jy.cD(0).input.style.font : f
    };
    this.wG = function() {
        f = jy.cD(0).input.value.trim();
        c();
        if ("password" === f || "account" === f) {
            var e = a0.aD(x().toString());
            f = "account " + e;
            jy.cD(0).input.value = f
        }
    };
    this.cL = function(e, h) {
        cI.xw();
        1 === jv.pd(e, h, 1, 1) ? d() || a() || (aN(10), c() ? (this.tv(), aA(f), eC.c3()) : jx.vg(4214)) : 0 === jv.pd(e, h, 0, 1) && this.vv()
    };
    this.vv = function() {
        d() || a() || (aN(10), void 0 !== f && a0.ib(f) && 40 === f.charCodeAt(0) && 41 === f.charCodeAt(2) ? jw.vY((Math.abs(f.charCodeAt(1)) + 7) % eR.va) : jw.vY(k7.y1 - 1), c() ? cA.cB() ? (this.tv(), aA(f), e5.pi(), jw.c3()) : jx.vg(3228) : jx.vg(4214))
    };
    this.y5 = function() {
        return !cQ.xn() && !cR.lQ && !ni.lQ
    };
    this.cU = function() {
        if (this.y5()) {
            cV.imageSmoothingEnabled = !0;
            var e = cA.lN("territorial.io"),
                h = 1.1 * jv.cF / e.width;
            cV.setTransform(h, 0, 0, h, Math.floor((gS - h * e.width) / 2), jv.fY - h * e.height - .72 * jv.dA);
            cV.drawImage(e, 0, 0);
            cV.setTransform(1, 0, 0, 1, 0, 0);
            jv.v6()
        }
    };
    this.xf = function() {
        return f
    }
}

function kW() {
    function a(e, h, g, k) {
        c[e] = h;
        d[e] = new Image;
        d[e].onload = function() {
            if (0 < g) {
                var l, m, u = document.createElement("canvas"),
                    y = d[e].width,
                    z = d[e].height;
                u.width = y;
                u.height = z;
                var G = u.getContext("2d", {
                    alpha: !0
                });
                G.drawImage(d[e], 0, 0);
                var B = G.getImageData(0, 0, y, z),
                    n = B.data;
                if (3 > g) {
                    var D = 2 === g ? 160 : 600;
                    for (l = y - 1; 0 <= l; l--)
                        for (m = z - 1; 0 <= m; m--) {
                            var C = 4 * (l + m * y);
                            n[C] + n[C + 1] + n[C + 2] < D && (n[C + 3] = Math.floor(255 * (n[C] + n[C + 1] + n[C + 2]) / D))
                        }
                } else if (3 === g)
                    for (l = y - 1; 0 <= l; l--)
                        for (m = z - 1; 0 <= m; m--) C = 4 * (l + m * y), 0 === n[C] &&
                            200 < n[C + 1] && 0 === n[C + 2] && (n[C + 3] = 0);
                else if (4 === g)
                    for (l = y - 1; 0 <= l; l--)
                        for (m = z - 1; 0 <= m; m--) C = 4 * (l + m * y), n[C + 1] > n[C] + 20 && n[C + 1] > n[C + 2] + 20 && 40 > n[C] + n[2] && (n[C + 3] = 255 - n[C + 1], n[C] = n[C + 1] = n[C + 2] = n[C]);
                else if (5 === g)
                    for (l = y - 1; 0 <= l; l--)
                        for (m = z - 1; 0 <= m; m--) C = 4 * (l + m * y), 200 < n[C + 1] && n[C + 1] - 20 > n[C] && n[C + 1] - 20 > n[C + 2] ? 40 > n[C] + n[C + 2] ? n[C + 3] = 0 : (n[C + 3] = n[C], n[C] = 255, n[C + 1] = 255, n[C + 2] = 255) : 50 > n[C] && 50 > n[C + 1] && 50 > n[C + 2] && (50 > n[C] + n[C + 1] + n[C + 2] ? (n[C + 1] = n[C + 1], n[C + 3] = 180) : (n[C + 1] = n[C + 1], n[C + 3] = 180 + Math.floor(75 * (n[C] + n[C + 1] +
                            n[C + 2] - 50) / 100)));
                else if (6 === g)
                    for (l = y - 1; 0 <= l; l--)
                        for (m = z - 1; 0 <= m; m--) C = 4 * (l + m * y), n[C + 3] = Math.floor(255 * (n[C] + n[C + 1] + n[C + 2]) / 765), n[C] = n[C + 1] = n[C + 2] = 255;
                else if (7 === g)
                    for (l = y - 1; 0 <= l; l--)
                        for (m = z - 1; 0 <= m; m--) C = 4 * (l + m * y), n[C + 1] > n[C + 2] + 10 && (n[C + 3] = n[C], n[C + 1] = n[C + 2]);
                G.putImageData(B, 0, 0);
                d[e] = u
            }
            b--;
            cA.cB() && (uc.c9(), i8.lF(), aJ.c3(), vy.uy([d[8], d[16], d[7], d[9], d[10]], [!p, 0 === r, !0, !0, !0]), cI.cJ = !0, d[7] = f, d[8] = f, d[9] = f, d[10] = f)
        };
        d[e].src = k
    }
    var b, d, c, f;
    this.c3 = function() {
        if (void 0 === d) {
            b = 20;
            d = Array(b);
            c =
                Array(b);
            f = document.createElement("canvas");
            f.width = 1;
            f.height = 1;
            for (var e = b - 1; 0 <= e; e--) d[e] = f;
            a(0, "exit", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC");
            a(1, "victory", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg==");
            a(2, "defeat", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC");
            a(3, "orders", 6, "data:image/png;base64,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");
            a(4, "crown", 4, "data:image/png;base64,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");
            a(5, "arena", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC");
            a(6, "territorial.io", 6, "data:image/png;base64,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");
            a(7, "youtube", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC");
            a(8, "googleplay", 3, "data:image/png;base64,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");
            a(9, "discord", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII=");
            a(10, "insta", 3, "data:image/png;base64,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");
            a(11, "emojis", 4, "data:image/png;base64,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");
            a(12, "flags", 3, "data:image/png;base64,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");
            a(13, "bestTeam", 5, "data:image/png;base64,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");
            a(14, "bestPlayer", 5, "data:image/png;base64,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");
            a(15, "zoom", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC");
            a(16, "apple", 3, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII=");
            a(17, "open link", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAPBAMAAADpFNeEAAAAGFBMVEUA/wBi/2N//4CX/5i//8DU/9Pq/+r///90hWfkAAAA6klEQVQoz5XSPQ+CMBAG4FME1i6GlUHjSuLA6uaqEyt+JF3VSt+/b99WhRQG7XCB0qdcrycia42rkomxgJ2edsP8AfYEKH8Gc+CYaLQ/g5Szm8mcpkGGZwgurwsDKqfrrgf6kaNKcMihCpwk5+YZOr+2DMCOQBuAtkoKgpTgvsQOd7cCOMSg82DJz/0fHKjewMQAW4KGxRyeAYqBTyNgCFy6gyq517MEYKAjUNsA2nAPc95DyMaHW4Pu0wNoCVIQPJjN96aHoIjBzINqD9X30vu8cKW6JTGQ2pc18x2x0pbdOgTSxCD1YAHzAmJBjxvc7JBGAAAAAElFTkSuQmCC");
            a(18, "loading", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII=");
            a(19, "target", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII=")
        }
    };
    this.cD = function(e) {
        return d[e]
    };
    this.lN = function(e) {
        for (var h = c.length - 1; 0 <= h; h--)
            if (c[h] === e) return d[h];
        return f
    };
    this.cB = function() {
        return 0 === b
    }
}

function kX() {
    function a(n, D) {
        uB[n] = 0;
        uB[n + 1] = 0;
        uB[n + 2] = D;
        uB[n + 3] = 0;
        b(n)
    }

    function b(n) {
        if (!hM.hN) {
            var D = bJ.gT(n);
            n = bJ.cT(n);
            hM.hN = D >= hC.uA[0] && D <= hC.uA[2] && n >= hC.uA[1] && n <= hC.uA[3]
        }
    }
    var d = [224, 224, 224],
        c = [
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
        f = [
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
        e, h, g, k, l, m, u, y, z, G, B;
    this.c3 = function(n) {
        e = new Uint8Array(bM);
        h = new Uint8Array(bM);
        g = new Uint8Array(bM);
        k = new Uint8Array(bM);
        l = new Uint8Array(bM);
        m = new Uint8Array(bM);
        u = new Uint8Array(bM);
        y = new Uint8Array(bM);
        z = new Uint8Array(bM);
        G = new Uint8Array(bM);
        this.r9 = new Uint8Array(bM);
        B = new Int32Array(4);
        B[0] = -4 * an;
        B[1] = 4;
        B[2] = -B[0];
        B[3] = -B[1];
        if (dO)
            for (var D, C = bM - 1; 0 <= C; C--) D = dk.j1[dk.dl[C]], n = b6((f[D][3] + 1) * cs.random(), cs.value(100)), e[C] = c[D][0] + n * f[D][0], h[C] = c[D][1] + n * f[D][1], g[C] = c[D][2] + n * f[D][2];
        else if (e5.e6 && e5.e7.yd)
            for (n = e5.e7.yd, D = ha - 1; 0 <= D; D--) e[D] = 4 * n[D][0], h[D] = 4 * n[D][1], g[D] = 4 * n[D][2];
        else {
            for (D =
                bM - 1; D >= d4; D--) e[D] = 4 * b6(64 * cs.random(), cs.value(100)), h[D] = 4 * b6(64 * cs.random(), cs.value(100)), g[D] = 4 * b6(64 * cs.random(), cs.value(100));
            for (D = d4 - 1; 0 <= D; D--) e[D] = 4 * n[D].xg[0], h[D] = 4 * n[D].xg[1], g[D] = 4 * n[D].xg[2]
        }
        for (n = bM - 1; 0 <= n; n--) D = b6(e[n] + h[n] + g[n], 3), e[n] += ym(D - e[n], 2), h[n] += ym(D - h[n], 2), g[n] += ym(D - g[n], 2), e[n] -= e[n] % 4, h[n] -= h[n] % 4, g[n] -= g[n] % 4;
        for (n = bM - 1; 0 <= n; n--) e[n] += b6(n, 128), h[n] += b6(n % 128, 32), g[n] += b6(n % 32, 8), k[n] = n % 8;
        this.yj();
        for (n = bM - 1; 0 <= n; n--) l[n] = 32 > e[n] ? e[n] + 32 : e[n] - 32, m[n] = 32 > h[n] ?
            h[n] + 32 : h[n] - 32, u[n] = 32 > g[n] ? g[n] + 32 : g[n] - 32;
        for (n = bM - 1; 0 <= n; n--) y[n] = 235 < e[n] ? e[n] - 20 : e[n] + 20, z[n] = 235 < h[n] ? h[n] - 20 : h[n] + 20, G[n] = 235 < g[n] ? g[n] - 20 : g[n] + 20
    };
    this.yj = function() {
        for (var n = bM - 1; 0 <= n; n--) this.r9[n] = 280 > e[n] + h[n] + g[n] ? 0 : 1
    };
    this.gT = function(n) {
        return b6(n, 4) % an
    };
    this.cT = function(n) {
        return b6(n, 4 * an)
    };
    this.fF = function(n, D) {
        return Math.floor(4 * (D * an + n))
    };
    this.hv = function(n) {
        return this.yn(n + B[0]) || this.yn(n + B[1]) || this.yn(n + B[2]) || this.yn(n + B[3])
    };
    this.ht = function(n, D) {
        return this.yo(n + B[0],
            D) || this.yo(n + B[1], D) || this.yo(n + B[2], D) || this.yo(n + B[3], D)
    };
    this.bS = function(n) {
        return 208 <= uB[n + 3]
    };
    this.i0 = function(n, D) {
        return this.bS(D) && this.yp(n, D)
    };
    this.yp = function(n, D) {
        return n === this.bT(D)
    };
    this.yq = function(n) {
        return 208 <= uB[n + 3] && 224 > uB[n + 3]
    };
    this.ci = function(n) {
        return 224 <= uB[n + 3] && 248 > uB[n + 3]
    };
    this.hu = function(n) {
        for (var D = 3; 0 <= D; D--)
            if (this.yr(n + B[D])) return !0;
        return !1
    };
    this.ys = function(n) {
        return 192 <= uB[n + 3] && 208 > uB[n + 3]
    };
    this.yt = function(n, D) {
        return this.ys(n) && D === this.bT(n)
    };
    this.bK =
        function(n) {
            return this.bS(n) || this.bU(n)
        };
    this.yr = function(n) {
        return 0 === uB[n + 3] && 2 === uB[n + 2] || this.ys(n)
    };
    this.bU = function(n) {
        return 0 === uB[n + 3] && 1 === uB[n + 2]
    };
    this.yn = function(n) {
        return 0 === uB[n + 3] && 3 === uB[n + 2]
    };
    this.yo = function(n, D) {
        return this.bU(n) || this.bS(n) && D !== this.bT(n)
    };
    this.bT = function(n) {
        return uB[n] % 4 * 128 + uB[n + 1] % 4 * 32 + uB[n + 2] % 4 * 8 + uB[n + 3] % 8
    };
    this.i1 = function(n) {
        a(n, 1)
    };
    this.yv = function(n) {
        a(n, 2)
    };
    this.hs = function(n, D) {
        uB[n] = e[D];
        uB[n + 1] = h[D];
        uB[n + 2] = g[D];
        uB[n + 3] = 208 + k[D];
        b(n)
    };
    this.bL =
        function(n, D) {
            uB[n] = l[D];
            uB[n + 1] = m[D];
            uB[n + 2] = u[D];
            uB[n + 3] = 224 + k[D];
            b(n)
        };
    this.ck = function(n, D) {
        uB[n] = y[D];
        uB[n + 1] = z[D];
        uB[n + 2] = G[D];
        uB[n + 3] = 248 + k[D];
        b(n)
    };
    this.yy = function(n, D) {
        uB[n] = d[0] + e[D] % 4;
        uB[n + 1] = d[1] + h[D] % 4;
        uB[n + 2] = d[2] + g[D] % 4;
        uB[n + 3] = 192 + k[D];
        b(n)
    }
}

function kY() {
    function a() {
        for (var m = 0, u = 1; 5 > u; u++) m += h[u] % 1024;
        return m
    }

    function b() {
        for (var m = 1; m < g - l; m++) h[m] = parseInt(h[m])
    }

    function d() {
        h[0] = "Player " + Math.floor(1E3 * Math.random());
        h[1] = a5 < a6 ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0;
        h[2] = 1;
        h[3] = 1;
        h[4] = a5 < a6 ? 0 : 1;
        h[5] = 0;
        h[6] = "000";
        h[7] = "0";
        h[8] = "0";
        h[9] = "0";
        t.aC()
    }

    function c() {
        for (var m = g - l - 1; 0 <= m; m--) h[m] = a0.a1(h[m]);
        h[0] = a0.il(h[0])
    }

    function f(m, u, y) {
        var z = new Date;
        z.setTime(z.getTime() + Math.floor(31536E6 * y));
        m = m + "=" + u + ";expires=" + z.toUTCString() +
            ";SameSite=Strict;Secure;path=/";
        document.cookie = m
    }
    var e, h, g, k, l;
    this.c3 = function() {
        if (!(5 <= r || p)) {
            l = 4;
            k = 0;
            e = [];
            g = 10;
            for (var m = 0; m < g; m++) e.push("u" + m);
            h = Array(g);
            for (var u, y = document.cookie.split(";"), z = y.length - 1; 0 <= z; z--) {
                y[z] = y[z].trim();
                for (m = 2; 0 <= m; m--) y[z] = y[z].replace(" ", "");
                3 < y[z].length && (m = e.indexOf(y[z].substring(0, 2)), u = y[z].indexOf("="), 0 <= m && 2 === u ? h[m] = y[z].substring(u + 1, y[z].length) : 0 < u && f(y[z].substring(0, u), "0", 0))
            }
            h[9] || (h[9] = "0");
            a: {
                for (m = g - 1; 0 <= m; m--)
                    if (void 0 === h[m]) {
                        m = !1;
                        break a
                    } m = !0
            }
            m ? (k = 2, c(), b(), a() !== h[5] && d()) : d()
        }
    };
    this.aC = function() {
        if (2 === k) {
            h[1] = 0 === h[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : h[1];
            h[5] = a();
            for (var m = 1; m < g - l; m++) h[m] = h[m].toString();
            h[0] = a0.ik(h[0]);
            for (m = g - l - 1; 0 <= m; m--) h[m] = a0.aD(h[m]);
            for (m = g - 1; 0 <= m; m--) f(e[m], h[m], 1);
            c();
            b()
        }
    };
    this.aE = function() {
        return k
    };
    this.nh = function(m) {
        k = m;
        this.aC()
    };
    this.aB = function(m, u) {
        5 <= r || p || (h[m] = u)
    };
    this.u = function(m) {
        return 5 <= r || p ? 0 : h[m]
    }
}

function kx() {
    function a(c) {
        for (b -= 2; c < b; c += 2) d[c] = d[c + 2], d[c + 1] = d[c + 3]
    }
    var b = 0,
        d = new Uint16Array(32);
    this.c3 = function() {
        b = 0
    };
    this.dT = function() {
        if (0 !== b)
            if (0 === fT[bA] || as.zG(bA) === as.at(bA)) b = 0;
            else {
                var c;
                for (c = b - 2; 0 <= c; c -= 2) {
                    var f = d[c];
                    if (f < bM && 0 === fT[f]) a(c);
                    else {
                        var e = d[c + 1];
                        if (f >= bM && lt(bA) || f < bM && ly(bA, f)) eB ? fZ(bA, f, e) : j5.li(e, f === bM ? bA : f), a(c)
                    }
                }
            }
    };
    this.ll = function(c, f) {
        var e;
        a: {
            for (e = 0; e < b; e += 2)
                if (d[e] === c) {
                    d[e + 1] += f;
                    d[e + 1] = qz(d[e + 1], 1E3);
                    e = !0;
                    break a
                } e = !1
        }
        e || 32 === b || (d[b] = c, d[b + 1] = f, b += 2)
    }
}

function g0(a) {
    zJ(a);
    zK(a);
    zL(a);
    b8.b9(a);
    eY.gH(a);
    as.zM(a)
}

function zJ(a) {
    i8.lS(a) && jA++;
    var b = as.zO(a);
    0 === b.length ? a === bA && zP() : (zQ(a, b), zR(a, b))
}

function zP() {
    bE.bF[17] += bB[bA] + as.zS(bA);
    ek.show(!1, !1);
    eP.tW()
}

function zQ(a, b) {
    var d;
    for (d = b.length - 1; 0 <= d; d--) as.zT(b[d], a)
}

function zU(a) {
    var b, d = 0;
    for (b = a.length - 1; 1 <= b; b--) bi[a[b]] > bi[a[d]] && (d = b);
    return d
}

function zR(a, b) {
    var d, c = b[zU(b)];
    9 === e9 && 1 === dk.dl[a] && cs.dd(8) && eG.zW(c);
    if (a === bA) eN.fz(c, 1), zP();
    else {
        for (d = b.length - 1; 0 <= d; d--)
            if (b[d] === bA) {
                eN.fz(a, 0);
                return
            } a < d4 && eN.mx(0, a, c)
    }
}

function zL(a) {
    fT[a] = bB[a] = 0;
    bI[a] = null;
    ba[a] = null;
    bb[a] = null;
    be[a] = null;
    eW.fv(a)
}

function zK(a) {
    var b, d;
    for (b = dD[a]; b >= dE[a]; b--)
        for (d = dG[a]; d >= dH[a]; d--) {
            var c = 4 * (d * an + b);
            bJ.i0(a, c) && (bJ.i1(c), bi[a]--)
        }
}

function l3() {
    function a(f) {
        (f = f.target.files) && 0 < f.length && k9.zb(f[0])
    }

    function b(f) {
        var e = new Image;
        e.onload = d;
        e.src = f.target.result
    }

    function d(f) {
        var e = f.target;
        f = e.width;
        var h = e.height;
        4096 < f || 4096 < h || 10 > f || 10 > h ? alert("Image w & h must be between 10 and 4096.") : (x9 = zj, xA = 0, an = f, ao = h, i6.width = an, i6.height = ao, px.drawImage(e, 0, 0), xL = px.getImageData(0, 0, an, ao).data)
    }
    var c;
    this.c3 = function() {
        c = document.createElement("input");
        c.type = "file";
        c.onchange = a
    };
    this.zY = function() {
        c.click()
    };
    this.zZ = function(f) {
        a(f)
    };
    this.zb = function(f) {
        var e = f.name.split(".");
        var h = e[e.length - 1].toLowerCase();
        if ("json" === h) e5.zf(f);
        else if ("gif" === h || "jpg" === h || "jpeg" === h || "png" === h) e5.zg = e[0], h = new FileReader, h.onload = b, h.readAsDataURL(f)
    };
    this.pn = function(f) {
        if (0 === aX.pm() || 2 === aX.pm()) f.stopPropagation(), f.preventDefault(), f.dataTransfer.dropEffect = "copy"
    };
    this.po = function(f) {
        if (0 === aX.pm() || 2 === aX.pm()) f.stopPropagation(), f.preventDefault(), (f = f.dataTransfer.files) && 0 < f.length && k9.zb(f[0])
    }
}

function l1() {
    this.zm = null;
    this.c3 = function() {
        this.zm = 10 !== e9 ? null : new Uint32Array(bM)
    };
    this.dT = function() {
        10 === e9 && this.zn()
    };
    this.zn = function() {
        var a, b = this.zm,
            d = dn,
            c = bB;
        for (a = dm - 1; 0 <= a; a--) {
            var f = d[a];
            if (!(f >= d4)) {
                var e = Math.max(b6(c[f], 4), 2048);
                var h = Math.max(bC.ti(f), 100);
                b[f] += b6(h * e, 1E4);
                b[f] > e && (b[f] = e)
            }
        }
    };
    this.u4 = function(a, b) {
        if (b > this.zm[a]) return b = this.zm[a], this.zm[a] = 0, b;
        this.zm[a] -= b;
        return b
    }
}

function l4() {
    function a(h) {
        e5.e6 = !0;
        e5.zt(JSON.parse(h.target.result));
        e5.lV()
    }

    function b(h) {
        var g;
        if (22 >= h.length) return !1;
        e5.e7.x9 = 0;
        e5.e7.xE = 0;
        xM(0, 0);
        "data:image/png;base64," !== h.substring(0, 22) && (h = "data:image/png;base64," + h);
        var k = new Image;
        k.onload = function() {
            an = k.width;
            ao = k.height;
            4096 < an || 4096 < ao || 10 > an || 10 > ao ? (xM(0, 0), alert("Image w & h must be between 10 and 4096.")) : (x9 = zj, xA = 0, i6.width = an, i6.height = ao, px.drawImage(k, 0, 0), g = px.getImageData(0, 0, an, ao), xL = g.data)
        };
        k.src = h;
        e5.e7.a04 = "";
        return !0
    }

    function d(h, g, k, l) {
        return "string" !== typeof h || h.length < g ? l : h.length > k ? h.substring(0, k) : h
    }

    function c(h, g, k) {
        h = "number" === typeof h ? Math.floor(h) : g;
        return Math.min(Math.max(h, g), k)
    }

    function f(h, g) {
        return "boolean" === typeof h ? h : g
    }

    function e(h, g, k, l) {
        if (!Array.isArray(h) || 1 > h.length) return null;
        var m = 8 === l ? new Uint8Array(g) : new Uint16Array(g);
        var u = h.length;
        for (l = 0; l < g; l++) m[l] = c(h[l % u], 0, k);
        return m
    }
    this.e6 = !1;
    this.e7 = null;
    this.zg = "";
    this.pi = function() {
        this.e6 = !1;
        this.e7 = null
    };
    this.xe = function() {
        this.e7.yd &&
            this.e7.zo && (this.e7.yd[0] = cQ.mQ[2].iw.vK());
        jU(this.e7.zp, 0, this.zq(), this.e7.jX, !1)
    };
    this.zq = function() {
        return [{
            name: this.e7.zr ? js.xf() : this.e7.zs[0],
            xg: [0, 0, 0],
            xh: 0
        }]
    };
    this.zf = function(h) {
        var g = new FileReader;
        g.onload = a;
        g.readAsText(h)
    };
    this.zt = function(h) {
        this.e7 = {};
        this.e7.xb = c(h.numberPlayers, 1, 512);
        this.e7.zw = c(h.modeID, 0, 1);
        this.e7.x9 = c(h.mapID, 0, zj - 1);
        this.e7.xE = c(h.seedMap, 0, 16383);
        this.e7.zp = c(h.seedSpawn, 0, 16383);
        this.e7.jZ = f(h.selectableSpawn, !1);
        this.e7.zr = f(h.selectableName, !1);
        this.e7.zo =
            f(h.selectableColor, !1);
        this.zg = this.e7.zg = d(h.mapName, 1, 25, "Custom Map");
        var g = this.e7;
        var k = h.description;
        var l;
        if (!Array.isArray(k) || 1 > k.length) k = [];
        else {
            var m = k.length;
            for (l = 0; l < m; l++) k[l] = d(k[l], 0, 100, "")
        }
        g.me = k;
        this.e7.hV = e(h.playerX, this.e7.xb, 4096, 16);
        this.e7.hg = e(h.playerY, this.e7.xb, 4096, 16);
        this.e7.a01 = e(h.playerTeam, this.e7.xb, 8, 8);
        this.e7.e8 = e(h.playerStrength, this.e7.xb, 5, 8);
        g = this.e7;
        k = h.playerColor;
        l = this.e7.xb;
        if (!Array.isArray(k) || 1 > k.length) k = null;
        else {
            var u = Array(l);
            var y = k.length;
            for (m = 0; m < l; m++) u[m] = e(k[m % y], 3, 63, 8);
            k = u
        }
        g.yd = k;
        g = this.e7;
        k = h.playerName;
        l = this.e7.xb;
        if (!Array.isArray(k) || 1 > k.length) k = null;
        else {
            u = Array(l);
            y = k.length;
            for (m = 0; m < l; m++) u[m] = d(k[m % y], 3, 26, "Bot");
            k = u
        }
        g.zs = k;
        this.e7.a04 = "string" === typeof h.mapBase64 ? h.mapBase64 : "";
        this.e7.zr = this.e7.zr || !this.e7.zs;
        this.e7.jX = 0 === this.e7.zw ? 7 : 2 === this.e7.zw ? 9 : 6;
        this.e7.hV = this.e7.hg ? this.e7.hV : null
    };
    this.lV = function() {
        b(this.e7.a04) || xM(this.e7.x9, this.e7.xE)
    };
    this.a0B = function() {
        var h, g = 0,
            k = this.e7.xb;
        for (h = 0; h < k; h++) this.e7.a01[h] >
            g && (g = this.e7.a01[h]);
        return Math.max(0, g - 1)
    }
}

function kZ() {
    function a(g) {
        return g < d4 ? b * g : b * d4 + d * (g - d4)
    }
    var b, d, c, f, e, h;
    this.c3 = function() {
        b = 16 > d4 ? 12 : 8;
        d = 4;
        var g = a(bM);
        c = new Uint8Array(bM);
        f = new Uint16Array(g);
        e = new Uint32Array(g);
        h = new Uint16Array(g)
    };
    this.zM = function(g) {
        c[g] = 0
    };
    this.zT = function(g, k) {
        var l;
        a: {
            var m = a(g);
            for (l = c[g] - 1; 0 <= l; l--)
                if (0 === h[m + l] && f[m + l] === k) break a;l = c[g]
        }
        l !== c[g] && (m = e[a(g) + l], this.bG(g, l), this.ce(g, m, bM))
    };
    this.d2 = function(g, k) {
        var l, m = a(g);
        for (l = c[g] - 1; 0 <= l; l--)
            if (0 === h[m + l] && f[m + l] === k) return !0;
        return !1
    };
    this.dR =
        function(g) {
            return g < d4 ? c[g] < b : c[g] < d
        };
    this.at = function(g) {
        return c[g]
    };
    this.az = function(g, k) {
        return f[a(g) + k]
    };
    this.au = function(g, k) {
        return h[a(g) + k]
    };
    this.fj = function(g, k) {
        var l, m = a(g);
        for (l = c[g] - 1; 0 <= l; l--)
            if (h[m + l] === k) return l;
        return -1
    };
    this.b0 = function(g, k) {
        return e[a(g) + k]
    };
    this.bw = function(g, k) {
        var l, m = a(g);
        for (l = c[g] - 1; 0 <= l; l--)
            if (0 === h[m + l] && f[m + l] === k) return e[m + l];
        return 0
    };
    this.zS = function(g) {
        var k = a(g),
            l = 0;
        for (g = c[g] - 1; 0 <= g; g--) l += e[k + g];
        return l
    };
    this.a0G = function(g) {
        var k = a(g),
            l = 0;
        for (g = c[g] - 1; 0 <= g; g--) 0 === h[k + g] && (l += e[k + g]);
        return l
    };
    this.zG = function(g) {
        var k = a(g),
            l = 0;
        for (g = c[g] - 1; 0 <= g; g--) 0 < h[k + g] && l++;
        return l
    };
    this.bv = function(g, k, l) {
        var m = a(g);
        for (g = c[g] - 1; 0 <= g; g--) 0 === h[m + g] && f[m + g] === k && (e[m + g] = l)
    };
    this.bh = function(g, k, l) {
        e[a(g) + k] = l
    };
    this.ce = function(g, k, l) {
        var m, u = a(g);
        l === bA && bE.bF[g < d4 ? 6 : 5]++;
        for (m = c[g] - 1; 0 <= m; m--)
            if (0 === h[u + m] && f[u + m] === l) {
                e[u + m] += k;
                e[u + m] = e[u + m] > jO ? jO : e[u + m];
                return
            } f[u + c[g]] = l;
        e[u + c[g]] = k;
        h[u + c[g]] = 0;
        c[g]++;
        g < d4 && (l === bA ? eN.fz(g, 5) : g === bA && eO.mz(l))
    };
    this.u5 = function(g, k, l) {
        var m = a(g);
        fT[g] = 2;
        f[m + c[g]] = 0;
        e[m + c[g]] = k;
        h[m + c[g]] = l;
        c[g]++
    };
    this.bG = function(g, k) {
        var l;
        if (0 !== c[g]) {
            var m = a(g);
            c[g]--;
            for (l = k; l < c[g]; l++) f[m + l] = f[m + l + 1], e[m + l] = e[m + l + 1], h[m + l] = h[m + l + 1]
        }
    };
    this.zO = function(g) {
        var k, l, m = [];
        for (k = dm - 1; 0 <= k; k--) {
            var u = a(dn[k]);
            for (l = c[dn[k]] - 1; 0 <= l; l--)
                if (0 === h[u + l] && f[u + l] === g) {
                    m.push(dn[k]);
                    break
                }
        }
        return m
    }
}

function ka() {
    var a, b, d, c, f, e;
    this.c3 = function() {
        c = d = b = a = 10
    };
    this.a0N = function() {
        e = 512;
        f = new Uint16Array(e);
        for (var h = 0; h < e; h++) f[h] = 100 + bz(b6(25600 * h, e - 4), 9)
    };
    this.sT = function() {
        return c
    };
    this.dT = function() {
        if (0 >= --d) {
            d = a;
            var h, g = bB[bA];
            eB && !dO && 0 !== fT[0] && 0 === eC.eD[0].bR && (bB[0] += b6(bi[0], 6));
            for (h = dm - 1; 0 <= h; h--) {
                var k = b6(bC.ti(dn[h]) * bB[dn[h]], 1E4);
                bB[dn[h]] += 1 > k ? 1 : k;
                bC.bD(dn[h])
            }
            bE.bF[9] += bB[bA] - g;
            if (0 >= --c) {
                c = b;
                h = bB[bA];
                for (k = dm - 1; 0 <= k; k--) bB[dn[k]] += bi[dn[k]], bC.bD(dn[k]);
                bE.bF[8] += bB[bA] - h
            }
        }
    };
    this.ti = function(h) {
        var g = f[b6((e - 1) * bi[h], jN)];
        if (1920 > cI.di()) {
            var k = b6(100 * (13440 - 6 * cI.di()), 1920);
            g = k > g ? k : g
        }
        k = this.dX(h);
        bB[h] > k && (g -= b6(2 * g * (bB[h] - k), k));
        return 0 > g ? 0 : 700 < g ? 700 : g
    };
    this.dX = function(h) {
        h = 100 * bi[h];
        return h > jP ? jP : h
    };
    this.bD = function(h) {
        var g = bi[h] * jL;
        bB[h] = bB[h] > jO ? jO : bB[h] > g ? g : bB[h]
    }
}

function kb() {
    function a() {
        Q.width = gS;
        Q.height = cP;
        O = Q.getContext("2d", {
            alpha: !0
        });
        O.textAlign = cX;
        O.textBaseline = cW;
        O.imageSmoothingEnabled = !0
    }

    function b() {
        P = !1;
        N = 1;
        K = I = 0;
        O.clearRect(0, 0, gS, cP);
        for (var H = gQ / gL, M = gR / gL, R = (gS + gQ) / gL, S = (cP + gR) / gL, X, Y, W, V, da, la = 0 !== fT[bA] && i8.lS(bA), sa = dm - 1; 0 <= sa; sa--)
            if (W = dn[sa], V = Math.floor(J * gL * B[W] * z[W]), !(V < F || V >= D) && u[W] + z[W] > H && u[W] < R && y[W] + G[W] > M && y[W] < S) {
                X = Math.floor(gS * (u[W] + z[W] / 2 - H) / (R - H));
                Y = Math.floor(cP * (y[W] + G[W] / 2 - M) / (S - M) - .1 * V);
                O.font = p0[fh[W]] + V + c8;
                da =
                    O;
                var fa = W;
                fa = V >= C && V < D ? dk.a1E[bJ.r9[fa]] + f(V).toFixed(3) + ")" : dk.a1F[bJ.r9[fa]];
                da.fillStyle = fa;
                O.fillText(8 === e9 ? ed.gX(bB[W]) : gW[W], X, Y);
                P = !0;
                if (0 < U[W]) {
                    da = X;
                    fa = Y;
                    var ma = V,
                        ia = W;
                    if (0 === sY[ia])
                        if (aJ.oP(T[ia])) {
                            var ta = da,
                                ja = ma,
                                ra = ia;
                            ia = T[ia];
                            var na = .9 * ja / aJ.cF,
                                va = Math.floor(fa - .5 * na * aJ.cF - .05 * ja);
                            O.globalAlpha = f(ja);
                            for (var ua = Math.floor(ta - .5 * ja / n[ra] - .4 * ja - na * aJ.cF), qa = 0; 2 > qa; qa++) O.setTransform(na, 0, 0, na, ua, va), O.drawImage(aJ.lJ[ia], 0, 0), ua = Math.floor(ta + .5 * ja / n[ra] + .4 * ja);
                            O.globalAlpha = 1;
                            O.setTransform(1,
                                0, 0, 1, 0, 0);
                            d(da, fa, ma, 0, 0)
                        } else aJ.oO(T[ia]) ? (c(da, fa, ma, T[ia], 0), d(da, fa, ma, 0, 1)) : (c(da, fa, ma, T[ia], 1), d(da, fa, ma, 1, 0));
                    else c(da, fa, ma, T[ia], 0)
                } else 0 === sY[W] && d(X, Y, V, 0, 0);
                if (la && (0 < U[W + bM] || 0 < U[W + 2 * bM] || 0 < U[W + 3 * bM] || 0 < U[W + 4 * bM])) {
                    fa = X;
                    ma = Y;
                    ta = V;
                    ja = W;
                    ra = -1;
                    for (da = 4; 1 <= da; da--) 0 < U[ja + da * bM] && ra++;
                    for (da = 1; 5 > da; da++) 0 < U[ja + da * bM] && (ia = ta, na = da, va = ja, ua = U[ja + da * bM], qa = .8 * ia / aJ.cF, O.setTransform(qa, 0, 0, qa, Math.floor(fa - .5 * qa * aJ.cF - .534 * ra * ia), Math.floor(ma + 1.4 * qa * aJ.cF)), O.globalAlpha = f(ia), O.drawImage(1 ===
                        na ? aJ.lJ[T[va + bM]] : 2 === na && 255 > ua ? i8.lH[2] : i8.lG[na + 3], 0, 0), O.globalAlpha = 1, O.setTransform(1, 0, 0, 1, 0, 0), ra -= 2)
                }
                da = Math.floor(E * V);
                da < F || (O.font = c7 + da + c8, O.fillText(8 === e9 ? gW[W] : ed.gX(bB[W]), X, Y + Math.floor(.78 * V)))
            }
    }

    function d(H, M, R, S, X) {
        var Y = .95 * R / L;
        O.setTransform(Y, 0, 0, Y, Math.floor(H - .5 * Y * ca + .8 * S * R), Math.floor(M - 1.76 * Y * L - .82 * X * R));
        O.globalAlpha = f(R);
        O.drawImage(cA.cD(4), 0, 0);
        O.globalAlpha = 1;
        O.setTransform(1, 0, 0, 1, 0, 0)
    }

    function c(H, M, R, S, X) {
        var Y = 1.2 * R / aJ.cF;
        O.setTransform(Y, 0, 0, Y, Math.floor(H - .5 *
            Y * aJ.cF - .8 * X * R), Math.floor(M - 1.5 * Y * aJ.cF));
        O.globalAlpha = f(R);
        O.drawImage(aJ.lJ[S], 0, 0);
        O.globalAlpha = 1;
        O.setTransform(1, 0, 0, 1, 0, 0)
    }

    function f(H) {
        return H >= C && H < D ? 1 - (H - C) / (D - C) : 1
    }

    function e(H) {
        var M, R = u[H];
        for (M = u[H] - dE[H] - 1; 0 <= M; M--)
            if (R--, !g(H, R, y[H], G[H])) {
                R++;
                break
            } var S = u[H];
        for (M = dD[H] - u[H] - z[H]; 0 <= M; M--)
            if (S++, !g(H, S + z[H] - 1, y[H], G[H])) {
                S--;
                break
            } R = Math.floor((R + S) / 2);
        S = y[H];
        for (M = y[H] - dH[H] - 1; 0 <= M; M--)
            if (S--, !k(H, R, S, z[H])) {
                S++;
                break
            } var X = y[H];
        for (M = dG[H] - y[H] - G[H]; 0 <= M; M--)
            if (X++, !k(H, R,
                    X + G[H] - 1, z[H])) {
                X--;
                break
            } M = Math.floor((S + X) / 2);
        h(H, R, M, z[H], G[H]) && (u[H] = R, y[H] = M)
    }

    function h(H, M, R, S, X) {
        var Y;
        for (Y = M + S - 1; Y >= M; Y--)
            if (!g(H, Y, R, X)) return !1;
        var W = Math.floor(.25 * X);
        W = 1 > W ? 1 : W;
        for (Y = R + X - 1 - W; Y >= R + W; Y--)
            if (!k(H, M, Y, S)) return !1;
        return !0
    }

    function g(H, M, R, S) {
        return bJ.i0(H, 4 * (R * an + M)) && bJ.i0(H, 4 * ((R + S - 1) * an + M))
    }

    function k(H, M, R, S) {
        return bJ.i0(H, 4 * (R * an + M)) && bJ.i0(H, 4 * (R * an + M + S - 1))
    }
    var l, m, u, y, z, G, B, n, D, C, E, A, F, J, K, I, N, P, Q, O, Z, T, U, ca, L;
    this.c3 = function() {
        P = !1;
        J = .88;
        E = .5;
        A = 1.8;
        D = Math.floor(.5 *
            pW);
        C = Math.floor(.2 * D);
        F = 8 === e9 ? k7.a0u ? 6 : 4 : k7.a0u ? 10 : 7;
        m = l = 0;
        u = new Uint16Array(bM);
        y = new Uint16Array(bM);
        z = new Uint16Array(bM);
        G = new Uint16Array(bM);
        B = new Float32Array(bM);
        n = new Float32Array(bM);
        T = new Uint8Array(2 * bM);
        U = new Uint8Array(5 * bM);
        Q = Q ? Q : document.createElement("canvas");
        a();
        I = K = 0;
        N = 1;
        Z = 0;
        if (8 === e9) {
            var H;
            O.font = c7 + 100 + c8;
            var M = 100 / Math.floor(O.measureText("20 000 000").width);
            for (H = bM - 1; 0 <= H; H--) n[H] = B[H] = M
        } else
            for (O.font = c7 + Math.floor(100 * E) + c8, M = 80 / Math.floor(O.measureText(ed.gX(jO)).width),
                O.font = c7 + 100 + c8, H = bM - 1; 0 <= H; H--) n[H] = 100 / Math.floor(O.measureText(gW[H]).width), B[H] = M < n[H] ? M : n[H];
        for (H = bM - 1; 0 <= H; H--) 12 > bi[H] ? (u[H] = dE[H] + 1, y[H] = dH[H] + 1, z[H] = 1, G[H] = 1) : (u[H] = dE[H], y[H] = dH[H] + 1, z[H] = 4, G[H] = 2);
        if (fq)
            for (H = 0; H < d4; H++) z[H] = 0;
        ca = cA.cD(4).width;
        L = cA.cD(4).height
    };
    this.m9 = function() {
        a();
        b()
    };
    this.jI = function() {
        for (var H = Z = 0; H < d4; H++) 3 !== dD[H] - dE[H] || 3 !== dG[H] - dH[H] ? (u[H] = dE[H] + (dD[H] !== dE[H] ? 1 : 0), y[H] = dH[H], z[H] = 1, G[H] = 1) : (u[H] = dE[H], y[H] = dH[H] + 1, z[H] = 4, G[H] = 2)
    };
    this.nG = function(H, M,
        R) {
        0 === fT[H] || 4 !== M && 2 === fh[H] || (H += M * bM, 0 === M ? T[H] === R && 0 < U[H] ? U[H] = 0 : (T[H] = R, U[H] = aJ.oP(R) ? 255 : 64) : 1 === M ? (U[H] = 64, T[H] = R) : U[H] = R)
    };
    this.cU = function() {
        P && (1 !== N ? (cV.imageSmoothingEnabled = !0, cV.setTransform(N, 0, 0, N, 0, 0), cV.drawImage(Q, -K / N, -I / N), cV.setTransform(1, 0, 0, 1, 0, 0)) : (cV.imageSmoothingEnabled = !1, cV.drawImage(Q, -K, -I)))
    };
    this.re = function(H, M) {
        K += H;
        I += M
    };
    this.m0 = function(H, M) {
        eO.re(H, M)
    };
    this.zoom = function(H, M, R) {
        N *= H;
        K = (K + M) * H - M;
        I = (I + R) * H - R
    };
    this.ep = function() {
        return 0 >= --Z ? (Z = 4 >= t0 ? 10 : 12 >
            t0 ? 5 : 2, b(), !0) : !1
    };
    this.gU = function(H) {
        return B[H]
    };
    this.dT = function() {
        if (4 <= ++m) {
            var H, M;
            m = 0;
            for (M = 4; 1 <= M; M--)
                for (H = dm - 1; 0 <= H; H--) {
                    var R = dn[H] + M * bM;
                    0 < U[R] && 255 > U[R] && U[R]--
                }
            if (2 !== fn)
                for (H = dm - 1; 0 <= H; H--) R = dn[H], 0 < U[R] && 255 > U[R] && U[R]--
        }
        H = Math.floor(.1 * dm);
        H = 8 > H ? 8 : H;
        H = H > dm ? dm : H;
        for (R = l + H - 1; R >= l; R--)
            if (M = R % dm, M = dn[M], 0 < z[M] && h(M, u[M], y[M], z[M], G[M])) {
                for (var S, X, Y, W, V = M, da = !1, la = 0; 8 > la; la++) {
                    X = z[V] + 2;
                    S = G[V] + 2;
                    if (X > dD[V] - dE[V] + 1 || S > dG[V] - dH[V] + 1) break;
                    W = u[V] - 1;
                    Y = y[V] - 1;
                    if (h(V, W, Y, X, S)) u[V] = W, y[V] = Y,
                        z[V] = X, G[V] = S, da = !0;
                    else break
                }
                if (S = !da) {
                    V = M;
                    da = !1;
                    la = z[V];
                    for (var sa = 1 + Math.floor(.02 * la), fa = 1; 5 > fa; fa++) {
                        X = la + fa * sa;
                        if (X > dD[V] - dE[V] + 1) break;
                        S = 1 + Math.floor(A * B[V] * X);
                        if (S > dG[V] - dH[V] + 1) break;
                        W = dE[V] + Math.floor(Math.random() * (dD[V] - dE[V] + 2 - X));
                        Y = dH[V] + Math.floor(Math.random() * (dG[V] - dH[V] + 2 - S));
                        h(V, W, Y, X, S) && (u[V] = W, y[V] = Y, z[V] = X, G[V] = S, da = !0)
                    }
                    S = da
                }
                S && e(M)
            } else {
                a: {
                    X = M;Y = u[X] + 1;W = y[X] + 1;
                    for (V = z[X] - 2;;) {
                        if (1 > V) {
                            z[X] = 0;
                            break
                        }
                        S = 1 + Math.floor(A * B[X] * V);
                        if (h(X, Y, W, V, S)) {
                            u[X] = Y;
                            y[X] = W;
                            z[X] = V;
                            G[X] = S;
                            S = !0;
                            break a
                        }
                        Y++;
                        W++;
                        V -= 2
                    }
                    S = !1
                }
                if (S) e(M);
                else
                    for (S = M, Y = dD[S] - dE[S] + 1, X = Math.floor(.02 * Y), X = 1 > X ? 1 : X, M = -6 * X; Y >= M; Y -= X)
                        if (V = 0 < Y ? Y : 1, W = 1 + Math.floor(A * B[S] * V), la = dE[S] + Math.floor(Math.random() * (dD[S] - dE[S] + 2 - V)), da = dH[S] + Math.floor(Math.random() * (dG[S] - dH[S] + 2 - W)), h(S, la, da, V, W)) {
                            u[S] = la;
                            y[S] = da;
                            z[S] = V;
                            G[S] = W;
                            break
                        }
            } l += H;
        l %= dm
    };
    this.mz = function(H) {
        var M = H + 2 * bM,
            R = U[M];
        return 0 < R ? (eN.nL(50, H), U[M] = 0, 255 === R) : !1
    };
    this.lw = function(H) {
        return 255 === U[H + 2 * bM]
    }
}

function kc() {
    var a, b;
    this.c3 = function() {
        var d, c;
        a = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of C\u00f3rdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chav\u00edn Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;G\u00f6kt\u00fcrk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later L\u00ea z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguy\u1ec5n z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;T\u00e2y S\u01a1n z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem\u2013Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Sal\u00e9;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocoll\u00e1n;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;W\u00fcrttemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States".split(";");
        b =
            "Antin Mark Artem Viktor Pasha Maxim Rodion Yuri Lev Luka Ivan Igor Nikita Leonid Daniil Alexei Boris Sasha Yulia Luda Yana Kira Alisa Polina Mischa Mila Inessa Alyona Alina Anya Anna Maria Sofia Walda Uta Tyra Tanka Svea Saskia Runa Rigmor Ostara Nanna Lykke Kunna Irma Iduna Helga Gudrun Gisela Gerda Gelsa Freya Frauke Ferun Elke Eila Dagmar Ariald Dagwin Eckwin Edmund Eike Erkmar Erwin Falko Frowin Gerbod Gunnar Halvor Irvin Knut Leif Lando Odin Oswin Ragin Rainer Rango Sarolf Thor Ulf Wolf Sarah Emma Laura Chloe Marie L\u00e9a Emily Keyla Manon Julie Julia Alice Kim Lisa Kora Clara Sara Lucie Anais Grace Eva Zoe Lee Katie Jade Ines Lily Amy Megan Lucy Elisa Kate Mary Elise Nina C\u00e9lia Ma\u00ebva Kayla Elysa Lena Amber Kelly Jenny Lola Mia Abby Ella Diana Fanny Ellie Ana Cindy Elena Rose Erin Molly Park Jane Lina Bella Lou Alex Irene Elsa Leah Holly Maya Linda Carla Anne Paige Annie Jenna Karen Lydia Haley Hanna Wendy Luna Naomi Sonia Fiona Helen Ambre Jess Angel Leila Lara Tina Ann Laur\u00e9 Chen Daisy Paula Iris Ruby Minji Marta Sam Erika Nora Nadia Eve Erica Ava Wang Choi Yujin Jin Yang Hina Beth Lucia Faith Jiwon Ad\u00e8le Alexa Min Flora Nancy Lili Lexi Cloe Hana Lin Kenza Lise Li Mina Angie Lotte Sandy Vicky May Jamie Joy Jeong Tara Sally Merve Diane Maddy Lilly Alix Zhang Gabby Abbie Liz Ellen Rita Olga Dana Elif Maud Sunny Joyce Liu Jieun Rosie Becky Jung Ilona Kylie Ruth Kat Han Nikki Kang Tania Dasha Cathy Aline Jo Ally Lilou Sujin Tanya Amina Yu Aya Katy Becca Rosa Paola Anita Sumin Betty Subin Tessa Heidi Tori Lila Imane Yoon Allie Farah Ciara Gina Yejin Song Susan Niamh April Izzy Aude Liza Salma Ivy Elina Liya Sue Gwen Maia Mimi Mandy Nana Sanne Hope Ariel Eliza Daria Yuna Evie Aimee Avery Agn\u00e8s Stacy Jisu Madi Riley Carly Lia Irina".split(" ");
        var f = "K ; Y;E ; Z; z; s;S ".split(";"),
            e = "Kingdom of ; Kingdom;Empire of ; Empire; Dynasty; Sultanate;Sultanate of ".split(";");
        for (d = a.length - 1; 0 <= d; d--)
            for (c = f.length - 1; 0 <= c; c--) a[d] = a[d].replace(f[c], e[c])
    };
    this.jh = function() {
        if (e5.e6 && e5.e7.zs) {
            var d;
            for (d = d4; d < bM; d++) gW[d] = e5.e7.zs[d % ha]
        } else if (9 === e9) {
            var c = cs.random(),
                f = b.length,
                e = d4 + eG.eH;
            for (d = e - 1; d >= d4; d--) gW[d] = "[Bot] " + b[(d + c) % f];
            for (d = e; d < bM; d++) gW[d] = "[Zombie] " + b[(d + c) % f]
        } else if (eB)
            for (c = cs.random(), d = d4; d < bM; d++) gW[d] = a[(d + c) % bM];
        else
            for (c = b.length, f = cs.random(), d = d4; d < bM; d++) gW[d] = "[Bot] " + b[(d + f) % c]
    };
    this.ji = function() {
        var d;
        if (k7.a1Z && !eB) {
            a1a = Array(d4);
            var c = d4;
            var f = b.length;
            var e = cs.a1b();
            for (d = 0; d < c; d++) a1a[d] = gW[d], gW[d] = b[(d + e) % f];
            gW[bA] = a1a[bA]
        }
    }
}

function l2() {
    this.a1f = [];
    this.a1g = [];
    this.c3 = function() {
        this.a1f = [];
        this.a1g = []
    };
    this.dT = function() {
        0 <= this.a1f.length && this.a1h(this.a1f);
        0 <= this.a1g.length && this.a1h(this.a1g)
    };
    this.a1h = function(a) {
        var b, d = -1;
        for (b = a.length - 1; 0 <= b; b--)
            if (a[b].gq--, 0 >= a[b].gq) {
                d = b;
                break
            } for (b = d; 0 <= b; b--) a.shift()
    };
    this.lc = function(a, b, d) {
        return this.a1j(this.a1f, a, b, d)
    };
    this.a1k = function(a, b, d) {
        return this.a1j(this.a1g, a, b, d)
    };
    this.a1j = function(a, b, d, c) {
        var f;
        a: {
            var e;
            for (f = d.length - 1; 0 <= f; f--)
                for (e = a.length - 1; 0 <=
                    e; e--)
                    if (a[e].player === d[f] && b === a[e].id) {
                        f = !0;
                        break a
                    } f = !1
        }
        if (f) return !1;
        if (c)
            for (c = d.length - 1; 0 <= c; c--) a.push({
                player: d[c],
                id: b,
                gq: 384
            });
        return !0
    }
}
var gW, a1a, fT, dE, dH, dD, dG, bi, ho, bB, bI, ba, bb, be, fh;

function jc(a) {
    var b;
    a1a = gW = Array(bM);
    fT = new Uint8Array(bM);
    dE = new Uint16Array(bM);
    dH = new Uint16Array(bM);
    dD = new Uint16Array(bM);
    dG = new Uint16Array(bM);
    bi = new Uint32Array(bM);
    ho = new Uint32Array(bM);
    bB = new Uint32Array(bM);
    bI = Array(bM);
    ba = Array(bM);
    bb = Array(bM);
    be = Array(bM);
    fh = new Uint8Array(bM);
    for (b = a.length - 1; 0 <= b; b--) gW[b] = a[b].name, fh[b] = a[b].xh
}

function l0() {
    this.nn = 0;
    this.iM = null;
    this.c3 = function() {
        this.nn = 0;
        this.iM = []
    };
    this.g2 = function(a) {
        this.iM.push(a);
        jA++;
        fh[a] = 2;
        bJ.r9[a] = (bJ.r9[a] + 2) % 4;
        a === bA && (ek.show(!1, !1), eP.tW());
        eO.mz(a)
    };
    this.fv = function(a) {
        var b;
        if (2 !== fh[a]) {
            var d = this.iM;
            for (b = d.length - 1; 0 <= b; b--)
                if (d[b] === a) {
                    d.splice(b, 1);
                    break
                }
        }
    };
    this.dT = function() {
        eB || (30 === this.nn && this.a1n(), this.nn = (this.nn + 1) % 60)
    };
    this.a1n = function() {
        var a, b = this.iM;
        for (a = b.length - 1; 0 <= a; a--) {
            var d = b[a];
            if (as.dR(d)) {
                var c = b6(20 * bB[d], 100);
                60 > c || (0 ===
                    ba[d].length ? !dS.dT(d, 2) && dO && dW(d, c, 0, 0) : dO ? dh(d, c) : dq(d, c))
            }
        }
    }
}

function kw() {
    function a(c) {
        return d[c].a1u && b[c].a1z()
    }
    this.wT = 4;
    this.wU = this.wT - 1;
    this.va = this.wT + this.wU;
    var b;
    this.a1q = null;
    var d;
    this.w9 = this.jq = 0;
    this.c3 = function() {
        var c;
        this.a1q = Array(this.wT);
        this.a1q[0] = "territorial.io";
        var f = cs.a1b(0);
        cs.jb(0);
        for (c = 1; c < this.wT; c++) this.a1q[c] = a0.ip() + ".territorial.io";
        cs.jb(f);
        b = Array(this.va);
        d = Array(this.va);
        for (c = this.va - 1; 0 <= c; c--) d[c] = {
            a1u: !1,
            gq: 0,
            a1v: !1
        }
    };
    this.nE = function() {
        return this.w9 < this.wT ? this.w9 : this.w9 - this.wU
    };
    this.dT = function() {
        for (var c =
                this.va - 1; 0 <= c; c--) this.vW(c) && cI.gq > d[c].gq + 15E3 && j5.a1w(c, d[c].a1v)
    };
    this.rw = function(c, f) {
        if (!d[c].a1u) return this.a1y(c, f), !1;
        if (b[c].a1z()) return b[c].a20(f), b[c].vW();
        b[c].lT();
        this.a1y(c, f);
        return !1
    };
    this.a1y = function(c, f) {
        d[c].a1u = !0;
        d[c].gq = cI.gq;
        d[c].a1v = !1;
        b[c] = new a22;
        b[c].c3(c, f)
    };
    this.a20 = function(c, f) {
        a(c) && b[c].a20(f)
    };
    this.a23 = function(c, f) {
        0 === f ? ju.ry() : 3 > f ? j5.uT(c, f - 1) : 3 === f ? j5.xd(c) : 4 === f ? jw.ry(c) : 5 === f ? c === this.jq && j5.a24() : 6 === f ? j5.a25(c) : 7 === f && j5.y3(c)
    };
    this.vW = function(c) {
        return d[c].a1u &&
            b[c].vW()
    };
    this.send = function(c, f) {
        d[c].gq = cI.gq;
        d[c].a1v = !1;
        b[c].send(f)
    };
    this.pY = function(c) {
        d[c].a1v = !0
    };
    this.close = function(c, f) {
        a(c) && b[c].close(f)
    };
    this.a27 = function(c, f) {
        jx.vg(f);
        a(c) && b[c].close(f)
    };
    this.vi = function(c) {
        for (var f = this.va - 1; 0 <= f; f--) this.close(f, c)
    };
    this.a28 = function(c, f) {
        for (var e = this.va - 1; 0 <= e; e--) e !== c && this.close(e, f)
    };
    this.a29 = function(c, f) {
        b[c].lT();
        jx.c3(c, f.code)
    }
}
var dn, dm;

function jj() {
    var a;
    dm = 0;
    for (a = bM - 1; 0 <= a; a--) 0 !== fT[a] && dm++;
    dn = new Uint16Array(dm);
    var b = 0;
    for (a = 0; a < bM; a++) 0 !== fT[a] && (dn[b++] = a)
}

function eZ() {
    a2A();
    g1()
}

function g1() {
    for (var a = dm - 1; 0 <= a; a--) 0 === fT[dn[a]] && a2B(a)
}

function a2B(a) {
    for (dm--; a < dm; a++) dn[a] = dn[a + 1]
}

function a2A() {
    for (var a, b = dm - 1; 0 <= b; b--) bi[dn[b]] <= b6(ho[dn[b]], 4) ? 1E3 >= bi[dn[b]] && (2 !== fT[dn[b]] || 0 === bi[dn[b]]) && g0(dn[b]) : bi[dn[b]] >= ho[dn[b]] ? ho[dn[b]] = bi[dn[b]] : (a = b6(ho[dn[b]] - bi[dn[b]], 1E3), ho[dn[b]] -= 1 > a ? 1 : a)
}

function j7() {
    var a, b = 0;
    for (a = dm - 1; 0 <= a; a--) b += bB[dn[a]];
    return b % 4096
}
var pJ, cV, a2C, a2D, a5, a6, pW, c4, gS, cP, pa, a2E, p, q, s, r, a4, a2F = !1,
    a2G, a2H, w, hC, t0, hM, aJ, bE, i9, vq, cI, dk, eh, cR, fw, vy, ni, uc, a2I, a2J, a2K = 0,
    a2L = "",
    a2M = !1;

function a2N() {
    a2J = 2;
    a2D = 2675;
    a2C = "1.83.4   29 March 2023";
    kA();
    dM();
    a2M = !0;
    r = (s = "undefined" !== typeof Android ? Android : null) ? s.getVersion() : 0;
    12 <= r && s.prepareAd("6685097465");
    p = !1;
    window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (p = !0, window.webkit.messageHandlers.iosCommandA.postMessage("prepare ad 5907904081"), q = "undefined" !== typeof mwIOSdataX ? mwIOSdataX : {
        username: "iOS User " + Math.floor(1E3 * Math.random()),
        id: Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)),
        zoom: !0,
        sound: !0,
        emojis: "0",
        colors: "0",
        password: "0",
        freeSpawn: !1,
        unlimitedTime: !1,
        alliances: !1
    });
    a2I = (new Date).getTime() % 1024;
    a2G = a2O();
    k4.c3();
    t.c3();
    v();
    a3();
    aR();
    document.addEventListener ? document.addEventListener("contextmenu", function(a) {
        a.preventDefault()
    }, !1) : document.attachEvent("oncontextmenu", function() {
        window.event.returnValue = !1
    });
    a2P();
    document.addEventListener("keyup", a2Q);
    document.addEventListener("keydown", a2R);
    document.addEventListener("visibilitychange", a2S);
    window.addEventListener("error",
        a2T, !0);
    t0 = 10;
    xN = new a2U;
    hC = new a2V;
    hM = new u6;
    aJ = new nu;
    bE = new a2W;
    i9 = new a2X;
    vq = new nc;
    cI = new a2Y;
    cI.jr();
    cI.c3();
    dk = new a2Z;
    eh = new a2a;
    uc = new c0;
    uc.c3();
    cR = new uC;
    cR.c3();
    fw = new ir;
    vy = new uw;
    ni = new ul;
    pF();
    cs.c3();
    bC.a0N();
    k0.c3();
    je.c3();
    aX.c3();
    k9.c3();
    k7.c3();
    eR.c3();
    ju.c3();
    jg.c3();
    pI();
    cA.c3();
    cI.cJ = !0;
    setTimeout(function() {
        xM(2, 14071)
    }, 0)
}

function aW() {
    a2M || a2N()
}

function a2O() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}

function a2T(a) {
    a2F || (a2F = !0, a.message ? (a2K = a.lineno, a2L = a.message, eR.rw(0, 6) && j5.a25(0), a = "[A_ERROR " + a2K + "][" + a2L + "]", a2b(a)) : (a = "[B_ERROR " + a.type + "][" + (a.srcElement || a.target) + "]", console.log(a)))
}

function a2b(a) {
    s ? s.showToast(a) : alert(a)
}

function a2R(a) {
    "ArrowLeft" === a.key ? h1.wH(3) : "ArrowUp" === a.key ? h1.wH(0) : "ArrowRight" === a.key ? h1.wH(1) : "ArrowDown" === a.key ? h1.wH(2) : "a" === a.key ? ef.rH(.96875) : "d" === a.key ? ef.rH(32 / 31) : "s" === a.key ? ef.rH(.875) : "w" === a.key ? ef.rH(8 / 7) : "1" === a.key ? ef.rH(5 / 6) : "2" === a.key ? ef.rH(1.2) : "c" === a.key && 0 !== fn && i9.a2c()
}

function a2S() {
    "hidden" === document.visibilityState ? cI.a2d() : cI.xw()
}

function a2Q(a) {
    400 > cI.gq || (8 !== aX.pm() && aX.uv(a) ? cI.cJ = !0 : "Escape" === a.key ? aX.aY() : "ArrowLeft" === a.key ? h1.a2e(3) : "ArrowUp" === a.key ? h1.a2e(0) : "ArrowRight" === a.key ? h1.a2e(1) : "ArrowDown" === a.key ? h1.a2e(2) : "h" === a.key && 1 <= fn && (gw = !gw, cI.cJ = !0))
}

function a2P() {
    a2E = window.location.hostname;
    a2H = 0 <= a2E.toLowerCase().indexOf("territorial.io")
}

function kd() {
    var a;
    this.c3 = function() {
        a = [];
        9 === e9 && this.a2g()
    };
    this.a2g = function() {
        var b = [8, 51, 68, 88, 138, 178, 313];
        var d = [35, 330];
        this.eH = 0;
        this.eI = [0, 0, 0, 0, 0, 0];
        d4 <= b[0] ? (this.eH = d[0] - d4, this.eI[1] = d[1] - b6(d[1] * d4, b[0]), this.eI[0] = 512 - this.eI[1] - d[0]) : d4 <= b[1] ? (this.eH = d[0] - b[0] - b6((d[0] - b[0]) * (d4 - b[0]), b[1] - b[0]), this.eI[0] = 512 - this.eH - d4) : d4 <= b[2] ? (this.eI[0] = 512 - b[1] - b6((512 - b[1]) * (d4 - b[1]), b[2] - b[1]), this.eI[1] = 512 - d4 - this.eI[0]) : d4 <= b[3] ? (this.eI[1] = 512 - b[2] - b6((512 - b[2]) * (d4 - b[2]), b[3] - b[2]),
            this.eI[2] = 512 - d4 - this.eI[1]) : d4 <= b[4] ? (this.eI[2] = 512 - b[3] - b6((512 - b[3]) * (d4 - b[3]), b[4] - b[3]), this.eI[3] = 512 - d4 - this.eI[2]) : d4 <= b[5] ? (this.eI[3] = 512 - b[4] - b6((512 - b[4]) * (d4 - b[4]), b[5] - b[4]), this.eI[4] = 512 - d4 - this.eI[3]) : d4 <= b[6] ? (this.eI[4] = 512 - b[5] - b6((512 - b[5]) * (d4 - b[5]), b[6] - b[5]), this.eI[5] = 512 - d4 - this.eI[4]) : this.eI[5] = 512 - d4;
        d = this.eH;
        for (b = 0; 6 > b; b++) d += this.eI[b];
        if (d > e4) {
            for (b = this.eH = 0; 5 > b; b++) this.eI[b] = 0;
            this.eI[5] = e4
        }
    };
    this.zW = function(b) {
        a.push({
            player: b,
            n7: 14 + cs.ct(20)
        })
    };
    this.dT = function() {
        if (9 ===
            e9) {
            var b;
            for (b = a.length - 1; 0 <= b; b--) 0 >= --a[b].n7 && (eO.nG(a[b].player, 0, 46), a.splice(b))
        }
    }
}
var an, ao, i6, px, xK, xL, x9, xA, vt, zj = 15,
    xN;

function xM(a, b) {
    a %= zj;
    if (a !== x9 || a2n(x9) && b !== xA) {
        var d = performance.now();
        vt = !1;
        xN.xO();
        cs.jb(a);
        x9 = a;
        xA = b;
        a2n(a) && (k0.cD(a).a1t = b);
        if (a2o(x9)) a2p(d);
        else {
            var c = k0.cD(x9);
            an = c.cF;
            ao = c.dA;
            cs.jb(c.a1t);
            k1.jh([an, ao, c.gc, c.gZ]);
            a2q();
            je.a2r();
            k1.a2s();
            a2t(d)
        }
    }
}

function a2t(a) {
    var b = performance.now();
    t0 = Math.floor(29 - (b - a) / (33 * k0.cD(x9).per));
    t0 = 0 > t0 ? 0 : 20 < t0 ? 20 : t0
}

function a2v() {
    return 10
}

function a2o(a) {
    return a >= a2v()
}

function a2n(a) {
    return !(1 === a || a >= a2v())
}

function a2w(a) {
    return 3 === a || 7 === a || 9 === a || a === zj
}

function a2x(a) {
    return 2 === a || 7 === a || 9 === a
}

function a2U() {
    function a() {
        xN.dT()
    }

    function b(c, f) {
        0 < f && (xL[c] += f, xL[c + 1] += f, xL[c + 2] += f)
    }

    function d(c) {
        return xL[c + 2] > xL[c] && xL[c + 2] > xL[c + 1]
    }
    this.rr = -1;
    this.a2y = this.aO = 0;
    this.a2z = 8;
    this.a30 = 32;
    this.a31 = 8;
    this.a32 = 32;
    this.a33 = [0, 0];
    this.r9 = [0, 0, 0, 0];
    this.a34 = null;
    this.a35 = !0;
    this.a36 = !1;
    this.xO = function() {
        -1 !== this.rr && clearTimeout(this.rr);
        this.rr = -1;
        this.a34 = null;
        k1.a2s()
    };
    this.c3 = function() {
        7 === aX.pm() || this.a36 || (this.a35 = !0, this.aO = 0, this.a2y = 1, this.a33 = [k0.cD(x9).a37[0], k0.cD(x9).a38[0]], this.r9 = [k0.cD(x9).a39[3], k0.cD(x9).a39[4], k0.cD(x9).a39[5], k0.cD(x9).a39[6]], this.a2z = k0.cD(x9).a39[7], this.a30 = k0.cD(x9).a39[8], this.a31 = k0.cD(x9).a39[9], this.a32 = k0.cD(x9).a39[10], this.a35 ? this.rr = setTimeout(a, 16) : this.dT())
    };
    this.dT = function() {
        if (8 === aX.pm() && ej.gr()) this.rr = setTimeout(a, 16);
        else {
            if (0 === this.aO) {
                var c = cs.a1b();
                cs.jb(k0.cD(x9).a39[2]);
                k1.jh([an, ao, k0.cD(x9).a39[0], k0.cD(x9).a39[1]]);
                cs.jb(c);
                this.a34 = k1.a3B();
                this.aO++;
                if (this.a35) {
                    this.rr = setTimeout(a, 16);
                    return
                }
            }
            c = this.a35 ? 10 : 1E6;
            c =
                ao - this.a2y - 1 < c ? ao - this.a2y - 1 : c;
            c = this.a2y + c;
            for (var f, e, h = this.a2y; h < c; h++)
                for (var g = 1; g < an - 1; g++)
                    if (e = g + h * an, f = 4 * e, d(f)) this.a3D(f, e, 1);
                    else {
                        this.a3D(f, e, 0);
                        e = g;
                        var k = h;
                        (1 < e && d(f - 4) || e < an - 2 && d(f + 4) || 1 < k && d(f - 4 * an) || k < ao - 2 && d(f + 4 * an)) && this.a3E(g, h)
                    } this.a2y = c;
            this.a2y >= ao - 1 ? (px.putImageData(xK, 0, 0, 1, 1, an - 2, ao - 2), cI.cJ = !0, this.xO()) : this.a35 && (this.rr = setTimeout(a, 16))
        }
    };
    this.a3D = function(c, f, e) {
        b(c, Math.floor(this.a33[e] + this.r9[e] * this.a34[f] / 1E4) - xL[c])
    };
    this.a3I = function(c, f, e, h, g) {
        b(c, Math.floor(this.a33[h] +
            (1 - f / e) * g) - xL[c])
    };
    this.a3E = function(c, f) {
        var e = c - this.a30;
        var h = f - this.a30;
        var g = c + this.a30,
            k = f + this.a30;
        e = 1 > e ? 1 : e;
        g = g > an - 2 ? an - 2 : g;
        k = k > ao - 2 ? ao - 2 : k;
        for (var l = 1 > h ? 1 : h; l <= k; l++)
            for (var m = e; m <= g; m++)
                if (h = 4 * (m + l * an), d(h)) {
                    var u = this.a2z + (this.a30 - this.a2z) * this.a34[m + an * l] / 1E4;
                    if (!(Math.abs(c - m) > u || Math.abs(f - l) > u)) {
                        var y = Math.sqrt((c - m) * (c - m) + (f - l) * (f - l));
                        y >= u || this.a3I(h, y, u, 1, this.r9[3])
                    }
                } else u = this.a31 + (this.a32 - this.a31) * this.a34[m + an * l] / 1E4, Math.abs(c - m) > u || Math.abs(f - l) > u || (y = Math.sqrt((c - m) *
                    (c - m) + (f - l) * (f - l)), y >= u || this.a3I(h, y, u, 0, this.r9[2]))
    }
}

function a2q() {
    2 === x9 ? a3K([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === x9 ? a3K([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === x9 ? a3K([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === x9 && a3K([512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function a3K(a, b, d, c, f) {
    var e, h, g, k = a.length - 1,
        l = an + ao;
    l *= l;
    var m = d.length;
    for (e = m - 1; 0 <= e; e--) d[e] *= d[e];
    var u = Array(m),
        y = Array(m),
        z = Array(m),
        G = k1.a3B();
    if (void 0 === f)
        for (f = Array(m), e = m - 1; 0 <= e; e--) f[e] = 0;
    for (e = 1; e < m; e++) u[e] = d[e] - d[e - 1], y[e] = c[e] - c[e - 1], z[e] = f[e] - f[e - 1];
    for (h = an - 1; 0 <= h; h--)
        for (g = ao - 1; 0 <= g; g--) {
            var B = l;
            for (e = k; 0 <= e; e--) {
                var n = (h - a[e]) * (h - a[e]) + (g - b[e]) * (g - b[e]);
                B = n < B ? n : B
            }
            n = c[m - 1];
            var D = f[m - 1];
            for (e = 1; e < m; e++)
                if (B < d[e]) {
                    n = c[e - 1] + ym((B - d[e - 1]) * y[e], u[e]);
                    D = f[e - 1] + ym((B - d[e - 1]) * z[e],
                        u[e]);
                    break
                } a3Y(an * g + h, n, D, G)
        }
}

function a3Y(a, b, d, c) {
    500 > b ? c[a] = b6(c[a] * b * 2, 1E3) : 500 < b && (c[a] += b6(2 * (1E4 - c[a]) * (b - 500), 1E3));
    c[a] += b6(d * (10 * b - c[a]), 1E3)
}

function ke() {
    var a;
    this.nX = this.nW = this.nT = this.nS = 0;
    this.c3 = function() {
        a = Array(a2v());
        a[0] = {
            cF: [0, 5E3, 8E3, 1E4],
            fP: [220, 250, 255, 220],
            nI: [190, 220, 0, 0],
            d0: [170, 200, 0, 0]
        };
        a[1] = {
            cF: [0, 4E3, 5E3, 6E3, 1E4],
            fP: [25, 0, 100, 0, 25],
            nI: [25, 0, 0, 0, 25],
            d0: [25, 0, 0, 0, 25]
        };
        a[2] = {
            cF: [0, 500, 2500, 2999, 3E3, 3200, 4200, 5200, 5700, 8800, 1E4],
            fP: [15, 15, 70, 40, 40, 40, 252, 40, 40, 20, 30],
            nI: [80, 80, 190, 90, 40, 40, 248, 180, 180, 90, 140],
            d0: [120, 120, 220, 110, 40, 40, 217, 10, 10, 10, 10]
        };
        a[3] = {
            cF: [0, 400, 1800, 2E3, 3200, 4500, 6E3, 7700, 8500, 9500, 1E4],
            fP: [10,
                10, 20, 10, 30, 10, 16, 40, 55, 230, 230
            ],
            nI: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
            d0: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
        };
        a[4] = {
            cF: [0, 300, 1400, 1700, 3E3, 4E3, 1E4],
            fP: [10, 10, 20, 10, 10, 170, 212],
            nI: [20, 20, 60, 100, 100, 110, 170],
            d0: [70, 70, 160, 30, 30, 60, 120]
        };
        a[5] = {
            cF: [0, 1E3, 3E3, 3500, 4E3, 4500, 7E3, 7500, 8E3, 1E4],
            fP: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
            nI: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
            d0: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
        };
        a[6] = {
            cF: [0, 700, 2650, 3200, 5E3, 8E3, 1E4],
            fP: [10, 10, 60, 255, 255, 200, 200],
            nI: [10, 10, 60, 255, 255, 200, 200],
            d0: [80, 80, 255, 255, 255, 200, 200]
        };
        a[7] = {
            cF: [0, 400, 1999, 2E3, 3200, 4E3, 4700, 5500, 6500, 9500, 1E4],
            fP: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
            nI: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
            d0: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
        };
        a[8] = {
            cF: [0, 700, 1300, 1900, 1901, 2500, 3400, 6E3, 1E4],
            fP: [25, 30, 30, 30, 255, 255, 30, 40, 20],
            nI: [25, 30, 150, 150, 245, 245, 80, 150, 70],
            d0: [60, 170, 170, 170, 235, 235, 30, 40, 40]
        };
        a[9] = {
            cF: [0, 400, 2009, 2010, 3300, 4E3, 5200, 6500, 8E3, 9500, 1E4],
            fP: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
            nI: [10, 10, 90, 245, 245,
                170, 60, 160, 20, 155, 255
            ],
            d0: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
        }
    };
    this.a2r = function() {
        i6 = document.createElement("canvas");
        i6.width = an;
        i6.height = ao;
        px = i6.getContext("2d", {
            alpha: !1
        });
        var b = px.getImageData(0, 0, an, ao);
        xL = b.data;
        var d = a[x9].cF,
            c = a[x9].fP,
            f = a[x9].nI,
            e = a[x9].d0,
            h, g, k = k1.a3B(),
            l = d.length - 2,
            m = Array(l + 1),
            u = Array(l + 1),
            y = Array(l + 1),
            z = Array(l + 1);
        for (g = l; 0 <= g; g--) m[g] = d[g + 1] - d[g], u[g] = c[g + 1] - c[g], y[g] = f[g + 1] - f[g], z[g] = e[g + 1] - e[g];
        for (h = an * ao - 1; 0 <= h; h--)
            for (g = l; 0 <= g; g--)
                if (k[h] >= d[g]) {
                    var G = k[h] -
                        d[g];
                    xL[4 * h] = c[g] + ym(u[g] * G, m[g]);
                    xL[4 * h + 1] = f[g] + ym(y[g] * G, m[g]);
                    xL[4 * h + 2] = e[g] + ym(z[g] * G, m[g]);
                    xL[4 * h + 3] = 255;
                    break
                } px.putImageData(b, 0, 0);
        k0.a3c() && cA.cB() && k0.a3c() && (d = cA.lN("arena"), px.save(), px.globalAlpha = 1 === x9 ? .1 : 1, px.imageSmoothingEnabled = !0, b = 2.8, px.scale(b, b), px.drawImage(d, Math.floor((an / b - d.width) / 2), Math.floor(.5 * ao / b - d.height / 2)), px.restore(), d = cA.lN("territorial.io"), px.save(), px.globalAlpha = 1 === x9 ? .1 : 1, px.imageSmoothingEnabled = !0, b = .87, px.scale(b, b), px.drawImage(d, Math.floor(.745 *
            (an / b - d.width)), Math.floor(.422 * ao / b - d.height / 2)), px.restore());
        vt = !0;
        cI.cJ = !0
    };
    this.jf = function() {
        var b, d = 0;
        var c = ao * an * 4;
        var f = uB,
            e = xL;
        for (b = an - 1; 0 <= b; b--) f[4 * b + 2] = 3, f[c - 4 * b - 2] = 3;
        c = 4 * an;
        for (b = ao - 1; 0 <= b; b--) f[b * c + 2] = 3, f[b * c + c - 2] = 3;
        for (b = an * ao - 1; 0 <= b; b--) c = 4 * b, 3 !== f[c + 2] && (e[c + 2] > e[c + 1] && e[c + 2] > e[c] ? f[c + 2] = 2 : (f[c + 2] = 1, d++));
        this.nS = (an - 2) * (ao - 2);
        this.nX = 0;
        if (a2w(x9)) {
            e = 0;
            c = uB;
            var h = xL;
            for (f = an * ao - 1; 0 <= f; f--) b = 4 * f, h[b] === h[b + 1] && h[b] === h[b + 2] && 3 !== c[b + 2] && (e++, c[b + 2] = 3);
            je.nX = e
        }
        this.nT = jN = d - this.nX;
        this.nW = this.nS - this.nT - this.nX
    }
}

function a2p(a) {
    var b;
    x9 === a2v() ? b = "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86fRU8Av6gRK76AeCE66hQ9IAw6iQ7IUu6kQ6IUu6lQy87EQmQofAK6Ak6nQUdA7F9D56nQAKAUQAKBA9F8D56nP9A9BKIBe57DaqQAGBeIBoSAKBAKjDGsQAFB6AySA7BUiDQrSKFCKCA6AyEDUcAKD6rV6AyFAoBCUc6yV6AyOB6C865WkBAEAKZ655X7Aod66M6a69Z967W5967W5967W5967W5867g5867g5867g5767q56675Z6675Z5676Z5676Z5676Z5676Zu77U6AKu678UyFEk78UyID9679UyID768L9yBA8A8DABAu8qEA8C769WEA8Cu95UoICG99T7AKGA9B9699UoKB77AUoLB56dAe69UyMBucAe69QUCBUCC7B6BGbAe7B58BABAeEAyYCAI6ZAe7B57B6AeHCUXAabAe7L57B7AKJCQ5UEHB57C7CQ5UEHB56C8CQ5eDHB57AUBCoV65eEG9QAZB965oEG9QAZB965yDG9QKZAUBAKCBa5yDG9QKZAKGAKEA665yDG9QUmAk5yDHB56AUED8AkxAUEAe7B565oAeCALyA7HV575oA8AyBOKGHf585qA8AKEN9Ay7p585sBVmAy7p595sBVkAo76P95uBLjAo76P9AKCAUB5rA8N6AK78Q55sA6V6Q65tAKQAMCQ756AGT8RF58AKBAz96RP6AFTz7P6oBTz7b59Rl58Rv57R675z7975V7975V7875f8HzSlwSbxSbxSbxSbxSlwSvvS56ZApRSuYA6L7S66WA6L7S656yBFeJL7S656yBFeIL8S656yDE8A9MB8556yEEoNMB8t6yFEAPMV8t6KJD7B8MV8t56BokB6Mz8t5UQD7B6M6S65yAyIAUlB7M6S65yAyuB7M7S75xAovB7M7S65yAeuCLZS75xAUuB6AoBM6S75xAKvB6NL87596BzhS759oPNz8959UPNz89589B8Nz9FsAKrB9Np9PqAUpCLiTV6oClyCD9C9M8Tf6oCloCD8DVaTz6UCloCDomMp9p6oCleBDUqMf9p6yClUBDUrMV9p67AN97AKFEABAfWTj66AKFD8M8TACAZ6yDAUnM8TACAZ66ELeT556ypNB9j67ELeTZ67EVeTP6ytNB9F67EffTF66EpfTZMAyDAUpEzfTZHByoE6NL9jDBKFAUpEfhTjCA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6Ao8i58m7Ae8Y59m7AK8O6O67us67us65u6ui68r6AKau8q6AyEAUau9qUUCE69p9B8AeFB7u8qASAyEB6u6qUSA7AUQu6qyPC5u6qyQC5u5q8BoZuscByZuifBAcA8A5s9rKHDKIA5s8r6AUmAUCtO78ti78AeCs9v7AUDs9wiwwsvwiwwsuw6s5w5s6wsuw6s5w7AyBr8xslx5r5x9rY99rZCq8ysay6q6y6qtJqPMBeGoFgP6BWe5lPKQW65pO7B8W55rOoXV95zN7C7V655VbEMK55pZEWI557MKtU8557MKuUj66LowP6AeFA7DF69LKyPySCZ8VDFL5oWB858pBFVyC8B5588J7FpqAeEC9Bt89Jy68M6EAJ59e9o7BYEUD598Je7pU6sJU76AoOKQsJU96J96sJU96J66vJU96JkyJK97Ja5U89J9B6AK7k5o88J9BKHAeFA9AK5k5y88KAKC6AeDEu58I7KKBEAs658I6OeGAoh659Iz5yf66K86PeFA7B666y8z68Bk6y8z7KH668Iz7eF669IwwI58vIwyISzIS6K7S66G587U59X9AQhF8X8AeqAZ9U5qlAopAj9e5gkAypAj96E9X7A6EAD6BEgmA7D9AkBEWoA6D8AuED8YKHD7AkID5YKHD7AkJDqrA6D6AkKDWsA6D6AkLDCtA7DyD6MC8Y8A6DoD6OC5ZAHDUE6NCqzA8DAE6QCM5eJC8AkTB8ZoKC7AkUB6ZyKC6AuYA9Z8BAZA56ZA7Z9BAaA589KJC6A589UIC6Aw9eJCoE6bAM67A8CoE6bAW67A7CoE6bAg66A9CUF897A8CKE899A9B9AeDAUGAS9AJB7A9AKH889A9B6B8888BKOCI87BKOCI88BKMCI89BKKCS9KLA7Cc9ULA6Cw9Un89Uo89Kq889Em88E5887E688yu886E5887E6887Ew87E5887E5887Ew88E5886E6886E788ov88ow88ov88yv88ow88ew88ey88K5m8Az88Az88AzH" : x9 ===
        a2v() + 1 ? b = "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Fs69FKxJ6556KX78Fs7AxFATAK75558KX78Fi7KuFeSAU7t59KN8AzvKuFyQAU7t6BBmAxvetF7BoDHj6U99mUvvetF8BeEHZ6e98metvUvF9BUEHZ6e98monv7E7GKJAy7Z6o7UBC5mocAKGAUCv7C7IKHA6Hj6o7UCCr86B8BUCwKZIoGA6HZ66HUDCX88B6x7Ce8yFA6AeBG8567HUHB8nAHy6CA8yFA7AUCG8L6AOyHeIB5nUEy9B6I8AeJAUCG7L7AOyHyJBJIBe9ADA8AUDG6L8AOyH79aBK9UCA7AUEGzTAYxH99eAVBAyDG6L9AsvIJ99AAhAKHGpUA5s7IJ99AAoGpVA6sy8T99AAmAoCF9MUGsy8T99AAfAoJF8MeGsy8T99AAdA8A7F7MoFs6Id99AAcAyKF7MyEs6Id99AArF6M6AsuIx99AApFzdAYuI6999AAnFzcAYvI6999AAnFpcAeDAOrI6999AAmFpdAUEAOrI6999AAmFpdAoBAYrI6999AAlFpeAoBAYpI8999AAlFpeA6sU87999AAmFfeA7sU86999AAoFBgA7BACrK85999AAoE9NUJA7AsgIx99AAoEBpBKDA5re8x99AAqCACBpqB9ro8n99AAtB7AeMOeTr6IT99AAuAKDBKDAUBA9OoTr7H9999AA5yGA8A8OoUr8H5999AA59AoKAzuB7sU69999AA78AVwB7se58999AA9ABOyUso57999AChB8s9F8999ACgB6tK58999ACgB6tK59999ACgBs5U59999AA7eCP8Bi5U58999AA7eCB9AVnBO5U59999AA9oCN9BE5e59999AA9oBOAIt6F9999AA9eBOAHt7F9999AChA6t9GJ99AA7eBOUCBeGuAuAeK999AA7eFBKDMoEBAHuKuA6A6999AA7oGAyIMeFAUCAKBAeGuot999AA8yTMeKAeHuyu999AA8oSMeKAoFu8AoBEJ99AA8oSMULA6AO7KDAen999AA8eRMAOv8AKEEJ99AA8eRL8B5v8AeFD8999AA8eQL8Bs8AEAymAyB999AA76BpTBs8KEAeqAeC999AA7oOL9Bs8UDAyqAKE999AA7UOL9Bi8yCAypAeD999AA7UOL8BY87AeEEKDAn99AA7UNL7Bi88AeFET99AA77A9AUBL6Bs89AoEEd99AA76A9AUBLoNxeDAeq999AA77A6L8BtAET99AA79AzQB5yUo999AA8KBL6B6yon999AB9yUyen999AB9USy7ET99AB89B7zKo999AB87B7zon999AB8yRzyo999AB8oRzKCAKBAKn999AB8eSz8D9999AB8ATzyCAUk999AB8KUz6AUCDx99AB8KU5XDd99AB8UT5WDn99AB8KU5UAKCAKBDT99AB8AU5WAKDDT99AB78CFWAoCDT99AB78B85YAoDDJ99AB77B85ZAyCDJ99AB8KM5ZA8AKf999AB8UI5bAKCD8999AB8eD5eAKDD9999AB7yC5tD6999AB7eC5vEJ99AB67AjuEn99AHOEn99AHQET99AHQET99AHUD7999AHRAKDD6999AHLAeDD9999AHMAyCD7999AHNAyBD7999AHSAKCD5999AHTAUBD567UB999AAuD767UC999AAsAKBAyBDQ7UDAUD999AAoAyBDQ7UI999AAoAoDDQ7AF999AAtAKBAUBDa7ABAoC999AArAKCAKCDT99AHXAKDDJ99AHVAUDC8999AHZAKDC8999AHfC5999AHaAKDAKBC5999ABvAP8KCAoW999ABuAP8UDAKY999AHiCx99AHeAKECeyAT99AG76AKHCUsAoBA5999AG8KWEeEAUG999AG8eBAUSEUDAKG999AG76AKGAKEB8EADAUE999AG89CKlAUEAn99AG8oBAUU999AHmB9999AHkAKDBoDAd99AHmBUFA5999AHjBUDA9999AHkA9AeJ999AHhAKCA9AeJ999AHkBAIA6999AHgBKHA7999AHhAyCAoBAKCBT99AHfAUBAUHAUBBn99AHgAKCAUBAKDAKDBVoAn99AF96AKHBVpAn99AF9yBAeROAE999AF9KYOAD999AF9oZN6Ad99AF98CT99AHgAUCBn99AHtBn99AHuAKCAn99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AGIAd99AJ99AJ99AJ99AJ99ACdAd99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AH7oE999AH5eB999AJ99AJ99AFGAKBAT99AJ99AJ99AJ99AJ99AC9KB999AH5UBAoF999AHtAyCAd99AHtAyCAd99AHvAx99AHxA7AUC999AHlAUFA9AUF668Ad99AA6ABAeCAyJAeE668Ax99AA57AeCAKEA7AeBA7AQ67Ax99AA56AyFA6999AHrAKBAKDA7999AHwA88mAdFBHDAVgAxFA97FALfA5898AKHA969KEOAF899AKGA98kAxGBE89A8YeII7AnGBoCAs76B7TUOC8Bo8yF9EA9AKDAeCAKBvyUN6AUyCUVB6G7CxDA9AeCv7C7NUDE8DABAULB7AeED9AyNDw9yJAyCvydNADA7BoDAoEAyBAyDD7A8C7CKFAeEAeHBKr88ACA6BE8KbNAwAKoAKhB7CyKFABAc7UDAUCAKIAUBveCAycM6M9AKoA7F6AKE86yEAKLvoHAUhKoIAguAKE858AeCBO6yDA7Ee9yEAM6m58AoDA9u6AoGFo8g6686UCAoCAUGueGAU7o65bS69A6t7KoubyDAm6UGtVJD9c786yHszND7c886yHA6AOkL6DrABKC8sA7AoCoKFC6L9DhCBKD8cAUNB5n8A6CfUD5eAFAKGAcbA7BUPn7A7CBWDrP8aA9BUOAyCm8BUQMUggABAKCAwRBAFAUCB8AeCm6ByEAUIMUch58MAUCBADCyBAN8eSAUDA8MAZAKBiIMAKDBADCr8UbAKCAVWCXv799AoMBADCr7V58AKDB7jl99AyMBADC5c7AUOAUKAeEA6D7QUTj68RBKDCg8KDAeEBeKAKTCf69CD6ABAcIByDCWaAKLAKYAUOBoIEAHR8AUCBr6wAAeGByDCqjAecC6A5W6AKDBX76AKB78eIBUKAeZWAEA9AoUa7BD85777A8BeMAeaUeDBAFDC69BD8779UTAeZUeGA6AyOAKMbAMm9787AKCCKDCp96AUEA7AyHAKPAKDAq7AOnKDAR78AUBCyDCz9oDAUJA5d9Br9568yCA6AK8yLAUQAoXT7foNn667yIAeDAUBAKEIyGBALAySUXMBX9u79Cy96BeGCp95fUIn669oNG8AoTB6A8Cf9rQAN9969UCAKCByCBeCHAOA9Cf9bR68oDA7A6DACA6Ao8UbSvT68ABAyEBeEC6AUDA6FKGCUiR87S68oBA6CAeA7AUCA6AKUAeQA6AUBB6D7R87P6CA7GAFCU68B9A7AUCA8A6AKBA8D9R77W6DA9BABE6A8De5yRA9AoEA7AUEE9RbL6UA9AoKEAJB9A8Ae6yIB7Ao58RHI6cA8AoPA8AUHAUPBKSQB7KGAk9ulAeGBUJAUHAyRA7CL56R869QRAeLAoRAyZAyHA6A7AUXPp5yDB969aHAeZAKhCKGA6D7O8P6AUR69kEBAFAoKGUEAymOUBAf58AUL6896LKKnOKCAV7Q886FK8AyDBKOA9N8Ru8aMc9RQ8kEd8RQ8aBd8Q9AoD68F97Z6AKrQu9j9KHAM5yHDf587B59eKAM5eJCp6HF6IZeKCB5vJ6OZV777M6AAoMZp7RN577AKEBKQAyFZ6Q57QBKC56yRAeGA9az577VA9BF6KcAq77OvWA9AeDAj6q8AHCVp7Y585cKQA7JeND57YA8AZ6yEC5bzCB9DRa57oHCM5oGB7DeEGeVC97bAUB57UJB6Z9A8BUdA7GeWC87R588BASZ7EeJGoYC77I6AA9Cq5UmA8G7CoeCUF6696MAyiY7AeOB6A7G8CokA8A967a6C58B6Ao7AaE767k7MxFeFDAdE966668MpFyGC8C8F666D68" :
        x9 === a2v() + 2 ? b = "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" :
        x9 === a2v() + 3 ? b = "AKVAGAL8jKGBKUU9D7Pe98B8L8jKGBKUVAkG9AofAUvJ8B8K7A8ArzAyKCWKC6AUGG9A7C7AKBAeuJ8B8K7A8ArzA6AKDAUBAUXU9CyDA6G9A6C8AytJ9B8K7A9AyDANuA9AKCAeWGACO6CyEA6G8AogAeuJ9ByBAVHBKEAUBjydFeHO9DU69Ao8K99BfMBKIh9AyRCU5oEP6C7G8Ay8A99BfNBKIh8A8CePVyZG8Ay8A99BLQBKIh6AyCAoVBqRCy67Ay8K98BBTA9A7hKKAeHB6B6V9Co66Ao8UYA9AKBGoJL8BKGheIAeIBeSWARAKGGyEIUVB6GeGMANA5hyFAUCAKGBUTWUPAUGGoEIUTB9GeDMUPArjAoDAKDAyMB9WUNAyFGeEIUQCf87B6A5hoDAeBAeFBUTWUNA8AU6eDIoPCV88B9AhiAKEAKEAoNB9WULBABGeDIoOCz86CKDhUCA8AoNB9WeKHoDIoNC7SoXArfAKJAeOB9WUJD7AKlAe8oMC9SeCAKXAhdAKJAeOCCVA9D6AekAo8eLDB87jeCA9AePB9WoHDyDD6AK8oMDV86CoCg7AUIAoQB8W8AejAojAK8oLDf87CoCAeCgKBA9AoRB8m6BehS8CoCAeChKDB9B7myODV89CoCAeDg9AeUB8meODf89CyBAUGg6AoVB7mUODf9KYAyDANaAoWB6mKNDz9UYA5g9AoWB7l9BojTUXA7g8AyWAyDA8l9BekTUXA5hAFAUCB9AoEA7l9BekTUXA5hAFAUCCADAoBAKHl6BUkTyVA6hKEAKEBoBAoCA7A7l6BUkF7AVlCAGhKEAKBAUBBoBBeHlyMD6EABB6AflAKBB9A5hKGAUBBoBBeHlyLD7F7AplCAGhAFAeBBoCBUIleLD7F8AzkCKFhKEAeDBKDBUIleLC9AyBGAGN6CAGhADAeEBKCBeGAKClUKC9G7A6N7CAJg7AeCA7A7AeNAyCAh7KJCyBAeNA6E8A8NyVA8g9AUCBAEAKPAoEAh7AIC6B7A6E8A8N6B9A9hoBAeFAoBByDA6AX7AHDKMA7E9A7N6B9A9h8AyUAUHAh69A6D9AoIE9A7N7B9A9h9AeUAUGAr68A6EKCA8FAHN8B9A7iADC8A5k7A6EKCA9E9A7N8CAHg7AKLAebA6k7A6FUxA8N8B9A8g6AUKAoaA7kyGFowA8AoDNKUA8AyCf9AKKAyYAeBA5koGFowB8M9CAIAoDf8AeLAeaA6koFFyxB7M9CKNf9AeLAoYA7koFFyxB8M9CKMf9AoKAeYA7hAGC9Ay5yMAKkB8M9AUDB6BXhAeYA7g7BAcAo5yNAUiB8N7B6BheAeXA8g8A9C7Ay5yNAUWAeJB8N7B6A9hoDCeIg9A7C8Ay5yCAeIAUUAoKA8AKBAKFN9B8A7hoCCoIhAGC8Ay5oBA6A7AeSAyKBABAzkCKGhyBCyIhKEC9Ay6AHA6BoHBAIAeFN6CAHhyDCeJkeFGAHA8BKIBKHAeFN7B9A7hyFCKJd8AK6oEGUGA9AyBAUKBKHAeFN8B8BDhA6B9BArAWzAe6eEGeGAKCCeMA6AeEOARBDiA6B9A9EoCZKCGeDGyJCUMAyCA6OARAKBA8hoHB8AoyAK6eBS8AK6eDG6A8CeMBLqB6BNiA7B7AoyAo56AKDAL89Ae6KCG7A8AeCB6BeIAKBOoQBDiA7B7AoyAy5oIS8Ae59Ae68BeHAUGBoHO8BeLhyHB6Ao5UDAUCE9BB87Ao58Ae69BUFAyEA8AUFA7O9BeKhyHB6Ae5oHE8BB87Ay56Ao7AgAeEAp5oMBNiA7B6Ae5yGE8BB8KCA8AK56Ae7KgA6AKFO7AUFBKMheHM8A9SUCGyDHeDAKCAUWBVvAeGA9AUBA9heHM8BB8UCGeEIKVBeCAVqAyGA8AUBAKBA7hoGM9AeBAz8eCGUEIAOAyBCBpA6A6A6BXkAzbBMvAo8KLC7OUHAyDB5h6AVdBWuAy8eDAeCC7OUICi67BWuAo9KBCzsA9B8vKMYyFL7OoKB6vyKYoEL7OoQBO7yLYeEL7OoUA7vyCAKIYUFL6O6CUEv8A9YKFL6O6CUEAeCnABIKDAUFYKFLzwCeCAeCnACIKBAoCYUEIKBDzwCeDAUCnAChKDIKBBKCCLxCoCAUCnADhACIKCA9AeVPAYAeBAX9AEg8AU8UCA6AyVPAZA5nKEg8AU8UBAyGCVyCoFnKGg6AU8KDAeICLzCUGnKDAoBgeDIKEAeHCL5UVAUCAX9KCA6AXVAe8KEAeICB5eTAeDAX89AoHANUAU8eFAUDAeBCB5oZAX89A6AyCf8AU8eKCz5oZAN9KGAKBAeBIyIWoCIoJCz5yZAN9ANI6BKGA7U7AK8oJCz56CyBnAMI7C5UyCIeJCp58CyBm9Be9AWUoCIeKCf59CoCm9BU5oDCyCA6CgEAK8eKCp59CoCm8BK5yECyEAoYUUBIeKCp6ASAKDAX89BK56AeaDgAAK8UMCp6ASAr9KBAUGI8Df98AU8UMCp6UQAh98Ae88Df98AK8UNB7AKFQikAe68Dz96AK8UNB7AeCQinAoCAU58AKDDz96AK8KNB7Q8sKHF6AeCD7TeCIUNB7Q8sUIFeDAelTUBD9AUpBoSQ8seJFAEAUnTABEADDyBAKRB8Q9soBAKFFAvS7AUpAeiB8B9RFAE8BAFRKBEeCDoSCB68yKxA8A6RKBIKPCL68yA5UBBB7UBIUOCV6tDA8Ae5V7KBIeOCV6tCA9AU5f7KBIeNCf6jCA8Ae5p7KBIeNCV6tCA7Ao5p7KBIeNCL66yAGAo56RKBIUOCL68x7A7Ae58RABIUOCB7Y9e7B68AU8ARCB6yCA8w7Hf67AK8ASCB65ZoBX8IB6oBIATB9Q5ZUDQ6AU69IV6UCH7CKUQq5eCQ6Ao66Ip6UBH7CUTQ5ZeCQyGGo8z6UBH7CeSQ5ZKDXolAevQUBH7CeRQ5Y8A6XemA6Ep6eBH8CoPQ5Y7A7XUkA9Ep6UCHocBUBAL66wykA8E6QKBH6C9BL67w6D6A7E8P8AU77C9BL67wykA7FU69AU8oBG9AUFAKBDABAUHQ7wokA6Fy6yHIKBHAEAUmAp67wokA7Fy6oLH7AK7AtAf68welA7Fy6eLH7AU7KtAV68wUlA7F6G7AU8KCHWOwekA8E6AoGG6AU8KBHqOwUkA9EyEA7O8AK75VsmAKqDyKAUEDyJA6O8AKRAK58VimAUpDyLAKJDAKA7O6AKRAe57VimAUoDyYCeQA7OoBB8Ae57VilAemDocCATAoBAVrAKSAe57VY78DodB9C6ApnAKTAo56VY78BKFB6DURDAEAyCBoIBoCJKBB9Ao5gPv7A9A8BojBogB8AKTAeMI6AKVAe5gPv6A8A9BomBKhAeGEy8oBCUEFMPv7A7BAMEUBEeEAUcAKDAUNIeBCUEFMOv8AoNBK89A8AUQAUDAeBAeNIUBCoDE9V5v9AUTAy9UGAUJAUFBePIABCyCE6V8yKCJ6AeEA6AyBB6B7H7AKaAUtV9599AUEA7CURH6AUaAUtV8577AeKAeBCAEAKQB8HyBC8AKtV8576A7A7DoKCK7UBC9AKsV957oMAolA6Ce7ABDABEqS57oPAenAKaG8AKfAKtV7568AUDI6GyCDUBE5V7568CAEG8GeBDyBEqQ568CAIG6GKBD6AKrV6568CKLGo59AKlAUqV656yBAKWBonAUVF8AKmAKpV656oCAUWB7DoFCA58AKmAKpV656oaCAgAoVF6AKnAKpV656ebCeeAoVFyBEABECP56KfCodAoSF6AU8MP56AhCocAyQFyEIMP559DoZC8AyPFUGIWO56AhC6C9AyPFAHIWO56AfC9C9A7BeJAUmA6IgO56AfC7DUGAeBA9A9AekBA8CO56AdDAfA6AUCA9A9AyiBA8CN56AeDKeBUHA9AyhBK8CN56AFAKYDKeC7AekBA8MN559AyBCygC9GyMICL56KEAUZDecFyBA9BU8WJ56AFAUUAUDDUdFoFA6BU8qG56KFAUUAUDDUdFUaIgG56KEAUTAoCDedE9C9IMI56KEAUSAyCDecE8DK8MF56oDAeREKbE7De8CF56UFAeSEKbEyhIWF56KHAeREUaEejIWF56KFAyQEUbEUjIgF56AFAyQEeaEeiIqE56KEA6B6EebEKiJB9956KDA7B6EebD9Dy9L9856UDA7B6EebD6D7JUHAf8756eCA8B6EUcDymJeIAV8657USEKdDemJyIAV8t7eTEAJAUSDejJ9A8AL8t7eTEAHAyRDUTL6A8AV8t7eSD9A8A6B6DUPMUGAV8t7eRD9A8A9ByfBpeS557USD7A8BKPDAOM9S657eSD7A7BeODALMyBAz8757eRD8A6ByNC9A7AoBMyBAp8857eRD9AyPBedA7AoBMoDAV8857eSEADB6BonAVXAeBS957eREUBB7BooALWTt7eRGKNEKBLoCAoMAV8F7oRGKMEUBLoDAeGAV8657oSGAMEeBLoKAV8757eTGAMEeBLz9857eTGKKEoBLp9957eTGKKEKFLgA57USGUJD7A9LWC57eRGoGDeOLWC57USGoFDeOLCF57UTGeEDeOK9U657eUGeBDyNK9U757eUGeBDeOK8U957UVGeBDUPK5VZ7UWGUBDAQKgQ57KXGKBDAQKgP57UXGABCKCAySKWR57UZF8AKRC7KKNAWF57KaF8AKRC7KAJAUBAgG57KaF8AKQC7KAJA5U957AbF7AKQC6KAJA6U857UaFyDB6CzAA9A6U957UaFoEByZKKHA7VF7UaFoHBUXKUEBCK57eaFeIBKYKKCBWK57oaFeIBKXKKDBWK576Co5eIA8AKBCVDAUKVZ77Co5eFA9C6KeBBMM578Co5UBBUaL5Vj78CozAKMC6LWR579CeyAKMCzNV7579CoyAKLCzFAKHV8578CyyAKKCfIAKEV958AZFABBAXK8Wt8KZE8AeJCBKWj8oYE7BACCBLWj8eZE7DVLWj8eYE8DLOWF86CUwDLQV7587CUwDBRV6588CKxC9L9V5589B9E9C9MCP59ARFAaMWQ59ARFUXMgQ59AQF6B6M7V659AQGKKM8V659AQGyCNWQ59KPT9V759APT9V759KOT9V859ANUMS59AJUqS59KHU5V8R7AiMA5U5WB7yE6WWB7yE6VWV7eG6UWV7eH6TWV7oG6TWV7yG6SWV7oI6SWL7oJ6QWL76A86QWL76A96PWL76BP96AUNWV78A9598AeLWV8KG599A7A6WV8KG6AA9AgVSUG588AKMA8AWWSUF589AKNA6AqVSUF588AUOA6AWWSeD588AePW9SeC588AoPXH7UEB6W877oDB7W777yBB8W777yBCCa77oCB9W677yBB9W777oBCCa77eCA6AKNW777UDAyCBWb77UFAeBBgc77KJBqb77UGB6W877KDB9W877KEB8W877UDB7W976eBA8AeRXH6UBA8AoPXR6KCA8AoQXR59AUKAoOXb59AeKAoNXb58A6A9A6BCg758AeBAoIA6A9XR6yIAUGA8Xb7UKAeBAgh77UKAKCAWjA6Ab6yLAgjAyG76UJAqkAoC768A7AqlAUC769A7AqmAKC769A7Aqp768A7A5X8AUB768A7A5X8AUB769A6A5X8AUCPAB6QA7AqnAKEO8AaPA8AqnAKEO7AkQA7AgnAUEO7AkRA6AgnAeDO7AaSA6AWoAoDO6AQTA7AMoAoDO6AQTA7AMoAyDOyB6TY877gw76KCAeBA7Y776KKAeGAMo769AoBA6AWn77AKAWo77KIAWo77UDA6YR8Cp78Ms777Y5776Y5777Yv78Yv77Yl78Yl79YR8Co78Mn78ql78qk78eBAMk78Wn78Cp778Yl77A8AMk77oFAUDAgi77KEA6AeDX577ADA8AKEX577KBA9AKFX578ABA5X5786X6785X6785X778Mp78Cp779Yb79Yb79Yl78Yl75Y7765Z7769Zb7C5Z69AL98Zj69AV97Zt69AV95Z5569AV95Z5569AV9yDAgx57ABTKFA5ZF69AV9KDA6Y957KBUCy57ACT8Zj68AV97Zt68AV97Z5567AV95Z7568Af9C6F68Af87aZ69Af87aZ7ACS5at7KCSg6557KCSW6657KBSW6675q6775g6875W6975W697zbHyb57ub87qcvkc57jc77ic77ic87hdHgdHedbddlXcKBB77Uc6AeCAeI7Sc8AUP7Pe77NfHKf57Ef97Cf97BgHCgHAgRAga98gk97g769rc69rc69hd69Xd69Xe69Dg689ha88h5686f9AUP68hHAKf68Dp679ik77iu77iyYAaxi6CoD6wi6CyE6ti8CyE6ri9CyE6ri9CyF6pjAaAupjAaAkohUBB9668heBB9667ju6r5766X5966r57658AKFj8657AeCj9657k5657ku57ku56k6655k765r6765r67CKB6gk7CAD6fk7CAD6fk6CKD6dk9CKC6dlAVAablKVAaaleVAQaloVAQZloVAQXl6CUB6Xl56vluvluvluvlkwluvluul6DUB6Ml7DAF6Jl7DAF6Jl7DAI6Fl8DAI6Fl9C9A96El9C9BAEAZ98l8C8BeCAj97l8C8BeBA6595l8C8CP9r79C7CZ9h79C6Cj9X8KYCt9X8UXC559N8eXCt9N8eXC559D8oXC9586meYC9586mUYC9586mKZDF85mKaC9586mAaC9586mAaC8587mKYC9588mAYC9589mAXC9589mKWC9589mKWC959D8KVC959N8AVC959N8AVC959N8AUDF9N79CKf59N78CKgx6Ae9N78CKgxyCEKBFX77CKgu6AKPAeGA6EAGE9l6CUguyBBoFAKND6A8E8l7CKhuoCBeFAKSC9BUul7CefueDBedCoNE6l6CeguUEA7DyWBovlyYDO6KxB9B6E6l6Coes6A8Ao5ePCUsl6Codsy67BeYEr77CUdse7KJC6Er78CUcsU7UIC8Er78CUasU7eFDerl8CKaqeEBU78AUjEh79CAZqUJA7L7EX8AUC5qBjEX8KTC5p9NyEAUlg9AKzB8C6p8A7ApeD7mKTC5p8A7AoFAVXD8mAUCscA6AVYD8mAUAyCB6rADAfYD9mATAyDB6r6MeomATAoDB6r6MonmAUAeDB6rzaD8mKUAUDB6m6AeuM6D8mKUAeEBr86AosM7D9mAUAoEB6mUGEBeD9mKTAoEB8mAJD6NKnmeRAyDB8mAJD7NAnmoQA6AKTj7AUVBAbAUINAmmoPCeCAN57AoUBKbAeIM8D8myOCAFANfAKWBUQAKDA6C7AoDAeEMymm6BySAyBhACBoZBADAUHC8BKFMKnmyTBoFANcAoNFKZN6EN8oUBeEAXcAeKF6B7AKGN6EN8yUBKFAhbAeJF7BoFAzkEX8oUBKFAraAUJF7BoIAfkEX8yTBoCA6goCA7GAGAKEO9Eh8ySChXAUGGoCAUDPAsmyQBABBrXAUDHKBPKsmyQA6AKSggcEr8yRCrXW8AoBD9kUBCUUCXVXADAKpj9AUVCUVgCfAUDED8KXCNTXUCAoomAXCXRXeCAoomAYCXQX8EX79CoWf6X7Ee5yCgKZChOX8EoeAeDAyNAXVCyYfWmE6C7BKBAULAhVCyZfCmE7C7A8AyBBKDe7AeLCyae8YKtCUCAeFCAEeyIA7Cyae5YogAULCeCAUECKDe6A9A7CobegtDKEBKXA6CUDe7BKGCUceWtDKFBAyAhJBKECedd6ZKdA6BAyAhJBUCCodc7AKHZecA6BAyAXLD7DC8UFAg58C8AyKFACfekDC8AHAM59C9AeLE9ArND6Dg77a7C8AeLFADfojDq77a7EX67Dyjb5a7EX67D7D7bW68ED66D9D6a9AKCa9D9k6EAja6AeCbekk7D9Dq66AoBbokk9D7Dg66cAklAlDW65cAlleiDW6M8yklohDW6M86D6loOAURDM6M88Dr76BUCB8DC6M89Dh77BKDB7DM59dKgl8BADB8DM57defl8A9AeUDM5q96DD79A8AUWDMyd9C9mUBAUDAUXDC5W97C9nAXDMzd8C7nUWDWyd9C5neXDqvd9C6nUXD7YrECKnAXzCelYrFCAnAoLAXkCUDAUhYrGB8D9AyKArlCKCAUiYhGB8EAFA9ArmCKBAeiYXHB7EAGjKYDqqe7B7EAGjUXDqqe9ByoA7jUXDgqfABAKLEAJjKYDWpfoKEAJjeWD9XrOA9EKJj6B9EChfeHEoJj7B9ECgfUFE6A9j8B9ECgfeDE7A9j9B8ECgfeBE9A9kARECgkoHkKRECgkyFAKFj6B8ECflKFj7B7EMek8A9j6B7EMelAIjyRECflKHj6B6D9XX7UGC9AhZBylXr7UGC9ANbBylXrDAK69A5j7BylXr7oEj7B6D5X5loEj6B7DqkloEj6B8Dgkt9AM7oTDWkseCBoEbKUDMlsKDByCbUUDgksACdAUDqjv7A5ZAVD6Xi76A5ZAWD6XY77AWzCemXHdConMUDKsmAM9AYEBUAzD7dCopL8A7KbdCyqMKBKldCyrWvcC6EqX7bC8EqW7bC9EoCAMSxo" :
        x9 === a2v() + 4 && (b = "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okA8BoDWK57x8D8A7FeCC7AoCAKDAUZDeMBAGWK56x8D8A8IeBDogBoIA7WU55x8D8A8L9DAQA6A8We55x7D7BKCAzLC8DCaFi97D8B7LKbDCdD9AUKx7EoPK9CoeXUiA6APFE8B6K6B8DMkC8z7E8B9KoODqoB95WFUPK9AonYoO5XFUQPMyA55aFUPAeEO578K5UWO678A5UWO678A6oJO778A7ADO778CTC6Ab5gSC8AUEAltV8DyE7rV7D7AvqV7D7A67oTUCCemAbrS9AoY78f7UEA9A7C578f7KSC878f7ASDH8V6UFAKTDR8V6UZDR8V6UZDR8V6eYDR8V6eZC978f6eTAeDC978f6eTD578f6UTD678f6eRD778f66AeEA6D878gR78gQ78qQ78qQ78qQ78qR787Vl9CK79MI79qG79qE798UM58APpUC57AjpT8Z7A55pT6Z8A65rTg58A75qTfCAp5UH5pTfDAzyA75qTfDAyMAQ86TLWAQ86TBXAa8z9BXAk8z88MoE68z86MyE686SzZA5686SfaA6688R9M6A869B76M6A769V7pbA669p7fcA569z7VdAvAQ68mQSrP78rP78sP68rP78rP68sP68sPmvPmwPcxPS5yDApm86Vl866Nm68NZ8ABdLc58ABdpZ58ABdzY58ACd9L958ADd8L858UCd8L758eCd9L658eCezK58eDezI58oDeymAe66586AXFDyHAyBAUFFZ86AXIDKKAUKAoCEt88ANNCegEZ89AXNCKhEP9KBfyQD7EJIBonD89KBAqD7B7AS9oIE6DUSAc9yEFAeB9AdyC9B8AnzC6CAD9zBUEA7CeC95eJA6An99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99ACeAT99AT99AT98Ad97Ax96Ax97AT99AABAT99AJ99AJ99AH6AC997Ax9yF99yE996A55lAO57A55lAY56A55lAY56A5bUBaoCt7Aq7UCaUEt7Aq7KDBUBY8A5t6Aq7KKAyFYyEt6Aq7KKAoHYoCt8A5a9BUBA97EAyhAMiClEA6DKCWoBAKf7EA7C9AgYDo5yF6sA6C7AqaDo5eH6qA8C6AqaDy5UH6qA9CyEW6D6FKC6wA8CyEW6D7FAG6sA8CyEWynFAG6rA8CyCW6EKzA56qA7CyDWKv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");
    b = a0.im(b);
    var d = k0.cD(x9).a37,
        c = k0.cD(x9).a38;
    an = 1E3 * b[0] + b[1];
    ao = 1E3 * b[2] + b[3];
    i6 = document.createElement("canvas");
    i6.width = an;
    i6.height = ao;
    px = i6.getContext("2d", {
        alpha: !1
    });
    xK = px.getImageData(0, 0, an, ao);
    xL = xK.data;
    for (var f = b.length, e = !0, h = 0, g = 4; g < f; g++)
        if (e) {
            for (; 0 < b[g]--;) xL[h] = c[0], xL[h + 1] = c[1], xL[h + 2] = c[2], xL[h + 3] = 255, h += 4;
            e = !1
        } else {
            for (; 0 < b[g]--;) xL[h] = d[0], xL[h + 1] = d[1], xL[h + 2] = d[2], xL[h + 3] = 255, h += 4;
            e = !0
        } px.putImageData(xK, 0, 0);
    vt = !0;
    a2t(a);
    xN.c3();
    cI.cJ = !0
}

function kf() {
    var a;
    this.c3 = function() {
        a = Array(zj);
        a[0] = {
            name: "White Arena",
            cF: 230,
            dA: 230,
            gc: 1E3,
            gZ: 2E3,
            a1t: 173,
            per: 1
        };
        a[1] = {
            name: "Black Arena",
            cF: 800,
            dA: 800,
            gc: 100,
            gZ: 50,
            a1t: 43,
            per: 1
        };
        a[2] = {
            name: "Island",
            cF: 512,
            dA: 512,
            gc: 128,
            gZ: 32,
            a1t: 0,
            per: 1.5
        };
        a[3] = {
            name: "Mountains",
            cF: 960,
            dA: 960,
            gc: 60,
            gZ: 8,
            a1t: 0,
            per: 1.2
        };
        a[4] = {
            name: "Desert",
            cF: 900,
            dA: 900,
            gc: 100,
            gZ: 5,
            a1t: 0,
            per: 1.2
        };
        a[5] = {
            name: "Swamp",
            cF: 1E3,
            dA: 1E3,
            gc: 100,
            gZ: 40,
            a1t: 0,
            per: 1.2
        };
        a[6] = {
            name: "Snow",
            cF: 1E3,
            dA: 1E3,
            gc: 100,
            gZ: 20,
            a1t: 0,
            per: 1.2
        };
        a[7] = {
            name: "Cliffs",
            cF: 1024,
            dA: 1024,
            gc: 128,
            gZ: 32,
            a1t: 0,
            per: 1.5
        };
        a[8] = {
            name: "Pond",
            cF: 820,
            dA: 820,
            gc: 200,
            gZ: 100,
            a1t: 0,
            per: 1.2
        };
        a[9] = {
            name: "Halo",
            cF: 1024,
            dA: 1024,
            gc: 128,
            gZ: 32,
            a1t: 0,
            per: 1.5
        };
        a[10] = {
            name: "Europe",
            a37: [140, 130, 120],
            a38: [12, 12, 76],
            a39: [240, 120, 4672, 30, 26, 30, 90, 8, 32, 3, 9],
            per: 1
        };
        a[11] = {
            name: "World",
            a37: [165, 145, 125],
            a38: [15, 15, 69],
            a39: [250, 100, 8, 25, 15, 25, 90, 8, 32, 3, 9],
            per: 1
        };
        a[12] = {
            name: "Caucasia",
            a37: [140, 130, 120],
            a38: [20, 20, 84],
            a39: [240, 120, 100, 30, 25, 30, 90, 8, 32, 3, 9],
            per: 1
        };
        a[13] = {
            name: "USA 48",
            a37: [120, 105,
                92
            ],
            a38: [12, 12, 60],
            a39: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
            per: 1
        };
        a[14] = {
            name: "Middle East",
            a37: [140, 130, 120],
            a38: [12, 12, 76],
            a39: [240, 120, 4672, 30, 26, 30, 90, 8, 32, 3, 9],
            per: 1
        }
    };
    this.a3c = function() {
        return 1 === x9
    };
    this.cD = function(b) {
        return a[b]
    };
    this.nR = function() {
        return x9 === zj ? e5.zg : this.cD(x9).name
    }
}
var i7, uB, jk, jl;

function jd() {
    void 0 === i7 && (i7 = document.createElement("canvas"));
    i7.width = an;
    i7.height = ao;
    jk = i7.getContext("2d", {
        alpha: !0
    });
    jl = jk.getImageData(0, 0, an, ao);
    uB = jl.data
}

function kg() {
    function a(C, E, A) {
        m[0] = C;
        for (C = 1; C < A; C++) m[C] = m[C - 1] + E, 1E4 <= m[C] ? (m[C] = 9999, E = -E) : 0 > m[C] ? (m[C] = 0, E = -E) : (E += 16384 <= cs.random() ? l : -l, E = E < -k ? -k : E > k ? k : E)
    }

    function b(C, E, A, F) {
        if (A)
            for (A = 0; A < F; A++) f[E * e + C + A] = m[A];
        else
            for (A = 0; A < F; A++) f[E * e + C + A * e] = m[A]
    }

    function d(C, E) {
        var A = C - m[E - 1];
        if (0 !== A) {
            var F = 1 + b6(Math.abs(A), E - 1);
            F = 0 > A ? -F : F;
            m[E - 1] = C;
            var J = E - 1 - b6(Math.abs(A), Math.abs(F));
            J = 1 > J ? 1 : J > E - 2 ? E - 2 : J;
            for (var K = E - 2; K >= J; K--) m[K] += A - (E - 1 - K) * F;
            if (0 > A)
                for (A = E - 2; 1 <= A; A--) 0 > m[A] && (m[A] = -m[A] - 1);
            else
                for (A =
                    E - 2; 1 <= A; A--) 1E4 <= m[A] && (m[A] = 2E4 - m[A] - 1)
        }
    }

    function c(C) {
        for (var E = 0; E < C.length - 1; E++) C[E] = C[E + 1] - C[E];
        C[C.length - 1] = C[C.length - 3]
    }
    var f, e, h, g, k, l, m, u, y, z, G, B, n, D;
    this.jh = function(C) {
        e = C[0];
        h = C[1];
        k = C[2];
        l = C[3];
        f = new Int16Array(e * h);
        g = e > h ? e : h;
        m = new Int16Array(g);
        u = [];
        y = [];
        z = [];
        G = Array(e);
        B = Array(h);
        for (C = e - 1; 0 <= C; C--) G[C] = !1;
        for (C = h - 1; 0 <= C; C--) B[C] = !1;
        n = new Int16Array(e);
        D = new Int16Array(h);
        C = g;
        var E = cs.random() % 1E4,
            A = cs.random() % (2 * k + 1) - k;
        a(E, A, C);
        C = D;
        E = m;
        A = h;
        for (var F = 0; F < A; F++) C[F] = E[F];
        b(0, 0,
            !0, e);
        C = f[0];
        E = g;
        A = cs.random() % (2 * k + 1) - k;
        a(C, A, E);
        C = n;
        E = m;
        A = e;
        for (F = 0; F < A; F++) C[F] = E[F];
        b(0, 0, !1, h);
        c(n);
        c(D);
        a(f[e - 1], n[e - 1], h);
        b(e - 1, 0, !1, h);
        a(f[e * (h - 1)], D[h - 1], e);
        d(f[e * h - 1], e);
        b(0, h - 1, !0, e);
        G[e - 1] = G[0] = !0;
        B[h - 1] = B[0] = !0;
        C = e;
        u.push(0);
        y.push(C);
        z.push(!0);
        C = h;
        u.push(0);
        y.push(C);
        z.push(!1);
        a: for (;;) {
            C = u.length - 1;
            for (E = C - 1; 0 <= E; E--) y[E] > y[C] && (C = E);
            if (5 > y[C]) break a;
            E = u[C] + b6(y[C], 2);
            if (z[C]) {
                A = void 0;
                var J;
                F = E;
                for (var K = 0, I = 0; I < h - 1;) {
                    for (J = K + 1; J < h; J++)
                        if (B[J]) {
                            I = J;
                            break
                        } J = I - K + 1;
                    a(f[F + e * K], 0 ===
                        K ? n[F] : m[A - 1] - m[A - 2], J);
                    d(f[I * e + F], J);
                    b(F, K, !1, J);
                    A = J;
                    K = I
                }
                G[F] = !0
            } else {
                A = void 0;
                F = E;
                for (I = K = 0; I < e - 1;) {
                    for (J = K + 1; J < e; J++)
                        if (G[J]) {
                            I = J;
                            break
                        } J = I - K + 1;
                    a(f[F * e + K], 0 === K ? D[F] : m[A - 1] - m[A - 2], J);
                    d(f[F * e + I], J);
                    b(K, F, !0, J);
                    A = J;
                    K = I
                }
                B[F] = !0
            }
            A = u[C] + y[C] - E;
            F = z[C];
            u.push(E);
            y.push(A);
            z.push(F);
            y[C] = E - u[C] + 1
        }
        for (C = 0; C < e; C++)
            if (!G[C])
                for (E = 0; E < h; E++) B[E] || (A = f[E * e + C - 1] + f[(E - 1) * e + C], F = 2, G[C + 1] && (F++, A += f[E * e + C + 1]), B[E + 1] && (F++, A += f[(E + 1) * e + C]), f[E * e + C] = b6(A, F))
    };
    this.a3B = function() {
        return f
    };
    this.a2s = function() {
        f = null
    }
}

function b6(a, b) {
    return Math.floor(a / b + 1 / (2 * b))
}

function ym(a, b) {
    return 0 <= a ? b6(a, b) : -b6(-a, b)
}

function dJ(a) {
    return a * a
}

function mq(a, b) {
    return a > b ? a : b
}

function qz(a, b) {
    return a < b ? a : b
}

function tJ(a, b, d) {
    return b < a ? a : b > d ? d : b
}

function a4Q(a, b) {
    for (var d = b6(a + 1, 2), c = 0; c < b; c++) d = b6(d + b6(a, d), 2);
    return d
}

function bz(a, b) {
    return 1 > a ? 0 : a4Q(a, b)
}

function a4R(a, b, d, c, f, e, h, g) {
    return !(a + d <= f || b + c <= e || a >= f + h || b >= e + g)
}

function a4S(a, b, d, c, f, e, h, g) {
    return a <= f && b <= e && a + d >= f + h && b + c >= e + g
}

function ky() {
    function a() {
        vy.ux[2] = vy.ux[3] = vy.ux[4] = !k7.a4T;
        var g = k7.a1Z ? 1 : 0,
            k = k7.a4T ? 1 : 0,
            l = k7.a0u ? 1 : 0;
        p ? (window.webkit.messageHandlers.iosCommandA.postMessage("freeSpawn " + g), window.webkit.messageHandlers.iosCommandA.postMessage("unlimitedTime " + k)) : 5 <= r ? (s.saveNumber(25, g), s.saveNumber(26, k)) : (t.aB(6, 4 * l + 2 * k + g), t.aC())
    }

    function b(g, k, l, m) {
        if (0 === m) return g >= l.fL && (0 === m || k >= l.fM) && k <= l.fM + l.nd;
        k -= m * (l.nd - 2);
        return g >= l.fN && (0 === m || k >= l.fM) && k <= l.fM + l.nd
    }

    function d() {
        var g = Math.floor((a4 ? .145 :
                .09) * c4),
            k = Math.floor(1.5 * g),
            l = Math.floor(.065 * (a4 ? .53 : .36) * c4);
        return {
            fL: a5 - g - l,
            fM: cO,
            iI: g,
            nd: Math.floor(.35 * g),
            fN: a5 - k - l,
            iJ: k
        }
    }

    function c(g, k, l, m, u, y, z, G, B, n) {
        n = Math.floor(n * m);
        cV.font = c7 + n + c8;
        G && (u += 80, y += 80, z += 80);
        cV.fillStyle = "rgba(" + u + "," + y + "," + z + ",0.6)";
        cV.fillRect(g, k, l, m);
        cV.fillStyle = cY;
        cV.fillRect(g, k, l, 2);
        cV.fillRect(g, k + m - 2, l, 2);
        cV.fillRect(g, k, 2, m);
        cV.fillRect(g + l - 2, k, 2, m);
        cV.fillText(B, Math.floor(g + l / 2), Math.floor(k + m / 2 + .1 * n))
    }
    this.y1 = 1;
    this.a0u = this.a4T = this.a1Z = !1;
    var f = -1,
        e = !1,
        h = [];
    this.c3 = function() {
        h = [];
        h.push({
            name: "More",
            id: 0,
            fP: 140,
            nI: 120,
            d0: 0
        });
        h.push({
            name: "Lobby 1",
            id: 1,
            fP: 0,
            nI: 0,
            d0: 0
        });
        h.push({
            name: "Hide Usernames",
            id: 2,
            fP: 0,
            nI: 0,
            d0: 0
        });
        h.push({
            name: "Hide Links",
            id: 3,
            fP: 0,
            nI: 0,
            d0: 0
        });
        !p && 5 > r && h.push({
            name: "High Resolution",
            id: 4,
            fP: 0,
            nI: 0,
            d0: 0
        });
        h.push({
            name: "Tutorial",
            id: 5,
            fP: 0,
            nI: 0,
            d0: 0
        });
        h.push({
            name: "Player List",
            id: 6,
            fP: 0,
            nI: 0,
            d0: 0
        });
        h.push({
            name: "Clan List",
            id: 7,
            fP: 0,
            nI: 0,
            d0: 0
        });
        h.push({
            name: "Privacy Policy",
            id: 8,
            fP: 0,
            nI: 0,
            d0: 0
        });
        !p && 5 > r && h.push({
            name: "Cookie Policy",
            id: 9,
            fP: 0,
            nI: 0,
            d0: 0
        });
        h.push({
            name: a2C,
            id: 10,
            fP: 90,
            nI: 0,
            d0: 0
        });
        if (p) this.a1Z = q.freeSpawn, this.a4T = q.unlimitedTime, this.a0u = !1;
        else if (5 <= r) this.a1Z = 1 === s.loadNumber(25), this.a4T = 1 === s.loadNumber(26), this.a0u = !1;
        else {
            var g = t.u(6);
            this.a1Z = 1 === (g & 1);
            this.a4T = 2 === (g & 2);
            this.a0u = 4 === (g & 4)
        }
        h[2].nI = this.a1Z ? 130 : 0;
        h[3].nI = this.a4T ? 130 : 0;
        !p && 5 > r && (h[4].nI = this.a0u ? 130 : 0);
        this.a4T && (vy.ux[2] = vy.ux[3] = vy.ux[4] = !1)
    };
    this.cL = function(g, k) {
        var l;
        if (!(7 <= aX.pm())) {
            var m = d();
            if (e) {
                for (l = 1; l < h.length; l++)
                    if (b(g,
                            k, m, l)) return 1 === h[l].id ? (k7.y1 = 1 === k7.y1 ? 2 : 2 === k7.y1 ? eR.wT : 1, h[1].name = "Lobby " + (k7.y1 === eR.wT ? "1B" : k7.y1), cI.cJ = !0) : 2 === h[l].id ? (k7.a1Z = !k7.a1Z, h[l].nI = k7.a1Z ? 130 : 0, a(), cI.cJ = !0) : 3 === h[l].id ? (k7.a4T = !k7.a4T, h[l].nI = k7.a4T ? 130 : 0, a(), cI.cJ = !0) : 4 === h[l].id ? (k7.a0u = !k7.a0u, h[l].nI = k7.a0u ? 130 : 0, a(), k4.xo(), cI.cJ = !0) : 5 === h[l].id ? (ni.c3(p7, !0), ni.c3(p7, !1)) : 6 === h[l].id ? (ni.c3(p8[0], !0), ni.c3(p8[0], !1)) : 7 === h[l].id ? (ni.c3(p8[1], !0), ni.c3(p8[1], !1)) : 8 === h[l].id ? (12 <= r && s.setState(7), ni.c3(p6, !0), ni.c3(p6,
                        !1)) : 9 === h[l].id && (ni.c3(nj, !0), ni.c3(nj, !1)), !0;
                e = !1;
                cI.cJ = !0;
                return !1
            }
            return b(g, k, m, 0) ? (e = !0, cI.cJ = !0) : !1
        }
    };
    this.m0 = function(g, k) {
        var l;
        if (!(7 <= aX.pm())) {
            var m = d();
            var u = f;
            var y = e ? h.length - 1 : 1;
            f = -1;
            for (l = 0; l < y; l++)
                if (b(g, k, m, l)) {
                    f = l;
                    break
                } u !== f && (cI.cJ = !0)
        }
    };
    this.cU = function() {
        var g;
        if (!(7 <= aX.pm())) {
            var k = d();
            cV.textAlign = cX;
            cV.textBaseline = cW;
            c(k.fL, k.fM, k.iI, k.nd, h[0].fP, h[0].nI, h[0].d0, 0 === f, h[0].name, .6);
            if (e) {
                var l = h.length;
                for (g = 1; g < l; g++) c(k.fN, k.fM + g * k.nd - 2 * g, k.iJ, k.nd, h[g].fP, h[g].nI,
                    h[g].d0, f === g, h[g].name, g === l - 1 ? .32 : .45)
            }
        }
    }
}

function kh() {
    function a() {
        d = !0;
        c = -1;
        f = Array(4);
        for (var g = 3; 0 <= g; g--) f[g] = !1;
        g = Math.floor(1 + .02 * pW);
        e = Array(4);
        h = Array(4);
        h[1] = h[3] = e[0] = e[2] = 0;
        h[0] = e[3] = -g;
        e[1] = h[2] = g
    }

    function b() {
        if (-1 !== c)
            if (0 !== fn && ej.hE()) {
                for (var g = !1, k = 3; 0 <= k; k--) f[k] && (g = !0, gQ += e[k], gR += h[k], eO.m0(e[k], h[k]), gx.rW());
                g ? cI.cJ = !0 : h1.h2()
            } else h1.h2()
    }
    var d = !1,
        c, f, e, h;
    this.wH = function(g) {
        0 !== fn && ej.hE() && (d || a(), f[g] = !0, -1 === c && (c = setInterval(b, 20), b()))
    };
    this.a2e = function(g) {
        if (0 !== fn && (d || a(), f[g] = !1, -1 !== c)) {
            g = !1;
            for (var k =
                    3; 0 <= k; k--) g = g || f[k];
            g || this.h2()
        }
    };
    this.h2 = function() {
        if (d && -1 !== c) {
            for (var g = 3; 0 <= g; g--) f[g] = !1;
            clearInterval(c);
            c = -1
        }
    }
}

function ki() {
    var a;
    this.fE = function() {
        return a
    };
    this.d2 = function(b, d) {
        var c;
        if (0 === bb[b].length || !bJ.bK(d) || !bJ.bU(d) && bJ.bT(d) === b) return !1;
        for (c = 21; 0 <= c; c--) {
            if (21 === c) {
                var f = bb[b],
                    e = d,
                    h = bJ.gT(e);
                e = bJ.cT(e);
                var g = 0;
                var k = bJ.gT(f[0]);
                var l = bJ.cT(f[0]);
                k = Math.abs(k - h) + Math.abs(l - e);
                for (l = f.length - 1; 1 <= l; l--) {
                    var m = bJ.gT(f[l]);
                    var u = bJ.cT(f[l]);
                    m = Math.abs(m - h) + Math.abs(u - e);
                    m < k && (k = m, g = l)
                }
                a = f[g]
            } else a = bb[b][b6(c * bb[b].length, 21)];
            a: {
                l = a;g = d;f = bJ.gT(l);h = bJ.cT(l);e = bJ.gT(g);g = bJ.cT(g);k = Math.abs(e -
                    f) + Math.abs(g - h);
                if (!(2 > k))
                    for (m = l, l = 0; l < k; l++)
                        if (m = Math.abs(e - bJ.gT(m)) >= Math.abs(g - bJ.cT(m)) ? m + aj[e > f ? 1 : 3] : m + aj[g > h ? 2 : 0], !bJ.yr(m)) {
                            if (bJ.bK(m)) {
                                if (0 === l || l + 20 < k) break;
                                f = !0;
                                break a
                            }
                            break
                        } f = !1
            }
            if (f) return !0
        }
        return !1
    }
}

function a2a() {
    function a() {
        var l, m = 0,
            u = 0,
            y = Math.floor(f / 2),
            z = Math.floor(e / 2),
            G = 1.5 * Math.PI;
        for (l = jR; 0 <= l; l--) u += k[l], 0 === k[l] && m++;
        d = !1;
        g.clearRect(0, 0, f, f);
        g.fillStyle = iC;
        g.fillRect(0, 0, f, f);
        g.fillStyle = oV;
        g.fillRect(0, 0, f, 2);
        g.fillRect(0, 0, 2, f);
        g.fillRect(f - 2, 0, 2, f);
        g.fillRect(0, f - 2, f, 2);
        if (0 < u)
            if (m === jR)
                for (l = jR; 0 <= l; l--) {
                    if (0 < k[l]) {
                        u = y;
                        G = z;
                        g.fillStyle = dk.x1[dk.j1[l]];
                        g.beginPath();
                        g.arc(u, u, G, 0, 2 * Math.PI);
                        g.fill();
                        break
                    }
                } else {
                    for (l = 0; l <= jR; l++)
                        if (0 < k[l]) {
                            m = G + 2 * Math.PI * k[l] / u;
                            var B = y,
                                n = z,
                                D = G,
                                C = m;
                            g.fillStyle = dk.x1[dk.j1[l]];
                            g.beginPath();
                            g.arc(B, B, n, D, C);
                            g.lineTo(B, B);
                            g.fill();
                            0 !== l && b(y, z, G);
                            G = m
                        } b(y, z, 1.5 * Math.PI)
                }
        g.beginPath();
        g.arc(y, y, z, 0, 2 * Math.PI);
        g.stroke()
    }

    function b(l, m, u) {
        g.beginPath();
        g.moveTo(l, l);
        g.lineTo(l + Math.cos(u) * m, l + Math.cos(u + 1.5 * Math.PI) * m);
        g.stroke()
    }
    var d = !1,
        c = 0,
        f = 0,
        e = 0,
        h = null,
        g = null,
        k = null;
    this.c3 = function() {
        if (dO) {
            c = 16;
            k = new Uint32Array(jR + 1);
            for (var l = jR; 0 < l; l--) k[l] = 1;
            this.m9()
        } else k = g = h = null
    };
    this.qf = function() {
        return f
    };
    this.m9 = function() {
        dO && (f = Math.floor(.18 *
            pW), f += f % 2, e = Math.floor(7 * f / 8), h = h ? h : document.createElement("canvas"), h.width = f, h.height = f, g = h.getContext("2d", {
            alpha: !0
        }), g.lineWidth = 2, g.strokeStyle = cY, a())
    };
    this.r0 = function() {
        return k[this.nA()]
    };
    this.iz = function() {
        c = 31;
        this.dT();
        return this.nA()
    };
    this.nA = function() {
        for (var l = 0, m = jR; 0 < m; m--) k[m] > k[l] && (l = m);
        return l
    };
    this.dT = function() {
        if (dO && 32 <= ++c) {
            c = 0;
            var l;
            for (l = jR; 0 <= l; l--) k[l] = 0;
            for (l = dm - 1; 0 <= l; l--) k[dk.dl[dn[l]]] += bi[dn[l]];
            d = !0
        }
    };
    this.c9 = function() {
        dO && d && a()
    };
    this.cU = function() {
        dO &&
            cV.drawImage(h, mJ, qg + 2 * mJ)
    }
}

function kj() {
    var a, b;
    this.c3 = function() {
        b = Array(101);
        for (var d = b.length - 1; 0 <= d; d--) b[d] = b6(32768 * d, 100);
        this.jb(0)
    };
    this.value = function(d) {
        return b[d]
    };
    this.a1b = function() {
        return b6(a - 1, 2)
    };
    this.jb = function(d) {
        a = 2 * d % 32768 + 1
    };
    this.random = function() {
        return a = 167 * a % 32768
    };
    this.ct = function(d) {
        return b6(d * this.random(), 32768)
    };
    this.dd = function(d) {
        return 0 !== d && this.random() < this.value(d)
    }
}

function kq() {
    function a() {
        (500 <= h || 5 < e) && b()
    }

    function b() {
        e = 0;
        h += 700 > h ? 200 : 0;
        cA.cB() && (c() || f) && (f = !1, pG(), uc.c3(), jv.c3(), jy.m9(), vy.c3(), jw.m9(), ju.m9(), jt.m9(), vq.m9(), cR.m9(), aJ.c3(), 1 <= fn ? (ea.m9(!1), ec.m9(), eP.m9(), gx.m9(), ef.m9(), eN.m9(), g4.m9(), eg.m9(), ed.m9(), cG.m9(), i8.lF(), i9.m9(), eO.m9(), ek.m9(), eh.m9(), gx.rW()) : (0 === aX.pm() ? jy.cS(0, !0) : 2 === aX.pm() ? eC.m9() : 3 === aX.pm() && jx.m9(), aX.vu(), aX.vz()), cI.cJ = !0)
    }

    function d(g) {
        return g && 128 < g ? Math.floor(g) : 128
    }

    function c() {
        if (5 <= r) {
            var g = d(document.documentElement.clientWidth);
            var k = d(document.documentElement.clientHeight);
            pa = 1;
            if (g !== gS || k !== cP) {
                gS = g;
                cP = k;
                a5 = gS;
                a6 = cP;
                pW = qz(a5, a6);
                c4 = b6(a6 + a5, 2);
                if (5 <= r) {
                    var l = s.loadNumber(23);
                    var m = s.loadNumber(24);
                    g > l && (l = g, s.saveNumber(23, l));
                    k > m && (m = k, s.saveNumber(24, m))
                } else l = g, m = k;
                g = pJ.width;
                k = pJ.height;
                l > g && (g = l, pJ.width = l);
                m > k && (k = m, pJ.height = m);
                pJ.style.width = g + "px";
                pJ.style.height = k + "px";
                l = !0
            } else l = !1;
            return l
        }
        k7.a0u ? (pa = window.devicePixelRatio) || (pa = 1) : pa = 1;
        l = d(document.documentElement.clientWidth);
        m = d(document.documentElement.clientHeight);
        g = Math.floor(.5 + pa * l);
        k = Math.floor(.5 + pa * m);
        if (g === gS && k === cP) return !1;
        gS = a5 = g;
        cP = a6 = k;
        pW = qz(a5, a6);
        c4 = b6(a6 + a5, 2);
        pJ.width = g;
        pJ.height = k;
        pJ.style.width = l + "px";
        pJ.style.height = m + "px";
        return !0
    }
    var f = !1,
        e, h;
    this.c3 = function() {
        e = 1;
        h = 100;
        a5 = a6 = pW = gS = cP = c4 = 0;
        pa = 1;
        pJ = document.getElementById("canvasA");
        cV = pJ.getContext("2d", {
            alpha: !1
        });
        cV.imageSmoothingEnabled = !1;
        c();
        window.addEventListener("resize", a)
    };
    this.dT = function() {
        k8.dT();
        ++e >= h && b()
    };
    this.xo = function() {
        f = !0;
        500 <= h && b()
    }
}

function kk() {
    function a(z) {
        eY.b9(d, y);
        as.bG(d, u);
        z && (bB[d] += c)
    }

    function b() {
        bJ.yt(f, d) && bJ.yv(f)
    }
    var d, c, f, e, h, g, k, l, m, u, y;
    this.dT = function(z, G, B, n, D) {
        m = z;
        y = G;
        d = B;
        h = bJ.gT(n);
        g = bJ.cT(n);
        k = bJ.gT(D);
        l = bJ.cT(D);
        e = f = bJ.fF(h, g);
        u = as.fj(d, y); - 1 === u ? (b(), eY.b9(d, y), z = !1) : (c = as.b0(d, u), z = !0);
        if (z && (b(), z = b6(c, 128), z = 1 > z ? 1 : z, c -= z, d === bA && (bE.bF[15] += z), c <= b7 ? (d === bA && (bE.bF[15] += c), a(!1), z = !1) : (as.bh(d, u, c), z = !0), z))
            if (z = bJ.fF(h, g), f = Math.abs(k - h) >= Math.abs(l - g) ? z + aj[k > h ? 1 : 3] : z + aj[l > g ? 2 : 0], h = bJ.gT(f), g = bJ.cT(f),
                eY.gE(m, f), z = bJ.bK(f) ? !1 : !0, z) bJ.yr(f) && bJ.yy(f, d);
            else a: {
                if (bJ.bU(f)) z = bM;
                else {
                    z = bJ.bT(f);
                    if (z === d) {
                        a(!0);
                        break a
                    }
                    if (!cv(d, z)) {
                        G = bi[z] * jL - bB[z];
                        0 >= G || (G = c > G ? G : c, c -= G, d === bA && (eN.nM(G, z), bE.bF[16] += G), z === bA && (eN.nO(G, d), bE.bF[10] += G), bB[z] += G);
                        a(!0);
                        break a
                    }
                }
                d === bA && (bE.bF[13] += c);eY.b9(d, y);as.bG(d, u);bI[d].push(e);as.ce(d, c, z);b8.cf(d, !0)
            }
    };
    this.gI = function(z, G) {
        d = z;
        f = bJ.fF(bJ.gT(G), bJ.cT(G));
        b()
    }
}

function kl() {
    var a, b, d, c;
    this.c3 = function() {
        var f, e, h;
        d = !0;
        c = "rgb(" + xL[0] + "," + xL[1] + "," + xL[2] + ")";
        var g = a2x(x9) ? !0 : d = !1;
        if (g) b = null;
        else {
            a = b6(96, 4);
            if (1 === x9) {
                var k = 0;
                var l = 160
            } else k = 128, l = 32;
            c = "rgb(" + k + "," + k + "," + k + ")";
            b = Array(4);
            for (g = 3; 0 <= g; g--) {
                b[g] = document.createElement("canvas");
                var m = 0 === g % 2 ? an : a;
                var u = 0 === g % 2 ? a : ao + 2 * a;
                b[g].width = m;
                b[g].height = u;
                var y = b[g].getContext("2d", {
                    alpha: !1
                });
                var z = y.getImageData(0, 0, m, u);
                var G = z.data;
                if (0 === g % 2)
                    for (e = a - 1; 0 <= e; e--) {
                        var B = l + Math.floor((e + 1) * (k - l) /
                            (a + 1));
                        for (f = m - 1; 0 <= f; f--) {
                            var n = 4 * ((0 === g ? a - e - 1 : e) * m + f);
                            G[n] = B;
                            G[n + 1] = B;
                            G[n + 2] = B;
                            G[n + 3] = 255
                        }
                    } else {
                        for (f = a - 1; 0 <= f; f--)
                            for (B = l + Math.floor((f + 1) * (k - l) / (a + 1)), e = u - 1 - a; e >= a; e--) n = 4 * (e * m + (3 === g ? a - f - 1 : f)), G[n] = B, G[n + 1] = B, G[n + 2] = B, G[n + 3] = 255;
                        for (h = 1; 0 <= h; h--)
                            for (f = a - 1; 0 <= f; f--)
                                for (e = a - 1; 0 <= e; e--) B = (Math.pow(f * f + e * e, .5) + 1) / (a + 1), B = 1 < B ? 1 : B, B = l + Math.floor(B * (k - l)), n = 4 * ((0 === h ? a - e - 1 : e + h * (u - a)) * m + (1 === g ? f : a - f - 1)), G[n] = B, G[n + 1] = B, G[n + 2] = B, G[n + 3] = 255
                    }
                y.putImageData(z, 0, 0)
            }
            px.fillStyle = "rgb(" + l + "," + l + "," + l + ")";
            px.fillRect(0, 0, an, 1);
            px.fillRect(0, ao - 1, an, 1);
            px.fillRect(0, 0, 1, ao);
            px.fillRect(an - 1, 0, 1, ao)
        }
    };
    this.i5 = function() {
        var f = d ? 0 : -a;
        a4S(f, f, an - 2 * f, ao - 2 * f, hC.a5N, hC.a5O, hC.a5P, hC.a5Q) || (cV.fillStyle = c, cV.fillRect(0, 0, gS, cP))
    };
    this.cU = function() {
        d || (a4R(0, -a, an, a, hC.a5N, hC.a5O, hC.a5P, hC.a5Q) && cV.drawImage(b[0], hC.a5R, hC.a5S - a), a4R(an, -a, a, ao + 2 * a, hC.a5N, hC.a5O, hC.a5P, hC.a5Q) && cV.drawImage(b[1], hC.a5R + an, hC.a5S - a), a4R(0, ao, an, a, hC.a5N, hC.a5O, hC.a5P, hC.a5Q) && cV.drawImage(b[2], hC.a5R, hC.a5S + ao), a4R(-a, -a, a,
            ao + 2 * a, hC.a5N, hC.a5O, hC.a5P, hC.a5Q) && cV.drawImage(b[3], hC.a5R - a, hC.a5S - a))
    }
}

function a22() {
    function a() {}

    function b() {
        eR.a23(h, g)
    }

    function d(y) {
        k++;
        1 === k ? m.readAsArrayBuffer(y.data) : l.push(y.data)
    }

    function c() {
        k--;
        k3.a5c(h, new Uint8Array(m.result));
        0 < k && (m.readAsArrayBuffer(l[0]), l.shift())
    }

    function f() {}

    function e(y) {
        eR.a29(h, y)
    }
    var h, g, k, l, m, u;
    this.c3 = function(y, z) {
        h = y;
        g = z;
        k = 0;
        l = [];
        m = new FileReader;
        m.addEventListener("loadend", c);
        var G = pE[0];
        G = h < eR.wT ? G + (eR.a1q[h] + pE[1 + a2J]) : G + (eR.a1q[0] + "/i" + (1 + a2J) + (h - eR.wU) + "/");
        u = new WebSocket(G);
        u.onopen = b;
        u.onmessage = d;
        u.onclose =
            e;
        u.onerror = f
    };
    this.a5X = function() {
        return u.readyState === u.CONNECTING
    };
    this.vW = function() {
        return u.readyState === u.OPEN
    };
    this.a1z = function() {
        return this.a5X() || this.vW()
    };
    this.a20 = function(y) {
        g = y
    };
    this.send = function(y) {
        this.vW() && u.send(y)
    };
    this.close = function(y) {
        this.a1z() && (u.close(y), this.lT())
    };
    this.lT = function() {
        u.onopen = a;
        u.onmessage = a;
        u.onclose = a;
        u.onerror = a;
        m.removeEventListener("loadend", c)
    }
}

function a2W() {
    this.cj = 501;
    this.a5d = new Uint32Array(this.cj);
    this.sK = new Uint32Array(this.cj);
    this.th = new Uint16Array(this.cj);
    this.mI = 0;
    this.a5e = 1;
    this.dj = 0;
    this.max = [0, 0, 0];
    this.bF = 0;
    this.a5f = "Avg. Attack Strength;Number Attacks;Ships sent;Bots conquered;Humans conquered;Attacked by Bots;Attacked by Humans;Territorial Loss;Territorial Income;Interest Income;Received Support;Overall Income;Commanding Costs;Attack Losses;Defense Losses;Shipping Losses;Transmitted Support;Overall Expenses".split(";");
    this.c3 = function() {
        this.mI = 0;
        this.a5e = 1;
        this.dj = 0;
        this.a5g();
        this.a5h()
    };
    this.dT = function() {
        0 < this.dj-- || this.a5i()
    };
    this.a5i = function() {
        0 !== fT[bA] && (this.a5d[this.mI] = bi[bA], this.sK[this.mI] = bB[bA], this.th[this.mI] = bC.ti(bA), this.a5j(this.mI), this.mI++, this.mI === this.cj && this.a5k(), this.dj = this.a5e - 1, i9.c9())
    };
    this.a5k = function() {
        this.a5g();
        this.a5j(0);
        this.mI = 1 + b6(this.cj, 2);
        for (var a = 1; a < this.mI; a++) this.a5d[a] = this.a5d[2 * a], this.sK[a] = this.sK[2 * a], this.th[a] = this.th[2 * a], this.a5j(a);
        this.a5e *=
            2
    };
    this.a5g = function() {
        this.max[0] = this.max[1] = this.max[2] = 0
    };
    this.a5h = function() {
        this.bF = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
    this.a5j = function(a) {
        this.max[0] = this.a5d[a] > this.max[0] ? this.a5d[a] : this.max[0];
        this.max[1] = this.sK[a] > this.max[1] ? this.sK[a] : this.max[1];
        this.max[2] = this.th[a] > this.max[2] ? this.th[a] : this.max[2]
    }
}

function a2X() {
    this.c6 = this.qW = this.a5m = this.a5l = this.xX = this.ne = this.nd = this.uh = this.ug = this.iJ = this.iI = this.dA = this.cF = 0;
    this.m5 = ["Territory", "Balance", "Interest", "Numbers"];
    this.lQ = !1;
    this.a5n = -1;
    this.a5o = !1;
    this.a5p = [0, 0];
    this.c3 = function() {
        this.lQ = !1;
        this.a5n = -1;
        this.a5o = !1;
        this.m9()
    };
    this.m9 = function() {
        this.cF = a5 < 1.618 * a6 ? a5 : 1.618 * a6;
        this.cF = Math.floor((a4 && a5 < a6 ? 1 : a4 ? .8 : a5 < a6 ? .65 : .5) * this.cF);
        this.qW = Math.floor(1 + .006 * this.cF);
        this.cF -= a4 && a5 < a6 ? 2 * mJ + this.qW : 0;
        this.dA = Math.floor(this.cF / 1.618);
        this.iI = Math.floor(1 + .02 * this.cF);
        this.nd = this.iJ = Math.floor(1 + .04 * this.cF);
        this.ne = Math.floor(1 + .075 * this.cF);
        this.a5l = Math.floor(this.cF * (a4 ? .028 : .02));
        this.a5l = 6 > this.a5l ? 6 : this.a5l;
        this.a5m = Math.floor(.028 * this.cF);
        this.a5m = 6 > this.a5m ? 6 : this.a5m;
        this.xX = this.dA - 2 * this.nd - this.ne;
        this.lQ && this.a5q()
    };
    this.cL = function(a, b) {
        if (!this.lQ) return !1;
        var d = a,
            c = b;
        a -= b6(gS - this.cF, 2);
        b -= b6(cP - this.dA, 2);
        if (0 > a || 0 > b || a >= this.cF || b >= this.dA) {
            if (1 < g4.cL(d, c)) return !0;
            this.lT();
            return !0
        }
        if (b < this.dA - this.ne) return this.a5o = !0, this.a5n = (a - 2 * this.iI - this.ug) / this.uh, !0;
        d = Math.floor(a / (this.cF / this.m5.length));
        d = 0 > d ? 0 : d >= this.m5.length ? this.m5.length - 1 : d;
        d !== this.c6 && (this.c6 = d, this.a5q(), cI.cJ = !0);
        return !0
    };
    this.a2c = function() {
        var a = Math.floor((this.a5p[0] + gQ) / gL),
            b = Math.floor((this.a5p[1] + gR) / gL);
        1 > a || 1 > b || a >= an - 1 || b >= ao - 1 || console.log(a + " " + b)
    };
    this.m0 = function(a, b) {
        this.a5p[0] = a;
        this.a5p[1] = b;
        if (this.lQ && this.a5o) {
            a -= b6(gS - this.cF, 2);
            var d = this.a5n;
            this.a5n = (a - 2 * this.iI - this.ug) / this.uh;
            if (0 <= this.a5n && 1 >= this.a5n ||
                0 <= d && 1 >= d) cI.cJ = !0;
            return !0
        }
        return !1
    };
    this.pj = function() {
        this.a5o && (this.a5o = !1)
    };
    this.mE = function() {
        this.lQ ? this.lT() : this.show()
    };
    this.show = function() {
        2 > bE.mI || (this.lQ = !0, this.a5q())
    };
    this.lT = function() {
        this.lQ = !1;
        this.a5n = -1
    };
    this.a5q = function() {
        2 > this.c6 ? this.ug = cG.measureText(ed.gX(bE.max[this.c6]), c7 + this.a5l + c8) : 2 === this.c6 && (this.ug = cG.measureText(eP.nU(6, 2), c7 + this.a5l + c8));
        this.uh = this.cF - 2 * this.iI - this.ug - this.iJ
    };
    this.c9 = function() {
        this.lQ && this.a5q()
    };
    this.cU = function() {
        this.lQ && this.nk()
    };
    this.nk = function() {
        var a = b6(gS - this.cF, 2),
            b = b6(cP - this.dA, 2);
        cV.setTransform(1, 0, 0, 1, a, b);
        cV.fillStyle = iC;
        cV.fillRect(0, 0, this.cF, this.dA);
        this.a5r();
        cV.strokeRect(0, 0, this.cF, this.dA);
        cV.textAlign = ox;
        cV.font = c7 + this.a5l + c8;
        0 === this.c6 ? this.a5s(bE.a5d, a, b) : 1 === this.c6 ? this.a5s(bE.sK, a, b) : 2 === this.c6 ? this.a5t(a, b) : 3 === this.c6 && (this.a5u(a, b), this.a5v(a, b));
        cV.setTransform(1, 0, 0, 1, 0, 0)
    };
    this.a5r = function() {
        cV.lineWidth = this.qW;
        cV.textBaseline = cW;
        cV.textAlign = cX;
        cV.strokeStyle = cY;
        cV.font = c7 + this.a5m +
            c8;
        var a = this.cF / this.m5.length;
        cV.fillStyle = ob;
        cV.fillRect(this.c6 * a, this.dA - this.ne, a, this.ne);
        cV.fillStyle = cY;
        for (var b = this.m5.length - 1; 0 <= b; b--) cV.strokeRect(b * a, this.dA - this.ne, a, this.ne), cV.fillText(this.m5[b], (b + .5) * a, this.dA - .46 * this.ne)
    };
    this.a5s = function(a, b, d) {
        var c = bE.max[this.c6];
        cV.setTransform(1, 0, 0, 1, b + 2 * this.iI + this.ug, d + this.nd);
        cV.lineWidth = 2;
        b = this.xX / Math.sqrt(c);
        cV.beginPath();
        cV.moveTo(this.uh, this.xX - b * Math.sqrt(a[bE.mI - 1]));
        for (d = bE.mI - 2; 0 <= d; d--) cV.lineTo(d * this.uh / (bE.mI -
            1), this.xX - b * Math.sqrt(a[d]));
        cV.stroke();
        a = this.mN(a, b, .5);
        .95 > a && cV.fillText(ed.gX(c), -this.iI, 0);
        .05 < Math.abs(a - .5) && cV.fillText(ed.gX(Math.floor(c / 4)), -this.iI, Math.floor(this.xX / 2));
        .05 < a && cV.fillText("0", -this.iI, this.xX)
    };
    this.a5t = function(a, b) {
        cV.setTransform(1, 0, 0, 1, a + 2 * this.iI + this.ug, b + this.nd);
        cV.lineWidth = 2;
        var d = this.xX / bE.max[this.c6];
        cV.beginPath();
        cV.moveTo(this.uh, this.xX - d * bE.th[bE.mI - 1]);
        for (var c = bE.mI - 2; 0 <= c; c--) cV.lineTo(c * this.uh / (bE.mI - 1), this.xX - d * bE.th[c]);
        cV.stroke();
        d =
            this.mN(bE.th, d, 1);
        c = bE.max[this.c6] / 100;
        .95 > d && cV.fillText(eP.nU(c, 2), -this.iI, 0);
        .05 < Math.abs(d - .5) && cV.fillText(eP.nU(c / 2, 2), -this.iI, Math.floor(this.xX / 2));
        .05 < d && cV.fillText(eP.nU(0, 2), -this.iI, this.xX)
    };
    this.a5u = function(a, b) {
        var d;
        cV.setTransform(1, 0, 0, 1, a + .34 * this.cF, b + 2 * this.nd);
        cV.textAlign = ox;
        var c = this.dA - 4 * this.nd - this.ne;
        for (d = 7; 0 <= d; d--) cV.fillText(bE.a5f[d], 0, d * c / 7);
        cV.setTransform(1, 0, 0, 1, a + .39 * this.cF, b + 2 * this.nd);
        cV.textAlign = mv;
        d = bE.bF[1];
        cV.fillText(eP.nU(bE.bF[0] / (10 * (1 > d ? 1 :
            d)), 1), 0, 0);
        for (d = 6; 1 <= d; d--) cV.fillText(bE.bF[d].toString(), 0, d * c / 7);
        cV.fillText(eP.nU(100 * (1 - bi[bA] / bE.bF[7]), 0), 0, c)
    };
    this.a5v = function(a, b) {
        var d;
        cV.setTransform(1, 0, 0, 1, a + .74 * this.cF, b + 2 * this.nd);
        cV.textAlign = ox;
        var c = this.dA - 4 * this.nd - this.ne;
        cV.fillStyle = oX;
        for (d = 2; 0 <= d; d--) cV.fillText(bE.a5f[d + 8], 0, d * c / 9);
        cV.fillStyle = oW;
        cV.fillText(bE.a5f[11], 0, 3 * c / 9);
        cV.fillStyle = on;
        for (d = 8; 4 <= d; d--) cV.fillText(bE.a5f[d + 8], 0, d * c / 9);
        cV.fillStyle = om;
        cV.fillText(bE.a5f[17], 0, 9 * c / 9);
        cV.fillStyle = oX;
        d = ed.gX(bE.bF[8] +
            bE.bF[9] + bE.bF[10] + bE.bF[11]);
        var f = cV.measureText(d).width;
        cV.setTransform(1, 0, 0, 1, a + .79 * this.cF + f, b + 2 * this.nd);
        cV.fillText(ed.gX(bE.bF[8]), 0, 0);
        cV.fillText(ed.gX(bE.bF[9]), 0, 1 * c / 9);
        cV.fillText(ed.gX(bE.bF[10]), 0, 2 * c / 9);
        cV.fillStyle = oW;
        cV.fillText(d, 0, 3 * c / 9);
        cV.fillStyle = on;
        d = bE.bF[13] - as.a0G(bA);
        cV.fillText(ed.gX(bE.bF[12]), 0, 4 * c / 9);
        cV.fillText(ed.gX(d), 0, 5 * c / 9);
        cV.fillText(ed.gX(bE.bF[14]), 0, 6 * c / 9);
        cV.fillText(ed.gX(bE.bF[15]), 0, 7 * c / 9);
        cV.fillText(ed.gX(bE.bF[16]), 0, 8 * c / 9);
        d = bE.bF[12] + d + bE.bF[14] +
            bE.bF[15] + bE.bF[16] + bE.bF[17];
        cV.fillStyle = om;
        cV.fillText(ed.gX(d), 0, c);
        cV.fillStyle = cY
    };
    this.mN = function(a, b, d) {
        if (0 > this.a5n || 1 < this.a5n) return .25;
        var c = this.a5n * (bE.mI - 1),
            f = Math.floor(c),
            e = a[f];
        e += (c - f) * (a[f < bE.mI - 1 ? f + 1 : f] - e);
        cV.strokeStyle = or;
        .04 < this.a5n && this.a61(0, this.xX - b * Math.pow(e, d), c * this.uh / (bE.mI - 1), this.xX - b * Math.pow(e, d));
        .04 < e / bE.max[this.c6] && this.a61(c * this.uh / (bE.mI - 1), this.xX, c * this.uh / (bE.mI - 1), this.xX - b * Math.pow(e, d));
        cV.fillStyle = oi;
        cV.beginPath();
        cV.arc(c * this.uh / (bE.mI -
            1), this.xX - b * Math.pow(e, d), 4, 0, 2 * Math.PI);
        cV.fill();
        a = this.a5n * cI.tj();
        a = 0 === fT[bA] ? Math.floor(a * ek.tp) : Math.floor(a * cI.di());
        cV.fillStyle = cY;
        cV.fillText(1 === d ? eP.nU(e / 100, 2) : ed.gX(Math.floor(e)), -this.iI, this.xX - b * Math.pow(e, d));
        cV.textAlign = cX;
        cV.fillText(eP.sT(a), c * this.uh / (bE.mI - 1), this.xX + this.a5l - (a4 ? 2 : 0));
        cV.textAlign = ox;
        return b * Math.pow(e, d) / this.xX
    };
    this.a61 = function(a, b, d, c) {
        cV.beginPath();
        cV.moveTo(a, b);
        cV.lineTo(d, c);
        cV.stroke()
    }
}

function a2Z() {
    this.x1 = "rgba(130,130,130,0.88) rgba(130,12,12,0.88) rgba(12,130,12,0.88) rgba(12,12,130,0.88) rgba(130,130,12,0.88) rgba(130,12,130,0.88) rgba(12,130,130,0.88) rgba(130,130,130,0.88) rgba(0,0,0,0.88)".split(" ");
    this.t6 = [cY, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(240,25,240)", "rgb(25,240,240)", cY, "rgb(170,170,170)"];
    this.a62 = [cY, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", cY, gV];
    this.a63 = [gV, cY,
        cY, cY, gV, gV, gV, gV, cY
    ];
    this.a1E = ["rgba(255,255,255,", "rgba(0,0,0,", "rgba(170,170,170,", "rgba(85,85,85,"];
    this.a1F = ["rgb(255,255,255)", "rgb(0,0,0)", "rgb(170,170,170)", "rgb(85,85,85)"];
    this.c2 = "White Red Green Blue Yellow Magenta Cyan White Black".split(" ");
    this.tx = [
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
    var a = [
        [255, 255, 255],
        [255, 0, 0],
        [0, 255, 0],
        [0, 0, 255],
        [255, 255, 0],
        [255, 0, 255],
        [0, 255, 255],
        [255, 255,
            255
        ],
        [0, 0, 0]
    ];
    this.j1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var b, d;
    this.c3 = function(c) {
        this.dl = new Uint8Array(bM);
        this.a69();
        dO && (e5.e6 && e5.e7.a01 ? this.ye() : 9 === e9 ? this.a6A() : this.dT(c))
    };
    this.ye = function() {
        var c, f = ha;
        this.j1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        for (c = 0; c < f; c++) this.dl[c] = e5.e7.a01[c]
    };
    this.a69 = function() {
        for (var c = this.j1.length - 1; 0 <= c; c--) this.j1[c] = c;
        b = [];
        d = []
    };
    this.a6A = function() {
        var c;
        for (c = d4 + eG.eH - 1; 0 <= c; c--) this.dl[c] = 1;
        for (c = d4 + eG.eH; c < bM; c++) this.dl[c] = 2;
        this.j1[1] = 7;
        this.j1[2] = 8
    };
    this.dT = function(c) {
        var f =
            new Uint8Array(d4),
            e = new Uint8Array(d4),
            h = new Uint16Array(8),
            g = new Uint16Array(this.j1.length);
        this.a6E(c, f, e, h);
        this.yc(h);
        eB || this.a6F(g, f, e);
        this.a6G(f, e, g);
        eB ? this.a6H() : this.a6I()
    };
    this.a6E = function(c, f, e, h) {
        var g, k, l = this.j1.length - 1,
            m = new Uint16Array(l);
        for (g = d4 - 1; 0 <= g; g--) {
            for (k = l; 1 <= k; k--) m[k - 1] = Math.abs(4 * c[g].xg[0] - a[k][0]) + Math.abs(4 * c[g].xg[1] - a[k][1]) + Math.abs(4 * c[g].xg[2] - a[k][2]);
            var u = 768;
            for (k = l - 1; 0 <= k; k--) {
                var y = (k + g) % l;
                m[y] < u && (u = m[y], f[g] = y)
            }
            h[f[g]] += 4;
            u = 768;
            for (k = l - 1; 0 <= k; k--) y =
                (k + g) % l, m[y] < u && y !== f[g] && (u = m[y], e[g] = y);
            h[e[g]]++
        }
    };
    this.yc = function(c) {
        var f, e, h = this.j1.length - 1;
        for (f = h; 0 <= f; f--) this.j1[f] = f;
        for (f = h - 1; 0 <= f; f--) c[f]++;
        for (f = 1; f <= h; f++) {
            var g = 0;
            for (e = 1; e < h; e++) c[e] > c[g] && (g = e);
            c[g] = 0;
            this.j1[f] = g + 1
        }
    };
    this.a6F = function(c, f, e) {
        var h = this.j1.length - 1,
            g = new Uint16Array(h),
            k = [];
        var l = d4 - 1;
        a: for (; 0 <= l; l--) {
            var m = l;
            var u = a1a[m].indexOf("[");
            if (0 > u) u = null;
            else {
                var y = a1a[m].indexOf("]");
                u = 1 < y - u && 8 >= y - u ? a1a[m].substring(u + 1, y).toUpperCase().trim() : null
            }
            if (null !== u) {
                for (y =
                    b.length - 1; 0 <= y; y--)
                    if (u === b[y]) {
                        d[y].push(l);
                        continue a
                    } b.push(u);
                k.push(!1);
                d.push([]);
                d[b.length - 1].push(l)
            }
        }
        for (y = b.length - 1; 0 <= y; y--) {
            m = -1;
            for (u = b.length - 1; 0 <= u; u--) !k[u] && (-1 === m || d[u].length > d[m].length) && (m = u);
            for (u = h - 1; 0 <= u; u--) g[u] = 1;
            for (u = d[m].length - 1; 0 <= u; u--) g[f[d[m][u]]] += 3, g[e[d[m][u]]]++;
            for (l = h - 1; 0 <= l; l--) {
                var z = m % h;
                for (u = h - 1; 0 <= u; u--) g[u] > g[z] && (z = u);
                var G = -1;
                for (u = jR; 0 < u; u--)
                    if (this.j1[u] === z + 1) {
                        G = u;
                        break
                    } g[z] = 0;
                if (-1 !== G) {
                    z = 0;
                    for (u = jR; 0 < u; u--) c[G] > c[u] && z++;
                    if (z !== jR - 1) {
                        for (u =
                            d[m].length - 1; 0 <= u; u--) c[G]++, this.dl[d[m][u]] = G;
                        break
                    }
                }
            }
            k[m] = !0
        }
    };
    this.a6G = function(c, f, e) {
        var h;
        var g = this.j1.length - 1;
        var k = b6(d4, jR);
        0 < d4 % jR && k++;
        var l = new Uint8Array(g + 1);
        for (h = g; 1 <= h; h--) l[this.j1[h]] = h;
        for (g = 0; g < d4; g++) h = l[c[g] + 1], 0 === this.dl[g] && h <= jR && e[h] < k && (e[h]++, this.dl[g] = h);
        for (g = 0; g < d4; g++) h = l[f[g] + 1], 0 === this.dl[g] && h <= jR && e[h] < k && (e[h]++, this.dl[g] = h);
        for (h = jR; 1 <= h; h--)
            for (g = d4 - 1; 0 <= g && !(e[h] >= k); g--) 0 === this.dl[g] && (e[h]++, this.dl[g] = h)
    };
    this.a6H = function() {
        var c, f = new Uint16Array(jR);
        f[jR - 1] = bM;
        for (c = jR - 2; 0 <= c; c--) f[c] = eC.eD[c].n7;
        f[0]--;
        var e = 0 === f[0] ? 1 : 0;
        for (c = d4; c < bM; c++) this.dl[c] = e + 1, f[e]--, 0 >= f[e] && e++
    };
    this.a6I = function() {
        for (var c = d4; c < bM; c++) this.dl[c] = 1 + c % jR
    };
    this.j0 = function(c) {
        if (eB) return [512, ""];
        var f, e, h = -1,
            g = -1;
        for (e = b.length - 1; 0 <= e; e--)
            for (f = d[e].length - 1; 0 <= f && this.j1[this.dl[d[e][f]]] === c; f--)
                if (-1 === h || sY[d[e][f]] < sY[h]) h = d[e][f], g = e;
        return -1 === h || 0 === fT[h] ? [512, ""] : [h, b[g]]
    }
}

function bj() {
    for (var a, b, d = ae - 1; 0 <= d; d--) a = b6(ag[d], 4) % an, b = b6(ag[d], 4 * an), dE[aa] = dE[aa] > a ? a : dE[aa], dH[aa] = dH[aa] > b ? b : dH[aa], dD[aa] = dD[aa] < a ? a : dD[aa], dG[aa] = dG[aa] < b ? b : dG[aa]
}

function ax() {
    var a = bI[aa].length,
        b;
    var d = a - 1;
    a: for (; 0 <= d; d--) {
        for (b = 3; 0 <= b; b--) {
            var c = bI[aa][d] + aj[b];
            if (bJ.bU(c) || bJ.bS(c) && bJ.bT(c) !== aa) {
                bJ.ck(bI[aa][d], aa);
                continue a
            }
        }
        bI[aa][d] = bI[aa][a - 1];
        bI[aa].pop();
        a--
    }
}

function ay() {
    var a = ba[aa].length,
        b, d, c = a - 1;
    a: for (; 0 <= c; c--) {
        var f = d = !1;
        for (b = 3; 0 <= b; b--) {
            var e = ba[aa][c] + aj[b];
            if (bJ.yo(e, aa)) continue a;
            f = f || bJ.yr(e);
            d = d || bJ.yn(e)
        }
        f ? bb[aa].push(ba[aa][c]) : d ? be[aa].push(ba[aa][c]) : bJ.hs(ba[aa][c], aa);
        ba[aa][c] = ba[aa][a - 1];
        ba[aa].pop();
        a--
    }
}

function bY() {
    bi[ad] -= ae
}

function bZ(a) {
    for (var b = a.length, d = b - 1; 0 <= d; d--) bJ.i0(ad, a[d]) || (a[d] = a[b - 1], a.pop(), b--)
}

function bc(a) {
    for (var b = a.length, d = b - 1; 0 <= d; d--) !bJ.i0(ad, a[d]) && bJ.bK(a[d]) && (a[d] = a[b - 1], a.pop(), b--)
}

function bd(a) {
    for (var b = a.length, d, c, f = b - 1; 0 <= f; f--)
        for (d = 3; 0 <= d; d--)
            if (c = a[f] + aj[d], bJ.yo(c, ad)) {
                ba[ad].push(a[f]);
                a[f] = a[b - 1];
                a.pop();
                b--;
                break
            }
}

function bf() {
    for (var a, b, d = ae - 1; 0 <= d; d--)
        for (a = 3; 0 <= a; a--) b = ag[d] + aj[a], bJ.yp(ad, b) && bJ.yq(b) && (ba[ad].push(b), bJ.bL(b, ad))
}

function bg() {
    var a;
    a: for (; dH[ad] < dG[ad];) {
        for (a = dD[ad]; a >= dE[ad]; a--)
            if (bJ.i0(ad, 4 * (dH[ad] * an + a))) break a;
        dH[ad]++
    }
    a: for (; dH[ad] < dG[ad];) {
        for (a = dD[ad]; a >= dE[ad]; a--)
            if (bJ.i0(ad, 4 * (dG[ad] * an + a))) break a;
        dG[ad]--
    }
    a: for (; dE[ad] < dD[ad];) {
        for (a = dG[ad]; a >= dH[ad]; a--)
            if (bJ.i0(ad, 4 * (a * an + dE[ad]))) break a;
        dE[ad]++
    }
    a: for (; dE[ad] < dD[ad];) {
        for (a = dG[ad]; a >= dH[ad]; a--)
            if (bJ.i0(ad, 4 * (a * an + dD[ad]))) break a;
        dD[ad]--
    }
}

function cv(a, b) {
    return 0 === dk.dl[a] || dk.dl[a] !== dk.dl[b]
}

function lu(a, b) {
    var d, c = as.at(a);
    for (d = 0; d < c; d++)
        if (0 === as.au(a, d)) {
            var f = as.az(a, d);
            if (f === bM) {
                if (b === bM) break;
                if (lt(b)) return !0
            } else if (b === bM) {
                if (lt(f)) return !0
            } else if (ly(b, f)) return !0
        } return !1
}

function lt(a) {
    var b, d, c = ba[a].length;
    for (b = 3; 0 <= b; b--) {
        var f = aj[b];
        for (d = 0; d < c; d++)
            if (bJ.bU(ba[a][d] + f)) return !0
    }
    return !1
}

function ly(a, b) {
    var d;
    var c = ba[a].length;
    var f = ba[b].length;
    f < c && (c = a, a = b, b = c, c = f);
    for (d = 3; 0 <= d; d--) {
        var e = aj[d];
        for (f = 0; f < c; f++) {
            var h = ba[a][f] + e;
            if (bJ.bS(h) && bJ.bT(h) === b) return !0
        }
    }
    return !1
}

function a2Y() {
    function a() {
        cI.gq = performance.now();
        cI.a6c();
        window.requestAnimationFrame(a)
    }

    function b() {
        var d = performance.now();
        cI.gq + 1500 < d && (cI.gq = d, cI.a6c())
    }
    this.cJ = !1;
    this.a6e = this.a6d = this.a6c = null;
    this.gq = 0;
    this.a6f = -1;
    this.c3 = function() {
        window.requestAnimationFrame(a);
        this.gq = performance.now()
    };
    this.a2d = function() {
        1 !== fn || !eB || g4.m8 || fq || g4.mE(); - 1 === this.a6f && (this.a6f = setInterval(b, 2E3))
    };
    this.xw = function() {
        this.cJ = !0; - 1 !== this.a6f && (clearInterval(this.a6f), this.a6f = -1)
    };
    this.jr = function() {
        this.a6c =
            this.a6i;
        this.a6d = null;
        this.cJ = !0
    };
    this.jm = function() {
        this.a6d = new a6j;
        this.a6c = this.a6k
    };
    this.jn = function() {
        this.a6e = new a6l;
        this.a6e.c3();
        this.a6c = this.a6m
    };
    this.a6i = function() {
        jt.dT();
        jw.dT();
        k4.dT();
        eR.dT();
        em.wV();
        cR.dT();
        this.cJ && (this.cJ = !1, aX.cU())
    };
    this.a6k = function() {
        this.a6d.dT()
    };
    this.a6m = function() {
        this.a6e.dT()
    };
    this.di = function() {
        return eB ? this.a6d.wS : this.a6e.wS
    };
    this.tj = function() {
        return 56
    }
}

function a6j() {
    this.gq = cI.gq;
    this.a5e = 56;
    this.wS = this.c6 = 0;
    this.a6n = !1;
    this.dT = function() {
        k4.dT();
        fq ? eq() : 0 === this.c6 ? cI.gq >= this.gq && (this.gq += this.a5e * Math.floor(1 + (cI.gq - this.gq) / this.a5e), 2 === fn || g4.m8 ? eM() : (eS(), this.wS++, hM.u9()), this.c6++) : (g4.m8 ? eq() : (cI.cJ = !0, eo()), this.c6 = 0);
        ei();
        cI.cJ && (cI.cJ = !1, i3())
    }
}

function a6l() {
    this.gq = cI.gq;
    this.a5e = 56;
    this.wR = this.wS = this.c6 = 0;
    this.a6o = null;
    this.a0o = 7;
    var a;
    this.c3 = function() {
        this.wR = 0;
        this.a6o = [];
        a = this.wS = this.c6 = 0
    };
    this.a6p = function(b) {
        if (fq) this.tk(b);
        else if (this.a6o.push(b), 2 === fn) {
            for (b = 0; b < this.a6o.length; b++) k3.a6q(this.a6o[b], a), a = (a + 1) % 8;
            this.a6o = []
        }
    };
    this.tk = function(b) {
        k3.a6q(b, a);
        a = (a + 1) % 8;
        eP.tk(this.wR);
        this.wR === jT ? (fr.dT(), this.wS = this.c6 = this.wR = 0, this.gq = cI.gq) : (this.wR++, eO.jI(), eO.ep(), hM.u9())
    };
    this.dT = function() {
        k4.dT();
        fq ? (cI.cJ =
            eP.tk(-1) || cI.cJ, eq()) : 0 === this.c6 ? cI.gq >= this.gq && (this.gq += this.a5e * Math.floor(1 + (cI.gq - this.gq) / this.a5e), 2 === fn ? eM() : this.a6r(), this.c6++) : (cI.cJ = !0, eo(), this.c6 = 0);
        ei();
        cI.cJ && (cI.cJ = !1, i3())
    };
    this.a6r = function() {
        if (this.wS !== 7 * this.wR) eS(), this.wS++, hM.u9();
        else {
            for (var b = !1; this.a6t();)
                if (b = !0, eS(), this.wS++, 0 < this.a6o.length)
                    for (var d = this.a0o - 2; 0 <= d; d--) eS(), this.wS++;
                else break;
            b ? hM.u9() : (eM(), hM.jK())
        }
    };
    this.a6t = function() {
        return 0 < this.a6o.length ? (this.wR++, k3.a6q(this.a6o[0], a), a = (a +
            1) % 8, this.a6o.shift(), !0) : !1
    }
}

function kz() {
    function a(b, d) {
        8 !== aX.pm() || 0 !== d && d !== e9 || eB || eN.nC(b)
    }
    this.gk = 0;
    this.a6u = !0;
    this.dT = function() {
        cI.gq > this.gk && (this.gk = cI.gq + 2500, this.a6v())
    };
    this.a6v = function() {
        var b = new Date;
        var d = b.getUTCSeconds();
        this.a6u ? 55 > d || -1 !== cI.a6f || (this.a6u = !1, d = b.getUTCMinutes(), 4 === d % 5 ? (b = b.getUTCHours(), 59 === d && 15 <= b && 21 >= b ? a("Upcoming Game of the Day", 0) : 14 === d % 30 ? a("Upcoming Alliance Contest", 0) : 29 === d % 30 ? a("Upcoming Battle Royale Contest", 0) : a("Upcoming One-vs-One Game", 8)) : 2 === d % 5 && a("Upcoming Zombie Game",
            9)) : 55 > d && (this.a6u = !0)
    }
}

function km() {
    function a() {
        return Math.pow(Math.pow(f - d, 2) + Math.pow(e - c, 2), .5)
    }

    function b(h) {
        d = pa * h.touches[0].clientX;
        c = pa * h.touches[0].clientY;
        f = pa * h.touches[1].clientX;
        e = pa * h.touches[1].clientY
    }
    var d, c, f, e;
    this.pb = function(h) {
        return 1 < h.touches.length ? (b(h), i8.lT(), !0) : !1
    };
    this.pg = function(h) {
        if (0 === fn) return !1;
        if (1 < h.touches.length) {
            if (!ej.hE()) return !0;
            var g = a();
            b(h);
            h = a();
            gx.rX(Math.floor((d + f) / 2), Math.floor((c + e) / 2), h / g);
            return cI.cJ = !0
        }
        return !1
    }
}

function kn() {
    function a(f, e) {
        for (var h = Array(f), g = 0; g < f; g++) h[g] = b(e, 10);
        return a0.ij(h)
    }

    function b(f, e) {
        for (var h = 0, g, k, l = c; l < c + e; l++) g = b6(l, 8), k = 7 - l % 8, h |= (f[g] >> k & 1) << c + e - l - 1;
        c += e;
        return h
    }
    var d, c;
    this.a5c = function(f, e) {
        c = 0;
        d = e.length;
        if (0 === d) eR.a27(f, 3205);
        else {
            var h = b(e, 1);
            if (0 === h)
                if (h = b(e, 2), 0 === h)
                    if (0 === b(e, 1)) {
                        if (0 === f && 8 !== aX.pm() && !(4 > d)) {
                            uc.c5(0, a(b(e, 5), e));
                            uc.c5(1, "[" + a(b(e, 3), e) + "]");
                            var g = b(e, 12),
                                k = b(e, 6),
                                l = Array(g);
                            for (h = 0; h < g; h++) l[h] = b(e, k);
                            ju.s0(l)
                        }
                    } else {
                        if (8 !== aX.pm())
                            if (3 > d) eR.a27(f,
                                3208);
                            else {
                                g = b(e, 1);
                                k = b(e, 16);
                                l = b(e, 4);
                                var m = [];
                                for (h = 0; h < l; h++) {
                                    var u = b(e, 14);
                                    var y = b(e, 5);
                                    y = a(y, e);
                                    m.push({
                                        name: y,
                                        iQ: u
                                    })
                                }
                                0 === g ? cR.uV(0, m, 10, 1, .36, .55, k) : cR.uV(1, m, 100, 2, .47, .5, k)
                            }
                    }
            else if (1 === h)
                if (f !== eR.w9) eR.close(f, 3239);
                else if (6 === aX.pm() && k5.c3(), 7 !== aX.pm()) eR.close(f, 3251);
            else {
                g = [0, 0, 0, 0];
                k = b(e, 6);
                for (h = 0; 4 > h; h++) g[h] = b(e, k);
                l = b(e, 4);
                m = [];
                for (h = 0; h < l; h++) m.push({
                    id: b(e, 5),
                    jX: b(e, 4),
                    xC: 1 === b(e, 1),
                    x9: b(e, 6),
                    xA: b(e, 14),
                    xF: b(e, k),
                    xG: b(e, 9) + 1,
                    vm: b(e, 10)
                });
                k5.ud(g, m)
            } else 2 !== h && 3 !== h || em.c3(e);
            else 1 === h && (h = aX.pm(), 8 !== h ? 10 === h && eR.a27(f, 3243) : f !== eR.jq ? eR.a27(f, 3244) : 0 === b(e, 1) ? cI.a6e.a6p(e) : (h = b(e, 2), 0 === h ? 3 !== d ? eR.a27(eR.jq, 3230) : (h = b(e, 9), g = b(e, 7), 0 !== fT[h] && 0 !== fT[bA] && (g %= aJ.aK, eN.n3(h, bA, g), eO.nG(h, 1, g))) : 1 === h ? 2 !== d ? eR.a27(eR.jq, 3235) : (h = b(e, 9), 0 !== fT[h] && 0 !== fT[bA] && ee.a1k(0, [h], !0) && eN.lm(h, 1)) : 3 !== d ? eR.a27(eR.jq, 3236) : (h = b(e, 9), g = b(e, 9), 0 !== fT[h] && 0 !== fT[g] && 0 !== fT[bA] && ee.a1k(1, [h], !0) && (eO.nG(h, 3, 96), eO.nG(g, 4, 96), eN.nJ(h, g)))))
        }
    };
    this.wW = function(f) {
        c = 1;
        d = f.length;
        if (2 ===
            b(f, 2)) {
            c += 20;
            for (var e = b(f, 9), h = b(f, 14), g = b(f, 4), k = 1 === b(f, 1), l = b(f, 6), m = b(f, 14), u = b(f, 9) + 1, y = [], z, G, B, n = 0; n < u; n++) z = b(f, 1), G = [b(f, 6), b(f, 6), b(f, 6)], B = a(b(f, 5), f), y.push({
                name: B,
                xg: G,
                xh: z
            });
            aX.vs();
            xM(l, m);
            1 === y.length && eC.xZ(g);
            jU(h, e, y, g, k)
        } else {
            c += 20;
            e = b(f, 1);
            h = b(f, 14);
            g = b(f, 4);
            k = 1 === b(f, 1);
            l = b(f, 6);
            m = b(f, 14);
            u = [];
            for (n = 0; 2 > n; n++) y = b(f, 1), z = [b(f, 6), b(f, 6), b(f, 6)], G = b(f, 14), B = a(b(f, 5), f), u.push({
                name: B,
                xg: z,
                iQ: G,
                xh: y
            });
            aX.vs();
            xM(l, m);
            jU(h, e, u, g, k)
        }
    };
    this.wP = function(f) {
        c = 1;
        d = f.length;
        var e = b(f,
                2),
            h = b(f, 10);
        eR.w9 > eR.wU && (h += eR.wU);
        if (eR.w9 === h) return eR.jq = h, !1;
        eR.close(eR.w9, 3247);
        eR.jq = h;
        em.wJ = b(f, 10);
        em.wK = b(f, 2 === e ? 9 : 1);
        eR.rw(h, 5) && j5.a24();
        return !0
    };
    this.a6q = function(f, e) {
        c = 2;
        var h = 8 * f.length;
        if (b(f, 3) !== e) eR.a27(eR.jq, 3248);
        else
            for (; c + 8 <= h;) {
                var g = b(f, 3);
                var k = b(f, 9);
                if (0 === g) {
                    g = b(f, 10);
                    var l = b(f, 9);
                    l = l === k ? bM : l;
                    eU.fm(k, g, l)
                } else if (1 === g) {
                    g = b(f, 10);
                    l = b(f, 11);
                    var m = b(f, 11);
                    eU.fp(k, g, l, m)
                } else 2 === g ? (l = b(f, 9), l = l === k ? bM : l, eU.fs(k, l)) : 3 === g ? eU.fv(k) : 4 === g ? (g = b(f, 7), eO.nG(k, 0, g)) : 5 ===
                    g ? eU.g3(k) : 6 === g ? eU.fu(k, b(f, 1)) : 7 === g && eU.ft(k, 1 + b(f, 11))
            }
    }
}

function a2V() {
    this.a5Q = this.a5P = this.a5O = this.a5N = this.a5S = this.a5R = 0;
    this.uA = [0, 0, 0, 0];
    this.hD = function() {
        this.a5R = gx.gT();
        this.a5S = gx.cT();
        this.a5N = -this.a5R;
        this.a5O = -this.a5S;
        this.a5P = gS / gL;
        this.a5Q = cP / gL;
        this.uA[0] = Math.floor(this.a5N);
        this.uA[1] = Math.floor(this.a5O);
        this.uA[2] = Math.floor(this.uA[0] + this.a5P + 1);
        this.uA[3] = Math.floor(this.uA[1] + this.a5Q + 1);
        hM.u7 = !0
    }
}

function ko() {
    var a, b;
    this.c3 = function() {
        a = 1;
        b = 0
    };
    this.dT = function() {
        0 < a && (b = 0 === b ? cI.gq + 16 : b, a -= .001 * (cI.gq - b), a = 0 > a ? 0 : a, b = cI.gq, cI.cJ = !0)
    };
    this.cU = function() {
        0 < a && (cV.fillStyle = "rgba(0,0,0," + a + ")", cV.fillRect(0, 0, gS, cP))
    }
}

function kt() {
    function a(b, d, c, f, e) {
        b >= zj || (x9 === b && (cV.fillStyle = oU, cV.fillRect(d, c, f, e), cV.fillStyle = cY), cV.strokeRect(d, c, f, e), cV.fillText(k0.cD(b).name, Math.floor(d + .5 * f), Math.floor(c + .55 * e)))
    }
    this.lQ = !1;
    this.xY = [0, 0, 0, 0];
    this.show = function() {
        this.lQ = !0;
        this.m9();
        cI.cJ = !0
    };
    this.m9 = function() {
        var b = b6(zj + zj % 2, 2);
        b = a6 - b * cO;
        this.xY[2] = a4 ? Math.floor(.75 * pW) : Math.floor(.5 * pW);
        this.xY[3] = Math.floor(1.2 * this.xY[2]);
        this.xY[3] > b && (this.xY[3] = b, this.xY[2] = Math.floor(b / 1.2));
        this.xY[0] = Math.floor((a5 - this.xY[2]) /
            2);
        this.xY[1] = Math.floor((a6 - this.xY[3]) / 2)
    };
    this.m0 = function(b, d) {
        return b < this.xY[0] || d < this.xY[1] || b > this.xY[0] + this.xY[2] || d > this.xY[1] + this.xY[3] ? !1 : !0
    };
    this.cL = function(b, d) {
        var c = b6(zj + zj % 2, 2);
        cI.cJ = !0;
        if (b < this.xY[0] || d < this.xY[1] || b > this.xY[0] + this.xY[2] || d > this.xY[1] + this.xY[3]) return this.lQ = !1, !0;
        var f = Math.floor(.13 * this.xY[3]);
        if (d < this.xY[1] + f) return b > this.xY[0] + this.xY[2] - 1.2 * f && (this.lQ = !1), !0;
        f = Math.floor(c * (d - this.xY[1] - f) / (this.xY[3] - f));
        f = 0 > f ? 0 : f > c - 1 ? c - 1 : f;
        b > this.xY[0] + this.xY[2] /
            2 && (f += c);
        if (f >= zj) return !0;
        xM(f, Math.floor(16384 * Math.random()));
        return !0
    };
    this.cU = function() {
        var b, d = Math.floor(.13 * this.xY[3]),
            c = b6(zj + zj % 2, 2),
            f = (this.xY[3] - d - (c + 1) * cO) / c,
            e = Math.floor((this.xY[2] - 3 * cO) / 2);
        cV.lineWidth = 2;
        cV.textAlign = cX;
        cV.textBaseline = cW;
        cV.font = c7 + Math.floor(.48 * f) + c8;
        cV.fillStyle = iC;
        cV.fillRect(this.xY[0], this.xY[1], this.xY[2], this.xY[3]);
        cV.fillStyle = oU;
        cV.fillRect(this.xY[0], this.xY[1], this.xY[2], d);
        cV.strokeStyle = cY;
        cV.strokeRect(this.xY[0], this.xY[1], this.xY[2], this.xY[3]);
        cV.fillStyle = cY;
        for (b = c - 1; 0 <= b; b--) {
            var h = Math.floor(this.xY[1] + d + cO + b * (f + cO));
            a(b, this.xY[0] + cO, h, e, f);
            a(b + c, this.xY[0] + e + 2 * cO, h, e, f)
        }
        g4.mN(Math.floor(this.xY[0] + this.xY[2] - .8 * d), Math.floor(this.xY[1] + .25 * d), Math.floor(.5 * d));
        cV.setTransform(1, 0, 0, 1, 0, 0)
    }
}

function kp() {
    function a(e) {
        var h = x(),
            g = Math.floor(h / 16777216);
        c(e, 24, g);
        c(e, 24, h - 16777216 * g)
    }

    function b(e) {
        c(e, 14, a2D);
        c(e, 4, p ? 2 : 12 <= r ? 1 : 0 < r ? 3 : 0);
        c(e, 1, a2H ? 1 : 0);
        c(e, 1, a2G ? 1 : 0);
        c(e, 5, (new Date).getHours() % 24)
    }

    function d(e) {
        return b6(e, 8) + (0 < e % 8 ? 1 : 0)
    }

    function c(e, h, g) {
        for (var k, l, m = f; m < f + h; m++) k = b6(m, 8), l = 7 - m % 8, e[k] |= (g >> h - (m - f + 1) & 1) << l;
        f += h
    }
    var f;
    this.rz = function() {
        var e = new Uint8Array(3);
        f = 0;
        c(e, 1, 0);
        c(e, 3, 0);
        c(e, 14, a2D);
        eR.send(0, e)
    };
    this.vb = function(e) {
        var h = a0.ii(js.xf()),
            g = h.length,
            k = new Uint8Array(d(105 +
                10 * g));
        f = 0;
        c(k, 1, 0);
        c(k, 3, 1);
        c(k, 10, a2I);
        var l = cQ.mQ[2].iw.vK();
        c(k, 6, l[0]);
        c(k, 6, l[1]);
        c(k, 6, l[2]);
        a(k);
        b(k);
        for (l = 0; l < g; l++) c(k, 10, h[l]);
        eR.w9 = e;
        eR.send(e, k)
    };
    this.uT = function(e, h) {
        var g = new Uint8Array(5);
        f = 0;
        c(g, 1, 0);
        c(g, 3, 7);
        c(g, 3, 0);
        c(g, 14, a2D);
        c(g, 1, h);
        c(g, 16, Math.abs(4096 + cR.position[h] + cR.uS[h]) % 65536);
        eR.send(e, g)
    };
    this.a25 = function(e) {
        var h, g = new Uint8Array(100);
        f = 0;
        c(g, 1, 0);
        c(g, 3, 7);
        c(g, 3, 1);
        c(g, 14, a2K);
        var k = a0.ii(a2L),
            l = qz(k.length, 77);
        c(g, 7, l);
        for (h = 0; h < l; h++) c(g, 10, k[h]);
        eR.send(e,
            g)
    };
    this.y3 = function(e) {
        var h;
        if (!(js.xt + 7E3 > cI.gq)) {
            js.xt = cI.gq;
            var g = new Uint8Array(17);
            f = 0;
            c(g, 1, 0);
            c(g, 3, 7);
            c(g, 3, 2);
            a(g);
            var k = mq(js.xs.length - 20, 0);
            for (h = js.xs.length - 1; h >= k; h--) c(g, 4, Math.abs(js.xs.charCodeAt(h) - 48) % 10);
            eR.send(e, g)
        }
    };
    this.a1w = function(e, h) {
        var g = new Uint8Array(1);
        f = 0;
        c(g, 1, 0);
        c(g, 3, 5);
        c(g, 1, h ? 1 : 0);
        eR.send(e, g)
    };
    this.xQ = function(e) {
        var h = new Uint8Array(1);
        f = 0;
        c(h, 1, 0);
        c(h, 3, 2);
        c(h, 4, e);
        eR.send(eR.w9, h)
    };
    this.a24 = function() {
        var e = new Uint8Array(7);
        f = 0;
        c(e, 1, 0);
        c(e, 3, 6);
        c(e,
            8, eR.nE());
        c(e, 10, em.wJ);
        c(e, 9, em.wK);
        c(e, 10, a2I);
        c(e, 14, a2D);
        eR.send(eR.jq, e)
    };
    this.li = function(e, h) {
        var g = new Uint8Array(3);
        f = 0;
        c(g, 1, 1);
        c(g, 3, 0);
        c(g, 10, e);
        c(g, 9, h);
        eR.send(eR.jq, g)
    };
    this.lk = function(e, h, g) {
        var k = new Uint8Array(5);
        f = 0;
        c(k, 1, 1);
        c(k, 3, 1);
        c(k, 10, e);
        c(k, 11, h);
        c(k, 11, g);
        eR.send(eR.jq, k)
    };
    this.qK = function(e) {
        var h = new Uint8Array(2);
        f = 0;
        c(h, 1, 1);
        c(h, 3, 2);
        c(h, 1, 0);
        c(h, 9, e);
        eR.send(eR.jq, h)
    };
    this.qL = function(e) {
        var h = new Uint8Array(2);
        f = 0;
        c(h, 1, 1);
        c(h, 3, 2);
        c(h, 1, 1);
        c(h, 11, e - 1);
        eR.send(eR.jq,
            h)
    };
    this.j6 = function(e, h) {
        var g = new Uint8Array(4);
        f = 0;
        c(g, 1, 1);
        c(g, 3, 3);
        c(g, 12, e);
        c(g, 10, h);
        eR.send(eR.jq, g)
    };
    this.mH = function() {
        var e = new Uint8Array(1);
        f = 0;
        c(e, 1, 1);
        c(e, 3, 4);
        eR.send(eR.jq, e)
    };
    this.oM = function(e) {
        var h = new Uint8Array(2);
        f = 0;
        c(h, 1, 1);
        c(h, 3, 5);
        c(h, 7, e);
        eR.send(eR.jq, h)
    };
    this.oN = function(e, h) {
        eN.n3(bA, h, e);
        var g = new Uint8Array(3);
        f = 0;
        c(g, 1, 1);
        c(g, 3, 6);
        c(g, 2, 0);
        c(g, 9, h);
        c(g, 7, e);
        eR.send(eR.jq, g)
    };
    this.ln = function(e) {
        var h = new Uint8Array(2);
        f = 0;
        c(h, 1, 1);
        c(h, 3, 6);
        c(h, 2, 1);
        c(h, 9, e);
        eR.send(eR.jq,
            h)
    };
    this.le = function(e, h) {
        var g, k = e.length,
            l = new Uint8Array(d(15 + 9 * k));
        f = 0;
        c(l, 1, 1);
        c(l, 3, 6);
        c(l, 2, 2);
        c(l, 9, h);
        for (g = 0; g < k; g++) c(l, 9, e[g]);
        eR.send(eR.jq, l)
    };
    this.qu = function(e) {
        var h = new Uint8Array(1);
        f = 0;
        c(h, 1, 1);
        c(h, 3, 7);
        c(h, 1, e ? 1 : 0);
        eR.send(eR.jq, h)
    };
    this.xd = function(e) {
        var h = new Uint8Array(4);
        f = 0;
        c(h, 1, 0);
        c(h, 3, 3);
        b(h);
        eR.send(e, h)
    }
}
setTimeout(aW, 1E4);