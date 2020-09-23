const bodyParser = require("body-parser")
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express();

require('dotenv').config()

app.use(morgan("tiny"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

const userRoute = require("./src/domains/User/UserRoute")
app.use('/user', userRoute(express.Router()))

app.listen(4000)

console.log("Application listening on port 4000")