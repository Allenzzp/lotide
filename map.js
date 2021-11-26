const myMap = function(array, callbk) {
  const result = [];
  for (let element of array) {
    result.push(callbk(element));
  }
  return result;
}
// test cases:
const words = ["ground", "control", "to", "major", "tom"];

const res1 = myMap(words, word => word[0]);
console.log(res1);