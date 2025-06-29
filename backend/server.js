const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const teamRoutes = require('./routes/team.routes');
const movieRoutes = require('./routes/movie.routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Serve HTML/JS frontend from public folder
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api/teams', teamRoutes);
app.use('/api/movies', movieRoutes);

mongoose.connect('mongodb://mongo:27017/team_movie_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
