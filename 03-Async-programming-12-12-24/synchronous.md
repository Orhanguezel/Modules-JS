Başlayalım. İlk konudan başlıyoruz:

---

### **1. Was ist `Synchronous` Code (Blocking)?**

**Senkron Kod Nedir?**
- Senkron kod, adım adım işlenen koddur. Bir işlem tamamlanmadan sonraki işlem başlatılmaz.
- Kod sırasına bağlıdır, yani her satır önceki satırın tamamlanmasını bekler.

#### **Özellikleri**
1. **Bloklama (Blocking)**:
   - Bir işlem süresince diğer işlemler beklemek zorundadır.
   - Örneğin: Eğer bir dosya okuma işlemi varsa, bu işlem bitene kadar başka işlemler başlatılmaz.

2. **Tahmin Edilebilirlik**:
   - Senkron kodda işlemlerin sırasını takip etmek kolaydır, çünkü her işlem sırayla tamamlanır.

#### **Örnek (JavaScript)**

```javascript
console.log("Start");

function blockingFunction() {
  for (let i = 0; i < 1e9; i++) {} // Zaman alan bir işlem
  console.log("Blocking function done");
}

blockingFunction();

console.log("End");
```

**Çıktı:**
```
Start
Blocking function done
End
```

- `blockingFunction()` tamamlanana kadar `console.log("End")` çalıştırılmaz.

#### **Avantajlar**
- Basittir ve anlaşılması kolaydır.
- Kod sırasına göre çalıştığından hata ayıklaması kolaydır.

#### **Dezavantajlar**
- Bloklama nedeniyle performans kaybı yaratır.
- Özellikle ağır işlemler için kullanıcı deneyimini olumsuz etkileyebilir.

---

Devam edelim mi? (Bir sonraki konu: **Asynchronous Code (Non-Blocking)**)


