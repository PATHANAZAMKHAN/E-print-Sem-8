const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerAddress = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    address:{
        type:String
    },
    state:{
        type:Schema.Types.ObjectId,
        ref:'states'
    },
    city:{
        type:Schema.Types.ObjectId,
        ref:'cities'
    },
    pincode:{
        type:Number,
        required:true
    },
    isDefault:{
        type:Boolean,
        default:true
    }
})

module.exports = mongoose.model('customerdetails', customerAddress)