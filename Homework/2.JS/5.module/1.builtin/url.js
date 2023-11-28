const url = require('url');

const myUrl = 'http://www.example.com/path?query=value&key=value&name=shpark';

// URL 파싱
const parsedUrl = url.parse(myUrl, true);
console.log('파싱된 URL : ', parsedUrl);
console.log('호스트 : ', parsedUrl.host);
console.log('경로 : ', parsedUrl.pathname);
console.log('쿼리 : ', parsedUrl.query);

const myUrl2 = {
    protocol: 'http',
    hostname: 'www.naver.com',
    pathname: '/search.naver',
    query: {
        query: '새싹'  // %EC%83%88%EC%8B%B9 : 유니코드 인코딩된 글자로 출력 
    }
};

// URL 조립
const assembledUrl = url.format(myUrl2);
console.log('조립된 URL: ', assembledUrl);