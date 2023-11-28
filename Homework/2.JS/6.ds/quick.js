// const array = Array.from({length:100}, () => Math.floor(Math.random() * 10));
const array = Array.from({length:100000}, () => Math.floor(Math.random() * 100000));
// const array = [64, 25, 12, 22, 11];

function quickSort(arr) {
    if(arr.length <= 1){
        return arr;
    } else {
        const pivot = arr[arr.length -1]; // pivot 위치는 어디로 잡아도 상관없다.
        const left = [];
        const right = [];

        for(let i = 0 ; i < arr.length - 1 ; i++){
            if(arr[i] < pivot){
                left.push(arr[i]);
            }else {
                right.push(arr[i]);
            }
        }
        return[...quickSort(left), pivot, ...quickSort(right)];
    }
}

console.log('정렬전:', array);
console.time('quickSort')
const sortedArray = quickSort(array);
console.timeEnd('quickSort')
console.log('정렬후:', sortedArray);