const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorProductImage = new Schema({
    vendorProduct:{
        type:Schema.Types.ObjectId,
        ref:'vendorproducts'
    },
    vendor:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    imageUrl:{
        type:String
    }
})

module.exports = mongoose.model('vendorproductimages', vendorProductImage)