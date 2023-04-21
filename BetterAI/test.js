const WebSocket = require('ws');
const ip = require('ip');

// Generate 5 unique IP addresses
const ips = [];
for (let i = 0; i < 5; i++) {
  let newIp;
  do {
    newIp = ip.toString(ip.toLong(ip.address()) + Math.floor(Math.random() * 1000000));
  } while (ips.includes(newIp));
  ips.push(newIp);
}

// Connect each IP to the WebSocket endpoint
ips.forEach((ip) => {
  const ws = new WebSocket(`wss://territorial.io/s52/?ip=${ip}`);
  ws.on('open', () => {
    console.log(`WebSocket connected with IP: ${ip}`);
  });
});
