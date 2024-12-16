// localstoge

// setItem

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrStr = JSON.stringify(arr);


localStorage.setItem('arr', arrStr);

// getItem

let arrStr2 = localStorage.getItem('arr');
console.log(arrStr2);
console.log(JSON.parse(arrStr2));

// removeItem

localStorage.removeItem('arr');

// clear

localStorage.clear();
