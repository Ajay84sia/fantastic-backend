const express = require('express');
const { WomensModel } = require('../models/womens.model')
const womensRouter = express.Router()



womensRouter.get('/', async (req, res) => {
    try {
        const womensProducts = await WomensModel.find();
        res.status(200).json({ status: true, data: womensProducts });
    } catch (err) {
        console.error('Error retrieving products:', err);
        res.status(500).json({ message: 'Failed to retrieve products' });
    }
});






// womensRouter.post('/add', async (req, res) => {
//     try {
//       const products = req.body; // Expecting an array of products
//       if (!Array.isArray(products)) {
//         return res.status(400).json({ message: 'Input data should be an array of products' });
//       }

//       const result = await WomensModel.insertMany(products);
//       res.status(201).json(result);
//     } catch (err) {
//       console.error('Error inserting products:', err);
//       res.status(500).json({ message: 'Failed to insert products' });
//     }
//   });





module.exports = {
    womensRouter
}