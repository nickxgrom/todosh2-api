const User = require('./model')
const ServiceError = require("../../../util/ServiceError");

async function isUserExist(username) {
    if (await User.findOne({ where: { username }})) {
        throw new ServiceError(400, 'User with this username is already exist')
    }
}

module.exports = {
    createUser: async (username, password) => {
        await isUserExist(username)
        // TODO: add hash-function to hash a password
        await User.create({ username, password })
        // TODO: add function to sign and generate a token and refresh-token
        return {
            'token': `some-token-${new Date().getTime()}`,
            'refresh-token': `some-refresh-token-${new Date().getTime()}`
        }
    },

    updateUsername: () => {

    },

    updatePassword: () => {

    },

    deleteUser: () => {

    },
}