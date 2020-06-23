const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: true,
    minlength: [5, 'A comment must be at least 5 characters long'],
    maxlength: [140, 'A comment must be no more than 280 characters long'],
  },
  commentedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  commentedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Comment', CommentSchema);
