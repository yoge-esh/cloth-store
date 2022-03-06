const mongo = require('mongoose');

const ProductSchema = new mongo.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    categories: {
        type: Arrya
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
    },
    size: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongo.model('Product', ProductSchema);