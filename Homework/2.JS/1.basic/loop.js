// for(시작값; 종료조건; 시작값의증가조건){    
// }

// for(i = 0 ; i < 5 ; i++) {
//     console.log("i=" + i);

//     for(j = 0 ; j < 5 ; j++) {
//         console.log(" j=" + j);

//         for(k = 0 ; k < 5 ; k++) {
//             console.log("  k=" + k);
//         }
//     }
// }

// 미션1. 구구단
// 1x1=1
// 1x1=1
// ...
// 9x9=81

// for(let i = 1 ; i < 10 ; i++) {
//     console.log("---" + i + "단" + "---");
//     for(let j = 1 ; j < 10 ; j++){
//         let gugudan = i*j;
//         // console.log(i + "x" + j  + "=" + (i * j));
//         console.log(i + "x" + j  + "=" + gugudan);
//     }
//     console.log('');
// }

// while(조건문){
// } 
// 테스트

let n = 0;
while(n < 10) {
    console.log(n);
    n = n + 1;
}

n = 0;
while(true) {
    if(n == 10) {
        n = n + 1;
        continue;
    }else if(n == 20) {
        break;
    }
    console.log(n);
    n = n + 1;
}

console.log('');
// do ~ while 먼저 실행하고 조건 판정 
n = 0;
do {
    console.log(n)
    n = n  + 1;
} while (n < 3)

