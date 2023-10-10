const fs = require('fs');

const requestHandler = (req,res)=> {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>MyFirst Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type = "text" name="message">' +
        '<button type ="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            // fs.writeFileSync('message.txt', message);
            // res.statusCode = 302;
            // res.setHeader('Location', '/');
            // return res.end();
            // 위 코드처럼 돼 버리면, 파일이 만들어 질 때까지 기다린 다음
            // 다음 코드가 실행이 되기 떄문에 만약 서버에 다른 요청이 들어오면
            // 이 파일의 처리를 다 한 다음에 요청을 받기 때문에 서버의 서능에 안 좋다.
            // 따라서 아래의 코드처럼 파일 쓰기 이벤트를 이벤트 루프에 넣어서
            // 서버로 들어오는 요청을 막지 않게 한다.
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>MyFirst Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end(); // end후에는 아무것도 입력하면 안된다.
};

module.exports = {
    handler : requestHandler,
    someText : "Some hard coded text",
};

// 아래의 코드는 위의 코드와 똑같다.
// module.exports.routes = requestHandler;
// 아래의 문법은 node.js에서 제공하는 문법이다.
// exports.someText = "Some hard coded text";
