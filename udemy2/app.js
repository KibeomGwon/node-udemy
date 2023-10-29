const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();

const adminData = require('./routes/admin');
const shopRouters = require('./routes/shop');

// // use()는 미들웨어를 등록하는 메소드.
// // 미들웨어는 매개변수들을 자신이 받아서 자신이 수행하는 로직을 실행한다.
//
// // use()의 다른 사용 방법에는 함수가 있는데 이는 밑에 보듯이 쓸 수 있다.
// // next() 메소드를 호출해야 다음 use()로 이동한다.
// // use()로 등록된 미들웨어에서 응답을 하면 다음 미들웨어로 넘어가지 않는다.
// app.use((req,res, next)=>{
//     console.log('In the middleware!');
//     next();
//
// });

// 이 미들웨어를 맨 상단에 입력한 이유는
// 이 미들웨어가 어떤 경로 요청이 들어오든
// bodyParser의 작업을 거치고 전달되게 하기 위해서이다.
// 만약 use를 쓴다면 순서를 신경써야한다.
app.use(bodyParser.urlencoded({extended: false}));

// 정적파일에 대한 요청을 받아 들인다. (public에 있는 정적파일)
app.use(express.static(path.join(__dirname, 'public')));

// use()메소드는 '/'로 시작하는 경로를 다 받는다.
// 다른 http메소드인 get,post,petch,put은 지정된 경로에서만 응답한다.
app.use('/',(req,res,next)=>{
    // console.log('This always runs!');
    next();
});

app.use('/admin',adminData);
app.use(shopRouters);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'));
});



app.listen(3000);