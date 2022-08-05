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
app.listen(process.env.PORT, (res, reqq) => {});
app.get("/", (res, req) => {
  req.send("test socket");
});

async function userExists(name) {
  return await User.findOne({ name });
}
async function getUsersNames() {
  const usersNames = await User.find({});
  console.log(usersNames.map(({ name }) => name));
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
  console.log({ user: newUser, usersNames: getUsersNames() });

  socket.emit("sendUser", { user: newUser, usersNames: await getUsersNames() });
}
async function addNewUserListener(socket) {
  socket.on("newUserCreate", async (name) => {
    try {
      if (await userExists(name)) {
        handleUserAlreadyExists(name, socket);
        return;
      }
      createNewUser(name, socket);
    } catch (e) {
      console.log("ERROR");
    }
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
  console.log("finished");
}

function addNewMessageListener(socket) {
  socket.on("newMessage", async ({ author, message }) => {
    try {
      console.log(author, message);
      await addNewMessage(author, message);
    } catch (e) {
      console.log("FAILED");
    }
  });
}
io.on("connection", (socket) => {
  console.log("CON");
  addNewUserListener(socket);
  addNewMessageListener(socket);
});
