const { error } = require('console');
const http = require('http');

// 요청을 하고 싶은 주소 정의
const options = {
    hostname: 'www.example.com',
    port: 80,
    path: '/',
    method: 'GET'
};

const req = http.request(options, (res) => {
    console.log(`상태 코드: ${res.statusCode}`);
    res.on('data', (chunk) => {
        console.log(`데이터 수신: ${chunk}`);
    })
});

req.on('error', (error) => {
    console.log(`요청 중 오류 발생: ${error}`);
});

req.end();