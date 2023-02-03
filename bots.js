function Bots() {
    function Integrated_websocket(lobby, id) {
        var wsCurrent = this;
        this.wsLobby = new WebSocket(`wss://${websocket_manager.origins[lobby]}/s52/`)
        this.wsLobby.onopen = function() {
            join_lobby(wsCurrent);
            this.send(message);
            this.lastActive = new Date().getTime();
            update_active_bots(0, 1);
        }
        this.wsLobby.onmessage = function(m) {
            if (wsCurrent.lastActive + 15E3 < new Date().getTime()) {
                anti_disconnect_15s(this);
                wsCurrent.lastActive = new Date().getTime();
                this.send(message)
            }
            m.data.arrayBuffer().then(function (buffer) {
                const array = new Uint8Array(buffer);
                multi_loading(array) && wsCurrent.wsGameInit(array);
            });
        }
        this.wsLobby.onclose = function() {
            if (wsCurrent.wsGame == null) {
                bots.wsss = bots.wsss.filter(intWs => intWs != wsCurrent);
                update_active_bots(0, -1)
            }
        }

        this.wsGameInit = function(data) {
            mIndex = 1;
            this.id = extractor(data, 2);
            var lobbi = extractor(data, 10);
            if (this.wsLobby.url.includes(websocket_manager.origins[lobbi])) {
                this.wsGame = this.wsLobby;
                this.wsLobby = null;
                update_active_bots(1,1);
                update_active_bots(1,-1);
            }
            else {
                this.wsGame = new WebSocket(`wss://${websocket_manager.origins[lobbi]}/s52/`);
                this.wsLobby.close(3247);
                update_active_bots(0, -1);
            }
            this.gameHash = extractor(data, 10);
            this.id = extractor(data, 2 == this.id ? 9 : 1);
            this.wsGame.onopen = function() {
                multi_loaded(wsCurrent)
                this.send(message);
                wsCurrent.lastActive = new Date().getTime();
                update_active_bots(1, 1);
            }
            this.wsGame.onmessage = function() {
                if (wsCurrent.lastActive + 15E3 < new Date().getTime()) {
                    anti_disconnect_15s(this);
                    wsCurrent.lastActive = new Date().getTime();
                    this.send(message)
                }
            }
            this.wsGame.onclose = function() {
                bots.wsss = bots.wsss.filter(intWs => intWs != wsCurrent);
                update_active_bots(1, -1)
            }
        }

        this.id = this.gameHash = this.wsGame = null;
        this.name = name_input.get_username() + ` ${id}`;
        this.lastActive = new Date().getTime();
        this.time_hash = Math.floor(Math.random()*1024)
        this.color = [Math.floor(Math.random()*64), Math.floor(Math.random()*64), Math.floor(Math.random()*64)]
    }

    var mIndex, message, wsCurrent;
    function format_password(array) {
        var password = Math.floor(Math.pow(2,48)*Math.random()),
            password_hash = Math.floor(password / 16777216);
        fitter(array, 24, password_hash);
        fitter(array, 24, password - 16777216 * password_hash)
    }

    function format_client_info(array) {
        fitter(array, 14, version_hash);
        fitter(array, 4, is_ios ? 2 : 12 <= device_version ? 1 : 0 < device_version ? 3 : 0);
        fitter(array, 1, not_using_client ? 1 : 0);
        fitter(array, 1, is_not_top_window ? 1 : 0);
        fitter(array, 5, (new Date).getHours() % 24)
    }

    function get_message_size(size) {
        return divide_floor(size, 8) + (0 < size % 8 ? 1 : 0)
    }

    function fitter(data, format_length, y) {
        for (var A, B, index = mIndex; index < mIndex + format_length; index++) A = divide_floor(index, 8), B = 7 - index % 8, data[A] |= (y >> format_length - (index - mIndex + 1) & 1) << B;
        mIndex += format_length
    }

    function extractor(data, data_length) {
        for (var message = 0, y, A, index = mIndex; index < mIndex + data_length; index++) y = divide_floor(index, 8), A = 7 - index % 8, message |= (data[y] >> A & 1) << mIndex + data_length - index - 1;
        mIndex += data_length;
        return message
    }

    function multi_loading(data) {
        mIndex = 0;
        if (data.length == 0) return false
        if (!extractor(data, 1) && [2,3].includes(extractor(data, 2))) return true
        return false
    }

    function join_lobby(ws) {
        var name_keycodes = names.convert_to_keycode(ws.name),
            name_length = name_keycodes.length;
        message = new Uint8Array(get_message_size(105 + 10 * name_length));
        mIndex = 0;
        fitter(message, 1, 0);
        fitter(message, 3, 1);
        fitter(message, 10, ws.time_hash);
        fitter(message, 6, ws.color[0]);
        fitter(message, 6, ws.color[1]);
        fitter(message, 6, ws.color[2]);
        format_password(message);
        format_client_info(message);
        for (var index = 0; index < name_length; index++) fitter(message, 10, name_keycodes[index]);
        mIndex = 0;
    }

    function anti_disconnect_15s() {
        message = new Uint8Array(1);
        mIndex = 0;
        fitter(message, 1, 0);
        fitter(message, 3, 5);
        fitter(message, 1, 0);
        mIndex = 0;
    }

    function multi_loaded(ws) {
        message = new Uint8Array(7);
        mIndex = 0;
        fitter(message, 1, 0);
        fitter(message, 3, 6);
        fitter(message, 8, websocket_manager.origins.findIndex(origin => ws.wsLobby.url.includes(origin)));
        fitter(message, 10, ws.gameHash);
        fitter(message, 9, ws.id);
        fitter(message, 10, ws.time_hash);
        fitter(message, 14, version_hash);
        mIndex = 0;
    };

    function send_emoji(emoji, target){
        message = new Uint8Array(3);
        mIndex = 0;
        fitter(message, 1, 1);
        fitter(message, 3, 6);
        fitter(message, 2, 0);
        fitter(message, 9, target);
        fitter(message, 7, emoji);
        mIndex = 0;
    }

    function update_active_bots(mode, edit) {
        var id = mode ? 'botsGameCount' : 'botsLobbyCount';
        document.getElementById(id).innerText = (parseInt(document.getElementById(id).innerText) + edit).toString();
    }

    this.wsss = [];
    this.wsLobbyInit = function(bot_count, lobby) {
        for (let length = this.wsss.length, i = 0; i < bot_count; i++) {
            wsCurrent = new Integrated_websocket(lobby, i + length);
            this.wsss.push(wsCurrent)
        }
    }

    this.join_game = function(game_id) {
        message = new Uint8Array(1);
        mIndex = 0;
        fitter(message, 1, 0);
        fitter(message, 3, 2);
        fitter(message, 4, game_id);
        this.wsss.forEach(ws => ws.wsLobby.send(message))
        mIndex = 0;
    };

    this.spam_emoji = function(emoji, target) {
        if (!document.getElementById('spamEmojiCheck').checked) return 0
        var available_bots = this.wsss.filter(intWs => intWs.wsGame != null && intWs.wsGame.readyState == intWs.wsGame.OPEN);
        if (target == 512) {
            var id = 0, index = player_count >= 15 ? 15 : playercount;
            available_bots.forEach(function(intWs) {
                while (id < index) {
                    send_emoji(emoji, id);
                    id++;
                    intWs.wsGame.send(message);
                }
                index = player_count >= index + 15 ? index + 15 : player_count;
            })
        } else {
            available_bots.forEach(function(intWs) {
                for (let i = 0; i < 15; i++) {
                    send_emoji(emoji, id);
                    intWs.wsGame.send(message);
                }
            })
        }
        setTimeout(() => this.spam_emoji(emoji, target), 3000)
    }

    this.disconnect = function() {
        for (let wsInt of this.wsss) {
            for (let ws of [wsInt.wsLobby, wsInt.wsGame]) {
                if (ws != null && [ws.CONNECTING, ws.OPEN].includes(ws.readyState)) ws.close();
            }
        }
        this.wsss = [];
        //document.getElementById('botsLobbyCount').innerText = '0';
    }
}
var bots;
function join_bots(bot_count, lobby) {
    if (typeof(bots) == 'undefined') bots = new Bots();
    bots.wsLobbyInit(bot_count, lobby);
}