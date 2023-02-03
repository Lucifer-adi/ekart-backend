
const mongoose = require("mongoose");
require("dotenv").config();

const connectMongoDB = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@cluster0.jejpkww.mongodb.net/e_kart?retryWrites=true&w=majority`
    
  );
};
module.exports = connectMongoDB;
