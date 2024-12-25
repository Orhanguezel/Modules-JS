// for in - for of  -   for each

let names = ["Ali", "Veli", "Deli"];

names.forEach((name, index) => {
    console.log(index, name);
}
);

names.forEach(function(name){
    console.log(name);
})

names.forEach(name => console.log(name));

// for in
// for in döngüsü sadece enumerable özellikleri döner

for(let name in names){
    console.log(name);
}

let person = {
    name: "Ali",
    age: 25
}

for(let prop in person){
    console.log(prop, person[prop]);
}

// for of

for(let name of names){ // sadece iterable objelerde kullanılır
    console.log(name, names.indexOf(name));
}

let string = "Ali Veli Deli";
for(let char of string){
    console.log(char);
}

let map = new Map();
map.set("name", "Ali");
map.set("age", 25);

for(let [key, value] of map){
    console.log(key, value);
}

let set = new Set([1, 2, 3, 4, 5]);

for(let value of set){
    console.log(value);
}


