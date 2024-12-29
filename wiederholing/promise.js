/*
let check = false;

function createPromise(){
    return new Promise((resolve, reject) =>{
        if (check){
            resolve("Promise te herhangi bir hata olusmadi.");
        } else {
            reject("Promise te hata olustu.");
        }
    })
}
createPromise()
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.error(error);
}
)
.finally(()=>{  // finally() methodu, promise islemi bittikten sonra calisir.
    console.log("Promise islemi bitti.");
}
)
*/

function readStudents() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        resolve(JSON.parse(xhr.responseText)); // JSON'u çözümle ve çöz
                    } catch (error) {
                        reject("JSON parse hatası: " + error.message);
                    }
                } else {
                    reject(`Hata: HTTP Durum Kodu ${xhr.status}`);
                }
            }
        });

        // Hatalı `try-catch` kaldırıldı
        xhr.open("GET", "students.json", true);
        xhr.send();
    });
}

// Promise'i Kullanma
readStudents()
    .then(students => console.log("Öğrenciler:", students))
    .catch(error => console.error("Hata:", error));

