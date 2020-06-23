const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    profilePic: {
      type: String,
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

ProfileSchema.virtual('posts', {
  ref: 'Post',
  localField: 'user',
  foreignField: 'postedBy',
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
    });
  next();
});

ProfileSchema.pre(/findByIdAnd/, function (next) {});

module.exports = mongoose.model('Profile', ProfileSchema);
