const { concatinateStringsWithoutFirstCharArrowFunction, concatinateStringsWithoutFirstCharRegularFunction } = require("./concatinateStringsWithoutFirstChar")

test("Concatenate two strings except their first character using Arrow function", () => {
    expect(concatinateStringsWithoutFirstCharArrowFunction(["code", "academy"])).toBe("odecademy")
    expect(concatinateStringsWithoutFirstCharArrowFunction(["McKinsey", "code", "academy"])).toBe("Invalid Input")
    expect(concatinateStringsWithoutFirstCharArrowFunction(["code"])).toBe("Invalid Input")
    expect(concatinateStringsWithoutFirstCharArrowFunction([])).toBe("Invalid Input")
})

test("Concatenate two strings except their first character using Regular function", () => {
    expect(concatinateStringsWithoutFirstCharRegularFunction(["code", "academy"])).toBe("odecademy")
    expect(concatinateStringsWithoutFirstCharRegularFunction(["McKinsey", "code", "academy"])).toBe("Invalid Input")
    expect(concatinateStringsWithoutFirstCharRegularFunction(["code"])).toBe("Invalid Input")
    expect(concatinateStringsWithoutFirstCharRegularFunction([])).toBe("Invalid Input")
})