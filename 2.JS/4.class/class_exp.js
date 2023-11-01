const Car = class {
    constructor(make, model){
        this._make = make;
        this._model = model;
    }
    drive(){
        return `${this._make} ${this._model}이 운행중입니다`
    }   
}

const myCar = new Car('Tesla', 'Model 3');
console.log(myCar.drive());