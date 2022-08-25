const sumAll = function(num1,num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (!( typeof num1 == "number") || !( typeof num2 == "number")) {
        return "ERROR";
    }


    if (num1 > num2) {
        let temp = num1;
        num1= num2;
        num2 = temp;
    }


    let c = num1;
    while (num1 < num2) {
      num1++;
      c += num1;
    }
    
    return c;
}




// Do not edit below this line
module.exports = sumAll;
