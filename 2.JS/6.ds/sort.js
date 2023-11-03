// const array = [64, 25, 12, 22, 11];
// const array = Array.from({length:100}, () => Math.floor(Math.random() * 10));
const array = Array.from({length:100000}, () => Math.floor(Math.random() * 100000));

function selectionSort(arr){
    const length = arr.length;
    for(let i = 0 ; i < length ; i++){
        let minIndex = i;

        // i부터 배열의 끝까지 최소값을 찾음
        for( j = i+1 ; j < length ; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        // 최소값을 현재 우 ㅣ치로 교화너
        if(minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

console.log('정렬전:', array);
console.time('selectionSort')
const sortedArray = selectionSort(array);
console.timeEnd('selectionSort')
console.log('정렬후:', sortedArray);