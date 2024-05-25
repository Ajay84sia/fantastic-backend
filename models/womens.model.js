const mongoose = require('mongoose')

// Define the Womens schema
const womensSchema = new mongoose.Schema({
    endpoint: {
        type: String,
        required: true
    },
    ProductLink: {
        type: String,
        default: null,
    },
    image: {
        type: [String],
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    originalprice: {
        type: String,
        required: true
    },
    discount: {
        type: String,
    },
    offerprice: {
        type: String,
    },
    stock: {
        type: Number,
        default: 0,
    },
    rating: {
        type: Number,
        default: 2,
    }
}, {
    versionKey: false
});

// Create the womens model
const WomensModel = mongoose.model('women', womensSchema)

// Export the Womens model
module.exports = {
    WomensModel
}