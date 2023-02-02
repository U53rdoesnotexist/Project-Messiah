function Bots() {
    function Integrated_websocket(lobby, id) {
        this.wsLobby = new WebSocket(`wss://${websocket_manager.origins[lobby]}/s52/`)
        this.wsLobby.onopen = function() {
            join_lobby(id);
            this.send(message);
            this.lastActive = new Date().getTime();
            update_active_bots(1);
        }
        this.wsLobby.onmessage = function(m) {
            if (this.lastActive + 15E3 < new Date().getTime()) {
                anti_disconnect_15s(this);
                this.lastActive = new Date().getTime();
                this.send(message)
            }
            /*if (![50,51,52,53,54,55,56,57,58].includes(m.data.size) && !init2_alr) {
                this.close()
                setTimeout(() => bots.wsGameInit(), 100);
                init2_alr = true;
            }*/
        }
        this.wsLobby.onclose = function() {
            if (this.wsGame == null) {
                bots.wsss = bots.wsss.filter(intWs => intWs != wsCurrent);
                update_active_bots(-1)
            }
        }
        this.wsGame = null;
        this.name = name_input.get_username() + ` ${id}`;
        this.lastActive = new Date().getTime();
        this.time_hash = Math.floor(Math.random()*1024)
        this.color = [Math.floor(Math.random()*64), Math.floor(Math.random()*64), Math.floor(Math.random()*64)]
    }

    var mIndex, message, wsCurrent, init2_alr = false;
    function format_password(array) {
        var password = Math.floor(Math.pow(2,48)*Math.random()),
            password_hash = Math.floor(password / 16777216);
        encrypter(array, 24, password_hash);
        encrypter(array, 24, password - 16777216 * password_hash)
    }

    function format_client_info(array) {
        encrypter(array, 14, version_hash);
        encrypter(array, 4, is_ios ? 2 : 12 <= device_version ? 1 : 0 < device_version ? 3 : 0);
        encrypter(array, 1, not_using_client ? 1 : 0);
        encrypter(array, 1, is_not_top_window ? 1 : 0);
        encrypter(array, 5, (new Date).getHours() % 24)
    }

    function get_message_size(size) {
        return divide_floor(size, 8) + (0 < size % 8 ? 1 : 0)
    }

    function encrypter(t, format_length, y) {
        for (var A, B, index = mIndex; index < mIndex + format_length; index++) A = divide_floor(index, 8), B = 7 - index % 8, t[A] |= (y >> format_length - (index - mIndex + 1) & 1) << B;
        mIndex += format_length
    }

    function join_lobby(i) {
        var name_keycodes = names.convert_to_keycode(bots.wsss[i].name),
            name_length = name_keycodes.length;
        message = new Uint8Array(get_message_size(105 + 10 * name_length));
        mIndex = 0;
        encrypter(message, 1, 0);
        encrypter(message, 3, 1);
        encrypter(message, 10, bots.wsss[i].time_hash);
        encrypter(message, 6, bots.wsss[i].color[0]);
        encrypter(message, 6, bots.wsss[i].color[1]);
        encrypter(message, 6, bots.wsss[i].color[2]);
        format_password(message);
        format_client_info(message);
        for (var index = 0; index < name_length; index++) encrypter(message, 10, name_keycodes[index]);
        mIndex = 0;
    }

    function anti_disconnect_15s() {
        message = new Uint8Array(1);
        mIndex = 0;
        encrypter(message, 1, 0);
        encrypter(message, 3, 5);
        encrypter(message, 1, 0);
        mIndex = 0;
    }

    function multi_loaded() {
        message = new Uint8Array(7);
        mIndex = 0;
        encrypter(message, 1, 0);
        encrypter(message, 3, 6);
        encrypter(message, 8, wsCurrent.wsLobby.url == `wss://${websocket_manager.origins[1]}/s52/`);
        encrypter(message, 10, eY.wG);
        encrypter(message, 9, nickname.findIndex(nick => nick == wsCurrent.name));
        encrypter(message, 10, wsCurrent.time_hash);
        encrypter(message, 14, version_hash);
        mIndex = 0;
    };

    function update_active_bots(edit) {
        document.getElementById('botsCount').innerText = (parseInt(document.getElementById('botsCount').innerText) + edit).toString();
    }

    this.wsss = [];
    this.wsLobbyInit = function(bot_count, lobby) {
        for (let length = this.wsss.length, i = 0; i < bot_count; i++) {
            wsCurrent = new Integrated_websocket(lobby, i + length);
            this.wsss.push(wsCurrent)
        }
    }

    this.wsGameInit = function() {
        for (wsCurrent of this.wsss) {
            wsCurrent.wsGame = new WebSocket(`wss://${websocket_manager.origins[websocket_manager.remote]}/s52/`);
            wsCurrent.wsGame.onopen = function() {
                multi_loaded()
                this.send(message);
                wsCurrent.lastActive = new Date().getTime();
                update_active_bots(1);
            }
            wsCurrent.wsGame.onmessage = function() {
                if (wsCurrent.lastActive + 15E3 < new Date().getTime()) {
                    anti_disconnect_15s(this);
                    wsCurrent.lastActive = new Date().getTime();
                    this.send(message)
                }
            }
            wsCurrent.wsGame.onclose = function() {
                bots.wsss = bots.wsss.filter(intWs => intWs != wsCurrent);
                update_active_bots(-1)
            }
        }
    }

    this.join_game = function(game_id) {
        message = new Uint8Array(1);
        mIndex = 0;
        encrypter(message, 1, 0);
        encrypter(message, 3, 2);
        encrypter(message, 4, game_id);
        this.wsss.forEach(ws => ws.wsLobby.send(message))
        mIndex = 0;
    };

    this.disconnect = function() {
        for (let wsInt of this.wsss) {
            for (let ws of [wsInt.wsLobby, wsInt.wsGame]) {
                if (ws != null && [ws.CONNECTING, ws.OPEN].includes(ws.readyState)) ws.close();
            }
        }
        bots.wsss = [];
    }
}
var bots;
function join_bots(bot_count, lobby) {
    if (typeof(bots) == 'undefined') bots = new Bots();
    bots.wsLobbyInit(bot_count, lobby);
}