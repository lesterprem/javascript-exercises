const palindromes = function (word) {
const checkedword= word.toLowerCase().replace(/[^a-z0-9]/g, "");
    return checkedword.split("").reverse().join("")===checkedword;
};

// Do not edit below this line
module.exports = palindromes;
