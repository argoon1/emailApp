const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Argon:data09@task4.pax4bca.mongodb.net/?retryWrites=true&w=majority"
);
const io = new Server(server, {
  cors: {
    origin:
      "https://62ed3d34ba5a227d313c375b--celadon-conkies-fa62e1.netlify.app/",
    methods: ["GET", "POST"],
  },
});
app.listen(process.env.PORT, (res, req) => {});
app.get("/", (res, req) => {
  res.send("test socket");
});
