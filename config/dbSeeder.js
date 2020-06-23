require('dotenv').config({ path: `${__dirname}/config.env` });
const fs = require('fs');
const connectDB = require('./db');
// Import Model......
const User = require('../models/User');
const Influence = require('../models/Influence');

// Connect to DB
connectDB();

// Read data here......
const userData = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, 'utf8')
);
const influenceData = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/influence.json`, 'utf8')
);

// Import data to DB
const importData = async () => {
  try {
    // Model.create()......
    await User.create(userData);
    // await Influence.create(influenceData);
    console.log('Data imported...');
  } catch (error) {
    console.error(error);
  }
  process.exit();
};

// Delete data from DB
const destroyData = async () => {
  try {
    // Model.deleteMany()......
    await User.deleteMany();
    await Influence.deleteMany();
    console.log('Data destroyed...');
  } catch (error) {
    console.error(error);
  }
  process.exit();
};

// Controls
if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  destroyData();
}
