const yazdir = ()=>{
    console.log("Merhaba");
}

yazdir();

// Arrow Function
const yazdir2 = () => console.log("Merhaba");
yazdir2();

// Parametreli Arrow Function
const yazdir3 = (isim) => console.log("Merhaba", isim);
yazdir3("Mustafa"); // Merhaba Mustafa


// Birden fazla parametreli Arrow Function
const yazdir4 = (isim, yas) => console.log(`Merhaba ${isim} yaşınız: ${yas}`);
yazdir4("Mustafa", 25); // Merhaba Mustafa yaşınız: 25

// Return ifadesi olan Arrow Function
const toplam = (a, b) => a + b;
console.log(toplam(2, 3)); // 5

// Return ifadesi olan Arrow Function
const ciftMi = (sayi) => sayi % 2 == 0 ? "Çift" : "Tek";
console.log(ciftMi(5)); // Tek
console.log(ciftMi(6)); // Çift

// Return ifadesi olan Arrow Function
const taban = 2;
const usAl = (x) => x ** taban;
console.log(usAl(3)); // 9

// Arrow Function
const taban2 = 3;
const usAl2 = x => x ** taban2;
console.log(usAl2(3)); // 27

// Arrow Function
const taban3 = 4;
const usAl3 = x => x ** taban3;
console.log(usAl3(3)); // 81


// Arrow Function
const taban4 = 5;
const usAl4 = (x, y) => x ** y;
console.log(usAl4(3, 2)); // 9

// Arrow Function
const taban5 = 6;
const usAl5 = (x, y) => x ** y;
console.log(usAl5(3, 3)); // 27

// Arrow Function


