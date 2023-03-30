const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorProduct = new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'products'
    },
    vendor:{
        type:Schema.Types.ObjectId,
        ref:'vendordetails'
    },
    qty:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('vendorproducts',vendorProduct)