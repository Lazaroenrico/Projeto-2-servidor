const animesService = require("../services/anime.services.js")
const mongoose = require("mongoose");

const findAllAnimesController =  async (req, res) => {
    const idParam = req.params.id;
  
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      res
        .status(400)
        .send({ message: 'ID inválido!' });
      return;
    }
  
    const chosenAnime = await animesService.findByIdAnimeService(idParam);
  
    if (!chosenAnime) {
      return res.status(404).send({ message: 'Anime não encontrado!' });
    }
  
    res.send(chosenAnime);

}

module.exports = {
    findAllAnimesController,
}
