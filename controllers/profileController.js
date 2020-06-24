const Profile = require('../models/Profile');
const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');
const CustomError = require('../utils/customError');
const filterBody = require('../utils/filterBody');
const sharp = require('sharp');

// @DESC    GET PROFILE OF A USER
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

// @DESC    GET USER'S OWN PROFILE
// @ROUTE   GET /api/v1/profile/me
// @ACCESS  PRIVATE
exports.getMyProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.user.id });

  res.status(200).json({
    status: 'success',
    data: { profile },
  });
});

// @DESC    UPDATE USER'S PROFILE
// @ROUTE   PATCH /api/v1/profile/me
// @ACCESS  PRIVATE - owner
exports.updateMyProfile = asyncHandler(async (req, res, next) => {
  // UPDATE FIELDS IN USER MODEL
  const userInfoUpdate = filterBody(req.body, 'handle', 'email', 'name');
  await User.findByIdAndUpdate(req.user.id, userInfoUpdate, {
    new: true,
    runValidators: true,
  });

  // UPDATE FIELDS IN PROFILE MODEL
  const profileInfoUpdate = filterBody(req.body, 'bio', 'location');
  const profile = await Profile.findOneAndUpdate(
    { user: req.user.id },
    profileInfoUpdate,
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: 'success',
    data: { profile },
  });
});

// @DESC    UPDATE USER'S PROFILE PICTURE
// @ROUTE   PATCH /api/v1/profile/myprofilepic
// @ACCESS  PRIVATE - owner
exports.updateMyProfilePic = asyncHandler(async (req, res, next) => {
  // HANDLE IMAGE NOT EXISTS OR NOT MEET REQUIREDMENT
  if (
    !req.files &&
    !req.files.profilePic &&
    !req.files.profilePic.mimetype.startsWith('image') &&
    !req.files.profilePic.size < 5000000
  ) {
    return next(
      new CustomError(`Please upload a valid image under the size of 5mb`, 400)
    );
  }

  // PROCESS IMAGE WITH SHARP AND SAVE TO FILE
  const fileName = `user-${req.user.id}-profile.jpeg`;
  await sharp(req.files.profilePic.data)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${fileName}`);

  await User.findByIdAndUpdate(
    req.user.id,
    {
      profilePic: fileName,
    },
    { new: true, runValidators: true }
  );
  const profile = await Profile.findOne({ user: req.user.id });
  res.status(200).json({
    status: 'success',
    data: { profile },
  });
});
