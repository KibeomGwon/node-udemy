const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

// /admin/add-product
router.get('/add-product',(req,res,next)=>{
    // console.log('In another middleware!');
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product
router.post('/add-product',(req,res,next)=>{
    console.log(req.body); // result : undefined :: 이 이유는 req.는 요청의 본문을 분석하려하지 않기 때문이다.
    res.redirect('/shop');
});

module.exports =  router;