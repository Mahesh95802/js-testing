// const { default: test } = require("node:test")
const { test, expect } = require('@jest/globals');
const { addOneToEachCharArrowFunction, addOneToEachCharRegularFunction } = require('./addOneToEachChar');

test('Replacing every character in a given string with the character following it in the alphabet using Arrow finction', () => {
  expect(addOneToEachCharArrowFunction('abcd')).toBe('bcde');
  expect(addOneToEachCharArrowFunction('Ab456Cd')).toBe('Bc456De');
  expect(addOneToEachCharArrowFunction('Aa@$%^Zz')).toBe('Bb@$%^Aa');
  expect(addOneToEachCharArrowFunction('XYzZxy')).toBe('YZaAyz');
});

test('Replacing every character in a given string with the character following it in the alphabet using Regular finction', () => {
  expect(addOneToEachCharRegularFunction('abcd')).toBe('bcde');
  expect(addOneToEachCharRegularFunction('Ab456Cd')).toBe('Bc456De');
  expect(addOneToEachCharRegularFunction('Aa@$%^Zz')).toBe('Bb@$%^Aa');
  expect(addOneToEachCharRegularFunction('XYzZxy')).toBe('YZaAyz');
});