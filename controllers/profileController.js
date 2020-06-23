const Profile = require('../models/Profile');
const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');
const CustomError = require('../utils/customError');
const QueryOptions = require('../utils/queryOptions');

// @DESC    UPDATE LOGGED IN USER INFO
// @ROUTE   PATCH /api/v1/users/:userId/profile
// @ACCESS  PUBLIC
exports.getProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.params.userId });

  // HANDLE NO PROFILE FOUND
  if (!profile) {
    return next(
      new CustomError(`No user profile found with id ${req.params.userId}`, 404)
    );
  }

  res.status(200).json({
    status: 'success',
    data: { profile },
  });
});
