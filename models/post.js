const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
    title: String,
    content: String,
    owner: String,
});

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;