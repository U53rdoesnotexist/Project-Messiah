function Bots() {
    function Integrated_websocket(lobby, id) {
        this.ws1 = new WebSocket(`wss://${websocket_manager.origins[lobby]}/s52/`)
        this.ws2 = null;
        this.name = name_input.get_username() + ` ${id}`;
        this.last_message_time = new Date().getTime();
        this.time_hash = Math.floor(Math.random()*1024)
        this.color = [Math.floor(Math.random()*64), Math.floor(Math.random()*64), Math.floor(Math.random()*64)]
    }

    var index_message, message, yomi, init2_alr = false;
    function format_password(array) {
        var password = Math.floor(Math.pow(2,48)*Math.random()),
            password_hash = Math.floor(password / 16777216);
        external_encrypter(array, 24, password_hash);
        external_encrypter(array, 24, password - 16777216 * password_hash)
    }

    function format_client_info(array) {
        external_encrypter(array, 14, version_hash);
        external_encrypter(array, 4, is_ios ? 2 : 12 <= device_version ? 1 : 0 < device_version ? 3 : 0);
        external_encrypter(array, 1, not_using_client ? 1 : 0);
        external_encrypter(array, 1, is_not_top_window ? 1 : 0);
        external_encrypter(array, 5, (new Date).getHours() % 24)
    }

    function get_message_size(size) {
        return divide_floor(size, 8) + (0 < size % 8 ? 1 : 0)
    }

    function external_encrypter(t, format_length, y) {
        for (var A, B, index = index_message; index < index_message + format_length; index++) A = divide_floor(index, 8), B = 7 - index % 8, t[A] |= (y >> format_length - (index - index_message + 1) & 1) << B;
        index_message += format_length
    }

    function join_lobby(i) {
        var name_keycodes = names.convert_to_keycode(bots.wsss[i].name),
            name_length = name_keycodes.length;
        message = new Uint8Array(get_message_size(105 + 10 * name_length));
        index_message = 0;
        external_encrypter(message, 1, 0);
        external_encrypter(message, 3, 1);
        external_encrypter(message, 10, bots.wsss[i].time_hash);
        external_encrypter(message, 6, bots.wsss[i].color[0]);
        external_encrypter(message, 6, bots.wsss[i].color[1]);
        external_encrypter(message, 6, bots.wsss[i].color[2]);
        format_password(message);
        format_client_info(message);
        for (var index = 0; index < name_length; index++) external_encrypter(message, 10, name_keycodes[index]);
        index_message = 0;
    }

    function anti_disconnect_15s() {
        message = new Uint8Array(1);
        index_message = 0;
        external_encrypter(message, 1, 0);
        external_encrypter(message, 3, 5);
        external_encrypter(message, 1, 0);
        index_message = 0;

    }

    function multi_loaded() {
        message = new Uint8Array(7);
        index_message = 0;
        external_encrypter(message, 1, 0);
        external_encrypter(message, 3, 6);
        external_encrypter(message, 8, yomi.ws1.url == `wss://${websocket_manager.origins[1]}/s52/`);
        external_encrypter(message, 10, eY.wG);
        external_encrypter(message, 9, nickname.findIndex(nick => nick == yomi.name));
        external_encrypter(message, 10, yomi.time_hash);
        external_encrypter(message, 14, version_hash);
        index_message = 0;
    };

    this.wsss = [];
    this.init = function(bot_count, lobby) {
        for (let i = 0; i < bot_count; i++) {
            yomi = new Integrated_websocket(lobby, i);
            yomi.ws1.onopen = function() {
                join_lobby(i);
                this.send(message);
                this.last_message_time = new Date().getTime();
            }
            yomi.ws1.onmessage = function(m) {
                if (this.last_message_time + 15E3 < new Date().getTime()) {
                    anti_disconnect_15s(this);
                    this.last_message_time = new Date().getTime();
                    this.send(message)
                }
                if (![50,51,52,53,54,55,56,57,58].includes(m.data.size) && !init2_alr) {
                    this.close()
                    setTimeout(() => bots.ws2_init(), 100);
                    init2_alr = true;
                }
            }
            this.wsss.push(yomi)
        }
    }

    this.ws2_init = function() {
        for (yomi of this.wsss) {
            yomi.ws2 = new WebSocket(`wss://${websocket_manager.origins[websocket_manager.remote]}/s52/`);
            yomi.ws2.onopen = function() {
                multi_loaded()
                this.send(message);
                yomi.last_message_time = new Date().getTime();
            }
            yomi.ws2.onmessage = function() {
                if (yomi.last_message_time + 15E3 < new Date().getTime()) {
                    anti_disconnect_15s(this);
                    yomi.last_message_time = new Date().getTime();
                    this.send(message)
                }
            }
        }
    }

    this.join_game = function(game_id) {
        message = new Uint8Array(1);
        index_message = 0;
        external_encrypter(message, 1, 0);
        external_encrypter(message, 3, 2);
        external_encrypter(message, 4, game_id);
        this.wsss.forEach(ws => ws.ws1.send(message))
        index_message = 0;
    };
}
var bots;
function join_bots(bot_count, lobby) {
    bots = new Bots();
    bots.init(bot_count, lobby);
}