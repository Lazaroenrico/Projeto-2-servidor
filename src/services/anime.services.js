const Animes = require("../models/Anime.js");

const findAllAnimesService = async () => {
  const allAnimes = await Animes.find();
  return allAnimes;
};

const findByIdAnimeService = async (idParam) => {
  const oneAnime = await Animes.findById(idParam);
  return oneAnime;
};

const createAnimeService = async (newAnime) => {
  const createdAnime = await animeCreated.create(newAnime);
  return createdAnime;
};

const updateAnimeService = async (idParam, animeEdited) => {
  const updateAnime = await Animes.findByIdAndUpdate(idParam, animeEdited);
  return updateAnime;
};

const deleteAnimeService = async (idParam) =>{
 return await Animes.findByIdAndDelete(idParam)
}

module.exports = {
  findAllAnimesService,
  findByIdAnimeService,
  createAnimeService,
  updateAnimeService,
  deleteAnimeService,
};
