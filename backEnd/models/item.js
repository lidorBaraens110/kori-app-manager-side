
const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const itemScheme = new Scheme({
    type: { type: String, required: true },
    bodyBuild: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    newPrice: { type: Number },
    sizes: { type: Array, required: true },
    images: { type: Array, required: true },
    date: { type: Date, required: true }
},
    {
        timestamps: true

    }
)

const Item = mongoose.model('Item', itemScheme);

module.exports = Item;