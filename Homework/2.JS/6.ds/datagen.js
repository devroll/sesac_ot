// 랜덤으로 100개의 숫자 만들기
const array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

console.log(array)

// 랜덤으로 100개의 숫자 겹치지 않게 만들기 : Set의 특성. 겹치지 않는다.
const uniqueRandomNumbers = new Set();
console.log(uniqueRandomNumbers.size);

while (uniqueRandomNumbers.size < 100) {
    uniqueRandomNumbers.add(Math.floor(Math.random() * 100));
}

console.log(uniqueRandomNumbers);
const array2 = Array.from(uniqueRandomNumbers);
console.log(array2);

// 직접 구현하려면?
// count 갯수만큼
function uniqueRandomNum(count) {
    let uniqueRandomNumbers2 = [];
    while (uniqueRandomNumbers2.size < count) {
        let randomNumber = Math.floor(Math.random() * count);
        for (let i = 0; i < uniqueRandomNumbers2.length; i++) {
            if (randomNumber === uniqueRandomNumbers2[i]) {
                uniqueRandomNumbers2.push(randomNumber);
            }
        }
    }
}

