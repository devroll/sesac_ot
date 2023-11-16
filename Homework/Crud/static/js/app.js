const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// 객체 디스트럭처링(de-structuring)
// const { parse } = require('querystring');
// const { url } = require('inspector');

const SUCCESS = 200;
const SERVER_ERROR = 500;
const NOT_FOUND = 404;

let users = {};

// 서버의 개체 생성
const server = http.createServer(async (req, res) => {
    // console.log(req.method, req.url);
    try {
        if (req.method === 'GET' && req.url.startsWith('/static/')) {
            // const filePath = "." + req.url;
            const filePath = "../.." + req.url;
            console.log('filePath :', filePath);
            const data = await fs.readFile(filePath);
            const contentType = getContentType(filePath);
            res.writeHead(200, { 'Content-Type': contentType });
            return res.end(data);
        }

        if (req.method === 'GET') {
            if (req.url === '/') {
                const data = await fs.readFile('../../index.html');
                res.writeHead(SUCCESS, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(data);
            } else if (req.url === '/about') {
                const data = await fs.readFile('../../about.html');
                res.writeHead(SUCCESS, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(data);
            } else if (req.url === '/user') {
                // console.log("users에 왔음");
                // const data = await fs.readFile('./users.html');
                res.writeHead(SUCCESS, { 'Content-Type': 'text/plain; charset=utf-8' });
                // console.log(JSON.stringify(users));
                res.end(JSON.stringify(users));
                // } else if (req.url === '/images/cats.jpg') {
                //     const data = await fs.readFile('./images/cats.jpg');
                //     res.writeHead(SUCCESS, { 'Content-Type': 'image/jpg' }); // rfc 규약에 맞춤
                //     res.end(data);
            } else {
                // 정규표현식
                const imageMatch = req.url.match(/^\/image\/(.+)$/);
                if (imageMatch) {
                    const imageName = imageMatch[1];
                    const imagePath = '../image/' + imageName;
                    console.log(imagePath);
                    try {
                        // const filePath = res.url;
                        // console.log(filePath);
                        // const contentType = getContentType(filePath);
                        const contentType = getContentType(imagePath);
                        // const data = await fs.readFile('./static' + filePath);
                        const data = await fs.readFile(imagePath);
                        res.writeHead(SUCCESS, { 'Content-Type': contentType });
                        res.end(data);
                    } catch (error) {
                        // if err 일때 처리 - 과제  
                        res.writeHead(NOT_FOUND, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.end('Not Found. 없어~~~~!');
                    }
                }
            }
        } else if (req.method === 'POST') {
            if (req.url === '/user') {
                // 요청을 생성할때 
                // 요청 request 를 파싱해서 처리
                console.log('/user들어옴');
                let body = '';
                req.on('data', (data) => {
                    body += data;
                });
                req.on('end', () => {
                    console.log("요청 온 내용은??", body);
                    const formData = JSON.parse(body);
                    // const formData = parse(body);
                    console.log("파싱한후??", formData);
                    // console.log("파싱한후??", formData);
                    const username = formData.name;
                    console.log("사용자 이름은??", username);
                    users[username] = username;
                    console.log(users);
                });
                // 결과 response 주는 코드  
                res.writeHead(201, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end("등록 성공");
            }
        } else if (req.method === 'PUT') {
            // 요청을 수정할때
            // 수정 명령어 : curl -X PUT 127.0.0.1:3000/users/aaa -d "name=bbb"
            if (req.url.startsWith('/user/')) {
                const key = req.url.split('/')[2];
                let body = '';
                req.on('data', (data) => {
                    body += data;
                });
                req.on('end', () => {
                    // 다 온 데이터를 기반으로 프로세싱...
                    console.log('PUT Body:', body);
                    // 수정 코드를 작성하시오...
                    const formData = parse(body);
                    users[key] = formData.name;
                })
            }
            // 결과(response=res) 출력 
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end("수정 성공");
        } else if (req.method === "DELETE") {
            if (req.url.startsWith('/user/')) {
                // 요청을 삭제할때
                // 요청에 대한 파싱
                // 삭제 명령어 : curl -X DELETE 127.0.0.1:3000/users/aaa
                // 1. url에 /user/ 시작하는걸 찾아서...            
                // 2. 그 뒤에 있는 글자를 읽어서 key로 처리하는것...
                // 3. 그 키를 users라는 객체안에서 삭제...
                try {
                    // console.log('try들어옴');
                    const key = req.url.split('/')[2];
                    // console.log('spite다음');
                    delete users[key];
                    // console.log(users);
                    // console.log('delete다음');
                    // 요청에 대한 응답결과를 준다...
                    // 요청을 삭제할때
                    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
                    // res.end("삭제 성공");
                    res.end(JSON.stringify(users));
                } catch (error) {
                    console.error('삭제 중 오류');
                    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                    res.end('서버에서 알 수 없는 오류가 발생하여 삭제에 실패하였습니다. 관리자를 통해서 해결하세요.');
                }
            } else {
                res.writeHead(NOT_FOUND);
                res.end("NOT FOUND");
            }
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

// filePath(URL경로)를 기반으로, 
// 요청한 내용이 무엇인지 판단해서, 그 content-type을 반환한다.
function getContentType(filePath) {
    const extname = path.extname(filePath);
    // console.log(extname);
    switch (extname) {
        case '.html':
            return 'text/html'; charset = utf - 8;
        case '.js':
            return 'application/javascript'; charset = utf - 8;
        case '.jpg':
            return 'image/jpeg';
        case '.gif':
            return 'image/gif';
        default:
            return 'application/octet-stream';
    }
}