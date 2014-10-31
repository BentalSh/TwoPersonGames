/**
 * Created by shahar on 31/10/14.
 */
var express = require('express');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(process.env.PORT ? process.env.PORT : 3000);

app.set('view engine', 'jade');

app.get('/index', function(req, res)
{
    res.render('index', {});
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('chat message', function(msg)
    {
        io.emit('chat message', msg);
    });
});
