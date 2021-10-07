const taskRouter = require("./modules/task/controller"),
    UserController = require("./modules/user/controller")

module.exports = [
    taskRouter,
    UserController,
]