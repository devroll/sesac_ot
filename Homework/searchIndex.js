// 6. 함수 구현하기 (function 하나와 for/if/let 를 사용해서 구현하시오)
// 6.2 검색함수 구현 search(num), 검색된 위치 index를 출력하는

const numbers = [4, 2, 7, 1, 9, 5, 3, 6, 8];

function searchIndex(n, numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (n === numbers[i]) {
            return i;
        }
    }
}

console.log(numbers);
console.log(`${4}의 Index는 ${searchIndex(4, numbers)} 입니다.`);
console.log(`${2}의 Index는 ${searchIndex(2, numbers)} 입니다.`);
console.log(`${7}의 Index는 ${searchIndex(7, numbers)} 입니다.`);
console.log(`${9}의 Index는 ${searchIndex(9, numbers)} 입니다.`);
console.log(`${6}의 Index는 ${searchIndex(6, numbers)} 입니다.`);
