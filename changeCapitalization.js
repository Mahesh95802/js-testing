const changeCapitalizationArrowFunction = (string) => {
    let reverseCapitizedString = ''
    for (let i = 0; i < string.length; i++) { 
        reverseCapitizedString += string[i] == string[i].toUpperCase() ? string[i].toLowerCase() : string[i].toUpperCase() 
    }
    return reverseCapitizedString
}

function changeCapitalizationRegularFunction(string) {
    let reverseCapitizedString = ''
    for (let i = 0; i < string.length; i++) { 
        reverseCapitizedString += string[i] == string[i].toUpperCase() ? string[i].toLowerCase() : string[i].toUpperCase() 
    }
    return reverseCapitizedString
}

module.exports = { changeCapitalizationArrowFunction, changeCapitalizationRegularFunction }