const animesService = require("../services/anime.services.js");
const mongoose = require("mongoose");
const res = require("express/lib/response");

const findAllAnimesService = async () => {
  const Allanimes = await animesService.findAllAnimesService();

  if (Allanimes.length == 0) {
    return res.status(404).send({ message: " Anime não encontrado!" });
  }

  res.send(Allanimes);
};

const findBYIdAnimeController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "ID inválido!" });
  }

  const chosenAnime = await animesService.findByIdAnimeService(idParam);

  if (!chosenAnime) {
    return res.status(404).send({ message: "Anime não encontrado!" });
  }

  res.send(chosenAnime);
};

const creatAnimeController = async (req, res) => {
  const anime = req.body;

  if (
    !anime ||
    !anime.name ||
    !anime.type ||
    !anime.description ||
    !anime.image ||
    !anime.episodes
  ) {
    return res.status(400).send({
      message: "Preencha todos os dados para adicionar um novo anime",
    });
  }

  const newAnime = await animesService.createAnimeService(anime);

  res.status(201).send(newAnime);
};

const updateAnimeController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "ID inválido!" });
  }

  const editAnime = req.body;

  if (
    !editAnime ||
    !editAnime.name ||
    !editAnime.type ||
    !editAnime.description ||
    !editAnime.image ||
    !editAnime.episodes
  ) {
    return res.status(400).send({
      message: "Preencha todos os dados para editar o anime!",
    });
  }

  const UpdatedAnime = await animesService.updateAnimeService(
    idParam,
    editAnime
  );

  res.send(UpdatedAnime);
};

const deleteAnimeController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "ID inválido!" });
  }
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
