const mongoose = require('mongoose')

// Define the Auth schema
const authSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rawPassword: { type: String, required: true },
    gender: {
        type: String,
        enum: ['M', 'F', 'T', null],
        default: null
    },
    isAdmin: { type: Boolean, default: false },
    image: { type: String, default: null },
    mobile: { type: String, default: null }
}, {
    versionKey: false
});

// Create the Auth model
const AuthModel = mongoose.model('auth', authSchema)

// Export the Dealer model
module.exports = {
    AuthModel
}