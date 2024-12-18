
# 2. Was sind `CORS` und `SOP`?

## **SOP (Same-Origin Policy)**  
- **Açıklama**: SOP, güvenlik amacıyla tarayıcıların sadece aynı kaynaktan gelen (origin) verilere erişmesine izin veren bir kısıtlamadır.  
- **Origin**; protokol, domain ve port bileşenlerinden oluşur:  
  ```
  http://example.com:80  
  ```
- **Örnek**:  
   ```http
   http://example.com/page1.html  
   http://example.com/api/data -> Erişilebilir
   http://otherdomain.com/data -> Erişim engellenir (SOP nedeniyle).
   ```

---

## **CORS (Cross-Origin Resource Sharing)**  
- **Açıklama**: CORS, tarayıcının **farklı origin'lerden** gelen isteklere izin vermesini sağlar.  
- Sunucu, **Access-Control-Allow-Origin** header'ı kullanarak izin verir.

---

### **CORS Çalışma Mantığı**

1. **CORS Header'ları**  
   - `Access-Control-Allow-Origin`: Hangi origin'lere izin verildiğini belirtir.  
     **Örnek:**  
     ```http
     Access-Control-Allow-Origin: https://example.com
     ```

   - `Access-Control-Allow-Methods`: İzin verilen HTTP metotları.  
     **Örnek:**  
     ```http
     Access-Control-Allow-Methods: GET, POST, PUT
     ```

   - `Access-Control-Allow-Headers`: Gönderilecek ek header bilgilerini belirtir.  
     **Örnek:**  
     ```http
     Access-Control-Allow-Headers: Authorization, Content-Type
     ```

---

### **CORS Örneği**

#### **Sunucu Tarafı (Node.js/Express):**
```javascript
const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Tüm origin'lere izin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api", (req, res) => {
  res.json({ message: "CORS successful!" });
});

app.listen(3000, () => console.log("Server running..."));
```

#### **İstemci Tarafı:**
```javascript
fetch("http://localhost:3000/api")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Error:", err));
```

---

### **CORS Proxy**
Bazen üçüncü taraf API'lerde CORS kısıtlaması olur. Bu durumda **CORS Proxy** kullanabilirsiniz.

**Örnek:**  
```javascript
fetch("https://corsproxy.io/?" + encodeURIComponent("https://example.com/data"))
  .then((response) => response.json())
  .then((data) => console.log(data));
```

---

## Özet:

1. **HTTP Headers**: İstemci ve sunucu arasındaki meta bilgileri taşır.  
2. **SOP**: Tarayıcı, güvenlik nedeniyle aynı origin dışındaki isteklere izin vermez.  
3. **CORS**: Sunucu tarafında gerekli header'lar eklenerek farklı origin'lere izin verilir.  
4. **CORS Proxy**: CORS kısıtlamalarını aşmak için kullanılır.

---

### Daha Fazla Öğrenmek İçin:  
1. [HTTP Headers MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)  
2. [CORS MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)  
3. [CORS Proxy](https://corsproxy.io/)  

Sorularınız olursa her zaman buradayım! 🚀

### **Cross-Origin Resource Sharing (CORS)**: Derinlemesine Anlatım

---

### **1. CORS Nedir?**

**CORS** (Cross-Origin Resource Sharing), bir HTTP mekanizmasıdır. Tarayıcıların, **farklı kaynaklardan** (farklı domain, port veya protokol) gelen isteklere izin verip vermeyeceğini belirler. CORS, sunucu tarafında HTTP header'ları aracılığıyla kontrol edilir.

**Temel Kullanım Alanı:**  
Bir web sitesinin front-end kısmı (**https://siteA.com**) üzerinden, başka bir domain'de yer alan bir API'den (**https://siteB.com**) veri çekmek.

---

### **2. Neden CORS Kullanılır?**
Tarayıcılar, güvenlik nedeniyle **aynı kaynak politikası (Same-Origin Policy)** uygular. Bu politika sayesinde bir sayfada çalışan JavaScript, yalnızca **aynı origin**'den veri çekebilir. CORS, bu politikayı genişleterek **çapraz kaynak** (cross-origin) isteklere izin verir.

**Origin Nedir?**  
Bir origin, **domain + protokol + port** kombinasyonudur.  
Örneğin:  
- **https://example.com** ve **http://example.com** farklı origin'lerdir.  
- **https://example.com:3000** ile **https://example.com** farklı origin'lerdir.

---

### **3. CORS Nasıl Çalışır?**

CORS, sunucu tarafında **HTTP başlıkları (headers)** kullanarak tarayıcıya isteklere izin verilip verilmediğini belirtir.

**Temel Akış:**
1. Tarayıcı, isteği yapmadan önce **Origin** başlığı ile bir istek gönderir.
2. Sunucu, gelen isteği değerlendirir.
3. Eğer izin verirse, **Access-Control-Allow-Origin** başlığı ile cevap döner.

---

### **4. Basit İstekler (Simple Requests)**

Bazı istekler **preflight** (ön uçuş) olmadan yapılabilir. Tarayıcı, doğrudan isteği gönderir. Ancak bu isteklerin "basit" olması gerekir.

**Şartlar:**
- HTTP metodları: **GET**, **HEAD**, **POST**.
- Header'lar:  
  - **Accept**  
  - **Accept-Language**  
  - **Content-Language**  
  - **Content-Type** *(sadece belirli türler: application/x-www-form-urlencoded, multipart/form-data, text/plain)*

**Örnek:**
```javascript
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data));
```

**Tarayıcı isteği:**
```http
GET /data HTTP/1.1
Host: api.example.com
Origin: https://siteA.com
```

**Sunucu cevabı:**
```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://siteA.com
Content-Type: application/json
```

---

### **5. Preflighted Requests**

**Preflight** (ön uçuş), **GET/POST** dışında bir HTTP metoduyla veya özel header'larla gönderilen isteklere izin verilip verilmediğini kontrol eder.

**Adımlar:**
1. Tarayıcı, **OPTIONS** metoduyla **preflight** isteği gönderir.
2. Sunucu, hangi origin'lere, metodlara ve header'lara izin verdiğini belirtir.
3. Tarayıcı, sunucunun cevabına göre gerçek isteği gönderir.

**Örnek Preflight Akışı:**

```javascript
fetch("https://api.example.com/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Custom-Header": "customValue",
  },
  body: JSON.stringify({ name: "John" }),
});
```

**Preflight İsteği:**
```http
OPTIONS /submit HTTP/1.1
Host: api.example.com
Origin: https://siteA.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type, X-Custom-Header
```

**Sunucu Cevabı:**
```http
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://siteA.com
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: Content-Type, X-Custom-Header
Access-Control-Max-Age: 86400
```

---

### **6. Önemli CORS Başlıkları**

| **Başlık**                       | **Açıklama**                                                                 |
|----------------------------------|------------------------------------------------------------------------------|
| `Access-Control-Allow-Origin`    | İzin verilen origin'i belirtir. Örneğin: `https://siteA.com` veya `*` (hepsi). |
| `Access-Control-Allow-Methods`   | İzin verilen HTTP metodlarını belirtir. Örneğin: `GET, POST, PUT`.           |
| `Access-Control-Allow-Headers`   | İzin verilen özel header'ları belirtir. Örneğin: `Content-Type, X-Custom`.   |
| `Access-Control-Allow-Credentials`| Credential (cookie, token) ile gönderime izin verir. Değer: `true`.         |
| `Access-Control-Expose-Headers`  | JavaScript'ten erişilebilir header'ları belirtir.                           |
| `Access-Control-Max-Age`         | Preflight isteğinin önbellekte kalma süresini belirtir.                      |

---

### **7. Credentialed Requests**

**Credentialed Requests** ile tarayıcı, `Cookies` veya `Authorization` gibi kimlik doğrulama bilgilerini cross-origin isteklere dahil eder.

**Kullanım:**
```javascript
fetch("https://api.example.com/data", {
  method: "GET",
  credentials: "include", // Credentials eklenir
});
```

**Sunucu cevabı:**
```http
Access-Control-Allow-Origin: https://siteA.com
Access-Control-Allow-Credentials: true
```

---

### **8. CORS Hataları ve Çözümleri**

- **Hata:** `Access-Control-Allow-Origin missing`  
  **Çözüm:** Sunucu, `Access-Control-Allow-Origin` başlığını göndermiyor. Sunucu tarafında izin verilecek origin'i ekleyin.

- **Hata:** `No 'Access-Control-Allow-Origin' header is present on the requested resource.`  
  **Çözüm:** Sunucu CORS desteği sağlamıyor veya yanıt başlıklarını eksik gönderiyor.

- **Hata:** `Access-Control-Allow-Origin: *` ve `credentials: "include"` aynı anda kullanılamaz.  
  **Çözüm:** `Access-Control-Allow-Origin`'da wildcard yerine belirli bir origin belirtin.

---

### **9. CORS ve Güvenlik**

CORS, güvenliği artırmak için tasarlanmış olsa da dikkat edilmesi gereken noktalar:  
- Sunucu tarafında `Access-Control-Allow-Origin: *` kullanımı, güvenlik açığı oluşturabilir.  
- Preflight istekler, potansiyel olarak kötüye kullanılabilir.  
- Credentialed request'lerde güvenilir origin'ler kullanılmalıdır.

---

### **10. CORS ile Çalışmak için Araçlar**

1. **CORS Proxy:**  
   CORS sorunlarını hızlı çözmek için kullanılabilir.  
   Örneğin: `https://corsproxy.io/?https://api.example.com/data`

2. **Tarayıcı Araçları:**  
   - Chrome DevTools  
   - Firefox Network Tools  

3. **Sunucu Konfigürasyon Örnekleri:**
   - **Node.js/Express:**
     ```javascript
     const express = require('express');
     const cors = require('cors');
     const app = express();

     app.use(cors()); // Tüm origin'lere izin verir
     app.listen(3000);
     ```

   - **Nginx:**
     ```nginx
     add_header 'Access-Control-Allow-Origin' 'https://siteA.com';
     ```

---

### **Sonuç**
CORS, modern web uygulamalarında farklı origin'ler arasında güvenli veri paylaşımı sağlar. Sunucu tarafında doğru konfigürasyonla çalıştığında, cross-origin istekleri güvenli ve sorunsuz bir şekilde gerçekleştirebilirsiniz.