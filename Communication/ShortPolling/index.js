const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let currentData = 'Initial Data';

const PORT = 5111;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('/getData', (req, res) => {
    res.status(200).json({
        data: currentData
    })
})

app.get('/updateData', (req, res) => {
    currentData = 'Updated Data';
    res.send("Updated Data Successfully");
})

