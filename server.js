require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

const port =

    app.listen(port, (req, res) => {
        console.log(`app listening on port http://localhost:3000`);
    })