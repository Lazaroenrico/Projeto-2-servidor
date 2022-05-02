const mongoose = require("mongoose");

const GarrafaSchema = new mongoose.Schema({
  titulo: {
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
  preco: {
    type: String,
    require: true,
  },
});

const Garrafa = mongoose.model("adega", GarrafaSchema);

module.exports = Garrafa;
