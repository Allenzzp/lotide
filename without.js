const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const assertArraysEqual = function(arr1, arr2) {
  let report;
  if (eqArrays(arr1, arr2)) {
    report = `✅✅✅Assertion Passed: ${arr1} === ${arr2}`;
  } else {
    report = `❌❌❌Assertion Failed: [${arr1}] !== [${arr2}]`;
  }
  console.log(report);
};

const without = function(source, unwanted) {
  let remainedArray = [];
  for (let ele of source) {
    if (unwanted.indexOf(ele) < 0) {//modify to increase readibility
      remainedArray.push(ele);
    }
  }
  return remainedArray;
};

// Test Cases
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);