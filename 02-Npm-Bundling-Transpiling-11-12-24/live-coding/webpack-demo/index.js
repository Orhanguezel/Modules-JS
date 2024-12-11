// import add from "./module/module-a.js";
// import { multiply } from "./module/module-b.js";
const add = require("./module/module-a.js");
const multiply = require("./module/module-b.js");

const addResult = add(1, 2);
console.log("addResult:", addResult);

const multiplyResult = multiply(2, 3);
console.log("multiplyResult:", multiplyResult);
