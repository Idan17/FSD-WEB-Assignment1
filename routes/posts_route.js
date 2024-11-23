const express = require("express");
const postsController = require("../controllers/posts_controller");
const router = express.Router();

router.get("/", postsController.getAllPosts);
router.post("/", postsController.createPost);

module.exports = router;