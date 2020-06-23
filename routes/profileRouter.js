const express = require('express');
const { protect } = require('../controllers/authController');
const {
  getProfile,
  getMyProfile,
  updateMyProfile,
} = require('../controllers/profileController');

const router = express.Router({ mergeParams: true });

router.route('/').get(getProfile);
router.route('/me').get(protect, getMyProfile).patch(protect, updateMyProfile);

module.exports = router;
