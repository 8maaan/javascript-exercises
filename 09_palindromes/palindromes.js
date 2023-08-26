const palindromes = function(string) {
    const cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = cleanString.length - 1;

    while (left < right) {
        if (cleanString[left] !== cleanString[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};


// console.log(palindromes("racecar"));

// Do not edit below this line
module.exports = palindromes;
