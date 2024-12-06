const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
  },
  content: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true,
    minlength: 1,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
