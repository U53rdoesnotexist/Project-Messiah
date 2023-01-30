var tick, cycle;

function script_game_init() {
    tick = 0;
    cycle = 1;
    console.log(`ID: ${my_id}, Players: ${player_count}`);
}

function script_game_tick() {
    tick++;
    if (tick >= 100) {
        tick -= 100;
		cycle += 1;
		console.log(`Cycle: ${cycle}, Troops: ${troops[my_id]}, Land: ${land[my_id]}`)
    }
}

function density(id) {
    return troops[id]/land[id]; 
}