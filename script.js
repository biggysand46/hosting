const backg = document.getElementById("backg");
const cover = document.getElementById("cover");
const switchholder = document.getElementsByClassName("switchholder")[0];
const switchimg = document.getElementById("lightswitch");
const switchbtn = document.getElementById("switchbtn");
let switch_state = 1;

function newschange(visible) {
    const newsticker = document.getElementById("newsTicker");
    const tickerTrack = document.getElementById("tickerTrack");
    const items = document.getElementsByClassName("ticker__item");

    newsticker.style.visibility = visible;
    tickerTrack.style.visibility = visible;

    Array.from(items).forEach(element => {
        element.style.visibility = visible;
    });
}

function lightsOn() {
    cover.style.backgroundColor = "#FFFFFF00";

    switchholder.style.width = "100px";
    switchholder.style.height = "100px";
    switchholder.style.top = "10%";
    newschange("visible");
}

function lightsOff() {
    cover.style.backgroundColor = "#444444FF";
    
    switchholder.style.width = "300px";
    switchholder.style.height = "300px";
    switchholder.style.top = "50%";
    newschange("hidden");
}

switchbtn.addEventListener("mousedown", () => {
    if (switch_state == 1) {
        switchimg.src = "switchon.png";
        lightsOn();
    } else {
        switchimg.src = "switchoff.png";
        lightsOff();
    }
    switch_state *= -1;
});

window.onload = newschange("hidden");
