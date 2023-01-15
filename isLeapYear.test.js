const { isLeapYearArrowFunction, isLeapYearRegularFunction } = require("./isLeapYear")

test("determine and print whether a given year is a leap year or not using Arrow function", () => {
    expect(isLeapYearArrowFunction(2000)).toBe(false)
    expect(isLeapYearArrowFunction(-2044)).toBe(false)
    expect(isLeapYearArrowFunction(0)).toBe(true)
    expect(isLeapYearArrowFunction(2004)).toBe(true)
})

test("determine and print whether a given year is a leap year or not using Regular function", () => {
    expect(isLeapYearRegularFunction(2000)).toBe(false)
    expect(isLeapYearRegularFunction(-2044)).toBe(false)
    expect(isLeapYearRegularFunction(0)).toBe(true)
    expect(isLeapYearRegularFunction(2004)).toBe(true)
})