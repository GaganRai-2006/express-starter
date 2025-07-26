const express=require('express');
const {product, getproducts, deleteProduct} = require('../controlller/productController');
const uploader = require('../middlewares/multerMiddleware');

const productroute=express.Router();

productroute.post('/product',uploader.single('image'),product);
productroute.get('/:id',getproducts)
productroute.delete('/:id',deleteProduct);


module.exports=productroute;