const mongoose = require('mongoose');
const Post = require('./Post');

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: true,
    minlength: [5, 'A comment must be at least 5 characters long'],
    maxlength: [140, 'A comment must be no more than 280 characters long'],
  },
  post: {
    type: mongoose.Schema.ObjectId,
    ref: 'Post',
    required: true,
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

CommentSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'commentedBy',
    select: 'name handle profilePic',
  }).populate({
    path: 'post',
    select: '-__v',
  });
  next();
});

// CALCULATE AND UPDATE NUMBER OF COMMENTS OF A POST
CommentSchema.statics.calNumComments = async function (postId) {
  const post = await Post.findById(postId);
  const result = await this.aggregate([
    { $match: { post: postId } },
    { $group: { _id: '$post', numComments: { $sum: 1 } } },
  ]);

  if (!result.length) {
    post.numComments = 0;
  } else {
    post.numComments = result[0].numComments;
  }
  await post.save();
};

CommentSchema.pre('save', function (next) {
  this.constructor.calNumComments(this.post);
  next();
});

CommentSchema.pre('remove', function (next) {
  this.constructor.calNumComments(this.post);
  next();
});

module.exports = mongoose.model('Comment', CommentSchema);
