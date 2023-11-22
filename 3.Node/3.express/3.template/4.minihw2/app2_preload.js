const express = require('express');
const nunjucks = require('nunjucks');
const fs = require('fs');
// 선택사항
// const csv = require('csv-parser');
const csv = require('fast-csv');
const { rejects } = require('assert');

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
// 성능 측정 미들웨어 <--

// 데이터 읽어오기
const data = [];
const fieldNames = [];

async function loadDataIntoMemory() {
    return new Promise((resolve, reject) => {
        fs.createReadStream('data.csv', { encoding: 'utf8' })
            .pipe(csv.parse({ headers: true, trim: true })) // 미션2. csv-parser들에 이런 기능은 없나? (공백 제거)
            .on('headers', (headers) => {
                fieldNames.push(...headers);
                // fieldNames.push(headers[0]);
                console.log(fieldNames);
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
                resolve();
                // res.render('index', { data: data, headers: fieldNames });
            })
            .on('error', (error) => {
                console.log('파일 읽기 오류', error);
                reject(error);
            })
    });

}
// 데이터 로딩 <--

// console.log(loadDataIntoMemory());

// 우리의 서버 시작 -->
async function startServer() {
    await loadDataIntoMemory();

    app.get('/', (req, res) => {
        const itemsPerPage = 10;
        let startIndex = 0;
        let endIndex;

        console.log(`요청 GET파라미터 : ${req.query.page}`);
        // 미션3. 이제 a 태그의 하이퍼 링크를 통해서... 원하는 페이지로 이동한다.
        // || 비교 
        page = req.query.page || 1;
        startIndex = (page - 1) * itemsPerPage;
        endIndex = startIndex + itemsPerPage;

        // 미션2. 전체 페이지수를 계산한다.
        //        그 페이지 숫자를 html로 전달해서 화면 아래에 추가한다.
        // Math.ceil : 올림
        const totalPages = Math.ceil(data.length / itemsPerPage);
        console.log(`전체 데이터 개수는 ${data.length} 이며,`,
            `페이지당 개수는 ${itemsPerPage} 이고,`,
            `전체 페이지 수는 ${totalPages} 입니다.`);

        // 읽을 데이터를 담을 곳
        // 미션1. 읽은 데이터에서 무조건, 앞에 10개만 준다 (slice 사용)
        const curPageRows = data.slice(startIndex, endIndex);

        res.render('index', {
            headers: fieldNames,
            data: curPageRows,
            total_pages: totalPages,
            page: parseInt(page)
        });
        // res.render('index');
        // res.send('끝');
    });

    // 서버 생성
    app.listen(port, () => {
        console.log(`서버 ${port} 가 열려 있습니다.`);
    });
}
// 우리의 서버 시작 <--
startServer();