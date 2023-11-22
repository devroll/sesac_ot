function readCSV(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        // 저 파일을 읽어서 화면서 출력하시오
        if (err) {
            console.log("파일을 읽는 도중에 에러가 발생하였습니다.", err);
            return callback(err, null);
        }
        // console.log(data);

        const rows = data.split('\n');

        // 방법1. for loop 방식
        // for (let i = 0; i < rows.length; i++) {
        //     // console.log(rows[i]);
        //     const row = rows[i];
        //     const columns = row.split(',');
        //     console.log(`행 ${i+1}:`, columns);
        // }

        // 방법2. forEach 방식
        // rows.forEach((row, i) => {
        //     const columns = row.split(',');
        //     console.log(`행 ${i+1}:`, columns);
        // });

        // 방법3. map 방식
        const result = rows.map((row, i) => {
            const columns = row.split(',');
            // console.log(`행 ${i + 1}:`, columns);
        })

        callback(null, result);
    });
}

module.exports = { readCSV };

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