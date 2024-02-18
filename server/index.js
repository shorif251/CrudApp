const app = require('./app/app');
// const connestingMongoDb = require('./config')

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}/`);
    // await connestingMongoDb()
});
