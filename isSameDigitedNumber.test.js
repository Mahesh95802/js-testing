const { test, expect } = require('@jest/globals');
const { isSameDigitedNumberArrowFunction, isSameDigitedNumberRegularFunction } = require('./isSameDigitedNumber');

test('check whether all the digits in a given number are the same or not using Arrow function', () => {
  expect(isSameDigitedNumberArrowFunction(123456789)).toBe(false);
  expect(isSameDigitedNumberArrowFunction(22222)).toBe(true);
  expect(isSameDigitedNumberArrowFunction('222222')).toBe(false);
  expect(isSameDigitedNumberArrowFunction('aaaaaa')).toBe(false);
});

test('check whether all the digits in a given number are the same or not using Regular function', () => {
  expect(isSameDigitedNumberRegularFunction(123456789)).toBe(false);
  expect(isSameDigitedNumberRegularFunction(22222)).toBe(true);
  expect(isSameDigitedNumberRegularFunction('222222')).toBe(false);
  expect(isSameDigitedNumberRegularFunction('aaaaaa')).toBe(false);
});