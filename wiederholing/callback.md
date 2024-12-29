**Callback** kavramı, hem senkron (synchronous) hem de asenkron (asynchronous) işlemlerde kullanılan temel bir programlama prensibidir. Bu kavram, bir fonksiyonun başka bir fonksiyona argüman olarak geçmesi ve belirli bir işlem tamamlandıktan sonra çağrılması anlamına gelir.

### 1. **Callback Nedir?**
Bir **callback fonksiyonu**, başka bir fonksiyona parametre olarak verilen bir fonksiyondur. Bu fonksiyon, verilen görev tamamlandığında veya belirli bir koşul gerçekleştiğinde çalıştırılır.

Callback, bir işlemi tamamladıktan sonra "geri çağırılacak" bir fonksiyondur.

---

### 2. **Senkron (Sync) Callback**
Senkron işlemlerde callback fonksiyonları, kodun yukarıdan aşağıya sırayla çalıştığı durumlardır. Callback, işlem tamamlanmadan bir sonraki adıma geçilmez.

#### Örnek:
```javascript
function greet(name, callback) {
  console.log('Merhaba ' + name);
  callback();
}

function sayGoodbye() {
  console.log('Güle güle!');
}

// greet fonksiyonu bir callback alır.
greet('Orhan', sayGoodbye);
```

**Çıktı:**
```
Merhaba Orhan
Güle güle!
```

Bu örnekte `greet` fonksiyonu tamamlanana kadar `sayGoodbye` çağrılmaz. Kod sıralı bir şekilde yürütülür.

---

### 3. **Asenkron (Async) Callback**
Asenkron işlemlerde callback fonksiyonları, işlem tamamlandıktan sonra çalıştırılır. Bu tür işlemler genellikle zaman alan görevlerde (örneğin, ağ istekleri veya dosya okuma/yazma) kullanılır.

#### Örnek:
```javascript
function fetchData(callback) {
  console.log('Veri alınıyor...');
  setTimeout(() => {
    console.log('Veri başarıyla alındı.');
    callback('Bu veri.');
  }, 2000); // 2 saniye gecikme
}

function processData(data) {
  console.log('İşleniyor: ' + data);
}

// fetchData bir callback alır.
fetchData(processData);
```

**Çıktı:**
```
Veri alınıyor...
Veri başarıyla alındı.
İşleniyor: Bu veri.
```

Bu durumda `processData` fonksiyonu, 2 saniyelik gecikme tamamlanmadan çalıştırılmaz. Asenkron işlemler, işlemin tamamlanmasını bekler ve ardından callback çalıştırılır.

---

### 4. **Senkron ve Asenkron Arasındaki Fark**

| Özellik                | Senkron (Sync) Callback                     | Asenkron (Async) Callback               |
|------------------------|---------------------------------------------|----------------------------------------|
| **Çalışma Şekli**      | Kod sırayla çalışır.                        | Görev tamamlandığında callback çağrılır. |
| **Zamanlama**          | Hemen gerçekleşir.                         | Gelecekte gerçekleşir (örneğin, zamanlayıcı veya bir ağ isteği sonrası). |
| **Bloklama**           | Bloklama yapar.                            | Bloklama yapmaz, diğer işlemler devam eder. |
| **Örnek Kullanım**     | Matematiksel işlemler, dizilerde `map` gibi. | Ağ istekleri, dosya işlemleri.         |

---

### 5. **Gerçek Hayattan Örnek:**

#### Senkron Callback Örneği:
Bir restoranın şefine yemek sipariş veriyorsunuz. Şef, yemeği hazırlar ve hemen size getirir. Bu bir **senkron callback** gibidir, çünkü tüm işlem ardışık şekilde yapılır.

```javascript
function prepareMeal(meal, callback) {
  console.log(`${meal} hazırlanıyor...`);
  callback(meal);
}

function serveMeal(meal) {
  console.log(`${meal} hazır, afiyet olsun!`);
}

prepareMeal('Pizza', serveMeal);
```

**Çıktı:**
```
Pizza hazırlanıyor...
Pizza hazır, afiyet olsun!
```

#### Asenkron Callback Örneği:
Bir pizzacıya sipariş veriyorsunuz. Onlar size "siparişiniz hazır olunca size haber vereceğiz" diyor. Yemek hazır olduktan sonra sizi bilgilendiriyorlar. Bu bir **asenkron callback** gibidir.

```javascript
function orderPizza(callback) {
  console.log('Sipariş alındı, hazırlanıyor...');
  setTimeout(() => {
    callback('Pizza');
  }, 3000); // 3 saniye gecikme
}

function deliverPizza(meal) {
  console.log(`${meal} hazır, adresinize teslim ediliyor.`);
}

orderPizza(deliverPizza);
```

**Çıktı:**
```
Sipariş alındı, hazırlanıyor...
Pizza hazır, adresinize teslim ediliyor.
```

---

### 6. **Callback Hell (Callback Cehennemi)**
Callback fonksiyonlarını iç içe çok fazla kullandığınızda kodunuz karmaşık ve okunaksız hale gelebilir. Bu duruma **callback hell** denir.

#### Örnek:
```javascript
function step1(data, callback) {
  console.log('Adım 1 tamamlandı.');
  callback(data + 1);
}

function step2(data, callback) {
  console.log('Adım 2 tamamlandı.');
  callback(data + 1);
}

function step3(data) {
  console.log('Adım 3 tamamlandı, sonuç:', data);
}

step1(0, (result1) => {
  step2(result1, (result2) => {
    step3(result2);
  });
});
```

Bu, karmaşık işlemler için sürdürülemez hale gelir.

---

### 7. **Callback Hell Çözümü**
Modern JavaScript'te `Promises` ve `async/await` kullanarak callback cehenneminden kurtulabilirsiniz.

#### Promise ile Çözüm:
```javascript
function step1(data) {
  return new Promise((resolve) => {
    console.log('Adım 1 tamamlandı.');
    resolve(data + 1);
  });
}

function step2(data) {
  return new Promise((resolve) => {
    console.log('Adım 2 tamamlandı.');
    resolve(data + 1);
  });
}

function step3(data) {
  console.log('Adım 3 tamamlandı, sonuç:', data);
}

step1(0)
  .then(step2)
  .then(step3);
```

#### Async/Await ile Çözüm:
```javascript
async function processSteps() {
  let data = 0;
  console.log('Adım 1 tamamlandı.');
  data = data + 1;

  console.log('Adım 2 tamamlandı.');
  data = data + 1;

  console.log('Adım 3 tamamlandı, sonuç:', data);
}

processSteps();
```

---

### 8. **Sonuç**
Callback fonksiyonları, hem senkron hem de asenkron işlemleri yönetmenin temel yollarından biridir. Ancak karmaşık işlemler için `Promises` veya `async/await` gibi modern yöntemler daha okunabilir ve sürdürülebilir çözümler sunar.