const app = require('./app/app');
const connectingMongoDb = require('./config');

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
  await connectingMongoDb();
});
