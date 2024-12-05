const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  id: uuid,
  content: String,
  author: String,
  createdAt: Date,
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
