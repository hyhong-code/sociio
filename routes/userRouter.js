const express = require('express');
const { getUsers, getUser } = require('../controllers/userController.js');

const router = express.Router();

router.route('/').get(getUsers);
router.route('/:id').get(getUser);

module.exports = router;
