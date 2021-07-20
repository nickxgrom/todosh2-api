const router = require("express").Router(),
    TaskService = require("./service"),
    catchError = require("../../../util/catchError")

router.post("/api/create-task", catchError( async (req, res, next) =>  {
    await TaskService.createTask(req.body.name, req.body.description)
    res.sendStatus(200)
}))

module.exports = router