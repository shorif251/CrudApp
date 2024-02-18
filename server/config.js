// database connestion
const mongoose = require('mongoose');
// const {dataBaseUsername, databasePassword} = process.env;

const connestingMongoDb = async () => {
try {
    mongoose.connect('put mongodb atlas url here');
    console.log('Database is connected successfully');
} catch (err) {
    console.log('Database Failed to connect');
}
};

module.exports = connestingMongoDb;
