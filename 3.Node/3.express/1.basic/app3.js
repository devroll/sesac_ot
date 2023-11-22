const express = require('express');
const app = express();
const port = 3000;

// 정적 파일을 제공할 디렉토리는 미들웨어를 통해서 설정해준다.
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('hello, get4');
});

app.get('/about', (req, res) => {
    res.send('hello, about');
});

// 라우트
app.get('/user', (req, res) => {
    res.send('hello, user');
});

// 라우트 파라미터
app.get('/user/:id', (req, res) => {
    // 라우트 파라미터는 req.params.을 통해서 접근가능
    const uid = req.params.id;
    res.send(`hello, user ${uid}님`);
});

app.get('/user/:id/profile', (req, res) => {
    // 라우트 파라미터는 req.params.을 통해서 접근가능
    const uid = req.params.id;
    res.send(`
        <HTML>        
        <BODY>    
        <H1>「${uid}」사마의 프로파일</H1>
        <p>내 프로필...</p>
        <img src="/images/cats.jpg" height="300">
        <img src="/images/run.gif" height="300">
        </BODY>
        </HTML>
    `);
});

// 미들웨어를 통한 없는 페이지 정의
app.use((req, res) => {
    res.status(404).send('<H1>페이지를 찾을 수 없습니다.</H1>');
});

// GET 파라미터
// search?keyword=sesac
app.get('/search', (req, res) => {
    // GET 파라미터는 req.query를 통해서 전달받음 
    const keyword = req.query.keyword;
    res.send(`입력한 키워드는: ${keyword} 입니다.`);
});

// shopping?category=drink&item=beer
app.get('/shopping', (req, res) => {
    // GET 파라미터는 req.query를 통해서 전달받음 
    const cat = req.query.category;
    const item = req.query.item;
    res.send(`입력한 키워드는: ${cat}에 ${item} 입니다.`);
});

// POST (파라미터X) ==> BODY 데이터 파싱...
// 서버 생성
app.listen(port, () => {
    console.log(`서버가 ${port}에서 생성 되었습니다`);
});
// nodemon --ext html,js,css app3.js