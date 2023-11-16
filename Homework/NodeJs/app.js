const http = require('http');
const fs = require('fs').promises;
const path = require('path');
// const { url } = require('inspector');

const SUCCESS = 200;
const SERVER_ERROR = 500;
const NOT_FOUND = 404;
// 서버의 개체 생성
const server = http.createServer(async (req, res) => {
    console.log(req.method, req.url);

    try {
        if (req.method === 'GET' && req.url.startsWith('/static/images/')) {
            // 과제1. 어떤 이미지를 요청하던지, 그 파일을 내 디렉토리에서 찾아서 반환하도록 구현한다. 
            // url 파싱해서 파일 불러와서, 반환한다.(3줄 정도의 코드)
            // const parsedUrl = new URL(req.url);
            // const fileName = parsedUrl.pathname;
            // const filePath = `./images/${fileName}`;
            // const data = await fs.readFile(filePath);
            const data = await fs.readFile('.' + req.url);
            res.writeHead(SUCCESS, { 'Content-Type': 'image/jpg' });
            res.end(data);
        }

        if (req.method === 'GET') {
            if (req.url === '/') {
                const data = await fs.readFile('./index.html');
                res.writeHead(SUCCESS, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(data);
            } else if (req.url === '/about') {
                const data = await fs.readFile('./about.html');
                res.writeHead(SUCCESS, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(data);
                // } else if (req.url === '/images/cats.jpg') {
                //     const data = await fs.readFile('./images/cats.jpg');
                //     res.writeHead(SUCCESS, { 'Content-Type': 'image/jpg' }); // rfc 규약에 맞춤
                //     res.end(data);
            } else {
                // 정규표현식
                // const imageMatch = req.url.match(/^\/images\/(.+)$/);
                // if (imageMatch) {
                //     const imageName = imageMath[1];
                //     const imagePath = './static/' + imageName;
                // }
                try {
                    // const filePath = res.url;
                    // console.log(filePath);
                    // const contentType = getContentType(filePath);
                    // const contentType = getContentType(imagePath);
                    // const data = await fs.readFile('./static' + filePath);
                    // const data = await fs.readFile(imagePath);
                    // res.writeHead(SUCCESS, { 'Content-Type': contentType });
                    // res.end(data);                    
                } catch (error) {
                    // if err 일때 처리 - 과제  
                    res.writeHead(NOT_FOUND, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end('NOt Found. 없어~~~~!');
                }
            }
        } else if (req.method === 'POST') {
            // 요청을 생성할때 
            res.writeHead(201);
            res.end("등록 성공");
        } else if (req.method === 'PUT') {
            // 요청을 수정할때
            res.end("수정 성공");
        } else if (req.method === "DELETE") {
            // 요청을 삭제할때
            res.end("삭제 성공");
        }
    } catch (err) {
        console.error("오류발생", err.message);
        res.writeHead(SERVER_ERROR, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end("서버 오류...");
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`${port}번 포트 열려있음`);
});


// filePath (URL경로를 기반으로, 
// 요청한 내용이 무엇인지 판단해서, 그 content-type을 반환한다.
function getContentType(filePath) {
    const extname = path.extname(filePath);
    console.log(extname);
    switch (extname) {
        case '.html':
            return 'text/html'; charset = utf - 8;
        case '.js':
            return 'application/javascript'; charset = utf - 8;
        case '.jpg':
            return 'image/jpeg';
        default:
            return 'application/octet-stream';
    }
}