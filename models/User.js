const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  handle: {
    type: String,
    trim: true,
    lowercase: true,
    unique: [true, 'A handle must be unique'],
    required: [true, 'A handle is required'],
    match: [/[a-z0-9_-]+/, 'A handle must only contain a-z, 0-9, _, and -'],
  },
  email: {
    type: String,
    trim: true,
    unique: [true, 'An email address must be unique'],
    required: [true, 'An email address is required'],
    validate: {
      validator: (v) => validator.isEmail(v),
      message: 'Please provide a valid email address',
    },
  },
  name: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, 'A name is required'],
    match: [/[a-zA-Z\s]+/, 'A name must only contain a-z, A-Z, and space'],
  },
  password: {
    type: String,
    required: [true, 'A password is required'],
    minlength: [6, 'A password is at least 6 characters long'],
  },

  confirmPassword: {
    type: String,
    required: [true, 'A password confirmation is required'],
    validate: {
      validator: function (v) {
        return v === this.password;
      },
      message: 'Passwords do not match',
    },
  },
  profilePic: {
    type: String,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('User', UserSchema);
