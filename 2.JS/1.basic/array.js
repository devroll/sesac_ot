// 배열 ... (텍스트) 
// 1. 배열 생성
const numbers2 = [1,2,3,4,5]; // NG
const numbers = [1, 2, 3, 4, 5]; // Good
const fruit = ['Apple', 'Banana', 'Orange'];
const mixed = [1, '1', 'hello', true, false, null {key: 'value'}];

console.log(numbers);
console.log(fruits);
console.log(mixed);

// 2. 배열 접근
console.log(numbers[0]); // 시작이 0에서 시작함..
console.log(numbers[1]); 
console.log(numbers[4]); 
console.log(numbers[5]); // 인덱스 범위를 벗어난 상태...

// 배열안에 있는 멤버를 반복접근 = 이터레이터(iterator)
for(let i = 0; i < numbers.length; i++){
    console.log(number[i])
}

// 모던언어들의 특징.. 직관적으로 접근가능한 새로운 문법
// fruit.forEach(개별멤버별로 수행할 기능을 함수로 정의)
// 익명함수 = 함수명이 없는 함수 <--- 아직 안배웠음.. 차차 배울 예정
fruits.forEach((fruit) => {
    console.log(fruit);
});

fruit.forEach(function(fruit) {
    console.log(fruit);
});

// 3. 배열 수정