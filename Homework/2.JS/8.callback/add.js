// a와 b를 입력받아
// 당신이 개발한 callback 함수를 통해서
// 하나의 인자값으로 결과를 반환합니다. 
// -> 당신의 원래 입력값과 결과를 총 3개의 인자값으로 결과를 반환합니다.
function add(a, b, callback22) {
    const sum = a + b;
    // return sum;
    callback22(a, b, sum);
}

// 이용할 함수 
function displayResult(a, b, result){
    // console.log('결과: ', result);
    console.log(`인자값 : ${a}, ${b}, / sum : ${result}`);
}

//      값1, 값2, 이용할 함수
add(2, 4, displayResult);
// res = add(2, 4, displayResult);
// console.log(res);