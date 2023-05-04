class ModMenu {
    constructor(title, width, height, x, y, z) {
        this.title = title;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.zIndex = z;
        this.isDragging = false;
        this.dragStartX = 0;
        this.dragStartY = 0;
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
        document.addEventListener("mousedown", this.onMouseDown.bind(this));
        document.addEventListener("mousemove", this.onMouseMove.bind(this));
        document.addEventListener("mouseup", this.onMouseUp.bind(this));
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
        newButton.addEventListener('click', () => {
            //start Resizing shit
        });

        // Add new button to title bar
        this.titleBar.insertBefore(newButton, closeButton);

        // Add menu to DOM
        document.body.appendChild(this.menu);

        // Add event listeners for dragging
        this.menu.addEventListener("mousedown", (e) => this.onMouseDown(e));
        document.addEventListener("mousemove", (e) => this.onMouseMove(e));
        document.addEventListener("mouseup", (e) => this.onMouseUp(e));
    }

    onMouseDown(e) {
        if (e.target.classList.contains("titleBar") || e.target.closest(".titleBar")) {
            this.isDragging = true;
            this.dragStartX = e.clientX;
            this.dragStartY = e.clientY;
        }
    }
    
  
    onMouseMove(e) {
        if (this.isDragging) {
            const deltaX = e.clientX - this.dragStartX;
            const deltaY = e.clientY - this.dragStartY;
            this.x += deltaX;
            this.y += deltaY;
            this.menu.style.left = this.x + "px";
            this.menu.style.top = this.y + "px";
            this.dragStartX = e.clientX;
            this.dragStartY = e.clientY;
        }
    }
  
    onMouseUp(e) {
        if (this.isDragging) {
            this.isDragging = false;
        }
    }
    
  
    setSize(width, height) {
        this.width = width;
        this.height = height;
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

const modMenu = new ModMenu("Mod Menu", 200, 200, 100, 100, 100);
modMenu.setSize(300, 300);
modMenu.setPosition(200, 200);