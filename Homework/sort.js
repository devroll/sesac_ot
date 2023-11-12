// 6. 함수 구현하기 (function 하나와 for/if/let 를 사용해서 구현하시오)
// 6.1 소팅함수 구현 sort(), 예) [4,2,7,1,9,5]

const numbers = [ 4, 2, 7, 1, 9, 5, 3, 6, 8 ]

function sort(numbers) {
    for(let i = 0 ; i < numbers.length ; i++){
        for(let j = i+1 ; j < numbers.length ; j++){
            if(numbers[i] > numbers[j]){
                temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers;
}

numsSort = sort(numbers); 
let printNum = '';
for(let i = 0 ; i < numsSort.length ; i++){ 
    printNum += i 
    if(i != numsSort.length - 1){
        printNum += ' < '
    }
}
console.log("순서대로 정렬 : ", printNum);
