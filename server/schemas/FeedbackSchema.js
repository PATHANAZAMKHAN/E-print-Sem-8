const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    type:{
        type:String
    },
    title:{
        type:String
    },
    content:{
        type:String
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    vendor:{
        type:Schema.Types.ObjectId,
        ref:'vendordetails'
    },
    resolve:{
        type:Number
    },
    vendorAns:{
        type:String
    },
    adminAns:{
        type:String
    }
})

module.exports = mongoose.model('feedback',feedbackSchema)