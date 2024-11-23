const express = require('express');
const router = express.Router();
const Post = require('../controllers/post'); 

router.get("/posts", (req, res) => {
    Post.getAllPosts(req, res);
});

module.exports = router;