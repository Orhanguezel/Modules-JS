**Proxy** bir bilgisayar veya sunucu ile internet arasındaki iletişimi yönlendiren bir ara sunucudur. Bir istemci (örneğin, tarayıcı) ile hedef sunucu arasında bir aracı olarak görev yapar. Proxy'ler birçok farklı amaçla kullanılabilir, örneğin güvenlik, gizlilik, performans iyileştirme veya belirli erişim kısıtlamalarını aşma.

---

## **Proxy'nin Çalışma Prensibi**
1. **İstemci bir istek gönderir:** 
   - Örneğin, bir tarayıcı üzerinden bir web sitesine bağlanmak istediğinizde, bu istek önce proxy sunucusuna gider.
   
2. **Proxy isteği hedef sunucuya iletir:**
   - Proxy, bu isteği hedef sunucuya kendi kimliğiyle iletir.

3. **Hedef sunucudan gelen cevap:**
   - Hedef sunucunun yanıtı, önce proxy'ye ulaşır. Proxy, bu yanıtı istemciye geri iletir.

---

## **Proxy Türleri**

### 1. **Forward Proxy (İleri Yönlendirme Proxy'si):**
   - İstemci tarafında kullanılır.
   - Örneğin, bir şirket ağına internete erişim için forward proxy kullanılır.
   - **Kullanım Alanları:**
     - İstemcinin IP adresini gizlemek.
     - Belirli sitelere erişim kısıtlaması.
     - Trafiği filtrelemek.

### 2. **Reverse Proxy (Ters Yönlendirme Proxy'si):**
   - Sunucu tarafında kullanılır.
   - Örneğin, bir web sunucusunu korumak için reverse proxy kullanılır.
   - **Kullanım Alanları:**
     - Sunucuya gelen trafiği yük dengelemesi ile optimize etmek.
     - Sunucuyu doğrudan dış dünyaya açmadan korumak.
     - Güvenlik amacıyla IP adresini gizlemek.

---

## **Proxy Kullanım Alanları**

1. **Gizlilik ve Anonimlik:**
   - İstemcinin IP adresini gizleyerek anonimliği artırır.
   - Örneğin, bir kişi kendi IP adresi yerine proxy'nin IP adresini kullanabilir.

2. **Erişim Kontrolü ve Filtreleme:**
   - Şirketler veya okullar, kullanıcıların belirli sitelere erişimini kısıtlamak için proxy kullanır.
   - Trafik filtrelemesi yapılabilir.

3. **Performans İyileştirme:**
   - Proxy, sık kullanılan kaynakları (ör. web sayfaları) önbellekte saklayarak yükleme hızını artırabilir.
   - CDN'ler (Content Delivery Networks) genellikle proxy mimarisi kullanır.

4. **Güvenlik:**
   - Proxy, sunucuları koruma altına almak için kullanılabilir.
   - Zararlı trafiği engelleyebilir ve IP adreslerini gizleyebilir.

5. **CORS ve API Sorunlarını Çözmek:**
   - Bir proxy, **CORS (Cross-Origin Resource Sharing)** sorunlarını çözmek için kullanılabilir. İstemcinin hedef sunucuya doğrudan bağlanmak yerine proxy üzerinden bağlanmasını sağlar.

---

## **Proxy'nin Avantaj ve Dezavantajları**

### **Avantajları:**
- **Gizlilik:** İstemci veya sunucunun gerçek IP adresini gizler.
- **Güvenlik:** Trafiği filtreleyerek zararlı içeriklere karşı koruma sağlar.
- **Erişim:** Kısıtlı veya yasaklı içeriklere erişimi mümkün kılar.
- **Performans:** Önbellekleme ile daha hızlı erişim sağlar.

### **Dezavantajları:**
- **Hız Kaybı:** Proxy sunucusu ek bir ara katman olduğu için iletişim süresini uzatabilir.
- **Güvenlik Riski:** Yanlış yapılandırılmış bir proxy, kullanıcı bilgilerini tehlikeye atabilir.
- **Kısıtlamalar:** Bazı içerik sağlayıcılar, bilinen proxy sunucularını engelleyebilir.

---

## **Proxy ve CORS**
Bir **proxy**, CORS sorunlarını çözmek için yaygın olarak kullanılır. CORS, farklı origin'ler arasındaki iletişimi kısıtladığı için, bir proxy kullanarak isteğin aynı origin'den gelmiş gibi görünmesi sağlanabilir.

### **Nasıl Çalışır?**
1. **Normal CORS Hatası:**
   - Tarayıcı, farklı bir origin'den veri talep ettiğinde CORS kısıtlaması nedeniyle bu isteği engeller.

2. **Proxy ile Çözüm:**
   - İstek önce proxy sunucusuna gider.
   - Proxy, bu isteği hedef sunucuya yönlendirir ve yanıtı tarayıcıya geri döner.
   - Böylece tarayıcı, isteğin aynı origin'den geldiğini düşünür.

---

## **Örnek: Basit Proxy Kullanımı**
Bir **Node.js** uygulamasıyla basit bir proxy:

```javascript
const express = require("express");
const request = require("request");

const app = express();

app.use("/proxy", (req, res) => {
  const url = req.query.url; // İstek yapılacak URL
  request(url).pipe(res); // İsteği proxy üzerinden ilet
});

app.listen(3000, () => {
  console.log("Proxy sunucusu çalışıyor: http://localhost:3000");
});
```

Bu proxy ile, bir istemci şu şekilde veri talep edebilir:
```
http://localhost:3000/proxy?url=https://example.com/api/data
```

---

**Sonuç:** Proxy, hem güvenlik hem de erişim kontrolü için kritik bir araçtır. Frontend ve backend arasında CORS sorunlarını çözmek, kısıtlı kaynaklara erişmek veya sunucuyu korumak için etkili bir şekilde kullanılabilir.