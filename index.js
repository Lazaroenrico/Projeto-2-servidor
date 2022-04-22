const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/anime.routes.js");
const connectToDatabase = require("./src/database/database.js");

const port = 3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use("/animes", routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}  `);
});

