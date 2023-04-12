const readline = require("readline");
const fs = require("fs");
var {fork} = require('child_process');


const BOT_COUNT = 5;
const GAME_ID = 1;

const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 3020 });
const ZOMBIE_IDS = new Set();
console.log("Initialized websocket on port 3020");
wss.on('connection', ws => {
  ws.on('message', message => {
    const data = JSON.parse(message);

    if(sockets[data.data.target]) {
      sockets[data.data.target].send(JSON.stringify({
          type: "attack",
          id: data.data.attacker,
          amount: 150,
      }));
    }

  })
  ws.send('Hello! Message From Server!!')
})


const sockets = {};

const zombieSocket = new WebSocket.Server({port: 3021});
zombieSocket.on('connection', ws => {
  let zombieId = null;
  ws.on('message', message => {
    const data = JSON.parse(message);

    if(data.type === "set-id") {
      ZOMBIE_IDS.add(data.id);
      sockets[data.id] = ws;
    }
  })
});















































const children = []

for(var i = 0; i < BOT_COUNT; i++) {
  setTimeout(() => {


 const child = fork('./bot', [GAME_ID], {stdio: [null, 'inherit', 'inherit', 'ipc']}).on("message", () => {
  console.log("hi");
 })
},  Math.random() * 1000)
// console.log(child.stdin);
//  child.send("hi");

//  child.stdout.on('data', function (data) {
//   console.log('stdout: ' + data);
// });

// setTimeout(() => process.stdin.pipe(child.stdin), 1000);

}


const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout,
});

const start = async () => {
  for await (const line of rl) {
    // const [id, amount] = line.split(" ");
    // attack(id, amount);

    attackTargetId = line.trim();
    console.log("writing file");
      fs.writeFile("./attack.txt", attackTargetId, (err) => {
        console.log("error writing file", err);
      });


      // child.stdin.write(`${line}\n`);

  }
};
start();


