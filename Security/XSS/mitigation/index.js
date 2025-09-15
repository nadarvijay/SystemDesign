const express = require('express')
const PORT = 5111;
const app = express();

app.use((req, res, next) => {   // middle ware : this code is executed first before next line

    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self';" +
        "script-src 'self' 'unsafe-inline' 'nonce-randomKey' http://unsecure.com;" +  // for script restriction
        "img-src 'self'"  // for img restriction
        // report-to default or report-uri URL   // this is used to send the report data to the url when CSP related error occurs
    )
    next();
})

app.use(express.static('public'));  // exposing the public folder

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/public/index.html');  // instead of this we can expose the public folder
    res.sendFile(__dirname + '/index.html');
})