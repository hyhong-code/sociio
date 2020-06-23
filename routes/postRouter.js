const express = require('express');
const { protect } = require('../controllers/authController');
const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
} = require('../controllers/postController');

const commentRouter = require('./commentRouter.js');

const router = express.Router();

router.use('/:postId/comments', commentRouter);

router.route('/').get(getPosts).post(protect, createPost);
router
  .route('/:id')
  .get(getPost)
  .patch(protect, updatePost)
  .delete(protect, deletePost);
router.route('/:id/like').patch(protect, likePost);
router.route('/:id/unlike').patch(protect, unlikePost);

module.exports = router;
