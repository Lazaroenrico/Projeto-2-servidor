const router = require("express").Router();
const controllerAnimes = require("../controllers/anime.controllers.js");
const {
  validId,
  validObjectBody,
} = require("../middlewares/anime.meddleware.js");

router.get("/all-animes", controllerAnimes.findAllAnimesService);
router.get("/one-anime/:id", validId, controllerAnimes.findBYIdAnimeController);
router.post(
  "/create-anime",
  validObjectBody,
  controllerAnimes.creatAnimeController
);
router.put(
  "/update-anime/:id",
  validId,
  validObjectBody,
  controllerAnimes.updateAnimeController
);
router.delete(
  "/delete-anime/:id",
  validId,
  controllerAnimes.deleteAnimeController
);

module.exports = router;
