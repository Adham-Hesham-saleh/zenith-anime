const mongoose = require('mongoose');
const { Schema } = mongoose;

const animeSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  type: { type: String, required: true, enum: ['Movie', 'TV Show'] },
  trending: { type: Boolean, default: false },
  img: String,
  author: String,
  year: String,
  score: String,
  synopsis: String
});

const Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;