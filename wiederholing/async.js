/* Js senkron calisan bir dildir.
    Asenkron calismak icin callback, promise ve async/await kullanilir.
    Asenkron calismak icin setTimeout fonksiyonu kullanilir.
    setTimeout fonksiyonu 2 parametre alir. 1. parametre fonksiyon, 2. parametre ise milisaniye cinsinden suredir.
    setTimeout fonksiyonu 0 saniye sonra calisir.
*/

/*
1-timing fonksiyonlari
    setTimeout
    setInterval
2- eventler 
3- http istekleri
4- file system
5- veritabani islemleri
6- kullanici islemleri
7- dosya okuma ve yazma
8- dosya silme
9- dosya olusturma
10- dosya guncelleme

*/

// setTimeout
setTimeout(() => {
    console.log("Hello World");
}, 2000);

console.log("Merhaba");

// setInterval
//setInterval(() => {
//   console.log("Hello World");
//}, 2000);

const users= [
    {userId: 5,
        post: "Hello World"
    },
    {userId: 10,
        post: "Hello World2"
    },
    {userId: 15,
        post: "Hello World3"
    }
]

function getUserId(){
    setTimeout(() => {
        return 5;
       
    }, 1000);
}

function getPostByUserId(userId){
    console.log(userId); // undefined
    setTimeout(() => {
        users.forEach(user => {
            if(user.userId === userId){
                console.log(user.post);
            }
        }
        );
    }
    , 500);
}

let userId = getUserId();
getPostByUserId(userId);


// Callback fonksiyonlari




