/*
const fs = require("fs/promises");

async function readStudents() {
    try {
        const data = await fs.readFile("./student.json", "utf8");
        const students = JSON.parse(data); // JSON formatında çözümle
        console.log("Öğrenciler:", students);
    } catch (error) {
        console.error("Hata:", error);
    }
}

readStudents();

*/
/*
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Hatası: ${response.status}`);
        }
        return response.json(); // Yanıtı JSON formatına çevirir
    })
    .then(data => console.log("Veri:", data))
    .catch(error => console.error("Hata:", error));

    */

    /*

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Gönderilen veri JSON formatında
        },
        body: JSON.stringify({
            title: "Yeni Başlık",
            body: "Yeni içerik",
            userId: 1,
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP Hatası: ${response.status}`);
            }
            return response.json();
        })
        .then(data => console.log("Oluşturulan veri:", data))
        .catch(error => console.error("Hata:", error));


        */
       /*

        fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "Güncellenmiş Başlık",
                body: "Güncellenmiş içerik",
                userId: 1,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP Hatası: ${response.status}`);
                }
                return response.json();
            })
            .then(data => console.log("Güncellenen veri:", data))
            .catch(error => console.error("Hata:", error));

*/

/*
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Hatası: ${response.status}`);
        }
        console.log("Veri başarıyla silindi.");
    })
    .catch(error => console.error("Hata:", error));
*/
/*

fetch("https://example.com/api", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer TOKEN", // Yetkilendirme
    },
    body: JSON.stringify({ key: "value" }),
});


const fetchUser = fetch("https://jsonplaceholder.typicode.com/users/1");
const fetchPost = fetch("https://jsonplaceholder.typicode.com/posts/1");

Promise.all([fetchUser, fetchPost])
    .then(async ([userResponse, postResponse]) => {
        const user = await userResponse.json();
        const post = await postResponse.json();
        console.log("Kullanıcı:", user);
        console.log("Gönderi:", post);
    })
    .catch(error => console.error("Hata:", error));
*/
/*
    async function veriAl() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            if (!response.ok) {
                throw new Error(`HTTP Hatası: ${response.status}`);
            }
            const data = await response.json();
            console.log("Veri:", data);
        } catch (error) {
            console.error("Hata:", error);
        }
    }
    
    veriAl(); 

*/
/*

function getStudents(url){
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Hata:", error);
    });
}

getStudents("./student.json");

*/
/*

function getData (url){
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((error)=> console.error("Hata:", error))
    }

    getData("https://jsonplaceholder.typicode.com/albums/1");
*/
/*
function getData (url){
    return fetch(url);
    }

    getData("https://jsonplaceholder.typicode.com/albums/1")
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((error)=> console.error("Hata:", error))

    */

    function saveStudents(){
        fetch("https://jsonplaceholder.typicode.com/albums",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    "id": 3,
                    "firstName": "Moritz",
                    "lastName": "Mustermann"
                }
            )
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data))
        .catch((error)=>console.error("Hata:", error))
    }