const server = require('http').createServer();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Application uses declaration
app.use(express.json());
app.use(cookieParser());

// Client requests handle
const userController = require('./user/user-controller');
app.post('/user-login', userController.login);
app.post('/user-registration', (userController.register));

// Sockets handle
const { Server } = require("socket.io");
const io = new Server(server);

// Setting callbacks to socket events 
io.on('connection', (socket) => {
    console.log(`A user "${socket.id}" connected.`);

    socket.on('disconnect', () => {
        console.log(`A user "${socket.id}" disconnected.`);
    });
});

// Server setting up
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`Server is listening on "${PORT}".`);
});