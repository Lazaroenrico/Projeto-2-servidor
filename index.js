const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/adega.routes.js");
const connectToDatabase = require("./src/database/database.js");

const port = 3333;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use("/adega", routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}  `);
});

