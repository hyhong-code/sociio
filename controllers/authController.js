const asyncHandler = require('../utils/asyncHandler');
const CustomError = require('../utils/customError');
const User = require('../models/User');
const filterBody = require('../utils/filterBody');
const cookieTokenResponse = require('../utils/cookieTokenResponse');
const jwt = require('jsonwebtoken');
const { encodeXText } = require('nodemailer/lib/shared');

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

// @DESC    LOAD LOGGED IN USER
// @ROUTE   GET /api/v1/auth/loadme
// @ACCESS  PRIVATE
exports.loadMe = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: { user: req.user },
  });
});

// AUTHENTICATE USER
exports.protect = asyncHandler(async (req, res, next) => {
  console.log(req.headers, req.cookies);
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

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // HANDLE USER DELETED
  const user = await User.findById(decoded.id);
  if (!user) {
    return next(new CustomError(`User not exist`, 404));
  }

  // HANDLE USER PASSWORD CHANGED AFTER TOKEN ISSUED
  if (decoded.iat < user.pwChangedAt.getTime() / 1000) {
    return next(
      new CustomError(`Password chaned recently, please login again`, 400)
    );
  }

  // ATTACH USER TO REQUEST
  req.user = user;
  next();
});
