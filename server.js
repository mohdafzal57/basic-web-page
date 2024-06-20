require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/afzal', function (req, res) {
    res.send('<h1> Mohammad Afzal Khan </h1>')
})

app.get('/faizan', function (req, res) {
    res.send('<h1> Mohammad faizan Siddiqui </h1>')
})

const port = process.env.PORT || 3000;

    app.listen(port, (req, res) => {
        console.log(`app listening on port http://localhost:3000`);
    })
