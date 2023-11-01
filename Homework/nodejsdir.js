// 7. 내장함수 활용하기
// 현재 디렉토리의 파일목록을 출력하시오 (dir 같은 기능을 구현해보시오)

const fs = require('fs');

// 현재 디렉토리의 파일 목록 가져오기
fs.readdir('./', (err, files) => {
    if(err){
        console.error('현재 디렉토리를 읽어오는데 실패하였습니다.', err);
        return;
    }
    console.log('현재 디렉토리의 파일 목록 : ', files);
});