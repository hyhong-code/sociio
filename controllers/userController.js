const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');
const CustomError = require('../utils/customError');
const QueryOptions = require('../utils/queryOptions');

// @DESC    GET ALL USERS
// @ROUTE   GET /api/v1/users
// @ACCESS  PUBLIC
exports.getUsers = asyncHandler(async (req, res, next) => {
  const query = User.find();

  // ENABLE QUERY OPTIONS
  const users = await new QueryOptions(query, req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate().query;

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: { users },
  });
});

// @DESC    GET A USER
// @ROUTE   GET /api/v1/users/:id
// @ACCESS  PUBLIC
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  // HANDLE USER NOT EXISTS
  if (!user) {
    return next(new CustomError(`No user with id ${req.params.id}`, 404));
  }

  res.status(200).json({
    status: 'success',
    data: { user },
  });
});
