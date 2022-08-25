const UpShifter = function(num1, shifter) {

    if (num1 > 64 && num1 < 91 ) {
            if (shifter < 0) {
                console.log("hini");
                if ((num1 + shifter) < 65) {
                    let b = (num1 - 65);
                    let c = b + shifter;
                    return 91 + c;
                }
            }

            if (shifter > 0) {
                console.log("hini");
                if ((num1 + shifter > 90)) {
                    console.log("hini2");
                    let a = (90 - num1);
                    let b = shifter - a;
                    return 64 + b;
                }
            }

    }

    if (num1 >96 && num1 < 122 ) {
        if ((num1 + shifter) < 97) {
            let b = (num1 - 97);
            let c = b + shifter;
            return 123 + c;
        }

    }
    
    if (shifter > 0) {
        if ((num1 + shifter > 122)) {
            let a = (122 - num1);
            let b = shifter - a;
            return 96 + b;
        }
    }

    return num1 + shifter;

}






const caesar = function(word, shiftNum) {
    let codeWord ="";
    let codeWordArray = [];
    for (let i = 0; i < word.length; i++) {
        let currentChar = word.charAt(i);
        if(currentChar.match(/^[a-zA-Z]*$/)) {
            // codeWordArray.push(word.charCodeAt(i) + shiftNum);
            // let tempChar = word.charCodeAt(i) + shiftNum;
            let tempChar = UpShifter(word.charCodeAt(i),shiftNum);
            console.log(tempChar);
            // console.log(tempChar);
            codeWord += String.fromCharCode(tempChar);
            continue;
        }
        codeWord += currentChar;

}
return codeWord;
};

let text = "B";
console.log(text.charCodeAt(0));

// console.log(UpShifter(text.charCodeAt(0),+5));

 
console.log(caesar('Hello, World!', 75));



// Do not edit below this line
module.exports = caesar;
