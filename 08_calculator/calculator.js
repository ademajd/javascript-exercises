const add = function(...args) {
  let args1 = args;
	if (args[0] instanceof Array ) {
    args1 = args[0];
  }
  
  let sum = 0;

  args1.forEach(element => {
    sum += element;
  });

  return sum;
};

const subtract = function(arg1,arg2) {


  return arg1 - arg2 ;
};

const sum = function(...args) {
  let args1 = args;
  if (args.length == 0 || args[0].length == 0) {
    return 0;
  }
	if (args[0] instanceof Array ) {
    args1 = args[0];
  }
  
  let sum = 0;

  args1.forEach(element => {
    sum += element;
  });

  return sum;
};

const multiply = function(argss) {
  let temp = 1;
  
  for(let i = 0; i < argss.length; i++) {
    temp = temp * argss[i];
  }
  
  return temp;
};

const power = function(arg1,arg2) {
	return arg1 ** arg2;
};

const factorial = function(arg) {
    if (arg == 0) {
      return 1;
    }
    let temp = 1;
    for (let i = 1 ; i <= arg; i++) {
      temp = temp * i;
    }

    return temp;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
