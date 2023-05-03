const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },

    vendorProduct:{
        type:Schema.Types.ObjectId,
        ref:'vendorproducts'
    },

    qty:{
        type:Number
    }
},
{
    timestamps:true
});

module.exports = mongoose.model('cart', cartSchema);