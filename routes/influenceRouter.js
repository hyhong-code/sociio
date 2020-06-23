const express = require('express');
const { protect } = require('../controllers/authController');
const {
  followUser,
  unfollowUser,
  getMyInfluence,
  getUserInfluence,
} = require('../controllers/influenceController');

const router = express.Router({ mergeParams: true });

router.route('/').get(protect, getUserInfluence);
router.route('/me').get(protect, getMyInfluence);

router.route('/follow').patch(protect, followUser);
router.route('/unfollow').patch(protect, unfollowUser);

module.exports = router;
