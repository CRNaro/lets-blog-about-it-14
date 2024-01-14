// My connection.js is responsible for the actual connection to the database.

const Sequelize = require('sequelize'); // Require function to import 'sequelize' for promise based Node.js ORM for MySQL.
const config = require('./config'); // Importing 'config' object from config.js file.

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        config.development.database, 
        config.development.username, 
        config.development.password, 
        {
        host: config.development.host,
        dialect: 'mysql',
        port: config.development.port
    });
}

module.exports = sequelize;