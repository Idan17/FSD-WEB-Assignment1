const Post = require("../models/post.js");
const mongoose = require("mongoose");

//CREATE new post
const createPost = async (req, res) => {
  const { title, content, sender } = req.body;

  if (!title || !content || !sender) {
    return res
      .status(400)
      .json({ message: "Title, content and sender are required" });
  }

  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      sender: req.body.sender,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).send("Error creating post", error);
  }
};

//GET post by id
const getPostById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error fetching post", error });
  }
};

//GET all posts
const getPosts = async (req, res) => {
  try {
    if (req.query.sender) {
      posts = await Post.find({ sender: req.query.sender });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Posts", error });
  }
};

// UPDATE post by ID
const updatePost = async (req, res) => {
  const id = req.params.id;
  const { title, content, sender } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  if (!title && !content && !sender) {
    return res
      .status(400)
      .json({ message: "Title, content or sender are required" });
  }

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, content, sender },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Error updating post", error });
  }
};

// DELETE post by ID
const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error });
  }
};

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost};
