const express = require('express');
const { getUsers, getUser } = require('../controllers/userController.js');

const influenceRouter = require('./influenceRouter');
const profileRouter = require('./profileRouter');

const router = express.Router();

// RE-ROUTES
router.use('/:userId/influences', influenceRouter);
router.use('/:userId/profile', profileRouter);

router.route('/').get(getUsers);
router.route('/:id').get(getUser);

module.exports = router;
