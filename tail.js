const tail = function(aArr) {
  return aArr.slice(1);
};

const assertEqual = function(actual, expected) {
  if (typeof actual === "object") {
    if (actual.length === expected.length) {
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
          console.log(`❌❌❌Assertion Failed: [${actual}] !== [${expected}]`);
          break;
        }
      }
      console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`❌❌❌Assertion Failed: [${actual}] !== [${expected}]`);
    }
  } else {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};

// assertEqual(tail([1,2,3,4]), [2,3,4]);
// assertEqual(tail([]), []);
// console.log(tail([2]));
