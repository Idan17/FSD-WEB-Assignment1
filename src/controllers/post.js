const Posts = require("../models/post.js");

const createPost = (req, res) => {
  Posts.create({
    title: req.body.title,
    content: req.body.content,
    owner: req.body.owner,
  });
  res.send("Post created");
};

const getAllPosts = async (req, res) => {
    try {
      const posts = await Posts.find();
      res.send(posts);
    } catch (error) {
      res.status(500).send("Error fetching posts", error);
    }
  };

module.exports = { createPost, getAllPosts };
