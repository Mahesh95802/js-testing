const isLeapYearArrowFunction = (year) => year !== 0 ? ((year % 4 === 0 && year % 100 !== 0 && year > 0) ? true : false) : true

function isLeapYearRegularFunction(year) {
    return year !== 0 ? ((year % 4 === 0 && year % 100 !== 0 && year > 0) ? true : false) : true
}

module.exports = { isLeapYearArrowFunction, isLeapYearRegularFunction }