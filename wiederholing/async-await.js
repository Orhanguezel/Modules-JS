/*
async function hello() {
    return "Merhaba, Dünya!";
}

hello()
    .then(result => console.log(result)) // Merhaba, Dünya!
    .catch(error => console.error(error));



    async function bekle() {
        console.log("Başlıyor...");
        const sonuc = await new Promise(resolve => setTimeout(() => resolve("Tamamlandı!"), 2000));
        console.log(sonuc);
    } 
    bekle();

    */
   /*

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Hatası: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log("Veri:", data))
    .catch(error => console.error("Hata:", error));



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


    async function uzunSurenIslem() {
        console.log("İşlem başladı...");
        const sonuc = await new Promise(resolve => setTimeout(() => resolve("İşlem tamamlandı!"), 2000));
        console.log(sonuc);
    }
    
    uzunSurenIslem();
   
    async function islemler() {
        console.log("İşlem 1 başlıyor...");
        const sonuc1 = await new Promise(resolve => setTimeout(() => resolve("İşlem 1 tamamlandı!"), 2000));
        console.log(sonuc1);
    
        console.log("İşlem 2 başlıyor...");
        const sonuc2 = await new Promise(resolve => setTimeout(() => resolve("İşlem 2 tamamlandı!"), 1000));
        console.log(sonuc2);
    }
    
    islemler();

 

    async function hataYonetimi() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1000"); // Geçersiz bir ID
            if (!response.ok) {
                throw new Error(`HTTP Hatası: ${response.status}`);
            }
            const data = await response.json();
            console.log("Veri:", data);
        } catch (error) {
            console.error("Hata:", error.message);
        }
    }
    
    hataYonetimi(); 
   


    async function gecerliIdBul() {
        let id = 1; // ID kontrolüne 1'den başla
        let time = Date.now();
    
        while (true) {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                if (!response.ok) {
                    const elapsedTimeInSeconds = ((Date.now() - time) / 1000).toFixed(2); // Geçen zaman sn olarak
                    throw new Error(`Geçersiz ID bulundu: ${id} (HTTP Hatası: ${response.status}) geçen zaman: ${elapsedTimeInSeconds} sn`);
                }
            } catch (error) {
                console.error(error.message);
                break; // Geçersiz ID bulunduğunda döngüyü durdur
            }
            id++; // Sıradaki ID'yi kontrol et
        }
    }
    
    gecerliIdBul();
    

    
     

    async function birinciIslem() {
        return "Birinci işlem tamamlandı!";
    }
    
    async function ikinciIslem() {
        const sonuc = await birinciIslem();
        console.log(sonuc);
    }
    
    ikinciIslem();

    async function siraliIslemler() {
        const islemler = [
            () => new Promise(resolve => setTimeout(() => resolve("İşlem 1 tamamlandı!"), 1000)),
            () => new Promise(resolve => setTimeout(() => resolve("İşlem 2 tamamlandı!"), 2000)),
            () => new Promise(resolve => setTimeout(() => resolve("İşlem 3 tamamlandı!"), 1500)),
        ];
    
        for (const islem of islemler) {
            const sonuc = await islem();
            console.log(sonuc);
        }
    }
    
    siraliIslemler();
    
    */
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function bekle() {
        console.log("3 saniye bekliyor...");
        await sleep(3000); // 3 saniye bekler
        console.log("Devam ediyor...");
    }
    
    bekle();

    