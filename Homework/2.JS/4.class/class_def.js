// class declaration = 객체 선언(정의)

class Car {
    constructor(make, model){
        this._make = make;
        this._model = model;
    }
    drive(){
        return `${this._make} ${this._model}이 운행중입니다`
    }
    stop(){
        return `${this._make} ${this._model}차가 멈췄습니다`
    }
}

const myCar = new Car('Kia', 'K3');
const yourCar = new Car('Tesla', 'Model3');

console.log(myCar.make);
myCar._make = 'Hyundai'; // 비추... _는 접근하지 마세요. getter,setter로 하세요
console.log(myCar.drive());
console.log(myCar.make);
console.log(myCar.make);
console.log(yourCar.make);
console.log(yourCar.make);
console.log(yourCar.drive());
console.log(yourCar.stop());