const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  handle: {
    type: String,
    trim: true,
    lowercase: true,
    unique: [true, 'A handle must be unique'],
    minlength: [5, 'A handle is at least 5 characters long'],
    maxlength: [15, 'A handle must be no more than 15 characters long'],
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
  pwChangedAt: Date,
  pwResetToken: String,
  pwResetTokenExpires: Date,
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

// HASH USER PASSWORD
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  this.pwChangedAt = new Date(Date.now() - 5000);
  next();
});

// VERIFY USER PASSWORD
UserSchema.methods.verifyPassword = async function (plain) {
  return await bcrypt.compare(plain, this.password);
};

// GENERATE JWT TOKEN
UserSchema.methods.genJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

module.exports = mongoose.model('User', UserSchema);