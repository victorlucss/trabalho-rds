'use strict';

const repository = require('./UserRepository')

module.exports = {
    login: async function (req, res) {
        try {
            const user = await repository.login(req.body)
    
            return res.send(user)
        } catch (error) {
            return res.status(400).send({
                message: error.message
            })
        }
    },
    list: async function (req, res) {
        try {
            const users = await repository.list(req.query)
    
            return res.send(users)
        } catch (error) {
            return res.send(error)
        }
    },
    create: async function (req, res) {
        try {
            const user = await repository.create(req.body)
    
            return res.status(201).send(user)
        } catch (error) {
            console.log(error);
            return res.status(400).send({
                message: error.message
            })
        }
    },
    update: async function (req, res) {
        try {
            const user = await repository.update(req.body, req.params.id)
    
            return res.send(user)
        } catch (error) {
            console.log(error);
            return res.status(400).send({
                message: error.message
            })
        }
    },
    delete: async function (req, res) {
        try {
            await repository.delete(req.params.id)
    
            return res.status(204);
        } catch (error) {
            console.log(error);
            return res.status(400).send({
                message: error.message
            })
        }
    }
}