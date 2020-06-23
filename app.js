const express = require('express');
const errorController = require('./controllers/errorController');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');
const influenceRouter = require('./routes/influenceRouter');
const profileRouter = require('./routes/profileRouter');

// MIDDLEWARES
const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(cookieParser());

// MOUNT ROUTERS
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/influences', influenceRouter);
app.use('/api/v1/profile', profileRouter);

// GLOBAL ERROR HANDELR
app.use('*', errorController);

module.exports = app;
