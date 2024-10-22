require('dotenv').config()

module.exports = {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    logging: false,
    dialect: 'postgres',
    autoreconnect: true
}