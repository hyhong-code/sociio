const Comment = require('../models/Comment');
const asyncHandler = require('../utils/asyncHandler');
const CustomError = require('../utils/customError');
const filterBody = require('../utils/filterBody');
const Post = require('../models/Post');

// @DESC    CREATE A COMMENT
// @ROUTE   POST /api/v1/posts/:postId/comments
// @ACCESS  PRIVATE
exports.createComment = asyncHandler(async (req, res, next) => {
  // HANDLE POST NOT EXISTS
  const post = await Post.findById(req.params.postId);
  if (!post) {
    return next(new CustomError(`No post found with id ${req.params.postId}`));
  }

  // CREATE COMMENT
  req.body.commentedBy = req.user.id;
  req.body.post = req.params.postId;
  const comment = await Comment.create(req.body);
  res.status(201).json({
    status: 'success',
    data: { comment },
  });
});

// @DESC    DELETE A COMMENT
// @ROUTE   DELETE /api/v1/comments/:id
// @ACCESS  PRIVATE - owner, admin
exports.deleteComment = asyncHandler(async (req, res, next) => {
  // HANDLE COMMENT NOT EXISTS
  const comment = await Comment.findById(req.params.id);
  if (!comment) {
    return next(new CustomError(`No comment found with id ${req.params.id}`));
  }

  // HANDLE USER IS NOT OWNER OF COMMENT
  if (
    comment.commentedBy.toString() !== req.user.id &&
    req.user.role !== 'admin'
  ) {
    return next(
      new CustomError(`User not authorize to access this route`, 401)
    );
  }

  // DELETE COMMENT
  await comment.remove();
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
