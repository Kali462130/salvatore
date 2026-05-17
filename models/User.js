const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  identifierClient: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  secretCode: {
    type: String,
    required: true
  },
  rememberId: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
