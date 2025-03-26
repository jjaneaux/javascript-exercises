const removeFromArray = function(array, ...toRemove) {
    let newArray = array;
    let removeIndex = newArray.indexOf(toRemove);

    // Remove a single instance
    // newArray.splice(removeIndex, 1);

    // Remove all isntances
    return array.filter(item => !toRemove.includes(item));
};

let numbers = [1, 2, 3, 4, 5, 3, 4, 5, 3, "hey"];
removeFromArray(numbers, 1, "hey", 5);
console.log(numbers);

// Do not edit below this line
module.exports = removeFromArray;
