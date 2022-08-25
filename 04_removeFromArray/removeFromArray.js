const removeFromArray = function(arr, ...args) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
      if (!args.includes(arr[i])) {
          arr1.push(arr[i]);
          }
    }
    return arr1;
  };
  

// Do not edit below this line
module.exports = removeFromArray;
