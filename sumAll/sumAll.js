const sumAll = function(first, last) {
    if (first > last) {
        let tempFirst = last;
        last = first;
        first = tempFirst;
    } else if (first < 0 || last < 0) {
        return 'ERROR';
    } else if ((typeof first !== "number") || (typeof last !== "number")) {
        return 'ERROR';
    }
    let finalSum = 0;
    let i = first;
    do {
        finalSum += i;
        i++;
    } while (i <= last)
    return finalSum;
}

module.exports = sumAll
