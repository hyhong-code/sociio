const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: true,
    minlength: [10, 'A post must be at least 10 characters long'],
    maxlength: [280, 'A post must be no more than 280 characters long'],
  },
  location: {
    type: [Number],
    validate: {
      validator: (v) => v.length === 0 || v.length === 2,
      message: 'Location must be in the format of [lat,lng]',
    },
  },
  hashtags: {
    type: [String],
    validate: {
      validator: (v) => v.length <= 5,
      message: 'A post can have 3 hashtags max',
    },
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  postedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Post', PostSchema);
