# Zenith Anime — Backend

REST API for the Zenith Anime web application, built with Node.js, Express, and MongoDB.

## Endpoints

### Anime
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/animes` | Get all anime |
| GET | `/api/animes/movies` | Get movies only |
| GET | `/api/animes/tvshows` | Get TV shows only |
| GET | `/api/animes/trending` | Get trending anime |
| GET | `/api/animes/:id` | Get single anime by ID |

### Auth
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login with email and password |

## Technologies

- Node.js
- Express.js
- MongoDB + Mongoose
- bcryptjs

## Getting Started

1. Create a `.env` file in the root folder:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm run dev
   ```
   Server runs on [http://localhost:5000](http://localhost:5000)

## Team

- Adham
