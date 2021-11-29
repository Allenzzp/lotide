const myMap = function(array, callbk) {
  const result = [];
  for (let element of array) {
    result.push(callbk(element));
  }
  return result;
}
// test cases:
// const words = ["ground", "control", "to", "major", "tom"];

// const res1 = myMap(words, word => word[0]);
// console.log(res1);

// test case2:
// const input = [
//   { x: 3, y: 4 },
//   { x: 12, y: 5 },
//   { x: 8, y: 15 }
// ];
// const result = input.map(obj => {
//   const addSqr = obj.x * obj.x + obj.y * obj.y;
//   return Math.sqrt(addSqr);
// });

// console.log(result[0] === 5);
// console.log(result[1] === 13);
// console.log(result[2] === 17);

module.exports = myMap;

