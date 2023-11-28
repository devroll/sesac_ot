const readline = require('readline'); // OLD
// import readline from 'readline';   // NEW - ES6 (type:module)
const uuid = require('uuid');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('구구단의 단을 입력하세요:', (input) => {
    const num = parseInt(input);

    if (!isNaN(num) && num > 0 && num < 10) {
        console.log(`${num} 단 구구단을 출력합니다.`);
        // 이 단의 구구단을 출력하시오. 3줄 이내로 작성
        for (let i = 1; i < 10; i++) {
            let res = num * i;
            console.log(`${num} x ${i} = ${res}`);
        }
    } else {
        console.log(`1 ~ 9 까지의 숫자를 입력하세여!!`)
    }
    rl.close();
});

const uuid2 = uuid.v4();
console.log(uuid2);