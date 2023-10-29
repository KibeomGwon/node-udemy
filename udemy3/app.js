const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();

// express에게 view engine으로 pug를 사용하겠다고 설정하는 set
app.set('view engine', 'pug');
// 뷰들을 views라는 폴더 안에 작성하겠다는 설정
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRouters = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

// 정적파일에 대한 요청을 받아 들인다. (public에 있는 정적파일)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',(req,res,next)=>{
    // console.log('This always runs!');
    next();
});

app.use('/admin',adminData.routes);
app.use(shopRouters);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'));
});



app.listen(3000);