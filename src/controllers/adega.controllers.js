const garrafasService = require("../services/adega.services.js");
const mongoose = require("mongoose");

const findAllGarrafasService = async (req,res) => {
  const allGarrafas = await garrafasService.findAllGarrafasService();
  if (allGarrafas.length == 0) {
    return res.status(404).send({ message: " Garrafa não encontrado!" });
  }
  res.send(allGarrafas);
};

const findBYIdGarrafaController = async (req, res) => {
  const idParam = req.params.id;
  const chosenGarrafa = await garrafasService.findByIdGarrafaService(idParam);
  if (!chosenGarrafa) {
    return res.status(404).send({ message: "Garrafa não encontrada!" });
  }
  res.send(chosenGarrafa);
};

const creatGarrafaController = async (req, res) => {
  const garrafa = req.body; 
  const newGarrafa = await garrafasService.createGarrafaService(garrafa);
  res.status(201).send(newGarrafa);
};

const updateGarrafaController = async (req, res) => {
  const idParam = req.params.id;
  const editGarrafa = req.body;
  
  const updatedGarrafa = await animesService.updateGarrafaService(
    idParam,
    editGarrafa
  );
  res.send(updatedGarrafa);
};

const deleteGarrafaController = async (req, res) => {
  const idParam = req.params.id;

  await garrafasService.deleteGarrafaService(idParam);
  res.send({ message: "Garrafa deltada com sucessso!" });
};

module.exports = {
  findAllGarrafasService,
  findBYIdGarrafaController,
  creatGarrafaController,
  updateGarrafaController,
  deleteGarrafaController,
};
