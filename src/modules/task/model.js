const db = require('../../../util/db'),
    { DataTypes } = require("sequelize")

module.exports = db.define("task", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 32]
        }
    },
    description: {
        type: DataTypes.STRING,
        len: [1, 256]
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})