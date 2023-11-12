import { GenericCalculator } from "./GenericCalculator.js";

class StandardCalculator extends GenericCalculator {
    // 제곱근 계산 함수 
    sqrt(number) {
        return Math.sqrt(number);
    }
}

export { StandardCalculator }

const sCal = new StandardCalculator(2, 3, '+');
console.log(sCal.FourBasicOperations);
console.log(sCal.Test);

