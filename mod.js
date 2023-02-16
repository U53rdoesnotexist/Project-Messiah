function dragElementModules(elmnt) {

    function dragModules(event) {
        event = event || window.event;
        event.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - event.clientX;
        pos2 = pos4 - event.clientY;
        pos3 = event.clientX;
        pos4 = event.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeModules() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function modulesDown(event) {
        event = event || window.event;
        event.preventDefault();
        if (event.button === 2) {
            document.getElementById("modules").style.display = isActive ? "none" : "flex";
            isActive = !isActive;
        } else {
            // get the mouse cursor position at startup:
            pos3 = event.clientX;
            pos4 = event.clientY;
            document.onmouseup = closeModules;
            // call a function whenever the cursor moves:
            document.onmousemove = dragModules;
        }
    }

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var isActive = true;
    document.getElementById("header_menu").onmousedown = modulesDown;
}

const everyId = ["interface", "bots", "mode", "misc", "about"];

function display(name) {
    everyId.forEach(id => {
        document.getElementById("settings_" + id).style.display = "none";
        document.getElementById(id + "But").style.fontWeight = "normal";
    })
    document.getElementById("settings_" + name).style.display = "initial";
    document.getElementById(name + "But").style.fontWeight = "bold";
}
dragElementModules(document.getElementById('modMenu'));

//Essential Functions

function density(id) {
    return troops[id] / land[id]
}

function distance(x,y) {
    return (x**2 + y**2) ** 0.5
}

function speed(id) {
	return land[id] < 1E3 ? 1 / 4 : land[id] < 1E4 ? 1 / 3 : land[id] < 6E4 ? 1 / 2 : land[id] < 16E4 ? 1 : land[id] < 32E4 ? 2 : 3
}

function readLog(index) {
    if (logs != null && logs.length > index) {
        var log = logs[index]
        return `Tick: ${log[0]}, Author: ${log[1]}, Action: ${log[2]}, Param1: ${log[3]}, Param2: ${log[4]}, Param3: ${log[5]}, Param4: ${log[6]}.`
    }
}