require('dotenv').config({ path: `${__dirname}/config/config.env` });
const connectDB = require('./config/db');
const app = require('./app');

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server up on port ${PORT} in ${process.env.NODE_ENV} mode.`)
);
