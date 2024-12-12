### **5. Was ist `fetch` in JS?**

#### **`fetch` Nedir?**
`fetch` bir **JavaScript API**'sidir ve tarayıcının ağ üzerinden kaynaklara erişmek için kullandığı modern bir yöntemdir. Temel olarak, bir web sunucusuna HTTP istekleri (GET, POST, PUT, DELETE vb.) göndermek ve yanıt almak için kullanılır.

---

#### **`fetch` Neden Kullanılır?**
- **Promise tabanlıdır:** Eski yöntem olan `XMLHttpRequest`'e (XHR) göre daha okunabilir ve kolaydır.
- **Basit API:** Kullanımı daha kolaydır ve modern tarayıcılar tarafından desteklenir.
- **Esneklik:** JSON, text, blob, stream gibi farklı veri türlerini destekler.

---

#### **`fetch` Temel Kullanımı**
`fetch` fonksiyonu bir URL alır ve bir **Promise** döndürür.

**Örnek: GET isteği**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Bir hata oluştu: " + response.status);
    }
    return response.json(); // Yanıtı JSON olarak döndür
  })
  .then((data) => {
    console.log(data); // Veriyi yazdır
  })
  .catch((error) => {
    console.error("Hata:", error.message); // Hata mesajını yazdır
  });
```

**Açıklama:**
- `fetch`: HTTP isteği gönderir.
- `response.ok`: Yanıtın başarılı olup olmadığını kontrol eder.
- `response.json()`: Yanıtı JSON formatına dönüştürür.
- `catch`: Hataları yakalar.

---

#### **`fetch` ile POST İsteği**
Sunucuya veri göndermek için `POST` yöntemi kullanılır.

**Örnek:**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Yeni Post",
    body: "Bu bir örnek içeriktir.",
    userId: 1,
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Bir hata oluştu: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Başarılı:", data);
  })
  .catch((error) => {
    console.error("Hata:", error.message);
  });
```

**Açıklama:**
- `method`: HTTP metodunu belirtir (GET, POST, PUT, DELETE vb.).
- `headers`: İsteğin başlıklarını tanımlar. Örneğin, `Content-Type` JSON olduğunu belirtir.
- `body`: Sunucuya gönderilecek veri.

---

#### **`fetch` ile Hataları Yönetme**
`fetch`, ağ hatası (network error) olduğunda bir hata döndürür. Ancak HTTP hatalarını (`404 Not Found`, `500 Internal Server Error`) otomatik olarak yakalamaz.

**Örnek:**
```javascript
fetch("https://jsonplaceholder.typicode.com/nonexistent-endpoint")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Hatası! Durum Kodu: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    console.error("Hata:", error.message);
  });
```

---

#### **`fetch` ile JSON ve Text İşleme**
Yanıtı JSON veya metin (text) olarak işlemek için uygun metotlar kullanılır.

**Örnek: JSON ve Text**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // Yanıt JSON ise
  .then((data) => console.log("JSON Veri:", data));

fetch("https://www.example.com")
  .then((response) => response.text()) // Yanıt metin ise
  .then((data) => console.log("Metin Veri:", data));
```

---

#### **`fetch` ile Timeout**
`fetch` zaman aşımı mekanizmasına sahip değildir. Ancak bu durum `Promise` ile ele alınabilir.

**Örnek: Zaman Aşımı Ayarlama**
```javascript
const fetchWithTimeout = (url, timeout = 5000) => {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Zaman aşımı!")), timeout)
    ),
  ]);
};

fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 3000)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Hata:", error.message));
```

---

#### **`fetch` ile Daha Karmaşık İstekler**
Birden fazla isteği paralel olarak çalıştırabilir ve tüm sonuçları bekleyebilirsiniz.

**Örnek: Promise.all ile Çoklu İstek**
```javascript
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
  .then((results) => {
    results.forEach((result, index) => {
      console.log(`İstek ${index + 1}:`, result);
    });
  })
  .catch((error) => console.error("Hata:", error.message));
```

---

#### **`fetch` ile Alternatifler**
Bazı durumlarda `axios` gibi üçüncü taraf kütüphaneler `fetch` yerine tercih edilir. Bunun nedeni:
- Daha kolay hata yönetimi.
- Daha temiz ve basit API.

**Örnek: `axios` Kullanımı**
```javascript
import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Hata:", error.message);
  });
```

---

Detaylı bir şekilde `fetch` API'sini ele aldık. Daha fazla örnek veya konu üzerinde durmamı ister misiniz?

### **`fetch` API - Ek Detaylar ve İleri Düzey Kullanım**

#### **1. `fetch` ile Yükleme Göstergesi (Loading Indicator)**
`fetch` çağrıları genelde zaman alır. Kullanıcıya yükleme sürecini göstermek için bir **loading indicator** eklenebilir.

**Örnek: Yükleme Göstergesi**
```javascript
const loadingIndicator = document.getElementById("loading");
const resultContainer = document.getElementById("result");

function fetchDataWithLoading(url) {
  loadingIndicator.style.display = "block"; // Yükleme göstergesini aç
  resultContainer.innerText = "";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      loadingIndicator.style.display = "none"; // Yükleme göstergesini kapat
      resultContainer.innerText = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      loadingIndicator.style.display = "none";
      resultContainer.innerText = `Hata: ${error.message}`;
    });
}

// Kullanım
fetchDataWithLoading("https://jsonplaceholder.typicode.com/posts/1");
```

**HTML için Örnek:**
```html
<div id="loading" style="display: none;">Yükleniyor...</div>
<pre id="result"></pre>
```

---

#### **2. `fetch` ile Önbellekleme (Caching)**
Web uygulamalarında gereksiz ağ isteklerini önlemek için yanıtlar önbellekte saklanabilir. `fetch` API bunu tarayıcı seviyesinde otomatik olarak destekler.

**Örnek: `cache` Seçenekleri**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", { cache: "force-cache" })
  .then((response) => response.json())
  .then((data) => console.log("Önbellekli veri:", data))
  .catch((error) => console.error("Hata:", error.message));
```

**Cache Modları:**
- **`default`**: Varsayılan davranış.
- **`no-store`**: Önbelleğe kaydetme.
- **`reload`**: Yeni bir istek yapar, önbellek kullanmaz.
- **`no-cache`**: Önbellekten kontrol eder, ancak yeni bir yanıt alırsa günceller.
- **`force-cache`**: Önbellekli veriyi kullanır.

---

#### **3. `fetch` ile Header Ayarları**
Bazı API'lere erişmek için özel başlıklar (headers) göndermek gerekebilir.

**Örnek: Authorization Header**
```javascript
fetch("https://api.example.com/data", {
  headers: {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log("Veri:", data))
  .catch((error) => console.error("Hata:", error.message));
```

---

#### **4. `fetch` ile Dosya Yükleme**
Bir formdan dosya yüklemek için `fetch` kullanılabilir.

**Örnek: Dosya Yükleme**
```javascript
const fileInput = document.getElementById("fileInput");
const uploadButton = document.getElementById("uploadButton");

uploadButton.addEventListener("click", () => {
  const formData = new FormData();
  formData.append("file", fileInput.files[0]);

  fetch("https://api.example.com/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => console.log("Yükleme başarılı:", data))
    .catch((error) => console.error("Yükleme hatası:", error.message));
});
```

**HTML için Örnek:**
```html
<input type="file" id="fileInput" />
<button id="uploadButton">Yükle</button>
```

---

#### **5. `fetch` ile Akış (Streaming)**
Büyük verileri işlemek için **streaming** kullanılabilir. `fetch` API, yanıtı parça parça okuma imkanı sağlar.

**Örnek: Akışlı Yanıt Okuma**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    const reader = response.body.getReader();
    return reader.read().then(function processText({ done, value }) {
      if (done) {
        console.log("Tüm veri alındı.");
        return;
      }
      console.log("Parça:", new TextDecoder().decode(value));
      return reader.read().then(processText);
    });
  })
  .catch((error) => console.error("Hata:", error.message));
```

---

#### **6. `fetch` ile Hata Yönetimi**
Ağ sorunları, zaman aşımı ve API hataları gibi durumlar için daha kapsamlı bir hata yönetimi kullanılabilir.

**Örnek: Merkezi Hata Yönetimi**
```javascript
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Hatası: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Hata:", error.message);
    throw error; // Hata propagasyonu
  }
}

// Kullanım
fetchWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log("Veri:", data))
  .catch((error) => console.error("Hata oluştu:", error.message));
```

---

#### **7. `fetch` ile Cross-Origin Resource Sharing (CORS)**
Bazı durumlarda, bir sunucudan veri çekerken **CORS** hatası alabilirsiniz. Bu hatalar, sunucunun tarayıcıya belirli bir kaynağa erişim izni vermediğini gösterir.

**Çözüm:**
- Sunucuda doğru CORS ayarlarını yapmak.
- Geliştirme sırasında bir **proxy** kullanmak.

---

Daha fazla detaya veya başka konulara geçmek ister misiniz? Örneklerle birlikte başka sorularınızı da yanıtlayabilirim!