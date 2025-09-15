const express = require('express');
const PORT = 5011;

const app = express();

app.use(express.static('public'));

app.get('/iframe-website1', (req, res) => {
    res.sendFile(__dirname + '/public/iframe-website1.html');
})

app.get('/iframe-website2', (req, res) => {
    res.sendFile(__dirname + '/public/iframe-website2.html');
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})