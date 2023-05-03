const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:'category'
    }
});

module.exports = mongoose.model('products', productSchema);