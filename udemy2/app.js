const http = require('http');

const express = require('express');

const app = express();

// use()는 다른 패키지들을 미들웨어에 연결하는 메소드이다.
// 미들웨어는 매개변수들을 자신이 받아서 자신이 수행하는 로직을 실행한 후
// 그 다음 설정에 따라
// use()의 다른 사용 방법에는 함수가 있는데 이는 밑에 보듯이 쓸 수 있다.
// next() 메소드를 호출해야 다음 use()로 이동한다.
// use()로 등록된 미들웨어에서 응답을 하면 다음 미들웨어로 넘어가지 않는다.
app.use((req,res, next)=>{
    console.log('In the middleware!');
    next();
});

app.use((req,res, next)=>{
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer(app);

server.listen(3000);