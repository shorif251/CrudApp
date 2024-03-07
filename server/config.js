// database connection
const mongoose = require('mongoose');

const { DatabaseUserName, DatabasePassword } = process.env;

const connectingMongoDb = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${DatabaseUserName}:${DatabasePassword}@practiceprojects.hzsoqux.mongodb.net/SyedSocialDB`);
    console.log('Database is connected successfully');
  } catch (err) {
    console.log('Database Failed to connect');
  }
};

module.exports = connectingMongoDb;
