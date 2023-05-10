/*
function proxyGenerator(callback) {
    let proxies = [];
  
    request("https://api.proxylist.to/http?key=PROXY-D716A931-LIST-5A137343-TO", function(error, response, body) {
      if (!error && response.statusCode == 200) {
        proxies = body.trim().split("\n").map((proxy) => `http://${proxy}`);
      } else {
        console.log("Error loading proxies, please try again");
      }
      callback(proxies);
    });
}


proxyGenerator(proxies => {
    for (let i = 0; i < proxies.length; i++) {
        // choose a random proxy from the list
        const proxy = proxies[i];
        //console.log('using proxy server ', proxy);
    
        // WebSocket endpoint for the proxy to connect to
        const endpoint = process.argv[2] || 'wss://r1fx7d.territorial.io/s52/';
        const parsed = url.parse(endpoint);
        //console.log('attempting to connect to WebSocket ', endpoint);
    
        // create an instance of the `HttpsProxyAgent` class with the proxy server information
        const options = url.parse(proxy);
        const agent = new HttpsProxyAgent(options);
    
        // finally, initiate the WebSocket connection
        const socket = new WebSocket(endpoint, { agent: agent });
    
        socket.on('open', function () {
            //console.log(`"open" event on connection ${i}!`);
            //Sends packet to join lobby
            socket.send(new Uint8Array([16, 41, 159, 231, 215, 82, 144, 158, 102, 216, 41, 204, 39, 133, 226, 88, 128, 44, 8, 130, 136, 0, 10, 2, 96, 192]));
        });
    
        socket.on('message', function (data, flags) {
            socket.send(new Uint8Array([80]))
            //console.log(`"message" event on connection ${i}!`, data, flags);
        });
    
        socket.on('close', function () {
            //console.log(`"close" event on connection ${i}`);
        });

        socket.on('error', function (err) {
            void(0)
        });
    }
});
*/

const request = require("request");
const url = require('url');
const WebSocket = require('ws');
const HttpsProxyAgent = require('https-proxy-agent');

var proxies = [],
    connectedIPs = [];
const curl = ["https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt", "https://api.proxylist.to/http?key=PROXY-D716A931-LIST-5A137343-TO", ]

function generateProxies() {
    if (false) {
        fetch("https://proxylist.geonode.com/api/proxy-list?limit=500&page=1&sort_by=lastChecked&sort_type=desc").then((res1) => res1.json().then((res2) => assignInstances(res2)))
    } else {
       request(curl[0], function(error, response, body) {
        if (!error && response.statusCode == 200) {
            proxies = body.trim().split("\n").map((proxy) => `http://${proxy}`);
            assignInstances(null);
        } else {
            console.log("Error loading proxies, please try again");
        }
    }) 
    }
    
}

function assignInstances(res) {
    if (res != null) {
        proxies = res.data;
    }
    for (let ipIndex = 0, l = proxies.length; ipIndex < l; ipIndex++) {
        const proxy = res == null ? proxies[ipIndex] : "http://" + proxies[ipIndex].ip + ":" + proxies[ipIndex].port, 
            options = url.parse(proxy),
            endpoint = process.argv[2] || "wss://bettertt.fearlessgames.de/next";
        var proxyObj = {
            index: ipIndex,
            ip: proxy,
            //npfp3p, zpb5n9, r1fx7d, ttio/i32
            socket1: new WebSocket(endpoint, { agent: new HttpsProxyAgent(options)}),
            socket2: new WebSocket(endpoint, { agent: new HttpsProxyAgent(options)}),
            socket3: new WebSocket(endpoint, { agent: new HttpsProxyAgent(options)}),
            socket4: new WebSocket(endpoint, { agent: new HttpsProxyAgent(options)}),/**/
        };
        
        for (var socket of [proxyObj.socket1, proxyObj.socket2/*, proxyObj.socket3, proxyObj.socket4*/]) {
            socket.on('open', function () {
                console.log(proxyObj.index + "Open")
                var gay = "􏿽"
                for (let i = 0; i < 20; i++) {
                    gay += gay;
                }
                this.send(gay)
                //this.send(new Uint8Array([16, 41, 159, 231, 215, 82, 144, 158, 102, 216, 41, 204, 39, 133, 226, 88, 128, 44, 8, 130, 136, 0, 10, 2, 96, 192]));
            });
            socket.on('close', function () {
                connectedIPs = connectedIPs.filter(obj => obj.index != proxyObj.index)
            });
            socket.on('error', function (err) {
                connectedIPs = connectedIPs.filter(obj => obj.index != proxyObj.index)
            });
            socket.on('message', function (data, flags) {
                socket.send(new Uint8Array([80]))
            });
        };
        connectedIPs.push(proxyObj)   
        
    }
}

generateProxies()