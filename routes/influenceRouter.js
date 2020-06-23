const express = require('express');
const { getInfluence } = require('../controllers/influenceController');

const router = express.Router({ mergeParams: true });

router.route('/').get(getInfluence);

module.exports = router;
