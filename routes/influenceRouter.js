const express = require('express');
const { protect } = require('../controllers/authController');
const {
  getInfluence,
  followUser,
  unfollowUser,
} = require('../controllers/influenceController');

const router = express.Router({ mergeParams: true });

router.route('/').get(getInfluence);
router.route('/follow').patch(protect, followUser);
router.route('/unfollow').patch(protect, unfollowUser);

module.exports = router;
