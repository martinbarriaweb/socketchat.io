
const path = require('path');
const express = require('express');
const app = express();

//settings 
app.set('port', process.env.PORT || 3000);


//static files
app.use(express.static(path.join(__dirname, 'public')));

//start server
const server = app.listen(app.get('port', ), ()=>{
    console.log('server on port', app.get('port'));
})



//websockets
const SocketIO  = require('socket.io');  
const io = SocketIO(server);

io.on('connection', (socket)=>{

    socket.on('chat:message', (data)=>{
        io.sockets.emit('chat:message', data)
    })
})
