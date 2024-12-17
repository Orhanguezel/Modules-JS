## **5. Error Handeln mit `try...catch`**

### **`try...catch` Nedir?**
- Hataları kontrol etmek için kullanılır.
- `async/await` ile birlikte kullanılarak asenkron koddaki hataları yönetir.

### **Örnek:**
```javascript
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

fetchData();
```

**Açıklama:**
1. `try` bloğu içerisinde hataya neden olabilecek kod yazılır.
2. Hata durumunda `catch` bloğu çalışır.
3. **`response.ok`** ile isteğin başarılı olup olmadığını kontrol ederiz.

---

### **Özet:**

1. **Promises Problemleri**: Zincirleme yapısı karmaşıklığa neden olabilir.
2. **Callback Hell**: İç içe geçmiş callback'ler kodu okunamaz hale getirir.
3. **Async/Await**: Modern JavaScript sözdizimi, Promises kullanımını kolaylaştırır.
4. **HTTP POST**: fetch ile veri göndermek için kullanılır.
5. **`try...catch`**: Asenkron kodlarda hataları yönetir.

Bu konularda pratik yapmak, anlayışınızı güçlendirecektir. İster misiniz birlikte örneklerle ilerleyelim?