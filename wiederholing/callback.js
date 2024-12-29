// Callback fonksiyonlari

function getName(callback) {
    setTimeout(() => {
        let name = "Hakan";
        callback(name);
    }, 1000);
}

function getSurname(name) {
    setTimeout(() => {
        let surname = "Yildirim";
        console.log(name, surname);
    }, 500);
}

getName(getSurname);