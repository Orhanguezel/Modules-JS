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




### **Synchronous Code (Blocking)** - Detaylı Açıklama

---

#### **Senkron Programlama Nedir?**
Senkron programlama, işlemlerin sırasıyla ve tam anlamıyla bir "çizgide" çalıştığı bir yaklaşımdır. Kodun her satırı, bir önceki satırın tamamlanmasını bekler. Bu, işlemlerin birbiri ardına gerçekleştiği anlamına gelir.

#### **Senkron Kodun Doğası**
- **Bloklama (Blocking)**: Bir işlem sırasında tüm diğer işlemler beklemeye alınır. Kodun bir kısmı çalışırken, o sırada başka hiçbir işlem gerçekleştirilmez.
- **Sıralı İşleme (Sequential Execution)**: Kod, yukarıdan aşağıya doğru sırasıyla çalışır.
- **Bağımsızlık Eksikliği**: Bir işlem diğerini engelleyebilir. Bu durum, özellikle büyük veri işleme veya ağ çağrıları gibi uzun süren işlemler sırasında performansı ciddi şekilde etkileyebilir.

---

### **Senkron Kod Örnekleri**

#### **Örnek 1: Basit Konsol Çıktısı**
```javascript
console.log("İlk işlem başladı.");
console.log("İkinci işlem başladı.");
console.log("Üçüncü işlem başladı.");
```

**Çıktı:**
```
İlk işlem başladı.
İkinci işlem başladı.
Üçüncü işlem başladı.
```

Burada her satır sırayla çalışır. Kodun işleyişi, tamamen tahmin edilebilirdir.

---

#### **Örnek 2: Bloklama Yaratma**
Bir işlem çok zaman alıyorsa, diğer işlemler beklemek zorunda kalır.

```javascript
console.log("Başladı");

// Zaman alan bir işlem
function uzunSureliIslem() {
  for (let i = 0; i < 1e9; i++) {} // Büyük bir döngü
  console.log("Uzun süreli işlem tamamlandı");
}

uzunSureliIslem();

console.log("Bitti");
```

**Çıktı:**
```
Başladı
Uzun süreli işlem tamamlandı
Bitti
```

- `uzunSureliIslem()` fonksiyonu bitmeden `console.log("Bitti")` çalışmaz.
- Bu bloklama, uygulamayı geçici olarak "donmuş" gibi gösterebilir.

---

#### **Bloklama ve Kullanıcı Deneyimi**

Senkron işlemler, uzun süren görevler sırasında kötü kullanıcı deneyimine yol açabilir. Örneğin:

- **Tarayıcıdaki Donmalar**: Bir web sayfası büyük bir işlem gerçekleştiriyorsa, tarayıcı yanıt veremez hale gelebilir.
- **Mobil Uygulama Performansı**: Ağdan veri almak gibi uzun süren işlemler sırasında kullanıcı etkileşimi engellenebilir.

#### **Örnek: Kullanıcı Arayüzü Donması**

```javascript
console.log("Butona basıldı");

function donmaSimulasyonu() {
  for (let i = 0; i < 1e9; i++) {}
  console.log("İşlem tamamlandı");
}

document.getElementById("button").addEventListener("click", donmaSimulasyonu);

console.log("Kodun sonu");
```

- Kullanıcı butona bastığında, tarayıcı donmuş gibi görünür, çünkü `donmaSimulasyonu()` işlemi sırasında başka hiçbir işlem yapılamaz.

---

### **Avantajlar ve Dezavantajlar**

#### **Avantajlar**
1. **Basitlik**:
   - Kod sıralı çalıştığından anlaması kolaydır.
   - Karmaşık kontrol yapıları gerekmez.

2. **Tahmin Edilebilirlik**:
   - Kodun sırası her zaman nettir.
   - Her işlem, bir öncekinin tamamlanmasını beklediğinden hatalar daha az olur.

3. **Kolay Hata Ayıklama**:
   - Adım adım ilerleyen bir yapıya sahip olduğundan, hata bulunması ve çözülmesi daha kolaydır.

#### **Dezavantajlar**
1. **Performans Sorunları**:
   - Bloklama nedeniyle ağır işlemler sırasında diğer görevler durur.
   - Bu durum, çok kullanıcılı sistemlerde büyük bir sorun haline gelir.

2. **Kullanıcı Deneyimi**:
   - Kullanıcı etkileşimleri (örneğin, bir tıklama veya kaydırma) yavaş işlenir veya engellenir.
   - Donmalar veya gecikmeler yaygın hale gelir.

3. **Eşzamanlı İşlemler Yapılamaz**:
   - Bir işlem diğerini beklemek zorunda olduğu için çoklu görevler zorlaşır.

---

### **Senkron Kodun Kullanım Alanları**
Senkron programlama, aşağıdaki durumlarda uygundur:
- Küçük veya basit projeler.
- Uzun süren işlemler içermeyen görevler.
- Kodun sırasının net bir şekilde takip edilmesinin kritik olduğu durumlar.

#### **Gerçek Hayattan Örnekler**
- **Dosya İşleme**: Küçük dosyaları işlemek.
- **Matematiksel Hesaplamalar**: Küçük ölçekli hesaplamalar yapmak.
- **Statik Web Sayfaları**: Kullanıcı etkileşimi olmayan sayfalar.

---

**Bloklama Sorununu Aşmak İçin Neler Yapılabilir?**
- Ağır işlemleri **Asynchronous (Asenkron)** hale getirmek.
- Bloklamayı önlemek için `Promise`, `async/await` veya `callback` gibi yöntemler kullanmak.

---

Bu detaylar senkron programlamanın doğasını ve limitlerini açıklar. Eğer hazır iseniz, **Asynchronous (Non-Blocking) Code** konusuna geçebiliriz. 😊

### **Asenkron JavaScript ve Neden Gerekli Olduğu**

Asenkron programlama, bir işlemi başlatıp sonucun gelmesini beklerken diğer işlemlere devam etmenizi sağlar. Bu sayede uzun sürebilecek işlemler sırasında programın donmasını veya kullanıcı etkileşimlerini engellemesini önlersiniz.

---

### **Asenkron Programlamanın Gerekliliği**

Bazı işlemler çok uzun sürebilir ve bu işlemler sırasında tarayıcı (veya uygulama) donmuş gibi görünebilir. Örneğin:

- **HTTP İstekleri**: `fetch()` veya `XMLHttpRequest` kullanarak bir sunucudan veri almak.
- **Donanım Erişimi**: Kamera veya mikrofon gibi cihazlara erişim (`getUserMedia()`).
- **Dosya Erişimi**: Kullanıcının bilgisayarından dosya seçmesi (`showOpenFilePicker()`).

Bu tür işlemler senkron olarak çalıştırıldığında, işlem tamamlanana kadar hiçbir şey yapılamaz.

---

### **Senkron Programlamanın Sorunları**

**Senkron Programlama**: Kod satırlarının sırasıyla çalıştığı, bir satır tamamlanmadan diğerine geçmediği programlama biçimidir.

Örnek:

```javascript
console.log("Başlıyor...");
function bekleyenFonksiyon() {
  for (let i = 0; i < 1e9; i++) {} // Uzun süren işlem
  console.log("Fonksiyon tamamlandı!");
}
bekleyenFonksiyon();
console.log("Bitti!");
```

**Çıktı**:
```
Başlıyor...
Fonksiyon tamamlandı!
Bitti!
```

- `bekleyenFonksiyon()` çalışırken diğer işlemler bekler.
- Kullanıcı bu süre zarfında hiçbir şey yapamaz.

**Sorun**: Eğer bir işlem uzun sürerse (örneğin büyük veriler üzerinde çalışmak), tarayıcı veya uygulama tamamen donmuş gibi görünür.

---

### **Asenkron Programlamanın Çözümü**

Asenkron programlama şu şekilde çalışır:

1. Uzun sürebilecek işlemi başlatır.
2. İşlem tamamlanana kadar diğer görevler çalışmaya devam eder.
3. İşlem tamamlandığında sonuç bir geri çağırma (callback) veya başka bir yöntemle alınır.

---

### **Asenkron Kod Örnekleri**

#### **Event Handlers (Olay İşleyiciler)**

Olay işleyiciler, belirli bir olay tetiklendiğinde çalışan asenkron yapılardır. Örnek:

```javascript
const buton = document.querySelector("#myButton");
buton.addEventListener("click", () => {
  console.log("Butona tıklandı!");
});
```

- Tarayıcı, `click` olayını beklerken diğer kodları çalıştırmaya devam eder.

---

#### **XMLHttpRequest ile Asenkron API Çağrısı**

Aşağıdaki örnek, asenkron bir HTTP isteği gerçekleştirir:

```javascript
const xhr = new XMLHttpRequest();

xhr.addEventListener("loadend", () => {
  console.log(`İstek tamamlandı, durum: ${xhr.status}`);
});

xhr.open("GET", "https://api.example.com/veri");
xhr.send();

console.log("İstek gönderildi!");
```

**Çıktı**:
```
İstek gönderildi!
İstek tamamlandı, durum: 200
```

- `xhr.send()` isteği başlatır ve hemen ardından program devam eder.
- `loadend` olayı tetiklendiğinde yanıt işlenir.

---

#### **Callback Kullanımı**

Callback (geri çağırma), bir işlemin tamamlanmasını beklemek için kullanılan bir işlevdir.

```javascript
function veriGetir(callback) {
  setTimeout(() => {
    callback("Veri alındı!");
  }, 2000);
}

veriGetir((data) => {
  console.log(data);
});

console.log("Veri getiriliyor...");
```

**Çıktı**:
```
Veri getiriliyor...
Veri alındı!
```

- İlk olarak `Veri getiriliyor...` yazdırılır.
- 2 saniye sonra `Veri alındı!` mesajı görünür.

---

#### **Callback Hell (Callback Cehennemi)**

Birden fazla asenkron işlem iç içe geçtiğinde kod karmaşık hale gelir:

```javascript
function adim1(deger, callback) {
  callback(deger + 1);
}

function adim2(deger, callback) {
  callback(deger + 2);
}

function adim3(deger, callback) {
  callback(deger + 3);
}

adim1(0, (sonuc1) => {
  adim2(sonuc1, (sonuc2) => {
    adim3(sonuc2, (sonuc3) => {
      console.log(`Sonuç: ${sonuc3}`);
    });
  });
});
```

**Sorunlar**:
- Kod okunamaz hale gelir.
- Hata yönetimi zorlaşır.

---

### **Modern Asenkron Yaklaşımlar**

**Promises** ve **async/await**, callback hell sorununu çözmek için geliştirilmiştir.

Eğer hazır hissediyorsanız, bir sonraki aşamada **Promises** konusunu detaylı olarak açıklayabiliriz.