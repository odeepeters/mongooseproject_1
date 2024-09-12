const mongoose = require('mongoose');
require('dotenv').config(); // Ensure this line is included

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI; // Fetch the URI from environment variables
    if (!uri) {
      throw new Error('MONGO_URI is not defined in .env file');
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
