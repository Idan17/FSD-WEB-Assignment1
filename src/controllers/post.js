const Posts = require("../models/post.js");

const createPost = async (req, res) => {
 try{
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
    try{
        const post = await Posts.findById(req.params.id);
        if(!post){
            return res.status(404).send("Post not found");
        }
        res.status(200).send(post);
    }catch(error){
        res.status(500).send("Error fetching post", error);
    }
}

module.exports = { createPost, getAllPosts, getPostById };
