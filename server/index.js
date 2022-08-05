const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const { Socket } = require("dgram");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
