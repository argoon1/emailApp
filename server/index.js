const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const { Socket } = require("dgram");

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const mongoose = require("mongoose");
const User = require("./models/user.model");
mongoose.connect(
  "mongodb+srv://Argon:data09@task4.pax4bca.mongodb.net/?retryWrites=true&w=majority"
);
app.use(cors());

server.listen(PORT);
async function userExists(name) {
  return await User.findOne({ name });
}
async function getUsersNames() {
  const usersNames = await User.find({});
  return await usersNames.map(({ name }) => name);
}
async function handleUserAlreadyExists(name, socket) {
  const user = await userExists(name);
  if (user) {
    socket.emit("sendUser", { user, usersNames: await getUsersNames() });
    return true;
  }
  return false;
}
async function createNewUser(name, socket) {
  const newUser = await User.create({
    name,
    messages: [],
  });

  socket.emit("sendUser", { user: newUser, usersNames: await getUsersNames() });
}
async function addUserListener(socket) {
  socket.on("getUser", async (name) => {
    try {
      if (await userExists(name)) {
        await handleUserAlreadyExists(name, socket);
        return;
      }
      await createNewUser(name, socket);
    } catch (e) {}
  });
}
async function addNewMessage(author, message) {
  const { recipent, ...newMessage } = message;
  const { messages } = await User.findOne({ name: recipent });
  await User.updateOne(
    { name: recipent },
    {
      messages: [...messages, { ...newMessage, author }],
    }
  );
}

function addNewMessageListener(socket) {
  socket.on("newMessage", async ({ author, message }) => {
    try {
      await addNewMessage(author, message);
    } catch (e) {}
  });
}
io.on("connection", (socket) => {
  addUserListener(socket);
  addNewMessageListener(socket);
});
