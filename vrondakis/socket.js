// const WebSocket = require('ws');

const connect = () => {
    const ws = new WebSocket("ws://localhost:3020");

    ws.onopen = () => {
        console.log("CONNECTED");
    }


    ws.onclose = () => {
        console.log("RECONNECT");
        setTimeout(() => connect(), 1000);
    }


    ws.onmessage = (m) => {
        const data = m.data;

        console.log("got message", data);
    }

    const sendMessage = (data) => {
        ws.send(JSON.stringify(data));
    }


    window.onmessage = (a) => {
        if(a.data.type === "manolis"){
            if(a.data.message === "attacked"){
                sendMessage({type: "attacked", data: a.data.data});
            }
            // console.log("GOT MESSAGE", a);

        }
    }
}

connect();