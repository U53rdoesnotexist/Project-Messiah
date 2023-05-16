/**
 * Server code can be inspected here https://glitch.com/edit/#!/diepbox-chat
 */
class Chat {
    static get MAX_MSG_LENGTH() {
        return 75;
    }
 
    constructor(player) {
        this._player = player;
        this._chatmode = false;
        this._input = '';
        this._socket;
        this._messages = [];
        this._inputBox = document.body.appendChild(document.createElement('div'));
        this._inputBox.style.display = 'none';
 
        this._hookonkeydown();
        this._hookAnimationFrame();
 
        if (this._player.ondead) throw new Error('on dead listener is already taken. implement Event interface.');
        this._player.ondead = () => {
            this._closechat();
        };
 
        this._connect();
    }
 
    _connect() {
        this._socket = new WebSocket('wss://diepbox-chat.glitch.me');
        this._socket.binaryType = 'arraybuffer';
        this._socket.onmessage = (e) => this._onmessage(e);
        this._socket.onclose = () => setTimeout(() => this._connect(), 100);
    }
 
    _send(message) {
        const position = this._player.position;
        const packet = {
            pos: {
                x: position.x,
                y: position.y,
            },
            m: message,
        };
 
        this._socket.send(new TextEncoder().encode(JSON.stringify(packet)));
    }
    _onmessage(e) {
        const message = JSON.parse(new TextDecoder().decode(e.data));
        // message = {
        //               pos: { x, y},
        //               m: string,
        //               ... maybe more
        //           }
        this._messages.push({
            timestamp: Date.now(),
            body: document.body.appendChild(document.createElement('div')),
            color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                Math.random() * 255
            )})`,
            ...message,
        });
    }
    _openchat() {
        this._chatmode = true;
        this._inputBox.innerText = this._input;
        this._inputBox.style.display = 'block';
    }
    _closechat() {
        this._chatmode = false;
        this._inputBox.style.display = 'none';
 
        this._send(this._input);
        this._input = '';
    }
    _onkeydown(e) {
        let preventDefault = false;
 
        if (player.dead || !player.isMaster) return;
 
        //activate chat mode when user presses enter
        if (!this._chatmode && e.keyCode === 13) {
            this._openchat();
            return preventDefault;
        }
        //deactivate when user presses Enter
        if (this._chatmode && e.keyCode == 13) {
            this._closechat();
            return preventDefault;
        }
 
        //save input
        if (this._chatmode && this._input.length < Chat.MAX_MSG_LENGTH && e.keyCode >= 32 && e.keyCode <= 126) {
            this._input += e.key;
        }
        //backspace
        if (this._chatmode && e.keyCode === 8) {
            this._input = this._input.slice(0, -1);
        }
 
        if (this._chatmode) {
            this._inputBox.innerText = this._input;
            preventDefault = true;
            e.preventDefault();
        }
 
        return preventDefault;
    }
    _hookonkeydown() {
        const _this = this;
        unsafeWindow.onkeydown = new Proxy(unsafeWindow.onkeydown, {
            apply(target, thisArg, args) {
                if (!_this._onkeydown.apply(_this, args)) target.apply(thisArg, args);
            },
        });
    }
    _hookAnimationFrame() {
        const _this = this;
        unsafeWindow.requestAnimationFrame = new Proxy(unsafeWindow.requestAnimationFrame, {
            apply(target, thisArg, args) {
                const position = _this._player.position;
                const screenPos = _this._player.toScreenPos(
                    position.x - _this._inputBox.innerText.length * 6.5,
                    position.y - 140
                );
                _this._inputBox.style.position = 'absolute';
                _this._inputBox.style.pointerEvents = 'none';
                _this._inputBox.style.zIndex = '99999';
                _this._inputBox.style.left = `${screenPos.x}px`;
                _this._inputBox.style.top = `${screenPos.y}px`;
                _this._inputBox.style['font-family'] = 'Ubuntu';
                _this._inputBox.style.color = '#fff';
                _this._inputBox.style['font-size'] = '1em';
                _this._inputBox.style['text-shadow'] =
                    '-.1em -.1em 0 #000,0 -.1em 0 #000,.1em -.1em 0 #000,.1em 0 0 #000,.1em 0.1em 0 #000,0 0.1em 0 #000,-.1em 0.1em 0 #000,-.1em 0 0 #000';
                _this._inputBox.addEventListener('contextmenu', (e) => e.preventDefault());
 
                //remove messages that are older than 10 seconds
                _this._messages = _this._messages.filter((x) => {
                    if (Date.now() - x.timestamp > 10000) {
                        x.body.parentNode.removeChild(x.body);
                        return false;
                    }
                    return true;
                });
                //place each message on screen
                _this._messages.forEach((x) => {
                    const screenPos = _this._player.toScreenPos(x.pos.x - x.m.length * 6.5, x.pos.y - 140);
                    x.body.style.display = 'block';
                    x.body.style.position = 'absolute';
                    x.body.style.pointerEvents = 'none';
                    x.body.style.zIndex = '99999';
                    x.body.style.left = `${screenPos.x}px`;
                    x.body.style.top = `${screenPos.y}px`;
                    x.body.style['font-family'] = 'Ubuntu';
                    x.body.style.color = '#fff';
                    x.body.style['font-size'] = '1em';
                    x.body.style[
                        'text-shadow'
                    ] = `-.1em -.1em 0 #000,0 -.1em 0 #000,.1em -.1em 0 #000,.1em 0 0 #000,.1em 0.1em 0 #000,0 0.1em 0 #000,-.1em 0.1em 0 #000,-.1em 0 0 #000,0 0 .2em ${x.color},0 0 .4em ${x.color},0 0 .8em ${x.color},0 0 1.6em ${x.color}`;
                    x.body.addEventListener('contextmenu', (e) => e.preventDefault());
                    x.body.innerText = x.m;
                });
                return target.apply(thisArg, args);
            },
        });
    }
}