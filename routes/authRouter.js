const express = require('express');
const {
  signUp,
  logIn,
  loadMe,
  protect,
} = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(signUp);
router.route('/login').post(logIn);
router.route('/loadme').get(protect, loadMe);

module.exports = router;
