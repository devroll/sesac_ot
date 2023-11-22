const express = require('express');
const app = express();
const port = 3000;

function myLogger(req, res, next) {
    // const time = Date.now();
    const date = new Date(Date.now());
    const formattedTime = date.toLocaleString();
    // req.requestedTIme = formattedTime;
    console.log(`${formattedTime}: LOG MESSAGE`);
    next();
}

function requestTIme(req, res, next) {
    req.requestedTime = Date.now();
    next();
}

// 2. 미들웨어
app.use(myLogger);
app.use(requestTIme);

// 1. 라우팅
// 루트 경로 생성
app.get('/', (req, res) => {
    console.log(req.requestedTIme);
    res.send('Hello, World');
});

app.listen(port, () => {
    console.log(`서버가 localhost: ${port}에서 실행중`);
});





