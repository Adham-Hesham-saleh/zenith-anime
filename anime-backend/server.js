const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// === MongoDB Connection ===
console.log('Attempting to connect to MongoDB...');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✓ Connected to MongoDB'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:');
    console.error(err.message);
  });

// === Routes ===
const animeRoutes = require('./routes/animes');
const authRoutes = require('./routes/auth');
app.use('/api/animes', animeRoutes);
app.use('/api/auth', authRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Zenith backend is running! 🎌' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
});