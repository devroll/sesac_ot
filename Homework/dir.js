const fs = require('fs');
const path = require('path');

// const parentPath = path.dirname(__dirname);
// const parentFolderName = path.basename(parentPath);
// console.log('');
// console.log(parentFolderName);
// fs.readdir(directoryPath, (err, files) => {
//     if(err){
//         console.log('읽기 오류', err);
//         return;    
//     } 
//     prefix = '└─'
//     // console.log(files);
//     files.forEach(file => {
//         // const filePath = path.join(directoryPath, file);
//     })
// });

function printDirectoryTree(directoryPath, prefix = "") {
    const files = fs.readdirSync(directoryPath);
    for(let i = 0 ; i < files.length ; i ++){
        const filePath = path.join(directoryPath, files[i]);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            printDirectoryTree(filePath, `${prefix} │  `);
        } else {
            if(i === files.length - 1){
                console.log(`${prefix} └── ${files[i]}`);
            }else{
                console.log(`${prefix} ├── ${files[i]}`);
            }
        }
    }
}

const directoryPath = "../";
printDirectoryTree(directoryPath);