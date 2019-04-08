var express= require('express');
var app = express();

app.use(express.static('src'));

var server = app.listen('8085',function(){
    let host = server.address().address;
    let port = server.address().port;

    console.log('app start at http: //%s:%s', host, port);
})