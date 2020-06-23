const express = require('express');
const {
  createComment,
  deleteComment,
} = require('../controllers/commentController');
const { protect } = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router.route('/').post(protect, createComment).delete(protect, deleteComment);

router.route('/:id').delete(protect, deleteComment);

module.exports = router;
