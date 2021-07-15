const express = require('express'),
     app = express(),
    PORT = process.argv[2] || 8080,
    bodyParser = require('body-parser'),
    db = require('./util/db'),
    ServiceError = require('./util/ServiceError');

app.use(bodyParser.json())

app.use( (err, req, res, next) => {
    if (err instanceof ServiceError) {
        res.status(err.statusCode).send(err.message)
    } else next(err)
} )

app.listen(PORT, async () => {
    await db.sync()
    console.log(`Server listening http://localhost:${PORT}`)
})