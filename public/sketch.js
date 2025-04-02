let socket;

function setup() {
    createCanvas(800, 600);
    background(200);
    socket = io();

    socket.on('ellipse', (data) => {
        fill(data.color);
        ellipse(data.x, data.y, 50, 50);
    });

    socket.on('connect', () => {
        console.log('Conectado al servidor');
    });
}

function mouseDragged() {
    sendEllipseData(mouseX, mouseY);
}

function touchMoved() {
    sendEllipseData(touchX, touchY);
}

function sendEllipseData(x, y) {
    const data = {
        x: x,
        y: y,
        color: color(random(255), random(255), random(255))
    };
    socket.emit('ellipse', data);
}