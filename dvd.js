const dvd = document.getElementById('dvd');
let x = randomint(10, document.documentElement.clientWidth/2-10);
let y = randomint(10, document.documentElement.clientHeight/2-10);
let dx = 2;
let dy = 2;

const update = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const rect = dvd.getBoundingClientRect();

    if (x + rect.width >= screenWidth || x <= 0) {
    dx = -dx;
    changeColor();
    }

    if (y + rect.height >= screenHeight || y <= 0) {
    dy = -dy;
    changeColor();
    }

    x += dx;
    y += dy;

    dvd.style.left = x + 'px';
    dvd.style.top = y + 'px';

    requestAnimationFrame(update);
};

function changeColor() {
    dvd.style.filter = `hue-rotate(${Math.floor(Math.random() * 360)}deg)`;
}

function randomint(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

update();
