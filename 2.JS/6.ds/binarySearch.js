function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length -1;

    while(left <= right){
        const mid = Math.floor((left + right) / 2); // 중간 포지션 계산
        console.log('mid:', mid);
        if(arr[mid] === target){
            return mid; // 결과를 찾았음
        } else if(arr[mid] < target) {
            left = mid + 1; // 중간 값보다 타겟이 크면? 중간에서 출발...
        } else {
            right = mid -1; // 중간 값보다 타겟이 작으면? 중간에서 끝...
        }
    }
    return -1; // 요소를 못찼음... 
}

const sortedArray = [ 1, 3, 5, 7, 9, 11, 13, 17, 19];
const unsortedArray = [ 1, 5, 7, 13, 9, 11, 17, 19]; // 사용X

const target = 13;
const result = binarySearch(sortedArray, target);
console.log('결과: ', result);