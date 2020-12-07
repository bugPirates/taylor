const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Toko = new Schema(
    {
        namatoko: { type: String, required: true },
        alamat: { type: String, required: true },
        tarif: {type: Number, required: true},
    }, 
    { timestamps: true },
)

module.exports = mongoose.model('toko', Toko)