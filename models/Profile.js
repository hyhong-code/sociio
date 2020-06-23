const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    bio: {
      type: String,
      maxlengh: 140,
    },
    location: {
      type: [Number],
      validate: {
        validator: (v) => v.length === 0 || v.length === 2,
        message: 'Location must be in the format of [lat, lng]',
      },
    },
    likedPosts: {
      type: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Post',
        },
      ],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// VIRTUAL POPULATE FOLLOWERS AND FOLLOWING
ProfileSchema.virtual('influence', {
  ref: 'Influence',
  localField: 'user',
  foreignField: 'user',
  justOne: true,
});

// VIRTUAL POPULATE POSTS
ProfileSchema.virtual('posts', {
  ref: 'Post',
  localField: 'user',
  foreignField: 'postedBy',
  justOne: false,
});

// VIRTUAL POPULATES
ProfileSchema.virtual('comments', {
  ref: 'Comment',
  localField: 'user',
  foreignField: 'commentedBy',
  justOne: false,
});

ProfileSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'influence',
    select: '-__v',
  })
    .populate({
      path: 'user',
      select: '-__v',
    })
    .populate({
      path: 'posts',
      select: '-__v',
    })
    .populate({
      path: 'comments',
      select: '-__v',
    });
  next();
});

module.exports = mongoose.model('Profile', ProfileSchema);
