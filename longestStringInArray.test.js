const { test, expect } = require('@jest/globals');
const { longestStringInArrayArrowFunction, longestStringInArrayRegularFunction} = require('./longestStringInArray');

test('find the longest string from a given array using Arrow function', () => {
  expect(longestStringInArrayArrowFunction(['we', 'love', 'code', 'academy'])).toBe('academy');
  expect(longestStringInArrayArrowFunction(['we'])).toBe('we');
  expect(longestStringInArrayArrowFunction(['we', 23456723456, 'co', 'a'])).toBe('we');
  expect(longestStringInArrayArrowFunction(['we', 'love', 'code', 'academy'])).toBe('academy');
});

test('find the longest string from a given array using Regular function', () => {
  expect(longestStringInArrayRegularFunction(['we', 'love', 'code', 'academy'])).toBe('academy');
  expect(longestStringInArrayRegularFunction(['we'])).toBe('we');
  expect(longestStringInArrayRegularFunction(['we', 23456723456, 'code', 'academy'])).toBe('academy');
  expect(longestStringInArrayRegularFunction(['we', 'love', 'code', 'academy'])).toBe('academy');
});