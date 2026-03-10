const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((sum, x) => sum + x, 0);
};

const multiply = function (arr) {
  return arr.reduce((prod, x) => prod * x, 1);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (x) {
  if (x <= 1) {
    return 1;
  }
  total = x;
  for (let i = x - 1; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
