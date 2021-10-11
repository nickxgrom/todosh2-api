const User = require('./model')
const ServiceError = require("../../../util/ServiceError");
const jwt = require("jsonwebtoken");

async function isUserExist(username) {
    return Boolean(await User.findOne({ where: { username }}))
}

async function signJwt(id, username) {
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
        if (await isUserExist(username)) {
            throw new ServiceError(400, 'User with given username is already exist')
        }
        // TODO: add hash-function to hash a password
        const user = await User.create({ username, password })
        return {
            token: await signJwt(user.id, user.username),
        }
    },

    logIn: async (username, password) => {
        const user = await User.findOne( { where: { username } } )
        if (user) {
            // TODO: optional operator doesn't work, 'cause node 10. add hash-function
            if (user.password === password) {
                return { token: await signJwt(user.id, user.username) }
            }
        }
        throw new ServiceError(404, "Wrong login or password")
    },

    updateUsername: () => {

    },

    updatePassword: () => {

    },

    deleteUser: () => {

    },
}