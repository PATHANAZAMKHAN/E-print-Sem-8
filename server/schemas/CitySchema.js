const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    state:{
        type:Schema.Types.ObjectId,
        ref:'states'
    }
},{
    collection:'cities'
})

module.exports = mongoose.model('cities',citySchema)