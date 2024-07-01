# Order-137
A project to create clients, assistants and bots on the online browser game Territorial.io
- Github Page: https://github.com/Teinc3/Project-Messiah.git
- Repository launched on Github on 31/10/2022, last updated 25/06/2023

## Program Flow
- Spider connects to lobby servers
- Certain game previews trigger creation of bot instances
- Bot instances mass join the game
- Bot instances execute required actions
- Rinse and repeat

## Required Configuration

### .env file
- PASSWORD_BASE: Starting password of 1v1 accounts used
- DISCORD_TOKEN: Token of Discord bot for remote control
- PROXY_LIST: API containing a list of proxies

### settings.json file
Contains essential settings that will determine the function of the bot.
Frequently changed settings:
- mwCode: Authentication code required to connect to servers
- lobbyID (Under .spider): LobbyID in which the bots will connect to.
- gamemode (Under .bots.trigger): A list of gamemodes which will trigger bots.

## How to run
1. Clone the repository
2. Run `npm ci` to do a clean install
3. Run `tsc` to compile typescript into javascript
4. Add a .env file and configure settings.json
5. Run `node .` or `npm start`. 
Note: you might want to run the process in fork mode using pm2 or nohup if you wish to run the bot for extended petiods of time.)
