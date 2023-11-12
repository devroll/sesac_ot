// 이전 파일의 내용 불러오기
// import {add, sub, mul, div} from './calculator.js';
// let sum = add(5,3);
// console.log('덧셈결과:', sum);

import readline from 'readline';   // NEW - ES6 (type:module)
import { EngineeringCalculator } from "./EngineeringCalculator.js";
import { StandardCalculator } from "./StandardCalculator.js";
import { ProgrammingCalculator } from "./ProgrammingCalculator.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("계산기 모드를 선택하세요 : ");
console.log("1. Engineering Calculator");
console.log("2. Standard Calculator");
console.log("3. Programmer Calculator");

let numCal, numA, numB, operator;
askCalculator();

// 질문(1) : 계산기 선택
function askCalculator() {
    rl.question('계산기 모드 선택(1/2/3):', (input) => {
        const num = parseInt(input); // 숫자로 파싱    
        if (isNaN(num)) {
            console.log('올바른 숫자를 입력하세요')
            askCalculator();
        } else {
            // 1, 2, 3 인 경우
            if (num === 1 || num === 2 || num === 3) {
                numCal = num;
            } else {
                console.log('※1,2,3 중에 선택하세요※')
                askCalculator();
            }
        }
        // rl.close();
        askNumA();
    });
}

// 질문(2) : 첫번재 숫자 입력 
function askNumA() {
    rl.question('첫번째 숫자 입력:', (input) => {
        const num = parseInt(input); // 숫자로 파싱    
        if (isNaN(num)) {
            console.log('※올바른 숫자를 입력하세요※');
            askNumA();
        } else {
            numA = num;
        }
        askOperator();
    });
}

// 질문(3) : 연산자 입력
function askOperator() {
    rl.question('연산자를 입력(+,-,*,/):', (input) => {
        if (input === '+' || input === '+' || input === '*' || input === '/') {
            operator = input;
        } else {
            console.log('※올바른 연산자를 입력하세요※');
            askOperator();
        }
        askNumB();
    });
}

// 질문(4) : 두번째 숫자 입력 
function askNumB() {
    rl.question('두번째 숫자 입력:', (input) => {
        const num = parseInt(input); // 숫자로 파싱    
        if (isNaN(num)) {
            console.log('※올바른 숫자를 입력하세요※');
            askNumB();
        } else {
            numB = num;
        }
        resultCal();
    });
}

// 계산 및 출력 : 선택한 계산기에 따라 계산 및 결과 
function resultCal() {
    let cal;
    switch (numCal) {
        case 1:
            cal = new EngineeringCalculator(numA, numB, operator);
            break;
        case 2:
            cal = new StandardCalculator(numA, numB, operator);
            break;
        case 3:
            cal = new ProgrammingCalculator(numA, numB, operator);
            break;
    }
    console.log("정답은 :", cal.FourBasicOperations());
    rl.close();
}

