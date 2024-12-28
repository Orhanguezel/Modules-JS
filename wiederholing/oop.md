### **OOP (Object-Oriented Programming - Nesne Yönelimli Programlama)**

**Nesne Yönelimli Programlama (OOP)**, yazılım geliştirme sürecinde **nesneler** ve **sınıflar** (classes) kullanarak bir problemi modellemek için kullanılan bir programlama paradigmasıdır. OOP, gerçek dünyadaki varlıkları (örneğin, bir araba, insan veya banka hesabı gibi) yazılım dünyasına aktarırken **özellikler** (attributes) ve **davranışlar** (behaviors) olarak temsil etmeye odaklanır.

---

## **OOP'nin Temel Kavramları**

1. **Nesne (Object):**
   - Gerçek dünyadaki bir varlığın bilgisayar ortamındaki temsilidir.
   - Özellikleri (attributes/properties) ve davranışları (methods/functions) içerir.
   - Örneğin:
     ```javascript
     const araba = {
         marka: "Toyota",
         model: "Corolla",
         yil: 2021,
         calistir: function () {
             console.log("Araba çalıştı!");
         }
     };

     console.log(araba.marka); // Toyota
     araba.calistir(); // Araba çalıştı!
     ```

2. **Sınıf (Class):**
   - Nesnelerin bir şablonu veya planıdır.
   - Bir sınıf, nesnelerin hangi özelliklere ve yöntemlere sahip olacağını tanımlar.
   - Örneğin:
     ```javascript
     class Araba {
         constructor(marka, model, yil) {
             this.marka = marka;
             this.model = model;
             this.yil = yil;
         }

         calistir() {
             console.log(`${this.marka} ${this.model} çalıştı!`);
         }
     }

     const araba1 = new Araba("Toyota", "Corolla", 2021);
     araba1.calistir(); // Toyota Corolla çalıştı!
     ```

3. **Encapsulation (Kapsülleme):**
   - Bir nesnenin özelliklerini ve yöntemlerini bir sınıfta gruplayarak, dış dünyadan gizlemeyi amaçlar.
   - Örneğin:
     ```javascript
     class BankaHesabi {
         constructor(ad, bakiye) {
             this.ad = ad;
             this._bakiye = bakiye; // _ ile gizlenmek istendiği belirtilir
         }

         paraEkle(miktar) {
             this._bakiye += miktar;
         }

         bakiyeGor() {
             return this._bakiye;
         }
     }

     const hesap = new BankaHesabi("Ali", 1000);
     hesap.paraEkle(500);
     console.log(hesap.bakiyeGor()); // 1500
     ```

4. **Inheritance (Kalıtım):**
   - Bir sınıfın başka bir sınıftan özelliklerini ve yöntemlerini devralmasını sağlar.
   - **Amaç:** Kodun tekrarını azaltmak ve yeniden kullanılabilirliği artırmak.
   - Örneğin:
     ```javascript
     class Arac {
         constructor(marka, model) {
             this.marka = marka;
             this.model = model;
         }

         tanit() {
             console.log(`${this.marka} ${this.model}`);
         }
     }

     class Araba extends Arac {
         constructor(marka, model, yil) {
             super(marka, model); // Üst sınıfın constructor'ını çağırır
             this.yil = yil;
         }

         calistir() {
             console.log(`${this.marka} ${this.model} (${this.yil}) çalıştı!`);
         }
     }

     const araba = new Araba("Honda", "Civic", 2020);
     araba.tanit(); // Honda Civic
     araba.calistir(); // Honda Civic (2020) çalıştı!
     ```

5. **Polymorphism (Çok Biçimlilik):**
   - Bir sınıfın veya nesnenin aynı isimdeki bir fonksiyonu farklı şekillerde gerçekleştirebilmesini sağlar.
   - Örneğin:
     ```javascript
     class Hayvan {
         sesCikar() {
             console.log("Bir ses çıkardı.");
         }
     }

     class Kedi extends Hayvan {
         sesCikar() {
             console.log("Miyav!");
         }
     }

     class Kopek extends Hayvan {
         sesCikar() {
             console.log("Hav!");
         }
     }

     const hayvanlar = [new Kedi(), new Kopek(), new Hayvan()];
     hayvanlar.forEach(h => h.sesCikar());
     // Çıktı:
     // Miyav!
     // Hav!
     // Bir ses çıkardı.
     ```

---

## **OOP'nin Avantajları**

1. **Gerçek Dünya Modelleme:**
   - OOP, gerçek dünyadaki varlıkları (örneğin arabalar, insanlar, hayvanlar) yazılımda modellemeyi kolaylaştırır.

2. **Kodun Yeniden Kullanılabilirliği:**
   - Sınıflar ve kalıtım sayesinde bir kez yazılan kod, farklı nesneler için tekrar kullanılabilir.

3. **Kodun Yönetimi:**
   - Encapsulation ile kodun yönetimi ve anlaşılması daha kolaydır.

4. **Esneklik:**
   - Polymorphism sayesinde aynı isimdeki fonksiyonlar farklı davranışlar sergileyebilir.

5. **Büyük Projeler İçin İdeal:**
   - Büyük yazılım projelerinde, OOP kodun düzenli ve bakımı kolay olmasını sağlar.

---

## **JavaScript ve OOP**

JavaScript, **prototip tabanlı** bir programlama dilidir. Yani, sınıflar ve nesneler **prototype chain** (prototip zinciri) üzerinden çalışır. Ancak modern JavaScript'te, ES6 ile gelen `class` sözdizimi sayesinde OOP daha kolay uygulanabilir hale gelmiştir.

---

## **Örnek: Gerçek Dünya Uygulaması**

Bir kullanıcı sistemi modeli:

```javascript
class Kullanici {
    constructor(ad, email) {
        this.ad = ad;
        this.email = email;
    }

    girisYap() {
        console.log(`${this.ad} giriş yaptı.`);
    }
}

class Admin extends Kullanici {
    constructor(ad, email, yetkiler) {
        super(ad, email);
        this.yetkiler = yetkiler;
    }

    yetkileriGor() {
        console.log(`${this.ad} yetkileri: ${this.yetkiler.join(", ")}`);
    }
}

const kullanici1 = new Kullanici("Ali", "ali@example.com");
kullanici1.girisYap(); // Ali giriş yaptı.

const admin1 = new Admin("Ayşe", "ayse@example.com", ["Kullanıcı Yönetimi", "Sistem Ayarları"]);
admin1.girisYap(); // Ayşe giriş yaptı.
admin1.yetkileriGor(); // Ayşe yetkileri: Kullanıcı Yönetimi, Sistem Ayarları
```

---

## **OOP ve Fonksiyonel Programlama Karşılaştırması**

| **Özellik**           | **OOP**                              | **Fonksiyonel Programlama**        |
|-----------------------|--------------------------------------|------------------------------------|
| **Odak Noktası**      | Nesneler ve sınıflar                 | Fonksiyonlar ve immutability       |
| **Durum (State)**     | Nesne durumlarına bağlıdır           | Durum değişikliği yoktur (stateless) |
| **Kapsülleme**        | Veriler ve fonksiyonlar bir arada    | Veriler ve fonksiyonlar ayrıdır    |
| **Kod Yeniden Kullanımı** | Kalıtım ve sınıflar üzerinden       | Fonksiyonların yeniden kullanımı   |

---

Eğer daha fazla örnek, uygulama veya detay istiyorsanız, sormaktan çekinmeyin! 😊