// Create a function that masks a string of characters with # except for the last four (4) characters.

function mask(string) {
    let result;
    let toReplace = string.substr(string.length-4 , string.length)
    if (string.length <= 4) {
        throw new Error("Must be longer than 4 chars.")
    }
    result = string.replace(toReplace, '####')
    return result;
}

console.log(mask("kanye west"));


/// for any number of chars:


function maskNLastChars(string, n) {
    let result;
    let toReplace = string.substr(string.length-n , string.length);

    if (string.length <= n) {
        throw new Error(`Must be longer than ${n} chars.`)
    }
    result = string.replace(toReplace, '####')
    return result;
}

console.log(maskNLastChars("kanye west", 6));

