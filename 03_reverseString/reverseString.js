const reverseString = function(revWord) {
    let w = "";
    for (let i = 0; i < revWord.length; i++) {
        w += revWord.charAt(revWord.length - 1 - i);
    }
    return w;
};

// Do not edit below this line
module.exports = reverseString;
