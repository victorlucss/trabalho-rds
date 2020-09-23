'use strict';

const repository = require('./UserRepository')

module.exports = {
    list: async function (req, res) {

        const users = await repository.list()

        res.send(users)
    },
    create: async function (req, res) {},
    update: async function (req, res) {},
    delete: async function (req, res) {}
}