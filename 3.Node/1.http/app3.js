// 웹서버는 비동기 처리하는게 좋다.
// 많은 사용자 처리하기 위해서
// Promise 처리 
const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./server.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        // res.end(err.message);
        res.end("서버에 오류가 발생했습니다. 관리자에게 연락하세요");
    }
})
    .listen(8000, () => {
        console.log('8000포트가 열렸습니다.');
    });


