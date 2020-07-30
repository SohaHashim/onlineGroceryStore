const express = require('express');
const Product = require('./src/model/Productdata');
const cart = require('./src/model/Cartdata');
const User = require('./src/model/User');
const userdetails = require('./src/model/Userdetails');
const mongoose = require('mongoose');
const cors = require('cors');
var bodyparser =require('body-parser');
const jwt = require('jsonwebtoken');
var app = new express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/shopping');

app.use(bodyparser.json())

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if(token === 'null'){
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token,'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized request');
    }
    req.userId = payload.subject;
    next();
}

app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION")
    console.log("entered products");
   //var products = Product.find();
   var products = [];
   Product.find()
            .then(function(products){
                res.send(products);
                console.log(products);
            })
});

app.get('/singleproduct/:id',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION")
    console.log("entered single product");
   //var products = Product.find();
   const id=req.params.id;
   console.log(id + " id current");
   Product.findOne({_id:id})
   .then((product=>{
       console.log(product);
       res.send(product);
   }))
  
});


app.post('/insert',verifyToken,function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION")
    console.log("inserting into cart DB at server");
    console.log(req.body);

    console.log("price: " +req.body.product.price);
    console.log("quantity:"+req.body.product.quantity);
    var products = {
        imageUrl : req.body.product.imageUrl,
        title : req.body.product.title,
        quantity : req.body.product.quantity,
        price : req.body.product.price,
    }
    var cartlist = new cart(products);
    cartlist.save();
 });

 app.post('/addproducts',verifyToken,function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION")
    console.log("inserting into product DB at server");
    console.log(req.body);

    console.log("price: " +req.body.product.price);
    console.log("quantity:"+req.body.product.quantity);
    var product = {
        imageUrl : req.body.product.imageUrl,
        title : req.body.product.title,
        quantity : req.body.product.quantity,
        price : req.body.product.price,
    }
    var products = new cart(product);
    products.save();
 });


 app.post('/insertcheckout',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION")
    console.log("inserting into details DB at server");
    console.log(req.body);

    
    var users = {
        fname : req.body.user.fname,
        lname : req.body.user.lname,
        address : req.body.user.address,
        city : req.body.user.city,
        postcode : req.body.user.postcode,
        phone : req.body.user.phone
       
    }
    var detailslist = new userdetails(users);
    detailslist.save();
 });

 app.get('/cartproducts',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION")
    console.log("entered cart products");
   //var products = Product.find();
   var products = [];
   cart.find()
            .then(function(products){
                res.send(products);
                console.log(products);
            })
});

app.get('/checkoutdisplay',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION")
    console.log("sending checkout display");
   var checkouts = [];
   userdetails.find()
            .then(function(checkouts){
                res.send(checkouts);
                console.log(checkouts);
            })
});

app.post('/delete',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION")
    console.log(req.body);
    var id = req.body.id;
    console.log(id+ "id get");
    cart.deleteOne({_id : id})
    .then(products=>{
        console.log(products);
    })
 })

 app.get('/edit/:id',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION")
    const id=req.params.id;
    console.log(id + " id in edit");
    cart.findOne({_id:id})
    .then((products=>{
        console.log(products);
        res.send(products);
    }))
    });
   
app.put('/update/:id',(req,res)=>{
    console.log("entered update in server side");
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION")
    const id=req.params.id;
    console.log(id +"id in update");
    console.log(req.body);
    item={
               
        //imageUrl : req.body.product.imageUrl,
        title : req.body.product.title,
        quantity : req.body.product.quantity,
        price : req.body.product.price
    }
    //var product = new ProductData(item);
    console.log(item);
    //if(item.productId!=null){
        //ProductData.findByIdAndUpdate({_id:id},{"$set":{productId:item.productId}})
        cart.findByIdAndUpdate(id,item)
        .then((cartlist)=>{
            cartlist.save();
            console.log("Updated successfully");
        })
        //}
    
    })


 app.post('/register',(req,res)=>{
    let userData = req.body;
    let user = new User(userData);
    user.save((err,registeredUser)=>{
        if(err){
            console.log(err);
        }else {
           let payload = {subject:user._id};
           let token = jwt.sign(payload,'secretKey');
           res.status(200).send({token});
            //res.status(200).send(registeredUser);
        }
    });
});

app.post('/login',(req,res)=>{
    let userData = req.body;
    User.findOne({email:userData.email},(err,user)=>{
        if(err){
            console.log(err);
        }else
        if(!user){
            res.status(401).send('Invalid email');
        }else {
            if(user.password !== userData.password){
                res.status(401).send('Invalid password')
            }else{
               let payload = {subject:user._id};
               let token = jwt.sign(payload,'secretKey');
               res.status(200).send({token});
                //res.status(200).send(user);
            }
        }
    })
})

app.listen('3000',function(){
    console.log("Listening to port 3000");
});