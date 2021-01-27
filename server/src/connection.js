require('dotenv/config');

const config = require('./config/config');
const Sequelize = require('sequelize');

module.exports = new Sequelize (
    config.database.name,
    config.database.user,
    config.database.password,
    config.database.options,
);
