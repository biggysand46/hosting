const ticker = document.getElementById('newsTicker');
const track = document.getElementById('tickerTrack');
let speed = 100;
let rafId = null;
let lastTimestamp = null;
let translateX = 0;

function setupDuplicate() {
    const dup = track.cloneNode(true);
    dup.id = 'tickerTrackDup';
    ticker.appendChild(dup);
}

function step(ts) {
    if (!lastTimestamp) lastTimestamp = ts;
    const delta = (ts - lastTimestamp) / 1000;
    lastTimestamp = ts;

    const move = speed * delta;
    translateX -= move;

    const width = track.getBoundingClientRect().width;
    if (Math.abs(translateX) >= width) {
        translateX += width;
    }

    const children = ticker.querySelectorAll('.ticker__track');
    children.forEach(c => {
        c.style.transform = `translateX(${translateX}px)`;
    });

    rafId = requestAnimationFrame(step);
}

function startTicker() {
    setupDuplicate();
    rafId = requestAnimationFrame(step);
}

window.onload = startTicker();
