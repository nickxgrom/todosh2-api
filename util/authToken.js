const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'],
        token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.sendStatus(401)
    }

    jwt.verify(token, 'todoosh-secret', (err, auth) => {
        if (err) {
            return res.sendStatus(403)
        }

        req.auth = auth
    })
    next()
}