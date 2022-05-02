const mongoose = require("mongoose");


const localURL = "mongodb+srv://root:root@adega.euqou.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


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
