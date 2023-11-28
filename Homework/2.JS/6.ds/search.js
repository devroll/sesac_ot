const array = Array.from({length:1000000}, () => Math.floor(Math.random() * 10000))

// 이 함수는 배열을 받아서, 찾고자 하는 인덱스가 몇번째 있는지를 반환합니다.
// 인덱스의 출발은 1부터 출발합니다.
function linearSearch(arr, target) {
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === target){
            return i + 1; // 찾는 요소의 인덱스 반환
        }
    }
    return -1; // 요소를 찾지 못한 경우 -1 반환
}

console.log(array);
console.time('linearSearch');
console.log(linearSearch(array, 5));
console.timeEnd('linearSearch');