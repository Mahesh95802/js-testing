const addOneToEachCharArrowFunction = (string) => {
  let modifiedString = '';
  for (let i = 0; i < string.length; i++) {
    if (96 < string.charCodeAt(i) && string.charCodeAt(i) < 123) {
      modifiedString += String.fromCharCode(((string.charCodeAt(i) + 1) / 122) > 1 ? ((string.charCodeAt(i) + 1) % 123 + 97) : string.charCodeAt(i) + 1 );
    } else if (64 < string.charCodeAt(i) && string.charCodeAt(i) < 91) {
      modifiedString += String.fromCharCode(((string.charCodeAt(i) + 1) / 90) > 1 ? ((string.charCodeAt(i) + 1) % 91 + 65) : string.charCodeAt(i) + 1 );
    } else {
      modifiedString += string[i];
    }
  }
  return modifiedString;
};

function addOneToEachCharRegularFunction(string) {
  let modifiedString = '';
  for (let i = 0; i < string.length; i++) {
    if (96 < string.charCodeAt(i) && string.charCodeAt(i) < 123) {
      modifiedString += String.fromCharCode((string.charCodeAt(i) - 96) % 26 + 97 );
    } else if (64 < string.charCodeAt(i) && string.charCodeAt(i) < 91) {
      modifiedString += String.fromCharCode((string.charCodeAt(i) - 64) % 26 + 65 );
    } else {
      modifiedString += string[i];
    }
  }
  return modifiedString;
}

module.exports = { addOneToEachCharArrowFunction, addOneToEachCharRegularFunction };