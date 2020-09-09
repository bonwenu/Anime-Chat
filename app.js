const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require ("socket.io").listen(server);
const path = require('path')

let users = [];
let connections = [];

server.listen(process.env.PORT || 5000);
console.log("Server running... ");

// Set static folder. You can also call folder public
app.use(express.static(path.join(__dirname, 'client' )))

// Index route
app.get('/', (req, res) => {
    res.send("Invalid Endpoint");
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'));
})

io.sockets.on("connection", (socket) => {
    connections.push(socket);
    console.log("Connected: %s sockets connected", connections.length);


    // Disconnect
    socket.on("disconnect", (data) => {
        
        users.splice(users.indexOf(socket.username), 1);
        updateUsernames();
        connections.splice(connections.indexOf(socket), 1);
        console.log("Disconnected: %s sockets connected", connections.length);
    });
    

    // Send message
    socket.on("send message", (data) => {
        io.sockets.emit("new message", {msg: data, user: socket.username});
    });

    // New user
    socket.on("new user", (data, callback) => {
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsernames();
    });

    function updateUsernames() {
        io.sockets.emit("get users", users);
    }
    
});