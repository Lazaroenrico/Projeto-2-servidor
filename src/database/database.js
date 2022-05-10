const mongoose = require("mongoose");
const remoteUrl = 'mongodb+srv://root:root@adega.euqou.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
 const localUrl =   '';  
 function connectToDatabase() { mongoose    
   .connect(`${remoteUrl}`, {      
      useNewUrlParser: true,       
      useUnifiedTopology: true,     
    })     .then(() => {       
      console.log('MongoDB conectado');    
     })     
     .catch((err) => {       
       return console.log(`Erro na conexão com o banco : ${err}`);     
      }); }  module.exports = connectToDatabase;

/*
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
*/
