const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Start the server
server.listen(3000, () => {
  console.log('Server started on port 3000');
});
