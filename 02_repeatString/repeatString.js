const repeatString = function(string, num) {
    let stringRepeated = "";
    let i = 0;

    if (num < 0) {
        return "ERROR";
    } else {
        while (i < num) {
            stringRepeated += string;
            i++;
        }
    }

    return stringRepeated;

};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
