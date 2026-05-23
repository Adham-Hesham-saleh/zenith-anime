const mongoose = require('mongoose');
require('dotenv').config();
const Anime = require('../models/Anime');
const animes = require('../data/animeData');

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✓ Connected to MongoDB');

    await Anime.deleteMany({});
    console.log('✓ Cleared existing animes');

    await Anime.insertMany(animes);
    console.log(`✓ Seeded ${animes.length} animes into the database`);

    process.exit(0);
  } catch (err) {
    console.error('❌ Seed error:', err.message);
    process.exit(1);
  }
};

seed();