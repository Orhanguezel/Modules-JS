Tabii! İşte JavaScript'in **`map()`** metodu ile ilgili 5 soru. Her biri farklı bir kullanım senaryosunu anlamanıza yardımcı olacak:

---

### **1. Diziyi İşleme**
Aşağıdaki diziye `map()` metodu uygulayarak her elemanı 2 ile çarpılmış şekilde yeni bir dizi oluşturun.

```javascript
const sayilar = [2, 4, 6, 8];

// Bu diziyi işleyerek şu sonucu elde edin: [4, 8, 12, 16]
const sonuc = sayilar.map(/* Buraya işlemi yaz */);

console.log(sonuc);
```

---

### **2. Diziden Nesne Oluşturma**
Aşağıdaki dizi elemanlarını kullanarak her elemanı bir nesneye dönüştürün. Her nesnede bir `isim` ve `uzunluk` anahtarı olsun. Örneğin, "Ali" elemanı `{ isim: "Ali", uzunluk: 3 }` şeklinde bir nesneye dönüşmeli.

```javascript
const isimler = ["Ali", "Ayşe", "Mehmet"];

// Çıktı: [{ isim: "Ali", uzunluk: 3 }, { isim: "Ayşe", uzunluk: 4 }, { isim: "Mehmet", uzunluk: 6 }]
const sonuc = isimler.map(/* Buraya işlemi yaz */);

console.log(sonuc);
```

---

### **3. Dizi Nesnelerinin Fiyatlarını Artırma**
Aşağıdaki ürünlerin fiyatlarını %10 artırın ve yeni bir dizi oluşturun. Orijinal dizi değişmemeli.

```javascript
const urunler = [
    { isim: "Elma", fiyat: 5 },
    { isim: "Armut", fiyat: 7 },
    { isim: "Muz", fiyat: 10 }
];

// Çıktı: [{ isim: "Elma", fiyat: 5.5 }, { isim: "Armut", fiyat: 7.7 }, { isim: "Muz", fiyat: 11 }]
const sonuc = urunler.map(/* Buraya işlemi yaz */);

console.log(sonuc);
```

---

### **4. Diziyi Filtreleme ile Kombinasyon**
Aşağıdaki diziden sadece çift sayıları alın, ardından bu sayıların karesini bir dizi olarak döndürün.

```javascript
const sayilar = [1, 2, 3, 4, 5, 6];

// Çıktı: [4, 16, 36]
const sonuc = sayilar
    .filter(/* Çift sayıları bulun */)
    .map(/* Karesini alın */);

console.log(sonuc);
```

---

### **5. Diziyi Birleştirme ve Map Kullanımı**
Aşağıdaki iki diziyi birleştirin ve her elemanın uzunluğunu içeren bir dizi oluşturun.

```javascript
const dizi1 = ["Elma", "Armut"];
const dizi2 = ["Karpuz", "Muz"];

// Çıktı: [4, 5, 6, 3]
const sonuc = [...dizi1, ...dizi2].map(/* Buraya işlemi yaz */);

console.log(sonuc);
```

---

### Soruların Zorluk Derecesi:
- **1. ve 2. soru**: Temel `map()` kullanımı.
- **3. ve 4. soru**: Orta düzey, gerçek hayattan örnekler.
- **5. soru**: `map()` ile diğer JavaScript özelliklerini birleştirme.

Soruları çözdükten sonra cevaplarını tartışabiliriz! 😊