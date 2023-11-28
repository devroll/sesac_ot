var result = 10;  // global scope
console.log("result:", result);

function add (a, b) { 
    let res = a + b;  // block scope 이 영역을 벗어나면 존재X 
    //result = 10;
    console.log("result:" + result);
    return res;
}

// console.log("res:", res);
console.log("result:", result);
result = add(2, 5);
result = sub(result, 5);
result = mul(result, 2);

// console.log(result);