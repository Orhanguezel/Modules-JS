// fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));

async function getUsers() {
  try {
    const response = await fetch(`https://jsonplaceholde.typicode.com/users`);

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error.message);
  }
}
console.log(getUsers());
