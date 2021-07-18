const { Sequelize } = require('sequelize')

module.exports = new Sequelize('todoosh', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})