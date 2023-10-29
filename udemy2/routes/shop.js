const path = require('path');

const express=  require('express');

const router = express.Router();

const rootDir = require('../util/path');

// use가 아닌 get,post등의 http메소드를 쓰면 지정된 경로에만 응답을 한다.
router.get('/',(req,res, next)=>{
    // console.log('In another middleware!');
    // __dirname은 이 프로젝트의 경로를 나타내는 변수이다.
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = router;