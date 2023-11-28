hello = "hello";

var hello = "hello";

let number = 1;
let number2 = 'hello'; // 재정의는 안됨 
let number3 = 3; 
number3 = 'hello';

// 1. 객체 생성 
// 객체(object) - 중괄호로 키벨류 형태로 감싼 데이터 유형
let person3 = {name:"Alice",age:30,job:"Engineer"}; // 적저한 스페이싱 사용할 것
let person2 = { name : "Alice", age : 30, job : "Engineer" };

let person = { 
    name : "Alice", 
    age : 30, 
    job : "Engineer" 
};

console.log(person2);


// 2. 객체 접근
console.log(person2.name);
console.log(person2.age);
console.log(person2.job);

// 3. 속성 추가
person2.location = "seoul";
console.log(person2);

// 4. 속성 변경
person2.age = 31;
console.log(person2);

// 5. 속성 삭제
delete person2.location 
console.log(person2);

// 쓰지 말것
let 한글변수 = '한글'
console.log(한글변수)

let car = {
    brand : "kia",
    year : 2020,
    start : function() {  // 함수도 추가 가능함. 초급에서는 몰라도 되고, 중급에서는 매우매우 많이 사용
        return "Engineer Started"
    },
    stop : function() {
        return "Engineer Stopped"
    }
}

console.log(car);
console.log(car.start);