const swaggerGenerator = require('swagger-autogen')()

const doc = {
    info: {
        title: 'Todoosh api',
        description: 'Api "Еще одного тудушника"',
        host: 'localhost:8080',
        schemes: ['http']
    }
}

const outputFile = './output-api.json'
const endPoints = [
    './src/modules/task/controller.js',
    './src/modules/user/controller.js'
]

swaggerGenerator(outputFile, endPoints, doc)