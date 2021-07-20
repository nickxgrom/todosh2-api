const TaskModel = require("./model")
const ServiceError = require("../../../util/ServiceError");

const isTaskExist = async name => {
    return !!await TaskModel.findOne({
        where: { name }
    })
}

module.exports = {
    createTask: async (name, description) => {
        if (await isTaskExist(name)) {
            throw new ServiceError(400, "Task with given name is already exist")
        }
        await TaskModel.create({
            name,
            description,
        })
    }
}