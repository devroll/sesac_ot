const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

nunjucks.configure('views', {
    autoescape: true, // 기본값, 생략 가능 
    express: app,
});

app.set('view engine', 'html');
// app.set('view', __dirname + '/this_is_my_new_directory'); // 경로 이동 가능

app.get('/', (req, res) => {
    res.render('index', { title: 'nunjucks앱', message: '헤딩1 본문' });
});

// ---
app.get('/greeting', (req, res) => {
    const username = '조흥제';

    res.render('greeting', { username: username });
    // 미션1. greeting.ejs 를 만들고, 안녕하세요 ㅇㅇㅇ님...
});

app.get('/welcome', (req, res) => {
    const isAdmin = true;
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

// ---

const port = 3000;
app.listen(port, () => {
    console.log(`서버가 ${port}에서 대기중...`);
});

