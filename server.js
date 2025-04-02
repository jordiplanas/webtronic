const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado');
    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado');
    });
    socket.on('ellipse', (data) => {
        io.emit('ellipse', data);
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});