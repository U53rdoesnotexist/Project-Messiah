class ModMenu {
    constructor(width, height, title, x, y, z) {
        this.width = width;
        this.height = height;
        this.title = title;
        this.x = x;
        this.y = y;
        this.zIndex = z;
        this.isDragging = false;
        this.dragStartX = 0;
        this.dragStartY = 0;
        this.panel = document.createElement("div");
        this.panel.style.position = "absolute";
        this.panel.style.width = this.width + "px";
        this.panel.style.height = this.height + "px";
        this.panel.style.left = this.x + "px";
        this.panel.style.top = this.y + "px";
        this.panel.style.backgroundColor = "white";
        this.panel.style.border = "1px solid black";
        this.panel.style.padding = "10px";
        this.panel.style.zIndex = z;
        this.panel.style.textAlign = "center";
        this.panel.innerHTML = "<h3>" + this.title + "</h3>";
        this.panel.addEventListener("mousedown", this.onMouseDown.bind(this));
        document.addEventListener("mousemove", this.onMouseMove.bind(this));
        document.addEventListener("mouseup", this.onMouseUp.bind(this));
        document.body.appendChild(this.panel);
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
            this.panel.style.left = this.x + "px";
            this.panel.style.top = this.y + "px";
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
        this.panel.style.width = this.width + "px";
        this.panel.style.height = this.height + "px";
    }
  
    setPosition(x, y) {
        this.x = x;
        this.y = y;
        this.panel.style.left = this.x + "px";
        this.panel.style.top = this.y + "px";
    }
}

const modMenu = new ModMenu(200, 200, "Mod Menu", 100, 100, 100);
modMenu.setSize(300, 300);
modMenu.setPosition(200, 200);