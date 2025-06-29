db = db.getSiblingDB('team_movie_db');

db.teams.insertMany([
  {
    name: "กฤษดิศักดิ์ ภูมี",
    nickname: "ไซ",
    studentId: "67130029",
    avatar: "jane.jpg"
  },
  {
    name: "พิชเยนทร์ เย็นศิริ",
    nickname: "มาร์ค",
    studentId: "67130237",
    avatar: "john.jpg"
  }

]);

db.movies.insertMany([
  {
    title: "The Matrix",
    year: 1999,
    imdbScore: 8.7,
    rottenTomatoes: 88,
    posterUrl: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg"
  },
  {
    title: "Inception",
    year: 2010,
    imdbScore: 8.8,
    rottenTomatoes: 87,
    posterUrl: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg"
  }
  ,
  {
    title: "Interstellar",
    year: 2014,
    imdbScore: 8.6,
    rottenTomatoes: 72,
    posterUrl: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg"
  },
  {
    title: "The Dark Knight",
    year: 2008,
    imdbScore: 9.0,
    rottenTomatoes: 94,
    posterUrl: "https://m.media-amazon.com/images/I/71pox3Y2huL._AC_SY679_.jpg"
  },
  {
    title: "Parasite",
    year: 2019,
    imdbScore: 8.5,
    rottenTomatoes: 99,
    posterUrl: "https://m.media-amazon.com/images/I/71c8od1Sz9L._AC_SY679_.jpg"
  }

]);
