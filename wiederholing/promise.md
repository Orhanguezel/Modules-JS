### **JavaScript Promise Nedir?**

**`Promise`**, JavaScript'te asenkron işlemleri yönetmek için kullanılan bir nesnedir. **Promise**, bir işlemin sonucunu gelecekte döndürmeyi "vaat eder." Bu sonuç başarıyla tamamlanabilir (**fulfilled**) veya hata verebilir (**rejected**). Bu durumlara göre ilgili kodun nasıl çalışacağını belirleyebilirsiniz.

---

## **Promise Mimarisi**

Bir **Promise** şu durumlarda olabilir:

1. **Pending (Beklemede):** İşlem henüz tamamlanmadı (başladı ama bitmedi).
2. **Fulfilled (Başarılı):** İşlem başarıyla tamamlandı ve bir sonuç döndürüldü.
3. **Rejected (Başarısız):** İşlem başarısız oldu ve bir hata meydana geldi.

---

## **Promise Söz Dizimi**

Bir **Promise** oluşturmak için şu adımları izleriz:

```javascript
const myPromise = new Promise((resolve, reject) => {
    // Asenkron işlem burada başlar
    let islemBasarili = true;

    if (islemBasarili) {
        resolve("İşlem başarılı!"); // Başarılıysa resolve çağrılır
    } else {
        reject("İşlem başarısız!"); // Hata varsa reject çağrılır
    }
});

// Promise'in sonucunu yönetme
myPromise
    .then(result => console.log(result)) // resolve ile gelen sonuç
    .catch(error => console.error(error)); // reject ile gelen hata
```

---

## **Promise Kullanımı**

### **1. Basit Örnek**
```javascript
const veriCek = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const veri = { id: 1, ad: "Ali" };
            resolve(veri); // İşlem başarılı
        }, 2000);
    });
};

veriCek()
    .then(data => console.log("Veri:", data))
    .catch(error => console.error("Hata:", error));
```

**Çıktı (2 saniye sonra):**
```
Veri: { id: 1, ad: "Ali" }
```

---

### **2. Promise Chain (Zincirleme Promiseler)**

Bir işlemin sonucuna bağlı olarak başka işlemler yapabilirsiniz.

```javascript
const adim1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Adım 1 tamamlandı"), 1000);
    });
};

const adim2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Adım 2 tamamlandı"), 1000);
    });
};

adim1()
    .then(sonuc1 => {
        console.log(sonuc1);
        return adim2(); // Bir sonraki Promise'i çağır
    })
    .then(sonuc2 => console.log(sonuc2))
    .catch(hata => console.error("Hata:", hata));
```

**Çıktı:**
```
Adım 1 tamamlandı
Adım 2 tamamlandı
```

---

### **3. `Promise.all` ile Paralel Çalışma**

**`Promise.all`**, birden fazla Promise'in aynı anda çalışmasını sağlar ve tümü tamamlandığında sonuçları döndürür.

```javascript
const islem1 = new Promise(resolve => setTimeout(() => resolve("İşlem 1"), 2000));
const islem2 = new Promise(resolve => setTimeout(() => resolve("İşlem 2"), 1000));
const islem3 = new Promise(resolve => setTimeout(() => resolve("İşlem 3"), 1500));

Promise.all([islem1, islem2, islem3])
    .then(sonuclar => console.log("Sonuçlar:", sonuclar))
    .catch(error => console.error("Hata:", error));
```

**Çıktı (2 saniye sonra):**
```
Sonuçlar: [ "İşlem 1", "İşlem 2", "İşlem 3" ]
```

---

### **4. `Promise.race` ile Yarış**

**`Promise.race`**, birden fazla Promise'den hangisi önce tamamlarsa onun sonucunu döndürür.

```javascript
const islem1 = new Promise(resolve => setTimeout(() => resolve("İşlem 1"), 2000));
const islem2 = new Promise(resolve => setTimeout(() => resolve("İşlem 2"), 1000));

Promise.race([islem1, islem2])
    .then(sonuc => console.log("Kazanan:", sonuc))
    .catch(error => console.error("Hata:", error));
```

**Çıktı (1 saniye sonra):**
```
Kazanan: İşlem 2
```

---

### **5. `Promise.allSettled` ile Tüm Sonuçları Görmek**

**`Promise.allSettled`**, tüm Promiseler tamamlandığında (başarılı ya da başarısız) her birinin durumunu döndürür.

```javascript
const islem1 = new Promise(resolve => setTimeout(() => resolve("Başarılı İşlem"), 1000));
const islem2 = new Promise((_, reject) => setTimeout(() => reject("Başarısız İşlem"), 1500));

Promise.allSettled([islem1, islem2])
    .then(sonuclar => console.log("Tüm Sonuçlar:", sonuclar));
```

**Çıktı (1.5 saniye sonra):**
```json
[
    { status: "fulfilled", value: "Başarılı İşlem" },
    { status: "rejected", reason: "Başarısız İşlem" }
]
```

---

### **6. Hata Yönetimi**

Promise'lerde hata yönetimi için **`catch`** kullanılır.

#### Örnek:
```javascript
const islem = new Promise((resolve, reject) => {
    const basarili = false;

    if (basarili) {
        resolve("İşlem başarılı!");
    } else {
        reject("İşlem başarısız!");
    }
});

islem
    .then(sonuc => console.log(sonuc))
    .catch(hata => console.error("Hata:", hata));
```

**Çıktı:**
```
Hata: İşlem başarısız!
```

---

## **Promise'in Avantajları**

1. **Asenkron İşlemleri Yönetme:**
   - Callback fonksiyonlarının karmaşasını azaltır.
   
2. **Zincirleme Yapısı:**
   - Promiseler birbiriyle bağlanabilir, bu da kodun okunabilirliğini artırır.

3. **Hata Yönetimi:**
   - Tüm hata yönetimi için tek bir `catch` kullanabilirsiniz.

---

## **Callback Hell vs Promise**

### Callback Hell:
```javascript
setTimeout(() => {
    console.log("1. İşlem tamamlandı.");
    setTimeout(() => {
        console.log("2. İşlem tamamlandı.");
        setTimeout(() => {
            console.log("3. İşlem tamamlandı.");
        }, 1000);
    }, 1000);
}, 1000);
```

### Promise Kullanarak:
```javascript
const islem1 = () => new Promise(resolve => setTimeout(() => resolve("1. İşlem tamamlandı."), 1000));
const islem2 = () => new Promise(resolve => setTimeout(() => resolve("2. İşlem tamamlandı."), 1000));
const islem3 = () => new Promise(resolve => setTimeout(() => resolve("3. İşlem tamamlandı."), 1000));

islem1()
    .then(sonuc => {
        console.log(sonuc);
        return islem2();
    })
    .then(sonuc => {
        console.log(sonuc);
        return islem3();
    })
    .then(sonuc => console.log(sonuc));
```

---

## **Promise ve Async/Await**

Promise yapısını daha kolay bir şekilde kullanmak için **`async/await`** kullanılabilir.

#### Örnek:
```javascript
const uzunSurenIslem = () => {
    return new Promise(resolve => setTimeout(() => resolve("İşlem tamamlandı!"), 2000));
};

async function islemiYap() {
    console.log("İşlem başlıyor...");
    const sonuc = await uzunSurenIslem();
    console.log(sonuc);
}

islemiYap();
```

**Çıktı:**
```
İşlem başlıyor...
(2 saniye bekler)
İşlem tamamlandı!
```

---

## **Özet**

- **Promise**, asenkron işlemleri daha düzenli ve okunabilir bir şekilde yönetmek için kullanılır.
- **`then` ve `catch`** ile başarılı veya başarısız sonuçları ele alabilirsiniz.
- Zincirleme işlemleri kolaylaştırır ve **callback hell** sorununu çözer.
- Promise, modern JavaScript’te **async/await** ile daha kullanıcı dostu hale gelir.

Daha fazla detay veya özel bir kullanım örneği istersen, yardımcı olmaktan mutluluk duyarım! 😊