const express = require('express');
const {
  signUp,
  logIn,
  loadMe,
  protect,
  updateMe,
  updatePassword,
  deleteMe,
} = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(signUp);
router.route('/login').post(logIn);
// router.route('/loadme').get(protect, loadMe);
router.route('/updateme').patch(protect, updateMe);
router.route('/updatepassword').patch(protect, updatePassword);
router.route('/deleteme').delete(protect, deleteMe);

module.exports = router;
