// console.log(process);
// console.log(process.argv);
console.log('argv[0] : ', process.argv[0]);
console.log('argv[1] : ', process.argv[1]);

let numRecords = process.argv[2];
let displayFormat = process.argv[3];
// console.log(numRecords);

if(process.argv.length < 3){
    numRecords = 10;
    displayFormat = 'csv';
}

// 출력(1) 0부터 해당숫자 미만까지 
for (let i = 0 ; i < numRecords ; i++){
    console.log(i);
}

// 출력(2) string에 따라서 출력
if(displayFormat == 'csv'){
    console.log('Printing result to csv...');
} else if(displayFormat == 'html'){
    console.log('Printing result to <HTML>...');
} else {
    console.log('Printing to screen');
}