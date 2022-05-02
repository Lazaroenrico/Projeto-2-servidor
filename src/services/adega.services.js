const Garrafa = require("../models/Garrafa.js");

console.log(Garrafa)
const findAllGarrafasService = async () => {
  const allGarrafas = await Garrafa.find();
  return allGarrafas;
};

const findByIdGarrafaService = async (idParam) => {
  const oneGarrafa = await Garrafa.findById(idParam);
  return oneGarrafa;
};

const createGarrafaService = async (newGarrafa) => {
  const createdGarrafa = await Garrafa.create(newGarrafa);
  return createdGarrafa;
};

const updateGarrafaService = async (idParam, GarrafaEdited) => {
  const updateGarrafa = await Garrafa.findByIdAndUpdate(idParam, GarrafaEdited);
  return updateGarrafa;
};

const deleteGarrafaService = async (idParam) =>{
 return await Garrafa.findByIdAndDelete(idParam)
}

module.exports = {
  findAllGarrafasService,
  findByIdGarrafaService,
  createGarrafaService,
  updateGarrafaService,
  deleteGarrafaService,
};
