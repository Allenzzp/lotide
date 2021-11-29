const head = require("../head");
const assertEqual = require("../assertEqual");

assertEqual(head([1,2,3]), 1);
assertEqual(head(new Array(0)), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");