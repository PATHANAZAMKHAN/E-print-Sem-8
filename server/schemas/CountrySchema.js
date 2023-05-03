const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    background:true
  },
},{
    collection:'countries'
});

module.exports = mongoose.model("countries", CountrySchema);
