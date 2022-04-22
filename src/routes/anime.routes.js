const router = require("express").Router();
const controllerAnimes = require("../controllers/anime.controllers.js");


router.get("/all-animes", controllerAnimes.findAllAnimesService);
router.get("/one-anime/:id", controllerAnimes.findBYIdAnimeController);
router.post("/create-anime", controllerAnimes.creatAnimeController);
router.put("/update-anime/:id", controllerAnimes.updateAnimeController);
router.delete("/delete-anime/:id", controllerAnimes.deleteAnimeController);


module.exports = router;
