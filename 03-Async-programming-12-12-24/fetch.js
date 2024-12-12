/*

//text fetchen
const data = fetch("./data.txt");

const result = data.then((res) => res.text());
result.then((result) => console.log(result));

*/
/*

fetch('./data.txt')
.then((res) => res.text())
.then((result) => console.log(result));

*/

// Json fetchen

fetch('./data.json')
.then((res) => res.json())
.then((result) => console.log(result));