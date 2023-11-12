class GenericCalculator {
    constructor(numA, numB, operator) {
        this.a = numA;
        this.b = numB;
        this.op = operator;
    }

    add(a, b) {
        return a + b;
    }
    sub(a, b) {
        return a - b;
    }
    mul(a, b) {
        return a * b;
    }
    div(a, b) {
        if (b === 0) {
            return '0으로 나눌 수 없습니다';
        }
        return a / b;
    }

    Test() {
        return `${this.a} test`;
    }

    // 연산자 선택 → 공식 대입
    FourBasicOperations() {
        // console.log(op);
        switch (this.op) {
            case '+':
                return this.add(this.a, this.b);
                break;
            case '-':
                return this.sub(this.a, this.b);
                break;
            case '*':
                return this.mul(this.a, this.b);
                break;
            case '/':
                return this.div(this.a, this.b);
                break;
        }
        // console.log(mul(this.a, this.b))
    }
}

export { GenericCalculator };

// const gCal = new GenericCalculator(6, 2, '*');
// console.log(gCal.FourBasicOperations());
// console.log(gCal.Test());