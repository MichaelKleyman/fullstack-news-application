const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: 'michaelkleyman',
    password: process.env.DATABASE_PASSWORD,
    database: 'News-App',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'michaelkleyman',
    password: null,
    database: 'News-App',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'michaelkleyman',
    password: null,
    database: 'News-App',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
