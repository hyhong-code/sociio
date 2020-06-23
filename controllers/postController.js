const Post = require('../models/Post');
const asyncHandler = require('../utils/asyncHandler');
const CustomError = require('../utils/customError');
const QueryOptions = require('../utils/queryOptions');
const filterBody = require('../utils/filterBody');
const Profile = require('../models/Profile');

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
exports.getPosts = asyncHandler(async (req, res, next) => {
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

// @DESC    GET A POST
// @ROUTE   GET /api/v1/posts/:id
// @ACCESS  PUBLIC
exports.getPost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  // HANDLE NO POSTS FOUND
  if (!post) {
    return next(new CustomError(`No post found with id ${req.params.id}`, 404));
  }

  // ---------------------------- TODO : POPULATE USER PROFILE, COMMENTS ---------------------------

  res.status(200).json({
    status: 'success',
    data: { post },
  });
});

// @DESC    UPDATE A POST
// @ROUTE   PATCH /api/v1/posts/:id
// @ACCESS  PRIVATE - owner
exports.updatePost = asyncHandler(async (req, res, next) => {
  let post = await Post.findById(req.params.id);

  // HANDLE NO POSTS FOUND
  if (!post) {
    return next(new CustomError(`No post found with id ${req.params.id}`, 404));
  }

  // HANDLE USER IS NOT THE OWNER OF POST
  if (post.postedBy.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new CustomError(`User not authorized to access this route`, 401)
    );
  }

  // UPDATE POST
  const filteredBody = filterBody(req.body, 'text', 'location', 'hashtags');
  post = await Post.findByIdAndUpdate(req.params.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: { post },
  });
});

// @DESC    DELETE A POST
// @ROUTE   DELETE /api/v1/posts/:id
// @ACCESS  PRIVATE - owner
exports.deletePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  // HANDLE NO POSTS FOUND
  if (!post) {
    return next(new CustomError(`No post found with id ${req.params.id}`, 404));
  }

  // HANDLE USER IS NOT THE OWNER OF POST
  if (post.postedBy.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new CustomError(`User not authorized to access this route`, 401)
    );
  }

  // DELETE POST
  await post.remove();

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

// @DESC    LIKE A POST
// @ROUTE   PATCH /api/v1/posts/:id/like
// @ACCESS  PRIVATE - owner
exports.likePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  // HANDLE NO POSTS FOUND
  if (!post) {
    return next(new CustomError(`No post found with id ${req.params.id}`, 404));
  }

  // HANDLE USER ALREADY LIKED POST
  const profile = await Profile.findOne({ user: req.user.id });
  if (profile.likedPosts.includes(req.params.id)) {
    return next(new CustomError(`You've already liked this post`, 400));
  }

  // REMOVE POST FROM USER'S LIKED POSTS LIST
  profile.likedPosts.unshift(req.params.id);
  await profile.save();

  // UPDATE POST LIKE COUNT
  post.numLikes += 1;
  await post.save();

  res.status(200).json({
    status: 'success',
    data: { post },
  });
});

// @DESC    UNLIKE A POST
// @ROUTE   PATCH /api/v1/posts/:id/unlike
// @ACCESS  PRIVATE - owner
exports.unlikePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  // HANDLE NO POSTS FOUND
  if (!post) {
    return next(new CustomError(`No post found with id ${req.params.id}`, 404));
  }

  // HANDLE USER NOT YET LIKED THE POST
  const profile = await Profile.findOne({ user: req.user.id });

  console.log(profile.likedPosts);
  console.log(!profile.likedPosts.includes(req.params.id));

  if (!profile.likedPosts.includes(req.params.id)) {
    return next(new CustomError(`You've not yet liked this post`, 400));
  }

  // ADD POST TO USER'S LIKED POSTS LIST
  profile.likedPosts = profile.likedPosts.filter(
    (post) => post.toString() !== req.params.id
  );
  await profile.save();

  // UPDATE POST LIKE COUNT
  post.numLikes -= 1;
  await post.save();

  res.status(200).json({
    status: 'success',
    data: { post },
  });
});
