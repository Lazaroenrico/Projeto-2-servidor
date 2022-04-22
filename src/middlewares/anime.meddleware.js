const mongoose = require("mongoose");

const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "ID inválido!" });
  }

  next();
};

const validObjectBody = (req, res, next) => {
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
  next();
};


module.exports = {
  validId,
  validObjectBody,
};
