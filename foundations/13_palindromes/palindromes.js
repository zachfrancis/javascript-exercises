const palindromes = function (str) {
  const trimString = str.replace(/[!,. ]/g, "").toLowerCase();

  const start = trimString.slice(0, trimString.length / 2);
  const end = trimString.slice(trimString.length / 2);
  let endReversed = end.split("").reverse().join("");
  if (endReversed.length > start.length) {
    endReversed = endReversed.slice(0, -1);
  }
  return start === endReversed;
};

// Do not edit below this line
module.exports = palindromes;
