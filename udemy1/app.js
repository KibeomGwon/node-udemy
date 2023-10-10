const http = require('http'); // 글로벌 모듈인 http를 불러온다.
const routes = require('./routes');
//
// http.createServer(rqListener);
console.log(routes.someText);
const server = http.createServer(routes.handler);


server.listen(3000);


