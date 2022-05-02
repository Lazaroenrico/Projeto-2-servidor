const router = require("express").Router();
const controllerAdega = require("../controllers/adega.controllers.js");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const {
  validId,
  validObjectBody,
} = require("../middlewares/adega.meddleware.js");

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get("/all-garrafas", controllerAdega.findAllGarrafasService);
router.get("/one-garrafa/:id", validId, controllerAdega.findBYIdGarrafaController);
router.post(
  "/create-garrafa",
  validObjectBody,
  controllerAdega.creatGarrafaController
);
router.put(
  "/update-garrafa/:id",
  validId,
  validObjectBody,
  controllerAdega.updateGarrafaController
);
router.delete(
  "/delete-garrafa/:id",
  validId,
  controllerAdega.deleteGarrafaController
);

module.exports = router;
