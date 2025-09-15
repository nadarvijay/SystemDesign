const express = require('express');

const app = express();

const PORT = 5111;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/sse', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    res.write('data:Welcome to Server sent event \n\n');

    // there should be no space between data and colon
    const intervalId = setInterval(() => {
        res.write(`data:Server Time ${new Date().toLocaleTimeString()} \n\n`);
    }, 5000);

    req.on('close', () => {
        clearInterval(intervalId);
    })
})