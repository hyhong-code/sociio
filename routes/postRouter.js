const express = require('express');
const { protect } = require('../controllers/authController');
const {
  createPost,
  getPosts,
  getPost,
} = require('../controllers/postController');

const router = express.Router();

router.route('/').get(getPosts).post(protect, createPost);
router.route('/:id').get(getPost);

module.exports = router;
