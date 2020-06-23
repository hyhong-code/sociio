const express = require('express');
const errorController = require('./controllers/errorController');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const authRouter = require('./routes/authRouter');

// MIDDLEWARES
const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(cookieParser());

// MOUNT ROUTERS
app.use('/api/v1/auth', authRouter);

// GLOBAL ERROR HANDELR
app.use('*', errorController);

module.exports = app;
