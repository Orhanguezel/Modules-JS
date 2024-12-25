// Spread Operatörü

function topla(a, b, c) {
    return a + b + c;
}

let sayilar = [10, 20, 30];


// eski yöntem

console.log(topla(sayilar[0], sayilar[1], sayilar[2]));

// spread operatörü

console.log(topla(...sayilar));

const diller1 = ["Python", "Java", "C++"];
const diller2 = ["JavaScript", "C#", "Go"];

// eski yöntem
let diller = diller1.concat(diller2);
console.log(diller);

// spread operatörü
diller = [...diller1, ...diller2];
console.log(diller);

// spread operatörü ile yeni eleman ekleme
diller = ["Ruby", ...diller1, "Swift", ...diller2];
console.log(diller);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [a, b, ...rest] = numbers;
console.log(a, b, rest);


const array1 = ["ali", "veli", "deli"];
let array2 = [];

array2 = [...array1];

console.log(array2);
