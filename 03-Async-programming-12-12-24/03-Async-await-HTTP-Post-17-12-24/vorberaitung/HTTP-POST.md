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

