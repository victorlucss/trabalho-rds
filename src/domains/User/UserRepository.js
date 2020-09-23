'use strict';

const { user } = require('../../models')

module.exports = {
    list: async function (req, res) {
        return user.findAll()
    },
    create: async function (req, res) {},
    update: async function (req, res) {},
    delete: async function (req, res) {}
}