const x = 10;
let y;

const sayHi = () => "Hello World";

const arr = [1, 2, 3];

const copyArr = [...arr];

console.log(copyArr);
console.log(sayHi());

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const newUser = new User("John", 25);
console.log(newUser);
