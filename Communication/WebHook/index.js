const express = require('express')
const bodyParser = require('body-parser')
const PORT = 5111;
const app = express();

app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})

app.post('/webhook', (req, res) => {
    console.log(req.body);
    res.status(200).send('OK');
})




