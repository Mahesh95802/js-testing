const { test, expect } = require('@jest/globals');
const { isEndWithScriptArrowFunction, isEndWithScriptRegularFunction } = require('./isEndWithScript');

test('test whether a string end with "Script"(case-sensitive) using Arrow function', () => {
  expect(isEndWithScriptArrowFunction('javaScript')).toBe(true);
  expect(isEndWithScriptArrowFunction('javascript')).toBe(false);
  expect(isEndWithScriptArrowFunction('javaScriptisGood')).toBe(false);
  expect(isEndWithScriptArrowFunction('cript')).toBe(false);
});

test('test whether a string end with "Script"(case-sensitive) using Regular function', () => {
  expect(isEndWithScriptRegularFunction('javaScript')).toBe(true);
  expect(isEndWithScriptRegularFunction('javascript')).toBe(false);
  expect(isEndWithScriptRegularFunction('javaScriptisGood')).toBe(false);
  expect(isEndWithScriptRegularFunction('cript')).toBe(false);
});