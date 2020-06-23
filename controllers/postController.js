const Post = require('../models/Post');
const asyncHandler = require('../utils/asyncHandler');
const CustomError = require('../utils/customError');
const QueryOptions = require('../utils/queryOptions');
const filterBody = require('../utils/filterBody');

// @DESC    CREATE A POST
// @ROUTE   POST /api/v1/posts
// @ACCESS  PRIVATE
exports.createPost = asyncHandler(async (req, res, next) => {
  // TO PREVENT USER DEFINE numLikes AND numComment
  const filteredBody = filterBody(req.body, 'text', 'location', 'hashtags');

  // ATTACH LOGGED IN USER TO POST
  filteredBody.postedBy = req.user.id;
  const post = await Post.create(filteredBody);
  res.status(201).json({
    status: 'success',
    data: { post },
  });
});

// @DESC    GET POSTS
// @ROUTE   GET /api/v1/posts
// @ACCESS  PUBLIC
exports.getPost = asyncHandler(async (req, res, next) => {
  console.log(req.query);
  const query = Post.find();
  const posts = await new QueryOptions(query, req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate().query;

  res.status(201).json({
    status: 'success',
    results: posts.length,
    data: { posts },
  });
});
