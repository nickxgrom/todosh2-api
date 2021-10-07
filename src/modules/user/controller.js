const router = require('express').Router(),
    catchError = require('../../../util/catchError'),
    UserService = require('./service'),
    baseUrl = '/auth'

//registration
router.post(`${baseUrl}/registration`, catchError(async (req, res, next) => {
    await UserService.createUser(req.query.username, req.query.password)
    res.sendStatus(201)
}))

//get auth tokens
router.get(`${baseUrl}`, catchError((req, res, next) => {

}))

//change username
router.put(`${baseUrl}`, catchError((req, res, next) => {

}))

//change password
router.put(`${baseUrl}`, catchError((req, res, next) => {

}))

//delete user
router.put(`${baseUrl}`, catchError((req, res, next) => {

}))

module.exports = router