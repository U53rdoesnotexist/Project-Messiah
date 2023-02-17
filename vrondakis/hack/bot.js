const WebSocket = require("ws");
const FileReader = require("filereader");
const fs = require("fs");

console.log("Initializing bot with game ID", process.argv[2]);
const readline = require("readline");

var u;
function encodeMessage(m, A, z) {
  for (var B, C, D = u; D < u + A; D++)
    (B = al(D, 8)),
      (C = 7 - (D % 8)),
      (m[B] |= ((z >> (A - (D - u + 1))) & 1) << C);
  u += A;
}

function decodeMessage(u, m) {
  for (var A = 0, z, B, C = l; C < l + m; C++)
    (z = al(C, 8)),
      (B = 7 - (C % 8)),
      (A |= ((u[z] >> B) & 1) << (l + m - C - 1));
  l += m;

  return A;
}

let gameSocket;
let MY_ID = 0;


const socketConnection = new WebSocket("wss://territorial.io/s52/");
const lobbySocket = new WebSocket("wss://npfp3p.com/s52/");

const zombieSocket = new WebSocket("ws://localhost:3021");
const sendToZombie = (data) => {
  zombieSocket.send(JSON.stringify(data));
};
zombieSocket.onopen = () => {
  console.log("SEND ZOMBIE SOCKET");
  sendToZombie({ type: "initialize" });
};
zombieSocket.onerror = () => {
  console.log("error");
};

zombieSocket.onmessage = (data) => {
  const message = JSON.parse(data.data);

  if (message.type === "attack") {
    if (+message.id > PLAYER_COUNT) {
      // is bot
      attack(message.id, 100);
    } else {
      sendTruce(message.id);
      attackFile(1000);
    }
  }
};


const SERVERS = [
  'territorial.io', 'npfp3p.com', 'zpb5n9.com', 'r1fx7d.com', 'vampirr.io'
];

function fancyEncryption(m) {
  return al(m, 8) + (0 < m % 8 ? 1 : 0);
}

function al(g, k) {
  return Math.floor(g / k + 1 / (2 * k));
}

function g(m) {
  var A = 209660557927100,
    z = Math.floor(A / 16777216);
  encodeMessage(m, 24, z);
  encodeMessage(m, 24, A - 16777216 * z);
}

const zw = 3252;
b = false; // something to do with ads
d = 2; // android or ios?
let PLAYER_COUNT = 0;
function fancyEncoding(m) {
  z = Math.floor(0 / 16777216);
  encodeMessage(m, 14, zw);
  encodeMessage(m, 4, b ? 2 : 12 <= d ? 1 : 0 < d ? 3 : 0);
  encodeMessage(m, 1, 1); // check for ws url
  encodeMessage(m, 1, 1); // Window parent frame
  encodeMessage(m, 5, new Date().getHours() % 24);
}

const names = ["Team?", "Attack=Full", "FullSendr", "SafetyFirst"];

const USERNAME = `[SH!T] ${names[Math.floor(Math.random()*names.length)]}`


const eH = {};
const dz = {};
const connectGame = (data) => {
  decodeGameData(data);

  l = 1;
  y = data.length;
  var m = decodeMessage(data, 2),
    serverId = decodeMessage(data, 10);

  if (dz.uv === serverId) {
    console.log("ALREADY CONNECTED??? TO THE SAME SERVER???");
    // return;
  }
  eH.v7 = dz.uv;
  dz.jB = serverId;
  eH.v8 = decodeMessage(data, 10);
  eH.v9 = decodeMessage(data, 2 === m ? 9 : 1);

  MY_ID = eH.v9;
  sendToZombie({ type: "set-id", id: MY_ID });

  attackTargetId = MY_ID;

  // Sned to lobby server no 1

  console.log("Should connect to server", SERVERS[serverId]);

  gameSocket = new WebSocket(`wss://${SERVERS[serverId]}/s52/`);
  gameSocket.onclose = () => {
    console.log("game socket closed");
  };
  console.log("sending vampirr websocket init");
  gameSocket.onopen = () => {
    setTimeout(() => {
      // eh.v8 is 0
      // eh.v9 is 0
      console.log("vampirr opened", eH.v7, eH.v8, eH.v9, timeTick);

      var m = new Uint8Array(7);
      u = 0;
      // const zw = 6474;
      encodeMessage(m, 1, 0);
      encodeMessage(m, 3, 6);
      encodeMessage(m, 8, eH.v7);
      encodeMessage(m, 10, eH.v8);
      encodeMessage(m, 9, eH.v9);
      encodeMessage(m, 10, timeTick);
      encodeMessage(m, 14, zw);
      gameSocket.send(m);

      startWaitSequence();
    }, 100);
  };

  gameSocket.onmessage = (data) => {
    // ignore
  };
};

var k, y, l;

k = [32, 65, 191, 913, 931];
y = [64, 127, 688, 930, 1155];
lxox = Array(k.length + 1);

for (var u = 0; u < lxox.length; u++) {
  lxox[u] = 0;
  for (var m = u - 1; 0 <= m; m--) lxox[u] += y[m] - k[m];
}

function validateUsernameMinMaxLength(u) {
  for (var m = k.length - 1; 0 <= m; m--)
    if (u >= k[m] && u < y[m]) {
      return m;
    }
  return -1;
}

const getValidatedUsername = function (u) {
  u = u.trim();
  for (var m = u.length, A = [], z, B = 0; B < m; B++) {
    z = u.charCodeAt(B);

    var C = validateUsernameMinMaxLength(z);
    A.push(lxox[C] + z - k[C]);
  }

  return A;
};
decodeGameData = function (u) {
  //   console.log("U IS ", u);
  l = 1;
  y = u.length;
  if (2 === decodeMessage(u, 2)) {
    l += 20;
    for (
      var m = decodeMessage(u, 9),
        A = decodeMessage(u, 14),
        z = decodeMessage(u, 4),
        B = 1 === decodeMessage(u, 1),
        C = decodeMessage(u, 6),
        D = decodeMessage(u, 14),
        H = decodeMessage(u, 9) + 1,
        F = [],
        L,
        G,
        I,
        E = 0;
      E < H;
      E++
    ) {
      // Got user information for current game
      L = decodeMessage(u, 1);
      G = [decodeMessage(u, 6), decodeMessage(u, 6), decodeMessage(u, 6)];
      I = g(decodeMessage(u, 5), u);
      F.push({
        mE: I,
        wQ: G,
        wR: L,
      });

      // me = name

      PLAYER_COUNT = F.length;

      console.log("F PUSH", {
        mE: I,
        wQ: G,
        wR: L,
      });
    }
    //   jI.ue();
    //   w8(C, D);
    //   1 === F.length && dj.wL(z);
    //   initializeGame(A, m, F, z, B);
  } else {
    l += 20;
    m = decodeMessage(u, 1);
    A = decodeMessage(u, 14);
    z = decodeMessage(u, 4);
    B = 1 === decodeMessage(u, 1);
    C = decodeMessage(u, 6);
    D = decodeMessage(u, 14);
    H = [];
    for (E = 0; 2 > E; E++) {
      F = decodeMessage(u, 1);
      L = [decodeMessage(u, 6), decodeMessage(u, 6), decodeMessage(u, 6)];
      G = decodeMessage(u, 14);
      I = g(decodeMessage(u, 5), u);
      H.push({
        mE: I,
        wQ: L,
        hn: G,
        wR: F,
      });

      console.log("H PUSH", {
        mE: I,
        wQ: L,
        hn: G,
        wR: F,
      });
    }
    //   jI.ue();
    //   w8(C, D);
    //   initializeGame(A, m, H, z, B);
  }
};

const timeTick = new Date().getTime() % 1024;
lobbySocket.onopen = () => {
  //   console.log("lobby socket init");

  const username = getValidatedUsername(USERNAME);
  const usernameLength = username.length,
    B = new Uint8Array(fancyEncryption(105 + 10 * usernameLength));

  //   console.log("shit fuck b is", B);
  u = 0;
  encodeMessage(B, 1, 0);
  encodeMessage(B, 3, 1);
  encodeMessage(B, 10, timeTick);
  var userColorArray = [255, 255, 255];
  //c5.la[2].iJ.u7();

  // console.log("B LATER ON", B);

  encodeMessage(B, 6, userColorArray[0]);
  encodeMessage(B, 6, userColorArray[1]);
  encodeMessage(B, 6, userColorArray[2]);
  g(B);
  // console.log("FUCK after G",B, usernameLength);
  fancyEncoding(B);

  // console.log("lols xoxoxoxox", usernameLength);
  for (C = 0; C < usernameLength; C++) encodeMessage(B, 10, username[C]);

  // console.log("lols", B);
  // dz.uv = m;
  // console.log("uO");

  // console.log(B);
  // socketConnection.send([
  //     20, 245, 215, 158, 190, 175, 103, 20, 34, 188, 101, 40, 37, 135, 65, 144, 142, 36, 7, 128, 0, 78, 32, 8, 66, 80, 136, 40, 137, 130, 0, 154, 0, 2, 64
  // ]);
  // socketConnection.send(B);
  dz.uv = 1;

  lobbySocket.send(B);
  // socketConnection.send(
};

let B = 0;

const fileReader = new FileReader();

fileReader.addEventListener("loadend", function () {
  B--;

  //   console.log(fileReader.result);
});

let joinedGame = 0;

const handleMessage = (data) => {
  l = 0;
  y = data.length;

  // console.log("GOT DATA", data.length);
  // data = [38, 0, 0, 2, 68, 139, 11, 49, 88, 60, 70, 96, 1, 255, 1, 140, 227, 37, 36, 0, 15, 248, 26, 113, 3, 255, 48, 0, 127, 193, 68, 72, 81, 254, 128, 2, 146, 13, 165, 195, 95, 236, 0, 31, 240, 137, 74, 40, 128, 64, 0, 255, 133, 32];

  // var messageType = decodeMessage(data, 1);
  // const secondByte = decodeMessage(data, 2);
  // console.log("MESSAGE TYPE: ", messageType, secondByte);

  // console.log("A AT THIS POINT IS", secondByte);

  // // if (messageType === 0) {
  //     z = [0, 0, 0, 0];
  //     B = decodeMessage(data, 6);
  //     console.log("B is", data, B);
  //     for (A = 0; 4 > A; A++) z[A] = decodeMessage(data, B);
  //     C = decodeMessage(data, 4);

  //     console.log("bc", B, C);
  //     D = [];
  //     for (A = 0; A < C; A++) {
  //       D.push({
  //         id: decodeMessage(data, 5),
  //         iu: decodeMessage(data, 4),
  //         vy: 1 === decodeMessage(data, 1),
  //         mP: decodeMessage(data, 6),
  //         vw: decodeMessage(data, 14),
  //         w1: decodeMessage(data, B),
  //         w2: decodeMessage(data, 9) + 1,
  //         uX: decodeMessage(data, 10),
  //       });
  //     }

  //     console.log("Map player data", D);

  // }

  const dz = {
    zr: (a, b) => {
      console.log("ZR", a, b);
    },
  };

  if (0 === y) {
  } else {
    var A = decodeMessage(data, 1);
    const state = 10;
    if (0 === A)
      if (((A = decodeMessage(data, 2)), 0 === A)) {
        if (0 === decodeMessage(data, 1)) {
          if (0 === u && 8 !== state && !(4 > y)) {
            tQ.bk(0, g(decodeMessage(data, 5), data));
            tQ.bk(1, "[" + g(decodeMessage(data, 3), data) + "]");
            var z = decodeMessage(data, 12),
              B = decodeMessage(data, 6),
              C = Array(z);
            for (A = 0; A < z; A++) C[A] = decodeMessage(data, B);
            jF.ql(C);
          }
        } else {
          if (8 !== state)
            if (3 > y) {
              console.log("some set state thing)");
            } else {
              z = decodeMessage(data, 1);
              B = decodeMessage(data, 16);
              C = decodeMessage(data, 4);
              var D = [];
              for (A = 0; A < C; A++) {
                var H = decodeMessage(data, 14);
                var F = decodeMessage(data, 5);
                F = g(F, data);
                D.push({
                  mE: F,
                  hn: H,
                });
              }
              0 === z
                ? c6.tJ(0, D, 10, 1, 0.36, 0.55, B)
                : c6.tJ(1, D, 100, 2, 0.47, 0.5, B);
            }
        }
      } else if (1 === A) {
        //   if (u !== dz.uv) dz.close(u, 3239);
        //   if ((6 === jI.r3() && jR.bi(), 7 !== jI.r3())) dz.close(u, 3251);
        //   else {
        // console.log("path 3");

        // console.log("A AT THIS POINT IS", A);
        z = [0, 0, 0, 0];

        // console.log("DATA FINAL IS", data);
        B = decodeMessage(data, 6);
        // console.log("B is", B);
        // handle message
        // console.log("B is", data, B);
        for (A = 0; 4 > A; A++) z[A] = decodeMessage(data, B);
        C = decodeMessage(data, 4);
        D = [];
        for (A = 0; A < C; A++) {
          D.push({
            id: decodeMessage(data, 5),
            iu: decodeMessage(data, 4),
            vy: 1 === decodeMessage(data, 1),
            mP: decodeMessage(data, 6),
            vw: decodeMessage(data, 14),
            w1: decodeMessage(data, B),
            w2: decodeMessage(data, 9) + 1,
            uX: decodeMessage(data, 10),
          });
        }

        // console.log("Map player data", D);

        // console.log("We can join games now.....");

        if (joinedGame === 0) {
          //   console.log(D);

          joinGame();
          joinedGame = 1;
        }

        // jR.tR(z, D);
      } else (2 !== A && 3 !== A) || connectGame(data);
    else
      1 === A &&
        ((A = state),
        8 !== A
          ? 10 === A && dz.zr(u, 3243)
          : u !== dz.jB
          ? dz.zr(u, 3244)
          : 0 === decodeMessage(data, 1)
          ? bx.a48.a4I(data)
          : ((A = decodeMessage(data, 2)),
            0 === A
              ? 3 !== y
                ? dz.zr(dz.jB, 3230)
                : ((A = decodeMessage(data, 9)),
                  (z = decodeMessage(data, 7)),
                  0 !== ex[A] &&
                    0 !== ex[ap] &&
                    ((z %= a6.a7), dv.m5(A, ap, z), dw.mH(A, 1, z)))
              : 1 === A
              ? 2 !== y
                ? dz.zr(dz.jB, 3235)
                : ((A = decodeMessage(data, 9)),
                  0 !== ex[A] &&
                    0 !== ex[ap] &&
                    (dv.kw(50, A) || dv.kw(52, A) || dv.kx(A, 1)))
              : 3 !== y
              ? dz.zr(dz.jB, 3236)
              : ((A = decodeMessage(data, 9)),
                (z = decodeMessage(data, 9)),
                0 === ex[A] ||
                  0 === ex[z] ||
                  0 === ex[ap] ||
                  dv.mJ(50, A, z) ||
                  (dw.mH(A, 3, 96), dw.mH(z, 4, 96), dv.mI(A, z)))));
  }
};

let attackTargetId = 0;

const joinGame = (mpId) => {
  setTimeout(() => {
    var A = new Uint8Array(1);
    // TODO: Un hard code
    // mpId = 2;

    // game id
    u = 0;
    encodeMessage(A, 1, 0);
    encodeMessage(A, 3, 2);
    encodeMessage(A, 4, GAME_ID);

    // console.log("SEND TO LOBBY JOIN: ", A);
    lobbySocket.send(A);

    // console.log(gameSocket && gameSocket.state);
  }, 1000);
  // console.log(A);
};

const sendTruce = (target) => {
  var A = new Uint8Array(2);
  u = 0;
  encodeMessage(A, 1, 1);
  encodeMessage(A, 3, 6);
  encodeMessage(A, 2, 1);
  encodeMessage(A, 9, target);
  console.log("Sending truce", m);
  gameSocket.send(A);
};

const win = () => {
  var A = new Uint8Array(1);
  u = 0;
  encodeMessage(A, 1, 1);
  encodeMessage(A, 3, 7);
  encodeMessage(A, 1, true);
  console.log("pf");
  console.log("NETWORK pf - CALL WHEN WIN?", m);
 gameSocket.send(A);
}

const attack = (target = attackTargetId, amount = 420) => {
  if (gameSocket && gameSocket.readyState === WebSocket.OPEN) {
    var z = new Uint8Array(3);
    u = 0;
    encodeMessage(z, 1, 1);
    encodeMessage(z, 3, 0);
    encodeMessage(z, 10, amount);
    encodeMessage(z, 9, target);
    // m = amount in percentage of total out of 1000
    // a = target
    // m = attack

    console.log("KS is", target, amount, z);

    gameSocket.send(z);
  }
};

let type = 1;
// setInterval(() => {
//     if(type === 1 ) {
//     attack(MY_ID, 320);
// type = 2
// } else {
//     type = 1;
//     if(attackTargetId) {
//         attack(attackTargetId, 200);
//     }
//     }
// }, (Math.random() * 1000) + 3000)

let shouldGo = true;
let currentId = -1050;
// setInterval(() => {

//     if(!shouldGo ) return;

//     currentId++;

//     if(currentId > 0){
//         console.log(currentId);
//         attack(currentId, 320);
//         // attack(MY_ID, 320);
//     }

//     if( currentId < 0) {
//          if(currentId % 20 === 0){
//             console.log("attack here");
//         attack(MY_ID, 320);
//          }
//     }

//     if(currentId > 400 && currentId % 20 === 0) {
//         // currentId = 0;
//         console.log("attac xx");
//         attack(attackTargetId, 200);
//     }

//     if(currentId > 400 && (attackTargetId === 0 || attackTargetId === MY_ID)) {
//         currentId = 0;
//     }

// },250)

// setTimeout(() => {
//     shouldGo = false;
//     setInterval(() => {

//     attack(attackTargetId, 200);
//     }, 7000)
// }, 1000 * 60 * 1.5);

const sendEmoji = (emoji) => {
  var A = new Uint8Array(2);
  u = 0;
  encodeMessage(A, 1, 1);
  encodeMessage(A, 3, 5);
  encodeMessage(A, 7, emoji);
  gameSocket.send(A);
};
const sendPing = () => {
  const sendPing = (inGame, conn) => {
    if (!conn) return;
    var z = new Uint8Array(1);
    u = 0;

    encodeMessage(z, 1, 0);
    encodeMessage(z, 3, 5);
    encodeMessage(z, 1, inGame ? 0 : 1);
    // console.log("SENDING PING: ", z, conn._url);

    conn.send(z);
  };

  // console.log("GAME SOCKET READY STATE:", gameSocket && gameSocket.readyState, gameSocket &&  gameSocket.readyState === WebSocket.OPEN, WebSocket.OPEN);
  sendPing(false, lobbySocket);

  if (!gameSocket || gameSocket.readyState !== WebSocket.OPEN) {
    // sendPing(false, socketConnection);
  } else {
    sendEmoji(16);
    sendPing(false, gameSocket);
  }
  // // console.log("zg");

  // socketConnection.send(z);
  // lobbySocket.send(z);
  // if(gameSocket && gameSocket.state === "ready")      gameSocket.send(z);
};

setInterval(sendPing, 8000);

lobbySocket.onmessage = (event) => {
  handleMessage(Array.from(event.data));
};
socketConnection.onmessage = (event) => {
  // B++;
  // if(B === 1) {
  // console.log("B = 1");
  // console.log("read as data", event.data);
  // x = decodeMessage(event.data);
  // console.log(x)
  // const fRead = new FileReader(event.data);
  // const data = fRead.readAsArrayBuffer();
  handleMessage(Array.from(event.data));

  // fileReader.readAsArrayBuffer(event.data);
  // }
  // B--;
  // console.log("read socket message");
};

socketConnection.onopen = () => {
  var m = new Uint8Array(3);
  u = 0;
  encodeMessage(m, 1, 0);
  encodeMessage(m, 3, 0);
  encodeMessage(m, 14, zw);
  //   console.log("qK");

  //   console.log("send possible init message?", zw);
  socketConnection.send(m);
};
lobbySocket.onclose = () => {
  console.log("Lobby socket close");
};
socketConnection.onclose = () => {
  console.log("Regular socket close");
};
socketConnection.onerror = () => {
  console.log("error");
};

// const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin, //or fileStream
  output: process.stdout,
});

const start = async () => {
  for await (const line of rl) {
    console.log("Set attack ID on bot:", line);
    // const [id, amount] = line.split(" ");
    // attack(id, amount);

    attackTargetId = line.trim();
  }
};
start();

const GAME_ID = process.argv[2];

let state = "wait";
const startWaitSequence = () => {
  if (state === "wait") {
    // console.log("waiting for game to start");
    setTimeout(() => {
      state = "grow";
      startGrowSequence();
      startPaySequence();
    }, 20000);
    return;
  }
};

const wait = (time) => new Promise(res => setTimeout(res, time)); 
const startGrowSequence = async () => {
  await wait(2000);
  attack(MY_ID, 250) 
  await wait(5000);
  attack(MY_ID, 400) 
  await wait(5000);
  attack(MY_ID, 400) 
  
  setInterval(() => {
    attack(MY_ID, 350);
  }, 5000);
};

const startPaySequence = () => {
  startTruce();

  setTimeout(() => {
    setInterval(() => {
      attack(attackTargetId, attackAmount);
    }, 10000);
  }, 1000 * 60 * 1.2);
};

const startTruce = () => {
  setTimeout(async () => {

    win();
    // for loop of player count
    // for (let i = 0; i < PLAYER_COUNT; i++) {
    //   await new Promise((res) => {
    //     sendTruce(i);
    //     setTimeout(res, 500);
    //   });
    // }
  }, 1000 * 30);
};

const attackFile = (amountReal = undefined) => {
  const [attackId, amount] = fs.readFileSync("attack.txt", "utf-8").split(" ");
  if (attackId) {
    attackAmount = amountReal || amount;
    // console.log("SET ATTACK TARGET ID.", attackId);
    attackTargetId = attackId;
  }
};
let attackAmount = 100;
setInterval(() => {
  attackFile();
}, 1000);
