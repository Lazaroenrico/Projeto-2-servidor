const Animes = require("../models/Anime.js")

const findAllAnimesService = async () => {
    const animes = await Animes.find()
}

const findByIdAnimeService = async (id) => {
    const anime = await Animes.findById(id);
    return anime;
}

module.exports = {
    findAllAnimesService,
    findByIdAnimeService,
  };
