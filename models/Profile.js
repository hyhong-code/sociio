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

ProfileSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'influence',
    select: 'followers following',
  });
  next();
});

module.exports = mongoose.model('Profile', ProfileSchema);
