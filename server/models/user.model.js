const moongose = require("mongoose");
const messageModel = {
  title: String,
  messageText: String,
  author: String,
};
const userModel = {
  name: {
    type: String,
    required: true,
  },
  messages: {
    type: [messageModel],
    required: false,
  },
};
const User = new moongose.Schema(
  userModel,

  {
    collection: "usersChat",
  }
);
const model = moongose.model("UserData", User);
module.exports = model;
