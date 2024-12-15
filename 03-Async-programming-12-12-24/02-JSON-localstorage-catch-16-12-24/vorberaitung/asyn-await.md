### `async` ve `await` Kullanımı ve Promislerle İlişkisi

JavaScript'te **`async`** ve **`await`**, asenkron işlemleri daha okunabilir ve yönetilebilir hale getirmek için kullanılan modern sözdizimidir. **`async/await`**, **Promises** yapısının üzerine inşa edilmiştir ve aslında Promiselerin basitleştirilmiş bir kullanım şeklidir.

---

#### 1. **Promise Nedir?**
Promise, JavaScript'te asenkron işlemleri yönetmek için kullanılan bir yapıdır. Örneğin, bir API'den veri çekme veya bir dosya okuma işlemleri gibi zaman alan işler Promise kullanılarak yönetilir.

Promise üç farklı durumda olabilir:
- **Pending (Beklemede):** İşlem henüz tamamlanmamış.
- **Fulfilled (Tamamlandı):** İşlem başarıyla tamamlandı ve bir sonuç döndürdü.
- **Rejected (Hata):** İşlem sırasında bir hata oluştu.

Promise yapısının temel kullanım şekli şu şekildedir:
```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Veri başarıyla alındı!");
      } else {
        reject("Bir hata oluştu.");
      }
    }, 2000);
  });
};

// Promise ile kullanım
fetchData()
  .then((data) => console.log(data)) // Başarılı olduğunda
  .catch((error) => console.error(error)); // Hata olduğunda
```

---

#### 2. **`async` Nedir?**
`async` anahtar kelimesi bir fonksiyonun **asenkron** çalışacağını belirtir. Bir fonksiyonu `async` olarak işaretlediğinizde, bu fonksiyon otomatik olarak bir Promise döner.

Örnek:
```javascript
async function fetchData() {
  return "Veri alındı!";
}

// Promise gibi çalışır
fetchData().then((data) => console.log(data));
```

---

#### 3. **`await` Nedir?**
`await`, yalnızca `async` ile tanımlanmış bir fonksiyon içinde kullanılabilir. `await`, bir Promisenin tamamlanmasını bekler ve bu tamamlanma sonucunda dönen değeri alır. Kodunuzu **Promise zincirleme** yapmak zorunda kalmadan yazmanıza olanak sağlar.

Örnek:
```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Veri başarıyla alındı!");
    }, 2000);
  });
};

async function getData() {
  console.log("Veri çekiliyor...");
  const data = await fetchData(); // Promise tamamlanana kadar bekler
  console.log(data);
}

getData();
```

**Çıktı:**
```
Veri çekiliyor...
(2 saniye sonra)
Veri başarıyla alındı!
```

---

#### 4. **`async/await` ile Promise Zincirleme Karşılaştırması**
Promise ile:
```javascript
fetchData()
  .then((data) => {
    console.log("Veri:", data);
    return processData(data);
  })
  .then((processedData) => {
    console.log("İşlenen Veri:", processedData);
  })
  .catch((error) => console.error("Hata:", error));
```

`async/await` ile:
```javascript
async function handleData() {
  try {
    const data = await fetchData();
    console.log("Veri:", data);
    const processedData = await processData(data);
    console.log("İşlenen Veri:", processedData);
  } catch (error) {
    console.error("Hata:", error);
  }
}

handleData();
```

---

#### 5. **Hata Yönetimi**
- **Promise** ile hata yönetimi `catch` metodu ile yapılır.
- **`async/await`** kullanırken hata yönetimi için `try-catch` yapısı kullanılır.

```javascript
async function fetchDataWithError() {
  try {
    const data = await fetchData(); // Başarılı bir işlem
    console.log("Veri:", data);
    const errorData = await fetchError(); // Hatalı bir işlem
    console.log("Bu kod çalışmaz.");
  } catch (error) {
    console.error("Hata:", error);
  }
}
```

---

#### 6. **Önemli Notlar**
- **`await`, sadece bir Promise dönen fonksiyonları bekler.** Eğer bir fonksiyon Promise döndürmüyorsa, `await` kullanmanıza gerek yoktur.
- `async/await`, kodunuzu senkronmuş gibi yazmanızı sağlar. Ancak bu, arka planda asenkron işlem yapıldığı gerçeğini değiştirmez.
- `await` bir işlemi durdurduğu için, birbirine bağlı olmayan işlemleri **aynı anda** çalıştırmak için `Promise.all` ile kullanabilirsiniz.

```javascript
async function fetchMultipleData() {
  const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
  console.log(data1, data2);
}
```

---

#### 7. **`async/await` ve Performans**
- **Avantaj:** Okunabilirlik ve yönetim kolaylığı sağlar.
- **Dezavantaj:** Düzensiz kullanıldığında performans kaybına neden olabilir. Özellikle birbirine bağlı olmayan işlemler için `Promise.all` gibi yöntemlerle paralel çalışmayı tercih etmelisiniz.

```javascript
async function slow() {
  const data1 = await fetchData1();
  const data2 = await fetchData2();
  console.log(data1, data2);
}

async function fast() {
  const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
  console.log(data1, data2);
}
```

---

#### Sonuç
- `async/await`, Promiselerin kolay bir alternatifidir.
- Okunabilirliği artırır ve karmaşık Promise zincirlemeyi önler.
- `try-catch` ile hata yönetimi yapmak kolaydır.
- Performansı optimize etmek için dikkatli kullanılmalıdır.


Evet, `await` kullanılmasa da benzer bir sonuç alınabilir ancak davranış şekli ve işlemlerin sırası farklı olur. Bunun nedenini ve `await` kullanmanın farkını adım adım açıklayayım:

---

### **Kodunuzu İki Durumda İnceleyelim**

#### 1. `await` ile:
```javascript
async function getData() {
  console.log("Veri çekiliyor...");
  const data = await fetchData(); // Promise tamamlanana kadar bekler
  console.log(data);
}

getData();
```

**Çalışma Şekli:**
- `await`, `fetchData()` fonksiyonunun tamamlanmasını bekler. Yani, `fetchData` içindeki işlemler bitmeden bir sonraki satıra geçmez.
- `data` değişkeni, `fetchData()` işlemi tamamlandığında dönen değeri alır.
- Bu durumda `console.log(data)` çağrısı, `fetchData` işlemi bittikten sonra çalışır.

**Çıktı:**
```
Veri çekiliyor...
(2 saniye sonra)
Veri başarıyla alındı!
```

---

#### 2. `await` Olmadan:
```javascript
async function getData() {
  console.log("Veri çekiliyor...");
  const data = fetchData(); // Bir Promise döner, ancak beklenmez
  console.log(data); // Promise'in kendisini yazdırır
}

getData();
```

**Çalışma Şekli:**
- `fetchData()` çağrıldığında bir Promise döner, ancak tamamlanması beklenmez.
- `console.log(data)`, Promise'in kendisini yazdırır, henüz tamamlanmış veya bir sonuç döndürmüş bir işlem değildir.

**Çıktı:**
```
Veri çekiliyor...
Promise { <pending> }
```

**Neden böyle?**
- `await` kullanılmadığı için `fetchData()` işleminin sonucunu beklemeden `console.log(data)` satırı çalışır.
- Bu nedenle, `data` değişkeni asenkron işlem tamamlanmadan önce Promise nesnesini içerir.

---

### **`await` Kullanmanın Avantajı**
1. **Sonucu Doğrudan Elde Etmek:**
   - `await` kullandığınızda, bir Promise tamamlanana kadar beklenir ve dönen değeri elde edersiniz.
   - `await` olmadan, Promise döner ancak sonuç için ayrı bir `.then()` veya başka bir işlem yapmanız gerekir.

2. **Kodun Okunabilirliği:**
   - `await` ile kod yazmak, senkron bir işlemmiş gibi görünür ve bu da okunabilirliği artırır.
   - Karmaşık işlem zincirlerini yönetmek daha kolaydır.

---

### Özet:
- Eğer `await` kullanmazsanız, asenkron işlemin sonucunu beklemeden sonraki satır çalışır ve `Promise {<pending>}` döner.
- `await` ile, işlemin tamamlanmasını bekleyip sonucu alabilirsiniz.
- Eğer işlem sonucunu beklemek istemiyorsanız, `await` kullanmanıza gerek yoktur. Ancak genelde asenkron işlemlerin sonucuyla çalışmak için `await` gereklidir.


**`await`**, gerçek hayatta **asenkron işlemler** sırasında, işlemlerin tamamlanmasını beklemek ve sonucunu almak istediğiniz her durumda kullanılır. Aşağıda gerçek hayatta kullanılan örnek senaryolar ve `await`'in kullanım alanları yer alıyor:

---

### 1. **API'den Veri Çekmek**
Örneğin, bir e-ticaret sitesinde ürünleri listelemek için bir API'den veri çekmeniz gerekebilir.

```javascript
async function fetchProducts() {
  console.log("Ürünler yükleniyor...");
  const response = await fetch("https://api.example.com/products");
  const products = await response.json();
  console.log(products); // API'den gelen ürün listesi
}

fetchProducts();
```

**Gerçek Hayat Senaryosu:**
- Kullanıcı bir sayfayı ziyaret ettiğinde, ürünlerin API'den çekilip görüntülenmesi gerekir.
- `await` ile API'den gelen veriyi bekleyip işleyebilirsiniz. Bu sayede veriler yüklenmeden önce diğer işlemler yapılmaz.

---

### 2. **Veritabanı Sorguları**
Bir restoran yönetim sistemi için veritabanından sipariş verilerini almak gerekebilir.

```javascript
async function getOrders() {
  console.log("Siparişler alınıyor...");
  const orders = await database.query("SELECT * FROM orders WHERE status = 'active'");
  console.log(orders); // Sipariş listesi
}

getOrders();
```

**Gerçek Hayat Senaryosu:**
- Sipariş ekranında, aktif siparişlerin listelenmesi gerekebilir.
- `await`, veritabanı sorgusunun tamamlanmasını bekler ve sonuç döndüğünde diğer işlemleri yapmanıza olanak tanır.

---

### 3. **Kullanıcı Girişi ve Kimlik Doğrulama**
Kullanıcı giriş yaparken, kimlik doğrulama API'sine istek göndermek gerekir.

```javascript
async function login(username, password) {
  const response = await fetch("https://api.example.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const result = await response.json();
  if (result.success) {
    console.log("Giriş başarılı!");
  } else {
    console.log("Giriş başarısız: ", result.message);
  }
}

login("kullaniciAdi", "sifre123");
```

**Gerçek Hayat Senaryosu:**
- Kullanıcı giriş yaparken, giriş bilgilerinin doğrulanması için `await` kullanılır.
- API'den gelen cevap beklenir, ardından başarılı ya da başarısız olma durumuna göre işlem yapılır.

---

### 4. **Dosya Okuma ve Yazma**
Node.js kullanarak bir dosyadan veri okumak veya yazmak gerektiğinde.

```javascript
const fs = require("fs/promises");

async function readFile() {
  console.log("Dosya okunuyor...");
  const data = await fs.readFile("example.txt", "utf8");
  console.log(data); // Dosya içeriği
}

readFile();
```

**Gerçek Hayat Senaryosu:**
- Bir rapor hazırlarken ya da günlük (log) dosyasından bilgi okurken `await` ile dosyanın okunmasını bekleyebilirsiniz.

---

### 5. **E-posta Gönderimi**
Bir kullanıcıya hesap doğrulama e-postası göndermek gerekebilir.

```javascript
async function sendEmail(to, subject, body) {
  const emailResult = await emailService.send({
    to,
    subject,
    body,
  });
  console.log("E-posta durumu: ", emailResult.status);
}

sendEmail("ornek@mail.com", "Hoşgeldiniz", "Hesabınız başarıyla oluşturuldu.");
```

**Gerçek Hayat Senaryosu:**
- Kullanıcı kayıt olurken, hesap doğrulama için bir e-posta göndermeniz gerekebilir.
- `await`, e-posta gönderim işlemi tamamlanana kadar bekler.

---

### 6. **Dosya Yükleme**
Kullanıcının bir profil resmi yüklediğini düşünelim.

```javascript
async function uploadProfilePicture(file) {
  const formData = new FormData();
  formData.append("profilePicture", file);

  const response = await fetch("https://api.example.com/upload", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();
  console.log("Yükleme sonucu: ", result.message);
}
```

**Gerçek Hayat Senaryosu:**
- Kullanıcı bir dosya (örneğin resim) yüklerken, dosyanın sunucuya başarılı bir şekilde yüklenip yüklenmediğini kontrol etmek için `await` kullanılır.

---

### 7. **Birden Fazla İşlemi Paralel Çalıştırmak**
Birden fazla API çağrısı yapmanız gerekiyorsa.

```javascript
async function fetchDashboardData() {
  const [userData, ordersData, statsData] = await Promise.all([
    fetch("https://api.example.com/user").then((res) => res.json()),
    fetch("https://api.example.com/orders").then((res) => res.json()),
    fetch("https://api.example.com/stats").then((res) => res.json()),
  ]);

  console.log("Kullanıcı Verisi:", userData);
  console.log("Siparişler:", ordersData);
  console.log("İstatistikler:", statsData);
}

fetchDashboardData();
```

**Gerçek Hayat Senaryosu:**
- Kullanıcı panelinde, kullanıcı bilgileri, siparişler ve istatistikler gibi veriler aynı anda yüklenmesi gerektiğinde `Promise.all` ile işlemleri paralel olarak çalıştırabilirsiniz.

---

### 8. **Gerçek Zamanlı Veri Güncellemeleri**
Canlı bir uygulamada (örneğin bir sohbet uygulaması) yeni mesajları beklemek.

```javascript
async function fetchNewMessages() {
  while (true) {
    const newMessages = await fetch("https://api.example.com/messages/latest").then((res) =>
      res.json()
    );
    console.log("Yeni Mesajlar:", newMessages);
    await new Promise((resolve) => setTimeout(resolve, 5000)); // 5 saniye bekle
  }
}

fetchNewMessages();
```

**Gerçek Hayat Senaryosu:**
- Sohbet uygulamasında yeni mesajları sürekli kontrol etmek için `await` ile işlemi bekleyebilir ve daha sonra döngüyü tekrar başlatabilirsiniz.

---

### **Sonuç:**
`await`, özellikle **zaman alan işlemleri** beklemek istediğiniz tüm senaryolarda kullanılır. Gerçek hayatta:
- API'den veri almak,
- Veritabanı işlemleri,
- Dosya okuma/yazma,
- E-posta gönderimi,
- Dosya yükleme,
- Gerçek zamanlı veri güncellemeleri gibi işlemler için vazgeçilmezdir.

**`await` kullanmanın en büyük avantajı**, kodunuzu daha okunabilir hale getirerek, karmaşık asenkron işlemleri senkron gibi yazmanıza olanak tanır.