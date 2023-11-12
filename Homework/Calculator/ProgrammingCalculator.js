import { GenericCalculator } from "./GenericCalculator.js";

class ProgrammingCalculator extends GenericCalculator {
    // 문자열 to 10진수 변환
    binaryToDecimal(binaryString) {
        return parseInt(binaryString, 2);
    }
}

export { ProgrammingCalculator }
