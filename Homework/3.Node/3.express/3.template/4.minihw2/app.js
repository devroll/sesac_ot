const express = require('express');
const nunjucks = require('nunjucks');
const fs = require('fs');
// 선택사항
// const csv = require('csv-parser');
const csv = require('fast-csv');

const app = express();
const port = 3000;

// 숙제 : 눈적스 초기화 
nunjucks.configure('views', {
    express: app,
    autoescape: true
});

app.set('view engine', 'html');

app.use((req, res, next) => {
    // console.log('내 미들웨어');
    const start = Date.now();

    // 나중에 동작할 리스터(listener)를 등록...
    res.on('finish', () => {
        const end = Date.now();
        const duration = end - start;

        console.log(`요청에서 ${req.path}에서 응답까지 ${duration}ms 이 소요되었습니다.`);
    })
    next();
})
// <--- 성능 측정 미들웨어

// 데이터 읽어오기
const data = [];
const fieldNames = [];

fs.createReadStream('data.csv', { encoding: 'utf8' })
    .pipe(csv.parse({ headers: true, trim: true })) // 미션2. csv-parser들에 이런 기능은 없나? (공백 제거)
    .on('headers', (headers) => {
        fieldNames.push(...headers);
        // fieldNames.push(headers[0]);
        // console.log(fieldNames);
    })
    .on('data', (row) => {
        // 미션3. 공백이 들어간 것을 삭제하는 코드를 여기서 구현한다. 
        
        // const cleanRow = {};
        // for (const [key, value] of Object.entries(row)) {
        //     cleanRow[key.trig()] = value.trim();
        // }
        // console.log(row);
        data.push(row);
        // data.push(cleanRow);
    })
    .on('end', () => {
        console.log('파일 다 읽었음')
        // res.render('index', { data: data, headers: fieldNames });
    })
    .on('error', (error) => {
        console.log('파일 읽기 오류', error);
    })

app.get('/', (req, res) => {
    // 읽을 데이터를 담을 곳
    res.render('index', { data: data, headers: fieldNames });
    // res.render('index');
    // res.send('끝');
});

// 서버 연결 
app.listen(port, () => {
    console.log(`서버 ${port} 가 열려 있습니다.`);
});