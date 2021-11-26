const takeUntil = function(array, callback) {
  const box = [];
  for (let element of array) {
    if(!callback(element)) {
      box.push(element);
    } else {
      break;
    }
  }
  return box;
}

// test cases:
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('--------------');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);