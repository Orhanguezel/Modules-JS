const res = fetch('https://jsonplaceholder.typicode.com/posts')

// 
/*
const data = res.then((response) => response.json());

console.log(data);// Promise { <state>: "pending" }

data.then((result) => console.log(result)); // (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, ...]

data.catch((error) => console.log(error)); // TypeError: Failed to fetch

data.catch((error) => alert(error.message)); // TypeError: Failed to fetch

*/


    const postContainer = document.getElementById("post-container");
  
    const limit = 2;
  
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)

      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Sadece veriyi konsola yazdır
        return data; // Veriyi bir sonraki `then` için geri döndür
      })
      .then((data) => {

        data.forEach((post) => {
          const item = document.createElement("div");
          item.innerHTML = `
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>
          `;
          postContainer.appendChild(item);
        });
      })
      .catch((error) => {
        console.error("Veri çekilirken bir hata oluştu:", error);
      });

      
  
