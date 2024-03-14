const path = require('path');
const dotenv = require('dotenv')

// following code help to run the chat server, to whatever port we are trying to run
const envPath = __dirname + `/.env`;
console.log(`Looking for ENV file :`, path.resolve(envPath));
dotenv.config({ path: envPath });

console.log("parseInt(process.env.CHAT_SERVER_PORT) = ", parseInt(process.env.CHAT_SERVER_PORT));

const PORT = parseInt(process.env.CHAT_SERVER_PORT) || 8000;
const io = require('socket.io')(PORT, {
    cors: {
            origin: '*',
     },
});



console.log(`Socket Server is running on port: ${PORT}`);

const users = {};

io.on('connection', socket=>{

    socket.on('new-user-joined-msg-to-sever', (name)=>{
        console.log(`new user ${name} joined with socketId: ${socket.id}\n`);
        users[socket.id] = name;
        socket.broadcast.emit('new-user-welcomed-msg-to-client', name);
    });

    socket.on('client-msg-to-server', (message)=>{
        socket.broadcast.emit('server-msg-to-client', {message: message, name: users[socket.id]});
        
    });

    socket.on('disconnect', (message)=>{
        socket.broadcast.emit('disconnect-msg-to-client', {message: message, name: users[socket.id]});
        delete users[socket.id];
    })
});
