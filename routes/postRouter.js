const express = require('express');
const { protect } = require('../controllers/authController');
const { createPost, getPost } = require('../controllers/postController');

const router = express.Router();

router.route('/').get(getPost).post(protect, createPost);

module.exports = router;
