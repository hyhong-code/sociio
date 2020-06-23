const Influence = require('../models/Influence');
const asyncHandler = require('../utils/asyncHandler');

// @DESC    FOLLOW A USER
// @ROUTE   PATCH /api/v1/users/:userId/influences/follow
// @ACCESS  PRIVATE
exports.followUser = asyncHandler(async (req, res, next) => {
  // $addToSet OPERATOR ADD VALUE INTO ARRAY ONLY IF NOT EXISTS
  const myInfluence = await Influence.findOneAndUpdate(
    { user: req.user.id },
    { $addToSet: { following: req.params.userId } },
    { new: true, runValidators: true }
  );

  const userInfluence = await Influence.findOneAndUpdate(
    { user: req.params.userId },
    { $addToSet: { followers: req.user.id } },
    { new: true, runValidators: true }
  );

  // HANDLE USER NOT YET HAVE PROFILE
  res.status(200).json({
    status: 'success',
    data: { myInfluence, userInfluence },
  });
});

// @DESC    UNFOLLOW A USER
// @ROUTE   PATCH /api/v1/users/:userId/influences/unfollow
// @ACCESS  PRIVATE
exports.unfollowUser = asyncHandler(async (req, res, next) => {
  // $addToSet OPERATOR ADD VALUE INTO ARRAY ONLY IF NOT EXISTS
  const myInfluence = await Influence.findOneAndUpdate(
    { user: req.user.id },
    { $pull: { following: req.params.userId } },
    { new: true, runValidators: true }
  );

  const userInfluence = await Influence.findOneAndUpdate(
    { user: req.params.userId },
    { $pull: { followers: req.user.id } },
    { new: true, runValidators: true }
  );

  // HANDLE USER NOT YET HAVE PROFILE
  res.status(200).json({
    status: 'success',
    data: { myInfluence, userInfluence },
  });
});
