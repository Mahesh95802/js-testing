const vowelCountArrowFunction = (string) => string.match(/[aeiouAEIOU]/gi) ? string.match(/[aeiouAEIOU]/gi).length : 0

function vowelCountRegularFunction(string) { return string.match(/[aeiouAEIOU]/gi) ? string.match(/[aeiouAEIOU]/gi).length : 0 }

module.exports = { vowelCountArrowFunction, vowelCountRegularFunction }