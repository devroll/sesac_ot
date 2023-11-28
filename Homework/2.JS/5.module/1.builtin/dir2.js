const fs = require('fs');
const path = require('path');

const directoryPath = "../";

function listDir(directoryPath) {
fs.readdir(directoryPath, (err, files) => {
    if(err){
        console.log('읽기 오류', err);
        return;    
    }
    // console.log(files);
    files.forEach(file => {
        const filePath = path.join(directoryPath, file);
        console.log('파일 : ', filePath);
        // checkFile(filePath);
        checkFileSync(filePath);
        if( checkFileSync(filePath) == 1 ) {
            listDir(filePath);
        }        
    })    
});
}

// 비동기
function checkFile(filePath){
    fs.stat(filePath, (err, stats) => {
        if(err){
            console.log(err);
            return;
        }       

        // ifFile() 및 isDirectory() 함수를 사용하여 파일 또는 디렉토리 확인함
        if(stats.isFile()) {
            console.log('이것은 파일입니다.');
        } else if(stats.isDirectory()) {
            console.log('이것은 디렉토리입니다.');
        } else {
            console.log('파일도 디렉토리입니다.');
        }
    });
}

// 동기 처리
function checkFileSync(filePath){
    const stats = fs.statSync(filePath);

    // ifFile() 및 isDirectory() 함수를 사용하여 파일 또는 디렉토리 확인함
    if(stats.isFile()){
        console.log('이것은 파일입니다.');
        return 0;
    }else if(stats.isDirectory()){
        console.log('이것은 디렉토리입니다.');
        return 1;
    }else{
        console.log('파일도 디렉토리입니다.');
        return 0;
    }
}