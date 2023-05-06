class ModMenu {
    static buttonLabels = [
        "About", "Account", "Custom", "Display",
        "Chat", "Logs", "Audio", "Hotkeys",
        "Single", "Misc", "Presets", "Others"
    ];
    constructor(panelType, width, height, x, y, z) {
        this.panelType = panelType;
        this.title = ModMenu.buttonLabels[panelType];
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
        this.menu.style.overflow = "auto";
        this.visible = true;
        this.drawWindow(panelType);
        document.body.appendChild(this.menu);
    
        // Add event listeners for dragging
        document.addEventListener("mousedown", (e) => this.onMouseDown(e));
        document.addEventListener("mousemove", (e) => this.onMouseMove(e));
        document.addEventListener("mouseup", (e) => this.onMouseUp(e));

    }

    drawWindow(panelType) {
        this.drawTitleBar();
        if (panelType == 0) {
            this.drawLogoPanel();
        }
        this.drawResizeButton();
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
            <button class="menu-button">&#10234;</button>
            <button class="menu-button">&#10006;</button>
        `;

        // Add title bar to menu
        this.menu.appendChild(this.titleBar);

        // Measure the width of the title bar and adjust the menu's width
        const titleBarWidth = this.titleBar.getBoundingClientRect().width;
        if (titleBarWidth > this.width) {
            this.width = titleBarWidth;
            this.menu.style.width = this.width + 'px';
        }

        // Add event listener to close button
        const closeButton = this.titleBar.querySelector('button:nth-child(3)');
        closeButton.addEventListener('click', (e) => {
            this.menu.remove();
            modMenus = modMenus.filter((menu) => menu !== this);
            this.onDock(e);
            canvasManager.dockUpdateCanvas();
        });

        const css = `
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
        `;
        const style = document.createElement('style');
        style.innerHTML = css;
        document.head.appendChild(style);

        // Add menu to DOM
        document.body.appendChild(this.menu);
    }

    drawLogoPanel() {
        if (!sprites.areAllSpritesLoaded()) {
            setTimeout(() => this.drawLogoPanel(), 100);
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
            button.style.color = getColor(butIndex);
            button.style.border = "none";
            button.style.width = "100%";
            button.style.textAlign = "center";
            if (modMenus.find((menu) => menu.panelType === butIndex)) {
                button.style.border = "2px solid white";
                button.style.borderRadius = "5px";
            }
            tableColumns[butIndex % 4].appendChild(button);
        }
        
        table.style.width = "80%";
        table.style.height = "auto";
        table.style.margin = "0 auto";
        
        this.menu.appendChild(table);

        // Add about section
        const aboutSection = document.createElement('div');
        aboutSection.style.paddingTop = '15px';
        aboutSection.style.marginLeft = '20px';
        const fontSize = getMin(this.width/20, 20);
        aboutSection.style.fontSize = `${fontSize}px`;
        aboutSection.style.color = '#fff';
        aboutSection.innerHTML = `
            <p>Territorio Sigma Build &#128526 (Compatible with Game Version 1.83.5)</p>
            <p>Brought to you by Vkij, Oi and DanTheMan</p>
            <p>Discord Server: <a href="https://discord.gg/3aF93G23rV" target="_blank">discord.gg/3aF93G23rV</a></p>
        `;
        this.menu.appendChild(aboutSection);

    }

    drawResizeButton() {
        // Create new button element
        const resizeButton = document.createElement('button');
        resizeButton.classList.add('menu-button');
        resizeButton.innerHTML = '&#10542;';
        resizeButton.style.position = 'absolute';
        resizeButton.style.bottom = '0';
        resizeButton.style.right = '0';
        resizeButton.style.color = '#fff';
        resizeButton.addEventListener('mousedown', (e) => {
          this.isResizing = true;
          this.resizeStartX = e.clientX;
          this.resizeStartY = e.clientY;
        });
      
        // Add new button to menu
        this.menu.appendChild(resizeButton);
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
                this.onPanelResize();
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

    onPanelResize() {
        //Wipe panel and redraw
        this.menu.innerHTML = "";
        this.drawWindow(this.panelType);
    }

    onDock(e) {
        //First check how many available docks there are, and what their original widths are
        var docks = [];
        for (let dockStatus = 1; dockStatus <= 2; dockStatus++) {
            docks.push(Math.max(0, ...modMenus.filter(menu => menu.dockStatus === dockStatus).map(menu => menu.width)));
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
        if (oldDockWidths[0] != docks[0] || oldDockWidths[1] != docks[1]) canvasManager.dockUpdateCanvas();
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
}

var modMenus = [];
function modMenuInit() {

    var modMenu = new ModMenu(0, 200, 200, 100, 100, 100);
    modMenu.setSize(300, 300);
    modMenu.setPosition(200, 200);
    modMenus.push(modMenu);
}

function getDockWidth(dockStatus = 1) {
    return Math.max(0, ...modMenus.filter(menu => menu.dockStatus === dockStatus).map(menu => menu.width));
}

function getColor(index) {
    const hue = index * 30; // 30 degrees per step
    const saturation = 100;
    const lightness = 50;
    const rgb = hslToRgb(hue, saturation, lightness);
    const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
    return hex;
}
  
// Helper function to convert HSL to RGB
function hslToRgb(h, s, l) {
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
function rgbToHex(r, g, b) {
    return ("#" + [r, g, b] .map((c) => c.toString(16).padStart(2, "0")).join(""));
}
  