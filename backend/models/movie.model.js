const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  imdbScore: Number,
  rottenTomatoes: Number,
  posterUrl: String,
});

module.exports = mongoose.model('Movie', movieSchema);
