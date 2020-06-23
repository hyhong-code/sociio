const Influence = require('../models/Influence');
const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');
const CustomError = require('../utils/customError');
const QueryOptions = require('../utils/queryOptions');

// @DESC    GET FOLLOWERS / FOLLOWED BY OF A USER
// @ROUTE   GET /api/v1/users/:userId/influences
// @ACCESS  PUBLIC
exports.getInfluence = asyncHandler(async (req, res, next) => {
  // HANDLE USER NOT FOUND
  const user = await User.findById(req.params.userId);

  if (!user) {
    return next(new CustomError(`No user with id ${req.params.userId}`, 404));
  }
  // HANDLE USER NOT YET HAVE INFLUENCE
  let influence = await Influence.findOne({ user: req.params.userId });

  res.status(200).json({
    status: 'success',
    data: { influence },
  });
});
