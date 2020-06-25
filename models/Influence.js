const mongoose = require('mongoose');

const InfluenceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  followers: {
    type: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
  },
  following: {
    type: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
  },
});

// POPULATE FOLLOWERS AND FOLLOWING
InfluenceSchema.pre(/^find/, function () {
  this.populate({
    path: 'followers',
    select: '-__v',
  }).populate({
    path: 'following',
    select: '-__v',
  });
});

module.exports = mongoose.model('Influence', InfluenceSchema);
