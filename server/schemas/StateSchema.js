const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    country:{
        type:Schema.Types.ObjectId,
        ref:'countries'
    }
},{
    collection:'states'
})

module.exports = mongoose.model('states',stateSchema); 