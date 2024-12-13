// Sync code example
/*
console.log('before alert');

alert('Hello World! I`M SYNC CODE!');
console.log('after alert');

prompt('Enter your name: ', 'John Doe');
console.log('after prompt');

for (let i = 0; i < 1000000000; i++) {
  // some code

  if (i === 999999999) {
    console.log('Loop is done');
  }
}

console.log('after loop');

*/
/*
// async code example
setTimeout(() => {
    console.log('Hello from setTimeout');
    }, 1000*5);
    alert('Hello World! I`M ASYNC CODE!');  //vermeiden von alert, weil es blockiert den code

    console.log('after time out');

  */
 /*
    
    // Promise example

    let promiseTest = new Promise((resolve, reject) => {
      let x=true;
      if(x){
        resolve('Promise is resolved');
      }else {
        reject('Promise is rejected');
      }

    }
        
    );
console.log(promiseTest);

promiseTest.then((result) => {
  console.log(result);
});

*/
/*
function fName(){
  let userName;
  setTimeout(() => {
    userName = prompt('Enter your name: ', 'John Doe');
  }, 1000*5);
  return userName;
}

let firstName = fName();

console.log(`Hallo ${firstName}`);  //undefined, weil die Funktion asynchron ist und die Variable userName noch nicht definiert ist
*/

function fName(){
  const promise = new Promise((resolve, reject) => {
    let userName;
    setTimeout(() => {
      userName = prompt('Enter your name: ');
      if(userName){
      resolve(userName);
    } else {
      reject('You did not enter your name');
    }

    }, 1000*2);
    
  }); 
  return promise;
}

let firstName = fName();

firstName.then((result) => {
  console.log(`Hallo ${result}`);
}
);


//undefined, weil die Funktion asynchron ist und die Variable userName noch nicht definiert ist






