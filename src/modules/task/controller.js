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

router.put('/api/task/:id', catchError(async (req, res, next) => {
    await TaskService.updateTask(req.params.id, req.body.name, req.body.description, req.body.isDone, req.auth.userId)
    res.sendStatus(204)
}))

router.delete('/api/task/:id', catchError(async (req, res, next) => {
    await TaskService.deleteTask(req.params.id, req.auth.userId)
    res.sendStatus(204)
}))

module.exports = router