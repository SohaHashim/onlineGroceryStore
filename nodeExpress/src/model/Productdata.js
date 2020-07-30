var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/shopping');
const Schema = mongoose.Schema;

var schema = new Schema({
    imageUrl: String,
    title: String,
    quantity: Number,
    price:Number
 });

 module.exports = mongoose.model('Product', schema);
 