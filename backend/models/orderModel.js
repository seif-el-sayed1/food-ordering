const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId : {
        type: String,
        require: true
    },
    clientName: {
        type : String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: true
    },
    date: {
        type: String,
        default: new Date().toLocaleString(),
        require: true
    },
    status: {
        type: String,
        default: "Preparing the order",
        require: true
    },
    order: {
        type: Array,
        require: true
    },
    payment: {
        type: Boolean,
        default: false,
        required: true,
    }
})

module.exports = mongoose.model('order', orderSchema)
