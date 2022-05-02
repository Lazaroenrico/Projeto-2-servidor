const mongoose = require("mongoose");

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "ID inválido!" });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const garrafa = req.body;
  if (
    !garrafa ||
    !garrafa.titulo ||
    !garrafa.tipo ||
    !garrafa.descricao ||
    !garrafa.foto ||
    !garrafa.preco
  ) {
    return res.status(400).send({
      message: "Preencha todos os dados para adicionar uma nova garrafa",
    });
  }
  next();
};


module.exports = {
  validId,
  validObjectBody,
};
