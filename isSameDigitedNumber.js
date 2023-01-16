// import * as _ from 'lodash';
const _ = require('lodash');

const isSameDigitedNumberArrowFunction = (number) => {
  if(!_.isNumber(number)) return false;
  number = String(number);
  for(let i = 0; i < number.length - 1; i++) if(number[i] != number[i+1]) return false;
  return true;
};

function isSameDigitedNumberRegularFunction(number) {
  if(!_.isNumber(number)) return false;
  number = String(number);
  for(let i = 0; i < number.length - 1; i++) if(number[i] != number[i+1]) return false;
  return true;
}


module.exports = { isSameDigitedNumberArrowFunction, isSameDigitedNumberRegularFunction };