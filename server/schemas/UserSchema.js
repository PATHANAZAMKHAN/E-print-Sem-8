const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String
    },
    role:{ //The name of the field must be used in Populate function
        type:Schema.Types.ObjectId,
        ref:'roles' //The role schema name
    },
    contact:{
        type:Number
    }
},
{
    timestamps:true
});

module.exports = mongoose.model('users', userSchema);