### **JavaScript'te `static` Nedir?**

`static`, JavaScript'te bir **class** (sınıf) içinde tanımlanan özelliklerin veya metodların **sınıfa ait olduğunu**, dolayısıyla bu özellik ve metodlara yalnızca sınıf üzerinden erişilebileceğini ifade eder. Yani `static` ile tanımlanan özellikler veya metodlar, sınıftan türetilmiş nesnelere ait değildir.

---

## **1. Static Özellikler ve Metodlar**

- **Static Özellikler:**
  - Bir sınıfa ait verileri veya durumları saklamak için kullanılır.
  - Sınıf nesneleri üzerinden değil, doğrudan sınıf üzerinden erişilir.

- **Static Metodlar:**
  - Sınıfa özel işlevleri tanımlamak için kullanılır.
  - Nesnelerden çağrılamaz, yalnızca sınıf adı üzerinden erişilir.

---

### **2. Static Metod Tanımlama ve Kullanımı**

#### **Örnek 1: Basit Static Metod**
```javascript
class Matematik {
    static topla(a, b) {
        return a + b;
    }

    static carp(a, b) {
        return a * b;
    }
}

// Static metodlar doğrudan sınıf üzerinden çağrılır
console.log(Matematik.topla(5, 3)); // 8
console.log(Matematik.carp(4, 2)); // 8

// Nesne üzerinden erişilemez
const matematikNesnesi = new Matematik();
console.log(matematikNesnesi.topla); // undefined
```

---

#### **Örnek 2: Static Özellikler**
```javascript
class Kullanici {
    static toplamKullanici = 0; // Static özellik

    constructor(ad) {
        this.ad = ad;
        Kullanici.toplamKullanici++; // Static özelliği artır
    }

    static toplamKullaniciSayisi() {
        return `Toplam kullanıcı sayısı: ${Kullanici.toplamKullanici}`;
    }
}

// Yeni kullanıcılar oluştur
const kullanici1 = new Kullanici("Ali");
const kullanici2 = new Kullanici("Ayşe");

console.log(Kullanici.toplamKullanici); // 2
console.log(Kullanici.toplamKullaniciSayisi()); // Toplam kullanıcı sayısı: 2
```

---

## **3. Static ve Normal Metodların Farkları**

| **Özellik**         | **Static Metod**                          | **Normal Metod**                       |
|----------------------|------------------------------------------|----------------------------------------|
| **Kime Ait?**       | Sınıfa aittir.                           | Nesneye aittir.                        |
| **Nasıl Çağrılır?** | Sınıf üzerinden çağrılır.                | Nesne üzerinden çağrılır.              |
| **Erişim**          | Nesne özelliklerine erişemez.            | Nesne özelliklerine erişebilir.        |
| **Kullanım Amaçları**| Genel işlemler ve sınıfa özgü işlevler.  | Nesnelere özgü işlemler.               |

---

### **4. Static Kullanımının Avantajları**

1. **Bellek Tasarrufu:**
   - Static özellikler ve metodlar tek bir kopya olarak bellekte saklanır ve tüm nesneler arasında paylaşılır.

2. **Genel Amaçlı İşlevler:**
   - Matematiksel işlemler, zaman hesaplamaları gibi genel amaçlı işlemleri sınıf düzeyinde tanımlamak için idealdir.

3. **Sınıf Durumu Yönetimi:**
   - Sınıfın genel durumunu veya bilgisini saklamak için static özellikler kullanılabilir.

---

### **5. Daha Karmaşık Örnekler**

#### **Örnek 1: Fabrika Metodu**
Bir sınıftan nesne oluşturmak için `static` bir fabrika metodu tanımlayabiliriz.

```javascript
class Araba {
    constructor(marka, model) {
        this.marka = marka;
        this.model = model;
    }

    static fabrikaAraci() {
        return new Araba("Toyota", "Corolla"); // Yeni nesne döndür
    }
}

// Static metod üzerinden nesne oluştur
const araba = Araba.fabrikaAraci();
console.log(araba); // Araba { marka: 'Toyota', model: 'Corolla' }
```

---

#### **Örnek 2: Singleton Tasarımı**
Bir sınıfın yalnızca bir örneğinin oluşturulmasını sağlamak için `static` kullanılabilir.

```javascript
class Veritabani {
    static instance;

    constructor() {
        if (Veritabani.instance) {
            return Veritabani.instance;
        }

        Veritabani.instance = this;
        console.log("Veritabanı bağlantısı kuruldu.");
    }
}

const db1 = new Veritabani(); // Veritabanı bağlantısı kuruldu.
const db2 = new Veritabani(); // Daha önce oluşturulan örnek döndürülür.

console.log(db1 === db2); // true
```

---

### **6. Static ve Kalıtım (Inheritance)**

Static özellikler ve metodlar, alt sınıflar tarafından da kullanılabilir veya ezilebilir.

```javascript
class Hayvan {
    static tanim() {
        return "Hayvanlar alemi.";
    }
}

class Kedi extends Hayvan {
    static tanim() {
        return super.tanim() + " Kediler dört bacaklıdır.";
    }
}

console.log(Hayvan.tanim()); // Hayvanlar alemi.
console.log(Kedi.tanim());   // Hayvanlar alemi. Kediler dört bacaklıdır.
```

---

### **7. Static Kullanımına Dikkat Edilmesi Gerekenler**

1. **Nesneye Özgü Değil:**
   - Static özellik ve metodlar, sınıfa özgüdür. Nesnelerin özel durumlarını temsil etmek için kullanılamaz.

2. **Bağımsızdır:**
   - Static metodlar, sınıfın durumuna veya nesneye bağımlı değildir. Genellikle nesne özelliklerine erişimleri yoktur.

3. **Yanlış Kullanım:**
   - Eğer bir işlemin yalnızca sınıfa özgü değil, nesneye bağlı olması gerekiyorsa, `static` kullanılmamalıdır.

---

### **Özet**

- **Static özellikler ve metodlar**, sınıfa özgüdür ve nesne üzerinden değil, sınıf adıyla çağrılır.
- **Kullanım Alanları:**
  - Matematiksel işlemler, sayaçlar, fabrika metotları, genel işlevler.
- **Avantajları:**
  - Bellek tasarrufu sağlar ve sınıf düzeyinde ortak işlemleri yönetir.

Eğer daha fazla örnek veya bir konuda derinlemesine açıklama isterseniz, detaylandırabilirim! 😊