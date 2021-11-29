const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  let report;
  if (eqArrays(arr1, arr2)) {
    report = `✅✅✅Assertion Passed: [${arr1}] === [${arr2}]`;
  } else {
    report = `❌❌❌Assertion Failed: [${arr1}] !== [${arr2}]`;
  }
  console.log(report);
};

// new code

const letterPositions = function(sentence) {
  const result = {};
  for (let letter in sentence) {
    //letter is in string
    letter = Number(letter);
    if (sentence[letter] !== " ") {
      if (result[sentence[letter]]) {
        result[sentence[letter]].push(letter);
      } else {
        result[sentence[letter]] = [letter];
      }
    }
  }
  return result;
};

// test cases
// let str1 = "LHL";
// let str2 = "lighthouse in the house";
// console.log(letterPositions(str1));
// console.log(letterPositions(str2));

// assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;