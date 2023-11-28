// 함수 정의/선언(declear) = function Definition ~~ function Prototype
function greet() {
    console.log("안녕하세요!");
    // console.log("오류"); 함수를 부르지 않으면 오류 검증도 안됨
}

// 함수 호출 = 실행
greet();

// 매개변수 (Parameter)
function greetByName(name){
    console.log("안녕하세요, ", name);
    console.log("안녕하세요, ", name, " 님");
    console.log(`안녕하세요, ${name} 님`);
}

greetByName("박수현");
greetByName("김00");
greetByName("이00");

function add2(a, b) {   // function 은 키워드, add는 함수명, a/b 함수의 파라미터(인자값)
    // console.log({a, b})
    let sum = a + b;
    // console.log(sum);
    return sum;
}

// add(2, 3);
let sum = add2(2, 5);  // 함수를 호출하면서 인수(argument)를 두개 받는 상황
console.log(sum);

// 미션1. 뺄셈함수, 곱셈, 나눗셈 함수....
// minus(), sub(),
// multiply(), multi(), mul()
// division(), div()

function sub2(a, b){
    return a - B;
}

function mul2(a, b){
    return a * b;
}

let result = mul2(2, 3);

// 익명함수
// function 함수명(파라1, 파라2, 파라3...)
let result2 = function (x, y) { return x * y };
console.log(result2(2, 5));

let result3 = function(x, y) { 
    return x * y   
};
console.log(result3(2,10));

// 화살표 함수(Arrow Function) (function 키워드도 없이, 더 간소화...)
let result4 = (x, y) => { return x * y };
console.log(result4(3, 5));

console.log('------------------------------')

// 미션
function add (a, b) { 
    let res = a + b; 
    return res;
};

function sub (a, b) { 
    let res = a - b;
    return res;
};

function mul (a, b) { 
    let res = a * b;
    return res;
};

function div(a, b) { 
    if( b === 0 ) {
        console.log("0으로 나룰 수 없습니다");
    } else {
        return a / b;
    }
};

console.log(add(8,3)); // 기대값 11
console.log(add('8',3)); // 기대값 11
console.log(add("8",3)); // 기대값 11
console.log(add(5,5,5,5)); // 기대값 11

console.log(sub(5,12)); // 기대값 -7

console.log(div(27,3)); // 기대값 9 
console.log(div(10,0));  

console.log(mul(9999,9999)); 
// 부동소수점 오류
console.log(mul(999999999999,99999999999)); 
console.log(mul(BigInt(999999999999),BigInt(99999999999)));
console.log(mul(BigInt(999999999999),BigInt(99999999999)));