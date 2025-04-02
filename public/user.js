let socket;
var c;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);
    socket = io();
    socket.on('ellipse', (data) => {
        fill(data.color);
        ellipse(data.x, data.y, 50, 50);
    });

    socket.on('connect', () => {
        console.log('Conectado al servidor');
        c = random(255);
    });
}

function mouseDragged() {
    sendEllipseData(mouseX, mouseY);
    console.log(mouseX, mouseY)
}

function touchMoved() {
    sendEllipseData(mouseX, mouseY);
}

function sendEllipseData(x, y) {
    const data = {
        x: x,
        y: y,
        color: c
    };
    socket.emit('ellipse', data);
}



///
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }