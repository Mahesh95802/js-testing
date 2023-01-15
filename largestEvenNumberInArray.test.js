const { largestEvenNumberInArrayArrowFunction, largestEvenNumberInArrayRegularFunction } = require("./largestEvenNumberInArray")

test("get the largest even number using Arrow Function", () => {
    expect(largestEvenNumberInArrayArrowFunction([1,2,3,4,5,6,7,8,9])).toBe(8)
    expect(largestEvenNumberInArrayArrowFunction([])).toBe(-1)
    expect(largestEvenNumberInArrayArrowFunction([1,3,5,7,-8,9])).toBe(-1)
    expect(largestEvenNumberInArrayArrowFunction([0, -5, -100])).toBe(0)
})

test("get the largest even number using Regular Function", () => {
    expect(largestEvenNumberInArrayRegularFunction([1,2,3,4,5,6,7,8,9])).toBe(8)
    expect(largestEvenNumberInArrayRegularFunction([])).toBe(-1)
    expect(largestEvenNumberInArrayRegularFunction([1,3,5,7,-8,9])).toBe(-1)
    expect(largestEvenNumberInArrayRegularFunction([0, -5, -100])).toBe(0)
})