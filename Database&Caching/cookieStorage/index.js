const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const PORT = 3000;

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})