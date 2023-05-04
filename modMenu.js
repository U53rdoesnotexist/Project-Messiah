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
        this.menu.addEventListener("mousedown", this.onMouseDown.bind(this));
        document.addEventListener("mousemove", this.onMouseMove.bind(this));
        document.addEventListener("mouseup", this.onMouseUp.bind(this));
        document.body.appendChild(this.menu);
        this.visible = true;
    
        // Create title bar
        this.titleBar = document.createElement('div');
        this.titleBar.style.backgroundColor = '#999';
        this.titleBar.style.color = '#fff';
        this.titleBar.style.height = '20px';
        this.titleBar.style.padding = '2px';
        this.titleBar.style.display = 'flex';
        this.titleBar.style.alignItems = 'center';
        this.titleBar.style.justifyContent = 'space-between';
        this.titleBar.innerHTML = `
            <span style="margin: 0 auto;">${this.title}</span>
            <span id="dockButton" class="menu-button">
                <span class="menu-button-triangle"></span>
                <div class="menu-button-line"></div>
            </span>
            <button class="menu-button">X</button>
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
        const closeButton = this.titleBar.querySelector('button');
        closeButton.addEventListener('click', () => {
            this.menu.remove();
        });

        const css = `
            #dockButton {
                position: relative;
                left: 25px;
            }
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
            }
            .menu-button-triangle {
                width: 0;
                height: 0;
                border-top: 8px solid transparent;
                border-bottom: 8px solid transparent;
                border-left: 7px solid #fff;
                left: 25px;
            }
            .menu-button-line {
                height: 16px;
                width: 4px;
                background-color: #fff;
                margin-left: 2px;
                margin-right: 0px;
            }
        `;
        const style = document.createElement('style');
        style.innerHTML = css;
        document.head.appendChild(style);

        // Create new button element
        const newButton = document.createElement('button');
        newButton.classList.add('menu-button');
        newButton.addEventListener('click', () => {
            // Call Test function
            Test();
        });

        // Add new button to title bar
        this.titleBar.insertBefore(newButton, closeButton);

        // Add menu to DOM
        document.body.appendChild(this.menu);

    }

    onMouseDown(e) {
        this.isDragging = true;
        this.dragStartX = e.clientX;
        this.dragStartY = e.clientY;
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
        this.isDragging = false;
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


function Test (){
    console.log("Test");
}