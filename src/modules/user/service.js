const User = require('./model')

module.exports = {
    createUser: async (username, password) => {
        await User.create({ username, password })
    },

    updateUsername: () => {

    },

    updatePassword: () => {

    },

    deleteUser: () => {

    },
}