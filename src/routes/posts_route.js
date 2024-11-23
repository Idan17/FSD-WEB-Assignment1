const express = require("express");
const router = express.Router();
const postsController = require("../controllers/post");

router.post("/", postsController.createPost);
module.exports = router;