const Posts = require("../models/post.js");

const getAllPosts = (req, res) => {
  console.log("All posts");
  res.send("All posts");
};

const createPost = (req, res) => {
  Posts.create({
    title: req.body.title,
    content: req.body.content,
    owner: req.body.owner,
  });
  res.send("Post created");
};

module.exports = { getAllPosts, createPost };
