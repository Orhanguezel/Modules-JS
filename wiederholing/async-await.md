### **Async/Await Nedir?**

**`async/await`**, JavaScript'te asenkron işlemleri daha temiz ve okunabilir bir şekilde yazmayı sağlayan bir yapıdır. ES2017 (ES8) ile tanıtılmıştır ve **`Promise`** tabanlıdır. **`async`** fonksiyonları, **Promise** döner; **`await`** ise bu Promise’in tamamlanmasını bekler.

---

## **Neden Async/Await Kullanılır?**

1. **Daha Okunaklı Kod:**
   - Promise zincirlerini (chain) yönetmek yerine, kodu senkron görünümlü yazabilirsiniz.
   
2. **Hata Yönetimi Kolaylığı:**
   - `try/catch` bloklarıyla hata yönetimi basit ve tutarlıdır.

3. **Promise Tabanlı:**
   - Tüm Promise tabanlı yapılar (fetch, fs gibi) async/await ile kullanılabilir.

---

## **Async/Await Kullanımının Temel Söz Dizimi**

### **`async` Anahtar Kelimesi**
- **`async`**, bir fonksiyonun asenkron olduğunu belirtir.
- Bir `async` fonksiyon her zaman bir **Promise** döner.

#### **Örnek: `async` Fonksiyon**
```javascript
async function hello() {
    return "Merhaba, Dünya!";
}

hello()
    .then(result => console.log(result)) // Merhaba, Dünya!
    .catch(error => console.error(error));
```

---

### **`await` Anahtar Kelimesi**
- **`await`**, yalnızca `async` fonksiyon içinde kullanılabilir.
- `await`, bir Promise’in tamamlanmasını bekler ve sonucu döndürür.

#### **Örnek: `await` Kullanımı**
```javascript
async function bekle() {
    console.log("Başlıyor...");
    const sonuc = await new Promise(resolve => setTimeout(() => resolve("Tamamlandı!"), 2000));
    console.log(sonuc);
}

bekle();
// Çıktı:
// Başlıyor...
// (2 saniye bekler)
// Tamamlandı!
```

---

## **Async/Await ve Promise Arasındaki Fark**

Promise yapısında `.then()` ile zincirleme yapılır. Ancak bu durum, karmaşık kodlarda okunabilirliği zorlaştırır. Async/Await ile kod daha düzenli ve okunaklı hale gelir.

### **Promise ile**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Hatası: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log("Veri:", data))
    .catch(error => console.error("Hata:", error));
```

### **Async/Await ile**
```javascript
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
```

---

## **Async/Await’in Avantajları**

1. **Okunabilirlik:** Kod, Promise zincirlerine kıyasla daha anlaşılır ve temizdir.
2. **Hata Yönetimi:** `try/catch` bloklarıyla asenkron işlemler kolayca yönetilebilir.
3. **Senkron Görünüm:** Asenkron işlemler senkron kod gibi yazılabilir, bu da mantıksal akışı kolaylaştırır.

---

## **Async/Await ile Çalışma Örnekleri**

### **1. Temel Async/Await Örneği**
```javascript
async function uzunSurenIslem() {
    console.log("İşlem başladı...");
    const sonuc = await new Promise(resolve => setTimeout(() => resolve("İşlem tamamlandı!"), 2000));
    console.log(sonuc);
}

uzunSurenIslem();
// Çıktı:
// İşlem başladı...
// (2 saniye bekler)
// İşlem tamamlandı!
```

---

### **2. Birden Fazla Async İşlemi Yönetme**

#### **Ardışık İşlemler**
Bir işlem tamamlandıktan sonra diğerini başlatmak:
```javascript
async function islemler() {
    console.log("İşlem 1 başlıyor...");
    const sonuc1 = await new Promise(resolve => setTimeout(() => resolve("İşlem 1 tamamlandı!"), 2000));
    console.log(sonuc1);

    console.log("İşlem 2 başlıyor...");
    const sonuc2 = await new Promise(resolve => setTimeout(() => resolve("İşlem 2 tamamlandı!"), 1000));
    console.log(sonuc2);
}

islemler();
// Çıktı:
// İşlem 1 başlıyor...
// (2 saniye bekler)
// İşlem 1 tamamlandı!
// İşlem 2 başlıyor...
// (1 saniye bekler)
// İşlem 2 tamamlandı!
```

---

#### **Paralel İşlemler**
Promise.all ile işlemleri aynı anda başlatabilirsiniz:
```javascript
async function paralelIslemler() {
    const islem1 = new Promise(resolve => setTimeout(() => resolve("İşlem 1 tamamlandı!"), 2000));
    const islem2 = new Promise(resolve => setTimeout(() => resolve("İşlem 2 tamamlandı!"), 1000));

    const [sonuc1, sonuc2] = await Promise.all([islem1, islem2]);
    console.log(sonuc1);
    console.log(sonuc2);
}

paralelIslemler();
// Çıktı:
// (1 saniye sonra)
// İşlem 2 tamamlandı!
// İşlem 1 tamamlandı!
```

---

### **3. Hata Yönetimi**

`try/catch` bloklarıyla hata yönetimi kolayca yapılabilir.

```javascript
async function hataYonetimi() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10000"); // Geçersiz bir ID
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
// Çıktı:
// Hata: HTTP Hatası: 404
```

---

### **4. Async Fonksiyonların İç İçe Kullanımı**

Bir `async` fonksiyon başka bir `async` fonksiyonu çağırabilir.

```javascript
async function birinciIslem() {
    return "Birinci işlem tamamlandı!";
}

async function ikinciIslem() {
    const sonuc = await birinciIslem();
    console.log(sonuc);
}

ikinciIslem();
// Çıktı:
// Birinci işlem tamamlandı!
```

---

## **Async/Await ile İleri Düzey Kullanım**

### **1. Döngülerde Kullanım**

Birden fazla asenkron işlemi sırayla çalıştırmak için `for` döngüsü kullanılabilir.

```javascript
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
// Çıktı:
// (1 saniye sonra) İşlem 1 tamamlandı!
// (2 saniye sonra) İşlem 2 tamamlandı!
// (1.5 saniye sonra) İşlem 3 tamamlandı!
```

---

### **2. Timeout İşlemleri**

Belirli bir süre beklemek için özel bir `sleep` fonksiyonu tanımlayabilirsiniz.

```javascript
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bekle() {
    console.log("3 saniye bekliyor...");
    await sleep(3000); // 3 saniye bekler
    console.log("Devam ediyor...");
}

bekle();
// Çıktı:
// 3 saniye bekliyor...
// (3 saniye sonra)
// Devam ediyor...
```

---

## **Async/Await Avantajları ve Dezavantajları**

### **Avantajları**
1. Promise zincirlerine kıyasla daha okunaklı kod.
2. Hata yönetimini `try/catch` ile kolayca yapma imkanı.
3. Daha mantıklı bir akış ve senkron görünümlü kod.

### **Dezavantajları**
1. Her tarayıcıda desteklenmez (modern tarayıcılar destekler, eski tarayıcılar için Babel gibi araçlar gerekebilir).
2. Paralel işlemler için dikkatli planlama yapılması gerekir (Promise.all kullanılmalı).

---

Eğer daha fazla örnek veya detay isterseniz, açıklamaya devam edebilirim! 😊