const express = require('express');
const { MensModel } = require('../models/mens.model')
const mensRouter = express.Router()



mensRouter.get('/', async (req, res) => {
    try {
        const mensProducts = await MensModel.find();
        res.status(200).json({ status: true, data: mensProducts });
    } catch (err) {
        console.error('Error retrieving products:', err);
        res.status(500).json({ message: 'Failed to retrieve products' });
    }
});





// mensRouter.post('/add', async (req, res) => {
//     try {
//       const products = req.body; // Expecting an array of products
//       if (!Array.isArray(products)) {
//         return res.status(400).json({ message: 'Input data should be an array of products' });
//       }

//       const result = await MensModel.insertMany(products);
//       res.status(201).json(result);
//     } catch (err) {
//       console.error('Error inserting products:', err);
//       res.status(500).json({ message: 'Failed to insert products' });
//     }
//   });






module.exports = {
    mensRouter
}