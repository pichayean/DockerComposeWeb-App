const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: String,
  nickname: String,
  studentId: String,
  avatar: String, // filename only
});

module.exports = mongoose.model('Team', teamSchema);
