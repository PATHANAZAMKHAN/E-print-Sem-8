const mongoose = require("mongoose");
const Schema = mongoose.Schema

const category = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        isActive:{
            type:Boolean,
            default:true
        }
    }
)

module.exports = mongoose.model('category', category);