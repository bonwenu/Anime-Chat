const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require ("socket.io").listen(server);
const path = require('path');
const formatMessage = require("./utils/messages");
const {userJoin, getCurrentUser, userLeave, getRoomUsers} = require('./utils/users')

const PORT = process.env.PORT || 5000;
server.listen(PORT);
console.log("Server running... ");

const botName = "NightBot";

// Set static folder. You can also call folder public
app.use(express.static(path.join(__dirname, 'client' )))


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'));
})

// Run when client connects
io.sockets.on("connection", (socket) => {
    
    socket.on('joinRoom', ({username, room}) => {

        const user = userJoin(socket.id, username, room);
        socket.join(user.room);
        // Welcome current user
        socket.emit('message', formatMessage(botName, 'Welcome to AnimeCord!'));
        
        // Broadcast when a new user conntects/joins room
        socket.broadcast.to(user.room).emit('message', formatMessage(botName, `${user.username} has joined the chat`));

        // Send users and room info 
        io.sockets.to(user.room).emit('roomUsers', {
            room: user.room, 
            users: getRoomUsers(user.room)
        });

    });
    
    // Listen for chat message
    socket.on("chatMessage", (data) => {
        const msg = data;
        const user = getCurrentUser(socket.id);
        io.sockets.to(user.room).emit('message', formatMessage(`${user.username}`, msg));
    });

    // Disconnect
    socket.on("disconnect", () => {
        const user = userLeave(socket.id);

        if(user) {
            io.sockets.to(user.room).emit('message', formatMessage(botName, `${user.username} left the chat`));

             // Send users and room info 
            io.sockets.to(user.room).emit('roomUsers', {
                room: user.room, 
                users: getRoomUsers(user.room)
            });
        }   
    });
    
});