var tick, cycle, spawns, pending, last_active_time;
var tag = "АI", allies, ally_index;

function script_game_init() {
    tick = 0, cycle = 1;
    allies = [];
    spawns = [];
	pending = [];
    nickname.forEach(function (element, index) {element.includes(tag) && allies.push(index), index == my_id && (ally_index = allies.length-1)})
    console.log(`ID: ${my_id}, Players: ${player_count}, Allies: ${allies.length}.`);
    if (free_spawn) {
        spawn_generator()
    }
	last_active_time = new Date().getTime();
}

function script_game_tick() {
    tick++;
    if (tick >= 100) {
        tick -= 100;
		cycle += 1;
		console.log(`Cycle: ${cycle}, Troops: ${troops[my_id]}, Land: ${land[my_id]}`)
    }
	//opening1();
	//opening2();
	leave_game();
	new_team_game();
}

function script_spawn_tick(spawn_tick) {
	if (land[my_id] == 0 && spawn_tick == 1 && in_spawn) {
		if (ally_index <= spawns.length - 1) {
			multi_out.pick_location(1E3, spawns[ally_index].x, spawns[ally_index].y)
			console.log(`Chosen Spawn: (${spawns[ally_index].x}, ${spawns[ally_index].y})`);
		} else console.log('Random Spawn')
	}
}

function new_team_game() {
	setTimeout(function () {
		const key = new KeyboardEvent('keydown', { key:"Enter" });
		on_key_up(key);
		setTimeout(() => join_team_game(), 1000) 
	}, 500);
}

function join_team_game() {
	if (lobby.get_next_games() == undefined) {
		setTimeout(function () {join_team_game();}, 1000);
	} else if (lobby.get_next_games().find(game => game.game_id == lobby.get_game_selected() && game.game_mode <= 6 && !game.contest) != undefined) {
		return 1;
	} else { 
		for (var game of lobby.get_next_games()) {
			if (game.game_mode <= 6 && game.game_id != lobby.get_game_selected() && !game.contest && ![10,11,12].includes(game.map_id) && game.time_left >= 2) {
				multi_out.join_game(game.game_id);
				lobby.select_game(game.game_id);
				return 1;
			}
		}
		setTimeout(function () {join_team_game();}, 1000);
	}
}

function opening1() {

	var amount = 0, timing = [61,65,63,61,54];
	if (timing[cycle - 1] == tick) {
		switch (cycle){
			case 1:
				amount = 228;
				break;
			case 2:
				amount = 348;
				break;
			case 3:
				amount = 624;
				break;
			case 4:
				amount = 844;
				break;
			case 5:
				amount = 2244;
				break;
		}
		multi_out.attack(Math.ceil(amount * 1000 / troops[my_id] / (1 + (ay.interest(my_id) - 2.1) / 1E4)), my_id);
	}
}

function opening2() {
	var ratio = ([30,60].includes(tick) && cycle == 6) ? 350 : ([20,65].includes(tick) && cycle == 7) ? 250 : ([10,60].includes(tick) && cycle == 8) ? 100 : 0
	if (ratio != 0) multi_out.attack(ratio, my_id);
}

function spawn_generator() {
	for (let x = Math.round(map_width / 8); x < map_width; x += Math.round(map_width / 8)) {
		for (let y = Math.round(map_height / 8); y < map_height; y += Math.round(map_height / 8)) {
			if (pixel.can_own(pixel.to_coord(x, y))) {
				let spawn = {
					x: x,
					y: y,
					penalty: 0,
					min: !1,
				}
				spawns.push(spawn)
			}
		}
	}

	for (let spawn of spawns) {
		spawn.penalty = penalty(spawn.x, spawn.y);
		while (!spawn.min) {
			var up = penalty(spawn.x, spawn.y + 2), down = penalty(spawn.x, spawn.y - 2),
				left = penalty(spawn.x - 2, spawn.y), right = penalty(spawn.x + 2, spawn.y),
				penalties = [spawn.penalty, up, down, left, right],
				side = penalties.findIndex(penalty => penalty == Math.min(...penalties));
			spawn.penalty = Math.min(...penalties);
			switch (side) {
				case 0:
					spawn.min = !0
					break;
				case 1:
					spawn.y += 2
					break;
				case 2:
					spawn.y -= 2
					break;
				case 3:
					spawn.x -= 2
					break;
				case 4:
					spawn.x += 2
					break;
			}
		}
	}

	for (let spawna of spawns) {
		for (let spawnb of spawns) {
			if (distance(spawna.x - spawnb.x, spawna.y - spawnb.y) <= 5 && spawna !== spawnb) spawns = spawns.filter(spawn => spawn != spawnb)
		}
	}
	spawns.sort(function (a, b) { return (a.penalty > b.penalty) ? 1 : ((b.penalty > a.penalty) ? -1 : 0); });

	if (spawns.length >= allies.length) spawns.splice(allies.length, spawns.length - allies.length)
	
}

function check_last_active_time() {
	var current_time = new Date().getTime();
	if (current_time >= last_active_time + 90E3) {
		location.reload();
	}
	setTimeout(() => check_last_active_time() , 120E3);
}

function penalty(spawn_x, spawn_y) {
	var pen = 0, range = (current_map == 1 ? 65 : current_map == 3 ? 50 : [4, 5, 6].includes(current_map) ? 70 : [8, 12].includes(current_map) ? 55 : [10, 13].includes(current_map) ? 45 : Math.round((map_height * map_width / entity_count) ** 0.5));
	for (let x = spawn_x - range; x <= spawn_x + range; x++) {
		for (let y = spawn_y - range; y <= spawn_y + range; y++) {
			if (!pixel.is_neutral(pixel.to_coord(x, y))) {
				let dist = distance(x - spawn_x, y - spawn_y);
				pen += (dist >= range ? 0 : (range - dist) ** 0.67)
			}
		}
	}
	if ([1, 4, 13].includes(current_map)) pen *= (1 + (distance(spawn_x - map_width / 2, spawn_y - map_height / 2) / distance(map_width/2, map_height/2))**0.5)
	return Math.round(pen);
}

function density(id) {
    return troops[id]/land[id]; 
}

function distance(x,y) {
    return Math.sqrt(x**2 + y**2);
}

function on_start() {
	document.getElementById('menu').hidden = true;
	save_username(`[${tag}] ${Math.floor(Math.random()*999)+1}`);
	name_input.change_input_username()
	last_active_time = new Date().getTime();
	check_last_active_time();
	new_team_game();
}

on_start();
