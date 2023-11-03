export class GenericCalculator {
    constructor(numA, numB, operator)  {
        this.a = numA;
        this.b = numB;
        this.op = operator;
    }

    add(a, b){
        return a + b;
    }    
    sub(a, b){
        return a - b;
    }
    mul(a, b){
        return a * b;
    }
    div(a, b){
        if( b === 0 ) {
            return '0으로 나눌 수 없습니다';
        }
        return a / b;
    }

    // 연산자 선택에 따른 결과
    switch(op){
        case 3:
            this.add(this.a, this.b);
            break;
    }
}