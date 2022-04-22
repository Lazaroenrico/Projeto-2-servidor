const animesService = require("../services/anime.services.js");
const mongoose = require("mongoose");

const findAllAnimesService = async (req,res) => {
  const Allanimes = await animesService.findAllAnimesService();
  if (Allanimes.length == 0) {
    return res.status(404).send({ message: " Anime não encontrado!" });
  }
  res.send(Allanimes);
};

const findBYIdAnimeController = async (req, res) => {
  const idParam = req.params.id;
  const chosenAnime = await animesService.findByIdAnimeService(idParam);
  if (!chosenAnime) {
    return res.status(404).send({ message: "Anime não encontrado!" });
  }
  res.send(chosenAnime);
};

const creatAnimeController = async (req, res) => {
  const anime = req.body;
  const newAnime = await animesService.createAnimeService(anime);
  res.status(201).send(newAnime);
};

const updateAnimeController = async (req, res) => {
  const idParam = req.params.id;
  const editAnime = req.body;
  
  const updatedAnime = await animesService.updateAnimeService(
    idParam,
    editAnime
  );
  res.send(updatedAnime);
};

const deleteAnimeController = async (req, res) => {
  const idParam = req.params.id;

  await animesService.deleteAnimeService(idParam);
  res.send({ messsage: "Anime deltado com sucessso!" });
};

module.exports = {
  findAllAnimesService,
  findBYIdAnimeController,
  creatAnimeController,
  updateAnimeController,
  deleteAnimeController,
};
