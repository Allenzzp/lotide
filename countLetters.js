const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// new code starts
const countLetters = function(str) {
  const result = {};
  for (let letter of str) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

// test cases
// let str1 = "LHL";
// let str2 = "lighthouse in the house";
// console.log(countLetters(str1));
// console.log(countLetters(str2));

module.exports = countLetters;