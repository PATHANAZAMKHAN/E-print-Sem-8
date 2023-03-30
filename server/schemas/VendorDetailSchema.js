const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VendorDetailSchema = new Schema({
    name:{
        type:String
    },
    address:{
        type:String
    },
    country:{
        type:Schema.Types.ObjectId,
        ref:'countries'
    },
    state:{
        type:Schema.Types.ObjectId,
        ref:'states'
    },
    city:{
        type:Schema.Types.ObjectId,
        ref:'cities'
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    pincode:{
        type:Number,
        required:true
    },
    contactNumber:{
        type:Number,
        required:true
    },
    customerSupportNumber:{
        type:Number
    },
    feedbackEmail:{
        type:String
    }
})

module.exports = mongoose.model('vendordetails',VendorDetailSchema)