const palindromes = function (word) {
    const wordF = word.replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, '').toLowerCase();
    let word1 = wordF.split("").reverse().join("");
    
    if(wordF === word1) {
        return true;
    }
    return false;
};


console.log(palindromes("racecar"));



// Do not edit below this line
module.exports = palindromes;
