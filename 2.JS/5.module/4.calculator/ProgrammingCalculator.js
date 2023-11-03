import { GenericCalculator } from "./GenericCalculator"; 

export class ProgrammingCalculator extends GenericCalculator {        
    binarytoDecimal(binaryString){
        return parseInt(binaryString, 2);
    }
}