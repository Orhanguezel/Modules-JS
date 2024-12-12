### **Fetch ve Axios Karşılaştırması**

| **Özellik**            | **Fetch**                              | **Axios**                              |
|-------------------------|-----------------------------------------|----------------------------------------|
| **Yerleşik Destek**     | Modern tarayıcılarda yerleşik olarak bulunur; ekstra bir kurulum gerekmez. | Harici bir kütüphane; kurulumu gereklidir. |
| **Varsayılan Ayarlar**  | Sadece temel ayarları destekler, daha fazla yapılandırma için ek kod yazmanız gerekir. | Varsayılan ayarlar (örneğin zaman aşımı) kolayca yapılandırılabilir. |
| **Hata Yönetimi**       | Sadece ağ hatalarını yakalar; HTTP hatalarını (ör. 404, 500) manuel olarak kontrol etmeniz gerekir. | HTTP hatalarını otomatik olarak yakalar. |
| **JSON İşleme**         | Yanıtı `res.json()` çağrısı ile JSON'a dönüştürmeniz gerekir. | Yanıtlar otomatik olarak JSON olarak gelir. |
| **İstek İptali**        | Fetch API, standart olarak iptal edilemez. `AbortController` ile manuel olarak ayarlamanız gerekir. | Axios, `CancelToken` ile kolayca istek iptali destekler. |
| **Tarayıcı Desteği**    | Sadece modern tarayıcılar tarafından desteklenir. | Eski tarayıcılarda da kullanılabilir, çünkü bir polyfill içerir. |
| **Node.js Desteği**     | Fetch, Node.js'te yerleşik değildir (dış kütüphane gereklidir). | Axios, hem tarayıcılar hem de Node.js için çalışır. |
| **Interceptors**        | Fetch, istek/yanıt interceptors desteklemez. | Axios, istek ve yanıt interceptors sağlar. |

---

### **Axios Nedir?**
Axios, HTTP istekleri yapmak için kullanılan bir JavaScript kütüphanesidir. Tarayıcılar ve Node.js ortamında çalışabilir. Fetch API'ye kıyasla daha fazla özellik sunar ve daha kullanışlıdır.

#### **Axios’un Avantajları**
1. **Basit Kullanım:** Fetch'e göre daha az kod yazarak istek gönderebilirsiniz.
2. **İstek/Yanıt Interceptors:** İstek veya yanıt öncesinde veya sonrasında özel işlemler yapabilirsiniz.
3. **Otomatik JSON Desteği:** Yanıtlar otomatik olarak JSON'a dönüştürülür.
4. **Zaman Aşımı (Timeout):** İstekler için kolayca zaman aşımı ayarlayabilirsiniz.
5. **İstek İptali:** Kolay istek iptali için yerleşik destek sunar.

---

### **Axios’u Projeye Eklemek**

1. **Kütüphaneyi Yüklemek**
   Projeye Axios eklemek için aşağıdaki komutları kullanabilirsiniz:

   ```bash
   # NPM ile
   npm install axios

   # Yarn ile
   yarn add axios
   ```

2. **Proje Dosyasında Kullanmak**
   Axios'u kullanmaya başlamak için import etmeniz yeterlidir:

   ```javascript
   import axios from 'axios';
   ```

---

### **Axios Kullanımı**

#### **Basit GET İsteği**
```javascript
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Hata:', error);
  });
```

#### **POST İsteği**
```javascript
import axios from 'axios';

axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'Yeni Gönderi',
  body: 'Axios ile oluşturuldu.',
  userId: 1,
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Hata:', error);
  });
```

#### **Özelleştirilmiş Ayarlarla İstek**
```javascript
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: { 'Authorization': 'Bearer TOKEN' }
});

instance.get('/posts')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Hata:', error);
  });
```

---

### **Axios’un Gelişmiş Özellikleri**

#### **Interceptors Kullanımı**
```javascript
axios.interceptors.request.use(
  config => {
    console.log('İstek gönderiliyor:', config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    console.log('Yanıt alındı:', response);
    return response;
  },
  error => {
    console.error('Yanıt hatası:', error);
    return Promise.reject(error);
  }
);
```

#### **Birden Fazla İsteği Paralel Çalıştırmak**
```javascript
import axios from 'axios';

const request1 = axios.get('https://jsonplaceholder.typicode.com/posts/1');
const request2 = axios.get('https://jsonplaceholder.typicode.com/posts/2');

axios.all([request1, request2])
  .then(axios.spread((res1, res2) => {
    console.log('Birinci yanıt:', res1.data);
    console.log('İkinci yanıt:', res2.data);
  }))
  .catch(error => {
    console.error('Hata:', error);
  });
```

---

### **Axios ile İstek İptali**
```javascript
import axios from 'axios';

const source = axios.CancelToken.source();

axios.get('https://jsonplaceholder.typicode.com/posts', {
  cancelToken: source.token
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (axios.isCancel(error)) {
      console.error('İstek iptal edildi:', error.message);
    } else {
      console.error('Hata:', error);
    }
  });

// İsteği iptal et
source.cancel('İstek manuel olarak iptal edildi.');
```

---

### **Sonuç**
- Fetch, basit işler için uygundur ve yerleşik bir yöntemdir.
- Axios, gelişmiş projelerde hata yönetimi, interceptors, zaman aşımı ayarları gibi özelliklerle daha güçlü bir araçtır.

Her iki yöntemi de kullanmayı öğrenerek farklı ihtiyaçlar için hangisinin daha uygun olduğuna karar verebilirsiniz. 😊