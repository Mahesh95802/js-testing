// const { default: test } = require("node:test")
const { addOneToEachCharArrowFunction, addOneToEachCharRegularFunction } = require("./addOneToEachChar")

test('Replacing every character in a given string with the character following it in the alphabet using Arrow finction', () => {
    expect(addOneToEachCharArrowFunction("abcd")).toBe("bcde")
    expect(addOneToEachCharArrowFunction("Ab456Cd")).toBe("BcDe")
    expect(addOneToEachCharArrowFunction("Aa@$%^Zz")).toBe("BbAa")
    expect(addOneToEachCharArrowFunction("XYzZxy")).toBe("YZaAyz")
})

test('Replacing every character in a given string with the character following it in the alphabet using Regular finction', () => {
    expect(addOneToEachCharRegularFunction("abcd")).toBe("bcde")
    expect(addOneToEachCharRegularFunction("Ab456Cd")).toBe("BcDe")
    expect(addOneToEachCharRegularFunction("Aa@$%^Zz")).toBe("BbAa")
    expect(addOneToEachCharRegularFunction("XYzZxy")).toBe("YZaAyz")
})