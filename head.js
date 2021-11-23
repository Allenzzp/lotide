const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head  = function(aArr) {
  if (aArr.length > 0) {
    return aArr[0];
  } else {
    return undefined;
  }
};

assertEqual(head([1,2,3]), 1);
assertEqual(head(new Array(0)), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");