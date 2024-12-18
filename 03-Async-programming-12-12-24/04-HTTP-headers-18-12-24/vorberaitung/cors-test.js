fetch("http://localhost:4000/data", { method: 
"PUT" })
.then(response => response.json())
.then(data => console.log(data));
