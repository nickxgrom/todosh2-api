const TaskModel = require("./model")
const ServiceError = require("../../../util/ServiceError");

const isTaskExist = async (name, userId) => {
    return !!await TaskModel.findOne({
        where: { name, userId }
    })
}

module.exports = {
    createTask: async (name, description, userId) => {
        if (await isTaskExist(name, userId)) {
            throw new ServiceError(400, "Task with given name is already exist")
        }
        await TaskModel.create({
            name,
            description,
            userId
        })
    },

    getAllTasks: async (userId) => {
        return await TaskModel.findAll({ where: { userId } })
    },

    updateTask: async (taskId, name, description, isDone, userId) => {
        if (!await TaskModel.findOne({ where: {id: taskId, userId} })) {
            throw new ServiceError(404, 'Task is not exist')
        }

        await TaskModel.update({ name, description, isDone }, { where: {id: taskId}} )
    }
}