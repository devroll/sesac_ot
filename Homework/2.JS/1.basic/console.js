console.log("hello");

const greeting = 'hello, world';
console.log(greeting);

const a = 10;
const b = 20;
console.log('Number : ', a, b);
console.log('Number : a=' + a + ', b=' + b);
console.log('Number : ${a} ${b}');
console.log(`Number : ${a} ${b}`); // template literal
console.log({a, b})
console.log('%c 스타일 적용', 'color:black; font-weight:bold');
console.log('\u2713', '\u2717');

const username = 'alice';
const age = 20;

console.log(`Name : ${username}, Age: ${age}`);
console.log(`Hello, World`);

// 안되는 것
// let 1hello = 50;
// let hello-world = "hello world";
// let %hello = 50;
let _hello = 'hello'; // 이거만 가능. 객체지향에서 내부에서 쓰는 변수명 


