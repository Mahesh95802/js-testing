const largestEvenNumberInArrayArrowFunction = (array) => {
    let max = -1
    for(number of array) if(number > max && number % 2 === 0) max = number
    return max
}

function largestEvenNumberInArrayRegularFunction(array) {
    let max = -1
    for(number of array) if(number > max && number % 2 === 0) max = number
    return max
}

module.exports = { largestEvenNumberInArrayArrowFunction, largestEvenNumberInArrayRegularFunction }