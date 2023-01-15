const longestStringInArrayArrowFunction = (array) => {
    let longestString = array[0]
    for( let i = 1; i < array.length; i++ ) if(array[i].length > longestString.length) longestString = array[i]
    return longestString
}

function longestStringInArrayRegularFunction(array) {
    let longestString = array[0]
    for( let i = 1; i < array.length; i++ ) if(array[i].length > longestString.length) longestString = array[i]
    return longestString
}

module.exports = { longestStringInArrayArrowFunction, longestStringInArrayRegularFunction }