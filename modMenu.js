class ModMenu {
    static buttonLabels = [
        "Menu", "Account", "Custom", "Display", "Chat",
        "Logs", "Audio", "Hotkeys", "Single",
        "Misc", "Presets", "About"
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

        this.menu = document.createElement("div");
        this.menu.style.position = "absolute";
        this.menu.style.width = this.width + "px";
        this.menu.style.height = this.height + "px";
        this.menu.style.left = this.x + "px";
        this.menu.style.top = this.y + "px";
        this.menu.style.backgroundColor = "black";
        this.menu.style.border = "1px solid gray";
        this.menu.style.padding = "0";
        this.menu.style.zIndex = z;
        this.menu.style.overflowX = "hidden";
        this.menu.style.overflowY = "auto";
        this.visible = true;
        this.drawWindow();
        document.body.appendChild(this.menu);
        
        const style = document.createElement('style');
        style.innerHTML = `
            .menu-button {
                width: 25px;
                height: 25px;
                border: none;
                outline: none;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                background-color: transparent;
                position: relative;
                font-size: 20px;
            }
            .custom-menu-label {
                color: #fff;
                padding-left: 20px;
                margin-bottom: 10px;
                margin-right: 10px;
            }
        `;
        document.head.appendChild(style);
    
        // Add event listeners for dragging
        document.addEventListener("mousedown", (e) => this.onMouseDown(e));
        document.addEventListener("mousemove", (e) => this.onMouseMove(e));
        document.addEventListener("mouseup", (e) => this.onMouseUp(e));
        document.addEventListener("resize", (e) => this.onResize(e));

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
        else if (panelType == 1) void(0) //this.drawAccountPanel(); Does not exist yet lmfao
        else if (panelType == 2) this.drawCustomPanel();
        else if (panelType == 3) this.drawDisplayPanel();
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
            <button class="menu-button" id="forceDock">&#10234;</button>
            <button class="menu-button" id="close">&#10006;</button>
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
        const closeButton = document.getElementById('close');
        closeButton.addEventListener('click', (e) => {
            modMenus = modMenus.filter((menu) => menu !== this);
            this.menu.remove();
            this.onDock(e);
            canvasManager.dockUpdateCanvas();
        });

        // Add event listener to dock button
        const dockButton = document.getElementById('forceDock');
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
            button.style.font = `italic calc(${this.width}px / 20)` + " Pacifico"; // calculate font size based on menu width
            button.style.color = this.getColor(butIndex);
            button.style.border = "none";
            button.style.width = "100%";
            button.style.textAlign = "center";
            if (modMenus.findIndex((menu) => menu.panelTypes.includes(butIndex)) !== -1 || this.panelTypes.includes(butIndex)) {
                button.style.border = "2px solid white";
                button.style.borderRadius = "5px";
            }
            button.addEventListener("click", (e) => {
                if (modMenus.find((menu) => menu.panelTypes.includes(butIndex))) { //This panel exist dumdum
                    const reqMenu = modMenus.find((menu) => menu.panelTypes.includes(butIndex));
                    //If the "Menu" category is removed, we just remove this panel.
                    if (butIndex == 0) {
                        modMenus = modMenus.filter((menu) => menu !== this);
                        this.menu.remove();
                    } else if (reqMenu.panelTypes.length == 1) { //If that menu doesnt have any panels We remove it.
                        modMenus = modMenus.filter((menu) => !menu.panelTypes.includes(butIndex));
                        reqMenu.menu.remove();
                    } else { //We remove the panel from the menu which contains the panel.
                        reqMenu.panelTypes = reqMenu.panelTypes.filter((panelType) => panelType !== butIndex);
                        reqMenu.drawWindow();
                    }
                } else { // This panel does not exist, append it to the current one.
                    this.panelTypes.push(butIndex);
                    this.drawWindow();
                }
            });
            tableColumns[butIndex % 4].appendChild(button);
        }
        
        table.style.width = "80%";
        table.style.height = "auto";
        table.style.margin = "0 auto";
        this.menu.appendChild(table);
    }

    drawCustomPanel() {
        //2. Custom Games and Private Matches (Custom interest formula and taxes? Boat speeds? Set gamemodes? More entities and custom maps?)
        const title = document.createElement("h1");
        title.innerHTML = "Custom Matches";
        title.style.color = this.getColor(2);
        title.style.textAlign = "center";
        this.menu.appendChild(title);

        const warning = document.createElement("p");
        warning.innerHTML = "Warning: Changing these settings may cause a desync if you play in a vanilla game.";
        warning.style.color = "red";
        warning.style.textAlign = "left";
        warning.style.paddingLeft = "10px"
        this.menu.appendChild(warning);

        const customizationLabel = document.createElement("h2");
        customizationLabel.innerHTML = "Game Mechanics";
        customizationLabel.classList.add("custom-menu-label");
        this.menu.appendChild(customizationLabel);

        //Customize Taxes, with rates from 0-100% for each tax type (attack, boat, donations)
        const taxesLabel = document.createElement("h4");
        taxesLabel.innerHTML = "Taxes (0-100%)";
        taxesLabel.classList.add("custom-menu-label");
        this.menu.appendChild(taxesLabel);

        const attackTaxInput = this.createLabelledInput("Attack Tax Rate:", "aTax", "number", 0, 100, modHandler.modTax.attack * 100 / 256, (e) => {
            if (attackTaxInput[1].value > 100 || attackTaxInput[1].value < 0) return;
            modHandler.modTax.attack = attackTaxInput[1].value * 256 / 100;
        });   
        const boatTaxInput = this.createLabelledInput("Boat Tax Rate:", "bTax", "number", 0, 100, modHandler.modTax.boat * 100 / 256, (e) => {
            if (boatTaxInput[1].value > 100 || boatTaxInput[1].value < 0) return;
            modHandler.modTax.boat = boatTaxInput[1].value * 256 / 100;
        });
        const supportTaxInput = this.createLabelledInput("Support Tax Rate:", "dTax", "number", 0, 100, modHandler.modTax.support * 100 / 256, (e) => {
            if (supportTaxInput[1].value > 100 || supportTaxInput[1].value < 0) return;
            modHandler.modTax.donation = supportTaxInput[1].value * 256 / 100;
        });

        //Customize Interest Formula will be too difficult to make for now.

        //Customize Boat Speeds, with rates from 0-5 (0 being the Fastest, 5 being the Slowest)
        const boatSpeedLabel = document.createElement("h4");
        boatSpeedLabel.innerHTML = "Boat Speeds";
        boatSpeedLabel.classList.add("custom-menu-label");
        this.menu.appendChild(boatSpeedLabel);

        const boatSpeedInput = this.createLabelledInput("Boat Speed (Ticks Per Update):", "bSpeed", "number", 1, 6, modHandler.boatSpeed + 1, (e) => {
            if (boatSpeedInput[1].value > 5 || boatSpeedInput[1].value < 0) return;
            modHandler.boatSpeed = boatSpeedInput[1].value - 1;
        });
        const boatSpeedVariationInput = this.createLabelledInput("Vary With Land Size:", "bSpeedVar", "checkbox", 0, 0, modHandler.boatSpeed == -1, (e) => {
            modHandler.boatSpeed = boatSpeedVariationInput[1].checked ? -1 : boatSpeedInput[1].value - 1;
            boatSpeedInput[1].disabled = boatSpeedVariationInput[1].checked;
        });

        //Customize Gamemodes, with a list of gamemodes to choose from. If the chosen gamemode is teams, then we can customize the team sizes.
        //Available gamemodes: Teams (2-8), Battle Royale, Zombies, No Full Send
        //Add new gamemodes? Capture the Flag, King of the Hill, etc.

        const gameModeLabel = document.createElement("h4");
        gameModeLabel.innerHTML = "Game Modes";
        gameModeLabel.classList.add("custom-menu-label");
        this.menu.appendChild(gameModeLabel);

        /*
        const defaultOption = modHandler.customGamemode <= 6 ? 0 : modHandler.customGamemode == 7 ? 1 : modHandler.customGamemode == 9 ? 2 : modHandler.customGamemode == 10 ? 3 : 4;
        const gameModeContainer = this.createSettingContainer("Game Mode:", "select", 0, 0, defaultOption, (e) => {
            if (gameModeContainer.children[1].value == "Teams") {
                teamSizeContainer.style.display = "block";
            } else {
                teamSizeContainer.style.display = "none";
            }
        });
        this.menu.appendChild(gameModeContainer);

        const teamSizeContainer = this.createSettingContainer("Team Count (2-8):", "number", 2, 8, rangeClamp(2, modHandler.customGamemode + 2, 8), (e) => {
            if (teamSizeContainer.children[1].value > 8 || teamSizeContainer.children[1].value < 2) return;
            modHandler.customGamemode = teamSizeContainer.children[1].value - 2;
        });
        this.menu.appendChild(teamSizeContainer);
        */

        const options = ["Teams", "Battle Royale", "Zombies", "No Full Send", "Default"],
            defaultOption = modHandler.customGamemode <= 6 ? 0 : modHandler.customGamemode == 7 ? 1 : modHandler.customGamemode == 9 ? 2 : modHandler.customGamemode == 10 ? 3 : 4;
        const gameModeInput = this.createLabelledInput("Game Mode:", "gMode", "select", options, 0, defaultOption, (e) => {
            //Need to add sth here
            teamSizeInput.disabled = gameModeInput.value != 0;
        });
        const teamSizeInput = this.createLabelledInput("Team Count (2-8):", "tSize", "number", 2, 8, rangeClamp(2, modHandler.customGamemode + 2, 8), (e) => {
            if (teamSizeInput.value > 8 || teamSizeInput.value < 2) return;
            modHandler.customGamemode = teamSizeInput.value - 2;
        });

        //Customize Maps, with a list of maps to choose from. If a custom map is loaded, then we can select that map.

        //Bots Subcategory
        const botsLabel = document.createElement("h2");
        botsLabel.innerHTML = "Bots";
        botsLabel.classList.add("custom-menu-label");
        this.menu.appendChild(botsLabel);

        /*
        const entityCountContainer = this.createSettingContainer("Max Entities (1-4096):", "number", 1, 4096, 512, (e) => {
            if (entityCountContainer.children[1].value > 4096 || entityCountContainer.children[1].value < 1) return;
            maxEntities = entityCountContainer.children[1].value;
        });
        this.menu.appendChild(entityCountContainer);
        */

        const maxELabel = document.createElement("label");
        maxELabel.innerHTML = "Max Entities (1-4096):";
        maxELabel.for = "maxE-input";
        maxELabel.classList.add("custom-menu-label");
        this.menu.appendChild(maxELabel);

        const maxEInput = document.createElement("input");
        maxEInput.type = "number";
        maxEInput.id = "maxE-input";
        maxEInput.min = 1;
        maxEInput.max = 4096;
        maxEInput.value = 512;
        maxEInput.addEventListener("change", (e) => {
            if (maxEInput.value > 4096 || maxEInput.value < 1) return;
            maxEntities = maxEInput.value;
        });
        this.menu.appendChild(maxEInput);

        //Customize Bot Difficulty, from 0-5 with labels from difficultyEngine.difficultyLabel
        //Neutral Bots Toggle
        //Human Bots Toggle
        
        //Add a button to revert back to vanilla settings
        const vanillaButton = document.createElement("button");
        vanillaButton.innerHTML = "Revert to Vanilla Settings";
        vanillaButton.style.marginTop = "10px";
        vanillaButton.style.backgroundColor = "transparent";
        vanillaButton.style.font = `italic calc(${this.width}px / 20)` + " Pacifico"; // calculate font size based on menu width
        vanillaButton.style.color = "#fff";
        vanillaButton.style.border = "none";
        vanillaButton.style.width = "100%";
        vanillaButton.style.textAlign = "center";
        vanillaButton.addEventListener("click", (e) => {
            maxEntities = maxEInput.value = 512;
            modHandler.modTax.attack = 3;
            attackTaxInput.children[1].value = 1.171875;
            modHandler.modTax.boat = 6;
            boatTaxInput.children[1].value = 2.34375;
            modHandler.modTax.donation = 16;
            supportTaxInput.children[1].value = 6.25;
            modHandler.boatSpeed = 2;
            boatSpeedContainer.children[1].value = 3;
            boatSpeedVariationContainer.children[1].checked = false;
            boatSpeedContainer.children[1].disabled = false;
        })
        this.menu.appendChild(vanillaButton);
    }

    drawDisplayPanel() {
        // Dan write your stuff here like rgb etc.
    }

    drawAboutPanel() {
        if (!sprites.areAllSpritesLoaded()) {
            setTimeout(() => this.drawAboutPanel(), 100);
            return;
        }
        const sprite = sprites.getValueByName("territorio");
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
        const aboutSection = document.createElement('div');
        aboutSection.style.marginLeft = '20px';
        const fontSize = getMin(this.width/20, 20);
        aboutSection.style.fontSize = `${fontSize}px`;
        aboutSection.style.color = '#fff';
        aboutSection.innerHTML = `
            <p>Territorio Sigma Build &#128526 (Compatible with Game Version 1.83.5)</p>
            <p>Brought to you by Vkij, oi and DanTheMan</p>
            <p>Discord Server: <a href="${discordLink}" target="_blank">Click Me!</a></p>
        `;
        this.menu.appendChild(aboutSection);
    }

    createSettingContainer(labelText, boxType, param1, param2, boxValue, boxOnChange) {
        //If boxType is number, then param1 is min and param2 is max
        //If boxType is checkbox, then only boxValue is used as a parameter
        //If boxType is select, then only boxValue is the default option
        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.padding = "5px 0";
        container.style.paddingTop = "0px";
        container.style.marginBottom = "0px";
      
        const label = document.createElement("label");
        label.innerHTML = labelText;
        label.style.color = "#fff";
        label.style.marginLeft = "20px";
        label.style.marginRight = "10px";
      
        const box = document.createElement("input");
        box.type = boxType;
        if (boxType == "number") {
            box.min = param1;
            box.max = param2;
            box.value = boxValue;
            if (labelText.includes("Tax")) box.step = "any";
            else box.step = "1";
        } else if (boxType == "checkbox") {
            box.value = boxValue;
        } else if (boxType == "select") {
            const description = ["Teams", "Battle Royale", "Zombies", "No Full Send", "Default"]
            //Set default option
            box.value = description[boxValue];
            box.innerHTML = `
                <option value="0">Teams</option>
                <option value="1">Battle Royale</option>
                <option value="2">Zombies</option>
                <option value="3">No Full Send</option>
                <option value="4">Default</option>
            `;
        }
        box.style.textAlign = "center";
        box.addEventListener("change", boxOnChange);
      
        container.appendChild(label);
        container.appendChild(box);
      
        return container;
    }

    createLabelledInput(labelText, inputID, inputType, param1, param2, defaultValue, boxOnChange) {
        //If boxType is number, then param1 is min and param2 is max
        //If boxType is checkbox, then only boxValue is used as a parameter
        //If boxType is select, then param 1 are the options and boxValue is the default option
        
        const label = document.createElement("label");
        label.innerHTML = labelText;
        label.for = inputID;
        label.classList.add("custom-menu-label");
        this.menu.appendChild(label);

        var input;
        if (inputType == "select") {
            input = document.createElement("select");
            const description = ["Teams", "Battle Royale", "Zombies", "No Full Send", "Default"]
            input.value = description[defaultValue];
            var options = "";
            for (var i = 0; i < description.length; i++) {
                options += `<option value="${i}">${description[i]}</option>`;
            }
            input.innerHTML = options;
        } else {
            input = document.createElement("input");
            input.type = inputType;
            input.id = inputID;
            if (inputType == "number") {
                input.min = param1;
                input.max = param2;
                input.value = defaultValue;
                if (labelText.includes("Tax")) input.step = "any";
            } else if (inputType == "checkbox") {
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
        resizeButton.id = `resizeButton${getMax(modMenus.findIndex((menu) => menu === this), 0)}`;
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
        const resizeButton = document.getElementById(`resizeButton${getMax(modMenus.findIndex((menu) => menu === this), 0)}`);
        resizeButton.style.bottom = window.innerHeight - this.height - this.y + 'px';
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
        this.onDock();
        this.updateResizeButtonPos();
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
    var modMenu = new ModMenu([0, 2, 11], 300, 300, 200, 200, 100);
    modMenus.push(modMenu);
}

function getDockWidth(dockStatus) {
    return Math.max(0, ...modMenus.filter(menu => menu.dockStatus === dockStatus).map(menu => menu.width));
}