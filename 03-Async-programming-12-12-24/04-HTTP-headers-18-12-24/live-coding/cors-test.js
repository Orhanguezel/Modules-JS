fetch("http://localhost:4000/data", { method: "PUT" })
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
