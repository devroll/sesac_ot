// 이전 파일의 내용 불러오기
// import {add, sub, mul, div} from './calculator.js';
// let sum = add(5,3);
// console.log('덧셈결과:', sum);

import readline from 'readline';   // NEW - ES6 (type:module)

import { EngineeringCalculator } from "./EngineeringCalculator"; 

// import { ProgrammingCalculator } from "./ProgrammingCalculator"; 
// const enCal = new EngineeringCalculator(a,b,c);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// console.log("계산기 모드를 선택하세요 : ");
// console.log("1. Engineering Calculator");
// console.log("2. Programmer Calculator");

// let cal, numA, operator, numB, result;
// askCalculator();

// // 질문(1) : 계산기 선택
// function askCalculator() {
//     rl.question('계산기 모드 선택(1/2):', (input) => {
//         const num = parseInt(input); // 숫자로 파싱    
//         if(isNaN(num)){
//             console.log('올바른 숫자를 입력하세요')
//             rl.close();
//         } else {
//             // 1인 경우, 2인 경우
//             if(num === 1){
//                 // console.log('1번 계산기를 선택하였습니다.')
//                 cal = 1;                
//             } else if(num ===2){
//                 // console.log('2번 계산기를 선택하였습니다.')    
//                 cal = 2;
//             } else {
//                 console.log('※1과 2 중에 선택하세요※')
//                 askCalculator();
//             }
//         }    
//         // rl.close();
//         askNumA();
//     });
// }

// // 질문(2) : 첫번재 숫자 입력 
// function askNumA() {
//     rl.question('첫번째 숫자 입력:', (input) => {
//         const num = parseInt(input); // 숫자로 파싱    
//         if(isNaN(num)){
//             console.log('※올바른 숫자를 입력하세요※');
//             askNumA();
//         } else {
//             numA = num;            
//         }    
//     });
//     askOperator();
// }

// // 질문(3) : 연산자 입력
// function askOperator() {
//     rl.question('연산자를 입력(+,-,*,/):', (input) => {
//         if(input === '+' || input === '+' || input === '+' || input === '+'){
//             operator = input;
//         }else{
//             console.log('※올바른 연산자를 입력하세요※');    
//             askOperator();       
//         }
//     });
//     askNumB();
// }

// // 질문(4) : 두번째 숫자 입력 
// function askNumB() {
//     rl.question('두번째 숫자 입력:', (input) => {
//         const num = parseInt(input); // 숫자로 파싱    
//         if(isNaN(num)){
//             console.log('※올바른 숫자를 입력하세요※');
//             askNumB();
//         } else {
//             numB = num;            
//         }    
//     });
// }

// // 출력 : 선택한 계산기에 따라 계산 및 결과 
// function resultCal() {
//     if(cal === 1){
        
//     }else(cal ===2)
// }

