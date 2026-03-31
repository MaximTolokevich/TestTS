import { Calculator } from '../src/calculator';

describe('Calculator', () => {
    let calc: Calculator;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('should correctly add two numbers', () => {
        expect(calc.add(2, 3)).toBe(5);
    });

    test('should correctly subtract two numbers', () => {
        expect(calc.subtract(10, 4)).toBe(6);
    });

    test('should correctly multiply two numbers', () => {
        expect(calc.multiply(3, 4)).toBe(12);
    });

    test('should correctly divide two numbers', () => {
        expect(calc.divide(10, 2)).toBe(5);
    });

    test('should throw error when dividing by zero', () => {
        expect(() => calc.divide(10, 0)).toThrow("Division by zero");
    });
});
