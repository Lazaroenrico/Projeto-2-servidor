const mongoose = require("mongoose");
const localURL = "mongodb://localhost:27017/adega-db"


const connectToDatabase = () => {
  mongoose
    .connect(`${localURL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MONGODB CONNECT"))
    .catch((error) => console.log(`MT BURRO! o erro é -> ${error}`));
};

module.exports = connectToDatabase;
