// let promiseTest = new Promise((resolve, reject) => {});

// console.log(promiseTest);

// let promiseTest = new Promise((resolve, reject) => {
//   let x = true;
//   if (x) {
//     resolve("resolve promise!");
//   } else {
//     reject("reject promise!");
//   }
// });
// console.log(promiseTest);
// promiseTest.then((result) => {
//   console.log(result);
// });

// Beispiel :

// function fName() {
//   let username;
//   setTimeout(() => {
//     username = prompt("Enter your name please !");
//   }, 1000 * 3);
//   return username;
// }

// let firstName = fName();

// console.log(`Hallo and welcome ${firstName}`);

// function fName() {
//   const fNamePromise = new Promise((resolve, reject) => {
//     let username;
//     setTimeout(() => {
//       username = prompt("Enter your name please !");
//       if (username) {
//         resolve(username);
//       } else {
//         reject(" There is no name!");
//       }
//     }, 1000 * 3);
//   });

//   return fNamePromise;
// }

// let firstName = fName();

// firstName.then((result) => {
//   console.log(`Hallo and welcome ${result}`);
// });
// console.log("test");
