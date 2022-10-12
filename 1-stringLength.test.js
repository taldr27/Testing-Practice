const stringLength = require('./1-stringLength');

test('string Length greater than 1', () => {
  expect(stringLength('asdasdasd')).toBe(9);
});

test ('string has too many characters', () => {
    expect(() => stringLength('aaaaaaaaaaaaaaaaaa')).toThrow('string.length greater than 10');
})

test ('string is too short', () => {
    expect(() => stringLength('')).toThrow('string.length less than 1');
})