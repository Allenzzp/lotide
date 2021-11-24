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

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 3, 2], [1, 2, 3]);
// assertArraysEqual([], []);