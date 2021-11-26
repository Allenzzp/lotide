const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//new code
const eqObjects = function(object1, object2) {
  let keysObj1 = Object.keys(object1);
  let keysObj2 = Object.keys(object2);
  if (keysObj1.length !== keysObj2.length) {
    return false;
  } else {
    for (let key of keysObj1) {
      let value1 = object1[key];
      let value2 = object2[key];
      
      if (value2 === undefined) {
        return false;
      }

      if(value1 instanceof Array) {
        if (!eqArrays(value1, value2)) {
          return false;
        }
      } else if (value1 instanceof Object) {
        if (!eqObjects(value1, value2)) {
          return false;
        }
      } else {
        if (value1 !== value2) {
          return false;
        }
      }
    }
    return true;
  }
};

// new code
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let report;
  if (eqObjects(actual, expected)) {
    report = `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    report = `❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  console.log(report);
};

// test cases
const obj1 = {house: {location: "Van", size: 1900, home: {owner: "Allen", career: "web dev"}}, dog: true, name: "Alex"};
const obj2 = {house: {location: "Van", size: 1900, home: {owner: "Allen", career: "web dev"}}, dog: true, name: "Alex"};
const obj3 = {house: {location: "rmd", size: 1900, home: {owner: "Allen", career: "web designer"}}, dog: true, name: "Alex"};

assertObjectsEqual(obj1, obj2);
assertObjectsEqual(obj1, obj3);