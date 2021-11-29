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

// New function starts
const flatElement = function(element, container) {
  if(typeof element === "number") {
    container.push(element);
  } else {
    for (let ele of element) {
      flatElement(ele, container);
    }
  }
  //return what consolog out
};

const flatten = function(nestArr) {
  const flatten = [];
  for (let ele of nestArr) {
    flatElement(ele, flatten);
  }
  return flatten;
};

// let test1 = [1, 2, [3, 4], 5, [6], [7, 8, [9, 10, [11, 12, [13, 14, 15, [16, 17, 18, [19, 20]]]]]]];

// console.log(flatten(test1));

// result [1,  2,  3,  4,  5,  6,  7, 8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
module.exports = flatten;