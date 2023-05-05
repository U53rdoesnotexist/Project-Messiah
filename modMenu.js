class ModMenu {
    constructor(title, width, height, x, y, z) {
        this.title = title;
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
        this.menu.style.backgroundColor = "white";
        this.menu.style.border = "1px solid black";
        this.menu.style.padding = "0";
        this.menu.style.zIndex = z;
        this.menu.addEventListener("mousedown", this.onMouseDown.bind(this));
        this.menu.addEventListener("mousemove", this.onMouseMove.bind(this));
        this.menu.addEventListener("mouseup", this.onMouseUp.bind(this));
        document.body.appendChild(this.menu);
        this.visible = true;
    
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
        closeButton.addEventListener('click', () => {
            this.menu.remove();
            canvasManager.forceUpdateCanvas();
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
            .menu-button:nth-child(2) {
            }
            .menu-button:nth-child(3) {
                position: absolute;
                bottom: 0;
                right: 0;
            }
        `;
        const style = document.createElement('style');
        style.innerHTML = css;
        document.head.appendChild(style);

        // Create new button element
        const newButton = document.createElement('button');
        newButton.classList.add('menu-button');
        newButton.innerHTML = '&#10542;';
        newButton.addEventListener('mousedown', (e) => {
            this.isResizing = true;
            this.resizeStartX = e.clientX;
            this.resizeStartY = e.clientY;
        });

        // Add new button to title bar
        this.titleBar.insertBefore(newButton, closeButton);

        // Add menu to DOM
        document.body.appendChild(this.menu);

        // Add event listeners for dragging
        document.addEventListener("mousedown", (e) => this.onMouseDown(e));
        document.addEventListener("mousemove", (e) => this.onMouseMove(e));
        document.addEventListener("mouseup", (e) => this.onMouseUp(e));

        
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
            const newWidth = this.dockStatus ? this.width : e.clientX - this.x;
            const newHeight = e.clientY - this.y;
            this.setSize(newWidth, newHeight);
            
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
  
    onMouseUp(e) {
        if (this.isResizing) {
            this.isResizing = false;
        } else if (this.isDragging) {
            this.isDragging = false;
        }
    }

    onDock(e) {
        //First check how many available docks there are, and what their original widths are
        var docks = [];
        for (let dockStatus = 1; dockStatus <= 2; dockStatus++) {
            docks.push({
                exists: modMenus.findIndex(menu => menu.dockStatus === dockStatus) != -1,
                width: Math.max(0, ...modMenus.filter(menu => menu.dockStatus === dockStatus).map(menu => menu.width))
            });
        };
        //Now we will dock the menu to the left or right side if it is close enough
        console.log(this.x, docks)
        if (e.clientX <= docks[0].width + window.innerWidth / 75) { //Docked to left side
            this.dockStatus = 1;
            this.x = 0;
        } else if (e.clientX + this.width >= window.innerWidth * 74/75 - docks[1].width) { //Docked to right side
            this.dockStatus = 2;
            this.x = window.innerWidth - this.width;
        } else this.dockStatus = 0; //Docked to neither side

        //Now we need to recalculate the maximum width of each dock and refit every menu that is docked into its new dock width
        var oldDockWidths = [docks[0].width, docks[1].width];
        for (let dockStatus = 1; dockStatus <= 2; dockStatus++) {
            if (docks[dockStatus - 1].exists) {
                docks[dockStatus - 1].width = Math.max(0, ...modMenus.filter(menu => menu.dockStatus === dockStatus).map(menu => menu.width));
                modMenus.filter(menu => menu.dockStatus === dockStatus).forEach(menu => {
                    menu.setSize(docks[dockStatus - 1].width, menu.height);
                    menu.x = dockStatus == 1 ? 0 : window.innerWidth - menu.width;
                });
            }
        }
        
        //If a dock is empty, reset the mainCanvas back to normal.
        if (!docks[0].exists && !docks[1].exists) { //Docked to neither side
            mainCanvas.style.paddingLeft = '0';
            mainCanvas.style.width = '100%';
        } else if (!docks[0].exists && docks[1].exists) { //Docked to right side
            mainCanvas.style.paddingLeft = '0';
            mainCanvas.style.width = (window.innerWidth - docks[1].width) + 'px';
        } else if (!docks[1].exists && docks[0].exists) { //Docked to left side
            mainCanvas.style.paddingLeft = docks[0].width + 'px';
            mainCanvas.style.width = (window.innerWidth - docks[0].width) + 'px';
        } else { //Docked to both sides
            mainCanvas.style.paddingLeft = docks[0].width + 'px';
            mainCanvas.style.width = (window.innerWidth - docks[0].width - docks[1].width) + 'px';
        }

        //If there is a change in dock Width, update the canvas.
        if (oldDockWidths[0] != docks[0].width || oldDockWidths[1] != docks[1].width) canvasManager.forceUpdateCanvas();
        //if (oldDockStatus != this.dockStatus) canvasManager.forceUpdateCanvas();
    }

    setSize(width, height) {
        this.width = getMax(width, 150);
        this.height = getMax(height, 50);
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

var modMenu = new ModMenu("Mod Menu", 200, 200, 100, 100, 100);
modMenu.setSize(300, 300);
modMenu.setPosition(200, 200);
modMenus.push(modMenu);