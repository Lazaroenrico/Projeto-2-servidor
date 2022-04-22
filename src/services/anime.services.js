const Anime = require("../models/Anime.js");

console.log(Anime)

const findAllAnimesService = async () => {
  const allAnimes = await Anime.find();
  return allAnimes;
};

const findByIdAnimeService = async (idParam) => {
  const oneAnime = await Anime.findById(idParam);
  return oneAnime;
};

const createAnimeService = async (newAnime) => {
  const createdAnime = await Anime.create(newAnime);
  return createdAnime;
};

const updateAnimeService = async (idParam, animeEdited) => {
  const updateAnime = await Anime.findByIdAndUpdate(idParam, animeEdited);
  return updateAnime;
};

const deleteAnimeService = async (idParam) =>{
 return await Anime.findByIdAndDelete(idParam)
}

module.exports = {
  findAllAnimesService,
  findByIdAnimeService,
  createAnimeService,
  updateAnimeService,
  deleteAnimeService,
};
