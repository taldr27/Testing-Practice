const Calculator = require('./3-calculator');

describe('calculator', () => {
  describe('add', () => {
    test('add 2 numbers - Test 1', () => {
        expect(Calculator.add(2, 3)).toBe(5);
    });
    test('add 2 numbers - Test 2', () => {
        expect(Calculator.add(6, 6)).toBe(12);
    });
    test('add 2 numbers - Test 3', () => {
        expect(Calculator.add(3, 3)).toBe(6);
    });
  });
  describe('subtract', () => {
    test('subtract 2 numbers - Test 1', () => {
        expect(Calculator.subtract(2, 1)).toBe(1);
    });
    test('subtract 2 numbers - Test 2', () => {
        expect(Calculator.subtract(5, 1)).toBe(4);
    });
    test('subtract 2 numbers - Test 3', () => {
        expect(Calculator.subtract(1, 1)).toBe(0);
    });
  });
  describe('divide', () => {
    test('divide 2 numbers - Test 1', () => {
        expect(Calculator.divide(6, 3)).toBe(2);
    });
    test('divide 2 numbers - Test 2', () => {
        expect(Calculator.divide(9, 3)).toBe(3);
    });
    test('divide 2 numbers - Test 3', () => {
        expect(Calculator.divide(12, 3)).toBe(4);
    });
  });
  describe('multiply', () => {
    test('multiply 2 numbers - Test 1', () => {
        expect(Calculator.multiply(3, 3)).toBe(9);
    });
    test('multiply 2 numbers - Test 2', () => {
        expect(Calculator.multiply(12, 3)).toBe(36);
    });
    test('multiply 2 numbers - Test 3', () => {
        expect(Calculator.multiply(7, 7)).toBe(49);
    });
  });
});