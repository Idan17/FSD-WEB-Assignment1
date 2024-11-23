const Comment = require('../models/comment');

// CREATE a new comment
const createComment = async (req, res) => {
    const { content, author } = req.body;
  
    try {
      const newComment = new Comment({
        content,
        author,
      });
  
      await newComment.save();
      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json({ message: 'Error creating comment', error });
    }
  };

module.exports = {  createComment }; 