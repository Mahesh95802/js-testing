const concatinateStringsWithoutFirstCharArrowFunction = (array) => {
  if(array.length !== 2 ) return 'Invalid Input';
  let concatinatedString = '';
  array.forEach( string => concatinatedString += string.slice(1) );
  return concatinatedString;
};

function concatinateStringsWithoutFirstCharRegularFunction(array) {
  if(array.length !== 2 ) return 'Invalid Input';
  let concatinatedString = '';
  array.forEach( string => concatinatedString += string.slice(1) );
  return concatinatedString;
}

module.exports = { concatinateStringsWithoutFirstCharArrowFunction, concatinateStringsWithoutFirstCharRegularFunction };