const assertEqual = require("../assertEqual");
const tail = require("../tail");

const res = tail([1, 2, 3, 4]);
assertEqual(res[0], 2);
assertEqual(res[1], 3);
assertEqual(res[2], 4);
const res1 = tail([]);
assertEqual(res1.length, 0);
