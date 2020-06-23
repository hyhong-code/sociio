const asyncHandler = require('../utils/asyncHandler');
const CustomError = require('../utils/customError');
const User = require('../models/User');
const filterBody = require('../utils/filterBody');
const cookieTokenResponse = require('../utils/cookieTokenResponse');

exports.signUp = asyncHandler(async (req, res, next) => {
  // FILTER OUT UNWANTED FIELDS
  const filteredBody = filterBody(
    req.body,
    'handle',
    'email',
    'name',
    'password',
    'confirmPassword'
  );

  const user = await User.create(filteredBody);

  // SEND BACK TOKEN VIA JSON AND COOKIE
  cookieTokenResponse(user, 201, res);
});

exports.logIn = asyncHandler(async (req, res, next) => {});
