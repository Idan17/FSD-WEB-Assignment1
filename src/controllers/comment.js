const Comment = require('../models/comment');

// READ all comments
const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comments', error });
  }
};

// READ a single comment by ID
const getCommentById = async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comment', error });
  }
};

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

  // UPDATE a comment by ID
const updateComment = async (req, res) => {
  const { id } = req.params;
  const { content, author } = req.body;

  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { content, author },
      { new: true }
    );
    if (!updatedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating comment', error });
  }
};

module.exports = { 
  getComments,
  getCommentById,
  createComment,
  updateComment
}; 