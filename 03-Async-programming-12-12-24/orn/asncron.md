
### **2. Was ist `Asynchronous` Code (Non-Blocking)?**

**Asenkron Kod Nedir?**
- Asenkron kod, bir işlemin tamamlanmasını beklemeden sonraki işlemlerin devam ettiği koddur.
- Aynı anda birden fazla işlemin gerçekleşmesini sağlar ve "non-blocking" (engellemeyen) yapıda çalışır.

#### **Özellikleri**
1. **Non-Blocking (Engellemeyen)**:
   - Bir işlem başlatılır ve tamamlanmadan önce diğer işlemler de yürütülür.
   - İşlem tamamlandığında, bir "callback" ya da "promise" yardımıyla sonuca ulaşılır.

2. **Eşzamanlı İşlem**:
   - Kod sırası beklemez; zaman alıcı işlemler arka planda yürütülür.

#### **Örnek (JavaScript)**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async function done");
}, 2000); // 2 saniye gecikmeli

console.log("End");
```

**Çıktı:**
```
Start
End
Async function done
```

- `setTimeout` zamanlayıcı arka planda çalışırken `console.log("End")` hemen işlenir.

#### **Avantajlar**
- Zaman alıcı işlemleri (örneğin: veri tabanı sorguları, API çağrıları) kullanıcı deneyimini etkilemeden gerçekleştirebilir.
- Performansı artırır ve daha akıcı bir uygulama deneyimi sunar.

#### **Dezavantajlar**
- Karmaşıklık artabilir (örneğin: callback hell).
- Hata ayıklaması senkron koda göre daha zordur.

#### **Asenkron Kod Nerelerde Kullanılır?**
- **API Çağrıları:** Veri almak ya da göndermek için.
- **Dosya İşlemleri:** Büyük dosyaların okunması ya da yazılması.
- **UI Güncellemeleri:** Kullanıcı arayüzünde kesinti olmadan işlemlerin tamamlanması.

---

Devam edelim mi? (Bir sonraki konu: **3. Was ist der Unterschied zwischen `async` und `defer` attributes im Script tag?**)