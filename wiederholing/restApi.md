### **REST API Nedir?**

**REST API** (Representational State Transfer - Temsili Durum Transferi), web tabanlı sistemler arasında iletişim kurmak için kullanılan bir **web servis** türüdür. REST, istemci (client) ve sunucu (server) arasında veri alışverişini belirli prensiplere dayalı olarak gerçekleştiren bir mimaridir.

REST API, genellikle **HTTP protokolü** üzerinden çalışır ve veri paylaşımı için JSON veya XML formatlarını kullanır. 

---

## **REST API’nin Temel Özellikleri**

1. **Kaynak Tabanlıdır (Resource-Based):**
   - Her şey bir **kaynak** olarak ifade edilir (örneğin, kullanıcılar, ürünler, siparişler).
   - Kaynaklar genellikle bir URL ile tanımlanır.
     - Örneğin: `/users`, `/products`, `/orders`

2. **HTTP Yöntemlerini Kullanır:**
   - REST API’de CRUD (Create, Read, Update, Delete) işlemleri HTTP yöntemleri ile yapılır:
     - **GET:** Veri okuma veya listeleme.
     - **POST:** Yeni bir veri oluşturma.
     - **PUT:** Var olan bir veriyi güncelleme.
     - **DELETE:** Bir veriyi silme.

3. **Durumsuzdur (Stateless):**
   - Her istemci isteği bağımsızdır. Sunucu, istemcinin önceki durumunu hatırlamaz.
   - İstemci, gerekli bilgiyi her istekte sunucuya gönderir.

4. **HTTP Durum Kodlarını Kullanır:**
   - REST API, işlemlerin sonucunu bildirmek için HTTP durum kodlarını kullanır:
     - **200 OK:** Başarılı.
     - **201 Created:** Yeni veri oluşturuldu.
     - **400 Bad Request:** Hatalı istek.
     - **404 Not Found:** Kaynak bulunamadı.
     - **500 Internal Server Error:** Sunucu hatası.

5. **Platform Bağımsızdır:**
   - İstemci ve sunucu farklı platformlarda çalışabilir. Örneğin, istemci bir mobil uygulama, sunucu ise bir web uygulaması olabilir.

---

## **REST API Mimarisi**

Bir REST API şu bileşenlere dayanır:

1. **Kaynak (Resource):**
   - Kaynaklar, bir URL ile tanımlanır.
     - Örneğin:
       - `/users` -> Tüm kullanıcılar.
       - `/users/1` -> ID’si 1 olan kullanıcı.

2. **Veri Formatı:**
   - JSON veya XML kullanılır.
   - JSON daha popülerdir çünkü daha hafif ve insan tarafından okunması kolaydır.

3. **HTTP Yöntemleri:**
   - REST API, CRUD işlemlerini HTTP yöntemleriyle gerçekleştirir.

---

## **REST API Örnekleri**

### **1. Temel CRUD İşlemleri**

#### a. Kullanıcıları Listeleme (GET)
```http
GET /users
```

**Cevap:**
```json
[
    { "id": 1, "name": "Ali", "email": "ali@example.com" },
    { "id": 2, "name": "Ayşe", "email": "ayse@example.com" }
]
```

---

#### b. Tek Bir Kullanıcıyı Getirme (GET)
```http
GET /users/1
```

**Cevap:**
```json
{ "id": 1, "name": "Ali", "email": "ali@example.com" }
```

---

#### c. Yeni Kullanıcı Oluşturma (POST)
```http
POST /users
Content-Type: application/json

{
    "name": "Mehmet",
    "email": "mehmet@example.com"
}
```

**Cevap:**
```json
{
    "id": 3,
    "name": "Mehmet",
    "email": "mehmet@example.com"
}
```

---

#### d. Kullanıcı Güncelleme (PUT)
```http
PUT /users/3
Content-Type: application/json

{
    "name": "Mehmet Yılmaz",
    "email": "mehmetyilmaz@example.com"
}
```

**Cevap:**
```json
{
    "id": 3,
    "name": "Mehmet Yılmaz",
    "email": "mehmetyilmaz@example.com"
}
```

---

#### e. Kullanıcı Silme (DELETE)
```http
DELETE /users/3
```

**Cevap:**
```json
{ "message": "Kullanıcı başarıyla silindi." }
```

---

### **2. Node.js ile REST API Oluşturma**

Aşağıda basit bir **Node.js Express** uygulamasıyla REST API örneği verilmiştir.

#### **Adım 1: Gerekli Paketlerin Kurulumu**
```bash
npm install express body-parser
```

#### **Adım 2: REST API’nin Kodlanması**
```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let users = [
    { id: 1, name: "Ali", email: "ali@example.com" },
    { id: 2, name: "Ayşe", email: "ayse@example.com" }
];

// GET /users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET /users/:id
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send("Kullanıcı bulunamadı.");
    res.json(user);
});

// POST /users
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT /users/:id
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send("Kullanıcı bulunamadı.");
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
});

// DELETE /users/:id
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send("Kullanıcı bulunamadı.");
    users.splice(userIndex, 1);
    res.send({ message: "Kullanıcı başarıyla silindi." });
});

// Sunucuyu Başlat
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```

---

## **REST API’nin Kullanım Alanları**

1. **Web Uygulamaları:**
   - Frontend (React, Angular) ile Backend (Node.js, Django) arasında veri alışverişi.

2. **Mobil Uygulamalar:**
   - Mobil cihazlarla sunucular arasında iletişim.

3. **3. Parti Entegrasyonlar:**
   - Ödeme sistemleri, harita hizmetleri gibi servislerle entegrasyon.

4. **IoT ve Mikro Hizmetler:**
   - Cihazlar arasında veri paylaşımı.

---

## **REST API’nin Avantajları**

1. **Basitlik:** HTTP protokolüne dayanır, kullanımı ve anlaşılması kolaydır.
2. **Esneklik:** JSON, XML gibi farklı veri formatlarını destekler.
3. **Platform Bağımsızlığı:** İstemci ve sunucu farklı platformlarda olabilir.
4. **Durumsuzluk:** Her istek bağımsız olduğu için ölçeklenebilir.

---

REST API ile ilgili daha fazla detay, örnek ya da sorularınız varsa memnuniyetle açıklayabilirim! 😊