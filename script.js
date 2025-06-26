const holder = document.getElementById("holder");
let button = document.getElementById("clr");
let path = document.getElementById("path1");
let mousedown = false;

function get_path() {
    return path.getAttribute("d");
}

function add_route(x, y) {

    if (get_path().length == 0) {
        path.setAttribute("d", `M${x} ${y}`);
    } else {
        path.setAttribute("d", `${get_path()} L${x} ${y}`);
    }
    get_path();
}

button.addEventListener("click", function(){
    holder.replaceChildren();
});

function create_path(x, y) {
    path = document.createElementNS('http://www.w3.org/2000/svg',"path");
    path.setAttribute("d", `M${x} ${y}`)
    holder.appendChild(path);
}

document.addEventListener("mousemove", (event) => {
    if (mousedown) {
        add_route(event.x, event.y)
    }
});

document.addEventListener("mousedown", (e) => {
    create_path(e.x, e.y);
    mousedown = true;
});

document.addEventListener("mouseup", function(){mousedown=false});
