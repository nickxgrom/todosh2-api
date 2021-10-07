const db = require('../../../util/db'),
    { DataTypes } = require('sequelize')

module.exports = db.define("user", {
    username: {
        allowNull: false,
        type: DataTypes.STRING,
        len: [1, 32]
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
        len: [4, 512]
    }
})