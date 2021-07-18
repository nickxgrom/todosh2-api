const router = require("express").Router(),
    TaskService = require("./service"),
    catchError = require("../../../util/catchError")

router.post("/task/create-task", catchError( async (req, res, next) =>  {
    await TaskService.createTask(req.body.name, req.body.description, req.body.isDone)
    res.send("ok")
}))

module.exports = router