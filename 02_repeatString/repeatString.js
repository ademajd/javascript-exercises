


const repeatString = function(sent,num) {
     const arrayString = [];
     if(num < 0) {
        return "ERROR";
     }
    for(let i = 0; i < num; i++) {
        arrayString.push(sent);
    }

    return arrayString.join("");

};

// Do not edit below this line
module.exports = repeatString;
