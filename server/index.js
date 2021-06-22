require('dotenv').config()

//
// Application requirements declaration
//
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

app.use(express.text());
app.use(cookieParser());

//
// Client requests handle
//
const router = require('./router');
app.use('/req', router)

//
// Sockets handle
//
const { Server } = require("socket.io");
const io = new Server(server);

// Setting callbacks to socket events 
io.on('connection', (socket) => {
    console.log(`A user "${socket.id}" connected.`);

    socket.on('disconnect', () => {
        console.log(`A user "${socket.id}" disconnected.`);
    });
});

//
// Server setting up
//
const PORT = process.env.PORT || 5000
const DB_URL = process.env.DB_URL || "mongodb+srv://dbControl:flex_db1@flex-claster.m922b.mongodb.net/flex-claster?retryWrites=true&w=majority"

async function startServer() {
    try {
        // connecting to mongoDB
        await mongoose.connect(DB_URL, {
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // listening on defined port
        server.listen(PORT, () => {
            console.log(`Server is listening on "${PORT}".`);
        });
    } catch (e) {
        console.log(`Server start error. ${e}.`)
    }
}

startServer();