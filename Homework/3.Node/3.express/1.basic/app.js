const express = require('express');
const app = express();
const port = 3000;

// next : myLogger 끝나고 다음것
function myLogger(req, res, next) {
    const date = new Date(Date.now());
    const formattedTime = date.toLocaleString();
    // const time = Date.now();
    console.log(`${formattedTime}: LOG MESSAGE`);
    next();
}

function requestTime(req, res, next) {
    req.requestTime = Date.now();
    next();
}

// 2. 미들웨어 : 무조건 거쳐간다.
app.use(myLogger)
app.use(requestTime);

// 1. 라우팅
// 루트 경로 생성
app.get('/', (req, res) => {
    console.log(req.requestedTime);
    res.send('Hello, World');
})

app.listen(port, () => {
    console.log(`서버가 ${port}에서 실행 중입니다.`);
});

