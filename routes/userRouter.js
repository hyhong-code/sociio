const express = require('express');
const { getUsers, getUser } = require('../controllers/userController.js');

const influenceRouter = require('./influenceRouter');

const router = express.Router();

// RE-ROUTE
router.use('/:userId/influences', influenceRouter);

router.route('/').get(getUsers);
router.route('/:id').get(getUser);

module.exports = router;
