var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');
const Schema = mongoose.Schema;

var CartSchema = new Schema({
   imageUrl: String,
    title: String,
    quantity: Number,
    price:Number
 });

 module.exports = mongoose.model('shopping', CartSchema, 'cartlist');
