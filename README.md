# Project Messiah
A project to create clients, assistants and bots on the online browser game Territorial.io
- Github Page: https://github.com/Teinc3/Project-Messiah.git

## Development Diary

### October 2022

- 31/10: Repository launched on Github

### November 2022

- 13/11: Reorganizing branches and game files
- 26/11: Completed Merge with Opening, reorganization of files

## Current Features

### Opening Branch

#### Spawning

- Pre-emptive spawn choosing, bot picks spawn according to pre-assigned priority list and distances from opponent.
- Basic spawn algorithm capable of picking 8-10kl spawns (Will be enhanced through Machine Learning in spawn_picking branch)
- Back to back spawns avoider and spawn jammer (Picks your opponent's spawn with a slight edge in position)

#### Opening

- Dynamic Latency detection on first cycle
- Greenbiscuit Lagged Opening without contact, Border theory opening with contact
- Continuous Expansion with/without contact, amount limitations through density control
- Basic Matching attacks in opening
- Continuous expansion start cycle depends on map type (Mountains, Europe and USA start on cycle 5)

### Reverse Engineering Branch

#### Miscellaneous

- Emoji Spammer

## Notes
- This is the master branch of the bot. All code should be completed first in their respective branches.
- Only merge when branches are confirmed to not conflict. Resolve all errors before continuing.