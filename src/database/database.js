const mongoose = require("mongoose");

const connectToDatabase = ()=>{
    mongoose.connect("mongodb://localhost:27017/animes-db",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
 }).then(()=> console.log("MONGODBCONNECT")).catch((error)=> console.log(`MT BURRO! o erro é ${error}`))
};

module.exports = connectToDatabase 
