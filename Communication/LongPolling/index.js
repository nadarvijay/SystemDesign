const express = require('express');
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());

const PORT = 5111;
const waitingClient = [];
let data = "initialData";

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/initialData', (req, res) => {
    if (data !== req.query.lastData) {
        res.json({ data });
    }
    else {
        waitingClient.push(res);
    }
})

app.get('/updateData', (req, res) => {
    const paramdata = req.query.data;
    data = paramdata;
    while (waitingClient.length > 0) {
        const client = waitingClient.pop();
        client.json({ data });
    }

    res.json({ data });
})