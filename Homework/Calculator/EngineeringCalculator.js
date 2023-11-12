import { GenericCalculator } from "./GenericCalculator.js";

class EngineeringCalculator extends GenericCalculator {
    // 사인값 계산 함수
    sin(angleInDegrees) {
        // 각도를 라디안으로 변환
        const angleInRadians = angleInDegrees * (Math.PI / 180);
        // 사인값
        return Math.sin(angleInRadians);
    }
}
export { EngineeringCalculator }