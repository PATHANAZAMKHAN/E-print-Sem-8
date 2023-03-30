const mongoose = require('mongoose');
const Schema = mongoose.Schema

const RolesSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    status:{
        type:Boolean,
        default:true
    }
})

module.exports = mongoose.model('roles', RolesSchema); //The name you define here must be used in userSchema in the 'ref' of role schema. 