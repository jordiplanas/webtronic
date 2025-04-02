let socket;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);
    socket = io();
    socket.on('ellipse', (data) => {
        fill(data.color);
        ellipse(data.x, data.y, 50, 50);
    });
}


///
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }