const numbers = [4, 2, 7, 1, 9, 13, 5, 3, 6, 8];
// const numbers = [-10, -20, -30, -5, -3, -1];

// 미션1. Max
// For If 두개의 문법 사용
function max_numbers(numbers) {
    let res = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        // 0번 수와 나머지 수를 비교해서 더 큰 수를 변수에 입력하기를 반복
        if (res < numbers[i]) {
            res = numbers[i];
        }
    }
    return res;
}
max_num = max_numbers(numbers);
console.log("max : ", max_num);

// 미션2. Min
function min_numbers(numbers) {
    let res = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        // 0번 수와 나머지 수를 비교해서 더 큰 수를 변수에 입력하기를 반복
        if (res > numbers[i]) {
            res = numbers[i];
        }
    }
    return res;
}
min_num = min_numbers(numbers);
console.log("min : ", min_num);


// 미션3. Avg
function avg_numbers(numbers) {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    console.log('합계 : ', sum);
    return sum / numbers.length;
}
avg_num = avg_numbers(numbers);
console.log("평균 : ", avg_num);