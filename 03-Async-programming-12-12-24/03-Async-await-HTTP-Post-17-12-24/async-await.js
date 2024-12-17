/*
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error.message))

*/
// async function
async function getUsers() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (!response.ok) {
        throw new Error('HTTP error! status: ' + response.status);
        }
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.log(error.message);
    }
}
console.log(getUsers());