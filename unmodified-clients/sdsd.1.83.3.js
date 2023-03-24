function V() {
    if (lS) return aS.username;
    if (12 <= eS) {
        var V = KS.g(20);
        "" === V && (V = "Android User " + Math.floor(1e3 * Math.random()), KS.h(20, V))
    } else 5 <= eS ? "" === (V = KS.g(0)) && (V = "Player " + Math.floor(1e3 * Math.random()), KS.h(0, V)) : V = Bj.i(0);
    return V
}

function j() {
    var V = 0;
    if (lS) V = aS.password;
    else if (12 <= eS) V = KS.g(22);
    else {
        if (5 <= eS) return V;
        V = Bj.i(9)
    }
    var j = Math.floor(Math.pow(2, 48));
    return 0 < (V = Math.floor(parseInt(bV.j(V)))) && V < j || m(V = Math.floor(1 + (j - 1) * Math.random())) ? V : 0
}

function I(V) {
    lS ? window.webkit.messageHandlers.iosCommandA.postMessage("username " + V) : 12 <= eS ? (KS.h(20, V), KS.k(10)) : 5 <= eS ? KS.h(0, V) : ((3 > V.length || 0 <= V.indexOf(";")) && (V = "Player 666"), Bj.y(0, V), Bj.z())
}

function m(V) {
    return V = bV.l(V.toString()), lS ? (aS.password = V, window.webkit.messageHandlers.iosCommandA.postMessage("password " + V), !0) : 12 <= eS ? (KS.h(22, V), !0) : !(5 <= eS) && (2 === Bj.m() && (Bj.y(9, V), Bj.z(), !0))
}

function C(V) {
    lS || 5 <= eS && KS.k(V)
}
var S, l, a, K, e, L, B, D, P, W, v, t, n, F, g, A, p, G;

function Q(V) {
    for (l = V, F = !1, function() {
            var V = rI[l].length;
            for (V = V > D ? D : V, W = 0, --V; 0 <= V; V--) v[W++] = rI[l][V]
        }(), function() {
            var V;
            for (V = rI[l].length - 1; 0 <= V; V--) Lj.o(rI[l][V]) && Lj.p(rI[l][V], l);
            rI[l] = []
        }(), V = Qj.q(l) - 1; 0 <= V; V--) 0 === Qj.t(l, V) && (S = V, _());
    F && (function() {
        var V, j = rI[l].length,
            I = j - 1;
        V: for (; 0 <= I; I--) {
            for (V = 3; 0 <= V; V--) {
                var m = rI[l][I] + t[V];
                if (Lj.u(m) || Lj.v(m) && Lj.A(m) !== l) {
                    Lj.B(rI[l][I], l);
                    continue V
                }
            }
            rI[l][I] = rI[l][j - 1], rI[l].pop(), j--
        }
    }(), function() {
        var V, j, I = hI[l].length,
            m = I - 1;
        V: for (; 0 <= m; m--) {
            var C = j = !1;
            for (V = 3; 0 <= V; V--) {
                var S = hI[l][m] + t[V];
                if (Lj.C(S, l)) continue V;
                C = C || Lj.D(S), j = j || Lj.F(S)
            }
            C ? $I[l].push(hI[l][m]) : j ? HI[l].push(hI[l][m]) : Lj.G(hI[l][m], l), hI[l][m] = hI[l][I - 1], hI[l].pop(), I--
        }
    }())
}

function _() {
    var V, j, I, m;
    L = Qj.H(l, S), a = K = Qj.I(l, S), B = 0, L === jI ? function() {
        var V, j;
        for (V = 3; 0 <= V; V--)
            for (j = W - 1; 0 <= j; j--) {
                var I = v[j] + t[V],
                    m = Kl(I, 4);
                0 === n[m] && Lj.u(I) && (n[m] = 1, P[B++] = I)
            }
    }() : function() {
        var V, j;
        for (V = 3; 0 <= V; V--)
            for (j = W - 1; 0 <= j; j--) {
                var I = v[j] + t[V],
                    m = Kl(I, 4);
                0 === n[m] && Lj.v(I) && Lj.A(I) === L && (n[m] = 1, P[B++] = I)
            }
    }(), 0 === B ? z() : (function() {
        var V;
        for (V = B - 1; 0 <= V; V--) n[Kl(P[V], 4)] = 0
    }(), (e = Kl(a, B)) > SI && (L === jI ? (a -= B * SI, 1) : (V = B * SI, j = Kl(B * bI[L], 1 + Math.floor(2 + Wl(Kl(sI[L], 100), 8)) * (hI[L].length + Kl($I[L].length + HI[L].length, 50))), I = Qj.J(L, l), (m = e * B) > (j = V + 2 * j + I) ? (a -= j, f(j - V, I), 1) : (a -= m, f(m - V, I), 0))) ? (F = !0, Qj.K(l, S, a), sI[l] += B, function() {
        for (var V, j, I = B - 1; 0 <= I; I--) V = Kl(P[I], 4) % JS, j = Kl(P[I], 4 * JS), oI[l] = oI[l] > V ? V : oI[l], NI[l] = NI[l] > j ? j : NI[l], MI[l] = MI[l] < V ? V : MI[l], JI[l] = JI[l] < j ? j : JI[l]
    }(), function() {
        for (var V = B - 1; 0 <= V; V--) rI[l].push(P[V]), hI[l].push(P[V]), Lj.p(P[V], l)
    }(), L !== jI && (sI[L] -= B, kl(hI[L]), kl($I[L]), function(V) {
        for (var j = V.length, I = j - 1; 0 <= I; I--) !Lj.L(L, V[I]) && Lj.o(V[I]) && (V[I] = V[j - 1], V.pop(), j--)
    }(rI[L]), ql($I[L]), ql(HI[L]), function() {
        for (var V, j, I = B - 1; 0 <= I; I--)
            for (V = 3; 0 <= V; V--) j = P[I] + t[V], Lj.M(L, j) && Lj.N(j) && (hI[L].push(j), Lj.p(j, L))
    }(), function() {
        var V;
        V: for (; NI[L] < JI[L];) {
            for (V = MI[L]; V >= oI[L]; V--)
                if (Lj.L(L, 4 * (NI[L] * JS + V))) break V;
            NI[L]++
        }
        V: for (; NI[L] < JI[L];) {
            for (V = MI[L]; V >= oI[L]; V--)
                if (Lj.L(L, 4 * (JI[L] * JS + V))) break V;
            JI[L]--
        }
        V: for (; oI[L] < MI[L];) {
            for (V = JI[L]; V >= NI[L]; V--)
                if (Lj.L(L, 4 * (V * JS + oI[L]))) break V;
            oI[L]++
        }
        V: for (; oI[L] < MI[L];) {
            for (V = JI[L]; V >= NI[L]; V--)
                if (Lj.L(L, 4 * (V * JS + MI[L]))) break V;
            MI[L]--
        }
    }())) : z())
}

function z() {
    if (1 === Qj.q(l) && EV.O(l), Fj.add(l, a, "Attack against " + (L === jI ? "unclaimed land" : iI[L]) + " ended", 4, "end_" + L), l !== GV) bI[l] += a, _j.P(l);
    else {
        var V = bI[l];
        bI[l] += a, _j.P(l), FS.R[13] -= bI[l] - V
    }
    Qj.S(l, S)
}

function f(V, j) {
    if (0 < j) {
        if (!(V >= j)) return void Qj.T(L, l, j - V);
        Qj.T(L, l, 0), V -= j
    }
    V = Kl(V, 2), Fj.add(L, bI[L] >= V ? -V : -bI[L], "Defending against " + iI[l] + " (" + K + " Troops)", 2, l + "_defending"), bI[L] = bI[L] >= V ? bI[L] - V : 0
}

function X() {
    var V = 1,
        j = [null, null];
    this.init = function() {
        V = .72 * (LS ? .0011 : .001) * jS;
        for (var I = 1; 0 <= I; I--) j[I] && this.U(I, j[I].V)
    }, this.U = function(V, I) {
        j[V] = {
            V: I,
            font: zm + 10 + km
        }, this.W(V)
    }, this.W = function(I) {
        if (ej.X() && j[I]) {
            var m = j[I].V,
                C = Math.floor(.15 * V * ej.Y(13).height),
                S = zm + C + km,
                l = TV.measureText(m, S),
                a = .8 * V * ej.Y(13).width;
            l > a && (C = Math.floor(C * a / l), S = zm + C + km), j[I] = {
                V: m,
                font: S
            }, pS.request = !0
        }
    }, this.Z = function() {
        return Math.floor(V * ej.Y(13).height)
    }, this.click = function(j, I) {
        return !(!ej.X() || j < tI || I < mS - pI.height - V * ej.Y(13).height - 2 * tI || I > mS - pI.height - 2 * tI) && (j < tI + V * ej.Y(13).width ? (_S.open(0), !0) : !(j < 2 * tI + V * ej.Y(13).width) && (j < 2 * tI + 2 * V * ej.Y(13).width && (_S.open(1), !0)))
    }, this.$ = function() {
        return Math.floor(mS - pI.height - V * ej.Y(13).height - 2 * tI)
    }, this._ = function() {
        if (ej.X()) {
            wC.imageSmoothingEnabled = !0, wC.setTransform(V, 0, 0, V, tI, this.$()), wC.drawImage(ej.Y(14), 0, 0), wC.setTransform(V, 0, 0, V, 2 * tI + V * ej.Y(13).width, this.$()), wC.drawImage(ej.Y(13), 0, 0);
            for (var I = 1; 0 <= I; I--) j[I] && (wC.setTransform(1, 0, 0, 1, (1 + I) * tI + I * V * ej.Y(13).width, this.$()), wC.font = j[I].font, wC.textBaseline = pm, wC.textAlign = Gm, wC.fillStyle = tm, wC.fillText(j[I].V, .5 * V * ej.Y(13).width, .86 * V * ej.Y(13).height));
            wC.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
}

function k(V, j, I, m) {
    var C = Kl(3 * bI[V], 256);
    m -= m >= Kl(bI[V], 2) ? C : 0, Z(I, V), Qj.aa(V, m, j), Fj.add(V, -m - C, "Attacking " + (j === jI ? "unclaimed land" : iI[j]) + " with " + m + " troops", 1, "attack_" + j), bI[V] -= m + C, EV.ba(V, !1)
}

function q(V, j) {
    var I, m;
    for (I = hI[V].length - 1; 0 <= I; I--)
        if (Lj.ca(hI[V][I]))
            for (m = 3; 0 <= m; m--)
                if (Lj.v(hI[V][I] + t[m]) && Lj.A(hI[V][I] + t[m]) === j) {
                    rI[V].push(hI[V][I]);
                    break
                }
}

function Z(V, j) {
    for (var I = rI[j].length - 1; I >= V; I--) Lj.B(rI[j][I], j)
}

function d(V) {
    for (var j, I = hI[V].length - 1; 0 <= I; I--)
        if (Lj.ca(hI[V][I]))
            for (j = 3; 0 <= j; j--)
                if (Lj.u(hI[V][I] + t[j])) {
                    rI[V].push(hI[V][I]);
                    break
                }
}

function i(V, j) {
    var I, m, C = hI[V].length,
        S = 256 <= C ? 12 : 32 <= C ? 6 : 1;
    C = C - 1 - cj.da(S), A = 0;
    V: for (; 0 <= C; C -= S)
        for (m = 3; 0 <= m; m--) {
            var l = Lj.u(hI[V][C] + t[m]) ? jI : Lj.A(hI[V][C] + t[m]);
            if (l === jI || Lj.v(hI[V][C] + t[m]) && l !== V && (j || Zl(V, l))) {
                for (I = A - 1; 0 <= I; I--)
                    if (p[I] === l) continue V;
                if (p[A] = l, ++A >= g) return !0
            }
        }
    return 0 < A
}

function c(V, j) {
    var I, m;
    for (A = 0, I = hI[V].length - 1; 0 <= I; I--)
        for (m = 3; 0 <= m; m--) {
            var C = Lj.u(hI[V][I] + t[m]) ? jI : Lj.A(hI[V][I] + t[m]);
            if (C === jI || Lj.v(hI[V][I] + t[m]) && C !== V && (j || Zl(V, C))) return p[A++] = C, !0
        }
    return !1
}

function E() {
    var V;
    for (V = A - 1; 0 <= V; V--)
        if (p[V] === jI) {
            for (A--; V < A; V++) p[V] = p[V + 1];
            return !0
        } return !1
}

function o(V) {
    var j, I;
    for (j = A - 1; 0 <= j; j--)
        if (Qj.ea(V, p[j]))
            for (A--, I = j; I < A; I++) p[I] = p[I + 1];
    return 0 === A
}

function N() {
    var V;
    for (V = A - 1; 0 <= V; V--)
        if (p[V] >= PV) return !0;
    return !1
}

function M() {
    var V, j;
    for (V = A - 1; 0 <= V; V--)
        if (p[V] < PV)
            for (A--, j = V; j < A; j++) p[j] = p[j + 1];
    return 0 < A
}

function J(V) {
    var j, I = p[0],
        m = bI[I] + Qj.J(I, V);
    for (j = A - 1; 1 <= j; j--) {
        var C = bI[p[j]] + Qj.J(p[j], V);
        C < m && (I = p[j], m = C)
    }
    return I
}

function s(V) {
    var j = p[0];
    if (1 === A) return j;
    var I = Kl(MI[V] + oI[V], 2),
        m = Kl(JI[V] + NI[V], 2),
        C = Ll(I - Kl(MI[j] + oI[j], 2)) + Ll(m - Kl(JI[j] + NI[j], 2));
    for (V = A - 1; 1 <= V; V--) {
        var S = Ll(I - Kl(MI[p[V]] + oI[p[V]], 2)) + Ll(m - Kl(JI[p[V]] + NI[p[V]], 2));
        S < C && (C = S, j = p[V])
    }
    return j
}

function O() {
    return p[cj.da(A)]
}

function b(V, j) {
    if (fV && (G[V] = 0), Qj.fa(V) && !(60 > j))
        if (0 === hI[V].length) oV.check(V, cV.ga[V - PV]) || (cV.ha(V - PV, 200), h(V, j, cV.ga[V - PV], _j.ia(V)));
        else if (!(0 < $I[V].length && cj.random() < cj.value($I[V].length > hI[V].length ? 7 : 3) && oV.check(V, cV.ga[V - PV]))) {
        var I = _j.ia(V);
        bI[V] > I && j < bI[V] - I && (j = bI[V] - I), fV ? function(V, j, I, m) {
            i(V, !1) || c(V, !1) ? (G[V] = 1, o(V) || (E() ? (U(V, j), r(V, jI, I)) : (cj.ja(cV.ka[I]) ? m = J(V) : (N() && cj.ja(cV.la[I]) && M(), m = s(V)), H(V, j, m), r(V, m, I)))) : 0 < $I[V].length && cj.random() < cj.value(60) && oV.check(V, I) || (cV.ha(V - PV, 200), h(V, j, I, m))
        }(V, j, cV.ga[V - PV], I) : function(V, j, I) {
            !i(V, !0) && !c(V, !0) || o(V) || (E() ? U(V, j) : cj.ja(cV.ka[I]) ? H(V, j, J(V)) : (N() && cj.ja(cV.la[I]) && M(), H(V, j, s(V))))
        }(V, j, cV.ga[V - PV])
    }
}

function r(V, j, I) {
    3 <= I && 2142 < pS.ma() && (j === jI || bI[j] < Kl(bI[V], 20)) && cV.ha(V - PV, 25)
}

function h(V, j, I, m) {
    if (0 !== GS.na[V] && !(5 === I && bI[V] < m || 4 === I && bI[V] < Kl(m, 2)))
        for (I = cj.da(YI), m = 0; m < YI; m++) {
            var C = TI[(m + I) % YI];
            if (GS.na[C] === GS.na[V] && 1 === G[C]) {
                DC(V, C, j), C < PV && cj.random() < cj.value(10) && (G[C] = 0);
                break
            }
        }
}

function $(V, j) {
    (i(V, !0) || c(V, !0)) && (E() ? U(V, j) : H(V, j, O()))
}

function H(V, j, I) {
    if (Kl(bI[V], 8) > bI[I]) {
        var m = Kl(11 * bI[I], 5);
        j = j > m ? j : m
    }
    m = rI[V].length, q(V, I), k(V, I, m, j)
}

function U(V, j) {
    var I = jI,
        m = rI[V].length;
    return d(V), rI[V].length !== m && (k(V, I, m, j), !0)
}
self.aiCommand746 = function(V) {
    0 === V ? oS() : 1 !== V || 14 > eS || mj.oa()
};
var T = [60, 74, 112, 200, 256, 512];

function Y() {
    var V, j, I, m, C, S;
    this.pa = "Very Easy;Easy;Normal;Hard;Harder;Very Hard".split(";"), this.qa = [97, 95, 93, 90, 87, 84], this.la = [98, 95, 90, 40, 20, 0], this.ra = [85, 70, 65, 30, 7, 3], this.ka = [0, 0, 0, 0, 50, 90], this.init = function() {
        var l;
        if (V = new Uint8Array(vV), j = new Uint16Array(vV), I = new Uint16Array(vV), m = new Uint8Array(vV), this.ga = new Uint8Array(vV), C = new Uint16Array(vV), S = new Uint16Array(vV), VI.isActive) {
            if (VI.ta.sa)
                for (l = vV - 1; 0 <= l; l--) this.ga[l] = VI.ta.sa[l + 1]
        } else if (9 === kV) this.ua();
        else if (Aj.isActive && Aj.va)
            for (l = vV - 1; 0 <= l; l--) this.ga[l] = 5;
        else if (nV && Aj.isActive && Aj.wa)
            for (l = vV - 1; 0 <= l; l--) this.ga[l] = aj.na[0].xa;
        else if (nV)
            if (fV)
                for (l = vV - 1; 0 <= l; l--) this.ga[l] = aj.na[GS.na[l + PV] - 1].xa;
            else
                for (l = vV - 1; 0 <= l; l--) this.ga[l] = aj.na[0].xa;
        else {
            var a = 8 === kV ? 1 : 0;
            for (l = vV - 1; 0 <= l; l--) this.ga[l] = a
        }
        for (l = vV - 1; 0 <= l; l--) 2 >= this.ga[l] ? (m[l] = 5, C[l] = S[l] = 1040, 0 === this.ga[l] ? (j[l] = 1e3, I[l] = 1e3) : 1 === this.ga[l] ? (j[l] = 1e3, I[l] = 920, C[l] = S[l] = 1100) : (j[l] = 1e3, I[l] = 870)) : 4 >= this.ga[l] ? (m[l] = 1 + cj.da(20), S[l] = 250 + cj.da(1501), C[l] = 500 + cj.da(501), 3 === this.ga[l] ? (j[l] = 600 + cj.da(101), I[l] = 300 + cj.da(401)) : (j[l] = 300 + cj.da(201), I[l] = 100 + cj.da(201))) : (C[l] = 1e3, S[l] = 1e3, m[l] = 35 + cj.da(16), j[l] = 400 + cj.da(101), I[l] = 50 + cj.da(101)), V[l] = 1 + Kl(C[l] * cj.random(), 10 * cj.value(100))
    }, this.ua = function() {
        var V, j, I = Xj.ya;
        for (V = I - 1; 0 <= V; V--) this.ga[V] = 5;
        for (j = 0; 6 > j; j++)
            if (0 < Xj.za[j]) {
                for (V = I + Xj.za[j] - 1; V >= I; V--) this.ga[V] = j;
                I += Xj.za[j]
            }
    }, this.ha = function(j, I) {
        0 <= j && (V[j] = I)
    }, this.Aa = function(l) {
        if (0 == --V[l]) {
            C[l] !== S[l] && (C[l] += C[l] < S[l] ? 3 : -3), j[l] !== I[l] && (j[l] += j[l] < I[l] ? m[l] : -m[l], j[l] = Math.abs(j[l] - I[l]) <= m[l] ? I[l] : j[l]), V[l] = Kl(C[l], 10);
            var a = l + PV;
            b(a, Kl(j[l] * bI[a], 1e3))
        }
    }
}

function w() {
    $V.Ba(), zj.Ba(), yV.Ca(), Uj.Ba()
}

function R() {
    _j.Ba(), uj.Ba(), MV.Ba(), Tj.Da(), Rj.Ba(), NV.Ba(), EV.Ba(), JV.Ba(),
        function() {
            for (var V, j = YI - 1; 0 <= j; j--) sI[TI[j]] <= Kl(OI[TI[j]], 4) ? 1e3 >= sI[TI[j]] && (2 !== EI[TI[j]] || 0 === sI[TI[j]]) && EC(TI[j]) : sI[TI[j]] >= OI[TI[j]] ? OI[TI[j]] = sI[TI[j]] : (V = Kl(OI[TI[j]] - sI[TI[j]], 1e3), OI[TI[j]] -= 1 > V ? 1 : V)
        }(), UC(), xV.Ba(), Xj.Ba(), zj.Ba(), yV.Ba(), bj.Ba(), Ca("hoveringTooltips") && vj.Ba(), uV.Ba(), UV.Ba(), $V.Ba(), xj.Ba(), YV.Ba(), $j.Da(), FS.Ba(), QS.Da(), Uj.Ba()
}

function u() {
    sV.Ba(), Vj.Ba(), TV.Ba(), Jj.Ba(), Hj.Ea()
}

function x() {
    xV.Fa(!1), UV.Fa(), yV.Fa(!1), uV.Fa(), YV.Fa(), $j.Ga(), zj.Ha(), QS.Ia()
}

function y() {
    zj.Ha() && (pS.request = !0), Uj.Ba()
}

function VV() {
    function V(V) {
        var j;
        for (j = m - 1; 0 <= j; j--) 0 === S[C[j]] && sI[C[j]] >= V && Q(C[j])
    }

    function j(V) {
        S[V] = 10 === S[V] ? I : 1e3 > sI[V] ? 3 : 1e4 > sI[V] ? 2 : 6e4 > sI[V] ? 1 : 0
    }
    var I, m, C, S, l, a;
    this.init = function() {
        l = a = 0, I = 6, m = 0, C = new Uint16Array(jI), S = new Uint8Array(jI)
    }, this.Ba = function() {
        var I;
        for (l = FS.R[13], a = bI[GV], I = m - 1; 0 <= I; I--) 10 === S[C[I]] ? j(C[I]) : 0 == S[C[I]]-- && (j(C[I]), Q(C[I]));
        16e4 <= sI[ZI[0]] && (V(16e4), 3e5 <= sI[ZI[0]] && V(3e5)), sI[GV] > FS.R[7] && (FS.R[7] = sI[GV]), FS.R[14] += a - bI[GV] + l - FS.R[13]
    }, this.O = function(V) {
        var j;
        for (j = m - 1; 0 <= j; j--)
            if (V === C[j]) {
                for (m--, V = j; V < m; V++) C[V] = C[V + 1];
                break
            }
    }, this.ba = function(V, j) {
        var I;
        for (I = m - 1; 0 <= I; I--)
            if (V === C[I]) return;
        C[m++] = V, S[V] = j ? 2 : 10
    }
}

function jV() {
    function V(V) {
        if (Lj.o(V) && (Lj.u(V) || Lj.A(V) !== S && Zl(S, Lj.A(V)))) {
            if (ij.Ja(S, V)) return 2;
            if (0 == I--) return 0
        }
        return 1
    }

    function j(j, I) {
        for (var l, a, K, e, L, B, D, P = j; P < j + 50 * I; P += I)
            if (l = 1 > (l = oI[S] - P) ? 1 : l, a = 1 > (a = NI[S] - P) ? 1 : a, K = (K = MI[S] + P) >= JS - 1 ? JS - 2 : K, B = (e = (e = JI[S] + P) >= sS - 1 ? sS - 2 : e) - a, (D = Kl(2 * cj.random() * (K - l + e - a), cj.value(100))) <= (L = K - l) ? (m = l + D, C = a) : D <= L + B ? (m = K, C = a + D - L) : D <= 2 * L + B ? (m = l + D - L - B, C = e) : (m = l, C = a + D - 2 * L - B), 1 !== (l = V(Lj.Ka(m, C)))) return l;
        return 1
    }
    var I, m, C, S;
    this.check = function(l, a) {
        if (0 === $I[S = l].length) return !1;
        if (function() {
                I = 3;
                V: {
                    for (var l = 40; 1 <= l; l--) {
                        m = oI[S] + Kl(cj.random() * (MI[S] - oI[S] + 1), cj.value(100)), C = NI[S] + Kl(cj.random() * (JI[S] - NI[S] + 1), cj.value(100));
                        var a = V(Lj.Ka(m, C));
                        if (1 !== a) break V
                    }
                    a = 1
                }
                return 0 !== a && (2 === a || 0 !== (a = j(1, 1)) && (2 === a || 2 === j(54, 4)))
            }()) {
            var K = Kl(cV.ra[a] * bI[S], 100);
            if (100 > K && 100 <= bI[S] && (K = 100), 100 <= K) return BC(S, ij.La(), Lj.Ka(m, C), K)
        }
        return !1
    }
}

function IV() {
    var V, j;
    this.init = function() {
        V = vV, j = new Uint16Array(vV);
        for (var I = vV - 1; 0 <= I; I--) j[I] = I
    }, this.Ba = function() {
        for (var I = V - 1; 0 <= I; I--)
            if (0 === EI[j[I] + PV]) {
                var m = I;
                for (V--; m < V; m++) j[m] = j[m + 1]
            } else cV.Aa(j[I])
    }
}

function mV() {
    function V(V, a, K, e, L, B) {
        0 < K && 1e3 >= K && (j.push(V), I.push(a), m.push(K), C.push(e), S.push(L), l.push(B))
    }
    var j, I, m, C, S, l;
    this.init = function() {
        j = [], I = [], m = [], C = [], S = [], l = []
    }, this.Ba = function() {
        var V, a = j.length;
        for (V = 0; V < a; V++)
            if (0 === I[V]) LC(j[V], C[V], m[V]);
            else if (1 === I[V]) this.Ma(j[V], m[V], S[V], l[V]);
        else if (2 === I[V]) this.Na(j[V], C[V]);
        else if (6 === I[V]) {
            var K = j[V];
            0 !== EI[K] && 2 !== UI[j] && $j.Oa(K, 1 === C[V])
        } else 7 === I[V] && this.Pa(j[V], C[V]);
        0 < a && this.init()
    }, this.Ma = function(V, I, m, C) {
        0 !== EI[V] && 2 !== UI[j] && ij.Ja(V, Lj.Ka(m, C)) && BC(V, ij.La(), Lj.Ka(m, C), Kl(I * bI[V], 1e3)) && V === GV && (FS.R[0] += I, FS.R[1]++, FS.R[2]++)
    }, this.Na = function(V, I) {
        if (0 !== EI[V] && 2 !== UI[j] && Qj.ea(V, I)) {
            var m = Qj.J(V, I);
            if (Qj.T(V, I, 0), Fj.add(V, m, "Cancelled attack against " + (I === jI ? "unclaimed land" : iI[I]), 4, "cancel_" + I), V !== GV) bI[V] += m, _j.P(V);
            else {
                var C = bI[V];
                bI[V] += m, _j.P(V), FS.R[13] -= bI[V] - C
            }
        }
    }, this.Pa = function(V, I) {
        if (0 !== EI[V] && 2 !== UI[j]) {
            var m = Qj.Qa(V, I);
            if (-1 !== m) {
                var C = Qj.I(V, m);
                Qj.K(V, m, 0), Fj.add(V, C, "Cancelled boat", 4), bI[V] += C, _j.P(V)
            }
        }
    }, this.aa = function(j, I, m) {
        1 === mI && V(j, 0, I, m, 0, 0)
    }, this.Ra = function(j, I, m, C) {
        1 === mI && (_V ? ZV.Sa(j, m, C) : V(j, 1, I, 0, m, C))
    }, this.Ta = function(j, I) {
        1 === mI && V(j, 2, 1, I, 0, 0)
    }, this.Ua = function(j, I) {
        1 === mI && V(j, 7, 1, I, 0, 0)
    }, this.Va = function(j, I) {
        1 === mI && V(j, 6, 1, I, 0, 0)
    }, this.Wa = function(V) {
        1 === mI && 0 !== EI[V] && 2 !== UI[V] && (8 === kV ? zS.Xa(1 - V) : this.Ya(V)), $V.Za(V, 4)
    }, this.Ya = function(V) {
        _V ? (EC(V), UC()) : Rj.replace(V)
    }, this.$a = function(V) {
        0 !== EI[V] && 2 !== UI[V] && hV._a(V) && (1 === YI ? zS.Xa(V) : ($V.Za(V, V === GV ? 21 : 22), 8 === kV ? zS.Xa(1 - V) : nV ? (EC(V), UC(), _V && ZV.Da()) : this.Ya(V)))
    }
}

function CV() {
    function V(V) {
        for (m--; V < m; V++) C[V] = C[V + 1], S[V] = S[V + 1], l[V] = l[V + 1], a[V] = a[V + 1], K[V] = K[V + 1]
    }
    var j, I, m, C, S, l, a, K;
    this.init = function() {
        j = 1, m = 0, I = 2 * jI, C = new Uint16Array(I), S = new Uint8Array(I), l = new Uint16Array(I), a = new Uint32Array(I), K = new Uint32Array(I)
    }, this.setPosition = function(V, j) {
        a[V] = j
    }, this.Ba = function() {
        for (var V = m - 1; 0 <= V; V--) 0 == S[V]-- && (S[V] = 2, Ej.ab(V, l[V], C[V], a[V], K[V]))
    }, this.bb = function(j, I) {
        var S;
        for (S = m - 1; 0 <= S; S--)
            if (j === C[S] && I === l[S]) {
                V(S);
                break
            }
    }, this.cb = function(j) {
        var I;
        for (I = m - 1; 0 <= I; I--) j === C[I] && (Ej.eb(j, a[I]), V(I))
    }, this.fb = function(V, e, L) {
        return m >= I ? 0 : (C[m] = V, S[m] = 0, l[m] = j, a[m] = e, K[m] = L, V = j, j++, m++, j = j > 2 * I ? 1 : j, V)
    }, this._ = function() {
        if (!(40 > GI || 0 === m)) {
            var V, j = QI / GI,
                I = _I / GI,
                S = (IS + QI) / GI,
                e = (mS + _I) / GI;
            for (wC.textAlign = Gm, wC.textBaseline = pm, V = m - 1; 0 <= V; V--) {
                var L = Lj.gb(a[V]),
                    B = Lj.hb(a[V]),
                    D = C[V];
                if (L > j - 1 && L < S && B > I - 1 && B < e && 0 !== EI[D]) {
                    var P = Math.floor(.94 * GI * zj.ib(D));
                    if (!(6 > P)) {
                        L = Math.floor(IS * (L + .5 - j) / (S - j)), B = Math.floor(mS * (B + .48 - I) / (e - I)), wC.font = zm + P + km, wC.fillStyle = wI, wC.fillText(iI[D], L, B);
                        var W = Math.floor(.57 * P);
                        6 > W || (D = Qj.I(D, Qj.Qa(D, l[V])), wC.font = zm + W + km, wC.fillText(UV.jb(D), L, B + Math.floor(.82 * P)))
                    }
                }
            }
        }
        if (0 !== m && Ca("boatLines"))
            for (wC.setTransform(1, 0, 0, 1, 0, 0), V = m - 1; 0 <= V; V--) {
                wC.strokeStyle = Lj.kb(C[V]);
                var v = Lj.gb(a[V]),
                    t = Lj.hb(a[V]),
                    n = Lj.gb(K[V]),
                    F = Lj.hb(K[V]);
                for (wC.beginPath(), wC.moveTo(jC(v + .5), IC(t + .5)); !Lj.o(Lj.Ka(v, t));) Math.abs(n - v) >= Math.abs(F - t) ? n > v ? v++ : v-- : F > t ? t++ : t--, wC.lineTo(jC(v + .5), IC(t + .5));
                wC.stroke()
            }
    }
}

function SV() {
    function V(V) {
        W = pS.lb, S = l = C = 0, a = (v = 33) / V, m = 1 / (V / v / 4), K = (IS / 2 + QI) / GI, e = (mS / 2 + _I) / GI, L = GI
    }

    function j(V) {
        .125 > Math.abs(Math.log(P / L)) && (P = V * L)
    }

    function I(V, j, I, m) {
        B = (V + I + 1) / 2, D = (j + m + 1) / 2, P = .9 * ((V = IS / (I - V + 1)) < (j = mS / (m - j + 1)) ? V : j)
    }
    var m, C, S, l, a, K, e, L, B, D, P, W, v, t = !1,
        n = !1;
    this.isActive = function() {
        return t
    }, this.mb = function() {
        V(1), this.nb(0, 0, JS - 1, sS - 1), _V || this.ob(GV, 3e3, !0, .3)
    }, this.ob = function(I, m, C, S) {
        if (!(QV || t && !C && n || 0 === sI[I])) {
            wV.pb = !1, n = C, V(m), B = (oI[I] + MI[I] + 1) / 2, D = (NI[I] + JI[I] + 1) / 2, m = MI[I] - oI[I] + 1, I = JI[I] - NI[I] + 1;
            var l = mS / I;
            P = (C = IS / m) < l ? C : l, P *= 0 !== S ? S : 20 > m && 20 > I ? .5 : .9, j(.875), t = !0, dj.qb()
        }
    }, this.rb = function(m) {
        wV.pb = !1, n = !0, V(m), I(0, 0, JS - 1, sS - 1), j(.875), t = !0, dj.qb()
    }, this.nb = function(V, j, m, C) {
        I(V, j, m, C), GI = P, wV.sb(B, IS / 2), wV.tb(D, mS / 2), WS.ub()
    }, this.vb = function() {
        return (!t || !n) && (t = !1, !0)
    }, this.Ba = function() {
        if (t) {
            .5 > C ? l < a && (l += a * m, S = C) : C > 1 - S && (l = (l -= a * m) < a * m ? a * m : l), W = W >= pS.lb ? pS.lb - 1 : W;
            var V = pS.lb - W;
            1e3 < V ? C = 1 : C = 1 < (C += l * V / v) ? 1 : C, W = pS.lb;
            var j = GI;
            V = QI;
            var I = _I;
            j = (GI = L * Math.pow(P / L, C)) / j;
            var n = 1 - (L * Math.pow(P / L, 1 - C) - L) / (P - L);
            wV.sb(K + n * (B - K), IS / 2), wV.tb(e + n * (D - e), mS / 2), zj.zoom(j, (V * j - QI) / (1 - j), (I * j - _I) / (1 - j)), WS.ub(), 1 <= C && (t = !1, tS.go = !0), pS.request = !0
        }
    }
}

function lV() {
    function V() {
        var V;
        V: {
            for (V = 0; 8 > V; V++)
                if (S = Kl(a * cj.random(), cj.value(100)), l = Kl(K * cj.random(), cj.value(100)), j()) {
                    V = !0;
                    break V
                } V = !1
        }
        if (!V) V: {
            var I, m, C, e;V = Kl(a * cj.random(), cj.value(100));
            var L = Kl(K * cj.random(), cj.value(100));
            for (I = 40; 1 <= I; I--)
                for (m = K - I; 0 <= m; m -= 40)
                    for (l = (m + L) % K, C = 40; 1 <= C; C--)
                        for (e = a - C; 0 <= e; e -= 40)
                            if (S = (e + V) % a, j()) {
                                V = !0;
                                break V
                            } V = !1
        }
        return V
    }

    function j() {
        var V, j, I = Kl(e - D, 2),
            m = B + l * e + I,
            C = L + S * e + I;
        for (V = m + D - 1; V >= m; V--)
            for (j = C + D - 1; j >= C; j--)
                if (I = Lj.Ka(j, V), !Lj.o(I) || Lj.ca(I)) return !1;
        return !0
    }

    function I() {
        EI[P] = 0, bI[P] = 0, sI[P] = OI[P] = 0, rI[P] = [], hI[P] = [], $I[P] = [], HI[P] = [], oI[P] = NI[P] = MI[P] = JI[P] = 0
    }

    function m(V, j) {
        var I, m;
        for (EI[P] = 1, bI[P] = P < PV ? CI : T[cV.ga[P - PV]], Fj.add(P, P < PV ? CI : T[cV.ga[P - PV]], "Starting troops", 0, "start"), oI[P] = V + 10, NI[P] = j + 10, JI[P] = MI[P] = 0, I = V; I < V + 4; I++)
            for (m = j; m < j + 4; m++)
                if (I > V && I < V + 3 || m > j && m < j + 3) {
                    var C = Lj.Ka(I, m);
                    Lj.o(C) && (oI[P] = I < oI[P] ? I : oI[P], MI[P] = I > MI[P] ? I : MI[P], NI[P] = m < NI[P] ? m : NI[P], JI[P] = m > JI[P] ? m : JI[P], W[sI[P]] = C, sI[P]++, Lj.G(C, P))
                } for (OI[P] = sI[P], C = sI[P] - 1; 0 <= C; C--) Lj.wb(W[C], P) ? (Lj.p(W[C], P), hI[P].push(W[C])) : Lj.xb(W[C]) ? (Lj.p(W[C], P), $I[P].push(W[C])) : Lj.yb(W[C]) && (Lj.p(W[C], P), HI[P].push(W[C]))
    }

    function C(V, j) {
        var I, m;
        for (m = j; m > j - 6; m--)
            for (I = V; I > V - 6; I--) {
                var C = Lj.Ka(I, m);
                if (Lj.ca(C)) return !1
            }
        return !0
    }
    var S, l, a, K, e, L, B, D, P, W;
    this.init = function() {
        var j;
        if (W = Array(12), D = 6, a = Kl(JS, e = 10), K = Kl(sS, e), L = Kl(JS - e * a, 2), B = Kl(sS - e * K, 2), _V)
            for (j = 0; j < PV; j++) P = j, I(), EI[P] = 1;
        if (VI.isActive && VI.ta.zb) {
            for (P = 0; P < jI; P++)
                if (1 !== EI[P]) {
                    if (P < II) {
                        var v = VI.ta.zb[P] + 1;
                        if (j = VI.ta.Ab[P] + 1, 3 < v && v < JS - 5 && 3 < j && j < sS - 5 && Lj.o(Lj.Ka(v, j)) && C(v + 3, j + 3) ? (v += 1, j += 1, I(), m(v - 2, j - 2), j = !0) : j = !1, j) continue;
                        if (V()) {
                            v = L + S * e + Kl(e, 2), j = B + l * e + Kl(e, 2), I(), m(v - 2, j - 2);
                            continue
                        }
                    }
                    I()
                }
        } else
            for (P = 0; P < jI; P++) 1 !== EI[P] && (P < II && V() ? (v = L + S * e + Kl(e, 2), j = B + l * e + Kl(e, 2), I(), m(v - 2, j - 2)) : I());
        FS.R[7] = sI[GV], FS.R[8] = bI[GV]
    }, this.Bb = function(V, j, S) {
        var l, a;
        for (P = V, l = 0; 20 > l; l++)
            for (V = j + l; V >= j - l; V--)
                for (a = S + l; a >= S - l; a--)
                    if ((V === j + l || V === j - l || a === S + l || a === S - l) && 3 < V && V < JS - 5 && 3 < a && a < sS - 5 && Lj.o(Lj.Ka(V, a)) && C(V + 3, a + 3)) {
                        if (0 < sI[P]) {
                            for (S = MI[P]; S >= oI[P]; S--)
                                for (j = JI[P]; j >= NI[P]; j--) l = 4 * (j * JS + S), Lj.L(P, l) && (Lj.Cb(l), sI[P]--);
                            I()
                        }
                        return m(V - 1, a - 1), !0
                    } return !1
    }, this.Db = function(j) {
        if (P = j, V()) {
            j = L + S * e + Kl(e, 2);
            var C = B + l * e + Kl(e, 2);
            I(), m(j - 2, C - 2)
        } else I()
    }
}

function aV() {
    oj.Eb(), wC.setTransform(GI, 0, 0, GI, 0, 0), wC.imageSmoothingEnabled = 3 > GI, wC.drawImage(OS, wV.Fb(), wV.Gb()), bj._(), wC.drawImage(YS, wV.Fb(), wV.Gb()), wC.imageSmoothingEnabled = !1, oj._(), wC.setTransform(1, 0, 0, 1, 0, 0), zj._(), JV._(), Pj._(), pI.Hb(), Ca("hoveringTooltips") && vj._(), QV || (wC.imageSmoothingEnabled = !1, $V._(), xV._(), YV._(), $j.Ib(), yV._(), wV._(), TV._(), QS.Ib(), uV._(), UV._(), hV._(), Vj._(), rV.Ib(), gS.Ib(), Jj._(), pS.Jb())
}

function KV(V, j, I, m, C, S, l) {
    V.fillStyle = tm, S = Math.floor(m * S), S += (S - C) % 2;
    var a = Math.floor((S - C) / 2);
    m = Math.floor((m - S) / 2), V.fillRect(j + m, I + m + a, S, C), l && V.fillRect(j + m + a, I + m, C, S)
}

function eV() {
    this.oa = null, this.Kb = function(V) {
        this.oa = V, $V.Lb(this.oa)
    }, this.Mb = function(V) {
        var j = 8 / (1 + Math.pow(2, (this.oa[V].Nb - this.oa[1 - V].Nb) / 10 / 32));
        j = Math.floor(10 * j + .5);
        var I = this.Ob(this.oa[V].Nb + j + 1);
        j = this.Ob(this.oa[1 - V].Nb - j), 0 === V ? $V.Pb(this.oa, I, j, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : $V.Pb(this.oa, j, I, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
    }, this.Ob = function(V) {
        return 16e3 <= (V = 0 > V ? 0 : 16e3 < V ? 16e3 : V) ? "Unknown" : (V / 10).toFixed(1)
    }
}

function LV() {
    function V(V) {
        for (var m = j.length - 1; 0 <= m; m--)
            if (V >= j[m] && V < I[m]) return m;
        return -1
    }
    var j, I, m;
    ! function() {
        j = [32, 65, 191, 913, 931], I = [64, 127, 688, 930, 1155], m = Array(j.length + 1);
        for (var V = 0; V < m.length; V++) {
            m[V] = 0;
            for (var C = V - 1; 0 <= C; C--) m[V] += I[C] - j[C]
        }
    }(), this.Qb = function(j) {
        if (0 === (j = j.trim()).indexOf("Bot ") || 0 === j.indexOf("[Bot] ")) j = !1;
        else V: {
            var I = (j = j.trim()).length;
            if (3 > I || 20 < I) j = !1;
            else {
                for (var m, C = 0, S = 0; S < I; S++)
                    if (C += 65 <= (m = j.charCodeAt(S)) && 90 >= m || 1040 <= m && 1071 >= m ? 1 : 0, -1 === V(m)) {
                        j = !1;
                        break V
                    } j = !(3 < C && C > Math.floor(I / 2))
            }
        }
        return j
    }, this.Rb = function(I) {
        for (var C, S = (I = I.trim()).length, l = [], a = 0; a < S; a++) {
            var K = V(C = I.charCodeAt(a));
            l.push(m[K] + C - j[K])
        }
        return l
    }, this.Sb = function(V) {
        for (var I, C = "", S = V.length, l = 0; l < S; l++)
            for (I = 1; I < m.length; I++)
                if (V[l] < m[I]) {
                    I = j[I - 1] + V[l] - m[I - 1], C += String.fromCharCode(I);
                    break
                } return C
    }, this.Tb = function(V) {
        V = this.Rb(V);
        for (var j = "", I = 0; I < V.length; I++) j += 10 > V[I] ? "00" : 100 > V[I] ? "0" : "", j += V[I].toString(10);
        return j
    }, this.Ub = function(V) {
        for (var j = Array(Math.floor(V.length / 3)), I = 0; I < V.length; I += 3) j[Math.floor(I / 3)] = parseInt(V.substring(I, I + 3));
        return this.Sb(j)
    }, this.l = function(V) {
        var j, I = [V.length];
        for (j = 0; j < V.length; j++) I[j] = V.charCodeAt(j) - 48;
        var m = "";
        for (j = 0; j < V.length; j++)
            if (j === V.length - 1 || 51 < 10 * I[j] + I[j + 1]) m += I[j].toString();
            else {
                var C = 10 * I[j] + I[j + 1];
                m += String.fromCharCode(C + (26 > C ? 65 : 71)), j++
            } return m
    }, this.j = function(V) {
        for (var j, I = "", m = 0; m < V.length; m++) 48 <= (j = V.charCodeAt(m)) && 58 > j ? I += String.fromCharCode(j) : 65 <= j && 75 > j ? I += "0" + (j - 65).toString() : 75 <= j && 91 > j ? I += (j - 65).toString() : 97 <= j && 123 > j && (I += (j - 71).toString());
        return I
    }, this.Vb = function(V) {
        var j, I = V.length,
            m = [];
        for (j = 0; j < I; j++) {
            var C = V.charCodeAt(j);
            58 > C ? m.push(V[j]) : (C = 91 > C ? C - 65 : C - 71, m.push(String(Kl(C, 10))), m.push(String(C - 10 * Kl(C, 10))))
        }
        for (I = m.length - 2, C = 0, V = [], j = 0; j < I; j += 3) V[C++] = parseInt(m[j] + m[j + 1] + m[j + 2]);
        return V
    }, this.Wb = function() {
        var V, j = "";
        for (V = 0; 6 > V; V++) {
            var I = 48 + cj.random() % 36;
            I += 58 <= I ? 39 : 0, j += String.fromCharCode(I)
        }
        return j
    }
}

function BV() {
    this.Xa = function(V) {
        if (2 === mI) var j = !0;
        else $j.Xb(), mI = 2, tV = WV, j = !1;
        if (!j) {
            if (8 === kV) {
                var I = V = 0 > V ? sI[0] >= sI[1] ? 0 : 1 : V;
                (j = V === GV) ? $V.Za(V, 2): $V.Za(1 - GV, 3), dV.Mb(V)
            } else fV ? (V = QS.Yb(), j = GS.na[GV] === V, 9 === kV ? I = j ? ZI[0] : jI : (I = (V = GS.Zb(GS.$b[V]))[0], jI !== I && $V._b(V[1])), $V.ac(j)) : (j = (I = ZI[0]) === GV, $V.bc(I));
            nV || Aj.isActive || sj.cc(function() {
                var V, j = 0;
                for (V = YI - 1; 0 <= V; V--) j += bI[TI[V]];
                return j % 4096
            }(), I), Vj.show(j, !1), $V.dc(!0), xV.Fa(!0), yV.Fa(!0), pS.request = !0, tS.ec(), C(0)
        }
    }
}

function DV() {
    this.Sa = function(V, j, I) {
        0 !== EI[V] && OV.Bb(V, j, I) && (pS.request = !0)
    }, this.Da = function() {
        _V = !1;
        for (var V = 0; V < PV; V++) 0 !== EI[V] && 0 === sI[V] && OV.Db(V);
        0 !== EI[GV] ? (FS.R[7] = sI[GV], FS.R[8] = bI[GV], YV.show(), yV.fc(), sV.nb(oI[GV] - 5, NI[GV] - 5, MI[GV] + 5, JI[GV] + 5), Jj.init()) : Vj.show(!1, !1), $V.gc(18), zj.id(), zj.Ha(), ZV = null, tS.hc = !0, tS.ic(), nV && C(1)
    }
}
var PV, WV, vV, tV, nV, FV, gV, AV, pV, GV, QV, _V, zV, fV, XV, kV, qV, ZV, dV, iV, cV, EV, oV, NV, MV, JV, sV, OV, bV, rV, hV, $V, HV, UV, TV, YV, wV, RV, uV, xV, yV, Vj, jj, Ij, mj, Cj, Sj, lj, aj, Kj, ej, Lj, Bj, Dj, Pj, Wj, vj, tj, nj, Fj, gj, Aj, pj, Gj, Qj, _j, zj, fj, Xj, kj, qj, Zj, dj, ij, cj, Ej, oj, Nj, Mj, Jj, sj, Oj, bj, rj, hj, $j, Hj, Uj, Tj, Yj, wj, Rj, uj, xj, yj, VI, jI = 512,
    II = 512,
    mI = 0,
    CI = 512,
    SI = 2;

function lI(V, j, I, m, S) {
    FV = QV = !1, qV = S, fV = 7 > (kV = m) || 9 === kV, WV = PV = I.length, nV = 1 === WV, XV = 9 === (kV = 8 === (kV = 10 === kV && nV ? 7 : kV) && 2 !== PV ? 7 : kV) ? 2 : kV + 2, iV = 2 >= PV ? 30 : 50 >= PV ? 40 : 50, Aj.isActive && (iV += 20), zV = _V = !(VI.isActive && !VI.ta.jc || Aj.isActive && !Aj.kc) && (fV || 100 > PV), ZV = _V ? new DV : null, CI = 512, II = jI, nV && (II = aj.lc()), vV = II - PV, tV = 0, GV = j, Fj.init(), cj.mc(V),
        function(V) {
            var j;
            for (cI = iI = Array(jI), EI = new Uint8Array(jI), oI = new Uint16Array(jI), NI = new Uint16Array(jI), MI = new Uint16Array(jI), JI = new Uint16Array(jI), sI = new Uint32Array(jI), OI = new Uint32Array(jI), bI = new Uint32Array(jI), rI = Array(jI), hI = Array(jI), $I = Array(jI), HI = Array(jI), UI = new Uint8Array(jI), j = V.length - 1; 0 <= j; j--) iI[j] = V[j].name, UI[j] = V[j].nc
        }(I), Xj.init(), GS.init(I), mI = 1, AV = 15e8, pV = 1e9, FS.init(), void 0 === YS && (YS = document.createElement("canvas")), YS.width = JS, YS.height = sS, RS = YS.getContext("2d", {
            alpha: !0
        }), uS = RS.getImageData(0, 0, JS, sS), wS = uS.data, kj.oc(), tS.Kb(), _j.init(), G = fV ? new Uint8Array(jI) : null, Lj.init(I), oj.init(), QS.Kb(), cV.init(), fj.qc(), fj.rc(), OV.init(),
        function() {
            var V;
            for (YI = 0, V = jI - 1; 0 <= V; V--) 0 !== EI[V] && YI++;
            TI = new Uint16Array(YI);
            var j = 0;
            for (V = 0; V < jI; V++) 0 !== EI[V] && (TI[j++] = V)
        }(), bj.init(), gS.Kb(), RS.putImageData(uS, 0, 0), xV.init(), wV.init(), YV.init(), $j.Kb(), uV.init(), yV.init(), hV.init(), TV.init(), $V.init(), UV.init(), rV.init(), Vj.init(), MV.init(), JV.init(), EV.init(), NV.init(), B = 0, D = 2048, P = new Uint32Array(4 * D), W = 0, v = new Uint32Array(D), (t = new Int32Array(4))[0] = -4 * JS, t[1] = 4, t[2] = -t[0], t[3] = -t[1], n = new Uint8Array(JS * sS), Qj.init(), zj.init(), uj.init(), Rj.ec(), xj.init(), Tj.Kb(), 8 === kV ? (dV = new eV).Kb(I) : dV = null, nV ? pS.sc() : pS.tc(), sV.mb(), 0 === EI[GV] && Vj.show(!1, !0), zj.Ha(), Jj.init(), pS.request = !0, nV && _V || C(1)
}

function aI() {
    Uj.close(Uj.uc, 3246), mI = 0, pS.vc(), Kj.init(), C(0), lS ? window.webkit.messageHandlers.iosCommandA.postMessage("show ad 1800000") : 12 <= eS && KS.wc(18e5), Aj.isActive && (Aj.isActive = !1)
}

function KI() {
    function V(V, j, I, m) {
        for (var C, S = 0; S < V.length; S++) {
            j.push(document.createElement("canvas")), j[S].width = I, j[S].height = I;
            var l = I,
                a = C = j[S].getContext("2d", {
                    alpha: !0
                });
            a.fillStyle = m, a.beginPath(), a.arc(Math.floor(l / 2), Math.floor(l / 2), Math.floor(.47 * l), 0, 2 * Math.PI), a.fill(), 6 === V[S] ? C.drawImage(ej.Y(19), 0, 0) : 7 === V[S] ? C.drawImage(ej.xc("emojis"), -4 * I, 0) : C.drawImage(ej.Y(3), -V[S] * I, 0)
        }
    }

    function j(V) {
        for (var j = t.length - 1; 0 <= j; j--)
            if (t[j] === V) return !0;
        return !1
    }

    function I(V) {
        return !(-1 === V || 0 === V || 6 === V || !F[5] && (8 === V || !F[4] && 7 === V) || !F[7] && (2 === V || !F[6] && 1 === V) || 3 === V && !F[2] || !(5 !== V || F[1] || F[5] || F[7]))
    }

    function m(V, j) {
        return V < S - a - P || V > S + 2 * a + P || j < l - a - P || j > l + 2 * a + P ? -1 : 3 * (j < l - P / 2 ? 0 : j < l + a + P / 2 ? 1 : 2) + (V < S - P / 2 ? 0 : V < S + a + P / 2 ? 1 : 2)
    }
    var C, S, l, a, K, e, L, B, D, P, W, v, t, n, F = [];
    this.yc = [], this.init = function() {
        t = [], F = [], C = !1, K = e = S = l = L = 0, this.zc();
        for (var V = this.Ac.length - 1; 0 <= V; V--) F.push(!1);
        F.push(!1)
    }, this.zc = function() {
        this.Ac = [], W = [], this.Bc = [];
        var j = ej.Y(3).height;
        a = Math.floor((LS ? .075 : .0468) * jS), v = a / j, P = Math.floor(a / 3), V([0, 1, 2, 3, 7, 4, 5, 6], this.Ac, j, "rgba(0,180,0,0.6)"), V([0, 4, 5], W, j, "rgba(200,0,0,0.6)"), V([0, 2, 4], this.Bc, j, "rgba(0,0,0,0.6)"), V([0, 5], this.yc, j, "rgba(200,200,0,0.6)"), this.Ac[6] = this.yc[1]
    }, this.click = function(V, j) {
        if (this.Cc()) {
            var I = this.Dc(V, j);
            return pS.request = 0 < I, 2 > I
        }
        return !1
    }, this.Ec = function(V, j) {
        this.Cc() || (K = V, e = j, L = (new Date).getTime())
    }, this.Fc = function(V) {
        return V < PV && 2 !== UI[V]
    }, this.Dc = function(V, S) {
        if (e = K = -1e3, 2 === UI[GV] || 0 === EI[GV] && !_V) return this.Gc(), 1;
        if (C) return this.Gc(), nS.Hc(V, S) ? (nS.Ic(V, S, B) && (C = !0), 1) : (nS.Jc(), 2);
        var l = m(V, S);
        if (!I(l) || 0 === l || 6 === l || !F[2] && 3 === l) return this.Gc(), 2;
        if (1 === l) return F[6] ? ((l = (new Date).getTime()) > n + 4e3 && (t = []), n = l, j(B) ? (this.Gc(), 1) : (t.push(B), 16 < t.length && t.shift(), this.Gc(), 1)) : 0;
        if (2 === l) {
            if (F[7]) {
                for (l = t.length - 1; 0 <= l; l--) 0 === EI[t[l]] && t.splice(l, 1);
                return 0 < t.length && (xj.Kc(1, t, !0) && ($V.Lc(t, B), sj.Mc(t, B)), t = []), this.Gc(), 1
            }
            return 0
        }
        return 3 === l ? (this.Gc(), this.Fc(B) && 7 > kV && 1071 > pS.ma() ? ($V.Nc(), 1) : ($V.Oc(), nV ? DC(GV, B, Kl(YV.Pc() * bI[GV], 1e3)) : sj.Qc(YV.Pc(), B === jI ? GV : B), 1)) : 4 === l ? (F[0] ? _V ? (this.Gc(), nV ? (ZV.Sa(0, Lj.gb(D), Lj.hb(D)), ZV.Da()) : sj.Rc(1e3, Lj.gb(D), Lj.hb(D))) : (this.Gc(), $V.Oc(), nV ? LC(GV, B, YV.Pc()) : (!zV || 300 < yV.Sc()) && sj.Qc(YV.Pc(), B === jI ? GV : B)) : F[8] ? (this.Gc(), Tj.Tc(B, YV.Pc())) : this.Gc(), 1) : 5 === l ? F[1] ? (this.Gc(), $V.Oc(), nV ? MV.Ma(GV, YV.Pc(), Lj.gb(D), Lj.hb(D)) : sj.Rc(YV.Pc(), Lj.gb(D), Lj.hb(D)), 1) : 0 : 7 === l && F[4] ? (this.Gc(), C = nS.show(V, S), 1) : 8 === l ? F[5] ? (xj.Kc(0, [B], !0) && ($V.Uc(B, 0), sj.Vc(B)), this.Gc(), 1) : 0 : (this.Gc(), 2)
    }, this.Wc = function(V, I) {
        if (this.Cc() || 2 === UI[GV] || 0 === EI[GV] && !_V) return !1;
        var m = (LS ? .0288 : .0144) * jS;
        if (Math.abs(V - K) > m || Math.abs(I - e) > m || (new Date).getTime() > L + 425) return !1;
        m = Math.floor((V + QI) / GI);
        var C = Math.floor((I + _I) / GI);
        if (1 > m || 1 > C || m >= JS - 1 || C >= sS - 1) return !1;
        var S = C * JS * 4 + 4 * m;
        if (!Lj.o(S)) return !1;
        if (2 === mI) return !!(1 <= nS.Xc && (B = Lj.A(S), this.Fc(B))) && (B === GV && this.Gc(), F[4] = !0, this.Yc(V, I));
        if (D = Lj.Ka(m, C), _V) return F[0] = !0, this.Yc(V, I);
        if (F[1] = ij.Ja(GV, D), Lj.u(S)) return B = jI, il(GV) ? F[0] = !0 : dl(GV, B) && (F[8] = !0), this.Yc(V, I);
        if ((B = Lj.A(S)) === GV) return this.Gc(), 0 !== nS.Xc && (F[4] = !0, this.Yc(V, I));
        if (m = F, C = B, C = rV.Fc(C) && !j(C) && xj.Kc(1, [C], !1), m[6] = C, F[4] = 1 <= nS.Xc && this.Fc(B), Zl(B, GV)) {
            if (F[5] = this.Fc(B) && !zj.Zc(B) && xj.Kc(0, [B], !1), m = F, C = B, 0 === t.length) C = !1;
            else if ((new Date).getTime() > n + 4e3) t = [], C = !1;
            else {
                if (S = !j(C)) {
                    V: {
                        if (fV)
                            for (S = t.length - 1; 0 <= S; S--)
                                if (!Zl(C, t[S])) {
                                    C = !0;
                                    break V
                                } C = !1
                    }
                    S = !C
                }
                C = S
            }
            return m[7] = C, cl(GV, B) ? F[0] = !0 : dl(GV, B) && (F[8] = !0), this.Yc(V, I)
        }
        return F[2] = fV, this.Yc(V, I)
    }, this.Yc = function(V, j) {
        return S = V - Math.floor(a / 2), l = j - Math.floor(a / 2), this.Cc()
    }, this.$c = function(V, j) {
        return !!this.Cc() && (C ? !nS.Hc(V, j) && (nS.Jc(), C = !1, pS.request = !0) : !I(m(V, j)) && (this.Gc(), pS.request = !0))
    }, this.Gc = function() {
        var V;
        for (V = F.length - 1; 0 <= V; V--) F[V] = !1;
        C = !1
    }, this._c = function() {
        this.Gc()
    }, this.Cc = function() {
        var V;
        for (V = F.length - 1; 0 <= V; V--)
            if (F[V]) return !0;
        return C
    }, this.Ib = function() {
        this.Cc() && this.ad()
    }, this.ad = function() {
        if (C) nS.Ib();
        else {
            var V = (a + P) / v;
            wC.imageSmoothingEnabled = !0, wC.setTransform(v, 0, 0, v, S, l), F[0] ? _V ? wC.drawImage(this.Ac[3], 0, 0) : wC.drawImage(this.Ac[0], 0, 0) : F[8] ? wC.drawImage(this.yc[0], 0, 0) : wC.drawImage(W[0], 0, 0), F[1] && wC.drawImage(this.Ac[1], V, 0), F[2] && wC.drawImage(this.Ac[2], -V, 0), F[4] && wC.drawImage(this.Ac[4], 0, V), F[5] && wC.drawImage(this.Ac[5], V, V), F[6] && wC.drawImage(this.Ac[6], 0, -V), F[7] && wC.drawImage(this.Ac[7], V, -V), wC.imageSmoothingEnabled = !1, wC.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
}

function eI() {
    function V() {
        var V = S.getContext("2d", {
            alpha: !0
        });
        V.clearRect(0, 0, m, m), V.fillStyle = xI, V.fillRect(0, 0, m, m), 0 === a && (V.fillStyle = Lm, V.fillRect(0, 0, m, m)), V.fillStyle = tm, V.fillRect(0, 0, m, 1), V.fillRect(0, 0, 1, m), V.fillRect(0, m - 1, m, 1), V.fillRect(m - 1, 0, 1, m);
        var j = .9 * m / ej.Y(0).width;
        V.imageSmoothingEnabled = !0, V.setTransform(j, 0, 0, j, Math.floor((m - j * ej.Y(0).width) / 2), Math.floor((m - j * ej.Y(0).height) / 2)), V.drawImage(ej.Y(0), 0, 0), V.setTransform(1, 0, 0, 1, 0, 0)
    }

    function j(V, j) {
        if (!hV.isOpen) return V <= m + WI && j >= YV.bd ? 0 : -1;
        if (V <= 4 * m + WI) {
            if (j >= YV.bd) return 0;
            if (j >= YV.bd - m - K * WI) return 2;
            if (j >= YV.bd - 2 * (m + K * WI)) return 3
        } else if (V <= 5.5 * m + WI && j >= YV.bd - m - K * WI) return 1;
        return -1
    }

    function I(V, j) {
        wC.setTransform(1, 0, 0, 1, WI, YV.bd - V * K * WI - V * m), wC.fillStyle = xI, wC.fillRect(0, 0, 4 * m, m), a === V + 1 && j === tm && (wC.fillStyle = Lm, wC.fillRect(0, 0, 4 * m, m)), wC.fillStyle = j, wC.fillRect(0, 0, 4 * m, 1), wC.fillRect(0, 0, 1, m), wC.fillRect(4 * m, 0, 1, m), wC.fillRect(0, m - 1, 4 * m, 1), wC.fillText(e[V], 2 * m, .54 * m)
    }
    var m, S, l, a, K, e = ["Quit Game", "Surrender", "Statistics"];
    this.init = function() {
        a = -1, this.isOpen = !1, K = LS ? 1.2 : .6, this.resize()
    }, this.resize = function() {
        m = YV.height, (S = document.createElement("canvas")).width = m, S.height = m, l = zm + Math.floor((LS ? .5 : .45) * m) + km, V()
    }, this.toggle = function() {
        (this.isOpen = !this.isOpen) ? (QV = !1, nV && 1 === mI && !_V && (setTimeout((function() {
            tS.ec()
        }), 0), C(0))) : (a = -1, V(), nV && C(1)), pS.request = !0
    }, this.click = function(V, I) {
        var m = j(V, I);
        return this.isOpen ? 0 === m ? (aI(), 2) : 1 === m ? (this.toggle(), 2) : 2 === m ? (this._a(GV) && (nV ? MV.$a(GV) : sj.dd(), this.toggle()), 2) : 3 === m && 2 <= FS.index ? (gS.ed(), pS.request = !0, 2) : gS.Cc || nV && !_V ? 1 : (this.toggle(), 2) : 0 === m ? (this.toggle(), 2) : 0
    }, this.fd = function(I, m) {
        var C = j(I, m);
        return C === a || (a = C, this.isOpen || V(), pS.request = !0), -1 !== a
    }, this._ = function() {
        if (this.isOpen) {
            var V = Math.floor(5.5 * m);
            wC.setTransform(1, 0, 0, 1, WI, YV.bd), wC.fillStyle = xI, wC.fillRect(0, 0, V, m), 0 === a ? (wC.fillStyle = Lm, wC.fillRect(0, 0, 4 * m, m)) : 1 === a && (wC.fillStyle = Lm, wC.fillRect(4 * m, 0, Math.floor(1.5 * m), m)), wC.fillStyle = tm, wC.fillRect(0, 0, V, 1), wC.fillRect(0, 0, 1, m), wC.fillRect(4 * m, 0, 1, m), wC.fillRect(0, m - 1, V, 1), wC.fillRect(V - 1, 0, 1, m), wC.font = l, wC.textBaseline = pm, wC.textAlign = Gm, wC.fillText(e[0], 2 * m, .54 * m), V = .4 * m, hV.gd(WI + 4 * m + (1.5 * m - V) / 2, YV.bd + .3 * m, V), I(1, hV._a(GV) ? tm : mm), 2 <= FS.index && I(2, tm), wC.setTransform(1, 0, 0, 1, 0, 0)
        } else wC.drawImage(S, WI, YV.bd)
    }, this._a = function(V) {
        return 0 !== EI[V] && 2 !== mI && rV.Fc(V)
    }, this.gd = function(V, j, I) {
        wC.setTransform(1, 0, 0, 1, V, j), wC.lineWidth = 2, wC.strokeStyle = tm, wC.beginPath(), wC.moveTo(0, 0), wC.lineTo(I, I), wC.moveTo(0, I), wC.lineTo(I, 0), wC.stroke()
    }
}

function LI() {
    var V, j, I, m, C, S, l, a, K, e, L, B, D, P, W;

    function v() {
        return YV.hd($V.jd()) ? $j.Cc ? YV.bd - YV.height - 2 * e : YV.bd - e : $j.Cc ? yC - YV.height - (LS ? 3 : 2) * e : yC - e
    }

    function t(V, j, I, m, C, S, l, D) {
        var P = 1e3 <= I,
            W = Math.floor(TV.measureText(j, $V.kd) + 1.5 * L + (P ? K : 1.5 * L));
        if (W + e > xC && !P && 50 !== I && 20 < j.length) {
            var v = Math.floor(.5 * j.length);
            t(V, j.substring(0, v), I, m, C, S, l, D), t(V, j.substring(v), I, m, C, S, l, D)
        } else {
            var n = I - 1e3;
            v = W + (50 === I ? B : 0);
            var F = document.createElement("canvas");
            F.width = W, F.height = K;
            var g = F.getContext("2d", {
                alpha: !0
            });
            g.font = $V.kd, g.textBaseline = pm, g.textAlign = Qm, g.clearRect(0, 0, W, K), g.fillStyle = S, g.fillRect(0, 0, W, K), g.fillStyle = C, g.fillText(j, Math.floor(1.5 * L), Math.floor(K / 2)), P && (P = K / nS.ld, g.imageSmoothingEnabled = !0, g.setTransform(P, 0, 0, P, W - K, 0), g.drawImage(nS.md[n], 0, 0)), a.unshift({
                nd: V,
                od: j,
                id: I,
                pd: m,
                qd: F,
                rd: C,
                sd: S,
                kd: W,
                td: v,
                ud: l,
                vd: D
            }), $V.log.push({
                wd: j,
                color: C,
                bgColor: S,
                xd: P ? nS.md[n] : null
            }), Dj.yd(pj)
        }
    }

    function n(V, j) {
        var I, m = 0,
            C = a.length;
        for (I = 0; I < C; I++)
            if (a[I].id === V && ++m >= j) {
                a.splice(I, 1);
                break
            }
    }

    function F(V, j, I) {
        return "rgb(" + V + "," + j + "," + I + ")"
    }

    function g(V, j) {
        var I, m = !1;
        for (I = a.length - 1; 0 <= I; I--) a[I].id !== V || j !== jI && a[I].pd !== j || (a.splice(I, 1), m = !0);
        return m
    }
    this.zd = function() {
        return v() - K
    }, this.init = function() {
        P = 0, D = LS ? 7 : 12, V = [0, 0, 0], j = [0, 0, 0], I = [220, 180, 180], m = [0, 0, 0], C = [0, 0, 0], S = [" were conquered.", " left the game.", " surrendered."], l = [" was conquered by ", " left the game.", " surrendered."], a = [], this.Ad(), this.log = [], _V && this.Za(0, 18);
        var K = "Map: " + qj.Bd() + "   Pixels: " + UV.jb(kj.Cd) + "   Land: " + UV.jb(kj.Dd) + " (" + yV.Ed(100 * kj.Dd / kj.Cd, 1) + ")",
            e = "";
        0 < kj.Fd && (e += "Water: " + UV.jb(kj.Fd) + " (" + yV.Ed(100 * kj.Fd / kj.Cd, 1) + ")"), 0 < kj.Gd && (e += 0 < kj.Fd ? "   " : "", e += "Mountains: " + UV.jb(kj.Gd) + " (" + yV.Ed(100 * kj.Gd / kj.Cd, 1) + ")"), t(340, K, 6, 0, F(215, 245, 255), yI, -1, !1), 0 < e.length && t(340, e, 6, 0, F(215, 245, 255), yI, -1, !1), 10 === kV && t(120, "Full sending against human players is disabled.", 6, 0, F(235, 255, 120), yI, -1, !1), this.Hd()
    }, this.Hd = function() {
        var V;
        if (VI.isActive) {
            var j = VI.ta.Id.length;
            for (V = 0; V < j; V++) t(400, VI.ta.Id[V], 6, 0, F(255, 255, 255), yI, -1, !1)
        }
    }, this.Ad = function() {
        var V;
        if (K = 10 > (K = Math.floor((LS ? .031 : .0249) * jS)) ? 10 : K, this.Jd = Math.floor(2 * K / 3), this.kd = zm + this.Jd + km, e = WI, L = Math.floor(K / 5), 0 < a.length) {
            var j = a;
            for (a = [], V = j.length - 1; 0 <= V; V--) t(j[V].nd, j[V].od, j[V].id, j[V].pd, j[V].rd, j[V].sd, j[V].ud, j[V].vd), this.log.pop()
        }
        this.Kd()
    }, this.Kd = function() {
        W = document.createElement("canvas"), B = TV.measureText("Accept", this.kd) + 5 * L, W.height = K, W.width = B;
        var V = W.getContext("2d", {
            alpha: !0
        });
        V.font = this.kd, V.textBaseline = pm, V.textAlign = Gm, V.clearRect(0, 0, B, K), V.fillStyle = Km, V.fillRect(0, 0, B, K), V.fillStyle = tm, V.fillText("Accept", Math.floor(B / 2), Math.floor(K / 2))
    }, this.jd = function() {
        if ($j.Cc) return $j.ld;
        var V = a.length;
        return Bl(0 === V ? 0 : 1 === V ? a[0].td : Bl(a[0].td, a[1].td), TV.measureText("OSIAdhladhusaghdlsaHda (7624302)", this.kd))
    }, this.Ld = function(V, j) {
        for (var I, m = v(), C = a.length - 1; 0 <= C; C--)
            if (j >= (I = m - (C + vj.zd()) * K) && j < I + K) {
                if (50 === a[C].id) {
                    if (V >= IS - B - e - a[C].kd) return V >= IS - B - e ? (C = a[C].pd, this.Uc(C, 0), sj.Vc(C)) : sV.ob(a[C].pd, 800, !1, 0), !0;
                    break
                }
                if (V >= IS - a[C].kd - e) return a[C].vd && (sV.ob(a[C].pd, 800, !1, 0), 0 <= a[C].ud && (m = a[C].ud, a[C].ud = a[C].pd, a[C].pd = m)), !0;
                break
            } return !1
    }, this.gc = function(V) {
        for (var j = a.length - 1; 0 <= j; j--) a[j].id === V && (a[j].nd = 1)
    }, this.Za = function(V, j) {
        0 === j ? (FS.R[V < PV ? 4 : 3]++, TV.Md(V, 0), t(LS ? 100 : 160, "You conquered " + iI[V] + ".", 0, V, "rgb(10,220,10)", yI, -1, !1)) : 1 === j ? (g(50, jI), TV.Md(V, 1), t(360, "You were conquered by " + iI[V] + ".", 0, V, "rgb(255,40,40)", yI, -1, !0), sV.ob(V, 2700, !0, 0)) : 2 === j ? (TV.Md(V, 2), t(0, "Congratulations! You won the game.", 0, V, "rgb(10,255,255)", yI, -1, !0), sV.ob(V, 2700, !0, 0)) : 3 === j ? (TV.Md(V, 2), t(0, iI[V] + " won the game.", 0, V, tm, yI, -1, !0), sV.ob(V, 2700, !0, 0)) : 4 === j ? (WV--, tV--, this.Nd(1, V, V)) : 5 === j ? 2 !== UI[V] && rV.Fc(GV) && (n(1, 5), zj.ed(V) ? t(180, iI[V] + " has broken the non-aggression pact and invades you!", 1, V, F(255, 200, 180), yI, -1, !0) : t(180, iI[V] + " is attacking you!", 1, V, "rgb(255,70,10)", yI, -1, !0)) : 18 === j ? t(255, "Choose your start position!", 18, 0, tm, yI, -1, !1) : 21 === j ? t(220, "You surrendered!", j, 0, "rgb(255,40,40)", yI, -1, !1) : 22 === j && this.Nd(2, V, V)
    }, this.Od = function(V) {
        t(200, "Error [" + V + "]", 94, 0, tm, Dm, -1, !1)
    }, this.bc = function(V) {
        TV.Md(V, 2), t(0, 100 > PV ? iI[V] + " won the game." : iI[V] + " has been immortalized!", 3, V, tm, yI, -1, !0), sV.ob(V, 2700, !0, 0)
    }, this.Pd = function(V, j, I) {
        V === GV ? t(175, " Message to " + iI[j] + ": ", 1e3 + I, j, F(200, 255, 210), yI, -1, !0) : this.sd(V, I)
    }, this.sd = function(V, j) {
        var I, m = 0;
        for (t(175, iI[V] + ": ", 1e3 + j, V, tm, "rgba(5,60,25,0.9)", -1, !0), I = 0; I < a.length; I++)
            if (1e3 <= a[I].id && a[I].pd === V && 3 < ++m) {
                a.splice(I, 1);
                break
            }
    }, this.ac = function(V) {
        var j = GS.$b[QS.Qd()];
        V ? (9 === kV ? (V = "The Resistance defeated the virus.", TV.Rd("The Resistance", 2, 1, 12)) : V = "Congratulations! Team " + GS.Sd[j] + " has won the game!", t(0, V, 40, 0, "rgb(10,220,10)", yI, -1, !1)) : (9 === kV ? (V = "Mankind lost the war against the virus.", TV.Rd("The Virus", 2, 0, 16)) : V = "Our alliance has been defeated!", t(0, V, 41, 0, "rgb(200,80,80)", yI, -1, !1)), 9 !== kV && TV.Rd("Team " + GS.Sd[j], 2, 1, 12), sV.rb(2700)
    }, this.Lb = function(V) {
        t(300, V[0].name + " [" + dV.Ob(V[0].Nb) + "] vs " + V[1].name + " [" + dV.Ob(V[1].Nb) + "]", 65, 0, wI, "rgba(100,255,255,0.75)", -1, !1)
    }, this.Td = function(V) {
        t(200, V, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
    }, this.Pb = function(V, j, I, m) {
        1 === Uj.Ud() && (t(0, V[0].name + ": " + dV.Ob(V[0].Nb) + " -> " + j, 66, 0, tm, m[0], -1, !1), t(0, V[1].name + ": " + dV.Ob(V[1].Nb) + " -> " + I, 66, 1, tm, m[1], -1, !1))
    }, this._b = function(V) {
        1 === Uj.Ud() && t(0, "[" + V + "] has won " + PV + (qV ? " x 2" : "") + " points!", 45, 0, "rgb(225,240,255)", yI, -1, !1)
    }, this.Uc = function(V, j) {
        0 === j ? g(50, V) ? (t(128, "You signed a non-aggression pact with " + iI[V] + ".", 52, V, F(180, 255, 180), yI, -1, !0), zj.Vd(V, 2, 255)) : t(384, "You asked " + iI[V] + " to sign a non-aggression pact.", 51, V, F(210, 210, 255), yI, -1, !0) : g(51, V) ? (t(128, iI[V] + " accepted the non-aggression pact.", 52, V, tm, "rgba(60,120,10,0.9)", -1, !0), zj.Vd(V, 2, 255)) : (t(384, iI[V] + " requests a non-aggression pact.", 50, V, tm, "rgba(90,90,90,0.9)", -1, !0), zj.Vd(V, 2, 96))
    }, this.Lc = function(V, j) {
        var I, m = "You ";
        V: {
            for (I = V.length - 1; 0 <= I; I--)
                if (2 * sI[V[I]] > sI[GV]) {
                    I = !1;
                    break V
                } I = !0
        }
        I ? (m += "ordered ", I = F(255, 235, 210)) : (m += "asked ", I = F(210, 255, 210)), 1 < V.length ? t(230, m + V.length + " players to attack " + iI[j] + ".", 66, j, I, yI, -1, !0) : t(230, m + iI[V[0]] + " to attack " + iI[j] + ".", 66, V[0], I, yI, j, !0)
    }, this.Wd = function(V, j) {
        sI[V] > 2 * sI[GV] ? t(230, iI[V] + " orders you to attack " + iI[j] + "!", 66, V, tm, "rgba(90,50,5,0.9)", j, !0) : t(230, iI[V] + " asks you to attack " + iI[j] + ".", 66, V, tm, "rgba(75,65,5,0.9)", j, !0)
    }, this.Xd = function(V, j) {
        g(V, j)
    }, this.Oc = function() {
        100 <= bI[GV] || t(80, "Your balance is too low!", 9, 0, tm, yI, -1, !1)
    }, this.Nc = function() {
        t(80, "Boosting is disallowed in the first minute!", 9, 0, tm, yI, -1, !1)
    }, this.Yd = function(V, j) {
        2 !== UI[GV] && t(200, "You exported " + UV.jb(V) + " resource" + (1 === V ? "" : "s") + " to " + iI[j] + ".", 30, j, "rgb(190,255,190)", yI, -1, !0)
    }, this.Zd = function(V, j) {
        if (2 !== UI[GV]) {
            var I = 2 === UI[j] || j >= PV,
                m = 200 - 20 * a.length;
            t(80 > m ? 80 : m, (I ? "A bot" : iI[j]) + " supported you with " + UV.jb(V) + " resource" + (1 === V ? "" : "s") + ".", 31, j, wI, I ? "rgba(205,205,205,0.9)" : "rgba(205,255,205,0.9)", -1, !0), n(31, LS ? 4 : 6)
        }
    }, this.dc = function(V) {
        var j, I = pS.ma();
        for (j = 2; 0 <= j; j--) 0 < m[j] && (V || C[j] < I - 220) && this.$d(j)
    }, this.$d = function(C) {
        var a = m[C],
            K = V[C];
        m[C] = 0, 1 === a ? (a = iI[K] + l[C], 0 === C && (a += iI[j[C]] + "."), t(I[C], a, 7, j[C], tm, yI, -1, !0)) : 2 <= a && (a = iI[K] + " and " + (a - 1) + " other player" + (2 === a ? "" : "s") + S[C], t(I[C], a, 7, K, tm, yI, -1, !1))
    }, this.Nd = function(I, S, l) {
        var a = pS.ma(),
            K = m[I] + 1;
        m[I]++, V[I] = S, j[I] = l, 1 === K && (C[I] = a), (1 === K && (32 > WV || 2 === mI) || 1 < K && (C[I] < a - 140 || 2 === mI)) && this.$d(I)
    }, this.Ba = function() {
        var V, j = a.length - D;
        for (j = 1 >= j ? 1 : j * j, V = a.length - 1; 0 <= V; V--) 0 < a[V].nd && (a[V].nd -= j, 0 >= a[V].nd && a.splice(V, 1));
        if (128 !== P && !(128 > ++P))
            for (V = 5, j = YI - 1; 0 <= j; j--) 1 === UI[TI[j]] && 0 < V-- && t(240, iI[TI[j]] + " joined the game.", 1, TI[j], wI, "rgba(255,255,255,0.75)", -1, !0);
        this.dc(!1)
    }, this._ = function() {
        for (var V, j = v(), I = a.length - 1; 0 <= I; I--) V = j - (I + vj.zd()) * K, 50 === a[I].id ? (wC.drawImage(a[I].qd, IS - a[I].kd - B - e, V), wC.drawImage(W, IS - B - e, V)) : wC.drawImage(a[I].qd, IS - a[I].kd - e, V)
    }
}

function BI() {
    this.Jd = this._d = this.ae = this.be = this.ce = this.ld = 0, this.de = -1, this.ee = ["Accept Cookies", "More Information", "Decline"], this.fe = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"], this.Cc = !1, this.Kb = function() {
        this.Ad(), this.Cc = 5 > eS && !lS && 0 === Bj.m() && !(Sa("cookieStatus", !1) && (Bj.ge(2), 1))
    }, this.Ad = function() {
        this.ld = Math.floor(2.8 * Math.floor((LS ? .09 : .062) * jS)), this.ce = Math.floor(1 * this.ld), this.be = Math.floor(.06 * this.ld), this.he = this.ld - 2 * this.be, this.ae = this.be, this._d = (this.ce - (this.ee.length + 1) * this.ae) / this.ee.length, this.Jd = Math.floor(.3 * this._d)
    }, this.Ld = function(V, j) {
        if (!this.Cc) return !1;
        var I = this.ie(V, j);
        return -1 !== I && (0 === I ? (Bj.ge(2), this.Cc = !1) : 1 === I ? XS.Kb(Zm, !0) : 2 === I && (Bj.ge(1), this.Cc = !1), pS.request = !0)
    }, this.$c = function(V, j) {
        if (!this.Cc) return !1;
        var I = this.de;
        return this.de = this.ie(V, j), I !== this.de && (pS.request = !0), -1 !== this.de
    }, this.ie = function(V, j) {
        if (V -= tI, j -= Math.floor(mS - this.ce - tI), 0 > V || 0 > j || V >= this.ld || j >= this.ce) return -1;
        var I = Math.floor((j - .5 * this.ae) / ((this.ce - this.ae) / this.ee.length));
        return 0 > I ? 0 : I >= this.ee.length ? this.ee.length - 1 : I
    }, this.Ib = function() {
        this.Cc && this.je()
    }, this.je = function() {
        var V = tI,
            j = Math.floor(mS - this.ce - tI);
        wC.setTransform(1, 0, 0, 1, V, j), wC.fillStyle = yI, wC.fillRect(0, 0, this.ld, this.ce), wC.textBaseline = pm, wC.textAlign = Gm, wC.strokeStyle = tm, wC.font = zm + this.Jd + km, wC.strokeRect(0, 0, this.ld, this.ce);
        for (var I = this.ee.length - 1; 0 <= I; I--) wC.setTransform(1, 0, 0, 1, V + this.be, j + this.ae + I * (this.ae + this._d)), wC.fillStyle = this.fe[I], wC.fillRect(0, 0, this.he, this._d), this.de === I && (wC.fillStyle = gm, wC.fillRect(0, 0, this.he, this._d)), wC.fillStyle = tm, wC.fillText(this.ee[I], this.he / 2, .54 * this._d), wC.strokeRect(0, 0, this.he, this._d);
        wC.setTransform(1, 0, 0, 1, 0, 0)
    }
}

function DI() {
    function V(V) {
        return 10 > V ? "0" + V : String(V)
    }
    var j, I, m, C, S, l;
    this.init = function() {
        void 0 === C && this.resize(), this.setTime()
    }, this.resize = function() {
        C = Math.floor((LS ? .53 : .36) * jS), S = Math.floor(.065 * C), l = zm + Math.floor(.9 * S) + km, m--, this.setTime()
    }, this.Ba = function() {
        this.setTime() && (pS.request = !0)
    }, this.setTime = function() {
        var a = new Date,
            K = a.getUTCMinutes(),
            e = a.getUTCSeconds();
        return I = 3600 - 60 * K - e, I %= 900, j = jj.ke ? "Offline Mode" : "Next Contest: " + V(Math.floor(I / 60)) + ":" + V(I % 60), (a = jj.ke ? 0 : m) !== (m = 60 * K + e) && (C = TV.measureText(j, l), C += Math.floor(.4 * S), !0)
    }, this._ = function() {
        wC.lineWidth = 1 + Math.floor(S / 15), Ca("moveTimer") ? wC.translate(Math.floor((IS - C) / 2), 0) : (wC.translate(IS - S, Math.floor(.5 * (mS + C))), wC.rotate(-Math.PI / 2)), wC.fillStyle = tm, wC.fillRect(0, 0, C, S), wC.strokeStyle = wI, wC.strokeRect(0, Ca("moveTimer") ? -10 : 0, C, S + 10), wC.fillStyle = wI, wC.font = l, wC.textBaseline = pm, wC.textAlign = Gm, wC.fillText(j, Math.floor(C / 2), Math.floor(.59 * S)), wC.setTransform(1, 0, 0, 1, 0, 0)
    }
}

function PI() {
    this.le = 10, this.me = this.ne = 50, this.ms = 8, this.mt = this.ne + this.me, this.oe = this.ne + this.me + this.ms, this.ld = 72, this.pe = this.qe = 0, this.md = Array(this.oe), this.re = 8, this.se = Array(this.ne + this.me), this.te = Array(this.ne + this.me), this.ue = this.ve = 0, this.zoom = 1, this.we = .2, this.Xc = 0, this.xe = this.ye = null, this.ze = 0, this.init = function() {
        var V;
        this.ye = Array(this.oe), this.xe = Array(this.oe);
        var j = ej.xc("emojis");
        for (this.Ae(), V = this.Xc = 0; V < this.ne; V++) this.Be(V, V, j);
        for (j = ej.xc("flags"), V = 0; V < this.me; V++) this.Be(V, this.ne + V, j);
        this.Ce(), this.md[26] = this.De(25, 2), this.Ee()
    }, this.Be = function(V, j, I) {
        this.ye[j] = !1, this.xe[j] = 0;
        var m = document.createElement("canvas");
        m.width = this.ld, m.height = this.ld;
        var C = m.getContext("2d", {
            alpha: !0
        });
        C.clearRect(0, 0, this.ld, this.ld), 23 === j ? C.drawImage(rV.Bc[2], 0, 0) : 36 === j ? C.drawImage(rV.Bc[0], 0, 0) : 49 === j ? C.drawImage(rV.Bc[1], 0, 0) : C.drawImage(I, this.ld * V % (V === j ? this.le * this.ld : 4e3), V === j ? Kl(V, this.le) * this.ld : 0, this.ld, this.ld, 0, 0, this.ld, this.ld), this.md[j] = m
    }, this.Ce = function() {
        this.md[this.oe - 5] = this.md[26], this.md[this.oe - 4] = this.De(this.oe - 5, 2), this.md[this.oe - 1] = this.De(this.oe - 5, 1), this.md[this.oe - 8] = this.De(this.oe - 4, 1), this.md[this.oe - 3] = this.md[39], this.md[this.oe - 2] = this.De(this.oe - 3, 1), this.md[this.oe - 7] = this.De(this.oe - 2, 1), this.md[this.oe - 6] = this.De(this.oe - 7, 1)
    }, this.De = function(V, j) {
        var I = document.createElement("canvas");
        I.width = this.ld, I.height = this.ld;
        var m = I.getContext("2d", {
            alpha: !0
        });
        return m.clearRect(0, 0, this.ld, this.ld), m.rotate(j * Math.PI / 2), m.drawImage(this.md[V], 1 === j ? 0 : -this.ld, -this.ld), I
    }, this.Ee = function() {
        var V = (lS ? aS.Fe : 5 <= eS ? KS.g(1) : Bj.i(7)).split("");
        if (2 * V.length !== this.oe) this.Xc = 0;
        else {
            for (var j = 0; j < this.oe; j += 2) {
                var I = parseInt(V[Math.floor(j / 2)]);
                this.ye[j] = 1 == I % 2, this.ye[j + 1] = 1 < I
            }
            this.Ge()
        }
    }, this.Ge = function() {
        for (var V = this.Xc = 0; V < this.oe; V++) this.ye[V] && (this.xe[this.Xc++] = V)
    }, this.Jc = function() {
        8 === this.Xc && this.xe[0] === this.mt && this.Ge()
    }, this.He = function() {
        this.Xc = this.ms;
        for (var V = 0; V < this.ms; V++) this.xe[V] = this.mt + V
    }, this.Ae = function() {
        this.qe = Math.floor((LS ? .075 : .0468) * jS), this.zoom = this.qe / this.ld, this.pe = (1 + this.we) * this.qe
    }, this.show = function(V, j) {
        if (1 > this.Xc) return !1;
        this.ze = pS.lb;
        var I = Math.floor(IS / this.pe);
        I = 3 > I ? 3 : I > this.re ? this.re : I, I = this.Xc > I ? I : this.Xc;
        var m = 1 + Kl(this.Xc - 1, I),
            C = Math.floor(I * this.pe),
            S = Math.floor(V - C / 2);
        S = 0 > (S = S + C > IS ? IS - C : S) ? 0 : S;
        var l = Math.floor(j - this.pe / 2);
        for (l = 0 > (l = l + (m = Math.floor(m * this.pe)) > mS ? mS - m : l) ? 0 : l, this.ve = S + C, this.ue = l + m, C = 0; C < this.Xc; C++) this.se[C] = Math.floor(S + C % I * this.pe), this.te[C] = Math.floor(l + Kl(C, I) * this.pe);
        return !0
    }, this.Hc = function(V, j) {
        return !(V < this.se[0] || j < this.te[0] || V >= this.ve || j >= this.ue)
    }, this.Ic = function(V, j, I) {
        if (I === GV && this.ze + 190 > pS.lb) return !1;
        for (var m = this.Xc - 1; 0 <= m; m--)
            if (V >= this.se[m] && j >= this.te[m]) {
                if (39 === this.xe[m]) return this.He(), this.show(V, j), !0;
                nV ? zj.Vd(GV, 0, this.xe[m]) : I === GV ? sj.Ie(this.xe[m]) : sj.Je(this.xe[m], I), this.Ge();
                break
            } return !1
    }, this.Ke = function(V) {
        return 16 > V || 40 <= V && 47 > V
    }, this.Le = function(V) {
        return V >= this.ne && V < this.ne + this.me
    }, this.Ib = function() {
        wC.imageSmoothingEnabled = !0;
        for (var V = this.we * this.qe / 2, j = this.Xc - 1; 0 <= j; j--) wC.setTransform(this.zoom, 0, 0, this.zoom, this.se[j] + V, this.te[j] + V), wC.drawImage(this.md[this.xe[j]], 0, 0);
        wC.imageSmoothingEnabled = !1, wC.setTransform(1, 0, 0, 1, 0, 0)
    }, this.Me = function(V, j, I) {
        wC.imageSmoothingEnabled = !0, wC.setTransform(this.zoom, 0, 0, this.zoom, V, j), wC.drawImage(this.md[I], 0, 0), wC.imageSmoothingEnabled = !1, wC.setTransform(1, 0, 0, 1, 0, 0)
    }
}
var WI, vI, tI, nI, FI, gI, AI, pI, GI, QI, _I, zI, fI, XI, kI, qI, ZI, dI, iI, cI, EI, oI, NI, MI, JI, sI, OI, bI, rI, hI, $I, HI, UI, TI, YI, wI = "rgb(0,0,0)",
    RI = "rgba(0,0,0,0.7)",
    uI = "rgba(0,0,0,0.5)",
    xI = "rgba(0,0,0,0.5)",
    yI = "rgba(0,0,0,0.75)",
    Vm = "rgba(0,0,0,0.85)",
    jm = "rgba(0,96,96,0.75)",
    Im = "rgb(255,255,255)",
    mm = "rgb(128,128,128)",
    Cm = "rgb(30,255,30)",
    Sm = "rgb(0,200,0)",
    lm = "rgba(0,255,0,0.6)",
    am = "rgba(0,255,0,0.5)",
    Km = "rgba(0,100,0,0.75)",
    em = "rgba(0,40,0,0.8)",
    Lm = "rgba(255,255,255,0.3)",
    Bm = "rgba(220,0,0,0.6)",
    Dm = "rgba(100,0,0,0.85)",
    Pm = "rgb(255,160,160)",
    Wm = "rgb(255,70,70)",
    vm = "rgb(230,0,0)",
    tm = "rgb(255,255,255)",
    nm = "rgba(255,255,255,0.6)",
    Fm = "rgba(255,255,255,0.4)",
    gm = "rgba(255,255,255,0.25)",
    Am = "rgba(255,255,0,0.5)",
    pm = "middle",
    Gm = "center",
    Qm = "left",
    _m = "right",
    zm = "bold ",
    fm = "italic ",
    Xm = "normal ",
    km = "px Arial",
    qm = [zm, fm + zm, zm],
    Zm = "https://territorial.io/cookie_policy",
    dm = "https://territorial.io/privacy_policy",
    im = "https://territorial.io/tutorial",
    cm = ["https://territorial.io/players", "https://territorial.io/clans"],
    Em = ["wss://", "/s50/", "/s51/", "/s52/"];

function om() {
    tI = 2 > (tI = Math.floor((LS ? .02 : .01152) * jS)) ? 2 : tI, WI = 2 > (WI = Math.floor((LS ? .0114 : .01296) * jS)) ? 2 : WI, vI = 1 > (vI = Math.floor(.005 * VS)) ? 1 : vI
}

function Nm(V) {
    V.preventDefault(), FI || (Uj.Ne(Uj.uc), Jm(Math.floor(CS * V.clientX), Math.floor(CS * V.clientY)))
}

function Mm(V) {
    V.preventDefault(), Uj.Ne(Uj.uc), FI = !0, 0 < V.touches.length && (gI = Math.floor(CS * V.touches[0].clientX), AI = Math.floor(CS * V.touches[0].clientY), Nj.Oe(V) || Jm(gI, AI))
}

function Jm(V, j) {
    if (Dj.Pe()) Dj.pop();
    else if (!yV.click(V, j) && !Pj.click(V, j))
        if (0 === mI) mj.click(V, j);
        else if (!(gS.Ld(V, j) || pI.buttons[1].Re.Qe && pI.buttons[1].Re.Ld(V, j, 0) || pI.buttons[2].Re.Qe && pI.buttons[2].Re.Ld(V, j) || rV.click(V, j) || Vj.click(V, j) || UV.click(V, j))) {
        var I = hV.click(V, j);
        2 === I || xV.click(V, j) || (wV.click(V, j) ? pS.request = !0 : YV.Se(V, j) ? (wV.pb = !1, YV.click(V, j) && (pS.request = !0)) : $V.Ld(V, j) || $j.Ld(V, j) || 0 === I && rV.Ec(V, j))
    }
}

function sm(V) {
    FI = !1, V.preventDefault(), bm(Math.floor(CS * V.clientX), Math.floor(CS * V.clientY))
}

function Om(V) {
    V.preventDefault(), 0 < V.touches.length && (gI = Math.floor(CS * V.touches[0].clientX), AI = Math.floor(CS * V.touches[0].clientY), Nj.Te(V) || bm(gI, AI))
}

function bm(V, j) {
    Pj.fd(V, j) || (Ca("hoveringTooltips") && 8 === mj.getState() && vj.fd(V, j), 0 === mI ? mj.fd(V, j) : gS.$c(V, j) || pI.fd(V, j) || (rV.Cc() ? rV.$c(V, j) : hV.fd(V, j) || (YV.pb ? YV.fd(V, j) && (pS.request = !0) : (xV.fd(V, j), wV.pb && wV.Ue(V, j) && (pS.request = !0)))))
}

function rm(V) {
    V.preventDefault(), 0 === mI ? (mj.Wc(-1024, -1024), RV.Ve()) : (xV.We(-1024, -1024), pI.Xe(), hV.fd(-1024, -1024), YV.We(), wV.pb && (wV.pb = !1))
}

function hm(V) {
    V.preventDefault(), FI || wm(Math.floor(CS * V.clientX), Math.floor(CS * V.clientY))
}

function $m(V) {
    2 === mj.getState() && aj.Ye(V.clientX, V.clientY)
}

function Hm(V) {
    V.preventDefault(), V && V.touches && 0 < V.touches.length && 0 !== mI ? wV.pb = !1 : wm(gI, AI)
}

function Um(V) {
    V.preventDefault(), wm(gI, AI)
}

function Tm(V) {
    yj.Ze(V)
}

function Ym(V) {
    yj.$e(V)
}

function wm(V, j) {
    0 === mI ? mj.Wc(V, j) : (xV.We(V, j), pI.Xe(), gS._e(), YV.We(), wV.pb = !1, rV.Wc(V, j) && (pS.request = !0))
}

function Rm(V) {
    V.preventDefault(), Uj.Ne(Uj.uc);
    var j = Math.floor(CS * V.clientX),
        I = Math.floor(CS * V.clientY),
        m = V.deltaY;
    1 === V.deltaMode && (m *= 20), 0 === mI ? mj.af(j, I, m) : xV.scroll(j, I, m) || (YV.Se(j, I) ? YV.scroll(m) && (pS.request = !0) : wV.bf(j, I, 2 * m) && (pS.request = !0))
}

function um() {
    function V(V) {
        var I, m, C, a = S[V].canvas.width;
        S[V].cf.clearRect(0, 0, a, K), S[V].cf.fillStyle = 0 !== S[V].df ? "rgba(33,33,120,0.83)" : S[V].target === jI ? "rgba(88,88,88,0.83)" : S[V].target < PV ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)", S[V].cf.fillRect(0, 0, a, K), I = S[V].cf, m = a, C = K, I.fillStyle = tm, I.fillRect(0, 0, m, 1), I.fillRect(0, C - 1, m, 1), I.fillRect(0, 0, 1, C), I.fillRect(m - 1, 0, 1, C), a > l + 2 * K && (S[V].cf.fillRect(a - l - K, 0, 1, K), S[V].cf.fillText(iI[S[V].target], Math.floor((a - l) / 2), Math.floor(.57 * K)));
        var L = 0 !== S[V].df ? 0 : K;
        S[V].cf.fillText(UV.jb(S[V].ef), Math.floor(a - l / 2 - L), Math.floor(.57 * K)), S[V].cf.fillStyle = nm, S[V].cf.fillRect(Math.floor(a - l - L), K - e, Math.floor(l * S[V].ef / S[V].ff), e), 0 === S[V].df ? (j(V, a), S[V].cf.strokeStyle = "rgb(128,255,128)", S[V].cf.fillRect(K, 0, 1, K), a -= K, S[V].cf.beginPath(), S[V].cf.moveTo(Math.floor(.3 * K + a), Math.floor(K / 2)), S[V].cf.lineTo(Math.floor(K - .3 * K + a), Math.floor(K / 2)), S[V].cf.stroke(), S[V].cf.beginPath(), S[V].cf.moveTo(Math.floor(K / 2 + a), Math.floor(.3 * K)), S[V].cf.lineTo(Math.floor(K / 2 + a), Math.floor(K - .3 * K)), S[V].cf.stroke()) : j(V, 2 * K)
    }

    function j(V, j) {
        S[V].cf.strokeStyle = S[V].gf ? mm : Pm, S[V].cf.fillStyle = tm, S[V].cf.fillRect(j - K, 0, 1, K);
        var I = Math.floor(K / 12);
        S[V].cf.lineWidth = 3 > I ? 3 : I, S[V].cf.lineCap = "round", j = K + 1, S[V].cf.beginPath(), S[V].cf.moveTo(Math.floor(j - .35 * K), Math.floor(.35 * K)), S[V].cf.lineTo(Math.floor(j - K + .35 * K), Math.floor(K - .35 * K)), S[V].cf.stroke(), S[V].cf.beginPath(), S[V].cf.moveTo(Math.floor(j - K + .35 * K), Math.floor(.35 * K)), S[V].cf.lineTo(Math.floor(j - .35 * K), Math.floor(K - .35 * K)), S[V].cf.stroke()
    }

    function I(V) {
        V.canvas = document.createElement("canvas"), bS.font = a;
        var j = l;
        V.target < jI && 0 === V.df && (j += Math.floor(bS.measureText(iI[V.target] + "000").width)), j += K, 0 === V.df && (j += K), V.canvas.width = j, V.canvas.height = K, V.cf = V.canvas.getContext("2d", {
            alpha: !0
        }), V.cf.font = a, V.cf.textBaseline = pm, V.cf.textAlign = Gm
    }

    function m(V) {
        return uV.hf() ? IS - S[V].canvas.width - WI : uV.if
    }

    function C(V) {
        return Math.floor(2 * WI + (uV.hf() ? yV.height + WI : 0) + (Ca("showDensity") ? 1.5 : 1) * uV.height + 1.3 * V * K)
    }
    var S, l, a, K, e;
    this.init = function() {
        S = [], this.resize()
    }, this.resize = function() {
        a = $V.kd, K = $V.Jd + 5, K = Math.floor(1.25 * K), LS && (K = Math.floor(1.25 * K)), e = Math.floor(.15 * K), bS.font = a, l = Math.floor(bS.measureText("02 000 000 0000").width);
        for (var j = S.length - 1; 0 <= j; j--) I(S[j]), V(j)
    }, this.Fa = function() {
        for (var j = S.length - 1; 0 <= j; j--) S[j].jf && (S[j].jf = !1, V(j))
    }, this.jb = function(V) {
        if (1e3 > V) return 0 > V ? "-" + this.jb(Math.abs(V)) : V.toString();
        for (var j = Math.floor(Math.log(V + .5) / Math.log(10)) + 1, I = Math.floor((j - 1) / 3), m = (V = V.toString()).substring(j - 3, j), C = 1; C < I; C++) m = V.substring(j - 3 * (C + 1), j - 3 * C) + " " + m;
        return V.substring(0, j - 3 * I) + " " + m
    }, this.click = function(V, j) {
        if (2 === mI || 0 === EI[GV] || FV || !rV.Fc(GV)) return !1;
        var I, l = LS ? K : 0,
            a = LS ? Math.floor(.15 * K) : 0;
        for (I = S.length - 1; 0 <= I; I--) {
            var e = m(I),
                L = C(I),
                B = S[I].canvas.width;
            if (j >= L - a && j <= L + K + a) {
                if (V >= e - l && V <= e + K + l) return S[I].gf || (S[I].jf = !0, S[I].gf = !0, 0 === S[I].df ? nV ? MV.Na(GV, S[I].target) : sj.kf(S[I].target === jI ? GV : S[I].target) : nV ? MV.Pa(GV, S[I].df) : sj.lf(S[I].df)), !0;
                if (0 === S[I].df && V >= e + B - K - l && V <= e + B + l) return nV ? LC(GV, S[I].target, YV.Pc()) : sj.Qc(YV.Pc(), S[I].target === jI ? GV : S[I].target), !0
            }
        }
        return !1
    }, this.Ba = function() {
        if (2 !== mI && 0 !== EI[GV] && !FV && rV.Fc(GV)) {
            var V = Qj.q(GV);
            V: if (S.length !== V) var j = !0;
                else {
                    for (j = V - 1; 0 <= j; j--)
                        if (S[j].df !== Qj.t(GV, j) || S[j].target !== Qj.H(GV, j)) {
                            j = !0;
                            break V
                        } j = !1
                }
            if (j) {
                var m, C = [];
                j = 0;
                V: for (; j < V; j++) {
                    var l = Qj.t(GV, j),
                        a = Qj.H(GV, j);
                    for (m = 0; m < S.length; m++)
                        if (S[m].df === l && S[m].target === a) {
                            C.push(S.splice(m, 1)[0]);
                            continue V
                        } I(l = {
                        target: a,
                        ef: m = Qj.I(GV, j),
                        ff: m,
                        df: l,
                        jf: !0,
                        gf: !1,
                        canvas: null,
                        cf: null
                    }), C.push(l)
                }
                S = C
            }
            for (--V; 0 <= V; V--) j = Qj.I(GV, V), S[V].ef !== j && (S[V].ef = j, S[V].ff = j > S[V].ff ? j : S[V].ff, S[V].jf = !0)
        }
    }, this._ = function() {
        if (0 !== EI[GV] && rV.Fc(GV) && !FV)
            for (var V = S.length - 1; 0 <= V; V--) wC.drawImage(S[V].canvas, m(V), C(V))
    }
}

function xm() {
    function V() {
        wC.drawImage(v, WI + (fV ? WI + QS.mf() : 0), fI + 2 * WI)
    }

    function j() {
        v.width = m[0].width + P, v.height = a + P, (t = v.getContext("2d", {
            alpha: !0
        })).clearRect(0, 0, m[0].width + P, a + P), t.translate(Math.floor(P / 2), Math.floor(P / 2)), t.lineWidth = P, t.fillStyle = 1 === m[0].color ? "rgba(255,255,255,0.85)" : yI, I(), t.fill(), t.strokeStyle = 1 === m[0].color ? wI : tm, I(), t.stroke(), t.textAlign = Gm, t.textBaseline = pm, t.fillStyle = 1 === m[0].color ? wI : tm, t.font = K[0], t.fillText(B[m[0].type], Math.floor(m[0].width / 2), Math.floor(.72 * L[0] * a)), t.font = K[1], t.fillText(m[0].text, Math.floor(m[0].width / 2), Math.floor((L[0] + .48 * L[1]) * a))
    }

    function I() {
        t.beginPath(), t.moveTo(W, 0), t.lineTo(m[0].width - W, 0), t.lineTo(m[0].width, W), t.lineTo(m[0].width, a - W), t.lineTo(m[0].width - W, a), t.lineTo(W, a), t.lineTo(0, a - W), t.lineTo(0, W), t.closePath()
    }
    var m, C, S, l, a, K, e, L, B, D, P, W, v, t, n, F;
    this.init = function() {
        n = 0, C = 4, S = l = 0, m = [], K = Array(2), e = Array(2), L = Array(2), B = ["YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:"], L[0] = .3, L[1] = .7, D = Array(4), v = document.createElement("canvas"), F = pS.lb + 2e3, this.resize()
    }, this.resize = function() {
        var V;
        for (a = Math.floor((LS ? .0725 : .058) * jS), e[0] = Math.floor(.85 * L[0] * a), e[1] = Math.floor(.85 * L[1] * a), K[0] = zm + e[0] + km, K[1] = zm + e[1] + km, V = D.length - 1; 0 <= V; V--) D[V] = this.measureText(B[V] + "000", K[0]);
        if (P = Math.floor(1 + .05 * a), W = Math.floor(.2 * a), 0 < m.length) {
            for (V = m.length - 1; 0 <= V; V--) {
                var I = this.measureText(m[V].text + "00", K[1]);
                m[V].width = I < D[V] ? D[V] : I
            }
            j()
        }
    }, this.Ba = function() {
        0 !== C && (4 === C ? pS.lb > F && (C = 0, 1 === mI && TV.Rd(qj.Bd(), 3, 1, 9)) : (1 === C ? (0 === S && (j(), S = 1e-4), 1 <= (S += .002 * (pS.lb - n)) && (l = 0, C = 2, S = 1), pS.request = !0) : 2 === C ? ((l += (pS.lb - n) / 1e3) > m[0].duration || 1 < l && 1 < m.length) && (C = 3) : 3 === C && (0 >= (S -= .002 * (pS.lb - n)) && (S = 0, m.shift(), C = 0 < m.length ? 1 : 0), pS.request = !0), n = pS.lb))
    }, this.measureText = function(V, j) {
        return wC.font = j, Math.floor(wC.measureText(V).width)
    }, this.Md = function(V, j) {
        this.Rd(iI[V], j, 1, 0 === j ? 3 : 7)
    }, this.Rd = function(V, j, I, l) {
        var a = this.measureText(V + "00", K[1]);
        a = a < D[j] ? D[j] : a, m.push({
            text: V,
            width: a,
            type: j,
            color: I,
            duration: l
        }), 0 === C && (S = 0, C = 1, n = pS.lb)
    }, this._ = function() {
        0 !== C && 0 !== S && (1 > S ? (wC.globalAlpha = S, V(), wC.globalAlpha = 1) : V())
    }
}

function ym() {
    function V() {
        var V, j, I, C = $j.ld;
        B = !1, j = C, I = m, (V = S).clearRect(0, 0, j, I), V.fillStyle = yI, V.fillRect(0, 0, j, I);
        var L = Math.floor(C / 2);
        1 === a ? (S.fillStyle = lm, S.fillRect(L, 0, L, m)) : -1 === a && (S.fillStyle = Bm, S.fillRect(0, 0, L, m)),
            function(V, j, I, m) {
                V.fillStyle = tm, V.fillRect(0, 0, j, m), V.fillRect(0, 0, m, I), V.fillRect(j - m, 0, m, I), V.fillRect(0, I - m, j, m)
            }(S, C, m, 2), L = 2 > (L = Math.floor(.25 * m)) ? 2 : L, S.fillStyle = "rgba(255,255,255,0.75)";
        var D = Math.floor((m - 4) * K[1] / e[1]);
        0 < D && S.fillRect(2, m - 2 - D, L, D), 0 < (D = Math.floor((m - 4) * K[0] / e[0])) && S.fillRect(C - 2 - L, m - 2 - D, L, D), L = 2 > (L = Math.floor(m / 8)) ? 2 : L, KV(S, Math.floor(.4 * m), 0, m, L, .5, !1), KV(S, Math.floor(C - 1.4 * m), 0, m, L, .5, !0), S.drawImage(l, Math.floor((C - l.width) / 2), 3)
    }

    function j() {
        B = !0, D = 140, a = 0, L = [], $j.Cc = !1, K[0] = K[1] = 0
    }

    function I() {
        return YV.hd($V.jd()) ? YV.bd - m - WI : yC - m - (LS ? 2 : 1) * WI
    }
    var m, C, S, l, a, K, e, L, B, D, P, W, v;
    this.Kb = function() {
        W = v = 0, B = this.Cc = !1, D = 140, a = 0, K = [0, 0], e = [1, 1], L = [], P = new Uint32Array(10), this.Ad()
    }, this.Ad = function() {
        m = YV.height, this.ld = 4 * m, this.nf(), (C = document.createElement("canvas")).width = this.ld, C.height = m, S = C.getContext("2d", {
            alpha: !0
        }), V()
    }, this.Ga = function() {
        B && V()
    }, this.nf = function() {
        var V = m - 6;
        if (V = 6 > V ? 6 : V, void 0 === l || l.width !== V) {
            (l = document.createElement("canvas")).width = V, l.height = V;
            var j = l.getContext("2d", {
                alpha: !0
            });
            j.clearRect(0, 0, V, V);
            var I = Math.floor(V / 8);
            I = 1 > I ? 1 : I, j.lineWidth = I, j.strokeStyle = tm;
            var C = Math.floor(V / 2);
            V = Math.floor((V - I) / 2), j.beginPath(), j.arc(C, C, V, 0, 2 * Math.PI), j.moveTo(C, C - V), j.lineTo(C, C + V), j.moveTo(C + Math.cos(.78 * Math.PI) * V, C + Math.cos(.28 * Math.PI) * V), j.lineTo(C, C), j.lineTo(C + Math.cos(.22 * Math.PI) * V, C + Math.cos(1.72 * Math.PI) * V), j.stroke()
        }
    }, this.Ld = function(V, j) {
        if (V < xC - this.ld - WI) return !1;
        var C = I();
        return !(j < C || j > C + m) && (C = V > xC - WI - this.ld / 2, nV ? this.Oa(0, C) : rV.Fc(GV) && 0 !== EI[GV] && sj.pf(C), !0)
    }, this.Da = function() {
        if (0 < v) 0 === --v && j();
        else if (this.Cc) {
            var V;
            if (V = 270 === --D && 2 <= W) V: {
                for (V = YI - 1; 0 <= V; V--)
                    if (rV.Fc(TI[V])) {
                        V = !1;
                        break V
                    } V = !0
            }
            V && (B = !0, K[0] += e[0]), 180 === D && 3 * K[0] < e[0] ? j() : K[0] >= e[0] ? zS.Xa(-1) : K[1] >= e[1] ? v = 4 : 0 >= D && j()
        } else {
            for (V = 9; 0 <= V; V--) 12 < Math.abs(P[V] - sI[ZI[V]]) && (D = 140), P[V] = sI[ZI[V]];
            if (V = 0 >= --D) {
                this.Cc = !0, D = 360;
                var I = 0;
                for (V = YI - 1; 0 <= V; V--) rV.Fc(TI[V]) && (I += sI[TI[V]]);
                e[0] = Bl(Kl(3 * I, 5), 1), fV && 9 !== kV && (e[0] = Dl(Bl(Kl(I * (100 - Kl(100 * QS.qf(), gV)), 100), 1), e[0])), e[1] = Bl(I - e[0], 1), W++
            }
        }
    }, this.Xb = function() {
        this.Cc && K[0] < e[0] && j()
    }, this.Oa = function(V, j) {
        var I;
        if (this.Cc) {
            for (I = L.length - 1; 0 <= I; I--)
                if (L[I] === V) return;
            L.push(V), B = !0, I = nV ? e[0] : sI[V], j ? K[0] += I : K[1] += I, V === GV && (a = j ? 1 : -1)
        }
    }, this.Ib = function() {
        if (this.Cc) {
            var V = I();
            wC.drawImage(C, xC - this.ld - WI, V)
        }
    }
}

function VC() {
    function V() {
        a.clearRect(0, 0, m, YV.height);
        var V = Math.floor(e * (m - 2 * S));
        a.fillStyle = yI, a.fillRect(0, 0, S, YV.height), a.fillRect(S + V, 0, m - S - V, YV.height), a.fillStyle = function() {
            if (e < 1 / 3) {
                var V = Math.floor(540 * e);
                return "rgba(" + V + ",180,0,0.75)"
            }
            return e < 2 / 3 ? "rgba(180," + (180 - (V = Math.floor(540 * (e - 1 / 3)))) + ",0,0.75)" : "rgba(180,0," + (V = Math.floor(540 * (e - 2 / 3))) + ",0.75)"
        }(), a.fillRect(S, 0, V, YV.height), a.fillStyle = tm, a.fillRect(0, 0, m, 1), a.fillRect(0, YV.height - 1, m, 1), a.fillRect(0, 0, 1, YV.height), a.fillRect(S, 0, 1, YV.height), a.fillRect(S + V, 0, 1, YV.height), a.fillRect(m - S, 0, 1, YV.height), a.fillRect(m - 1, 0, 1, YV.height), V = 1 + Math.floor(.0625 * YV.height);
        var j = 1 + Math.floor(.3 * YV.height);
        a.fillRect(Math.floor(.25 * YV.height) + j, Math.floor((YV.height - V) / 2), YV.height - 2 * j, V), a.fillRect(Math.floor(m - 1.25 * YV.height) + j, Math.floor((YV.height - V) / 2), YV.height - 2 * j - j % 2, V), a.fillRect(Math.floor(m - 1.25 * YV.height) + Math.floor((YV.height - V) / 2), j, V, YV.height - 2 * j - j % 2), L = Math.floor(bI[GV] * e), a.fillText(UV.jb(L) + (Ca("showPercentage") ? " (" + Math.floor(1e4 * e) / 100 + "%)" : ""), Math.floor(m / 2), Math.floor(.55 * YV.height))
    }

    function j(j) {
        return 1 < j && 0 === e ? (e = .01, V(), !0) : !(1 < j && 1 === e || 0 === e) && (e = 1 < (e *= j) ? 1 : 0 > e ? 0 : e, V(), !0)
    }

    function I(j) {
        return e !== (e = 1 < (e = 0 > (e = (j - C - S) / (m - 2 * S)) ? 0 : e) ? 1 : e) && (V(), !0)
    }
    var m, C, S, l, a, K, e, L, B, D, P = 11 / 12;
    this.init = function() {
        K = !_V, D = !1, e = .5, L = 0, this.pb = !1, this.resize()
    }, this.resize = function() {
        LS && xC < .8 * yC ? (this.height = Math.floor(.0536 * jS), m = xC - 4 * WI - this.height) : (m = Math.floor((LS ? .65 : .389) * jS), m += 12 - m % 12, this.height = Math.floor(m / 12)), S = Math.floor(3 * this.height / 2), B = zm + Math.floor(.5 * this.height) + km, (l = document.createElement("canvas")).width = m, l.height = this.height, (a = l.getContext("2d", {
            alpha: !0
        })).font = B, a.textBaseline = pm, a.textAlign = Gm, this.rf(), V()
    }, this.rf = function() {
        C = LS && xC < .8 * yC ? this.height + 2 * WI : Math.floor((IS - m) / 2), this.bd = mS - this.height - (LS ? 2 : 1) * WI
    }, this.Fa = function() {
        D && (D = !1, V())
    }, this.isVisible = function() {
        return !(!K || hV.isOpen && C < Math.floor(WI + 5.5 * this.height))
    }, this.sf = function() {
        return this.isVisible() && C < 2 * this.height + 3 * WI
    }, this.hd = function(V) {
        return !!this.isVisible() && C + m > xC - V - WI
    }, this.show = function() {
        K = !0
    }, this.hide = function() {
        K = !1
    }, this.Pc = function() {
        var V = Math.floor(1e3 * e);
        return 0 >= V ? 1 : 1e3 < V ? 1e3 : V
    }, this.Se = function(V, j) {
        return this.isVisible() && V > C && V < C + m && j > this.bd
    }, this.click = function(V, l) {
        return !!this.isVisible() && (V > C && V < C + S && l > YV.bd ? j(P) : V > C + m - S && V < C + m && l > YV.bd ? j(1 / P) : (this.pb = !0, I(V)))
    }, this.tf = function(V) {
        0 !== mI && this.isVisible() && j(V) && (pS.request = !0)
    }, this.uf = function(j) {
        0 !== mI && this.isVisible() && (e = 1 < j ? 1 : 0 > j ? 0 : j, V()) && (pS.request = !0)
    }, this.scroll = function(V) {
        return !(0 === V || !this.isVisible()) && (0 < V ? V = (V = 400 / (400 + V)) < P ? P : V : V = (V = (400 - V) / 400) > 1 / P ? 1 / P : V, j(V))
    }, this.fd = function(V, j) {
        return !!this.pb && I(V)
    }, this.We = function() {
        this.pb = !1
    }, this.Ba = function() {
        this.isVisible() && Math.floor(bI[GV] * e) !== L && (D = !0)
    }, this._ = function() {
        this.isVisible() && wC.drawImage(l, C, this.bd)
    }
}

function jC(V) {
    return Math.floor(GI * V - QI)
}

function IC(V) {
    return Math.floor(GI * V - _I)
}

function mC() {
    var V, j, I, m, C, S, l;
    this.init = function() {
        V = Array(2), j = Array(2), this.pb = !1, l = S = _I = QI = 0, GI = 1, this.resize()
    }, this.resize = function() {
        I = 8 > (I = Math.floor((LS ? .072 : .0502) * jS)) ? 8 : I;
        for (var m = 1; 0 <= m; m--) V[m] = document.createElement("canvas"), V[m].width = I, V[m].height = I, j[m] = V[m].getContext("2d", {
            alpha: !0
        });
        this.rf(), m = Math.floor(1 + I / 20);
        for (var C = 1; 0 <= C; C--) j[C].clearRect(0, 0, I, I), j[C].fillStyle = RI, j[C].beginPath(), j[C].arc(I / 2, I / 2, I / 2 - m, 0, 2 * Math.PI), j[C].fill(), j[C].lineWidth = m, j[C].fillStyle = Im, j[C].strokeStyle = Im, j[C].beginPath(), j[C].arc(I / 2, I / 2, I / 2 - m, 0, 2 * Math.PI), j[C].stroke(), KV(j[C], 0, 0, I, m, .3, 0 === C)
    }, this.Fb = function() {
        return -QI / GI
    }, this.Gb = function() {
        return -_I / GI
    }, this.sb = function(V, j) {
        QI = GI * V - j
    }, this.tb = function(V, j) {
        _I = GI * V - j
    }, this.click = function(V, j) {
        return Math.pow(V - (m + I / 2), 2) + Math.pow(j - (C + I / 2), 2) < I * I / 4 || Math.pow(V - (m + I / 2), 2) + Math.pow(j - (C + 2 * I), 2) < I * I / 4 ? j < C + 1.25 * I ? this.bf(Math.floor(IS / 2), Math.floor(mS / 2), -200) : this.bf(Math.floor(IS / 2), Math.floor(mS / 2), 200) : (sV.vb() && (this.pb = !0, S = V, l = j), !1)
    }, this.Ue = function(V, j) {
        if (!sV.vb()) return !0;
        var I = QI,
            m = _I,
            C = S - V,
            a = l - j;
        return QI += C, _I += a, zj.$c(C, a), this.vf(), S = V, l = j, I !== QI || m !== _I
    }, this.bf = function(V, j, I) {
        if (!sV.vb()) return !0;
        if (0 < I) I = .5 > (I = 450 / (450 + I)) ? .5 : I;
        else {
            if (!(0 > I)) return !1;
            I = 2 < (I = (450 - I) / 450) ? 2 : I
        }
        return this.wf(V, j, I), !0
    }, this.wf = function(V, j, I) {
        I = .125 > (I = 1024 < I * GI ? 1024 / GI : I) * GI ? .125 / GI : I, zj.zoom(I, V, j), GI *= I, QI = (QI + V) * I - V, _I = (_I + j) * I - j, wV.vf()
    }, this.vf = function() {
        var V = xC / 16,
            j = 0,
            I = yC / 16,
            m = 0;
        QI < -xC + V && (j = -xC + V - QI), QI > GI * JS - V && (j = GI * JS - V - QI), _I < -yC + I && (m = -yC + I - _I), _I > GI * sS - I && (m = GI * sS - I - _I), QI += j, _I += m, WS.ub(), zj.xf(j, m)
    }, this.rf = function() {
        m = IS - I - WI, C = Math.floor(mS / 2 - 1.25 * I)
    }, this._ = function() {
        wC.drawImage(V[0], m, C), wC.drawImage(V[1], m, Math.floor(C + 3 * I / 2))
    }
}

function CC() {
    function V() {
        K = Math.floor(.2 * (LS ? .07 : .035) * jS), K = Bl(LS ? 3 : 1, K);
        var V = xC / (S.length + e);
        K = V > K ? V : K, A = Math.floor((1 - e) * K), l = 0, j()
    }

    function j() {
        l = (l = -20 > l ? -20 : l) > (S.length - 15) * K ? (S.length - 15) * K : l, B = Math.floor(l / K), D = (D = B + Math.floor(IS / K)) > S.length - 1 ? S.length - 1 : D, B = 0 > (B = D < B ? D : B) ? 0 : B;
        var V = D;
        L = a / S[V];
        for (var j = D - 1; j >= B; j--) S[j] > S[V] && (V = j, L = a / Math.pow(S[j], g))
    }

    function I(V) {
        return (V = -1 > (V = Math.floor((l + IS - V - e * K) / K)) ? -1 : -1 === V ? 0 : V > S.length - 1 ? -1 : V) !== P && (P = V, -1 === p && 0 === P && F && (p = setInterval(C, 100)), !0)
    }

    function m(V) {
        var j = Math.floor(L * Math.pow(S[V], g));
        wC.fillRect(l + IS - (V + 1) * K, mS - j, A, j)
    }

    function C() {
        if (8 === mj.getState() && (P = -1), 0 !== P) G = (new Date).getTime(), clearInterval(p), p = -1;
        else {
            var V = S[1] / 864e3;
            if (-1 !== G) V += ((new Date).getTime() - G) * S[1] / 864e5, G = -1;
            0 < V && (S[0] += Math.floor(V), pS.request = !0)
        }
    }
    var S, l, a, K, e, L, B, D, P, W, v, t, n, F, g, A, p, G, Q;
    this.init = function() {
        G = p = -1, F = !1, g = 1, P = -1, this.yf = !1, n = 0, t = new Date, l = 0, e = .3, (Q = []).push({
            name: "Plateau A",
            start: 0,
            end: 57
        }), Q.push({
            name: "Max A",
            start: 1,
            end: 1
        }), Q.push({
            name: "Black Friday",
            start: 15,
            end: 15
        }), Q.push({
            name: "Max B",
            start: 19,
            end: 19
        }), Q.push({
            name: "Max C",
            start: 44,
            end: 44
        }), Q.push({
            name: "First Android Version",
            start: 58,
            end: 58
        }), Q.push({
            name: "Max D",
            start: 67,
            end: 67
        }), Q.push({
            name: "The iFrame Explosion",
            start: 98,
            end: 99
        }), Q.push({
            name: "The 155-Day Uptrend",
            start: 58,
            end: 213
        }), Q.push({
            name: "Max E",
            start: 213,
            end: 213
        }), Q.push({
            name: "Plateau B",
            start: 214,
            end: 259
        }), Q.push({
            name: "Turbulent Times",
            start: 260,
            end: 344
        }), Q.push({
            name: "Max F",
            start: 262,
            end: 262
        }), Q.push({
            name: "Max G",
            start: 282,
            end: 282
        }), Q.push({
            name: "Max H",
            start: 333,
            end: 333
        }), Q.push({
            name: "The 19-Day Downtrend",
            start: 283,
            end: 301
        }), Q.push({
            name: "Plateau C",
            start: 345,
            end: 385
        }), Q.push({
            name: "The Alliance Ascent",
            start: 386,
            end: 395
        }), Q.push({
            name: "Max I",
            start: 395,
            end: 395
        }), Q.push({
            name: "First iOS Version",
            start: 411,
            end: 411
        }), Q.push({
            name: "Plateau D",
            start: 396,
            end: 453
        }), Q.push({
            name: "The TikTok Revolution",
            start: 454,
            end: 470
        }), Q.push({
            name: "Max J",
            start: 456,
            end: 456
        }), Q.push({
            name: "Max K",
            start: 472,
            end: 472
        }), Q.push({
            name: "Max L",
            start: 478,
            end: 478
        }), Q.push({
            name: "YT Drew",
            start: 471,
            end: 485
        }), Q.push({
            name: "Plateau E",
            start: 485,
            end: 600
        }), Q.push({
            name: "Uptrend A",
            start: 600,
            end: 613
        }), Q.push({
            name: "Max M",
            start: 613,
            end: 613
        }), Q.push({
            name: "Downtrend A",
            start: 614,
            end: 635
        }), Q.push({
            name: "Plateau F",
            start: 636,
            end: 737
        }), Q.push({
            name: "End of Record",
            start: 738,
            end: 738
        }), S = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674, 268883231, 261100885, 247870209, 240175828, 231697235, 240614202, 237647174, 230525212, 228239099, 226070733, 215992739, 216961676, 231079584, 235793502, 234032821, 228402462, 216942832, 211862670, 209792418, 220626495, 221020535, 228198633, 226910806, 227687295, 210969547, 197393506, 205629061, 215820135, 213694935, 209455870, 215822584, 215130299, 214034219, 229190414, 230055290, 225313791, 223398523, 231870169, 226224938, 218242706, 235891029, 210498444, 195329116, 187676007, 183432634, 175752106, 170096205, 173369342, 171454357, 185810310, 189616577, 190788861, 179291487, 179513980, 189122353, 188375572, 202060722, 203256609, 197948652, 191950448, 194693217, 196335490, 195911919, 202264283, 199251620, 193699336, 188441210, 183419345, 195919988, 198126823, 199780788, 197440550, 190144884, 179139362, 166469099, 178827877, 183801980, 197952484, 188875861, 185919783, 186237411, 182504952, 183532013, 174109004, 178159701, 161031347, 194622838, 205645645, 200496457, 194773327, 194546481, 207893217, 210920126, 213376144, 173859897, 154326886, 158943729, 166772975, 175066046, 177406405, 179018562, 185986119, 186747583, 200787939, 208959937, 161987576, 185512400, 185788899, 185957487, 194591063, 215634157, 230579314, 237637383, 240518707, 221398239, 225230795, 224891285, 211292916, 216944626, 219436299, 226523918, 232405568, 232166426, 216921782, 244767964, 257278946, 243548100, 237386943, 242802627, 229717622, 168149709, 259971896, 267057767, 257606635, 209857364, 126035568, 129833237, 151312703, 197006695, 73120657, 37551024, 39229432, 29517736, 29382631, 31512045, 42652097, 47363019, 49624906, 46687310, 33767120, 31230439, 34211643, 43094531, 53747053, 55380682, 49779117, 47748833, 21038802, 20406484, 24523793, 26566139, 25284142, 26825553, 23497443, 20291865, 17765022, 21291320, 21106123, 19050128, 18324426, 19044067, 19594721, 19347845, 23365124, 24186529, 19824881, 17952812, 17093838, 17328579, 17607296, 21284737, 22551012, 20471281, 19350848, 19654931, 18725460, 18641926, 23301269, 25178902, 21617041, 21433781, 21078957, 19526047, 18665064, 21394401, 21575049, 19286677, 18018450, 17550775, 17282428, 17055509, 19348704, 20177845, 19766211, 19088037, 18118802, 18269428, 18500614, 19130220, 19351798, 19205188, 19489961, 20233286, 20726811, 23245145, 26158741, 26096642, 24424181, 23690661, 22967492, 21098008, 20325973, 19431907, 17008295, 15583096, 14209752, 14307184, 13541498, 12822679, 13154311, 12161194, 12956543, 11435697, 13428928, 12262514, 12858519, 12405344, 12884309, 14410011, 15556681, 15260178, 14863807, 13861458, 15176144, 14089849, 13063987, 12378716, 13061867, 13118900, 13112653, 13137263, 13062253, 13126875, 14136833, 14711852, 14341250, 11888270, 13137006, 12830841, 12516937, 12783789, 13139393, 12931e3, 12857582, 13677329, 13892963, 13171528, 14135236, 14640750, 15677970, 16758399, 19125177, 17723446, 16469484, 17032884, 19792603, 21426397, 22032534, 20271251, 16190176, 16772813, 17675977, 18764026, 18346209, 19576834, 20989792, 21350839, 14696885, 14653075, 14677999, 14958759, 14210260, 15488352, 15623604, 14473144, 12823062, 14869909, 15142264, 15567014, 17896725, 20081347, 17765006, 12763925, 13523610, 13979983, 15080856, 17116394, 18483238, 18084320, 12100282, 12221529, 12441579, 12058220, 12441689, 12821546, 13401583, 13009895, 12271066, 12210094, 12355642, 13737115, 14257807, 14904897, 14072161, 15640387, 15721803, 16397970, 19254839, 21608906, 20527471, 16596206, 15550563, 14385591, 15547262, 13174302, 12462319, 13000669, 12832541, 12186376, 13150940, 14654379, 14299386, 14158528, 15185971, 12444117, 14253445, 15049053, 14123310, 16892853, 15963931, 11858727, 10012703, 9478191, 9193460, 8851082, 9298848, 9638204, 9442496, 8653593, 9093527, 8530977, 8809114, 9609612, 9906912, 9615756, 9477879, 9713075, 9126583, 8949378, 9577595, 10180186, 9858705, 9534213, 9184660, 8889455, 8311313, 9738346, 9772164, 9157791, 8445413, 8467279, 8756002, 9257951, 10213536, 10620530, 10352296, 9350531, 9118709, 9614237, 9692491, 10801215, 10984804, 9542309, 9609538, 9391430, 9515517, 10064494, 11061684, 10408005, 9794768, 9297643, 9275992, 9394076, 9716084, 10045958, 9715229, 9091248, 10010584, 9845528, 9532588, 8986320, 9037708, 9820996, 8953464, 9074064, 8644692, 8025308, 8832112, 10785788, 10539708, 8908744, 8331216, 8858100, 8626840, 7666284, 8503372, 8855308, 6762540, 6414076, 6786692, 6445532, 6262192, 5918176, 5864376, 5464928, 5384996, 5942760, 5261972, 5404612, 6184860, 6312948, 5815660, 5208552, 4734392, 4538784, 4661404, 5145524, 4819368, 4369224, 4458584, 4289956, 3538288, 3517544, 3871876, 3388048, 3344796, 3089228, 2863676, 2268964, 2160500, 2580004, 2244356, 2018408, 1688912, 1945368, 1796332, 1619260, 2060292, 1597656, 1472788, 1306208, 1171408, 1021096, 1109312, 1241276, 1305092, 1142748, 1157700, 991984, 786992, 786396, 1043956, 1029320, 860500, 834824, 841912, 736464, 690328, 878376, 907232, 794932, 646388, 752600, 672836, 636212, 794108, 746856, 642928, 671328, 493568, 458168, 428776, 464736, 371412, 314568, 225472, 252072, 227604, 251048, 269184, 174136, 825576, 536060, 165952, 153252, 180036, 149616, 138472, 157832, 188152, 180108, 134076, 70960, 89236, 111428, 60520, 74620, 73424, 74720, 71584, 94432, 62572, 66420, 32532, 34452, 41048, 51372, 61916, 43236, 55172, 26776, 47e3, 57424, 93100, 64980, 37288, 44296, 34588, 40700, 29200, 24604, 18184, 42660, 31404, 38096, 18556, 17388, 19568, 17604, 22328, 40300, 39392, 33440, 17960, 7984, 11612, 67700, 14108, 22444, 19756, 9436, 16864, 14400, 17216, 14436, 8612, 15952, 29764, 18748, 16348, 23976, 22080, 20268, 20984, 9480, 30736, 15996, 9484, 9392, 9716, 21540, 57428, 24788, 18728, 8528, 5972, 20560, 18268, 28088, 15364, 15300, 29348, 30992, 20564, 34420, 16716, 14424, 12360, 15124, 51172, 13176], this.resize(), Uj.zf(0, 0)
    }, this.resize = function() {
        a = Math.floor(.15 * yC), W = Math.floor((LS ? .018 : .0137) * jS), v = zm + (W = 10 > W ? 10 : W) + km, V()
    }, this.requestData = function() {
        F || sj.Af()
    }, this.Bf = function(j) {
        var I;
        for (F = !0, I = 0; I < j.length; I++) S.unshift(j[I]);
        V(), pS.request = !0
    }, this.Cf = function() {
        j()
    }, this.fd = function(V, m) {
        m > mS - .6 * a ? this.yf ? V !== n && (l += V - n, n = V, j(), I(V), this.yf = -1 !== P, pS.request = !0) : I(V) && (pS.request = !0) : this.Ve()
    }, this.Ve = function() {
        -1 !== P && (this.yf = !1, P = -1, pS.request = !0)
    }, this.scroll = function(V, m) {
        -1 !== P && (l += Math.floor(m), j(), I(V), pS.request = !0)
    }, this.click = function(V, j) {
        this.fd(V, j), -1 !== P && (n = V, this.yf = !0)
    }, this.We = function() {
        -1 !== P && (this.yf = !1)
    }, this._ = function() {
        wC.fillStyle = Fm;
        for (var V = D; V >= B; V--) m(V);
        if (F && 0 === B && (wC.fillStyle = Bm, m(0)), -1 !== P && (wC.fillStyle = nm, m(P)), -1 !== P) {
            wC.font = v, wC.textBaseline = "bottom", (V = new Date).setTime(t.getTime() - 864e5 * P);
            var j = "month",
                I = "day";
            "undefined" != typeof Intl && (j = new Intl.DateTimeFormat("en-US", {
                Df: "long"
            }).format(V), I = new Intl.DateTimeFormat("en-US", {
                Ef: "long"
            }).format(V)), V = I + ", " + V.getUTCDate() + " " + j + " " + V.getFullYear();
            var C = 1 === S[P] ? " second played" : " seconds played";
            C = UV.jb(S[P]) + C;
            var a = Math.floor(wC.measureText(V).width),
                e = Math.floor(wC.measureText(C).width),
                n = Math.floor(.5 * (a + W));
            j = (j = l + IS - (P + 1) * K) < n ? n : j > IS - n ? IS - n : j, I = mS - Math.floor(L * Math.pow(S[P], g));
            var A = Math.floor(1.1 * W),
                p = I > mS - A ? mS - A : I;
            for (wC.fillStyle = yI, wC.fillRect(IS - e - W, p - A, e + W, A), wC.fillRect(j - n, mS - A, a + W, A), wC.fillStyle = tm, wC.textAlign = _m, wC.fillText(C, Math.floor(IS - .5 * W), p), C = p - 2 * A, a = -1, e = S.length - P - 1, n = Q.length - 1; 0 <= n; n--) e >= Q[n].start && e <= Q[n].end && (-1 === a || Q[n].end - Q[n].start < Q[a].end - Q[a].start) && (a = n); - 1 !== a && (e = Math.floor(wC.measureText(Q[a].name).width), wC.fillStyle = yI, wC.fillRect(IS - e - W, C, e + W, A), wC.fillStyle = tm, wC.fillText(Q[a].name, Math.floor(IS - .5 * W), C + A)), wC.textAlign = Gm, wC.fillText(V, j, mS), wC.strokeStyle = gm, wC.lineWidth = 1, wC.beginPath(), wC.moveTo(0, I), wC.lineTo(IS, I), wC.closePath(), wC.stroke()
        }
    }
}

function SC() {
    var V, j, I, m, C, S, l, a, K, e, L, B, D;
    this.height = this.if = 0, this.init = function() {
        C = CI, L = "rgba(0,100,0,0.8)", B = "rgba(150,0,0,0.8)", e = !0, a = !1, K = bI[GV], this.resize()
    }, this.resize = function() {
        j = Math.floor((LS ? .305 : .24) * jS), this.height = Math.floor(.5 + .13 * j), j = Math.floor(6 * this.height), V = zm + Math.floor(.8 * this.height) + km, D = Math.floor(.5 * this.height), bS.font = V, I = WI, m = Math.floor(1 + .13 * this.height), (S = document.createElement("canvas")).width = j, S.height = Ca("showDensity") ? Math.floor(1.5 * this.height) : this.height, (l = S.getContext("2d", {
            alpha: !0
        })).font = V, l.textBaseline = pm, l.textAlign = Gm, this.Ff()
    }, this.hf = function() {
        return LS && xC < 1.2 * yC
    }, this.Gf = function() {
        this.hf() ? this.if = IS - j - WI : this.if = Math.floor(xV.Hf() + (IS - xV.Hf() - yV.width - j) / 2 - .5 * WI)
    }, this.Fa = function() {
        a && (a = !1, this.Ff())
    }, this.Ff = function() {
        var I = Ca("showDensity") ? Math.floor(1.5 * this.height) : this.height;
        l.clearRect(0, 0, j, I), l.fillStyle = e ? L : B, l.fillRect(0, 0, j, I), l.fillStyle = nm, this.If(), this.Jf(), l.fillStyle = bI[GV] >= _j.ia(GV) ? Pm : tm, l.fillText(UV.jb(K), Math.floor(j / 2), D), Ca("showDensity") && (l.font = zm + Math.floor(.4 * this.height) + km, l.fillText("Dens: " + (Math.floor(100 * K / sI[GV]) / 100).toFixed(2), Math.floor(j / 2), D + 2 * this.height / 3), l.font = V), l.fillStyle = tm, l.fillRect(0, 0, j, 1), l.fillRect(0, 0, 1, I), l.fillRect(0, I - 1, j, 1), l.fillRect(j - 1, 0, 1, I)
    }, this.If = function() {
        var V = Math.floor((_j.Kf() - 1) * this.height / 9);
        V = Dl(V, this.height - m);
        var I = Ca("showDensity") ? 1.5 : 1;
        l.fillRect(0, Math.floor(I * V), m, Math.floor(I * (this.height - V))), l.fillRect(j - m, Math.floor(I * V), m, Math.floor(I * (this.height - V)))
    }, this.Jf = function() {
        l.fillRect(m, (Ca("showDensity") ? 1.5 : 1) * this.height - m, Math.floor((j - 2 * m) * bI[GV] / C), m)
    }, this.Ba = function() {
        0 !== EI[GV] && 2 !== UI[GV] && K !== bI[GV] && (C = Bl(bI[GV], C), e = bI[GV] > K && 10 <= bI[GV], K = bI[GV], a = !0)
    }, this._ = function() {
        0 === EI[GV] || _V || 2 === UI[GV] || wC.drawImage(S, this.if, I)
    }
}

function lC() {
    function V() {
        var V;
        e.clearRect(0, 0, zI, fI), e.fillStyle = "rgba(0,40,90,0.75)", e.fillRect(0, 0, zI, W), e.fillStyle = Vm, e.fillRect(0, W, zI, fI - W), dI[GV] >= k && I(dI[GV] - k, "rgba(0,255,0,0.3)"), 0 !== dI[GV] && 0 === k && I(0, "rgba(255,255,150,0.2)"), -1 !== X && I(X, Lm), e.fillStyle = Im, e.fillRect(0, W, zI, 1), e.fillRect(0, 0, zI, vI), e.fillRect(0, 0, vI, fI), e.fillRect(zI - vI, 0, vI, fI), e.fillRect(0, fI - vI, zI, vI), e.font = XI, e.textBaseline = pm, e.textAlign = Gm, e.fillText(G, Math.floor(zI / 2), Math.floor(D + qI / 2));
        var S = dI[GV] < k + a - 1 ? 1 : 2;
        for (e.font = kI, e.textAlign = Qm, V = a - S; 0 <= V; V--) j(ZI[V + k]), m(V, V + k, ZI[V + k]);
        for (e.textAlign = _m, V = a - S; 0 <= V; V--) j(ZI[V + k]), C(V, ZI[V + k]);
        2 === S && (j(GV), e.textAlign = Qm, m(a - 1, dI[GV], GV), e.textAlign = _m, C(a - 1, GV)), 0 === k && (V = .7 * v / ej.Y(4).height, e.setTransform(V, 0, 0, V, Math.floor(t + .58 * v + .5 * V * ej.Y(4).width), Math.floor(D + qI + .4 * v)), e.imageSmoothingEnabled = !0, e.drawImage(ej.Y(4), -Math.floor(ej.Y(4).width / 2), -Math.floor(ej.Y(4).height / 2)), e.setTransform(1, 0, 0, 1, 0, 0))
    }

    function j(V) {
        fV && (e.fillStyle = GS.Lf[GS.$b[GS.na[V]]])
    }

    function I(V, j) {
        e.fillStyle = j, V = V > a - 1 ? a - 1 : V;
        var I = Math.floor((V === a - 1 ? 2 : 0 === V ? 1.15 : 1) * v);
        I = V === a - 2 ? Math.floor(W + 9.15 * v) - Math.floor(W + 8.15 * v) : I, e.fillRect(0, Math.floor(W + (V + (0 === V ? 0 : .15)) * v), zI, I)
    }

    function m(V, j, I) {
        e.fillText(Q[j], t, Math.floor(D + qI + (V + .5) * v)), 1 === UI[I] && (e.font = fm + kI), e.fillText(A[I] === I ? iI[I] : g[A[I] % jI], n, Math.floor(D + qI + (V + .5) * v)), 0 !== UI[I] && (e.font = kI)
    }

    function C(V, j) {
        e.fillText(sI[j], F, Math.floor(D + qI + (V + .5) * v))
    }

    function S(V) {
        return 0 > (V -= WI + W) ? Math.floor(V / v) - 1 : V < (a - 1) * v ? Math.floor(V / v) : V < fI - W ? a - 1 : (V -= fI - W, a + Math.floor(V / v))
    }

    function l(V, j) {
        return V >= WI && V < WI + zI && j >= WI && j < WI + fI
    }
    var a, K, e, L, B, D, P, W, v, t, n, F, g, A, p, G, Q, _, z, f, X, k, q, Z, d, i;
    this.init = function() {
        var j, I;
        for (q = 0, Z = !1, i = d = 0, G = "LEADERBOARD", X = -1, a = LS ? 6 : 10, k = 0, f = !1, _ = new Uint16Array(a + 1), z = new Uint32Array(a + 1), B = jI, ZI = new Uint16Array(B), dI = new Uint16Array(B), j = B - 1; 0 <= j; j--) ZI[j] = j, dI[j] = j;
        this.resize(!0), g = [], A = new Uint16Array(jI), p = new Uint16Array(jI);
        var m = Math.floor(zI - n - t - L),
            C = 0;
        for (Q = Array(jI), e.font = kI, j = jI - 1; 0 <= j; j--)
            if (Q[j] = j + 1 + ".", A[j] = j, p[j] = Math.floor(e.measureText(iI[j]).width), p[j] > m) {
                var S = iI[j];
                for (I = iI[j].length - 1; 1 <= I && (S = S.substring(0, I), p[j] = Math.floor(e.measureText(S + "...").width), !(p[j] <= m)); I--);
                S += "...", g.push(S), A[j] = jI + C++
            } V()
    }, this.resize = function(j) {
        if (LS ? (zI = Math.floor(.335 * jS), fI = Math.floor(a * zI / 8)) : (zI = Math.floor(.27 * jS), fI = Math.floor(a * zI / 10)), zI = Math.floor(.97 * zI), (K = document.createElement("canvas")).width = zI, K.height = fI, e = K.getContext("2d", {
                alpha: !0
            }), D = .025 * zI, qI = .16 * zI, P = 0 * zI, W = Math.floor(.45 * D + qI), v = (fI - qI - 2 * D - P) / a, XI = zm + Math.floor(.55 * qI) + km, kI = Math.floor(.6 * v) + km, e.font = kI, t = Math.floor(e.measureText("555").width), n = Math.floor(e.measureText("555600.00").width), L = Math.floor(e.measureText("00920600").width), e.font = XI, F = zI - t, !j) {
            for (e.font = kI, j = jI - 1; 0 <= j; j--) p[j] = Math.floor(e.measureText(A[j] === j ? iI[j] : g[A[j] % jI]).width);
            V()
        }
    }, this.Hf = function() {
        return zI
    }, this.Fa = function(j) {
        f && (j || 14 >= vS && 0 == pS.ma() % 6 || 14 < vS) && (f = !1, V())
    }, this.Ba = function() {
        for (var V = B - 1; 0 <= V; V--)
            if (0 === EI[ZI[V]]) {
                var j = V,
                    I = ZI[j];
                for (B--; j < B; j++) ZI[j] = ZI[j + 1], dI[ZI[j]] = j;
                ZI[B] = I, dI[ZI[B]] = B
            } for (I = B - 1, j = 0; j < I; j++) sI[ZI[j]] < sI[ZI[j + 1]] && (V = ZI[j], ZI[j] = ZI[j + 1], ZI[j + 1] = V, dI[ZI[j]] = j, dI[ZI[j + 1]] = j + 1);
        V: {
            for (V = f, f = !0, j = I = dI[GV] >= a - 1 ? a - 2 : a - 1; 0 <= j; j--)
                if (_[j] !== ZI[j] || z[j] !== sI[ZI[j]]) break V;
            (I !== a - 2 || _[a] === dI[GV] && z[a] === sI[GV]) && (f = V)
        }
        for (V = a - 1; 0 <= V; V--) _[V] = ZI[V], z[V] = sI[ZI[V]];
        _[a] = dI[GV], z[a] = sI[GV]
    }, this.click = function(j, I) {
        if (l(j, I)) {
            if (q = pS.lb, Z = !0, d = i = S(I), FI) {
                var m = Pl(-1, i, a);
                X !== (m = m === a ? -1 : m) && (X = m, V(), pS.request = !0)
            }
            return !0
        }
        return !1
    }, this.fd = function(j, I) {
        var m = S(I);
        if (Z) {
            var C = k;
            return (k = Pl(0, k += d - m, jI - a)) !== C && (d = m, m = Pl(-1, m, a), X = m = m !== a && l(j, I) ? m : -1, V(), pS.request = !0), !0
        }
        return m = (m = Pl(-1, m, a)) === a || !l(j, I) || FI ? -1 : m, X !== m && (X = m, V(), pS.request = !0)
    }, this.We = function(j, I) {
        if (!Z) return !1;
        Z = !1;
        var m = S(I);
        if (FI && -1 !== X && (X = -1, V(), pS.request = !0), 350 > pS.lb - q && i === m && -1 !== (m = (m = Pl(-1, m, a)) !== a && l(j, I) ? m : -1)) {
            var C = ZI[m + k];
            m === a - 1 && dI[GV] >= k + a - 1 && (C = GV), 0 !== EI[C] && sV.ob(C, 800, !1, 0)
        }
        return !0
    }, this.scroll = function(j, I, m) {
        return !Z && (!!l(j, I) && (j = (j = Pl(-1, j = S(I), a)) === a || FI ? -1 : j, 0 < m ? k < jI - a && (k++, X = j, V(), pS.request = !0) : 0 < k && (k--, X = j, V(), pS.request = !0), !0))
    }, this._ = function() {
        wC.drawImage(K, WI, WI)
    }
}

function aC() {
    function V() {
        l.clearRect(0, 0, yV.width, yV.height), l.fillStyle = yI, l.fillRect(0, 0, yV.width, yV.height), l.fillStyle = lm, l.fillRect(0, yV.height - e - 1, Math.floor((0 < A ? A : Math.sqrt(n[4] / n[3])) * yV.width), e), l.fillStyle = tm, l.fillRect(0, 0, yV.width, 1), l.fillRect(0, 0, 1, yV.height), l.fillRect(yV.width - 1, 0, 1, yV.height), l.fillRect(0, yV.height - 1, yV.width, 1), l.fillRect(0, yV.height - e - 1, yV.width, 1);
        for (var V = 0, I = 0; I < t.length; I++)
            if (F[I]) {
                l.textAlign = Qm;
                var m = Math.floor((L - e + 2 * D) * (I - V + 1) / (t.length + 1) - .7 * D);
                l.fillText(t[I], B, m), l.textAlign = _m, 5 === I && 0 !== EI[GV] && bI[GV] >= _j.ia(GV) ? (l.fillStyle = "rgb(255,120,100)", l.fillText(j(I), yV.width - B, m), l.fillStyle = tm) : l.fillText(j(I), yV.width - B, m)
            } else V++
    }

    function j(V) {
        return 3 > V ? n[V].toString() : 3 === V || 4 === V || 5 === V ? yV.Ed(n[V] / 100, 2) : 7 > V ? UV.jb(n[V]) : yV.Mf(n[7])
    }

    function I(V) {
        V = Kl(1e4 * V, gV), 8 === kV && (0 === EI[0] ? zS.Xa(1) : 0 === EI[1] && zS.Xa(0)), V >= n[3] && (zS.Xa(-1), n[4] = -1), n[4] !== V && (v++, n[4] = V)
    }

    function m() {
        for (var V = YI - 1; 0 <= V; V--)
            if (0 < rI[TI[V]].length) return !1;
        return !0
    }

    function C() {
        sI[GV] !== n[6] && (n[6] = sI[GV], v++)
    }
    var S, l, a, K, e, L, B, D, P, W, v, t, n, F, g, A, p, G, Q;
    this.init = function() {
        A = p = 0, (t = Array(8))[0] = "Humans", t[1] = nV ? "Players" : "Bots", t[2] = "Spectators", t[3] = "Threshold", t[4] = "Occupation", t[5] = "Interest", t[6] = "Income", t[7] = "Time", Q = gV - Kl(gV, 100), (n = Array(t.length))[0] = nV ? 0 : PV, n[1] = nV ? YI : vV, n[2] = tV, n[3] = 1e4, n[4] = Kl(1e4 * sI[0], gV), n[5] = 700, n[6] = 0, C(), n[7] = 0, g = j(6), F = Array(t.length);
        for (var V = t.length - 1; 0 <= V; V--) F[V] = !0;
        G = 0, nV ? (F[0] = !1, F[2] = !1, F[3] = !1, G = 3) : (F[3] = !1, G = 1), v = 0, this.resize()
    }, this.resize = function() {
        this.width = Math.floor((LS ? .1646 : .126) * jS), this.height = Math.floor(1.18 * this.width), e = Math.floor(.04 * this.width), B = Math.floor(.05 * this.width), D = .04 * this.width, L = this.height, this.height -= Math.floor(G * (this.height - 2 * e) / t.length) - Math.floor(this.width / 4), W = Math.floor(.55 * (L - e) / t.length), P = zm + W + km, (S = document.createElement("canvas")).width = this.width, S.height = this.height, (l = S.getContext("2d", {
            alpha: !0
        })).font = P, l.textBaseline = pm, l.lineWidth = 1, this.fc(), this.Nf(), uV.Gf(), V()
    }, this.Nf = function() {
        a = IS - this.width - WI
    }, this.Of = function() {
        K = WI
    }, this.fc = function() {
        K = WI + (uV.hf() && 0 !== EI[GV] && !_V ? Ca("showDensity") ? Math.floor(1.5 * uV.height) + WI : uV.height + WI : 0)
    }, this.Fa = function(j) {
        0 < v && (j || 12 > vS && 100 <= v || 12 <= vS) && (v = 0, V())
    }, this.Sc = function() {
        return n[7]
    }, this.Mf = function(V) {
        var j = Math.floor(V / 1e3 / 60);
        return 10 > (V = Math.floor((V - 6e4 * j) / 1e3)) ? j + ":0" + V : j + ":" + V
    }, this.Ed = function(V, j) {
        return V.toFixed(j) + "%"
    }, this.Ba = function() {
        if (F[0] && WV - tV !== n[0] && (n[0] = WV - tV, v++), YI - n[0] !== n[1] && (n[1] = YI - n[0], v++), this.Ca(), fV) {
            var V = QS.qf();
            V >= Q && m() ? (zS.Xa(-1), I(QS.qf())) : I(V)
        } else(V = sI[ZI[0]]) >= Q && m() && zS.Xa(-1), I(V);
        (V = _j.Pf(GV)) !== n[5] && (n[5] = V, v++), C(), n[7] += pS.Qf(), V = j(7), g !== V && (g = V, v += 100)
    }, this.Ca = function() {
        F[2] && tV !== n[2] && (n[2] = tV, v++)
    }, this.Rf = function(j) {
        if (j === iV) return A = 0, V(), !1;
        if (-1 === j && 0 === p) return !1;
        var I = A,
            m = performance.now();
        if (0 <= j) {
            var C = m - 392 * j;
            p = 0 === j || C < p ? C : p
        }
        return A = 1 < (A = (m - p) / (392 * iV)) ? 1 : A, V(), A !== I
    }, this.click = function(V, j) {
        if (0 !== mI) {
            if (j < K + this.height - e - this.width / 4 || j > K + this.height - e || V < a || V > a + this.width) return !1;
            var I = Math.floor((V - a) / (this.width / 4));
            return 0 === I ? tj.open() : 1 === I && pj.open()
        }
    }, this._ = function() {
        wC.drawImage(S, a, K);
        var V = ej.xc("clans"),
            j = this.width / (5 * V.width);
        wC.setTransform(j, 0, 0, j, a + this.width / 25, K + this.height - e - this.width / 4), wC.drawImage(V, 0, 0), wC.setTransform(1, 0, 0, 1, 0, 0), V = ej.xc("chatlog"), wC.setTransform(j, 0, 0, j, j * V.width + a + 2 * this.width / 25, K + this.height - e - this.width / 4), wC.drawImage(V, 0, 0), wC.setTransform(1, 0, 0, 1, 0, 0)
    }
}

function KC() {
    var V, j, I, m, C, S, l, a, K, e;
    this.Sf = -1, this.init = function() {
        V = !1, m = 0, C = .61, S = .07, l = .09, e = a = 0, this.Sf = -1
    }, this.resize = function() {
        if (V) {
            I = Dl(I = LS ? Math.floor(.69 * jS) : Math.floor(.5 * jS), Bl(xC - 2 * WI, 10)), I = Dl(I, Math.floor(3.57 * Bl(yC - 2 * WI, 3))), m = Math.floor(.28 * I), (K = document.createElement("canvas")).width = I, K.height = m;
            var a = K.getContext("2d", {
                    alpha: !0
                }),
                e = Math.floor(1 + m / 40);
            a.clearRect(0, 0, I, m), a.fillStyle = yI, a.fillRect(e, e, I - 2 * e, m - 2 * e), a.lineJoin = "bevel", a.lineWidth = 2 * e, a.strokeStyle = tm, a.strokeRect(e, e, I - 2 * e, m - 2 * e), a.imageSmoothingEnabled = !0;
            var L = ej.Y(j),
                B = L.height,
                D = C * m / B;
            a.setTransform(D, 0, 0, D, Math.floor((I - D * L.width) / 2), Math.floor((m - D * B) / 2)), a.drawImage(L, 0, 0), a.setTransform(1, 0, 0, 1, Math.floor(I - l * m - S * m - e), Math.floor(e + S * m)), e = Math.floor(l * m), a.lineWidth = Math.floor(1 + m / 80), a.strokeStyle = tm, a.beginPath(), a.moveTo(0, 0), a.lineTo(e, e), a.moveTo(0, e), a.lineTo(e, 0), a.stroke(), a.setTransform(1, 0, 0, 1, 0, 0)
        }
    }, this.show = function(I, m) {
        V || (j = I ? 1 : 2, V = !0, this.resize(), rV._c(), YV.hide(), e = pS.lb, -1 === this.Sf && (this.Sf = pS.ma()), a = m ? 1 : 0)
    }, this.Ba = function() {
        !V || 1 <= a || (a = 1 < (a += 5e-4 * (pS.lb - e)) ? 1 : a, e = pS.lb, pS.request = !0)
    }, this.click = function(j, C) {
        return !(!V || 0 >= a) && (j -= Math.floor((IS - I) / 2), C -= mS - m - 2 * WI, !(0 > j || 0 > C || j > I || C > m) && (j > I - m / 3 && C < m / 3 && (V = !1, pS.request = !0), !0))
    }, this._ = function() {
        !V || 0 >= a || (wC.globalAlpha = a, wC.drawImage(K, Math.floor((IS - I) / 2), mS - m - 2 * WI), wC.globalAlpha = 1)
    }
}

function eC() {
    function V(V, j, m, C, S, l, a) {
        0 !== EI[V] && 0 !== sI[V] && (m = IS * ((oI[V] + MI[V] + 1) / 2 - m) / (S - m) - .5 * j, C = mS * ((NI[V] + JI[V] + 1) / 2 - C) / (l - C) - .5 * j, m > IS || C > mS || m < -j || C < -j || (wC.setTransform(GI * a, 0, 0, GI * a, m, C), wC.drawImage(I[fV ? GS.na[V] : V < PV ? 1 : 0], 0, 0)))
    }
    var j, I, m, C;
    this.init = function() {
        var V;
        if (I = [], j = !1, _V)
            if (C = 0, m = 63, j = !0, fV)
                for (V = 0; V <= XV; V++) I.push(this.Tf(GS.Uf[GS.$b[V]], m));
            else I.push(this.Tf(GS.Uf[0], m)), I.push(this.Tf(GS.Uf[4], m))
    }, this.Ba = function() {
        j && 349 == ++C && (I = [], j = !1)
    }, this.Tf = function(V, j) {
        var I = document.createElement("canvas");
        I.width = j, I.height = j;
        var m = I.getContext("2d", {
            alpha: !0
        });
        m.clearRect(0, 0, j, j);
        var C, S, l = m.getImageData(0, 0, j, j),
            a = l.data,
            K = Math.floor(j / 2),
            e = 1 + K * K;
        for (C = j - 1; 0 <= C; C--)
            for (S = j - 1; 0 <= S; S--) {
                var L = (C - K) * (C - K) + (S - K) * (S - K),
                    B = 4 * (S * j + C);
                a[B] = V[0], a[B + 1] = V[1], a[B + 2] = V[2], L = Math.floor((e - L) * V[3] / e), a[B + 3] = 0 < L ? L : 0
            }
        return m.putImageData(l, 0, 0), I
    }, this._ = function() {
        if (j) {
            var I;
            wC.imageSmoothingEnabled = !0, wC.globalAlpha = 1 - (160 < C ? (C - 160) / 190 : 0);
            var S = QI / GI,
                l = _I / GI,
                a = (IS + QI) / GI,
                K = (mS + _I) / GI,
                e = .25,
                L = m * GI * e;
            for (I = jI - 1; I >= PV; I--) V(I, L, S, l, a, K, e);
            for (L = m * GI * (e = .5), I = PV - 1; 0 <= I; I--) V(I, L, S, l, a, K, e);
            wC.globalAlpha = 1, wC.imageSmoothingEnabled = 3 > GI, wC.setTransform(GI, 0, 0, GI, 0, 0)
        }
    }
}

function LC(V, j, I) {
    if (!(0 === EI[V] || 0 > I || 1e3 < I || 2 === UI[V])) {
        var m = Kl(I * bI[V], 1e3);
        if (10 === kV && j < PV && 2 !== UI[j] && (m = uj.Vf(V, m)), fV && j < jI && !Zl(V, j)) DC(V, j, m);
        else {
            j < jI && 0 === EI[j] && (j = jI);
            var C = Kl(3 * bI[V], 256);
            if (!((m -= 500 <= I ? C : 0) <= SI) && Qj.fa(V)) {
                var S = rI[V].length;
                j === jI ? d(V) : q(V, j), 0 === S && 0 === rI[V].length || (fV && (G[V] = 1), V === GV && (FS.R[0] += 500 <= I ? I - 12 : I, FS.R[1]++, FS.R[12] += C, FS.R[13] += m), Z(S, V), Qj.aa(V, m, j), Fj.add(V, -m - C, "Attacking " + (j === jI ? "unclaimed land" : iI[j]) + " with " + m + " troops", 1, "attack_" + j), bI[V] -= m + C, EV.ba(V, !1))
            }
        }
    }
}

function BC(V, j, I, m) {
    return 10 === kV && V < PV && (m = uj.Vf(V, m)), !(m <= SI || !Qj.fa(V)) && (0 !== (j = JV.fb(V, j, I)) && (I = Kl(3 * bI[V], 128), m >= Kl(bI[V], 2) && (m -= I), V === GV && (FS.R[12] += I), Qj.Ra(V, m, j), Fj.add(V, -m - I, "Starting boat with " + m + " troops", 1, "boat_start"), bI[V] -= m + I, !0))
}

function DC(V, j, I) {
    if (!(!fV || 0 === EI[V] || 0 === EI[j] || 0 > I || I > bI[V] || V === j || Zl(V, j) || V < PV && j < PV && 7 > kV && 1071 > pS.ma())) {
        var m = Kl(bI[V], 16);
        I -= I >= Kl(bI[V], 2) ? m : 0;
        var C = 150 * sI[j] - bI[j];
        0 >= C || (I = I > C ? C : I, V === GV && ($V.Yd(I, j), FS.R[12] += m, FS.R[16] += I), j === GV && ($V.Zd(I, V), FS.R[10] += I), Fj.add(V, -I - m, "Supporting " + iI[j] + " with " + I + " troops", 3, j + "_support"), Fj.add(j, I, "Support by " + iI[V], 3, V + "_supported"), bI[V] -= I + m, bI[j] += I)
    }
}

function PC() {
    this.hc = this.go = this.Wf = !1, this.Xf = [0, 0, 0, 0], this.Yf = function() {
        if (this.hc = this.hc || this.go, this.go || this.Wf && this.hc) {
            var V = WS.Zf[0],
                j = WS.Zf[1],
                I = WS.Zf[2],
                m = WS.Zf[3];
            V = V < this.Xf[0] ? this.Xf[0] : V, j = j < this.Xf[1] ? this.Xf[1] : j, I = I > this.Xf[2] ? this.Xf[2] : I, m = m > this.Xf[3] ? this.Xf[3] : m, this.Wf = this.go = !1, V === this.Xf[0] && j === this.Xf[1] && I === this.Xf[2] && m === this.Xf[3] ? this.ic() : I >= V && m >= j && RS.putImageData(uS, 0, 0, V, j, I - V + 1, m - j + 1)
        }
    }, this.ic = function() {
        this.hc && this.Xf[2] >= this.Xf[0] && this.Xf[3] >= this.Xf[1] && RS.putImageData(uS, 0, 0, this.Xf[0], this.Xf[1], this.Xf[2] - this.Xf[0] + 1, this.Xf[3] - this.Xf[1] + 1), this.hc = !1
    }, this.ec = function() {
        this.Xf[2] >= this.Xf[0] && this.Xf[3] >= this.Xf[1] && RS.putImageData(uS, 0, 0, this.Xf[0], this.Xf[1], this.Xf[2] - this.Xf[0] + 1, this.Xf[3] - this.Xf[1] + 1), this.hc = !1
    }, this.Kb = function() {
        var V;
        this.hc = this.go = this.Wf = !1, this.Xf[0] = JS, this.Xf[1] = sS, this.Xf[2] = this.Xf[3] = 0;
        var j = 1;
        V: for (; j < JS - 1; j++)
            for (V = sS - 2; 1 < V; V--)
                if (1 === wS[Lj.Ka(j, V) + 2]) {
                    this.Xf[0] = j;
                    break V
                } V = 1;
        V: for (; V < sS - 1; V++)
            for (j = JS - 2; 1 < j; j--)
                if (1 === wS[Lj.Ka(j, V) + 2]) {
                    this.Xf[1] = V;
                    break V
                } j = JS - 2;
        V: for (; 0 < j; j--)
            for (V = sS - 2; 1 < V; V--)
                if (1 === wS[Lj.Ka(j, V) + 2]) {
                    this.Xf[2] = j;
                    break V
                } V = sS - 2;
        V: for (; 0 < V; V--)
            for (j = JS - 2; 1 < j; j--)
                if (1 === wS[Lj.Ka(j, V) + 2]) {
                    this.Xf[3] = V;
                    break V
                }
    }
}

function WC() {
    this.isOpen = !1, this.$f = null, this._f = 0, this.height = this.width = null, this.ag = .013, this.bg = .022, this.cg = .025, this.dg = 3, this.eg = 1.2, this.fg = .2, this.gg = .235, this.hg = .9, this.ig = .08;
    var V, j = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
        I = [-1e6, -1e6];
    this.position = [0, 0], this.jg = [0, 0], this.init = function() {
        this.$f = [null, null], this.isOpen = !1, this._f = 0, this.resize()
    }, this.open = function(V) {
        this._f = V, this.isOpen = !0, this.Ia(), Kj.hide(), pS.request = !0
    }, this.Ba = function() {
        this.isOpen && this.Ia()
    }, this.Ia = function() {
        pS.lb - 12e4 >= I[this._f] && (I[this._f] = pS.lb, this.jg = [0, 0], Uj.zf(0, 1 + this._f) && sj.kg(0, this._f))
    }, this.resize = function() {
        var j;
        for (this.width = this.lg(LS ? .85 : .66, .75, xC, yC), this.height = Math.floor(this.width / .75), j = 1; 0 <= j; j--) this.$f[j] && (this.$f[j][4] = zm + Math.floor(this.$f[j][5] * this.height / 10) + km);
        V = zm + Math.floor(.1 * this.height) + km
    }, this.lg = function(V, j, I, m) {
        return I < j * m ? Math.floor(V * I) : Math.floor(j * V * m)
    }, this.mg = function(V, j, I, m, C, S, l) {
        this.position[V] = l;
        var a = j.length,
            K = zm + Math.floor(C * this.height / 10) + km;
        for (this.ng(j, K, S * this.width), m = [
                [], a, -1, m, K, C, 10 * l
            ], C = 0; C < a; C++) S = {
            name: j[C].name,
            value: j[C].value / I,
            qa: j[C].qa
        }, m[0].push(S);
        this.$f[V] = m, this.og(V), j = this.$f[V][0][0].name, 1 === V && (j = "[" + j + "]"), 0 === l && kS.U(V, j), pS.request = !0
    }, this.og = function(V) {
        this.$f[V][0].sort((function(V, j) {
            return j.value - V.value
        }))
    }, this.pg = function(V, j, I, m) {
        if (this.$f && this.$f[V]) {
            var C, S = !1,
                l = 383 / 384;
            if (0 === V) {
                for (C = 0; C < this.$f[V][0].length; C++)
                    if (j === this.$f[V][0][C].name && I > .99 * this.$f[V][0][C].value && I < 1.01 * this.$f[V][0][C].value) {
                        this.$f[V][0][C].value = m, S = !0;
                        break
                    } S || this.$f[V][0].push({
                    name: j,
                    value: m
                })
            } else {
                for (C = 0; C < this.$f[V][0].length; C++)
                    if (j === this.$f[V][0][C].name) {
                        this.$f[V][0][C].value += 32 < this.$f[V][0][C].value ? (64 - this.$f[V][0][C].value) / 256 : .25, this.$f[V][0][C].value *= 1 / l, S = !0;
                        break
                    } for (C = 0; C < this.$f[V][0].length; C++) this.$f[V][0][C].value *= l;
                S || this.$f[V][0].push({
                    name: j,
                    value: .25
                })
            }
            this.og(V)
        }
    }, this.ng = function(V, j, I) {
        for (var m = V.length - 1; 0 <= m; m--)
            for (; 3 < V[m].name.length && TV.measureText(V[m].name, j) > I;) V[m].name = V[m].name.substring(0, V[m].name.length - 4) + "..."
    }, this.click = function(V, j) {
        if (!this.isOpen) return !1;
        if (V -= (IS - this.width) / 2, j -= (mS - this.height) / 2, 0 > V || V > this.width || 0 > j || j > this.height) return this.isOpen = !1, 0 === mj.getState() && Sj.toggle(0, !0), pS.request = !0;
        if (j < .3 * this.height) var m = 1;
        else j < .85 * this.height ? (m = (0 === this._f ? 14.1 : 3) * (j - .3 * this.height) / (.55 * this.height), m = Math.floor(1 + m * m)) : m = 0 === this._f ? 200 : 10;
        return this.jg[this._f] = V < this.width / 2 ? -m : m, I[this._f] + 50 > pS.lb || (I[this._f] = pS.lb, Uj.zf(0, 1 + this._f) && sj.kg(0, this._f)), !0
    }, this._ = function() {
        if (this.isOpen) {
            var I = this.ag * this.width,
                m = this.dg * I,
                C = this.bg * this.width,
                S = this.eg * C,
                l = this.cg * this.width,
                a = Math.floor(.25 * this.height);
            wC.setTransform(1, 0, 0, 1, (IS - this.width) / 2, (mS - this.height) / 2), wC.fillStyle = 0 === this._f ? "rgba(0,60,60,0.85)" : "rgba(60,0,0,0.85)", wC.fillRect(0, 0, this.width, a), wC.fillStyle = Vm, wC.fillRect(0, a, this.width, this.height - a), wC.fillStyle = tm, wC.font = V, wC.textBaseline = pm, wC.textAlign = Gm, wC.fillText(j[this._f], Math.floor(this.width / 2), Math.floor(.135 * this.height)), wC.font = zm + Math.floor(.025 * this.height) + km, wC.fillText(j[this._f + 2], Math.floor(this.width / 2), Math.floor(.2125 * this.height)), wC.beginPath(), wC.moveTo(this.width / 4, 0), wC.lineTo(this.width / 2 - I, 0), wC.lineTo(this.width / 2, -m), wC.lineTo(this.width / 2 + I, 0), wC.lineTo(this.width - C, 0), wC.lineTo(this.width + S, -S), wC.lineTo(this.width, C), wC.lineTo(this.width, this.height / 2 - I), wC.lineTo(this.width + m, this.height / 2), wC.lineTo(this.width, this.height / 2 + I), wC.lineTo(this.width, this.height - C), wC.lineTo(this.width + S, this.height + S), wC.lineTo(this.width - C, this.height), wC.lineTo(this.width / 2 + I, this.height), wC.lineTo(this.width / 2, this.height + m), wC.lineTo(this.width / 2 - I, this.height), wC.lineTo(C, this.height), wC.lineTo(-S, this.height + S), wC.lineTo(0, this.height - C), wC.lineTo(0, this.height / 2 + I), wC.lineTo(-m, this.height / 2), wC.lineTo(0, this.height / 2 - I), wC.lineTo(0, C), wC.lineTo(-S, -S), wC.lineTo(C, 0), wC.lineTo(this.width / 4, 0), wC.lineTo(this.width / 4, l), wC.lineTo(l, l), wC.lineTo(l, this.height - l), wC.lineTo(this.width - l, this.height - l), wC.lineTo(this.width - l, l), wC.lineTo(this.width / 4, l), wC.fill(), this.$f[this._f] && this.qg(a), this.rg(a), wC.setTransform(1, 0, 0, 1, 0, 0)
        }
    }, this.rg = function(V) {
        var j = Bl(2, Math.floor(.06 * this.width));
        j -= j % 2;
        var I = Bl(2, Math.floor(.01 * this.width));
        I -= I % 2, V = Math.floor(.82 * V), wC.fillRect(j, V, j, I), wC.fillRect(this.width - j - j, V, j, I), wC.fillRect(Math.floor(this.width - j - j + (j - I) / 2), Math.floor(V - (j - I) / 2), I, j)
    }, this.qg = function(V) {
        wC.font = this.$f[this._f][4];
        for (var j, I = this.$f[this._f][1] - 1; 0 <= I; I--) wC.textAlign = _m, j = Math.floor(this.ig * this.height + V + I * ((1 - 2 * this.ig) * this.height - V) / 9), wC.fillText(this.$f[this._f][0][I].value.toFixed(this.$f[this._f][3]), Math.floor(this.hg * this.width), j), wC.fillText(I + 1 + this.$f[this._f][6] + ".", Math.floor(this.fg * this.width), j), wC.textAlign = Qm, wC.fillText(this.$f[this._f][0][I].name, Math.floor(this.gg * this.width), j)
    }
}

function vC() {
    var V, j, I, m, C, S, l, a, K, e, L, B, D;
    this.Cc = !1, this.Kb = function(P, W) {
        if (13 <= eS) W ? B = P : B === P && KS.h(200, P);
        else if (W) {
            (pI.buttons[1].Re.Qe || pI.buttons[2].Re.Qe) && pI.sg(), Kj.hide(), B = P, K = Math.floor((LS ? xC > yC ? .6 : .45 : .4) * VS), I = K / ej.Y(17).width, C = Math.floor(I * ej.Y(17).height), S = Math.floor(.4 * C), l = Math.floor(.6 * C), a = Math.floor(2.5 * l), m = C + S + 3 * l;
            var v = zm + Math.floor(S / CS) + km;
            e = Math.floor(CS * TV.measureText(B, v)), L = (e > K ? e : K) + 2 * a, V = Math.floor((IS - L) / 2), j = Math.floor((mS - m) / 2), (D = document.createElement("a")).appendChild(document.createTextNode(B)), D.title = B, D.target = "blank", D.href = B, D.style.font = v, D.style.textAlign = "center", D.style.color = tm, D.style.position = "absolute", D.style.padding = "0px", D.style.margin = "0px", D.style.top = Math.floor((j + 2 * l + C) / CS) + "px", D.style.left = Math.floor((V + (L - e) / 2) / CS) + "px", document.body.appendChild(D), this.Cc = !0, pS.request = !0
        }
    }, this.Qe = function() {
        return !!this.Cc && (document.body.removeChild(D), this.Cc = !1, !0)
    }, this.Ld = function(I, C) {
        return !!this.Cc && ((I < V || C < j || I > V + L || C > j + m) && (pS.request = !0, this.Cc = !1, document.body.removeChild(D), 0 === mj.getState() && Sj.toggle(0, !0)), !0)
    }, this.Ib = function() {
        this.Cc && (wC.imageSmoothingEnabled = !0, wC.setTransform(1, 0, 0, 1, V, j), wC.fillStyle = yI, wC.fillRect(0, 0, L, m), wC.lineWidth = nI, wC.strokeStyle = tm, wC.strokeRect(0, 0, L, m), wC.setTransform(I, 0, 0, I, V + (L - K) / 2, j + l), wC.drawImage(ej.Y(17), 0, 0), wC.setTransform(1, 0, 0, 1, 0, 0))
    }
}

function tC() {
    var V = 0,
        j = [0, 0, 0, 0, 0],
        I = [0, 0, 0, 0, 0],
        m = [1, 1, 1, 1, 1],
        C = [!0, !0, !0, !0, !0];
    this.tg = [!0, !0, !0, !0, !0];
    var S, l = null;
    this.to = function(V, j) {
        l = V, C = j, S = ["https://play.google.com/store/apps/details?id=territorial.io", "https://apps.apple.com/app/id1581110913", "https://www.youtube.com/watch?v=toZTQ8aRdFc", "https://discord.gg/pthqvpTXmh", "https://www.instagram.com/davidtschacher/"], this.Kb()
    }, this.Kb = function() {
        if (ej.X()) {
            var S = Math.floor((LS ? .261 : .195) * jS),
                a = Math.floor(.9 * S),
                K = Math.floor(.17 * a);
            if (V = LS ? 2 * WI : WI, m[0] = S / l[0].width, m[1] = a / l[1].width, m[2] = K / l[2].height, m[3] = K / l[3].height, m[4] = K / l[4].height, m[3] *= 1.07, j[0] = V, j[1] = V, j[2] = V, j[3] = V, j[4] = Math.floor(2 * V + m[3] * l[3].width), I[0] = V, I[1] = I[0] + V + m[0] * l[0].height, I[2] = I[1] + V + m[1] * l[1].height, I[3] = I[2] + V + m[2] * l[2].height, I[4] = I[3], !C[0])
                for (S = 0; 5 > S; S++) I[S] -= m[0] * l[0].height + V;
            if (!C[1])
                for (S = 2; 5 > S; S++) I[S] -= m[1] * l[1].height + V
        }
    }, this.Cc = function() {
        return !(7 === mj.getState() && LS)
    }, this.Ld = function(V, a, K) {
        if (!l || !this.Cc()) return !1;
        var e;
        for (e = C.length - 1; 0 <= e; e--)
            if (C[e] && this.tg[e] && V > j[e] && a > I[e] && V < j[e] + m[e] * l[e].width && a < I[e] + m[e] * l[e].height) return XS.Kb(S[e], K), !0;
        return !1
    }, this.Ib = function() {
        if (l && this.Cc()) {
            var V;
            for (wC.imageSmoothingEnabled = !0, V = 0; 5 > V; V++) C[V] && this.tg[V] && (wC.setTransform(m[V], 0, 0, m[V], j[V], I[V]), wC.drawImage(l[V], 0, 0));
            wC.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
}

function nC() {
    function V(V) {
        var C = jj.ug[V],
            S = C.if,
            l = C.bd,
            a = C.width,
            K = C.height;
        wC.fillStyle = C.color, wC.fillRect(S, l, a, K), V === j && (wC.fillStyle = m, wC.fillRect(S, l, a, K)), wC.lineWidth = 3, wC.strokeStyle = I, wC.strokeRect(S, l, a, K), V = C.if, S = C.bd, l = C.width, a = C.height, wC.textAlign = Gm, wC.textBaseline = pm, wC.font = C.font, wC.fillStyle = I, wC.fillText(C.name, Math.floor(V + l / 2), Math.floor(S + a / 2 + .1 * C.vg))
    }
    var j, I, m;
    this.wg = this.xg = this.height = this.width = 0, this.init = function() {
        j = -1, I = tm, m = "rgba(255,255,255,0.16)", this.ug = Array(8), this.height = Math.floor((LS ? .123 : .093) * jS), this.width = Math.floor((LS ? 3.96 : 4.2) * this.height), this.wg = Math.floor(.025 * this.width);
        var V = Math.floor(.26 * this.height),
            C = zm + V + km;
        this.ug[0] = {
            if: 0,
            bd: 0,
            width: Math.floor(.6 * this.width - this.wg / 2),
            height: this.height,
            name: "Multiplayer",
            font: C,
            color: this.ke ? "rgba(70,70,70,0.8)" : "rgba(22,88,22,0.8)",
            vg: V
        }, V = Math.floor(.18 * this.height), C = zm + V + km, this.ug[1] = {
            if: 0,
            bd: 0,
            width: this.width - this.ug[0].width - this.wg,
            height: this.height,
            name: "Singleplayer",
            font: C,
            color: "rgba(22,88,88,0.8)",
            vg: V
        }, this.ug[2] = {
            if: 0,
            bd: 0,
            width: this.width,
            height: Math.floor(.3 * this.height),
            name: "",
            font: this.ug[1].font,
            color: "rgba(100,0,0,0.8)",
            vg: this.ug[1].vg
        }, this.ug[3] = {
            if: 0,
            bd: 0,
            width: this.width,
            height: this.height,
            name: "Back",
            font: this.ug[0].font,
            color: "rgba(0,0,0,0.8)",
            vg: this.ug[0].vg
        }, this.ug[4] = {
            if: 0,
            bd: 0,
            width: this.width,
            height: Math.floor(.3 * this.height),
            name: "The game was updated!",
            font: this.ug[1].font,
            color: "rgba(100,0,0,0.8)",
            vg: this.ug[1].vg
        }, this.ug[5] = {
            if: 0,
            bd: 0,
            width: this.ug[0].width,
            height: Math.floor(.8 * this.height),
            name: "Reload",
            font: this.ug[0].font,
            color: "rgba(0,100,0,0.8)",
            vg: this.ug[0].vg
        }, this.ug[6] = {
            if: 0,
            bd: 0,
            width: this.ug[1].width,
            height: this.ug[5].height,
            name: "Back",
            font: this.ug[0].font,
            color: "rgba(0,0,0,0.8)",
            vg: this.ug[0].vg
        }, this.ug[7] = {
            if: 0,
            bd: 0,
            width: this.width,
            height: Math.floor(this.height / 4),
            name: "Create / Join custom multiplayer lobby",
            font: this.ug[1].font,
            color: "rgba(80,50,100,0.8)",
            vg: this.ug[0].vg
        }, this.yg()
    }, this.yg = function() {
        this.xg = Math.floor(.54 * mS), this.ug[0].if = this.ug[7].if = Math.floor(.5 * IS - .5 * this.width), this.ug[1].if = this.ug[0].if+this.ug[0].width + this.wg, this.ug[2].if = this.ug[3].if = this.ug[0].if, this.ug[4].if = this.ug[5].if = this.ug[0].if, this.ug[6].if = this.ug[1].if, this.ug[0].bd = Math.floor(.54 * mS), this.ug[1].bd = this.ug[0].bd, this.ug[2].bd = Math.floor((mS - this.ug[2].height - this.ug[3].height - this.wg) / 2), this.ug[3].bd = this.ug[2].bd + this.ug[2].height + this.wg, this.ug[4].bd = Math.floor((mS - this.ug[4].height - this.ug[5].height - this.wg) / 2), this.ug[5].bd = this.ug[6].bd = this.ug[4].bd + this.ug[4].height + this.wg, this.ug[7].bd = this.ug[0].bd + this.ug[0].height + this.wg
    }, this.zg = function() {
        V(0), V(1), V(7)
    }, this.Ag = function() {
        V(2), V(3)
    }, this.Bg = function() {
        V(4), V(5), V(6)
    }, this.fd = function(V, I, m) {
        var C = -1;
        return 0 === mj.getState() ? C = -1 === (C = this.Cg(V, I, 0, 2)) ? this.Cg(V, I, 7, 1) : C : 3 === mj.getState() ? C = this.Cg(V, I, 3, 1) : 5 === mj.getState() && (C = this.Cg(V, I, 5, 2)), j !== C && (j = C, m && (pS.request = !0)), -1 !== C && (RV.Ve(), !0)
    }, this.Cg = function(V, j, I, m) {
        for (var C = I; C < I + m; C++)
            if (V >= this.ug[C].if && j >= this.ug[C].bd && V <= this.ug[C].if+this.ug[C].width && j <= this.ug[C].bd + this.ug[C].height) return C;
        return -1
    }
}

function FC() {
    function V(V) {
        return 0 > V ? 0 : 255 < V ? 255 : Math.floor(V)
    }
    this.ce = this.ld = 0, this.Qe = !1, this.Dg = this.Eg = this.Fg = this.xe = this.Gg = this.Hg = 0, this.fe = null, this.Kb = function() {
        xC < 2 * yC ? this.ld = Math.floor((LS ? .94 : .4) * xC) : (this.ce = Math.floor((LS ? .88 : .4) * yC), this.ld = Math.floor(2 * this.ce)), this.ce = this.ld / 2, this.Gg = this.ce / 16, this.Qe = !0, this.Hg = 0, this.Fg = (this.ce - 3 * this.Gg) / 2, this.Eg = this.ld - 3 * this.Gg - this.Fg, this.Dg = (this.ce - 4 * this.Gg) / 3
    }, this.Xe = function() {
        this.fe = [
            [0, 0, 0],
            [0, 0, 0]
        ];
        var j = (lS ? aS.fe : 12 <= eS ? KS.g(21) : 5 <= eS ? KS.g(2) : Bj.i(8)).split("");
        if (6 !== j.length)
            for (j = 2; 0 <= j; j--) this.fe[0][j] = V(256 * Math.random());
        else
            for (var I = 2; 0 <= I; I--) this.fe[0][I] = V(4 * (10 * parseInt(j[2 * I]) + parseInt(j[2 * I + 1])));
        this.Ig()
    }, this.Jg = function() {
        return [Kl(this.fe[0][0], 4), Kl(this.fe[0][1], 4), Kl(this.fe[0][2], 4)]
    }, this.Ld = function(j, I) {
        return this.Hg = 0, I -= (mS - this.ce) / 2, 0 > (j -= (IS - this.ld) / 2) || 0 > I || j >= this.ld - 1 || I >= this.ce - 1 ? (this.Qe = !1, 0 === mj.getState() && Sj.toggle(0, !0), pS.request = !0, !1) : j < this.Gg || I < this.Gg || j >= this.ld - this.Gg || I >= this.ce - this.Gg || (j < this.Gg + this.Fg ? (I < this.Gg + this.Fg && 0 !== this.xe && (this.xe = 0, pS.request = !0), !0) : j < 2 * this.Gg + this.Fg || (j -= 2 * this.Gg + this.Fg, I < this.Gg + this.Dg ? (this.Hg = 1, this.fe[this.xe][0] = V(256 * j / this.Eg), pS.request = !0) : I < 2 * this.Gg + this.Dg || (I < 2 * this.Gg + 2 * this.Dg ? (this.Hg = 2, this.fe[this.xe][1] = V(256 * j / this.Eg), pS.request = !0) : (I >= 3 * this.Gg + 2 * this.Dg && (this.Hg = 3, this.fe[this.xe][2] = V(256 * j / this.Eg), pS.request = !0), !0))))
    }, this.Ig = function() {
        for (var j = 2; 0 <= j; j--) this.fe[0][j] = V(this.fe[0][j])
    }, this.Kg = function() {
        for (var V, j = "", I = 0; 3 > I; I++) 10 > (V = Kl(this.fe[0][I], 4)) && (j += "0"), j += V.toString();
        ! function(V) {
            if (lS) window.webkit.messageHandlers.iosCommandA.postMessage("colors " + V);
            else {
                if (12 <= eS) KS.h(21, V);
                else if (5 <= eS) return void KS.h(2, V);
                Bj.y(8, V), Bj.z()
            }
        }(j)
    }, this.$c = function(j) {
        0 !== this.Hg && (j -= 2 * this.Gg + this.Fg + (IS - this.ld) / 2, this.fe[this.xe][this.Hg - 1] = V(256 * j / this.Eg), pS.request = !0)
    }, this.Lg = function() {
        0 < this.Hg && (this.Hg = 0, this.Ig(), this.Kg(), pS.request = !0)
    }, this.Ib = function() {
        wC.setTransform(1, 0, 0, 1, (IS - this.ld) / 2, (mS - this.ce) / 2), wC.fillStyle = yI, wC.fillRect(0, 0, this.ld, this.ce), wC.lineWidth = nI, wC.strokeStyle = tm, wC.strokeRect(-1, -1, this.ld + 2, this.ce + 2), wC.font = zm + Math.floor(.8 * this.Fg) + km, wC.textBaseline = pm, wC.textAlign = Gm, this.Mg(0), wC.lineWidth = nI, this.Ng(0), this.Ng(1), this.Ng(2), wC.setTransform(1, 0, 0, 1, 0, 0)
    }, this.Mg = function(V) {
        wC.fillStyle = "rgb(" + this.fe[V][0] + "," + this.fe[V][1] + "," + this.fe[V][2] + ")", wC.fillRect(this.Gg, this.Gg, this.Fg, 2 * this.Fg + this.Gg), wC.lineWidth = 2 + nI, wC.strokeStyle = tm, wC.strokeRect(this.Gg, this.Gg, this.Fg, 2 * this.Fg + this.Gg)
    }, this.Ng = function(V) {
        wC.fillStyle = "rgb(" + (0 === V ? 200 : 2 === V ? 50 : 0) + "," + (1 === V ? 200 : 2 === V ? 50 : 0) + "," + (2 === V ? 255 : 0) + ")", wC.fillRect(2 * this.Gg + this.Fg, this.Gg + V * (this.Gg + this.Dg), Math.floor(this.fe[this.xe][V] * this.Eg / 255), this.Dg), wC.strokeStyle = tm, wC.strokeRect(2 * this.Gg + this.Fg, this.Gg + V * (this.Gg + this.Dg), this.Eg, this.Dg)
    }
}

function gC() {
    function V() {
        return 0 === t ? 0 : 1 + (t - 1 + F) % (Uj.Og - 1)
    }

    function j() {
        t++, v = pS.lb, Uj.zf(V(), 4) && (n = !0, sj.Pg(V()), Aj.Qg())
    }

    function I() {
        Aj.isActive && (Cj.Rg(3249), Aj.Sg()), 0 === t ? Cj.Rg(3249) : (t === Uj.Og - 1 && (t = -1), j())
    }

    function m(V, j, I) {
        var m = Math.floor((IS - a) / 2) + L,
            C = m + Math.floor(I * (a - 2 * L));
        wC.lineWidth = j, wC.beginPath(), wC.moveTo(m, V), wC.lineTo(C, V), wC.lineTo(Math.floor(m - L + I * a), V + l), wC.lineTo(m - L, V + l), wC.closePath()
    }
    var C, S, l, a, K, e, L, B, D, P, W, v, t, n, F = 0;
    this.init = function() {
        mj.k(6), C = 0, S = 1, B = "rgba(0,220,120,0.4)", D = "rgba(0,0,0,0.8)", this.resize(), pS.request = !0, t = 0, n = !1, j()
    }, this.resize = function() {
        a = Math.floor((LS ? .5 : .25) * jS), K = a + 12, l = Math.floor(.125 * a), L = 3 * l, e = Math.floor(.225 * a), W = Math.floor(.3 * l), P = Xm + W + km
    }, this.Tg = function(V) {
        F = V
    }, this.disconnect = function(j) {
        j === V() && (n = !1, I())
    }, this.Ug = function(V) {
        6 !== mj.getState() || n || (v = pS.lb, n = !0, sj.Pg(V), Aj.Qg())
    }, this.click = function(V, j) {
        var I = Math.floor((IS - K) / 2),
            m = Math.floor(.5 * (mS - tI - l - e)) + l + tI;
        return V > I && V < I + K && j > m && j < m + e && (this.Hd(), jj.fd(V, j, !1), !0)
    }, this.Hd = function() {
        Uj.Vg(3260), Kj.init(), pS.request = !0
    }, this.Ba = function() {
        6 === mj.getState() && (n ? pS.lb > v + 2e4 && Cj.Rg(3250) : pS.lb > v + 2e4 && I(), 100 < (C += .07 * S * (16 > C ? 5 + C : 84 < C ? 105 - C : 17)) ? (C = 100, S = -1) : 0 > C && (C = 0, S = 1), B = "rgba(0," + Math.floor(190 - 1.9 * C) + "," + Math.floor(120 - 1.2 * C) + "," + (.4 + .004 * C) + ")", D = "rgba(0," + Math.floor(1.9 * C) + "," + Math.floor(1.2 * C) + "," + (.8 - .004 * C) + ")", pS.request = !0)
    }, this._ = function() {
        var V = Math.floor((IS - K) / 2),
            j = Math.floor(.5 * (mS - tI - l - e)),
            I = C / 100;
        wC.fillStyle = D, m(j, 3, 1), wC.fill(), wC.fillStyle = B, m(j, 3, I), wC.fill(), wC.strokeStyle = tm, m(j, 3, 1), wC.stroke(), wC.textAlign = Gm, wC.textBaseline = pm, wC.font = P, wC.fillStyle = tm, wC.fillText("Loading", Math.floor(.5 * IS), Math.floor(j + .58 * l)), j = j + l + tI, I = K;
        var S = e;
        wC.fillStyle = uI, wC.fillRect(V, j, I, S), wC.lineWidth = 3, wC.strokeStyle = tm, wC.strokeRect(V, j, I, S);
        var a = Math.floor(.3 * S);
        wC.textAlign = Gm, wC.textBaseline = pm, wC.font = Xm + a + km, wC.fillStyle = tm, wC.fillText("Back", Math.floor(V + I / 2), Math.floor(j + S / 2 + .1 * a))
    }
}

function AC() {
    var V;
    this.init = function() {
        jj.init(), Sj.init(), V = 0, AS.Kb(), Kj.init()
    }, this.k = function(j) {
        V = j
    }, this.getState = function() {
        return V
    }, this.Wg = function() {
        this.k(8), rj.Xg(), pI.sg(), _S.isOpen = !1, XS.Ld(-1e3, -1e3)
    }, this.sg = function(j) {
        if (!US) return !1;
        if (!(400 > pS.lb)) {
            if ("Enter" === j.key || "Escape" === j.key) {
                if (this.Yg()) return 0 === V && Sj.toggle(0, !0), !0;
                if ("Enter" === j.key) {
                    if (0 === V) return Kj.submit(), !0;
                    if (7 === V) return !0
                }
            }
            return !1
        }
    }, this.Yg = function() {
        return !(!XS.Qe() && !pI.sg()) || !!_S.isOpen && (_S.isOpen = !1, !0)
    }, this.oa = function() {
        pS.request = !0, 8 === V ? QV ? QV = !QV : gS.Cc ? gS.ed() : hV.toggle() : 7 === V ? rj.Zg() : 6 === V ? Ij.Hd() : 3 === V ? Cj.$g(0, 0) : 2 === V ? aj.$g() : 0 === V && (this.Yg() || C(11))
    }, this.click = function(j, I) {
        if (!AS.Ld(j, I) && US && !(XS.Ld(j, I) || 6 === V && Ij.click(j, I) || 2 === V && aj.Ld(j, I) || !Ca("removeMenuSettingButton") && Yj.click(j, I) || _S.click(j, I) || fS.Ld(j, I, !0) || pI.click(j, I, !0))) {
            if (RV.click(j, I), 0 === V) Kj.click(j, I);
            else if (3 === V) Cj.Ld(j, I);
            else if (5 === V) lj.click(j, I);
            else if (7 === V && rj.click(j, I)) return;
            kS.click(j, I)
        }
    }, this.fd = function(j, I) {
        if (Yj.$c(j, I), !RV.yf) {
            if (pI.fd(j, I)) return void RV.Ve();
            if (AS.$c(j, I)) return void RV.Ve();
            if (2 === V && aj.$c(j, I)) return void RV.Ve();
            if (0 <= pI._g(j, I)) return void RV.Ve();
            if (jj.fd(j, I, !0)) return
        }
        RV.fd(j, I)
    }, this.Wc = function(V, j) {
        RV.We(), pI.Xe() || fS.Ld(V, j, !1) || pI.click(V, j, !1)
    }, this.af = function(j, I, m) {
        pI.buttons[1].Re.Qe || 0 === V && RV.scroll(j, m)
    }, this.ah = function() {
        jj.yg(), pI.resize(), 0 === V ? (Sj.bh(0), RV.Cf()) : 7 === V && rj.resize(), pS.request = !0
    }, this.Ib = function() {
        8 !== V && 10 !== V && (wC.imageSmoothingEnabled = !0, this.dh(), RV._(), HV._(), fS.Ib(), kS._(), Ca("removeMenuSettingButton") || pI._(), Ca("removeMenuSettingButton") || Yj._(), Pj._(), 0 === V ? Kj._() : 2 === V ? aj.Ib() : 3 === V ? Cj.Ib() : 5 === V ? lj._() : 6 === V ? Ij._() : 7 === V && rj._(), pI.Hb(), AS.Ib(), _S._(), XS.Ib(), pS.Jb())
    }, this.dh = function() {
        if (US) {
            var V = xC / JS,
                j = yC / sS;
            V = V > j ? V : j, wC.setTransform(V, 0, 0, V, Math.floor((xC - V * JS) / 2), Math.floor((yC - V * sS) / 2)), wC.drawImage(OS, 0, 0), wC.setTransform(1, 0, 0, 1, 0, 0), wC.fillStyle = uI
        } else wC.fillStyle = wI;
        wC.fillRect(0, 0, xC, yC)
    }
}

function pC() {
    this.ce = this.ld = 0, this.Qe = !1, this.le = 10, this.eh = .12, this.fh = this.gh = this.Hg = !1, this.Kb = function() {
        this.ld = xC < 1 * yC ? Math.floor((LS ? .94 : .6) * xC) : Math.floor((LS ? .94 : .6) * yC), this.ld -= this.ld % this.le, this.ce = 1 * this.ld, this.Qe = !0, this.Hg = !1
    }, this.Ld = function(V, j, I) {
        var m = (mS - this.ce) / 2;
        return j -= m, 0 > (V -= (IS - this.ld) / 2) || 0 > j || V >= this.ld - 1 || j >= this.ce - 1 ? (0 === I && (this.Qe = !1, 0 === mj.getState() && Sj.toggle(0, !0), pS.request = !0), !1) : (V = 0 > (V = Kl(V, m = Math.floor(this.ld / this.le)) + this.le * Kl(j, m)) ? 0 : V >= nS.mt ? nS.mt - 1 : V, (0 === I || 1 === I && !nS.ye[V] || 2 === I && nS.ye[V]) && (this.gh = !nS.ye[V], this.fh = this.Hg = !0, nS.ye[V] = !nS.ye[V], nS.Ge(), pS.request = !0), !0)
    }, this.$c = function(V, j) {
        this.Hg && this.Ld(V, j, this.gh ? 1 : 2)
    }, this.Lg = function() {
        this.fh && (function() {
            for (var V = "", j = 0; j < nS.oe; j += 2) V += nS.ye[j] || nS.ye[j + 1] ? nS.ye[j] && !nS.ye[j + 1] ? "1" : !nS.ye[j] && nS.ye[j + 1] ? "2" : "3" : "0";
            lS ? window.webkit.messageHandlers.iosCommandA.postMessage("emojis " + V) : 5 <= eS ? KS.h(1, V) : (Bj.y(7, V), Bj.z())
        }(), this.fh = !1), this.Hg = this.fh = !1
    }, this.Ib = function() {
        wC.imageSmoothingEnabled = !0;
        var V = (IS - this.ld) / 2,
            j = (mS - this.ce) / 2;
        wC.setTransform(1, 0, 0, 1, V, j), wC.fillStyle = yI, wC.fillRect(0, 0, this.ld, this.ce), wC.lineWidth = nI, wC.strokeStyle = tm, wC.strokeRect(-1, -1, this.ld + 2, this.ce + 2);
        for (var I = Math.floor(this.ld / this.le), m = (I - 2 * this.eh * I) / nS.ld, C = nS.mt - 1; 0 <= C; C--) wC.setTransform(1, 0, 0, 1, Math.floor(V + C % this.le * I), Math.floor(j + Kl(C, this.le) * I)), nS.ye[C] && (wC.fillStyle = am, wC.fillRect(0, 0, I, I)), wC.setTransform(m, 0, 0, m, Math.floor(V + C % this.le * I + this.eh * I), Math.floor(j + Kl(C, this.le) * I + this.eh * I)), wC.drawImage(nS.md[C], 0, 0);
        wC.setTransform(1, 0, 0, 1, 0, 0), wC.imageSmoothingEnabled = !1
    }
}

function GC() {
    function V() {
        var V = mj.getState();
        0 === V ? Kj.hide() : 6 === V ? Uj.Vg(I) : 7 === V ? (rj.Xg(), Uj.close(Uj.hh, 3240)) : 8 === V && (aI(), Kj.hide()), mj.k(3), jj.yg(), jj.ug[2].name = j(I), pS.request = !0
    }

    function j(V) {
        var j;
        for (j = m.length - 1; 0 <= j; j--)
            if (V === m[j].code) return m[j].od;
        return C + V
    }
    var I, m, C;
    this.ih = function() {
        (m = []).push({
            od: "No Server Response",
            code: 1006
        }), m.push({
            od: "Account successfully saved!",
            code: 3231
        }), m.push({
            od: "Account Error",
            code: 3232
        }), m.push({
            od: "No Servers Found",
            code: 3249
        }), m.push({
            od: "Thanks for the vote.",
            code: 3252
        }), m.push({
            od: "Please accept Cookies",
            code: 3265
        }), m.push({
            od: "Invalid Password Format",
            code: 3266
        }), m.push({
            od: "Lobby Timeout",
            code: 4207
        }), m.push({
            od: "Invalid Username",
            code: 4214
        }), m.push({
            od: "User already exists.",
            code: 4224
        }), m.push({
            od: "No Client Response Error",
            code: 4229
        }), C = "Error "
    }, this.Kb = function(m, C) {
        I = C;
        var S = mj.getState();
        if (6 === S) {
            if (4211 === C) return void lj.init(0, 0);
            if (4214 !== C) return void Ij.disconnect(m)
        } else {
            if (7 !== S) return void(8 === S && (m !== Uj.uc || nV || $V.Od(j(C))));
            if (m !== Uj.hh) return
        }
        V()
    }, this.Rg = function(m) {
        I = m, 8 === mj.getState() ? $V.Od(j(m)) : V()
    }, this.Ad = function() {
        jj.ug[2].name = j(I)
    }, this.Ld = function(V, j) {
        3 === jj.Cg(V, j, 3, 1) && this.$g(V, j)
    }, this.$g = function(V, j) {
        Kj.init(), jj.fd(V, j, !1), pS.request = !0
    }, this.Ib = function() {
        jj.Ag()
    }
}

function QC() {
    var V, j, I;
    this.init = function() {
        j = "rgba(0,0,0,0.6)", I = Bm, void 0 !== V && this.toggle(0, !1), V = [],
            function() {
                V.push({
                    input: document.createElement("INPUT"),
                    jh: !1,
                    color: j
                });
                var I = V.length - 1;
                V[I].input.setAttribute("type", "text"), V[I].input.value = "", V[I].input.style.textAlign = 0 === I ? "center" : "left", V[I].input.style.backgroundColor = j, V[I].input.style.border = "3px solid " + tm, V[I].input.style.color = tm, V[I].input.style.outline = "none", V[I].input.style.position = "absolute", V[I].input.readOnly = 3 === I, V[I].input.addEventListener("input", (function() {
                    0 === I && Kj.kh()
                }))
            }(), this.resize()
    }, this.resize = function() {
        var j = Math.floor(.22 * jj.height / CS);
        V[0].input.style.font = zm + j + km, V[0].input.style.padding = Math.floor(.3 * j) + "px 5px", V[0].input.style.width = Math.floor(jj.width / CS - 13) + "px"
    }, this.lh = function(j) {
        return V[j]
    }, this.bh = function(j) {
        V[j].input.style.left = Math.floor((IS / CS - (jj.width / CS - 3) - 7) / 2) + "px", 0 === j && (V[j].input.style.bottom = Math.floor((mS - jj.xg + jj.wg) / CS) + "px")
    }, this.toggle = function(j, I) {
        V[j].jh !== I && ((V[j].jh = I) ? document.body.insertBefore(V[j].input, document.body.childNodes[2]) : document.body.removeChild(V[j].input))
    }, this.mh = function(m, C) {
        C && V[m].color === j || !C && V[m].color === I || (V[m].color = C ? j : I, V[m].input.style.backgroundColor = V[m].color)
    }
}

function _C() {
    var V, j, I, m;
    this.nh = this.oh = 0, this.init = function(C) {
        if (7 === mj.getState()) {
            V = C, j = 0, I = pS.lb + 4500, m = Mj.ph(V) ? 2 : 0, mj.k(10), wC.imageSmoothingEnabled = !0, mj.dh(), C = ej.xc("loading");
            var S = (LS ? .396 : .25) * jS / C.width;
            wC.setTransform(S, 0, 0, S, Math.floor((xC - S * C.width) / 2), Math.floor((yC - S * C.height) / 2)), wC.drawImage(C, 0, 0), wC.setTransform(1, 0, 0, 1, 0, 0)
        }
    }, this.Ea = function() {
        0 < m && pS.lb > I && (m--, I += 4500, 0 === pS.qh && 0 === pS.rh && (0 === m && Uj.uc < Uj.sh && (Uj.uc += Uj.th), Uj.zf(Uj.uc, 5)))
    }, this.uh = function() {
        10 === mj.getState() && (2 <= ++j && (Mj.wh(V), V = null))
    }
}

function zC() {
    function V(V, j) {
        var I = L[V].getContext("2d", {
            alpha: !0
        });
        I.clearRect(0, 0, 48, 48);
        var m = 48 / j.width,
            C = 48 / j.height;
        m = C < m ? C : m, I.setTransform(m, 0, 0, m, Math.floor((48 - m * j.width) / 2), Math.floor((48 - m * j.height) / 2)), I.drawImage(j, 0, 0), I.setTransform(1, 0, 0, 1, 0, 0)
    }

    function j(V, j, I, m) {
        m.beginPath(), m.moveTo(V, V), m.lineTo(V + Math.cos(I) * j, V + Math.cos(I + 1.5 * Math.PI) * j), m.stroke()
    }

    function I() {
        if (7 === mj.getState()) {
            for (var V = -1, j = B.length - 1; 0 <= j; j--)
                if (null === B[j].canvas) {
                    V = j;
                    break
                } if (-1 !== V) {
                if (null !== (j = m(B[V].xh, B[V].seed))) B[V].canvas = j;
                else {
                    j = JS;
                    var I = sS,
                        C = OS,
                        S = bS,
                        l = rS,
                        a = hS,
                        K = $S,
                        e = HS;
                    yS(B[V].xh, B[V].seed), TS.yh();
                    var L = document.createElement("canvas");
                    L.width = 128, L.height = 128;
                    var D = L.getContext("2d", {
                            alpha: !1
                        }),
                        P = 128 / JS,
                        W = 128 / sS;
                    W > P && (P = W), D.imageSmoothingEnabled = !0, D.setTransform(P, 0, 0, P, (128 - P * JS) / 2, (128 - P * sS) / 2), D.drawImage(OS, 0, 0), JS = j, sS = I, OS = C, bS = S, rS = l, hS = a, $S = K, HS = e, B[V].canvas = L
                }
                pS.request = !0
            }
        }
    }

    function m(V, j) {
        for (var I = B.length - 1; 0 <= I; I--)
            if (null !== B[I].canvas && B[I].xh === V && B[I].seed === j) return B[I].canvas;
        return null
    }
    var C, S, l, a, K, e, L, B, D, P, W, v, t, n, F, g, A, p = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
        G = [0, 0, 0, 0];
    this.init = function() {
        var I;
        for (A = 0, P = -1, mj.k(7), B = [], this.resize(), I = (L = Array(11)).length; 0 <= I; I--) L[I] = document.createElement("canvas"), L[I].width = 48, L[I].height = 48;
        for (I = 0; 7 > I; I++) {
            var m = I + 2,
                C = L[m - 2].getContext("2d", {
                    alpha: !0
                }),
                S = 1.5 * Math.PI;
            C.lineWidth = 2, C.strokeStyle = tm, C.clearRect(0, 0, 48, 48);
            for (var l = 0; l < m; l++) {
                var a = S + 2 * Math.PI / m,
                    K = S,
                    e = a,
                    D = C;
                D.fillStyle = GS.zh[l + 1], D.beginPath(), D.arc(24, 24, 23, K, e), D.lineTo(24, 24), D.fill(), 0 !== l && j(24, 23, S, C), S = a
            }
            j(24, 23, 1.5 * Math.PI, C), C.beginPath(), C.arc(24, 24, 23, 0, 2 * Math.PI), C.stroke()
        }
        V(7, ej.Y(4)), V(8, nS.md[27]), V(9, nS.md[46]), V(10, nS.md[36]), pS.request = !0
    }, this.Zg = function() {
        this.Xg(), Uj.Vg(3240), Kj.init(), pS.request = !0
    }, this.Xg = function() {
        B = [], L = []
    }, this.resize = function() {
        var V, j;
        for (l = [0, 0], D = [0, 0, 0, 0], LS ? (W = Math.floor(.8 * .4 * jS), v = Math.floor(.56 * W), D[0] = tI, xC < yC ? (D[1] = v + 2 * tI, D[2] = xC - 3 * D[0], D[3] = kS.$() - 3 * tI - v, n = Math.floor(.95 * v), F = Math.floor((xC - W - tI) / 2), g = Math.floor(tI + v / 2)) : (D[1] = tI, D[2] = xC - 3 * tI - W, D[3] = kS.$() - 2 * tI, n = Math.floor(.8 * W), D[3] - v < W && (n = Math.floor(.8 * (D[3] - v)), n = Bl(v, n)), F = Math.floor(xC - W / 2 - tI), g = Bl(g = Math.floor(tI + v + (D[3] - v) / 2), Math.floor(v + 2 * tI + n / 2)))) : (W = Math.floor(.2016 * jS), v = Math.floor(.56 * W), D[2] = Math.floor(.5 * xC), D[3] = Math.floor(.5 * yC), D[1] = Math.floor(.45 * (yC - D[3])), D[0] = Math.floor((xC - D[2]) / 2), n = Math.floor(.75 * v), F = Math.floor(xC / 2), g = Math.floor(D[1] + D[3] + (yC - D[3] - D[1]) / 2)), t = zm + Math.floor(.65 * v / 4) + km, V = j = 1; V * j < B.length;) D[2] / (V + 1) > D[3] / (j + 1) ? V++ : j++;
        var I = (D[2] - (V - 1) * tI) / V,
            m = (D[3] - (j - 1) * tI) / j;
        C = I < m ? I : m, S = Math.floor(C), e = zm + Math.floor(.5 * C / 5) + km, l[0] = V, l[1] = j, a = D[0] + Math.floor((D[2] - l[0] * C - (l[0] - 1) * tI) / 2), K = D[1] + Math.floor((D[3] - l[1] * C - (l[1] - 1) * tI) / 2)
    }, this.setData = function(V, j) {
        var I, C = B.length;
        for (G = V, I = 0; I < j.length; I++) {
            var S = m(j[I].xh, j[I].Ah);
            B.push({
                id: j[I].id,
                type: j[I].type,
                Bh: j[I].Bh,
                xh: j[I].xh,
                seed: j[I].Ah,
                Ch: j[I].Ch,
                Dh: j[I].Dh,
                Eh: j[I].Eh,
                canvas: S
            })
        }
        if (Aj.isActive) {
            if (-1 === P) {
                const V = Aj.Fh(B); - 1 !== V && (sj.Gh(V), P = V)
            }
            if (-1 !== P)
                for (I = C - 1; 0 <= I; I--) B[I].id === P && Aj.Hh(B[I].Dh.toString())
        }
        for (I = C - 1; 0 <= I; I--) B.shift();
        if (-1 !== P)
            for (S = P, P = -1, I = B.length - 1; 0 <= I; I--)
                if (B[I].id === S) {
                    P = S;
                    break
                }(B.length > A || B.length < A) && (A = B.length, this.resize()), this.Ih(), pS.request = !0
    }, this.Ih = function() {
        for (var V = B.length - 1; 0 <= V; V--) null === B[V].canvas && setTimeout(I, 0)
    }, this.click = function(V, j) {
        return 4 * ((V - F) * (V - F) + (j - g) * (j - g)) <= n * n ? (this.Zg(), jj.fd(V, j, !1), !0) : function(V, j) {
            var I, m;
            if (0 === B.length) return !1;
            var S = 0,
                e = K;
            for (m = 0; m < l[1]; m++) {
                var L = a;
                for (I = 0; I < l[0]; I++) {
                    if (V > L && V < L + C && j > e && j < e + C) return sj.Gh(B[S].id), P = B[S].id !== P ? B[S].id : -1, pS.request = !0;
                    if (++S >= B.length) return !1;
                    L += C + tI
                }
                e += C + tI
            }
            return !1
        }(V, j)
    }, this._ = function() {
        var V = 0,
            j = K;
        wC.imageSmoothingEnabled = !0, wC.lineWidth = 3;
        var I = Math.floor(.5 * n);
        wC.fillStyle = uI, wC.beginPath(), wC.arc(F, g, I, 0, 2 * Math.PI), wC.fill(), wC.strokeStyle = tm, wC.beginPath(), wC.arc(F, g, I, 0, 2 * Math.PI), wC.stroke(), I = ej.Y(0).height;
        var m = .6 * n / I;
        wC.setTransform(m, 0, 0, m, Math.floor(F - .56 * m * ej.Y(0).width), Math.floor(g - .5 * m * I)), wC.drawImage(ej.Y(0), 0, 0), wC.setTransform(1, 0, 0, 1, 0, 0), wC.fillStyle = uI, wC.fillRect(xC - W - tI, tI, W, v), 0 <= P ? (wC.fillStyle = am, wC.fillRect(xC - W - tI, tI, W, Math.floor(.25 * v))) : (wC.fillStyle = Am, wC.fillRect(xC - W - tI, tI + Math.floor(.25 * v), W, Math.floor(.25 * v))), wC.strokeStyle = tm, wC.strokeRect(xC - W - tI, tI, W, v), wC.fillStyle = tm, wC.font = t, wC.textBaseline = pm, I = Math.floor(.04 * W), m = Math.floor(.08 * v);
        for (var D = 3; 0 <= D; D--) {
            var A = Math.floor(tI + (D + 1) * (v + 2 * m) / 5 - m);
            wC.textAlign = Qm, wC.fillText(p[D], xC - W - tI + I, A), wC.textAlign = _m, wC.fillText(UV.jb(G[D]), xC - tI - I, A)
        }
        if (0 !== B.length)
            for (m = 0; m < l[1]; m++) {
                for (A = a, I = 0; I < l[0]; I++) {
                    D = V;
                    var Q = Math.floor(A),
                        _ = Math.floor(j);
                    if (null === B[D].canvas) wC.fillStyle = uI, wC.fillRect(Q, _, S, S);
                    else {
                        var z = S / 128;
                        wC.setTransform(z, 0, 0, z, Q, _), wC.drawImage(B[D].canvas, 0, 0), wC.setTransform(1, 0, 0, 1, 0, 0)
                    }
                    if (P === B[D].id) {
                        z = Q;
                        var f = _,
                            X = Math.floor(.2 * S),
                            k = Math.floor(.3 * X);
                        wC.fillStyle = em, wC.fillRect(z + S - X, f, X, X), wC.fillStyle = wI, wC.fillRect(z + S - X, f, 2, X), wC.fillRect(z + S - X, f + X - 2, X, 2), hV.gd(z + S - X + k, f + k, X - 2 * k), wC.setTransform(1, 0, 0, 1, 0, 0), wC.lineWidth = 3, wC.fillStyle = em
                    } else wC.fillStyle = RI;
                    if (f = Math.floor(C / 4), wC.fillRect(Q, Math.floor(_ + .8 * C), S, Math.floor(C / 5)), wC.fillRect(Q, _, f, f), wC.fillStyle = wI, wC.fillRect(Q, Math.floor(_ + .8 * C), S, 2), wC.fillRect(Q + f - 2, _, 2, f), wC.fillRect(Q, _ + f - 2, f, 2), wC.font = e, wC.textBaseline = pm, wC.textAlign = Qm, wC.fillStyle = "rgb(160,160,255)", wC.fillText(B[D].Ch.toString(), Math.floor(Q + .07 * C), Math.floor(_ + .9 * C)), 256 >= B[D].Eh && (wC.textAlign = Gm, wC.fillStyle = "rgb(0,255,0)", wC.fillText(B[D].Eh.toString(), Math.floor(Q + .5 * C), Math.floor(_ + .9 * C))), wC.textAlign = _m, wC.fillStyle = "rgb(255,120,120)", wC.fillText(B[D].Dh.toString(), Math.floor(Q + .93 * C), Math.floor(_ + .9 * C)), wC.strokeStyle = nm, wC.strokeRect(Q, _, S, S), z = (X = Math.floor(.16 * C)) / 48, wC.setTransform(z, 0, 0, z, Math.floor(Q + (f - X) / 2), Math.floor(_ + (f - X) / 2)), L.length > B[D].type && wC.drawImage(L[B[D].type], 0, 0), wC.setTransform(1, 0, 0, 1, 0, 0), B[D].Bh && (D = ej.Y(4), z = .5 * C / D.width, wC.setTransform(z, 0, 0, z, Math.floor(Q + (C - z * D.width) / 2), Math.floor(_ + (C - z * D.height) / 2)), wC.globalAlpha = .6, wC.drawImage(D, 0, 0), wC.globalAlpha = 1, wC.setTransform(1, 0, 0, 1, 0, 0)), ++V >= B.length) return;
                    A += C + tI
                }
                j += C + tI
            }
    }
}

function fC() {
    this.init = function(V, j) {
        mj.k(5), jj.fd(V, j, !1), pS.request = !0
    }, this._ = function() {
        jj.Bg()
    }, this.click = function(V, j) {
        var I = jj.Cg(V, j, 5, 2);
        5 === I ? lS ? location.reload() : 7 <= eS ? KS.k(5) : location.reload() : 6 === I && (Kj.init(), jj.fd(V, j, !1), pS.request = !0)
    }
}

function XC() {
    function V(V, j, I, m, C, S, l, a, K) {
        wC.fillStyle = C, wC.fillRect(V, j, I, m), 0 <= a && (wC.fillStyle = "rgba(" + 22 * a + "," + (110 - 22 * a) + ",0,0.75)", wC.fillRect(V, j, (1 + a) * I / 6, m)), 0 < K && (wC.fillStyle = "rgba(255,255,255,0.3)", wC.fillRect(V, j, K * I / jI, m)), wC.strokeStyle = tm, wC.strokeRect(V, j, I, m), 0 !== S && (wC.fillStyle = tm, wC.font = zm + Math.floor(S * m) + km, wC.fillText(l, Math.floor(V + I / 2), Math.floor(j + .52 * m)))
    }
    var j = [0, 0, 0, 0];
    this.na = [{
        xa: 0,
        count: jI
    }], this.show = function() {
        hj.isActive = !1, mj.k(2), this.Ad(), pS.request = !0
    }, this.Jh = function() {}, this.Ad = function() {
        j[2] = Math.floor((LS ? .49 : .4) * jS), j[1] = Math.floor((yC - j[2] / 6 - this.na.length * (tI + j[2] / 10)) / 2), j[0] = Math.floor((xC - j[2]) / 2), hj.isActive && hj.resize()
    }, this.Kh = function(V) {
        var j;
        if (6 < V) this.na = [{
            xa: 0,
            count: jI
        }];
        else {
            for (this.na = [], j = 0; j < V + 2; j++) this.na.push({
                xa: 0,
                count: 0
            });
            this.Lh()
        }
    }, this.$g = function() {
        pS.request = !0, hj.isActive ? hj.isActive = !1 : (this.Jh(), Kj.init())
    }, this.lc = function() {
        var V;
        if (VI.isActive) return VI.ta.Mh;
        var j = 0;
        for (V = this.na.length - 1; 0 <= V; V--) j += this.na[V].count;
        return j
    }, this.$c = function(V, j) {
        return !(!hj.isActive || !hj.fd(V, j)) || -1 !== this._g(V, j)
    }, this.Nh = function() {
        if (Uj.uc = 0, Uj.zf(0, 3) && sj.Oh(0), mj.Wg(), VI.isActive) VI.Ph();
        else {
            var V = this.na.length - 2;
            V = 0 > V ? 7 : V, lI(Math.floor(16384 * Math.random()), 0, [{
                name: Kj.lh(),
                color: pI.buttons[2].Re.Jg(),
                nc: 0
            }], V, !1)
        }
    }, this.Ye = function(V, j) {
        return !1
    }, this.Ld = function(V, I) {
        if (_S.isOpen || pI.buttons[1].Re.Qe || pI.buttons[2].Re.Qe) return !1;
        if (hj.isActive && !VI.isActive) return hj.click(V, I);
        var m = this._g(V, I);
        if (-1 === m) return !1;
        if (0 === m) return this.$g(), !0;
        if (1 === m) return VI.isActive ? (VI.Qh(), pS.request = !0) : hj.show(), !0;
        if (2 === m) return this.Jh(), this.Nh(), !0;
        if (VI.isActive) return !1;
        if (27 === m) return 8 > this.na.length && (this.na.push({
            xa: 0,
            count: jI
        }), this.Lh(), this.Ad(), pS.request = !0), !0;
        var C = Math.floor((m - 3) / 3);
        if (0 == m % 3) return 1 < this.na.length && (this.na.splice(C, 1), this.Ad(), pS.request = !0), !0;
        var S = (j[2] - j[2] / 10 - 2 * tI) / 2;
        if (1 == m % 3) return 0 === C && 1 === this.na[C].count || (V < j[0] + j[2] - 1.5 * S - tI ? this.na[C].xa-- : this.na[C].xa++, 0 > this.na[C].xa ? this.na[C].xa = 5 : 5 < this.na[C].xa && (this.na[C].xa = 0), pS.request = !0);
        pS.request = !0;
        var l = (V - (j[0] + j[2] - S)) / S - .5;
        for (l = 0 === (l = Math.floor((0 > l ? -l * l : l * l) * jI)) ? 1 : l, S = jI, m = this.na.length - 1; 0 <= m; m--) C !== m && (S -= this.na[m].count);
        if (0 > l) {
            if (1 === this.na[C].count) return this.na[C].count = S, !0
        } else if (this.na[C].count === S) return this.na[C].count = 1, !0;
        return this.na[C].count += l, 1 > this.na[C].count ? this.na[C].count = 1 : this.na[C].count > S && (this.na[C].count = S), !0
    }, this.Lh = function() {
        for (var V = Math.floor(jI / this.na.length), j = jI % this.na.length, I = this.na.length - 1; 0 <= I; I--) this.na[I].count = V;
        this.na[0].count += j
    }, this._g = function(V, I) {
        var m, C = (j[2] - 2 * tI) / 3,
            S = j[2] / 6;
        if (V < j[0] || I < j[1] || V >= j[0] + j[2]) return -1;
        if (I < j[1] + S) return V < j[0] + C ? 0 : V < j[0] + C + tI ? -1 : V < j[0] + 2 * C + tI ? 1 : V < j[0] + 2 * C + 2 * tI ? -1 : 2;
        var l = j[2] / 10;
        for (C = (j[2] - l - 2 * tI) / 2, m = 0; m < this.na.length; m++) {
            var a = j[1] + S + tI + m * (l + tI);
            if (I < a) return -1;
            if (!(I > a + l)) return V < j[0] + l ? 3 + 3 * m : V < j[0] + l + tI ? -1 : V < j[0] + j[2] - C - tI ? 4 + 3 * m : V < j[0] + j[2] - C ? -1 : 5 + 3 * m
        }
        return 8 > this.na.length ? I < (a = j[1] + S + tI + this.na.length * (l + tI)) || I > a + l || V > j[0] + l ? -1 : 27 : -1
    }, this.Ib = function() {
        var I;
        wC.lineWidth = 2, wC.textAlign = Gm, wC.textBaseline = pm;
        var m = (j[2] - 2 * tI) / 3,
            C = j[2] / 6;
        if (V(j[0], j[1], m, C, "rgba(128,0,0,0.75)", .4, "Back", -1, -1), V(j[0] + m + tI, j[1], m, C, "rgba(" + (VI.isActive ? 128 : 0) + ",128,128,0.75)", .4, VI.isActive ? "Reset" : "Maps", -1, -1), V(j[0] + j[2] - m, j[1], m, C, "rgba(0,128,0,0.75)", .4, "Start", -1, -1), !VI.isActive) {
            var S = j[2] / 10;
            for (m = (j[2] - S - 2 * tI) / 2, I = 0; I < this.na.length; I++) {
                var l = j[1] + C + tI + I * (S + tI);
                V(j[0], l, S, S, "rgba(0,128,0,0.75)", 0, null, -1), V(j[0] + S + tI, l, m, S, yI, .4, this.Rh(I), this.na[I].xa, -1), V(j[0] + j[2] - m, l, m, S, yI, .4, this.Sh(I), -1, this.na[I].count)
            }
            if (8 > this.na.length) {
                l = j[1] + C + tI + this.na.length * (S + tI), V(j[0], l, S, S, "rgba(128,128,20,0.75)", 0, null, -1, -1), I = j[0], wC.fillStyle = tm, m = Bl(2, Math.floor(.5 * S)), m -= m % 2, C = Bl(2, Math.floor(.1 * S)), C -= C % 2, S = Math.floor((S - m) / 2);
                var a = Math.floor(S + (m - C) / 2);
                wC.fillRect(I + S, l + a, m, C), wC.fillRect(I + a, l + S, C, m)
            }
            hj.isActive && hj._()
        }
    }, this.Rh = function(V) {
        return 0 === V && 1 === this.na[V].count ? "You" : cV.pa[this.na[V].xa]
    }, this.Sh = function(V) {
        return 1 === this.na[V].count ? "1 Player" : this.na[V].count + " Players"
    }
}

function kC() {
    this.height = this.Th = 0, this.buttons = null, this.init = function() {
        this.buttons = [], this.buttons.push({
            if: 0,
            bd: 0,
            active: LS,
            Re: null
        }), this.buttons.push({
            if: 0,
            bd: 0,
            active: !1,
            Re: new pC
        }), this.buttons.push({
            if: 0,
            bd: 0,
            active: !1,
            Re: new FC
        }), this.buttons[2].Re.Xe(), this.Th = this.buttons.length, this.height = 0
    }, this.resize = function() {
        this.height = Math.floor((LS ? .063 : .04) * jS), this.height += 4 - this.height % 4, Ca("removeMenuSettingButton") && (this.height = 0), this.buttons[0].if = tI, this.buttons[0].bd = mS - this.height - tI;
        for (var V = 1; V < this.Th; V++) this.buttons[V].if = this.buttons[V - 1].if+Math.floor(LS ? 1.5 * tI : 3.7 * tI) + this.height, this.buttons[V].bd = this.buttons[0].bd
    }, this._g = function(V, j) {
        if (!ej.X()) return -1;
        for (var I = this.Th - 1; 0 <= I; I--)
            if (V >= this.buttons[I].if && j >= this.buttons[I].bd && V < this.buttons[I].if+this.height && j < this.buttons[I].bd + this.height) return I;
        return -1
    }, this.Uh = function() {
        for (var V = 2; 1 <= V; V--)
            if (this.buttons[V].Re.Qe) return !0;
        return !1
    }, this.sg = function() {
        return this.buttons[1].Re.Qe ? (this.buttons[1].Re.Ld(-5e3, -5e3, 0), !0) : !!this.buttons[2].Re.Qe && (this.buttons[2].Re.Ld(-5e3, -5e3), !0)
    }, this.click = function(V, j, I) {
        if (I) {
            if (this.buttons[1].Re.Qe) return this.buttons[1].Re.Ld(V, j, 0), !0;
            if (this.buttons[2].Re.Qe) return this.buttons[2].Re.Ld(V, j), !0
        }
        if (Ca("removeMenuSettingButton")) return !1;
        if (V = this._g(V, j), I) {
            if (0 === V) return this.buttons[V].active = !this.buttons[V].active, document.getElementById("zoomInterface").checked = this.buttons[V].active, la("zoomInterface", this.buttons[V].active), LS = this.buttons[V].active, Oj.Vh(),
                function(V, j) {
                    lS ? (window.webkit.messageHandlers.iosCommandA.postMessage("zoom " + (V ? 1 : 0)), window.webkit.messageHandlers.iosCommandA.postMessage("sound " + (j ? 1 : 0))) : 12 <= eS ? (KS.Wh(22, j ? 1 : 0), KS.Wh(21, V ? 1 : 0)) : 5 <= eS ? (KS.Wh(1, V ? 1 : 0), KS.Wh(11, j ? 1 : 0)) : (Bj.y(2, j ? 1 : 0), Bj.y(4, V ? 0 : 1), Bj.z())
                }(this.buttons[0].active, !1), !0;
            if (1 <= V && 3 > V) return this.buttons[V].Re.Kb(), Kj.hide(), pS.request = !0
        }
        return !1
    }, this.fd = function(V, j) {
        return this.buttons[1].Re.Qe ? (this.buttons[1].Re.$c(V, j), !0) : !!this.buttons[2].Re.Qe && (this.buttons[2].Re.$c(V), !0)
    }, this.Xe = function() {
        for (var V = 2; 1 <= V; V--)
            if (this.buttons[V].Re.Qe) return this.buttons[V].Re.Lg(), !0;
        return !1
    }, this._ = function() {
        if (ej.X()) {
            wC.imageSmoothingEnabled = !0;
            for (var V = this.Th - 1; 0 <= V; V--) wC.fillStyle = this.buttons[V].active ? Km : yI, wC.fillRect(this.buttons[V].if, this.buttons[V].bd, this.height, this.height), 0 === V ? this.Xh(V, ej.Y(15)) : 1 === V ? this.Yh() : 2 === V && this.Zh(), wC.setTransform(1, 0, 0, 1, 0, 0), wC.lineWidth = nI, wC.strokeStyle = tm, wC.strokeRect(this.buttons[V].if, this.buttons[V].bd, this.height, this.height);
            wC.imageSmoothingEnabled = !1
        }
    }, this.Xh = function(V, j) {
        var I = .08 * this.height,
            m = (this.height - 2 * I) / j.width;
        wC.setTransform(m, 0, 0, m, this.buttons[V].if+I, this.buttons[V].bd + (this.height - m * j.height) / 2), wC.drawImage(j, 0, 0)
    }, this.Yh = function() {
        var V = .06 * this.height,
            j = (this.height - 2 * V) / nS.ld;
        wC.setTransform(j, 0, 0, j, this.buttons[1].if+V, this.buttons[1].bd + V), wC.drawImage(nS.md[4], 0, 0)
    }, this.Zh = function() {
        wC.setTransform(1, 0, 0, 1, this.buttons[2].if, this.buttons[2].bd);
        for (var V = this.height / 4, j = 3; 0 <= j; j--)
            for (var I = 3; 0 <= I; I--) wC.fillStyle = "rgb(" + Math.floor(367 * (j + 1) * (I + 1) % 256) + "," + Math.floor(687 * (j + 1) * (I + 1) % 256) + "," + Math.floor(651 * (j + 1) * (I + 1) % 256) + ")", wC.fillRect(j * V, I * V, V, V)
    }, this.Hb = function() {
        for (var V = 2; 1 <= V; V--)
            if (this.buttons[V].Re.Qe) {
                this.buttons[V].Re.Ib();
                break
            }
    }
}

function qC() {
    function S() {
        if (0 !== e.indexOf("vote ")) return !1;
        var V = e.split(" ");
        return 2 === V.length && (Kj.$h = V[1], l(), Uj.zf(0, 7) && sj._h(0), Cj.Rg(3252), !0)
    }

    function l() {
        e = V(), Sj.lh(0).input.value = e, Sj.mh(0, !0)
    }

    function a() {
        if (0 !== e.indexOf("account ")) return !1;
        var V = e.split(" ");
        if (2 !== V.length) return l(), Cj.Rg(3266), !0;
        var j = Math.floor(Math.pow(2, 48));
        return 0 >= (V = parseInt(bV.j(V[1]))) || V >= j ? (l(), Cj.Rg(3266), !0) : m(V) ? (l(), Cj.Rg(3231), !0) : (l(), 5 <= eS ? Cj.Rg(3232) : (Cj.Rg(3265), AS.Cc = !0, AS.de = -1), !0)
    }

    function K() {
        return void 0 !== e && bV.Qb(e) ? (Sj.mh(0, !0), !0) : (Sj.mh(0, !1), !1)
    }
    var e;
    this.$h = "", this.ai = -7e3, this.init = function() {
        mj.k(0), jj.yg(), Sj.toggle(0, !0), Sj.bh(0), HV.init(), pI.resize(), void 0 === e && (e = V(), Sj.lh(0).input.value = e, K())
    }, this.hide = function() {
        Sj.toggle(0, !1)
    }, this.bi = function(V) {
        return 0 === V ? jj.width : 1 === V ? Math.floor(.3 * jj.height) : 2 === V ? Sj.lh(0).input.style.font : e
    }, this.kh = function() {
        if (e = Sj.lh(0).input.value.trim(), K(), "password" === e || "account" === e) {
            var V = bV.l(j().toString());
            e = "account " + V, Sj.lh(0).input.value = e
        }
    }, this.click = function(V, j) {
        pS.ci(), 1 === jj.Cg(V, j, 1, 1) ? a() || S() || (C(10), K() ? (this.hide(), I(e), aj.show()) : Cj.Rg(4214)) : 0 === jj.Cg(V, j, 0, 1) ? !jj.ke && this.submit() : 7 === jj.Cg(V, j, 7, 1) && (window.location.href = "https://platz1de.github.io/BetterTT/lobby")
    }, this.submit = function() {
        a() || S() || (C(10), void 0 !== e && bV.Qb(e) && 40 === e.charCodeAt(0) && 41 === e.charCodeAt(2) && (document.getElementById("server").value = (Math.abs(e.charCodeAt(1)) + 7) % Uj.Og) ? (this.di = !0, document.getElementById("server").onchange()) : this.di && (document.getElementById("server").value = 0, this.di = !1, document.getElementById("server").onchange()), K() ? ej.X() ? (this.hide(), I(e), VI.Qh(), Ij.init()) : Cj.Rg(3228) : Cj.Rg(4214))
    }, this.ei = function() {
        return !pI.Uh() && !_S.isOpen && !XS.Cc
    }, this._ = function() {
        if (this.ei()) {
            wC.imageSmoothingEnabled = !0;
            var V = ej.xc("territorial.io"),
                j = 1.1 * jj.width / V.width;
            wC.setTransform(j, 0, 0, j, Math.floor((IS - j * V.width) / 2), jj.xg - j * V.height - .72 * jj.height), wC.drawImage(V, 0, 0), wC.setTransform(1, 0, 0, 1, 0, 0), jj.zg()
        }
    }, this.lh = function() {
        return Aj.isActive ? Aj.name : e
    }
}

function ZC() {
    function V(V, S, l, a) {
        m[V] = S, I[V] = new Image, I[V].onload = function() {
            if (0 < l) {
                var m, S, a = document.createElement("canvas"),
                    K = I[V].width,
                    e = I[V].height;
                a.width = K, a.height = e;
                var L = a.getContext("2d", {
                    alpha: !0
                });
                L.drawImage(I[V], 0, 0);
                var B = L.getImageData(0, 0, K, e),
                    D = B.data;
                if (3 > l) {
                    var P = 2 === l ? 160 : 600;
                    for (m = K - 1; 0 <= m; m--)
                        for (S = e - 1; 0 <= S; S--) {
                            var W = 4 * (m + S * K);
                            D[W] + D[W + 1] + D[W + 2] < P && (D[W + 3] = Math.floor(255 * (D[W] + D[W + 1] + D[W + 2]) / P))
                        }
                } else if (3 === l)
                    for (m = K - 1; 0 <= m; m--)
                        for (S = e - 1; 0 <= S; S--) 0 === D[W = 4 * (m + S * K)] && 200 < D[W + 1] && 0 === D[W + 2] && (D[W + 3] = 0);
                else if (4 === l)
                    for (m = K - 1; 0 <= m; m--)
                        for (S = e - 1; 0 <= S; S--) D[(W = 4 * (m + S * K)) + 1] > D[W] + 20 && D[W + 1] > D[W + 2] + 20 && 40 > D[W] + D[2] && (D[W + 3] = 255 - D[W + 1], D[W] = D[W + 1] = D[W + 2] = D[W]);
                else if (5 === l)
                    for (m = K - 1; 0 <= m; m--)
                        for (S = e - 1; 0 <= S; S--) 200 < D[(W = 4 * (m + S * K)) + 1] && D[W + 1] - 20 > D[W] && D[W + 1] - 20 > D[W + 2] ? 40 > D[W] + D[W + 2] ? D[W + 3] = 0 : (D[W + 3] = D[W], D[W] = 255, D[W + 1] = 255, D[W + 2] = 255) : 50 > D[W] && 50 > D[W + 1] && 50 > D[W + 2] && (50 > D[W] + D[W + 1] + D[W + 2] ? (D[W + 1] = D[W + 1], D[W + 3] = 180) : (D[W + 1] = D[W + 1], D[W + 3] = 180 + Math.floor(75 * (D[W] + D[W + 1] + D[W + 2] - 50) / 100)));
                else if (6 === l)
                    for (m = K - 1; 0 <= m; m--)
                        for (S = e - 1; 0 <= S; S--) D[(W = 4 * (m + S * K)) + 3] = Math.floor(255 * (D[W] + D[W + 1] + D[W + 2]) / 765), D[W] = D[W + 1] = D[W + 2] = 255;
                else if (7 === l)
                    for (m = K - 1; 0 <= m; m--)
                        for (S = e - 1; 0 <= S; S--) D[(W = 4 * (m + S * K)) + 1] > D[W + 2] + 10 && (D[W + 3] = D[W], D[W + 1] = D[W + 2]);
                L.putImageData(B, 0, 0), I[V] = a
            }
            j--, ej.X() && (kS.W(), rV.zc(), nS.init(), fS.to([I[8], I[16], I[7], I[9], I[10]], [!1, !1, !1, !1, !1]), pS.request = !0, I[7] = C, I[8] = C, I[9] = C, I[10] = C, Aj.fi())
        }, I[V].src = a
    }
    var j, I, m, C;
    this.init = function() {
        if (void 0 === I) {
            j = 23, I = Array(j), m = Array(j), (C = document.createElement("canvas")).width = 1, C.height = 1;
            for (var S = j - 1; 0 <= S; S--) I[S] = C;
            V(0, "exit", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"), V(1, "victory", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg=="), V(2, "defeat", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC"), V(3, "orders", 6, "data:image/png;base64,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"), V(4, "crown", 4, "data:image/png;base64,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"), V(5, "arena", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC"), V(6, "territorial.io", 6, "data:image/png;base64,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"), V(7, "youtube", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC"), V(8, "googleplay", 3, "data:image/png;base64,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"), V(9, "discord", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="), V(10, "insta", 3, "data:image/png;base64,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"), V(11, "emojis", 4, "data:image/png;base64,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"), V(12, "flags", 3, "data:image/png;base64,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"), V(13, "bestTeam", 5, "data:image/png;base64,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"), V(14, "bestPlayer", 5, "data:image/png;base64,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"), V(15, "zoom", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"), V(16, "apple", 3, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII="), V(17, "open link", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAPBAMAAADpFNeEAAAAGFBMVEUA/wBi/2N//4CX/5i//8DU/9Pq/+r///90hWfkAAAA6klEQVQoz5XSPQ+CMBAG4FME1i6GlUHjSuLA6uaqEyt+JF3VSt+/b99WhRQG7XCB0qdcrycia42rkomxgJ2edsP8AfYEKH8Gc+CYaLQ/g5Szm8mcpkGGZwgurwsDKqfrrgf6kaNKcMihCpwk5+YZOr+2DMCOQBuAtkoKgpTgvsQOd7cCOMSg82DJz/0fHKjewMQAW4KGxRyeAYqBTyNgCFy6gyq517MEYKAjUNsA2nAPc95DyMaHW4Pu0wNoCVIQPJjN96aHoIjBzINqD9X30vu8cKW6JTGQ2pc18x2x0pbdOgTSxCD1YAHzAmJBjxvc7JBGAAAAAElFTkSuQmCC"), V(18, "loading", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII="), V(19, "target", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII="), V(20, "settings", -1, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAG/0lEQVR4Xu2bZ4wVVRTHXY29YkElilGJARsW1A8oH2yQGAuCsQIraFQ0FsQSRY2IIhgVEwMBQVYEBVQifrDFEjUxtkgUGzHRtQUi9i4q6++/zDzfm52798ydmbd5rCc5eWVOu/+5c+85995p2qBO1NbWdiCuroWPhnd2uF3F/y/Ak5uamt6rR2hN9XBC48/Cz1x4E6O/P5FrBoSFRvlgsdIBiO78mxkaHzdGIAwouyfUA4CHaMiZgbdoAQCcE6hrUqsHAHquXc+8L8hVALCrTyjP9XoAsJYAQ/20AcCGeRro0w0NzGe3cp0xoM0snCIIAKXGWKpxtadbA0DjBbAegWBq6B4AAL1o+VfBrV+n2AMQfshpw6le6iMAAKfheXHO4AcBwCtZbOB3G+TXoPeHT69TADB0IgauhI+AN4bfhWfBczGuRMVJ6Er+VXiALwjP9YX48uYRkb8LsHUZ3AfWo/cWfBv6S10+nABg8HaUrnEofsn/uj47DYgomJlcPzdn42P1kfh50GULf8dzbRrczyEzEf2b0q6lAoDBUxF+zBC8gJDjeThYjd4WfD8Wvh4+3KBvFdHdvAOeip/vYiX89ef7zfDJBkND0X08KdcBAIxuidCH8O4Go9Uiv/BDumWOK79j/234G3hPWBWmlb5AsB8g/FqtkAbApOgOWg03ktwkALjBCQB3fy8uvg9v1kityhCrBu4DAOHjWKemBwCARsuTMhhsRNGlAHBKBwBovAat1xuxRQExHwMIWnn6b8ACgKn8virAWCOqPAoAStJqAFjC76GN2JqAmFcAQN8kAA/zxxkBxrKq/IjC07AWPZVHiHbT4AQPgZXGlk3LAOCQJADj+OPOEj23YltT0GKcr0nzw2OoRdPT4VvgPUqM5S5iUIpf8wjswm9ND1uV4Fj1w6W++iH2CxCahu+Fx5QQy8/Y3JdY2ntfchoczX9zCnZ6Hc4mh9gECKXUSsyKImWrw4jn2dhgWiaoNXyh36MAr7NwpgotmABhdkE9QdPeWOJZUR2MqxjaIUL+fD43Coy+Fb2+1m7v8hE9Dgq6d444xhNHanHnWw9QtaUdnYMDnI/A6fwAvQ4qgDCKP1sCbGnsuZw4VESlkrdyi+6AUmTV3FbSVNfTNdpbjcRyxLAp31fDW2fQnYH/sT55LwAyQAA9+fgUVr1voUU4LzSnIAYtrbVnbwb6FpnexPCbT9YEQASCuvPZPoPR9Qk4v9UoaxIDgAkIKj+w0Ez8X2gRzALA1RicYjGKzGgC0NhRGAFAlil6HP7vtjjPAoDWB7UOaKExBHC/RdAqAwBKijQlWsice2QBYAGelSNYqIxHQGn0RItzZJZwA4ZZZE0AgL52dz+BrYOg8n3l9IURMTyCseFGg6o1lINo4O6UvABE0+ATWDnOZ6zq+k9836mLp0HtSQwmBqW/TrIkQi1oH5Sh8bHoKJzPC9DroMJNaObPkEF1OXpKyN5xxVFmKvxZ1A2921OdgUTjN+e6UuGsy/Sx2X/4ch+scUn5QQ2lFUPazdG6QBHF0BycnpenFwCAZpMidpi+x84lxKMjOxVKlsMaZWvWzfMEH+kGzwgZkx9rqDU5SgUAnB2JhZdh78Bo9VQlpzUGoW96HKJuPx2d5gBfPhUtiPQhlq8lWA2AzuQVOnUlIvk86l2qE1J3lqOiRzvB6omhz7wPAF1XhXhPEgANNPtYtHPK6A48BVcviqqx+8NaFM1S8YWGMh8ARiQB0JShILoDVTLF6kdAz9xF3aH1tHEaPeCKZA/Ymz8+gK3neRsZqxMA4MkaAPSDQUjlrsre9Zl0k/sDwN9pAGgA+gjW6a71lYbQ+GfixqVlgjqc7DyP0+CoVDZFOwNAoOhY2sAMjV2GbCu8PXwYbC2bM7ioiOq8kNb6su5gaWVYR2RUo1TIVQzth8QbnoYoECVPUzCq43PtxDiiGkLjiLjIg86vYU+7RM8pkcLPjnzXcvl4WNt6ProRvQ5ris60FweDsbgI3jZhOW64ztvoMFUqoT+SCw/4ojJe1/r+xfHAVa2DH+0ma8FU5wNdM9iLXNPawF9Jf771AJ3V19r6UZFxndCajiGNpF4iuCLSa/XEgWmNTwChLFYr0TriF/c8nQjTeUUVZKmbI2UUPpW4AGAQP17yItW5wHCCt5xZbLcSPRo6a6B6Yzm6Sr2dVDYA2+FZdXge6kUjVuYx0GUARHck1wsT6s4AkNdG1/SAIgCg8aX20lKN/w/AukEpz0tTa+kAoecTTMNGPXpAntfmVgJAqXVJPQDIsqWWvGuVlRvT7QwQqgcAmpP16qwOOWQhzeOH0gN0eLs0Kh2AaCDUYYmWDCCo8XpLJO/7Rl7g6gJABILWG+PX512vwyrheR7W6/OmdNvbQo/AvwmBL1/7wIb6AAAAAElFTkSuQmCC"), V(21, "clans", -1, "data:image/png;base64,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"), V(22, "chatlog", -1, "data:image/png;base64,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")
        }
    }, this.Y = function(V) {
        return I[V]
    }, this.xc = function(V) {
        for (var j = m.length - 1; 0 <= j; j--)
            if (m[j] === V) return I[j];
        return C
    }, this.X = function() {
        return 0 === j
    }
}

function dC() {
    function V(V, m) {
        I[V / 4] = 0, wS[V] = 0, wS[V + 1] = 0, wS[V + 2] = m, wS[V + 3] = 0, j(V)
    }

    function j(V) {
        if (!tS.go) {
            var j = Lj.gb(V);
            V = Lj.hb(V), tS.go = j >= WS.Zf[0] && j <= WS.Zf[2] && V >= WS.Zf[1] && V <= WS.Zf[3]
        }
    }
    var I, m, C, S, l, a, K, e, L, B, D, P, W = [224, 224, 224],
        v = [
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
        t = [
            [4, 4, 4, 20],
            [4, 0, 0, 27],
            [0, 4, 0, 31],
            [0, 0, 4, 27],
            [4, 4, 0, 31],
            [4, 0, 4, 31],
            [0, 4, 4, 31],
            [4, 4, 4, 14],
            [4, 4, 4, 13]
        ];
    this.init = function(V) {
        if (I = new Uint8Array(wS.length / 4), m = new Uint8Array(jI), C = new Uint8Array(jI), S = new Uint8Array(jI), l = new Uint8Array(jI), a = new Uint8Array(jI), K = new Uint8Array(jI), e = new Uint8Array(jI), L = new Uint8Array(jI), B = new Uint8Array(jI), D = new Uint8Array(jI), this.gi = new Uint8Array(jI), (P = new Int32Array(4))[0] = -4 * JS, P[1] = 4, P[2] = -P[0], P[3] = -P[1], !fV || Aj.isActive && Aj.wa)
            if (VI.isActive && VI.ta.hi)
                for (V = VI.ta.hi, j = II - 1; 0 <= j; j--) m[j] = 4 * V[j][0], C[j] = 4 * V[j][1], S[j] = 4 * V[j][2];
            else {
                for (j = jI - 1; j >= PV; j--) m[j] = 4 * Kl(64 * cj.random(), cj.value(100)), C[j] = 4 * Kl(64 * cj.random(), cj.value(100)), S[j] = 4 * Kl(64 * cj.random(), cj.value(100));
                if (Aj.isActive && Aj.wa)
                    for (W = PV - 1; 0 <= W; W--) j = GS.$b[GS.na[W]], V = Kl((t[j][3] + 1) * cj.random(), cj.value(100)), m[W] = v[j][0] + V * t[j][0], C[W] = v[j][1] + V * t[j][1], S[W] = v[j][2] + V * t[j][2];
                else
                    for (j = PV - 1; 0 <= j; j--) m[j] = 4 * V[j].color[0], C[j] = 4 * V[j].color[1], S[j] = 4 * V[j].color[2]
            }
        else
            for (var j, W = jI - 1; 0 <= W; W--) j = GS.$b[GS.na[W]], V = Kl((t[j][3] + 1) * cj.random(), cj.value(100)), m[W] = v[j][0] + V * t[j][0], C[W] = v[j][1] + V * t[j][1], S[W] = v[j][2] + V * t[j][2];
        for (V = jI - 1; 0 <= V; V--) j = Kl(m[V] + C[V] + S[V], 3), m[V] += el(j - m[V], 2), C[V] += el(j - C[V], 2), S[V] += el(j - S[V], 2), m[V] -= m[V] % 4, C[V] -= C[V] % 4, S[V] -= S[V] % 4;
        for (V = jI - 1; 0 <= V; V--) m[V] += Kl(V % 512, 128), C[V] += Kl(V % 128, 32), S[V] += Kl(V % 32, 8), l[V] = V % 8;
        for (this.ii(), V = jI - 1; 0 <= V; V--) a[V] = 32 > m[V] ? m[V] + 32 : m[V] - 32, K[V] = 32 > C[V] ? C[V] + 32 : C[V] - 32, e[V] = 32 > S[V] ? S[V] + 32 : S[V] - 32;
        for (V = jI - 1; 0 <= V; V--) L[V] = 235 < m[V] ? m[V] - 20 : m[V] + 20, B[V] = 235 < C[V] ? C[V] - 20 : C[V] + 20, D[V] = 235 < S[V] ? S[V] - 20 : S[V] + 20
    }, this.ii = function() {
        for (var V = jI - 1; 0 <= V; V--) this.gi[V] = 280 > m[V] + C[V] + S[V] ? 0 : 1
    }, this.kb = function(V) {
        return "rgba(" + m[V] + "," + C[V] + "," + S[V] + "," + (224 + l[V]) / 255 + ")"
    }, this.gb = function(V) {
        return Kl(V, 4) % JS
    }, this.hb = function(V) {
        return Kl(V, 4 * JS)
    }, this.Ka = function(V, j) {
        return Math.floor(4 * (j * JS + V))
    }, this.yb = function(V) {
        return this.F(V + P[0]) || this.F(V + P[1]) || this.F(V + P[2]) || this.F(V + P[3])
    }, this.wb = function(V, j) {
        return this.C(V + P[0], j) || this.C(V + P[1], j) || this.C(V + P[2], j) || this.C(V + P[3], j)
    }, this.v = function(V) {
        return 208 <= wS[V + 3]
    }, this.L = function(V, j) {
        return this.v(j) && this.M(V, j)
    }, this.M = function(V, j) {
        return V === this.A(j)
    }, this.N = function(V) {
        return 208 <= wS[V + 3] && 224 > wS[V + 3]
    }, this.ca = function(V) {
        return 224 <= wS[V + 3] && 248 > wS[V + 3]
    }, this.xb = function(V) {
        for (var j = 3; 0 <= j; j--)
            if (this.D(V + P[j])) return !0;
        return !1
    }, this.ji = function(V) {
        return 192 <= wS[V + 3] && 208 > wS[V + 3]
    }, this.ki = function(V, j) {
        return this.ji(V) && j === this.A(V)
    }, this.o = function(V) {
        return this.v(V) || this.u(V)
    }, this.D = function(V) {
        return 0 === wS[V + 3] && 2 === wS[V + 2] || this.ji(V)
    }, this.u = function(V) {
        return 0 === wS[V + 3] && 1 === wS[V + 2]
    }, this.F = function(V) {
        return 0 === wS[V + 3] && 3 === wS[V + 2]
    }, this.C = function(V, j) {
        return this.u(V) || this.v(V) && j !== this.A(V)
    }, this.A = function(V) {
        return 512 * (I[V / 4] || 0) + wS[V] % 4 * 128 + wS[V + 1] % 4 * 32 + wS[V + 2] % 4 * 8 + wS[V + 3] % 8
    }, this.Cb = function(j) {
        V(j, 1)
    }, this.li = function(j) {
        V(j, 2)
    }, this.G = function(V, a) {
        I[V / 4] = Kl(a, 512), wS[V] = m[a], wS[V + 1] = C[a], wS[V + 2] = S[a], wS[V + 3] = 208 + l[a], j(V)
    }, this.p = function(V, m) {
        I[V / 4] = Kl(m, 512), wS[V] = a[m], wS[V + 1] = K[m], wS[V + 2] = e[m], wS[V + 3] = 224 + l[m], j(V)
    }, this.B = function(V, m) {
        I[V / 4] = Kl(m, 512), wS[V] = L[m], wS[V + 1] = B[m], wS[V + 2] = D[m], wS[V + 3] = 248 + l[m], j(V)
    }, this.mi = function(V, a) {
        I[V / 4] = Kl(a, 512), wS[V] = W[0] + m[a] % 4, wS[V + 1] = W[1] + C[a] % 4, wS[V + 2] = W[2] + S[a] % 4, wS[V + 3] = 192 + l[a], j(V)
    }
}

function iC() {
    function V() {
        for (var V = 0, j = 1; 5 > j; j++) V += l[j] % 1024;
        return V
    }

    function j() {
        for (var V = 1; V < a - e; V++) l[V] = parseInt(l[V])
    }

    function I() {
        l[0] = "Player " + Math.floor(1e3 * Math.random()), l[1] = xC < yC ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, l[2] = 1, l[3] = 1, l[4] = xC < yC ? 0 : 1, l[5] = 0, l[6] = "000", l[7] = "0", l[8] = "0", l[9] = "0", Bj.z()
    }

    function m() {
        for (var V = a - e - 1; 0 <= V; V--) l[V] = bV.j(l[V]);
        l[0] = bV.Ub(l[0])
    }

    function C(V, j, I) {
        var m = new Date;
        m.setTime(m.getTime() + Math.floor(31536e6 * I)), V = V + "=" + j + ";expires=" + m.toUTCString() + ";SameSite=Strict;Secure;path=/", document.cookie = V
    }
    var S, l, a, K, e;
    this.init = function() {
        if (!(5 <= eS || lS)) {
            e = 4, K = 0, S = [], a = 10;
            for (var L = 0; L < a; L++) S.push("u" + L);
            l = Array(a);
            for (var B, D = document.cookie.split(";"), P = D.length - 1; 0 <= P; P--) {
                for (D[P] = D[P].trim(), L = 2; 0 <= L; L--) D[P] = D[P].replace(" ", "");
                3 < D[P].length && (L = S.indexOf(D[P].substring(0, 2)), B = D[P].indexOf("="), 0 <= L && 2 === B ? l[L] = D[P].substring(B + 1, D[P].length) : 0 < B && C(D[P].substring(0, B), "0", 0))
            }
            l[9] || (l[9] = "0");
            V: {
                for (L = a - 1; 0 <= L; L--)
                    if (void 0 === l[L]) {
                        L = !1;
                        break V
                    } L = !0
            }
            L ? (K = 2, m(), j(), V() !== l[5] && I()) : I()
        }
    }, this.z = function() {
        if (2 === K) {
            l[1] = 0 === l[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : l[1], l[5] = V();
            for (var I = 1; I < a - e; I++) l[I] = l[I].toString();
            for (l[0] = bV.Tb(l[0]), I = a - e - 1; 0 <= I; I--) l[I] = bV.l(l[I]);
            for (I = a - 1; 0 <= I; I--) C(S[I], l[I], 1);
            m(), j()
        }
    }, this.m = function() {
        return K
    }, this.ge = function(V) {
        K = V,
            function() {
                if (document.getElementById("cookieWarning").hidden = !0, !ma) return;
                for (const V of ma) la(V, document.getElementById(V).checked)
            }(), this.z()
    }, this.y = function(V, j) {
        5 <= eS || lS || (l[V] = j)
    }, this.i = function(V) {
        return 5 <= eS || lS ? 0 : l[V]
    }
}

function cC() {
    function V(V) {
        for (j -= 2; V < j; V += 2) I[V] = I[V + 2], I[V + 1] = I[V + 3]
    }
    var j = 0,
        I = new Uint16Array(32);
    this.Kb = function() {
        j = 0
    }, this.Da = function() {
        if (0 !== j)
            if (0 === EI[GV] || Qj.ni(GV) === Qj.q(GV)) j = 0;
            else {
                var m;
                for (m = j - 2; 0 <= m; m -= 2) {
                    var C = I[m];
                    if (C < jI && 0 === EI[C]) V(m);
                    else {
                        var S = I[m + 1];
                        (C >= jI && il(GV) || C < jI && cl(GV, C)) && (nV ? LC(GV, C, S) : sj.Qc(S, C === jI ? GV : C), V(m))
                    }
                }
            }
    }, this.Tc = function(V, m) {
        var C;
        V: {
            for (C = 0; C < j; C += 2)
                if (I[C] === V) {
                    I[C + 1] += m, I[C + 1] = Dl(I[C + 1], 1e3), C = !0;
                    break V
                } C = !1
        }
        C || 32 === j || (I[j] = V, I[j + 1] = m, j += 2)
    }
}

function EC(V) {
    ! function(V) {
        rV.Fc(V) && tV++;
        var j = Qj.oi(V);
        0 === j.length ? V === GV && oC() : (function(V, j) {
            var I;
            for (I = j.length - 1; 0 <= I; I--) Qj.pi(j[I], V)
        }(V, j), function(V, j) {
            var I, m = j[function(V) {
                var j, I = 0;
                for (j = V.length - 1; 1 <= j; j--) sI[V[j]] > sI[V[I]] && (I = j);
                return I
            }(j)];
            if (9 === kV && 1 === GS.na[V] && cj.ja(8) && Xj.qi(m), V === GV) $V.Za(m, 1), oC();
            else {
                for (I = j.length - 1; 0 <= I; I--)
                    if (j[I] === GV) return void $V.Za(V, 0);
                V < PV && $V.Nd(0, V, m)
            }
        }(V, j))
    }(V),
    function(V) {
        var j, I;
        for (j = MI[V]; j >= oI[V]; j--)
            for (I = JI[V]; I >= NI[V]; I--) {
                var m = 4 * (I * JS + j);
                Lj.L(V, m) && (Lj.Cb(m), sI[V]--)
            }
    }(V),
    function(V) {
        Fj.add(V, -bI[V], "Elimination", -1, "elim"), EI[V] = bI[V] = 0, rI[V] = null, hI[V] = null, $I[V] = null, HI[V] = null, Rj.ri(V)
    }(V), EV.O(V), JV.cb(V), Qj.si(V)
}

function oC() {
    FS.R[17] += bI[GV] + Qj.ti(GV), Vj.show(!1, !1), yV.Of()
}

function NC() {
    function V(V) {
        (V = V.target.files) && 0 < V.length && yj.ui(V[0])
    }

    function j(V) {
        var j = new Image;
        j.onload = I, j.src = V.target.result
    }

    function I(V) {
        var j = V.target;
        V = j.width;
        var I = j.height;
        4096 < V || 4096 < I || 10 > V || 10 > I ? alert("Image w & h must be between 10 and 4096.") : ($S = xS, HS = 0, JS = V, sS = I, OS.width = JS, OS.height = sS, bS.drawImage(j, 0, 0), hS = bS.getImageData(0, 0, JS, sS).data)
    }
    var m;
    this.vi = function() {
        (m = document.createElement("input")).type = "file", m.onchange = V
    }, this.wi = function() {
        m.click()
    }, this.xi = function(j) {
        V(j)
    }, this.ui = function(V) {
        var I = V.name.split("."),
            m = I[I.length - 1].toLowerCase();
        "json" === m ? VI.yi(V) : "gif" !== m && "jpg" !== m && "jpeg" !== m && "png" !== m || (VI.zi = I[0], (m = new FileReader).onload = j, m.readAsDataURL(V))
    }, this.Ze = function(V) {
        0 !== mj.getState() && 2 !== mj.getState() || (V.stopPropagation(), V.preventDefault(), V.dataTransfer.dropEffect = "copy")
    }, this.$e = function(V) {
        0 !== mj.getState() && 2 !== mj.getState() || (V.stopPropagation(), V.preventDefault(), (V = V.dataTransfer.files) && 0 < V.length && yj.ui(V[0]))
    }
}

function MC() {
    this.Ai = null, this.init = function() {
        this.Ai = 10 !== kV ? null : new Uint32Array(jI)
    }, this.Ba = function() {
        10 === kV && this.Bi()
    }, this.Bi = function() {
        var V, j = this.Ai,
            I = TI,
            m = bI;
        for (V = YI - 1; 0 <= V; V--) {
            var C = I[V];
            if (!(C >= PV)) {
                var S = Math.max(Kl(m[C], 4), 2048),
                    l = Math.max(_j.Pf(C), 100);
                j[C] += Kl(l * S, 1e4), j[C] > S && (j[C] = S)
            }
        }
    }, this.Vf = function(V, j) {
        return j > this.Ai[V] ? (j = this.Ai[V], this.Ai[V] = 0, j) : (this.Ai[V] -= j, j)
    }
}

function JC() {
    function V(V) {
        VI.isActive = !0, VI.Ci(JSON.parse(V.target.result)), VI.Di()
    }

    function j(V, j, I, m) {
        return "string" != typeof V || V.length < j ? m : V.length > I ? V.substring(0, I) : V
    }

    function I(V, j, I) {
        return V = "number" == typeof V ? Math.floor(V) : j, Math.min(Math.max(V, j), I)
    }

    function m(V, j) {
        return "boolean" == typeof V ? V : j
    }

    function C(V, j, m, C) {
        if (!Array.isArray(V) || 1 > V.length) return null;
        var S = 8 === C ? new Uint8Array(j) : new Uint16Array(j),
            l = V.length;
        for (C = 0; C < j; C++) S[C] = I(V[C % l], 0, m);
        return S
    }
    this.isActive = !1, this.ta = null, this.zi = "", this.Qh = function() {
        this.isActive = !1, this.ta = null
    }, this.Ph = function() {
        this.ta.hi && this.ta.Ei && (this.ta.hi[0] = pI.buttons[2].Re.Jg()), lI(this.ta.Fi, 0, this.Gi(), this.ta.Hi, !1)
    }, this.Gi = function() {
        return [{
            name: this.ta.Ii ? Kj.lh() : this.ta.Ji[0],
            color: [0, 0, 0],
            nc: 0
        }]
    }, this.yi = function(j) {
        var I = new FileReader;
        I.onload = V, I.readAsText(j)
    }, this.Ci = function(V) {
        this.ta = {}, this.ta.Mh = I(V.numberPlayers, 1, 512), this.ta.Ki = I(V.modeID, 0, 1), this.ta.Li = I(V.mapID, 0, xS - 1), this.ta.Mi = I(V.seedMap, 0, 16383), this.ta.Fi = I(V.seedSpawn, 0, 16383), this.ta.jc = m(V.selectableSpawn, !1), this.ta.Ii = m(V.selectableName, !1), this.ta.Ei = m(V.selectableColor, !1), this.zi = this.ta.Ni = j(V.mapName, 1, 25, "Custom Map");
        var S, l = this.ta,
            a = V.description;
        if (!Array.isArray(a) || 1 > a.length) a = [];
        else {
            var K = a.length;
            for (S = 0; S < K; S++) a[S] = j(a[S], 0, 100, "")
        }
        if (l.Id = a, this.ta.zb = C(V.playerX, this.ta.Mh, 4096, 16), this.ta.Ab = C(V.playerY, this.ta.Mh, 4096, 16), this.ta.Oi = C(V.playerTeam, this.ta.Mh, 8, 8), this.ta.sa = C(V.playerStrength, this.ta.Mh, 5, 8), l = this.ta, a = V.playerColor, S = this.ta.Mh, !Array.isArray(a) || 1 > a.length) a = null;
        else {
            var e = Array(S),
                L = a.length;
            for (K = 0; K < S; K++) e[K] = C(a[K % L], 3, 63, 8);
            a = e
        }
        if (l.hi = a, l = this.ta, a = V.playerName, S = this.ta.Mh, !Array.isArray(a) || 1 > a.length) a = null;
        else {
            for (e = Array(S), L = a.length, K = 0; K < S; K++) e[K] = j(a[K % L], 3, 26, "Bot");
            a = e
        }
        l.Ji = a, this.ta.Pi = "string" == typeof V.mapBase64 ? V.mapBase64 : "", this.ta.Ii = this.ta.Ii || !this.ta.Ji, this.ta.Hi = 0 === this.ta.Ki ? 7 : 2 === this.ta.Ki ? 9 : 6, this.ta.zb = this.ta.Ab ? this.ta.zb : null
    }, this.Di = function() {
        (function(V) {
            var j;
            if (22 >= V.length) return !1;
            VI.ta.Li = 0, VI.ta.Mi = 0, yS(0, 0), "data:image/jpeg;base64," !== V.substring(0, 23) && "data:image/png;base64," !== V.substring(0, 22) && (V = "data:image/png;base64," + V);
            var I = new Image;
            return I.onload = function() {
                JS = I.width, sS = I.height, 4096 < JS || 4096 < sS || 10 > JS || 10 > sS ? (yS(0, 0), alert("Image w & h must be between 10 and 4096.")) : ($S = xS, HS = 0, OS.width = JS, OS.height = sS, bS.drawImage(I, 0, 0), j = bS.getImageData(0, 0, JS, sS), hS = j.data)
            }, I.src = V, VI.ta.Pi = "", !0
        })(this.ta.Pi) || yS(this.ta.Li, this.ta.Mi)
    }, this.Qi = function() {
        var V, j = 0,
            I = this.ta.Mh;
        for (V = 0; V < I; V++) this.ta.Oi[V] > j && (j = this.ta.Oi[V]);
        return Math.max(0, j - 1)
    }
}

function sC() {
    function V(V) {
        return V < PV ? j * V : j * PV + I * (V - PV)
    }
    var j, I, m, C, S, l;
    this.init = function() {
        j = 16 > PV ? 12 : 8, I = 4;
        var a = V(jI);
        m = new Uint8Array(jI), C = new Uint16Array(a), S = new Uint32Array(a), l = new Uint16Array(a)
    }, this.si = function(V) {
        m[V] = 0
    }, this.pi = function(j, I) {
        var a;
        V: {
            var K = V(j);
            for (a = m[j] - 1; 0 <= a; a--)
                if (0 === l[K + a] && C[K + a] === I) break V;a = m[j]
        }
        a !== m[j] && (K = S[V(j) + a], this.S(j, a), this.aa(j, K, jI))
    }, this.ea = function(j, I) {
        var S, a = V(j);
        for (S = m[j] - 1; 0 <= S; S--)
            if (0 === l[a + S] && C[a + S] === I) return !0;
        return !1
    }, this.fa = function(V) {
        return V < PV ? m[V] < j : m[V] < I
    }, this.q = function(V) {
        return m[V]
    }, this.H = function(j, I) {
        return C[V(j) + I]
    }, this.t = function(j, I) {
        return l[V(j) + I]
    }, this.Qa = function(j, I) {
        var C, S = V(j);
        for (C = m[j] - 1; 0 <= C; C--)
            if (l[S + C] === I) return C;
        return -1
    }, this.I = function(j, I) {
        return S[V(j) + I]
    }, this.J = function(j, I) {
        var a, K = V(j);
        for (a = m[j] - 1; 0 <= a; a--)
            if (0 === l[K + a] && C[K + a] === I) return S[K + a];
        return 0
    }, this.ti = function(j) {
        var I = V(j),
            C = 0;
        for (j = m[j] - 1; 0 <= j; j--) C += S[I + j];
        return C
    }, this.Ri = function(j) {
        var I = V(j),
            C = 0;
        for (j = m[j] - 1; 0 <= j; j--) 0 === l[I + j] && (C += S[I + j]);
        return C
    }, this.ni = function(j) {
        var I = V(j),
            C = 0;
        for (j = m[j] - 1; 0 <= j; j--) 0 < l[I + j] && C++;
        return C
    }, this.T = function(j, I, a) {
        var K = V(j);
        for (j = m[j] - 1; 0 <= j; j--) 0 === l[K + j] && C[K + j] === I && (S[K + j] = a)
    }, this.K = function(j, I, m) {
        S[V(j) + I] = m
    }, this.aa = function(j, I, a) {
        var K, e = V(j);
        for (a === GV && FS.R[j < PV ? 6 : 5]++, K = m[j] - 1; 0 <= K; K--)
            if (0 === l[e + K] && C[e + K] === a) return S[e + K] += I, void(S[e + K] = S[e + K] > AV ? AV : S[e + K]);
        C[e + m[j]] = a, S[e + m[j]] = I, l[e + m[j]] = 0, m[j]++, j < PV && (a === GV ? $V.Za(j, 5) : j === GV && zj.ed(a))
    }, this.Ra = function(j, I, a) {
        var K = V(j);
        EI[j] = 2, C[K + m[j]] = 0, S[K + m[j]] = I, l[K + m[j]] = a, m[j]++
    }, this.S = function(j, I) {
        var a;
        if (0 !== m[j]) {
            var K = V(j);
            for (m[j]--, a = I; a < m[j]; a++) C[K + a] = C[K + a + 1], S[K + a] = S[K + a + 1], l[K + a] = l[K + a + 1]
        }
    }, this.oi = function(j) {
        var I, S, a = [];
        for (I = YI - 1; 0 <= I; I--) {
            var K = V(TI[I]);
            for (S = m[TI[I]] - 1; 0 <= S; S--)
                if (0 === l[K + S] && C[K + S] === j) {
                    a.push(TI[I]);
                    break
                }
        }
        return a
    }
}

function OC() {
    var V, j, I, m, C, S;
    this.init = function() {
        m = I = j = V = 10
    }, this.Si = function() {
        S = 512, C = new Uint16Array(S);
        for (var V = 0; V < S; V++) C[V] = 100 + Wl(Kl(25600 * V, S - 4), 9)
    }, this.Kf = function() {
        return m
    }, this.Ba = function() {
        if (0 >= --I) {
            I = V;
            var C, S = bI[GV];
            for (nV && !fV && 0 !== EI[0] && 0 === aj.na[0].xa && (Fj.add(0, Kl(sI[0], 6), "Income bonus for " + sI[0] + " pixels", 0, sI[0] + "_bonus"), bI[0] += Kl(sI[0], 6)), C = YI - 1; 0 <= C; C--) {
                var l = Kl(_j.Pf(TI[C]) * bI[TI[C]], 1e4);
                Fj.add(TI[C], 1 > l ? 1 : l, "Interest for " + bI[TI[C]] + " troops with " + _j.Pf(TI[C]) + " multiplicator", 0, bI[TI[C]] + "_interest_" + _j.Pf(TI[C])), bI[TI[C]] += 1 > l ? 1 : l, _j.P(TI[C])
            }
            if (FS.R[9] += bI[GV] - S, 0 >= --m) {
                for (m = j, C = bI[GV], l = YI - 1; 0 <= l; l--) Fj.add(TI[l], sI[TI[l]], "Cycle bonus for " + sI[TI[l]] + " pixels", 0, sI[TI[l]] + "_cycle"), bI[TI[l]] += sI[TI[l]], _j.P(TI[l]);
                FS.R[8] += bI[GV] - C
            }
        }
    }, this.Pf = function(V) {
        var j = C[Kl((S - 1) * sI[V], gV)];
        if (1920 > pS.ma()) {
            var I = Kl(100 * (13440 - 6 * pS.ma()), 1920);
            j = I > j ? I : j
        }
        return I = this.ia(V), bI[V] > I && (j -= Kl(2 * j * (bI[V] - I), I)), 0 > j ? 0 : 700 < j ? 700 : j
    }, this.ia = function(V) {
        return (V = 100 * sI[V]) > pV ? pV : V
    }, this.P = function(V) {
        var j = 150 * sI[V];
        (bI[V] > AV || bI[V] > j) && Fj.add(V, bI[V] > AV ? bI[V] - AV : j - bI[V], "Troop limit for " + sI[V] + " pixels", -1, sI[V] + "_limit"), bI[V] = bI[V] > AV ? AV : bI[V] > j ? j : bI[V]
    }
}

function bC() {
    function V() {
        X.width = IS, X.height = mS, (k = X.getContext("2d", {
            alpha: !0
        })).textAlign = Gm, k.textBaseline = pm, k.imageSmoothingEnabled = !0
    }

    function j() {
        f = !1, z = 1, Q = _ = 0, k.clearRect(0, 0, IS, mS);
        for (var V, j, S, l, a, K = QI / GI, e = _I / GI, L = (IS + QI) / GI, A = (mS + _I) / GI, X = 0 !== EI[GV] && rV.Fc(GV), q = YI - 1; 0 <= q; q--)
            if (S = TI[q], !((l = Math.floor(G * GI * v[S] * P[S])) < p || l >= n) && B[S] + P[S] > K && B[S] < L && D[S] + W[S] > e && D[S] < A) {
                V = Math.floor(IS * (B[S] + P[S] / 2 - K) / (L - K)), j = Math.floor(mS * (D[S] + W[S] / 2 - e) / (A - e) - .1 * l), k.font = qm[UI[S]] + l + km, a = k;
                var i = S;
                if (i = l >= F && l < n ? GS.Ti[Lj.gi[i]] + C(l).toFixed(3) + ")" : GS.Ui[Lj.gi[i]], a.fillStyle = i, k.fillText(Ca("switchPlayerInfo") ? UV.jb(bI[S]) : iI[S], V, j), f = !0, 0 < d[S]) {
                    a = V, i = j;
                    var c = l,
                        E = S;
                    if (0 === dI[E])
                        if (nS.Le(Z[E])) {
                            var o = a,
                                N = c,
                                M = E;
                            E = Z[E];
                            var J = .9 * N / nS.ld,
                                s = Math.floor(i - .5 * J * nS.ld - .05 * N);
                            k.globalAlpha = C(N);
                            for (var O = Math.floor(o - .5 * N / t[M] - .4 * N - J * nS.ld), b = 0; 2 > b; b++) k.setTransform(J, 0, 0, J, O, s), k.drawImage(nS.md[E], 0, 0), O = Math.floor(o + .5 * N / t[M] + .4 * N);
                            k.globalAlpha = 1, k.setTransform(1, 0, 0, 1, 0, 0), I(a, i, c, 0, 0)
                        } else nS.Ke(Z[E]) ? (m(a, i, c, Z[E], 0), I(a, i, c, 0, 1)) : (m(a, i, c, Z[E], 1), I(a, i, c, 1, 0));
                    else m(a, i, c, Z[E], 0)
                } else 0 === dI[S] && I(V, j, l, 0, 0);
                if (X && (0 < d[S + jI] || 0 < d[S + 2 * jI] || 0 < d[S + 3 * jI] || 0 < d[S + 4 * jI])) {
                    for (i = V, c = j, o = l, N = S, M = -1, a = 4; 1 <= a; a--) 0 < d[N + a * jI] && M++;
                    for (a = 1; 5 > a; a++) 0 < d[N + a * jI] && (E = o, J = a, s = N, O = d[N + a * jI], b = .8 * E / nS.ld, k.setTransform(b, 0, 0, b, Math.floor(i - .5 * b * nS.ld - .534 * M * E), Math.floor(c + 1.4 * b * nS.ld)), k.globalAlpha = C(E), k.drawImage(1 === J ? nS.md[Z[s + jI]] : 2 === J && 255 > O ? rV.Bc[2] : rV.Ac[J + 3], 0, 0), k.globalAlpha = 1, k.setTransform(1, 0, 0, 1, 0, 0), M -= 2)
                }(a = Math.floor(g * l)) < p || (k.font = zm + a + km, k.fillText(Ca("switchPlayerInfo") ? iI[S] : UV.jb(bI[S]), V, j + Math.floor(.78 * l)))
            }
    }

    function I(V, j, I, m, S) {
        var l = .95 * I / c;
        k.setTransform(l, 0, 0, l, Math.floor(V - .5 * l * i + .8 * m * I), Math.floor(j - 1.76 * l * c - .82 * S * I)), k.globalAlpha = C(I), k.drawImage(ej.Y(4), 0, 0), k.globalAlpha = 1, k.setTransform(1, 0, 0, 1, 0, 0)
    }

    function m(V, j, I, m, S) {
        var l = 1.2 * I / nS.ld;
        k.setTransform(l, 0, 0, l, Math.floor(V - .5 * l * nS.ld - .8 * S * I), Math.floor(j - 1.5 * l * nS.ld)), k.globalAlpha = C(I), k.drawImage(nS.md[m], 0, 0), k.globalAlpha = 1, k.setTransform(1, 0, 0, 1, 0, 0)
    }

    function C(V) {
        return V >= F && V < n ? 1 - (V - F) / (n - F) : 1
    }

    function S(V) {
        var j, I = B[V];
        for (j = B[V] - oI[V] - 1; 0 <= j; j--)
            if (!a(V, --I, D[V], W[V])) {
                I++;
                break
            } var m = B[V];
        for (j = MI[V] - B[V] - P[V]; 0 <= j; j--)
            if (!a(V, ++m + P[V] - 1, D[V], W[V])) {
                m--;
                break
            } for (I = Math.floor((I + m) / 2), m = D[V], j = D[V] - NI[V] - 1; 0 <= j; j--)
            if (!K(V, I, --m, P[V])) {
                m++;
                break
            } var C = D[V];
        for (j = JI[V] - D[V] - W[V]; 0 <= j; j--)
            if (!K(V, I, ++C + W[V] - 1, P[V])) {
                C--;
                break
            } l(V, I, j = Math.floor((m + C) / 2), P[V], W[V]) && (B[V] = I, D[V] = j)
    }

    function l(V, j, I, m, C) {
        var S;
        for (S = j + m - 1; S >= j; S--)
            if (!a(V, S, I, C)) return !1;
        var l = Math.floor(.25 * C);
        for (S = I + C - 1 - (l = 1 > l ? 1 : l); S >= I + l; S--)
            if (!K(V, j, S, m)) return !1;
        return !0
    }

    function a(V, j, I, m) {
        return Lj.L(V, 4 * (I * JS + j)) && Lj.L(V, 4 * ((I + m - 1) * JS + j))
    }

    function K(V, j, I, m) {
        return Lj.L(V, 4 * (I * JS + j)) && Lj.L(V, 4 * (I * JS + j + m - 1))
    }
    var e, L, B, D, P, W, v, t, n, F, g, A, p, G, Q, _, z, f, X, k, q, Z, d, i, c;
    this.init = function() {
        if (f = !1, G = .88, g = .5, A = 1.8, n = Math.floor(.5 * VS), F = Math.floor(.2 * n), p = 8 === kV ? Yj.Vi ? 6 : 4 : Yj.Vi ? 10 : 7, L = e = 0, B = new Uint16Array(jI), D = new Uint16Array(jI), P = new Uint16Array(jI), W = new Uint16Array(jI), v = new Float32Array(jI), t = new Float32Array(jI), Z = new Uint8Array(2 * jI), d = new Uint8Array(5 * jI), X = X || document.createElement("canvas"), V(), _ = Q = 0, z = 1, q = 0, 8 === kV) {
            var j;
            k.font = zm + 100 + km;
            var I = 100 / Math.floor(k.measureText("20 000 000").width);
            for (j = jI - 1; 0 <= j; j--) t[j] = v[j] = I
        } else
            for (k.font = zm + Math.floor(100 * g) + km, I = 80 / Math.floor(k.measureText(UV.jb(AV)).width), k.font = zm + 100 + km, j = jI - 1; 0 <= j; j--) t[j] = 100 / Math.floor(k.measureText(iI[j]).width), v[j] = I < t[j] ? I : t[j];
        for (j = jI - 1; 0 <= j; j--) 12 > sI[j] ? (B[j] = oI[j] + 1, D[j] = NI[j] + 1, P[j] = 1, W[j] = 1) : (B[j] = oI[j], D[j] = NI[j] + 1, P[j] = 4, W[j] = 2);
        if (_V)
            for (j = 0; j < PV; j++) P[j] = 0;
        i = ej.Y(4).width, c = ej.Y(4).height
    }, this.resize = function() {
        V(), j()
    }, this.id = function() {
        for (var V = q = 0; V < PV; V++) 3 != MI[V] - oI[V] || 3 != JI[V] - NI[V] ? (B[V] = oI[V] + (MI[V] !== oI[V] ? 1 : 0), D[V] = NI[V], P[V] = 1, W[V] = 1) : (B[V] = oI[V], D[V] = NI[V] + 1, P[V] = 4, W[V] = 2)
    }, this.Vd = function(V, j, I) {
        0 === EI[V] || 4 !== j && 2 === UI[V] || (V += j * jI, 0 === j ? Z[V] === I && 0 < d[V] ? d[V] = 0 : (Z[V] = I, d[V] = nS.Le(I) ? 255 : 64) : 1 === j ? (d[V] = 64, Z[V] = I) : d[V] = I)
    }, this._ = function() {
        f && (1 !== z ? (wC.imageSmoothingEnabled = !0, wC.setTransform(z, 0, 0, z, 0, 0), wC.drawImage(X, -Q / z, -_ / z), wC.setTransform(1, 0, 0, 1, 0, 0)) : (wC.imageSmoothingEnabled = !1, wC.drawImage(X, -Q, -_)))
    }, this.xf = function(V, j) {
        Q += V, _ += j
    }, this.$c = function(V, j) {
        zj.xf(V, j)
    }, this.zoom = function(V, j, I) {
        z *= V, Q = (Q + j) * V - j, _ = (_ + I) * V - I
    }, this.Ha = function() {
        return 0 >= --q && (q = 4 >= vS ? 10 : 12 > vS ? 5 : 2, j(), !0)
    }, this.ib = function(V) {
        return v[V]
    }, this.Ba = function() {
        if (4 <= ++L) {
            var V, j;
            for (L = 0, j = 4; 1 <= j; j--)
                for (V = YI - 1; 0 <= V; V--) {
                    var I = TI[V] + j * jI;
                    0 < d[I] && 255 > d[I] && d[I]--
                }
            if (2 !== mI)
                for (V = YI - 1; 0 <= V; V--) I = TI[V], 0 < d[I] && 255 > d[I] && d[I]--
        }
        for (V = Math.floor(.1 * YI), I = e + (V = (V = 8 > V ? 8 : V) > YI ? YI : V) - 1; I >= e; I--)
            if (j = TI[j = I % YI], 0 < P[j] && l(j, B[j], D[j], P[j], W[j])) {
                for (var m, C, a, K, t = j, n = !1, F = 0; 8 > F && (C = P[t] + 2, m = W[t] + 2, !(C > MI[t] - oI[t] + 1 || m > JI[t] - NI[t] + 1)) && l(t, K = B[t] - 1, a = D[t] - 1, C, m); F++) B[t] = K, D[t] = a, P[t] = C, W[t] = m, n = !0;
                if (m = !n) {
                    n = !1, F = P[t = j];
                    for (var g = 1 + Math.floor(.02 * F), p = 1; 5 > p && !((C = F + p * g) > MI[t] - oI[t] + 1) && !((m = 1 + Math.floor(A * v[t] * C)) > JI[t] - NI[t] + 1); p++) l(t, K = oI[t] + Math.floor(Math.random() * (MI[t] - oI[t] + 2 - C)), a = NI[t] + Math.floor(Math.random() * (JI[t] - NI[t] + 2 - m)), C, m) && (B[t] = K, D[t] = a, P[t] = C, W[t] = m, n = !0);
                    m = n
                }
                m && S(j)
            } else {
                V: {
                    for (a = B[C = j] + 1, K = D[C] + 1, t = P[C] - 2;;) {
                        if (1 > t) {
                            P[C] = 0;
                            break
                        }
                        if (l(C, a, K, t, m = 1 + Math.floor(A * v[C] * t))) {
                            B[C] = a, D[C] = K, P[C] = t, W[C] = m, m = !0;
                            break V
                        }
                        a++, K++, t -= 2
                    }
                    m = !1
                }
                if (m) S(j);
                else
                    for (a = MI[m = j] - oI[m] + 1, j = -6 * (C = 1 > (C = Math.floor(.02 * a)) ? 1 : C); a >= j; a -= C)
                        if (t = 0 < a ? a : 1, K = 1 + Math.floor(A * v[m] * t), l(m, F = oI[m] + Math.floor(Math.random() * (MI[m] - oI[m] + 2 - t)), n = NI[m] + Math.floor(Math.random() * (JI[m] - NI[m] + 2 - K)), t, K)) {
                            B[m] = F, D[m] = n, P[m] = t, W[m] = K;
                            break
                        }
            } e += V, e %= YI
    }, this.ed = function(V) {
        var j = V + 2 * jI,
            I = d[j];
        return 0 < I && ($V.Xd(50, V), d[j] = 0, 255 === I)
    }, this.Zc = function(V) {
        return 255 === d[V + 2 * jI]
    }
}

function rC() {
    var V, j;
    this.init = function() {
        var I, m;
        V = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States".split(";"), j = "Antin Mark Artem Viktor Pasha Maxim Rodion Yuri Lev Luka Ivan Igor Nikita Leonid Daniil Alexei Boris Sasha Yulia Luda Yana Kira Alisa Polina Mischa Mila Inessa Alyona Alina Anya Anna Maria Sofia Walda Uta Tyra Tanka Svea Saskia Runa Rigmor Ostara Nanna Lykke Kunna Irma Iduna Helga Gudrun Gisela Gerda Gelsa Freya Frauke Ferun Elke Eila Dagmar Ariald Dagwin Eckwin Edmund Eike Erkmar Erwin Falko Frowin Gerbod Gunnar Halvor Irvin Knut Leif Lando Odin Oswin Ragin Rainer Rango Sarolf Thor Ulf Wolf Sarah Emma Laura Chloe Marie Léa Emily Keyla Manon Julie Julia Alice Kim Lisa Kora Clara Sara Lucie Anais Grace Eva Zoe Lee Katie Jade Ines Lily Amy Megan Lucy Elisa Kate Mary Elise Nina Célia Maëva Kayla Elysa Lena Amber Kelly Jenny Lola Mia Abby Ella Diana Fanny Ellie Ana Cindy Elena Rose Erin Molly Park Jane Lina Bella Lou Alex Irene Elsa Leah Holly Maya Linda Carla Anne Paige Annie Jenna Karen Lydia Haley Hanna Wendy Luna Naomi Sonia Fiona Helen Ambre Jess Angel Leila Lara Tina Ann Lauré Chen Daisy Paula Iris Ruby Minji Marta Sam Erika Nora Nadia Eve Erica Ava Wang Choi Yujin Jin Yang Hina Beth Lucia Faith Jiwon Adèle Alexa Min Flora Nancy Lili Lexi Cloe Hana Lin Kenza Lise Li Mina Angie Lotte Sandy Vicky May Jamie Joy Jeong Tara Sally Merve Diane Maddy Lilly Alix Zhang Gabby Abbie Liz Ellen Rita Olga Dana Elif Maud Sunny Joyce Liu Jieun Rosie Becky Jung Ilona Kylie Ruth Kat Han Nikki Kang Tania Dasha Cathy Aline Jo Ally Lilou Sujin Tanya Amina Yu Aya Katy Becca Rosa Paola Anita Sumin Betty Subin Tessa Heidi Tori Lila Imane Yoon Allie Farah Ciara Gina Yejin Song Susan Niamh April Izzy Aude Liza Salma Ivy Elina Liya Sue Gwen Maia Mimi Mandy Nana Sanne Hope Ariel Eliza Daria Yuna Evie Aimee Avery Agnès Stacy Jisu Madi Riley Carly Lia Irina".split(" ");
        var C = "K ; Y;E ; Z; z; s;S ".split(";"),
            S = "Kingdom of ; Kingdom;Empire of ; Empire; Dynasty; Sultanate;Sultanate of ".split(";");
        for (I = V.length - 1; 0 <= I; I--)
            for (m = C.length - 1; 0 <= m; m--) V[I] = V[I].replace(C[m], S[m])
    }, this.qc = function() {
        var I;
        if (VI.isActive && VI.ta.Ji)
            for (I = PV; I < jI; I++) iI[I] = VI.ta.Ji[I % II];
        else if (9 === kV) {
            var m = cj.random(),
                C = j.length,
                S = PV + Xj.ya;
            for (I = S - 1; I >= PV; I--) iI[I] = "[Bot] " + j[(I + m) % C];
            for (I = S; I < jI; I++) iI[I] = "[Zombie] " + j[(I + m) % C]
        } else if (nV)
            for (m = cj.random(), I = PV; I < jI; I++) iI[I] = V[(I + m) % V.length] + (I >= V.length ? " " + Math.ceil(I / V.length) : "");
        else
            for (m = j.length, C = cj.random(), I = PV; I < jI; I++) iI[I] = "[Bot] " + j[(I + C) % m]
    }, this.rc = function() {
        var V;
        if (Yj.Wi && !nV) {
            cI = Array(PV);
            var I = PV,
                m = j.length,
                C = cj.Xi();
            for (V = 0; V < I; V++) cI[V] = iI[V], iI[V] = j[(V + C) % m];
            iI[GV] = cI[GV]
        }
    }
}

function hC() {
    this.Yi = [], this.Zi = [], this.init = function() {
        this.Yi = [], this.Zi = []
    }, this.Ba = function() {
        0 <= this.Yi.length && this.$i(this.Yi), 0 <= this.Zi.length && this.$i(this.Zi)
    }, this.$i = function(V) {
        var j, I = -1;
        for (j = V.length - 1; 0 <= j; j--)
            if (V[j]._i--, 0 >= V[j]._i) {
                I = j;
                break
            } for (j = I; 0 <= j; j--) V.shift()
    }, this.Kc = function(V, j, I) {
        return this.aj(this.Yi, V, j, I)
    }, this.bj = function(V, j, I) {
        return this.aj(this.Zi, V, j, I)
    }, this.aj = function(V, j, I, m) {
        var C;
        V: {
            var S;
            for (C = I.length - 1; 0 <= C; C--)
                for (S = V.length - 1; 0 <= S; S--)
                    if (V[S].pd === I[C] && j === V[S].type) {
                        C = !0;
                        break V
                    } C = !1
        }
        if (C) return !1;
        if (m)
            for (m = I.length - 1; 0 <= m; m--) V.push({
                pd: I[m],
                type: j,
                _i: 384
            });
        return !0
    }
}

function $C() {
    this.cj = 0, this.dj = null, this.ec = function() {
        this.cj = 0, this.dj = []
    }, this.replace = function(V) {
        this.dj.push(V), Fj.add(V, 0, "Replaced by BOT (left/surrendered)", -1, "bot"), tV++, UI[V] = 2, Lj.gi[V] = (Lj.gi[V] + 2) % 4, V === GV && (Vj.show(!1, !1), yV.Of()), zj.ed(V)
    }, this.ri = function(V) {
        var j;
        if (2 !== UI[V]) {
            var I = this.dj;
            for (j = I.length - 1; 0 <= j; j--)
                if (I[j] === V) {
                    I.splice(j, 1);
                    break
                }
        }
    }, this.Ba = function() {
        nV || (30 === this.cj && this.ej(), this.cj = (this.cj + 1) % 60)
    }, this.ej = function() {
        var V, j, I, m = this.dj;
        for (V = m.length - 1; 0 <= V; V--) {
            var C = m[V];
            if (Qj.fa(C)) {
                var S = Kl(20 * bI[C], 100);
                60 > S || (0 === hI[C].length ? !oV.check(C, 2) && fV && h(C, S, 0, 0) : fV ? (I = S, i(j = C, !1) || c(j, !1) ? (G[j] = 1, E() ? U(j, I) : H(j, I, O())) : h(j, I, 0, 0)) : $(C, S))
            }
        }
    }
}

function HC() {
    function V(V) {
        return I[V].connected && j[V].fj()
    }
    var j, I;
    this.sh = 4, this.th = this.sh - 1, this.Og = this.sh + this.th, this.gj = null, this.hh = this.uc = 0, this.init = function() {
        var V;
        this.gj = Array(this.sh), this.gj[0] = "territorial.io";
        var m = cj.Xi(0);
        for (cj.mc(0), V = 1; V < this.sh; V++) this.gj[V] = bV.Wb() + ".com";
        for (cj.mc(m), j = Array(this.Og), I = Array(this.Og), V = this.Og - 1; 0 <= V; V--) I[V] = {
            connected: !1,
            hj: 0,
            ij: !1
        }
    }, this.Ud = function() {
        return this.hh < this.sh ? this.hh : this.hh - this.th
    }, this.Ba = function() {
        for (var V = this.Og - 1; 0 <= V; V--) this.isConnected(V) && pS.lb > I[V].hj + 15e3 && sj.jj(V, I[V].ij)
    }, this.zf = function(V, m) {
        return I[V].connected ? j[V].fj() ? (j[V].kj(m), j[V].isConnected()) : (j[V].lj(), this.connect(V, m), !1) : (this.connect(V, m), !1)
    }, this.connect = function(V, m) {
        I[V].connected = !0, I[V].hj = pS.lb, I[V].ij = !1, j[V] = new _l, j[V].init(V, m)
    }, this.kj = function(I, m) {
        V(I) && j[I].kj(m)
    }, this.mj = function(V, j) {
        0 === j ? RV.requestData() : 3 > j ? sj.kg(V, j - 1) : 3 === j ? sj.Oh(V) : 4 === j ? Ij.Ug(V) : 5 === j ? V === this.uc && sj.nj() : 6 === j ? sj.oj(V) : 7 === j && sj._h(V)
    }, this.isConnected = function(V) {
        return I[V].connected && j[V].isConnected()
    }, this.send = function(V, m) {
        I[V].hj = pS.lb, I[V].ij = !1, j[V].send(m)
    }, this.Ne = function(V) {
        I[V].ij = !0
    }, this.close = function(I, m) {
        V(I) && j[I].close(m)
    }, this.pj = function(I, m) {
        Cj.Rg(m), V(I) && j[I].close(m)
    }, this.Vg = function(V) {
        for (var j = this.Og - 1; 0 <= j; j--) this.close(j, V)
    }, this.qj = function(V, j) {
        for (var I = this.Og - 1; 0 <= I; I--) I !== V && this.close(I, j)
    }, this.rj = function(V, I) {
        if (j[V].lj(), 0 === V && 4211 === I.code) {
            if (jj.ke) return;
            var m = document.createElement("div");
            m.style.position = "absolute", m.style.top = "0", m.style.left = "0", m.style.width = "100%", m.style.height = "100%", m.style.background = "rgba(0,0,0,0.9)", m.style.display = "flex", m.style.justifyContent = "center", m.style.alignItems = "center", m.style.flexDirection = "column", m.style.color = "white";
            var C = document.createElement("h1");
            C.innerText = "BetterTT is not yet compatible with the newest version of the game.", m.appendChild(C);
            var S = document.createElement("div");
            S.innerText = "Please wait for an update or play the game in offline mode. Updates should normally be available within a few hours. Thank you for your patience.", S.style.marginBottom = "20px", m.appendChild(S);
            var l = document.createElement("div");
            l.style.display = "flex";
            var a = document.createElement("div");
            a.innerHTML = "Play in Offline Mode", a.style.background = "rgba(255,255,255,0.2)", a.style.padding = "10px", a.style.margin = "10px", a.style.cursor = "pointer", a.onclick = function() {
                m.style.display = "none", jj.ke = !0, pS.request = !0, jj.init()
            }, l.appendChild(a);
            var K = document.createElement("div");
            K.innerHTML = "Switch to normal version", K.style.background = "rgba(255,255,255,0.2)", K.style.padding = "10px", K.style.margin = "10px", K.style.cursor = "pointer", K.onclick = function() {
                window.location.href = "https://territorial.io/"
            }, l.appendChild(K), m.appendChild(l), document.body.appendChild(m)
        }
        Cj.Kb(V, I.code)
    }
}

function UC() {
    for (var V = YI - 1; 0 <= V; V--) 0 === EI[TI[V]] && TC(V)
}

function TC(V) {
    for (YI--; V < YI; V++) TI[V] = TI[V + 1]
}
var YC, wC, RC, uC, xC, yC, VS, jS, IS, mS, CS, SS, lS, aS, KS, eS, LS, BS, DS, PS, WS, vS, tS, nS, FS, gS, AS, pS, GS, QS, _S, zS, fS, XS, kS, qS, ZS, dS = 0,
    iS = "",
    cS = !1;

function ES() {
    ZS = 2, uC = 2526, RC = "1.83.3   3 February 2023", (Aj = new Va).init(), cV = new Y, EV = new VV, oV = new jV, NV = new IV, MV = new mV, JV = new CV, sV = new SV, OV = new lV, bV = new LV, rV = new KI, hV = new eI, $V = new LI, HV = new DI, UV = new um, TV = new xm, YV = new VC, wV = new mC, RV = new CC, uV = new SC, xV = new lC, yV = new aC, Vj = new KC, (jj = new nC).ke = !1, Ij = new gC, mj = new AC, (Cj = new GC).ih(), Sj = new QC, lj = new fC, aj = new XC, Kj = new qC, ej = new ZC, Lj = new dC, Bj = new iC, Dj = new $l, Pj = new Tl, Wj = new Yl, vj = new wl, tj = new Rl, nj = new ul, Fj = new xl, gj = new yl, pj = new ja, Qj = new sC, _j = new OC, zj = new bC, fj = new rC, Xj = new MS, kj = new Sl, qj = new ll, Zj = new al, dj = new nl, ij = new Fl, cj = new Al, Ej = new Gl, oj = new Ql, Nj = new Jl, Mj = new sl, Jj = new bl, sj = new hl, Oj = new pl, bj = new eC, rj = new zC, hj = new rl, $j = new ym, Hj = new _C, Uj = new HC, Tj = new cC, Yj = new tl, wj = new Ml, Rj = new $C, uj = new MC, xj = new hC, yj = new NC, VI = new JC, g = 8, A = 0, p = new Uint16Array(g), cS = !0, 12 <= (eS = (KS = "undefined" != typeof Android ? Android : null) ? KS.sj() : 0) && KS.tj("6685097465"), lS = !1, window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (lS = !0, window.webkit.messageHandlers.iosCommandA.postMessage("prepare ad 5907904081"), aS = "undefined" != typeof mwIOSdataX ? mwIOSdataX : {
            username: "iOS User " + Math.floor(1e3 * Math.random()),
            id: Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)),
            zoom: !0,
            uj: !0,
            Fe: "0",
            fe: "0",
            password: "0",
            vj: !1,
            wj: !1,
            xj: !1
        }), qS = (new Date).getTime() % 1024, BS = function() {
            try {
                return window.self !== window.top
            } catch (V) {
                return !0
            }
        }(), Oj.init(), Bj.init(),
        function() {
            if (PS = Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)), lS) PS = aS.id;
            else if (12 <= eS) {
                var V = KS.yj(20); - 1 === V ? KS.Wh(20, PS) : PS = V
            } else 5 <= eS ? 2 === (V = KS.yj(2)) ? KS.Wh(2, PS + 3) : PS = V - 3 : PS = Bj.i(1)
        }(),
        function() {
            if (lS) LS = aS.zoom || xC < yC;
            else if (12 <= eS) {
                var V = KS.yj(21); - 1 === V ? (LS = 100 >= KS.zj(0) || xC < yC, KS.Wh(21, LS ? 1 : 0)) : LS = 1 === V || xC < yC
            } else 5 <= eS ? 2 === (V = KS.yj(1)) ? (LS = !0, KS.Wh(1, LS ? 1 : 0)) : LS = 1 === V : LS = 0 === Bj.i(4) || xC < yC || Ca("zoomInterface"), document.getElementById("zoomInterface").checked = LS
        }(), 14 > eS || KS.h(23, '<!DOCTYPE html>\n<html lang="aG">\n' + document.getElementsByTagName("html")[0].innerHTML + "\n</html>"), document.addEventListener ? document.addEventListener("contextmenu", (function(V) {
            V.preventDefault()
        }), !1) : document.attachEvent("oncontextmenu", (function() {
            window.event.returnValue = !1
        })), SS = window.location.hostname, DS = 0 <= SS.toLowerCase().indexOf("territorial.io"), (Gj = new Ia).load(), document.addEventListener("keyup", Gj.Aj), document.addEventListener("keydown", Gj.Bj), document.addEventListener("visibilitychange", NS), vS = 10, TS = new Il, WS = new Ol, tS = new PC, nS = new PI, FS = new zl, gS = new fl, AS = new BI, (pS = new El).vc(), pS.init(), GS = new Xl, QS = new gl, (kS = new X).init(), (_S = new WC).init(), zS = new BV, fS = new tC, XS = new vC, om(), nI = 3, (pI = new kC).init(), cj.init(), _j.Si(), qj.init(), kj.init(), mj.init(), yj.vi(), Yj.Kb(), Uj.init(), RV.init(), fj.init(), YC.addEventListener("mousedown", Nm), YC.addEventListener("mousemove", sm), YC.addEventListener("mouseup", hm), YC.addEventListener("click", $m), YC.addEventListener("mouseleave", rm), YC.addEventListener("wheel", Rm), YC.addEventListener("touchstart", Mm), YC.addEventListener("touchmove", Om), YC.addEventListener("touchend", Hm), YC.addEventListener("touchcancel", Um), YC.addEventListener("dragover", Tm), YC.addEventListener("drop", Ym), FI = !1, ej.init(), la("cookieStatus", !0), pS.request = !0, setTimeout((function() {
            yS(2, 14071)
        }), 0)
}

function oS() {
    cS || ES()
}

function NS() {
    "hidden" === document.visibilityState ? pS.Cj() : pS.ci()
}

function MS() {
    var V;
    this.init = function() {
        V = [], 9 === kV && this.Dj()
    }, this.Dj = function() {
        var V = [8, 51, 68, 88, 138, 178, 313],
            j = [35, 330];
        for (this.ya = 0, this.za = [0, 0, 0, 0, 0, 0], PV <= V[0] ? (this.ya = j[0] - PV, this.za[1] = j[1] - Kl(j[1] * PV, V[0]), this.za[0] = 512 - this.za[1] - j[0]) : PV <= V[1] ? (this.ya = j[0] - V[0] - Kl((j[0] - V[0]) * (PV - V[0]), V[1] - V[0]), this.za[0] = 512 - this.ya - PV) : PV <= V[2] ? (this.za[0] = 512 - V[1] - Kl((512 - V[1]) * (PV - V[1]), V[2] - V[1]), this.za[1] = 512 - PV - this.za[0]) : PV <= V[3] ? (this.za[1] = 512 - V[2] - Kl((512 - V[2]) * (PV - V[2]), V[3] - V[2]), this.za[2] = 512 - PV - this.za[1]) : PV <= V[4] ? (this.za[2] = 512 - V[3] - Kl((512 - V[3]) * (PV - V[3]), V[4] - V[3]), this.za[3] = 512 - PV - this.za[2]) : PV <= V[5] ? (this.za[3] = 512 - V[4] - Kl((512 - V[4]) * (PV - V[4]), V[5] - V[4]), this.za[4] = 512 - PV - this.za[3]) : PV <= V[6] ? (this.za[4] = 512 - V[5] - Kl((512 - V[5]) * (PV - V[5]), V[6] - V[5]), this.za[5] = 512 - PV - this.za[4]) : this.za[5] = 512 - PV, j = this.ya, V = 0; 6 > V; V++) j += this.za[V];
        if (j > vV) {
            for (V = this.ya = 0; 5 > V; V++) this.za[V] = 0;
            this.za[5] = vV
        }
    }, this.qi = function(j) {
        V.push({
            pd: j,
            time: 14 + cj.da(20)
        })
    }, this.Ba = function() {
        var j;
        if (9 === kV)
            for (j = V.length - 1; 0 <= j; j--) 0 >= --V[j].time && (zj.Vd(V[j].pd, 0, 46), V.splice(j))
    }
}
var JS, sS, OS, bS, rS, hS, $S, HS, US, TS, YS, wS, RS, uS, xS = 15;

function yS(V, j) {
    if ((V %= xS) !== $S || jl($S) && j !== HS) {
        var I = performance.now();
        if (US = !1, TS.yh(), cj.mc(V), $S = V, HS = j, jl(V) && (qj.getData(V).seed = j), function(V) {
                return V >= 10
            }($S)) ! function(V) {
            var j;
            10 === $S ? j = "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86fRU8Av6gRK76AeCE66hQ9IAw6iQ7IUu6kQ6IUu6lQy87EQmQofAK6Ak6nQUdA7F9D56nQAKAUQAKBA9F8D56nP9A9BKIBe57DaqQAGBeIBoSAKBAKjDGsQAFB6AySA7BUiDQrSKFCKCA6AyEDUcAKD6rV6AyFAoBCUc6yV6AyOB6C865WkBAEAKZ655X7Aod66M6a69Z967W5967W5967W5967W5867g5867g5867g5767q56675Z6675Z5676Z5676Z5676Z5676Zu77U6AKu678UyFEk78UyID9679UyID768L9yBA8A8DABAu8qEA8C769WEA8Cu95UoICG99T7AKGA9B9699UoKB77AUoLB56dAe69UyMBucAe69QUCBUCC7B6BGbAe7B58BABAeEAyYCAI6ZAe7B57B6AeHCUXAabAe7L57B7AKJCQ5UEHB57C7CQ5UEHB56C8CQ5eDHB57AUBCoV65eEG9QAZB965oEG9QAZB965yDG9QKZAUBAKCBa5yDG9QKZAKGAKEA665yDG9QUmAk5yDHB56AUED8AkxAUEAe7B565oAeCALyA7HV575oA8AyBOKGHf585qA8AKEN9Ay7p585sBVmAy7p595sBVkAo76P95uBLjAo76P9AKCAUB5rA8N6AK78Q55sA6V6Q65tAKQAMCQ756AGT8RF58AKBAz96RP6AFTz7P6oBTz7b59Rl58Rv57R675z7975V7975V7875f8HzSlwSbxSbxSbxSbxSlwSvvS56ZApRSuYA6L7S66WA6L7S656yBFeJL7S656yBFeIL8S656yDE8A9MB8556yEEoNMB8t6yFEAPMV8t6KJD7B8MV8t56BokB6Mz8t5UQD7B6M6S65yAyIAUlB7M6S65yAyuB7M7S75xAovB7M7S65yAeuCLZS75xAUuB6AoBM6S75xAKvB6NL87596BzhS759oPNz8959UPNz89589B8Nz9FsAKrB9Np9PqAUpCLiTV6oClyCD9C9M8Tf6oCloCD8DVaTz6UCloCDomMp9p6oCleBDUqMf9p6yClUBDUrMV9p67AN97AKFEABAfWTj66AKFD8M8TACAZ6yDAUnM8TACAZ66ELeT556ypNB9j67ELeTZ67EVeTP6ytNB9F67EffTF66EpfTZMAyDAUpEzfTZHByoE6NL9jDBKFAUpEfhTjCA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6Ao8i58m7Ae8Y59m7AK8O6O67us67us65u6ui68r6AKau8q6AyEAUau9qUUCE69p9B8AeFB7u8qASAyEB6u6qUSA7AUQu6qyPC5u6qyQC5u5q8BoZuscByZuifBAcA8A5s9rKHDKIA5s8r6AUmAUCtO78ti78AeCs9v7AUDs9wiwwsvwiwwsuw6s5w5s6wsuw6s5w7AyBr8xslx5r5x9rY99rZCq8ysay6q6y6qtJqPMBeGoFgP6BWe5lPKQW65pO7B8W55rOoXV95zN7C7V655VbEMK55pZEWI557MKtU8557MKuUj66LowP6AeFA7DF69LKyPySCZ8VDFL5oWB858pBFVyC8B5588J7FpqAeEC9Bt89Jy68M6EAJ59e9o7BYEUD598Je7pU6sJU76AoOKQsJU96J96sJU96J66vJU96JkyJK97Ja5U89J9B6AK7k5o88J9BKHAeFA9AK5k5y88KAKC6AeDEu58I7KKBEAs658I6OeGAoh659Iz5yf66K86PeFA7B666y8z68Bk6y8z7KH668Iz7eF669IwwI58vIwyISzIS6K7S66G587U59X9AQhF8X8AeqAZ9U5qlAopAj9e5gkAypAj96E9X7A6EAD6BEgmA7D9AkBEWoA6D8AuED8YKHD7AkID5YKHD7AkJDqrA6D6AkKDWsA6D6AkLDCtA7DyD6MC8Y8A6DoD6OC5ZAHDUE6NCqzA8DAE6QCM5eJC8AkTB8ZoKC7AkUB6ZyKC6AuYA9Z8BAZA56ZA7Z9BAaA589KJC6A589UIC6Aw9eJCoE6bAM67A8CoE6bAW67A7CoE6bAg66A9CUF897A8CKE899A9B9AeDAUGAS9AJB7A9AKH889A9B6B8888BKOCI87BKOCI88BKMCI89BKKCS9KLA7Cc9ULA6Cw9Un89Uo89Kq889Em88E5887E688yu886E5887E6887Ew87E5887E5887Ew88E5886E6886E788ov88ow88ov88yv88ow88ew88ey88K5m8Az88Az88AzH" : 11 === $S ? j = "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Fs69FKxJ6556KX78Fs7AxFATAK75558KX78Fi7KuFeSAU7t59KN8AzvKuFyQAU7t6BBmAxvetF7BoDHj6U99mUvvetF8BeEHZ6e98metvUvF9BUEHZ6e98monv7E7GKJAy7Z6o7UBC5mocAKGAUCv7C7IKHA6Hj6o7UCCr86B8BUCwKZIoGA6HZ66HUDCX88B6x7Ce8yFA6AeBG8567HUHB8nAHy6CA8yFA7AUCG8L6AOyHeIB5nUEy9B6I8AeJAUCG7L7AOyHyJBJIBe9ADA8AUDG6L8AOyH79aBK9UCA7AUEGzTAYxH99eAVBAyDG6L9AsvIJ99AAhAKHGpUA5s7IJ99AAoGpVA6sy8T99AAmAoCF9MUGsy8T99AAfAoJF8MeGsy8T99AAdA8A7F7MoFs6Id99AAcAyKF7MyEs6Id99AArF6M6AsuIx99AApFzdAYuI6999AAnFzcAYvI6999AAnFpcAeDAOrI6999AAmFpdAUEAOrI6999AAmFpdAoBAYrI6999AAlFpeAoBAYpI8999AAlFpeA6sU87999AAmFfeA7sU86999AAoFBgA7BACrK85999AAoE9NUJA7AsgIx99AAoEBpBKDA5re8x99AAqCACBpqB9ro8n99AAtB7AeMOeTr6IT99AAuAKDBKDAUBA9OoTr7H9999AA5yGA8A8OoUr8H5999AA59AoKAzuB7sU69999AA78AVwB7se58999AA9ABOyUso57999AChB8s9F8999ACgB6tK58999ACgB6tK59999ACgBs5U59999AA7eCP8Bi5U58999AA7eCB9AVnBO5U59999AA9oCN9BE5e59999AA9oBOAIt6F9999AA9eBOAHt7F9999AChA6t9GJ99AA7eBOUCBeGuAuAeK999AA7eFBKDMoEBAHuKuA6A6999AA7oGAyIMeFAUCAKBAeGuot999AA8yTMeKAeHuyu999AA8oSMeKAoFu8AoBEJ99AA8oSMULA6AO7KDAen999AA8eRMAOv8AKEEJ99AA8eRL8B5v8AeFD8999AA8eQL8Bs8AEAymAyB999AA76BpTBs8KEAeqAeC999AA7oOL9Bs8UDAyqAKE999AA7UOL9Bi8yCAypAeD999AA7UOL8BY87AeEEKDAn99AA7UNL7Bi88AeFET99AA77A9AUBL6Bs89AoEEd99AA76A9AUBLoNxeDAeq999AA77A6L8BtAET99AA79AzQB5yUo999AA8KBL6B6yon999AB9yUyen999AB9USy7ET99AB89B7zKo999AB87B7zon999AB8yRzyo999AB8oRzKCAKBAKn999AB8eSz8D9999AB8ATzyCAUk999AB8KUz6AUCDx99AB8KU5XDd99AB8UT5WDn99AB8KU5UAKCAKBDT99AB8AU5WAKDDT99AB78CFWAoCDT99AB78B85YAoDDJ99AB77B85ZAyCDJ99AB8KM5ZA8AKf999AB8UI5bAKCD8999AB8eD5eAKDD9999AB7yC5tD6999AB7eC5vEJ99AB67AjuEn99AHOEn99AHQET99AHQET99AHUD7999AHRAKDD6999AHLAeDD9999AHMAyCD7999AHNAyBD7999AHSAKCD5999AHTAUBD567UB999AAuD767UC999AAsAKBAyBDQ7UDAUD999AAoAyBDQ7UI999AAoAoDDQ7AF999AAtAKBAUBDa7ABAoC999AArAKCAKCDT99AHXAKDDJ99AHVAUDC8999AHZAKDC8999AHfC5999AHaAKDAKBC5999ABvAP8KCAoW999ABuAP8UDAKY999AHiCx99AHeAKECeyAT99AG76AKHCUsAoBA5999AG8KWEeEAUG999AG8eBAUSEUDAKG999AG76AKGAKEB8EADAUE999AG89CKlAUEAn99AG8oBAUU999AHmB9999AHkAKDBoDAd99AHmBUFA5999AHjBUDA9999AHkA9AeJ999AHhAKCA9AeJ999AHkBAIA6999AHgBKHA7999AHhAyCAoBAKCBT99AHfAUBAUHAUBBn99AHgAKCAUBAKDAKDBVoAn99AF96AKHBVpAn99AF9yBAeROAE999AF9KYOAD999AF9oZN6Ad99AF98CT99AHgAUCBn99AHtBn99AHuAKCAn99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AGIAd99AJ99AJ99AJ99AJ99ACdAd99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AH7oE999AH5eB999AJ99AJ99AFGAKBAT99AJ99AJ99AJ99AJ99AC9KB999AH5UBAoF999AHtAyCAd99AHtAyCAd99AHvAx99AHxA7AUC999AHlAUFA9AUF668Ad99AA6ABAeCAyJAeE668Ax99AA57AeCAKEA7AeBA7AQ67Ax99AA56AyFA6999AHrAKBAKDA7999AHwA88mAdFBHDAVgAxFA97FALfA5898AKHA969KEOAF899AKGA98kAxGBE89A8YeII7AnGBoCAs76B7TUOC8Bo8yF9EA9AKDAeCAKBvyUN6AUyCUVB6G7CxDA9AeCv7C7NUDE8DABAULB7AeED9AyNDw9yJAyCvydNADA7BoDAoEAyBAyDD7A8C7CKFAeEAeHBKr88ACA6BE8KbNAwAKoAKhB7CyKFABAc7UDAUCAKIAUBveCAycM6M9AKoA7F6AKE86yEAKLvoHAUhKoIAguAKE858AeCBO6yDA7Ee9yEAM6m58AoDA9u6AoGFo8g6686UCAoCAUGueGAU7o65bS69A6t7KoubyDAm6UGtVJD9c786yHszND7c886yHA6AOkL6DrABKC8sA7AoCoKFC6L9DhCBKD8cAUNB5n8A6CfUD5eAFAKGAcbA7BUPn7A7CBWDrP8aA9BUOAyCm8BUQMUggABAKCAwRBAFAUCB8AeCm6ByEAUIMUch58MAUCBADCyBAN8eSAUDA8MAZAKBiIMAKDBADCr8UbAKCAVWCXv799AoMBADCr7V58AKDB7jl99AyMBADC5c7AUOAUKAeEA6D7QUTj68RBKDCg8KDAeEBeKAKTCf69CD6ABAcIByDCWaAKLAKYAUOBoIEAHR8AUCBr6wAAeGByDCqjAecC6A5W6AKDBX76AKB78eIBUKAeZWAEA9AoUa7BD85777A8BeMAeaUeDBAFDC69BD8779UTAeZUeGA6AyOAKMbAMm9787AKCCKDCp96AUEA7AyHAKPAKDAq7AOnKDAR78AUBCyDCz9oDAUJA5d9Br9568yCA6AK8yLAUQAoXT7foNn667yIAeDAUBAKEIyGBALAySUXMBX9u79Cy96BeGCp95fUIn669oNG8AoTB6A8Cf9rQAN9969UCAKCByCBeCHAOA9Cf9bR68oDA7A6DACA6Ao8UbSvT68ABAyEBeEC6AUDA6FKGCUiR87S68oBA6CAeA7AUCA6AKUAeQA6AUBB6D7R87P6CA7GAFCU68B9A7AUCA8A6AKBA8D9R77W6DA9BABE6A8De5yRA9AoEA7AUEE9RbL6UA9AoKEAJB9A8Ae6yIB7Ao58RHI6cA8AoPA8AUHAUPBKSQB7KGAk9ulAeGBUJAUHAyRA7CL56R869QRAeLAoRAyZAyHA6A7AUXPp5yDB969aHAeZAKhCKGA6D7O8P6AUR69kEBAFAoKGUEAymOUBAf58AUL6896LKKnOKCAV7Q886FK8AyDBKOA9N8Ru8aMc9RQ8kEd8RQ8aBd8Q9AoD68F97Z6AKrQu9j9KHAM5yHDf587B59eKAM5eJCp6HF6IZeKCB5vJ6OZV777M6AAoMZp7RN577AKEBKQAyFZ6Q57QBKC56yRAeGA9az577VA9BF6KcAq77OvWA9AeDAj6q8AHCVp7Y585cKQA7JeND57YA8AZ6yEC5bzCB9DRa57oHCM5oGB7DeEGeVC97bAUB57UJB6Z9A8BUdA7GeWC87R588BASZ7EeJGoYC77I6AA9Cq5UmA8G7CoeCUF6696MAyiY7AeOB6A7G8CokA8A967a6C58B6Ao7AaE767k7MxFeFDAdE966668MpFyGC8C8F666D68" : 12 === $S ? j = "ANAAHvAE6ADs8AmvAYvA68uAOtAwyAYsAm5UDAyEreC85oEAKIrAC85yNq9Am57A6AUFq6Am6ADAoEq6Ac68A5qyC868AsZAm68AsZAc69AsYAm7ADqoD869AsYAc7KCqoD87ADqoD87KCqoD87KCqoD87UBqyC87UBqyC87UCqeD87eCqUD87oDqAC87yFp7AiZAOzA5pyDqoDtUFpUEqoDteGCUDmyEqeDt6A6B9Ar8oFqUDt8A6B8Ar8oEqeCuAHB6Ah8yDqeCuUIBoDmoDqoCueIBeDmoC89KJBKDmeC89eKA9Ah8eC89oLA6A5mKD89yLA6A5mAD896BAGA6l9Ac99BADA7l8Am99B9l9AnBB7l8AocAc7URl7AedAm7URlyEC9Am7eRloEC9Am7yQleEC9Am76B6lUD9KB6lKD9MB5lADFAD86APk9AewA6E6AcNBr68AewA7EKG8NB6k6AUwA8EUD8QB5k6AUxA7EeC8QB6koDFAC867AKBAUCBD6KE9bBN58AnlAh57A57rAp9ACj6A57rAf9UCjyE7pAp9yDjUF9qAhyAxsArvAnvArtA59vA7iAF95UDh9A5WAE7fAoDANgAgWAvgA7hUDWUFf8AONA5heCWoDf8AYOA5hUCF8As8UCpoIhACF9As8KBpyBAUFhABA8AowAnCA5g7AeIAoyATEAhaAeJAn57AhZAd7KDgeCu9APDAhWAO68AtCArUAY66A6yyCf9AO6yHy7AW98AeQAi6KJy9AW9UGAUCBoDt7A8zoDcyBAeDA8AeMAKEAOtAKGA9z7AW8eGBUDBABAeDr9B85UAq8KEB6AeIAUDAOpA95eAq78AoTAKJA7r9A75jAUNAW6UDCKCA6AUFAd8KIA6AW6KDCeCAoCA7AoFA8A6AUCAT5yCAeDAoCaUCCyFBUHA6AeDA896ADAUBaUCF8A7AeD96KEaKCGAEA7An6KCZUDAUFHeE96ABZUJH6An59AW5UIH8Ax57AM5UJH9AobAnZAM5eHIUCC7AnZAW5UHIeCC6AxZAMzA7I6AUYA59YAMzA6I8AeCAKUAxXAM5UGI9AeBAKUAKCATXAWzAe9oD9vAWyAozAUqAdvAWyAozAUqAdvAWvA7J6ATuAguA8JyC9sA5YeKJ6AKCAToA7YeKJ6AKDATnAWxA8J7AKDAdmAWxA8J7AKEATmAgwA7J8AKEATmAUBAMvA7J8AdqAeBAMvA9J6AdqAWxA9J7AdpAWwA7BUCI6A59mAWwA6BAGI8AnmAWvA6K6AdkAWhAUNA7JKBBoC9kAMhAUNA7JKBByC9jAMhAUNA8JACByC9iAMhAUNA8K9AThAMhAUMBBHAngAWgAUKBVIAxfAMgAeIA9AKDLAD9eAMgAoEBKDAU5oCF6AdcAWfA6AKMAoCFyBF8AdaAMgBeBAKBAKGAU5oDF8AdZAMeBo67Ae59AdYAgbBo68AU6KC9WA5WyOHABGUB9AA6ByGWoPNoB887AUEAUEA8BeHWeONyC88UHAeEAUOA6A8WUMAKCN6Ac8KfAKMWKMOKCRyDBeE68ouV7BLuAVrAKgAeFAKDA668oVAoVVKHAeFO9AzhA9AKCC7B968eRA9CCIAoLAV5oCNAPC7B968eQBKRU6Af7UBM6CAaCG8UNAKCBUPUoERyBMoVC6Ca8ADAoDB9Bf98A7R9AVUCAdCu79AebAz99A7S6ALTCUcCu79AecAV9ALNKCGABL9CoHAoPC5678AgRAfqAe6ABL6AKBCyGAyCAeIC6677AqOApuAU59ALODKIA8A6C6677AgMApzAK58AVNDUJA8Aoa677AgJAgPAfJDyCB6AKc67yDU9AWSAfID6AKv67eDU7AgVAVCAeCIuHAK6eEU8AMYAVAJQFAU6KGU6AWaAVAJGFAU6KFU7AMcAU97AKBJQEAK6UDRAEDoBXADJo9uEAU6ADQ6BAgAMgAe9e9uFAK6ADQ6C7BoBXoFI9J56FAU57Az66BAQBKCAWoAU87J56FAU56A6QoMC6AqpAU87J66FAU5oFQyNC9A8XyBIo996GAU5eDPeBA9B7D6BgXAK8pA557AKUAKaAU5eCPAgE8A6V7AU8VB556AUUAUYAe5eBOeBAojFKGVoDIBC556AUUAUYAU5eCM6B9AUkF6AqMA6H6Kj5yCCACCeCFeCM6CABD6F8AgPAo7zDAUB55eBCACCUCFoCMy58GKCVyCHpEAUB55eBCABCeCFoCMo56AUCGUEVUCHABALI55eCB9AKXAU5eDMe5e7eBVoBG8K9AKB55eDB7AUXAUwA8MezH6AWMAU67LF56AURAKXAUnAUFAoCAVSAKFFK78AWMAK67K9557AoOAUXAUjBfWAoDFK79AqKAU66LF57A6BKCA8AKNAogAfgA7AKyIUFU9AK66LF6KEAoJAoEAoBA7AocAzfGA87AWIAUJAK5zK56UYAUHAUFCyDNy57JUBU9AKJAU5pJ56eqCAEN6FK99AMJAUKAK5fJ56UsB6ApmFLAAMKAUKAK5VJ56UsBoDOA5VAAMLAU6LK56UdAeRA8AVgA6Ae5VBAMMAe59LF6UbA7ByGAVfBACFVBAgMAo5zM5pAKSC9A8BoEAVdG7KeDVeDFfM5oAeRC9BKQJoCDU7fBAgOAeyLZnAyQDACAoLAy98AUUHoDA9KUBV6AedAoQLPnAyQD8BUBJ9AUQH6AyJKeBV7AUbAyDAeKLPnAyOEVKAUNG6AKLA7A9KeCV7AKbAyDA8AzK5oAyMEpJAUMG7AUIBUDK8AMQAUaAyFA7ApK5pA6A9E7K6AeLG8NoBV6AUaA7AeGAfLC8AtKA6A8E6K7AeKHBiAWBAKNAUVAUCA8AVUCyJy9AyHEpKAeJHLkAf97AUPAKUAeCMydBFJAoHEVNAeHHfmAp9eBB6AUUAUCMydBZJAUGD9L7AeFHznB6SABB7AUYMybBjJAeEEVQIVzAz78AKTAUYMyaB5y8AeDEzNIf5eBR9AKUAKXM7CKTy8AoBE9KyCAe8f5oCR6AKWAKVM8CKTy8F6KeCAe8f5eET9AKUNATB9y9FzCAeDIzzA9ToBBeCAzfBUEAKVy8F8J8JpyBB9eBBUDAzgA9DFEGA6oBDK98O7Bp9ABBKEAfjA8DPBGK6oBDBBO6Bf9KBBKEAVkA9DE99GUxA6A9AUcKftAKDA9TUBA9OoKC8x8GyvA9A6AUWLB5eETeBA7O7A9C8x6G8BeCA6AoVA8AyECBMPoCPKDEACAzyA6DE9o7KEBKCA9B7A9AoEAoBBpOAeBPACToDAV5oDDO9U99BACAyBAUFAoCAUBAUDAeBAoBApPAKDO9AV96T5w7KUHAeJAyDAUCAKCAoCAKCAoCMLxAL97Ts86I6AePA6AeKA8AeHAUBAUFAKJAfJPACTz95v6AKEAKCI8AeOAoFBoEAeHAyNApJPUDS9AUCT5v6AUCL7B7BUFA6AKFAfLPyDS6UO6eBBBWB8A9AyEApUP7A6R6AKES8AeMt9AUKMUTA8AyEApNAUHP8Af76AUDM8AK6ADBO59AUFM7CKBAKDAyGAfNAeHP8Af7yDAVcAK7s59AeEM8CeDAoIALMAyHP7Af7yDAWCq7AKSAKMAoFM9CUCAfWA6A7P7Af7oDAWAq9AKSAKMAyFM7CpZA8Az6ACR8T9q9AUSAKMAyDM8C6AeCLeDAeJAUEAL59Ap7f99rACB7AKNA6ALaAKCC6AUEA7ALDAeEByCQKDNUBD8T9rACB6AKNNekA6AVCAoDB7AV6UCNeBD6K9AUxAoirKCBABAyBBfcD8A9AVCAyBB8AV6oCNKCDzBBeqAUCAyhrADA9AUEAUOM6D9A9AVBA6AL8yDN8AeJAeCAUCAeFJ8B7AeJAKCCeLDYWAeGAeJAUVMeoAeBA6AVBC8AL6yDNyEAeBAeFAeIAK99DeWBUfqeEAyDA9AUVMArAUCA6ALCC8AV66AVjAeCAUDA6AfGDyTByeqoDAyDA9AUUL8FABAVGA7AeSAf66AVhAoBAeDLeoBUUC8qyCA6AUKAUVLy56KoJAV88ALkAKBAeDLKzAUUByDA9q8AKGAUlK9F7KyJAf88ALcAeEAKCAeCK9HoQAoFr8AUlK6F9K6BADS7AfZAoDAUCLU7yQs8AejKy67J9BKDS9AfXAoEAKDLA7yQs9AoiKo68J9BKDTUCMKCAKCAeCAVJHoSs8AyiKU7A99BUBToCMAGAUCALKHoQteBDzBHo95VACL7AoBAeBLe7oOxLAHy9gOALQMU7eIAoBxe99H7JCRAVOMK7oIx7J7IA88WKBLfWHUIx8Jo8o86WUDLBXHUHx9Je8y86WoDKzaHUHxyBAe9U87I5W6AVEM6HUHZ9AWbAoDJy88I5W7BA9pbHKHaACXACAe9y87I5XUFJpbHKHaABX6JyIAy7e85XyDJpbHKGx8JyHBK68I5hVYHeHx7J9AUNG6I7hVXHoHx7Le67C7AUIA9ENgMe7oIx6Le68CyDA7BykhU96AUYHyIvKBAKCCBOG9CeFAySA7AeYhU9oECe76A8vAGB9Ly69CKHAeTA6A6CKEANbJ6AUYHyIvAIB7L7G9CAdA6A7CAEAXaJ6AUYHyIvAGB9L8HKQDAGA9B7he96AUYHyHvKGB9L8A9Ay58BobAUCA6BKNhpbHAIvKFCBTA7A6GAIDUKBKGAeChzbHAHveECBVAeJGADDoRAyDipcG9A7veGB8M9KATAoEA7AXhNA67A8veHB7NA99B7A6AoHAhgK9AUUG6A8vUIB6NU98BKMAeJAheNU66A8vKIB6Ne97BN58Ne6yIu9A9AfvJ8A6kLiGyHu9A7AfyJ8A7A8A7izjGeIu9A7AL5e67AUcA7A7BDrN6GUHvB6K6yHCyIA6AeBA8iBlGKHvKDAf5y6eKCoJA8A9iBsE9AeCA7vV6A6UMCeaiBuE6A8AKBvp6K6UNCKaiLUAyXEoJvp6e6APA8AeFDDpKyHAKNCUsA9vf6o59B7AKqAKBiLECeKAUBAKDE6BY7V6e58GoBAU7KEafECoJFeMvKDAL6A57G6HAHafECyHFoLvUDAL6A5y7A6yKafEC7Ao56BE7UBAV59F6HK6eLaABAfDI8BE7z6A5o7U6oIaUCAVEI8A9vf6U5e7o6eHaeDALEI9A7vf6U5o7y6eCa7K8JAFvf6eoA9Ao76g9AKCK8JUCvp6elJXaLt67QojJ5gpP56z6yiJ7gpQ56p6eiJ9gpS56L6ohKNXL9559QohKXYMoCAPyQohKhYNZtQUhK5gfh5sQUhK6BACfBi5rQefLAHAhIN6TABjL6odLoDA5ezmTACjB6yaM5eyBAVjS9AXyQ8CVae9Np89AhxRASM9e9Nf89ArvRKRNNJNV89ArvRUPNhJNV88A5i6RUNN7e8NL88A5i6R8Appe7NV87A6irYe7NV87A7irYe7Np8oIiXae6Np8oIiXbe8AKCM9SeJiDdfBdSeJh9hXJM7SoKh8h6ezbSoKh8iDBM8SeNhrsd9M8SUNhrud7M8SUOhhwd6M8SKQhDyd6M8SARg9jM96BKELf79B7g9jg9yKAzNR8B7g9jq9oKApPR7B8g8jq9oLAfPR7B8g8j5doJAVTRyTg7j8dKIAfVReUg6j9dKFApYRKVA9ANPj9dKEApaRAVA7A9e8kM9UBAzaRAWA6A9e9kW96M6RAXA6A7fD6W9zbRAXA7A6e9kq9pbRAYA6A6e8k5dpbRAYA6A6e7k8dVcQ9CyGA6doBAUCA7k9dBdQ9CyGA6dKKAr7W88M9Q9CyIAq9KMAN7g88M9Q9CyJAg9D88c6NB69CyKAUXAg6h9C8zeQ9CyjAq6X9M8peQ9CylAg6D9g8feQ9C6d9ng79AUCNB69C6d7n6b8AUCNB69C7d5n8b7AUCNAKAf56C8diAb6AUCNAHA6P6C9dYBbyCAVeAKMP6DC9OCb8Of56DC9EFbzuPogc8o5bzvPejcsGbzwPUkciJbVxPKlcYKbVxPAlcYKbVyO9D7cYLbVxO9D7cOMbVyA8ApkD7cONbLyA6A7AyGMolcOPa9PKEA8AoJMUkcYQa8PUBBUBBLVD6cYRa7SBSD6cYRa6SLSD6cYSaz8VRD6cYUap8LRDg8sWaf8VQDg8sYaB8fQDg8saZ8SfQDg79AKCrC56SABALRDg78r6Zp8LSDg78r7Zp8BSC9cEoZf8BSC9b9sM5p79L8C8cEpZz78L8C8b7sqgAUWR7L8C8bsvXKECf7zSC8bswAeCW7AUZRfSC8bi57WyBC6RVSC9bY58ZL7LTC9b7tqyRLTC9b8t6Y8RBTC9b9ugoRBTC9b9uqnQ9MAccE6qnQ9D7Ae8AbcY66X6Q8DyMHoaci67X6Q7DASHeaci68Xz67C9B9Heaci68X6QycCK7eZcs69X6QoXC7HUZcs69X8QKXC8HUZc5u9X8QAWC9HUYc6u9X9P9CKeHUYc7u9X8P9CAeHeXc9vClP8CAfHUXdE7giP7B9De7KXEUCY6v6XL57B8Do7KWEeDY5v7XL57B6D6HAWEUFY5v7XV5yQD7G9CUqA5Y6v7XV5yOD9G8CUqA5Y7v6XV56BeoG7CKrA5Y7v6XV57BKpG7CKrAqwv7Xf5yLEK67CKqA5Y8v7Xp5oLEK67CArA5Y9v7Xp5ULEU67B9EoEAyDYY77XzzBKrG6B9FeEYO77XzzBAsG6B8FoFYE76X7PAKEo66B8FyEYE77X7O9A9Ey66B9FoEG9AV67v9X7O8BAuGyTFoEG8Af66wMkO9BAtGyTFeFG8Ap65wMlPAIE7GeUFKGG9AV67v9X9PKHE6GeUFAFYE8CnPAGAoBEo6KUFABYs8MnO9A6AeCE6F9CC95wWmO9A7AKDE8F7CC95wWmO9BAzFyUd6wMnO9A9Fe5eUd6wWnO7BA56FAQAKDd6wWoO6BA59E7B6AUBd8wMrOyIGKtB6AUBd8wMsOyHGUsB6eO8MuOyGGUrB6eV8KGdgvOyFGeqB7eL79BW9CwOoDGypB7eV76B9EyDX7Y9OoCG7D9B8eV7eiDUEX6Y9OoCG8D8B8ef68EKbBCgZLrAU68D7B9ef6owCKLXqzOUCG9D6B9ep5o6eFA6AUMX5ZLrAU68D6CNDPA9CkZVqAU67D7CXEO8JClZVqAK67D7CXFOU95X8ZVpAU67D6Cf6eGN6OA96X8ZfoAU68DyYQKIB6ALTN8J8X8ZfoAU67DyZP9BAMA6L9Ny99X8ZfoAU66D6C6P7BKKA8MBeK5X6ZzmAe6olC6K6AUeAeQBUIA9MVbK6X6Z6N8AU6olC7KoEC7A7BUPAoQL9MzIX5Z6N8AU6emC9KAGC7A8A9EBRMfJX5Z8N6Ae6UmC9J6BAbBAEEpSL9LWiZ8N7Ae6AnC9JoMC7F9L8LzQXg59N7AewAUJD9C9JoIDKeAebL9LBVXC6L87AeGEKeJeIDUbA6C8L9K6M5W8aVlAKwAyBAKCEKeJeIDUaA8DBWJ8M8B7AqGaVlAUxAeFEAeJeIDeZA8DfTJpiBeHUq6pjAe56EKfJUJDUZA8D7LyCAK89N8A8BMDapjAo5oqDK9KKDUZA8EVIAeIIV59UM66NoECKBDKrDU9AKDUZA8EfHAULH9QMAa7NeECKCDArCKCA8JKLDKcAotF8AKMA7C8AKPHp6f99a8NeFCACCywCAIAe9ANC9DKBEy5ULA7BUZAKSG9Qz98bBgAyUAePAKFFKUA9AU9APC7H7FUMAyOCeCCK6f68T7bLgAyTAoOF8B9BABJAQC8H6FKOAeRCACCySAKoQ9T7bLfAySA6BU6AUA8AU9ASC7H6FAkB8AUcBeFD7RB95bffAyMBeIGeUA7Ao88CAaHyyEKNAUkA6A7Dp7L95bpeAyLBoHGoUA6Ao89CKXAKDHeyEULAUzDf7L95bpeA6A9ByGGyVAyEI9CeQA7A7G9E8E8AeFFycRf9g7zeA7AK9eWAyEI8CoEAUJA9A6G8E7F8F9Cf7f9W77NBACeEA6I6CoDAyHBAGG7E6GA59CB76TC78NBACeEA7IyZAKHA6BKGG7Eo6U6UOR8TC79M9KAYAeIIoZAKJAoMAy7AoGo69AL8z87cLdJ9CeEA9IeZAUKAeOAesAogAUBAUFB8G6ZyNAL7M8fbKAXAoJIeZAULAUPAerA6EKPG9ZyLAz66c6M6KAYAeIIyXAoKAeOAesAyoBo7W5oLA9QC88M6KAYAeII6CUEBAEBeEEeFD9Be75ZoJBV56dLYKKZAUII6CUEBKFBUEIoKIM5oHBp5q9pWKKaAKII6CeEBAHBKDIUJCUFF7Z6AoRPM96MLBC6AeGI6CeFBAGBKDH9A9CyEF9b7O9d8L9KUbAeGI6CUFBAHBKCH6A9C8Ae6M7zwT9AVAL8KUcAUHI6CKFBKGI6BA96bpuT8AzCLzCC9AKHI6CKHA9A6IoLK5a6Oz98A7KLPKUkI7CUHA9Ay8UMK9azoR7AKBAKWA8J9LzCD6I7C6AyHAy8ANAUHI5cphSUFB9BA97LzCD6I8C7AeIAo79BeCA9AyHB6AesA6AM89M7S6A7B6BU9zPKUlI8C8AUHAe8ALAeMAUJByID6epWS8A8BeOJpOKUlI8D8AU66AUMBADCoPA9DXIBADK7JADJ8A6B7BU9VOKUlI8KUHBKIAeaByKC8fUIAo58AosI9AzbA8JUPAK96KUmI7KKIBKHAecByJC9fUGAyxAeEA7EK9UEM9A8JKMA6JfCEA8zAA9BKGAeeByFDXQAKHEySD8JyDNKIJACAKCAKCBA9fBEK8pAA9BAFAeiBeEDrXD9A9AeNC9KoCNoGJUBBy9VBEU8fCAeBAKLAyCD9BUCD5gejDAaj6JVAEU8e77AemAyCEoGA6AKIC8BUBfAdD8B8j9JBAEU8o76AyjAyCE8AKYCeJA7fKQAeCEUPkK9A99Ee8e7yIAUDC7A6AU78B8A9BDOA9FyHke89J9Ee8e7yIAKEC6AyDIKCAoKA9BNSAK59Ar66I8J9Eo8e7oMC7AeDJKGBUL7wI7C8Ao67Eo8o7eLDfLBHxI6CeMGotIo7UKDe58Ao5eE75U86CUQGKtIo7yHDABAK57A7798A7Ae87BoCAoRGKuIe76AKCAUeGAH79KCAeLAK88A9B9AoFGAvIe78AUeGAH79BGAyVHKvIo78AKdG6Ab89K9AUVHUvAUFH8K7IoC77BLAUUHUvAUHH6K6I6Al67LUCCA7UvAUHH7Ky87At9eBQ9Ny7e6A7fBAKEI7AWJAh8eCQ6N6He6A6oCA7K6d6Ah8yFQLlHo6K6eDA7Kq96AX86A7P9N8Ho6K6eFA6Kk86A7P6OA7exA7Ay59BAFKk87A7PpqHUvBAEBABE7BUFKa89A7PLrHUrAUCBAEBKBE6BUFKa89BLvOe7UqAoBCyDEyMAo6ABEQ9AKO7Oo7KqAoBCyDEyMAy59AKp69UJO6Oo7KpAyBCyDE6BKFKG9eKOpuHApAyBAUCCUCE7BAEKQ9oLOVuHAoAyGHUJAo99696BpoOy7AnA6A6HUJAoWAK76696BzoOy69D9A6A7HUIAKHAUPAU75697BzoN9AoCG9D9A6A7HeVAUIAU76697BznN9H6D9AKBAeHHoWAKHAK77699Bo88AUwN6IAqAKLHKWAe8k99Bo8KFAeDAeCELjIK5o7LKBUQ67ALIAHAyIEBjIK5o7KFAzd67AGI9AK5piIU5o69AoJM7756AU6phIU5o5oDA8A7BLa756AU6phIU5o5yFAeHBfY758AU6phAyGHKlAKQF7A8B8KABCb6ABGfjAoKG7D7AKCAKNF9AyEAKPJ7A7B776KBGfjAeNGykAUCAUOF9AoDAUOJ6A8B68aN6AKOGykAeBAUOGKIBe88B6B58bPK6ykAUDAKOGULA9I7B8BcePK6okAUDAUNGyIA9I6B9BSfPKCAe59DKCAUDAeCBe68A6A8I6CAJ8fP7F9DAIAeCBe68A7A9IoUA98eP8F9DABAUFB7G9A8A8DoBE9BKCA8A88dP9F9C9AUCAyRG9BAHDeCE9A9AeJA88cP9F9C9AUCA7ByGAU6UKA7DUDE9A7AoJA88cP9F9C9AeBA8B6AeEGKKA8DKDFAFAyJA98bQA58DABAUIB7AKGGKKA9C9Ae5eBAoMA98ZQ7FUhA8C6GKIBAcAe56BoJ8ZQ7FUiA8Cy6oGBAeAK5oPBIYQ7FUhA9C6AKEAoHE8A6BKbAe5oOBSXRKwDyHD6AyDE6A6BeZAe5yNBSYRAwD8AohA9AetA7BeZAK58BKL8YRAwD9AofBKDBUCDAHBo8oLBSZQ8E8HeNAeKAedA8B9IKHBmaQ6E9GeDA7BoIAoEC9A8B9IeDBcdQyxGeEA6BoQDAIB8J78eQ6E8GUaByCAecAySJ78ZAeDQoxGKbByBAyeAKUJ68ZRAxGKcB9DKCB9J78YRAxGAfB8DKBCK9yDASUQ9FA59DoRDACCBB8SQ9FA58D7B7C9AUTKSIAUIQ9FAlAUSD9ByfAURKSKAKIQ9FAjAyNEyODADB6J98LAeHQ9FAjA6BKxBybAoCAKLJ98JAeBAKHQ8FKjA7BAyBycA6AKDAy998JAeCAUFRAyD6A7A9FKQC6BKEJ98KAKCAoDRAzD6A7A8FeRCyKAo978PR7FKlA7A9FUQC7A8Ao9mSR8FKlA8A9FUQC8A6Ay6eBBoDBSSR8FKmA7BA5UQC9AoFF8A8BUEBISR9FAnAeOFUQC9AeFF8A9BAGA88TR9FAoAKPFUGAeHDADAo59A9A9A6A88TR9FA56FUEA9AUfAoDGAJA8A6A8Y7AZ7B8AxF6FeEEKEAe6AJA8A7A8YoF569SAxF6FeFD9A6AU6AIA9A7A9YeG568SAxF6FyED7A7Ae6AHBAHA8YeHC7AOAAVlSAxF7F7AKkA8Ao59A6BUGA9YUIC6Ar97A6Nf8AxF9FyCB8AUPA8Ay58A6BUGBCvAeZA5oAENL8KwGA5yBBoGByIA8FyGBeFBAoAgFAeYA6oAEM9SUwGK5oCAoLAKDByIBA5oFBeEBKnAp9eBBeBrAEM9SUwGK5oPAoCByKBAzA6BUFBUoAL9oCBUCrUBM8SewGU5ePAeEBoLA9FAIBKFBeBAKCAMdAUNA5556SowGe5oNAUGBeLA9E9A9AyBAoHAUBBqeAUNA5556SewGo5yVBKMA8E9A8AyNAUNAMfAUPAj56SewGo56CALBeHE9A7A6aAC57p8ewGo56CAKBoBAKFE9A6A7Z9At7f8ovGy5yVBAQAezAoIZ8A557p8evGy5yVBA7UBBg5UH57p8evGy5yVBA86ZKH57z8UwGy5yKAKMA8CoEF9ZAH57z8UwG6FoKAeLA7CoEGKIAL6ADHyIHACyf8UwG6FeMAUMA6CoEGKEA6P9Ao7oIHAEdyHUB8KwG6D7AeNC6A6CoEGUDA7P7Ay7eKG9ApdAV6eMT6SKwG6D7AeNC6A6CoGGADA7P7Ay7eLUKCQKPTz8KwG6D7AoNC6AyaAy6ACA7P7Ay7eLT7AKCAV56B8T8SKwGymAyNAoCB9AybAy69XoMAUBTUDAKCP6B6UB8KwGooA6BUDAKWAebAy69XoMAUCTKEAKBAKCPePUL8KwGepA8BKBAUWAUdAo7B69AK6oLAeBTALPUPUL8KwGUqBAMFeDHL67AU6yLTUXOeMUf8UvGKrBKMFeDHp6KEG6BB9UYOUIU8SKvGAsBULFoDHp59Ao59AKHBB97AyCAUEA6OUIU8SKvGAsBUMDKDB9AU76P9Ae58AeGBB98AeKA6NeCAoJU9SKvGAsBUNC9Ae99P9AK59AoGA9VUBAUDMyUVL8KvGAtBAOC8ApDV6AeIAqTAVUCoNAf96SUuGAtBAGAyCC9AfFVyDjKaBeETz8UuGAtBAED8AKZAK8WPAhwC8BeETz8UuGAuBACG6Ao78J6AY68C7BoDT6SUuGKtH9Ay76JyDu9C6BoBT8SetGUsCUBF7Ay7y96AX57ALLC6Vp8UtGUsCADF7A6Hs5oEK9C7Vf8UtGUsFyBCyEFUFB7NKDgADLKcVV8esGerFyBC7AUyA9BzdA5f9AfKDWLSUsGUKAydFoDH8BKNM9AsgDqKSerGUKA7C7FoDB6AK6KNAKBA9M8A5rKjVB8erGUKA7C8FeCB6AUpAKFAoLAKCBKJM8Aq8KBO9D7U9SerGUKA7C9FKCB7AUoA8B8A8BBeAg8KBO8AoBAeBC8VB8oqGUKA7C9FKBB8AUnA8CAEBVhAg8ACD8ALHAULCqLSeqGUJA9C8I6AUWAoBAegAKCNyEb8AyiApTAoDBqOSopGoHBAbLKCDzpAq79AKBAeeApWAUHBCPSopG7AoKC7O9OAEQACMeBC7AfhA9V6SopG7AoLC7PBlAp6KDMeFP8A9V6SopG8AeLC6PVkAz59AfaAf58A9V6SopG8AUNCz5phA6P9AW9AEAKBV7SopIeaPfgA7P8Ah7eGAKBNV8opIeaFeBJ9NUGP8Ar7AMNL8opIoZFeBJ9NUFByBOoClKNNL8epIoKAUNPfgAyOA6zeNNL8ooIoJA6BB5eHALaAeOA7zyKNL8ynIoJA7A9PUIAfYAUQA7zyKNL8onIoHA9BBzLAFD8A7zyJNf8omIyGBAJPLJAyoA7zoINp8omIoHBAJH6AeJAU6LIAoqA8zeINz8emIyFBKIF8AUPAyGAy6KFAVAAosA7zKKNz8olIyEBUHF9AUOA6AyGGUCAo99AeuA7zKKN6SelIyDBoGF9AeNA6AoHG8KABE8A6y9BVkSokIyDByFGACBeGAoHG8O9A6y9BVlSekIoEByFGABByCA7A7G8O9A8y7BVmSejIeFB6Ao8yHHLvA8yyNN9SUjIoEB6Ao8yGHfuA8y8BLnSKjIyDB6Ao86Ay7fuA9y7BLsR7Do8yCB8Ao8yFHzrBFJA9O6RyiKyFIoEE7AKcOeJzAIO9ReiK7Af6fsAyCAPNA6PeBAz6ohK7AorALROyBAKBz9Az76OeBAehK8AoqAeDALCAKI669Ap79NyDAyhK8AeqA8KAEA667AFA6AL7VgAeHDfKAKqAKCAU56AUhAKLA6Aa7UFAUFRfaAUNDgLAyhAUK68ANRVoDp88AKVAUlAeJ68ANRfUAUPD6KUCIoBB9AUmAoIr8AgoBp7VRAUQD8KKCH8AUFAUQAenAeJr7AqoBp7fMAyMEfBAe8yBHKCA6q7A5YAPRVKA8A6E8KKDQ6q7AqoB6RVHGpBAz7eCA8AeCooDYAQRVFG6KKGTX78AKFAKNAgpB7RVCG8KKGO9AykmABAoCA9A6YURRe99HBBAzwA8Dh8UCAUDA9A6YeRRo9y7VCAfvA9Dr8UCAKCBKGYeSRy9K7pCAfsA7D8meEAyJY7B8R7I7H6Y8A7Dh89AeFA8ZARR8Io78Y7AUCAUkmyFA6A5ZeRSA78IW89CKDkAGAyFZoRSe7e8q7eGA9CKEkKFAoGZoOAKCSo69I7WoDEARAoVAh6UFAeHZyMAUCS6Go9CYAemDUCBKBkoEAUIZyLTo59JV9KCDKBD8BeJAKCA8BD7ANZyKT7Fy9p9KCHUKByGBX69BM56A9UAzJ6TACIADBoHBh7UEaKHUUvJ8TABJ8A6Br7oDaKGUyqKCDAK8oGB5lyDaKEVKCAeDAUaKMEAK8eFB66pAMaB8K5b8AUIAyQ87KMAUBK5b8AeIAeTA8Ac7ABK8b9AUJAKYAeF977f6AUFGKB9Pgy58A79Kgy58BxDaACGo56CI97g6F7Cm9haF7C6888hA56C988hhFye88NjFof878d6A6Dy5oh87q9yJDy5oi87W9eMDo5yk87C9UNDo5om87C89BoiA8AUtEI8C76ByiA8AKuEL66ARMb6BojFyqQoD7LMABPoOD7FetQKG7JMABAoCO7BynFKuP9A87IMACAUEO6BooFAwLAGEKJ7IMAKOeOEUwFfCBAnBbHL9BeFAViBesE7Fy99BekBvGL9CVhBUtEy57J6B7DKRYUEAKDt6L9CVhBUuEy57DeCF9CAYCWsAUBAs5zSCLiBexEU59DUDFyYCeVZADtfRCfhA8FypF9DUDFyZCeUZAEtVRCfhA7F7C7A7A6GAgAK5obAyCB7B8ZUEtLRCzfA6GUSAKDBADGU8yfAeCByTHUBR9A8s7L7CzfAy66BATAU6e8yhAUCBeUHUBSoEs6L8CpfAo68A7CKBGy8KlAUCBKWHKCSeFszRC6NACHUDJA79EABAKDAKGCU7eFR8A6szSC7BKDcU77EeCAyCCU7oESUCs6MAqI9AL9A7y7vJMyoI6AL9A7o757JM9EK8KBTK7K767KNApbU7A757MNemH9AL9e68HvONylH8AL9e68HbQN8D9HUBTy67HRROKnG8AV96Gy7RSOylGyCT8F7AUEHRTO8Dy6oCT9FoFAU7RUO9Dy6eDT8Fo777VPAtFUDUAyH87WPKtFKEUAvIHWPeqFUEUUpI57VPopFUEUoUAeFA8AK87jKDk7P7D8FKFUyLAyBK7i7A6k7P8D7EoBA7AgIA6L6i6A6k8P9D6EeDWABL9i6A6k7P9D6EeBiU8yCaAFk7P9D6BUCAoCk7IoCaKEk7P8D7A8A7AUDk7IeDaUDk7P8F6k9IUDaeDk6NeBCy55k9IKEaoCk6QK5h7A8AE6gQ6AUCEr7A8AE6gSeflA59AyQAkhTKXlA58BAMAugT7AUEBD7K59A9BUF6fU7A5lU6AIBeG6d58e6UGByG6c58U6oFB6A66b58U6oFB7A76Z58A67AeTA76Y579G8AeUBQT578G9AUWBQS578G9AKYBQR579JyJ6R579J7A76R579J6A66T5bAUyJyE6W5YAoy7W5UA8E97Xz9A7FHYzyJFbYzoJFbZzeJFlZzUIF57Zy9BA567Zu6AejBU597Zu6A9CoPGbYu6BoPB8GuUAo99u6CADCU676TAy98u6Ey686RA7J7u6Eo7GHAUHA8J6u6D9H56IAeFA9J5uynH76JAeCBK9szA7A6EA776KBy9sxBKDEK776LBy9ixFo786NBo9YxFo786NBy9OqAKFFy786MB9I8sKDAK59H76LCA88sK6e776KCK88sK6o766JCU88sK6o766JCU88sK6y7uJCe88sK66HaJCU9EpG7HQJCA9YqG7G96LB8JiqG7G96MBy95seyAyGAeCG96OA7KOrE9I67WsowI67WsowI67WsewI77WsotI97Ws7EK9HWs8D7JlWs9De967WtAeJ87WtKWAeBKbVuUGLRVueELlUueELlUuoDLlUDeF5q7UDKJ5o7UC9BZo7TBUFBAQ5m7TA7BoDC85d7T" : 13 === $S ? j = "AKVAGAL8jKGBKUU9D7Pe98B8L8jKGBKUVAkG9AofAUvJ8B8K7A8ArzAyKCWKC6AUGG9A7C7AKBAeuJ8B8K7A8ArzA6AKDAUBAUXU9CyDA6G9A6C8AytJ9B8K7A9AyDANuA9AKCAeWGACO6CyEA6G8AogAeuJ9ByBAVHBKEAUBjydFeHO9DU69Ao8K99BfMBKIh9AyRCU5oEP6C7G8Ay8A99BfNBKIh8A8CePVyZG8Ay8A99BLQBKIh6AyCAoVBqRCy67Ay8K98BBTA9A7hKKAeHB6B6V9Co66Ao8UYA9AKBGoJL8BKGheIAeIBeSWARAKGGyEIUVB6GeGMANA5hyFAUCAKGBUTWUPAUGGoEIUTB9GeDMUPArjAoDAKDAyMB9WUNAyFGeEIUQCf87B6A5hoDAeBAeFBUTWUNA8AU6eDIoPCV88B9AhiAKEAKEAoNB9WULBABGeDIoOCz86CKDhUCA8AoNB9WeKHoDIoNC7SoXArfAKJAeOB9WUJD7AKlAe8oMC9SeCAKXAhdAKJAeOCCVA9D6AekAo8eLDB87jeCA9AePB9WoHDyDD6AK8oMDV86CoCg7AUIAoQB8W8AejAojAK8oLDf87CoCAeCgKBA9AoRB8m6BehS8CoCAeChKDB9B7myODV89CoCAeDg9AeUB8meODf89CyBAUGg6AoVB7mUODf9KYAyDANaAoWB6mKNDz9UYA5g9AoWB7l9BojTUXA7g8AyWAyDA8l9BekTUXA5hAFAUCB9AoEA7l9BekTUXA5hAFAUCCADAoBAKHl6BUkTyVA6hKEAKEBoBAoCA7A7l6BUkF7AVlCAGhKEAKBAUBBoBBeHlyMD6EABB6AflAKBB9A5hKGAUBBoBBeHlyLD7F7AplCAGhAFAeBBoCBUIleLD7F8AzkCKFhKEAeDBKDBUIleLC9AyBGAGN6CAGhADAeEBKCBeGAKClUKC9G7A6N7CAJg7AeCA7A7AeNAyCAh7KJCyBAeNA6E8A8NyVA8g9AUCBAEAKPAoEAh7AIC6B7A6E8A8N6B9A9hoBAeFAoBByDA6AX7AHDKMA7E9A7N6B9A9h8AyUAUHAh69A6D9AoIE9A7N7B9A9h9AeUAUGAr68A6EKCA8FAHN8B9A7iADC8A5k7A6EKCA9E9A7N8CAHg7AKLAebA6k7A6FUxA8N8B9A8g6AUKAoaA7kyGFowA8AoDNKUA8AyCf9AKKAyYAeBA5koGFowB8M9CAIAoDf8AeLAeaA6koFFyxB7M9CKNf9AeLAoYA7koFFyxB8M9CKMf9AoKAeYA7hAGC9Ay5yMAKkB8M9AUDB6BXhAeYA7g7BAcAo5yNAUiB8N7B6BheAeXA8g8A9C7Ay5yNAUWAeJB8N7B6A9hoDCeIg9A7C8Ay5yCAeIAUUAoKA8AKBAKFN9B8A7hoCCoIhAGC8Ay5oBA6A7AeSAyKBABAzkCKGhyBCyIhKEC9Ay6AHA6BoHBAIAeFN6CAHhyDCeJkeFGAHA8BKIBKHAeFN7B9A7hyFCKJd8AK6oEGUGA9AyBAUKBKHAeFN8B8BDhA6B9BArAWzAe6eEGeGAKCCeMA6AeEOARBDiA6B9A9EoCZKCGeDGyJCUMAyCA6OARAKBA8hoHB8AoyAK6eBS8AK6eDG6A8CeMBLqB6BNiA7B7AoyAo56AKDAL89Ae6KCG7A8AeCB6BeIAKBOoQBDiA7B7AoyAy5oIS8Ae59Ae68BeHAUGBoHO8BeLhyHB6Ao5UDAUCE9BB87Ao58Ae69BUFAyEA8AUFA7O9BeKhyHB6Ae5oHE8BB87Ay56Ao7AgAeEAp5oMBNiA7B6Ae5yGE8BB8KCA8AK56Ae7KgA6AKFO7AUFBKMheHM8A9SUCGyDHeDAKCAUWBVvAeGA9AUBA9heHM8BB8UCGeEIKVBeCAVqAyGA8AUBAKBA7hoGM9AeBAz8eCGUEIAOAyBCBpA6A6A6BXkAzbBMvAo8KLC7OUHAyDB5h6AVdBWuAy8eDAeCC7OUICi67BWuAo9KBCzsA9B8vKMYyFL7OoKB6vyKYoEL7OoQBO7yLYeEL7OoUA7vyCAKIYUFL6O6CUEv8A9YKFL6O6CUEAeCnABIKDAUFYKFLzwCeCAeCnACIKBAoCYUEIKBDzwCeDAUCnAChKDIKBBKCCLxCoCAUCnADhACIKCA9AeVPAYAeBAX9AEg8AU8UCA6AyVPAZA5nKEg8AU8UBAyGCVyCoFnKGg6AU8KDAeICLzCUGnKDAoBgeDIKEAeHCL5UVAUCAX9KCA6AXVAe8KEAeICB5eTAeDAX89AoHANUAU8eFAUDAeBCB5oZAX89A6AyCf8AU8eKCz5oZAN9KGAKBAeBIyIWoCIoJCz5yZAN9ANI6BKGA7U7AK8oJCz56CyBnAMI7C5UyCIeJCp58CyBm9Be9AWUoCIeKCf59CoCm9BU5oDCyCA6CgEAK8eKCp59CoCm8BK5yECyEAoYUUBIeKCp6ASAKDAX89BK56AeaDgAAK8UMCp6ASAr9KBAUGI8Df98AU8UMCp6UQAh98Ae88Df98AK8UNB7AKFQikAe68Dz96AK8UNB7AeCQinAoCAU58AKDDz96AK8KNB7Q8sKHF6AeCD7TeCIUNB7Q8sUIFeDAelTUBD9AUpBoSQ8seJFAEAUnTABEADDyBAKRB8Q9soBAKFFAvS7AUpAeiB8B9RFAE8BAFRKBEeCDoSCB68yKxA8A6RKBIKPCL68yA5UBBB7UBIUOCV6tDA8Ae5V7KBIeOCV6tCA9AU5f7KBIeNCf6jCA8Ae5p7KBIeNCV6tCA7Ao5p7KBIeNCL66yAGAo56RKBIUOCL68x7A7Ae58RABIUOCB7Y9e7B68AU8ARCB6yCA8w7Hf67AK8ASCB65ZoBX8IB6oBIATB9Q5ZUDQ6AU69IV6UCH7CKUQq5eCQ6Ao66Ip6UBH7CUTQ5ZeCQyGGo8z6UBH7CeSQ5ZKDXolAevQUBH7CeRQ5Y8A6XemA6Ep6eBH8CoPQ5Y7A7XUkA9Ep6UCHocBUBAL66wykA8E6QKBH6C9BL67w6D6A7E8P8AU77C9BL67wykA7FU69AU8oBG9AUFAKBDABAUHQ7wokA6Fy6yHIKBHAEAUmAp67wokA7Fy6oLH7AK7AtAf68welA7Fy6eLH7AU7KtAV68wUlA7F6G7AU8KCHWOwekA8E6AoGG6AU8KBHqOwUkA9EyEA7O8AK75VsmAKqDyKAUEDyJA6O8AKRAK58VimAUpDyLAKJDAKA7O6AKRAe57VimAUoDyYCeQA7OoBB8Ae57VilAemDocCATAoBAVrAKSAe57VY78DodB9C6ApnAKTAo56VY78BKFB6DURDAEAyCBoIBoCJKBB9Ao5gPv7A9A8BojBogB8AKTAeMI6AKVAe5gPv6A8A9BomBKhAeGEy8oBCUEFMPv7A7BAMEUBEeEAUcAKDAUNIeBCUEFMOv8AoNBK89A8AUQAUDAeBAeNIUBCoDE9V5v9AUTAy9UGAUJAUFBePIABCyCE6V8yKCJ6AeEA6AyBB6B7H7AKaAUtV9599AUEA7CURH6AUaAUtV8577AeKAeBCAEAKQB8HyBC8AKtV8576A7A7DoKCK7UBC9AKsV957oMAolA6Ce7ABDABEqS57oPAenAKaG8AKfAKtV7568AUDI6GyCDUBE5V7568CAEG8GeBDyBEqQ568CAIG6GKBD6AKrV6568CKLGo59AKlAUqV656yBAKWBonAUVF8AKmAKpV656oCAUWB7DoFCA58AKmAKpV656oaCAgAoVF6AKnAKpV656ebCeeAoVFyBEABECP56KfCodAoSF6AU8MP56AhCocAyQFyEIMP559DoZC8AyPFUGIWO56AhC6C9AyPFAHIWO56AfC9C9A7BeJAUmA6IgO56AfC7DUGAeBA9A9AekBA8CO56AdDAfA6AUCA9A9AyiBA8CN56AeDKeBUHA9AyhBK8CN56AFAKYDKeC7AekBA8MN559AyBCygC9GyMICL56KEAUZDecFyBA9BU8WJ56AFAUUAUDDUdFoFA6BU8qG56KFAUUAUDDUdFUaIgG56KEAUTAoCDedE9C9IMI56KEAUSAyCDecE8DK8MF56oDAeREKbE7De8CF56UFAeSEKbEyhIWF56KHAeREUaEejIWF56KFAyQEUbEUjIgF56AFAyQEeaEeiIqE56KEA6B6EebEKiJB9956KDA7B6EebD9Dy9L9856UDA7B6EebD6D7JUHAf8756eCA8B6EUcDymJeIAV8657USEKdDemJyIAV8t7eTEAJAUSDejJ9A8AL8t7eTEAHAyRDUTL6A8AV8t7eSD9A8A6B6DUPMUGAV8t7eRD9A8A9ByfBpeS557USD7A8BKPDAOM9S657eSD7A7BeODALMyBAz8757eRD8A6ByNC9A7AoBMyBAp8857eRD9AyPBedA7AoBMoDAV8857eSEADB6BonAVXAeBS957eREUBB7BooALWTt7eRGKNEKBLoCAoMAV8F7oRGKMEUBLoDAeGAV8657oSGAMEeBLoKAV8757eTGAMEeBLz9857eTGKKEoBLp9957eTGKKEKFLgA57USGUJD7A9LWC57eRGoGDeOLWC57USGoFDeOLCF57UTGeEDeOK9U657eUGeBDyNK9U757eUGeBDeOK8U957UVGeBDUPK5VZ7UWGUBDAQKgQ57KXGKBDAQKgP57UXGABCKCAySKWR57UZF8AKRC7KKNAWF57KaF8AKRC7KAJAUBAgG57KaF8AKQC7KAJA5U957AbF7AKQC6KAJA6U857UaFyDB6CzAA9A6U957UaFoEByZKKHA7VF7UaFoHBUXKUEBCK57eaFeIBKYKKCBWK57oaFeIBKXKKDBWK576Co5eIA8AKBCVDAUKVZ77Co5eFA9C6KeBBMM578Co5UBBUaL5Vj78CozAKMC6LWR579CeyAKMCzNV7579CoyAKLCzFAKHV8578CyyAKKCfIAKEV958AZFABBAXK8Wt8KZE8AeJCBKWj8oYE7BACCBLWj8eZE7DVLWj8eYE8DLOWF86CUwDLQV7587CUwDBRV6588CKxC9L9V5589B9E9C9MCP59ARFAaMWQ59ARFUXMgQ59AQF6B6M7V659AQGKKM8V659AQGyCNWQ59KPT9V759APT9V759KOT9V859ANUMS59AJUqS59KHU5V8R7AiMA5U5WB7yE6WWB7yE6VWV7eG6UWV7eH6TWV7oG6TWV7yG6SWV7oI6SWL7oJ6QWL76A86QWL76A96PWL76BP96AUNWV78A9598AeLWV8KG599A7A6WV8KG6AA9AgVSUG588AKMA8AWWSUF589AKNA6AqVSUF588AUOA6AWWSeD588AePW9SeC588AoPXH7UEB6W877oDB7W777yBB8W777yBCCa77oCB9W677yBB9W777oBCCa77eCA6AKNW777UDAyCBWb77UFAeBBgc77KJBqb77UGB6W877KDB9W877KEB8W877UDB7W976eBA8AeRXH6UBA8AoPXR6KCA8AoQXR59AUKAoOXb59AeKAoNXb58A6A9A6BCg758AeBAoIA6A9XR6yIAUGA8Xb7UKAeBAgh77UKAKCAWjA6Ab6yLAgjAyG76UJAqkAoC768A7AqlAUC769A7AqmAKC769A7Aqp768A7A5X8AUB768A7A5X8AUB769A6A5X8AUCPAB6QA7AqnAKEO8AaPA8AqnAKEO7AkQA7AgnAUEO7AkRA6AgnAeDO7AaSA6AWoAoDO6AQTA7AMoAoDO6AQTA7AMoAyDOyB6TY877gw76KCAeBA7Y776KKAeGAMo769AoBA6AWn77AKAWo77KIAWo77UDA6YR8Cp78Ms777Y5776Y5777Yv78Yv77Yl78Yl79YR8Co78Mn78ql78qk78eBAMk78Wn78Cp778Yl77A8AMk77oFAUDAgi77KEA6AeDX577ADA8AKEX577KBA9AKFX578ABA5X5786X6785X6785X778Mp78Cp779Yb79Yb79Yl78Yl75Y7765Z7769Zb7C5Z69AL98Zj69AV97Zt69AV95Z5569AV95Z5569AV9yDAgx57ABTKFA5ZF69AV9KDA6Y957KBUCy57ACT8Zj68AV97Zt68AV97Z5567AV95Z7568Af9C6F68Af87aZ69Af87aZ7ACS5at7KCSg6557KCSW6657KBSW6675q6775g6875W6975W697zbHyb57ub87qcvkc57jc77ic77ic87hdHgdHedbddlXcKBB77Uc6AeCAeI7Sc8AUP7Pe77NfHKf57Ef97Cf97BgHCgHAgRAga98gk97g769rc69rc69hd69Xd69Xe69Dg689ha88h5686f9AUP68hHAKf68Dp679ik77iu77iyYAaxi6CoD6wi6CyE6ti8CyE6ri9CyE6ri9CyF6pjAaAupjAaAkohUBB9668heBB9667ju6r5766X5966r57658AKFj8657AeCj9657k5657ku57ku56k6655k765r6765r67CKB6gk7CAD6fk7CAD6fk6CKD6dk9CKC6dlAVAablKVAaaleVAQaloVAQZloVAQXl6CUB6Xl56vluvluvluvlkwluvluul6DUB6Ml7DAF6Jl7DAF6Jl7DAI6Fl8DAI6Fl9C9A96El9C9BAEAZ98l8C8BeCAj97l8C8BeBA6595l8C8CP9r79C7CZ9h79C6Cj9X8KYCt9X8UXC559N8eXCt9N8eXC559D8oXC9586meYC9586mUYC9586mKZDF85mKaC9586mAaC9586mAaC8587mKYC9588mAYC9589mAXC9589mKWC9589mKWC959D8KVC959N8AVC959N8AVC959N8AUDF9N79CKf59N78CKgx6Ae9N78CKgxyCEKBFX77CKgu6AKPAeGA6EAGE9l6CUguyBBoFAKND6A8E8l7CKhuoCBeFAKSC9BUul7CefueDBedCoNE6l6CeguUEA7DyWBovlyYDO6KxB9B6E6l6Coes6A8Ao5ePCUsl6Codsy67BeYEr77CUdse7KJC6Er78CUcsU7UIC8Er78CUasU7eFDerl8CKaqeEBU78AUjEh79CAZqUJA7L7EX8AUC5qBjEX8KTC5p9NyEAUlg9AKzB8C6p8A7ApeD7mKTC5p8A7AoFAVXD8mAUCscA6AVYD8mAUAyCB6rADAfYD9mATAyDB6r6MeomATAoDB6r6MonmAUAeDB6rzaD8mKUAUDB6m6AeuM6D8mKUAeEBr86AosM7D9mAUAoEB6mUGEBeD9mKTAoEB8mAJD6NKnmeRAyDB8mAJD7NAnmoQA6AKTj7AUVBAbAUINAmmoPCeCAN57AoUBKbAeIM8D8myOCAFANfAKWBUQAKDA6C7AoDAeEMymm6BySAyBhACBoZBADAUHC8BKFMKnmyTBoFANcAoNFKZN6EN8oUBeEAXcAeKF6B7AKGN6EN8yUBKFAhbAeJF7BoFAzkEX8oUBKFAraAUJF7BoIAfkEX8yTBoCA6goCA7GAGAKEO9Eh8ySChXAUGGoCAUDPAsmyQBABBrXAUDHKBPKsmyQA6AKSggcEr8yRCrXW8AoBD9kUBCUUCXVXADAKpj9AUVCUVgCfAUDED8KXCNTXUCAoomAXCXRXeCAoomAYCXQX8EX79CoWf6X7Ee5yCgKZChOX8EoeAeDAyNAXVCyYfWmE6C7BKBAULAhVCyZfCmE7C7A8AyBBKDe7AeLCyae8YKtCUCAeFCAEeyIA7Cyae5YogAULCeCAUECKDe6A9A7CobegtDKEBKXA6CUDe7BKGCUceWtDKFBAyAhJBKECedd6ZKdA6BAyAhJBUCCodc7AKHZecA6BAyAXLD7DC8UFAg58C8AyKFACfekDC8AHAM59C9AeLE9ArND6Dg77a7C8AeLFADfojDq77a7EX67Dyjb5a7EX67D7D7bW68ED66D9D6a9AKCa9D9k6EAja6AeCbekk7D9Dq66AoBbokk9D7Dg66cAklAlDW65cAlleiDW6M8yklohDW6M86D6loOAURDM6M88Dr76BUCB8DC6M89Dh77BKDB7DM59dKgl8BADB8DM57defl8A9AeUDM5q96DD79A8AUWDMyd9C9mUBAUDAUXDC5W97C9nAXDMzd8C7nUWDWyd9C5neXDqvd9C6nUXD7YrECKnAXzCelYrFCAnAoLAXkCUDAUhYrGB8D9AyKArlCKCAUiYhGB8EAFA9ArmCKBAeiYXHB7EAGjKYDqqe7B7EAGjUXDqqe9ByoA7jUXDgqfABAKLEAJjKYDWpfoKEAJjeWD9XrOA9EKJj6B9EChfeHEoJj7B9ECgfUFE6A9j8B9ECgfeDE7A9j9B8ECgfeBE9A9kARECgkoHkKRECgkyFAKFj6B8ECflKFj7B7EMek8A9j6B7EMelAIjyRECflKHj6B6D9XX7UGC9AhZBylXr7UGC9ANbBylXrDAK69A5j7BylXr7oEj7B6D5X5loEj6B7DqkloEj6B8Dgkt9AM7oTDWkseCBoEbKUDMlsKDByCbUUDgksACdAUDqjv7A5ZAVD6Xi76A5ZAWD6XY77AWzCemXHdConMUDKsmAM9AYEBUAzD7dCopL8A7KbdCyqMKBKldCyrWvcC6EqX7bC8EqW7bC9EoCAMSxo" : 14 === $S && (j = "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okA8BoDWK57x8D8A7FeCC7AoCAKDAUZDeMBAGWK56x8D8A8IeBDogBoIA7WU55x8D8A8L9DAQA6A8We55x7D7BKCAzLC8DCaFi97D8B7LKbDCdD9AUKx7EoPK9CoeXUiA6APFE8B6K6B8DMkC8z7E8B9KoODqoB95WFUPK9AonYoO5XFUQPMyA55aFUPAeEO578K5UWO678A5UWO678A6oJO778A7ADO778CTC6Ab5gSC8AUEAltV8DyE7rV7D7AvqV7D7A67oTUCCemAbrS9AoY78f7UEA9A7C578f7KSC878f7ASDH8V6UFAKTDR8V6UZDR8V6UZDR8V6eYDR8V6eZC978f6eTAeDC978f6eTD578f6UTD678f6eRD778f66AeEA6D878gR78gQ78qQ78qQ78qQ78qR787Vl9CK79MI79qG79qE798UM58APpUC57AjpT8Z7A55pT6Z8A65rTg58A75qTfCAp5UH5pTfDAzyA75qTfDAyMAQ86TLWAQ86TBXAa8z9BXAk8z88MoE68z86MyE686SzZA5686SfaA6688R9M6A869B76M6A769V7pbA669p7fcA569z7VdAvAQ68mQSrP78rP78sP68rP78rP68sP68sPmvPmwPcxPS5yDApm86Vl866Nm68NZ8ABdLc58ABdpZ58ABdzY58ACd9L958ADd8L858UCd8L758eCd9L658eCezK58eDezI58oDeymAe66586AXFDyHAyBAUFFZ86AXIDKKAUKAoCEt88ANNCegEZ89AXNCKhEP9KBfyQD7EJIBonD89KBAqD7B7AS9oIE6DUSAc9yEFAeB9AdyC9B8AnzC6CAD9zBUEA7CeC95eJA6An99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99ACeAT99AT99AT98Ad97Ax96Ax97AT99AABAT99AJ99AJ99AH6AC997Ax9yF99yE996A55lAO57A55lAY56A55lAY56A5bUBaoCt7Aq7UCaUEt7Aq7KDBUBY8A5t6Aq7KKAyFYyEt6Aq7KKAoHYoCt8A5a9BUBA97EAyhAMiClEA6DKCWoBAKf7EA7C9AgYDo5yF6sA6C7AqaDo5eH6qA8C6AqaDy5UH6qA9CyEW6D6FKC6wA8CyEW6D7FAG6sA8CyEWynFAG6rA8CyCW6EKzA56qA7CyDWKv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"), j = bV.Vb(j);
            var I = qj.getData($S).Ej,
                m = qj.getData($S).Fj;
            JS = 1e3 * j[0] + j[1], sS = 1e3 * j[2] + j[3], (OS = document.createElement("canvas")).width = JS, OS.height = sS, bS = OS.getContext("2d", {
                alpha: !1
            }), rS = bS.getImageData(0, 0, JS, sS), hS = rS.data;
            for (var C = j.length, S = !0, l = 0, a = 4; a < C; a++)
                if (S) {
                    for (; 0 < j[a]--;) hS[l] = m[0], hS[l + 1] = m[1], hS[l + 2] = m[2], hS[l + 3] = 255, l += 4;
                    S = !1
                } else {
                    for (; 0 < j[a]--;) hS[l] = I[0], hS[l + 1] = I[1], hS[l + 2] = I[2], hS[l + 3] = 255, l += 4;
                    S = !0
                } bS.putImageData(rS, 0, 0), US = !0, Vl(V), TS.Gj(), pS.request = !0
        }(I);
        else {
            var m = qj.getData($S);
            JS = m.kd, sS = m.Hj, cj.mc(m.seed), Zj.Ij([JS, sS, m.Jj, m.Kj]), 2 === $S ? ml([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === $S ? ml([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === $S ? ml([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === $S && ml([512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]), kj.Ij(), Zj.Lj(), Vl(I)
        }
    }
}

function Vl(V) {
    var j = performance.now();
    vS = 0 > (vS = Math.floor(29 - (j - V) / (33 * qj.getData($S).Mj))) ? 0 : 20 < vS ? 20 : vS
}

function jl(V) {
    return !(1 === V || V >= 10)
}

function Il() {
    function V() {
        TS.Kb()
    }

    function j(V, j) {
        0 < j && (hS[V] += j, hS[V + 1] += j, hS[V + 2] += j)
    }

    function I(V) {
        return hS[V + 2] > hS[V] && hS[V + 2] > hS[V + 1]
    }
    this.Nj = -1, this.Oj = this.Pj = 0, this.Qj = 8, this.Rj = 32, this.Sj = 8, this.Tj = 32, this.Uj = [0, 0], this.Vj = [0, 0, 0, 0], this.Wj = null, this.Xj = !0, this.Yj = !1, this.yh = function() {
        -1 !== this.Nj && clearTimeout(this.Nj), this.Nj = -1, this.Wj = null, Zj.Lj()
    }, this.Gj = function() {
        7 === mj.getState() || this.Yj || (this.Xj = !0, this.Pj = 0, this.Oj = 1, this.Uj = [qj.getData($S).Ej[0], qj.getData($S).Fj[0]], this.Vj = [qj.getData($S).Zj[3], qj.getData($S).Zj[4], qj.getData($S).Zj[5], qj.getData($S).Zj[6]], this.Qj = qj.getData($S).Zj[7], this.Rj = qj.getData($S).Zj[8], this.Sj = qj.getData($S).Zj[9], this.Tj = qj.getData($S).Zj[10], this.Xj ? this.Nj = setTimeout(V, 16) : this.Kb())
    }, this.Kb = function() {
        if (8 === mj.getState() && sV.isActive()) this.Nj = setTimeout(V, 16);
        else {
            if (0 === this.Pj) {
                var j = cj.Xi();
                if (cj.mc(qj.getData($S).Zj[2]), Zj.Ij([JS, sS, qj.getData($S).Zj[0], qj.getData($S).Zj[1]]), cj.mc(j), this.Wj = Zj.$j(), this.Pj++, this.Xj) return void(this.Nj = setTimeout(V, 16))
            }
            j = this.Xj ? 10 : 1e6, j = sS - this.Oj - 1 < j ? sS - this.Oj - 1 : j, j = this.Oj + j;
            for (var m, C, S = this.Oj; S < j; S++)
                for (var l = 1; l < JS - 1; l++)
                    if (I(m = 4 * (C = l + S * JS))) this._j(m, C, 1);
                    else {
                        this._j(m, C, 0);
                        var a = S;
                        (1 < (C = l) && I(m - 4) || C < JS - 2 && I(m + 4) || 1 < a && I(m - 4 * JS) || a < sS - 2 && I(m + 4 * JS)) && this.ak(l, S)
                    } this.Oj = j, this.Oj >= sS - 1 ? (bS.putImageData(rS, 0, 0, 1, 1, JS - 2, sS - 2), pS.request = !0, this.yh()) : this.Xj && (this.Nj = setTimeout(V, 16))
        }
    }, this._j = function(V, I, m) {
        j(V, Math.floor(this.Uj[m] + this.Vj[m] * this.Wj[I] / 1e4) - hS[V])
    }, this.bk = function(V, I, m, C, S) {
        j(V, Math.floor(this.Uj[C] + (1 - I / m) * S) - hS[V])
    }, this.ak = function(V, j) {
        var m = V - this.Rj,
            C = j - this.Rj,
            S = V + this.Rj,
            l = j + this.Rj;
        m = 1 > m ? 1 : m, S = S > JS - 2 ? JS - 2 : S, l = l > sS - 2 ? sS - 2 : l;
        for (var a = 1 > C ? 1 : C; a <= l; a++)
            for (var K = m; K <= S; K++)
                if (I(C = 4 * (K + a * JS))) {
                    var e = this.Qj + (this.Rj - this.Qj) * this.Wj[K + JS * a] / 1e4;
                    if (!(Math.abs(V - K) > e || Math.abs(j - a) > e)) {
                        var L = Math.sqrt((V - K) * (V - K) + (j - a) * (j - a));
                        L >= e || this.bk(C, L, e, 1, this.Vj[3])
                    }
                } else e = this.Sj + (this.Tj - this.Sj) * this.Wj[K + JS * a] / 1e4, Math.abs(V - K) > e || Math.abs(j - a) > e || ((L = Math.sqrt((V - K) * (V - K) + (j - a) * (j - a))) >= e || this.bk(C, L, e, 0, this.Vj[2]))
    }
}

function ml(V, j, I, m, C) {
    var S, l, a, K = V.length - 1,
        e = JS + sS;
    e *= e;
    var L = I.length;
    for (S = L - 1; 0 <= S; S--) I[S] *= I[S];
    var B = Array(L),
        D = Array(L),
        P = Array(L),
        W = Zj.$j();
    if (void 0 === C)
        for (C = Array(L), S = L - 1; 0 <= S; S--) C[S] = 0;
    for (S = 1; S < L; S++) B[S] = I[S] - I[S - 1], D[S] = m[S] - m[S - 1], P[S] = C[S] - C[S - 1];
    for (l = JS - 1; 0 <= l; l--)
        for (a = sS - 1; 0 <= a; a--) {
            var v = e;
            for (S = K; 0 <= S; S--) {
                var t = (l - V[S]) * (l - V[S]) + (a - j[S]) * (a - j[S]);
                v = t < v ? t : v
            }
            t = m[L - 1];
            var n = C[L - 1];
            for (S = 1; S < L; S++)
                if (v < I[S]) {
                    t = m[S - 1] + el((v - I[S - 1]) * D[S], B[S]), n = C[S - 1] + el((v - I[S - 1]) * P[S], B[S]);
                    break
                } Cl(JS * a + l, t, n, W)
        }
}

function Cl(V, j, I, m) {
    500 > j ? m[V] = Kl(m[V] * j * 2, 1e3) : 500 < j && (m[V] += Kl(2 * (1e4 - m[V]) * (j - 500), 1e3)), m[V] += Kl(I * (10 * j - m[V]), 1e3)
}

function Sl() {
    var V;
    this.Gd = this.Fd = this.Dd = this.Cd = 0, this.init = function() {
        (V = Array(10))[0] = {
            threshold: [0, 5e3, 8e3, 1e4],
            red: [220, 250, 255, 220],
            green: [190, 220, 0, 0],
            blue: [170, 200, 0, 0]
        }, V[1] = {
            threshold: [0, 4e3, 5e3, 6e3, 1e4],
            red: [25, 0, 100, 0, 25],
            green: [25, 0, 0, 0, 25],
            blue: [25, 0, 0, 0, 25]
        }, V[2] = {
            threshold: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
            red: [15, 15, 70, 40, 40, 40, 252, 40, 40, 20, 30],
            green: [80, 80, 190, 90, 40, 40, 248, 180, 180, 90, 140],
            blue: [120, 120, 220, 110, 40, 40, 217, 10, 10, 10, 10]
        }, V[3] = {
            threshold: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
            red: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
            green: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
            blue: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
        }, V[4] = {
            threshold: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
            red: [10, 10, 20, 10, 10, 170, 212],
            green: [20, 20, 60, 100, 100, 110, 170],
            blue: [70, 70, 160, 30, 30, 60, 120]
        }, V[5] = {
            threshold: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
            red: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
            green: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
            blue: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
        }, V[6] = {
            threshold: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
            red: [10, 10, 60, 255, 255, 200, 200],
            green: [10, 10, 60, 255, 255, 200, 200],
            blue: [80, 80, 255, 255, 255, 200, 200]
        }, V[7] = {
            threshold: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
            red: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
            green: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
            blue: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
        }, V[8] = {
            threshold: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
            red: [25, 30, 30, 30, 255, 255, 30, 40, 20],
            green: [25, 30, 150, 150, 245, 245, 80, 150, 70],
            blue: [60, 170, 170, 170, 235, 235, 30, 40, 40]
        }, V[9] = {
            threshold: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
            red: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
            green: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
            blue: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
        }
    }, this.Ij = function() {
        (OS = document.createElement("canvas")).width = JS, OS.height = sS;
        var j = (bS = OS.getContext("2d", {
            alpha: !1
        })).getImageData(0, 0, JS, sS);
        hS = j.data;
        var I, m, C = V[$S].threshold,
            S = V[$S].red,
            l = V[$S].green,
            a = V[$S].blue,
            K = Zj.$j(),
            e = C.length - 2,
            L = Array(e + 1),
            B = Array(e + 1),
            D = Array(e + 1),
            P = Array(e + 1);
        for (m = e; 0 <= m; m--) L[m] = C[m + 1] - C[m], B[m] = S[m + 1] - S[m], D[m] = l[m + 1] - l[m], P[m] = a[m + 1] - a[m];
        for (I = JS * sS - 1; 0 <= I; I--)
            for (m = e; 0 <= m; m--)
                if (K[I] >= C[m]) {
                    var W = K[I] - C[m];
                    hS[4 * I] = S[m] + el(B[m] * W, L[m]), hS[4 * I + 1] = l[m] + el(D[m] * W, L[m]), hS[4 * I + 2] = a[m] + el(P[m] * W, L[m]), hS[4 * I + 3] = 255;
                    break
                } bS.putImageData(j, 0, 0), US = !0, pS.request = !0
    }, this.oc = function() {
        var V, j, I = 0,
            m = sS * JS * 4,
            C = wS,
            S = hS;
        for (V = JS - 1; 0 <= V; V--) C[4 * V + 2] = 3, C[m - 4 * V - 2] = 3;
        for (m = 4 * JS, V = sS - 1; 0 <= V; V--) C[V * m + 2] = 3, C[V * m + m - 2] = 3;
        for (V = JS * sS - 1; 0 <= V; V--) 3 !== C[(m = 4 * V) + 2] && (S[m + 2] > S[m + 1] && S[m + 2] > S[m] ? C[m + 2] = 2 : (C[m + 2] = 1, I++));
        if (this.Cd = (JS - 2) * (sS - 2), this.Gd = 0, 3 === (j = $S) || 7 === j || 9 === j || j === xS) {
            S = 0, m = wS;
            var l = hS;
            for (C = JS * sS - 1; 0 <= C; C--) l[V = 4 * C] === l[V + 1] && l[V] === l[V + 2] && 3 !== m[V + 2] && (S++, m[V + 2] = 3);
            kj.Gd = S
        }
        this.Dd = gV = I - this.Gd, this.Fd = this.Cd - this.Dd - this.Gd
    }
}

function ll() {
    var V;
    this.init = function() {
        (V = Array(xS))[0] = {
            name: "White Arena",
            kd: 230,
            Hj: 230,
            Jj: 1e3,
            Kj: 2e3,
            seed: 173,
            Mj: 1
        }, V[1] = {
            name: "Black Arena",
            kd: 800,
            Hj: 800,
            Jj: 100,
            Kj: 50,
            seed: 43,
            Mj: 1
        }, V[2] = {
            name: "Island",
            kd: 512,
            Hj: 512,
            Jj: 128,
            Kj: 32,
            seed: 0,
            Mj: 1.5
        }, V[3] = {
            name: "Mountains",
            kd: 960,
            Hj: 960,
            Jj: 60,
            Kj: 8,
            seed: 0,
            Mj: 1.2
        }, V[4] = {
            name: "Desert",
            kd: 900,
            Hj: 900,
            Jj: 100,
            Kj: 5,
            seed: 0,
            Mj: 1.2
        }, V[5] = {
            name: "Swamp",
            kd: 1e3,
            Hj: 1e3,
            Jj: 100,
            Kj: 40,
            seed: 0,
            Mj: 1.2
        }, V[6] = {
            name: "Snow",
            kd: 1e3,
            Hj: 1e3,
            Jj: 100,
            Kj: 20,
            seed: 0,
            Mj: 1.2
        }, V[7] = {
            name: "Cliffs",
            kd: 1024,
            Hj: 1024,
            Jj: 128,
            Kj: 32,
            seed: 0,
            Mj: 1.5
        }, V[8] = {
            name: "Pond",
            kd: 820,
            Hj: 820,
            Jj: 200,
            Kj: 100,
            seed: 0,
            Mj: 1.2
        }, V[9] = {
            name: "Halo",
            kd: 1024,
            Hj: 1024,
            Jj: 128,
            Kj: 32,
            seed: 0,
            Mj: 1.5
        }, V[10] = {
            name: "Europe",
            Ej: [140, 130, 120],
            Fj: [12, 12, 76],
            Zj: [240, 120, 4672, 30, 26, 30, 90, 8, 32, 3, 9],
            Mj: 1
        }, V[11] = {
            name: "World",
            Ej: [165, 145, 125],
            Fj: [15, 15, 69],
            Zj: [250, 100, 8, 25, 15, 25, 90, 8, 32, 3, 9],
            Mj: 1
        }, V[12] = {
            name: "Caucasia",
            Ej: [140, 130, 120],
            Fj: [20, 20, 84],
            Zj: [240, 120, 100, 30, 25, 30, 90, 8, 32, 3, 9],
            Mj: 1
        }, V[13] = {
            name: "USA 48",
            Ej: [120, 105, 92],
            Fj: [12, 12, 60],
            Zj: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
            Mj: 1
        }, V[14] = {
            name: "Middle East",
            Ej: [140, 130, 120],
            Fj: [12, 12, 76],
            Zj: [240, 120, 4672, 30, 26, 30, 90, 8, 32, 3, 9],
            Mj: 1
        }
    }, this.ck = function() {
        return 1 === $S
    }, this.getData = function(j) {
        return j === xS ? {
            name: "Custom",
            Ej: [140, 130, 120],
            Fj: [12, 12, 76],
            Zj: [240, 120, 4672, 30, 26, 30, 90, 8, 32, 3, 9],
            Mj: 1
        } : V[j]
    }, this.Bd = function() {
        return $S === xS ? VI.zi : this.getData($S).name
    }
}

function al() {
    function V(V, j, I) {
        for (L[0] = V, V = 1; V < I; V++) L[V] = L[V - 1] + j, 1e4 <= L[V] ? (L[V] = 9999, j = -j) : 0 > L[V] ? (L[V] = 0, j = -j) : j = (j += 16384 <= cj.random() ? e : -e) < -K ? -K : j > K ? K : j
    }

    function j(V, j, I, m) {
        if (I)
            for (I = 0; I < m; I++) C[j * S + V + I] = L[I];
        else
            for (I = 0; I < m; I++) C[j * S + V + I * S] = L[I]
    }

    function I(V, j) {
        var I = V - L[j - 1];
        if (0 !== I) {
            var m = 1 + Kl(Math.abs(I), j - 1);
            m = 0 > I ? -m : m, L[j - 1] = V;
            var C = j - 1 - Kl(Math.abs(I), Math.abs(m));
            C = 1 > C ? 1 : C > j - 2 ? j - 2 : C;
            for (var S = j - 2; S >= C; S--) L[S] += I - (j - 1 - S) * m;
            if (0 > I)
                for (I = j - 2; 1 <= I; I--) 0 > L[I] && (L[I] = -L[I] - 1);
            else
                for (I = j - 2; 1 <= I; I--) 1e4 <= L[I] && (L[I] = 2e4 - L[I] - 1)
        }
    }

    function m(V) {
        for (var j = 0; j < V.length - 1; j++) V[j] = V[j + 1] - V[j];
        V[V.length - 1] = V[V.length - 3]
    }
    var C, S, l, a, K, e, L, B, D, P, W, v, t, n;
    this.Ij = function(F) {
        for (S = F[0], l = F[1], K = F[2], e = F[3], C = new Int16Array(S * l), a = S > l ? S : l, L = new Int16Array(a), B = [], D = [], P = [], W = Array(S), v = Array(l), F = S - 1; 0 <= F; F--) W[F] = !1;
        for (F = l - 1; 0 <= F; F--) v[F] = !1;
        t = new Int16Array(S), n = new Int16Array(l), F = a;
        var g = cj.random() % 1e4,
            A = cj.random() % (2 * K + 1) - K;
        V(g, A, F), F = n, g = L, A = l;
        for (var p = 0; p < A; p++) F[p] = g[p];
        for (j(0, 0, !0, S), F = C[0], g = a, V(F, A = cj.random() % (2 * K + 1) - K, g), F = t, g = L, A = S, p = 0; p < A; p++) F[p] = g[p];
        j(0, 0, !1, l), m(t), m(n), V(C[S - 1], t[S - 1], l), j(S - 1, 0, !1, l), V(C[S * (l - 1)], n[l - 1], S), I(C[S * l - 1], S), j(0, l - 1, !0, S), W[S - 1] = W[0] = !0, v[l - 1] = v[0] = !0, F = S, B.push(0), D.push(F), P.push(!0), F = l, B.push(0), D.push(F), P.push(!1);
        V: for (;;) {
            for (g = (F = B.length - 1) - 1; 0 <= g; g--) D[g] > D[F] && (F = g);
            if (5 > D[F]) break V;
            if (g = B[F] + Kl(D[F], 2), P[F]) {
                var G;
                A = void 0, p = g;
                for (var Q = 0, _ = 0; _ < l - 1;) {
                    for (G = Q + 1; G < l; G++)
                        if (v[G]) {
                            _ = G;
                            break
                        } G = _ - Q + 1, V(C[p + S * Q], 0 === Q ? t[p] : L[A - 1] - L[A - 2], G), I(C[_ * S + p], G), j(p, Q, !1, G), A = G, Q = _
                }
                W[p] = !0
            } else {
                for (A = void 0, p = g, _ = Q = 0; _ < S - 1;) {
                    for (G = Q + 1; G < S; G++)
                        if (W[G]) {
                            _ = G;
                            break
                        } G = _ - Q + 1, V(C[p * S + Q], 0 === Q ? n[p] : L[A - 1] - L[A - 2], G), I(C[p * S + _], G), j(Q, p, !0, G), A = G, Q = _
                }
                v[p] = !0
            }
            A = B[F] + D[F] - g, p = P[F], B.push(g), D.push(A), P.push(p), D[F] = g - B[F] + 1
        }
        for (F = 0; F < S; F++)
            if (!W[F])
                for (g = 0; g < l; g++) v[g] || (A = C[g * S + F - 1] + C[(g - 1) * S + F], p = 2, W[F + 1] && (p++, A += C[g * S + F + 1]), v[g + 1] && (p++, A += C[(g + 1) * S + F]), C[g * S + F] = Kl(A, p))
    }, this.$j = function() {
        return C
    }, this.Lj = function() {
        C = null
    }
}

function Kl(V, j) {
    return Math.floor(V / j + 1 / (2 * j))
}

function el(V, j) {
    return 0 <= V ? Kl(V, j) : -Kl(-V, j)
}

function Ll(V) {
    return V * V
}

function Bl(V, j) {
    return V > j ? V : j
}

function Dl(V, j) {
    return V < j ? V : j
}

function Pl(V, j, I) {
    return j < V ? V : j > I ? I : j
}

function Wl(V, j) {
    return 1 > V ? 0 : function(V, j) {
        for (var I = Kl(V + 1, 2), m = 0; m < j; m++) I = Kl(I + Kl(V, I), 2);
        return I
    }(V, j)
}

function vl(V, j, I, m, C, S, l, a) {
    return !(V + I <= C || j + m <= S || V >= C + l || j >= S + a)
}

function tl() {
    function V() {
        fS.tg[2] = fS.tg[3] = fS.tg[4] = !Yj.dk;
        var V = Yj.Wi ? 1 : 0,
            j = Yj.dk ? 1 : 0,
            I = Yj.Vi ? 1 : 0;
        lS ? (window.webkit.messageHandlers.iosCommandA.postMessage("freeSpawn " + V), window.webkit.messageHandlers.iosCommandA.postMessage("unlimitedTime " + j)) : 5 <= eS ? (KS.Wh(25, V), KS.Wh(26, j)) : (Bj.y(6, 4 * I + 2 * j + V), Bj.z())
    }

    function j(V, j, I, m) {
        return 0 === m ? V >= I.ek && (0 === m || j >= I.fk) && j <= I.fk + I.Be : (j -= m * (I.Be - 2), V >= I.ex && (0 === m || j >= I.fk) && j <= I.fk + I.Be)
    }

    function I() {
        var V = Math.floor((LS ? .145 : .09) * jS),
            j = Math.floor(1.5 * V),
            I = Math.floor(.065 * (LS ? .53 : .36) * jS);
        return {
            ek: xC - V - I,
            fk: tI,
            gk: V,
            Be: Math.floor(.35 * V),
            ex: xC - j - I,
            hk: j
        }
    }

    function m(V, j, I, m, C, S, l, a, K, e) {
        e = Math.floor(e * m), wC.font = zm + e + km, a && (C += 80, S += 80, l += 80), wC.fillStyle = "rgba(" + C + "," + S + "," + l + ",0.6)", wC.fillRect(V, j, I, m), wC.fillStyle = tm, wC.fillRect(V, j, I, 2), wC.fillRect(V, j + m - 2, I, 2), wC.fillRect(V, j, 2, m), wC.fillRect(V + I - 2, j, 2, m), wC.fillText(K, Math.floor(V + I / 2), Math.floor(j + m / 2 + .1 * e))
    }
    this.ik = 1, this.Vi = this.dk = this.Wi = !1;
    var C = -1,
        S = !1,
        l = [];
    this.Kb = function() {
        if ((l = []).push({
                jk: "More",
                cm: 0,
                kk: 140,
                mm: 120,
                lk: 0
            }), l.push({
                jk: "Lobby 1",
                cm: 1,
                kk: 0,
                mm: 0,
                lk: 0
            }), l.push({
                jk: "Hide Usernames",
                cm: 2,
                kk: 0,
                mm: 0,
                lk: 0
            }), l.push({
                jk: "Hide Links",
                cm: 3,
                kk: 0,
                mm: 0,
                lk: 0
            }), !lS && 5 > eS && l.push({
                jk: "High Resolution",
                cm: 4,
                kk: 0,
                mm: 0,
                lk: 0
            }), l.push({
                jk: "Tutorial",
                cm: 5,
                kk: 0,
                mm: 0,
                lk: 0
            }), l.push({
                jk: "Player List",
                cm: 6,
                kk: 0,
                mm: 0,
                lk: 0
            }), l.push({
                jk: "Clan List",
                cm: 7,
                kk: 0,
                mm: 0,
                lk: 0
            }), l.push({
                jk: "Privacy Policy",
                cm: 8,
                kk: 0,
                mm: 0,
                lk: 0
            }), !lS && 5 > eS && l.push({
                jk: "Cookie Policy",
                cm: 9,
                kk: 0,
                mm: 0,
                lk: 0
            }), l.push({
                jk: RC,
                cm: 10,
                kk: 90,
                mm: 0,
                lk: 0
            }), lS) this.Wi = aS.vj, this.dk = aS.wj, this.Vi = !1;
        else if (5 <= eS) this.Wi = 1 === KS.yj(25), this.dk = 1 === KS.yj(26), this.Vi = !1;
        else {
            var V = Bj.i(6);
            this.Wi = 1 == (1 & V), this.dk = 2 == (2 & V), this.Vi = 4 == (4 & V)
        }
        l[2].mm = this.Wi ? 130 : 0, l[3].mm = this.dk ? 130 : 0, this.Vi = Ca("highResolution"), this.Vi && setTimeout(Oj.Vh, 2), !lS && 5 > eS && (l[4].mm = this.Vi ? 130 : 0), this.dk && (fS.tg[2] = fS.tg[3] = fS.tg[4] = !1)
    }, this.mk = function(j) {
        !lS && 5 > eS && (Yj.Vi = j, l[4].mm = Yj.Vi ? 130 : 0, V(), Oj.Vh(), pS.request = !0)
    }, this.click = function(m, C) {
        var a;
        if (!(7 <= mj.getState())) {
            var K = I();
            if (S) {
                for (a = 1; a < l.length; a++)
                    if (j(m, C, K, a)) return 1 === l[a].cm ? (Yj.ik = 1 === Yj.ik ? 2 : 2 === Yj.ik ? Uj.sh : 1, l[1].jk = "Lobby " + (Yj.ik === Uj.sh ? "1B" : Yj.ik), pS.request = !0) : 2 === l[a].cm ? (Yj.Wi = !Yj.Wi, l[a].mm = Yj.Wi ? 130 : 0, V(), pS.request = !0) : 3 === l[a].cm ? (Yj.dk = !Yj.dk, l[a].mm = Yj.dk ? 130 : 0, V(), pS.request = !0) : 4 === l[a].cm ? (document.getElementById("highResolution").checked = !Yj.Vi, la("highResolution", !Yj.Vi), this.mk(!Yj.Vi)) : 5 === l[a].cm ? (XS.Kb(im, !0), XS.Kb(im, !1)) : 6 === l[a].cm ? (XS.Kb(cm[0], !0), XS.Kb(cm[0], !1)) : 7 === l[a].cm ? (XS.Kb(cm[1], !0), XS.Kb(cm[1], !1)) : 8 === l[a].cm ? (XS.Kb(dm, !0), XS.Kb(dm, !1)) : 9 === l[a].cm && (XS.Kb(Zm, !0), XS.Kb(Zm, !1)), !0;
                return S = !1, pS.request = !0, !1
            }
            return !!j(m, C, K, 0) && (S = !0, pS.request = !0)
        }
    }, this.$c = function(V, m) {
        var a;
        if (!(7 <= mj.getState())) {
            var K = I(),
                e = C,
                L = S ? l.length - 1 : 1;
            for (C = -1, a = 0; a < L; a++)
                if (j(V, m, K, a)) {
                    C = a;
                    break
                } e !== C && (pS.request = !0)
        }
    }, this._ = function() {
        var V;
        if (!(7 <= mj.getState())) {
            var j = I();
            if (wC.textAlign = Gm, wC.textBaseline = pm, m(j.ek, j.fk, j.gk, j.Be, l[0].kk, l[0].mm, l[0].lk, 0 === C, l[0].jk, .6), S) {
                var a = l.length;
                for (V = 1; V < a; V++) m(j.ex, j.fk + V * j.Be - 2 * V, j.hk, j.Be, l[V].kk, l[V].mm, l[V].lk, C === V, l[V].jk, V === a - 1 ? .32 : .45)
            }
        }
    }
}

function nl() {
    function V() {
        l = !0, I = -1, m = Array(4);
        for (var V = 3; 0 <= V; V--) m[V] = !1;
        V = Math.floor(1 + .02 * VS), C = Array(4), (S = Array(4))[1] = S[3] = C[0] = C[2] = 0, S[0] = C[3] = -V, C[1] = S[2] = V
    }

    function j() {
        if (-1 !== I)
            if (0 !== mI && sV.vb()) {
                for (var V = !1, j = 3; 0 <= j; j--) m[j] && (V = !0, QI += C[j], _I += S[j], zj.$c(C[j], S[j]), wV.vf());
                V ? pS.request = !0 : dj.qb()
            } else dj.qb()
    }
    var I, m, C, S, l = !1;
    this.nk = function(C) {
        0 !== mI && sV.vb() && (l || V(), m[C] = !0, -1 === I && (I = setInterval(j, 20), j()))
    }, this.pk = function(j) {
        if (0 !== mI && (l || V(), m[j] = !1, -1 !== I)) {
            j = !1;
            for (var C = 3; 0 <= C; C--) j = j || m[C];
            j || this.qb()
        }
    }, this.qb = function() {
        if (l && -1 !== I) {
            for (var V = 3; 0 <= V; V--) m[V] = !1;
            clearInterval(I), I = -1
        }
    }
}

function Fl() {
    var V;
    this.La = function() {
        return V
    }, this.Ja = function(j, I) {
        var m;
        if (0 === $I[j].length || !Lj.o(I) || !Lj.u(I) && Lj.A(I) === j) return !1;
        for (m = 21; 0 <= m; m--) {
            if (21 === m) {
                var C = $I[j],
                    S = I,
                    l = Lj.gb(S);
                S = Lj.hb(S);
                var a = 0,
                    K = Lj.gb(C[0]),
                    e = Lj.hb(C[0]);
                for (K = Math.abs(K - l) + Math.abs(e - S), e = C.length - 1; 1 <= e; e--) {
                    var L = Lj.gb(C[e]),
                        B = Lj.hb(C[e]);
                    (L = Math.abs(L - l) + Math.abs(B - S)) < K && (K = L, a = e)
                }
                V = C[a]
            } else V = $I[j][Kl(m * $I[j].length, 21)];
            V: {
                if (e = V, a = I, C = Lj.gb(e), l = Lj.hb(e), S = Lj.gb(a), a = Lj.hb(a), !(2 > (K = Math.abs(S - C) + Math.abs(a - l))))
                    for (L = e, e = 0; e < K; e++)
                        if (L = Math.abs(S - Lj.gb(L)) >= Math.abs(a - Lj.hb(L)) ? L + t[S > C ? 1 : 3] : L + t[a > l ? 2 : 0], !Lj.D(L)) {
                            if (Lj.o(L)) {
                                if (0 === e || e + 20 < K) break;
                                C = !0;
                                break V
                            }
                            break
                        } C = !1
            }
            if (C) return !0
        }
        return !1
    }
}

function gl() {
    function V() {
        var V, m = 0,
            l = 0,
            e = Math.floor(C / 2),
            L = Math.floor(S / 2),
            B = 1.5 * Math.PI;
        for (V = XV; 0 <= V; V--) l += K[V], 0 === K[V] && m++;
        if (I = !1, Aj.isActive && Aj.wa && (l -= K[0], K[0] = 0), a.clearRect(0, 0, C, C), a.fillStyle = yI, a.fillRect(0, 0, C, C), a.fillStyle = Im, a.fillRect(0, 0, C, 2), a.fillRect(0, 0, 2, C), a.fillRect(C - 2, 0, 2, C), a.fillRect(0, C - 2, C, 2), 0 < l)
            if (m === XV) {
                for (V = XV; 0 <= V; V--)
                    if (0 < K[V]) {
                        l = e, B = L, a.fillStyle = GS.zh[GS.$b[V]], a.beginPath(), a.arc(l, l, B, 0, 2 * Math.PI), a.fill();
                        break
                    }
            } else {
                for (V = 0; V <= XV; V++)
                    if (0 < K[V]) {
                        var D = e,
                            P = L,
                            W = B,
                            v = m = B + 2 * Math.PI * K[V] / l;
                        a.fillStyle = GS.zh[GS.$b[V]], a.beginPath(), a.arc(D, D, P, W, v), a.lineTo(D, D), a.fill(), 0 !== V && j(e, L, B), B = m
                    } j(e, L, 1.5 * Math.PI)
            } a.beginPath(), a.arc(e, e, L, 0, 2 * Math.PI), a.stroke()
    }

    function j(V, j, I) {
        a.beginPath(), a.moveTo(V, V), a.lineTo(V + Math.cos(I) * j, V + Math.cos(I + 1.5 * Math.PI) * j), a.stroke()
    }
    var I = !1,
        m = 0,
        C = 0,
        S = 0,
        l = null,
        a = null,
        K = null;
    this.Kb = function() {
        if (fV) {
            m = 16, K = new Uint32Array(XV + 1);
            for (var V = XV; 0 < V; V--) K[V] = 1;
            this.Ad()
        } else K = a = l = null
    }, this.mf = function() {
        return C
    }, this.Ad = function() {
        fV && (C = Math.floor(.18 * VS), C += C % 2, S = Math.floor(7 * C / 8), (l = l || document.createElement("canvas")).width = C, l.height = C, (a = l.getContext("2d", {
            alpha: !0
        })).lineWidth = 2, a.strokeStyle = tm, V())
    }, this.qf = function() {
        return K[this.Qd()]
    }, this.Yb = function() {
        return m = 31, this.Da(), this.Qd()
    }, this.Qd = function() {
        for (var V = 0, j = XV; 0 < j; j--) K[j] > K[V] && (V = j);
        return V
    }, this.Da = function() {
        if (fV && 32 <= ++m) {
            var V;
            for (m = 0, V = XV; 0 <= V; V--) K[V] = 0;
            for (V = YI - 1; 0 <= V; V--) K[GS.na[TI[V]]] += sI[TI[V]];
            I = !0
        }
    }, this.Ia = function() {
        fV && I && V()
    }, this.Ib = function() {
        fV && wC.drawImage(l, WI, fI + 2 * WI)
    }
}

function Al() {
    var V, j;
    this.init = function() {
        for (var V = (j = Array(101)).length - 1; 0 <= V; V--) j[V] = Kl(32768 * V, 100);
        this.mc(0)
    }, this.value = function(V) {
        return j[V]
    }, this.Xi = function() {
        return Kl(V - 1, 2)
    }, this.mc = function(j) {
        V = 2 * j % 32768 + 1
    }, this.random = function() {
        return V = 167 * V % 32768
    }, this.da = function(V) {
        return Kl(V * this.random(), 32768)
    }, this.ja = function(V) {
        return 0 !== V && this.random() < this.value(V)
    }
}

function pl() {
    function V() {
        null !== C && (clearTimeout(C), C = null), j(!0), C = setTimeout((() => {
            ej.X() && nS.init()
        }), 500)
    }

    function j(V) {
        null !== C && (clearTimeout(C), C = null), ej.X() && (m() || S) && (S = !1, Pj.Ha(), om(), kS.init(), jj.init(), Sj.resize(), fS.Kb(), Ij.resize(), RV.resize(), HV.resize(), AS.Ad(), _S.resize(), V || nS.init(), 1 <= mI ? (xV.resize(!1), uV.resize(), yV.resize(), wV.resize(), YV.resize(), $V.Ad(), hV.resize(), $j.Ad(), UV.resize(), TV.resize(), rV.zc(), gS.Ad(), zj.resize(), Vj.resize(), QS.Ad(), wV.vf()) : (0 === mj.getState() ? Sj.toggle(0, !0) : 2 === mj.getState() ? aj.Ad() : 3 === mj.getState() && Cj.Ad(), mj.Yg(), mj.ah()), pS.request = !0)
    }

    function I(V) {
        return V && 128 < V ? Math.floor(V) : 128
    }

    function m() {
        if (5 <= eS) {
            var V = I(document.documentElement.clientWidth),
                j = I(document.documentElement.clientHeight);
            if (CS = 1, V !== IS || j !== mS) {
                if (VS = Dl(xC = IS = V, yC = mS = j), jS = Kl(yC + xC, 2), 5 <= eS) {
                    var m = KS.yj(23),
                        C = KS.yj(24);
                    V > m && (m = V, KS.Wh(23, m)), j > C && (C = j, KS.Wh(24, C))
                } else m = V, C = j;
                V = YC.width, j = YC.height, m > V && (V = m, YC.width = m), C > j && (j = C, YC.height = C), YC.style.width = V + "px", YC.style.height = j + "px", m = !0
            } else m = !1;
            return m
        }
        return Yj.Vi && (CS = window.devicePixelRatio) || (CS = 1), m = I(document.documentElement.clientWidth), C = I(document.documentElement.clientHeight), V = Math.floor(.5 + CS * m), j = Math.floor(.5 + CS * C), (V !== IS || j !== mS) && (IS = xC = V, mS = yC = j, VS = Dl(xC, yC), jS = Kl(yC + xC, 2), YC.width = V, YC.height = j, YC.style.width = m + "px", YC.style.height = C + "px", !0)
    }
    var C, S = !1;
    this.init = function() {
        xC = yC = VS = IS = mS = jS = 0, CS = 1, YC = document.getElementById("canvasA"), (wC = YC.getContext("2d", {
            alpha: !1
        })).imageSmoothingEnabled = !1, m(), window.addEventListener("resize", V)
    }, this.Ba = function() {
        wj.Ba()
    }, this.Vh = function() {
        S = !0, j(!1)
    }
}

function Gl() {
    function V(V, j) {
        JV.bb(I, D), Qj.S(I, B), V && (Fj.add(I, m, j ? "Leftover boat exports" : "Boat landing on own territory", 4, j ? "boat_exports" : "boat_landing"), bI[I] += m)
    }

    function j() {
        Lj.ki(C, I) && Lj.li(C)
    }
    var I, m, C, S, l, a, K, e, L, B, D;
    this.ab = function(P, W, v, n, F) {
        if (L = P, D = W, I = v, l = Lj.gb(n), a = Lj.hb(n), K = Lj.gb(F), e = Lj.hb(F), S = C = Lj.Ka(l, a), -1 === (B = Qj.Qa(I, D)) ? (j(), JV.bb(I, D), P = !1) : (m = Qj.I(I, B), P = !0), P && (j(), P = Kl(m, 128), m -= P = 1 > P ? 1 : P, I === GV && (FS.R[15] += P), m <= SI ? (I === GV && (FS.R[15] += m), V(!1, !0), P = !1) : (Qj.K(I, B, m), P = !0), P))
            if (P = Lj.Ka(l, a), C = Math.abs(K - l) >= Math.abs(e - a) ? P + t[K > l ? 1 : 3] : P + t[e > a ? 2 : 0], l = Lj.gb(C), a = Lj.hb(C), JV.setPosition(L, C), P = !Lj.o(C)) Lj.D(C) && Lj.mi(C, I);
            else V: {
                if (Lj.u(C)) P = jI;
                else {
                    if ((P = Lj.A(C)) === I) {
                        V(!0, !1);
                        break V
                    }
                    if (!Zl(I, P)) {
                        0 >= (W = 150 * sI[P] - bI[P]) || (m -= W = m > W ? W : m, I === GV && ($V.Yd(W, P), FS.R[16] += W), P === GV && ($V.Zd(W, I), FS.R[10] += W), Fj.add(P, W, "Boat support by " + I, 3, "boat_" + I), bI[P] += W), V(!0, !0);
                        break V
                    }
                }
                I === GV && (FS.R[13] += m),
                JV.bb(I, D),
                Qj.S(I, B),
                rI[I].push(S),
                Qj.aa(I, m, P),
                EV.ba(I, !0)
            }
    }, this.eb = function(V, m) {
        I = V, C = Lj.Ka(Lj.gb(m), Lj.hb(m)), j()
    }
}

function Ql() {
    var V, j, I, m;
    this.init = function() {
        var C, S, l;
        I = !0, m = "rgb(" + hS[0] + "," + hS[1] + "," + hS[2] + ")";
        var a, K = 2 === (a = $S) || 7 === a || 9 === a || (I = !1);
        if (K) j = null;
        else {
            if (V = Kl(96, 4), 1 === $S) var e = 0,
                L = 160;
            else e = 128, L = 32;
            for (m = "rgb(" + e + "," + e + "," + e + ")", j = Array(4), K = 3; 0 <= K; K--) {
                j[K] = document.createElement("canvas");
                var B = 0 == K % 2 ? JS : V,
                    D = 0 == K % 2 ? V : sS + 2 * V;
                j[K].width = B, j[K].height = D;
                var P = j[K].getContext("2d", {
                        alpha: !1
                    }),
                    W = P.getImageData(0, 0, B, D),
                    v = W.data;
                if (0 == K % 2)
                    for (S = V - 1; 0 <= S; S--) {
                        var t = L + Math.floor((S + 1) * (e - L) / (V + 1));
                        for (C = B - 1; 0 <= C; C--) {
                            var n = 4 * ((0 === K ? V - S - 1 : S) * B + C);
                            v[n] = t, v[n + 1] = t, v[n + 2] = t, v[n + 3] = 255
                        }
                    } else {
                        for (C = V - 1; 0 <= C; C--)
                            for (t = L + Math.floor((C + 1) * (e - L) / (V + 1)), S = D - 1 - V; S >= V; S--) v[n = 4 * (S * B + (3 === K ? V - C - 1 : C))] = t, v[n + 1] = t, v[n + 2] = t, v[n + 3] = 255;
                        for (l = 1; 0 <= l; l--)
                            for (C = V - 1; 0 <= C; C--)
                                for (S = V - 1; 0 <= S; S--) t = 1 < (t = (Math.pow(C * C + S * S, .5) + 1) / (V + 1)) ? 1 : t, t = L + Math.floor(t * (e - L)), v[n = 4 * ((0 === l ? V - S - 1 : S + l * (D - V)) * B + (1 === K ? C : V - C - 1))] = t, v[n + 1] = t, v[n + 2] = t, v[n + 3] = 255
                    }
                P.putImageData(W, 0, 0)
            }
            bS.fillStyle = "rgb(" + L + "," + L + "," + L + ")", bS.fillRect(0, 0, JS, 1), bS.fillRect(0, sS - 1, JS, 1), bS.fillRect(0, 0, 1, sS), bS.fillRect(JS - 1, 0, 1, sS)
        }
    }, this.Eb = function() {
        var j, C, S, l, a, K, e, L, B = I ? 0 : -V;
        j = B, C = B, S = JS - 2 * B, l = sS - 2 * B, a = WS.qk, K = WS.rk, e = WS.sk, L = WS.tk, j <= a && C <= K && j + S >= a + e && C + l >= K + L || (wC.fillStyle = m, wC.fillRect(0, 0, IS, mS))
    }, this._ = function() {
        I || (vl(0, -V, JS, V, WS.qk, WS.rk, WS.sk, WS.tk) && wC.drawImage(j[0], WS.uk, WS.vk - V), vl(JS, -V, V, sS + 2 * V, WS.qk, WS.rk, WS.sk, WS.tk) && wC.drawImage(j[1], WS.uk + JS, WS.vk - V), vl(0, sS, JS, V, WS.qk, WS.rk, WS.sk, WS.tk) && wC.drawImage(j[2], WS.uk, WS.vk + sS), vl(-V, -V, V, sS + 2 * V, WS.qk, WS.rk, WS.sk, WS.tk) && wC.drawImage(j[3], WS.uk - V, WS.vk - V))
    }
}

function _l() {
    function V() {}

    function j() {
        Uj.mj(l, a)
    }

    function I(V) {
        1 === ++K ? L.readAsArrayBuffer(V.data) : e.push(V.data)
    }

    function m() {
        K--, Mj.read(l, new Uint8Array(L.result)), 0 < K && (L.readAsArrayBuffer(e[0]), e.shift())
    }

    function C() {}

    function S(V) {
        Uj.rj(l, V)
    }
    var l, a, K, e, L, B;
    this.init = function(V, D) {
        l = V, a = D, K = 0, e = [], (L = new FileReader).addEventListener("loadend", m);
        var P = Em[0];
        P = l < Uj.sh ? P + (Uj.gj[l] + Em[1 + ZS]) : P + (Uj.gj[0] + "/i") + (1 + ZS) + (l - Uj.th) + "/", (B = new WebSocket(P)).onopen = j, B.onmessage = I, B.onclose = S, B.onerror = C
    }, this.wk = function() {
        return B.readyState === B.CONNECTING
    }, this.isConnected = function() {
        return B.readyState === B.OPEN
    }, this.fj = function() {
        return this.wk() || this.isConnected()
    }, this.kj = function(V) {
        a = V
    }, this.send = function(V) {
        this.isConnected() && B.send(V)
    }, this.close = function(V) {
        this.fj() && (B.close(V), this.lj())
    }, this.lj = function() {
        B.onopen = V, B.onmessage = V, B.onclose = V, B.onerror = V, L.removeEventListener("loadend", m)
    }
}

function zl() {
    this.xk = 501, this.yk = new Uint32Array(this.xk), this.balance = new Uint32Array(this.xk), this.zk = new Uint16Array(this.xk), this.index = 0, this.precision = 1, this.Ak = 0, this.max = [0, 0, 0], this.R = 0, this.Bk = "Avg. Attack Strength;Number Attacks;Ships sent;Bots conquered;Humans conquered;Attacked by Bots;Attacked by Humans;Territorial Loss;Territorial Income;Interest Income;Received Support;Overall Income;Commanding Costs;Attack Losses;Defense Losses;Shipping Losses;Transmitted Support;Overall Expenses".split(";"), this.init = function() {
        this.index = 0, this.precision = 1, this.Ak = 0, this.Ck(), this.Dk()
    }, this.Ba = function() {
        0 < this.Ak-- || this.Ek()
    }, this.Ek = function() {
        0 !== EI[GV] && (this.yk[this.index] = sI[GV], this.balance[this.index] = bI[GV], this.zk[this.index] = _j.Pf(GV), this.Fk(this.index), this.index++, this.index === this.xk && this.Gk(), this.Ak = this.precision - 1, gS.Ia())
    }, this.Gk = function() {
        this.Ck(), this.Fk(0), this.index = 1 + Kl(this.xk, 2);
        for (var V = 1; V < this.index; V++) this.yk[V] = this.yk[2 * V], this.balance[V] = this.balance[2 * V], this.zk[V] = this.zk[2 * V], this.Fk(V);
        this.precision *= 2
    }, this.Ck = function() {
        this.max[0] = this.max[1] = this.max[2] = 0
    }, this.Dk = function() {
        this.R = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, this.Fk = function(V) {
        this.max[0] = this.yk[V] > this.max[0] ? this.yk[V] : this.max[0], this.max[1] = this.balance[V] > this.max[1] ? this.balance[V] : this.max[1], this.max[2] = this.zk[V] > this.max[2] ? this.zk[V] : this.max[2]
    }
}

function fl() {
    this.de = this.Hk = this.Ik = this.Jk = this.Kk = this._d = this.ae = this.Lk = this.Mk = this.he = this.be = this.ce = this.ld = 0, this.Nk = ["Territory", "Balance", "Interest", "Numbers"], this.Cc = !1, this.Ok = -1, this.Pk = !1, this.Qk = [0, 0], this.Kb = function() {
        this.Cc = !1, this.Ok = -1, this.Pk = !1, this.Ad()
    }, this.Ad = function() {
        this.ld = xC < 1.618 * yC ? xC : 1.618 * yC, this.ld = Math.floor((LS && xC < yC ? 1 : LS ? .8 : xC < yC ? .65 : .5) * this.ld), this.Hk = Math.floor(1 + .006 * this.ld), this.ld -= LS && xC < yC ? 2 * WI + this.Hk : 0, this.ce = Math.floor(this.ld / 1.618), this.be = Math.floor(1 + .02 * this.ld), this.ae = this.he = Math.floor(1 + .04 * this.ld), this._d = Math.floor(1 + .075 * this.ld), this.Jk = Math.floor(this.ld * (LS ? .028 : .02)), this.Jk = 6 > this.Jk ? 6 : this.Jk, this.Ik = Math.floor(.028 * this.ld), this.Ik = 6 > this.Ik ? 6 : this.Ik, this.Kk = this.ce - 2 * this.ae - this._d, this.Cc && this.Rk()
    }, this.Ld = function(V, j) {
        if (!this.Cc) return !1;
        var I = V,
            m = j;
        return V -= Kl(IS - this.ld, 2), j -= Kl(mS - this.ce, 2), 0 > V || 0 > j || V >= this.ld || j >= this.ce ? (1 < hV.click(I, m) || this.Qe(), !0) : j < this.ce - this._d ? (this.Pk = !0, this.Ok = (V - 2 * this.be - this.Mk) / this.Lk, !0) : ((I = 0 > (I = Math.floor(V / (this.ld / this.Nk.length))) ? 0 : I >= this.Nk.length ? this.Nk.length - 1 : I) !== this.de && (this.de = I, this.Rk(), pS.request = !0), !0)
    }, this.Sk = function() {
        var V = Math.floor((this.Qk[0] + QI) / GI),
            j = Math.floor((this.Qk[1] + _I) / GI);
        1 > V || 1 > j || V >= JS - 1 || j >= sS - 1 || console.log(V + " " + j)
    }, this.$c = function(V, j) {
        if (this.Qk[0] = V, this.Qk[1] = j, this.Cc && this.Pk) {
            V -= Kl(IS - this.ld, 2);
            var I = this.Ok;
            return this.Ok = (V - 2 * this.be - this.Mk) / this.Lk, (0 <= this.Ok && 1 >= this.Ok || 0 <= I && 1 >= I) && (pS.request = !0), !0
        }
        return !1
    }, this._e = function() {
        this.Pk && (this.Pk = !1)
    }, this.ed = function() {
        this.Cc ? this.Qe() : this.show()
    }, this.show = function() {
        2 > FS.index || (this.Cc = !0, this.Rk())
    }, this.Qe = function() {
        this.Cc = !1, this.Ok = -1
    }, this.Rk = function() {
        2 > this.de ? this.Mk = TV.measureText(UV.jb(FS.max[this.de]), zm + this.Jk + km) : 2 === this.de && (this.Mk = TV.measureText(yV.Ed(6, 2), zm + this.Jk + km)), this.Lk = this.ld - 2 * this.be - this.Mk - this.he
    }, this.Ia = function() {
        this.Cc && this.Rk()
    }, this.Ib = function() {
        this.Cc && this.je()
    }, this.je = function() {
        var V = Kl(IS - this.ld, 2),
            j = Kl(mS - this.ce, 2);
        wC.setTransform(1, 0, 0, 1, V, j), wC.fillStyle = yI, wC.fillRect(0, 0, this.ld, this.ce), this.Tk(), wC.strokeRect(0, 0, this.ld, this.ce), wC.textAlign = _m, wC.font = zm + this.Jk + km, 0 === this.de ? this.Uk(FS.yk, V, j) : 1 === this.de ? this.Uk(FS.balance, V, j) : 2 === this.de ? this.Vk(V, j) : 3 === this.de && (this.Wk(V, j), this.Xk(V, j)), wC.setTransform(1, 0, 0, 1, 0, 0)
    }, this.Tk = function() {
        wC.lineWidth = this.Hk, wC.textBaseline = pm, wC.textAlign = Gm, wC.strokeStyle = tm, wC.font = zm + this.Ik + km;
        var V = this.ld / this.Nk.length;
        wC.fillStyle = "rgba(0,200,0,0.5)", wC.fillRect(this.de * V, this.ce - this._d, V, this._d), wC.fillStyle = tm;
        for (var j = this.Nk.length - 1; 0 <= j; j--) wC.strokeRect(j * V, this.ce - this._d, V, this._d), wC.fillText(this.Nk[j], (j + .5) * V, this.ce - .46 * this._d)
    }, this.Uk = function(V, j, I) {
        var m = FS.max[this.de];
        for (wC.setTransform(1, 0, 0, 1, j + 2 * this.be + this.Mk, I + this.ae), wC.lineWidth = 2, j = this.Kk / Math.sqrt(m), wC.beginPath(), wC.moveTo(this.Lk, this.Kk - j * Math.sqrt(V[FS.index - 1])), I = FS.index - 2; 0 <= I; I--) wC.lineTo(I * this.Lk / (FS.index - 1), this.Kk - j * Math.sqrt(V[I]));
        wC.stroke(), .95 > (V = this.qd(V, j, .5)) && wC.fillText(UV.jb(m), -this.be, 0), .05 < Math.abs(V - .5) && wC.fillText(UV.jb(Math.floor(m / 4)), -this.be, Math.floor(this.Kk / 2)), .05 < V && wC.fillText("0", -this.be, this.Kk)
    }, this.Vk = function(V, j) {
        wC.setTransform(1, 0, 0, 1, V + 2 * this.be + this.Mk, j + this.ae), wC.lineWidth = 2;
        var I = this.Kk / FS.max[this.de];
        wC.beginPath(), wC.moveTo(this.Lk, this.Kk - I * FS.zk[FS.index - 1]);
        for (var m = FS.index - 2; 0 <= m; m--) wC.lineTo(m * this.Lk / (FS.index - 1), this.Kk - I * FS.zk[m]);
        wC.stroke(), I = this.qd(FS.zk, I, 1), m = FS.max[this.de] / 100, .95 > I && wC.fillText(yV.Ed(m, 2), -this.be, 0), .05 < Math.abs(I - .5) && wC.fillText(yV.Ed(m / 2, 2), -this.be, Math.floor(this.Kk / 2)), .05 < I && wC.fillText(yV.Ed(0, 2), -this.be, this.Kk)
    }, this.Wk = function(V, j) {
        var I;
        wC.setTransform(1, 0, 0, 1, V + .34 * this.ld, j + 2 * this.ae), wC.textAlign = _m;
        var m = this.ce - 4 * this.ae - this._d;
        for (I = 7; 0 <= I; I--) wC.fillText(FS.Bk[I], 0, I * m / 7);
        for (wC.setTransform(1, 0, 0, 1, V + .39 * this.ld, j + 2 * this.ae), wC.textAlign = Qm, I = FS.R[1], wC.fillText(yV.Ed(FS.R[0] / (10 * (1 > I ? 1 : I)), 1), 0, 0), I = 6; 1 <= I; I--) wC.fillText(FS.R[I].toString(), 0, I * m / 7);
        wC.fillText(yV.Ed(100 * (1 - sI[GV] / FS.R[7]), 0), 0, m)
    }, this.Xk = function(V, j) {
        var I;
        wC.setTransform(1, 0, 0, 1, V + .74 * this.ld, j + 2 * this.ae), wC.textAlign = _m;
        var m = this.ce - 4 * this.ae - this._d;
        for (wC.fillStyle = Sm, I = 2; 0 <= I; I--) wC.fillText(FS.Bk[I + 8], 0, I * m / 9);
        for (wC.fillStyle = Cm, wC.fillText(FS.Bk[11], 0, 3 * m / 9), wC.fillStyle = vm, I = 8; 4 <= I; I--) wC.fillText(FS.Bk[I + 8], 0, I * m / 9);
        wC.fillStyle = Wm, wC.fillText(FS.Bk[17], 0, 9 * m / 9), wC.fillStyle = Sm, I = UV.jb(FS.R[8] + FS.R[9] + FS.R[10] + FS.R[11]);
        var C = wC.measureText(I).width;
        wC.setTransform(1, 0, 0, 1, V + .79 * this.ld + C, j + 2 * this.ae), wC.fillText(UV.jb(FS.R[8]), 0, 0), wC.fillText(UV.jb(FS.R[9]), 0, 1 * m / 9), wC.fillText(UV.jb(FS.R[10]), 0, 2 * m / 9), wC.fillStyle = Cm, wC.fillText(I, 0, 3 * m / 9), wC.fillStyle = vm, I = FS.R[13] - Qj.Ri(GV), wC.fillText(UV.jb(FS.R[12]), 0, 4 * m / 9), wC.fillText(UV.jb(I), 0, 5 * m / 9), wC.fillText(UV.jb(FS.R[14]), 0, 6 * m / 9), wC.fillText(UV.jb(FS.R[15]), 0, 7 * m / 9), wC.fillText(UV.jb(FS.R[16]), 0, 8 * m / 9), I = FS.R[12] + I + FS.R[14] + FS.R[15] + FS.R[16] + FS.R[17], wC.fillStyle = Wm, wC.fillText(UV.jb(I), 0, m), wC.fillStyle = tm
    }, this.qd = function(V, j, I) {
        if (0 > this.Ok || 1 < this.Ok) return .25;
        var m = this.Ok * (FS.index - 1),
            C = Math.floor(m),
            S = V[C];
        return S += (m - C) * (V[C < FS.index - 1 ? C + 1 : C] - S), wC.strokeStyle = Fm, .04 < this.Ok && this.Yk(0, this.Kk - j * Math.pow(S, I), m * this.Lk / (FS.index - 1), this.Kk - j * Math.pow(S, I)), .04 < S / FS.max[this.de] && this.Yk(m * this.Lk / (FS.index - 1), this.Kk, m * this.Lk / (FS.index - 1), this.Kk - j * Math.pow(S, I)), wC.fillStyle = "rgba(255,100,100,0.8)", wC.beginPath(), wC.arc(m * this.Lk / (FS.index - 1), this.Kk - j * Math.pow(S, I), 4, 0, 2 * Math.PI), wC.fill(), V = this.Ok * pS.Qf(), V = 0 === EI[GV] ? Math.floor(V * Vj.Sf) : Math.floor(V * pS.ma()), wC.fillStyle = tm, wC.fillText(1 === I ? yV.Ed(S / 100, 2) : UV.jb(Math.floor(S)), -this.be, this.Kk - j * Math.pow(S, I)), wC.textAlign = Gm, wC.fillText(yV.Mf(V), m * this.Lk / (FS.index - 1), this.Kk + this.Jk - (LS ? 2 : 0)), wC.textAlign = _m, j * Math.pow(S, I) / this.Kk
    }, this.Yk = function(V, j, I, m) {
        wC.beginPath(), wC.moveTo(V, j), wC.lineTo(I, m), wC.stroke()
    }
}

function Xl() {
    this.zh = "rgba(130,130,130,0.88) rgba(130,12,12,0.88) rgba(12,130,12,0.88) rgba(12,12,130,0.88) rgba(130,130,12,0.88) rgba(130,12,130,0.88) rgba(12,130,130,0.88) rgba(130,130,130,0.88) rgba(0,0,0,0.88)".split(" "), this.Lf = [tm, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(240,25,240)", "rgb(25,240,240)", tm, "rgb(170,170,170)"], this.Zk = [tm, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", tm, wI], this.$k = [wI, tm, tm, tm, wI, wI, wI, wI, tm], this.Ti = ["rgba(255,255,255,", "rgba(0,0,0,", "rgba(170,170,170,", "rgba(85,85,85,"], this.Ui = ["rgb(255,255,255)", "rgb(0,0,0)", "rgb(170,170,170)", "rgb(85,85,85)"], this.Sd = "White Red Green Blue Yellow Magenta Cyan White Black".split(" "), this.Uf = [
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
    var V, j, I = [
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
    this.$b = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.init = function(V) {
        this.na = new Uint8Array(jI), this._k(), fV && (VI.isActive && VI.ta.Oi ? this.al() : 9 === kV ? this.bl() : this.cl(V))
    }, this.al = function() {
        var V, j = II;
        for (this.$b = [0, 1, 2, 3, 4, 5, 6, 7, 8], V = 0; V < j; V++) this.na[V] = VI.ta.Oi[V]
    }, this._k = function() {
        for (var I = this.$b.length - 1; 0 <= I; I--) this.$b[I] = I;
        V = [], j = []
    }, this.bl = function() {
        var V;
        for (V = PV + Xj.ya - 1; 0 <= V; V--) this.na[V] = 1;
        for (V = PV + Xj.ya; V < jI; V++) this.na[V] = 2;
        this.$b[1] = 7, this.$b[2] = 8
    }, this.cl = function(V) {
        var j = new Uint8Array(PV),
            I = new Uint8Array(PV),
            m = new Uint16Array(8),
            C = new Uint16Array(this.$b.length);
        if (this.dl(V, j, I, m), this.el(m), nV || this.fl(C, j, I), this.gl(j, I, C), Aj.isActive && Aj.wa)
            for (var S = PV; S < jI; S++) this.na[S] = 0;
        else nV ? this.hl() : this.il()
    }, this.dl = function(V, j, m, C) {
        var S, l, a = this.$b.length - 1,
            K = new Uint16Array(a);
        for (S = PV - 1; 0 <= S; S--) {
            for (l = a; 1 <= l; l--) K[l - 1] = Math.abs(4 * V[S].color[0] - I[l][0]) + Math.abs(4 * V[S].color[1] - I[l][1]) + Math.abs(4 * V[S].color[2] - I[l][2]);
            var e = 768;
            for (l = a - 1; 0 <= l; l--) {
                var L = (l + S) % a;
                K[L] < e && (e = K[L], j[S] = L)
            }
            for (C[j[S]] += 4, e = 768, l = a - 1; 0 <= l; l--) K[L = (l + S) % a] < e && L !== j[S] && (e = K[L], m[S] = L);
            C[m[S]]++
        }
    }, this.el = function(V) {
        var j, I, m = this.$b.length - 1;
        for (j = m; 0 <= j; j--) this.$b[j] = j;
        for (j = m - 1; 0 <= j; j--) V[j]++;
        for (j = 1; j <= m; j++) {
            var C = 0;
            for (I = 1; I < m; I++) V[I] > V[C] && (C = I);
            V[C] = 0, this.$b[j] = C + 1
        }
    }, this.fl = function(I, m, C) {
        var S = this.$b.length - 1,
            l = new Uint16Array(S),
            a = [],
            K = PV - 1;
        V: for (; 0 <= K; K--) {
            var e = K,
                L = cI[e].indexOf("[");
            if (0 > L) L = null;
            else {
                var B = cI[e].indexOf("]");
                L = 1 < B - L && 8 >= B - L ? cI[e].substring(L + 1, B).toUpperCase().trim() : null
            }
            if (null !== L) {
                for (B = V.length - 1; 0 <= B; B--)
                    if (L === V[B]) {
                        j[B].push(K);
                        continue V
                    } V.push(L), a.push(!1), j.push([]), j[V.length - 1].push(K)
            }
        }
        for (B = V.length - 1; 0 <= B; B--) {
            for (e = -1, L = V.length - 1; 0 <= L; L--) !a[L] && (-1 === e || j[L].length > j[e].length) && (e = L);
            for (L = S - 1; 0 <= L; L--) l[L] = 1;
            for (L = j[e].length - 1; 0 <= L; L--) l[m[j[e][L]]] += 3, l[C[j[e][L]]]++;
            for (K = S - 1; 0 <= K; K--) {
                var D = e % S;
                for (L = S - 1; 0 <= L; L--) l[L] > l[D] && (D = L);
                var P = -1;
                for (L = XV; 0 < L; L--)
                    if (this.$b[L] === D + 1) {
                        P = L;
                        break
                    } if (l[D] = 0, -1 !== P) {
                    for (D = 0, L = XV; 0 < L; L--) I[P] > I[L] && D++;
                    if (D !== XV - 1) {
                        for (L = j[e].length - 1; 0 <= L; L--) I[P]++, this.na[j[e][L]] = P;
                        break
                    }
                }
            }
            a[e] = !0
        }
    }, this.gl = function(V, j, I) {
        var m, C = this.$b.length - 1,
            S = Kl(PV, XV);
        0 < PV % XV && S++;
        var l = new Uint8Array(C + 1);
        for (m = C; 1 <= m; m--) l[this.$b[m]] = m;
        for (C = 0; C < PV; C++) m = l[V[C] + 1], 0 === this.na[C] && m <= XV && I[m] < S && (I[m]++, this.na[C] = m);
        for (C = 0; C < PV; C++) m = l[j[C] + 1], 0 === this.na[C] && m <= XV && I[m] < S && (I[m]++, this.na[C] = m);
        for (m = XV; 1 <= m; m--)
            for (C = PV - 1; 0 <= C && !(I[m] >= S); C--) 0 === this.na[C] && (I[m]++, this.na[C] = m)
    }, this.hl = function() {
        var V, j = new Uint16Array(XV);
        for (j[XV - 1] = jI, V = XV - 2; 0 <= V; V--) j[V] = aj.na[V].count;
        j[0]--;
        var I = 0 === j[0] ? 1 : 0;
        for (V = PV; V < jI; V++) this.na[V] = I + 1, j[I]--, 0 >= j[I] && I++
    }, this.il = function() {
        for (var V = PV; V < jI; V++) this.na[V] = 1 + V % XV
    }, this.jl = function() {
        var I, m, C = [];
        for (I = V.length - 1; I >= 0; I--)
            for (m = j[I].length - 1; 0 <= m; m--) C[j[I][m]] = V[I];
        return C
    }, this.Zb = function(I) {
        if (nV) return [jI, ""];
        var m, C, S = -1,
            l = -1;
        for (C = V.length - 1; 0 <= C; C--)
            for (m = j[C].length - 1; 0 <= m && this.$b[this.na[j[C][m]]] === I; m--)(-1 === S || dI[j[C][m]] < dI[S]) && (S = j[C][m], l = C);
        return -1 === S || 0 === EI[S] ? [jI, ""] : [S, V[l]]
    }
}

function kl(V) {
    for (var j = V.length, I = j - 1; 0 <= I; I--) Lj.L(L, V[I]) || (V[I] = V[j - 1], V.pop(), j--)
}

function ql(V) {
    for (var j, I, m = V.length, C = m - 1; 0 <= C; C--)
        for (j = 3; 0 <= j; j--)
            if (I = V[C] + t[j], Lj.C(I, L)) {
                hI[L].push(V[C]), V[C] = V[m - 1], V.pop(), m--;
                break
            }
}

function Zl(V, j) {
    return 0 === GS.na[V] || GS.na[V] !== GS.na[j]
}

function dl(V, j) {
    var I, m = Qj.q(V);
    for (I = 0; I < m; I++)
        if (0 === Qj.t(V, I)) {
            var C = Qj.H(V, I);
            if (C === jI) {
                if (j === jI) break;
                if (il(j)) return !0
            } else if (j === jI) {
                if (il(C)) return !0
            } else if (cl(j, C)) return !0
        } return !1
}

function il(V) {
    var j, I, m = hI[V].length;
    for (j = 3; 0 <= j; j--) {
        var C = t[j];
        for (I = 0; I < m; I++)
            if (Lj.u(hI[V][I] + C)) return !0
    }
    return !1
}

function cl(V, j) {
    var I, m = hI[V].length,
        C = hI[j].length;
    for (C < m && (m = V, V = j, j = m, m = C), I = 3; 0 <= I; I--) {
        var S = t[I];
        for (C = 0; C < m; C++) {
            var l = hI[V][C] + S;
            if (Lj.v(l) && Lj.A(l) === j) return !0
        }
    }
    return !1
}

function El() {
    var V = [],
        j = !1;

    function I() {
        if (j) {
            V.push(performance.now() - pS.lb), V.length > 10 && V.shift(), j = !1;
            var I = V.reduce(((V, j) => V + j), 0),
                m = Math.floor(.01 * jS),
                C = "FPS: " + Math.floor(1e3 * V.length / Math.max(I, 1));
            wC.fillStyle = uI, wC.font = zm + m + km, wC.fillRect(0, 0, TV.measureText(C, wC.font), m), wC.fillStyle = Math.floor(I / V.length) < pS.Qf() ? am : Bm, wC.textBaseline = "top", wC.textAlign = Qm, wC.fillText(C, 0, 0)
        }
    }

    function m() {
        pS.lb = performance.now(), pS.kl(), I(), window.requestAnimationFrame(m)
    }

    function C() {
        var V = performance.now();
        pS.lb + 1500 < V && (pS.lb = V, pS.kl(), I())
    }
    this.Jb = function() {
        !j && Ca("showFPS") && (j = !0)
    }, this.request = !1, this.ll = this.ml = this.kl = null, this.lb = 0, this.nl = -1, this.init = function() {
        window.requestAnimationFrame(m), this.lb = performance.now()
    }, this.Cj = function() {
        1 !== mI || !nV || hV.isOpen || _V || hV.toggle(), -1 === this.nl && (this.nl = setInterval(C, 2e3))
    }, this.ci = function() {
        this.request = !0, -1 !== this.nl && (clearInterval(this.nl), this.nl = -1)
    }, this.vc = function() {
        this.kl = this.ol, this.ml = null, this.request = !0
    }, this.sc = function() {
        this.ml = new ol, this.kl = this.pl
    }, this.tc = function() {
        this.ll = new Nl, this.ll.init(), this.kl = this.ql
    }, this.ol = function() {
        HV.Ba(), Ij.Ba(), Oj.Ba(), Uj.Ba(), Hj.uh(), _S.Ba(), this.request && (this.request = !1, mj.Ib())
    }, this.pl = function() {
        this.ml.Ba()
    }, this.ql = function() {
        this.ll.Ba()
    }, this.ma = function() {
        return nV ? this.ml.rl : this.ll.rl
    }, this.Qf = function() {
        return 56
    }
}

function ol() {
    this.sl = pS.lb, this.tl = 56, this.rl = this.ul = 0, this.vl = !1, this.Ba = function() {
        Oj.Ba(), _V ? y() : 0 === this.ul ? pS.lb >= this.sl && (this.sl += this.tl * Math.floor(1 + (pS.lb - this.sl) / this.tl), 2 === mI || hV.isOpen ? w() : (R(), this.rl++, tS.Yf()), this.ul++) : (hV.isOpen ? y() : (pS.request = !0, x()), this.ul = 0), u(), pS.request && (pS.request = !1, aV())
    }
}

function Nl() {
    var V;
    this.sl = pS.lb, this.tl = 56, this.wl = this.rl = this.ul = 0, this.xl = null, this.yl = 7, this.init = function() {
        this.wl = 0, this.xl = [], this.rl = this.ul = 0, V = Aj.zl()
    }, this.Al = function(j) {
        if (_V) this.Bl(j);
        else if (this.xl.push(j), 2 === mI) {
            for (j = 0; j < this.xl.length; j++) Mj.Cl(this.xl[j], V), V = (V + 1) % 8;
            this.xl = []
        }
    }, this.Bl = function(j) {
        Mj.Cl(j, V), V = (V + 1) % 8, yV.Rf(this.wl), this.wl === iV ? (ZV.Da(), this.rl = this.ul = this.wl = 0, this.sl = pS.lb) : (this.wl++, zj.id(), zj.Ha(), tS.Yf())
    }, this.Ba = function() {
        Oj.Ba(), _V ? (pS.request = yV.Rf(-1) || pS.request, y()) : 0 === this.ul ? pS.lb >= this.sl && (this.sl += this.tl * Math.floor(1 + (pS.lb - this.sl) / this.tl), 2 === mI ? w() : this.Dl(), this.ul++) : (pS.request = !0, x(), this.ul = 0), u(), pS.request && (pS.request = !1, aV())
    }, this.Dl = function() {
        if (this.rl !== 7 * this.wl) R(), this.rl++, tS.Yf();
        else {
            for (var V = !1; this.El() && (V = !0, R(), this.rl++, 0 < this.xl.length);)
                for (var j = this.yl - 2; 0 <= j; j--) R(), this.rl++;
            V ? tS.Yf() : (w(), tS.ic())
        }
    }, this.El = function() {
        return 0 < this.xl.length && (this.wl++, Mj.Cl(this.xl[0], V), V = (V + 1) % 8, this.xl.shift(), !0)
    }
}

function Ml() {
    function V(V, j) {
        8 !== mj.getState() || 0 !== j && j !== kV || nV || $V.Td(V)
    }
    this.Fl = 0, this.Gl = !0, this.Ba = function() {
        pS.lb > this.Fl && (this.Fl = pS.lb + 2500, this.update())
    }, this.update = function() {
        var j = new Date,
            I = j.getUTCSeconds();
        this.Gl ? 55 > I || -1 !== pS.nl || (this.Gl = !1, 4 == (I = j.getUTCMinutes()) % 5 ? (j = j.getUTCHours(), 59 === I && 15 <= j && 21 >= j ? V("Upcoming Game of the Day", 0) : 14 == I % 30 ? V("Upcoming Alliance Contest", 0) : 29 == I % 30 ? V("Upcoming Battle Royale Contest", 0) : V("Upcoming One-vs-One Game", 8)) : 2 == I % 5 && V("Upcoming Zombie Game", 9)) : 55 > I && (this.Gl = !0)
    }
}

function Jl() {
    function V() {
        return Math.pow(Math.pow(C - I, 2) + Math.pow(S - m, 2), .5)
    }

    function j(V) {
        I = CS * V.touches[0].clientX, m = CS * V.touches[0].clientY, C = CS * V.touches[1].clientX, S = CS * V.touches[1].clientY
    }
    var I, m, C, S;
    this.Oe = function(V) {
        return 1 < V.touches.length && (j(V), rV.Gc(), !0)
    }, this.Te = function(l) {
        if (0 === mI) return !1;
        if (1 < l.touches.length) {
            if (!sV.vb()) return !0;
            var a = V();
            return j(l), l = V(), wV.wf(Math.floor((I + C) / 2), Math.floor((m + S) / 2), l / a), pS.request = !0
        }
        return !1
    }
}

function sl() {
    function V(V, I) {
        for (var m = Array(V), C = 0; C < V; C++) m[C] = j(I, 10);
        return bV.Sb(m)
    }

    function j(V, j) {
        for (var I, C = 0, S = m; S < m + j; S++) I = 7 - S % 8, C |= (V[Kl(S, 8)] >> I & 1) << m + j - S - 1;
        return m += j, C
    }
    var I, m;
    this.read = function(C, S) {
        if (m = 0, 0 === (I = S.length)) Uj.pj(C, 3205);
        else {
            var l = j(S, 1);
            if (0 === l)
                if (0 === (l = j(S, 2))) {
                    if (0 === j(S, 1)) {
                        if (0 === C && 8 !== mj.getState() && !(4 > I)) {
                            kS.U(0, V(j(S, 5), S)), kS.U(1, "[" + V(j(S, 3), S) + "]");
                            var a = j(S, 12),
                                K = j(S, 6),
                                e = Array(a);
                            for (l = 0; l < a; l++) e[l] = j(S, K);
                            RV.Bf(e)
                        }
                    } else if (8 !== mj.getState())
                        if (3 > I) Uj.pj(C, 3208);
                        else {
                            a = j(S, 1), K = j(S, 16), e = j(S, 4);
                            var L = [];
                            for (l = 0; l < e; l++) {
                                var B = j(S, 14),
                                    D = j(S, 5);
                                D = V(D, S), L.push({
                                    name: D,
                                    value: B
                                })
                            }
                            0 === a ? _S.mg(0, L, 10, 1, .36, .55, K) : _S.mg(1, L, 100, 2, .47, .5, K)
                        }
                } else if (1 === l)
                if (C !== Uj.hh) Uj.close(C, 3239);
                else if (6 === mj.getState() && rj.init(), 7 !== mj.getState()) Uj.close(C, 3251);
            else {
                for (a = [0, 0, 0, 0], K = j(S, 6), l = 0; 4 > l; l++) a[l] = j(S, K);
                for (e = j(S, 4), L = [], l = 0; l < e; l++) L.push({
                    id: j(S, 5),
                    type: j(S, 4),
                    Bh: 1 === j(S, 1),
                    xh: j(S, 6),
                    Ah: j(S, 14),
                    Ch: j(S, K),
                    Eh: j(S, 9) + 1,
                    Dh: j(S, 10)
                });
                rj.setData(a, L)
            } else 2 !== l && 3 !== l || Hj.init(S);
            else(function(V) {
                if (Aj.isActive && 0 !== mI && nV) return !1;
                if (Aj.isActive && 0 === mI) {
                    if (0 === j(V, 1))
                        for (Aj.Hl(j(V, 3)); m + 8 <= 8 * V.length;) {
                            var I = j(V, 3),
                                C = j(V, 9);
                            if (0 === I) j(V, 19);
                            else if (1 === I) j(V, 32);
                            else if (2 === I) j(V, 9);
                            else if (4 === I) {
                                var S = j(V, 7);
                                Aj.Il(C, S)
                            } else 6 === I ? j(V, 1) : 7 === I && j(V, 11)
                        }
                    return Aj.Jl(), !1
                }
                return !0
            })(S) && 1 === l && (8 !== (l = mj.getState()) ? 10 === l && Uj.pj(C, 3243) : C !== Uj.uc ? Uj.pj(C, 3244) : 0 === j(S, 1) ? pS.ll.Al(S) : 0 === (l = j(S, 2)) ? 3 !== I ? Uj.pj(Uj.uc, 3230) : (l = Aj.Kl(j(S, 9)), a = j(S, 7), -1 !== l && 0 !== EI[l] && 0 !== EI[GV] && (a %= nS.oe, $V.Pd(l, GV, a), zj.Vd(l, 1, a))) : 1 === l ? 2 !== I ? Uj.pj(Uj.uc, 3235) : -1 !== (l = Aj.Kl(j(S, 9))) && 0 !== EI[l] && 0 !== EI[GV] && xj.bj(0, [l], !0) && $V.Uc(l, 1) : 3 !== I ? Uj.pj(Uj.uc, 3236) : (l = Aj.Kl(j(S, 9)), a = j(S, 9), -1 !== l && 0 !== EI[l] && 0 !== EI[a] && 0 !== EI[GV] && xj.bj(1, [l], !0) && (zj.Vd(l, 3, 96), zj.Vd(a, 4, 96), $V.Wd(l, a))))
        }
    }, this.wh = function(C) {
        if (m = 1, I = C.length, 2 === j(C, 2)) {
            m += 20;
            for (var S, l, a, K = j(C, 9), e = j(C, 14), L = j(C, 4), B = 1 === j(C, 1), D = j(C, 6), P = j(C, 14), W = j(C, 9) + 1, v = [], t = 0; t < W; t++) S = j(C, 1), l = [j(C, 6), j(C, 6), j(C, 6)], a = V(j(C, 5), C), v.push({
                name: a,
                color: l,
                nc: S
            });
            mj.Wg(), Aj.isActive ? Aj.Ll(D, P) : yS(D, P), 1 === v.length && aj.Kh(L), Aj.isActive ? Aj.Ml(v, e, K) : lI(e, K, v, L, B)
        } else {
            for (m += 20, K = j(C, 1), e = j(C, 14), L = j(C, 4), B = 1 === j(C, 1), D = j(C, 6), P = j(C, 14), W = [], t = 0; 2 > t; t++) v = j(C, 1), S = [j(C, 6), j(C, 6), j(C, 6)], l = j(C, 14), a = V(j(C, 5), C), W.push({
                name: a,
                color: S,
                Nb: l,
                nc: v
            });
            mj.Wg(), yS(D, P), lI(e, K, W, L, B)
        }
    }, this.ph = function(V) {
        m = 1, I = V.length;
        var C = j(V, 2),
            S = j(V, 10);
        return Uj.hh > Uj.th && (S += Uj.th), Uj.hh === S ? (Uj.uc = S, !1) : (Uj.close(Uj.hh, 3247), Uj.uc = S, Hj.oh = j(V, 10), Hj.nh = j(V, 2 === C ? 9 : 1), Uj.zf(S, 5) && sj.nj(), !0)
    }, this.Cl = function(V, I) {
        m = 2;
        var C = 8 * V.length;
        if (j(V, 3) !== I) Uj.pj(Uj.uc, 3248);
        else
            for (; m + 8 <= C;) {
                var S = j(V, 3),
                    l = Aj.Kl(j(V, 9));
                if (0 === S) {
                    S = j(V, 10);
                    var a = j(V, 9);
                    a = a === l ? jI : a, -1 !== l && MV.aa(l, S, a)
                } else if (1 === S) {
                    S = j(V, 10), a = j(V, 11);
                    var K = j(V, 11); - 1 !== l && MV.Ra(l, S, a, K)
                } else 2 === S ? (a = (a = j(V, 9)) === l ? jI : a, -1 !== l && MV.Ta(l, a)) : 3 === S ? -1 !== l && MV.Wa(l) : 4 === S ? (S = j(V, 7), -1 !== l && zj.Vd(l, 0, S)) : 5 === S ? -1 !== l && MV.$a(l) : 6 === S ? (S = j(V, 1), -1 !== l && MV.Va(l, S)) : 7 === S && (S = 1 + j(V, 11), -1 !== l && MV.Ua(l, S))
            }
    }
}

function Ol() {
    this.tk = this.sk = this.rk = this.qk = this.vk = this.uk = 0, this.Zf = [0, 0, 0, 0], this.ub = function() {
        this.uk = wV.Fb(), this.vk = wV.Gb(), this.qk = -this.uk, this.rk = -this.vk, this.sk = IS / GI, this.tk = mS / GI, this.Zf[0] = Math.floor(this.qk), this.Zf[1] = Math.floor(this.rk), this.Zf[2] = Math.floor(this.Zf[0] + this.sk + 1), this.Zf[3] = Math.floor(this.Zf[1] + this.tk + 1), tS.Wf = !0
    }
}

function bl() {
    var V, j;
    this.init = function() {
        V = 1, j = 0
    }, this.Ba = function() {
        0 < V && (j = 0 === j ? pS.lb + 16 : j, V = 0 > (V -= .001 * (pS.lb - j)) ? 0 : V, j = pS.lb, pS.request = !0)
    }, this._ = function() {
        0 < V && (wC.fillStyle = "rgba(0,0,0," + V + ")", wC.fillRect(0, 0, IS, mS))
    }
}

function rl() {
    function V(V, j, I, m, C) {
        V >= xS || ($S === V && (wC.fillStyle = jm, wC.fillRect(j, I, m, C), wC.fillStyle = tm), wC.strokeRect(j, I, m, C), wC.fillText(qj.getData(V).name, Math.floor(j + .5 * m), Math.floor(I + .55 * C)))
    }
    this.isActive = !1, this.sizes = [0, 0, 0, 0], this.show = function() {
        this.isActive = !0, this.resize(), pS.request = !0
    }, this.resize = function() {
        var V = Kl(xS + xS % 2, 2);
        V = yC - V * tI, this.sizes[2] = LS ? Math.floor(.75 * VS) : Math.floor(.5 * VS), this.sizes[3] = Math.floor(1.2 * this.sizes[2]), this.sizes[3] > V && (this.sizes[3] = V, this.sizes[2] = Math.floor(V / 1.2)), this.sizes[0] = Math.floor((xC - this.sizes[2]) / 2), this.sizes[1] = Math.floor((yC - this.sizes[3]) / 2)
    }, this.fd = function(V, j) {
        return !(V < this.sizes[0] || j < this.sizes[1] || V > this.sizes[0] + this.sizes[2] || j > this.sizes[1] + this.sizes[3])
    }, this.click = function(V, j) {
        var I = Kl(xS + xS % 2, 2);
        if (pS.request = !0, V < this.sizes[0] || j < this.sizes[1] || V > this.sizes[0] + this.sizes[2] || j > this.sizes[1] + this.sizes[3]) return this.isActive = !1, !0;
        var m = Math.floor(.13 * this.sizes[3]),
            C = (this.sizes[3] - m - 8 * tI) / 7,
            S = Math.floor(this.sizes[1] + (m - C) / 2);
        return j > S && j < S + C && V > this.sizes[0] + tI && V < this.sizes[0] + tI + Math.floor((this.sizes[2] - 3 * tI) / 2) && (this.isActive = !1, gj.open()), j < this.sizes[1] + m ? (V > this.sizes[0] + this.sizes[2] - 1.2 * m && (this.isActive = !1), !0) : (m = 0 > (m = Math.floor(I * (j - this.sizes[1] - m) / (this.sizes[3] - m))) ? 0 : m > I - 1 ? I - 1 : m, V > this.sizes[0] + this.sizes[2] / 2 && (m += I), m >= xS || yS(m, Math.floor(16384 * Math.random())), !0)
    }, this._ = function() {
        var j, I = Math.floor(.13 * this.sizes[3]),
            m = Kl(xS + xS % 2, 2),
            C = (this.sizes[3] - I - (m + 1) * tI) / m,
            S = Math.floor((this.sizes[2] - 3 * tI) / 2);
        for (wC.lineWidth = 2, wC.textAlign = Gm, wC.textBaseline = pm, wC.font = zm + Math.floor(.48 * C) + km, wC.fillStyle = yI, wC.fillRect(this.sizes[0], this.sizes[1], this.sizes[2], this.sizes[3]), wC.fillStyle = jm, wC.fillRect(this.sizes[0], this.sizes[1], this.sizes[2], I), wC.strokeStyle = tm, wC.strokeRect(this.sizes[0], this.sizes[1], this.sizes[2], this.sizes[3]), wC.fillStyle = tm, j = m - 1; 0 <= j; j--) {
            var l = Math.floor(this.sizes[1] + I + tI + j * (C + tI));
            V(j, this.sizes[0] + tI, l, S, C), V(j + m, this.sizes[0] + S + 2 * tI, l, S, C)
        }
        var a = Math.floor(this.sizes[1] + (I - C) / 2);
        wC.fillStyle = Am, wC.fillRect(this.sizes[0] + tI, a, S, C), wC.fillStyle = tm, wC.strokeRect(this.sizes[0] + tI, a, S, C), wC.fillText("Custom", Math.floor(this.sizes[0] + tI + S / 2), Math.floor(a + .5 * C)), hV.gd(Math.floor(this.sizes[0] + this.sizes[2] - .8 * I), Math.floor(this.sizes[1] + .25 * I), Math.floor(.5 * I)), wC.setTransform(1, 0, 0, 1, 0, 0)
    }
}

function hl() {
    function V(V) {
        var I = j(),
            m = Math.floor(I / 16777216);
        C(V, 24, m), C(V, 24, I - 16777216 * m)
    }

    function I(V) {
        C(V, 14, uC), C(V, 4, lS ? 2 : 12 <= eS ? 1 : 0 < eS ? 3 : 0), C(V, 1, DS ? 1 : 0), C(V, 1, BS ? 1 : 0), C(V, 5, (new Date).getHours() % 24)
    }

    function m(V) {
        return Kl(V, 8) + (0 < V % 8 ? 1 : 0)
    }

    function C(V, j, I) {
        for (var m, C = S; C < S + j; C++) m = 7 - C % 8, V[Kl(C, 8)] |= (I >> j - (C - S + 1) & 1) << m;
        S += j
    }
    var S;
    this.Af = function() {
        var V = new Uint8Array(3);
        S = 0, C(V, 1, 0), C(V, 3, 0), C(V, 14, uC), Uj.send(0, V)
    }, this.Pg = function(j) {
        var l = bV.Rb(Kj.lh()),
            a = l.length,
            K = new Uint8Array(m(105 + 10 * a));
        S = 0, C(K, 1, 0), C(K, 3, 1), C(K, 10, qS);
        var e = pI.buttons[2].Re.Jg();
        for (C(K, 6, e[0]), C(K, 6, e[1]), C(K, 6, e[2]), V(K), I(K), e = 0; e < a; e++) C(K, 10, l[e]);
        Uj.hh = j, Uj.send(j, K)
    }, this.kg = function(V, j) {
        var I = new Uint8Array(5);
        S = 0, C(I, 1, 0), C(I, 3, 7), C(I, 3, 0), C(I, 14, uC), C(I, 1, j), C(I, 16, Math.abs(4096 + _S.position[j] + _S.jg[j]) % 65536), Uj.send(V, I)
    }, this.oj = function(V) {
        var j, I = new Uint8Array(100);
        S = 0, C(I, 1, 0), C(I, 3, 7), C(I, 3, 1), C(I, 14, dS);
        var m = bV.Rb(iS),
            l = Dl(m.length, 77);
        for (C(I, 7, l), j = 0; j < l; j++) C(I, 10, m[j]);
        Uj.send(V, I)
    }, this._h = function(j) {
        var I;
        if (!(Kj.ai + 7e3 > pS.lb)) {
            Kj.ai = pS.lb;
            var m = new Uint8Array(17);
            S = 0, C(m, 1, 0), C(m, 3, 7), C(m, 3, 2), V(m);
            var l = Bl(Kj.$h.length - 20, 0);
            for (I = Kj.$h.length - 1; I >= l; I--) C(m, 4, Math.abs(Kj.$h.charCodeAt(I) - 48) % 10);
            Uj.send(j, m)
        }
    }, this.jj = function(V, j) {
        var I = new Uint8Array(1);
        S = 0, C(I, 1, 0), C(I, 3, 5), C(I, 1, j ? 1 : 0), Uj.send(V, I)
    }, this.Gh = function(V) {
        var j = new Uint8Array(1);
        S = 0, C(j, 1, 0), C(j, 3, 2), C(j, 4, V), Uj.send(Uj.hh, j)
    }, this.nj = function() {
        var V = new Uint8Array(7);
        S = 0, C(V, 1, 0), C(V, 3, 6), C(V, 8, Uj.Ud()), C(V, 10, Hj.oh), C(V, 9, Hj.nh), C(V, 10, qS), C(V, 14, uC), Uj.send(Uj.uc, V)
    }, this.Qc = function(V, j) {
        var I = new Uint8Array(3);
        S = 0, C(I, 1, 1), C(I, 3, 0), C(I, 10, V), C(I, 9, j), Uj.send(Uj.uc, I)
    }, this.Rc = function(V, j, I) {
        var m = new Uint8Array(5);
        S = 0, C(m, 1, 1), C(m, 3, 1), C(m, 10, V), C(m, 11, j), C(m, 11, I), Uj.send(Uj.uc, m)
    }, this.kf = function(V) {
        var j = new Uint8Array(2);
        S = 0, C(j, 1, 1), C(j, 3, 2), C(j, 1, 0), C(j, 9, V), Uj.send(Uj.uc, j)
    }, this.lf = function(V) {
        var j = new Uint8Array(2);
        S = 0, C(j, 1, 1), C(j, 3, 2), C(j, 1, 1), C(j, 11, V - 1), Uj.send(Uj.uc, j)
    }, this.cc = function(V, j) {
        var I = new Uint8Array(4);
        S = 0, C(I, 1, 1), C(I, 3, 3), C(I, 12, V), C(I, 10, j), Uj.send(Uj.uc, I)
    }, this.dd = function() {
        var V = new Uint8Array(1);
        S = 0, C(V, 1, 1), C(V, 3, 4), Uj.send(Uj.uc, V)
    }, this.Ie = function(V) {
        var j = new Uint8Array(2);
        S = 0, C(j, 1, 1), C(j, 3, 5), C(j, 7, V), Uj.send(Uj.uc, j)
    }, this.Je = function(V, j) {
        $V.Pd(GV, j, V);
        var I = new Uint8Array(3);
        S = 0, C(I, 1, 1), C(I, 3, 6), C(I, 2, 0), C(I, 9, Aj.Nl(j)), C(I, 7, V), Uj.send(Uj.uc, I)
    }, this.Vc = function(V) {
        var j = new Uint8Array(2);
        S = 0, C(j, 1, 1), C(j, 3, 6), C(j, 2, 1), C(j, 9, Aj.Nl(V)), Uj.send(Uj.uc, j)
    }, this.Mc = function(V, j) {
        var I, l = V.length,
            a = new Uint8Array(m(15 + 9 * l));
        for (S = 0, C(a, 1, 1), C(a, 3, 6), C(a, 2, 2), C(a, 9, j), I = 0; I < l; I++) C(a, 9, Aj.Nl(V[I]));
        Uj.send(Uj.uc, a)
    }, this.pf = function(V) {
        var j = new Uint8Array(1);
        S = 0, C(j, 1, 1), C(j, 3, 7), C(j, 1, V ? 1 : 0), Uj.send(Uj.uc, j)
    }, this.Oh = function(V) {
        var j = new Uint8Array(4);
        S = 0, C(j, 1, 0), C(j, 3, 3), I(j), Uj.send(V, j)
    }
}

function $l() {
    this.Ol = [], this.Pl = 0, this.Ql = 0, this.Rl = null, this.Sl = null, this.Tl = function() {
        var V, j, I = document.getElementById("left_menu"),
            m = document.getElementById("right_menu");
        if (0 !== this.Ql) {
            for (I.style.display = "flex", V = this.Ol.length - 1; V >= 0; V--)
                if (0 === (j = this.Ol[V]).Ul) {
                    j.Vl(document.getElementById("normal_left")), this.Rl = j;
                    break
                }
        } else I.style.display = "none";
        if (0 !== this.Pl) {
            for (m.style.display = "flex", V = this.Ol.length - 1; V >= 0; V--)
                if (1 === (j = this.Ol[V]).Ul) {
                    j.Vl(document.getElementById("normal_right")), this.Sl = j;
                    break
                }
        } else m.style.display = "none"
    }, this.add = function(V) {
        this.Ol.push(V), 0 === V.Ul ? this.Ql++ : this.Pl++, this.Tl()
    }, this.Wl = function(V) {
        var j = this.Ol.indexOf(V);
        this.Ol[j].close(), j > -1 && this.Ol.splice(j, 1), 0 === V.Ul ? this.Ql-- : this.Pl--, this.Tl()
    }, this.pop = function() {
        var V = this.Ol.pop();
        V && (V.close(), 0 === V.Ul ? this.Ql-- : this.Pl--, this.Tl())
    }, this.Pe = function() {
        return this.Ol.length > 0
    }, this.yd = function(V) {
        this.Rl === V ? V.Vl(document.getElementById("normal_left")) : this.Sl === V && V.Vl(document.getElementById("normal_right"))
    }
}

function Hl(V) {
    for (var j = [], I = 0; I < window.getSelection().rangeCount; I++) {
        try {
            var m = window.getSelection().getRangeAt(I)
        } catch (V) {
            return null
        }
        var C = m.cloneRange();
        C.selectNodeContents(V), C.setEnd(m.startContainer, m.startOffset);
        var S = C.toString().length;
        j.push({
            start: S,
            end: S + m.toString().length
        })
    }
    return j
}

function Ul(V, j) {
    if (null !== j) {
        var I = window.getSelection();
        I.removeAllRanges();
        for (let B of j) {
            var m = 0,
                C = document.createRange();
            C.setStart(V, 0), C.collapse(!0);
            for (var S, l = [V], a = !1, K = !1; !K && (S = l.pop());)
                if (3 === S.nodeType) {
                    var e = m + S.length;
                    !a && B.start >= m && B.start <= e && (C.setStart(S, B.start - m), a = !0), a && B.end >= m && B.end <= e && (C.setEnd(S, B.end - m), K = !0), m = e
                } else
                    for (var L = S.childNodes.length; L--;) l.push(S.childNodes[L]);
            I.addRange(C)
        }
    }
}

function Tl() {
    var V, j = !1;

    function I() {
        var I, m = ej.xc("settings");
        LS && xC < .8 * yC ? I = Math.floor(.0536 * jS) : (I = Math.floor((LS ? .65 : .389) * jS), I += 12 - I % 12, I = Math.floor(I / 12)), (V = document.createElement("canvas")).width = I, V.height = I;
        var C = V.getContext("2d", {
            alpha: !0
        });
        C.clearRect(0, 0, I, I), C.fillStyle = uI, C.fillRect(0, 0, I, I), j && (C.fillStyle = Lm, C.fillRect(0, 0, I, I)), C.fillStyle = Im, C.fillRect(0, 0, I, 1), C.fillRect(0, 0, 1, I), C.fillRect(0, I - 1, I, 1), C.fillRect(I - 1, 0, 1, I);
        var S = .9 * I / m.width;
        C.imageSmoothingEnabled = !0, C.setTransform(S, 0, 0, S, Math.floor((I - S * m.width) / 2), Math.floor((I - S * m.height) / 2)), C.drawImage(m, 0, 0), C.setTransform(1, 0, 0, 1, 0, 0)
    }
    this.Ha = function() {
        I()
    }, this._ = function() {
        ej.X() && (V || I(), 8 === mj.getState() ? YV.sf() ? wC.drawImage(V, WI, YV.bd - V.height - WI) : wC.drawImage(V, 2 * WI + Math.floor((hV.isOpen ? 5.5 : 1) * YV.height), YV.bd) : wC.drawImage(V, WI, WI))
    }, this.fd = function(m, C) {
        if (!V) return !1;
        if (0 === mI) {
            if (j !== (m > WI && m < WI + V.width && C > WI && C < WI + V.height)) return j = !j, I(), pS.request = !0, !0
        } else {
            if (YV.sf() && j !== (m > WI && m < WI + V.width && C > YV.bd - V.height - WI && C < YV.bd - WI)) return j = !j, I(), pS.request = !0, !0;
            if (!YV.sf() && j !== (m > 2 * WI + Math.floor((hV.isOpen ? 5.5 : 1) * YV.height) && m < 2 * WI + Math.floor((hV.isOpen ? 5.5 : 1) * YV.height) + V.width && C > YV.bd && C < YV.bd + V.height)) return j = !j, I(), pS.request = !0, !0
        }
        return !1
    }, this.click = function(j, I) {
        if (!V) return !1;
        if (0 === mI) {
            if (j > WI && j < WI + V.width && I > WI && I < WI + V.height) return Wj.open(), !0
        } else {
            if (YV.sf() && j > WI && j < WI + V.width && I > YV.bd - V.height - WI && I < YV.bd - WI) return Wj.open(), !0;
            if (!YV.sf() && j > 2 * WI + Math.floor((hV.isOpen ? 5.5 : 1) * YV.height) && j < 2 * WI + Math.floor((hV.isOpen ? 5.5 : 1) * YV.height) + V.width && I > YV.bd && I < YV.bd + V.height) return Wj.open(), !0
        }
        return !1
    }
}

function Yl() {
    this.isOpen = !1, this.Ul = 0;
    var V = null;
    this.open = function() {
        this.isOpen || (Dj.add(this), 2 !== Bj.m() && (document.getElementById("cookieWarning").hidden = !1), this.isOpen = !0)
    }, this.Vl = function() {
        document.getElementById("settings").style.display = "flex", document.getElementById("normal_left").style.display = "none"
    }, this.close = function() {
        this.isOpen = !1, document.getElementById("settings").style.display = "none", document.getElementById("normal_left").style.display = "flex"
    }, this.Xl = function(j) {
        V = j, document.getElementById("settings").style.display = "none";
        const I = document.getElementById("normal_left");
        I.style.display = "flex", I.innerHTML = "";
        const m = document.createElement("div");
        m.className = "hovorable", m.style.border = "1px solid grey", m.style.padding = "5px 16px", m.style.backgroundColor = "#2b2c33", m.style.width = "fit-content", m.innerHTML = "&laquo; Back", m.onclick = function() {
            Wj.Yl()
        }, I.appendChild(m), V.Vl(I)
    }, this.Yl = function() {
        document.getElementById("settings").style.display = "flex", document.getElementById("normal_left").style.display = "none"
    }
}

function wl() {
    var V, j, I;

    function m(j) {
        var m = Lj.u(j) ? "Unclaimed Land" : iI[Lj.A(j)] + " (" + UV.jb(bI[Lj.A(j)]) + ")";
        if (I !== m) {
            I = m;
            var C = Math.floor((LS ? .031 : .0249) * jS);
            C = 10 > C ? 10 : C;
            var S = Math.floor(C / 5),
                l = Math.floor(TV.measureText(m, $V.kd) + 3 * S);
            (V = document.createElement("canvas")).height = C, V.width = l;
            var a = V.getContext("2d", {
                alpha: !0
            });
            a.font = $V.kd, a.textBaseline = pm, a.textAlign = Qm, a.clearRect(0, 0, l, C), a.fillStyle = yI, a.fillRect(0, 0, l, C), a.fillStyle = Im, a.fillText(m, Math.floor(1.5 * S), Math.floor(C / 2))
        }
    }
    this._ = function() {
        Ca("hoveringTooltips") && V && wC.drawImage(V, IS - V.width - WI, $V.zd())
    }, this.fd = function(C, S) {
        C = function(V) {
            return Math.floor((V + QI) / GI)
        }(C), S = function(V) {
            return Math.floor((V + _I) / GI)
        }(S);
        var l = Lj.Ka(C, S);
        if (C < 0 || C > JS || S < 0 || S > sS || !Lj.o(l)) return V = null, j = null, I = null, !0;
        j = l, m(l)
    }, this.Ba = function() {
        j && m(j)
    }, this.zd = function() {
        return Ca("hoveringTooltips") ? 2 : 1
    }
}

function Rl() {
    this.isOpen = !1, this.Ul = 0, this.open = function() {
        this.isOpen || (Dj.add(this), this.isOpen = !0)
    }, this.Vl = function(V) {
        var j, I = Hl(V),
            m = GS.jl();
        V.innerHTML = "";
        var C = document.createElement("h1");
        C.innerText = "Player List", V.appendChild(C);
        var S = document.createElement("table"),
            l = {},
            a = [],
            K = [],
            e = [];
        for (j = II - 1; j >= 0; j--) j >= PV ? a.push(j) : m[j] ? (l[m[j]] || (l[m[j]] = [], e.push(m[j])), l[m[j]].push(j)) : K.push(j);
        for (e.sort((function(V, j) {
                return l[V].length - l[j].length
            })), j = e.length - 1; j >= 0; j--) this.Zl(S, e[j], l[e[j]]);
        K.length && this.Zl(S, "No Clan", K), a.length && this.Zl(S, "Bots", a), V.appendChild(S), Ul(V, I)
    }, this.Zl = function(V, j, I) {
        var m, C = document.createElement("h3"),
            S = document.createElement("tr");
        C.style.userSelect = "text", S.style.columnSpan = "all", C.innerText = j + " (" + I.length + ")", S.appendChild(C), V.appendChild(S), I.sort((function(V, j) {
            return EI[V] ? EI[j] ? iI[V].localeCompare(iI[j]) : -1 : EI[j] ? 1 : iI[V].localeCompare(iI[j])
        }));
        for (const j of I) {
            if (S = document.createElement("tr"), EI[j])(m = document.createElement("td")).innerText = iI[j], 2 === UI[j] && (m.innerText += " (Left)"), m.style.userSelect = "text", m.style.cursor = "pointer", m.onclick = function() {
                sV.ob(j, 800, !1, 0)
            }, S.appendChild(m);
            else {
                var l = document.createElement("a"),
                    a = document.createElement("s");
                l.innerText = iI[j], l.style.userSelect = "text", a.appendChild(l), S.appendChild(a)
            }(m = document.createElement("td")).innerText = "Profile", m.style.cursor = "pointer", m.onclick = function() {
                nj.open(j)
            }, S.appendChild(m), V.appendChild(S)
        }
    }, this.close = function() {
        this.isOpen = !1
    }
}

function ul() {
    this.isOpen = !1, this.Ul = 1, this.pd = jI, this.mode = 0;
    var V = ["Test1", "Test2", "Test3", "Test4"];
    this.open = function(V) {
        this.isOpen ? (this.close(), this.pd = V, Dj.yd(this)) : (this.pd = V, Dj.add(this)), this.isOpen = !0
    }, this.Vl = function(j) {
        var I = Hl(j),
            m = (GS.jl(), j.querySelector("#window")),
            C = j.querySelector("#window") ? j.querySelector("#window").scrollTop + j.querySelector("#window").clientHeight >= j.querySelector("#window").scrollHeight ? -1 : j.querySelector("#window").scrollTop : -1;
        m || ((m = document.createElement("div")).id = "window", m.style.overflowY = "auto", m.style.width = "100%"), j.innerHTML = "", 0 === this.mode && Fj.Vl(j, m, this.pd), 1 === this.mode && (j.innerHTML += "<div class='title'>Clan Profile</div>"), j.appendChild(m);
        var S = document.createElement("div");
        S.style.marginTop = "auto", S.style.height = "20px", S.style.display = "flex", S.style.borderTop = "2px rgb(46, 49, 54) solid", S.style.paddingLeft = "5px", S.style.paddingRight = "5px", S.style.paddingTop = "5px";
        for (const I in V) {
            var l = document.createElement("div");
            l.innerText = V[I], l.style.marginLeft = "auto", l.style.marginRight = "auto", l.style.cursor = "pointer", l.onclick = function() {
                document.getElementById("normal_right").innerHTML = "", nj.mode = parseInt(I), nj.Vl(j)
            }, I === this.mode && (l.style.color = "rgb(69, 150, 225)"), S.appendChild(l)
        }
        j.appendChild(S), m.scrollTop = -1 === C ? m.scrollHeight : C, Ul(j, I)
    }, this.close = function() {
        document.getElementById("normal_right").innerHTML = "", this.isOpen = !1, this.pd = jI
    }
}

function xl() {
    this.data = [], this.$l = null;
    var V = [],
        j = [],
        I = 0;
    this.Vl = function(I, m, C) {
        var S = document.createElement("h1");
        I.style.overflowY = "auto", S.innerText = "Troop Log of " + iI[C], I.appendChild(S);
        var l = document.createElement("div");
        l.style.display = "flex", l.style.flexDirection = "row", l.style.justifyContent = "space-evenly", l.style.height = "40px", l.style.marginBottom = "10px";
        for (const j of V) j._l.onclick = j.am.onclick = function() {
            j.active = !j.active, Fj.$l = {
                type: -69
            }, nj.Vl(I)
        }, l.appendChild(j.active ? j._l : j.am);
        if (I.appendChild(l), m.querySelector("#troopLogTable") && -69 !== this.$l.type) this.bm(this.$l, m.querySelector("#troopLogTable"));
        else {
            m.innerHTML = "";
            var a = document.createElement("table"),
                K = [];
            if (a.id = "troopLogTable", a.style.width = "100%", j = [], V[0].active) {
                for (const I of this.data[C])
                    if (V[I.type + 1].active) {
                        if (void 0 !== I.id) {
                            if (j[I.id] && I.time - j[I.id].dm < 2e3) {
                                j[I.id].dm = I.time, K[j[I.id].index].count ? K[j[I.id].index].count++ : K[j[I.id].index].count = 2, K[j[I.id].index].timeEnd = I.time, K[j[I.id].index].fm += I.fm, K[j[I.id].index].ef = Math.max(K[j[I.id].index].ef, I.ef);
                                continue
                            }
                            j[I.id] = {
                                index: K.length,
                                dm: I.time,
                                uuid: I.uuid
                            }
                        }
                        K.push({
                            ...I
                        })
                    }
            } else
                for (const j of this.data[C])(-1 === j.type || V[j.type + 1].active) && K.push({
                    ...j
                });
            K.sort(((V, j) => (V.timeEnd ? V.timeEnd : V.time) - (j.timeEnd ? j.timeEnd : j.time)));
            for (const V of K) this.bm(V, a, !0);
            m.appendChild(a), this.$l = null
        }
    }, this.bm = function(I, m, C) {
        if (!C) {
            if (-1 !== I.type && !V[I.type + 1].active) return;
            if (V[0].active)
                if (j[I.id] && I.time - j[I.id].dm < 2e3) {
                    j[I.id].dm = I.time;
                    var S = m.querySelector("#troopLog" + j[I.id].uuid);
                    S.action.count ? S.action.count++ : S.action.count = 2, S.action.timeEnd = I.time, S.action.fm += I.fm, S.action.ef = Math.max(S.action.ef, I.ef), m.removeChild(S), I = S.action
                } else j[I.id] = {
                    dm: I.time,
                    uuid: I.uuid
                }
        }
        let l = document.createElement("tr"),
            a = document.createElement("td");
        l.id = "troopLog" + I.uuid, l.action = {
            ...I
        }, a.innerText = yV.Mf(I.time), I.timeEnd && (a.innerText += " - " + yV.Mf(I.timeEnd)), a.style.userSelect = "text", l.appendChild(a), a = document.createElement("td"), a.innerText = I.fm, a.style.userSelect = "text", I.fm < 0 ? a.style.color = "red" : a.style.color = "green", l.appendChild(a), a = document.createElement("td"), a.innerText = Math.floor(I.fm / I.ef * 100) + "%", a.title = "Relative to " + I.ef + " troops", a.style.userSelect = "text", l.appendChild(a), a = document.createElement("td"), a.innerText = I.wd, I.count && (a.innerText += " (" + I.count + ")"), a.style.userSelect = "text", l.appendChild(a), m.appendChild(l)
    }, this.init = function() {
        this.data = [];
        for (var j = 0; j < jI; j++) this.data[j] = [];
        var I, m, C = nS.md[49].height,
            S = document.createElement("canvas"),
            l = document.createElement("canvas");
        S.height = C, S.width = C, l.height = C, l.width = C, (I = S.getContext("2d")).drawImage(ej.Y(3), -3 * C, 0), (m = l.getContext("2d")).strokeStyle = Im, m.lineWidth = 5, m.beginPath(), m.moveTo(.15 * C, C / 3), m.lineTo(.85 * C, C / 3), m.moveTo(.15 * C, C / 2), m.lineTo(.85 * C, C / 2), m.moveTo(.15 * C, 2 * C / 3), m.lineTo(.85 * C, 2 * C / 3), m.stroke(), (V = []).push({
            active: !0,
            name: "Group",
            _l: l
        }), V.push({
            active: !1,
            name: "Income",
            _l: S
        }), V.push({
            active: !0,
            name: "Attacks",
            _l: nS.md[36]
        }), V.push({
            active: !1,
            name: "Defence",
            _l: nS.md[37]
        }), V.push({
            active: !0,
            name: "Support",
            _l: nS.md[49]
        }), V.push({
            active: !1,
            name: "Cancellation",
            _l: nS.md[18]
        });
        for (const j of V)(S = document.createElement("canvas")).height = C, S.width = C, (I = S.getContext("2d")).drawImage(j._l, 0, 0), I.strokeStyle = vm, I.lineWidth = 2, I.beginPath(), I.moveTo(.1 * C, .1 * C), I.lineTo(.9 * C, .9 * C), I.moveTo(.9 * C, .1 * C), I.lineTo(.1 * C, .9 * C), I.stroke(), j.am = S, j._l.title = j.name, j.am.title = j.name, j.am.style.width = "40px", j._l.style.width = "40px"
    }, this.add = function(V, j, m, C, S) {
        var l;
        try {
            l = yV.Sc()
        } catch (V) {
            l = 0
        }
        this.data[V].push(this.$l = {
            fm: j,
            wd: m,
            type: C,
            id: S,
            time: l,
            uuid: I++,
            ef: Math.max(1, bI[V])
        }), 0 === nj.mode && nj.pd === V && Dj.yd(nj)
    }
}

function yl() {
    this.isOpen = !1, this.Ul = 0;
    var V = ["Image", "Source Data", "Browse"];
    this.mode = 0, this.gm = null, this.open = function() {
        this.isOpen || (Dj.add(this), this.isOpen = !0)
    }, this.Vl = function(j) {
        j.innerHTML = "";
        var I = document.createElement("h1"),
            m = document.createElement("div");
        I.innerText = "Custom Map Menu", j.appendChild(I), m.style.position = "relative", m.style.width = "100%", m.style.height = "100%", m.style.display = "flex", m.style.justifyContent = "center", j.appendChild(m), 0 === this.mode ? this.drawImage(m) : 1 === this.mode ? this.hm(m) : 2 === this.mode && this.im(m);
        var C = document.createElement("div");
        C.style.marginTop = "auto", C.style.height = "20px", C.style.display = "flex", C.style.borderTop = "2px rgb(46, 49, 54) solid", C.style.paddingLeft = "5px", C.style.paddingRight = "5px", C.style.paddingTop = "5px";
        for (const I in V) {
            var S = document.createElement("div");
            S.innerText = V[I], S.style.marginLeft = "auto", S.style.marginRight = "auto", S.style.cursor = "pointer", S.id = "customMapMenuMode" + I, S.onclick = function() {
                gj.mode = parseInt(I), gj.Vl(j)
            }, I == this.mode && (S.style.color = "rgb(69, 150, 225)"), C.appendChild(S)
        }
        j.appendChild(C)
    }, this.drawImage = function(V) {
        var j = document.createElement("div");
        j.style.height = "50%", j.style.width = "100%", j.style.position = "absolute", j.style.top = "0";
        var I = document.createElement("input"),
            m = document.createElement("label"),
            C = document.createElement("img"),
            S = document.createElement("div");
        S.style.position = "absolute", S.style.top = "0", S.style.bottom = "110px", S.style.marginLeft = "5%", S.style.marginRight = "5%", S.style.width = "90%";
        var l = document.createElement("div"),
            a = document.createElement("div");
        l.innerText = "Open Advanced Map Creator", l.style.borderRadius = "10px", l.style.border = "2px solid #555", l.style.cursor = "pointer", l.style.backgroundColor = "#333", l.style.paddingLeft = "10px", l.style.paddingRight = "10px", l.style.width = "fit-content", l.style.height = "100%", l.style.display = "flex", l.style.alignItems = "center", a.style.display = "flex", a.style.alignItems = "center", a.style.justifyContent = "center", a.style.width = "100%", a.style.height = "25px", a.style.marginBottom = "10px", a.appendChild(l), S.appendChild(a), l.onclick = function() {
            document.getElementById("customMapMenuMode1").click(), window.open("https://platz1de.github.io/BetterTT/maps/", "_blank")
        }, m.for = "upload", m.style.width = "100%", m.style.height = "calc(100% - 35px)", m.style.marginBottom = "20px", m.style.borderRadius = "10px", m.style.border = "2px dashed #555", m.style.cursor = "pointer", m.style.display = "flex", m.style.alignItems = "center", m.style.justifyContent = "center", I.style.display = "none", I.type = "file", I.accept = "image/*", I.id = "upload", I.onchange = function() {
            var V = document.querySelector("#upload").files[0],
                j = document.getElementById("preview"),
                I = new Image;
            I.onload = function() {
                gj.gm = this, I.jm = 1, document.getElementById("scale").jm = 1, document.getElementById("scale").innerText = "100%";
                var V = gj.km(this);
                gj.lm(V), URL.revokeObjectURL(this.src)
            };
            var m = URL.createObjectURL(V);
            j.src = m, I.src = m
        }, m.ondragover = function() {
            return this.style.backgroundColor = "#777", !1
        }, m.ondragleave = function() {
            return this.style.backgroundColor = "inherit", !1
        }, m.ondrop = function(V) {
            V.preventDefault(), this.style.backgroundColor = "inherit", document.querySelector("#upload").files = V.dataTransfer.files, I.onchange()
        }, m.appendChild(I);
        var K = document.createElement("span");
        K.innerText = "Upload or Drop an Image here", this.gm ? (C = this.gm, K.hidden = !0) : C.hidden = !0, C.style.maxWidth = "90%", C.style.maxHeight = "90%", C.style.margin = "5%", C.id = "preview", C.onload = function() {
            C.hidden = !1, K.hidden = !0
        }, m.appendChild(C), m.appendChild(K), S.appendChild(m), j.appendChild(S);
        var e = document.createElement("input");
        e.type = "text", e.placeholder = "Image URL", e.style.position = "absolute", e.style.bottom = "68px", e.style.width = "90%", e.style.marginLeft = "5%", e.style.backgroundColor = "rgb(31, 34, 39)", e.style.color = "rgb(255, 255, 255)", e.style.border = "none", e.style.outline = "none", e.placeholder = "Paste Image URL here", e.onchange = function() {
            var V = document.getElementById("preview"),
                j = new Image;
            j.onload = function() {
                gj.gm = this, j.jm = 1, document.getElementById("scale").jm = 1, document.getElementById("scale").innerText = "100%";
                var V = gj.km(this);
                gj.lm(V)
            }, V.src = this.value, j.crossOrigin = "anonymous", j.src = this.value
        }, j.appendChild(e);
        var L = document.createElement("div"),
            B = document.createElement("input"),
            D = document.createElement("label"),
            P = document.createElement("span"),
            W = document.createElement("input"),
            v = document.createElement("label"),
            t = document.createElement("span");
        if (L.style.display = "flex", L.style.alignItems = "center", L.style.justifyContent = "center", L.style.width = "90%", L.style.margin = "5%", L.style.marginTop = "20px", L.style.marginBottom = "20px", L.style.position = "absolute", L.style.bottom = "0", B.type = "checkbox", B.id = "invert", B.onchange = function() {
                gj.gm && (gj.gm.nm = B.checked);
                var V = gj.km(gj.gm);
                gj.lm(V)
            }, P.innerText = "Invert", P.style.marginLeft = "5px", D.for = "invert", D.style.marginRight = "auto", D.appendChild(B), D.appendChild(P), L.appendChild(D), W.type = "range", W.id = "threshold", W.min = "0", W.max = "100", W.value = "50", W.onchange = function() {
                gj.gm && (gj.gm.threshold = W.value);
                var V = gj.km(gj.gm);
                gj.lm(V)
            }, t.innerText = "Threshold", t.style.marginLeft = "5px", v.for = "threshold", v.style.display = "flex", v.style.alignItems = "center", v.appendChild(W), v.appendChild(t), L.appendChild(v), j.appendChild(L), V.appendChild(j), this.om(V), this.gm) {
            document.querySelector("#scale").jm = this.gm.jm, document.querySelector("#scale").innerHTML = 100 * this.gm.jm + "%", W.value = this.gm.threshold, B.checked = this.gm.nm;
            var n = this.km(this.gm);
            this.lm(n)
        }
    }, this.hm = function(V) {
        var j = document.createElement("textarea");
        j.style.width = "90%", j.style.height = "40%", j.style.margin = "5%", j.style.resize = "none", j.style.background = "rgb(31, 34, 39)", j.style.color = "rgb(255, 255, 255)", j.style.border = "none", j.style.outline = "none", j.placeholder = "Paste your source data here", j.id = "sourceData", j.onchange = function() {
            try {
                var V = JSON.parse(document.querySelector("#sourceData").value);
                VI.isActive = !0, VI.Ci(V), VI.Di(), document.querySelector("#previewBox").innerText = "Loaded advanced map data"
            } catch (V) {
                gj.lm(document.querySelector("#sourceData").value)
            }
        }, V.appendChild(j), this.om(V)
    }, this.im = function(V) {}, this.om = function(V) {
        var j = document.createElement("div"),
            I = document.createElement("div");
        j.style.width = "100%", j.style.position = "absolute", j.style.top = "50%", j.style.height = "2px", j.style.background = "rgb(46, 49, 54)", V.appendChild(j), I.style.width = "90%", I.style.padding = "5%", I.style.color = "rgb(255, 100, 100)", I.style.display = "flex", I.style.alignItems = "center", I.style.justifyContent = "center", I.style.position = "absolute", I.style.top = "50%", I.style.bottom = "20px", I.id = "previewBox", I.innerText = "Invalid Data", V.appendChild(I);
        var m = document.createElement("div"),
            C = document.createElement("span"),
            S = document.createElement("span"),
            l = document.createElement("span");
        S.innerText = "+", S.style.marginRight = "5px", S.style.cursor = "pointer", S.onclick = function() {
            var V = document.getElementById("scale");
            V.jm = Math.round(100 * V.jm + 5), V.innerText = V.jm + "%", V.jm /= 100, 0 === gj.mode && gj.gm && (gj.gm.jm = V.jm);
            var j = gj.km(gj.gm);
            gj.lm(j)
        }, l.innerText = "-", l.style.marginLeft = "5px", l.style.cursor = "pointer", l.onclick = function() {
            var V = document.getElementById("scale");
            V.jm = Math.round(100 * V.jm - 5), V.innerText = V.jm + "%", V.jm /= 100, 0 === gj.mode && gj.gm && (gj.gm.jm = V.jm);
            var j = gj.km(gj.gm);
            gj.lm(j)
        }, C.innerText = "100%", C.id = "scale", C.jm = 1, m.style.position = "absolute", m.style.bottom = "25px", m.appendChild(document.createTextNode("Scale: ")), m.appendChild(S), m.appendChild(C), m.appendChild(l), V.appendChild(m);
        var a = document.createElement("div");
        a.id = "pixels", a.innerText = "0 x 0 pixels; 0% of Europe", a.style.position = "absolute", a.style.bottom = "5px", V.appendChild(a);
        var K = document.createElement("div");
        K.style.position = "absolute", K.style.bottom = "5px", K.style.right = "5px", K.style.cursor = "pointer", K.innerText = "Copy", K.id = "copy", K.onclick = function() {
            if (gj.gm) {
                var V = gj.km(gj.gm),
                    j = document.createElement("input");
                j.value = V, document.body.appendChild(j), j.select(), document.execCommand("copy"), document.body.removeChild(j);
                var I = ["Copy", "Copied!", "Copied!!", "Copied x3", "Copied...", "COPIED", "...", "I said it", "8 TIMES", "9 TIMES NOW", "why", "just why", "Dude", "could you please", "STOP?!", "You're annoying", "Ok bye", "", ""];
                K.innerText = I[I.indexOf(K.innerText) + 1]
            }
        }, V.appendChild(K)
    }, this.km = function(V) {
        var j = document.createElement("canvas"),
            I = j.getContext("2d");
        j.width = V.width * document.getElementById("scale").jm, j.height = V.height * document.getElementById("scale").jm, I.drawImage(V, 0, 0, j.width, j.height);
        for (var m = I.getImageData(0, 0, j.width, j.height).data, C = 765 * document.querySelector("#threshold").value * 255 / 100, S = [Math.floor(j.width / 1e3), j.width % 1e3, Math.floor(j.height / 1e3), j.height % 1e3], l = !1, a = 0, K = 0; K < m.length; K += 4) {
            (m[K] + m[K + 1] + m[K + 2]) * m[K + 3] > C ? l || (l = !0, S.push(a), a = 0) : l && (l = !1, S.push(a), a = 0), a++
        }
        S.push(a), document.querySelector("#invert").checked && S.splice(4, 0, 0);
        var e, L, B = [];
        for (e = 0; e < S.length; e++) S[e] > 999 && S.splice(e, 1, 999, 0, S[e] - 999);
        for (e = 0; e < S.length; e++) B.push(Kl(S[e], 100)), B.push(Kl(S[e] % 100, 10)), B.push(S[e] % 10);
        for (m = "", e = 0; e < B.length - 1; e += 2)(L = 10 * B[e] + B[e + 1]) > 51 ? (m += String.fromCharCode(48 + B[e]), e--) : m += String.fromCharCode(L < 26 ? 65 + L : 71 + L);
        return e < B.length && (m += String.fromCharCode(48 + B[B.length - 1])), m
    }, this.lm = function(V) {
        if (!(V.length < 1)) {
            document.getElementById("copy").innerText = "Copy";
            try {
                var j = 1e3 * (V = bV.Vb(V))[0] + V[1],
                    I = 1e3 * V[2] + V[3];
                document.getElementById("pixels").innerText = "(" + j + " x " + I + " pixels; " + Math.floor(j * I / 8890) + "% of Europe)";
                var m = document.createElement("canvas");
                m.id = "previewCanvas", m.style.maxWidth = "100%", m.style.maxHeight = "100%", m.width = j, m.height = I;
                for (var C = m.getContext("2d", {
                        alpha: !1
                    }), S = C.getImageData(0, 0, j, I), l = S.data, a = V.length, K = !0, e = 0, L = 4; L < a; L++)
                    if (K) {
                        for (; 0 < V[L]--;) l[e] = 12, l[e + 1] = 12, l[e + 2] = 76, l[e + 3] = 255, e += 4;
                        K = !1
                    } else {
                        for (; 0 < V[L]--;) l[e] = 140, l[e + 1] = 130, l[e + 2] = 120, l[e + 3] = 255, e += 4;
                        K = !0
                    } if (C.putImageData(S, 0, 0), document.querySelector("#previewBox").innerHTML = "", document.querySelector("#previewBox").appendChild(m), !(OS = m)) return;
                bS = OS.getContext("2d"), rS = bS.getImageData(0, 0, OS.width, OS.height), hS = rS.data, $S = xS, HS = 0, JS = OS.width, sS = OS.height, VI.zi = "Custom", TS.Gj(), VI.isActive = !1, pS.request = !0
            } catch (a) {
                console.log(a), document.querySelector("#previewBox").innerText = "Invalid Data", document.getElementById("pixels").innerText = "(0 x 0 pixels; 0% of Europe)"
            }
        }
    }, this.close = function() {
        this.isOpen = !1
    }
}

function Va() {
    this.isActive = !1;
    var V, j, I, m, C, S, l, a, K, e, L, B = [],
        D = [],
        P = [];

    function W(V) {
        document.getElementById("customLobbyText").innerText = V
    }

    function v() {
        W("Connecting to lobby..."), Kj.hide(), Ij.Tg(2), Ij.init()
    }
    this.init = function() {
        const m = new URLSearchParams(window.location.search);
        if (window.history.replaceState({}, document.title, window.location.pathname), m.has("custom") && "true" === m.get("custom")) {
            this.isActive = !0;
            const C = localStorage.getItem("game"),
                S = JSON.parse(C);
            V = S.id, j = S.target, this.name = m.get("name"), L = parseInt(m.get("status")), a = S.modeID, void 0 !== S.mapID ? K = parseInt(S.mapID) : S.mapBase64 && (e = S.mapBase64), this.kc = S.selectableSpawn, this.wa = S.neutralBots, this.va = S.playerStrength,
                function() {
                    (I = document.createElement("div")).id = "customLobbyOverlay", I.style.position = "absolute", I.style.top = "0", I.style.left = "0", I.style.width = "100%", I.style.height = "100%", I.style.backgroundColor = "#1f2227", I.style.zIndex = "100", document.body.appendChild(I);
                    var V = document.createElement("div");
                    V.id = "customLobbyText", V.style.position = "absolute", V.style.top = "50%", V.style.left = "50%", V.style.transform = "translate(-50%, -50%)", V.style.color = "white", V.style.fontSize = "30px", V.style.fontFamily = "Arial", V.style.textAlign = "center", I.appendChild(V)
                }(), W("Loading game...")
        }
    }, this.fi = function() {
        this.isActive && (e ? (VI.ta = {
            Pi: e
        }, VI.zi = "Custom Lobby", VI.Di(), console.log("Custom Lobby"), v()) : (VI.Qh(), v()))
    }, this.Sg = function() {
        this.isActive && (W("Failed to connect to lobby. Quitting..."), setTimeout((function() {
            window.location.reload()
        }), 5e3))
    }, this.Qg = function() {
        this.isActive && (W("Waiting for game..."), Ij.Tg(0))
    }, this.Fh = function(V) {
        var I = Math.round((j - (new Date).getTime()) / 1e3);
        I < 0 && (Cj.Rg(3249), W("Game has already started. Quitting..."), setTimeout((function() {
            window.location.reload()
        }), 5e3));
        for (var m = 0; m < V.length; m++)
            if (I < V[m].Dh && 8 !== V[m].type) return V[m].id;
        return -1
    }, this.Hh = function(V) {
        this.isActive && W("Game starting in " + V + " seconds...")
    }, this.Ml = function(j, I, l) {
        if (this.isActive) {
            if (m = j, C = I, S = l, 1 === j.length) return B = j, D[S] = 0, P[0] = S, void this.Jl();
            W("Game started. Have fun!"), sj.dd(), sj.Ie(V)
        }
    }, this.Jl = function() {
        I.remove(), I = null, 1 === B.length && aj.Kh(a), lI(C, D[S], B, a, !1), 1 === L && sj.dd()
    }, this.Il = function(j, I) {
        this.isActive && I === V && (B.push(m[j]), D[j] = B.length - 1, P[B.length - 1] = j)
    }, this.Hl = function(V) {
        l = V
    }, this.zl = function() {
        return this.isActive ? (l + 1) % 8 : 0
    }, this.Kl = function(V) {
        return this.isActive ? D[V] ?? -1 : V
    }, this.Nl = function(V) {
        return this.isActive ? P[V] ?? -1 : V
    }, this.Ll = function(V, j) {
        e || (void 0 !== K && (V = K), yS(V, j))
    }
}

function ja() {
    this.isOpen = !1, this.Ul = 1, this.open = function() {
        this.isOpen || (Dj.add(this), this.isOpen = !0)
    }, this.Vl = function(V) {
        var j = Hl(V);
        V.innerHTML = "";
        var I = document.createElement("h1");
        I.innerText = "Chat Log", V.appendChild(I);
        for (const j of $V.log) {
            let I = document.createElement("a");
            if (I.innerText = j.wd, I.style.userSelect = "text", I.style.color = j.color, "rgba(0,0,0,0.75)" !== j.bgColor && (I.style.background = j.bgColor), j.xd) {
                let V = document.createElement("img"),
                    m = document.createElement("div");
                V.src = j.xd.toDataURL("image/png"), V.style.width = "25px", V.style.height = "25px", V.style.margin = "5px", I.style.lineHeight = "25px", m.style.display = "flex", m.style.alignItems = "center", m.appendChild(I), m.appendChild(V), I = m
            }
            V.appendChild(I), V.appendChild(document.createElement("br"))
        }
        Ul(V, j)
    }, this.close = function() {
        this.isOpen = !1
    }
}

function Ia() {
    var V = [{
            id: "moveLeft",
            name: "Move left",
            key: "ArrowLeft",
            pm: () => dj.nk(3),
            release: () => dj.pk(3),
            qm: !0
        }, {
            id: "moveRight",
            name: "Move right",
            key: "ArrowRight",
            pm: () => dj.nk(1),
            release: () => dj.pk(1),
            qm: !0
        }, {
            id: "moveUp",
            name: "Move up",
            key: "ArrowUp",
            pm: () => dj.nk(0),
            release: () => dj.pk(0),
            qm: !0
        }, {
            id: "moveDown",
            name: "Move down",
            key: "ArrowDown",
            pm: () => dj.nk(2),
            release: () => dj.pk(2),
            qm: !0
        }, {
            id: "hideUI",
            name: "Hide UI",
            key: "h",
            release: () => 1 <= mI && (QV = !QV, pS.request = !0),
            qm: !1
        }, {
            id: "copyCoordinates",
            name: "Copy coordinates to console",
            key: "c",
            pm: () => 0 !== mI && gS.Sk(),
            qm: !1
        }],
        j = [{
            key: "a",
            rm: !0,
            value: .96875
        }, {
            key: "d",
            rm: !0,
            value: 32 / 31
        }, {
            key: "s",
            rm: !0,
            value: .875
        }, {
            key: "w",
            rm: !0,
            value: 8 / 7
        }, {
            key: "1",
            rm: !0,
            value: 5 / 6
        }, {
            key: "2",
            rm: !0,
            value: 1.2
        }, {
            key: "3",
            rm: !0,
            value: 1.5
        }],
        I = !1,
        m = !1;

    function C() {
        let I = [];
        for (let j = 0; j < V.length; j++) I.push({
            id: V[j].id,
            key: V[j].key
        });
        localStorage.setItem("keyBindings", JSON.stringify(I)), localStorage.setItem("troopFactors", JSON.stringify(j))
    }
    this.open = function() {
        Wj.Xl(this)
    }, this.Vl = function(S) {
        let l, a, K = document.createElement("h1");
        K.innerText = "Keybindings", S.appendChild(K);
        var e = document.createElement("table");
        let L = {
            "Not yet set": [""]
        };
        for (l = 0; l < V.length; l++) {
            var B = V[l].key;
            L[B] = L[B] || [], L[B].push(V[l])
        }
        for (l = 0; l < j.length; l++) {
            var D = j[l].key;
            L[D] = L[D] || [], L[D].push(j[l])
        }
        for (l = 0; l < V.length; l++) {
            a = document.createElement("tr");
            var P = document.createElement("td");
            P.innerText = V[l].name, a.appendChild(P);
            const j = document.createElement("td");
            j.className = "hovorable", j.style.border = "1px solid grey", L[V[l].key].length > 1 && (j.style.borderColor = "red"), j.style.padding = "5px 16px", j.style.backgroundColor = "#2b2c33", j.style.width = "1%", j.style.whiteSpace = "nowrap", j.style.textAlign = "center", j.innerText = V[l].key.toUpperCase() === V[l].key && V[l].key.toLowerCase() !== V[l].key.toUpperCase() ? "Shift + " + V[l].key : 1 === V[l].key.length ? V[l].key.toUpperCase() : V[l].key;
            const m = V[l];
            j.onclick = function() {
                !1 === I && (I = m, j.innerText = "Press any key")
            }, a.appendChild(j), e.appendChild(a)
        }
        S.appendChild(e), K = document.createElement("h1"), K.innerText = "Troop factors", S.appendChild(K);
        var W = document.createElement("p");
        for (W.innerText = "Custom troop factors are disabled in 1v1 games.", S.appendChild(W), (e = document.createElement("table")).style.borderSpacing = "0px 10px", l = 0; l < j.length; l++) {
            a = document.createElement("tr");
            const V = document.createElement("td");
            V.className = "hovorable", V.style.border = "1px solid grey", L[j[l].key].length > 1 && (V.style.borderColor = "red"), V.style.padding = "5px 16px", V.style.backgroundColor = "#2b2c33", V.style.textAlign = "center", V.innerText = j[l].key.toUpperCase() === j[l].key && j[l].key.toLowerCase() !== j[l].key.toUpperCase() ? "Shift + " + j[l].key : 1 === j[l].key.length ? j[l].key.toUpperCase() : j[l].key;
            const S = j[l];
            V.onclick = function() {
                !1 === I && (I = S, V.innerText = "Press any key")
            }, a.appendChild(V);
            const K = document.createElement("td");
            K.className = "hovorable", K.style.border = "1px solid grey", K.style.borderLeft = "none", K.style.padding = "5px 16px", K.style.backgroundColor = "#2b2c33", K.style.width = "1%", K.style.whiteSpace = "nowrap", K.style.textAlign = "center", K.innerText = j[l].rm ? "Relative" : "Absolute", K.onclick = function() {
                S.rm = !S.rm, C(), Wj.Xl(Gj)
            }, a.appendChild(K);
            const B = document.createElement("td");
            B.className = "hovorable", B.style.border = "1px solid grey", B.style.borderLeft = "none", B.style.padding = "5px 16px", B.style.backgroundColor = "#2b2c33", B.style.width = "1%", B.style.whiteSpace = "nowrap", B.style.textAlign = "center", B.innerText = j[l].rm ? "x " + j[l].value : 100 * j[l].value + "%";
            const D = function() {
                let V;
                m = !0, B.innerText = S.rm ? S.value : 100 * S.value, B.contentEditable = !0, B.focus(), B.onblur = function() {
                    B.contentEditable = !1, m = !1;
                    let j = B.innerText.match(/(\d+\.?\d*)|(\+|-|\*|\/)/g),
                        I = !0;
                    for (V = 0; V < j.length; V++) "+" === j[V] || "-" === j[V] || "*" === j[V] || "/" === j[V] ? (I && (j.splice(V, 1), V--), I = !0) : I ? I = !1 : (j.splice(V, "+"), V--);
                    if (j) {
                        for (V = 0; V < j.length; V++) "*" === j[V] ? (j[V - 1] = parseFloat(j[V - 1]) * parseFloat(j[V + 1]), j.splice(V, 2), V--) : "/" === j[V] && (j[V - 1] = parseFloat(j[V - 1]) / parseFloat(j[V + 1]), j.splice(V, 2), V--);
                        for (V = 0; V < j.length; V++) "+" === j[V] ? (j[V - 1] = parseFloat(j[V - 1]) + parseFloat(j[V + 1]), j.splice(V, 2), V--) : "-" === j[V] && (j[V - 1] = parseFloat(j[V - 1]) - parseFloat(j[V + 1]), j.splice(V, 2), V--);
                        S.value = parseFloat(j[0])
                    }
                    S.rm ? S.value < 0 && (S.value = 0) : S.value = Math.max(0, Math.min(1, S.value / 100)), C(), B.innerText = S.rm ? "x " + S.value : 100 * S.value + "%", B.onblur = null, B.onkeydown = null, B.onclick = D
                }, B.onkeydown = function(V) {
                    "Enter" === V.key && (V.preventDefault(), setTimeout((function() {
                        B.blur()
                    }), 100))
                }, B.onclick = null
            };
            B.onclick = D, a.appendChild(B);
            const P = document.createElement("td");
            P.style.width = "1%", P.style.whiteSpace = "nowrap", P.style.textAlign = "center", P.style.cursor = "pointer", P.style.color = "red", P.style.paddingLeft = "5px", P.innerText = "X";
            const W = l;
            P.onclick = function() {
                j.splice(W, 1), C(), Wj.Xl(Gj)
            }, a.appendChild(P), e.appendChild(a)
        }
        S.appendChild(e);
        var v = document.createElement("div");
        v.style.textAlign = "center", v.style.cursor = "pointer", v.style.color = "green", v.innerText = "+", v.style.fontSize = "20px", v.style.fontWeight = "bold", v.style.borderRadius = "50%", v.style.border = "2px solid green", v.style.width = "30px", v.style.height = "30px", v.style.lineHeight = "30px", v.style.flexShrink = "0", v.style.marginLeft = "auto", v.style.marginRight = "auto", v.onclick = function() {
            j.push({
                key: "Not yet set",
                value: .5,
                rm: !1
            }), C(), Wj.Xl(Gj)
        }, S.appendChild(v);
        var t = document.createElement("div");
        t.style.height = "10px", t.style.flexShrink = "0", S.appendChild(t)
    }, this.Aj = function(j) {
        if (m) return;
        if (400 > pS.lb) return;
        if (8 !== mj.getState() && mj.sg(j)) return void(pS.request = !0);
        if ("Escape" === j.key) return mj.oa(), void j.preventDefault();
        let I;
        if (j.key.toUpperCase() !== j.key.toLowerCase()) {
            let m = j.key.toLowerCase() === j.key ? j.key.toUpperCase() : j.key.toLowerCase();
            for (I = 0; I < V.length; I++) V[I].qm && V[I].key === m && V[I].release && V[I].release()
        }
        for (I = 0; I < V.length; I++)
            if (V[I].key === j.key) return void(V[I].release && V[I].release())
    }, this.Bj = function(S) {
        if (m) return;
        if (!1 !== I) {
            if ("Shift" === S.key) return;
            return S.preventDefault(), I.key = S.key, C(), I = !1, void Wj.Xl(Gj)
        }
        let l;
        for (l = 0; l < V.length; l++)
            if (V[l].key === S.key) return void(V[l].pm && V[l].pm());
        if (8 === kV) ! function(V) {
            "a" === V.key ? YV.tf(.96875) : "d" === V.key ? YV.tf(32 / 31) : "s" === V.key ? YV.tf(.875) : "w" === V.key ? YV.tf(8 / 7) : "1" === V.key ? YV.tf(5 / 6) : "2" === V.key && YV.tf(1.2)
        }(S);
        else
            for (l = 0; l < j.length; l++)
                if (j[l].key === S.key) return void(j[l].rm ? YV.tf(j[l].value) : YV.uf(j[l].value))
    }, this.load = function() {
        var I = JSON.parse(localStorage.getItem("keyBindings"));
        if (I)
            for (let j = 0; j < I.length; j++)
                for (let m = 0; m < V.length; m++)
                    if (I[j].id === V[m].id) {
                        V[m].key = I[j].key;
                        break
                    } var m = JSON.parse(localStorage.getItem("troopFactors"));
        m && (j = m)
    }
}
document.getElementById("close_left").onclick = function() {
    Dj.Wl(Dj.Rl)
}, document.getElementById("close_right").onclick = function() {
    Dj.Wl(Dj.Sl)
}, setTimeout(oS, 1e4);
var ma = ["highResolution", "moveTimer", "removeMenuSettingButton", "zoomInterface", "showFPS", "boatLines", "hoveringTooltips", "switchPlayerInfo", "showDensity", "showPercentage"];
for (const V of ma) document.getElementById(V).checked = Ca(V), document.getElementById(V).onclick = function() {
    la(V, document.getElementById(V).checked)
};

function Ca(V) {
    return Sa(V, document.getElementById(V).checked)
}

function Sa(V, j) {
    const I = localStorage.getItem("btt_" + V);
    return null === I ? j : "true" === I
}

function la(V, j) {
    2 === Bj.m() && localStorage.setItem("btt_" + V, j)
}
document.getElementById("info").innerText = "Build for 1.83.3   3 February 2023 with ❤ by platz1de (sdsd)", document.getElementById("highResolution").onclick = function() {
    la("highResolution", document.getElementById("highResolution").checked), Yj.mk(document.getElementById("highResolution").checked)
}, document.getElementById("removeMenuSettingButton").onclick = function() {
    la("removeMenuSettingButton", document.getElementById("removeMenuSettingButton").checked), pI.resize()
}, document.getElementById("zoomInterface").onclick = function() {
    la("zoomInterface", document.getElementById("zoomInterface").checked), LS = pI.buttons[0].active = Ca("zoomInterface"), Oj.Vh()
}, document.getElementById("showDensity").onclick = function() {
    la("showDensity", document.getElementById("showDensity").checked), yV.resize(), uV.resize()
}, document.getElementById("openKeybindings").onclick = function() {
    Gj.open()
}, document.getElementById("server").value = 0;
let aa = ["Lobby 1", "Lobby 2", "Lobby 3", "Lobby 1 (proxied)", "Lobby 2 (proxied)", "Lobby 3 (proxied)"];
document.getElementById("server").onchange = function() {
    document.getElementById("server").innerText = aa[document.getElementById("server").value], Ij.Tg(document.getElementById("server").value), 7 === mj.getState() && (Uj.Vg(3240), Ij.init())
}, document.getElementById("server").onclick = function() {
    "block" !== document.getElementById("serverSelector").style.display ? document.getElementById("serverSelector").style.display = "block" : document.getElementById("serverSelector").style.display = "none"
}, document.getElementById("serverSelector").onclick = function(V) {
    let j = V.target;
    document.getElementById("server").value = j.getAttribute("data-id"), document.getElementById("serverSelector").style.display = "none", document.getElementById("server").onchange()
}, document.getElementById("emojis").onclick = function() {
    Dj.Wl(Wj), pI.sg(), gS.Qe(), pI.buttons[1].Re.Kb(), Kj.hide(), pS.request = !0
}, document.getElementById("color").onclick = function() {
    Dj.Wl(Wj), pI.sg(), gS.Qe(), pI.buttons[2].Re.Kb(), Kj.hide(), pS.request = !0
}