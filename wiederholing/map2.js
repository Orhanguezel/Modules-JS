const map1= new Map();

let value=
map1.set('key1', 'value1');
map1.set('key2', 'value2');
map1.set("ankara", "baskent")


//Get
console.log(map1.get('key1')); // value1
console.log(map1.get('key2')); // value2
console.log(map1.get('ankara')); // baskent

//size

console.log(value); // 3


// Delete 
map1.delete('key1');
console.log(map1.get('key1')); // undefined
console.log(map1.size); // 2


// Has
console.log(map1.has('key1')); // false
console.log(map1.has('key2')); // true

// Clear
// map1.clear();
//console.log(map1.size); // 0


// for of map üzerinde gezinme

for(let [key, value] of map1){
    console.log(key, value);
}

// sadece key'leri almak istersek
for(let key of map1.keys()){
    console.log(key);
}

// sadece value'leri almak istersek

for(let value of map1.values()){
    console.log(value);
}

// Arraylerden Map oluşturmak

const array1= [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']];
const lastMap= new Map(array1);


array1.forEach(element => {
    console.log(element);
});

// Maplerden Array oluşturmak

const array2= Array.from(map1);
console.log(array2);

// Maplerden Array oluşturmak 2. yö
const array3= Array.from(map1.keys());
console.log(array3);

const array4= Array.from(map1.values());
console.log(array4);

// Maplerden Array oluşturmak 3. yö
const array5= [...map1];
console.log(array5);

const array6= [...map1.keys()];
console.log(array6);



