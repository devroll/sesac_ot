// 객체(오브젝트) 리터럴
let car = {make:"kia", model:"K3"}

console.log(car.make);
console.log(car.model);

console.log("make" in car);  // bool값 
console.log("year" in car);  // bool값

function Car(make, model){
    this.make = make;
    this.model = model;
}

let myCar = new Car("Kia", "K3");
console.log(myCar);
console.log(myCar.make);
console.log(myCar.model);

let Car2 = new Car("Kia", "스포티지");
let Car3 = new Car("Kia", "셀토스");
let Car4 = new Car("Kia", "테슬라");