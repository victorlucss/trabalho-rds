'use strict';

const controller = require('./UserController')

module.exports = function (app) {

    app.post('/auth', controller.login)
    app.get('/', controller.list)
    app.post('/', controller.create)
    app.put('/:id', controller.update)
    app.delete('/:id', controller.delete)

    return app

}