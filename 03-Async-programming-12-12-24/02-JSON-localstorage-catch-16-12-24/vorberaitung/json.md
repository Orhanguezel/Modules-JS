### 1. **Was ist `JSON`?**

**JSON (JavaScript Object Notation)**, verileri düzenlemek ve taşımak için kullanılan hafif bir veri formatıdır. İnsan tarafından okunabilir ve makineler tarafından kolayca ayrıştırılabilir. JSON genellikle web uygulamaları ve sunucular arasında veri alışverişinde kullanılır.

#### **Özellikleri:**
- Düz metin formatındadır.
- Anahtar-değer çiftlerinden oluşur.
- JavaScript objelerine benzer bir yapıya sahiptir.
- Dil bağımsızdır, yani JavaScript dışındaki dillerle de uyumludur.

#### **Örnek JSON Veri:**
```json
{
  "name": "Orhan",
  "age": 30,
  "skills": ["JavaScript", "React", "Node.js"],
  "isEmployed": true
}
```

---

### 2. **Welche `Methode` hat `JSON` und was ist ihre Funktionen?**

JSON, iki ana metot sunar:

#### **`JSON.stringify()`**
Bir JavaScript nesnesini (object) veya dizisini (array) JSON formatına dönüştürür.

**Kullanımı:**
```javascript
const obj = { name: "Orhan", age: 30, skills: ["JavaScript", "React"] };
const jsonString = JSON.stringify(obj);

console.log(jsonString); 
// Çıktı: '{"name":"Orhan","age":30,"skills":["JavaScript","React"]}'
```

#### **`JSON.parse()`**
Bir JSON formatındaki metni JavaScript nesnesine veya dizisine dönüştürür.

**Kullanımı:**
```javascript
const jsonString = '{"name":"Orhan","age":30,"skills":["JavaScript","React"]}';
const obj = JSON.parse(jsonString);

console.log(obj.name); 
// Çıktı: Orhan
```

---

### 3. **Was ist `API`?**

**API (Application Programming Interface)**, yazılım uygulamalarının birbirleriyle iletişim kurmasını sağlayan bir arabirimdir. Özellikle web tabanlı uygulamalarda, verileri almak veya göndermek için kullanılır.

#### **Örnek:**
- Bir hava durumu uygulaması, API üzerinden bir sunucudan hava durumu verilerini alabilir.
- RESTful API'ler genellikle JSON formatında veri döndürür.

**Fetch API Örneği:**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Hata:", error));
```

---

### 4. **Was ist `catch` in Promises?**

**`catch`**, bir Promise içinde meydana gelen hataları yakalamak için kullanılır. Eğer bir `then` zincirinde hata olursa, `catch` bunu işleyebilir.

#### **Kullanımı:**
```javascript
fetch('https://jsonplaceholder.typicode.com/invalid-url')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    console.error("Bir hata oluştu:", error);
  });
```

**Çalışma Mekanizması:**
- Eğer `fetch` başarısız olursa veya `response.json()` hata verirse, `catch` devreye girer ve hatayı yakalar.

---

### 5. **Was ist `localStorage` und warum wird benutzt?**

**`localStorage`**, kullanıcı tarayıcısında veri saklamak için kullanılan bir API'dir. Veriler tarayıcı kapansa bile kalıcıdır.

#### **Özellikler:**
- Maksimum depolama kapasitesi tarayıcıya göre değişir (~5MB).
- Anahtar-değer çiftleri olarak veri saklar.
- JSON veya düz metin formatında veri saklamak için idealdir.

**Ne için kullanılır?**
- Kullanıcı ayarlarını saklamak (tema, dil vb.).
- Alışveriş sepeti verileri.
- Yetkilendirme bilgileri (örneğin, token).

---

### 6. **Was sind `localStorage` Methoden?**

#### **1. `setItem(key, value)`**
Bir anahtar-değer çifti ekler.

**Örnek:**
```javascript
localStorage.setItem('username', 'Orhan');
```

#### **2. `getItem(key)`**
Belirli bir anahtarın değerini alır.

**Örnek:**
```javascript
const username = localStorage.getItem('username');
console.log(username); // Orhan
```

#### **3. `removeItem(key)`**
Belirli bir anahtarı siler.

**Örnek:**
```javascript
localStorage.removeItem('username');
```

#### **4. `clear()`**
Tüm depolanan verileri temizler.

**Örnek:**
```javascript
localStorage.clear();
```

---

### **Örnek Senaryo**

Bir kullanıcının temasını kaydedip geri yükleyen bir uygulama:

```javascript
const themeButton = document.getElementById('theme-button');
themeButton.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', newTheme); // Temayı kaydet
});

window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
});
```

Bu kodla, kullanıcının tema tercihi `localStorage` ile saklanır ve tarayıcı yeniden başlatıldığında geri yüklenir.

---

Tüm konuları detaylıca açıkladım. Daha fazla örnek veya başka bir konu istersen, söyleyebilirsin!