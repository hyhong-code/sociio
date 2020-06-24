const express = require('express');
const { protect } = require('../controllers/authController');
const {
  getProfile,
  getMyProfile,
  updateMyProfile,
  updateMyProfilePic,
} = require('../controllers/profileController');

const router = express.Router({ mergeParams: true });

router.route('/').get(getProfile);

router.use(protect);

router.route('/profilepic').patch(protect, updateMyProfilePic);

router.route('/me').get(getMyProfile).patch(updateMyProfile);

module.exports = router;
