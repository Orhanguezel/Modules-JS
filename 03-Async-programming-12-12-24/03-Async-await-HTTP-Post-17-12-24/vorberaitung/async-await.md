## **1. Was ist `Promises Probleme`?**

### **Promises Problemleri Nedir?**
JavaScript'te Promises, asenkron işlemleri yönetmek için kullanılır. Ancak, kullanımında bazı problemler ortaya çıkabilir:

1. **Karmaşıklık (Complexity)**: Birden fazla asenkron işlemin birbirine bağlı olduğu durumlarda, Promises kodu karmaşık hale gelebilir.
2. **Okunabilirlik Sorunu**: Zincirleme `.then()` blokları fazla olduğunda, kodun okunması zorlaşır.
3. **Hata Yönetimi**: Hataları ele almak için `.catch()` kullanılır, ancak farklı seviyelerde hata ayıklamak zordur.

---

## **2. Was ist `Callback-hell`?**

### **Callback Hell Nedir?**
- Callback hell, bir fonksiyonun içine başka bir callback fonksiyonunun eklenmesiyle kodun iç içe geçip karmaşık hale gelmesidir.
- Asenkron işlemler birbirine bağımlı olduğunda, bu yapı ortaya çıkar.

### **Örnek:**
```javascript
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed");
    });
  });
});
```

### **Sorun:**
Yukarıdaki örnekte fonksiyonlar iç içe geçtiğinden **"Pyramid of Doom"** denilen yapı oluşur. Okunabilirliği ve hata yönetimini zorlaştırır.

---

## **3. `Async await` Syntax**

### **Async/Await Nedir?**
- `async/await`, Promises ile çalışmayı kolaylaştıran modern bir JavaScript sözdizimidir.
- Kodun senkronmuş gibi görünmesini sağlar, ancak arka planda asenkron olarak çalışır.

### **Kurallar:**
1. `async` anahtar kelimesi bir fonksiyonun başına eklenir.
2. `await`, sadece `async` fonksiyonları içerisinde kullanılabilir.
3. `await`, bir Promise'in sonucunu bekler.

### **Örnek:**
```javascript
async function fetchData() {
  console.log("Fetching data...");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();

  console.log("Data received:", data);
}

fetchData();
console.log("This runs before data is received");
```

**Çıktı:**
```
Fetching data...
This runs before data is received
Data received: { ... }
```

- `await`, `fetch` çağrısının tamamlanmasını bekler, ancak diğer kodlar bloklanmaz.



### **Async Functions in JavaScript**
`async` fonksiyonlar, JavaScript'te asenkron işlemleri daha okunabilir ve yönetilebilir hale getirmek için kullanılan modern bir özelliktir. `async/await` kombinasyonu, Promises ile çalışmayı kolaylaştırır ve karmaşık `.then()` zincirlerini ortadan kaldırır.

---

## **1. Async Function Nedir?**

`async` fonksiyonlar, her zaman bir **Promise** döner. Eğer döndürülen değer bir Promise değilse, JavaScript onu otomatik olarak bir **Promise.resolve()** içerisine sarar.

### **Temel Örnek**
```javascript
async function example() {
  return 1;
}

example().then(console.log); // Çıktı: 1
```

Bu örnekte `example` fonksiyonu aslında `Promise.resolve(1)` döner.

---

## **2. Await Nedir?**

- `await`, bir **Promise**'in tamamlanmasını bekler.
- Yalnızca bir `async` fonksiyonun içinde kullanılabilir.
- Kodun senkronmuş gibi görünmesini sağlar, ancak aslında asenkron olarak çalışır.

### **Temel Kullanım**
```javascript
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

fetchData();
```

Burada, `await fetch(...)` ifadesi, `fetch` çağrısının tamamlanmasını bekler. Ancak bu bekleme sırasında diğer kodlar bloklanmaz.

---

## **3. Async/Await Kullanımının Avantajları**

1. **Okunabilirlik**:
   - `.then()` zincirlerini daha basit ve anlaşılır hale getirir.
2. **Hata Yönetimi**:
   - Hataları `try...catch` bloğu ile daha kolay yakalayabilirsiniz.
3. **Daha Az İç İçe Geçiş**:
   - Callback Hell sorununu ortadan kaldırır.

---

## **4. Temel Syntax**

### **Async Fonksiyon Tanımı**
```javascript
async function functionName(params) {
  // Kodlar
}
```

### **Await Kullanımı**
```javascript
async function example() {
  const result = await someAsyncFunction();
  console.log(result);
}
```

---

## **5. Promises ile Async/Await**

`async/await`, Promises üzerine inşa edilmiştir. Bir Promise'in tamamlanmasını `await` ile bekleriz. Örneğin:

### **Promises ile**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));### **Async Functions in JavaScript**
`async` fonksiyonlar, JavaScript'te asenkron işlemleri daha okunabilir ve yönetilebilir hale getirmek için kullanılan modern bir özelliktir. `async/await` kombinasyonu, Promises ile çalışmayı kolaylaştırır ve karmaşık `.then()` zincirlerini ortadan kaldırır.

---

## **1. Async Function Nedir?**

`async` fonksiyonlar, her zaman bir **Promise** döner. Eğer döndürülen değer bir Promise değilse, JavaScript onu otomatik olarak bir **Promise.resolve()** içerisine sarar.

### **Temel Örnek**
```javascript
async function example() {
  return 1;
}

example().then(console.log); // Çıktı: 1
```

Bu örnekte `example` fonksiyonu aslında `Promise.resolve(1)` döner.

---

## **2. Await Nedir?**

- `await`, bir **Promise**'in tamamlanmasını bekler.
- Yalnızca bir `async` fonksiyonun içinde kullanılabilir.
- Kodun senkronmuş gibi görünmesini sağlar, ancak aslında asenkron olarak çalışır.

### **Temel Kullanım**
```javascript
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

fetchData();
```

Burada, `await fetch(...)` ifadesi, `fetch` çağrısının tamamlanmasını bekler. Ancak bu bekleme sırasında diğer kodlar bloklanmaz.

---

## **3. Async/Await Kullanımının Avantajları**

1. **Okunabilirlik**:
   - `.then()` zincirlerini daha basit ve anlaşılır hale getirir.
2. **Hata Yönetimi**:
   - Hataları `try...catch` bloğu ile daha kolay yakalayabilirsiniz.
3. **Daha Az İç İçe Geçiş**:
   - Callback Hell sorununu ortadan kaldırır.

---

## **4. Temel Syntax**

### **Async Fonksiyon Tanımı**
```javascript
async function functionName(params) {
  // Kodlar
}
```

### **Await Kullanımı**
```javascript
async function example() {
  const result = await someAsyncFunction();
  console.log(result);
}
```

---

## **5. Promises ile Async/Await**

`async/await`, Promises üzerine inşa edilmiştir. Bir Promise'in tamamlanmasını `await` ile bekleriz. Örneğin:

### **Promises ile**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

### **Async/Await ile**
```javascript
async function fetchPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchPost();
```

---

## **6. Error Handling: Try...Catch**

`async` fonksiyonlar içinde hata yönetimi için `try...catch` bloklarını kullanabiliriz.

### **Örnek**
```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.invalid-url.com/data");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

fetchData();
```

---

## **7. Sequential vs Concurrent Async Operations**

- **Sıralı (Sequential):** İşlemler sırayla çalışır ve bir işlem diğerinin tamamlanmasını bekler.
- **Eşzamanlı (Concurrent):** İşlemler aynı anda başlar ve birlikte çalışır.

### **Sıralı Örnek**
```javascript
async function sequential() {
  const result1 = await asyncFunction1();
  const result2 = await asyncFunction2();
  console.log(result1, result2);
}
```

### **Eşzamanlı Örnek**
```javascript
async function concurrent() {
  const [result1, result2] = await Promise.all([
    asyncFunction1(),
    asyncFunction2(),
  ]);
  console.log(result1, result2);
}
```

---

## **8. Rewriting Promise Chains with Async/Await**

Promise zincirlerini daha okunabilir hale getirebiliriz.

### **Promise Zinciri**
```javascript
function processData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => process(data))
    .catch((error) => handleError(error));
}
```

### **Async/Await ile**
```javascript
async function processData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return process(data);
  } catch (error) {
    handleError(error);
  }
}
```

---

## **9. Async Fonksiyonun Dönüş Değeri**

Eğer `async` fonksiyondan bir değer döndürüyorsanız, bu değer otomatik olarak bir **Promise** içine sarılır.

### **Örnek**
```javascript
async function returnValue() {
  return 42;
}

returnValue().then((value) => console.log(value)); // Çıktı: 42
```

---

## **10. Async/Await ve Performans**

- **Promise.all**: Birden fazla asenkron işlemi aynı anda çalıştırmak için kullanılır.
- **Promise.allSettled**: Tüm işlemler tamamlandığında (başarılı ya da başarısız) sonucu döner.

### **Örnek: Promise.all**
```javascript
async function fetchMultipleData() {
  const [data1, data2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json()),
    fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) => res.json()),
  ]);
  console.log(data1, data2);
}

fetchMultipleData();
```

---

### **Sonuç**

1. `async/await`, Promises'ı daha kolay yönetmek için geliştirilmiştir.
2. Kod okunabilirliği ve hata yönetimini geliştirir.
3. Performansı optimize etmek için **Promise.all** gibi yöntemlerle kullanılabilir.

Daha fazla örnek veya detaylı bir konu açıklaması ister misiniz?
```

### **Async/Await ile**
```javascript
async function fetchPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchPost();
```

---

## **6. Error Handling: Try...Catch**

`async` fonksiyonlar içinde hata yönetimi için `try...catch` bloklarını kullanabiliriz.

### **Örnek**
```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.invalid-url.com/data");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

fetchData();
```

---

## **7. Sequential vs Concurrent Async Operations**

- **Sıralı (Sequential):** İşlemler sırayla çalışır ve bir işlem diğerinin tamamlanmasını bekler.
- **Eşzamanlı (Concurrent):** İşlemler aynı anda başlar ve birlikte çalışır.

### **Sıralı Örnek**
```javascript
async function sequential() {
  const result1 = await asyncFunction1();
  const result2 = await asyncFunction2();
  console.log(result1, result2);
}
```

### **Eşzamanlı Örnek**
```javascript
async function concurrent() {
  const [result1, result2] = await Promise.all([
    asyncFunction1(),
    asyncFunction2(),
  ]);
  console.log(result1, result2);
}
```

---

## **8. Rewriting Promise Chains with Async/Await**

Promise zincirlerini daha okunabilir hale getirebiliriz.

### **Promise Zinciri**
```javascript
function processData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => process(data))
    .catch((error) => handleError(error));
}
```

### **Async/Await ile**
```javascript
async function processData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return process(data);
  } catch (error) {
    handleError(error);
  }
}
```

---

## **9. Async Fonksiyonun Dönüş Değeri**

Eğer `async` fonksiyondan bir değer döndürüyorsanız, bu değer otomatik olarak bir **Promise** içine sarılır.

### **Örnek**
```javascript
async function returnValue() {
  return 42;
}

returnValue().then((value) => console.log(value)); // Çıktı: 42
```

---

## **10. Async/Await ve Performans**

- **Promise.all**: Birden fazla asenkron işlemi aynı anda çalıştırmak için kullanılır.
- **Promise.allSettled**: Tüm işlemler tamamlandığında (başarılı ya da başarısız) sonucu döner.

### **Örnek: Promise.all**
```javascript
async function fetchMultipleData() {
  const [data1, data2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json()),
    fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) => res.json()),
  ]);
  console.log(data1, data2);
}

fetchMultipleData();
```

---

### **Sonuç**

1. `async/await`, Promises'ı daha kolay yönetmek için geliştirilmiştir.
2. Kod okunabilirliği ve hata yönetimini geliştirir.
3. Performansı optimize etmek için **Promise.all** gibi yöntemlerle kullanılabilir.

Daha fazla örnek veya detaylı bir konu açıklaması ister misiniz?