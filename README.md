# Team Movie App

This is a full-stack web application that displays team member information and manages a movie database with full CRUD functionality.

## 🏗️ Architecture

- **Backend**: Node.js + Express server
- **Frontend**: Static HTML/CSS/JavaScript (served from backend)
- **Database**: MongoDB with automatic initialization
- **Deployment**: Docker Compose

## 🚀 Quick Start

### Run with Docker Compose
```bash
docker compose up --build
```

### Access the Application
- **Main Application**: http://localhost:5000
- **Backend API**: http://localhost:5000/api
- **MongoDB**: localhost:27017

## 📊 Features

### 👥 Team Members Section
- Displays team member cards with:
  - Avatar images (base64 encoded from local files)
  - Full name
  - Nickname
  - Student ID
- Data is served via `/api/teams` endpoint

### 🎬 Movie Management Section
- **Add Movies**: Form to create new movie entries
- **View Movies**: Display all movies in card format
- **Edit Movies**: Click edit button to populate form for updates
- **Delete Movies**: Remove movies with confirmation dialog

#### Movie Data Fields:
- Title
- Year
- IMDb Score
- Rotten Tomatoes Percentage
- Poster URL

## 🔧 API Endpoints

### Teams
- `GET /api/teams` - Get all team members with avatar images

### Movies
- `GET /api/movies` - Get all movies
- `POST /api/movies` - Create new movie
- `PUT /api/movies/:id` - Update existing movie
- `DELETE /api/movies/:id` - Delete movie

## 🗄️ Database Initialization

The application automatically initializes with sample data via `init/init.js`:

### Team Members:
- กฤษดิศักดิ์ ภูมี (ไซ) - ID: 67130029
- พิชเยนทร์ เย็นศิริ (มาร์ค) - ID: 67130237

### Sample Movies:
- The Matrix (1999)
- Inception (2010)
- Interstellar (2014)
- The Dark Knight (2008)
- Parasite (2019)

## 🛠️ Technical Details

### File Structure
```
backend/
├── models/          # MongoDB schemas
├── routes/          # API endpoints
├── public/          # Static frontend files
│   ├── index.html   # Main application
│   └── avatars/     # Team member images
└── server.js        # Express server

init/
└── init.js          # Database initialization script
```

### Key Technologies
- **Express.js**: Web server and API
- **MongoDB**: Database with Mongoose ODM
- **CORS**: Cross-origin resource sharing
- **Docker**: Containerization
- **Vanilla JavaScript**: Frontend functionality

## 🔍 Troubleshooting

If the application doesn't load properly:

1. **Check containers**: Ensure all Docker containers are running
   ```bash
   docker compose ps
   ```

2. **Verify API endpoints**: Test API directly
   ```bash
   curl http://localhost:5000/api/teams
   curl http://localhost:5000/api/movies
   ```

3. **Reset database**: If data is missing, restart with fresh database
   ```bash
   docker compose down -v
   docker compose up --build
   ```

4. **Check logs**: View container logs for errors
   ```bash
   docker compose logs backend
   docker compose logs mongo
   ```

## 📝 Development Notes

- The frontend is a single HTML file with embedded CSS and JavaScript
- Avatar images are converted to base64 for display
- Movie form supports both create and update operations
- All API responses are in JSON format
- MongoDB connection uses the container name 'mongo' as hostname

---

**Enjoy using the Team Movie App!** 🎬👥