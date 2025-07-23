const express=require('express');
const getcartbyId = require('../controlller/cartcontroller');

const cartrouter=express.Router();

cartrouter.get('/:id',getcartbyId);

module.exports=cartrouter;