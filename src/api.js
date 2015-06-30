var express = require('express');
var app = express();

app.get('/stub', function(req, res) {
    res.redirect('http://31.media.tumblr.com/65f2c221257116959599522008abfa4c/tumblr_n7qalc0aPr1r7tu05o2_500.gif');
    return;
});

app.get('/', function(req, res) {
    res.send('whatever you do, do it with gusto.');
});

app.listen(8999, function() {
    console.log('gusto api server started. whatever you do, do it with gusto.');
});
