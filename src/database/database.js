const mongoose = require("mongoose");



const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MONGODB CONNECT"))
    .catch((error) => console.log(`MT BURRO! o erro é -> ${error}`));
};

module.exports = connectToDatabase;
