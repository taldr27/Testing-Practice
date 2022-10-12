const reverseString = require('./2-reverseString');

test('reversing String?', () => {
  expect(reverseString('JOJO')).toMatch('OJOJ');
});