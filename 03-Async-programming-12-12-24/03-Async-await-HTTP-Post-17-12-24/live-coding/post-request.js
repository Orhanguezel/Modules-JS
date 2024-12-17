async function sendPost() {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const data = JSON.stringify({ newPost: "post2" });
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: data,
    });
    // if (res.ok) {
    //   alert("user added successfuly!");
    // }
    const result = await res.json();
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

sendPost();
