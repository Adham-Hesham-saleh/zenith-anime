const express = require('express');
const router = express.Router();
const Anime = require('../models/Anime');

// GET /api/animes  — all animes
router.get('/', async (req, res) => {
  try {
    const animes = await Anime.find();
    res.json(animes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/animes/trending  — trending animes only
// (Must come BEFORE the /:id route)
router.get('/trending', async (req, res) => {
  try {
    const animes = await Anime.find({ trending: true });
    res.json(animes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/animes/movies  — movies only
router.get('/movies', async (req, res) => {
  try {
    const animes = await Anime.find({ type: 'Movie' });
    res.json(animes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/animes/tvshows  — TV shows only
router.get('/tvshows', async (req, res) => {
  try {
    const animes = await Anime.find({ type: 'TV Show' });
    res.json(animes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/animes/:id  — single anime by its id field
router.get('/:id', async (req, res) => {
  try {
    const anime = await Anime.findOne({ id: parseInt(req.params.id) });
    if (!anime) return res.status(404).json({ error: 'Anime not found' });
    res.json(anime);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;