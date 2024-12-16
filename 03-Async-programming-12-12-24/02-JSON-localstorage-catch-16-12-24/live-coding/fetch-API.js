// const res = fetch("https://jsonplaceholde.typicode.com/posts");

// // console.log(res);

// const data = res.then((response) => response.json());

// console.log(data); //

// data.then((result) => console.log(result)).catch((e) => alert(e.message));

// console.log("test");

const limit = 6;
let postsArr;
const postsContainer = document.getElementById("post-container");
fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);

    data.forEach((element) => {
      const postEl = document.createElement("div");
      postEl.innerHTML = `
        <div>${element.id}</div>
        <div>${element.title}</div>
        `;
      postsContainer.appendChild(postEl);
    });
  })
  .catch((e) => {
    console.log(e);
  });
