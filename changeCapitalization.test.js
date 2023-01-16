const { test, expect } = require('@jest/globals');
const { changeCapitalizationArrowFunction, changeCapitalizationRegularFunction } = require('./changeCapitalization');

test('change the capitalization of all letters in a given string and returns the result using Arrow function', () => {
  expect(changeCapitalizationArrowFunction('MeRRy hAD a LITTle lAMp')).toBe('mErrY Had A littLE LamP');
  expect(changeCapitalizationArrowFunction('MeRRy-hAD$$ a^&*LITTle&24lAMp')).toBe('mErrY-Had$$ A^&*littLE&24LamP');
  expect(changeCapitalizationArrowFunction('hey-this&')).toBe('HEY-THIS&');
  expect(changeCapitalizationArrowFunction('1234567890')).toBe('1234567890');
});

test('change the capitalization of all letters in a given string and returns the result using Regular function', () => {
  expect(changeCapitalizationRegularFunction('MeRRy hAD a LITTle lAMp')).toBe('mErrY Had A littLE LamP');
  expect(changeCapitalizationRegularFunction('MeRRy-hAD$$ a^&*LITTle&24lAMp')).toBe('mErrY-Had$$ A^&*littLE&24LamP');
  expect(changeCapitalizationRegularFunction('hey-this&')).toBe('HEY-THIS&');
  expect(changeCapitalizationRegularFunction('1234567890')).toBe('1234567890');
});