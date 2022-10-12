const capitalize = require('./4-capitalize');

test('Is capitalized?', () => {
    expect(capitalize('string')).toBe('String');
});

test('Is a integer?', () => {
    expect(() => capitalize()).toThrow('Please insert an string');
});
