// New function starts
const flatElement = function(element, container) {
  if(typeof element === "number") {
    container.push(element);
  } else {
    for (let ele of element) {
      flatElement(ele, container);
    }
  }
};

const flatten = function(nestArr) {
  const flatten = [];
  for (let ele of nestArr) {
    flatElement(ele, flatten);
  }
  return flatten;
};

module.exports = flatten;