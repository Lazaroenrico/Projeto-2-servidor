const mongoose = require("mongoose");

const AnimeSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  tipo: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  foto: {
    type: String,
    require: true,
  },
  episodios: {
    type: Number,
    require: true,
  },
});

const Anime = mongoose.model("animes", AnimeSchema);

module.exposts = Anime;
