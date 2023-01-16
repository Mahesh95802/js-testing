const { test, expect } = require('@jest/globals');
const { vowelCountArrowFunction, vowelCountRegularFunction} = require('./vowelCount');

test('count the number of vowels in a given string using Arrow function', () => {
  expect(vowelCountArrowFunction('codeAcademy')).toBe(5);
  expect(vowelCountArrowFunction('AeIoUzxcvbn')).toBe(5);
  expect(vowelCountArrowFunction('1234567')).toBe(0);
  expect(vowelCountArrowFunction('1234567@#$%')).toBe(0);
});

test('count the number of vowels in a given string using Regular function', () => {
  expect(vowelCountRegularFunction('codeAcademy')).toBe(5);
  expect(vowelCountRegularFunction('AeIoUzxcvbn')).toBe(5);
  expect(vowelCountRegularFunction('1234567')).toBe(0);
  expect(vowelCountRegularFunction('1234567@#$%')).toBe(0);
});