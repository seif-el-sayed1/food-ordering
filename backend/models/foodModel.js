const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
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
    category: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('food', foodSchema)
