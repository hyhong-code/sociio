const express = require('express');
const { protect } = require('../controllers/authController');
const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');

const router = express.Router();

router.route('/').get(getPosts).post(protect, createPost);
router
  .route('/:id')
  .get(getPost)
  .patch(protect, updatePost)
  .delete(protect, deletePost);

module.exports = router;
