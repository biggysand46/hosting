let mousedown = false
let svg = document.getElementById("holder");
let cpath = null

document.addEventListener("mousedown", (event) => {
    mousedown = true;
    cpath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    cpath.setAttribute("d", `M ${event.x} ${event.y}`);
    cpath.setAttribute("stroke", "black");
    cpath.setAttribute("stroke-width", "3");
    svg.appendChild(cpath);
});
document.addEventListener("mouseup", () => {mousedown = false});

document.addEventListener("mousemove", (event) => {
    if (mousedown) {
        let currentpath = cpath.getAttribute("d");
        cpath.setAttribute("d", `${currentpath} l ${event.x} ${event.y}`);
    }
});
