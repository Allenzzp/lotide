const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};
//[[2, 3], [4]] 
//[[2, 3], [4]]
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      const item1 = arr1[i];
      const item2 = arr2[i];
      if (Array.isArray(item1) && (Array.isArray(item2))) {
        if (!eqArrays(item1, item2)) {
          return false;
        };
      } else if ((Array.isArray(item1) && !Array.isArray(item2)) || (!Array.isArray(item1) && Array.isArray(item2))) {
        return false;
      } else {
        if (item1 !== item2) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

// Test cases
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), true);
// assertEqual(eqArrays([], []), true);

// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true

// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
// console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
console.log(eqArrays(
  [1,2,3,[4,5],[6,[7,8],[9,10]]],
  [1,2,3,[4,5],[6,[7,8],[9,11]]]
));