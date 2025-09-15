const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = 5111;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
    console.log('client connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })
})

server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})