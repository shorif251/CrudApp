require('dotenv').config();
const express = require('express');
const CORS = require('cors');
const cookieParser = require('cookie-parser');
const { wildCardHandler, serverErrorHandler } = require('../middleware/errorHandling');

const app = express();

const userRouter = require('../router/userRouter');
const postsRouter = require('../router/postsRouter');
const adminRouter = require('../router/adminRouter');
const loginRouter = require('../router/loginRouter');
const logoutRouter = require('../router/logoutRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CORS());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello Express app');
});

// External Router
app.use('/api', userRouter);
app.use('/api', postsRouter);
app.use('/api', adminRouter);
app.use('/api', loginRouter);
app.use('/api', logoutRouter);

// make image public

app.use('/UploadServerFile', express.static('UploadServerFile'));

// invalid route error handler
app.use(wildCardHandler);

// server errors handler
app.use(serverErrorHandler);

module.exports = app;
