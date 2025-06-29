# Team Movie App

This is a full-stack web application with the following features:

- 👥 Team members displayed at the top with avatar cards
- 🎬 Movie database with full CRUD functionality
- Backend: Node.js + Express
- Frontend: ReactJS (Vite)
- Database: MongoDB with initial seed
- Deployment: Docker Compose

---

## 🧪 Local Development

### 1. Run with Docker
```bash
docker compose up --build
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api/movies
- MongoDB: port 27017

---

## 🔁 Initial Data Setup

MongoDB is initialized automatically using the script in:

```
init/init.js
```

This script inserts:

### 👥 Team Members:
- John Doe (Johnny)
- Jane Smith (Janey)

### 🎬 Movies:
- The Matrix (1999)
- Inception (2010)

These records will be available right after the first `docker compose up`.

---

## 🛠 Features

### Team Cards (Top)
- Avatar
- Full Name
- Nickname
- Student ID

### Movie CRUD (Bottom)
- Title, Year, IMDb, Rotten Tomatoes, Poster
- Add / Edit / Delete

---

## 🧩 Tips

If no data shows on the frontend:

1. Make sure MongoDB container starts properly
2. Confirm `/api/teams` and `/api/movies` return data (via browser or curl)
3. Try `docker compose down -v` and then `docker compose up --build` again (to re-trigger Mongo init)

---

Enjoy!
