const express = require('express');
const { AuthModel } = require('../models/auth.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authRouter = express.Router()




authRouter.post("/register", async (req, res) => {
    //Logic
    const { name, username, email, password, } = req.body
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            // Store hash in your password DB.
            const auth = new AuthModel({ name, username, email, rawPassword: password, password: hash })
            await auth.save()
            res.status(200).send({ "message": "Registration Successfull!", status: 200 })
        });

    } catch (err) {
        res.status(400).send({ "err": err.message })
    }

})


authRouter.post("/login", async (req, res) => {
    //Logic
    const { email, password } = req.body
    try {
        const dealer = await DealerModel.findOne({ email })
        if (dealer) {
            bcrypt.compare(password, dealer.password, (err, result) => {
                // result == true
                if (result) {
                    const token = jwt.sign({ dealerID: dealer._id }, "attryb");
                    res.status(200).send({ "msg": "Login Succesfull", token, name: dealer.name })
                } else {
                    res.status(200).send({ "msg": "Wrong Credentials!!!" })
                }
            });

        } else {
            res.status(200).send({ "msg": "Wrong Credentials!!!" })
        }
    } catch (error) {
        res.status(400).send({ "err": err.message })
    }
})

module.exports = {
    authRouter
}