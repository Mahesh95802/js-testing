const isEndWithScriptArrowFunction = (string) => string.endsWith('Script');

function isEndWithScriptRegularFunction(string) { return string.endsWith('Script'); }

module.exports = { isEndWithScriptArrowFunction, isEndWithScriptRegularFunction };

