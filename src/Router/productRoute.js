const express=require('express');
const product = require('../controlller/productController');
const uploader = require('../middlewares/multerMiddleware');

const productroute=express.Router();

productroute.post('/product',uploader.single('image'),product);
module.exports=productroute;