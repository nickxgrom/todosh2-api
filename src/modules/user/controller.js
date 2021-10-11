const router = require('express').Router(),
    catchError = require('../../../util/catchError'),
    UserService = require('./service'),
    baseUrl = '/auth'

//registration
router.post(`${baseUrl}/registration`, catchError(async (req, res, next) => {
    const token = await UserService.createUser(req.query.username, req.query.password)
    res.status(201).json(token)
}))

//login
router.post(`${baseUrl}/login`, catchError( async (req, res, next) => {
    const token = await UserService.logIn(req.query.username, req.query.password)
    res.status(200).json(token)
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