const calculator = require('../app/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
})
  test('subtract 2 -1 to equal 1', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  })   
    test('multiply 2 * 3 to equal 6', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
  })
  test('isOdd 35 to equal odd', () => {
    expect(calculator.isOdd(35)).toBe(true);
})
test('isEven 35 to equal false', () => {
  expect(calculator.isEven(35)).toBe(false);
})
test('isEven 35 to equal false', () => {
  expect(calculator.isEven(35)).toBe(false);
})
test('divisibleBy 35 / 4 to equal false', () => {
  expect(calculator.divisibleBy(35, 4)).toBe(false);
})
test('square 4 equal 16', () => {
  expect(calculator.square(4)).toBe(16);
})
test('square 4 equal 16', () => {
  expect(calculator.square2(4)).toBe(16);
})
;