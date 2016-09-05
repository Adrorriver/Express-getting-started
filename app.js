var express = require('express');
var app = express();

app.use(express.static('public'));

app.post('/', function (req, res) {
    res.send('post Hello world');
})    

app.listen(3000, function () {
    console.log('Example app: ')
}) 