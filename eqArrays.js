
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

module.exports = eqArrays;