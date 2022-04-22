const mongoose = require("mongoose");

const AnimeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  episodes: {
    type: Number,
    require: true,
  },
});

const Anime = mongoose.model("animes", AnimeSchema);

module.exports = Anime;
