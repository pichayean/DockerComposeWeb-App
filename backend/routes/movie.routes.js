const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model');

// Read all
router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// Create
router.post('/', async (req, res) => {
  const newMovie = new Movie(req.body);
  await newMovie.save();
  res.status(201).json(newMovie);
});

// Update
router.put('/:id', async (req, res) => {
  const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedMovie);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
