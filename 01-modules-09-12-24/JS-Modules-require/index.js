const greetingUser = " Hallo user";

console.log(
  greetingUser === " Hallo user"
    ? require("./modules/module-1.js") + greetingUser
    : require("./modules/module-2.js")
);
