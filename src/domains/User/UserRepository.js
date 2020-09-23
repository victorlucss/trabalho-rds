'use strict';

const { User } = require('../../models')
const bcrypt = require('bcryptjs')

module.exports = {
    login: async function (data) {
        const { email, password } = data

        if (!email || !password) throw new Error("Must have e-mail and password")

        const foundUserMail = await this.list({ email })

        if (foundUserMail.length === 0) throw new Error("User with e-mail not found")

        const user = foundUserMail[0]

        if (bcrypt.compareSync(password, user.password)) {
            return "O pai tá ON"
        }
        
        throw new Error("E-mail or password incorrect")

    },
    list: async function (params) {
        const { email } = params

        const queryOptions = {
            where: {}
        }

        if (email) {
            queryOptions.where.email = email
        }

        return User.findAll(queryOptions)
    },
    create: async function (data) {
        const { email, password } = data

        data.password = bcrypt.hashSync(data.password, 8)

        if (!email || !password) throw new Error("Must have e-mail and password")

        const foundUserMail = await this.list({ email })

        if (foundUserMail.length > 0) throw new Error("Already have User with this e-mail")

        return User.create(data)
    },
    update: async function (data, id) {
        const foundUser = await User.findByPk(id)

        if (!foundUser) throw new Error("User not found")

        delete data.password

        return User.update(data, {
            where: {
                id
            }
        })
    },
    delete: async function (id) {
        const foundUser = await User.findByPk(id)

        if (!foundUser) throw new Error("User not found")

        return User.destroy({
            where: {
                id
            }
        })
    }
}