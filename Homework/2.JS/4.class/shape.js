class Shape {
    constructor(type){
        this.type = type;
    }

    getArea() {
        return 0;
    }
    getInfo() {
        return "객체의 정보를 추가해주세요"
    }
    toString() {
        return `${this.type} - Area : ${this.getArea()}` 
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super('Square'); // 부모를 호출 (후에 확장)
        this.sideLength = sideLength;
    }
    // 메소드 오버라이드 : 상속 받은 함수를 재정의
    getArea() {
        return this.sideLength ** 2; // 제곱
    }
    getInfo() {
        return `정사각형, 변수의 길이는 : ${this.sideLength}` 
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super('Triangle'); // 부모를 호출 (후에 확장)
        this.base = base;
        this.height = height;
    }
    // 메소드 오버라이드 : 상속 받은 함수를 재정의
    getArea() {
        return this.base * this.height / 2; // 제곱
    }
}

class Trapezium extends Shape {
    constructor(base1, base2, height) {
        super('Trapezium'); // 부모를 호출 (후에 확장)
        this.base1 = base1;
        this.base2 = base2;
        this.height = height;
    }
    // 메소드 오버라이드 : 상속 받은 함수를 재정의
    getArea() {
        return 0.5 * (this.base1 + this.base2) * this.height; // 제곱
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle'); // 부모를 호출 (후에 확장)
        this.radius = radius
    }
    // 메소드 오버라이드 : 상속 받은 함수를 재정의
    getArea() {
        return Math.PI * (this.radius ** 2); // 제곱
    }
}

// 객체 생성 및 활용
const square = new Square(5);
// 미션1. 삼각형 추가하기
const triangle = new Triangle(4, 3);
// 미션2. 사다리꼴 추가하기
const trapezium = new Trapezium(3, 3, 6);
// 미션3. 동그라미 추가하기
const circle = new Circle(7);
console.log('Square Area', square.getArea());
console.log('Square Info', square.getInfo());
console.log('Square :', square.toString());
console.log('Triangle Area', triangle.getArea());
console.log('Triangle Area', triangle.getArea());
console.log('Trapzium Info', trapezium.getInfo());
console.log('Trapzium Area', trapezium.getArea());
console.log('Circle Area', circle.getArea());
console.log('Circle Info', circle.getInfo());
