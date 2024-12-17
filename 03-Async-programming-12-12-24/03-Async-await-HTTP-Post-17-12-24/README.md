# Async...await, HTTP Post / Dienstag 17.12.24

## Lernziele :

1. Was ist `Promises Probleme` ?

2. Was ist `Callback-hell` ?

```js
fetch("/api/checkLogin")
  .then((x) => x.json())
  .then((user) => {
    if (!user) {
      return alert("Bitte einloggen");
    }
    fetch("/api/subscriptions")
      .then((x) => x.json())
      .then((subscriptions) => {
        subscriptions.forEach((sub) => {
          fetch(`/api/posts/${sub.id}`)
            .then((x) => x.json())
            .then((posts) => {
              posts.forEach((post) => {
                fetch(`/api/comments/${post.id}`)
                  .then((x) => x.json())
                  .then((comments) => {
                    comments.forEach((comment) => {
                      fetch(`/api/upvotes/${comment.id}`)
                        .then((x) => x.json())
                        .then((upvotes) => {
                          showData(subscriptions, posts, comments, upvotes);
                        })
                        .catch(handleError);
                    });
                  })
                  .catch(handleError);
              });
            })
            .catch(handleError);
        });
      })
      .catch(handleError);
  })
  .catch(handleError);
```

3. `Async await` Syntax

   ```js
   async function getData() {
     const result = await fetch("https://example.org/data");
     const data = await result.json();
     return data;
   }

   console.log(getData());
   ```

- `async` ist ein Schlüsselwort für Funktionen
- `async` Funktionen geben immer ein Promise zurück
- `async` ermöglicht auch die Verwendung des Schlüsselwörts `await` in einer Funktion

4. HTTP methods: `HTTP POST`, Daten senden mit fetch .

- HTTP-Anfragen haben vier Teile - Methode, URL, Body, Header - Im Body können Daten gesendet werden - GET-Anfragen haben praktisch nie einen Body - Um Daten in einem Anfrage-Body zu senden, müssen wir beschreiben, um welche Art von Daten es sich handelt - Dies geschieht mit HTTP-Headern

5. `Error` handeln mit **try...catch**.

```js
async function getData() {
  try {
    const result = await fetch("https://example.org/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("FEHLER", error);
    return null;
  }
}

console.log(getData());
```

### Resources :

- [Async function MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

- [Callback hell](https://www.youtube.com/watch?v=NOlOw03qBfw)

- [Async await Video](https://www.youtube.com/watch?v=V_Kr9OSfDeU)

- [Error handlling advanced](https://www.youtube.com/watch?v=cJQQizjl7eo)

### Tasks :

- [spa-asynchronous-programming-github-api](https://classroom.github.com/a/Pb3s6KXM)

