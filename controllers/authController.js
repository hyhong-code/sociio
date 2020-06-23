const asyncHandler = require('../utils/asyncHandler');
const CustomError = require('../utils/customError');
const User = require('../models/User');
const filterBody = require('../utils/filterBody');
const cookieTokenResponse = require('../utils/cookieTokenResponse');

// @DESC    SIGN UP USER
// @ROUTE   POST /api/v1/auth/signup
// @ACCESS  PUBLIC
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

// @DESC    LOG IN USER
// @ROUTE   POST /api/v1/auth/login
// @ACCESS  PUBLIC
exports.logIn = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!(email && password)) {
    return next(new CustomError(`Email and password are required`, 400));
  }

  // HANDLE USER NOT EXIST
  if (!user) {
    return next(new CustomError(`No user found with email of ${email}`, 404));
  }

  // HANDLE PASSWORD INCORRECT
  if (!(await user.verifyPassword(password))) {
    return next(new CustomError(`Invlid credentials`, 401));
  }

  cookieTokenResponse(user, 200, res);
});
