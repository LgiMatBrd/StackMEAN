var express = require('express');
var app = express();

var port = 3000;

app.get('/', function(req, res) {
res.send('hello motherfuck! ZIKA2');
});

app.listen(port, function(){
console.log("Listening at port: " + port);
})
