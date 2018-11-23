const reverseString = function(word) {
    let arrWord = word.split("");
    let revArr = arrWord.reverse();
    let revWord = revArr.toString();
    revWord = revWord.replace(/,/g, "");
    return revWord;
};

module.exports = reverseString;
