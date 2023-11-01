let array1 = [1,2,3];
const array2 = [4,5,6];

// array1 = [2,3,4]; 정상
// array2 = [5,6,7]; 에러 - 상수라서 재정의 안됨


//console.log(array1[0]);
//console.log(array2[0]);

//array1.push(7);
//array1.push(12);
//console.log(array1);
//array1.pop();
//console.log(array1);

// let new_array1 = array1.slice(1,3); // 1=2번쨰 요소, 3=4번째 요소
// console.log(new_array1)
// slice, splice

// array1.splice(1,2); // 1=2번째 요소부터 2개 제거
// console.log(array1);

const array3 = array1.concat(array2);
console.log(array3);

// Spread 문법 (spread 연산자)
const array4 = [...array1, ...array2];
console.log(array4);

console.log(array1);
console.log(array2);

array1.splice(1, 0, ...array2); // 중간에 집어넣는 결과