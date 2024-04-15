//API KEY = 8ee62bb90f97ff56f5f174c8926c5aa1

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/Weather`, { useNewUrlParser: true, });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
  }

  module.exports = connectDB;