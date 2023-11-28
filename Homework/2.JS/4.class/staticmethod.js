
// static method = 객체의 생성없이
// 객체 = 변수 + 함수 
//        변수 : setter/getter 입출력
// 객체1 = new 객체()
// 객체2 = new 객체()
// 객체를 생성하지 않고 바로 안에 있는 함수를 실행하기 위해서 static 함수를 사용한다. 

class MathOperation {
    static add(x, y){
        return x + y;
    }

    static subtract(x, y){
        return x - y;
    }
}

console.log(MathOperation.add(5,3));
console.log(MathOperation.subtract(10,3));