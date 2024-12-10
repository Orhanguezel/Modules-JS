# JS-Modules / Montag 10.12.24

## LernZiele :

1. Modules (`import`, `export`).
2. Named exports, default exports, namespace imports, default import, neben wirkung import
3. Benutzen **modules** im `Browser` und `Node.js`
4. Vorteile von `Scope-Isolierung` und `Kapselung`.
5. Der Unterschied zwischen `require` und `import`

- IIFE

```js
// users.js Datei
(function () {
  let counter = 0;
  const users = [];

  window.addUser = (user) => {
    users.push(user);
    counter++;
    console.log(`${counter} users added!`);
  };

  console.log("users initialized!");
})();
```

### Resources :

- [MDN JS-Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

- [Modules-video](https://www.youtube.com/watch?v=qgRUr-YUk1Q)

- [ES6-Modules](https://www.youtube.com/watch?v=cRHQNNcYf6s)

### Task :

- [spa-modules-basics](https://classroom.github.com/a/ixhidgR7)

- [spa-modules-calculator](https://classroom.github.com/a/q6z94oIy)
