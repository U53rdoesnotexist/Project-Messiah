# Project Messiah
A project to create clients, assistants and bots on the online browser game Territorial.io
- Github Page: https://github.com/Teinc3/Project-Messiah.git

## Reverse Engineering Branch
- A branch to uncover obfuscated game code and experiment with functions and ideas.
- Main Will be periodically merged using a splinter branch from here, to update scripts regularly.

## Development Diary
- 4/11 Checks lastest attack in the game, under what conditions does an attack end and return troops
- 8/11 Multiplayer game lobbies
- 9/11 Freespawning check and time left, minimum and maximum x,y coordinates of entities
- 12/11 Reversing the Pixel class/functions, RGB(A?) array determines pixel type:
1: Neutral land (8); 2: Water (16); 3: Borders or Mountains (24)
Spawning Radius Check (3 layer of bordering pixels from border length 8) (8 + 12 + 16 = 36, if bots have limited space then value is smaller than 36)