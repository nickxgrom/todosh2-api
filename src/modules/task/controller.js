const router = require("express").Router(),
    TaskService = require("./service"),
    catchError = require("../../../util/catchError")

router.post("/api/create-task", catchError( async (req, res, next) =>  {
    await TaskService.createTask(req.body.name, req.body.description, req.auth.userId)
    res.sendStatus(200)
}))

router.get('/api/tasks', catchError(async (req, res, next) => {
    res.status(200).json(await TaskService.getAllTasks(req.auth.userId))
}))

module.exports = router