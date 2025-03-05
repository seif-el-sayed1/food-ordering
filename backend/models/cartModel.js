const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    productId: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    count : {
        type: Number,
        default: 1
    }
})

module.exports = mongoose.model('carts', cartSchema)
