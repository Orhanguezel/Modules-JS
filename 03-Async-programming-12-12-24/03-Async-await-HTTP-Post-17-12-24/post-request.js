async function sendPost(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const res =await fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({name: 'John Doe', age: 25}),
    });
    if (!res.ok) {
        throw new Error('HTTP error! status: ' + res.status);
    } else {
        alert('Post request successful');
    }
    const result = await res.json();
    console.log(result);
}
sendPost();