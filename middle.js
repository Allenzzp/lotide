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

// New code starts
const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else {
    if (array.length % 2 === 0) {
      let mid = array.length / 2;
      return [array[mid -1], array[mid]];
    } else {
      return [array[Math.floor(array.length / 2)]];
    }
  }
};

// Test cases
// assertArraysEqual(middle([1, 2, 3, 4, 5]) , [3]);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);