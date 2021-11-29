const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  let report;
  if (eqArrays(arr1, arr2)) {
    report = `✅✅✅Assertion Passed: [${arr1}] === [${arr2}]`;
  } else {
    report = `❌❌❌Assertion Failed: [${arr1}] !== [${arr2}]`;
  }
  console.log(report);
};

module.exports = assertArraysEqual;
