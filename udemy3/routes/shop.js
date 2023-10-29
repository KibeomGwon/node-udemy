const path = require('path');

const express=  require('express');

const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');

// use가 아닌 get,post등의 http메소드를 쓰면 지정된 경로에만 응답을 한다.
router.get('/',(req,res, next)=>{
    console.log('shop.js',adminData.products);
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = router;