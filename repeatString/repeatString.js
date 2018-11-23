const repeatString = function(testString, n) {
    let repeatedString = '';
    if (n < 0) return 'ERROR';
    for (let i = 0; i < n; i++) {
        repeatedString += testString;
    }
    return repeatedString;
}

module.exports = repeatString
