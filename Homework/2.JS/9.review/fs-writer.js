const fs = require('fs');

// const filePath = 'sample.csv';
// const dataToWrite = [
//     ['Column1', 'Column2'],
//     ['Value1', 'Value2'],
//     ['Value3', 'Value4']
// 추가 데이터 추가...    
// ];

// 배열을 그냥 쓸수 없으므로 데이터 변환 필요

// 방법1
// const csvContent = dataToWrite.map((row) => row.join(',')).join('\n');
// console.log(csvContent);

// 방법2
let csvContent = '';
for (let i = 0; i < dataToWrite.length; i++) {
    // console.log(dataToWrite[i]);
    csvContent += dataToWrite[i].join(',');
    if (i < dataToWrite.length - 1) {
        csvContent += '\n';
    }
    // console.log(csvContent);
}
// return;

function writeCSV(filePath, dataToWrite, callback) {
    fs.writeFile(filePath, csvContent, 'utf8', (err) => {
        if (err) {
            console.log("파일을 쓰는 도중에 에러가 발생하였습니다.", err);
            return;
        }
        console.log('CSV파일에 성공적으로 작성되었습니다.');
    });
}

module.exports = { writeCSV };