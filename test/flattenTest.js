const assert = require("chai").assert;
const flatten = require("../flatten");

describe("#flatten", () => {
  it("Test a long and nested array", () => {
    const test1 = [1, 2, [3, 4], 5, [6], [7, 8, [9, 10, [11, 12, [13, 14, 15, [16, 17, 18, [19, 20]]]]]]];
    const res = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    assert.deepEqual(flatten(test1), res);
  });
});