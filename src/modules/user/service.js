const User = require('./model')
const ServiceError = require("../../../util/ServiceError");
const jwt = require("jsonwebtoken");

async function isUserExist(username) {
    if (await User.findOne({ where: { username }})) {
        throw new ServiceError(400, 'User with this username is already exist')
    }
}

async function logIn(id, username) {
    // default algorithm hs256
    const token = await jwt.sign({
            id,
            username,
        },
        // TODO: change secret on the production and move to .env
        "todooshJwtSecret",
        { expiresIn: 60*60*24 }
    )
    return token
}

module.exports = {
    createUser: async (username, password) => {
        await isUserExist(username)
        // TODO: add hash-function to hash a password
        const user = await User.create({ username, password })
        return {
            token: await logIn(user.id, user.username),
        }
    },

    updateUsername: () => {

    },

    updatePassword: () => {

    },

    deleteUser: () => {

    },
}