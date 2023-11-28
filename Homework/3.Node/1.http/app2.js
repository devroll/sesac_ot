const http = require('http');

http.createServer((req, res) => {
    // 헤더
    res.writeHead(200, { 'content-Type': 'text/html; charset=utf-8' });
    // 본문(Body)
    res.write('<H1>Hello Node!</H1>');
    res.write('<P>Hello Sever1 서버1</P>');
    res.write('<DIV><NL><LI>Hello Sever1 서버1</LI></DIV>');
    res.write('<LI>Hello Sever1 서버1</LI>');
    res.write('<LI>Hello Sever1 서버1</LI>');
    res.end('<LI>Hello Sever1 서버1</LI></NL>');
}).listen(8000, () => { console.log('8000번 포트 생성완료'); });

http.createServer((req, res) => {
    // 헤더
    res.writeHead(200, { 'content-Type': 'text/html; charset=utf-8' });
    // 본문(Body)
    res.write('<H1>Hello Node!</H1>');
    res.end('<P>Hello Sever2 서버2</P>');
}).listen(8001, () => { console.log('8001번 포트 생성완료'); });

http.createServer((req, res) => {
    // 헤더
    res.writeHead(200, { 'content-Type': 'text/html; charset=utf-8' });
    // 본문(Body)
    res.write('<H1>Hello Node!</H1>');
    res.end('<P>Hello Sever3 서버3</P>');
}).listen(8002, () => { console.log('8002번 포트 생성완료'); });

