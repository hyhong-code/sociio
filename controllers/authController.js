const asyncHandler = require('../utils/asyncHandler');
const CustomError = require('../utils/customError');
const User = require('../models/User');
const filterBody = require('../utils/filterBody');
const cookieTokenResponse = require('../utils/cookieTokenResponse');
const jwt = require('jsonwebtoken');
const Profile = require('../models/Profile');

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
  const user = await User.findOne({ email }).select('+password');

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

// @DESC    UPDATE LOGGED IN USER PASSWORD
// @ROUTE   PATCH /api/v1/auth/updatepassword
// @ACCESS  PRIVATE - owner
exports.updatePassword = asyncHandler(async (req, res, next) => {
  const { currentPassword, newPassword, newPasswordConfirmed } = req.body;

  // HANDLE MISSING FIELDS
  if (!(currentPassword && newPassword && newPasswordConfirmed)) {
    return next(
      new CustomError(
        `Fields currentPassword, newPassword, and newPasswordConfirmed are required`,
        400
      )
    );
  }

  // HANDLE INCORRECT PASSWORD
  let user = await User.findById(req.user.id).select('+password');
  if (!(await user.verifyPassword(currentPassword))) {
    return next(new CustomError(`Password incorrect`, 401));
  }

  // UPDATE PASSWORD
  user.password = newPassword;
  user.confirmPassword = newPasswordConfirmed;
  user = await user.save({ validateBeforeSave: true });

  cookieTokenResponse(user, 200, res);
});

// @DESC    DELETE LOGGED IN USER
// @ROUTE   DELETE /api/v1/auth/deleteMe
// @ACCESS  PRIVATE - owner
exports.deleteMe = asyncHandler(async (req, res, next) => {
  const { currentPassword } = req.body;

  // HANDLE MISSING FIELDS
  if (!currentPassword) {
    return next(new CustomError(`Field currentPassword,is required`, 400));
  }

  // HANDLE INCORRECT PASSWORD
  const user = await User.findById(req.user.id).select('+password +isActive');
  if (!(await user.verifyPassword(currentPassword))) {
    return next(new CustomError(`Password incorrect`, 401));
  }

  await user.remove();

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

// AUTHENTICATE USER
exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  // HANDLE BEARER TOKEN
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];

    // HANDLE COOKIE TOKEN
  } else if (req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  // HANDLE NO TOKEN
  if (!token) {
    return next(new CustomError(`No token, please login`, 401));
  }

  // HANLE TEMPERED TOKEN
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return next(new CustomError(`Invalid token, please login again`, 401));
  }

  // HANDLE USER DELETED
  const user = await User.findById(decoded.id);
  if (!user) {
    return next(new CustomError(`User not exist`, 404));
  }

  // HANDLE USER PASSWORD CHANGED AFTER TOKEN ISSUED
  if (decoded.iat < user.pwChangedAt.getTime() / 1000) {
    return next(
      new CustomError(`Password chaned recently, please login again`, 401)
    );
  }

  // ATTACH USER TO REQUEST
  req.user = user;
  next();
});
