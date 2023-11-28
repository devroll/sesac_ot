const express = require('express');
const app = express();
const port = 3000;

// EJS를 뷰 엔진으로 설정한다.
app.set('view engine', 'ejs');

// 라우트 추가
app.get('/', (req, res) => {
    // 뷰 엔진(템플릿 엔진)을 통해서 랜더링을 해주어야함...
    // 랜더링(rendering) = 컨텐츠를 삽입/변경하는 과정...
    res.render('index', { title: 'Express앱', message: 'EJS를 처음 사용해 보는 중' });

    // res.json('제이슨 결과를 주거나...');
    // res.send('컨텐츠를 주거나...');
    // res.sendFile('파일을 읽어서 주거나...');
});

app.get('/greeting', (req, res) => {
    const username = '조흥제';

    res.render('greeting', { username: username });
    // 미션1. greeting.ejs 를 만들고, 안녕하세요 ㅇㅇㅇ님...
});

app.get('/welcome', (req, res) => {
    const isAdmin = false;
    res.render('welcome', { isAdmin: isAdmin });
});

app.get('/fruits', (req, res) => {
    const fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];
    res.render('fruits', { fruits: fruits });
});

app.get('/page', (req, res) => {
    const data = {
        title: "마이 페이지",
        content: "여기에 본문에 들어갈 내용을 작성하시오..."
    };
    res.render('main', data);
})

app.listen(port, () => {
    console.log(`서버 ${port} 레디...`);
})