const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB connecté : ${connection.connection.host}`);
  } catch (error) {
    console.error('Erreur de connexion MongoDB', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
