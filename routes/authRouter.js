const express = require('express');
const {
  signUp,
  logIn,
  protect,
  updatePassword,
  deleteMe,
} = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(signUp);
router.route('/login').post(logIn);
router.route('/updatepassword').patch(protect, updatePassword);
router.route('/deleteme').delete(protect, deleteMe);

module.exports = router;
