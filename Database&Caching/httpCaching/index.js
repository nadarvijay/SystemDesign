const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    // res.setHeader('Cache-Control', 'public,max-age=86400');
    // res.setHeader('Expires', 'Wed, 20 Aug 2025 14:03:13 GMT');

    next();
})

app.use(express.static(path.join(__dirname, 'public'), {
    etag: false,
    cacheControl: false,
    lastModified: true
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})