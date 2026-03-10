const fibonacci = function (num) {
  let n = Number(num);

  if (n < 0) return "OOPS";
  if (n == 0) return 0;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, curr + prev];
  }
  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
