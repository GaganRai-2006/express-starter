const express=require('express');
const {product, getproducts, deleteProduct, getproductsAll} = require('../controlller/productController');
const uploader = require('../middlewares/multerMiddleware');
const { isLoggedIn, isAdmin } = require('../validation/authValidation');

const productroute=express.Router();

productroute.post('/product', isLoggedIn, isAdmin, uploader.single('image'),product);
productroute.get('/:id',getproducts)
productroute.delete('/:id',isLoggedIn,isAdmin,deleteProduct);
productroute.get('/',getproductsAll);


module.exports=productroute;