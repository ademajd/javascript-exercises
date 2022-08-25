const ftoc = function(fahrenheit) {
  let celsius = (5/9)*(fahrenheit - 32);
  if (hasDecimal(celsius)) {
    return Number(celsius.toFixed(1));
  }
  return celsius;
};

const ctof = function(celsius) {
  let fahrenheit = ((9/5) * celsius) + 32;
  if (hasDecimal(fahrenheit)) {
    return Number(fahrenheit.toFixed(1));
  }
  return fahrenheit;
};


const hasDecimal = function(number) {
  if(number - Math.floor(number) != 0) {
    return true;
  } else  return false;
}
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
