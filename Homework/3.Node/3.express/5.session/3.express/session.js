const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

// 세션 설정
app.use(session({
    secret: 'my-secret-key',  // 세션 데이터를 암호화 하기 위한 키 
    resave: false, // 세션 데이터가 변경되지 않아도 다시 저장할지 여부
    saveUninitialized: true // 초기화되지 않은 세션을 저장소에 저장할지 여부
}));

// 미들웨어를 사용해서, 이 사람의 방문횟수 트랙킹...
app.use((req, res, next) => {
    // 세션에 visitCount 변수 초기화
    // 있으면 가져오고 없으면 0으로 초기화
    req.session.visitCount = req.session.visitCount || 0;

    // 방문 횟수 증가
    req.session.visitCount++;

    // 세션 정보 출력
    console.log('SessionID', req.sessionID);
    console.log('SessionInfo', req.session);
    next();
});

app.get('/', (req, res) => {
    // console.log(res.session);
    // res.send('DONE');
    res.send(`당신의 방문 횟수는 ${req.session.visitCount} 입니다...후후... 하는 너를 지켜보고 있다...`)
});

app.listen(port, () => {
    console.log(`서버 레디...`);
});