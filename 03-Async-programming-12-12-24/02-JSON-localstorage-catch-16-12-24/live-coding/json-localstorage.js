// JSON

let obj = {
  firsName: "John",
  lastName: "hubber",
  age: 25,
};

let arr = [1, 2, 3];

let objToString = JSON.stringify(obj);
let arrToString = JSON.stringify(arr);
console.log(objToString); // '{}'
console.log(arrToString); // '[]'
let againToObj = JSON.parse(objToString);
console.log(againToObj);

// let fName = "John"; invalid
// let fName = '{ "name": "John" }'; // valid
// let fName = '{ name: "John" }'; // invalid
// let fName = { "name": "John" }; // invalid
// let fName = '{ "name": "John", "age":20,}'; // invalid
// let fName = '{ "name": "John", "age": 02}'; // invalid
let fName = '{ "name": "John", "age":20.1}'; // valid
// let fName = '{ "name": "John", "age":20.}'; // invalid
// let fName = "{ 'name': 'John', 'age':20}"; // invalid

let nameToObj = JSON.parse(fName);
console.log(nameToObj);

// localstorage

// setItem

// localStorage.setItem("object", obj); // INVALID
localStorage.setItem("stringObject", objToString);

// getItem

let dataFromLocalstorage = localStorage.getItem("stringObject");
console.log(JSON.parse(dataFromLocalstorage));
// let testObj = localStorage.getItem("object");

// console.log(JSON.parse(testObj));

// removeItem

localStorage.removeItem("object");

// clear

localStorage.clear();
