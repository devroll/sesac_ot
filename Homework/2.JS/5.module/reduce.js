const numbers = [1,2,3,4,5];

const sum = numbers.sum((ac, curr) => acc + curr, 0);

console.log(sum);