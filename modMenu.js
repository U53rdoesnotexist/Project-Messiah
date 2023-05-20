class ModMenu {
    static buttonLabels = [
        "Menu", "Account", "Custom", "Display",
        "Players", "Logs", "Audio", "Chat",
        "Single", "Misc", "Presets", "About"
    ];
    constructor(panelTypes, width, height, x, y, z) {
        this.panelTypes = panelTypes;
        this.title = ModMenu.buttonLabels[panelTypes[0]];
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.isDragging = false;
        this.dragStartX = 0;
        this.dragStartY = 0;
        this.isResizing = false;
        this.resizeStartX = 0;
        this.resizeStartY = 0;
        this.dockStatus = 0;

        modMenus.push(this);

        this.menu = document.createElement("div");
        document.body.appendChild(this.menu);
        this.menu.style.position = "absolute";
        this.menu.style.width = this.width + "px";
        this.menu.style.height = this.height + "px";
        this.menu.style.left = this.x + "px";
        this.menu.style.top = this.y + "px";
        this.menu.style.backgroundColor = "black";
        this.menu.style.border = "1px solid gray";
        this.menu.style.padding = "0";
        this.menu.style.userSelect = "text";
        this.menu.style.zIndex = z;
        this.menu.style.overflowX = "hidden";
        this.menu.style.overflowY = "auto";
        this.visible = true;
        this.drawWindow();
    
        // Add event listeners for dragging and resizing to menu container
        document.body.addEventListener("mousedown", (e) => this.onMouseDown(e));
        document.body.addEventListener("mousemove", (e) => this.onMouseMove(e));
        document.body.addEventListener("mouseup", (e) => this.onMouseUp(e));
        document.body.addEventListener("resize", (e) => this.onResize(e));
    }

    drawWindow() {
        this.menu.innerHTML = "";
        for (var panelType of this.panelTypes) {
            this.drawPanel(panelType, this.panelTypes[0]);
            if (this.panelTypes[this.panelTypes.length -1] !== panelType) this.drawDivider();
        }
        this.drawResizeButton();
    }

    drawPanel(panelType, firstPanelType) {
        if (panelType == firstPanelType) this.drawTitleBar();
        if (panelType == 0) this.drawMenuPanel();
        else if (panelType == 1) this.drawAccountPanel();
        else if (panelType == 2) this.drawCustomPanel();
        else if (panelType == 3) this.drawDisplayPanel();
        else if (panelType == 4) this.drawPlayersPanel();
        else if (panelType == 5) this.drawLogsPanel();
        else if (panelType == 7) this.drawChatPanel();
        else if (panelType == 8) this.drawSinglePanel();
        else if (panelType == 11) this.drawAboutPanel();
    }

    drawTitleBar() {
        // Create title bar
        this.titleBar = document.createElement('div');
        this.titleBar.classList.add('titleBar');
        this.titleBar.style.backgroundColor = '#999';
        this.titleBar.style.color = '#fff';
        this.titleBar.style.height = '20px';
        this.titleBar.style.padding = '2px';
        this.titleBar.style.display = 'flex';
        this.titleBar.style.alignItems = 'center';
        this.titleBar.style.justifyContent = 'space-between';
        this.titleBar.style.position = 'sticky';
        this.titleBar.style.top = '0';
        this.titleBar.innerHTML = `
            <span style="margin: 0 auto;">${this.title}</span>
            <button class="menu-button" id="forceDock${this.getPanelIndex()}">&#10234;</button>
            <button class="menu-button" id="close${this.getPanelIndex()}">&#10006;</button>
        `;

        // Add title bar to menu
        this.menu.appendChild(this.titleBar);

        // Measure the width of the title bar and adjust the menu's width
        const titleBarWidth = this.titleBar.getBoundingClientRect().width;
        if (titleBarWidth > this.width) {
            this.width = titleBarWidth;
            this.menu.style.width = this.width + 'px';
        }

        // Add menu to DOM
        document.body.appendChild(this.menu);

        // Add event listener to close button
        const closeButton = document.getElementById(`close${this.getPanelIndex()}`);
        closeButton.addEventListener('click', (e) => {
            modMenus = modMenus.filter((menu) => menu !== this);
            this.menu.remove();
            this.onDock(e);
            canvasManager.dockUpdateCanvas();
        });

        // Add event listener to dock button
        const dockButton = document.getElementById(`forceDock${this.getPanelIndex()}`);
        dockButton.addEventListener('click', (e) => {
            if (this.dockStatus == 0) {
                var docks = [getDockWidth(1), getDockWidth(2)];
                if (docks[0] == 0 && docks[1] == 0 || docks[0] > 0 && docks[1] > 0) {
                    //Dock to closest side
                    const xCenter = this.x + this.width / 2;
                    if (xCenter - docks[0] < window.innerWidth - docks[1] - xCenter) this.dockStatus = 1;
                    else this.dockStatus = 2;
                } else {
                    //dock to the existing side
                    if (docks[0] > 0) this.dockStatus = 1;
                    else this.dockStatus = 2;
                }
                if (this.dockStatus == 1) {
                    this.x = 0;
                } else {
                    this.x = window.innerWidth - (docks[1] > 0 ? docks[1] : this.width);
                }
                this.dockStatus = 0;
                this.menu.style.left = this.x + "px";
            } else {
                this.x += (this.dockStatus == 1 ? 1 : -1) * this.width;
                this.menu.style.left = this.x + "px";
            }
            this.onDock(e);
            canvasManager.dockUpdateCanvas();
        });
    }

    drawMenuPanel() {
        // Create menu panel
        const table = document.createElement("div");
        table.style.display = "table";
        table.style.alignContent = "center";
        table.style.marginLeft = "auto";
        table.style.marginRight = "auto";
        table.style.paddingTop = "15px";
        var tableColumns = Array(4);
        for (let colIndex = 0; colIndex < tableColumns.length; colIndex++) {
            tableColumns[colIndex] = document.createElement("div");
            tableColumns[colIndex].style.display = "table-cell";
            table.appendChild(tableColumns[colIndex]);
        }
        
        for (let butIndex = 0; butIndex < ModMenu.buttonLabels.length; butIndex++) {
            var button = document.createElement("button");
            button.innerHTML = ModMenu.buttonLabels[butIndex];
            button.style.backgroundColor = "transparent";
            button.style.font = `italic calc(${this.width}px / 20)` + " Pacifico"; //calculate font size based on menu width
            button.style.color = this.getColor(butIndex);
            button.style.border = "none";
            button.style.width = "100%";
            button.style.textAlign = "center";
            button.setAttribute("draggable", "true");
            if (modMenus.findIndex((menu) => menu.panelTypes.includes(butIndex)) !== -1 || this.panelTypes.includes(butIndex)) {
                button.style.border = "2px solid white";
                button.style.borderRadius = "5px";
            }

            button.addEventListener("click", (e) => {
                if (modMenus.find((menu) => menu.panelTypes.includes(butIndex))) { //This panel exist dumdum
                    const reqMenu = modMenus.find((menu) => menu.panelTypes.includes(butIndex));
                    //If the "Menu" category is removed, and there are no more panels with the "Menu" category, we remove the menu.
                    if (butIndex == 0) {
                        modMenus = modMenus.filter((menu) => !menu.panelTypes.includes(butIndex));
                        reqMenu.menu.remove();
                        this.onResize(e);
                        this.onDock(e);
                    } else if (reqMenu.panelTypes.length == 1) { //If that menu doesnt have any panels We remove it.
                        modMenus = modMenus.filter((menu) => !menu.panelTypes.includes(butIndex));
                        reqMenu.menu.remove();
                        this.onDock(e);
                    } else { //We remove the panel from the menu which contains the panel.
                        reqMenu.panelTypes = reqMenu.panelTypes.filter((panelType) => panelType !== butIndex);
                        reqMenu.drawWindow();
                    }
                    this.findAndUpdateMenu();
                } else { // This panel does not exist, append it to the current one.
                    this.panelTypes.push(butIndex);
                    this.drawWindow();
                }
            });
            button.addEventListener("dragend", (e) => {
                //If the button is still within the menu, we do nothing.
                if (e.clientX > this.x && e.clientX < this.x + this.width && e.clientY > this.y && e.clientY < this.y + this.height) return;

                //Find any pre-existing panels which contain the menu corresponding to the button.
                var reqMenu = modMenus.find((menu) => menu.panelTypes.includes(butIndex));
                if (reqMenu) {
                    reqMenu.panelTypes = reqMenu.panelTypes.filter((panelType) => panelType !== butIndex);
                    if (reqMenu.panelTypes.length == 0) { //If that menu doesnt have any panels We remove it.
                        modMenus = modMenus.filter((menu) => !menu.panelTypes.includes(butIndex));
                        reqMenu.menu.remove();
                    } else reqMenu.drawWindow();
                }
                //Generate new panel containing that menu
                const newMenu = new ModMenu([butIndex], this.width, getMin(this.height, window.innerHeight/2), e.clientX, e.clientY, this.zIndex + 1);
                modMenus.push(newMenu);

                this.findAndUpdateMenu();
            });

            tableColumns[butIndex % 4].appendChild(button);
        }
        
        table.style.width = "80%";
        table.style.height = "auto";
        table.style.margin = "0 auto";
        this.menu.appendChild(table);
    }

    drawAccountPanel() {
        //1. Account (Related to BR and private lb shit? Wins stats? breakdowns?) & Privacy (Allow Uploading of Replays? Anonymize uploader?)
        
        const title = this.createLabel("Accounts And Privacy", "h1", `color: ${this.getColor(1)}; text-align: center;`)

        const accountLabel = this.createLabel("Account Settings", "h2")

        const acc1v1Label = this.createLabel("1v1 Accounts", "h4")

        //Change and view your password here kek
        const passwordInput = this.createLabelledInput("1v1 Password:", "pw1v1", "password", 0, 0, loadPassword(), void(0), "View or change your 1v1 Password here.")
        const savePwButton = document.createElement("button");
        savePwButton.innerHTML = "Save Password";
        savePwButton.style.marginLeft = "20px"
        savePwButton.style.marginBottom = "10px"
        savePwButton.onclick = () => {
            var passwordMaxCap = Math.floor(Math.pow(2, 48));
            var numericPW = parseInt(strings.convertToNumeric(passwordInput.value));
            if (0 >= numericPW || numericPW >= passwordMaxCap) {
                alert("Invalid password.");
                return false;
            }
            savePassword(numericPW);
        };
        this.menu.appendChild(savePwButton);

        const terriHubLabel = this.createLabel("Terrihub Accounts", "h4");

        const tbcLabel = this.createLabel("Terrihub accounts are not yet implemented as of now. We will notify you in our Discord Server when it rolls out.", "p", 
            `color: red; text-align: left; padding-left: 10px;`);

        const privacyLabel = this.createLabel("Privacy Settings", "h2");

        const privacyPolicyLabel = this.createLabel("Privacy and cookie policies of territorial.io also stands for Teritorio, with the inclusion of Terrihub and its services.", "p",
            `color: white; text-align: left; padding-left: 10px;`);
        
        const replaysLabel = this.createLabel("Public Replay Uploads", "h4");

        const uploadReplaysInput = this.createLabelledInput("Upload Replays:", "uploadReplays", "checkbox", 0, 0, modHandler.uploadReplay, (e) => {
            modHandler.uploadReplay = uploadReplaysInput.checked;
            anonReplayInput.disabled = !uploadReplaysInput.checked;
        }, "Allow uploading of your replays to our discord server. This will help us improve our statistics, tutorials and leaderboards.")
        const anonReplayInput = this.createLabelledInput("Anonymize Replays:", "anonReplays", "checkbox", 0, 0, modHandler.anonReplays, (e) => {
            modHandler.anonReplays = anonReplayInput.checked;
        }, "Anonymize your replays when uploading them to our discord server. This will prevent users from knowing who you are in the match.")
        anonReplayInput.disabled = !uploadReplaysInput.checked;
        anonReplayInput.style.marginBottom = "20px";

        //const cookiesLabel = this.createLabel("Cookies", "h4");
    }

    drawCustomPanel() {
        //2. Custom Games and Private Matches (Custom interest formula and taxes? Boat speeds? Set gamemodes? More entities and custom maps?)
        //We should add a function which prevents changing the custom game settings while ingame/clientStatus >= 1 later...

        const title = this.createLabel("Custom Games", "h1", `color: ${this.getColor(2)}; text-align: center;`)

        const warning = this.createLabel("Warning: Changing these settings may cause severe desyncs if you play in a vanilla game.", "p",
            `color: red; text-align: left; padding-left: 10px;`);

        //Custom Lobby Settings + Client Hash + Remove Players if incorrect code in vanilla games
        const lobbyLabel = this.createLabel("Lobby Settings", "h2");

        const clientHashInput = this.createLabelledInput("Client Hash:", "lobbyHash", "number", 0, 2**22 - 1, modHandler.clientHash, (e) => {
            if (parseInt(clientHashInput.value) > 2**22 - 1 || parseInt(clientHashInput.value < 0) || parseInt(clientHashInput.value) % 1 != 0) return;
            modHandler.clientHash = clientHashInput.value;
        }, "This is the hash that will be used to generate the lobby code. It is recommended to use a random number between 0 and 2**22 -1 (or 4194303).");
        const killIfConflictInput = this.createLabelledInput("Kill Players With Wrong Client Hash:", "lobbyKill", "checkbox", 0, 1, modHandler.killIfConflict, (e) => {
            modHandler.killIfConflict = killIfConflictInput.checked;
        }, "If this is enabled, players with the wrong hash will be kicked from the game. This is useful for preventing players from interfering with your game if you are playing with a custom hash.");

        const customizationLabel = this.createLabel("Game Mechanics", "h2");

        const pixelEconomyLabel = this.createLabel("Pixel Economics", "h4")

        //Neutral land grab cost
        const neutCostInput = this.createLabelledInput("Minimum Pixel Cost:", "neutCost", "number", -2147483, 2147483, neutralLandCost, (e) => {
            if (parseInt(neutCostInput.value) % 1 != 0) return;
            neutralLandCost = parseInt(neutCostInput.value);
        }, "This is the minimum amount of troops needed to capture a pixel.");
        
        //RedI threshold
        const redIThresInput = this.createLabelledInput("Red Interest Threshold:", "redI", "number", 0, 1000, modHandler.redIThreshold, (e) => {
            if (parseInt(redIThresInput.value) > 1000 || parseInt(redIThresInput.value < 0) || parseInt(redIThresInput.value) % 1 != 0 || parseInt(redIThresInput.value) <= maxTroopsToLandRatio) return;
            modHandler.redIThreshold = parseInt(redIThresInput.value);
        }, "This is the amount of troops per pixel needed for red interest to kick in. This must be lower than the maximum amount of troops per pixel.");

        //Max troops per pixel
        const maxTroopsPixelInput = this.createLabelledInput("Maximum Troops Per Pixel:", "maxTroopsPixel", "number", 0, 1000, maxTroopsToLandRatio, (e) => {
            if (parseInt(maxTroopsPixelInput.value) > 1000 || parseInt(maxTroopsPixelInput.value < 0) || parseInt(maxTroopsPixelInput.value) % 1 != 0) return;
            maxTroopsToLandRatio = parseInt(maxTroopsPixelInput.value);
        }, "This is the maximum amount of troops that can be on a pixel.");

        //Customize Taxes, with rates from 0-100% for each tax type (attack, boat, donations)
        const taxesLabel = this.createLabel("Custom Tax Rates (0-100%)", "h4");

        const attackTaxInput = this.createLabelledInput("Attack:", "aTax", "number", 0, 100, modHandler.modTax.attack * 100 / 256, (e) => {
            if (parseInt(attackTaxInput.value) > 100 || parseInt(attackTaxInput.value) < 0) return;
            modHandler.modTax.attack = parseInt(attackTaxInput.value) * 256 / 100;
        }, "This is the tax rate for attacking other entities.");
        const boatTaxInput = this.createLabelledInput("Boat:", "bTax", "number", 0, 100, modHandler.modTax.boat * 100 / 256, (e) => {
            if (parseInt(boatTaxInput.value) > 100 || parseInt(boatTaxInput.value) < 0) return;
            modHandler.modTax.boat = parseInt(boatTaxInput.value) * 256 / 100;
        }, "This is the tax rate for sending boats.");
        const supportTaxInput = this.createLabelledInput("Support:", "dTax", "number", 0, 100, modHandler.modTax.support * 100 / 256, (e) => {
            if (parseInt(supportTaxInput.value) > 100 || parseInt(supportTaxInput.value) < 0) return;
            modHandler.modTax.donation = parseInt(supportTaxInput.value) * 256 / 100;
        }, "This is the tax rate for sending donations.");

        //Customize Interest Formula will be too difficult to make for now. Oi, maybe you can implement this lol

        //Customize Boat Speeds, with rates from 0-5 (0 being the Fastest, 5 being the Slowest)
        const boatSpeedLabel = this.createLabel("Attack Speeds", "h4");

        const boatSpeedInput = this.createLabelledInput("Boat Speeds:", "bSpeed", "number", 1, 6, modHandler.boatSpeed + 1, (e) => {
            if (parseInt(boatSpeedInput.value) > 5 || parseInt(boatSpeedInput.value) < 0) return;
            modHandler.boatSpeed = parseInt(boatSpeedInput.value) - 1;
        }, "This is the speed of boats measured in ticks per position update. 1 is the fastest, 5 is the slowest. 3 is the default value.");
        const boatSpeedVariationInput = this.createLabelledInput("Vary With Land Size:", "bSpeedVar", "checkbox", 0, 0, modHandler.boatSpeed == -1, (e) => {
            modHandler.boatSpeed = boatSpeedVariationInput.checked ? -1 : parseInt(boatSpeedInput.value) - 1;
            boatSpeedInput.disabled = boatSpeedVariationInput.checked;
        }, "If this is enabled, the boat speed will vary with the size of the land. The larger the land, the slower the boats. This is useful for making the game more balanced on larger maps.");

        const gameSettingLabel = this.createLabel("Game Settings", "h2");

        //Customize Gamemodes, with a list of gamemodes to choose from. If the chosen gamemode is teams, then we can customize the team sizes.
        const gameModeLabel = this.createLabel("Game Modes", "h4");

        const options = ["Teams", "Battle Royale", "Zombies", "No Full Send", "Default"],
            defaultOption = modHandler.customGamemode <= 6 ? 0 : modHandler.customGamemode == 7 ? 1 : modHandler.customGamemode == 9 ? 2 : modHandler.customGamemode == 10 ? 3 : 4;
        const gameModeInput = this.createLabelledInput("Game Mode:", "gMode", "select", options, 0, defaultOption, (e) => {
            modHandler.customGamemode = parseInt(gameModeInput.value) == 0 ? parseInt(teamSizeInput.value) - 2: parseInt(gameModeInput.value) == 1 ? 7: parseInt(gameModeInput.value) == 2 ? 9: parseInt(gameModeInput.value) == 3 ? 10 : 11;
            teamSizeInput.disabled = parseInt(gameModeInput.value) != 0;
            teamBoostInput.disabled = [7, 8, 10].includes(modHandler.customGamemode);
        }, "You can customize the gamemode of all games in the lobby.");
        const teamSizeInput = this.createLabelledInput("Team Count (2-8):", "tSize", "number", 2, 8, rangeClamp(2, modHandler.customGamemode + 2, 8), (e) => {
            if (parseInt(teamSizeInput.value) > 8 || parseInt(teamSizeInput.value) < 2 || parseInt(teamSizeInput.value) % 1 != 0) return;
            modHandler.customGamemode = parseInt(teamSizeInput.value) - 2;
        }, "If you select teams, you can customize the number of teams in the game.");
        teamSizeInput.disabled = parseInt(gameModeInput.value) != 0;
        //Apply NFS algorithm to limit boosting behavior in team games
        const teamBoostInput = this.createLabelledInput("Limit Boosting:", "tBoost", "checkbox", 0, 0, false, (e) => {
            //I will make this later
        }, "If this is enabled, boosting behavior will be limited in team games by altering the 'No Full Send' Algorithm. This is useful for making team games more balanced.");
        teamBoostInput.disabled = [7, 8, 10].includes(modHandler.customGamemode);
        
        //Customize Maps, with a list of maps to choose from. If a custom map is loaded, then we can select that map.
        const mapLabel = this.createLabel("Maps", "h4");

        const updateMapSizeInputDisabled = () => {
            const selectedMap = parseInt(mapInput.value);
            const isNotResizable = isRealMap(selectedMap) && selectedMap != mapNames.length - 1;
            mapSizeInput.disabled = isNotResizable;
        }

        var mapNames = [];
        for (let mapIndex = 0; mapIndex < customMapID; mapIndex++) {
            mapNames.push(mapInfo.getValueByID(mapIndex).name);
        }
        mapNames.push("Custom");
        mapNames.push("Default");
        //How to Enable/Disable mapSizeInput? When modHandler.customMapSize is <10 then its false. When its between 10 and 4096 its true.
        const mapInput = this.createLabelledInput("Map:", "map", "select", mapNames, 0, modHandler.customMap == -1 ? mapNames.length - 1 : modHandler.customMap, (e) => {
            //If the user didn't load any custom maps, then we can't select a custom map, alert the user and set the map to default.
            if (parseInt(mapInput.value) == mapNames.length - 2 && parseInt(mapInput.value) == customMapID) {
                alert("Load a custom map first!");
                mapInput.value = mapNames.length - 1;
                return;
            } else modHandler.customMap = parseInt(mapInput.value) == mapNames.length - 1 ? -1 : parseInt(mapInput.value);
            updateMapSizeInputDisabled();
            //We also have to revert this setting if the user changed the current map loaded back to a default one in the map selection menu.
        }, "You can set the map to always appear in the game lobby. Load a custom map first if you want to play with it in multiplayer.");
        const mapSizeInput = this.createLabelledInput("Map Size (10-4096, Default: 0):", "mapSize", "number", 0, 4096, modHandler.customMapSize, (e) => {
            if (parseInt(mapSizeInput.value) > 4096 || parseInt(mapSizeInput.value) < 10 && parseInt(mapSizeInput.value) != 0 ||parseInt( mapSizeInput.value) % 1 != 0) return;
            modHandler.customMapSize = parseInt(mapSizeInput.value);
            mapInfo.init()
        }, "Map size is only customizable for generated maps.");
        updateMapSizeInputDisabled();
        const reloadMapButton = document.createElement("button");
        reloadMapButton.innerHTML = "Reload Map";
        reloadMapButton.style.marginLeft = "20px"
        reloadMapButton.style.marginBottom = "10px"
        reloadMapButton.onclick = () => {
            loadMap(modHandler.customMap != -1 ? modHandler.customMap : currentMapID, currentMapSeed);
        };
        this.menu.appendChild(reloadMapButton);

        //Custom spawn and Map Seed + reload Map button (only enabled if currentMapSeed != mapseed selected)
        const mapSeedInput = this.createLabelledInput("Map Seed (0-16383):", "mapSeed", "number", 0, 16383, 14071, (e) => {
            if (parseInt(mapSeedInput.value) > 16383 || parseInt(mapSeedInput.value) < 0 || parseInt(mapSeedInput.value) % 1 != 0) return;
            currentMapSeed = parseInt(mapSeedInput.value);
        }, "Map seed is used to determine the layout of the map. Not all maps have a unique layout which varies with this seed.");
        const spawnSeedInput = this.createLabelledInput("Spawn Seed (0-16383):", "spawnSeed", "number", 0, 16383, 0, (e) => {
            if (parseInt(spawnSeedInput.value) > 16383 || parseInt(spawnSeedInput.value) < 0 || parseInt(spawnSeedInput.value) % 1 != 0) return;
            currentSeedSpawn = parseInt(spawnSeedInput.value);
            //I think this will still get overwritten when they call gameInit, but I'll leave it for now.
        }, "Spawn seed is used to determine the locations bots spawn on the map.");


        //Bots Subcategory
        const botsLabel = this.createLabel("Bots", "h2");

        const maxEInput = this.createLabelledInput("Max Entities (1-4096):", "maxE", "number", 1, 4096, 512, (e) => {
            if (parseInt(maxEInput.value) > 4096 || parseInt(maxEInput.value) < 1 || parseInt(maxEInput.value) % 1 != 0) return;
            maxEntities = parseInt(maxEInput.value);
        }, "Max Entities is the maximum number of entities that can be on the map at once. This includes players and bots.");

        var difficultyLabels = difficultyEngine.difficultyLabel;
        difficultyLabels.push("Default");
        //Customize Bot Difficulty, from 0-5 with labels from difficultyEngine.difficultyLabel + 6 for default
        const botDifficultyInput = this.createLabelledInput("Bot Difficulty:", "bDiff", "select", difficultyEngine.difficultyLabel, 0, modHandler.customDifficulty == -1 ? 6 : modHandler.customDifficulty, (e) => {
            if (parseInt(botDifficultyInput.value) > 6 || parseInt(botDifficultyInput.value) < 0 || parseInt(botDifficultyInput.value) % 1 != 0) return;
            modHandler.botDifficulty = parseInt(botDifficultyInput.value) == 6 ? -1 : parseInt(botDifficultyInput.value);
        }, "Bot Difficulty is used to determine how difficult the bots are to play against. This is only used if the bot is not using a custom difficulty distribution.");
        //Also allow a checkmark to use custom difficulty distributions as indicated in singleSettings
        const difficultyDistribution = this.createLabelledInput("Use SP Difficulty Distribution:", "dDiff", "checkbox", 0, 0, modHandler.customDiffiDist, (e) => {
            modHandler.customDiffiDist = difficultyDistribution.checked;
            botDifficultyInput.disabled = difficultyDistribution.checked;
        }, "If checked, the bot will use the difficulty distribution selected by users for singleplayer. If unchecked, the bot will use the difficulty selected above.");
        botDifficultyInput.disabled = difficultyDistribution.checked;
        
        //Neutral/Human Bots Toggle
        const neutralBotsInput = this.createLabelledInput("Neutral Bots in Teams:", "nBots", "checkbox", 0, 0, modHandler.neutralBots, (e) => {
            modHandler.neutralBots = neutralBotsInput.checked;
        }, "If checked, bots will not be allocated into teams with players.");
        const humanBotsInput = this.createLabelledInput("Human Bots on Leave:", "hBots", "checkbox", 0, 0, modHandler.humanBots, (e) => {
            modHandler.humanBots = humanBotsInput.checked;
        }, "If unchecked, players will not automatically turn into bots after they leave.");
        
        //Add a button to revert back to vanilla settings
        const vanillaButton = document.createElement("button");
        vanillaButton.innerHTML = "Revert to Vanilla Settings";
        vanillaButton.style.marginTop = "10px";
        vanillaButton.style.backgroundColor = "transparent";
        vanillaButton.style.font = `italic calc(${this.width}px / 20)`; // calculate font size based on menu width
        vanillaButton.style.color = this.getColor(2);
        vanillaButton.style.border = "none";
        vanillaButton.style.width = "100%";
        vanillaButton.style.textAlign = "center";
        vanillaButton.addEventListener("click", (e) => {

            modHandler.clientHash = clientHashInput.value = 0;
            killIfConflictInput.checked = false;

            neutCostInput.value = neutralLandCost = 2;
            modHandler.redIThreshold = redIThresInput.value = 100;
            maxTroopsToLandRatio = maxTroopsPixelInput.value = 150;

            modHandler.modTax.attack = 3;
            attackTaxInput.value = 1.171875;
            modHandler.modTax.boat = 6;
            boatTaxInput.value = 2.34375;
            modHandler.modTax.donation = 16;
            supportTaxInput.value = 6.25;

            modHandler.boatSpeed = 2;
            boatSpeedInput.value = 3;
            boatSpeedVariationInput.checked = false;
            boatSpeedInput.disabled = false;

            modHandler.customGamemode = 11;
            gameModeInput.value = 4;
            teamSizeInput.disabled = true;
            teamBoostInput.checked = false;

            modHandler.customMap = -1;
            mapInput.value = mapNames.length - 1;
            modHandler.customMapSize = 0;
            updateMapSizeInputDisabled();

            maxEntities = maxEInput.value = 512;

            modHandler.customDifficulty = -1;
            botDifficultyInput.value = 6;
            difficultyDistribution.checked = false;
            difficultyDistribution.disabled = false;

            modHandler.neutralBots = neutralBotsInput.checked = false;
            modHandler.humanBots = humanBotsInput.checked = true;
        })
        vanillaButton.style.marginBottom = "20px";
        this.menu.appendChild(vanillaButton);
    }

    drawDisplayPanel() {
        // Dan write your stuff here like rgb etc.
    }

    drawPlayersPanel() {
        //Shows information of all players in the game.

        const title = this.createLabel("Players Logger", "h1", `color: ${this.getColor(4)}; text-align: center;`)

        if (typeof gamemode == "undefined") {
            const playGameFirstLabel = this.createLabel("There is nothing here. Play a game first!", "h4")
            return;
        }

        //If teams, enable option to sort by prioritising Clan or by Team Color
        if (gamemode <= 6) {
            const sortTeamsInput = this.createLabelledInput("Show Clan Players First:", "showClans", "checkbox", 0, 0, replayLogger.showClans, (e) => {
                replayLogger.showClans = sortTeamsInput.checked;
                this.drawWindow();
            }, "If checked, players with clans will be shown first. If unchecked, players will be sorted by team color.");
        }

        //Select menu for filtering clans, bots, and players maybe?
        //We will add filter for every clan and every team color (if it's a team game)
        var clanTagInfo = teamColors.getClanTagInfo(),
            clans = clanTagInfo[0].map((tag, index) => {
                return {
                    tag: tag,
                    players: clanTagInfo[1][index]
                }
            });

            //Now sort clans by number of players in the game
            clans.sort((a, b) => {
                return b.players.length - a.players.length;
            });

        var filterOptions = ["All", "Clans", "Teams", "Players"];
        if (gamemode <= 6) {
            //Add all clans to the filter options
            for (var i = 0; i < clans.length; i++) {
                filterOptions.push(clans[i].tag);
            }
            for (var i = 0; i < teamColors.length; i++) {
                filterOptions.push(teamColors[i]);
            }
        }
        const filterInput = this.createLabelledInput("Filter By:", "filterTeam", "select", filterOptions, 0, 0, (e) => {
            this.drawWindow();
        }, "Select a filter to apply to the players list.");

        //Download button for downloading the player list as a txt/json file, will do later...


        const playerLabel = this.createLabel(`Players: ${playerCount} (${playersIngame - spectatorCount} Alive)`, "h2");

        if (replayLogger.showClans) {
            //First show every clan and list all their players in the game. Sorted by more players in the game first.
            //Then show all players without clans, sorted by team color.
            //Finally show all bots, sorted by team color.
            //Also want to sort by land count for each subcategory but will do that later.
            const clanLabel = this.createLabel("Players With Clans: " + clans.reduce((acc, cur) => acc + cur.players.length, 0), "h3");

            clans.forEach((clan) => {
                //Now sort by land count
                clan.players.sort((a, b) => {
                    return land[b] - land[a];
                });
                var color = teamColors.auraColors[teamColors.teamIDs[teamColors.teamArray[clan.players[0]]]].filter((e, index) => index != 3).join(", ");
                //Avoid black not showing by turning them to grey. Same thing for white if light mode.
                if (color == "0, 0, 0") color = "128, 128, 128";
                //Feature: If logo of that clan is found, show logo in front of clan name.
                const clanLabel = this.createLabel(`[${clan.tag}]: ${clan.players.length} Players (${clan.players.filter(e => isAlive[e]).length} Alive,
                    Total Occupation: ${(clan.players.reduce((acc, cur) => acc + land[cur], 0)/configFakeMap.landPixelsCount * 100).toFixed(2)}%)`,
                    "h4", `color: rgb(${color}); padding-left: 20px; margin-top: 5px; margin-bottom: 5px;`);
                clan.players.forEach((playerID) => {
                    const playerLabel = this.createLabel(`${nicknames[playerID]} (Land: ${land[playerID]})`, "p");
                    playerLabel.style.color = color;
                    if (!isAlive[playerID]) playerLabel.style.textDecoration = "line-through";
                });
                //HoverTo and show log buttons will be made later
            });

            const noClanLabel = this.createLabel("Other Players:", "h3");

            //Get players without clans, 0-playerCount without appearing in clans array
            const playersWithoutClans = Array.from(Array(playerCount).keys()).filter(e => !clans.some(clan => clan.players.includes(e)));

            //Sort players without clans by teamID
            playersWithoutClans.sort((a, b) => {
                return teamColors.teamArray[a] - teamColors.teamArray[b];
            });
            
            //Allocate by team color and sort by land count
            const playersWithoutClansByTeam = [];
            for (let i = 0; i <= 8; i++) {
                playersWithoutClansByTeam.push(playersWithoutClans.filter(e => teamColors.teamArray[e] == i));
            }
            playersWithoutClansByTeam.forEach((team) => {
                team.sort((a, b) => {
                    return land[b] - land[a];
                });
            });

            playersWithoutClansByTeam.forEach((team, index) => {
                if (team.length == 0) return;
                var color = teamColors.auraColors[teamColors.teamIDs[teamColors.teamArray[team[0]]]].filter((e, i) => i != 3).join(", ");
                //Avoid black not showing by turning them to grey. Same thing for white if light mode.
                if (color == "0, 0, 0") color = "128, 128, 128";
                const teamLabel = this.createLabel(`${teamColors.colorLabels[teamColors.teamIDs[index]]} Team: ${team.length} Players (${team.filter(e => isAlive[e]).length} Alive,
                    Total Occupation: ${(teams.getTeamLand(index)/configFakeMap.landPixelsCount * 100).toFixed(2)}%)`,
                    "h3", `color: rgb(${color}); padding-left: 20px; margin-top: 5px; margin-bottom: 5px;`);
                team.forEach((playerID) => {
                    const playerLabel = this.createLabel(`${nicknames[playerID]} (Land: ${land[playerID]})`, "p")
                    if (!isAlive[playerID]) playerLabel.style.textDecoration = "line-through";
                });
            });

        } else {
            //Just show all players sorted by land count
            landOrder.forEach((playerID) => {
                if (playerID >= playerCount) return;
                const playerLabel = this.createLabel(`${nicknames[playerID]} (Land: ${land[playerID]})`, "p")
                if (!isAlive[playerID]) playerLabel.style.textDecoration = "line-through";
            });
        }

        const botsLabel = this.createLabel(`Bots: ${botCount} (${aliveCount - playersIngame + spectatorCount} Alive)`, "h2");
        for (let idIndex = playerCount; idIndex < maxEntities; idIndex++) {
            const botLabel = this.createLabel(nicknames[idIndex], "p")
            if (!isAlive[idIndex]) botLabel.style.textDecoration = "line-through";
        }

        const creditLabel = this.createLabel("Implemented with Reference To BetterTT", "p")
    }

    drawLogsPanel() {
        //Integrated Replay-Logger. 
    }
    
    drawChatPanel() {
        //7. In-game Chat
        const title = this.createLabel("In-game Chat", "h1",
            `color: ${this.getColor(7)}; text-align: center;`);

        if (clientStatus == 0 || singleplayer || customJSON.isCustomJSON && customJSON.data.replay) {
            const playGameFirstLabel = this.createLabel("There is nothing here. Join a game first!", "h4")
            return;
        }
        
        //Select channel: All, Team, Clan, Private (With another list of players to select from)
        const channelInput = this.createLabelledInput("Channel:", "channel", "select", ["All", "Team", "Clan", "Direct Message"], 0, 0, (e) => {
            chat.target.type = ["all", "team", "clan", "direct"][channelInput.value];
            directInput.style.display = parseInt(channelInput.value) != 3 ? "none" : "";
        }, "Select your chat channel.");
        const directInput = this.createLabelledInput("Direct Message:", "direct", "select", nicknames.filter((e, i) => i < playerCount && i != myID), 0, 0, (e) => {
            //Set chat target to selected player
            chat.target.id = parseInt(directInput.value);
        }, "Select the player you want to send direct messages to.");
        directInput.style.display = 'none';

        //Show Chats
        const chatLabel = this.createLabel("Chat:", "h2");
        const chatBox = this.createLabel("", "div", "width: 100%; height: 200px; overflow-y: scroll; border: 1px solid black; padding: 5px; margin-bottom: 5px; color: white;");
        chatBox.id = "chatBox";
        chatBox.innerHTML = chat.messages.map((message) => {
            if (["all", "team", "clan", "direct"].includes(message.target.type)) {
                return `<p>${gameStatistics.getFormattedTime(
                    mainHandler.getTicksElapsed()
                )}, ${nicknames[message.author]}: ${message.m}</p>`;
            } else return "";
        }).join("");

        //Send Chat, Bar + Send Button (no Enter for now, fucks up with other listeners)
        const chatInput = this.createLabelledInput("Chat:", "chat", "text", 0, 0, chat.typedMessage, (e) => {
            chat.typedMessage = chatInput.value = chatInput.value.slice(0, getMin(100, chatInput.value.length));
        })
        const sendButton = document.createElement("button");
        sendButton.innerHTML = "Send";
        sendButton.style.float = "right"
        sendButton.onclick = () => {
            if (chatInput.value.length > chat.maxMsgLength) return
            else {
                chat.send(chatInput.value);
                chatInput.value = chat.typedMessage = "";
            }
        };
        this.menu.appendChild(sendButton);
            
    }

    drawSinglePanel() {
        //8. Latency Simulator, Game Speeds for now... Maybe scenarios + cheats as well?

        const title = this.createLabel(modHandler.public ? "Singleplayer Settings" : "Singleplayer/Cheats", "h1",
            `color: ${this.getColor(8)}; text-align: center;`);

        const performanceLabel = this.createLabel("Performance Settings", "h2",);

        const latencyInput = this.createLabelledInput("SP Lag Ticks:", "latency", "number", 0, 14, modHandler.latency, (e) => {
            modHandler.latency = parseInt(latencyInput.value);
        }, "Latency Simulator is used to simulate latency in singleplayer. This is useful for testing how the game will feel with high latency.");

        const gameSpeedInput = this.createLabelledInput("Game Speed Multiplier:", "gameSpeed", "number", 0, 10, modHandler.gameSpeed, (e) => {
            modHandler.gameSpeed = parseInt(gameSpeedInput.value);
        }, "Game Speed is used to speed up the game. This is useful for completing games faster in real life time.");

        if (!modHandler.public) {

            const cheatsLabel = this.createLabel("Cheats", "h2");

            const warning = this.createLabel("Warning: Teritorio is not responsible for any bans or punishments that may occur from using these cheats.", "p", 
                `color: red; text-align: left; padding-left: 20px`);
            
            const cheatTypeInput = this.createLabelledInput("Cheat Type:", "cheatType", "select", ["Off", "Messiah", "Smart Multiboxing"], 0, modHandler.bot, (e) => {
                modHandler.bot = parseInt(cheatTypeInput.value);
            }, "Messiah is a cheat that allows automatically attacks the best bots with perfect amounts. Smart Multiboxing is a cheat that automatically joins 3 bots to boost you in team games.");

            const intelliInput = this.createLabelledInput("Intelliattack:", "intelli", "checkbox", 0, 0, modHandler.intelli, (e) => {
                modHandler.intelli = intelliInput.checked;
            }, "Intelliattack is a cheat that attacks the best bots with perfect amount when a key is pressed by the player.");

            const alwaysWinInput = this.createLabelledInput("Always Win:", "alwaysWin", "checkbox", 0, 0, modHandler.alwaysWin, (e) => {
                modHandler.alwaysWin = alwaysWinInput.checked;
            }, "Always Win is a cheat that uploads a fake win result for you to the game servers. Beware that the game may detect this and nuke your account if you abuse this feature in 1v1.");

            const spawnModInput = this.createLabelledInput("Spawn Mod:", "spawnMod", "select", ["Off", "Decoy Spawn", "Avoid Opponent"], 0, modHandler.spawnMod, (e) => {
                modHandler.spawnMod = parseInt(spawnModInput.value);
            }, "Spawn Mod is a tool that allows you to choose spawns effectively.");
            spawnModInput.style.marginBottom = "20px";
        }
    }

    drawAboutPanel() {
        if (!sprites.areAllSpritesLoaded()) {
            setTimeout(() => this.drawAboutPanel(), 100);
            return;
        }
        const sprite = sprites.getValueByName("teritorio");
        const canvas = document.createElement("canvas");
        canvas.width = sprite.width;
        canvas.height = sprite.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(sprite, 0, 0);
    
        const img = new Image();
        img.src = canvas.toDataURL();
        img.style.display = "block";
        img.style.margin = "auto";
        img.style.width = "80%";
        img.style.marginTop = "10px";
        this.menu.appendChild(img);

        // Add about section
        const aboutSection = this.createLabel(`
            <p>Teritorio Sigma Build &#128526 (Compatible with Game Version 1.83.6)</p>
            <p>Unlocking Infinite Possibilities</p>
            <p>Brought to you by Vkij, oi, DanTheMan and ChatGPT</p>
            <p>Discord Server: <a href="${discordLink}" target="_blank">Click Me!</a></p>
        `, "div", `color: white; margin-left: 20px; font-size: ${getMin(this.width/20, 20)}px;`);
    }

    createLabel(text, type, style = "custom-menu-label") {
        const div = document.createElement(type);
        div.innerHTML = text;
        if (type == "button") {
            div.onclick = () => {
                const hoverID = 0;
                //Get ID of the target and hover To it if in game and not dead
                if (clientStatus >= 1 && !isAlive[hoverID]) autoCamera.hoverTo(hoverID, 800, true, 0)
            }
        }
        if (style == 'custom-menu-label') {
            div.classList.add(style);
        } else {
            div.setAttribute('style', style)
        }
        this.menu.appendChild(div);
        return div
    }

    createLabelledInput(labelText, inputID, inputType, param1, param2, defaultValue, boxOnChange, hoverMessage = "") {
        //If boxType is number, then param1 is min and param2 is max
        //If boxType is checkbox, then only boxValue is used as a parameter
        //If boxType is select, then param 1 are the options and boxValue is the default option

        // Check if there is already an input with the same inputID, If this is the first input for a new category, add a line break
        const existingInput = document.getElementById(inputID);
        if (!existingInput || existingInput.parentElement.previousElementSibling.textContent !== labelText) {
            this.menu.appendChild(document.createElement("br"));
        }

        const label = document.createElement("label");
        label.innerHTML = labelText;
        label.for = inputID;
        label.classList.add("custom-menu-label");
    
        if (hoverMessage !== "") this.addHoverMessage(label, hoverMessage);
    
        this.menu.appendChild(label);
    
        var input;
        if (inputType == "select") {
            input = document.createElement("select");
            input.id = inputID;
            var options = "";
            for (var i = 0; i < param1.length; i++) {
                options += `<option value="${i}"${i == defaultValue ? " selected" : ""}>${param1[i]}</option>`;
            }
            input.innerHTML = options;
        } else {
            input = document.createElement("input");
            input.type = inputType;
            input.id = inputID;
            if (inputType == "number") {
                if (param1 != param2)  {
                    input.min = param1;
                    input.max = param2;
                }
                input.value = defaultValue;
                if (labelText.includes("Tax")) input.step = "any";
            } else if (inputType == "checkbox") {
                input.checked = defaultValue;
            } else {
                input.value = defaultValue;
            }
        }
            
        input.addEventListener("change", boxOnChange);
        this.menu.appendChild(input);
    
        return input;
    }
    
    drawResizeButton() {
        // Create new button element
        const resizeButton = document.createElement('button');
        //assign id to button
        resizeButton.id = `resizeButton${this.getPanelIndex()}`;
        resizeButton.classList.add('menu-button');
        resizeButton.innerHTML = '&#10542;';
        resizeButton.style.position = 'fixed';
        resizeButton.style.color = '#fff';
        resizeButton.addEventListener('mousedown', (e) => {
            this.isResizing = true;
            this.resizeStartX = e.clientX;
            this.resizeStartY = e.clientY;
        });
      
        // Add new button to menu
        this.menu.appendChild(resizeButton);
        this.updateResizeButtonPos();
    }

    updateResizeButtonPos() {
        const resizeButton = document.getElementById(`resizeButton${this.getPanelIndex()}`);
        if (!resizeButton) return;
        resizeButton.style.bottom = getMax(0, window.innerHeight - this.height - this.y) + 'px';
        resizeButton.style.right = window.innerWidth - this.width - this.x + this.menu.offsetWidth - this.menu.clientWidth + 'px';
    }

    drawDivider() {
        const divider = document.createElement('div');
        divider.style.width = '100%';
        divider.style.height = '1px';
        divider.style.backgroundColor = '#888';
        divider.style.marginTop = '10px';
        this.menu.appendChild(divider);
    }

    addHoverMessage(element, message) {
        element.onmouseover = () => {
            const tooltip = document.createElement("div");
            tooltip.innerHTML = message;
            tooltip.classList.add("tooltip");
            document.body.appendChild(tooltip);
          
            setTimeout(() => {
                tooltip.classList.add("show");
                setTimeout(() => {
                    //If tooltip is already removed return
                    if (!tooltip.parentElement) return;
                    tooltip.classList.remove("show");
                    document.body.removeChild(tooltip);
                }, 5000);
            }, 200);
          
            const { top, left } = element.getBoundingClientRect();
            tooltip.style.top = `${top - tooltip.offsetHeight - 10}px`;
            tooltip.style.left = `${left + element.offsetWidth / 2 - tooltip.offsetWidth / 2}px`;

            // if tooltip is outside, adjust its position
            const { top: tooltipTop, left: tooltipLeft } = tooltip.getBoundingClientRect();
            if (tooltipLeft < 0 || tooltipLeft + tooltip.offsetWidth > window.innerWidth) {
                tooltip.style.left = `${Math.max(0, Math.min(window.innerWidth - tooltip.offsetWidth, tooltipLeft))}px`;
            }
            if (tooltipTop < 0 || tooltipTop + tooltip.offsetHeight > window.innerHeight) {
                tooltip.style.top = `${Math.max(0, Math.min(window.innerHeight - tooltip.offsetHeight, tooltipTop))}px`;
            }
        };  
        element.onmouseout = () => {
            const tooltip = document.querySelector(".tooltip");
            if (tooltip) tooltip.remove();
        };
    }

    findAndUpdateMenu() {
        //Redraw the panel with the menu buttons
        const reqMenu = modMenus.find((menu) => menu.panelTypes.includes(0));
        if (reqMenu) reqMenu.drawWindow();
    }

    onMouseDown(e) {
        if (!this.isResizing && (e.target.classList.contains("titleBar") || e.target.closest(".titleBar"))) {
            this.isDragging = true;
            this.dragStartX = e.clientX;    
            this.dragStartY = e.clientY;
        }
    }
  
    onMouseMove(e) {
        if (this.isResizing) {
            const oldDims = {
                width: this.width,
                height: this.height
            };
            const newWidth = this.dockStatus ? this.width : e.clientX - this.x;
            const newHeight = e.clientY - this.y;
            this.setSize(newWidth, newHeight);
            if (oldDims.width != newWidth || oldDims.height != newHeight) {
                this.drawWindow(); // redraw window if size changed
            }
            
        } else if (this.isDragging) {
            const deltaY = e.clientY - this.dragStartY;
            this.x += e.clientX - this.dragStartX;
            this.y += deltaY;
            if (this.y >= window.innerHeight - this.height || this.y <= 0) {
                this.y -= deltaY;
            }
            this.menu.style.left = this.x + "px";
            this.menu.style.top = this.y + "px";
            this.dragStartX = e.clientX;
            this.dragStartY = e.clientY;

            this.updateResizeButtonPos();
            this.onDock(e);
        }
    }
  
    onMouseUp() {
        if (this.isResizing) {
            this.isResizing = false;
        } else if (this.isDragging) {
            this.isDragging = false;
        }
    }

    onResize(e) {
        this.onDock(e);
        this.updateResizeButtonPos();
        canvasManager.dockUpdateCanvas();
    }

    onDock(e) {
        //First check how many available docks there are, and what their original widths are
        var docks = [];
        for (let dockStatus = 1; dockStatus <= 2; dockStatus++) {
            docks.push(getDockWidth(dockStatus));
        };
        //Now we will dock the menu to the left or right side if it is close enough to the edge
        if (this.dockStatus === 0) { //Easier snapping to dock
            if (this.x <= docks[0]) { //Docked to left side
                this.dockStatus = 1;
                this.x = 0;
            } else if (this.x + this.width >= window.innerWidth - docks[1]) { //Docked to right side
                this.dockStatus = 2;
                this.x = window.innerWidth - this.width;
            } else this.dockStatus = 0; //Docked to neither side
            if (this.dockStatus && modMenus.filter(menu => menu.dockStatus === this.dockStatus).length <= 1) {
                this.y = 0;
                this.menu.style.top = "0px";
                this.setSize(this.width, window.innerHeight);
            }
        } else { //Easier snapping to undock
            if (e.clientX > docks[0] + window.innerWidth / 100 && e.clientX + this.width < window.innerWidth * .99 - docks[1]) { //Undocked
                this.dockStatus = 0;
            } else if (e.type === "click") {
                this.dockStatus = 0;
            }
        }

        //Now we need to recalculate the maximum width of each dock and refit every menu that is docked into its new dock width
        const oldDockWidths = [docks[0], docks[1]];

        for (let dockStatus = 1; dockStatus <= 2; dockStatus++) {
            docks[dockStatus - 1] = Math.max(0, ...modMenus.filter(menu => menu.dockStatus === dockStatus).map(menu => menu.width));
            modMenus.filter(menu => menu.dockStatus === dockStatus).forEach(menu => {
                menu.setSize(docks[dockStatus - 1], menu.height);
                menu.x = dockStatus == 1 ? 0 : window.innerWidth - menu.width;
            });
        }
        
        //If a dock is empty, reset the mainCanvas back to normal.
        if (!docks[0] && !docks[1]) { //Docked to neither side
            mainCanvas.style.paddingLeft = '0';
            mainCanvas.style.width = '100%';
        } else if (!docks[0] && docks[1]) { //Docked to right side
            mainCanvas.style.paddingLeft = '0';
            mainCanvas.style.width = (window.innerWidth - docks[1]) + 'px';
        } else if (!docks[1] && docks[0]) { //Docked to left side
            mainCanvas.style.paddingLeft = docks[0] + 'px';
            mainCanvas.style.width = (window.innerWidth - docks[0]) + 'px';
        } else { //Docked to both sides
            mainCanvas.style.paddingLeft = docks[0] + 'px';
            mainCanvas.style.width = (window.innerWidth - docks[0] - docks[1]) + 'px';
        }

        //If there is a change in dock Width or a change in the number of panels, update the canvas.
        if (oldDockWidths[0] != docks[0] || oldDockWidths[1] != docks[1]) {
            canvasManager.dockUpdateCanvas();
            this.updateResizeButtonPos();
        }
    }

    getPanelIndex() {
        return modMenus.findIndex((menu) => menu === this);
    }

    setSize(width, height) {
        this.width = getMax(width, 250);
        this.height = getMax(height, 150);
        this.menu.style.width = this.width + "px";
        this.menu.style.height = this.height + "px";
    }
  
    setPosition(x, y) {
        this.x = x;
        this.y = y;
        this.menu.style.left = this.x + "px";
        this.menu.style.top = this.y + "px";
    }
    
    getColor(index) {
        const hue = index * 30; // 30 degrees per step
        const saturation = 100;
        const lightness = 50;
        const rgb = this.hslToRgb(hue, saturation, lightness);
        const hex = this.rgbToHex(rgb.r, rgb.g, rgb.b);
        return hex;
    }
      
    // Helper function to convert HSL to RGB
    hslToRgb(h, s, l) {
        h /= 360;
        s /= 100;
        l /= 100;
        let r, g, b;
        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255),
        };
    }
      
    // Helper function to convert RGB to hex
    rgbToHex(r, g, b) {
        return ("#" + [r, g, b] .map((c) => c.toString(16).padStart(2, "0")).join(""));
    }    
}

var modMenus = [];
function modMenuInit() {
    new ModMenu([0, 7, 11], 350, 500, .7*window.innerWidth, .5*window.innerHeight - 500/2, 100);
}

function getDockWidth(dockStatus) {
    return Math.max(0, ...modMenus.filter(menu => menu.dockStatus === dockStatus).map(menu => menu.width));
}