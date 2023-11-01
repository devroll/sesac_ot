// 6. 함수 구현하기 (function 하나와 for/if/let 를 사용해서 구현하시오)
// 6.2 검색함수 구현 search(num), 검색된 위치 index를 출력하는

const nums = [ 4, 2, 7, 1, 9, 5, 3, 6, 8 ];

function searchIndex(n, nums) {
    for (let i = 0 ; i < nums.length ; i++){
        if(n === nums[i]){
            return i;
        }        
    }    
}

console.log(nums);
console.log(`${4}의 Index는 ${searchIndex(4, nums)} 입니다.`);
console.log(`${2}의 Index는 ${searchIndex(2, nums)} 입니다.`);
console.log(`${7}의 Index는 ${searchIndex(7, nums)} 입니다.`);
console.log(`${9}의 Index는 ${searchIndex(9, nums)} 입니다.`);
console.log(`${6}의 Index는 ${searchIndex(6, nums)} 입니다.`);
