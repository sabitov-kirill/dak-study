const express = require('express');
const server = require('http').createServer();
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = process.env.PORT || 5000

io.on('connection', (socket) => {
    console.log('A user connected.');

    socket.on('disconnect', () => {
        console.log('A user disconnected.');
    });
});

server.listen(port, () => {
    console.log(`Server is listening on "${port}".`);
});