// 1. Örnek
const sayilar = [2, 4, 6, 8];

// Bu diziyi işleyerek şu sonucu elde edin: [4, 8, 12, 16]
const sonuc = sayilar.map(sayi=>sayi*2);

console.log(sonuc);


// 2. Örnek

const isimler = ["Ali", "Ayşe", "Mehmet"];

// Çıktı: [{ isim: "Ali", uzunluk: 3 }, { isim: "Ayşe", uzunluk: 4 }, { isim: "Mehmet", uzunluk: 6 }]
const sonuc2 = isimler.map(isim=>({isim, uzunluk: isim.length}));
    

console.log(sonuc2);

// 3. Örnek

const urunler = [
    { isim: "Elma", fiyat: 5 },
    { isim: "Armut", fiyat: 7 },
    { isim: "Muz", fiyat: 10 }
];

// Çıktı: [{ isim: "Elma", fiyat: 5.5 }, { isim: "Armut", fiyat: 7.7 }, { isim: "Muz", fiyat: 11 }]
const sonuc3 = urunler.map(meyve =>({ isim:meyve.isim, fiyat:meyve.fiyat*1.1}));

console.log(sonuc3);

// 4. Örnek

const sayilar2 = [1, 2, 3, 4, 5, 6];

const sonuc4 = sayilar2
    .filter(sayi => sayi % 2 === 0)
    .map(sayi=>sayi**2);

console.log(sonuc4);

// 5. Örnek

const dizi1 = ["Elma", "Armut"];
const dizi2 = ["Karpuz", "Muz"];

// Çıktı: [4, 5, 6, 3]
const sonuc5 = [...dizi1, ...dizi2].map(meyve=>meyve.length);

console.log(sonuc5);