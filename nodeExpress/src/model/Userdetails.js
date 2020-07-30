var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');
const Schema = mongoose.Schema;

var CheckoutSchema = new Schema({
   fname: String,
    lname: String,
    address: String,
    city: String,
    postcode: String,
    phone:Number
 });

 module.exports = mongoose.model('detailslist', CheckoutSchema, 'detailslists');
