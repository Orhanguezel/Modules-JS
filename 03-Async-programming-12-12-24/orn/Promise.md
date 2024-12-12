### **4. Was ist `Promise` in JavaScript und warum wird es benutzt?**

#### **Promise Nedir?**
`Promise` (Türkçesi: "Söz"), JavaScript'te **asenkron** işlemleri yönetmek için kullanılan bir nesnedir. Bir Promise, gelecekte bir işlemin başarılı ya da başarısız bir şekilde tamamlanacağına dair bir söz verir ve bu sözle ilgili sonucu taşır.

**Promise** üç durumda olabilir:
1. **Pending (Beklemede):** İşlem henüz tamamlanmadı.
2. **Fulfilled (Başarılı):** İşlem başarılı bir şekilde tamamlandı ve bir sonuç döndürdü.
3. **Rejected (Başarısız):** İşlem tamamlanamadı ve bir hata döndürdü.

---

#### **Promise Neden Kullanılır?**
- JavaScript **asenkron** bir dil olduğundan, uzun süren işlemler sırasında kodun durmasını istemeyiz.
- **Callback Hell** (callback'lerin iç içe geçmesi) gibi karmaşıklıkları önler.
- Asenkron işlemleri daha okunabilir ve yönetilebilir hale getirir.

---

#### **Promise'in Temel Kullanımı**
Bir Promise şu şekilde oluşturulur:

```javascript
const myPromise = new Promise((resolve, reject) => {
  // İşlem yap
  let success = true;

  if (success) {
    resolve("İşlem başarılı!");
  } else {
    reject("Bir hata oluştu.");
  }
});
```

**Açıklama:**
- `resolve`: İşlem başarılı olduğunda çağrılır.
- `reject`: İşlem başarısız olduğunda çağrılır.

Bir Promise, `then` ve `catch` ile yönetilir:

```javascript
myPromise
  .then((result) => {
    console.log(result); // İşlem başarılı!
  })
  .catch((error) => {
    console.log(error); // Bir hata oluştu.
  });
```

---

#### **Promise'in Akışı**
1. Bir Promise oluşturulur.
2. İşlem başlar ve sonuç beklenir.
3. İşlem başarılı olursa, `resolve` ile dönen sonuç `then` içinde yakalanır.
4. İşlem başarısız olursa, `reject` ile dönen hata `catch` içinde yakalanır.

**Örnek:**
```javascript
const fetchData = new Promise((resolve, reject) => {
  let dataAvailable = true;

  setTimeout(() => {
    if (dataAvailable) {
      resolve("Veri başarıyla alındı!");
    } else {
      reject("Veri alınamadı.");
    }
  }, 2000); // 2 saniye bekletme
});

fetchData
  .then((data) => {
    console.log(data); // "Veri başarıyla alındı!"
  })
  .catch((error) => {
    console.error(error); // "Veri alınamadı."
  });
```

---

#### **Promise Zincirleme (Chaining)**
Birden fazla asenkron işlemi sırayla yürütmek için Promises zincirlenebilir.

**Örnek:**
```javascript
const step1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Adım 1 tamamlandı"), 1000);
  });
};

const step2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Adım 2 tamamlandı"), 1000);
  });
};

step1()
  .then((result1) => {
    console.log(result1); // "Adım 1 tamamlandı"
    return step2();
  })
  .then((result2) => {
    console.log(result2); // "Adım 2 tamamlandı"
  });
```

---

#### **Promise Kullanmanın Avantajları**
1. **Daha okunabilir kod:** İç içe geçmiş callback'lerden kaçınılır.
2. **Hata yönetimi:** `catch` kullanılarak tüm hatalar tek bir yerde toplanabilir.
3. **Zincirleme:** Asenkron işlemleri sıralı olarak çalıştırmak kolaydır.

---

#### **Promise ile Callback Hell Karşılaştırması**
**Callback Hell:**
```javascript
setTimeout(() => {
  console.log("1. işlem tamamlandı");
  setTimeout(() => {
    console.log("2. işlem tamamlandı");
    setTimeout(() => {
      console.log("3. işlem tamamlandı");
    }, 1000);
  }, 1000);
}, 1000);
```

**Promise:**
```javascript
const step1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("1. işlem tamamlandı"), 1000));

const step2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("2. işlem tamamlandı"), 1000));

const step3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("3. işlem tamamlandı"), 1000));

step1()
  .then((msg) => {
    console.log(msg);
    return step2();
  })
  .then((msg) => {
    console.log(msg);
    return step3();
  })
  .then((msg) => console.log(msg));
```

**Sonuç:** Promise ile kod daha temiz ve okunabilir hale gelir.

---

Devam edelim mi? (Bir sonraki konu: **5. Was ist `fetch` in JS?**)