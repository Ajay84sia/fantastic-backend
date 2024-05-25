const express = require('express')
const cors = require("cors")
const { connection } = require('./db')
const { mensRouter } = require('./routes/mens.route')
const { womensRouter } = require('./routes/womens.route')
require("dotenv").config()

const app = express()

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the Fantastic Application")
})

// app.use("/auth", authRouter)


app.use("/mens", mensRouter)
app.use("/womens", womensRouter)





app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Successfully Connected to the database server")
    } catch (error) {
        console.log(error)
        console.log("Cannot connect to the database server")
    }
    console.log(`Server is running at port ${process.env.port}`)
})