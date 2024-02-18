require('dotenv').config();
const express = require('express');
const { wildCardHandler, serverErrorHandler } = require('../middleware/errorHandling');

const app = express();

const userRouter = require('../router/userRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello Express app');
});

// External Router
app.use('/api', userRouter);

// invalid route error handler
app.use(wildCardHandler);

// server errors handler
app.use(serverErrorHandler);

module.exports = app;
