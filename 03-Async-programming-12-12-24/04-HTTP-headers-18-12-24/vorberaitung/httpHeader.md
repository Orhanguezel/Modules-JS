### HTTP Headers: Derinlemesine Anlatım

HTTP Headers, **istemci (client)** ve **sunucu (server)** arasındaki iletişim sırasında ek bilgiler taşıyan anahtar-değer çiftleridir. Bu ek bilgiler, hem isteğin (request) hem de yanıtın (response) nasıl işleneceğini belirler.

### **HTTP Headers'ın Temel Yapısı**
Her bir header, aşağıdaki formattadır:

```
Header-Name: Header-Value
```

**Örnek:**
```http
Content-Type: application/json
Authorization: Bearer eyJhbGciOi...
```

---

## **Header Türleri**
HTTP Headers, amaçlarına göre **dört ana kategori** altında incelenir:

### 1. **Request Headers**
İstemcinin sunucuya bilgi göndermesi için kullanılır.  
**Örnekler:**
- `Content-Type`: Gönderilen verinin türünü belirtir.
- `Authorization`: Kimlik doğrulama için kullanılır.
- `Accept`: Sunucudan hangi türde verilerin kabul edildiğini belirtir.

**Örnek Kullanım:**
```http
GET /api/users HTTP/1.1
Host: example.com
Authorization: Bearer eyJhbGciOi...
Accept: application/json
```

---

### 2. **Response Headers**
Sunucu tarafından istemciye gönderilen ek bilgileri içerir.  
**Örnekler:**
- `Content-Type`: Yanıt verisinin türünü belirtir.
- `Cache-Control`: Önbellek yönetimi için kullanılır.
- `Location`: Yönlendirme (redirect) URL'sini belirtir.

**Örnek Kullanım:**
```http
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-cache
```

---

### 3. **Representation Headers**
İçeriğin formatı ve kodlaması hakkında bilgi taşır.  
**Örnekler:**
- `Content-Length`: İçeriğin boyutunu belirtir.
- `Content-Encoding`: Sıkıştırma algoritmasını belirtir.
- `Content-Language`: İçeriğin dilini belirtir.

---

### 4. **Payload Headers**
İçeriğin kendisiyle ilgili **transport** bilgileri sağlar.  
**Örnekler:**
- `Content-Type`: Gönderilen verinin MIME türü.
- `Content-Range`: Veri aralığını belirtir.

---

## **Proxy Kullanımı ile Header Türleri**
### 1. **End-to-End Headers**
Bu header'lar **son alıcıya** iletilir ve değiştirilemez.  
**Örnek:** `Content-Type`, `Authorization`.

### 2. **Hop-by-Hop Headers**
Bu header'lar yalnızca tek bir bağlantı için geçerlidir ve proxy'ler tarafından **yeniden iletilmez**.  
**Örnekler:**
- `Connection`
- `Keep-Alive`

---

## **Popüler HTTP Headers ve Kullanımları**

### 1. **Kimlik Doğrulama (Authentication)**
- **`Authorization`**:  
  İstemci tarafından sunucuya kimlik doğrulama için kullanılır.  
  **Örnek:**  
  ```http
  Authorization: Bearer eyJhbGciOi...
  ```

- **`WWW-Authenticate`**:  
  Sunucu, hangi kimlik doğrulama yönteminin kullanılacağını belirtir.

---

### 2. **Önbellekleme (Caching)**
- **`Cache-Control`**:  
  İstek veya yanıtın önbellekte tutulup tutulmayacağını ve süresini belirtir.  
  **Örnek:**
  ```http
  Cache-Control: no-cache, max-age=3600
  ```

- **`Expires`**:  
  Yanıtın geçerliliğinin biteceği zamanı belirtir.

- **`ETag`**:  
  Bir kaynağın benzersiz sürümünü tanımlamak için kullanılır.

---

### 3. **Koşullu İstekler (Conditionals)**
- **`If-Modified-Since`**: Kaynağın son güncellenme tarihine göre veri getirir.  
- **`If-None-Match`**: Kaynağın `ETag` değeri eşleşmiyorsa yanıt döner.

---

### 4. **Bağlantı Yönetimi (Connection Management)**
- **`Connection`**: Bağlantının açık kalıp kalmayacağını belirler.  
  **Örnek:**
  ```http
  Connection: keep-alive
  ```

- **`Keep-Alive`**: Bağlantının ne kadar süre açık kalacağını belirtir.

---

### 5. **İçerik Müzakeresi (Content Negotiation)**
- **`Accept`**: İstemcinin kabul ettiği veri türlerini belirtir.  
  **Örnek:**
  ```http
  Accept: application/json, text/html
  ```

- **`Accept-Language`**: İçeriğin dilini belirtir.

---

### 6. **CORS (Cross-Origin Resource Sharing)**
Farklı origin'ler arasındaki kaynak erişimini kontrol eder.  
**Örnekler:**
- **`Access-Control-Allow-Origin`**: Hangi origin'lere erişim izni verileceğini belirtir.  
  **Örnek:**
  ```http
  Access-Control-Allow-Origin: *
  ```

- **`Access-Control-Allow-Methods`**: İzin verilen HTTP metodlarını belirtir.  
  **Örnek:**
  ```http
  Access-Control-Allow-Methods: GET, POST
  ```

---

### 7. **Çerezler (Cookies)**
- **`Set-Cookie`**: Sunucu tarafından tarayıcıya cookie gönderir.  
- **`Cookie`**: Tarayıcı tarafından sunucuya cookie'leri geri gönderir.

**Örnek Kullanım:**
```http
Set-Cookie: sessionId=abc123; Secure; HttpOnly
```

---

### 8. **Yönlendirme (Redirects)**
- **`Location`**: Kullanıcıyı başka bir URL'ye yönlendirme için kullanılır.  
**Örnek:**
```http
HTTP/1.1 301 Moved Permanently
Location: https://example.com/newpage
```

---

## **HTTP Header Örneği: JSON API ile İstek**

Aşağıdaki örnekte, bir REST API'ye **POST** isteği gönderiyoruz:

```javascript
fetch("https://example.com/api/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOi..."
  },
  body: JSON.stringify({ name: "Orhan", age: 25 })
})
.then(response => response.json())
.then(data => console.log("Success:", data))
.catch(error => console.error("Error:", error));
```

---

## **HTTP Headers Özet**

| Header            | Tür          | Açıklama                            |
|-------------------|--------------|-------------------------------------|
| Content-Type      | Request      | Gönderilen verinin türü             |
| Authorization     | Request      | Kimlik doğrulama bilgisi            |
| Cache-Control     | Response     | Önbellek kontrolü                   |
| ETag              | Response     | Kaynağın benzersiz sürüm kimliği    |
| Access-Control-Allow-Origin | Response | CORS izinleri                   |
| Set-Cookie        | Response     | Tarayıcıya cookie gönderir          |

---

Bu konular HTTP protokolünü anlamak için kritik öneme sahiptir. Pratik yapmak için çeşitli API'ler ve tarayıcı araçlarını kullanarak istek/yanıtları inceleyebilirsiniz! 🚀