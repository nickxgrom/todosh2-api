const db = require('../../../util/db'),
    { DataTypes } = require("sequelize")

module.exports = db.define("task", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    isDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})