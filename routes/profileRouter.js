const express = require('express');
const { getProfile } = require('../controllers/profileController');

const router = express.Router({ mergeParams: true });

router.route('/').get(getProfile);

module.exports = router;
