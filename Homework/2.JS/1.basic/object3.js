const today1 = Date();
console.log(today1);

// 1. Date
const today2 = new Date();
console.log(today2);

// 2. Math
const maxNumber = Math.max(10, 20, 30, 5, 3, 1);
console.log(maxNumber);

const numbers = [-10, -20, -30, -5, -3, -1];
// 미션1. 이 numbers 배열에서 가장 큰 숫자를 찾는 로직을 구현하시오.
// For If 두개의 문법 사용
// len = numbers.length;

function max_numbers(nums) {
    let res = nums[0];    
    for(let i = 0 ; i < nums.length ; i++){
        // 0번 수와 나머지 수를 비교해서 더 큰 수를 변수에 입력하기를 반복
        if(res < nums[i]){
            res = numbers[i];
        }
    }
    return res;
}

max_num = max_numbers(numbers);
console.log(max_num);

// 3. String
const text = 'Hello, World';
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());