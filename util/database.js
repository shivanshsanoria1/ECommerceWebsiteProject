const Sequelize = require('sequelize');

const MYSQL_DB_NAME = process.env.MYSQL_DB_NAME;
const MYSQL_DB_USERNAME = process.env.MYSQL_DB_USERNAME;
const MYSQL_DB_PASSWORD = process.env.MYSQL_DB_PASSWORD;
const MYSQL_DB_HOST = process.env.MYSQL_DB_HOST;

const sequelize = new Sequelize(MYSQL_DB_NAME, MYSQL_DB_USERNAME, MYSQL_DB_PASSWORD, {
  dialect: 'mysql',
  host: MYSQL_DB_HOST,
  logging: false
});

module.exports = sequelize;
