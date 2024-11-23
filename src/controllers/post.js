const Posts = require("../models/post.js");

const createPost = async (req, res) => {
  try {
    const post = await Posts.create({
      title: req.body.title,
      content: req.body.content,
      owner: req.body.owner,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).send("Error creating post", error);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send("Error fetching posts", error);
  }
};

const getPostById = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Posts.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comment", error });
  }
};

module.exports = { createPost, getAllPosts, getPostById };
