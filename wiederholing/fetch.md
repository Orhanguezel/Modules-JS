### **Fetch API Nedir?**

**Fetch API**, JavaScript'te **HTTP istekleri** yapmak için kullanılan modern bir web API'sidir. Fetch, hem tarayıcılarda hem de Node.js gibi ortamlarda HTTP isteği göndermek ve gelen yanıtları işlemek için kullanılabilir. 

Fetch API, **asenkron** bir yapıya sahiptir ve `Promise` tabanlı bir model kullanır. Bu, işlemlerin sonuçlarını yönetmek için `.then()` ve `.catch()` gibi yöntemlerin kullanılmasını sağlar.

---

## **Fetch API'nin Temel Özellikleri**

1. **Promise Tabanlı:** 
   - Fetch, bir `Promise` döndürür. İstek tamamlandığında sonuç döner; başarısız olursa hata yakalanabilir.
   
2. **Basit ve Güçlü:**
   - HTTP yöntemleri (**GET**, **POST**, **PUT**, **DELETE**) ile kolayca veri alışverişi yapabilirsiniz.

3. **Esneklik:** 
   - Fetch API, isteklere özel başlıklar (headers), gövde (body) ve ayarları kolayca eklemenizi sağlar.

4. **JSON ve Diğer Veri Formatlarını Destekler:**
   - JSON formatındaki verileri kolayca işlemek için `response.json()` metodu bulunur.

---

## **Fetch API Söz Dizimi**

Fetch API, şu temel sözdizimi ile kullanılır:

```javascript
fetch(url, options)
    .then(response => {
        // HTTP yanıtını işler
    })
    .catch(error => {
        // Hataları yakalar
    });
```

- **`url`**: İstek yapılacak kaynak adresi.
- **`options`**: İsteğin yöntemini, başlıklarını veya gövdesini tanımlamak için kullanılan bir nesne (isteğe bağlıdır).

---

## **Fetch API ile Temel Örnekler**

### **1. GET İsteği**
Bir API'den veri almak için **GET** yöntemi kullanılır.

#### **Örnek: JSON Veri Çekme**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Hatası: ${response.status}`);
        }
        return response.json(); // Yanıtı JSON formatına çevirir
    })
    .then(data => console.log("Veri:", data))
    .catch(error => console.error("Hata:", error));
```

**Çıktı:**
```json
{
    "userId": 1,
    "id": 1,
    "title": "Sample Title",
    "body": "Sample Body"
}
```

---

### **2. POST İsteği**
Sunucuya veri göndermek için **POST** yöntemi kullanılır.

#### **Örnek: JSON Veri Gönderme**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json", // Gönderilen veri JSON formatında
    },
    body: JSON.stringify({
        title: "Yeni Başlık",
        body: "Yeni içerik",
        userId: 1,
    }),
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Hatası: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log("Oluşturulan veri:", data))
    .catch(error => console.error("Hata:", error));
```

**Çıktı:**
```json
{
    "title": "Yeni Başlık",
    "body": "Yeni içerik",
    "userId": 1,
    "id": 101
}
```

---

### **3. PUT İsteği**
Var olan bir veriyi güncellemek için **PUT** yöntemi kullanılır.

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "Güncellenmiş Başlık",
        body: "Güncellenmiş içerik",
        userId: 1,
    }),
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Hatası: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log("Güncellenen veri:", data))
    .catch(error => console.error("Hata:", error));
```

---

### **4. DELETE İsteği**
Bir veriyi silmek için **DELETE** yöntemi kullanılır.

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Hatası: ${response.status}`);
        }
        console.log("Veri başarıyla silindi.");
    })
    .catch(error => console.error("Hata:", error));
```

---

## **Fetch API Seçenekleri (Options)**

`fetch` fonksiyonunda kullanılan `options` parametresinde isteği özelleştirebilirsiniz:

### **Seçenekler:**

| **Parametre**     | **Açıklama**                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| **method**         | İstek yöntemi (**GET**, **POST**, **PUT**, **DELETE**)                     |
| **headers**        | İstek başlıkları (örneğin, `Content-Type: application/json`)               |
| **body**           | İstek gövdesi. Genelde JSON formatında olur (**POST**, **PUT** için).      |
| **mode**           | İstek modu: `cors`, `no-cors`, veya `same-origin`.                         |
| **credentials**    | Çerezlerin gönderilip gönderilmeyeceğini belirler (`include`, `same-origin`). |

#### **Örnek Kullanım:**
```javascript
fetch("https://example.com/api", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer TOKEN", // Yetkilendirme
    },
    body: JSON.stringify({ key: "value" }),
});
```

---

## **Fetch API ile Gelişmiş Örnekler**

### **1. Paralel İstekler (Promise.all ile)**
Birden fazla API'ye aynı anda istek gönderebilirsiniz.

```javascript
const fetchUser = fetch("https://jsonplaceholder.typicode.com/users/1");
const fetchPost = fetch("https://jsonplaceholder.typicode.com/posts/1");

Promise.all([fetchUser, fetchPost])
    .then(async ([userResponse, postResponse]) => {
        const user = await userResponse.json();
        const post = await postResponse.json();
        console.log("Kullanıcı:", user);
        console.log("Gönderi:", post);
    })
    .catch(error => console.error("Hata:", error));
```

---

### **2. Hata Yönetimi**
Fetch sadece ağ seviyesindeki hataları otomatik algılar. HTTP durum kodları ile hata yönetimini kendiniz yapmalısınız.

#### **Örnek:**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/10000") // Bu ID yok
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Hatası: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error("Hata:", error));
```

---

### **3. Async/Await ile Fetch Kullanımı**

`async/await`, fetch işlemini daha temiz ve senkron görünümlü bir şekilde yazmayı sağlar.

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

## **Fetch API’nin Avantajları**

1. **Promise Tabanlı:**
   - Asenkron işlemleri yönetmek daha kolaydır.

2. **Modern ve Hafif:**
   - XMLHttpRequest'e kıyasla daha az karmaşıklığa sahiptir.

3. **Platform Bağımsız:**
   - Tarayıcı, mobil uygulama ve Node.js ortamlarında kullanılabilir (Node.js için `node-fetch` gereklidir).

---

### **Fetch API’nin Dezavantajları**

1. **Hata Yönetimi:**
   - Sadece ağ seviyesindeki hataları yakalar, HTTP durum kodlarına göre manuel kontrol yapılmalıdır.

2. **Eski Tarayıcı Desteği:**
   - Fetch API, eski tarayıcılarda desteklenmez. (Polyfill kullanılabilir.)

---

### **Özet**

- **Fetch API**, modern JavaScript'te asenkron HTTP istekleri için güçlü ve basit bir araçtır.
- **GET**, **POST**, **PUT**, **DELETE** gibi HTTP yöntemlerini destekler.
- Veri formatı olarak genellikle JSON ile çalışır.
- Hata yönetimini dikkatlice planlamalı ve `response.ok` kontrolü yapılmalıdır.
- **Async/Await** ile kullanıldığında daha okunaklı hale gelir.

Sorularınız veya daha fazla örnek ihtiyacınız varsa, detaylandırmaktan mutluluk duyarım! 😊