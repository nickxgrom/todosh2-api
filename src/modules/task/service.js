const TaskModel = require("./model")

module.exports = {
    createTask: async (name, description, isDone) => {
        await TaskModel.create({
            name,
            description,
            isDone
        })
    }
}