function zto743() {
  if (5 <= xzu607) {
      var b = Android.loadString(0);
      "" == b && (b = "Player " + Math.floor(1E3 * Math.random()), Android.saveString(0, b))
  } else b = zto1332(0);
  return b
}

function zto744() {
  xzu614 = Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1));
  if (5 <= xzu607) {
      var b = Android.loadNumber(2);
      2 == b ? Android.saveNumber(2, xzu614 + 3) : xzu614 = b - 3
  } else xzu614 = zto1332(1)
}

function zto745() {
  return 5 <= xzu607 ? 0 < Android.loadNumber(11) : 0 != zto1332(2)
}

function zto746() {
  if (5 <= xzu607) {
      var b = Android.loadNumber(1);
      2 == b ? (xzu610 = 95 >= xzu609, Android.saveNumber(1, xzu610 ? 1 : 0)) : xzu610 = 1 == b
  } else xzu610 = 0 == zto1332(4)
}

function zto747(b) {
  if (5 <= xzu607) return 1 == Android.loadNumber(12 + b);
  var d = zto1332(6);
  return 0 == b && 2 > d || 1 == b && (0 == d || 2 == d)
}

function zto748() {
  return 5 <= xzu607 ? Android.loadString(1) : zto1332(7)
}

function zto749() {
  return 5 <= xzu607 ? Android.loadString(2) : zto1332(8)
}

function zto750(b) {
  5 <= xzu607 ? Android.saveString(0, b) : (zto1331(0, b), zto1328())
}

function zto751(b) {
  5 <= xzu607 ? (Android.saveNumber(1, b[1] ? 1 : 0), Android.saveNumber(11, b[0] ? 1 : 0)) : (zto1331(2, b[0] ? 0 : 1), zto1331(4, b[1] ? 0 : 1), zto1328())
}

function zto752(b, d) {
  5 <= xzu607 ? (Android.saveNumber(12, b ? 1 : 0), Android.saveNumber(13, d ? 1 : 0)) : (zto1331(6, b && d ? 0 : b && !d ? 1 : !b && d ? 2 : 3), zto1328())
}

function zto753() {
  for (var b = "", d = 0; d < xzu619.nAll; d += 2) b += xzu619.arrSelected[d] || xzu619.arrSelected[d + 1] ? xzu619.arrSelected[d] && !xzu619.arrSelected[d + 1] ? "1" : !xzu619.arrSelected[d] && xzu619.arrSelected[d + 1] ? "2" : "3" : "0";
  5 <= xzu607 ? Android.saveString(1, b) : (zto1331(7, b), zto1328())
}

function zto754(b) {
  5 <= xzu607 ? Android.saveString(2, b) : (zto1331(8, b), zto1328())
}

function zto755(b, d) {
  return 5 > xzu607 && 0 == zto1329() ? (zto1263(), zto1199(b, d), !0) : !1
}

function zto756(b) {
  5 <= xzu607 && Android.setState(b)
}

function zto757(b) {
  5 <= xzu607 && Math.random() < b && Android.showAd()
}

function zto758() {
  7 <= xzu607 ? Android.setState(5) : location.reload()
}
var xzu5, xzu6, xzu7, xzu8, xzu9, xzu10, xzu11, xzu12, xzu13, xzu14, xzu15, xzu16, xzu17;

function zto759() {
  xzu10 = 0;
  xzu11 = 2048;
  xzu12 = new Uint32Array(4 * xzu11);
  xzu13 = 0;
  xzu14 = new Uint32Array(xzu11);
  xzu15 = new Int32Array(4);
  xzu15[0] = -4 * xzu624;
  xzu15[1] = 4;
  xzu15[2] = -xzu15[0];
  xzu15[3] = -xzu15[1];
  xzu16 = new Uint8Array(xzu624 * xzu625)
}

function zto760(b) {
  xzu6 = b;
  xzu17 = !1;
  zto766();
  zto767();
  for (b = zto1357(xzu6) - 1; 0 <= b; b--) 0 == zto1359(xzu6, b) && (xzu5 = b, zto762());
  xzu17 && zto761()
}

function zto761() {
  zto1568();
  zto1569()
}

function zto762() {
  xzu9 = zto1358(xzu6, xzu5);
  xzu7 = zto1362(xzu6, xzu5);
  zto768();
  0 == xzu10 ? zto765() : (zto764(), zto763() ? zto771() : zto765())
}

function zto763() {
  xzu8 = zto1496(xzu7, xzu10);
  return xzu8 > xzu145
}

function zto764() {
  for (var b = xzu10 - 1; 0 <= b; b--) xzu16[zto1496(xzu12[b], 4)] = 0
}

function zto765() {
  1 == zto1357(xzu6) && zto806(xzu6);
  xzu575[xzu6] += xzu7;
  zto1379(xzu6);
  zto1367(xzu6, xzu5)
}

function zto766() {
  var b = xzu576[xzu6].length;
  b = b > xzu11 ? xzu11 : b;
  xzu13 = 0;
  for (--b; 0 <= b; b--) xzu14[xzu13++] = xzu576[xzu6][b]
}

function zto767() {
  for (var b = xzu576[xzu6].length - 1; 0 <= b; b--) zto1296(xzu576[xzu6][b]) && zto1309(xzu576[xzu6][b], xzu6);
  xzu576[xzu6] = []
}

function zto768() {
  xzu10 = 0;
  xzu9 == xzu135 ? zto770() : zto769()
}

function zto769() {
  for (var b, d = 3; 0 <= d; d--)
      for (var e = xzu13 - 1; 0 <= e; e--) b = xzu14[e] + xzu15[d], 0 == xzu16[b / 4] && zto1290(b) && zto1303(b) == xzu9 && (xzu16[b / 4] = 1, xzu12[xzu10++] = b)
}

function zto770() {
  for (var b, d = 3; 0 <= d; d--)
      for (var e = xzu13 - 1; 0 <= e; e--) b = xzu14[e] + xzu15[d], 0 == xzu16[b / 4] && zto1300(b) && (xzu16[b / 4] = 1, xzu12[xzu10++] = b)
}

function zto771() {
  zto774() ? (zto773(), xzu9 != xzu135 && zto772()) : zto765()
}

function zto772() {
  zto1570();
  zto1572(xzu577[xzu9]);
  zto1572(xzu578[xzu9]);
  zto1571(xzu576[xzu9]);
  zto1573(xzu578[xzu9]);
  zto1573(xzu579[xzu9]);
  zto1574();
  zto1575()
}

function zto773() {
  xzu17 = !0;
  zto1364(xzu6, xzu5, xzu7);
  xzu573[xzu6] += xzu10;
  zto1567();
  zto782()
}

function zto774() {
  return xzu9 == xzu135 ? zto781() : zto775()
}

function zto775() {
  var b = xzu10 * xzu145,
      d = zto778(),
      e = zto777();
  d = b + 2 * d + e;
  var a = xzu8 * xzu10;
  if (a > d) return xzu7 -= d, zto776(d - b, e), !0;
  xzu7 -= a;
  zto776(a - b, e);
  return !1
}

function zto776(b, d) {
  if (0 < d)
      if (b >= d) zto1363(xzu9, xzu6, 0), b -= d;
      else {
          zto1363(xzu9, xzu6, d - b);
          return
      } b = zto1496(b, 2);
  xzu575[xzu9] = xzu575[xzu9] >= b ? xzu575[xzu9] - b : 0
}

function zto777() {
  return zto1361(xzu9, xzu6)
}

function zto778() {
  return zto1496(xzu10 * xzu575[xzu9], 1 + zto779() * zto780())
}

function zto779() {
  return Math.floor(2 + zto1500(zto1496(xzu573[xzu9], 100), 8))
}

function zto780() {
  return xzu577[xzu9].length + zto1496(xzu578[xzu9].length + xzu579[xzu9].length, 50)
}

function zto781() {
  xzu7 -= xzu10 * xzu145;
  return !0
}

function zto782() {
  for (var b = xzu10 - 1; 0 <= b; b--) xzu576[xzu6].push(xzu12[b]), xzu577[xzu6].push(xzu12[b]), zto1309(xzu12[b], xzu6)
}

function zto783(b, d, e, a) {
  var f = zto1496(xzu575[b], 100);
  a -= a >= zto1496(xzu575[b], 2) ? f : 0;
  zto785(e, b);
  zto1365(b, a, d);
  xzu575[b] -= a + f;
  zto807(b, !1)
}

function zto784(b, d) {
  for (var e, a = xzu577[b].length - 1; 0 <= a; a--)
      if (zto1293(xzu577[b][a]))
          for (e = 3; 0 <= e; e--)
              if (zto1290(xzu577[b][a] + xzu15[e]) && zto1303(xzu577[b][a] + xzu15[e]) == d) {
                  xzu576[b].push(xzu577[b][a]);
                  break
              }
}

function zto785(b, d) {
  for (var e = xzu576[d].length - 1; e >= b; e--) zto1310(xzu576[d][e], d)
}

function zto786(b) {
  for (var d, e = xzu577[b].length - 1; 0 <= e; e--)
      if (zto1293(xzu577[b][e]))
          for (d = 3; 0 <= d; d--)
              if (zto1300(xzu577[b][e] + xzu15[d])) {
                  xzu576[b].push(xzu577[b][e]);
                  break
              }
}

function zto787(b) {
  var d = zto1496(xzu571[b] + xzu569[b], 2),
      e = zto1496(xzu572[b] + xzu570[b], 2),
      a = zto1496(xzu571[b] - xzu569[b], 8),
      f = zto1496(xzu572[b] - xzu570[b], 8);
  d += a - zto1496((2 * a + 1) * zto1524(), zto1521(100));
  e += f - zto1496((2 * f + 1) * zto1524(), zto1521(100));
  xzu33 = 0;
  var c = xzu577[b].length - 1;
  a: for (; 0 <= c; c--)
      if (zto1293(xzu577[b][c]))
          for (a = 3; 0 <= a; a--)
              if (f = zto1300(xzu577[b][c] + xzu15[a]) ? xzu135 : zto1303(xzu577[b][c] + xzu15[a]), f == xzu135 || zto1290(xzu577[b][c] + xzu15[a]) && f != b) {
                  for (var g = xzu33 - 1; 0 <= g; g--)
                      if (xzu34[g] == f) continue a;
                  xzu34[xzu33] = f;
                  xzu35[xzu33] = zto1497(d - zto1285(xzu577[b][c])) + zto1497(e - zto1286(xzu577[b][c]));
                  if (++xzu33 >= xzu32) return
              }
}

function zto788(b) {
  var d;
  xzu33 = 0;
  for (var e = xzu577[b].length - 1; 0 <= e; e--)
      if (zto1293(xzu577[b][e]))
          for (d = 3; 0 <= d; d--) {
              var a = zto1300(xzu577[b][e] + xzu15[d]) ? xzu135 : zto1303(xzu577[b][e] + xzu15[d]);
              a == xzu135 ? 2 == xzu33 || 1 == xzu33 && xzu34[0] == a || (xzu34[1] = xzu34[0], xzu34[0] = a, xzu33++) : zto1290(xzu577[b][e] + xzu15[d]) && a != b && (0 == xzu33 ? xzu34[xzu33++] = a : 1 == xzu33 ? xzu34[0] == xzu135 ? xzu34[xzu33++] = a : xzu575[a] < xzu575[xzu34[0]] && (xzu34[0] = a) : xzu575[a] < xzu575[xzu34[1]] && (xzu34[1] = a))
          }
}
var xzu32, xzu33, xzu34, xzu35;

function zto789() {
  xzu32 = 10;
  xzu33 = 0;
  xzu34 = new Uint16Array(xzu32);
  xzu35 = new Uint32Array(xzu32)
}

function zto790(b, d) {
  if (!(96 > d))
      if (d > xzu575[b]) console.log("Error 34");
      else {
          var e = zto1376(b);
          xzu575[b] > e && d < xzu575[b] - e && (d = xzu575[b] - e);
          e = zto795();
          0 < e ? zto787(b) : zto788(b);
          if (0 != xzu33) {
              for (var a = !1, f = xzu33 - 1; 0 <= f; f--)
                  if (xzu34[f] == xzu135) {
                      a = !0;
                      break
                  } if (a) {
                  if (1 == xzu33 || 400 > xzu587 || zto1524() < zto1521(60 < e ? e : 60)) {
                      zto792(b, d);
                      return
                  }
                  for (f = xzu33 - 1; 0 <= f; f--)
                      if (xzu34[f] == xzu135) {
                          xzu33--;
                          for (a = f; a < xzu33; a++) xzu34[a] = xzu34[a + 1], xzu35[a] = xzu35[a + 1];
                          break
                      }
              }
              1 < xzu33 && xzu34[0] < xzu131 && (a = xzu34[0], f = xzu35[0], xzu34[0] =
                  xzu34[1], xzu35[0] = xzu35[1], xzu34[1] = a, xzu35[1] = f);
              e = zto791(0 < e && zto1524() < zto1521(e));
              zto1496(xzu575[b], 8) > xzu575[e] && (a = zto1496(11 * xzu575[e], 5), d = d > a ? d : a);
              a = xzu576[b].length;
              zto784(b, e);
              zto783(b, e, a, d)
          }
      }
}

function zto791(b) {
  for (var d = 0, e = xzu33 - 1; 1 <= e; e--) xzu35[e] < xzu35[d] && (!b || xzu34[e] >= xzu131) && (d = e);
  return xzu34[d]
}

function zto792(b, d) {
  var e = xzu135,
      a = xzu576[b].length;
  zto786(b);
  return xzu576[b].length != a ? (zto783(b, e, a, d), !0) : !1
}
(function() {
  var b, d, e, a, f, c, g, h, l;
  window.zto793 = function() {
      h = [98, 95, 80, 40, 20, 0];
      l = [85, 80, 60, 30, 7, 3];
      b = new Uint8Array(xzu133);
      d = new Uint16Array(xzu133);
      e = new Uint16Array(xzu133);
      a = new Uint8Array(xzu133);
      f = new Uint16Array(xzu133);
      c = new Uint16Array(xzu133);
      g = zto1123(xzu143);
      for (var k = xzu133 - 1; 0 <= k; k--) a[k] = 1 + zto1496(20 * zto1524(), zto1521(100)), c[k] = 250 + zto1496(1500 * zto1524(), zto1521(100)), f[k] = 500 + zto1496(501 * zto1524(), zto1521(100)), 0 == g ? (d[k] = 940 + zto1496(60 * zto1524(), zto1521(100)), e[k] = 800 + zto1496(200 *
          zto1524(), zto1521(100))) : 1 == g ? (d[k] = 950, e[k] = 850, a[k] = 10, f[k] = 1E3, c[k] = 1E3) : 2 == g ? (d[k] = 800 + zto1496(100 * zto1524(), zto1521(100)), e[k] = 400 + zto1496(400 * zto1524(), zto1521(100))) : 3 == g ? (d[k] = 600 + zto1496(100 * zto1524(), zto1521(100)), e[k] = 300 + zto1496(400 * zto1524(), zto1521(100))) : 4 == g ? (d[k] = 300 + zto1496(200 * zto1524(), zto1521(100)), e[k] = 100 + zto1496(201 * zto1524(), zto1521(100))) : (d[k] = 200 + zto1496(200 * zto1524(), zto1521(100)), e[k] = 23 + zto1496(151 * zto1524(), zto1521(100))), b[k] = 1 + zto1496(f[k] * zto1524(), 10 * zto1521(100))
  };
  window.zto794 = function() {
      return l[g]
  };
  window.zto795 = function() {
      return h[g]
  };
  window.zto796 = function(k) {
      if (0 == --b[k]) {
          f[k] += f[k] < c[k] ? 3 : -3;
          d[k] != e[k] && (d[k] += d[k] < e[k] ? a[k] : -a[k], d[k] = Math.abs(d[k] - e[k]) <= a[k] ? e[k] : d[k]);
          b[k] = zto1496(f[k], 10);
          var m = k + xzu131;
          zto1356(m) && (0 == xzu577[m].length || 0 < xzu578[m].length && zto1524() < zto1521(xzu578[m].length > xzu577[m].length ? 7 : 3) ? zto808(m) : zto790(m, zto1496(d[k] * xzu575[m], 1E3)))
      }
  }
})();

function zto799() {
  zto917(!0);
  zto1400();
  zto1086();
  zto1418()
}

function zto800() {
  zto1373();
  zto818();
  zto814();
  zto804();
  zto831();
  zto1428();
  zto1062();
  zto1400();
  zto1433();
  zto1085();
  zto1051();
  zto957();
  zto917(!1);
  zto1000();
  zto1418()
}

function zto801() {
  zto1056(!1);
  zto950();
  zto1080(!1);
  zto1048();
  zto981();
  zto1390();
  xzu618.render();
  zto856()
}

function zto802() {
  zto1390() && zto856()
}
(function() {
  function b(c) {
      f[c] = 10 == f[c] ? d : 1E3 > xzu573[c] ? 3 : 1E4 > xzu573[c] ? 2 : 6E4 > xzu573[c] ? 1 : 0
  }
  var d, e, a, f;
  window.zto803 = function() {
      d = 6;
      e = 0;
      a = new Uint16Array(xzu135);
      f = new Uint8Array(xzu135)
  };
  window.zto804 = function() {
      for (var c = e - 1; 0 <= c; c--) 10 == f[a[c]] ? b(a[c]) : 0 == f[a[c]]-- && (b(a[c]), zto760(a[c]))
  };
  window.zto806 = function(c) {
      for (var g = e - 1; 0 <= g; g--)
          if (c == a[g]) {
              e--;
              for (c = g; c < e; c++) a[c] = a[c + 1];
              break
          }
  };
  window.zto807 = function(c, g) {
      for (var h = e - 1; 0 <= h; h--)
          if (c == a[h]) return;
      a[e++] = c;
      f[c] = g ? 2 : 10
  }
})();
(function() {
  function b() {
      a = 3;
      a: {
          for (var h = 40; 1 <= h; h--) {
              f = xzu569[g] + zto1496(zto1524() * (xzu571[g] - xzu569[g] + 1), zto1521(100));
              c = xzu570[g] + zto1496(zto1524() * (xzu572[g] - xzu570[g] + 1), zto1521(100));
              var l = d(zto1287(f, c));
              if (1 != l) break a
          }
          l = 1
      }
      if (0 == l) return !1;
      if (2 == l) return !0;
      l = e(1, 1);
      return 0 == l ? !1 : 2 == l ? !0 : 2 == e(54, 4)
  }

  function d(h) {
      if (zto1296(h) && (zto1300(h) || zto1303(h) != g)) {
          if (zto1513(g, h)) return 2;
          if (0 == a--) return 0
      }
      return 1
  }

  function e(h, l) {
      for (var k, m, p, n, r, q, t, u = h; u < h + 50 * l; u += l)
          if (k = xzu569[g] - u, k = 1 > k ? 1 :
              k, m = xzu570[g] - u, m = 1 > m ? 1 : m, p = xzu571[g] + u, p = p >= xzu624 - 1 ? xzu624 - 2 : p, n = xzu572[g] + u, n = n >= xzu625 - 1 ? xzu625 - 2 : n, t = zto1496(2 * zto1524() * (p - k + n - m), zto1521(100)), r = p - k, q = n - m, t <= r ? (f = k + t, c = m) : t <= r + q ? (f = p, c = m + t - r) : t <= 2 * r + q ? (f = k + t - r - q, c = n) : (f = k, c = m + t - 2 * r - q), k = d(zto1287(f, c)), 1 != k) return k;
      return 1
  }
  var a, f, c, g;
  window.zto808 = function(h) {
      g = h;
      0 != xzu578[g].length && b() && (h = zto1496(zto794() * xzu575[g], 100), 60 <= h && zto1105(g, zto1512(), zto1287(f, c), h))
  }
})();
(function() {
  var b, d;
  window.zto813 = function() {
      b = xzu133;
      d = new Uint16Array(xzu133);
      for (var e = xzu133 - 1; 0 <= e; e--) d[e] = e
  };
  window.zto814 = function() {
      for (var e = b - 1; 0 <= e; e--)
          if (0 == xzu568[d[e] + xzu131]) {
              var a = e;
              for (b--; a < b; a++) d[a] = d[a + 1]
          } else zto796(d[e])
  }
})();
(function() {
  function b(h, l, k, m, p, n) {
      0 < k && 1E3 >= k && (d.push(h), e.push(l), a.push(k), f.push(m), c.push(p), g.push(n))
  }
  var d, e, a, f, c, g;
  window.zto817 = function() {
      d = [];
      e = [];
      a = [];
      f = [];
      c = [];
      g = []
  };
  window.zto818 = function() {
      var h = d.length;
      h = 100 > h ? h : zto1496(h, 2);
      for (--h; 0 <= h; h--) {
          if (0 == e[0]) zto1104(d[0], f[0], a[0]);
          else if (1 == e[0]) 0 != xzu568[d[0]] && zto1513(d[0], zto1287(c[0], g[0])) && zto1105(d[0], zto1512(), zto1287(c[0], g[0]), zto1496(a[0] * xzu575[d[0]], 1E3));
          else if (2 == e[0] && zto1355(d[0], f[0])) {
              var l = zto1361(d[0], f[0]);
              zto1363(d[0], f[0], 0);
              xzu575[d[0]] += l;
              zto1379(d[0])
          }
          d.shift();
          e.shift();
          a.shift();
          f.shift();
          c.shift();
          g.shift()
      }
  };
  window.zto823 = function(h, l, k) {
      1 == xzu139 && b(h, 0, l, k, 0, 0)
  };
  window.zto824 = function(h, l, k, m) {
      1 == xzu139 && b(h, 1, l, 0, k, m)
  };
  window.zto825 = function(h, l) {
      1 == xzu139 && b(h, 2, 1, l, 0, 0)
  };
  window.zto826 = function(h) {
      1 == xzu139 ? 0 != xzu568[h] ? (zto1343(h), zto1429(), zto909(h, 4), xzu147 && zto873(!0)) : zto909(h, 4) : 2 == xzu139 && zto909(h, 4)
  }
})();
(function() {
  var b, d, e, a, f, c, g, h, l;
  window.zto829 = function() {
      b = 1;
      e = 0;
      d = 2 * xzu135;
      a = new Uint16Array(d);
      f = new Uint8Array(d);
      c = new Uint16Array(d);
      g = new Uint32Array(d);
      h = new Uint32Array(d);
      l = new Uint8Array(d)
  };
  window.zto830 = function(k, m) {
      g[k] = m
  };
  window.zto831 = function() {
      for (var k = e - 1; 0 <= k; k--) 0 == f[k]-- && (f[k] = 2, zto1525(k, c[k], a[k], g[k], h[k], l[k]))
  };
  window.zto833 = function(k, m) {
      for (var p = e - 1; 0 <= p; p--)
          if (k == a[p] && m == c[p]) {
              for (e--; p < e; p++) a[p] = a[p + 1], f[p] = f[p + 1], c[p] = c[p + 1], g[p] = g[p + 1], h[p] = h[p + 1], l[p] = l[p +
                  1];
              break
          }
  };
  window.zto834 = function(k, m, p) {
      if (e >= d) return 0;
      a[e] = k;
      f[e] = 0;
      c[e] = b;
      g[e] = m;
      h[e] = p;
      l[e] = Math.abs(zto1285(m) - zto1285(p)) > Math.abs(zto1286(m) - zto1286(p)) ? 1 : 0;
      k = b;
      b++;
      e++;
      b = b > 2 * d ? 1 : b;
      return k
  }
})();
(function() {
  function b(C) {
      f = 33;
      k = w = m = l = 0;
      c = C;
      p = f / c;
      g = 1 / (c / f / 4);
      n = (xzu601 / 2 + xzu313) / xzu312;
      r = (xzu602 / 2 + xzu314) / xzu312;
      q = xzu312;
      t = (xzu569[h] + xzu571[h] + 1) / 2;
      u = (xzu570[h] + xzu572[h] + 1) / 2
  }

  function d() {
      var C = xzu571[h] - xzu569[h] + 1,
          H = xzu572[h] - xzu570[h] + 1,
          F = xzu601 / C,
          K = xzu602 / H;
      v = F < K ? F : K;
      v *= 60 > C && 60 > H ? .5 : .9;
      .2 > Math.abs(Math.log(v / q)) && (v = .7 * q)
  }

  function e(C) {
      zto841();
      h = C;
      q = xzu312;
      n = (xzu601 / 2 + xzu313) / xzu312;
      r = (xzu602 / 2 + xzu314) / xzu312;
      t = (xzu569[h] + xzu571[h] + 1) / 2;
      u = (xzu570[h] + xzu572[h] + 1) / 2;
      d();
      xzu312 = v;
      zto1012(t,
          xzu601 / 2);
      zto1013(u, xzu602 / 2)
  }

  function a() {
      .5 > l ? m < p && (m += p * g, k = l) : l > 1 - k && (m -= p * g, m = m < p * g ? p * g : m);
      l += m;
      l = 1 < l ? 1 : l;
      var C = xzu312,
          H = xzu313,
          F = xzu314;
      xzu312 = q * Math.pow(v / q, l);
      C = xzu312 / C;
      var K = 1 - (q * Math.pow(v / q, 1 - l) - q) / (v - q);
      zto1012(n + K * (t - n), xzu601 / 2);
      zto1013(r + K * (u - r), xzu602 / 2);
      zto1389(C, (H * C - xzu313) / (1 - C), (F * C - xzu314) / (1 - C));
      1 > l ? w = setTimeout(a, f) : A = !1;
      zto856()
  }
  var f, c, g, h, l, k, m, p, n, r, q, t, u, v, w, z = 0,
      x = 0,
      A = !1;
  window.zto836 = function() {
      b(1);
      e(xzu146)
  };
  window.zto837 = function(C) {
      var H = (new Date).getTime();
      H < z +
          700 && x == C ? e(C) : zto838(C, 800);
      x = C;
      z = H
  };
  window.zto838 = function(C, H) {
      zto841();
      h = C;
      b(H);
      d();
      A = !0;
      zto1510();
      w = setTimeout(a, f)
  };
  window.zto841 = function() {
      A && (A = !1, clearTimeout(w))
  }
})();
(function() {
  function b() {
      var r = zto1496(h - m, 2),
          q = k + f * h + r;
      r = l + a * h + r;
      for (var t, u = q + m - 1; u >= q; u--)
          for (var v = r + m - 1; v >= r; v--)
              if (t = zto1287(v, u), !zto1296(t) || zto1293(t)) return !1;
      return !0
  }

  function d() {
      xzu568[p] = 0;
      xzu575[p] = p < xzu131 ? xzu144 : xzu143;
      xzu573[p] = xzu574[p] = 0;
      xzu576[p] = [];
      xzu577[p] = [];
      xzu578[p] = [];
      xzu579[p] = [];
      xzu571[p] = xzu624;
      xzu572[p] = xzu625
  }

  function e(r, q) {
      xzu568[p] = 1;
      xzu569[p] = r + 10;
      xzu570[p] = q + 10;
      xzu572[p] = xzu571[p] = 0;
      for (var t, u = r; u < r + 4; u++)
          for (var v = q; v < q + 4; v++)
              if (u > r && u < r + 3 || v > q && v < q + 3) t = zto1287(u,
                  v), zto1296(t) && (xzu569[p] = u < xzu569[p] ? u : xzu569[p], xzu571[p] = u > xzu571[p] ? u : xzu571[p], xzu570[p] = v < xzu570[p] ? v : xzu570[p], xzu572[p] = v > xzu572[p] ? v : xzu572[p], n[xzu573[p]] = t, xzu573[p]++, zto1308(t, p));
      xzu574[p] = xzu573[p];
      for (t = xzu573[p] - 1; 0 <= t; t--) zto1289(n[t], p) ? (zto1309(n[t], p), xzu577[p].push(n[t])) : zto1294(n[t]) ? (zto1309(n[t], p), xzu578[p].push(n[t])) : zto1288(n[t]) && (zto1309(n[t], p), xzu579[p].push(n[t]))
  }
  var a, f, c, g, h, l, k, m, p, n;
  window.zto843 = function(r) {
      n = Array(12);
      m = 6;
      h = 10;
      c = zto1496(xzu624, h);
      g = zto1496(xzu625,
          h);
      l = zto1496(xzu624 - h * c, 2);
      k = zto1496(xzu625 - h * g, 2);
      xzu150 && (p = 0, d());
      if (zto1450(xzu630)) {
          var q = zto1415()[xzu630 - zto1449()],
              t = q.length + xzu131;
          t = t > xzu135 ? xzu135 : t;
          for (p = xzu131; p < t; p++) {
              var u = q[p - xzu131][1] % xzu624,
                  v = zto1496(q[p - xzu131][1], xzu624);
              d();
              e(u - 2, v - 2)
          }
      }
      if (r)
          for (r = 0; r < xzu135; r++) t = 1 == r ? xzu135 - 1 : r == xzu135 - 1 ? 1 : r, p = r, q = zto1496(xzu624 * (1 + t % 16), 17), t = 1 + zto1496(xzu625 * (1 + zto1496(t, 16)), 33), d(), e(q - 2, t - 2);
      else
          for (p = xzu150 ? 1 : 0; p < xzu135; p++)
              if (1 != xzu568[p]) {
                  a: {
                      for (r = 0; 8 > r; r++)
                          if (a = zto1496(c * zto1524(),
                                  zto1521(100)), f = zto1496(g * zto1524(), zto1521(100)), b()) {
                              r = !0;
                              break a
                          } r = !1
                  }
                  if (!r) a: {
                      r = zto1496(c * zto1524(), zto1521(100));q = zto1496(g * zto1524(), zto1521(100));
                      for (t = 40; 1 <= t; t--)
                          for (u = g - t; 0 <= u; u -= 40)
                              for (f = (u + q) % g, v = 40; 1 <= v; v--)
                                  for (var w = c - v; 0 <= w; w -= 40)
                                      if (a = (w + r) % c, b()) {
                                          r = !0;
                                          break a
                                      } r = !1
                  }
                  r ? (q = l + a * h + zto1496(h, 2), r = k + f * h + zto1496(h, 2), d(), e(q - 2, r - 2)) : d()
              }
  };
  window.zto854 = function(r) {
      var q = zto1285(r);
      r = zto1286(r);
      for (var t = 0; 200 > t; t++)
          for (var u = q + t; u >= q - t; u--)
              for (var v = r + t; v >= r - t; v--)
                  if ((u == q + t || u == q - t || v == r +
                          t || v == r - t) && 4 < u && u < xzu624 - 5 && 4 < v && v < xzu625 - 5) {
                      var w;
                      if (w = zto1296(zto1287(u, v))) a: {
                          for (var z = u, x = v, A = x + 2; A >= x - 3; A--)
                              for (var C = z + 2; C >= z - 3; C--)
                                  if (w = zto1287(C, A), zto1293(w)) {
                                      w = !1;
                                      break a
                                  } w = !0
                      }
                      if (w) {
                          p = 0;
                          e(u - 2, v - 2);
                          xzu150 = !1;
                          zto836();
                          zto1384();
                          zto1390();
                          zto1593();
                          zto1554();
                          return
                      }
                  }
  }
})();

function zto856() {
  xzu615.calculatePreRendering();
  zto1537();
  xzu594.save();
  xzu594.scale(zto1005(), zto1005());
  xzu594.imageSmoothingEnabled = 3 > zto1005();
  xzu594.drawImage(xzu626, zto1006(), zto1007());
  xzu594.drawImage(xzu660, zto1006(), zto1007());
  xzu594.imageSmoothingEnabled = !1;
  zto1538();
  xzu594.restore();
  zto1386();
  xzu148 || (xzu594.imageSmoothingEnabled = !1, zto918(), zto1073(), zto988(), zto1096(), zto1023(), zto973(), zto1052(), zto965(), zto896(), zto1101(), zto888(), zto1595())
}
(function() {
  function b(g, h, l) {
      g = g.trim();
      a: {
          var k = g.toLowerCase();
          for (var m = c.length - 1; 0 <= m; m--)
              if (0 <= k.indexOf(c[m])) {
                  k = !0;
                  break a
              } k = !1
      }
      if (k) return !1;
      k = g.length;
      if (k < h || k > l) return !1;
      for (m = h = 0; m < k; m++)
          if (l = g.charCodeAt(m), h += 65 <= l && 90 >= l || 1040 <= l && 1071 >= l ? 1 : 0, -1 == d(l)) return !1;
      return 3 < h && h > Math.floor(k / 2) ? !1 : !0
  }

  function d(g) {
      for (var h = e.length - 1; 0 <= h; h--)
          if (g >= e[h] && g < a[h]) return h;
      return -1
  }
  var e, a, f, c = "fuck asshole porn rape nigger rapist nigga nazi".split(" ");
  (function() {
      e = [32, 65, 191, 913, 931];
      a = [64, 127, 688, 930, 1155];
      f = Array(e.length + 1);
      for (var g = 0; g < f.length; g++) {
          f[g] = 0;
          for (var h = g - 1; 0 <= h; h--) f[g] += a[h] - e[h]
      }
  })();
  window.zto859 = function(g) {
      g = g.trim();
      return 0 == g.indexOf("Bot ") || 0 == g.indexOf("[Bot] ") ? !1 : b(g, 3, 22)
  };
  window.zto860 = function(g) {
      return b(g, 1, 100)
  };
  window.zto862 = function(g) {
      g = g.trim();
      for (var h = g.length, l = [], k, m = 0; m < h; m++) {
          k = g.charCodeAt(m);
          var p = d(k);
          l.push(f[p] + k - e[p])
      }
      return l
  };
  window.zto863 = function(g) {
      for (var h = "", l = g.length, k, m = 0; m < l; m++)
          for (k = 1; k < f.length; k++)
              if (g[m] <
                  f[k]) {
                  k = e[k - 1] + g[m] - f[k - 1];
                  h += String.fromCharCode(k);
                  break
              } return h
  };
  window.zto865 = function(g) {
      g = zto862(g);
      for (var h = "", l = 0; l < g.length; l++) h += 10 > g[l] ? "00" : 100 > g[l] ? "0" : "", h += g[l].toString(10);
      return h
  };
  window.zto866 = function(g) {
      for (var h = Array(Math.floor(g.length / 3)), l = 0; l < g.length; l += 3) h[Math.floor(l / 3)] = parseInt(g.substring(l, l + 3));
      return zto863(h)
  };
  window.zto867 = function(g) {
      for (var h = [g.length], l = 0; l < g.length; l++) h[l] = g.charCodeAt(l) - 48;
      var k = "";
      for (l = 0; l < g.length; l++)
          if (l == g.length - 1 || 51 < 10 * h[l] +
              h[l + 1]) k += h[l].toString();
          else {
              var m = 10 * h[l] + h[l + 1];
              k += String.fromCharCode(m + (26 > m ? 65 : 71));
              l++
          } return k
  };
  window.zto868 = function(g) {
      for (var h = "", l, k = 0; k < g.length; k++) l = g.charCodeAt(k), 48 <= l && 58 > l ? h += String.fromCharCode(l) : 65 <= l && 75 > l ? h += "0" + (l - 65).toString() : 75 <= l && 91 > l ? h += (l - 65).toString() : 97 <= l && 123 > l && (h += (l - 71).toString());
      return h
  };
  window.zto869 = function(g) {
      for (var h = g.length, l, k = [], m = 0; m < h; m++) l = g.charCodeAt(m), 58 > l ? k.push(g[m]) : (l = 91 > l ? l - 65 : l - 71, k.push(String(zto1496(l, 10))), k.push(String(l -
          10 * zto1496(l, 10))));
      h = k.length - 2;
      l = 0;
      numbers = [];
      for (m = 0; m < h; m += 3) numbers[l++] = parseInt(k[m] + k[m + 1] + k[m + 2]);
      return numbers
  }
})();
var xzu131, xzu132, xzu133, xzu134, xzu135 = 512,
  xzu136 = 512,
  xzu137, xzu138, xzu139 = 0,
  xzu140, xzu141, xzu142, xzu143, xzu144 = 512,
  xzu145 = 2,
  xzu146, xzu147, xzu148, xzu149, xzu150;

function zto870(b, d, e, a, f, c) {
  xzu148 = !1;
  xzu147 = c;
  xzu138 = f;
  xzu132 = xzu131 = a.length;
  xzu149 = (xzu137 = 1 == xzu132) && zto1169(33).colorBg == zto1169(5).colorBg;
  xzu150 = xzu137 && zto1169(32).colorBg == zto1169(5).colorBg;
  xzu133 = xzu135 - xzu131;
  xzu134 = 0;
  xzu146 = e;
  c && (e = (new Date).getHours(), zto1448(21 > e && 5 < e ? 0 : 1, 0));
  zto1523(b);
  zto1419(a);
  xzu139 = 1;
  xzu141 = 2E9;
  xzu142 = zto1496(xzu141, 2);
  xzu143 = d;
  zto1472();
  zto1465();
  xzu618.setMaxBorders();
  zto1427();
  zto1370();
  zto1283(a);
  zto1534();
  zto1413();
  zto843(c);
  zto793();
  zto1432();
  xzu662.putImageData(xzu663,
      0, 0);
  zto1053();
  zto1001();
  zto977();
  zto1044();
  zto1074();
  zto890();
  zto966();
  zto899();
  zto949();
  zto874();
  zto1097();
  zto817();
  zto829();
  zto803();
  zto813();
  zto759();
  zto1350();
  zto1380();
  zto871();
  zto1593();
  zto1553();
  zto856();
  zto756(1)
}

function zto871() {
  zto836();
  xzu150 || 0 != xzu568[xzu146] || zto1098(!1, !0);
  zto1390()
}

function zto872() {
  zto841();
  zto968();
  zto1543(3200);
  xzu139 = 0;
  zto1566();
  zto1261();
  zto1216();
  zto756(0)
}

function zto873(b) {
  2 != xzu139 && (xzu139 = 2, xzu134 = xzu132, zto908(8), zto908(17), zto1605(), b || xzu359[0] == xzu146 ? (zto909(xzu146, 2), zto1098(!0, !1)) : (zto909(xzu359[0], 3), zto1098(!1, !1)), zto1056(!0), zto1080(!0), zto756(0))
}
(function() {
  function b(z, x, A) {
      z.save();
      z.imageSmoothingEnabled = !0;
      z.scale(A, A);
      z.drawImage(x, 0, 0);
      z.restore()
  }

  function d(z, x, A) {
      x.fillStyle = A;
      x.beginPath();
      x.arc(Math.floor(z / 2), Math.floor(z / 2), Math.floor(.47 * z), 0, 2 * Math.PI);
      x.fill()
  }

  function e(z, x) {
      p = z - Math.floor(r / 2);
      n = x - Math.floor(r / 2);
      return h || l || k || m
  }

  function a() {
      if (u == xzu146) return !1;
      for (var z, x = 3; 0 <= x; x--)
          for (var A = xzu577[xzu146].length - 1; 0 <= A; A--)
              if (z = xzu577[xzu146][A] + xzu15[x], zto1290(z) && zto1303(z) == u) return !0;
      return !1
  }
  var f, c, g, h, l, k,
      m, p, n, r, q, t, u, v, w;
  window.zto874 = function() {
      m = k = l = h = !1;
      q = t = p = n = 0;
      void 0 === f && zto875()
  };
  window.zto875 = function() {
      var z = Math.floor((xzu610 ? .11 : .065) * xzu600),
          x = zto1281("sword"),
          A = zto1281("ship");
      f = document.createElement("canvas");
      f.height = z;
      f.width = r = Math.floor(z * x.width / x.height);
      z = f.getContext("2d");
      c = document.createElement("canvas");
      c.width = r;
      c.height = f.height;
      var C = c.getContext("2d");
      g = document.createElement("canvas");
      g.width = r;
      g.height = f.height;
      var H = g.getContext("2d");
      d(r, z, "rgba(0,180,0,0.6)");
      d(r, C, "rgba(200,0,0,0.6)");
      d(r, H, "rgba(0,180,0,0.6)");
      b(z, x, r / x.width);
      b(C, x, r / x.width);
      b(H, A, r / A.width);
      w = Math.floor(r / 3)
  };
  window.zto878 = function(z, x) {
      if (!(h || l || k || m)) return q = z, t = x, !1;
      t = q = -1E3;
      if (0 == xzu568[xzu146] && !xzu150) return zto882(), !0;
      if (k) return zto882(), xzu619.isInside(z, x) ? xzu619.process(z, x, u) && (k = !0) : xzu619.setDefaultState(), !0;
      if (z < p - r - w || x < n || z > p + 2 * r + w || x > n + r) return zto882(), !0;
      if (z < p - w / 2) return m ? (zto882(), k = xzu619.show(z, x), !0) : !1;
      if (z < p + r + w / 2) {
          if (h)
              if (xzu150) zto882(), zto984(),
                  zto1079(), zto908(18), zto854(v);
              else return zto882(), zto913(), zto1601(zto987(), u == xzu135 ? xzu146 : u), !0;
          return !1
      }
      if (l) return zto882(), zto913(), zto1602(zto987(), zto1285(v), zto1286(v)), !0;
      zto882();
      return !0
  };
  window.zto879 = function(z, x) {
      if (h || l || k || m || 0 == xzu568[xzu146] && !xzu150) return !1;
      var A = (xzu610 ? .05 : .02) * xzu600;
      if (Math.abs(z - q) > A || Math.abs(x - t) > A) return !1;
      A = Math.floor((z + xzu313) / xzu312);
      var C = Math.floor((x + xzu314) / xzu312);
      if (1 > A && 1 > C && A >= xzu624 - 1 && C >= xzu625 - 1) return !1;
      var H = C * xzu624 * 4 + 4 * A;
      if (!zto1296(H)) return !1;
      if (2 == xzu139) return 1 <= xzu619.nSelected && (u = zto1303(H), u < xzu131) ? (m = !0, e(z, x)) : !1;
      v = zto1287(A, C);
      if (xzu150) return h = !0, e(z, x);
      l = zto1513(xzu146, v);
      if (zto1300(H)) {
          u = xzu135;
          a: {
              for (C = 3; 0 <= C; C--)
                  for (H = xzu577[xzu146].length - 1; 0 <= H; H--)
                      if (A = xzu577[xzu146][H] + xzu15[C], zto1300(A)) {
                          h = !0;
                          break a
                      } h = !1
          }
          return e(z, x)
      }
      u = zto1303(H);
      if (u == xzu146) return m = 1 <= xzu619.nSelected, h = !1, e(z, x);
      m = 1 <= xzu619.nSelected && u < xzu131;
      return ((h = a()) || l || m) && e(z, x)
  };
  window.zto881 = function(z, x) {
      if (k) {
          if (xzu619.isInside(z, x)) return !1;
          xzu619.setDefaultState();
          k = !1;
          zto856();
          return !0
      }
      return z < p - r - w || x < n || z > p + 2 * r + w || x > n + r || !(l || z <= p + r) || !(m || z >= p) ? h || l || m ? (m = l = h = !1, zto856(), !0) : !1 : !1
  };
  window.zto882 = function() {
      m = k = l = h = !1
  };
  window.zto883 = function() {
      l = h = !1
  };
  window.zto884 = function() {
      return h || l || k || m
  };
  window.zto888 = function() {
      if (h || l || k || m) k ? xzu619.draw() : (m && xzu619.drawContact(p - r - w, n, u == xzu146 ? 4 : 23), h ? xzu594.drawImage(f, p, n) : xzu594.drawImage(c, p, n), l && xzu594.drawImage(g, p + r + w, n))
  }
})();
(function() {
  function b() {
      var h = e.getContext("2d");
      h.clearRect(0, 0, d, d);
      h.fillStyle = xzu214;
      h.fillRect(0, 0, d, d);
      0 == g && (h.fillStyle = xzu230, h.fillRect(0, 0, d, d));
      h.fillStyle = xzu239;
      h.fillRect(0, 0, d, 1);
      h.fillRect(0, 0, 1, d);
      h.fillRect(0, d - 1, d, 1);
      h.fillRect(d - 1, 0, 1, d);
      h.save();
      var l = .9 * d / zto1280(0).width;
      h.imageSmoothingEnabled = !0;
      h.translate(Math.floor((d - l * zto1280(0).width) / 2), Math.floor((d - l * zto1280(0).height) / 2));
      h.scale(l, l);
      h.drawImage(zto1280(0), 0, 0);
      h.restore()
  }
  var d, e, a, f, c, g;
  window.zto890 = function() {
      g = -1;
      c = "Quit Game";
      a = !1;
      d = zto980();
      e = document.createElement("canvas");
      e.width = d;
      e.height = d;
      b();
      f = xzu253 + Math.floor((xzu610 ? .5 : .45) * d) + xzu255
  };
  window.zto892 = function() {
      (a = !a) ? setTimeout(function() {
          xzu618.renderAll()
      }, 0): (g = -1, b());
      zto756(a ? 0 : 1);
      zto856()
  };
  window.zto893 = function() {
      return a
  };
  window.zto894 = function(h, l) {
      return a ? (l >= zto979() && (h <= 4 * d + xzu262 ? (zto872(), zto757(0)) : h <= 9 * d + xzu262 && zto892()), !0) : h <= d + xzu262 && l >= zto979() ? (zto892(), !0) : !1
  };
  window.zto895 = function(h, l) {
      var k = g;
      a ? (g = l >= zto979() && h <=
          9 * d + xzu262 ? h <= 4 * d + xzu262 ? 0 : 1 : -1, k != g && zto856()) : (g = l >= zto979() && h <= d + xzu262 ? 0 : -1, k != g && (b(), zto856()));
      return -1 != g
  };
  window.zto896 = function() {
      if (a) {
          var h = Math.floor(5.5 * d);
          xzu594.save();
          xzu594.translate(xzu262, zto979());
          xzu594.fillStyle = xzu214;
          xzu594.fillRect(0, 0, h, d);
          0 == g && (xzu594.fillStyle = xzu230, xzu594.fillRect(0, 0, 4 * d, d));
          1 == g && (xzu594.fillStyle = xzu230, xzu594.fillRect(4 * d, 0, Math.floor(1.5 * d), d));
          xzu594.fillStyle = xzu239;
          xzu594.fillRect(0, 0, h, 1);
          xzu594.fillRect(0, 0, 1, d);
          xzu594.fillRect(4 * d, 0, 1, d);
          xzu594.fillRect(0, d - 1, h, 1);
          xzu594.fillRect(h - 1, 0, 1, d);
          xzu594.font = f;
          xzu594.textBaseline = xzu246;
          xzu594.textAlign = xzu250;
          xzu594.translate(2 * d, Math.floor(.54 * d));
          xzu594.fillText(c, 0, 0);
          h = Math.floor(.4 * d);
          zto898(Math.floor(2.75 * d - .5 * h), -Math.floor(.5 * h + 1), h);
          xzu594.restore()
      } else xzu594.drawImage(e, xzu262, zto979())
  };
  window.zto898 = function(h, l, k) {
      xzu594.translate(h, l);
      xzu594.lineWidth = 2;
      xzu594.strokeStyle = xzu239;
      xzu594.beginPath();
      xzu594.moveTo(0, 0);
      xzu594.lineTo(k, k);
      xzu594.moveTo(0, k);
      xzu594.lineTo(k,
          0);
      xzu594.stroke()
  }
})();
(function() {
  function b(t, u, v, w, z) {
      var x = zto969(u, f) + 3 * l + (45 == w ? g : 0),
          A = document.createElement("canvas");
      A.width = x;
      A.height = g;
      var C = A.getContext("2d", {
          alpha: !0
      });
      C.font = f;
      C.textBaseline = xzu246;
      C.textAlign = xzu251;
      C.clearRect(0, 0, x, g);
      C.fillStyle = 17 == w ? xzu227 : xzu215;
      C.fillRect(0, 0, x, g);
      C.fillStyle = v;
      C.fillText(u, Math.floor(1.5 * l), Math.floor(g / 2));
      a.unshift({
          time: t,
          id: w,
          player: z,
          canvas: A,
          w: x
      })
  }

  function d(t) {
      var u = a[0].canvas.getContext("2d", {
              alpha: !0
          }),
          v = g / xzu619.w;
      u.setTransform(v, 0, 0, v, Math.floor(a[0].w -
          g - 1.5 * l), 0);
      u.drawImage(xzu619.cvs[t], 0, 0)
  }

  function e(t) {
      return 13 >= t.length ? t : t.substring(0, 10) + "..."
  }
  var a, f, c, g, h, l, k, m, p, n, r, q;
  window.zto899 = function() {
      q = xzu610 ? xzu598 < xzu599 ? 9 : 7 : 12;
      n = [];
      r = [];
      a = [];
      g = Math.floor((xzu610 ? .045 : .0345) * xzu600);
      g = 11 > g ? 11 : g;
      c = Math.floor(2 * g / 3);
      f = xzu253 + c + xzu255;
      h = xzu610 && xzu598 < xzu599 ? xzu262 : 0;
      l = Math.floor(g / 5);
      zto901();
      p = document.createElement("canvas");
      m = zto969("Accept", f) + 5 * l;
      p.height = g;
      p.width = m;
      var t = p.getContext("2d", {
          alpha: !0
      });
      t.font = f;
      t.textBaseline = xzu246;
      t.textAlign =
          xzu250;
      t.clearRect(0, 0, m, g);
      t.fillStyle = xzu224;
      t.fillRect(0, 0, m, g);
      t.fillStyle = xzu239;
      t.fillText("Accept", Math.floor(m / 2), Math.floor(g / 2));
      xzu150 && zto909(0, 18);
      t = "Map: " + zto1471(xzu630).name;
      b(300, t, xzu239, 6, 0)
  };
  window.zto901 = function() {
      k = xzu610 && xzu598 < xzu599 ? xzu602 - zto979() : 0
  };
  window.zto902 = function() {
      k = 0
  };
  window.zto903 = function(t, u) {
      for (var v, w = a.length - 1; 0 <= w; w--)
          if (v = Math.floor(xzu602 - (w + 1) * g - k), u >= v && u < v + g && t >= xzu601 - a[w].w - m - h) {
              if (t >= xzu601 - a[w].w - h) return 1 == a[w].id || 3 == a[w].id || 4 == a[w].id ||
                  5 == a[w].id || 7 == a[w].id || 8 == a[w].id || 45 == a[w].id ? zto837(a[w].player) : 17 == a[w].id && zto873(!1), !0;
              break
          } return !1
  };
  window.zto904 = function() {
      return f
  };
  window.zto905 = function() {
      return c
  };
  window.zto908 = function(t) {
      for (var u = a.length - 1; 0 <= u; u--) a[u].id == t && (a[u].time = 1)
  };
  window.zto909 = function(t, u) {
      if (0 == u) zto970(t, 0), b(300, "You erased " + xzu567[t] + ".", "rgb(0,255,0)", u, t);
      else if (1 == u) zto970(t, 1), b(360, "You were erased by " + xzu567[t] + ".", xzu239, u, t), zto838(t, 1800);
      else if (2 == u) zto970(t, 2), b(0, "Congratulations! You won the game.",
          xzu239, u, t), zto838(t, 1800);
      else if (3 == u) zto970(t, 2), b(0, xzu567[t] + " won the game.", xzu239, u, t), zto838(t, 1800);
      else if (4 == u) {
          xzu132--;
          xzu134--;
          var v = r.length;
          if (32 <= xzu132 || 0 < v) {
              var w = zto1558();
              r.push(w);
              r.push(t);
              2 < v && r[0] < w - 140 && (b(180, xzu567[t] + " and " + Math.floor(v / 2) + " other players left the game.", xzu239, 4, t), r = [])
          } else b(180, xzu567[t] + " left the game.", xzu239, 4, t)
      } else if (5 == u) {
          if (5 <= a.length)
              for (w = v = 0; w < a.length; w++)
                  if (a[w].id == u && (v++, 5 <= v)) {
                      a.splice(w, 1);
                      break
                  } b(260, xzu567[t] + " attacks you!",
              "rgb(255,50,50)", u, t)
      } else 8 == u ? b(125, "If the leaderboard stays unchanged, the game will end!", "rgb(255,255,0)", u, 0) : 17 == u ? b(0, "Claim Victory!", xzu239, u, 0) : 18 == u ? b(255, "Choose your start position!", xzu239, u, 0) : 19 == u && b(100, "Emoji spam detected!", "rgb(255,255,0)", u, 0)
  };
  window.zto910 = function(t, u) {
      b(255, e(xzu567[t]) + ": ", xzu239, 45, t);
      d(u)
  };
  window.zto911 = function(t, u, v) {
      b(255, e(xzu567[t]) + " to " + e(xzu567[u]) + ": ", xzu239, 45, u);
      d(v)
  };
  window.zto913 = function() {
      100 <= xzu575[xzu146] || b(100, "Your balance is too low!",
          "rgb(255,255,0)", 9, 0)
  };
  window.zto915 = function(t, u) {
      var v = n.length;
      if (32 <= xzu132 - xzu134 || 0 < v) {
          var w = zto1558();
          n.push(w);
          n.push(t);
          2 < v && n[0] < w - 140 && (b(260, xzu567[t] + " and " + Math.floor(v / 2) + " other players were erased.", xzu239, 7, t), n = [])
      } else b(260, xzu567[t] + " was erased by " + xzu567[u] + ".", xzu239, 7, u)
  };
  window.zto917 = function(t) {
      var u = a.length - q;
      u = 1 >= u ? 1 : u * u;
      for (var v = a.length - 1; 0 <= v; v--) 0 < a[v].time && (!t || 1 == a[v].time || 8 != a[v].id) && (a[v].time -= 8 == a[v].id ? 1 : u, 0 >= a[v].time && a.splice(v, 1))
  };
  window.zto918 =
      function() {
          for (var t = a.length - 1; 0 <= t; t--) xzu594.drawImage(a[t].canvas, xzu601 - a[t].w - h, Math.floor(xzu602 - (t + 1) * g - k - h))
      }
})();
(function() {
  function b(h) {
      e[h] = !e[h];
      1 == h && (xzu610 = e[h], xzu619.handleGUIsize(), zto875(), zto1168(), zto1226(), zto1228(0).input.value = zto1264(3), zto1174(), 0 == zto1208() ? zto1230(0, !0) : 2 == zto1208() ? (zto1169(6).txt = "Map: " + zto1471(xzu630).name, zto1169(9).txt = zto1129()) : 7 == zto1208() && (zto1233(), zto1131(), zto1141(), zto1151()), zto1229(0));
      zto751(e);
      zto1216()
  }
  var d, e, a, f, c, g;
  window.zto919 = function() {
      d = ["Enable Sound", "Large User Interface"];
      e = Array(d.length);
      c = Math.floor((xzu610 ? .047 : .031) * xzu600);
      c = 18 > c ? 18 :
          c;
      g = xzu253 + Math.floor(.6 * c) + xzu255;
      f = d.length * c;
      a = 0;
      xzu594.font = g;
      for (var h = d.length - 1; 0 <= h; h--) {
          var l = Math.floor(xzu594.measureText(d[h]).width);
          a = l > a ? l : a
      }
      e[0] = zto745();
      e[1] = xzu610;
      a += Math.floor(1.7 * c);
      zto1169(29).w = zto1169(30).w = a;
      zto1169(29).h = zto1169(30).h = Math.floor(.68 * f)
  };
  window.zto920 = function() {
      return a
  };
  window.zto921 = function(h, l, k) {
      h -= xzu265;
      l -= Math.floor(xzu602 - f - xzu265);
      if (0 > h || 0 > l || h > a || l > f) return !1;
      zto1034();
      for (h = d.length - 1; 1 <= h; h--)
          if (l >= h * c) return k && b(h), !0;
      k && b(0);
      return !0
  };
  window.zto923 =
      function(h) {
          return e[h]
      };
  window.zto924 = function() {
      xzu594.save();
      xzu594.translate(xzu265, Math.floor(xzu602 - f - xzu265));
      xzu594.lineWidth = Math.floor(1 + .065 * c);
      xzu594.fillStyle = xzu215;
      xzu594.fillRect(0, 0, a, f);
      xzu594.strokeStyle = xzu239;
      xzu594.strokeRect(0, 0, a, f);
      xzu594.font = g;
      xzu594.textBaseline = xzu246;
      xzu594.textAlign = xzu251;
      for (var h = d.length - 1; 0 <= h; h--) {
          xzu594.fillStyle = xzu239;
          var l = .07 * c;
          xzu594.fillText(d[h], Math.floor(1.3 * c), Math.floor((h + .53) * c + l - (h - .5) * c * .11));
          e[h] && (xzu594.fillStyle = xzu220, xzu594.fillRect(Math.floor(.45 *
              c), Math.floor((h + .2) * c + l - (h - .5) * c * .11), Math.floor(.55 * c), Math.floor(.55 * c)));
          xzu594.strokeRect(Math.floor(.45 * c), Math.floor((h + .2) * c + l - (h - .5) * c * .11), Math.floor(.55 * c), Math.floor(.55 * c))
      }
      xzu594.restore()
  }
})();
(function() {
  function b() {
      8 == zto1208() ? clearInterval(l) : zto927() && zto1216()
  }

  function d(k) {
      return 10 > k ? "0" + k : String(k)
  }
  var e, a, f, c, g, h, l;
  window.zto925 = function() {
      zto927();
      void 0 === c && (c = Math.floor((xzu599 < xzu598 ? .5 : xzu610 ? .7 : .6) * xzu600), g = Math.floor(.065 * c), h = xzu253 + Math.floor(.97 * g) + xzu256, c = zto969(e, h), c += Math.floor(.4 * g));
      l = setInterval(b, 1E3)
  };
  window.zto927 = function() {
      if (7 == zto1208() && zto1236()) {
          var k = f;
          f = 100 - zto1234();
          e = "Next Contest: " + d(f);
          return k != f
      }
      k = new Date;
      var m = k.getUTCMinutes(),
          p = k.getUTCSeconds();
      a = 3600 - 60 * m - p;
      a %= 1800;
      e = "Next Contest: " + d(Math.floor(a / 60)) + ":" + d(a % 60);
      k = f;
      f = 60 * m + p;
      return k != f
  };
  window.zto929 = function() {
      xzu594.save();
      xzu594.lineWidth = 1 + Math.floor(g / 15);
      xzu594.translate(xzu601 - g, Math.floor(.5 * (xzu602 + c)));
      xzu594.rotate(-Math.PI / 2);
      xzu594.fillStyle = 7 == zto1208() && zto1236() ? xzu245 : xzu239;
      xzu594.fillRect(0, 0, c, g);
      xzu594.strokeStyle = xzu213;
      xzu594.strokeRect(0, 0, c, g + 10);
      xzu594.fillStyle = xzu213;
      xzu594.font = h;
      xzu594.textBaseline = xzu246;
      xzu594.textAlign = xzu250;
      xzu594.fillText(e, Math.floor(c /
          2), Math.floor(.6 * g));
      xzu594.restore()
  }
})();

function zto930() {
  this.rows = 10;
  this.nFlags = this.nEmojis = 40;
  this.nArrows = 8;
  this.nVisible = this.nEmojis + this.nFlags;
  this.nAll = this.nEmojis + this.nFlags + this.nArrows;
  this.w = 72;
  this.wCell = this.wAdapted = 0;
  this.cvs = Array(this.nAll);
  this.rectRows = 8;
  this.arrQueueI = 0;
  this.arrQueue = Array(12);
  this.gridX = Array(this.nEmojis + this.nFlags);
  this.gridY = Array(this.nEmojis + this.nFlags);
  this.y1 = this.x1 = 0;
  this.zoom = 1;
  this.gapPercent = .2;
  this.nSelected = 0;
  this.indexSelected = this.arrSelected = null;
  this.init = function() {
      for (var b =
              0; b < this.arrQueue.length; b++) this.arrQueue[b] = -1;
      this.arrSelected = Array(this.nAll);
      this.indexSelected = Array(this.nAll);
      var d = zto1281("emojis");
      this.handleGUIsize();
      for (b = this.nSelected = 0; b < this.nEmojis; b++) this.initHelper(b, b, d);
      d = zto1281("flags");
      for (b = 0; b < this.nFlags; b++) this.initHelper(b, this.nEmojis + b, d);
      this.initCreateArrows();
      this.cvs[26] = this.initCreateArrowsHelper(25, 2);
      this.decodeString()
  };
  this.initHelper = function(b, d, e) {
      this.arrSelected[d] = !1;
      this.indexSelected[d] = 0;
      var a = document.createElement("canvas");
      a.width = this.w;
      a.height = this.w;
      var f = a.getContext("2d", {
          alpha: !0
      });
      f.clearRect(0, 0, this.w, this.w);
      f.drawImage(e, this.w * b % (b == d ? this.rows * this.w : 4E3), b == d ? zto1496(b, this.rows) * this.w : 0, this.w, this.w, 0, 0, this.w, this.w);
      this.cvs[d] = a
  };
  this.initCreateArrows = function() {
      this.cvs[this.nAll - 5] = this.cvs[26];
      this.cvs[this.nAll - 4] = this.initCreateArrowsHelper(this.nAll - 5, 2);
      this.cvs[this.nAll - 1] = this.initCreateArrowsHelper(this.nAll - 5, 1);
      this.cvs[this.nAll - 8] = this.initCreateArrowsHelper(this.nAll - 4, 1);
      this.cvs[this.nAll -
          3] = this.cvs[39];
      this.cvs[this.nAll - 2] = this.initCreateArrowsHelper(this.nAll - 3, 1);
      this.cvs[this.nAll - 7] = this.initCreateArrowsHelper(this.nAll - 2, 1);
      this.cvs[this.nAll - 6] = this.initCreateArrowsHelper(this.nAll - 7, 1)
  };
  this.initCreateArrowsHelper = function(b, d) {
      var e = document.createElement("canvas");
      e.width = this.w;
      e.height = this.w;
      var a = e.getContext("2d", {
          alpha: !0
      });
      a.clearRect(0, 0, this.w, this.w);
      a.rotate(d * Math.PI / 2);
      a.drawImage(this.cvs[b], 1 == d ? 0 : -this.w, -this.w);
      return e
  };
  this.decodeString = function() {
      var b =
          zto748().split("");
      if (2 * b.length != this.nAll) this.arrSelected[4] = !0, this.indexSelected[0] = 4, this.nSelected = 1;
      else {
          for (var d = 0; d < this.nAll; d += 2) {
              var e = parseInt(b[Math.floor(d / 2)]);
              this.arrSelected[d] = 1 == e % 2;
              this.arrSelected[d + 1] = 1 < e
          }
          this.createIndexArray()
      }
  };
  this.createIndexArray = function() {
      for (var b = this.nSelected = 0; b < this.nAll; b++) this.arrSelected[b] && (this.indexSelected[this.nSelected++] = b)
  };
  this.setDefaultState = function() {
      8 == this.nSelected && this.indexSelected[0] == this.nVisible && this.createIndexArray()
  };
  this.createArrowArray = function() {
      this.nSelected = this.nArrows;
      for (var b = 0; b < this.nArrows; b++) this.indexSelected[b] = this.nVisible + b
  };
  this.handleGUIsize = function() {
      this.wAdapted = Math.floor((xzu610 ? .11 : .065) * xzu600);
      this.zoom = this.wAdapted / this.w;
      this.wCell = (1 + this.gapPercent) * this.wAdapted
  };
  this.show = function(b, d) {
      if (1 > this.nSelected) return !1;
      var e = Math.floor(xzu601 / this.wCell);
      e = 3 > e ? 3 : e > this.rectRows ? this.rectRows : e;
      e = this.nSelected > e ? e : this.nSelected;
      var a = 1 + zto1496(this.nSelected - 1, e),
          f = Math.floor(e *
              this.wCell),
          c = Math.floor(b - f / 2);
      c = c + f > xzu601 ? xzu601 - f : c;
      c = 0 > c ? 0 : c;
      var g = Math.floor(d - this.wCell / 2);
      a = Math.floor(a * this.wCell);
      g = g + a > xzu602 ? xzu602 - a : g;
      g = 0 > g ? 0 : g;
      this.x1 = c + f;
      this.y1 = g + a;
      for (f = 0; f < this.nSelected; f++) this.gridX[f] = Math.floor(c + f % e * this.wCell), this.gridY[f] = Math.floor(g + zto1496(f, e) * this.wCell);
      return !0
  };
  this.isInside = function(b, d) {
      return !(b < this.gridX[0] || d < this.gridY[0] || b >= this.x1 || d >= this.y1)
  };
  this.process = function(b, d, e) {
      for (var a = this.nSelected - 1; 0 <= a; a--)
          if (b >= this.gridX[a] && d >=
              this.gridY[a]) {
              if (39 == this.indexSelected[a]) return this.createArrowArray(), this.show(b, d), !0;
              xzu137 ? zto1385(xzu146, this.indexSelected[a], e) : this.checkEmojiSpam(e) ? zto909(0, 19) : zto1604(this.indexSelected[a], e);
              this.createIndexArray();
              break
          } return !1
  };
  this.checkEmojiSpam = function(b) {
      for (var d = (new Date).getTime(), e = d, a = 0, f = this.arrQueue.length - 1; 1 <= f; f -= 2) e = this.arrQueue[f] < e ? this.arrQueue[f] : e, a += this.arrQueue[f - 1] == b && this.arrQueue[f] > d - 15E3;
      if (e >= d - 12E3 || b != xzu146 && 2 <= a) return !0;
      this.arrQueue[this.arrQueueI] =
          b;
      this.arrQueue[this.arrQueueI + 1] = d;
      this.arrQueueI = (this.arrQueueI + 2) % this.arrQueue.length;
      return !1
  };
  this.isCrownable = function(b) {
      return 16 > b
  };
  this.isFlag = function(b) {
      return b >= this.nEmojis && b < this.nEmojis + this.nFlags
  };
  this.draw = function() {
      xzu594.imageSmoothingEnabled = !0;
      for (var b = this.gapPercent * this.wAdapted / 2, d = this.nSelected - 1; 0 <= d; d--) xzu594.setTransform(this.zoom, 0, 0, this.zoom, this.gridX[d] + b, this.gridY[d] + b), xzu594.drawImage(this.cvs[this.indexSelected[d]], 0, 0);
      xzu594.imageSmoothingEnabled = !1;
      xzu594.setTransform(1, 0, 0, 1, 0, 0)
  };
  this.drawContact = function(b, d, e) {
      xzu594.imageSmoothingEnabled = !0;
      xzu594.setTransform(this.zoom, 0, 0, this.zoom, b, d);
      xzu594.drawImage(this.cvs[e], 0, 0);
      xzu594.imageSmoothingEnabled = !1;
      xzu594.setTransform(1, 0, 0, 1, 0, 0)
  }
}
var xzu211 = "rgba(0,0,0,0.7)",
  xzu212 = "rgba(0,0,0,0.5)",
  xzu213 = "rgb(0,0,0)",
  xzu214 = "rgba(0,0,0,0.5)",
  xzu215 = "rgba(0,0,0,0.75)",
  xzu216 = "rgba(0,0,0,0.6)",
  xzu217 = "rgb(255,255,255)",
  xzu218 = "rgba(0,255,255,0.4)",
  xzu219 = "rgb(128,128,128)",
  xzu220 = "rgb(0,255,0)",
  xzu221 = "rgba(0,255,0,0.6)",
  xzu222 = "rgba(0,255,0,0.5)",
  xzu223 = "rgba(0,200,0,0.5)",
  xzu224 = "rgba(0,100,0,0.75)",
  xzu225 = "rgba(0,255,160,0.4)",
  xzu226 = "rgb(128,255,128)",
  xzu227 = "rgba(0,0,200,0.75)",
  xzu228 = "rgba(255,255,150,0.3)",
  xzu229 = "rgba(0,255,0,0.3)",
  xzu230 = "rgba(255,255,255,0.3)",
  xzu231 = "rgba(0,40,90,0.75)",
  xzu232 = "rgba(255,128,0,0.5)",
  xzu233 = "rgba(120,0,0,0.5)",
  xzu234 = "rgba(220,0,0,0.6)",
  xzu235 = "rgba(255,100,100,0.8)",
  xzu236 = "rgba(120,0,0,0.75)",
  xzu237 = "rgb(255,160,160)",
  xzu238 = "rgba(0,0,0,0)",
  xzu239 = "rgb(255,255,255)",
  xzu240 = "rgba(255,255,255,0.6)",
  xzu241 = "rgba(255,255,255,0.4)",
  xzu242 = "rgba(255,255,255,0.25)",
  xzu243 = "rgba(255,255,255,0.75)",
  xzu244 = "rgb(255,120,100)",
  xzu245 = "rgb(255,220,100)",
  xzu246 = "middle",
  xzu247 = "alphabetic",
  xzu248 = "top",
  xzu249 = "bottom",
  xzu250 = "center",
  xzu251 = "left",
  xzu252 = "right",
  xzu253 = "bold ",
  xzu254 = "normal ",
  xzu255 = "px Arial",
  xzu256 = "px Arial Black",
  xzu257 = "https://web.archive.org/web/20210624202502/https://www.youtube.com/watch?v=37rUqu7exjU",
  xzu258 = "https://web.archive.org/web/20210624202502/https://play.google.com/store/apps/details?id=territorial.io",
  xzu259 = "https://web.archive.org/web/20210624202502/https://discord.gg/pa5TH6hZrv",
  xzu260 = "https://web.archive.org/web/20210624202502/https://territorial.io/cookie_policy",
  xzu261 = "https://web.archive.org/web/20210624202502/https://www.instagram.com/davidtschacher/",
  xzu262, xzu263, xzu264, xzu265, xzu266, xzu267, xzu268, xzu269, xzu270, xzu271, xzu272;

function zto931() {
  xzu265 = Math.floor(.016 * xzu600);
  xzu265 = 2 > xzu265 ? 2 : xzu265;
  xzu266 = 3;
  xzu272 = new zto1260;
  xzu272.init()
}

function zto932() {
  xzu262 = Math.floor(.018 * xzu600);
  xzu262 = 2 > xzu262 ? 2 : xzu262;
  xzu263 = Math.floor(.005 * xzu600);
  xzu263 = 1 > xzu263 ? 1 : xzu263;
  xzu593.addEventListener("mousedown", zto933);
  xzu593.addEventListener("mousemove", zto936);
  xzu593.addEventListener("click", zto940);
  xzu593.addEventListener("mouseleave", zto939);
  xzu593.addEventListener("wheel", zto944);
  xzu593.addEventListener("touchstart", zto934);
  xzu593.addEventListener("touchmove", zto937);
  xzu593.addEventListener("touchend", zto941);
  xzu593.addEventListener("touchcancel",
      zto942);
  xzu269 = !1;
  xzu268 = xzu598 > xzu599 ? Math.floor(.15 * xzu598) : Math.floor(.2 * xzu598);
  xzu268 = Math.floor(xzu610 ? .35 * xzu268 : .2 * xzu268);
  xzu267 = xzu253 + Math.floor(.5 * xzu268) + xzu255;
  xzu264 = Math.floor(xzu268 / 2 + xzu268 / 18)
}

function zto933(b) {
  xzu269 || (zto1417(), zto935(Math.floor(b.clientX), Math.floor(b.clientY)))
}

function zto934(b) {
  zto1417();
  xzu269 = !0;
  0 < b.touches.length && (xzu270 = Math.floor(b.touches[0].clientX), xzu271 = Math.floor(b.touches[0].clientY), zto1576(b) || zto935(xzu270, xzu271))
}

function zto935(b, d) {
  if (0 == xzu139) zto1210(b, d);
  else if (zto884()) zto878(b, d) && zto856();
  else if (!zto1100(b, d) && !zto956(b, d))
      if (zto1014(b, d)) zto856();
      else {
          var e = zto894(b, d);
          zto989(b, d) ? (zto1003(), zto992(b, d) && zto856()) : zto1069(b, d) || zto903(b, d) || !e && zto878(b, d) && zto856()
      }
}

function zto936(b) {
  xzu269 || zto938(Math.floor(b.clientX), Math.floor(b.clientY))
}

function zto937(b) {
  0 < b.touches.length && (xzu270 = Math.floor(b.touches[0].clientX), xzu271 = Math.floor(b.touches[0].clientY), zto1577(b) || zto938(xzu270, xzu271))
}

function zto938(b, d) {
  0 == xzu139 ? zto1211(b, d) : zto884() ? zto881(b, d) : zto895(b, d) || (zto999() ? zto997(b, d) && zto856() : (zto1070(b, d), zto1002() && zto1015(b, d) && zto856()))
}

function zto939(b) {
  0 == xzu139 ? (zto1212(-1E3, -1E3), zto1034()) : (zto895(-1E3, -1E3), zto1070(-1E3, -1E3), zto998(), zto1002() && zto1003())
}

function zto940(b) {
  xzu269 || zto943(Math.floor(b.clientX), Math.floor(b.clientY))
}

function zto941(b) {
  zto943(xzu270, xzu271)
}

function zto942(b) {
  zto943(xzu270, xzu271)
}

function zto943(b, d) {
  0 == xzu139 ? zto1212(b, d) : (zto998(), zto1002() && zto1003(), zto879(b, d) && zto856())
}

function zto944(b) {
  zto1417();
  var d = Math.floor(b.clientX),
      e = Math.floor(b.clientY),
      a = b.deltaY;
  1 == b.deltaMode && (a *= 20);
  0 == xzu139 ? zto1213(d, e, a) : zto989(d, e) ? zto996(a) && zto856() : zto1016(d, e, a) && zto856()
}

function zto945() {
  zto1077();
  zto1022();
  zto978();
  zto1047();
  zto856()
}

function zto946(b, d, e) {
  b.fillStyle = xzu239;
  b.fillRect(0, 0, d, 1);
  b.fillRect(0, e - 1, d, 1);
  b.fillRect(0, 0, 1, e);
  b.fillRect(d - 1, 0, 1, e)
}

function zto947(b, d, e, a, f) {
  zto948(b, d, e, a, f, xzu217)
}

function zto948(b, d, e, a, f, c) {
  b.fillStyle = xzu211;
  b.fillRect(d, e, a, f);
  b.fillStyle = c;
  b.fillRect(d, e, a, xzu263);
  b.fillRect(d, e, xzu263, f);
  b.fillRect(d + a - xzu263, e, xzu263, f);
  b.fillRect(d, e + f - xzu263, a, xzu263)
}
(function() {
  function b(g) {
      return Math.floor(2 * xzu262 + (xzu610 && xzu598 < xzu599 ? zto1076() + xzu262 : 0) + zto1045() + 1.3 * g * f)
  }
  var d, e, a, f, c;
  window.zto949 = function() {
      d = [];
      a = zto904();
      f = zto905() + 5;
      f = Math.floor(1.25 * f);
      xzu610 && (f = Math.floor(1.25 * f));
      c = Math.floor(.15 * f);
      xzu627.font = a;
      e = Math.floor(xzu627.measureText("02 000 000 0000").width)
  };
  window.zto950 = function() {
      for (var g = d.length - 1; 0 <= g; g--)
          if (d[g].shouldRefresh) {
              d[g].shouldRefresh = !1;
              var h = g,
                  l = d[h].canvas.width;
              d[h].context.clearRect(0, 0, l, f);
              d[h].context.fillStyle =
                  0 != d[h].id ? "rgba(35,35,100,0.83)" : d[h].enemy == xzu135 ? "rgba(88,88,88,0.83)" : "rgba(44,33,33,0.83)";
              d[h].context.fillRect(0, 0, l, f);
              zto946(d[h].context, l, f);
              l > e + 2 * f && (d[h].context.fillRect(l - e - f, 0, 1, f), d[h].context.fillText(xzu567[d[h].enemy], Math.floor((l - e) / 2), Math.floor(.57 * f)));
              var k = 0 != d[h].id ? 0 : f;
              d[h].context.fillText(zto955(d[h].strength), Math.floor(l - e / 2 - k), Math.floor(.57 * f));
              var m = h,
                  p = l;
              d[m].context.fillStyle = xzu240;
              d[m].context.fillRect(Math.floor(p - e - k), f - c, Math.floor(e * d[m].strength / d[m].strengthMax),
                  c);
              0 == d[h].id && (m = h, p = l, d[m].context.strokeStyle = d[m].cancelled ? xzu219 : xzu237, d[m].context.fillStyle = xzu239, d[m].context.fillRect(p - f, 0, 1, f), p = Math.floor(f / 12), d[m].context.lineWidth = 3 > p ? 3 : p, d[m].context.lineCap = "round", p = f + 1, d[m].context.beginPath(), d[m].context.moveTo(Math.floor(p - .35 * f), Math.floor(.35 * f)), d[m].context.lineTo(Math.floor(p - f + .35 * f), Math.floor(f - .35 * f)), d[m].context.stroke(), d[m].context.beginPath(), d[m].context.moveTo(Math.floor(p - f + .35 * f), Math.floor(.35 * f)), d[m].context.lineTo(Math.floor(p -
                  .35 * f), Math.floor(f - .35 * f)), d[m].context.stroke(), d[h].context.strokeStyle = xzu226, d[h].context.fillRect(f, 0, 1, f), l -= f, d[h].context.beginPath(), d[h].context.moveTo(Math.floor(.3 * f + l), Math.floor(f / 2)), d[h].context.lineTo(Math.floor(f - .3 * f + l), Math.floor(f / 2)), d[h].context.stroke(), d[h].context.beginPath(), d[h].context.moveTo(Math.floor(f / 2 + l), Math.floor(.3 * f)), d[h].context.lineTo(Math.floor(f / 2 + l), Math.floor(f - .3 * f)), d[h].context.stroke())
          }
  };
  window.zto955 = function l(h) {
      if (1E3 > h) return 0 > h ? "-" + l(Math.abs(h)) :
          h.toString();
      var k = Math.floor(Math.log(h + .5) / Math.log(10)) + 1,
          m = Math.floor((k - 1) / 3);
      h = h.toString();
      for (var p = h.substring(k - 3, k), n = 1; n < m; n++) p = h.substring(k - 3 * (n + 1), k - 3 * n) + " " + p;
      return h.substring(0, k - 3 * m) + " " + p
  };
  window.zto956 = function(h, l) {
      if (2 == xzu139 || 0 == xzu568[xzu146] || xzu138) return !1;
      for (var k, m, p, n = xzu610 ? f : 0, r = d.length - 1; 0 <= r; r--)
          if (0 == d[r].id && (k = xzu610 && xzu598 < xzu599 ? xzu601 - d[r].canvas.width - xzu262 : zto1046(), m = b(r), p = d[r].canvas.width, l >= m - n && l <= m + f + n)) {
              if (h >= k - n && h <= k + f + n) return d[r].cancelled ||
                  (d[r].shouldRefresh = !0, d[r].cancelled = !0, zto1603(d[r].enemy == xzu135 ? xzu146 : d[r].enemy)), !0;
              if (h >= k + p - f - n && h <= k + p + n) return zto1601(zto987(), d[r].enemy == xzu135 ? xzu146 : d[r].enemy), !0
          } return !1
  };
  window.zto957 = function() {
      if (2 != xzu139 && 0 != xzu568[xzu146] && !xzu138) {
          var h = zto1357(xzu146);
          b: if (d.length != h) var l = !0;
              else {
                  for (l = h - 1; 0 <= l; l--)
                      if (d[l].id != zto1359(xzu146, l) || d[l].enemy != zto1358(xzu146, l)) {
                          l = !0;
                          break b
                      } l = !1
              }
          if (l) {
              l = [];
              var k = 0;
              b: for (; k < h; k++) {
                  for (var m = zto1359(xzu146, k), p = zto1358(xzu146, k), n = 0; n < d.length; n++)
                      if (d[n].id ==
                          m && d[n].enemy == p) {
                          l.push(d.splice(n, 1)[0]);
                          continue b
                      } n = zto1362(xzu146, k);
                  p = m = {
                      enemy: p,
                      strength: n,
                      strengthMax: n,
                      id: m,
                      shouldRefresh: !0,
                      cancelled: !1,
                      canvas: null,
                      context: null
                  };
                  p.canvas = document.createElement("canvas");
                  xzu627.font = a;
                  n = e;
                  p.enemy < xzu135 && 0 == p.id && (n += Math.floor(xzu627.measureText(xzu567[p.enemy] + "000").width));
                  0 == p.id && (n += 2 * f);
                  p.canvas.width = n;
                  p.canvas.height = f;
                  p.context = p.canvas.getContext("2d", {
                      alpha: !0
                  });
                  p.context.font = a;
                  p.context.textBaseline = xzu246;
                  p.context.textAlign = xzu250;
                  l.push(m)
              }
              d =
                  l
          }
          for (--h; 0 <= h; h--) l = zto1362(xzu146, h), d[h].strength != l && (d[h].strength = l, d[h].strengthMax = l > d[h].strengthMax ? l : d[h].strengthMax, d[h].shouldRefresh = !0)
      }
  };
  window.zto965 = function() {
      if (0 != xzu568[xzu146] && !xzu138)
          for (var h = d.length - 1; 0 <= h; h--) xzu594.drawImage(d[h].canvas, xzu610 && xzu598 < xzu599 ? xzu601 - d[h].canvas.width - xzu262 : zto1046(), b(h))
  }
})();
(function() {
  function b() {
      1 == xzu139 && zto971(zto1471(xzu630).name, 3)
  }

  function d() {
      0 != f && (1 == f ? (0 == g && (t.width = a[0].width + r, t.height = h + r, u = t.getContext("2d", {
          alpha: !0
      }), u.clearRect(0, 0, a[0].width + r, h + r), u.translate(Math.floor(r / 2), Math.floor(r / 2)), u.lineWidth = r, u.fillStyle = 3 == a[0].index ? xzu243 : xzu215, e(), u.fill(), u.strokeStyle = 3 == a[0].index ? xzu213 : xzu239, e(), u.stroke(), u.textAlign = xzu250, u.textBaseline = xzu246, u.fillStyle = 3 == a[0].index ? xzu213 : xzu239, u.font = l[0], u.fillText(p[a[0].index], Math.floor(a[0].width /
          2), Math.floor(.72 * m[0] * h)), u.font = l[1], u.fillText(a[0].str, Math.floor(a[0].width / 2), Math.floor((m[0] + .48 * m[1]) * h))), g += .04, 1 <= g ? (f = 2, g = 1, setTimeout(d, 1E3)) : setTimeout(d, 20), zto856()) : 1 < f && f < c ? 1 < a.length ? (f = c, setTimeout(d, 20)) : (f++, setTimeout(d, 1E3)) : f == c && (g -= .04, 0 >= g ? (g = 0, a.shift(), 0 < a.length ? (f = 1, setTimeout(d, 20)) : f = 0) : setTimeout(d, 20), zto856()))
  }

  function e() {
      u.beginPath();
      u.moveTo(q, 0);
      u.lineTo(a[0].width - q, 0);
      u.lineTo(a[0].width, q);
      u.lineTo(a[0].width, h - q);
      u.lineTo(a[0].width - q, h);
      u.lineTo(q,
          h);
      u.lineTo(0, h - q);
      u.lineTo(0, q);
      u.closePath()
  }
  var a, f, c, g, h, l, k, m, p, n, r, q, t, u;
  window.zto966 = function() {
      f = 0;
      c = 8;
      g = 0;
      a = [];
      h = Math.floor((xzu610 ? .11 : .08) * xzu600);
      l = Array(2);
      k = Array(2);
      m = Array(2);
      p = ["YOU ERASED", "YOU WERE ERASED BY", "THE GAME WAS WON BY", "MAP:"];
      m[0] = .3;
      m[1] = .7;
      k[0] = Math.floor(.85 * m[0] * h);
      k[1] = Math.floor(.85 * m[1] * h);
      l[0] = xzu253 + k[0] + xzu255;
      l[1] = xzu253 + k[1] + xzu255;
      n = Array(4);
      for (var v = n.length - 1; 0 <= v; v--) n[v] = zto969(p[v] + "000", l[0]);
      r = Math.floor(1 + .05 * h);
      q = Math.floor(.2 * h);
      t = document.createElement("canvas");
      setTimeout(b, 3E3)
  };
  window.zto968 = function() {
      f = 0
  };
  window.zto969 = function(v, w) {
      xzu594.font = w;
      return Math.floor(xzu594.measureText(v).width)
  };
  window.zto970 = function(v, w) {
      zto971(xzu567[v], w)
  };
  window.zto971 = function(v, w) {
      var z = zto969(v + "00", l[1]);
      z = z < n[w] ? n[w] : z;
      a.push({
          str: v,
          index: w,
          width: z
      });
      0 == f && (g = 0, f = 1, setTimeout(d, 20))
  };
  window.zto973 = function() {
      0 != f && 0 != g && (1 == f || f == c ? (xzu594.globalAlpha = g, xzu594.drawImage(t, xzu262, xzu355 + 2 * xzu262), xzu594.globalAlpha = 1) : xzu594.drawImage(t, xzu262, xzu355 + 2 * xzu262))
  }
})();
(function() {
  function b() {
      if (n < 1 / 3) {
          var v = Math.floor(540 * n);
          return "rgba(" + v + ",180,0,0.75)"
      }
      if (n < 2 / 3) return v = Math.floor(540 * (n - 1 / 3)), "rgba(180," + (180 - v) + ",0,0.75)";
      v = Math.floor(540 * (n - 2 / 3));
      return "rgba(180,0," + v + ",0.75)"
  }

  function d() {
      m.clearRect(0, 0, f, c);
      var v = Math.floor(n * (f - 2 * l));
      m.fillStyle = xzu215;
      m.fillRect(0, 0, l, c);
      m.fillRect(l + v, 0, f - l - v, c);
      m.fillStyle = b();
      m.fillRect(l, 0, v, c);
      m.fillStyle = xzu239;
      m.fillRect(0, 0, f, 1);
      m.fillRect(0, c - 1, f, 1);
      m.fillRect(0, 0, 1, c);
      m.fillRect(l, 0, 1, c);
      m.fillRect(l + v, 0,
          1, c);
      m.fillRect(f - l, 0, 1, c);
      m.fillRect(f - 1, 0, 1, c);
      v = 1 + Math.floor(.0625 * c);
      var w = 1 + Math.floor(.3 * c);
      m.fillRect(Math.floor(.25 * c) + w, Math.floor((c - v) / 2), c - 2 * w, v);
      m.fillRect(Math.floor(f - 1.25 * c) + w, Math.floor((c - v) / 2), c - 2 * w - w % 2, v);
      m.fillRect(Math.floor(f - 1.25 * c) + Math.floor((c - v) / 2), w, v, c - 2 * w - w % 2);
      r = Math.floor(xzu575[xzu146] * n);
      m.fillText(zto955(r), Math.floor(f / 2), Math.floor(.55 * c))
  }

  function e(v) {
      if (1 < v && 0 == n) return n = .5, d(), !0;
      if (1 < v && 1 == n || 0 == n) return !1;
      n *= v;
      n = 1 < n ? 1 : 0 > n ? 0 : n;
      d();
      return !0
  }

  function a(v) {
      var w =
          n;
      n = (v - g - l) / (f - 2 * l);
      n = 0 > n ? 0 : n;
      n = 1 < n ? 1 : n;
      return w != n ? (d(), !0) : !1
  }
  var f, c, g, h, l, k, m, p, n, r, q, t, u;
  window.zto977 = function() {
      p = !xzu150;
      xzu610 && xzu598 < xzu599 ? (c = Math.floor(.081 * xzu598), f = xzu598 - 4 * xzu262 - c) : (f = Math.floor((xzu610 ? .75 : .54) * xzu600), f += 12 - f % 12, c = Math.floor(f / 12));
      l = Math.floor(3 * c / 2);
      t = xzu253 + Math.floor(.5 * c) + xzu255;
      k = document.createElement("canvas");
      k.width = f;
      k.height = c;
      m = k.getContext("2d");
      m.font = t;
      m.textBaseline = xzu246;
      m.textAlign = xzu250;
      u = !1;
      n = 1;
      r = 0;
      q = !1;
      zto978();
      d()
  };
  window.zto978 = function() {
      g =
          xzu610 && xzu598 < xzu599 ? c + 3 * xzu262 : Math.floor((xzu601 - f) / 2);
      h = xzu602 - c - (xzu610 ? 2 : 1) * xzu262
  };
  window.zto979 = function() {
      return h
  };
  window.zto980 = function() {
      return c
  };
  window.zto981 = function() {
      u && (u = !1, d())
  };
  window.zto984 = function() {
      p = !0;
      zto901()
  };
  window.zto985 = function() {
      p = !1;
      zto902()
  };
  window.zto987 = function() {
      var v = Math.floor(1E3 * n);
      return 0 >= v ? 1 : 1E3 < v ? 1E3 : v
  };
  window.zto988 = function() {
      !p || zto893() && g < Math.floor(xzu262 + 5.5 * c) || xzu594.drawImage(k, g, h)
  };
  window.zto989 = function(v, w) {
      return p && (!zto893() || g >=
          Math.floor(xzu262 + 5.5 * c)) && v > g && v < g + f && w > h
  };
  window.zto992 = function(v, w) {
      if (!p || zto893() && g < Math.floor(xzu262 + 5.5 * c)) return !1;
      if (v > g && v < g + l && w > h) return e(.8);
      if (v > g + f - l && v < g + f && w > h) return e(1.25);
      q = !0;
      return a(v)
  };
  window.zto993 = function(v) {
      0 != xzu139 && e(v) && zto856()
  };
  window.zto996 = function(v) {
      if (0 == v || !p || zto893() && g < Math.floor(xzu262 + 5.5 * c)) return !1;
      0 < v ? (v = 400 / (400 + v), v = .9090909 > v ? .9090909 : v) : (v = (400 - v) / 400, v = 1.1 < v ? 1.1 : v);
      return e(v)
  };
  window.zto997 = function(v, w) {
      return q ? a(v, w) : !1
  };
  window.zto998 = function() {
      q = !1
  };
  window.zto999 = function() {
      return q
  };
  window.zto1000 = function() {
      p && Math.floor(xzu575[xzu146] * n) != r && (u = !0)
  }
})();
var xzu312, xzu313, xzu314;
(function() {
  var b, d, e, a, f, c, g, h;
  window.zto1001 = function() {
      e = Math.floor((xzu610 ? .11 : .07) * xzu600);
      b = Array(2);
      d = Array(2);
      for (var l = 1; 0 <= l; l--) b[l] = document.createElement("canvas"), b[l].width = e, b[l].height = e, d[l] = b[l].getContext("2d");
      h = !1;
      g = c = xzu314 = xzu313 = 0;
      xzu312 = 1;
      zto1022();
      l = 1 + Math.floor(e / 16);
      for (var k = 1 + Math.floor(e / 3), m = Math.floor(1 + e / 20), p = 1; 0 <= p; p--) d[p].clearRect(0, 0, e, e), d[p].fillStyle = xzu211, d[p].beginPath(), d[p].arc(e / 2, e / 2, e / 2 - m, 0, 2 * Math.PI), d[p].fill(), d[p].lineWidth = m, d[p].fillStyle =
          xzu217, d[p].strokeStyle = xzu217, d[p].beginPath(), d[p].arc(e / 2, e / 2, e / 2 - m, 0, 2 * Math.PI), d[p].stroke(), d[p].fillRect(k, Math.floor((e - l) / 2), e - 2 * k, l), 0 == p && d[p].fillRect(Math.floor((e - l) / 2), k, l, e - 2 * k)
  };
  window.zto1002 = function() {
      return h
  };
  window.zto1003 = function() {
      h = !1
  };
  window.zto1005 = function() {
      return xzu312
  };
  window.zto1006 = function() {
      return -xzu313 / xzu312
  };
  window.zto1007 = function() {
      return -xzu314 / xzu312
  };
  window.zto1008 = function(l) {
      return (l + xzu313) / xzu312
  };
  window.zto1009 = function(l) {
      return (l + xzu314) / xzu312
  };
  window.zto1010 = function(l) {
      return l * xzu312 - xzu313
  };
  window.zto1011 = function(l) {
      return l * xzu312 - xzu314
  };
  window.zto1012 = function(l, k) {
      xzu313 = xzu312 * l - k
  };
  window.zto1013 = function(l, k) {
      xzu314 = xzu312 * l - k
  };
  window.zto1014 = function(l, k) {
      if (Math.pow(l - (a + e / 2), 2) + Math.pow(k - (f + e / 2), 2) < Math.pow(e, 2) || Math.pow(l - (a + e / 2), 2) + Math.pow(k - (f + 3 * e / 2), 2) < Math.pow(e, 2)) return k < f + 1.25 * e ? zto1016(Math.floor(xzu601 / 2), Math.floor(xzu602 / 2), -400) : zto1016(Math.floor(xzu601 / 2), Math.floor(xzu602 / 2), 400);
      zto841();
      h = !0;
      c = l;
      g = k;
      return !1
  };
  window.zto1015 = function(l, k) {
      zto841();
      var m = xzu313,
          p = xzu314,
          n = c - l,
          r = g - k;
      xzu313 += n;
      xzu314 += r;
      zto1388(n, r);
      zto1018();
      c = l;
      g = k;
      return m != xzu313 || p != xzu314
  };
  window.zto1016 = function(l, k, m) {
      zto841();
      if (0 < m) m = 450 / (450 + m), m = .75 > m ? .75 : m;
      else if (0 > m) m = (450 - m) / 450, m = 1.5 < m ? 1.5 : m;
      else return !1;
      zto1017(l, k, m);
      return !0
  };
  window.zto1017 = function(l, k, m) {
      m = 1024 < m * xzu312 ? 1024 / xzu312 : m;
      m = .125 > m * xzu312 ? .125 / xzu312 : m;
      zto1389(m, l, k);
      xzu312 *= m;
      xzu313 = (xzu313 + l) * m - l;
      xzu314 = (xzu314 + k) * m - k;
      zto1018()
  };
  window.zto1018 = function() {
      var l =
          xzu598 / 16,
          k = 0,
          m = xzu599 / 16,
          p = 0;
      xzu313 < -xzu598 + l && (k = -xzu598 + l - xzu313);
      xzu313 > xzu312 * xzu624 - l && (k = xzu312 * xzu624 - l - xzu313);
      xzu314 < -xzu599 + m && (p = -xzu599 + m - xzu314);
      xzu314 > xzu312 * xzu625 - m && (p = xzu312 * xzu625 - m - xzu314);
      xzu313 += k;
      xzu314 += p;
      zto1387(k, p)
  };
  window.zto1022 = function() {
      a = xzu601 - e - xzu262;
      f = Math.floor(xzu602 / 2 - 1.25 * e)
  };
  window.zto1023 = function() {
      xzu594.drawImage(b[0], a, f);
      xzu594.drawImage(b[1], a, Math.floor(f + 3 * e / 2))
  }
})();
(function() {
  function b() {
      l = Math.floor(.07 * h);
      l = 1 > l ? 1 : l;
      var F = xzu598 / (c.length + k);
      l = F > l ? F : l;
      A = Math.floor((1 - k) * l);
      g = 0;
      d()
  }

  function d() {
      g = -20 > g ? -20 : g;
      g = g > (c.length - 15) * l ? (c.length - 15) * l : g;
      p = Math.floor(g / l);
      n = p + Math.floor(xzu601 / l);
      n = n > c.length - 1 ? c.length - 1 : n;
      p = n < p ? n : p;
      p = 0 > p ? 0 : p;
      var F = n;
      m = h / c[F];
      for (var K = n - 1; K >= p; K--) c[K] > c[F] && (F = K, m = h / Math.pow(c[K], x))
  }

  function e(F) {
      F = Math.floor((g + xzu601 - F - k * l) / l);
      F = -1 > F ? -1 : -1 == F ? 0 : F > c.length - 1 ? -1 : F;
      return F != r ? (r = F, -1 == C && 0 == r && z && (C = setInterval(f, 100)), !0) : !1
  }

  function a(F) {
      var K = Math.floor(m * Math.pow(c[F], x));
      xzu594.fillRect(g + xzu601 - (F + 1) * l, xzu602 - K, A, K)
  }

  function f() {
      8 == zto1208() && (r = -1);
      if (0 != r) H = (new Date).getTime(), clearInterval(C), C = -1;
      else {
          var F = c[1] / 864E3;
          if (-1 != H) {
              var K = (new Date).getTime();
              F += Math.floor((K - H) * c[1] / 864E5);
              H = -1
          }
          0 < F && (c[0] += F, zto1216())
      }
  }
  var c, g, h, l, k, m, p, n, r, q, t, u, v, w, z, x, A, C, H;
  window.zto1024 = function() {
      H = C = -1;
      z = !1;
      x = 1;
      r = -1;
      v = !1;
      w = 0;
      u = new Date;
      g = 0;
      h = Math.floor(.15 * xzu599);
      k = .3;
      q = Math.floor(.13 * h);
      q = 10 > q ? 10 : q;
      t = xzu253 + q + xzu255;
      c =
          Array(323);
      c[0] = 14653075;
      c[1] = 14677999;
      c[2] = 14958759;
      c[3] = 14210260;
      c[4] = 15488352;
      c[5] = 15623604;
      c[6] = 14473144;
      c[7] = 12823062;
      c[8] = 14869909;
      c[9] = 15142264;
      c[10] = 15567014;
      c[11] = 17896725;
      c[12] = 20081347;
      c[13] = 17765006;
      c[14] = 12763925;
      c[15] = 13523610;
      c[16] = 13979983;
      c[17] = 15080856;
      c[18] = 17116394;
      c[19] = 18483238;
      c[20] = 18084320;
      c[21] = 12100282;
      c[22] = 12221529;
      c[23] = 12441579;
      c[24] = 12058220;
      c[25] = 12441689;
      c[26] = 12821546;
      c[27] = 13401583;
      c[28] = 13009895;
      c[29] = 12271066;
      c[30] = 12210094;
      c[31] = 12355642;
      c[32] = 13737115;
      c[33] =
          14257807;
      c[34] = 14904897;
      c[35] = 14072161;
      c[36] = 15640387;
      c[37] = 15721803;
      c[38] = 16397970;
      c[39] = 19254839;
      c[40] = 21608906;
      c[41] = 20527471;
      c[42] = 16596206;
      c[43] = 15550563;
      c[44] = 14385591;
      c[45] = 15547262;
      c[46] = 13174302;
      c[47] = 12462319;
      c[48] = 13000669;
      c[49] = 12832541;
      c[50] = 12186376;
      c[51] = 13150940;
      c[52] = 14654379;
      c[53] = 14299386;
      c[54] = 14158528;
      c[55] = 15185971;
      c[56] = 12444117;
      c[57] = 14253445;
      c[58] = 15049053;
      c[59] = 14123310;
      c[60] = 16892853;
      c[61] = 15963931;
      c[62] = 11858727;
      c[63] = 10012703;
      c[64] = 9478191;
      c[65] = 9193460;
      c[66] = 8851082;
      c[67] = 9298848;
      c[68] = 9638204;
      c[69] = 9442496;
      c[70] = 8653593;
      c[71] = 9093527;
      c[72] = 8530977;
      c[73] = 8809114;
      c[74] = 9609612;
      c[75] = 9906912;
      c[76] = 9615756;
      c[77] = 9477879;
      c[78] = 9713075;
      c[79] = 9126583;
      c[80] = 8949378;
      c[81] = 9577595;
      c[82] = 10180186;
      c[83] = 9858705;
      c[84] = 9534213;
      c[85] = 9184660;
      c[86] = 8889455;
      c[87] = 8311313;
      c[88] = 9738346;
      c[89] = 9772164;
      c[90] = 9157791;
      c[91] = 8445413;
      c[92] = 8467279;
      c[93] = 8756002;
      c[94] = 9257951;
      c[95] = 10213536;
      c[96] = 10620530;
      c[97] = 10352296;
      c[98] = 9350531;
      c[99] = 9118709;
      c[100] = 9614237;
      c[101] = 9692491;
      c[102] =
          10801215;
      c[103] = 10984804;
      c[104] = 9542309;
      c[105] = 9609538;
      c[106] = 9391430;
      c[107] = 9515517;
      c[108] = 10064494;
      c[109] = 11061684;
      c[110] = 10408005;
      c[111] = 9794768;
      c[112] = 9297643;
      c[113] = 9275992;
      c[114] = 9394076;
      c[115] = 9716084;
      c[116] = 10045958;
      c[117] = 9715229;
      c[118] = 9091248;
      c[119] = 10010584;
      c[120] = 9845528;
      c[121] = 9532588;
      c[122] = 8986320;
      c[123] = 9037708;
      c[124] = 9820996;
      c[125] = 8953464;
      c[126] = 9074064;
      c[127] = 8644692;
      c[128] = 8025308;
      c[129] = 8832112;
      c[130] = 10785788;
      c[131] = 10539708;
      c[132] = 8908744;
      c[133] = 8331216;
      c[134] = 8858100;
      c[135] =
          8626840;
      c[136] = 7666284;
      c[137] = 8503372;
      c[138] = 8855308;
      c[139] = 6762540;
      c[140] = 6414076;
      c[141] = 6786692;
      c[142] = 6445532;
      c[143] = 6262192;
      c[144] = 5918176;
      c[145] = 5864376;
      c[146] = 5464928;
      c[147] = 5384996;
      c[148] = 5942760;
      c[149] = 5261972;
      c[150] = 5404612;
      c[151] = 6184860;
      c[152] = 6312948;
      c[153] = 5815660;
      c[154] = 5208552;
      c[155] = 4734392;
      c[156] = 4538784;
      c[157] = 4661404;
      c[158] = 5145524;
      c[159] = 4819368;
      c[160] = 4369224;
      c[161] = 4458584;
      c[162] = 4289956;
      c[163] = 3538288;
      c[164] = 3517544;
      c[165] = 3871876;
      c[166] = 3388048;
      c[167] = 3344796;
      c[168] = 3089228;
      c[169] = 2863676;
      c[170] = 2268964;
      c[171] = 2160500;
      c[172] = 2580004;
      c[173] = 2244356;
      c[174] = 2018408;
      c[175] = 1688912;
      c[176] = 1945368;
      c[177] = 1796332;
      c[178] = 1619260;
      c[179] = 2060292;
      c[180] = 1597656;
      c[181] = 1472788;
      c[182] = 1306208;
      c[183] = 1171408;
      c[184] = 1021096;
      c[185] = 1109312;
      c[186] = 1241276;
      c[187] = 1305092;
      c[188] = 1142748;
      c[189] = 1157700;
      c[190] = 991984;
      c[191] = 786992;
      c[192] = 786396;
      c[193] = 1043956;
      c[194] = 1029320;
      c[195] = 860500;
      c[196] = 834824;
      c[197] = 841912;
      c[198] = 736464;
      c[199] = 690328;
      c[200] = 878376;
      c[201] = 907232;
      c[202] = 794932;
      c[203] =
          646388;
      c[204] = 752600;
      c[205] = 672836;
      c[206] = 636212;
      c[207] = 794108;
      c[208] = 746856;
      c[209] = 642928;
      c[210] = 671328;
      c[211] = 493568;
      c[212] = 458168;
      c[213] = 428776;
      c[214] = 464736;
      c[215] = 371412;
      c[216] = 314568;
      c[217] = 225472;
      c[218] = 252072;
      c[219] = 227604;
      c[220] = 251048;
      c[221] = 269184;
      c[222] = 174136;
      c[223] = 825576;
      c[224] = 536060;
      c[225] = 165952;
      c[226] = 153252;
      c[227] = 180036;
      c[228] = 149616;
      c[229] = 138472;
      c[230] = 157832;
      c[231] = 188152;
      c[232] = 180108;
      c[233] = 134076;
      c[234] = 70960;
      c[235] = 89236;
      c[236] = 111428;
      c[237] = 60520;
      c[238] = 74620;
      c[239] = 73424;
      c[240] = 74720;
      c[241] = 71584;
      c[242] = 94432;
      c[243] = 62572;
      c[244] = 66420;
      c[245] = 32532;
      c[246] = 34452;
      c[247] = 41048;
      c[248] = 51372;
      c[249] = 61916;
      c[250] = 43236;
      c[251] = 55172;
      c[252] = 26776;
      c[253] = 47E3;
      c[254] = 57424;
      c[255] = 93100;
      c[256] = 64980;
      c[257] = 37288;
      c[258] = 44296;
      c[259] = 34588;
      c[260] = 40700;
      c[261] = 29200;
      c[262] = 24604;
      c[263] = 18184;
      c[264] = 42660;
      c[265] = 31404;
      c[266] = 38096;
      c[267] = 18556;
      c[268] = 17388;
      c[269] = 19568;
      c[270] = 17604;
      c[271] = 22328;
      c[272] = 40300;
      c[273] = 39392;
      c[274] = 33440;
      c[275] = 17960;
      c[276] = 7984;
      c[277] = 11612;
      c[278] = 67700;
      c[279] = 14108;
      c[280] = 22444;
      c[281] = 19756;
      c[282] = 9436;
      c[283] = 16864;
      c[284] = 14400;
      c[285] = 17216;
      c[286] = 14436;
      c[287] = 8612;
      c[288] = 15952;
      c[289] = 29764;
      c[290] = 18748;
      c[291] = 16348;
      c[292] = 23976;
      c[293] = 22080;
      c[294] = 20268;
      c[295] = 20984;
      c[296] = 9480;
      c[297] = 30736;
      c[298] = 15996;
      c[299] = 9484;
      c[300] = 9392;
      c[301] = 9716;
      c[302] = 21540;
      c[303] = 57428;
      c[304] = 24788;
      c[305] = 18728;
      c[306] = 8528;
      c[307] = 5972;
      c[308] = 20560;
      c[309] = 18268;
      c[310] = 28088;
      c[311] = 15364;
      c[312] = 15300;
      c[313] = 29348;
      c[314] = 30992;
      c[315] = 20564;
      c[316] = 34420;
      c[317] = 16716;
      c[318] =
          14424;
      c[319] = 12360;
      c[320] = 15124;
      c[321] = 51172;
      c[322] = 13176;
      b();
      zto1539()
  };
  window.zto1025 = function() {
      z || zto1596()
  };
  window.zto1027 = function(F) {
      z = !0;
      for (var K = 0; K < F.length; K++) c.unshift(F[K]);
      b();
      zto1216()
  };
  window.zto1029 = function() {
      d()
  };
  window.zto1033 = function(F, K) {
      K > xzu602 - .6 * h ? v ? F != w && (g += F - w, w = F, d(), e(F), v = -1 != r, zto1216()) : e(F) && zto1216() : zto1034()
  };
  window.zto1034 = function() {
      -1 != r && (v = !1, r = -1, zto1216())
  };
  window.zto1035 = function() {
      return v
  };
  window.zto1036 = function(F, K) {
      -1 != r && (g += Math.floor(K), d(),
          e(F), zto1216())
  };
  window.zto1037 = function(F, K) {
      zto1033(F, K); - 1 != r && (w = F, v = !0)
  };
  window.zto1038 = function() {
      -1 != r && (v = !1)
  };
  window.zto1039 = function() {
      xzu594.fillStyle = xzu241;
      for (var F = n; F >= p; F--) a(F);
      z && 0 == p && (xzu594.fillStyle = xzu234, a(0)); - 1 != r && (xzu594.fillStyle = xzu240, a(r));
      if (-1 != r) {
          xzu594.font = t;
          xzu594.textBaseline = xzu249;
          F = new Date;
          F.setTime(u.getTime() - 864E5 * r);
          var K = (new Intl.DateTimeFormat("en-US", {
              month: "long"
          })).format(F);
          F = (new Intl.DateTimeFormat("en-US", {
                  weekday: "long"
              })).format(F) + ", " +
              F.getUTCDate() + " " + K + " " + F.getFullYear();
          K = 1 == c[r] ? " second played" : " seconds played";
          K = zto955(c[r]) + K;
          var Q = Math.floor(xzu594.measureText(F).width),
              U = Math.floor(xzu594.measureText(K).width),
              O = Math.floor(.5 * (Q + q)),
              S = g + xzu601 - (r + 1) * l;
          S = S < O ? O : S > xzu601 - O ? xzu601 - O : S;
          var R = xzu602 - Math.floor(m * Math.pow(c[r], x));
          xzu594.fillStyle = xzu215;
          xzu594.fillRect(xzu601 - U - q, R - Math.floor(1.1 * q), U + q, Math.floor(1.1 * q));
          xzu594.fillRect(S - O, xzu602 - Math.floor(1.1 * q), Q + q, Math.floor(1.1 * q));
          xzu594.fillStyle = xzu239;
          xzu594.textAlign =
              xzu252;
          xzu594.fillText(K, Math.floor(xzu601 - .5 * q), R);
          xzu594.textAlign = xzu250;
          xzu594.fillText(F, S, xzu602);
          xzu594.strokeStyle = xzu242;
          xzu594.lineWidth = 1;
          xzu594.beginPath();
          xzu594.moveTo(0, R);
          xzu594.lineTo(xzu601, R);
          xzu594.closePath();
          xzu594.stroke()
      }
  }
})();

function zto1043() {
  if (zto1282()) {
      var b = zto1281("theme"),
          d = .14 * xzu600 / b.width;
      d *= xzu610 ? 1.3 : 1;
      var e = xzu262;
      xzu594.save();
      xzu594.imageSmoothingEnabled = !0;
      xzu594.translate(e, Math.floor((xzu602 - d * b.height) / 2));
      xzu594.scale(d, d);
      xzu594.drawImage(b, 0, 0);
      xzu594.restore()
  }
}
(function() {
  function b() {
      h.clearRect(0, 0, e, a);
      h.fillStyle = m ? p : n;
      h.fillRect(0, 0, e, a);
      h.fillStyle = xzu239;
      h.fillText(zto955(k), Math.floor(e / 2), xzu264);
      h.fillStyle = xzu240;
      var r = Math.floor((zto1371() - 1) * a / 9),
          q = Math.floor(1 + .13 * a);
      h.fillRect(0, r, q, a - r);
      h.fillRect(e - q, r, q, a - r);
      h.fillStyle = xzu239;
      h.fillRect(0, 0, e, 1);
      h.fillRect(0, 0, 1, a);
      h.fillRect(0, a - 1, e, 1);
      h.fillRect(e - 1, 0, 1, a)
  }
  var d, e, a, f, c, g, h, l, k, m, p, n;
  window.zto1044 = function() {
      p = "rgba(0,100,0,0.8)";
      n = "rgba(150,0,0,0.8)";
      m = !0;
      e = Math.floor((xzu610 ? .45 :
          .333) * xzu600);
      a = Math.floor(.5 + .13 * e);
      xzu267 = d = xzu253 + Math.floor(.9 * a) + xzu255;
      xzu264 = Math.floor(.58 * a);
      xzu627.font = d;
      e = Math.floor(xzu627.measureText("02 000 000 000").width);
      c = xzu262;
      g = document.createElement("canvas");
      g.width = e;
      g.height = a;
      h = g.getContext("2d", {
          alpha: !0
      });
      h.font = d;
      h.textBaseline = xzu246;
      h.textAlign = xzu250;
      l = !1;
      k = xzu575[xzu146];
      b()
  };
  window.zto1045 = function() {
      return a
  };
  window.zto1046 = function() {
      return f
  };
  window.zto1047 = function() {
      f = xzu610 && xzu598 < xzu599 ? xzu601 - e - xzu262 : Math.floor(zto1055() +
          (xzu601 - zto1055() - zto1075() - e) / 2 - .5 * xzu262)
  };
  window.zto1048 = function() {
      l && (l = !1, b())
  };
  window.zto1051 = function() {
      xzu138 || k == xzu575[xzu146] || (m = xzu575[xzu146] > k && 10 <= xzu575[xzu146], k = xzu575[xzu146], l = !0)
  };
  window.zto1052 = function() {
      0 == xzu568[xzu146] || xzu138 || xzu594.drawImage(g, f, c)
  }
})();
var xzu354, xzu355, xzu356, xzu357, xzu358, xzu359, xzu360;
(function() {
  function b() {
      l.clearRect(0, 0, xzu354, xzu355);
      l.fillStyle = xzu231;
      l.fillRect(0, 0, p, v);
      l.fillStyle = xzu215;
      l.fillRect(0, v, p, xzu355 - v);
      d(xzu360[xzu146], xzu229);
      0 != xzu360[xzu146] && d(0, xzu228); - 1 != R && d(R, xzu230);
      l.fillStyle = xzu217;
      l.fillRect(0, v, p, 1);
      l.fillRect(0, 0, p, xzu263);
      l.fillRect(0, 0, xzu263, xzu355);
      l.fillRect(p - xzu263, 0, xzu263, xzu355);
      l.fillRect(0, xzu355 - xzu263, p, xzu263);
      l.font = xzu356;
      l.textBaseline = xzu246;
      l.textAlign = xzu250;
      l.fillText(K, Math.floor(p / 2), Math.floor(t + xzu358 / 2));
      var E = xzu360[xzu146] <
          g - 1 ? 1 : 2;
      l.font = xzu357;
      l.textAlign = xzu251;
      for (var I = g - E; 0 <= I; I--) e(I, I, xzu359[I]);
      l.textAlign = xzu252;
      for (I = g - E; 0 <= I; I--) a(I, xzu359[I]);
      2 == E && (l.textAlign = xzu251, e(g - 1, xzu360[xzu146], xzu146), l.textAlign = xzu252, a(g - 1, xzu146));
      l.save();
      E = .7 * w / zto1280(5).height;
      l.translate(Math.floor(z + .58 * w + .5 * E * zto1280(5).width), Math.floor(t + xzu358 + .4 * w));
      l.imageSmoothingEnabled = !0;
      l.scale(E, E);
      l.drawImage(zto1280(5), -Math.floor(zto1280(5).width / 2), -Math.floor(zto1280(5).height / 2));
      l.restore()
  }

  function d(E, I) {
      l.fillStyle =
          I;
      E = 9 < E ? 9 : E;
      var P = Math.floor((9 == E ? 2 : 0 == E ? 1.15 : 1) * w);
      P = 8 == E ? Math.floor(v + 9.15 * w) - Math.floor(v + 8.15 * w) : P;
      l.fillRect(0, Math.floor(v + (E + (0 == E ? 0 : .15)) * w), p, P)
  }

  function e(E, I, P) {
      l.fillText(Q[I], z, Math.floor(t + xzu358 + (E + .5) * w));
      l.fillText(H[P] == P ? xzu567[P] : C[H[P] % xzu135], x, Math.floor(t + xzu358 + (E + .5) * w))
  }

  function a(E, I) {
      l.fillText(xzu573[I], A, Math.floor(t + xzu358 + (E + .5) * w))
  }

  function f() {
      for (var E = 0, I = g - 2; 0 <= I; I--) E = F[xzu359[I]] > E ? F[xzu359[I]] : E;
      E = xzu360[xzu146] >= g - 1 ? F[xzu146] > E ? F[xzu146] : E : F[xzu359[g - 1]] >
          E ? F[xzu359[g - 1]] : E;
      m = E + x + n + z;
      m = m < k ? k : m;
      m = m > xzu354 ? xzu354 : m;
      m >= p ? (p = m, r = 0) : 80 < r++ && (r = 0, p = m);
      A = p - z
  }

  function c(E) {
      for (var I, P = g - 1; 0 <= P; P--)
          if (I = xzu262 + t + xzu358 + P * w, E >= I && (E < I + w || P == g - 1)) return P;
      return -1
  }
  var g, h, l, k, m, p, n, r, q, t, u, v, w, z, x, A, C, H, F, K, Q, U, O, S, R;
  window.zto1053 = function() {
      K = "LEADERBOARD";
      R = -1;
      g = 10;
      S = !1;
      U = new Uint16Array(g + 1);
      O = new Uint32Array(g + 1);
      xzu355 = xzu354 = Math.floor((xzu610 ? .44 : .39) * xzu600);
      h = document.createElement("canvas");
      h.width = xzu354;
      h.height = xzu355;
      l = h.getContext("2d", {
          alpha: !0
      });
      q = xzu135;
      xzu359 = new Uint16Array(q);
      xzu360 = new Uint16Array(q);
      for (var E = q - 1; 0 <= E; E--) xzu359[E] = E, xzu360[E] = E;
      t = .025 * xzu355;
      xzu358 = .16 * xzu355;
      u = 0 * xzu355;
      v = Math.floor(.45 * t + xzu358);
      w = (xzu355 - xzu358 - 2 * t - u) / g;
      xzu356 = xzu253 + Math.floor(.5 * xzu358) + xzu255;
      xzu357 = Math.floor(.6 * w) + xzu255;
      l.font = xzu357;
      z = Math.floor(l.measureText("555").width);
      x = Math.floor(l.measureText("555600.00").width);
      C = [];
      H = new Uint16Array(xzu135);
      F = new Uint16Array(xzu135);
      n = Math.floor(l.measureText("00920600").width);
      var I = Math.floor(xzu354 -
              x - z - n),
          P = 0;
      Q = Array(xzu135);
      for (E = xzu135 - 1; 0 <= E; E--)
          if (Q[E] = E + 1 + ".", H[E] = E, F[E] = Math.floor(l.measureText(xzu567[E]).width), F[E] > I) {
              for (var B = xzu567[E], y = xzu567[E].length - 1; 1 <= y && !(B = B.substring(0, y), F[E] = Math.floor(l.measureText(B + "...").width), F[E] <= I); y--);
              B += "...";
              C.push(B);
              H[E] = xzu135 + P++
          } l.font = xzu356;
      k = Math.floor(l.measureText(K).width) + 2 * z;
      m = xzu354;
      p = k;
      r = 0;
      A = p - z;
      f();
      b()
  };
  window.zto1054 = function() {
      return 0 < xzu568[xzu359[0]] && 1 == xzu587
  };
  window.zto1055 = function() {
      return Math.floor(.9 * xzu354)
  };
  window.zto1056 = function(E) {
      S && (E || 8 > xzu617 && 0 == zto1558() % 12 || 14 >= xzu617 && 0 == zto1558() % 6 || 14 < xzu617) && (S = !1, b())
  };
  window.zto1062 = function() {
      for (var E = q - 1; 0 <= E; E--)
          if (0 == xzu568[xzu359[E]]) {
              var I = E,
                  P = xzu359[I];
              for (q--; I < q; I++) xzu359[I] = xzu359[I + 1], xzu360[xzu359[I]] = I;
              xzu359[q] = P;
              xzu360[xzu359[q]] = q
          } P = q - 1;
      for (I = 0; I < P; I++) xzu573[xzu359[I]] < xzu573[xzu359[I + 1]] && (E = xzu359[I], xzu359[I] = xzu359[I + 1], xzu359[I + 1] = E, xzu360[xzu359[I]] = I, xzu360[xzu359[I + 1]] = I + 1);
      f();
      a: {
          E = S;S = !0;
          for (I = P = xzu360[xzu146] >= g - 1 ? g - 2 : g -
              1; 0 <= I; I--)
              if (U[I] != xzu359[I] || O[I] != xzu573[xzu359[I]]) break a;
          if (P != g - 2 || U[g] == xzu360[xzu146] && O[g] == xzu573[xzu146]) S = E
      }
      for (E = g - 1; 0 <= E; E--) U[E] = xzu359[E], O[E] = xzu573[xzu359[E]];
      U[g] = xzu360[xzu146];
      O[g] = xzu573[xzu146]
  };
  window.zto1069 = function(E, I) {
      if (E >= xzu262 && I >= xzu262 + 0 && E <= xzu262 + p && I <= xzu262 + xzu355) {
          if (I <= xzu262 + v) return !0;
          var P = c(I);
          if (-1 != P) {
              var B = xzu359[P];
              P == g - 1 && xzu360[xzu146] >= g - 1 && (B = xzu146);
              0 != xzu568[B] && zto837(B);
              return !0
          }
      }
      return !1
  };
  window.zto1070 = function(E, I) {
      if (E >= xzu262 && I >= xzu262 +
          v && E <= xzu262 + p && I <= xzu262 + xzu355) {
          var P = c(I);
          R != P && (R = P, b(), zto856());
          return !0
      } - 1 != R && (R = -1, b(), zto856());
      return !1
  };
  window.zto1073 = function() {
      xzu594.drawImage(h, xzu262, xzu262)
  }
})();
(function() {
  function b() {
      f.clearRect(0, 0, h, l);
      0 >= xzu589 ? (f.fillStyle = xzu215, f.fillRect(0, 0, h, l), f.fillStyle = xzu221, f.fillRect(0, l - k - 1, Math.floor(Math.sqrt(v[4] / v[3]) * h), k)) : (f.fillStyle = xzu236, f.fillRect(0, 0, h, l), f.fillStyle = xzu235, f.fillRect(0, l - k - 1, Math.floor(zto1496(xzu589 * h, 1E3)), k));
      f.fillStyle = xzu239;
      f.fillRect(0, 0, h, 1);
      f.fillRect(0, 0, 1, l);
      f.fillRect(h - 1, 0, 1, l);
      f.fillRect(0, l - 1, h, 1);
      f.fillRect(0, l - k - 1, h, 1);
      for (var A = 0, C = 0; C < u.length; C++)
          if (w[C]) {
              f.textAlign = xzu251;
              var H = Math.floor((m - k + 2 * n) *
                  (C - A + 1) / (u.length + 1) - .7 * n);
              f.fillText(u[C], p, H);
              f.textAlign = xzu252;
              5 == C && 0 != xzu568[xzu146] && xzu575[xzu146] >= zto1376(xzu146) ? (f.fillStyle = xzu244, f.fillText(d(C), h - p, H), f.fillStyle = xzu239) : f.fillText(d(C), h - p, H)
          } else A++
  }

  function d(A) {
      if (3 > A) return v[A].toString();
      if (3 == A || 4 == A || 5 == A) return (v[A] / 100).toFixed(2) + "%";
      if (7 > A) return zto955(v[A]);
      var C = v[7];
      A = Math.floor(C / 1E3 / 60);
      C = Math.floor((C - 6E4 * A) / 1E3);
      return 10 > C ? A + ":0" + C : A + ":" + C
  }

  function e() {
      w[2] && xzu134 != v[2] && (v[2] = xzu134, t++)
  }
  var a, f, c, g, h, l, k,
      m, p, n, r, q, t, u, v, w, z, x;
  window.zto1074 = function() {
      x = !1;
      h = Math.floor((xzu610 ? .25 : .175) * xzu600);
      l = Math.floor(1.18 * h);
      k = Math.floor(.04 * h);
      p = Math.floor(.05 * h);
      n = .04 * h;
      u = Array(8);
      u[0] = "Humans";
      u[1] = xzu137 ? "Players" : "Bots";
      u[2] = "Spectators";
      u[3] = "Threshold";
      u[4] = "Occupation";
      u[5] = "Interest";
      u[6] = "Income";
      u[7] = "Time";
      v = Array(u.length);
      v[0] = xzu137 ? 0 : xzu131;
      v[1] = xzu133;
      v[2] = xzu134;
      v[3] = 1E4;
      v[4] = zto1496(1E4 * xzu573[0], xzu140);
      v[5] = 600;
      v[6] = xzu573[xzu146];
      v[7] = 0;
      z = d(6);
      w = Array(u.length);
      for (var A = u.length - 1; 0 <=
          A; A--) w[A] = !0;
      A = 0;
      xzu137 && (w[0] = !1, w[2] = !1, w[3] = !xzu149, A = 2 + (xzu149 ? 1 : 0));
      m = l;
      l -= Math.floor(A * (l - 2 * k) / u.length);
      q = Math.floor(.55 * (m - k) / u.length);
      r = xzu253 + q + xzu255;
      a = document.createElement("canvas");
      a.width = h;
      a.height = l;
      f = a.getContext("2d", {
          alpha: !0
      });
      f.font = r;
      f.textBaseline = xzu246;
      f.lineWidth = 1;
      t = 0;
      zto1077();
      xzu150 ? zto1078() : zto1079();
      b();
      zto1047()
  };
  window.zto1075 = function() {
      return h
  };
  window.zto1076 = function() {
      return l
  };
  window.zto1077 = function() {
      c = xzu601 - h - xzu262
  };
  window.zto1078 = function() {
      g = xzu262
  };
  window.zto1079 = function() {
      g = xzu262 + (xzu610 && xzu598 < xzu599 ? zto1045() + xzu262 : 0)
  };
  window.zto1080 = function(A) {
      0 < t && (A || 12 > xzu617 && 100 <= t || 12 <= xzu617) && (t = 0, b())
  };
  window.zto1085 = function() {
      w[0] && xzu132 - xzu134 != v[0] && (v[0] = xzu132 - xzu134, t++);
      xzu587 - v[0] != v[1] && (v[1] = xzu587 - v[0], t++);
      e();
      if (w[3]) {
          var A = v[3];
          v[3] = zto1496(xzu588, 10);
          A != v[3] && t++
      }
      A = zto1496(1E4 * xzu573[xzu359[0]], xzu140);
      A >= v[3] && (zto873(!1), v[4] = -1);
      v[4] != A && (t++, v[4] = A);
      !x && zto1054() && (xzu149 ? (x = !0, zto909(0, 17)) : zto873(!1));
      A = zto1375(xzu146);
      A != v[5] && (v[5] = A, t++);
      xzu573[xzu146] != v[6] && (v[6] = xzu573[xzu146], t++);
      v[7] += 2 * zto1559();
      A = d(7);
      z != A && (z = A, t += 100);
      0 != xzu589 && (t += 100, 1E3 <= xzu589 && zto873(!1))
  };
  window.zto1086 = function() {
      e()
  };
  window.zto1096 = function() {
      xzu594.drawImage(a, c, g)
  }
})();
(function() {
  function b() {
      p += .05;
      1 <= p ? p = 1 : setTimeout(b, 33)
  }
  var d, e, a, f, c, g, h, l, k, m, p, n, r;
  window.zto1097 = function() {
      a = d = !1;
      c = Math.floor((xzu610 ? .21 : .18) * xzu600);
      g = .2;
      h = .6;
      l = .07;
      k = .12;
      m = .09;
      p = 0
  };
  window.zto1098 = function(q, t) {
      if (!a) {
          e = q ? 1 : 2;
          var u = (c - 2 * g * c) / zto1280(e).height;
          f = Math.floor(2 * h * c + zto1280(e).width * u);
          var v = Math.floor(1 + c / 20);
          n = document.createElement("canvas");
          n.width = f + 2 * v;
          n.height = c + 2 * v;
          r = n.getContext("2d", {
              alpha: !0
          });
          r.save();
          r.clearRect(0, 0, n.width, n.height);
          r.translate(Math.floor(v / 2),
              Math.floor(v / 2));
          r.fillStyle = xzu215;
          r.fillRect(0, 0, f, c);
          r.lineJoin = "bevel";
          r.lineWidth = v;
          r.strokeStyle = xzu239;
          r.shadowColor = xzu239;
          r.shadowBlur = v;
          r.shadowOffsetX = Math.floor(v / 2);
          r.shadowOffsetY = Math.floor(v / 2);
          r.strokeRect(0, 0, f, c);
          r.shadowColor = xzu238;
          r.shadowBlur = 0;
          r.shadowOffsetX = 0;
          r.shadowOffsetY = 0;
          r.imageSmoothingEnabled = !0;
          r.translate(Math.floor(f / 2), Math.floor(c / 2));
          r.scale(u, u);
          u = zto1280(e);
          r.drawImage(u, -Math.floor(u.width / 2), -Math.floor(u.height / 2));
          r.restore();
          r.translate(Math.floor(f -
              m * c - l * c), Math.floor(k * c));
          u = Math.floor(m * c);
          r.lineWidth = Math.floor(1 + c / 80);
          r.strokeStyle = xzu239;
          r.beginPath();
          r.moveTo(0, 0);
          r.lineTo(u, u);
          r.moveTo(0, u);
          r.lineTo(u, 0);
          r.stroke();
          d = a = !0;
          zto883();
          zto985();
          t ? p = 1 : (p = -1, setTimeout(b, 33))
      }
  };
  window.zto1100 = function(q, t) {
      if (!d || 0 >= p) return !1;
      q -= Math.floor((xzu601 - f) / 2);
      t -= xzu602 - c - 2 * xzu262;
      var u = k * c;
      return q > f - m * c - l * c - u && q < f - m * c + u && t < m * c + k * c + u && t > m * c - u ? (d = !1, zto856(), !0) : 0 <= q && 0 <= t && q < f && t < c ? !0 : !1
  };
  window.zto1101 = function() {
      !d || 0 >= p || (xzu594.globalAlpha = p,
          xzu594.drawImage(n, Math.floor((xzu601 - f) / 2), xzu602 - c - 2 * xzu262), xzu594.globalAlpha = 1)
  }
})();

function zto1104(b, d, e) {
  if (!(0 == xzu568[b] || 0 > e || 1E3 < e)) {
      0 == xzu568[d] && (d = xzu135);
      var a = zto1496(xzu575[b], 100),
          f = zto1496(e * xzu575[b], 1E3);
      f -= 500 <= e ? a : 0;
      f <= xzu145 || !zto1356(b) || (e = xzu576[b].length, d == xzu135 ? zto786(b) : zto784(b, d), 0 == e && 0 == xzu576[b].length) || (zto785(e, b), zto1365(b, f, d), xzu575[b] -= f + a, zto807(b, !1))
  }
}

function zto1105(b, d, e, a) {
  if (a <= xzu145 || !zto1356(b)) return !1;
  d = zto834(b, d, e);
  if (0 == d) return !1;
  zto1366(b, a, d);
  xzu575[b] -= a;
  return !0
}

function zto1106() {
  this.borders = [0, 0, 0, 0];
  this.render = function() {
      xzu615.calculatePreRendering();
      var b = Math.floor(xzu615.camX),
          d = Math.floor(xzu615.camY),
          e = Math.floor(b + xzu615.camW + 1),
          a = Math.floor(d + xzu615.camH + 1);
      b = b < this.borders[0] ? this.borders[0] : b;
      d = d < this.borders[1] ? this.borders[1] : d;
      e = e > this.borders[2] ? this.borders[2] : e;
      a = a > this.borders[3] ? this.borders[3] : a;
      e >= b && a >= d && xzu662.putImageData(xzu663, 0, 0, b, d, e - b + 1, a - d + 1)
  };
  this.renderAll = function() {
      this.borders[2] >= this.borders[0] && this.borders[3] >=
          this.borders[1] && xzu662.putImageData(xzu663, 0, 0, this.borders[0], this.borders[1], this.borders[2] - this.borders[0] + 1, this.borders[3] - this.borders[1] + 1)
  };
  this.setMaxBorders = function() {
      this.borders[0] = xzu624;
      this.borders[1] = xzu625;
      this.borders[2] = this.borders[3] = 0;
      var b = 1;
      a: for (; b < xzu624 - 1; b++)
          for (var d = xzu625 - 2; 1 < d; d--)
              if (1 == xzu661[zto1287(b, d) + 2]) {
                  this.borders[0] = b;
                  break a
              } d = 1;
      a: for (; d < xzu625 - 1; d++)
          for (b = xzu624 - 2; 1 < b; b--)
              if (1 == xzu661[zto1287(b, d) + 2]) {
                  this.borders[1] = d;
                  break a
              } b = xzu624 - 2;
      a: for (; 0 < b; b--)
          for (d =
              xzu625 - 2; 1 < d; d--)
              if (1 == xzu661[zto1287(b, d) + 2]) {
                  this.borders[2] = b;
                  break a
              } d = xzu625 - 2;
      a: for (; 0 < d; d--)
          for (b = xzu624 - 2; 1 < b; b--)
              if (1 == xzu661[zto1287(b, d) + 2]) {
                  this.borders[3] = d;
                  break a
              }
  }
}
(function() {
  var b, d, e, a, f, c, g, h, l, k;
  window.zto1107 = function() {
      b = !1;
      g = zto1169(18).fontSize;
      a = Math.floor(2.3 * zto1169(18).fontSize)
  };
  window.zto1110 = function(m, p) {
      b ? (m >= f && m <= f + e && p >= c && p <= c + a && (zto1116(zto1115() + 1), zto1598(h)), b = !1, k = l = -1E3, zto1216()) : (l = m, k = p)
  };
  window.zto1111 = function(m, p, n, r) {
      !b && Math.abs(m - l) < .5 * a && Math.abs(p - k) < .5 * a && (h = r, d = "Challenge " + n + "!", e = zto969(d, zto1169(18).font) + 2 * g, f = Math.floor(m - e / 2), c = Math.floor(p - a / 2), b = !0, zto1216())
  };
  window.zto1112 = function(m, p) {
      !b || m >= f && m <= f + e && p >=
          c && p <= c + a || (b = !1, zto1216())
  };
  window.zto1113 = function() {
      b && (xzu594.fillStyle = zto1169(19).colorBg, xzu594.fillRect(f, c, e, a), xzu594.lineWidth = 3, xzu594.strokeStyle = xzu239, xzu594.strokeRect(f, c, e, a), xzu594.textAlign = xzu250, xzu594.textBaseline = xzu246, xzu594.font = zto1169(18).font, xzu594.fillStyle = xzu239, xzu594.fillText(d, Math.floor(f + e / 2), Math.floor(c + a / 2)))
  }
})();
(function() {
  var b = [],
      d, e, a, f, c, g, h, l, k, m;
  window.zto1114 = function() {
      b = [];
      a = "Accept";
      d = Math.floor(2.3 * zto969(a, zto1169(5).font));
      e = Math.floor(1.8 * zto1169(5).fontSize);
      f = Math.floor(.4 * e);
      c = Math.floor(1 * e);
      g = Math.floor(3 * f + e + zto1169(19).fontSize);
      k = f;
      m = 0;
      zto1117()
  };
  window.zto1115 = function() {
      return m
  };
  window.zto1116 = function(p) {
      m = p
  };
  window.zto1117 = function() {
      h = zto1169(19).x + zto1169(19).w;
      l = zto1169(19).y - zto1169(50);
      for (var p = b.length - 1; 0 <= p; p--) b[p].x = h - b[p].w, b[p].y = l - g - p * (g + k)
  };
  window.zto1118 = function(p,
      n) {
      if (p > h || n > l) return !1;
      for (var r = b.length - 1; 0 <= r; r--)
          if (p > b[r].x && p < b[r].x + b[r].w && n > b[r].y && n < b[r].y + g) {
              if (p > b[r].x + b[r].w - 1.1 * c && n < b[r].y + 1.1 * c) return b.splice(r, 1), zto1117(), !0;
              if (p > b[r].x + (b[r].w - d) / 2 && p < b[r].x + (b[r].w + d) / 2 && n > b[r].y + g - f - e) return zto1598(b[r].id), b.splice(r, 1), zto1117(), !0
          } return !1
  };
  window.zto1119 = function(p, n) {
      var r = p + " challenges you!",
          q = zto969(r, zto1169(19).font) + 2 * c;
      q = q < d + 2 * c ? d + 2 * c : q;
      b.push({
          txt: r,
          id: n,
          x: h - q,
          y: l - g - b.length * (g + k),
          w: q
      })
  };
  window.zto1120 = function() {
      for (var p =
              b.length - 1; 0 <= p; p--) {
          var n = p;
          xzu594.fillStyle = zto1169(19).colorBg;
          xzu594.fillRect(b[n].x, b[n].y, b[n].w, g);
          xzu594.fillStyle = zto1169(0).colorBg;
          xzu594.fillRect(Math.floor(b[n].x + (b[n].w - d) / 2), b[n].y + g - f - e, d, e);
          xzu594.lineWidth = 3;
          xzu594.strokeStyle = xzu239;
          xzu594.strokeRect(Math.floor(b[n].x + (b[n].w - d) / 2), b[n].y + g - f - e, d, e);
          xzu594.strokeRect(b[n].x, b[n].y, b[n].w, g);
          xzu594.textAlign = xzu250;
          xzu594.textBaseline = xzu246;
          xzu594.font = zto1169(19).font;
          xzu594.fillStyle = xzu239;
          xzu594.fillText(b[n].txt, Math.floor(b[n].x +
              b[n].w / 2 - .2 * c), Math.floor(b[n].y + f + .5 * zto1169(19).fontSize));
          xzu594.font = zto1169(5).font;
          xzu594.fillText(a, Math.floor(b[n].x + b[n].w / 2), Math.floor(b[n].y + g - f - .5 * e));
          xzu594.save();
          zto898(Math.floor(b[n].x + b[n].w - .8 * c), Math.floor(b[n].y + .3 * c), Math.floor(.5 * c));
          xzu594.restore()
      }
  }
})();
(function() {
  var b, d, e, a, f;
  window.zto1122 = function() {
      e = [64, 100, 150, 200, 256, 512];
      d = e.length;
      a = "Recruit Soldier Specialist Captain Strategist Commander".split(" ");
      f = "Difficulty: ";
      b = e[0]
  };
  window.zto1123 = function(c) {
      for (var g = d - 1; 1 <= g; g--)
          if (c >= e[g]) return g;
      return 0
  };
  window.zto1124 = function(c) {
      var g = zto1123(b);
      g += c;
      g = 0 > g ? d - 1 : g >= d ? 0 : g;
      b = e[g]
  };
  window.zto1126 = function(c) {
      b = e[c % d]
  };
  window.zto1127 = function() {
      return b
  };
  window.zto1128 = function(c) {};
  window.zto1129 = function() {
      for (var c = d - 1; 1 <= c; c--)
          if (b > (e[c] +
                  e[c - 1]) / 2) return f + a[c];
      return f + a[0]
  }
})();
(function() {
  function b() {
      k.beginPath();
      k.moveTo(t, t);
      k.lineTo(p, t);
      k.lineTo(g - t, n);
      k.lineTo(g - t, h - n);
      k.lineTo(p, h - t);
      k.lineTo(t, h - t);
      k.closePath()
  }

  function d() {
      k.beginPath();
      k.moveTo(p, K);
      k.lineTo(g - t, K + n - t);
      k.lineTo(p, K + 2 * n - 2 * t);
      k.closePath()
  }

  function e(y, D, G) {
      for (var J, N = 0; N < y.length; N++) J = Math.floor(w + (N + D) * H - Q), J > -H && J < (F + 1) * H && (k.fillStyle = xzu239, k.fillText(y[N].name, v, J), J = N + D, k.fillStyle = S[G], k.fillRect(u, Math.floor(w + J * H - Q), z, z), k.strokeStyle = xzu239, k.strokeRect(u, Math.floor(w + J * H - Q), z, z))
  }

  function a(y, D) {
      if (D > E && D < E + h) {
          if (y > R && y < R + p) return 1;
          if (y > R + p && y < R + g) return y > R + p + 2 * (D - E) / 3 || y > R + p + 2 * (E + h - D) / 3 ? 0 : 2
      }
      return 0
  }

  function f(y, D) {
      y -= n;
      var G = K;
      K = y;
      K = K < t ? t : K;
      var J = t + h - 2 * n;
      K = K > J ? J : K;
      G != K && (G = Math.floor((O - F / 2) * H), Q = Math.floor((K - t) / (J - t) * G), Q = Q > G ? G : Q, Q = 0 > Q ? 0 : Q, zto1141(), D && zto1216())
  }

  function c(y) {
      var D = Q;
      Q = U - (y - I);
      y = Math.floor((O - F / 2) * H);
      Q = Q > y ? y : Q;
      Q = 0 > Q ? 0 : Q;
      D != Q && (D = t + h - 2 * n, K = Math.floor(t + Q / y * (D - t)), K = K < t ? t : K, K = K > D ? D : K, zto1141(), zto1216())
  }
  var g, h, l, k, m, p, n, r, q, t, u, v, w, z, x, A, C, H, F, K, Q,
      U, O, S, R, E, I, P, B;
  window.zto1130 = function(y, D, G, J) {
      B = y;
      O = J.length;
      x = Array(D);
      A = Array(G);
      for (y = 0; y < D; y++) x[y] = J[y];
      for (y = 0; y < G; y++) A[y] = J[y + D];
      zto1131();
      S = [];
      S.push("rgba(0,255,0,0.7)");
      S.push("rgba(255,0,0,0.7)");
      S.push("rgba(255,255,0,0.7)");
      S.push("rgba(128,128,128,0.7)");
      f(0, !1);
      zto1141()
  };
  window.zto1131 = function() {
      h = Math.floor(.7 * xzu599 - 4 * zto1169(50) - 2 * zto1169(15).h - zto1169(18).h - zto1169(16).h);
      g = Math.floor(.75 * zto1169(0).w);
      m = Math.floor(1 + .1 * g);
      p = g - m;
      n = Math.floor(1.5 * m);
      r = Math.floor(1 + .006 * g);
      r += r % 2;
      q = 2;
      t = Math.floor(r / 2);
      u = Math.floor(1 + .04 * g);
      l = document.createElement("canvas");
      l.width = g;
      l.height = h;
      k = l.getContext("2d", {
          alpha: !0
      });
      k.lineWidth = r;
      F = Math.floor(h / (.09 * g));
      H = h / F;
      C = Math.floor(.6 * H) + xzu255;
      z = Math.floor(.45 * H);
      Q = 0;
      v = 2 * u + z;
      w = u;
      P = 0;
      k.font = C;
      k.textBaseline = xzu248;
      k.textAlign = xzu251
  };
  window.zto1132 = function() {
      x = A = k = l = null
  };
  window.zto1133 = function() {
      return x.length
  };
  window.zto1134 = function() {
      return A.length
  };
  window.zto1135 = function() {
      return B < x.length && B >= x.length - xzu136 && 1 < x.length
  };
  window.zto1136 = function(y, D) {
      for (var G = [], J, N = 1; 0 <= N; N--)
          for (var L = 0 == N ? x : A, M = L.length - 1; 0 <= M; M--)
              if (L[M].id == y || L[M].id == D)
                  if (G.push(L[M]), 0 == N && B == M || 1 == N && B == M + x.length) J = G.length - 1;
      2 == G.length ? (G[0].id != y && (G = [G[1], G[0]], J = 1 - J), zto1207(8), zto1505(!1), xzu272.keyUp(), zto870(zto1235(), zto1127(), J, G, !1, !0), zto1132()) : zto1543(3224)
  };
  window.zto1137 = function(y) {
      for (var D = x.length - 1; 0 <= D; D--)
          if (x[D].id == y) return x[D];
      for (D = A.length - 1; 0 <= D; D--)
          if (A[D].id == y) return A[D]
  };
  window.zto1138 = function() {
      return x.length <=
          xzu136 ? B : B - (x.length - xzu136)
  };
  window.zto1139 = function() {
      if (x.length <= xzu136) return x;
      for (var y = Array(xzu136), D = x.length - xzu136, G = 0; G < xzu136; G++) y[G] = x[G + D];
      return y
  };
  window.zto1141 = function() {
      k.clearRect(0, 0, g, h);
      k.fillStyle = xzu212;
      b();
      k.fill();
      k.strokeStyle = xzu239;
      k.beginPath();
      k.moveTo(p, 2 * t);
      k.lineTo(p, h - 2 * t);
      k.stroke();
      k.fillStyle = xzu232;
      d();
      k.fill();
      k.strokeStyle = xzu239;
      d();
      k.stroke();
      k.lineWidth = q;
      var y = 0;
      e(x, y, 0);
      y += x.length;
      e(A, y, 1);
      k.lineWidth = r;
      k.strokeStyle = xzu239;
      b();
      k.stroke()
  };
  window.zto1151 =
      function() {
          R = zto1169(0).x + zto1169(0).w - p;
          E = zto1169(21).y - zto1169(50) - h
      };
  window.zto1152 = function(y, D) {
      I = D;
      P = a(y, D);
      1 == P ? (U = Q, zto1110(y, D)) : 2 == P && f(D - E, !0)
  };
  window.zto1153 = function(y, D) {
      2 == P ? f(D - E, !0) : 1 == P ? c(D) : zto1112(y, D)
  };
  window.zto1154 = function(y, D) {
      if (1 == P) {
          if (1 != a(y, D)) var G = -1;
          else G = Math.floor((D - E - w + Q) / H + .3), G = G >= x.length + A.length ? -1 : G;
          0 <= G && G != B && 2 > zto1115() && zto1111(y, D, G < x.length ? x[G].name : A[G - x.length].name, G < x.length ? x[G].id : A[G - x.length].id)
      }
      P = 0
  };
  window.zto1156 = function(y, D, G) {
      y = a(y,
          D);
      1 == y ? (U = Q, I = Math.floor(D + G / 2), c(D)) : 2 == y && f(K + n + G / 12, !0)
  };
  window.zto1162 = function() {
      var y = x.length;
      if (!(2 > y)) {
          if (y <= xzu136) O -= y, B -= y, x = [];
          else {
              for (var D = Array(y - xzu136), G = 0; G < y - xzu136; G++) D[G] = x[G];
              x = D;
              O -= xzu136;
              B >= x.length && (B -= xzu136)
          }
          0 < y && zto1141()
      }
  };
  window.zto1163 = function(y) {
      B >= x.length && B++;
      A.unshift(y);
      O++
  };
  window.zto1164 = function(y) {
      y < x.length ? (A.unshift(x[y]), B == y ? B = x.length - 1 : B > y && B < x.length && B--, x.splice(y, 1)) : (zto1550(), x.unshift(A.splice(y - x.length, 1)[0]), B == y ? B = 0 : B < y && B++)
  };
  window.zto1165 =
      function(y) {
          B > y && B--;
          y < x.length ? x.splice(y, 1) : A.splice(y - x.length, 1);
          O--
      };
  window.zto1166 = function() {
      var y = K;
      K = 0;
      f(y + n, !1)
  };
  window.zto1167 = function() {
      xzu594.drawImage(l, R, E)
  }
})();
(function() {
  function b(n, r, q, t, u, v, w, z, x) {
      return {
          x: n,
          y: r,
          w: q,
          h: t,
          txt: u,
          font: v,
          colorBg: w,
          fontSize: z,
          selectable: x
      }
  }

  function d(n) {
      var r = void 0 != k ? k[n] : a[n];
      if (void 0 == k && 28 == n) {
          r = a[n].x;
          var q = a[n].y,
              t = a[n].w,
              u = a[n].h;
          xzu594.fillStyle = a[n].colorBg;
          xzu594.fillRect(r, q, t, u);
          n == c && (xzu594.fillStyle = h, xzu594.fillRect(r, q, t, u));
          xzu594.lineWidth = 3;
          xzu594.strokeStyle = g;
          xzu594.strokeRect(r, q, t, u);
          xzu594.textAlign = xzu250;
          xzu594.textBaseline = xzu246;
          xzu594.font = l[0];
          xzu594.fillStyle = g;
          xzu594.fillText(a[n].txt, Math.floor(r +
              t / 2), Math.floor(q + .45 * u));
          xzu594.font = l[1];
          xzu594.fillStyle = g;
          xzu594.fillText(a[n].txt2, Math.floor(r + t / 2), Math.floor(q + .72 * u))
      } else {
          q = r.x;
          t = r.y;
          u = r.w;
          var v = r.h;
          xzu594.fillStyle = r.colorBg;
          xzu594.fillRect(q, t, u, v);
          if (void 0 == k && (9 == n || 20 == n)) {
              var w = zto1123(zto1127());
              xzu594.fillStyle = "rgba(" + 51 * w + "," + (255 - 51 * w) + ",0,0.5)";
              xzu594.fillRect(q, t, Math.floor((w + 1) * u / 6), v)
          }
          void 0 == k && 21 == n && (xzu594.fillStyle = xzu218, xzu594.fillRect(q, t, Math.floor(u * zto1234() / 100), v));
          n == c && (xzu594.fillStyle = h, xzu594.fillRect(q,
              t, u, v));
          xzu594.lineWidth = 3;
          xzu594.strokeStyle = g;
          xzu594.strokeRect(q, t, u, v);
          e(r)
      }
  }

  function e(n) {
      var r = n.x,
          q = n.y,
          t = n.w,
          u = n.h;
      xzu594.textAlign = xzu250;
      xzu594.textBaseline = xzu246;
      xzu594.font = n.font;
      xzu594.fillStyle = g;
      xzu594.fillText(n.txt, Math.floor(r + t / 2), Math.floor(q + u / 2 + .1 * n.fontSize))
  }
  var a, f, c, g, h, l, k, m, p;
  window.zto1168 = function() {
      c = -1;
      g = xzu239;
      h = "rgba(255,255,255,0.16)";
      a = Array(34);
      l = Array(2);
      var n = Math.floor((xzu610 ? .16 : .11) * xzu600),
          r = Math.floor((xzu610 && xzu598 < xzu599 ? 4.7 : 5) * n),
          q = Math.floor(.31 *
              n),
          t = xzu253 + q + xzu256;
      a[0] = {
          x: 0,
          y: 0,
          w: r,
          h: n,
          txt: "Enter the Lobby",
          font: t,
          colorBg: "rgba(22,88,22,0.8)",
          fontSize: q,
          selectable: !0
      };
      var u = Math.floor(.4 * a[0].h),
          v = Math.floor(.42 * u),
          w = xzu253 + v + xzu256,
          z = Math.floor(.3 * u),
          x = xzu253 + z + xzu256;
      f = Math.floor(.025 * r);
      r = Math.floor(.5 * r - .5 * f);
      n = Math.floor(r / 4);
      q = Math.floor(.35 * n);
      t = xzu253 + q + xzu256;
      a[1] = {
          x: 0,
          y: 0,
          w: 0,
          h: 0,
          txt: "or",
          font: t,
          colorBg: "rgba(130,120,110,0.8)",
          fontSize: q,
          selectable: !0
      };
      n = Math.floor(r / 4);
      q = Math.floor(.35 * n);
      t = xzu253 + q + xzu256;
      a[2] = {
          x: 0,
          y: 0,
          w: a[0].w,
          h: n,
          txt: "Play with Bots",
          font: t,
          colorBg: "rgba(22,88,88,0.8)",
          fontSize: q,
          selectable: !0
      };
      a[3] = {
          x: 0,
          y: 0,
          w: a[0].w,
          h: a[0].h,
          txt: a[1].txt,
          font: a[0].font,
          colorBg: a[1].colorBg,
          fontSize: a[0].fontSize,
          selectable: !0
      };
      a[4] = {
          x: 0,
          y: 0,
          w: a[0].w,
          h: Math.floor(.5 * a[0].h),
          txt: "Back",
          font: a[1].font,
          colorBg: "rgba(0,0,0,0.8)",
          fontSize: a[1].fontSize,
          selectable: !0
      };
      a[5] = {
          x: 0,
          y: 0,
          w: Math.floor(.1 * a[0].w),
          h: u,
          txt: "<",
          font: w,
          colorBg: a[0].colorBg,
          fontSize: v,
          selectable: !0
      };
      a[6] = {
          x: 0,
          y: 0,
          w: a[0].w - 2 * a[5].w - 2 * f,
          h: u,
          txt: "",
          font: w,
          colorBg: a[4].colorBg,
          fontSize: v,
          selectable: !0
      };
      a[7] = {
          x: 0,
          y: 0,
          w: a[5].w,
          h: u,
          txt: ">",
          font: w,
          colorBg: a[0].colorBg,
          fontSize: v,
          selectable: !0
      };
      a[8] = {
          x: 0,
          y: 0,
          w: Math.floor(.1 * a[0].w),
          h: u,
          txt: "<",
          font: w,
          colorBg: a[0].colorBg,
          fontSize: v,
          selectable: !0
      };
      a[9] = {
          x: 0,
          y: 0,
          w: a[0].w - 2 * a[5].w - 2 * f,
          h: u,
          txt: "",
          font: w,
          colorBg: a[4].colorBg,
          fontSize: v,
          selectable: !0
      };
      a[10] = {
          x: 0,
          y: 0,
          w: a[5].w,
          h: u,
          txt: ">",
          font: w,
          colorBg: a[0].colorBg,
          fontSize: v,
          selectable: !0
      };
      a[11] = {
          x: 0,
          y: 0,
          w: a[0].w,
          h: a[0].h,
          txt: "Play",
          font: a[0].font,
          colorBg: a[2].colorBg,
          fontSize: a[0].fontSize,
          selectable: !0
      };
      a[12] = {
          x: 0,
          y: 0,
          w: a[0].w,
          h: a[4].h,
          txt: a[4].txt,
          font: a[4].font,
          colorBg: a[4].colorBg,
          fontSize: a[4].fontSize,
          selectable: !0
      };
      a[13] = {
          x: 0,
          y: 0,
          w: a[0].w,
          h: a[4].h,
          txt: "",
          font: a[9].font,
          colorBg: xzu234,
          fontSize: a[9].fontSize,
          selectable: !1
      };
      a[14] = {
          x: 0,
          y: 0,
          w: a[0].w,
          h: a[0].h,
          txt: a[4].txt,
          font: a[0].font,
          colorBg: xzu216,
          fontSize: a[0].fontSize,
          selectable: !0
      };
      a[16] = {
          x: 0,
          y: 0,
          w: Math.floor((a[0].w - f) / 2),
          h: a[4].h,
          txt: "Skip",
          font: a[1].font,
          colorBg: xzu233,
          fontSize: a[1].fontSize,
          selectable: !0
      };
      a[15] = {
          x: 0,
          y: 0,
          w: a[16].w,
          h: Math.floor(.8 * u),
          txt: "",
          font: x,
          colorBg: a[4].colorBg,
          fontSize: z,
          selectable: !1
      };
      a[17] = {
          x: 0,
          y: 0,
          w: a[16].w,
          h: a[4].h,
          txt: "Join",
          font: a[1].font,
          colorBg: a[4].colorBg,
          fontSize: a[1].fontSize,
          selectable: !0
      };
      a[18] = {
          x: 0,
          y: 0,
          w: a[0].w,
          h: u,
          txt: "Exit Lobby",
          font: w,
          colorBg: a[4].colorBg,
          fontSize: v,
          selectable: !0
      };
      a[19] = {
          x: 0,
          y: 0,
          w: Math.floor(a[0].w - f - .675 * a[0].w + 1),
          h: Math.floor(.2 * a[0].w),
          txt: "",
          font: x,
          colorBg: a[4].colorBg,
          fontSize: z,
          selectable: !1
      };
      a[20] = {
          x: 0,
          y: 0,
          w: a[16].w,
          h: a[15].h,
          txt: "",
          font: x,
          colorBg: a[4].colorBg,
          fontSize: z,
          selectable: !1
      };
      a[21] = {
          x: 0,
          y: 0,
          w: a[0].w,
          h: a[15].h,
          txt: "",
          font: x,
          colorBg: a[4].colorBg,
          fontSize: z,
          selectable: !1
      };
      a[22] = {
          x: 0,
          y: 0,
          w: a[0].w,
          h: a[0].h,
          txt: "Accept Cookies",
          font: a[0].font,
          colorBg: a[0].colorBg,
          fontSize: a[0].fontSize,
          selectable: !0
      };
      a[23] = {
          x: 0,
          y: 0,
          w: a[4].w,
          h: a[4].h,
          txt: "Cookie Policy",
          font: a[4].font,
          colorBg: a[1].colorBg,
          fontSize: a[4].fontSize,
          selectable: !0
      };
      a[24] = {
          x: 0,
          y: 0,
          w: a[4].w,
          h: a[4].h,
          txt: "Decline",
          font: a[4].font,
          colorBg: "rgba(88,22,22,0.8)",
          fontSize: a[4].fontSize,
          selectable: !0
      };
      a[25] = {
          x: 0,
          y: 0,
          w: a[0].w,
          h: a[4].h,
          txt: "The game was updated! Please reload the page!",
          font: a[4].font,
          colorBg: a[4].colorBg,
          fontSize: a[4].fontSize,
          selectable: !1
      };
      a[26] = {
          x: 0,
          y: 0,
          w: a[0].w,
          h: a[0].h,
          txt: "Reload",
          font: a[0].font,
          colorBg: a[2].colorBg,
          fontSize: a[0].fontSize,
          selectable: !0
      };
      a[27] = {
          x: 0,
          y: 0,
          w: a[0].w,
          h: a[4].h,
          txt: a[4].txt,
          font: a[4].font,
          colorBg: a[4].colorBg,
          fontSize: a[4].fontSize,
          selectable: !0
      };
      a[28] = {
          x: 0,
          y: 0,
          w: a[0].w,
          h: a[0].h,
          txt: "Window 1",
          txt2: "Fullscreen",
          colorBg: "rgba(180,130,10,0.6)",
          selectable: !0
      };
      l[0] = xzu253 + Math.floor(.35 * a[28].h) + xzu256;
      l[1] = xzu253 + Math.floor(.2 * a[28].h) + xzu256;
      a[29] = void 0 != m ? m : {
          x: 0,
          y: 0,
          w: a[0].w,
          h: a[0].h,
          txt: "Open Game In Browser",
          font: xzu253 + Math.floor(.15 * a[28].h) + xzu256,
          fontSize: Math.floor(.15 * a[28].h),
          colorBg: "rgba(88,22,22,0.8)",
          selectable: !0
      };
      a[30] = void 0 != p ? p : {
          x: 0,
          y: 0,
          w: Math.floor(.5 * a[0].w),
          h: Math.floor(.7 * a[0].h),
          txt: "Privacy Policy",
          font: l[1],
          colorBg: "rgba(88,88,22,0.8)",
          fontSize: Math.floor(.2 * a[28].h),
          selectable: !0
      };
      m = a[29];
      p = a[30];
      a[31] = {
          x: 0,
          y: 0,
          w: a[2].w,
          h: a[2].h,
          txt: "Back",
          font: l[2],
          colorBg: "rgba(180,180,70,0.6)",
          fontSize: a[2].fontSize,
          selectable: !0
      };
      a[32] = {
          x: 0,
          y: 0,
          w: Math.floor(.5 * (a[0].w - f)),
          h: u,
          txt: "Free Start Position",
          font: w,
          colorBg: zto747(0) ? a[5].colorBg : a[6].colorBg,
          fontSize: v,
          selectable: !0
      };
      a[33] = {
          x: 0,
          y: 0,
          w: Math.floor(.5 * (a[0].w - f)),
          h: u,
          txt: "Unlimited Time",
          font: w,
          colorBg: zto747(1) ? a[5].colorBg : a[6].colorBg,
          fontSize: v,
          selectable: !0
      };
      zto1174()
  };
  window.zto1169 = function(n) {
      return 50 == n ? f : 51 == n ? k : a[n]
  };
  window.zto1170 = function(n, r,
      q) {
      k = [];
      k.push(b(a[n].x, a[n].y, a[n].w, a[n].h, q[r], a[n].font, a[n].colorBg, a[n].fontSize, !0));
      for (var t = r + 1; t < q.length; t++) k.push(b(a[n].x, k[k.length - 1].y + a[n].h, a[n].w, a[n].h, q[t], a[n].font, a[n].colorBg, a[n].fontSize, !0));
      for (t = r - 1; 0 <= t; t--) k.unshift(b(a[n].x, k[0].y - a[n].h, a[n].w, a[n].h, q[t], a[n].font, a[n].colorBg, a[n].fontSize, !0))
  };
  window.zto1171 = function(n, r, q) {
      if (void 0 != k && (q = 0 < q ? -k[0].h : k[0].h, !(0 > q && k[k.length - 1].y < xzu599 / 2 || 0 < q && k[0].y > xzu599 / 2))) {
          for (var t = k.length - 1; 0 <= t; t--) k[t].y += q;
          zto1183(n,
              r, !1);
          zto1216()
      }
  };
  window.zto1172 = function() {
      k = void 0
  };
  window.zto1174 = function() {
      a[0].x = Math.floor(.5 * xzu601 - .5 * a[0].w);
      a[1].x = a[0].x + Math.floor(.5 * (a[0].w - a[1].w));
      a[2].x = a[0].x;
      a[31].x = a[0].x;
      a[3].x = a[0].x;
      a[4].x = a[0].x;
      a[32].x = a[5].x = a[0].x;
      a[33].x = a[32].x + a[32].w + f;
      a[6].x = a[5].x + a[5].w + f;
      a[7].x = a[6].x + a[6].w + f;
      a[8].x = a[0].x;
      a[9].x = a[6].x;
      a[10].x = a[7].x;
      a[11].x = a[0].x;
      a[12].x = a[0].x;
      a[13].x = a[14].x = a[0].x;
      a[15].x = a[16].x = a[18].x = a[19].x = a[21].x = a[0].x;
      a[17].x = a[0].x + a[0].w - a[17].w;
      a[20].x = a[17].x;
      a[22].x = a[23].x = a[24].x = a[0].x;
      a[25].x = a[26].x = a[27].x = a[28].x = a[29].x = a[0].x;
      a[30].x = Math.floor(.5 * xzu601 - .5 * a[30].w);
      a[29].x = a[30].x = Math.floor(.015 * xzu600);
      a[0].y = Math.floor(.54 * xzu602);
      a[1].y = a[0].y + a[0].h + f;
      a[2].y = a[0].y + a[0].h + f;
      a[31].y = a[2].y;
      a[3].y = a[0].y + Math.floor(.04 * xzu600);
      a[4].y = a[3].y + a[3].h + f;
      a[5].y = a[6].y = a[7].y = a[0].y - Math.floor(.062 * xzu602);
      a[32].y = a[33].y = a[5].y - a[5].h - f;
      a[8].y = a[9].y = a[10].y = a[5].y + a[5].h + f;
      a[11].y = a[8].y + a[8].h + f;
      a[12].y = a[11].y + a[11].h + f;
      a[13].y = a[0].y;
      a[14].y =
          a[13].y + a[13].h + f;
      a[18].y = Math.floor(.85 * xzu599 - a[18].h - .5 * (xzu599 - xzu602));
      a[17].y = a[16].y = a[18].y - f - a[17].h;
      a[15].y = a[16].y - f - a[15].h;
      a[20].y = a[15].y;
      a[21].y = a[15].y - f - a[21].h;
      a[19].y = a[21].y - f - a[19].h;
      a[22].y = a[5].y;
      a[23].y = a[22].y + a[22].h + f;
      a[24].y = a[23].y + a[23].h + f;
      a[25].y = a[5].y;
      a[26].y = a[25].y + a[25].h + f;
      a[27].y = a[26].y + a[26].h + f;
      a[28].y = Math.floor(.4 * xzu602);
      a[29].y = a[28].y + a[28].h + 2 * f;
      a[30].y = a[29].y + a[29].h + 2 * f;
      a[30].y = Math.floor(xzu602 - 2.471 * a[29].h - 2 * a[29].x);
      a[29].y = Math.floor(a[30].y -
          a[30].h - a[29].x)
  };
  window.zto1175 = function() {
      xzu272.isWinVisible() || (d(0), d(2));
      if (xzu604 || xzu607 >= xzu608) d(29), d(30)
  };
  window.zto1176 = function() {
      d(3);
      d(4)
  };
  window.zto1177 = function() {
      if (void 0 != k)
          for (var n = 0; n < k.length; n++) 0 <= k[n].y && k[n].y + k[n].h <= xzu602 && d(n);
      else {
          for (n = 5; 13 > n; n++) d(n);
          d(32);
          d(33)
      }
  };
  window.zto1178 = function() {
      for (var n = 13; 15 > n; n++) d(n)
  };
  window.zto1179 = function() {
      for (var n = 15; 22 > n; n++) d(n)
  };
  window.zto1180 = function() {
      for (var n = 22; 25 > n; n++) d(n)
  };
  window.zto1181 = function() {
      for (var n = 28; 31 >
          n; n++) d(n)
  };
  window.zto1182 = function() {
      e(25);
      d(26);
      d(27)
  };
  window.zto1183 = function(n, r, q) {
      var t = -1;
      0 == zto1208() ? (t = zto1184(n, r, 0, 3), -1 == t && (xzu604 || xzu607 >= xzu608) && (t = zto1184(n, r, 29, 2))) : 1 == zto1208() ? t = zto1184(n, r, 3, 2) : 2 == zto1208() ? (t = zto1184(n, r, 5, 8), -1 == t && (t = zto1184(n, r, 32, 2))) : 3 == zto1208() ? t = zto1184(n, r, 13, 2) : 4 == zto1208() ? t = zto1184(n, r, 22, 3) : 5 == zto1208() ? t = zto1184(n, r, 26, 2) : 7 == zto1208() ? t = zto1184(n, r, 15, 4) : 9 == zto1208() && (t = zto1184(n, r, 28, 3));
      c != t && (c = t, q && zto1216());
      return -1 != t ? (zto1034(), !0) :
          !1
  };
  window.zto1184 = function(n, r, q, t) {
      if (void 0 == k) var u = a;
      else u = k, q = 0, t = k.length;
      for (var v = q; v < q + t; v++)
          if (n >= u[v].x && r >= u[v].y && n <= u[v].x + u[v].w && r <= u[v].y + u[v].h && u[v].selectable) return v;
      return -1
  }
})();

function zto1188() {
  function b(d) {
      return 0 > d ? 0 : 255 < d ? 255 : Math.floor(d)
  }
  this.h = this.w = 0;
  this.isVisible = !1;
  this.hSlider = this.wSlider = this.wBox = this.indexSelected = this.gap = this.isMousePressing = 0;
  this.colors = null;
  this.init = function() {
      xzu598 < 2 * xzu599 ? this.w = Math.floor((xzu610 ? .8 : .4) * xzu598) : (this.h = Math.floor((xzu610 ? .8 : .4) * xzu599), this.w = Math.floor(2 * this.h));
      this.h = this.w / 2;
      this.gap = this.h / 16;
      this.isVisible = !0;
      this.isMousePressing = 0;
      this.wBox = (this.h - 3 * this.gap) / 2;
      this.wSlider = this.w - 3 * this.gap - this.wBox;
      this.hSlider = (this.h - 4 * this.gap) / 3
  };
  this.initColors = function() {
      this.colors = [
          [0, 0, 0],
          [0, 0, 0]
      ];
      var d = zto749().split("");
      if (6 != d.length)
          for (d = 1; 0 <= d; d--)
              for (var e = 2; 0 <= e; e--) this.colors[d][e] = b(256 * Math.random());
      else
          for (e = 2; 0 <= e; e--) this.colors[0][e] = b(36 * parseInt(d[e])), this.colors[1][e] = b(36 * parseInt(d[e + 3]));
      this.validateColors()
  };
  this.mouseDown = function(d, e) {
      this.isMousePressing = 0;
      var a = (xzu602 - this.h) / 2;
      d -= (xzu601 - this.w) / 2;
      e -= a;
      if (0 > d || 0 > e || d >= this.w - 1 || e >= this.h - 1) return this.isVisible = !1, 0 ==
          zto1208() && zto1230(0, !0), zto1216(), !1;
      if (d < this.gap || e < this.gap || d >= this.w - this.gap || e >= this.h - this.gap) return !0;
      if (d < this.gap + this.wBox) {
          if (e < this.gap + this.wBox) return 0 != this.indexSelected && (this.indexSelected = 0, zto1216()), !0;
          e >= 2 * this.gap + this.wBox && 1 != this.indexSelected && (this.indexSelected = 1, zto1216());
          return !0
      }
      if (d < 2 * this.gap + this.wBox) return !0;
      d -= 2 * this.gap + this.wBox;
      if (e < this.gap + this.hSlider) return this.isMousePressing = 1, this.colors[this.indexSelected][0] = b(256 * d / this.wSlider), zto1216(),
          !0;
      if (e < 2 * this.gap + this.hSlider) return !0;
      if (e < 2 * this.gap + 2 * this.hSlider) return this.isMousePressing = 2, this.colors[this.indexSelected][1] = b(256 * d / this.wSlider), zto1216(), !0;
      e >= 3 * this.gap + 2 * this.hSlider && (this.isMousePressing = 3, this.colors[this.indexSelected][2] = b(256 * d / this.wSlider), zto1216());
      return !0
  };
  this.validateColors = function() {
      for (var d = 1; 0 <= d; d--)
          for (var e = 2; 0 <= e; e--) {
              var a = this.colors[d],
                  f = e,
                  c = this.colors[d][e];
              c = 0 > c ? 0 : 255 < c ? 255 : c;
              c += 18 > c % 36 ? -(c % 36) : 36 - c % 36;
              a[f] = 0 > c ? 0 : 252 < c ? 252 : c
          }
      this.colors[0][0] ==
          this.colors[1][0] && this.colors[0][1] == this.colors[1][1] && this.colors[0][2] == this.colors[1][2] && (this.colors[this.indexSelected][0] += 36 <= this.colors[this.indexSelected][0] ? -36 : 36)
  };
  this.saveColors = function() {
      for (var d = "", e = 0; 6 > e; e++) d += zto1496(this.colors[zto1496(e, 3)][e % 3], 36).toString();
      zto754(d)
  };
  this.mouseMove = function(d) {
      0 != this.isMousePressing && (d -= 2 * this.gap + this.wBox + (xzu601 - this.w) / 2, this.colors[this.indexSelected][this.isMousePressing - 1] = b(256 * d / this.wSlider), zto1216())
  };
  this.mouseRelease =
      function() {
          0 < this.isMousePressing && (this.isMousePressing = 0, this.validateColors(), this.saveColors(), zto1216())
      };
  this.draw = function() {
      xzu594.setTransform(1, 0, 0, 1, (xzu601 - this.w) / 2, (xzu602 - this.h) / 2);
      xzu594.fillStyle = xzu215;
      xzu594.fillRect(0, 0, this.w, this.h);
      xzu594.lineWidth = xzu266;
      xzu594.strokeStyle = xzu239;
      xzu594.strokeRect(-1, -1, this.w + 2, this.h + 2);
      xzu594.font = xzu253 + Math.floor(.8 * this.wBox) + xzu255;
      xzu594.textBaseline = xzu246;
      xzu594.textAlign = xzu250;
      this.drawBox(0);
      this.drawBox(1);
      xzu594.lineWidth = xzu266;
      this.drawSlider(0);
      this.drawSlider(1);
      this.drawSlider(2);
      xzu594.setTransform(1, 0, 0, 1, 0, 0)
  };
  this.drawBox = function(d) {
      xzu594.fillStyle = "rgb(" + this.colors[d][0] + "," + this.colors[d][1] + "," + this.colors[d][2] + ")";
      xzu594.fillRect(this.gap, this.gap + d * (this.gap + this.wBox), this.wBox, this.wBox);
      xzu594.fillStyle = this.getNumberColor(d);
      xzu594.fillText((1 + d).toString(), this.gap + this.wBox / 2, this.gap + .565 * this.wBox + d * (this.gap + this.wBox));
      xzu594.lineWidth = d == this.indexSelected ? 3 + xzu266 : xzu266;
      xzu594.strokeStyle = xzu239;
      xzu594.strokeRect(this.gap, this.gap + d * (this.gap + this.wBox), this.wBox, this.wBox)
  };
  this.getNumberColor = function(d) {
      return 420 > this.colors[d][0] + this.colors[d][1] + this.colors[d][2] ? "rgb(255,255,255)" : "rgb(0,0,0)"
  };
  this.drawSlider = function(d) {
      xzu594.fillStyle = "rgb(" + (0 == d ? 200 : 2 == d ? 50 : 0) + "," + (1 == d ? 200 : 2 == d ? 50 : 0) + "," + (2 == d ? 255 : 0) + ")";
      xzu594.fillRect(2 * this.gap + this.wBox, this.gap + d * (this.gap + this.hSlider), Math.floor(this.colors[this.indexSelected][d] * this.wSlider / 255), this.hSlider);
      xzu594.strokeStyle = xzu239;
      xzu594.strokeRect(2 * this.gap + this.wBox, this.gap + d * (this.gap + this.hSlider), this.wSlider, this.hSlider)
  }
}
(function() {
  function b() {
      if (6 == zto1208()) {
          var k = .04 * (90 - e);
          e += .025 > k ? .025 : k;
          100 > e ? (c = setTimeout(b, 25), zto1216()) : (c = -1, zto1543(3202), zto1221(3202))
      }
  }

  function d(k, m, p) {
      var n = Math.floor((xzu601 - f) / 2),
          r = n + Math.floor(p * f);
      xzu594.lineWidth = m;
      xzu594.beginPath();
      xzu594.moveTo(n, k);
      xzu594.lineTo(r, k);
      xzu594.lineTo(Math.floor(r - a + 3 * p * a), k + a);
      xzu594.lineTo(n - 2 * a, k + a);
      xzu594.closePath()
  }
  var e, a, f, c = -1,
      g, h, l;
  window.zto1191 = function() {
      g = zto1208();
      zto1207(6);
      e = 0;
      a = Math.floor((xzu610 ? .048 : .038) * xzu600);
      f = Math.floor((xzu598 >
          xzu599 ? .3 : .5) * xzu598);
      l = Math.floor(.5 * a);
      h = xzu254 + l + xzu256;
      c = setTimeout(b, 25);
      zto1540() ? zto1539() : zto1541() && 1 != g && (0 == g ? zto1597() : 2 == g && zto1599());
      zto1216()
  };
  window.zto1192 = function() {
      0 <= c ? 1 != g && (0 == g ? zto1597() : 2 == g && zto1599()) : zto1543(3201)
  };
  window.zto1193 = function() {
      0 <= c && (clearTimeout(c), c = -1)
  };
  window.zto1195 = function() {
      zto1196("Connection: " + Math.floor(e) + "%", Math.floor(.5 * (xzu602 - a)), 3, e / 100)
  };
  window.zto1196 = function(k, m, p, n) {
      xzu594.fillStyle = xzu212;
      d(m, p, 1);
      xzu594.fill();
      xzu594.fillStyle = xzu225;
      d(m, p, n);
      xzu594.fill();
      xzu594.strokeStyle = xzu239;
      d(m, p, 1);
      xzu594.stroke();
      xzu594.textAlign = xzu250;
      xzu594.textBaseline = xzu246;
      xzu594.font = h;
      xzu594.fillStyle = xzu239;
      xzu594.fillText(k, Math.floor(.5 * xzu601), Math.floor(m + .58 * a))
  }
})();
(function() {
  window.zto1199 = function(b, d) {
      zto1207(4);
      zto1183(b, d, !1);
      zto1216()
  };
  window.zto1200 = function() {
      zto1180()
  };
  window.zto1201 = function(b, d) {
      var e = zto1184(b, d, 22, 3);
      22 == e ? zto1202(2, b, d) : 23 == e ? window.open(xzu260) : 24 == e && zto1202(1, b, d)
  };
  window.zto1202 = function(b, d, e) {
      zto1330(b);
      zto1261();
      zto1183(d, e, !1);
      zto1216()
  }
})();
(function() {
  var b, d, e, a;
  window.zto1203 = function() {
      zto1503();
      zto1168();
      zto1226();
      b = 0;
      zto919();
      zto1261(600)
  };
  window.zto1204 = function() {
      a = xzu610 ? 2 * xzu262 : xzu262;
      d = Array(4);
      var f = (xzu610 ? .22 : .15) * xzu600 / zto1281("youtube").width;
      zto1281("youtube").style.width = Math.floor(zto1281("youtube").width * f) + "px";
      zto1281("googleplay").style.width = Math.floor(zto1281("googleplay").width * f) + "px";
      zto1281("discord").style.width = Math.floor(zto1281("discord").width * f) + "px";
      zto1281("insta").style.width = Math.floor(zto1281("insta").width *
          f) + "px";
      for (var c = d.length - 1; 0 <= c; c--) {
          var g = c,
              h = f;
          d[g] = document.createElement("a");
          d[g].target = "_blank";
          d[g].href = 0 == g ? xzu257 : 1 == g ? xzu258 : 2 == g ? xzu259 : xzu261;
          d[g].appendChild(zto1281(0 == g ? "youtube" : 1 == g ? "googleplay" : 2 == g ? "discord" : "insta"));
          d[g].style.position = "absolute";
          d[g].style.padding = "0px";
          d[g].style.margin = "0px";
          d[g].style.top = (0 == g ? a : 1 == g ? 2 * a + Math.floor(h * zto1281("youtube").height) : 3 * a + Math.floor(h * (zto1281("youtube").height + zto1281("googleplay").height))) + "px";
          d[g].style.left = Math.floor(3 ==
              g ? 2 * a + zto1281("discord").width * h : a) + "px";
          document.body.appendChild(d[g])
      }
      e = !0;
      zto1216()
  };
  window.zto1206 = function(f) {
      if (void 0 !== e && e != f)
          if (e = f)
              for (f = d.length - 1; 0 <= f; f--) document.body.appendChild(d[f]);
          else
              for (f = d.length - 1; 0 <= f; f--) d[f].remove()
  };
  window.zto1207 = function(f) {
      b = f
  };
  window.zto1208 = function() {
      return b
  };
  window.zto1209 = function(f) {
      xzu632 && ("Enter" != f.key && "Escape" != f.key || xzu272.keyUp() || "Enter" == f.key && (0 == b ? zto1268() : 7 == b && zto1244()))
  };
  window.zto1210 = function(f, c) {
      !xzu632 || xzu272.mouseDown(f,
          c) || zto921(f, c, !0) || (zto1037(f, c), 0 == b ? zto1267(f, c) : 2 == b ? zto1258(f, c) : 3 == b ? zto1223(f, c) : 4 == b ? zto1201(f, c) : 5 == b ? zto1253(f, c) : 7 == b && zto1249(f, c))
  };
  window.zto1211 = function(f, c) {
      if (!xzu272.mouseMove(f, c)) {
          if (!zto1035()) {
              if (zto1183(f, c, !0) || zto921(f, c, !1)) return;
              if (0 <= xzu272.inside(f, c)) {
                  zto1034();
                  return
              }
          }
          zto1033(f, c);
          7 == b && zto1153(f, c)
      }
  };
  window.zto1212 = function(f, c) {
      xzu272.mouseRelease() || (zto1038(), 7 == b && zto1154(f, c))
  };
  window.zto1213 = function(f, c, g) {
      xzu272.wins[0].isVisible || (0 == b ? zto1036(f, g) : 2 == b ?
          zto1171(f, c, g) : 7 == b && zto1156(f, c, g))
  };
  window.zto1214 = function() {
      zto1174();
      xzu272.refreshPosition();
      0 == b ? (zto1229(0), zto1029()) : 1 == b ? (zto1229(1), zto1229(2)) : 7 == b && (zto1151(), zto1117());
      zto1216()
  };
  window.zto1215 = function(f, c, g, h) {
      var l = 100;
      xzu594.font = g + l + h;
      c = xzu594.measureText(c).width;
      l = Math.floor(l * f / c);
      return [g + l + h, l]
  };
  window.zto1216 = function() {
      8 != b && (7 == b ? zto1246() : zto1217(), xzu594.fillStyle = xzu212, xzu594.fillRect(0, 0, xzu598, xzu599), zto1039(), zto929(), zto1219(), zto1043(), zto924(), xzu272.draw(),
          0 == b ? zto1269() : 2 == b ? zto1256() : 3 == b ? zto1225() : 4 == b ? zto1200() : 5 == b ? zto1252() : 6 == b ? zto1195() : 7 == b && zto1245(), xzu272.drawWindow(), zto1506())
  };
  window.zto1217 = function() {
      if (xzu632) {
          var f = xzu598 / xzu624,
              c = xzu599 / xzu625;
          f = f > c ? f : c;
          xzu594.save();
          xzu594.imageSmoothingEnabled = !0;
          xzu594.scale(f, f);
          xzu594.drawImage(xzu626, 0, 0);
          xzu594.restore()
      } else xzu594.fillStyle = xzu213, xzu594.fillRect(0, 0, xzu598, xzu599)
  };
  window.zto1219 = function() {
      var f = Math.floor(.3 * xzu602),
          c = .96,
          g = zto1281("territorial.io");
      c = Math.floor(c * xzu598) /
          g.width;
      xzu594.globalAlpha = .3;
      if (.1 < Math.abs(Math.log(c))) {
          var h = Math.floor(.5 * (xzu601 - c * g.width));
          h = Math.floor(h / c);
          f = Math.floor(f - .5 * g.height * c);
          f = Math.floor(f / c);
          xzu594.save();
          xzu594.imageSmoothingEnabled = !0;
          xzu594.scale(c, c);
          xzu594.drawImage(g, h, f);
          xzu594.restore()
      } else xzu594.drawImage(g, Math.floor(.5 * (xzu601 - g.width)), Math.floor(f - 1.1 * g.height));
      xzu594.fillStyle = xzu239;
      xzu594.globalAlpha = 1
  }
})();

function zto1220() {
  this.h = this.w = 0;
  this.isVisible = !1;
  this.rows = 10;
  this.p = .12;
  this.changeDetected = this.pressBool = this.isMousePressing = !1;
  this.init = function() {
      xzu598 < 1.25 * xzu599 ? this.w = Math.floor((xzu610 ? .8 : .5) * xzu598) : (this.h = Math.floor((xzu610 ? .8 : .5) * xzu599), this.w = Math.floor(1.25 * this.h));
      this.w -= this.w % this.rows;
      this.h = .8 * this.w;
      this.isVisible = !0;
      this.isMousePressing = !1
  };
  this.mouseDown = function(b, d, e) {
      var a = (xzu602 - this.h) / 2;
      b -= (xzu601 - this.w) / 2;
      d -= a;
      if (0 > b || 0 > d || b >= this.w - 1 || d >= this.h - 1) return 0 ==
          e && (this.isVisible = !1, 0 == zto1208() && zto1230(0, !0), zto1216()), !1;
      a = Math.floor(this.w / this.rows);
      b = zto1496(b, a) + this.rows * zto1496(d, a);
      b = 0 > b ? 0 : b >= xzu619.nVisible ? xzu619.nVisible - 1 : b;
      if (0 == e || 1 == e && !xzu619.arrSelected[b] || 2 == e && xzu619.arrSelected[b]) this.pressBool = !xzu619.arrSelected[b], this.changeDetected = this.isMousePressing = !0, xzu619.arrSelected[b] = !xzu619.arrSelected[b], xzu619.createIndexArray(), zto1216();
      return !0
  };
  this.mouseMove = function(b, d) {
      this.isMousePressing && this.mouseDown(b, d, this.pressBool ?
          1 : 2)
  };
  this.mouseRelease = function() {
      this.changeDetected && (zto753(), this.changeDetected = !1);
      this.isMousePressing = this.changeDetected = !1
  };
  this.draw = function() {
      xzu594.imageSmoothingEnabled = !0;
      var b = (xzu601 - this.w) / 2,
          d = (xzu602 - this.h) / 2;
      xzu594.setTransform(1, 0, 0, 1, b, d);
      xzu594.fillStyle = xzu215;
      xzu594.fillRect(0, 0, this.w, this.h);
      xzu594.lineWidth = xzu266;
      xzu594.strokeStyle = xzu239;
      xzu594.strokeRect(-1, -1, this.w + 2, this.h + 2);
      for (var e = Math.floor(this.w / this.rows), a = (e - 2 * this.p * e) / xzu619.w, f = xzu619.nVisible - 1; 0 <=
          f; f--) xzu594.setTransform(1, 0, 0, 1, Math.floor(b + f % this.rows * e), Math.floor(d + zto1496(f, this.rows) * e)), xzu619.arrSelected[f] && (xzu594.fillStyle = xzu222, xzu594.fillRect(0, 0, e, e)), xzu594.setTransform(a, 0, 0, a, Math.floor(b + f % this.rows * e + this.p * e), Math.floor(d + zto1496(f, this.rows) * e + this.p * e)), xzu594.drawImage(xzu619.cvs[f], 0, 0);
      xzu594.setTransform(1, 0, 0, 1, 0, 0);
      xzu594.imageSmoothingEnabled = !1
  }
}
(function() {
  window.zto1221 = function(b) {
      xzu603 && console.log("mmeInit " + b);
      if (0 != zto1208() || 3220 != b && 3226 != b && 3228 != b) {
          if (0 == zto1208() || 2 == zto1208() || 4 == zto1208() || 5 == zto1208() || 9 == zto1208()) return;
          if (6 == zto1208()) {
              if (zto1193(), 4211 == b) {
                  zto1251(0, 0);
                  return
              }
          } else if (8 == zto1208()) {
              if (2 == xzu139 || xzu137) return;
              zto872();
              zto1263();
              if (4211 == b) {
                  zto1251(0, 0);
                  return
              }
          } else if (7 == zto1208()) zto1243();
          else if (3 == zto1208() && 3203 == b) return
      } else zto1263();
      zto1207(3);
      zto1505(!0);
      zto1174();
      b = 1006 == b || 3202 == b ? "No Server Response" :
          3220 == b ? "Invalid Username" : 3221 == b ? "Lobby Spam Error" : 4207 == b ? "Lobby Timeout" : 4211 == b ? "Please reload the game." : 4212 == b ? "Please upgrade the game." : 4215 == b ? "Username reserved by the creator." : 4216 == b ? "Server Lobby Spam Error" : 4224 == b ? "User already exists." : 3226 == b ? "Timeout Error" : 4235 == b ? "The Creator banned you." : "Error " + b;
      zto1169(13).txt = b;
      zto1216()
  };
  window.zto1223 = function(b, d) {
      14 == zto1184(b, d, 13, 2) && zto1224(b, d)
  };
  window.zto1224 = function(b, d) {
      zto1261(600);
      zto1183(b, d, !1);
      zto1216()
  };
  window.zto1225 =
      function() {
          zto1178()
      }
})();
(function() {
  var b, d, e;
  window.zto1226 = function() {
      d = "rgba(0,0,0,0.6)";
      e = xzu234;
      void 0 !== b && zto1230(0, !1);
      b = [];
      var a = Math.floor(.2 * zto1169(0).h);
      zto1227(zto1169(0).w - 13, "", a, 3)
  };
  window.zto1227 = function(a, f, c, g) {
      b.push({
          input: document.createElement("INPUT"),
          isVisible: !1,
          color: d
      });
      var h = b.length - 1;
      b[h].input.setAttribute("type", "text");
      b[h].input.value = f;
      b[h].input.style.font = xzu253 + c + xzu255;
      b[h].input.style.padding = Math.floor(.3 * c) + "px 5px";
      b[h].input.style.textAlign = 0 == h ? "center" : "left";
      b[h].input.style.backgroundColor =
          d;
      b[h].input.style.border = g + "px solid " + xzu239;
      b[h].input.style.color = xzu239;
      b[h].input.style.position = "absolute";
      b[h].input.style.width = a + "px";
      b[h].input.readOnly = 3 == h;
      b[h].input.addEventListener("input", function() {
          0 == h && zto1266()
      })
  };
  window.zto1228 = function(a) {
      return b[a]
  };
  window.zto1229 = function(a) {
      b[a].input.style.left = Math.floor((xzu601 - (zto1169(0).w - 3) - 7) / 2) + "px";
      0 == a && (b[a].input.style.bottom = Math.floor(xzu602 - zto1169(0).y + zto1169(50)) + "px")
  };
  window.zto1230 = function(a, f) {
      b[a].isVisible != f &&
          ((b[a].isVisible = f) ? document.body.appendChild(b[a].input) : b[a].input.remove())
  };
  window.zto1231 = function(a, f) {
      f && b[a].color == d || !f && b[a].color == e || (b[a].color = f ? d : e, b[a].input.style.backgroundColor = b[a].color)
  }
})();
(function() {
  function b() {
      h++;
      zto1128(h);
      k = 100 > h ? setTimeout(b, l) : -1;
      zto1216()
  }

  function d(q, t) {
      zto1448(q % xzu633, t);
      zto1169(15).txt = "Map: " + zto1471(xzu630).name
  }

  function e(q, t, u) {
      t = xzu598 / t;
      u = xzu599 / u;
      u = t > u ? t : u;
      xzu594.save();
      xzu594.imageSmoothingEnabled = !0;
      xzu594.scale(u, u);
      xzu594.drawImage(q, 0, 0);
      xzu594.restore()
  }

  function a(q) {
      if (r != q)
          if (4 <= g++) zto1221(3221);
          else if (!q || xzu632) r = q, zto1600(r), zto1169(16).colorBg = r ? xzu216 : xzu233, zto1169(17).colorBg = r ? xzu222 : xzu216, zto1216()
  }
  var f, c, g, h, l, k, m, p, n, r;
  window.zto1232 =
      function(q, t, u, v, w, z, x, A, C, H, F) {
          zto1207(7);
          zto1548();
          zto1114();
          zto1107();
          m = q;
          n = v;
          p = !1;
          f = ["Joined", "Skipped", "Multiplayer", "Singleplayer"];
          c = [x, A - x, C, H];
          zto1126(w);
          zto1126(w);
          g = 0;
          r = !1;
          zto1130(z, x, A - x, F);
          zto1151();
          zto1233();
          h = 100;
          l = 25;
          k = -1;
          d(t, u);
          zto1216()
      };
  window.zto1233 = function() {
      zto1169(20).txt = zto1129();
      zto1169(21).txt = "Progress: " + m + "%";
      zto1169(16).colorBg = r ? xzu216 : xzu233;
      zto1169(17).colorBg = r ? xzu222 : xzu216
  };
  window.zto1234 = function() {
      return m
  };
  window.zto1235 = function() {
      return n
  };
  window.zto1236 =
      function() {
          return p
      };
  window.zto1237 = function(q, t) {
      c[2] = q;
      c[3] = t
  };
  window.zto1238 = function(q, t, u, v) {
      g = 0; - 1 != k && (clearTimeout(k), k = -1);
      zto1116(0);
      zto1135() ? (zto1207(8), zto1505(!1), xzu272.keyUp(), zto870(n, zto1127(), zto1138(), zto1139(), !1, !1), zto1132()) : (zto1162(), n = u, zto1126(v), void 0 == xzu660 && (xzu660 = document.createElement("canvas")), xzu660.width = xzu624, xzu660.height = xzu625, xzu662 = xzu660.getContext("2d", {
              alpha: !0
          }), xzu662.drawImage(xzu626, 0, 0), d(q, t), h = 1, k = setTimeout(b, l), zto1169(20).txt = zto1129(), c[0] =
          zto1133(), c[1] = zto1134(), zto1239(0))
  };
  window.zto1239 = function(q) {
      p = 5 > Math.abs(q - m);
      m = q;
      zto1169(21).txt = "Progress: " + m + "%";
      c[0] = zto1133();
      c[1] = zto1134();
      zto1418();
      zto927();
      zto1216()
  };
  window.zto1243 = function() {
      zto1543(3203)
  };
  window.zto1244 = function() {
      a(!0)
  };
  window.zto1245 = function() {
      zto1167();
      zto1179();
      xzu594.textBaseline = xzu246;
      xzu594.font = zto1169(19).font;
      xzu594.fillStyle = xzu239;
      for (var q = 0; 4 > q; q++) xzu594.textAlign = xzu251, xzu594.fillText(f[q], Math.floor(zto1169(19).x + .06 * zto1169(19).w), Math.floor(zto1169(19).y -
          .04 * zto1169(19).h + (q + 1) * (zto1169(19).h + .08 * zto1169(19).h) / 5 + .1 * zto1169(19).fontSize)), xzu594.textAlign = xzu252, xzu594.fillText(c[q].toString(), Math.floor(zto1169(19).x + zto1169(19).w - .06 * zto1169(19).w), Math.floor(zto1169(19).y - .04 * zto1169(19).h + (q + 1) * (zto1169(19).h + .08 * zto1169(19).h) / 5 + .1 * zto1169(19).fontSize));
      zto1120();
      zto1113()
  };
  window.zto1246 = function() {
      100 == h ? e(xzu626, xzu624, xzu625) : (xzu594.globalAlpha = 1 - h / 100, e(xzu660, xzu660.width, xzu660.height), xzu594.globalAlpha = h / 100, e(xzu626, xzu624, xzu625),
          xzu594.globalAlpha = 1)
  };
  window.zto1249 = function(q, t) {
      if (zto1118(q, t)) zto1216();
      else {
          var u = zto1184(q, t, 15, 4);
          18 == u ? (zto1243(), zto1261(1E3), zto1183(q, t, !1), zto1216()) : 16 == u ? a(!1) : 17 == u ? a(!0) : zto1152(q, t)
      }
  }
})();
(function() {
  window.zto1251 = function(b, d) {
      zto1207(5);
      zto1183(b, d, !1);
      zto1216()
  };
  window.zto1252 = function() {
      zto1182()
  };
  window.zto1253 = function(b, d) {
      26 == zto1184(b, d, 26, 2) ? zto758() : (zto1261(), zto1183(b, d, !1), zto1216())
  }
})();
(function() {
  function b(e) {
      e = 0 > e ? xzu633 - 1 : e >= xzu633 ? 0 : e;
      zto1448(e, Math.floor(16384 * Math.random()));
      zto1169(6).txt = "Map: " + zto1471(xzu630).name
  }
  var d;
  window.zto1254 = function(e, a) {
      zto1207(2);
      d = Math.floor(16384 * Math.random());
      zto1169(6).txt = "Map: " + zto1471(xzu630).name;
      zto1183(e, a, !1);
      zto1169(9).txt = zto1129();
      zto1216()
  };
  window.zto1255 = function() {
      return d
  };
  window.zto1256 = function() {
      zto1177()
  };
  window.zto1257 = function() {
      void 0 != zto1169(51) ? zto1172() : zto1261();
      zto1216()
  };
  window.zto1258 = function(e, a) {
      if (void 0 !=
          zto1169(51)) {
          var f = zto1184(e, a, 0, xzu633); - 1 == f || f == xzu630 && !zto1451(f) || b(f);
          zto1172();
          zto1216()
      } else if (f = zto1184(e, a, 5, 8), 5 == f) b(xzu630 - 1), zto1216();
      else if (6 == f) {
          var c = [];
          for (f = 0; f < xzu633; f++) c.push(zto1471(f).name);
          zto1170(6, xzu630, c);
          zto1183(e, a, !1);
          zto1216()
      } else 7 == f ? (b(xzu630 + 1), zto1216()) : 8 == f ? (zto1124(-1), zto1169(9).txt = zto1129(), zto1216()) : 11 == f ? xzu632 && zto1191() : 9 == f || 10 == f ? (zto1124(1), zto1169(9).txt = zto1129(), zto1216()) : 12 == f ? (zto1261(), zto1183(e, a, !1), zto1216()) : (f = zto1184(e, a, 32, 2),
          -1 != f && (zto1169(f).colorBg = zto1169(f).colorBg == zto1169(5).colorBg ? zto1169(6).colorBg : zto1169(5).colorBg, zto752(zto1169(32).colorBg == zto1169(5).colorBg, zto1169(33).colorBg == zto1169(5).colorBg), zto1216()))
  }
})();

function zto1260() {
  this.s = 0;
  this.y = this.x = null;
  this.w = 0;
  this.wins = [];
  this.init = function() {
      this.wins = [];
      this.wins.push(new zto1220);
      this.wins.push(new zto1188);
      this.wins[1].initColors();
      this.s = 2;
      this.x = [0, 0];
      this.y = [0, 0];
      this.w = 0
  };
  this.refreshPosition = function() {
      this.w = Math.floor((xzu610 ? .0792 : .056) * xzu600);
      this.w += 4 - this.w % 4;
      this.x[0] = 2 * xzu265 + zto920();
      this.y[1] = this.y[0] = xzu602 - this.w - xzu265;
      this.x[1] = this.x[0] + xzu265 + this.w
  };
  this.inside = function(b, d) {
      if (!zto1282()) return -1;
      for (var e = this.s - 1; 0 <=
          e; e--)
          if (b >= this.x[e] && d >= this.y[e] && b < this.x[e] + this.w && d < this.y[e] + this.w) return e;
      return -1
  };
  this.isWinVisible = function() {
      for (var b = this.s - 1; 0 <= b; b--)
          if (this.wins[b].isVisible) return !0;
      return !1
  };
  this.keyUp = function() {
      return this.wins[0].isVisible ? (this.wins[0].mouseDown(-5E3, -5E3, 0), !0) : this.wins[1].isVisible ? (this.wins[1].mouseDown(-5E3, -5E3), !0) : !1
  };
  this.mouseDown = function(b, d) {
      if (this.wins[0].isVisible) return this.wins[0].mouseDown(b, d, 0), !0;
      if (this.wins[1].isVisible) return this.wins[1].mouseDown(b,
          d), !0;
      var e = this.inside(b, d);
      return 0 <= e ? (this.wins[e].init(), zto1263(), zto1216(), !0) : !1
  };
  this.mouseMove = function(b, d) {
      return this.wins[0].isVisible ? (this.wins[0].mouseMove(b, d), !0) : this.wins[1].isVisible ? (this.wins[1].mouseMove(b), !0) : !1
  };
  this.mouseRelease = function() {
      for (var b = this.s - 1; 0 <= b; b--)
          if (this.wins[b].isVisible) return this.wins[b].mouseRelease(), !0;
      return !1
  };
  this.draw = function() {
      if (zto1282()) {
          xzu594.imageSmoothingEnabled = !0;
          for (var b = this.s - 1; 0 <= b; b--) xzu594.fillStyle = xzu215, xzu594.fillRect(this.x[b],
              this.y[b], this.w, this.w), 0 == b ? this.drawEmojiSquare() : this.drawColorSquare(), xzu594.setTransform(1, 0, 0, 1, 0, 0), xzu594.lineWidth = xzu266, xzu594.strokeStyle = xzu239, xzu594.strokeRect(this.x[b], this.y[b], this.w, this.w);
          xzu594.imageSmoothingEnabled = !1
      }
  };
  this.drawEmojiSquare = function() {
      var b = .06 * this.w,
          d = (this.w - 2 * b) / xzu619.w;
      xzu594.setTransform(d, 0, 0, d, this.x[0] + b, this.y[0] + b);
      xzu594.drawImage(xzu619.cvs[4], 0, 0)
  };
  this.drawColorSquare = function() {
      xzu594.setTransform(1, 0, 0, 1, this.x[1], this.y[1]);
      for (var b = this.w /
              4, d = 3; 0 <= d; d--)
          for (var e = 3; 0 <= e; e--) xzu594.fillStyle = "rgb(" + Math.floor(367 * (d + 1) * (e + 1) % 256) + "," + Math.floor(687 * (d + 1) * (e + 1) % 256) + "," + Math.floor(651 * (d + 1) * (e + 1) % 256) + ")", xzu594.fillRect(d * b, e * b, b, b)
  };
  this.drawWindow = function() {
      for (var b = this.s - 1; 0 <= b; b--)
          if (this.wins[b].isVisible) {
              this.wins[b].draw();
              break
          }
  }
}
(function() {
  function b() {
      0 == zto1208() && (a = !0, d())
  }

  function d() {
      if (a && zto1271()) return zto1231(0, !0), !0;
      zto1231(0, !1);
      return !1
  }
  var e, a;
  window.zto1261 = function(f) {
      a = !1;
      zto1207(0);
      zto1174();
      zto1230(0, !0);
      zto1229(0);
      zto1505(!0);
      d();
      setTimeout(b, void 0 === f ? 80 : f);
      zto925();
      xzu272.refreshPosition();
      void 0 === e && (e = zto743(), zto1228(0).input.value = e)
  };
  window.zto1263 = function() {
      zto1230(0, !1)
  };
  window.zto1264 = function(f) {
      return 0 == f ? zto1169(0).w : 1 == f ? Math.floor(.3 * zto1169(0).h) : 2 == f ? zto1228(0).input.style.font :
          e
  };
  window.zto1265 = function() {
      return zto1264(1)
  };
  window.zto1266 = function() {
      e = zto1228(0).input.value.trim();
      zto750(e);
      d()
  };
  window.zto1267 = function(f, c) {
      var g = zto1184(f, c, 0, 3);
      2 == g ? zto755(f, c) || (d() ? (zto1263(), zto1254(f, c)) : zto1221(a ? 3220 : 3226)) : 0 == g ? zto755(f, c) || zto1268() : xzu607 >= xzu608 && (g = zto1184(f, c, 29, 2), 29 == g ? zto756(6) : 30 == g && zto756(7))
  };
  window.zto1268 = function() {
      d() ? zto1282() ? (zto1263(), zto1191()) : zto1221(3228) : zto1221(a ? 3220 : 3226)
  };
  window.zto1269 = function() {
      zto1175()
  };
  window.zto1270 = function() {
      return e
  };
  window.zto1271 = function() {
      return void 0 !== e && zto859(e)
  }
})();
(function() {
  function b(c, g, h, l) {
      a[c] = g;
      e[c] = new Image;
      e[c].onload = function() {
          if (0 < h) {
              var k = document.createElement("canvas"),
                  m = e[c].width,
                  p = e[c].height;
              k.width = m;
              k.height = p;
              var n = k.getContext("2d", {
                  alpha: !0
              });
              n.drawImage(e[c], 0, 0);
              var r = n.getImageData(0, 0, m, p),
                  q = r.data;
              if (3 > h)
                  for (var t = 2 == h ? 160 : 600, u = m - 1; 0 <= u; u--)
                      for (var v = p - 1; 0 <= v; v--) {
                          var w = 4 * (u + v * m);
                          q[w] + q[w + 1] + q[w + 2] < t && (q[w + 3] = Math.floor(255 * (q[w] + q[w + 1] + q[w + 2]) / t))
                      } else if (4 == h)
                          for (u = m - 1; 0 <= u; u--)
                              for (v = p - 1; 0 <= v; v--) w = 4 * (u + v * m), 20 > q[w] && 40 < q[w +
                                  1] && 10 > q[w + 2] && (q[w + 3] = 255 - q[w + 1], q[w] = q[w + 1] = q[w + 2] = 0);
                      else
                          for (u = m - 1; 0 <= u; u--)
                              for (v = p - 1; 0 <= v; v--) w = 4 * (u + v * m), 0 == q[w] && 0 < q[w + 1] && 0 == q[w + 2] && (q[w + 3] = 255 - q[w + 1]);
              n.putImageData(r, 0, 0);
              e[c] = k
          }
          d--;
          zto1282() && (xzu619.init(), zto1204(), e[13] = f, e[14] = f)
      };
      e[c].src = l
  }
  var d, e, a, f;
  window.zto1273 = function() {
      if (void 0 === e) {
          d = 15;
          e = Array(d);
          a = Array(d);
          f = document.createElement("canvas");
          f.width = 1;
          f.height = 1;
          for (var c = d - 1; 0 <= c; c--) e[c] = f;
          b(0, "exit", 0, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABGCAYAAABWgGNsAAAC2UlEQVR42u2cPWhTURTHfyeJtuDkULFKpFsHEQQRP5A6+DX4gVkKCkIdipvoIKIiIk6CiIpOUnAToSAiOBZ000UnxUXEDxActGCLWpPjkAsVoa9p323yXt7/D5lCuDe/nPs/5553b4wMy93XAJ/JoUoZn99ycqoSUmHBusBKAiuwOVUl5/P38LIOjFvqZrAPgQsdGLcfmOhmsN+Bt2bW1srB3afksUpeSl7t1CRwMGGTMB0Sl+unjOt11qFxqz6Pcm0F7U5a8liBFVhJYAVWYBdbCrl7j7sPCGw8oCVgPXATGBLY9EANWA2cAV4Bo0XdFcXc0q4ADgBXgSrt75F2F1h3rwDbgPPAvqIDTQ02LPtB4ARwSihTgg1A+4Bh4AZQFsYUYEOm7wX2BB8dbPGjZYFNhroJOAccVjymABuWvAHrgo+eVWJqXZYAdSVQA24DPQWB+sTM9rewgqvAhwVFrLv3AjuBS8AW9RNSWoG7l4ENwGngmJZ9SrAhMa0FRkKUqnyKFLHDwHWapzukSCoBz4F76BFydLDvgYvAVmBcgCOBNTM3s7qZvQhJq0az5SeljNjZotbsJ/AY2AucBH4IUQSwAW7DzL4Cd8I29hbQEKrIcveKuw+5+yNfnEa6kEn6I0Zm9sfMngFHgSPAGyW4RVhBAuAp4AGwi2aXa0aAI4ANcB34AlwDNgJ3mb0HMJfqAtsi3FCevQ6Vw27gqaI3Jdj/IP8yswmaze9R4JOQRgD7D+BJMxsDtgNXVJ5F7rWa2UfgMrAZuF9kwNGb2GZWB14Cx4FDwO9OHWnv5s2FufuyIm4QlvTWTCjPZmQFksAKrMBKAiuwUco1S3o/q3PP+iXlPqDmPmd/55u7j5uZnnAsMGIH3L2RUIePdSJqu/6Ssjy2gMr7f8L0AzsSPHiptGre7XzWPRZ4lzBP78D3aGnMvEesZXVMeaySl8BKAltssCaw8TWd14j9C8P7rk/ARkV/AAAAAElFTkSuQmCC");
          b(1, "victory", 0, "data:image/png;base64,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");
          b(2, "defeat", 0, "data:image/png;base64,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");
          b(3, "sword", 1, "data:image/png;base64,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");
          b(4, "ship", 1, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAMFBMVEUAAQAaHBknKSY2ODVISkdWWFVkZmN3eneDhYKYmpenqqa1t7THycbY2tfl6OT9//xSukcJAAAEwUlEQVRYw42YTYgcVRCAe7azP7ObLIvgRQXHs4Jz10NOIqhxLwoSxTnkIgnJXhXjjgcPIRL3EoiHJONBkkN0RmI0YEgHfxKJ4CzEH/Bne1HIxsROi2J2MtvdlffX3VXvvX4zxS4zr7u/eVX1qurVa8+zyEtn1uIYbkdfvOONJ2+sQSHJ52MAMxeByN9Lo4i9MWiSnXMTbwri9nfH9jziP/X6Gcl/6yLe5U+k5xv5uHZYQD9XE/v4/as78aVtx/m1z6qIWa55cdfPreNXexW+Ctm9lWL4dPFL7Hpq9xvzbtYph6fK2ZlBQxvxLFPgLNJyo/z+KGO+MYnpkHpm/yb2PVOtbSBHAG6hoR9ixOsC/KUTdfY7K2j8ABBkJiZ2CjkBcBmPlynCl+ymMUmCl3BbqCF+X5+GWdLTVpUi3pxmzXQMW+SBkwbiBZBhpz2nTTLZNxE2zY9o2IeE3H4ITIQ+xDT/StfLRJ4E6CDj0xbRC2zIVAyDYhBqS/uYFfHegxTp1dOcI5GakU/5cwdKOne5RGYbugOuF9+oEi+DQupaWL2V+2xG06sWFMgNY2lkdm6HrEmiFgoko/nrx7CqgpZm6a4SwWkq12ugTFk3/aWQrQVya14aMwWwQlwZIwTaupsXhU2ZTS+F/Ec1k56ap3E/0SXIVlNTelWEwR29ZCIEPiHIAWF/AJfwxf0acpcgO4T9MXRo0lOEltZZbvg0wE6bXjkCP5CNAKDFnkn15KLIkCxNzFy2gzjMDw2ErlqXWT6PUg3rVSLXaZr9470Kf5ArJpJhzR6G/5ny6zZ/IYQsDVeqi5flQbAheGm2M9P7OL9OWpFkCWdZwqpL6ZEpsCLwNa73KXN0Gxc3K5IsoJTNGNKy6oUR9KtMEU8mjSxGUIUMcMSwWRpWvQiSFmHoi1kWyspWhajCIvOS/5VbaCVS7JM1gTS1pLchkC/NhLBF6VnrupBzyHzInVwHF5I0cidn5VI+70TyGOFLGarU9/tuZLMMmEAhs+BG0sUiLAPl84MjEPhSBf+Q5eG6lvQVyFCl2F1W//61+ctEZA/5OEtkVS6OjETgT1kc1kVmskWNRyPDpqrjc6L0Gf6yIPCBaBE6qsAe/z2Kovw/Ep+sHa3jcRSdF/GyxEvmije2iDLOsmR1fESW42W6JblFbknaxueWQCy8vr06Re5fk7Izu/+FEbIo16LlFfZPXVxzym+tslVgMTDU9gmbDOSGtJm3PQ17AICWlaztuZQXyZ46ClTLVkM2V+3ccxuq26qWT2VPlRTdgfg2GTuQRdm23imbuY49ZwrZwM9JemDPTJqRJ1CLsAwZ9/pEUIXIxi2EG3i3v8Y/n6lCrqnzXc84AVQ5QLb3ATlLvKJ+YNmObFoOIzPqyFN/3ypvqyPPknZ667nDfk7v5uoxJE0X4Qf4/CzkY4CfXMg+fRIxTdauJuqhMYmwZujKefPAK47VV6qIg/YTPzu1ZGftxBNgPbyLFMushZOfAm5Wv4jo2Im0wjVzMX7dkctuHngd50uVX+hLlY/4tcuOlz0ibk8XjdDE4XC81z2Q/Xp6T/O+Fw9dkMlwxR19u42dOftw5Muu7ylxqz1Gdd+LoOjUmFvCaxf4i7gsunrUdvceYF1Q/xkgPxMAAAAASUVORK5CYII=");
          b(5, "crown", 0, "data:image/png;base64,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");
          b(6, "arena", 0, "data:image/png;base64,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");
          b(7, "territorial.io", 0, "data:image/png;base64,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");
          b(8, "youtube", 0, "data:image/png;base64,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");
          b(9, "googleplay", 0, "data:image/png;base64,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");
          b(10, "discord", 0, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAwCAYAAABnjuimAAADIElEQVRYw+2ZTYhVVRzAf+fpjI4WudHZadFIhimk4OhC3bgRZmEfuGwR0UIykApaCm4UQgUdGUFQciNBSuDHUAhqTG1KGasxyMnEARG/UEMlG39ujnC5vHfn3vfh3IH3hwfv3nP+5/9755z/xzkvEEVdCHwGrALmMLnyELgA9IcQhkhAblAfWj55qn4JENRXgd+B2ZRX1leAzSWHBPiiEvdk2WVVZQrMJkBXhSkibdA2aNllegO6V4BB4BbwPvBmRjrcBnQAq4G1QGdRY0EdBpYW0BkEtgMzgU+BnpiXR4FrwIPEJHQDC4HlwBgwAJwHPga2FKkpioDeBj4C/gE+AP4GvgshXMtjSJ0HrAcWAd/GH3UA6CPnAMM5C4RN6gL17Ub3m7pYfU2drd7MYzwv6C21qxVOom7LA5rX6w+FEB61yKH3A+PNCk+HWhV2QghjwOlmgI4Af7Q4TH7TDNDjIQRbDHpyouXPA3oqwxE+UX9Vj6tvVGl/We1XL6p71Vk1lv96PGXUHZ4eqa/U0NuY6ntVnZHqczjV50AGx55GvH40hHCvRts7qef5wLKE4c4Y4JPyboatXxpZ+t8y2h5UeXc/8X0cSIe0fzPGu9gI6OWMtv5YcCT38khi340DO1M6OzLGGwOe1Fs9Xc+If8Pq8lg53QAOp6NDCGGX+iewEhgKIXw/QS3xOFZZhZ1pY6pvRV3QhLT5/D4h/f5Gvc7UmZqhp8Bb6k61pw7A6WofsK/GHn9Sb3j6S+2uorNEPRs/m9VF6dCUiqVr1B3qJfWragWOurXR6mk07sVqEH3xfkj1jjqinlEH1R/VyzEWG9/NrTJGV0wGTSnz/lcPqr0JAx3quQIXXv+paxP63XE1ruZRLnoUEbgb011n9OYicgf4KR5PXi9yZqvnzNQ+LrdB26A1QJ0qoFcm0f7XRUCPTCLoEPB5rlWNFdGJSfp75lhk+DBmv9opNJFvBybq3AK5r3ZEhvfUxzVTaGp2u4EVwIwXuPw/PD+XqeuAY8BLpfdutbfaxVlZYXtiiVhu0Ag7V/259KARdpZ6tPSgEXaauvsZSeWzV76U/QcAAAAASUVORK5CYII=");
          b(11, "theme", 2, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABrCAMAAAC/gXfJAAABLFBMVEUAAQAQEg8WGBYdHhxwBC6GDDEtLiy+IhCqKSl6N2FLTUsAZHLQKEi7NVXNNwsJbn3kMVFzXHgMe4uvTV+ZUYS0UyJmaWfhUQZBeYlWc5ABjKqHb24Xj6HqYQPdZR3RZHyAgX5BlJUWnsNRj6IZoLTscAHbcy18iaPMeEi3dq7EeWBllZulgKxYnbKSkIwAtu6+iYkqs8byiA6OqjzmkT7Gl3ZxrcBttZSipKD0lhk0wu+Nq8aOtzVSv8i5p4OWrrWTspWGs71ovcHHqWJQxe33pCWLwYHerEufvmmvtK+Zw1GbucSaxT6iuL33sTF8ytGtwZF2zfOszEPAyVmqxtCux8rBxMDJw7K6x8zFxby/00vM2MLS1tLK2NvT2Nvd4+Tf6NLn6+zv8/P7/ftmBGm9AAAP+ElEQVRo3uVae1/TyhatolWKWimeUmLhBFrkUVKpSk6glBoeYgzhZZKTq5kMM/3+3+GuPZMWlIfHo3/du+fXn6VN19pr7z0zexILhf8PK5pezIXUQ/I0dqr3fh+6GQvBkyQIYpZi0Lsk4zJ1Sr8DveoJnjr9fsIEfB+QScFZ0G8nGTjGftX5TLL++34/iBjnQ3wiYGHQByuX3q/IMFORBH231XAjnykGcABfAD8M7JbbD4JMxsV/CV9CCAK/26rX624YhYxTjCThc86iIKrXK42WH4SZ9O7/G/w1GQeuO1+vYMwDL4IGRi+MJPEjX31Tsd0g4Lz687nlIohcq1LXFiZRFMD6fj/oB34IRTZ9XiEVQcBk/JP4bcmCsKV8VLZLOe32RxYEof4CVxh1tx/x7KeS7VH0Gxq9SaPZs304n5BBR+DuNmH4RrO4qDL5E2GKRRS4I++Bs9C0UadBwnjGs8zLMubaV/ARJz9KpPlP8TORRG7FGPpPZnPJwzCh1UKwBBUlw97CVQ0NP0kG7X+Gj+IPbfLfyPGBxMRJp2MlguYZdzvN3olwO5cMuLrmJols/7P4JJGVx4ec72D0OOt0OnaipjL38f5E4BN8c8lBDIPqP8lvlLyvVJQCFX3icElAp5MNFcBEpPAXFL6aETUnSWXpH9RntLc38n+BUDqdUBJBL0x0GeH9Pue9jtYwjFLt1d+Y7T9YxUtI4cXhnopQcxihTsdHxG0XeaTVmkW+3esw1lu4EiNSMLv8HybiHyb46/Hx4ZX4KwsjP2CZyHccwbPE95Oe+upSg7k4u4rpcGeil2SSHB4fH88rhgXFsAAUN0g4SnRAg9ZrDoqgN8Rf0DF6OTs7u4Ft447FtTRgrEUE7ym/un4AstUJEFy1GwBZUQiRJbaNb4gjj9Ly4uziy+jOIMXYqSp7INjTEWrmEfK1/8CX+kUaWGCPYtQkDa+g4GWDpYNbK6kqGWtU3h9TjPCb+dPD471deHkSZNgL1BRQ3utdkyd+byvXYIGhNQsFtYqP5eT2KZb65UoV+IfvoWDn+PjgYA/V2UeEtIIUm1ok9a6ZJf2TK1loUgrmKuX5hN22KJUGWVbDDKMYHUIBJePgYLdj+/0sy3d8tBRaACkI/H0ocFUlNOvLULBaqZT9VKR3ZAD2npB3mvOHhP9utxP0E8rBsKcYUC3Rrpn0sWaYy3OvXjZVhCgF+HmN3TKf7wuWtmiNIOTj46ZFSg4Om7s7CNFlT5H3FSJDofq91iJFvg2Gl/h3bh4KKsEthdSWWVSuzCzNNHaIYK+5uwcFO51lECQZG2nQfUWuYIf8nl1FRczRvxSAcgs1fVO7hK3ErSytraysNZSE0/nO+8ODvZ2DHZ92mrynGOFnLICC9VlSsNxpbqgaMl+Y5UoZMbohzWMyS2szK7C1JVTqIZXS7s7B5sHm39iCtQK1Vgzx0TEFnf4sMew0KQOLy1NPnj+fKpddxm+IkUkRWiL8lbW6knCsqmjzYIeyzDLNoAz4GRZV3+91Vml9aHZeUS5ePiebKrcwbW6soX5lhvBB0L+Cv7nno0dMMoQQHBg8x4ew+Q5c3+nsLsP/6dXJ509B8LRcZmxwfUHiLOuXa2taQff0kmFzI+wHmmFo2PRRQ33fm1tenp1rOXOLs3Ozr1pruYJylAnvWpEO0mxlqVyjJCw11qK9SwWHARoWdCwZY6SC+ooEE67f99en52ioSto5O/NXnjx/8nyyUoqz60kwJcvge60CERjuyYhhc/M/OkaKQVmSqe4oXJ+bns3xN87Cs7Pun0+mJiu1P/9ETVybBdjKVAUtzSBMK25v9zBX8G5zh8JNeyWLGVmO7wer09NgUMM7I1ubrFSqT5+DQFxf6HisarR/4oOhe7IbjRTs5THCbkkqKD4eOP1gbnqaNJACXxGsT72cojxkbDB2vYiUgu7JyYnbXen2Tno7eQ42lyPVjSoNybB7xCfr07nNTv+xpAimnsCeP4GCa41kyrk7s7a2Fp6EYABP72RtI1ew6anTjO5MiSPQEdpQ6JTn1cdTXYqQxl8/Y9e35pSz1kS5BgG7wIaC3V73z0Odgzd72uMgiZJQodOf771H08/UmF7f706e7Z+9IPwnL0AVMvE9gWC8VS5XaifE0F2xT3q9pZX1Q63gXeyrLGgVyn907OsanfD39+F/d+rJ06frBH/G0msEKSMF5YoF/3vdtd1er9d9sbKscvDmzU5ICogjUKb0rGr/n63uazuz7e6ZNnaDgpS7tTJtB73eiU34PRtJf6cUvHkXaUwynWE/cHL8uRf7W1uaYT/Ht27OQXSyOz+PDq1F6J1ex36x8mJV5eDNq7/9QJ9s1MBZxw+nnml7OL5Ftq9IzrbO9veNiei6gjTjEeLf00MzQMGLQ/gPhnexijsxaIvWNfz044fjZxpfM+xb5fIEdoTqtXmQMiCr2Ch0GPBX/qQIwTYiv3/FAu8PTfDo4cPJra2hhq39hQrwa8n1eRCLjJ3s7u5e+t/rrCFGK+8Uw+IbL8w1KB2BFjD37PElAfAt7JiwWsqudV8OTu/WJbayxgvY6huFv4i5QBq6+ozpPXqmx4OHD2Zeb+mxUCf8iYmJVnx9LcJqmtbK8/O9KzHaJYKpzZzhbzDk5+QAGSZ0itCDhzM5/hbhKwb0UddW0+IgxUTATKg3c/9hS8TwSuMvLkeKAa8gXH+UK3j84MGD1zBiaKqeAvil5KZNmfM0mKAAYiYo//GygD+uYkQcO2GAPPhhEAXLwwg9fPBgMsffqugIlSeqmGfOTXtyNKEZKsOuuTP5YpxipBQsbgSRHwUhXt4jbc8eQcDMa20LlRx/opWlsnhD35XyGjEgjvUhQ2McDG+GDFEEfGJpD/F1hLaUhvowQhPRjV1FEVl2J64wqPPHzPj4+Lsc/5UXqhxEvvNoaN8I0BmeqEU39kW0WLAaFFKM6jl+pz45Pr6sc7C4EerFKAi9x8BWrwfjC2cqA68X5vUcQIRYdmMDb0pdR0pDXZ9bms3a+IPlXIGndzWse8HLkYKhgNf13H+KEBM3tu+Cp9FEzlDJFTSbk+N/6ByoFpXuSUVJP5h6pDQ8Hhvib40iBAHXuyJ9xue0J+QMzc5QQ1Er2AjUSZM6uzTqqyA9evRwYYHCr1Kg4zMxEdxYQ/qEk1Kl6lptDvFxdCEFCl/1pYLutwSa4eVrXUOwcl6jNXRn6a1nNJa1JopKQ37KJNsA/rIXRNQXIQcxnfUDXUlTwwi9Xsj9L0Xp7bemqujgWVlrqDdHGpZRp17gnZ6eflb28fPp6XuspyB4unCFQGW4jwxnt99pwZLqT2iG3H2cyN+92Tz4/OnLZ4wv6kX2+fPeH8jy64URgfod5kAibz/qj9HJSOe5MgxQvXX4eYj6nYHjUsFEVWUYe5l3161eHMUjLBjFiXLu//xfn87Pv5zfBI9Pzz92XtNMmHltUO5Qooyn9+6+3aUZcoImwd+M/4Xwv5yff7BzBRqf/eDWYBGzTaeB4Oc/nB+da4bPXz5/5z8YlB39tZAT4IT8w/tFhZcS062vFXw4Oj/6crsCpYEYPvUUAWYADifVJdMsFcbM+3fcU0vBUG7OfzoiG2nQKi4HoX/CoIv+AgH8xyELizKO7E56w45zeVcQJzC3NsQfot/m/7li+NCk+GSyhJ+zgS1F4t113xG5+nC0fel/HqXz0Rhm+DxXsH304WsK16tq76WDKLurWBPJT49yG2Xh/Hx7++2Hj6cfP77dfjvCh//n+sKPXzU++nRJR2rvznunF5+2j7ZHGo7OP22/PT29uECHHGcpzvtfT99ub19Bp2tP8yWIy3SQijunG6aD/HR0BX/741eZeebw2HWv5MTi4utb9d2QYYhfKJWKePejG+WOPM0V4McfL7hXLFSdmNNqzUUam/gzln+/3c4zsP3pgv/kw6Iqv/iUw38V7XulWIjIt30/9EPXDZnMzELRk1/f6mtOBz/7BEQ9wzkl304vHPI2dCO6l5Y6npcOJPNdztuFaiqo2j5eCLPwL6yaXZwiOtX7iQh9wTHF/TDW7QfdvfMZrxbag1Pkx/u3jx3NlMN9wXyRVgupFYoBasPkVthibbTjrnTul2Ie/9oTR1P6cBjAqYtVCrttHOJvUaIUgLhY+EVrS1d4ooVF2EkaId3jSC3bShCqUioHAeO/+lA2CwfCdIQlqybzB1L0S8IaiEEbhRzUJQ9l9RcJzHQQimrM3GxMdi2be0iJV7hXTbnl21kh9n79eW+GHMNtXjAH+Z3rpFSVvj9gzPk9D8O5HwkQoGx81/V9241kijXZN3j1txAUStK1LDlgXczfOImx2PmhEObAEr/rkXs1kwPh4vCer3bVmChkEhd+mznCl843KxULB2n19xGgW/gW7T5WVvP34Req3nCxN6t5nBynWMrfjo3eFYul+8P/J3HVI3N015hPxiKj6V/MRDzWToUa3FErwpiDzp0LFZoi/VcIkZr0ZB7vJC1Ik+nwnUkXSm+0joiuUTcahmHUUd0NRsnz8K8j1FNvo26pCBU5s9Q1dC9IMLrel2ZVhrjCwGzE5MBHRsJLjrTruJCNViphDK0xcA2bzg+xa/geH33uiuKYCPM/LGk6zMCOwOouF24jFDw0/JS7dbzzDfS/BlxitsHiSwI/YjSEdA2L+vvMNvwYBC7tYXCcOR6rGzaTRGMJbtmiWoqZIZjBMLPjxGDCCNNSVXThpCWdMVO4xvBZCwiY1yarxt8piOjTzMKHwoLr2B54hKulETn05NNgVour6W5ZzKB92QkNZqi2y+RG6I0IdJqzauLWcwULUFA3mCoCvw6nSYaa2E3DHaguGhCRwdTNM8JN6MmKFxpnhj6DQGb6XQ5cDs+tqwqY5zgIuNEdIDT6d/iqLhyT9oqWFRq8qKeeQVtb0RP10DX0zRzPt74naIjkuxxY2F5sVAlPE8MQqshjFAsQaMW2OLIwlhMwk26x122kUVwn8FmIwb1RDuxvqoilbSgQKmfgbnBaPQxbZCxfU00wYY2yUa98SJC6Vn4eBBB32mbbNAteVKfcl6SBDCEHtu1SDfGS+iSDt1W4E8YZsxpMLI3JPJGx35AybFg8rSKinJaR+xJBuKwi1bPha+D4Assl/IVsA22cbBjzMm6noe1yZ6ytvvIY3KeZmrpKF1h97BAhzcGSaHTpoTKKmJnf5ACzGX1CaNQbboO8LIFA0rMLfBfmHqBZwR9palv0uEuIAW+4Io4FSh/pHahaHERgijl9M5xo9VGWZSmfsKEoocyJoBBf5kIZtlBJ/lTwsgaYf75vQSpqraL8jKClgY9ao44g5mEYJhgMbT2WrDCKRFqip5v62bAnw67VtbT5HPNJ0tUh1UWaidCyQ+k5nP6m/7cjHKwdls+uLOimk5v6qIQ3ql6K7bZue4pemqUpXhhx++oP2vexlmepVyrcc66AmF4WO4X/EfsveZcf6ul5edgAAAAASUVORK5CYII=");
          b(12, "insta", 0, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAA81BMVEVAS/l0QL6EPauSOqSVOMCfNretM7DPK5SAQbbTK4+3M5i3MqSJPsK6M5GQPbfILpy/Mo6iOp3VLYTHMYrZLX7bLnrdLnPhL2xlTsirP5ZyT8LjNGjAPnpbWc3kO2NOY9PMR2zpQlnATpDUUGHsS0/xTUfeW1vlW1DwWkb1YDzqakn3azDxbD7ac533dC6khcjzfUPofIf2fzP6gyi5jsDQjMD5kTT6lU3flrT7oj3uoJ3zoob7pU/JrNT+tEvhttD+ulr+xWDsxdrjy+Duytf+0G770qH00c350sD/2YD74cv648X35Oz27PT77uT/+/79//wAHNEKAAAAAXRSTlMAQObYZgAAA5lJREFUSMd1lmtD2kgYhafgFg11UyJJZEFXVsutYCkrGgOINam0CMT//2t6zjuTC72cDxiT55l5580koJTJv3s5k5z+g7yRvFN7+ZU+FRg5RN4xBwd7/JkZNBvYsId/Mwc6KX9WYE8LrIb/khSN00IyuFSAs2gjJ7m+jCX8NkvmQHiT57D0abFYRIUsF4tprWjlAob+FCXJ6y9JkmiaK4aXqqPf0MaJatVqVTsqxUsbubSNfspWhtlUq0ZR5EtIhNPbm5qOhVQtS/+ZbnEpquq8VUKXyjcYKMrgn4LBkqkxlObLOLdtZPRxGsuaLqeWhXIjqyCUyzVMcFNL4fd5guQ1GdlTTGHZthHK4FFR0sjpkyxc2tI+xuWpbVNRwtcWqIi4hgP0JtnGAQ6XLL9SQU2BLYYSvobzUYqPNuaGJJsRDHqVmPNIlPANCqaSINH3Vz4Dx3FOTo5OKFSMALxhPUHQRY9AJnEwGgUxj0YOcwThqWJTUeBRPIQn4o6z4bh1CefaiOBQOKogEMi/hxATJ0TeRer6n1yAYVdUo4HFssa47nqexwPPAy4fcrpeTwXOoRrAWy1eufB838e+CXzfMwnQbU5Vp+CIoY7/a7VaFyKcIyjiM/40fbHQgUSK43VHDEX8gsLqvN1uX1Jot6k2m34quO6TCI4IwC8vKXQ6V1dXaEzYltBhSR5XE6fCkSJ+2VlB6DI8gGeUlbQABmeoi6GId7TQQ0LchvDDB+2EbKusXreLhiKuB+5JdjR6PSohb1xTVp8JjiLeHVAYIv3+jJtoFXY64YpbAy2jwbbKDYEAfDD4JsJHZlbcfGgAW0xh6WqB+HBI4ZqhsUtfL7vPXAkNI8BQwlPYXZt8vJ6tdkmyW4U9rF4bfIBc1whjZIbpxxPGzIP6+v1+avh8smWPOGoIfDIZo4zZ/yamNBjSLQjctq4nUyjhJ5M1arpNDZmnYJxvzB7WglSCml7Xd7cSGpPCHO2Yj14m4CKpF3bleX5/ryWjwOiGfOvGfipo/PZ+vpZG7tbItywr9Etexk3ebxE0jsxfXv/4ul9h56aC0vj9w8PD8/oPOJ8QEdw6voFSHHl8fH5+kayzysLZQBrV9FNhLvgj8kXyKHmYI3eT8XioG4WbJyXxa7RIf/maStq4g1EU9Be14F8LMfPQgDDQAhbhpj8F9nGtaINTDHo9WUTOK6Wp7ya5AkEMLez/oPm+Fxr5FN3uVTvlfgD+QGjY9EyoDAAAAABJRU5ErkJggg==");
          b(13, "emojis", 4, "data:image/png;base64,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");
          b(14, "flags", 3, "data:image/png;base64,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")
      }
  };
  window.zto1280 = function(c) {
      return e[c]
  };
  window.zto1281 = function(c) {
      for (var g = a.length - 1; 0 <= g; g--)
          if (a[g] == c) return e[g];
      return e[0]
  };
  window.zto1282 = function() {
      return 0 == d
  }
})();
(function() {
  function b(q, t) {
      xzu661[q] = 0;
      xzu661[q + 1] = 0;
      xzu661[q + 2] = t;
      xzu661[q + 3] = 0
  }

  function d(q, t, u) {
      xzu661[q] = m[t];
      xzu661[q + 1] = p[t];
      xzu661[q + 2] = n[t];
      xzu661[q + 3] = u
  }
  var e, a, f, c, g, h, l, k, m, p, n, r;
  window.zto1283 = function(q) {
      g = 112;
      h = 200;
      l = 255;
      k = 240;
      r = new Int32Array(4);
      r[0] = -4 * xzu624;
      r[1] = 4;
      r[2] = -r[0];
      r[3] = -r[1];
      m = new Uint8Array(xzu135);
      p = new Uint8Array(xzu135);
      n = new Uint8Array(xzu135);
      e = 8;
      a = 255 - 7 * e;
      f = new Uint16Array(xzu135);
      c = new Uint16Array(xzu135);
      for (var t, u = xzu131 - 1; 0 <= u; u--)
          if (0 == c[q[u].color0]) f[u] =
              q[u].color0, c[q[u].color0] = 1;
          else if (0 == c[q[u].color1]) f[u] = q[u].color1, c[q[u].color1] = 1;
      else
          for (var v = 1; v < xzu135; v++)
              if (t = (q[u].color0 + v) % xzu135, 0 == c[t]) {
                  f[u] = t;
                  c[t] = 1;
                  break
              } for (u = xzu135 - 1; u >= xzu131; u--)
          if (t = zto1496(xzu135 * zto1524(), zto1521(100)), 0 == c[t]) f[u] = t, c[t] = 1;
          else
              for (v = 1; v < xzu135; v++)
                  if (q = (t + v) % xzu135, 0 == c[q]) {
                      f[u] = q;
                      c[q] = 1;
                      break
                  } for (u = xzu135 - 1; 0 <= u; u--) c[f[u]] = u;
      for (u = xzu135 - 1; 0 <= u; u--) m[u] = 36 * (f[u] >> 6), p[u] = 36 * (f[u] >> 3 & 7), n[u] = 36 * (f[u] & 7)
  };
  window.zto1285 = function(q) {
      return zto1496(q,
          4) % xzu624
  };
  window.zto1286 = function(q) {
      return zto1496(q, 4 * xzu624)
  };
  window.zto1287 = function(q, t) {
      return Math.floor(4 * (t * xzu624 + q))
  };
  window.zto1288 = function(q) {
      return zto1301(q + r[0]) || zto1301(q + r[1]) || zto1301(q + r[2]) || zto1301(q + r[3])
  };
  window.zto1289 = function(q, t) {
      return zto1302(q + r[0], t) || zto1302(q + r[1], t) || zto1302(q + r[2], t) || zto1302(q + r[3], t)
  };
  window.zto1290 = function(q) {
      return 0 != xzu661[q + 3] && xzu661[q + 3] != k
  };
  window.zto1291 = function(q, t) {
      return zto1290(t) && q == zto1303(t)
  };
  window.zto1292 = function(q, t) {
      return xzu661[t +
          3] == h && q == zto1303(t)
  };
  window.zto1293 = function(q) {
      return xzu661[q + 3] == h
  };
  window.zto1294 = function(q) {
      for (var t = 3; 0 <= t; t--)
          if (zto1297(q + r[t])) return !0;
      return !1
  };
  window.zto1295 = function(q, t) {
      return xzu661[q + 3] == k && t == c[zto1496(64 * (xzu661[q] - a) + 8 * (xzu661[q + 1] - a) + (xzu661[q + 2] - a), e)]
  };
  window.zto1296 = function(q) {
      return 2 != xzu661[q + 2] && 3 != xzu661[q + 2] && xzu661[q + 3] != k
  };
  window.zto1297 = function(q) {
      return 2 == xzu661[q + 2] || xzu661[q + 3] == k
  };
  window.zto1298 = function(q) {
      return xzu661[q + 3] == g
  };
  window.zto1299 = function(q) {
      return xzu661[q +
          3] == l
  };
  window.zto1300 = function(q) {
      return 1 == xzu661[q + 2]
  };
  window.zto1301 = function(q) {
      return 3 == xzu661[q + 2]
  };
  window.zto1302 = function(q, t) {
      return zto1300(q) || zto1290(q) && t != zto1303(q)
  };
  window.zto1303 = function(q) {
      return c[zto1496(64 * xzu661[q] + 8 * xzu661[q + 1] + xzu661[q + 2], 36)]
  };
  window.zto1305 = function(q) {
      b(q, 1)
  };
  window.zto1306 = function(q) {
      b(q, 2)
  };
  window.zto1308 = function(q, t) {
      d(q, t, g)
  };
  window.zto1309 = function(q, t) {
      d(q, t, h)
  };
  window.zto1310 = function(q, t) {
      d(q, t, l)
  };
  window.zto1311 = function(q, t) {
      xzu661[q] = a + (f[t] >>
          6) * e;
      xzu661[q + 1] = a + (f[t] >> 3 & 7) * e;
      xzu661[q + 2] = a + (f[t] & 7) * e;
      xzu661[q + 3] = k
  };
  window.zto1313 = function() {
      return g
  };
  window.zto1314 = function() {
      return h
  };
  window.zto1315 = function() {
      return l
  };
  window.zto1316 = function() {
      return k
  };
  window.zto1317 = function(q) {
      return m[q]
  };
  window.zto1318 = function(q) {
      return p[q]
  };
  window.zto1319 = function(q) {
      return n[q]
  };
  window.zto1326 = function(q) {
      return zto1496(64 * q[0] + 8 * q[1] + q[2], 36)
  }
})();
(function() {
  function b() {
      for (var k = 0, m = 1; 5 > m; m++) k += g[m] % 1024;
      return k
  }

  function d() {
      for (var k = 1; k < h - 2; k++) g[k] = parseInt(g[k])
  }

  function e() {
      g[0] = "Player " + Math.floor(1E3 * Math.random());
      g[1] = 0;
      g[2] = 1;
      g[3] = 1;
      g[4] = xzu598 < xzu599 ? 0 : 1;
      g[5] = 0;
      g[6] = 3;
      g[7] = "0";
      g[8] = "0";
      zto1328()
  }

  function a() {
      for (var k = h - 3; 0 <= k; k--) g[k] = zto868(g[k]);
      g[0] = zto866(g[0])
  }

  function f(k, m, p) {
      var n = new Date;
      n.setTime(n.getTime() + Math.floor(31536E6 * p));
      k = k + "=" + m + ";expires=" + n.toUTCString() + ";SameSite=Strict;Secure;path=/";
      document.cookie =
          k
  }
  var c, g, h, l;
  window.zto1327 = function() {
      if (!(5 <= xzu607)) {
          l = 0;
          c = [];
          h = 9;
          for (var k = 0; k < h; k++) c.push("u" + k);
          g = Array(h);
          g[h - 1] = "0";
          k = document.cookie.split(";");
          for (var m = k.length - 1; 0 <= m; m--) {
              k[m] = k[m].trim();
              for (var p = 2; 0 <= p; p--) k[m] = k[m].replace(" ", "");
              if (3 < k[m].length) {
                  p = c.indexOf(k[m].substring(0, 2));
                  var n = k[m].indexOf("=");
                  l = 2;
                  0 <= p && 2 == n ? g[p] = k[m].substring(n + 1, k[m].length) : 0 < n && f(k[m].substring(0, n), "0", 0)
              }
          }
          a: {
              for (k = h - 1; 0 <= k; k--)
                  if (void 0 === g[k]) {
                      k = !1;
                      break a
                  } k = !0
          }
          k ? (a(), d(), b() != g[5] && e()) : e()
      }
  };
  window.zto1328 = function() {
      if (!(2 != l || 10 > document.cookie.length)) {
          g[1] = 0 == g[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : g[1];
          g[5] = b();
          for (var k = 1; k < h - 2; k++) g[k] = g[k].toString();
          g[0] = zto865(g[0]);
          for (k = h - 3; 0 <= k; k--) g[k] = zto867(g[k]);
          for (k = h - 1; 0 <= k; k--) f(c[k], g[k], 1);
          a();
          d()
      }
  };
  window.zto1329 = function() {
      return l
  };
  window.zto1330 = function(k) {
      l = k;
      zto1328()
  };
  window.zto1331 = function(k, m) {
      5 <= xzu607 || (g[k] = m)
  };
  window.zto1332 = function(k) {
      return 5 <= xzu607 ? 0 : g[k]
  }
})();

function zto1343(b) {
  zto1344(b);
  zto1349(b);
  zto1348(b);
  zto806(b);
  zto1352(b)
}

function zto1344(b) {
  b < xzu131 && xzu134++;
  var d = zto1369(b);
  0 != d.length && (zto1345(b, d), zto1347(b, d))
}

function zto1345(b, d) {
  for (var e = d.length - 1; 0 <= e; e--) zto1353(d[e], b)
}

function zto1346(b) {
  for (var d = 0, e = b.length - 1; 1 <= e; e--) xzu573[b[e]] > xzu573[b[d]] && (d = e);
  return d
}

function zto1347(b, d) {
  if (b == xzu146) zto909(d[zto1346(d)], 1), zto1098(!1, !1), zto1078();
  else {
      for (var e = d.length - 1; 0 <= e; e--)
          if (d[e] == xzu146) {
              zto909(b, 0);
              return
          } b < xzu131 && zto915(b, d[zto1346(d)])
  }
}

function zto1348(b) {
  xzu568[b] = xzu575[b] = 0;
  xzu576[b] = null;
  xzu577[b] = null;
  xzu578[b] = null;
  xzu579[b] = null
}

function zto1349(b) {
  for (var d, e = xzu571[b]; e >= xzu569[b]; e--)
      for (var a = xzu572[b]; a >= xzu570[b]; a--) d = 4 * (a * xzu624 + e), zto1291(b, d) && (zto1305(d), xzu573[b]--);
  0 != xzu573[b] && console.log("Error 5")
}
(function() {
  function b(h) {
      return h < xzu131 ? d * h : d * xzu131 + e * (h - xzu131)
  }
  var d, e, a, f, c, g;
  window.zto1350 = function() {
      d = 16 > xzu131 ? 12 : 8;
      e = 3;
      var h = b(xzu135);
      a = new Uint16Array(h);
      f = new Uint32Array(h);
      c = new Uint8Array(h);
      g = new Uint16Array(h)
  };
  window.zto1352 = function(h) {
      c[h] = 0
  };
  window.zto1353 = function(h, l) {
      var k;
      a: {
          for (k = c[h] - 1; 0 <= k; k--)
              if (0 == g[b(h) + k] && a[b(h) + k] == l) break a;k = c[h]
      }
      if (k != c[h]) {
          var m = f[b(h) + k];
          zto1367(h, k);
          zto1365(h, m, xzu135)
      }
  };
  window.zto1355 = function(h, l) {
      for (var k = c[h] - 1; 0 <= k; k--)
          if (0 == g[b(h) +
                  k] && a[b(h) + k] == l) return !0;
      return !1
  };
  window.zto1356 = function(h) {
      return h < xzu131 ? c[h] < d : c[h] < e
  };
  window.zto1357 = function(h) {
      return c[h]
  };
  window.zto1358 = function(h, l) {
      return a[b(h) + l]
  };
  window.zto1359 = function(h, l) {
      return g[b(h) + l]
  };
  window.zto1360 = function(h, l) {
      for (var k = c[h] - 1; 0 <= k; k--)
          if (g[b(h) + k] == l) return k;
      return -1
  };
  window.zto1361 = function(h, l) {
      for (var k = c[h] - 1; 0 <= k; k--)
          if (0 == g[b(h) + k] && a[b(h) + k] == l) return f[b(h) + k];
      return 0
  };
  window.zto1362 = function(h, l) {
      return f[b(h) + l]
  };
  window.zto1363 = function(h,
      l, k) {
      for (var m = c[h] - 1; 0 <= m; m--) 0 == g[b(h) + m] && a[b(h) + m] == l && (f[b(h) + m] = k)
  };
  window.zto1364 = function(h, l, k) {
      f[b(h) + l] = k
  };
  window.zto1365 = function(h, l, k) {
      for (var m = c[h] - 1; 0 <= m; m--)
          if (0 == g[b(h) + m] && a[b(h) + m] == k) {
              f[b(h) + m] += l;
              f[b(h) + m] = f[b(h) + m] > xzu141 ? xzu141 : f[b(h) + m];
              return
          } a[b(h) + c[h]] = k;
      f[b(h) + c[h]] = l;
      g[b(h) + c[h]] = 0;
      c[h]++;
      k == xzu146 && h < xzu131 && zto909(h, 5)
  };
  window.zto1366 = function(h, l, k) {
      xzu568[h] = 2;
      a[b(h) + c[h]] = 0;
      f[b(h) + c[h]] = l;
      g[b(h) + c[h]] = k;
      c[h]++
  };
  window.zto1367 = function(h, l) {
      if (0 != c[h]) {
          c[h]--;
          for (var k =
                  l; k < c[h]; k++) a[b(h) + k] = a[b(h) + k + 1], f[b(h) + k] = f[b(h) + k + 1], g[b(h) + k] = g[b(h) + k + 1]
      }
  };
  window.zto1368 = function(h, l) {
      for (var k = c[h] - 1; 0 <= k; k--)
          if (0 == g[b(h) + k] && a[b(h) + k] == l) {
              zto1367(h, k);
              break
          }
  };
  window.zto1369 = function(h) {
      for (var l = [], k = xzu135 - 1; 0 <= k; k--)
          for (var m = c[k] - 1; 0 <= m; m--)
              if (0 == g[b(k) + m] && a[b(k) + m] == h) {
                  l.push(k);
                  break
              } return l
  }
})();
(function() {
  var b, d, e, a;
  window.zto1370 = function() {
      a = e = d = b = 10
  };
  window.zto1371 = function() {
      return a
  };
  window.zto1372 = function() {
      return e == b
  };
  window.zto1373 = function() {
      if (0 >= --e) {
          e = b;
          for (var f = xzu587 - 1; 0 <= f; f--) {
              var c = zto1496(zto1375(xzu586[f]) * xzu575[xzu586[f]], 1E4);
              xzu575[xzu586[f]] += 1 > c ? 1 : c;
              zto1379(xzu586[f])
          }
          if (0 >= --a)
              for (a = d, f = xzu587 - 1; 0 <= f; f--) xzu575[xzu586[f]] += xzu573[xzu586[f]], zto1379(xzu586[f])
      }
  };
  window.zto1375 = function(f) {
      var c = xzu573[xzu359[0]];
      c = xzu573[f] <= c ? c : xzu573[f];
      c = 100 + zto1500(64 * zto1496(100 *
          xzu573[f], c), 7);
      if (294 > zto1557()) {
          var g = zto1496(100 * (1764 - 5 * zto1557()), 294);
          c = g > c ? g : c
      }
      g = zto1376(f);
      xzu575[f] > g && (c -= zto1496(c * (xzu575[f] - g), g));
      return 0 > c ? 0 : 600 < c ? 600 : c
  };
  window.zto1376 = function(f) {
      f = 100 * xzu573[f];
      return f > xzu142 ? xzu142 : f
  };
  window.zto1379 = function(f) {
      xzu575[f] = xzu575[f] > xzu141 ? xzu141 : xzu575[f]
  }
})();
(function() {
  function b() {
      U.width = xzu601;
      U.height = xzu602;
      O = U.getContext("2d", {
          alpha: !0
      });
      O.textAlign = xzu250;
      O.textBaseline = xzu246;
      O.imageSmoothingEnabled = !0
  }

  function d() {
      Q = !1;
      K = 1;
      H = F = 0;
      O.clearRect(0, 0, xzu601, xzu602);
      for (var B = xzu313 / xzu312, y = xzu314 / xzu312, D = (xzu601 + xzu313) / xzu312, G = (xzu602 + xzu314) / xzu312, J, N, L, M, W, X = xzu587 - 1; 0 <= X; X--)
          if (L = xzu359[X], M = Math.floor(C * xzu312 * t[L] * r[L]), !(M < A || M >= v) && p[L] + r[L] >= B && p[L] <= D && n[L] + q[L] >= y && n[L] <= G) {
              J = Math.floor(xzu601 * (p[L] + r[L] / 2 - B) / (D - B));
              N = Math.floor(xzu602 *
                  (n[L] + q[L] / 2 - y) / (G - y) - .1 * M);
              O.font = xzu253 + M + xzu255;
              W = O;
              var V = M;
              var T = L;
              T = 1536 > f(zto1287(p[T] + Math.floor(r[T] / 3), n[T] + Math.floor(q[T] / 2))) + f(zto1287(p[T] + Math.floor(2 * r[T] / 3), n[T] + Math.floor(q[T] / 2))) ? 255 : 0;
              V = V >= w && V < v ? "rgba(" + T + "," + T + "," + T + "," + c(V) + ")" : 255 == T ? xzu239 : xzu213;
              W.fillStyle = V;
              O.fillText(xzu567[L], J, N);
              Q = !0;
              if (L < xzu131 && 0 < R[L])
                  if (0 == xzu360[L])
                      if (xzu619.isFlag(E[L])) {
                          W = J;
                          V = M;
                          T = L;
                          var Y = .9 * V / xzu619.w,
                              ba = Math.floor(N - .5 * Y * xzu619.w - .05 * V);
                          O.globalAlpha = c(V);
                          for (var Z = Math.floor(W - .5 * V / u[T] - .4 *
                                  V - Y * xzu619.w), aa = 0; 2 > aa; aa++) O.setTransform(Y, 0, 0, Y, Z, ba), O.drawImage(xzu619.cvs[E[T]], 0, 0), Z = Math.floor(W + .5 * V / u[T] + .4 * V);
                          O.globalAlpha = 1;
                          O.setTransform(1, 0, 0, 1, 0, 0);
                          e(J, N, M, 0, 0)
                      } else xzu619.isCrownable(E[L]) ? (a(J, N, M, L, 0), e(J, N, M, 0, 1)) : (a(J, N, M, L, 1), e(J, N, M, 1, 0));
              else a(J, N, M, L, 0);
              else 0 == xzu360[L] && e(J, N, M, 0, 0);
              W = Math.floor(z * M);
              W < A || (L < xzu131 && 0 < R[L + xzu131] && (V = M, T = L + xzu131, Y = .6 * V / xzu619.w, O.setTransform(Y, 0, 0, Y, Math.floor(J - .5 * Y * xzu619.w), Math.floor(N + 1.8 * Y * xzu619.w)), O.globalAlpha = c(V), O.drawImage(xzu619.cvs[E[T]],
                  0, 0), O.globalAlpha = 1, O.setTransform(1, 0, 0, 1, 0, 0)), O.font = xzu253 + W + xzu255, O.fillText(zto955(xzu575[L]), J, N + Math.floor(.78 * M)))
          }
  }

  function e(B, y, D, G, J) {
      var N = .95 * D / P;
      O.setTransform(N, 0, 0, N, Math.floor(B - .5 * N * I + .8 * G * D), Math.floor(y - 1.76 * N * P - .82 * J * D));
      O.globalAlpha = c(D);
      O.drawImage(zto1280(5), 0, 0);
      O.globalAlpha = 1;
      O.setTransform(1, 0, 0, 1, 0, 0)
  }

  function a(B, y, D, G, J) {
      var N = 1.2 * D / xzu619.w;
      O.setTransform(N, 0, 0, N, Math.floor(B - .5 * N * xzu619.w - .8 * J * D), Math.floor(y - 1.5 * N * xzu619.w));
      O.globalAlpha = c(D);
      O.drawImage(xzu619.cvs[E[G]],
          0, 0);
      O.globalAlpha = 1;
      O.setTransform(1, 0, 0, 1, 0, 0)
  }

  function f(B) {
      return xzu629[B] + xzu661[B] + xzu629[B + 1] + xzu661[B + 1] + xzu629[B + 2] + xzu661[B + 2]
  }

  function c(B) {
      return B >= w && B < v ? 1 - (B - w) / (v - w) : 1
  }

  function g(B) {
      for (var y = p[B], D = p[B] - xzu569[B] - 1; 0 <= D; D--)
          if (y--, !l(B, y, n[B], q[B])) {
              y++;
              break
          } var G = p[B];
      for (D = xzu571[B] - p[B] - r[B]; 0 <= D; D--)
          if (G++, !l(B, G + r[B] - 1, n[B], q[B])) {
              G--;
              break
          } y = Math.floor((y + G) / 2);
      G = n[B];
      for (D = n[B] - xzu570[B] - 1; 0 <= D; D--)
          if (G--, !k(B, y, G, r[B])) {
              G++;
              break
          } var J = n[B];
      for (D = xzu572[B] - n[B] - q[B]; 0 <=
          D; D--)
          if (J++, !k(B, y, J + q[B] - 1, r[B])) {
              J--;
              break
          } D = Math.floor((G + J) / 2);
      h(B, y, D, r[B], q[B]) && (p[B] = y, n[B] = D)
  }

  function h(B, y, D, G, J) {
      for (var N, L = y + G - 1; L >= y; L--)
          if (!l(B, L, D, J)) return !1;
      N = Math.floor(.25 * J);
      N = 1 > N ? 1 : N;
      for (L = D + J - 1 - N; L >= D + N; L--)
          if (!k(B, y, L, G)) return !1;
      return !0
  }

  function l(B, y, D, G) {
      return zto1291(B, 4 * (D * xzu624 + y)) && zto1291(B, 4 * ((D + G - 1) * xzu624 + y))
  }

  function k(B, y, D, G) {
      return zto1291(B, 4 * (D * xzu624 + y)) && zto1291(B, 4 * (D * xzu624 + y + G - 1))
  }
  var m, p, n, r, q, t, u, v, w, z, x, A, C, H, F, K, Q, U, O, S, R, E, I, P;
  window.zto1380 =
      function() {
          Q = !1;
          C = .88;
          z = .5;
          x = 1.8;
          v = Math.floor(.5 * xzu600);
          w = Math.floor(.2 * v);
          A = 10 >= xzu617 ? 9 : 20 > xzu617 ? 8 : 7;
          m = 0;
          p = new Uint16Array(xzu135);
          n = new Uint16Array(xzu135);
          r = new Uint16Array(xzu135);
          q = new Uint16Array(xzu135);
          t = new Float32Array(xzu135);
          u = new Float32Array(xzu135);
          R = new Uint8Array(2 * xzu131);
          E = new Uint8Array(2 * xzu131);
          U = document.createElement("canvas");
          b();
          F = H = 0;
          K = 1;
          S = 0;
          O.font = xzu253 + Math.floor(100 * z) + xzu255;
          var B = 80 / Math.floor(O.measureText(zto955(xzu141)).width);
          O.font = xzu253 + 100 + xzu255;
          for (var y =
                  xzu135 - 1; 0 <= y; y--) u[y] = 100 / Math.floor(O.measureText(xzu567[y]).width), t[y] = B < u[y] ? B : u[y], p[y] = xzu569[y], n[y] = xzu570[y] + 1, r[y] = 4, q[y] = 2;
          r[0] = xzu150 ? 0 : r[0];
          I = zto1280(5).width;
          P = zto1280(5).height
      };
  window.zto1382 = function() {
      b();
      d()
  };
  window.zto1384 = function() {
      S = 0;
      p[0] = xzu569[0];
      n[0] = xzu570[0] + 1;
      r[0] = 4;
      q[0] = 2
  };
  window.zto1385 = function(B, y, D) {
      y %= xzu619.nAll;
      D %= xzu131;
      if (B == D) E[B] == y && 0 < R[B] ? R[B] = 0 : (E[B] = y, R[B] = B < xzu131 && xzu619.isFlag(y) ? 255 : 254);
      else if (D == xzu146 || B == xzu146) E[B + xzu131] = y, R[B + xzu131] = 254,
          xzu146 == D ? zto910(B, y) : zto911(B, D, y)
  };
  window.zto1386 = function() {
      Q && (1 != K ? (xzu594.save(), xzu594.imageSmoothingEnabled = !0, xzu594.scale(K, K), xzu594.drawImage(U, -H / K, -F / K), xzu594.restore()) : (xzu594.imageSmoothingEnabled = !1, xzu594.drawImage(U, -H, -F)))
  };
  window.zto1387 = function(B, y) {
      H += B;
      F += y
  };
  window.zto1388 = function(B, y) {
      zto1387(B, y)
  };
  window.zto1389 = function(B, y, D) {
      K *= B;
      H = (H + y) * B - y;
      F = (F + D) * B - D
  };
  window.zto1390 = function() {
      return 0 >= --S ? (S = 10 >= xzu617 ? 10 : 20 > xzu617 ? 5 : 2, d(), !0) : !1
  };
  window.zto1400 = function() {
      if (2 !=
          xzu139)
          for (var B = 2 * xzu131 - 1; 0 <= B; B--) 0 < R[B] && 255 > R[B] && R[B]--;
      B = Math.floor(.05 * xzu587);
      B = 8 > B ? 8 : B;
      B = B > xzu587 ? xzu587 : B;
      for (var y, D = m + B - 1; D >= m; D--)
          if (y = D % xzu587, y = xzu586[y], 0 < r[y] && h(y, p[y], n[y], r[y], q[y])) {
              for (var G, J, N, L, M = y, W = !1, X = 0; 8 > X; X++) {
                  J = r[M] + 2;
                  G = q[M] + 2;
                  if (J > xzu571[M] - xzu569[M] + 1 || G > xzu572[M] - xzu570[M] + 1) break;
                  L = p[M] - 1;
                  N = n[M] - 1;
                  if (h(M, L, N, J, G)) p[M] = L, n[M] = N, r[M] = J, q[M] = G, W = !0;
                  else break
              }
              if (G = !W) {
                  M = y;
                  W = !1;
                  X = r[M];
                  for (var V = 1 + Math.floor(.02 * X), T = 1; 5 > T; T++) {
                      J = X + T * V;
                      if (J > xzu571[M] - xzu569[M] + 1) break;
                      G = 1 + Math.floor(x * t[M] * J);
                      if (G > xzu572[M] - xzu570[M] + 1) break;
                      L = xzu569[M] + Math.floor(Math.random() * (xzu571[M] - xzu569[M] + 2 - J));
                      N = xzu570[M] + Math.floor(Math.random() * (xzu572[M] - xzu570[M] + 2 - G));
                      h(M, L, N, J, G) && (p[M] = L, n[M] = N, r[M] = J, q[M] = G, W = !0)
                  }
                  G = W
              }
              G && g(y)
          } else {
              a: {
                  J = y;N = p[J] + 1;L = n[J] + 1;
                  for (M = r[J] - 2;;) {
                      if (1 > M) {
                          r[J] = 0;
                          break
                      }
                      G = 1 + Math.floor(x * t[J] * M);
                      if (h(J, N, L, M, G)) {
                          p[J] = N;
                          n[J] = L;
                          r[J] = M;
                          q[J] = G;
                          G = !0;
                          break a
                      }
                      N++;
                      L++;
                      M -= 2
                  }
                  G = !1
              }
              if (G) g(y);
              else
                  for (L = y, M = 6; - 8 <= M; M--)
                      if (G = 0 < M ? M : 1, y = 1 + Math.floor(x * t[L] * G), !(G > xzu571[L] -
                              xzu569[L] + 1 || y > xzu572[L] - xzu570[L] + 1) && (N = xzu569[L] + Math.floor(Math.random() * (xzu571[L] - xzu569[L] + 2 - G)), J = xzu570[L] + Math.floor(Math.random() * (xzu572[L] - xzu570[L] + 2 - y)), h(L, N, J, G, y))) {
                          p[L] = N;
                          n[L] = J;
                          r[L] = G;
                          q[L] = y;
                          break
                      }
          } m += B;
      m %= xzu587
  }
})();
(function() {
  var b, d, e;
  window.zto1412 = function() {
      d = "[Bot] ";
      b = "Afghanistan;Albania;Algeria;Andorra;Angola;Antigua and Barbuda;Argentina;Armenia;Australia;Austria;Azerbaijan;The Bahamas;Bahrain;Bangladesh;Barbados;Belarus;Belgium;Belize;Benin;Bhutan;Bolivia;Bosnia and Herzegovina;Botswana;Brazil;Brunei;Bulgaria;Burkina Faso;Burundi;C\u00f4te d'Ivoire;Cape Verde;Cambodia;Cameroon;Canada;Central African Republic;Chad;Chile;China;Colombia;Comoros;Republic of the Congo;Costa Rica;Croatia;Cuba;Cyprus;Czechia;Denmark;Djibouti;Dominica;Dominican Republic;DRC;East Timor;Ecuador;Egypt;El Salvador;Equatorial Guinea;Eritrea;Estonia;Eswatini;Ethiopia;Fiji;Finland;France;Gabon;The Gambia;Georgia;Germany;Ghana;Greece;Grenada;Guatemala;Guinea;Guinea-Bissau;Guyana;Haiti;Vatican City;Honduras;Hungary;Iceland;India;Indonesia;Iran;Iraq;Ireland;Israel;Italy;Jamaica;Japan;Jordan;Kazakhstan;Kenya;Kiribati;Kuwait;Kyrgyzstan;Laos;Latvia;Lebanon;Lesotho;Liberia;Libya;Liechtenstein;Lithuania;Luxembourg;Madagascar;Malawi;Malaysia;Maldives;Mali;Malta;Marshall Islands;Mauritania;Mauritius;Mexico;Micronesia;Moldova;Monaco;Mongolia;Montenegro;Morocco;Mozambique;Myanmar;Namibia;Nauru;Nepal;Netherlands;New Zealand;Nicaragua;Niger;Nigeria;North Korea;North Macedonia;Norway;Oman;Pakistan;Palau;Palestine;Panama;Papua New Guinea;Paraguay;Peru;Philippines;Poland;Portugal;Qatar;Romania;Russia;Rwanda;Saint Kitts and Nevis;Saint Lucia;Saint Vincent;Samoa;San Marino;S\u00e3o Tom\u00e9 and Pr\u00edncipe;Saudi Arabia;Senegal;Serbia;Seychelles;Sierra Leone;Singapore;Slovakia;Slovenia;Solomon Islands;Somalia;South Africa;South Korea;South Sudan;Spain;Sri Lanka;Sudan;Suriname;Sweden;Switzerland;Syria;Tajikistan;Tanzania;Thailand;Togo;Tonga;Trinidad and Tobago;Tunisia;Turkey;Turkmenistan;Tuvalu;Uganda;Ukraine;United Arab Emirates;United Kingdom;United States;Uruguay;Uzbekistan;Vanuatu;Venezuela;Vietnam;Yemen;Zambia;Zimbabwe;Taiwan".split(";");
      e =
          Array(4);
      e[0] = Array(47);
      var a = 0;
      e[0][a++] = [61, 651017];
      e[0][a++] = [65, 507759];
      e[0][a++] = [140, 489294];
      e[0][a++] = [144, 235424];
      e[0][a++] = [165, 854854];
      e[0][a++] = [185, 364083];
      e[0][a++] = [45, 330505];
      e[0][a++] = [123, 447023];
      e[0][a++] = [16, 500625];
      e[0][a++] = [44, 541657];
      e[0][a++] = [9, 639602];
      e[0][a++] = [170, 667430];
      e[0][a++] = [84, 852937];
      e[0][a++] = [82, 346502];
      e[0][a++] = [141, 873377];
      e[0][a++] = [169, 184899];
      e[0][a++] = [158, 579075];
      e[0][a++] = [76, 665359];
      e[0][a++] = [159, 707233];
      e[0][a++] = [41, 752722];
      e[0][a++] = [21, 788929];
      e[0][a++] = [154, 763336];
      e[0][a++] = [116, 840267];
      e[0][a++] = [129, 885799];
      e[0][a++] = [1, 906755];
      e[0][a++] = [67, 983769];
      e[0][a++] = [25, 845078];
      e[0][a++] = [179, 924567];
      e[0][a++] = [143, 682991];
      e[0][a++] = [113, 645774];
      e[0][a++] = [183, 563097];
      e[0][a++] = [100, 322621];
      e[0][a++] = [94, 263172];
      e[0][a++] = [56, 183880];
      e[0][a++] = [15, 371702];
      e[0][a++] = [60, 54446];
      e[0][a++] = [130, 108974];
      e[0][a++] = [3, 821171];
      e[0][a++] = [99, 662803];
      e[0][a++] = [101, 546122];
      e[0][a++] = [43, 1069192];
      e[0][a++] = [150, 795790];
      e[0][a++] = [114, 789836];
      e[0][a++] = [74, 876242];
      e[0][a++] = [178, 1100034];
      e[0][a++] = [2, 1060214];
      e[0][a++] = [117, 1090282];
      e[1] = Array(120);
      a = 0;
      e[1][a++] = [186, 277419];
      e[1][a++] = [36, 323204];
      e[1][a++] = [144, 159005];
      e[1][a++] = [78, 423229];
      e[1][a++] = [185, 199456];
      e[1][a++] = [61, 234295];
      e[1][a++] = [23, 606978];
      e[1][a++] = [65, 211106];
      e[1][a++] = [8, 706406];
      e[1][a++] = [86, 304471];
      e[1][a++] = [127, 480986];
      e[1][a++] = [84, 254641];
      e[1][a++] = [165, 276347];
      e[1][a++] = [111, 378965];
      e[1][a++] = [32, 184581];
      e[1][a++] = [157, 524908];
      e[1][a++] = [83, 321486];
      e[1][a++] = [80, 328827];
      e[1][a++] = [179, 285195];
      e[1][a++] = [142, 382489];
      e[1][a++] = [163, 305882];
      e[1][a++] = [79, 551072];
      e[1][a++] = [123, 205283];
      e[1][a++] = [170, 234319];
      e[1][a++] = [152, 385365];
      e[1][a++] = [195, 387127];
      e[1][a++] = [140, 206777];
      e[1][a++] = [169, 155982];
      e[1][a++] = [174, 439287];
      e[1][a++] = [16, 212534];
      e[1][a++] = [9, 229982];
      e[1][a++] = [82, 193630];
      e[1][a++] = [6, 783960];
      e[1][a++] = [139, 491627];
      e[1][a++] = [130, 144354];
      e[1][a++] = [52, 360635];
      e[1][a++] = [184, 383957];
      e[1][a++] = [191, 465435];
      e[1][a++] = [45, 174828];
      e[1][a++] = [104, 514747];
      e[1][a++] = [13, 381200];
      e[1][a++] = [35, 699770];
      e[1][a++] = [20, 656259];
      e[1][a++] = [138, 614136];
      e[1][a++] = [37, 500954];
      e[1][a++] = [190, 487928];
      e[1][a++] = [135, 486417];
      e[1][a++] = [42, 403733];
      e[1][a++] = [2, 341664];
      e[1][a++] = [98, 351863];
      e[1][a++] = [126, 434556];
      e[1][a++] = [4, 620317];
      e[1][a++] = [102, 692983];
      e[1][a++] = [162, 743679];
      e[1][a++] = [58, 486914];
      e[1][a++] = [161, 475351];
      e[1][a++] = [166, 494345];
      e[1][a++] = [77, 123954];
      e[1][a++] = [124, 800848];
      e[1][a++] = [128, 282652];
      e[1][a++] = [141, 283584];
      e[1][a++] = [60, 137151];
      e[1][a++] = [73, 415359];
      e[1][a++] = [48, 415365];
      e[1][a++] = [5, 425561];
      e[1][a++] = [85, 419690];
      e[1][a++] = [11, 374710];
      e[1][a++] = [69, 437049];
      e[1][a++] = [17, 426897];
      e[1][a++] = [53, 450112];
      e[1][a++] = [75, 442867];
      e[1][a++] = [125, 454480];
      e[1][a++] = [40, 471894];
      e[1][a++] = [72, 509727];
      e[1][a++] = [168, 514092];
      e[1][a++] = [51, 550271];
      e[1][a++] = [137, 683854];
      e[1][a++] = [187, 756420];
      e[1][a++] = [59, 658702];
      e[1][a++] = [160, 597687];
      e[1][a++] = [117, 325675];
      e[1][a++] = [178, 311224];
      e[1][a++] = [109, 418512];
      e[1][a++] = [106, 415648];
      e[1][a++] = [34, 425882];
      e[1][a++] = [167, 428841];
      e[1][a++] = [55, 443386];
      e[1][a++] = [46, 462263];
      e[1][a++] = [153, 441714];
      e[1][a++] = [63, 450414];
      e[1][a++] = [71, 462026];
      e[1][a++] = [70, 467841];
      e[1][a++] = [156, 483805];
      e[1][a++] = [97, 493968];
      e[1][a++] = [28, 488182];
      e[1][a++] = [26, 469332];
      e[1][a++] = [66, 491101];
      e[1][a++] = [175, 496913];
      e[1][a++] = [18, 479505];
      e[1][a++] = [31, 502769];
      e[1][a++] = [33, 502803];
      e[1][a++] = [164, 495585];
      e[1][a++] = [89, 530443];
      e[1][a++] = [182, 527516];
      e[1][a++] = [49, 546346];
      e[1][a++] = [39, 546308];
      e[1][a++] = [62, 547747];
      e[1][a++] = [54, 533232];
      e[1][a++] = [193, 630513];
      e[1][a++] = [173, 581215];
      e[1][a++] = [27, 562331];
      e[1][a++] = [145, 555076];
      e[1][a++] = [103, 629091];
      e[1][a++] = [118, 668269];
      e[1][a++] = [194, 671152];
      e[1][a++] = [22, 689993];
      e[1][a++] = [120, 684158];
      e[1][a++] = [96, 737888];
      e[1][a++] = [57, 713237];
      e[1][a++] = [151, 536118];
      e[2] = Array(13);
      a = 0;
      e[2][a++] = [79, 668984];
      e[2][a++] = [8, 1142351];
      e[2][a++] = [136, 486085];
      e[2][a++] = [50, 950598];
      e[2][a++] = [139, 22268];
      e[2][a++] = [24, 352221];
      e[2][a++] = [104, 598091];
      e[2][a++] = [191, 154603];
      e[2][a++] = [30, 93984];
      e[2][a++] = [174, 76286];
      e[2][a++] = [119, 74276];
      e[2][a++] = [157, 738835];
      e[2][a++] = [160, 476723];
      e[3] = []
  };
  window.zto1413 = function() {
      var a = xzu131,
          f = b.length,
          c = xzu131 + f;
      if (zto1450(xzu630)) {
          c = xzu630 - zto1449();
          var g = e[c].length + xzu131;
          g = g > xzu135 ? xzu135 : g;
          for (a = xzu131; a < g; a++) xzu567[a] = d + b[e[c][a - xzu131][0]];
          c = a = g
      }
      for (g = zto1524() % f; a < xzu135; a++) xzu567[a] = a < c ? d + b[(a + g) % f] : "Bot " + zto1496(1E3 * zto1524(), zto1521(100))
  };
  window.zto1415 = function() {
      return e
  }
})();
(function() {
  var b, d, e;
  window.zto1416 = function() {
      b = new Date;
      d = !1;
      e = 12E3
  };
  window.zto1417 = function() {
      d = !0
  };
  window.zto1418 = function() {
      (new Date).getTime() > b.getTime() + e && (zto1609(d), zto1416())
  }
})();
var xzu567, xzu568, xzu569, xzu570, xzu571, xzu572, xzu573, xzu574, xzu575, xzu576, xzu577, xzu578, xzu579;

function zto1419(b) {
  xzu567 = Array(xzu135);
  xzu568 = new Uint8Array(xzu135);
  xzu569 = new Uint16Array(xzu135);
  xzu570 = new Uint16Array(xzu135);
  xzu571 = new Uint16Array(xzu135);
  xzu572 = new Uint16Array(xzu135);
  xzu573 = new Uint32Array(xzu135);
  xzu574 = new Uint32Array(xzu135);
  xzu575 = new Uint32Array(xzu135);
  xzu576 = Array(xzu135);
  xzu577 = Array(xzu135);
  xzu578 = Array(xzu135);
  xzu579 = Array(xzu135);
  for (var d = b.length - 1; 0 <= d; d--) xzu567[d] = b[d].name
}
(function() {
  function b(e, a, f, c) {
      return (e - f) * (e - f) + (a - c) * (a - c)
  }
  var d;
  window.zto1420 = function() {
      return d
  };
  window.zto1421 = function(e, a, f) {
      if (0 == xzu578[e].length) return !1;
      a: {
          for (var c = 9; 0 <= c; c--) {
              if (9 == c) {
                  for (var g = xzu578[e], h = a, l = f, k = 0, m = b(h, l, zto1285(g[0]), zto1286(g[0])), p = g.length - 1; 1 <= p; p--) {
                      var n = b(h, l, zto1285(g[p]), zto1286(g[p]));
                      n < m && (m = n, k = p)
                  }
                  n = g[k]
              } else n = xzu578[e][zto1496(c * xzu578[e].length, 9)];
              d = n;
              b: {
                  var r;n = a;g = f;k = zto1285(d);m = zto1286(d);h = d;l = b(n, g, k, m);
                  for (var q = Math.abs(n - k) + Math.abs(g -
                          m) - 1; 0 <= q; q--) {
                      p = 0;
                      m = l;
                      for (r = 3; 0 <= r; r--) k = b(n, g, zto1285(h + xzu15[r]), zto1286(h + xzu15[r])), k < m && (m = k, p = r);
                      h += xzu15[p];
                      if (zto1296(h)) {
                          n = h;
                          break b
                      }
                  }
                  n = 0
              }
              if (g = 0 != n) g = 100 >= b(a, f, zto1285(n), zto1286(n));
              if (g) {
                  e = !0;
                  break a
              }
          }
          e = !1
      }
      return e
  }
})();
var xzu586, xzu587;

function zto1427() {
  xzu587 = xzu135;
  xzu586 = new Uint16Array(xzu587);
  for (var b = xzu587 - 1; 0 <= b; b--) xzu586[b] = b
}

function zto1428() {
  zto1431();
  zto1429()
}

function zto1429() {
  for (var b = xzu587 - 1; 0 <= b; b--) 0 == xzu568[xzu586[b]] && zto1430(b)
}

function zto1430(b) {
  for (xzu587--; b < xzu587; b++) xzu586[b] = xzu586[b + 1]
}

function zto1431() {
  for (var b = xzu587 - 1; 0 <= b; b--)
      if (xzu573[xzu586[b]] <= zto1496(xzu574[xzu586[b]], 4)) 1E3 >= xzu573[xzu586[b]] && (2 != xzu568[xzu586[b]] || 0 == xzu573[xzu586[b]]) && zto1343(xzu586[b]);
      else if (xzu573[xzu586[b]] >= xzu574[xzu586[b]]) xzu574[xzu586[b]] = xzu573[xzu586[b]];
  else {
      var d = zto1496(xzu574[xzu586[b]] - xzu573[xzu586[b]], 1E3);
      xzu574[xzu586[b]] -= 1 > d ? 1 : d
  }
}
var xzu588, xzu589;
(function() {
  function b() {
      if (xzu587 > zto1496(7 * xzu135, 8)) return !0;
      for (var c = zto1496(xzu573[xzu359[0]], 4), g = !1, h = a - 1; 0 <= h; h--) e[h] != xzu573[xzu359[h]] && (e[h] = xzu573[xzu359[h]], g = g || e[h] >= c);
      return g
  }
  var d, e, a, f;
  window.zto1432 = function() {
      xzu588 = 1E5;
      a = d = 10;
      xzu589 = f = 0;
      e = new Uint32Array(a)
  };
  window.zto1433 = function() {
      xzu149 || (0 == --d && (d = 10, b() ? f = 0 : 3 == ++f && zto909(0, 8), xzu588 -= 44, xzu588 = 0 > xzu588 ? 0 : xzu588), 3 <= f && 10 != d && b() && (f = 0), 3 > f ? (xzu589 = 0 < xzu589 ? -1 : 0, -1 == xzu589 && zto908(8)) : (xzu589 += 8, xzu589 = 1E3 < xzu589 ? 1E3 :
          xzu589))
  }
})();
var xzu593, xzu594, xzu595, xzu596, xzu597, xzu598, xzu599, xzu600, xzu601, xzu602, xzu603, xzu604, xzu605, xzu606, xzu607, xzu608, xzu609, xzu610, xzu611 = !1,
  xzu612, xzu613, xzu614, xzu615, xzu616, xzu617, xzu618, xzu619;

function zto1437() {
  xzu604 = xzu603 = !1;
  xzu597 = 1300;
  xzu595 = "Last Update: 24 June 2021 (1.54.8)";
  xzu607 = (xzu606 = "undefined" !== typeof Android) ? Android.getVersion() : 0;
  xzu608 = 8;
  xzu609 = xzu606 ? Android.getNumber(4) : 0;
  xzu596 = "Server Location: Europe";
  xzu612 = zto1438();
  zto1447();
  zto1445();
  zto1446();
  zto1327();
  zto744();
  zto746();
  window.addEventListener("resize", zto1444);
  document.addEventListener ? document.addEventListener("contextmenu", function(b) {
      b.preventDefault()
  }, !1) : document.attachEvent("oncontextmenu", function() {
      window.event.returnValue = !1
  });
  zto1443();
  document.addEventListener("keyup", zto1442);
  document.addEventListener("keydown", zto1441);
  window.addEventListener("error", zto1440, !0);
  xzu617 = 0;
  xzu634 = new zto1452;
  xzu615 = new zto1592;
  xzu616 = new zto1518;
  xzu616.calculate();
  xzu618 = new zto1106;
  xzu619 = new zto930
}

function zto1438() {
  try {
      return window.self !== window.top
  } catch (b) {
      return !0
  }
}

function zto1439(b) {
  xzu611 || (xzu611 = !0, xzu606 ? Android.showToast(b) : (console.log(b), alert(b)))
}

function zto1440(b) {
  xzu611 || (xzu611 = !0, b = b.message ? "[ERROR " + b.lineno + "][" + b.message + "]" : "[ERROR " + b.type + "][" + (b.srcElement || b.target) + "]", xzu606 && Android.showToast(b), alert(b))
}

function zto1441(b) {
  "ArrowLeft" == b.key ? zto1508(3) : "ArrowUp" == b.key ? zto1508(0) : "ArrowRight" == b.key ? zto1508(1) : "ArrowDown" == b.key && zto1508(2)
}

function zto1442(b) {
  8 != zto1208() && zto1209(b);
  "Escape" == b.key ? 1 <= xzu139 ? xzu148 ? (xzu148 = !xzu148, zto1216()) : zto892() : 7 == zto1208() ? (zto1243(), zto1261(1E3), zto1216()) : 2 == zto1208() ? zto1257() : 4 == zto1208() ? zto1202(1, 0, 0) : 3 == zto1208() && zto1224(0, 0) : "ArrowLeft" == b.key ? zto1509(3) : "ArrowUp" == b.key ? zto1509(0) : "ArrowRight" == b.key ? zto1509(1) : "ArrowDown" == b.key ? zto1509(2) : "h" == b.key ? 1 <= xzu139 && (xzu148 = !xzu148, zto1216()) : "a" == b.key ? zto993(1 / 1.125) : "d" == b.key ? zto993(1.125) : "s" == b.key ? zto993(1 / 1.5) : "w" == b.key && zto993(1.5)
}

function zto1443() {
  xzu605 = window.location.hostname;
  xzu613 = 0 <= xzu605.toLowerCase().indexOf("territorial.io")
}

function zto1444() {
  zto1445() && (1 <= xzu139 ? (zto1382(), zto945()) : zto1214())
}

function zto1445() {
  var b = document.documentElement.clientWidth,
      d = document.documentElement.clientHeight;
  if (xzu601 != b || xzu602 != d) {
      xzu601 = b;
      xzu602 = d;
      if (xzu601 > xzu598 || xzu602 > xzu599) xzu598 = xzu601 > xzu598 ? xzu601 : xzu598, xzu599 = xzu602 > xzu599 ? xzu602 : xzu599, xzu593.width = xzu598, xzu593.height = xzu599, xzu594 = xzu593.getContext("2d", {
          alpha: !1
      }), xzu594.imageSmoothingEnabled = !1;
      return !0
  }
  return !1
}

function zto1446() {
  xzu593 = document.getElementById("canvasA");
  xzu593.width = xzu598;
  xzu593.height = xzu599;
  xzu594 = xzu593.getContext("2d", {
      alpha: !1
  });
  xzu594.imageSmoothingEnabled = !1;
  xzu626 = document.createElement("canvas")
}

function zto1447() {
  var b = screen.width,
      d = document.body.clientWidth;
  b = b > d ? b : d;
  d = window.screen.availWidth;
  b = b > d ? b : d;
  d = document.documentElement.clientWidth;
  var e = screen.height,
      a = document.body.clientHeight;
  e = e > a ? e : a;
  a = window.screen.availHeight;
  e = e > a ? e : a;
  a = document.documentElement.clientHeight;
  xzu601 = xzu598 = b > d ? b : d;
  xzu602 = xzu599 = e > a ? e : a;
  xzu600 = xzu599 < xzu598 ? xzu599 : xzu598
}
var xzu624, xzu625, xzu626, xzu627, xzu628, xzu629, xzu630, xzu631, xzu632, xzu633 = 13,
  xzu634;

function zto1448(b, d) {
  if (b != xzu630 || zto1451(xzu630) && d != xzu631)
      if (xzu632 = !1, xzu634.stop(), zto1523(b), xzu630 = b, xzu631 = d, zto1451(b) && (zto1471(b).seed = d, 2 == xzu630 ? (zto1523(d), zto1471(b).speed = 60 + zto1496(141 * zto1524(), zto1521(100)), zto1471(b).acceleration = zto1496(zto1471(b).speed, 6) + zto1496(zto1471(b).speed * zto1524(), 3 * zto1521(100)), zto1523(b)) : 4 == xzu630 ? (zto1523(d), zto1471(b).speed = 20 + zto1496(141 * zto1524(), zto1521(100)), zto1471(b).acceleration = zto1496(zto1471(b).speed * zto1521(100) + zto1471(b).speed * zto1524(),
              20 * zto1521(100)), zto1523(b)) : 7 == xzu630 ? (zto1523(d), zto1524() < zto1521(33) ? (zto1471(b).speed = 200, zto1471(b).acceleration = 400) : (zto1471(b).speed = 300 + zto1496(100 * zto1524(), zto1521(100)), zto1471(b).acceleration = zto1496(zto1471(b).speed, 2) + zto1496(3 * zto1471(b).speed * zto1524(), 2 * zto1521(100))), zto1523(b)) : 8 == xzu630 && (zto1523(d), zto1471(b).speed = 200 + zto1496(300 * zto1524(), zto1521(100)), zto1471(b).acceleration = zto1471(b).speed, zto1523(b))), zto1450(xzu630)) zto1467();
      else {
          var e = zto1471(xzu630);
          xzu624 = e.w;
          xzu625 =
              e.h;
          zto1523(e.seed);
          zto1473([xzu624, xzu625, e.speed, e.acceleration]);
          zto1457();
          zto1461();
          zto1475()
      }
}

function zto1449() {
  return xzu633 - 4
}

function zto1450(b) {
  return b >= zto1449()
}

function zto1451(b) {
  return 1 < b && b < zto1449()
}

function zto1452() {
  function b() {
      xzu634.calculate()
  }

  function d(a, f) {
      0 < f && (xzu629[a] += f, xzu629[a + 1] += f, xzu629[a + 2] += f)
  }

  function e(a) {
      return xzu629[a + 2] > xzu629[a] && xzu629[a + 2] > xzu629[a + 1]
  }
  this.thread = -1;
  this.positionY = this.state = 0;
  this.radiusMin = 8;
  this.radiusMax = 32;
  this.oldRed = [0, 0];
  this.brightness = [0, 0, 0];
  this.matrix = null;
  this.stop = function() {
      -1 != this.thread && (clearTimeout(this.thread), this.thread = -1, this.matrix = null, zto1475())
  };
  this.init = function() {
      this.state = 0;
      this.positionY = 1;
      this.oldRed = [zto1471(xzu630).colorLand[0],
          zto1471(xzu630).colorOcean[0]
      ];
      this.brightness = [zto1471(xzu630).borderAlgo[3], zto1471(xzu630).borderAlgo[4], 90];
      this.calculate()
  };
  this.calculate = function() {
      if (0 == this.state) {
          var a = zto1522();
          zto1523(zto1471(xzu630).borderAlgo[2]);
          zto1473([xzu624, xzu625, zto1471(xzu630).borderAlgo[0], zto1471(xzu630).borderAlgo[1]]);
          zto1523(a);
          this.matrix = zto1474();
          this.state++;
          this.thread = setTimeout(b, 0)
      } else {
          a = 8 == zto1208() ? 3 : 40;
          a = xzu625 - this.positionY - 1 < a ? xzu625 - this.positionY - 1 : a;
          a = this.positionY + a;
          for (var f, c, g = this.positionY; g <
              a; g++)
              for (var h = 1; h < xzu624 - 1; h++)
                  if (c = h + g * xzu624, f = 4 * c, e(f)) this.dyeDeepOceanLand(f, c, 1);
                  else {
                      this.dyeDeepOceanLand(f, c, 0);
                      c = h;
                      var l = g;
                      (1 < c && e(f - 4) || c < xzu624 - 2 && e(f + 4) || 1 < l && e(f - 4 * xzu624) || l < xzu625 - 2 && e(f + 4 * xzu624)) && this.calculateDiameter(h, g)
                  } g = this.positionY - this.radiusMax;
          g = 1 > g ? 1 : g;
          xzu627.putImageData(xzu628, 0, 0, 1, g, xzu624 - 2, a - g);
          this.positionY = a;
          this.positionY >= xzu625 - 1 ? this.stop() : this.thread = setTimeout(b, 8 == zto1208() ? 333 : 0);
          8 != zto1208() && zto1216()
      }
  };
  this.dyeDeepOceanLand = function(a, f, c) {
      d(a,
          Math.floor(this.oldRed[c] + this.brightness[c] * this.matrix[f] / 1E4) - xzu629[a])
  };
  this.dyeOceanLand = function(a, f, c, g, h) {
      d(a, Math.floor(this.oldRed[g] + (1 - f / c) * h) - xzu629[a])
  };
  this.calculateDiameter = function(a, f) {
      var c = a - this.radiusMax;
      var g = f - this.radiusMax;
      var h = a + this.radiusMax,
          l = f + this.radiusMax;
      c = 1 > c ? 1 : c;
      h = h > xzu624 - 2 ? xzu624 - 2 : h;
      l = l > xzu625 - 2 ? xzu625 - 2 : l;
      for (var k = 1 > g ? 1 : g; k <= l; k++)
          for (var m = c; m <= h; m++)
              if (g = 4 * (m + k * xzu624), e(g)) {
                  var p = this.radiusMin + (this.radiusMax - this.radiusMin) * this.matrix[m + xzu624 * k] /
                      1E4;
                  if (!(Math.abs(a - m) > p || Math.abs(f - k) > p)) {
                      var n = Math.sqrt((a - m) * (a - m) + (f - k) * (f - k));
                      n >= p || this.dyeOceanLand(g, n, p, 1, this.brightness[2])
                  }
              } else p = 3 + 6 * this.matrix[m + xzu624 * k] / 1E4, Math.abs(a - m) > p || Math.abs(f - k) > p || (n = Math.sqrt((a - m) * (a - m) + (f - k) * (f - k)), n >= p || this.dyeOceanLand(g, n, p, 0, this.brightness[0]))
  }
}

function zto1457() {
  2 == xzu630 ? zto1458([520], [520], [0, 410, 520], [500, 500, 0], [0, 0, 0]) : 8 == xzu630 && zto1458([160], [160], [0, 60, 160], [700, 225, 825], [0, 0, 0])
}

function zto1458(b, d, e, a, f) {
  var c = b.length - 1,
      g = xzu624 + xzu625;
  g *= g;
  for (var h, l, k = e.length, m = k - 1; 0 <= m; m--) e[m] *= e[m];
  var p = Array(k),
      n = Array(k),
      r = Array(k),
      q = zto1474();
  if (void 0 === f)
      for (f = Array(k), m = k - 1; 0 <= m; m--) f[m] = 0;
  for (m = 1; m < k; m++) p[m] = e[m] - e[m - 1], n[m] = a[m] - a[m - 1], r[m] = f[m] - f[m - 1];
  for (var t = xzu624 - 1; 0 <= t; t--)
      for (var u = xzu625 - 1; 0 <= u; u--) {
          h = g;
          for (m = c; 0 <= m; m--) l = (t - b[m]) * (t - b[m]) + (u - d[m]) * (u - d[m]), h = l < h ? l : h;
          l = a[k - 1];
          var v = f[k - 1];
          for (m = 1; m < k; m++)
              if (h < e[m]) {
                  l = a[m - 1] + zto1498((h - e[m - 1]) * n[m], p[m]);
                  v = f[m -
                      1] + zto1498((h - e[m - 1]) * r[m], p[m]);
                  break
              } zto1459(xzu624 * u + t, l, v, q)
      }
}

function zto1459(b, d, e, a) {
  500 > d ? a[b] = zto1496(a[b] * d * 2, 1E3) : 500 < d && (a[b] += zto1496(2 * (1E4 - a[b]) * (d - 500), 1E3));
  a[b] += zto1496(e * (10 * d - a[b]), 1E3)
}
(function() {
  var b;
  window.zto1460 = function() {
      b = Array(xzu633);
      b[0] = {
          w: [0, 2E3, 8E3, 1E4],
          r: [200, 200, 255, 255],
          g: [200, 200, 255, 255],
          b: [200, 200, 255, 255]
      };
      b[1] = {
          w: [0, 4E3, 5E3, 6E3, 1E4],
          r: [25, 0, 100, 0, 25],
          g: [25, 0, 0, 0, 25],
          b: [25, 0, 0, 0, 25]
      };
      b[2] = {
          w: [0, 500, 2500, 3E3, 4E3, 5E3, 5500, 8600, 1E4],
          r: [5, 5, 20, 255, 252, 40, 40, 20, 30],
          g: [25, 25, 100, 255, 248, 180, 180, 90, 140],
          b: [90, 90, 180, 255, 217, 10, 10, 10, 10]
      };
      b[3] = {
          w: [0, 400, 1800, 2E3, 3200, 4500, 6E3, 7700, 8500, 9500, 1E4],
          r: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
          g: [10, 10, 40, 50, 100, 40, 80, 120, 55,
              230, 230
          ],
          b: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
      };
      b[4] = {
          w: [0, 300, 1400, 1700, 3E3, 4E3, 1E4],
          r: [10, 10, 20, 10, 10, 170, 212],
          g: [20, 20, 60, 100, 100, 110, 170],
          b: [70, 70, 160, 30, 30, 60, 120]
      };
      b[5] = {
          w: [0, 1E3, 3E3, 3500, 4E3, 4500, 7E3, 7500, 8E3, 1E4],
          r: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
          g: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
          b: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
      };
      b[6] = {
          w: [0, 700, 2650, 3200, 5E3, 8E3, 1E4],
          r: [10, 10, 60, 255, 255, 200, 200],
          g: [10, 10, 60, 255, 255, 200, 200],
          b: [80, 80, 255, 255, 255, 200, 200]
      };
      b[7] = {
          w: [0, 1E3, 3E3, 4999, 5E3, 1E4],
          r: [5, 5, 40, 120,
              0, 210
          ],
          g: [15, 15, 50, 160, 0, 240],
          b: [45, 45, 110, 255, 0, 210]
      };
      b[8] = {
          w: [0, 1E3, 3E3, 4999, 5E3, 6500, 8E3, 9500, 1E4],
          r: [5, 5, 25, 50, 40, 10, 40, 12, 40],
          g: [25, 15, 65, 70, 160, 55, 140, 60, 100],
          b: [60, 45, 110, 240, 60, 20, 75, 25, 55]
      }
  };
  window.zto1461 = function() {
      xzu626.width = xzu624;
      xzu626.height = xzu625;
      xzu627 = xzu626.getContext("2d", {
          alpha: !1
      });
      var d = xzu627.getImageData(0, 0, xzu624, xzu625);
      xzu629 = d.data;
      for (var e = b[xzu630].w, a = b[xzu630].r, f = b[xzu630].g, c = b[xzu630].b, g = zto1474(), h = e.length - 2, l, k = Array(h + 1), m = Array(h + 1), p = Array(h + 1), n = Array(h +
              1), r = h; 0 <= r; r--) k[r] = e[r + 1] - e[r], m[r] = a[r + 1] - a[r], p[r] = f[r + 1] - f[r], n[r] = c[r + 1] - c[r];
      for (var q = xzu624 * xzu625 - 1; 0 <= q; q--)
          for (r = h; 0 <= r; r--)
              if (g[q] >= e[r]) {
                  l = g[q] - e[r];
                  xzu629[4 * q] = a[r] + zto1498(m[r] * l, k[r]);
                  xzu629[4 * q + 1] = f[r] + zto1498(p[r] * l, k[r]);
                  xzu629[4 * q + 2] = c[r] + zto1498(n[r] * l, k[r]);
                  xzu629[4 * q + 3] = 255;
                  break
              } xzu627.putImageData(d, 0, 0);
      zto1470() && zto1282() && zto1470() && (e = zto1281("arena"), xzu627.save(), xzu627.globalAlpha = 1 == xzu630 ? .1 : 1, xzu627.imageSmoothingEnabled = !0, d = 2.8, xzu627.scale(d, d), xzu627.drawImage(e,
          Math.floor((xzu624 / d - e.width) / 2), Math.floor(.5 * xzu625 / d - e.height / 2)), xzu627.restore(), e = zto1281("territorial.io"), xzu627.save(), xzu627.globalAlpha = 1 == xzu630 ? .1 : 1, xzu627.imageSmoothingEnabled = !0, d = .87, xzu627.scale(d, d), xzu627.drawImage(e, Math.floor(.745 * (xzu624 / d - e.width)), Math.floor(.422 * xzu625 / d - e.height / 2)), xzu627.restore());
      xzu632 = !0;
      zto1216()
  };
  window.zto1465 = function() {
      xzu140 = 0;
      for (var d = xzu624 - 1; 0 <= d; d--) xzu661[4 * d + 2] = 3, xzu661[xzu625 * xzu624 * 4 - 4 * d - 2] = 3;
      for (d = xzu625 - 1; 0 <= d; d--) xzu661[d * xzu624 *
          4 + 2] = 3, xzu661[d * xzu624 * 4 + 4 * xzu624 - 2] = 3;
      for (d = xzu624 * xzu625 - 1; 0 <= d; d--) {
          var e = 4 * d;
          3 != xzu661[e + 2] && (xzu629[e + 2] > xzu629[e + 1] && xzu629[e + 2] > xzu629[e] ? xzu661[e + 2] = 2 : (xzu661[e + 2] = 1, xzu140++))
      }
      if (3 == xzu630)
          for (e = xzu624 * xzu625 - 1; 0 <= e; e--) d = 4 * e, xzu629[d] == xzu629[d + 1] && xzu629[d] == xzu629[d + 2] && (xzu661[d + 2] = 3, xzu140--)
  }
})();

function zto1467() {
  var b;
  xzu630 == zto1449() ? b = "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" : xzu630 ==
      zto1449() + 1 ? b = "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Uki9DymBeCF6566Hg8ejjAhEKKAo5t68Hg8ogjKgEeJAy5Z7A7W8yejKaFUHAy5Z7K5oCB6c6BoFA8jUUF9AyGFZ7U5eFBg88A9BeCjyQGUDA7Fj7U5eIA8dUDloOGoCA7Fj7e5oJA567UJG6AeGAUCE957o56687Ae7KBAyCAex57o5876eDAexI7AO87F8768E9I8AY86F976KDAUxI9As8o5977ArJKEwo6H69EU9UDwy6R69EA9eDwo6b69D9JyCwo6b69D8J6AO8y6l67D9J6AKCAO8U6l67D8J7As8U6b67D8J8Ai8e6b67D7J9Ai8e6R69D6J8A5wU6R7KaAyCJ9A6AoBv7F877oLAKKK9A7AKDv8F5778A7AoIK8BY79Fl8oCA6AzIBs8Ar8CAfHB5wKq8EALHBs8Ur9LBi8os9JBY86ExJBO87E59JA9w9Ev9KBL7A8xAr79KCL8A5xUiAUH8FAVDA5xogAyE8GAK9eBA9A5x6DKHAb9eCBKBJUCA8A5x8DSAA6AoDJUDAeBAeFyKe8ABo9AEAKDAoCyoe799Be9AIzUd799BU89A9zod798BU88BFPDH97BA88A9z7Db9oKI7A9z8Db9oJI8A85UDR9yJI6A85WDH96A6AUBIoJ5YC9796Ao87BFaC8796Ao8oN5aC988KND8AY89C8878BUqAO9Ka877BZkC5876BjlCw7yO5lC587eP5mCw7eP5nCm7UQ5oCm7KP5oC6868B55oC8868BjqC987AI5uC887KE5yC7866AP58C886eC559C8999AEYC8999AEZC7999AEZC8999AEZC7999AEZC6999AEaC6999AEbCx99AEcCx99AEcCn99AEeCd99AEeCT99AEgCJ99AEhB9999AEiB7999AEjB7999AEkB6DUB999AEDB7C8BJ99AD99BydBJ99AEABoaBJ99AEDBobA7999AEEBefAn99AEGBJ99AEqAUDAx99AEyAKFAn99AEwA6999AEuA8999AEsA9999AEqBd99AEoBn99AEoBx99AEnBo8eC999AD5oQIKC999AD57By79Ad99AD58Ao89Ad99AEzAT99AJ99AJLAT99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AGjAT99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AA6e" :
      xzu630 == zto1449() + 2 ? b = "BFYeAAAA96AT5oA6nA7c9a9BLhEKDHd99ABlc9a8BVhEKCHn99ABmdC66BLiEACH5999ABldM6oMNfS999ABldW6eLNpR999ABnT9AK9M6eLNU9oCCd99ABodM6ULNU9yCCd99ABodC6eKNU9yECT99ABqc7aeLNA97AUBAKU999ABsc6aeKM8KACCJ99ABvc5aeKM7DKFHABB5999ABwc6aUJMyiA7AyCGKDBn99ABvc7aUJMojB7F9AeL999ABxc6aKKMekB8FeBAeEBJ99AByc6aKKMUlCKxAoBAoK999AByc6aALMAmCevBKL999ABwc7Z7BVUD9CysB7A7999ABvc7ZyNMKnCotB7A8999ABvc6ZoNMKoCosB9A7999ABvc6ZUMMoRAeKAKJC6EUTA6999ABwc6ZKMMyPAyJAeICyrB9A6999ABxc5ZAMM6BoHA8AeJCoqCAH999ABwcqzBVaBoHA9AUDAUECoqCKG999ABwcqyBfaBeIA9AeCAoCCerCKG999ABwc5Y9BVaBoJA7DosCKH999ABvc5Y7BpaBeKAelE6CAH999ABvc5YyQM6BoJAyiE7CKG999ABvc5YyQM6BoKAyhE7CUE999ABwc6YoPM8BeJA6DewAeBB8An99ABxcqtBzdBKLAoiFn99AB69cgtBzeBAMAoiFx99AB68OoCN7YyNNKLBUDDy5x99AB68OAJNqsBpfBKyF5999AB68N9BBgYyNNUME9F6999AB66OKKNCuBfgBUxF8999AB6pqBBdYyNNeMFA57999AB6prBBcYyNNoKFU57999AB6pqBVaYoNNyKFo56999AB6fqBpZYUNN6A9Fy56999AB6frBzXYKNN7A9Fy57999AB6fsBpUYeKN9A9F7F6999AB6fuBfQY7A9N8BK56F6999AB6pxBLNY8A9N8BK56F7999AB6pzA9LWwA9N8BK56F7999AB6p5yFLWwA9N8BA58F5999AB66P6AfMY7A7OKKF8F5999AB66P9ALKY8A6OUKF8D8AUP999AB67a7ZAFOeKF9D7AeO999AB67a7ZAFOeKGAkAeN999AB68aq5eEOyJGKkAUN999AB68aq5UFO6A6GekAUM999AB69GUCAUCHUBMW5eEAUCVohAoL999AB7A58A9HUBMM5oDAUDV6AKCC8AeL999AB7e5oKHU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" :
      xzu630 == zto1449() + 3 && (b = "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XKzQoeweUfKVGyEAKMXKzQoewUIA6A6fUVG7AKDBCfFV6oewKIgyVHUIXU5V6oewKIgyVfU5V6ycwUIgyVfU5V66C6weIgyVfU5V67CmRCUEAXGFV68B9AKC8QC9e6Ff68B68VC9e6Ff69A68fC8e6Fp69AwhC7e6F5999AAHC6e6F6999AAHC5e6F6999AAKCXFF8999AAKCNFF8999AALCDFF7999AAOB8eylAeR999AAQB6eykAyQ999AARB5eyjA6B6999AASBXED8A6CJ99AAPBDED9A6CT99AAPA7eyoA6CWyBH5yFeopA6CWlCv5yDeoqA8CCkC6H7Ad8KrA8CMfDA7UHD9AYhAtCEoNB7W9DK7UHD9AifA6x7E8BoQXAfHKHD9AYgA7xyxByPXAfGyND8AigA8xoxB6BqfDA6oOD8AigA9xU5eOBgfDA6oOD8AseBO9K5eQBMeDK6ePD8AifBY9A5eQBMeDK6ePD8AYfBi9A5oQBCdDU6ePD8AOgBi9A5yQBCcDU6ePD7AYgBs89FyQBCcDU6oOD6AigBoHAi79FyRBCbDU6oOD6AigByFAs79FyTA9W6DU6oOD6AYhC6v7F6B9A9WyfG6BehAsiC6v8EUCBUYAqYDK67BUhAsiC7v7EAFBKZAgYC9G9BUhAsiDY7emA6BKZAgZC7HAMDeCr6BoBB8vUlA7BKaAgZC6HALvUIA8B8veiA9BAaAgaCe7eIvoIA9B7v7DAKA9ZyDA6Bt5oJA9B7v8BUDBeLBC5eEBAHC9A55XA8BASA9AO68BAEBUNA9ZeEBKFC9A65XA7BKJAeGA9AY8ULBeJZeEBKCDKH5XAePAoBAoGAeKAY8KJB6A8ZeDEyH5XAURAUEAUTAY8UHB8A6ZoBE7A75wAKUAZIA5eUJ999AA8ADeKM999AA78AXBB5999AD7yV999AD7UX999AD67C8999AD6Kh999AD6Ai999AD59D5zUB8sD7zAC8rD9y9AcrD9y9AcrD9y9AcqEFCAUGASpEPBAwuEi99A58tEs99AwtE5999ADwE5999ADwE6999ADvE7999ADuE8999ADtE95WBmJE95WBwIE95VB58HFFVB68GFFUB88FFFUB98EFPTB98FFFUB78HE95VBINFPTA98PFPSA98PFZRA98QFPRA98QFPQA98RFPPBIRDABB9zyL8RC9AUSyUHAoO8RC9AeUx7BACB58RC8AoUxyh8MC6A8B7x6D58LCyNBY96D68JC75UD78KC55UD88QB85VD88UBZXD88VBFYD88WA85ZDSdA95ZC98eA95aB68qA95bBwrA95cBcrA95eBIrA95gA88rA95iAwtA95kActA9999AD8yG588AR98A5999AD9AC999AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AE97");
  b = zto869(b);
  var d = zto1468(1E6 * b[0] + 1E3 * b[1] + b[2]),
      e = zto1468(1E6 * b[3] + 1E3 * b[4] + b[5]);
  d[0] -= zto1471(xzu630).borderAlgo[3];
  d[1] -= zto1471(xzu630).borderAlgo[3];
  d[2] -= zto1471(xzu630).borderAlgo[3];
  zto1471(xzu630).colorLand = d;
  zto1471(xzu630).colorOcean = e;
  xzu624 = 1E3 * b[6] + b[7];
  xzu625 = 1E3 * b[8] + b[9];
  xzu626.width = xzu624;
  xzu626.height = xzu625;
  xzu627 = xzu626.getContext("2d", {
      alpha: !1
  });
  xzu628 = xzu627.getImageData(0, 0, xzu624, xzu625);
  xzu629 = xzu628.data;
  for (var a = b.length, f = !0, c = 0, g = 10; g < a; g++)
      if (f) {
          for (; 0 < b[g]--;) xzu629[c] =
              e[0], xzu629[c + 1] = e[1], xzu629[c + 2] = e[2], xzu629[c + 3] = 255, c += 4;
          f = !1
      } else {
          for (; 0 < b[g]--;) xzu629[c] = d[0], xzu629[c + 1] = d[1], xzu629[c + 2] = d[2], xzu629[c + 3] = 255, c += 4;
          f = !0
      } xzu627.putImageData(xzu628, 0, 0);
  xzu632 = !0;
  xzu634.init();
  zto1216()
}

function zto1468(b) {
  var d = zto1496(b, 65536);
  b -= 65536 * d;
  var e = zto1496(b, 256);
  return [d, e, b - 256 * e]
}
(function() {
  var b;
  window.zto1469 = function() {
      b = Array(xzu633);
      b[0] = {
          name: "White Arena",
          w: 800,
          h: 800,
          speed: 100,
          acceleration: 100,
          seed: 81
      };
      b[1] = {
          name: "Dark Arena",
          w: 800,
          h: 800,
          speed: 100,
          acceleration: 50,
          seed: 43
      };
      b[2] = {
          name: "Island",
          w: 1040,
          h: 1040,
          speed: 200,
          acceleration: 33,
          seed: 0
      };
      b[3] = {
          name: "Mountains",
          w: 960,
          h: 960,
          speed: 60,
          acceleration: 8,
          seed: 0
      };
      b[4] = {
          name: "Desert",
          w: 900,
          h: 900,
          speed: 100,
          acceleration: 5,
          seed: 0
      };
      b[5] = {
          name: "Swamp",
          w: 1E3,
          h: 1E3,
          speed: 100,
          acceleration: 40,
          seed: 0
      };
      b[6] = {
          name: "Snow",
          w: 1E3,
          h: 1E3,
          speed: 100,
          acceleration: 20,
          seed: 0
      };
      b[7] = {
          name: "Doom",
          w: 400,
          h: 400,
          speed: 200,
          acceleration: 100,
          seed: 0
      };
      b[8] = {
          name: "Lake",
          w: 320,
          h: 320,
          speed: 200,
          acceleration: 100,
          seed: 0
      };
      b[9] = {
          name: "Europe",
          colorLand: null,
          colorOcean: null,
          borderAlgo: [240, 120, 100, 30, 35]
      };
      b[10] = {
          name: "World",
          colorLand: null,
          colorOcean: null,
          borderAlgo: [500, 200, 8, 25, 15]
      };
      b[11] = {
          name: "Malay Archipelago",
          colorLand: null,
          colorOcean: null,
          borderAlgo: [500, 200, 0, 25, 30]
      };
      b[12] = {
          name: "Hong Kong",
          colorLand: null,
          colorOcean: null,
          borderAlgo: [200, 100, 10, 35, 30]
      }
  };
  window.zto1470 =
      function() {
          return 2 > xzu630
      };
  window.zto1471 = function(d) {
      return b[d]
  }
})();
var xzu660, xzu661, xzu662, xzu663;

function zto1472() {
  void 0 == xzu660 && (xzu660 = document.createElement("canvas"));
  xzu660.width = xzu624;
  xzu660.height = xzu625;
  xzu662 = xzu660.getContext("2d", {
      alpha: !0
  });
  xzu663 = xzu662.getImageData(0, 0, xzu624, xzu625);
  xzu661 = xzu663.data
}
(function() {
  function b(w, z, x) {
      m[0] = w;
      for (w = 1; w < x; w++) m[w] = m[w - 1] + z, 1E4 <= m[w] ? (m[w] = 9999, z = -z) : 0 > m[w] ? (m[w] = 0, z = -z) : (z += 16384 <= zto1524() ? k : -k, z = z < -l ? -l : z > l ? l : z)
  }

  function d(w, z, x, A) {
      if (x)
          for (x = 0; x < A; x++) f[z * c + w + x] = m[x];
      else
          for (x = 0; x < A; x++) f[z * c + w + x * c] = m[x]
  }

  function e(w, z) {
      var x = w - m[z - 1];
      if (0 != x) {
          var A = 1 + zto1496(Math.abs(x), z - 1);
          A = 0 > x ? -A : A;
          m[z - 1] = w;
          var C = z - 1 - zto1496(Math.abs(x), Math.abs(A));
          C = 1 > C ? 1 : C > z - 2 ? z - 2 : C;
          for (var H = z - 2; H >= C; H--) m[H] += x - (z - 1 - H) * A;
          if (0 > x)
              for (x = z - 2; 1 <= x; x--) 0 > m[x] && (m[x] = -m[x] - 1);
          else
              for (x = z - 2; 1 <= x; x--) 1E4 <= m[x] && (m[x] = 2E4 - m[x] - 1)
      }
  }

  function a(w) {
      for (var z = 0; z < w.length - 1; z++) w[z] = w[z + 1] - w[z];
      w[w.length - 1] = w[w.length - 3]
  }
  var f, c, g, h, l, k, m, p, n, r, q, t, u, v;
  window.zto1473 = function(w) {
      c = w[0];
      g = w[1];
      l = w[2];
      k = w[3];
      f = new Int16Array(c * g);
      h = c > g ? c : g;
      m = new Int16Array(h);
      p = [];
      n = [];
      r = [];
      q = Array(c);
      t = Array(g);
      for (w = c - 1; 0 <= w; w--) q[w] = !1;
      for (w = g - 1; 0 <= w; w--) t[w] = !1;
      u = new Int16Array(c);
      v = new Int16Array(g);
      w = h;
      var z = zto1524() % 1E4,
          x = zto1524() % (2 * l + 1) - l;
      b(z, x, w);
      w = v;
      z = m;
      x = g;
      for (var A = 0; A < x; A++) w[A] =
          z[A];
      d(0, 0, !0, c);
      w = f[0];
      z = h;
      x = zto1524() % (2 * l + 1) - l;
      b(w, x, z);
      w = u;
      z = m;
      x = c;
      for (A = 0; A < x; A++) w[A] = z[A];
      d(0, 0, !1, g);
      a(u);
      a(v);
      b(f[c - 1], u[c - 1], g);
      d(c - 1, 0, !1, g);
      b(f[c * (g - 1)], v[g - 1], c);
      e(f[c * g - 1], c);
      d(0, g - 1, !0, c);
      q[c - 1] = q[0] = !0;
      t[g - 1] = t[0] = !0;
      w = c;
      p.push(0);
      n.push(w);
      r.push(!0);
      w = g;
      p.push(0);
      n.push(w);
      r.push(!1);
      a: for (;;) {
          w = p.length - 1;
          for (z = w - 1; 0 <= z; z--) n[z] > n[w] && (w = z);
          if (5 > n[w]) break a;
          z = p[w] + zto1496(n[w], 2);
          if (r[w]) {
              x = void 0;
              var C;
              A = z;
              for (var H = 0, F = 0; F < g - 1;) {
                  for (C = H + 1; C < g; C++)
                      if (t[C]) {
                          F = C;
                          break
                      } C = F - H + 1;
                  b(f[A +
                      c * H], 0 == H ? u[A] : m[x - 1] - m[x - 2], C);
                  e(f[F * c + A], C);
                  d(A, H, !1, C);
                  x = C;
                  H = F
              }
              q[A] = !0
          } else {
              x = void 0;
              A = z;
              for (F = H = 0; F < c - 1;) {
                  for (C = H + 1; C < c; C++)
                      if (q[C]) {
                          F = C;
                          break
                      } C = F - H + 1;
                  b(f[A * c + H], 0 == H ? v[A] : m[x - 1] - m[x - 2], C);
                  e(f[A * c + F], C);
                  d(H, A, !0, C);
                  x = C;
                  H = F
              }
              t[A] = !0
          }
          x = p[w] + n[w] - z;
          A = r[w];
          p.push(z);
          n.push(x);
          r.push(A);
          n[w] = z - p[w] + 1
      }
      for (w = 0; w < c; w++)
          if (!q[w])
              for (z = 0; z < g; z++) t[z] || (x = f[z * c + w - 1] + f[(z - 1) * c + w], A = 2, q[w + 1] && (A++, x += f[z * c + w + 1]), t[z + 1] && (A++, x += f[(z + 1) * c + w]), f[z * c + w] = zto1496(x, A))
  };
  window.zto1474 = function() {
      return f
  };
  window.zto1475 =
      function() {
          f = null
      }
})();

function zto1496(b, d) {
  return Math.floor(b / d + 1 / (2 * d))
}

function zto1497(b) {
  return b * b
}

function zto1498(b, d) {
  return 0 > b ? -Math.floor(-b / d + 1 / (2 * d)) : zto1496(b, d)
}

function zto1499(b, d) {
  for (var e = zto1496(b + 1, 2), a = 0; a < d; a++) e = zto1496(e + zto1496(b, e), 2);
  return e
}

function zto1500(b, d) {
  return 1 > b ? 0 : zto1499(b, d)
}

function zto1501(b, d, e, a, f, c, g, h) {
  return !(b + e <= f || d + a <= c || b >= f + g || d >= c + h)
}

function zto1502(b, d, e, a, f, c, g, h) {
  return b <= f && d <= c && b + e >= f + g && d + a >= c + h
}
(function() {
  var b, d, e, a, f, c;
  window.zto1503 = function() {
      if (void 0 === b) {
          b = !1;
          a = Math.floor((xzu610 ? .026 : .018) * xzu600);
          a = 11 > a ? 11 : a;
          f = Math.floor(.5 * a);
          c = Math.floor(.5 * a);
          e = xzu253 + a + xzu255;
          d = Array(3);
          d[0] = xzu595;
          d[1] = xzu596;
          var g = xzu260;
          d[2] = document.createElement("a");
          d[2].appendChild(document.createTextNode("Cookie Policy"));
          d[2].title = "Cookie Policy";
          d[2].target = "_blank";
          d[2].href = g;
          d[2].style.font = e;
          d[2].style.textAlign = "right";
          d[2].style.color = xzu239;
          d[2].style.position = "absolute";
          d[2].style.padding =
              "0px";
          d[2].style.margin = "0px";
          d[2].style.top = Math.floor(c + 1.85 * (a + c)) + "px";
          d[2].style.right = f + "px";
          zto1505(!0)
      }
  };
  window.zto1505 = function(g) {
      zto1206(g);
      b != g && ((b = g) ? document.body.appendChild(d[2]) : d[2].remove())
  };
  window.zto1506 = function() {
      if (b) {
          xzu594.textAlign = xzu252;
          xzu594.textBaseline = xzu248;
          xzu594.font = e;
          xzu594.fillStyle = xzu239;
          for (var g = d.length - 1; 0 <= g; g--) "string" === typeof d[g] && xzu594.fillText(d[g], xzu601 - f, c + g * (a + c))
      }
  }
})();
(function() {
  function b() {
      e = !0;
      a = -1;
      f = Array(4);
      for (var h = 3; 0 <= h; h--) f[h] = !1;
      h = Math.floor(1 + .02 * xzu600);
      c = Array(4);
      g = Array(4);
      g[1] = g[3] = c[0] = c[2] = 0;
      g[0] = c[3] = -h;
      c[1] = g[2] = h
  }

  function d() {
      if (-1 != a)
          if (0 == xzu139) zto1510();
          else {
              zto841();
              for (var h = !1, l = 3; 0 <= l; l--) f[l] && (h = !0, xzu313 += c[l], xzu314 += g[l], zto1388(c[l], g[l]), zto1018());
              h ? zto856() : zto1510()
          }
  }
  var e = !1,
      a, f, c, g;
  window.zto1508 = function(h) {
      0 != xzu139 && (zto841(), e || b(), f[h] = !0, -1 == a && (a = setInterval(d, 20), d()))
  };
  window.zto1509 = function(h) {
      if (0 != xzu139 &&
          (e || b(), f[h] = !1, -1 != a)) {
          h = !1;
          for (var l = 3; 0 <= l; l--) h = h || f[l];
          h || zto1510()
      }
  };
  window.zto1510 = function() {
      if (e && -1 != a) {
          for (var h = 3; 0 <= h; h--) f[h] = !1;
          clearInterval(a);
          a = -1
      }
  }
})();
(function() {
  var b;
  window.zto1512 = function() {
      return b
  };
  window.zto1513 = function(d, e) {
      if (0 == xzu578[d].length || !zto1296(e) || !zto1300(e) && zto1303(e) == d) return !1;
      for (var a = 21; 0 <= a; a--) {
          if (21 == a) {
              var f = xzu578[d],
                  c = e,
                  g = zto1285(c);
              c = zto1286(c);
              var h = 0;
              var l = zto1285(f[0]);
              var k = zto1286(f[0]);
              l = Math.abs(l - g) + Math.abs(k - c);
              for (k = f.length - 1; 1 <= k; k--) {
                  var m = zto1285(f[k]);
                  var p = zto1286(f[k]);
                  m = Math.abs(m - g) + Math.abs(p - c);
                  m < l && (l = m, h = k)
              }
              b = f[h]
          } else b = xzu578[d][zto1496(a * xzu578[d].length, 21)];
          a: {
              k = b;h = e;f = zto1285(k);
              g = zto1286(k);c = zto1285(h);h = zto1286(h);l = Math.abs(c - f) + Math.abs(h - g);
              if (!(2 > l))
                  for (m = 0; m < l; m++)
                      if (k = Math.abs(c - zto1285(k)) >= Math.abs(h - zto1286(k)) ? k + xzu15[c > f ? 1 : 3] : k + xzu15[h > g ? 2 : 0], zto1296(k)) {
                          if (0 == m || m + 20 < l) break;
                          f = !0;
                          break a
                      } f = !1
          }
          if (f) return !0
      }
      return !1
  };
  window.zto1515 = function(d, e, a, f) {
      return 0 == d || d + 20 < e ? null : [a, f]
  }
})();

function zto1518() {
  function b() {
      xzu616.calculate()
  }
  this.w = 50;
  this.context = this.canvas = null;
  this.cycle = -3;
  this.cycleAdd = 0;
  this.calculate = function() {
      this.cycle++;
      if (-2 == this.cycle) setTimeout(b, 250);
      else if (-1 == this.cycle) this.canvas = document.createElement("canvas"), this.canvas.width = this.w, this.canvas.height = this.w, this.context = this.canvas.getContext("2d", {
          alpha: !0
      }), setTimeout(b, 0);
      else {
          for (var d = performance.now(), e = this.cycle; 0 <= e; e--) {
              for (var a = this.context.getImageData(0, 0, this.w, this.w), f = a.data,
                      c = this.w * this.w * 4 - 4; 0 <= c; c--) f[c] = Math.floor(256 * Math.random()), f[c + 1] = Math.floor(256 * Math.random()), f[c + 2] = Math.floor(256 * Math.random()), f[c + 3] = Math.floor(256 * Math.random());
              this.context.putImageData(a, 0, 0);
              for (c = this.w; 0 < c; c--) this.context.fillStyle = "rgba(" + Math.floor(256 * Math.random()) + "," + Math.floor(256 * Math.random()) + "," + Math.floor(256 * Math.random()) + "," + Math.random() + ")", this.context.fillText(Math.floor(1E6 * Math.random()).toString(), 100 * Math.random(), 100 * Math.random())
          }
          50 > performance.now() -
              d && 20 > this.cycle ? (this.cycle += 10 <= this.cycle ? 1 : 0, this.cycleAdd = 0, setTimeout(b, 0)) : 2 > this.cycleAdd && 20 > this.cycle ? (this.cycleAdd++, this.cycle--, setTimeout(b, 0)) : (xzu617 = this.cycle, xzu616 = this.context = this.canvas = null)
      }
  }
}
(function() {
  var b, d;
  window.zto1520 = function() {
      d = Array(101);
      for (var e = d.length - 1; 0 <= e; e--) d[e] = zto1496(32768 * e, 100);
      zto1523(0)
  };
  window.zto1521 = function(e) {
      return d[e]
  };
  window.zto1522 = function() {
      return zto1496(b - 1, 2)
  };
  window.zto1523 = function(e) {
      b = 2 * e % 32768 + 1
  };
  window.zto1524 = function() {
      return b = 167 * b % 32768
  }
})();
(function() {
  function b(n) {
      zto833(d, p);
      xzu575[d] += n ? e : 0;
      zto1367(d, m)
  }
  var d, e, a, f, c, g, h, l, k, m, p;
  window.zto1525 = function(n, r, q, t, u) {
      k = n;
      p = r;
      d = q;
      c = zto1285(t);
      g = zto1286(t);
      h = zto1285(u);
      l = zto1286(u);
      f = a = zto1287(c, g);
      m = zto1360(d, p); - 1 == m ? (zto1295(a, d) && zto1306(a), b(!1), n = !1) : (e = zto1362(d, m), n = !0);
      if (n && (zto1295(a, d) && zto1306(a), n = zto1496(e, 100), e -= 1 > n ? 1 : n, e <= xzu145 ? (b(!1), n = !1) : (zto1364(d, m, e), n = !0), n))
          if (n = zto1287(c, g), a = Math.abs(h - c) >= Math.abs(l - g) ? n + xzu15[h > c ? 1 : 3] : n + xzu15[l > g ? 2 : 0], c = zto1285(a), g = zto1286(a),
              zto830(k, a), n = zto1296(a) ? !1 : !0, n) zto1297(a) && zto1311(a, d);
          else a: {
              if (zto1300(a)) n = xzu135;
              else if (n = zto1303(a), n == d) {
                  b(!0);
                  break a
              }
              zto833(d, p);zto1367(d, m);xzu576[d].push(f);zto1365(d, e, n);zto807(d, !0)
          }
  }
})();
(function() {
  var b, d, e, a;
  window.zto1534 = function() {
      e = !0;
      a = "rgb(" + xzu629[0] + "," + xzu629[1] + "," + xzu629[2] + ")";
      var f = 2 == xzu630 ? !0 : e = !1;
      if (f) d = null;
      else {
          b = zto1496(96, 4);
          if (1 == xzu630) {
              f = 0;
              var c = 160
          } else f = 128, c = 32;
          a = "rgb(" + f + "," + f + "," + f + ")";
          d = Array(4);
          for (var g, h, l = 3; 0 <= l; l--) {
              d[l] = document.createElement("canvas");
              g = 0 == l % 2 ? xzu624 : b;
              h = 0 == l % 2 ? b : xzu625 + 2 * b;
              d[l].width = g;
              d[l].height = h;
              var k = d[l].getContext("2d", {
                      alpha: !1
                  }),
                  m = k.getImageData(0, 0, g, h),
                  p = m.data;
              if (0 == l % 2)
                  for (var n = b - 1; 0 <= n; n--) {
                      var r = c + Math.floor((n +
                          1) * (f - c) / (b + 1));
                      for (var q = g - 1; 0 <= q; q--) {
                          var t = 4 * ((0 == l ? b - n - 1 : n) * g + q);
                          p[t] = r;
                          p[t + 1] = r;
                          p[t + 2] = r
                      }
                  } else {
                      for (q = b - 1; 0 <= q; q--)
                          for (r = c + Math.floor((q + 1) * (f - c) / (b + 1)), n = h - 1 - b; n >= b; n--) t = 4 * (n * g + (3 == l ? b - q - 1 : q)), p[t] = r, p[t + 1] = r, p[t + 2] = r;
                      for (var u = 1; 0 <= u; u--)
                          for (q = b - 1; 0 <= q; q--)
                              for (n = b - 1; 0 <= n; n--) r = (Math.pow(q * q + n * n, .5) + 1) / (b + 1), r = 1 < r ? 1 : r, r = c + Math.floor(r * (f - c)), t = 4 * ((0 == u ? b - n - 1 : n + u * (h - b)) * g + (1 == l ? q : b - q - 1)), p[t] = r, p[t + 1] = r, p[t + 2] = r
                  }
              k.putImageData(m, 0, 0)
          }
          xzu627.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
          xzu627.fillRect(0,
              0, xzu624, 1);
          xzu627.fillRect(0, xzu625 - 1, xzu624, 1);
          xzu627.fillRect(0, 0, 1, xzu625);
          xzu627.fillRect(xzu624 - 1, 0, 1, xzu625)
      }
  };
  window.zto1537 = function() {
      var f = e ? 0 : -b;
      zto1502(f, f, xzu624 - 2 * f, xzu625 - 2 * f, xzu615.camX, xzu615.camY, xzu615.camW, xzu615.camH) || (xzu594.fillStyle = a, xzu594.fillRect(0, 0, xzu601, xzu602))
  };
  window.zto1538 = function() {
      e || (zto1501(0, -b, xzu624, b, xzu615.camX, xzu615.camY, xzu615.camW, xzu615.camH) && xzu594.drawImage(d[0], xzu615.mapX, xzu615.mapY - b), zto1501(xzu624, -b, b, xzu625 + 2 * b, xzu615.camX, xzu615.camY,
          xzu615.camW, xzu615.camH) && xzu594.drawImage(d[1], xzu615.mapX + xzu624, xzu615.mapY - b), zto1501(0, xzu625, xzu624, b, xzu615.camX, xzu615.camY, xzu615.camW, xzu615.camH) && xzu594.drawImage(d[2], xzu615.mapX, xzu615.mapY + xzu625), zto1501(-b, -b, b, xzu625 + 2 * b, xzu615.camX, xzu615.camY, xzu615.camW, xzu615.camH) && xzu594.drawImage(d[3], xzu615.mapX - b, xzu615.mapY - b))
  }
})();
(function() {
  function b(c) {
      6 == zto1208() ? zto1192() : 8 != zto1208() && zto1025()
  }

  function d(c) {
      var g = new FileReader;
      g.addEventListener("loadend", function() {
          zto1580(new Uint8Array(g.result))
      });
      g.readAsArrayBuffer(c.data)
  }

  function e(c) {
      zto1221(c.code)
  }

  function a(c) {
      xzu603 && console.log("socketOnError: " + c)
  }
  var f;
  window.zto1539 = function() {
      if (void 0 !== f && f.readyState != WebSocket.CLOSED) return !1;
      f = new WebSocket(xzu603 ? "wss://territorial.io/debugging/" : "wss://territorial.io/socket/");
      f.onopen = b;
      f.onmessage = d;
      f.onclose =
          e;
      f.onerror = a;
      return !0
  };
  window.zto1540 = function() {
      return void 0 === f || f.readyState == WebSocket.CLOSED
  };
  window.zto1541 = function() {
      return void 0 !== f && f.readyState == WebSocket.OPEN
  };
  window.zto1542 = function(c) {
      f.readyState == WebSocket.OPEN && f.send(c)
  };
  window.zto1543 = function(c) {
      void 0 === f || f.readyState != WebSocket.OPEN && f.readyState != WebSocket.CONNECTING || f.close(c)
  }
})();
(function() {
  function b() {
      e = !1;
      0 < a && (a--, e = !0, d.play())
  }
  var d, e, a;
  window.zto1548 = function() {
      if (void 0 === d) {
          e = !1;
          a = 0;
          var f = document.createElement("audio");
          f.src = "data:audio/wav;base64,UklGRnwIAABXQVZFZm10IBAAAAABAAEAIlYAACJWAAABAAgAZGF0YVgIAAB/f39/f39/f39/f35+fn5+fn59fX19fHx8fHx8fHx8fHx8fH+AgH59fnt/iYaRko6JeXZtcnV4hoKEd2trbWp0c3N5c3t/hpCYnZ2enp+fn5+enZ2cmZOGgHZsZGJiYV9fXl5gXmRkZ2JlZWZmZmZnaG9ycHFwcW9wc3Z2dXt9f4WIhomKioSIhYSJjJOPkpCTjZGKiI6JjIyJhoeEg4OJjouWk4aHgX6BhnyDfXaFgX+AgXZ8eXR2gn6AiYiJhoaJjIaMioWFgoeJg4B+f3+Hh4mIgYOCgoGDg4J5cnFzcHJubXJ0Z25tbHBuc3NwbG51dnx+eXyDfIB9fXp8fICAgoCAgHx+eX19eXl3dnh8fn5+f318fHqAgYODgYCCgoCAgYCAgICAg4WGhoWEhomGg4OCgoGAgH18eXp8fHt8fX+AgHx+gICDg4OFiImJiIeHiIeHiIeGhoaFhoeGhYmJh4N+fH+Ag4OBgYCAgICBgYGCgoKBgH9+fn+Cg4OAgH+Afn18eXl5eHl6d3d2dnV2dnh4d3p7e3x8fHp8enl5eHh4d3d3d3p8ent7ent8fnx/f36AgICAfnx8fH19fX1+fX59fXx8fH57eXl5e35+foCAgICAgIKCgoCAgIB/gICAgICAg4KBg4KDhISEhISDg4CBgICAgYKDhYOAgICBg4OCgYCAgIGBgH9/fn5+f4CAgH+AgICAf39+fX1+fn9/fn9+fn59fn19fn+AgYGAgIGAgICAgICAgYCAgICAgICAf35+fn19fXx8fHx8fX19fX19fX19fHx8fHx7e3t8fHx8fHx8fH19fX1+fn5+fn59fX19fX19fX19fn5/f3+AgICAgICAgICAgICAgICAf39/f4B/foCAf39+fn5+fX19fXx8fX5/f39/gICAgICAgICAgICAgICBgYGAgICAgICAgICAf4CAgICAf39/gICAgICAgICAgICAgICAgICAgICAgICAgICAgH9/gH9/f39/gICAgICAgH9/f39/f35+f35+f39+f39/fn5/f39/fn5+fX19fXx8fX18fX18fHx8fH19fXx8fHx8fHx8fHx8fHx9fH19fH19fn5+fn9+fn5+fn5+f39/f35+fn5+f39+fn5+fX1+fX59fX59fX1+fn19fn5+fn9/gH9+fn5+fn5/f3+Af39/f39/gICAgICAgICAgICAgICAgICAgICAgICAgICAgIB/f39+fn5/f39/f4CAgH+AgH9/f39+f35/f39/f39+fn9+fn5/f35+f39+fn59fn9+fn5+f39/f39+f35/f39/f39/f39/f4CAf35+fn5+f39/gICAf39/fn+Af39/gH9/gICAgICAgICAgICAgICAgICAgICAgICAf39/f4B/f3+AgICAgICAgICAgICAgICAgICAgICAgICAgH9/f3+Af35+fn1+fn19fX18fX19fX18fXx8fHx8fHx8fHx8fHx9fX59fH99fXx8f3x8gH1/foB/f39/f3yAf4B8gICAgX99foF8fn18fH1+fX57fX5+eX19fXx/f32Afn59fHx+fn19fIB+gH+AgH5/gH1/gH1+foCAgICAgH5+gICAgYCAgYCAgIB8f4B/f4B/f4GAfoCAgICAfoCAgICAgICAgICAfn+Af35+f35+f31/fnx+fn1+fX5+fn1+fn59fn19fX1/gH5+fX1+fn9+fX59gH9/f35+fn6AfoB/f4B/f39/gH+AgICAgH+AgICAgH+AgICAgICAgICAgICAgICAgICAgICAf3+AgH9+f39+fX9+fn1/fX5+fn5/fX5/fn5+fn5+fn5+f35+fn59fX1+fn5+fn9+fn5+fn1+fn5+fn9/f39+fn5+fn9/f4CAf4CAf4CAf4B/f39/fn9/f35/f39+fn+AgH9/f39/f39/f39/f39/f39/gICAgH9/f39/f39/f4B/gICAgICAgICAgICAgICAgIB/f3+Af39/fn9/f39/f39/f39/f39/f39/f35/f4CAf39/f39/f39/f39/gICAgIB/f39/f4CAf4B/f39/f39/f39/f39/f39/f39/f39/f39/f39/fn5/f39/gH9/gICAgH9/f39/gH9/f39/f39/f39/f39+f39/f39/f39/f39/f3+AgH9/gIB/f39/f39/f39/f39/f39/gH9/gH9/f4B+foCAfn6AgH5+gICAfoCAgH6Af4B+f3+Af36Af39+f39/fn+Afn6AgH5/f4B/f4B/f36AgIB+gH+Af3+AgH9+gH9/foCAgH+AgH9/f4CAgH+AgICAgICAf4B/f39/f3+Af3+Af39/f39/f39/f3+Af4CAgH+Af39/f39/f39/gH+AgICAf39/f39/f39/f4B/gICAf39/f39/f39/f39/f39/f4CAf4B/f3+Af39/f39/f39/f39/f39/f39/f39/f4B/f4B/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/gH9/f39/f39/f39/f4B/f3+Af39/gH9/gH9/f3+Af3+AgH9/gH+AgICAgH+Af4CAgH9/f4B/f4CAgH+AgH+AgIB/f3+Af39/gH9/f39/f39/f39/f39/f39/gICAgH+AgH9/f39/f39/f39/f39/f39/f39/gIB/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/gICAgIB/gIB/gICAgICAf3+AgH9/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/gH9/f4B/f39/f4CAgICAgICAgICAgICAgICAgICAgICAgICAgIB/f39/f3+AgH9/gICAf39/f38=";
          f.setAttribute("preload", "auto");
          f.setAttribute("controls", "none");
          f.style.display = "none";
          document.body.appendChild(f);
          d = f;
          d.onpause = b
      }
  };
  window.zto1550 = function() {
      zto923(0) ? e ? a += 100 > a ? 1 : 0 : (e = !0, d.play()) : a = 0
  }
})();
(function() {
  function b() {
      if (f) zto893() ? zto802() : zto801(), f = !1;
      else {
          if (2 == xzu139 || zto893()) zto799();
          else {
              if (!(n >= p.length))
                  for (; n < p.length && g % 2048 == p[n];) {
                      var q = p[n + 2];
                      if (0 == p[n + 1]) {
                          var t = p[n + 3],
                              u = p[n + 4];
                          u = u == q ? xzu135 : u;
                          zto823(q, t, u);
                          n += 5
                      } else 1 == p[n + 1] ? (t = p[n + 3], zto824(q, t, p[n + 4], p[n + 5]), n += 6) : 2 == p[n + 1] ? (u = p[n + 3], u = u == q ? xzu135 : u, zto825(q, u), n += 4) : (zto909(q, 4), 1 == xzu139 && 0 != xzu568[q] && (zto1343(q), zto1429()), n += 3)
                  }
              zto800();
              c++;
              g = zto1496(c, h)
          }
          f = !0
      }
  }

  function d() {
      if (f) zto801(), f = !1;
      else {
          if (2 == xzu139) zto799();
          else if (e(!0) && 1 < k.length)
              for (; 0 < k.length && e(!1););
          f = !0
      }
  }

  function e(q) {
      var t;
      if (t = c >= g * h) {
          a: {
              t = k.length;
              for (var u = 0; u < t; u++)
                  if (m[u] == g % 2048) {
                      g++;
                      zto1586(k[u]);
                      k.splice(u, 1);
                      m.splice(u, 1);
                      t = !0;
                      break a
                  } t = !1
          }
          t = !t
      }
      if (t) return q && zto799(), !1;
      zto800();
      c++;
      return !0
  }
  var a, f, c, g, h, l, k, m, p, n, r;
  window.zto1553 = function() {
      a = 28;
      f = !1;
      p = [];
      g = c = n = 0;
      h = 7;
      r = 0;
      l = xzu137 || xzu138 ? xzu150 ? setInterval(zto802, 66) : setInterval(b, a) : setInterval(d, a);
      k = [];
      m = []
  };
  window.zto1554 = function() {
      zto1566();
      l = setInterval(b, a)
  };
  window.zto1555 =
      function(q) {
          p = q;
          n = 0
      };
  window.zto1556 = function(q) {
      for (var t = 0; t < q.length; t++) p.push(q[t])
  };
  window.zto1557 = function() {
      return g
  };
  window.zto1558 = function() {
      return c
  };
  window.zto1559 = function() {
      return a
  };
  window.zto1565 = function(q, t) {
      if (!xzu137)
          if (k.push(q), m.push(t), 2 == xzu139) {
              for (var u = 0; u < k.length; u++) zto1586(k[u]);
              k = [];
              m = []
          } else t != r % 2048 && zto1543(3204), r++
  };
  window.zto1566 = function() {
      clearInterval(l)
  }
})();

function zto1567() {
  for (var b, d, e = xzu10 - 1; 0 <= e; e--) b = zto1496(xzu12[e], 4) % xzu624, d = zto1496(xzu12[e], 4 * xzu624), xzu569[xzu6] = xzu569[xzu6] > b ? b : xzu569[xzu6], xzu570[xzu6] = xzu570[xzu6] > d ? d : xzu570[xzu6], xzu571[xzu6] = xzu571[xzu6] < b ? b : xzu571[xzu6], xzu572[xzu6] = xzu572[xzu6] < d ? d : xzu572[xzu6]
}

function zto1568() {
  var b = xzu576[xzu6].length,
      d, e = b - 1;
  a: for (; 0 <= e; e--) {
      for (d = 3; 0 <= d; d--) {
          var a = xzu576[xzu6][e] + xzu15[d];
          if (zto1300(a) || zto1290(a) && zto1303(a) != xzu6) {
              zto1310(xzu576[xzu6][e], xzu6);
              continue a
          }
      }
      xzu576[xzu6][e] = xzu576[xzu6][b - 1];
      xzu576[xzu6].pop();
      b--
  }
}

function zto1569() {
  var b = xzu577[xzu6].length,
      d, e, a = b - 1;
  a: for (; 0 <= a; a--) {
      var f = e = !1;
      for (d = 3; 0 <= d; d--) {
          var c = xzu577[xzu6][a] + xzu15[d];
          if (zto1302(c, xzu6)) continue a;
          f = f || zto1297(c);
          e = e || zto1301(c)
      }
      f ? xzu578[xzu6].push(xzu577[xzu6][a]) : e ? xzu579[xzu6].push(xzu577[xzu6][a]) : zto1308(xzu577[xzu6][a], xzu6);
      xzu577[xzu6][a] = xzu577[xzu6][b - 1];
      xzu577[xzu6].pop();
      b--
  }
}

function zto1570() {
  xzu573[xzu9] -= xzu10
}

function zto1571(b) {
  for (var d = b.length, e = d - 1; 0 <= e; e--) !zto1291(xzu9, b[e]) && zto1296(b[e]) && (b[e] = b[d - 1], b.pop(), d--)
}

function zto1572(b) {
  for (var d = b.length, e = d - 1; 0 <= e; e--) zto1291(xzu9, b[e]) || (b[e] = b[d - 1], b.pop(), d--)
}

function zto1573(b) {
  for (var d = b.length, e, a, f = d - 1; 0 <= f; f--)
      for (e = 3; 0 <= e; e--)
          if (a = b[f] + xzu15[e], zto1302(a, xzu9)) {
              xzu577[xzu9].push(b[f]);
              b[f] = b[d - 1];
              b.pop();
              d--;
              break
          }
}

function zto1574() {
  for (var b, d, e = xzu10 - 1; 0 <= e; e--)
      for (b = 3; 0 <= b; b--) d = xzu12[e] + xzu15[b], zto1291(xzu9, d) && zto1298(d) && (xzu577[xzu9].push(d), zto1309(d, xzu9))
}

function zto1575() {
  a: for (; xzu570[xzu9] < xzu572[xzu9];) {
      for (var b = xzu571[xzu9]; b >= xzu569[xzu9]; b--)
          if (zto1291(xzu9, 4 * (xzu570[xzu9] * xzu624 + b))) break a;
      xzu570[xzu9]++
  }
  a: for (; xzu570[xzu9] < xzu572[xzu9];) {
      for (b = xzu571[xzu9]; b >= xzu569[xzu9]; b--)
          if (zto1291(xzu9, 4 * (xzu572[xzu9] * xzu624 + b))) break a;
      xzu572[xzu9]--
  }
  a: for (; xzu569[xzu9] < xzu571[xzu9];) {
      for (b = xzu572[xzu9]; b >= xzu570[xzu9]; b--)
          if (zto1291(xzu9, 4 * (b * xzu624 + xzu569[xzu9]))) break a;
      xzu569[xzu9]++
  }
  a: for (; xzu569[xzu9] < xzu571[xzu9];) {
      for (b = xzu572[xzu9]; b >= xzu570[xzu9]; b--)
          if (zto1291(xzu9,
                  4 * (b * xzu624 + xzu571[xzu9]))) break a;
      xzu571[xzu9]--
  }
}(function() {
  function b() {
      return Math.pow(Math.pow(f - e, 2) + Math.pow(c - a, 2), .5)
  }

  function d(g) {
      e = g.touches[0].clientX;
      a = g.touches[0].clientY;
      f = g.touches[1].clientX;
      c = g.touches[1].clientY
  }
  var e, a, f, c;
  window.zto1576 = function(g) {
      return 1 < g.touches.length ? (d(g), zto882(), !0) : !1
  };
  window.zto1577 = function(g) {
      if (0 == xzu139) return !1;
      if (1 < g.touches.length) {
          zto841();
          var h = b();
          d(g);
          g = b();
          zto1017(Math.floor((e + f) / 2), Math.floor((a + c) / 2), g / h);
          zto856();
          return !0
      }
      return !1
  }
})();
(function() {
  function b(g) {
      var h = a(g, 20);
      g = a(g, 20);
      zto1237(h, g)
  }

  function d(g) {
      for (var h = a(g, 11), l, k = 0; k < h; k++) {
          if (c > 8 * f - 12) {
              zto1543(3216);
              return
          }
          l = a(g, 2);
          if (0 == l) zto1164(a(g, 11));
          else if (1 == l) {
              l = a(g, 18);
              var m = a(g, 9),
                  p = a(g, 9),
                  n = a(g, 5);
              if (c > 8 * f - 10 * n) {
                  zto1543(3217);
                  return
              }
              zto1163({
                  name: e(n, g),
                  id: l,
                  color0: m,
                  color1: p
              })
          } else zto1165(a(g, 11))
      }
      0 < h && zto1166()
  }

  function e(g, h) {
      for (var l = Array(g), k = 0; k < g; k++) l[k] = a(h, 10);
      return zto863(l)
  }

  function a(g, h) {
      for (var l = 0, k, m, p = c; p < c + h; p++) k = zto1496(p, 8), m = 7 - p % 8, l |=
          (g[k] >> m & 1) << c + h - p - 1;
      c += h;
      return l
  }
  var f, c;
  window.zto1580 = function(g) {
      c = 0;
      f = g.length;
      if (0 == f) zto1543(3205);
      else {
          var h = a(g, 3);
          if (0 == h) 2 > f ? zto1543(3206) : zto1565(g, a(g, 12));
          else if (1 == h)
              if (8 == zto1208()) zto1543(3207);
              else if (3 > f) zto1543(3208);
          else {
              h = a(g, 12);
              var l = a(g, 5);
              if (8 * f < 20 + h * l) zto1543(3209);
              else {
                  for (var k = Array(h), m = 0; m < h; m++) k[m] = a(g, l);
                  zto1027(k)
              }
          } else if (2 == h)
              if (14 > f) zto1543(3210);
              else if (6 != zto1208()) zto1543(3211);
          else {
              h = a(g, 7);
              l = a(g, 6);
              k = a(g, 14);
              m = a(g, 14);
              var p = a(g, 3),
                  n = a(g, 11),
                  r = a(g, 20),
                  q = a(g, 20),
                  t = a(g, 11);
              b: {
                  for (var u = 8 * f, v = []; c <= u - 18;) {
                      var w = a(g, 18),
                          z = a(g, 9),
                          x = a(g, 9),
                          A = a(g, 5);
                      if (0 == A) break;
                      if (c + 10 * A > u) {
                          zto1543(3218);
                          g = null;
                          break b
                      }
                      v.push({
                          name: e(A, g),
                          id: w,
                          color0: z,
                          color1: x
                      })
                  }
                  0 == v.length ? (zto1543(3219), g = null) : g = v
              }
              null == g || 0 == g.length ? zto1543(3212) : (zto1193(), zto1232(h, l, k, m, p, t, t, n, r, q, g))
          } else 3 == h ? 8 > f ? zto1543(3213) : 7 != zto1208() ? zto1543(3214) : (h = a(g, 7), 100 < h ? (h = a(g, 6), l = a(g, 14), k = a(g, 14), m = a(g, 3), b(g), d(g), zto1238(h, l, k, m)) : (b(g), d(g), zto1239(h))) : 4 == h ? 5 != f ? zto1543(3222) : 7 != zto1208() ?
              zto1543(3223) : (h = a(g, 18), g = a(g, 18), zto1136(h, g)) : 5 == h && (3 != f ? zto1543(3225) : 7 == zto1208() && (g = a(g, 18), h = zto1137(g), void 0 !== h && zto1119(h.name, g)))
      }
  };
  window.zto1586 = function(g) {
      if (!xzu137) {
          c = 15;
          for (var h = 8 * g.length; c + 12 <= h;) {
              var l = a(g, 3),
                  k = a(g, 9);
              if (0 == l) {
                  l = a(g, 10);
                  var m = a(g, 9);
                  m = m == k ? xzu135 : m;
                  zto823(k, l, m)
              } else if (1 == l) {
                  l = a(g, 10);
                  m = a(g, 11);
                  var p = a(g, 11);
                  zto824(k, l, m, p)
              } else 2 == l ? (m = a(g, 9), m = m == k ? xzu135 : m, zto825(k, m)) : 3 == l ? zto826(k) : (l = a(g, 7), m = a(g, 9), zto1385(k, l, m))
          }
      }
  }
})();

function zto1592() {
  this.camH = this.camW = this.camY = this.camX = this.mapY = this.mapX = 0;
  this.calculatePreRendering = function() {
      this.mapX = zto1006();
      this.mapY = zto1007();
      this.camX = -this.mapX;
      this.camY = -this.mapY;
      this.camW = xzu601 / xzu312;
      this.camH = xzu602 / xzu312
  }
}
(function() {
  function b() {
      var c = (new Date).getTime();
      d -= (c - f) * e / 25;
      f = c;
      e += 2.5E-4;
      0 >= d || 8 != zto1208() ? (d = 0, a = !1) : (setTimeout(b, 25), zto856())
  }
  var d, e, a, f;
  window.zto1593 = function() {
      d = 1;
      a = !0;
      e = .004;
      f = (new Date).getTime();
      setTimeout(b, 25)
  };
  window.zto1595 = function() {
      a && (xzu594.fillStyle = "rgba(255,255,255," + d + ")", xzu594.fillRect(0, 0, xzu601, xzu602))
  }
})();
(function() {
  function b(f) {
      e(f, 14, xzu597);
      e(f, 4, xzu607);
      e(f, 1, xzu613 ? 1 : 0);
      e(f, 1, xzu612 ? 1 : 0);
      var c = new Date;
      c = 60 * c.getHours() + c.getMinutes();
      e(f, 11, c)
  }

  function d(f) {
      return zto1496(f, 8) + (0 < f % 8 ? 1 : 0)
  }

  function e(f, c, g) {
      for (var h, l, k = a; k < a + c; k++) h = zto1496(k, 8), l = 7 - k % 8, f[h] |= (g >> c - (k - a + 1) & 1) << l;
      a += c
  }
  var a;
  window.zto1596 = function() {
      zto1416();
      var f = new Uint8Array(5);
      a = 0;
      e(f, 4, 4);
      b(f);
      zto1542(f)
  };
  window.zto1597 = function() {
      zto1416();
      var f = zto862(zto1270()),
          c = f.length,
          g = new Uint8Array(d(83 + 10 * c));
      a = 0;
      e(g, 4, 5);
      b(g);
      e(g, 30, xzu614);
      e(g, 9, zto1326(xzu272.wins[1].colors[0]));
      e(g, 9, zto1326(xzu272.wins[1].colors[1]));
      for (var h = 0; h < c; h++) e(g, 10, f[h]);
      zto1542(g)
  };
  window.zto1598 = function(f) {
      zto1416();
      var c = new Uint8Array(3);
      a = 0;
      e(c, 4, 11);
      e(c, 18, f);
      zto1542(c)
  };
  window.zto1599 = function() {
      zto1416();
      var f = zto862(zto1270()),
          c = f.length,
          g = new Uint8Array(d(58 + 10 * c));
      a = 0;
      e(g, 4, 6);
      b(g);
      e(g, 6, xzu630);
      e(g, 14, zto1255());
      e(g, 3, zto1123(zto1127()));
      for (var h = 0; h < c; h++) e(g, 10, f[h]);
      zto1542(g);
      zto1193();
      zto1207(8);
      zto1505(!1);
      zto870(zto1255(),
          zto1127(), 0, [{
              name: zto1270(),
              id: 0,
              color0: zto1326(xzu272.wins[1].colors[0]),
              color1: zto1326(xzu272.wins[1].colors[1])
          }], !1, !1)
  };
  window.zto1600 = function(f) {
      zto1416();
      var c = new Uint8Array(1);
      a = 0;
      e(c, 4, 8);
      e(c, 1, f ? 1 : 0);
      zto1542(c)
  };
  window.zto1601 = function(f, c) {
      var g = new Uint8Array(xzu137 ? 5 : 3);
      a = 0;
      e(g, 4, 0);
      xzu137 ? (e(g, 12, (zto1557() + 1) % 2048), zto1556([(zto1557() + 1) % 2048, 0, xzu146, f, c])) : (zto1416(), e(g, 10, f), e(g, 9, c), zto1542(g))
  };
  window.zto1602 = function(f, c, g) {
      var h = new Uint8Array(xzu137 ? 6 : 5);
      a = 0;
      e(h, 4, 1);
      xzu137 ?
          (e(h, 12, (zto1557() + 1) % 2048), zto1556([(zto1557() + 1) % 2048, 1, xzu146, f, c, g])) : (zto1416(), e(h, 10, f), e(h, 11, c), e(h, 11, g), zto1542(h))
  };
  window.zto1603 = function(f) {
      var c = new Uint8Array(xzu137 ? 4 : 2);
      a = 0;
      e(c, 4, 2);
      xzu137 ? (e(c, 12, (zto1557() + 1) % 2048), zto1556([(zto1557() + 1) % 2048, 2, xzu146, f])) : (zto1416(), e(c, 9, f), zto1542(c))
  };
  window.zto1604 = function(f, c) {
      zto1416();
      var g = new Uint8Array(3);
      a = 0;
      e(g, 4, 13);
      e(g, 7, f);
      e(g, 9, c);
      zto1542(g)
  };
  window.zto1605 = function() {
      if (!xzu137) {
          zto1416();
          var f = new Uint8Array(4);
          a = 0;
          e(f, 4, 3);
          e(f, 12, zto1557() % 2048);
          e(f, 9, xzu359[0]);
          zto1542(f)
      }
  };
  window.zto1609 = function(f) {
      var c = new Uint8Array(1);
      a = 0;
      e(c, 4, 9);
      e(c, 1, f ? 1 : 0);
      zto1542(c)
  }
})();
zto789();
zto1437();
zto931();
zto1520();
zto1273();
zto1122();
zto1469();
zto1460();
setTimeout(function() {
  zto1448(2, 9894)
}, 0);
zto1203();
zto932();
zto1024();
zto1412();
zto1216();