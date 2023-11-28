const { error } = require('console');
// const { readCSV, writeCSV } = require('./my-csv-library');
const { readCSV, writeCSV } = require('./my-csv-library2');

const sampleData = [
    ['이름', '생년월일', '성별'],
    ['이병헌', '19991001', '남'],
    ['송혜교', '20000505', '여'],
    ['현빈', '19981111', '남'],
];

const filePath = 'user.csv';

console.log("쓰기 시작");
writeCSV(filePath, sampleData, (err) => {
    if (err) {
        console.err('CVS파일 쓰기 실패');
        return;
    }
    console.log("CVS파일 내용 : ", data);
});
console.log("쓰기 종료");


console.log("읽기 시작");
readCSV(filePath, (err, data) => {
    if (err) {
        console.err('CVS파일 쓰기 실패');
        return;
    }
    console.log("CVS파일 내용 : ", data);
});
console.log("읽기 종료");