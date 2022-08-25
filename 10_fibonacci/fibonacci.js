const fibonacci = function(fibNum) {
    if (fibNum < 0) {
        return "OOPS"
    }
    let num1 = 0;
    let num2 = 1;
    let num3 = 0;
    let counter = 1;
    let fibArray = [1];

    while (counter < fibNum) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        fibArray.push(num3);
        counter++;
    }
    return Number(fibArray[fibArray.length -1]);
};


console.log(fibonacci(4));
// Do not edit below this line
module.exports = fibonacci;
