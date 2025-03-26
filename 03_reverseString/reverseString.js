const reverseString = function(string) {
    let stringReversed = "";
    let i = string.length;

    while (i > 0) {
        stringReversed += string[i -1];
        i--;
    }

    return stringReversed;

};

reverseString("");

// Do not edit below this line
module.exports = reverseString;
