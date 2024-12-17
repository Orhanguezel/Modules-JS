## **4. HTTP Methods: `HTTP POST`, Daten senden mit fetch**

### **HTTP POST Nedir?**
- HTTP POST isteği, sunucuya veri göndermek için kullanılır.
- `fetch()` kullanarak POST isteği yapmak oldukça basittir.

### **Örnek: JSON Veri Gönderme**
```javascript
const postData = {
  title: "New Post",
  body: "This is the content of the new post",
  userId: 1,
};

async function sendPostRequest() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const result = await response.json();
    console.log("Response:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

sendPostRequest();
```

### **Açıklamalar:**
1. **`method: "POST"`**: HTTP metodunu belirtir.
2. **`headers`**: Gönderilen verinin tipini belirler (örneğin JSON).
3. **`body`**: Gönderilecek veriyi içerir.
4. **`JSON.stringify()`**: JavaScript nesnesini JSON formatına çevirir.

---

### **HTTP POST Nedir?**
- **HTTP POST** yöntemi, bir kaynağa yeni veri eklemek veya bir işlem yapmak amacıyla kullanılır.
- Sunucuya veri göndermek için kullanılır ve genellikle **form verileri** veya **JSON** formatında kullanılır.
- Gönderilen veriler, isteğin **body** kısmında yer alır.

---

### **fetch API ile HTTP POST İsteği Gönderme**

`fetch()` kullanarak HTTP POST isteği yaparken temel olarak aşağıdaki adımlar izlenir:

1. **API endpoint**: Veri gönderilecek sunucu adresi belirlenir.
2. **Method**: `POST` metodu tanımlanır.
3. **Headers**: Gönderilen verinin türünü belirtmek için kullanılır.
4. **Body**: Gönderilecek veriyi içerir (JSON, FormData, vb.).
5. **Cevap**: Sunucudan gelen yanıt işlenir.

---

### **JSON Verisi Gönderme (Detaylı Açıklama)**

```javascript
const postData = {
  title: "New Post",
  body: "This is the content of the new post",
  userId: 1,
};

async function sendPostRequest() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // HTTP metodu
      headers: {
        "Content-Type": "application/json", // Gönderilen veri tipi JSON
      },
      body: JSON.stringify(postData), // JavaScript nesnesini JSON'a çevir
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const result = await response.json(); // Sunucudan gelen cevabı JSON formatında al
    console.log("Sunucu cevabı:", result);
  } catch (error) {
    console.error("Hata oluştu:", error.message);
  }
}

sendPostRequest();
```

### **Kod Açıklaması:**
1. **`method: "POST"`**:
   - HTTP metodunu belirler.
   - Bu durumda, veri gönderdiğimiz için **POST** kullanılır.

2. **`headers: { "Content-Type": "application/json" }`**:
   - Gönderilen verinin **JSON formatında** olduğunu sunucuya bildirir.

3. **`body: JSON.stringify(postData)`**:
   - Gönderilecek olan JavaScript nesnesini (`postData`) **JSON formatına** dönüştürür.

4. **`response.ok`**:
   - Sunucudan gelen yanıtın başarılı olup olmadığını kontrol eder.

5. **`await response.json()`**:
   - Sunucudan dönen cevabı **JSON formatına** dönüştürür ve kullanıma hazır hale getirir.

---

### **FormData ile Veri Gönderme**

Bazı durumlarda JSON yerine **FormData** kullanarak veri gönderilir. Bu, özellikle **dosya yükleme** veya **form verisi** gönderme durumlarında tercih edilir.

```javascript
const formData = new FormData();
formData.append("title", "New Post");
formData.append("body", "This is the content of the new post");
formData.append("userId", 1);

async function sendFormData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData, // FormData doğrudan gönderilir
    });

    const result = await response.json();
    console.log("Sunucu cevabı:", result);
  } catch (error) {
    console.error("Hata oluştu:", error.message);
  }
}

sendFormData();
```

### **Kod Açıklaması:**
- **FormData**: `FormData()` nesnesi, anahtar-değer çiftleri kullanarak veri oluşturur.
- **`append()`**: FormData nesnesine veri eklemek için kullanılır.
- **Header**: FormData kullanıldığında **`Content-Type`** otomatik olarak ayarlanır. Manuel bir tanımlama yapılmasına gerek yoktur.

---

### **Error Handling (Hata Yönetimi)**

Veri gönderme sırasında **hata durumlarını** yönetmek için **`try...catch`** blokları kullanılır:

1. Sunucuya istek atılamaması durumunda.
2. Sunucudan beklenmeyen bir yanıt gelirse.
3. Ağ hataları gibi durumlarda.

**Örnek:**

```javascript
try {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: "value" }),
  });

  if (!response.ok) {
    throw new Error("Sunucu isteği başarısız oldu!");
  }

  const data = await response.json();
  console.log("Sunucudan gelen cevap:", data);
} catch (error) {
  console.error("Bir hata oluştu:", error.message);
}
```

---

### **fetch ve Axios Karşılaştırması**

| **Özellik**            | **fetch()**                         | **Axios**                              |
|-------------------------|------------------------------------|----------------------------------------|
| **Varsayılan**          | Tarayıcı API'si                    | Harici kütüphane                       |
| **JSON Dönüşümü**       | Manuel (`response.json()`)         | Otomatik (JSON olarak döner)           |
| **Error Handling**      | Sadece ağ hatalarını yakalar       | Tüm hata durumlarını yakalar           |
| **Request Timeout**     | Manuel yapılandırma gerekir        | Yerleşik destek                        |
| **İstek İptali**        | Desteklenmez (AbortController ile) | Yerleşik destek                        |

---

### **Sonuç**

- **`HTTP POST`** isteği, sunucuya veri göndermek için kullanılan temel bir HTTP metodudur.
- **`fetch()`** ile JSON veya FormData gibi verileri kolayca gönderebiliriz.
- Hataları yönetmek için **try...catch** blokları kullanılmalıdır.
- Daha karmaşık projelerde **Axios** gibi kütüphaneler işleri kolaylaştırabilir.