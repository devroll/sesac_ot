const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello, get4');
})

app.get('/about', (req, res) => {
    res.send('hello, about');
})

// 라우트
app.get('/user', (req, res) => {
    res.send('hello, user');
})

// 라우트 파라미터
app.get('/user/:id', (req, res) => {
    const uid = req.params.id;
    // const encodeUid = encodeURIComponent(uid);
    // res.send(`hello, user ${encodeUid}님`);
    res.send(`hello, user ${uid}님`);
})

// 서버 생성
app.listen(port, () => {
    console.log(`서버가 ${port}에서 실행중입니다.`);
})