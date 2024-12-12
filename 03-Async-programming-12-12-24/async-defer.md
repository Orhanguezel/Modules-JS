### **3. Was ist der Unterschied zwischen `async` und `defer` attributes im Script tag?**

HTML'de `<script>` etiketinde kullanılan `async` ve `defer` özellikleri, tarayıcıların JavaScript dosyalarını nasıl yüklediğini ve yürüttüğünü kontrol eder.

---

#### **Script Yükleme Mekanizması**
Varsayılan olarak, bir `<script>` etiketi bir HTML belgesine eklendiğinde:
1. Tarayıcı, betiği yüklemek için HTML'yi okuma işlemini durdurur.
2. JavaScript dosyasını indirir.
3. JavaScript kodunu yürütür.
4. Daha sonra HTML belgesini okumaya devam eder.

Bu durum "blocking" (engelleyici) bir etki yaratır ve sayfa performansını düşürebilir. Bu engellemenin önüne geçmek için `async` ve `defer` kullanılır.

---

#### **Async Attribute**

`async` özelliği, JavaScript dosyasını HTML'yi okuma işlemi ile aynı anda indirmeye izin verir. Ancak dosya indirme işlemi tamamlandıktan sonra:
- Tarayıcı HTML'yi okumayı durdurur.
- JavaScript dosyasını hemen yürütür.

**Kullanım:**
```html
<script src="script.js" async></script>
```

**Davranışı:**
- JavaScript dosyası paralel olarak indirilir.
- İndirildikten sonra hemen yürütülür.
- Yükleme sırası, dosya büyüklüğüne ve bağlantı hızına bağlıdır. **Sıra garanti edilmez.**

**Örnek:**
```html
<!DOCTYPE html>
<html>
  <head>
    <script src="analytics.js" async></script>
    <script src="tracking.js" async></script>
  </head>
  <body>
    <h1>Async Örneği</h1>
  </body>
</html>
```
**Açıklama:** `analytics.js` ve `tracking.js` dosyaları aynı anda yüklenir. Ancak hangisi önce yüklenirse o önce çalışır.

---

#### **Defer Attribute**

`defer` özelliği, JavaScript dosyasını HTML'yi okuma işlemi ile aynı anda indirir. Ancak indirme tamamlandıktan sonra:
- JavaScript kodu, HTML tamamen işlendiğinde yürütülür.

**Kullanım:**
```html
<script src="script.js" defer></script>
```

**Davranışı:**
- JavaScript dosyası paralel olarak indirilir.
- HTML tam olarak işlendiğinde çalıştırılır.
- **Sıra garanti edilir.** Yani birden fazla `defer` dosyası varsa, belirtilen sırada yürütülür.

**Örnek:**
```html
<!DOCTYPE html>
<html>
  <head>
    <script src="library.js" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body>
    <h1>Defer Örneği</h1>
  </body>
</html>
```
**Açıklama:** Önce `library.js` yüklenir ve yürütülür. Daha sonra `app.js` yüklenir ve çalışır.

---

#### **Async ve Defer Karşılaştırması**

| **Özellik**      | **Async**                              | **Defer**                             |
|-------------------|----------------------------------------|----------------------------------------|
| **Yükleme Zamanı** | HTML ile aynı anda                    | HTML ile aynı anda                    |
| **Yürütme Zamanı** | Yükleme biter bitmez                  | HTML tamamen işlendiğinde             |
| **Sıra Garantisi** | **Hayır**                             | **Evet**                              |

---

#### **Hangi Durumda Kullanılır?**
1. **`async`:**
   - Kodunuz başka bir şeye bağımlı değilse.
   - Örneğin: Analitik veya izleme araçları.

2. **`defer`:**
   - Kodunuz HTML yapısına veya başka dosyalara bağımlıysa.
   - Örneğin: Kütüphaneler (`library.js` gibi) ve bu kütüphaneyi kullanan dosyalar.

---

**Sıralı Örnek (Defer Kullanımı):**
```html
<!DOCTYPE html>
<html>
  <head>
    <script src="polyfills.js" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body>
    <h1>Polyfill ve App Örneği</h1>
  </body>
</html>
```
**Açıklama:** Önce `polyfills.js` yüklenir ve tarayıcıya eski kodları destekleme işlevi kazandırır. Daha sonra `app.js` yüklenir ve çalışır.

---

Devam edelim mi? (Bir sonraki konu: **4. Was ist `Promise` in JS und warum wird benutzt?**)