var Product = require('../src/model/Productdata');
//const { exists } = require('../src/model/Productdata');
//const { Mongoose } = require('mongoose');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');


var products = [
    new Product({
        imageUrl: "https://www.liberaldictionary.com/wp-content/uploads/2018/12/red-cabbage.jpg",
        title: 'Red cabbage',
        quantity: 1,
        price: 100
    }),
    new Product({
        imageUrl: "https://mk0nationaltodayijln.kinstacdn.com/wp-content/uploads/2019/02/national-strawberry-month-640x514.jpg",
        title: 'Strawberry',
        quantity: 1,
        price: 200
    }),
    new Product({
        imageUrl: "https://www.arcgis.com/sharing/rest/content/items/1251fa3b219f481a87cdc2185bf5be9a/resources/1575517599631.jpeg?w=2400",
        title: 'Green beans',
        quantity: 1,
        price: 90
    }),
    new Product({
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81T2i55X4gL._SL1500_.jpg",
        title: 'Cauliflower',
        quantity: 1,
        price: 100
    }),
    new Product({
        imageUrl: "https://www.fresh-market.pl/files/1968835837/brokuly_01.jpg",
        title: 'Broccoli',
        quantity: 1,
        price: 300
    }),
    new Product({
        imageUrl: "https://www.clipartkey.com/mpngs/m/13-132254_cool-cucumber-free-vegetables-clipart-fruit-names-a.png",
        title: 'Cucumber',
        quantity: 1,
        price: 80
    }),
    new Product({
        imageUrl: "https://i.pinimg.com/originals/55/3e/4b/553e4b301cace6c2a9d503bd858d11ef.jpg",
        title: 'Potato',
        quantity: 1,
        price: 100
    }),
    new Product({
        imageUrl: "https://www.netclipart.com/pp/m/20-205663_cuisine-golden-food-of-hawaii-fruit-pineapple-clipart.png",
        title: 'Pineapple',
        quantity: 1,
        price: 100
    }),
    new Product({
        imageUrl: "https://www.vippng.com/png/detail/71-714589_download-png-image-single-fruits-and-vegetables.png",
        title: 'Orange',
        quantity: 1,
        price: 200
    }),
    new Product({
        imageUrl: "https://w0.pngwave.com/png/312/397/watermelon-fruit-flavor-peeler-watermelon-png-clip-art.png",
        title: 'Watermelon',
        quantity: 1,
        price: 100
    })
];

var done = 0;
for (var i=0; i< products.length ;i++){
    //console.log(productdatas[i]);
    products[i].save(function(err,result){
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}