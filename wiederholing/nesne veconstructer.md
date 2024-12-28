### **JavaScript'te Nesne ve Constructor Oluşturma Örnekleri**

JavaScript'te nesne oluşturmak ve bu nesnelere özellikler (attributes) ve yöntemler (methods) eklemek için çeşitli yollar vardır. Bunlar arasında en yaygın olan yöntemlerden biri **constructor function** veya **ES6 class** kullanımıdır. Aşağıda her iki yöntemle ilgili örnekler ve açıklamalar yer alıyor.

---

## **1. Constructor Function ile Nesne Oluşturma**

### **Temel Örnek**
Constructor function, bir şablon görevi görerek nesnelerin ortak özelliklerini ve yöntemlerini tanımlar.

```javascript
function Araba(marka, model, yil) {
    this.marka = marka; // Nesne özelliği
    this.model = model;
    this.yil = yil;

    this.calistir = function () { // Nesne yöntemi
        console.log(`${this.marka} ${this.model} çalıştırıldı.`);
    };
}

// Constructor ile yeni nesneler oluşturma
const araba1 = new Araba("Toyota", "Corolla", 2021);
const araba2 = new Araba("Honda", "Civic", 2020);

console.log(araba1.marka); // Toyota
araba2.calistir(); // Honda Civic çalıştırıldı.
```

---

### **Prototip Kullanımı**
Yöntemleri her nesne için yeniden tanımlamaktan kaçınmak için prototipler kullanılabilir. Bu, bellek tasarrufu sağlar.

```javascript
function Araba(marka, model, yil) {
    this.marka = marka;
    this.model = model;
    this.yil = yil;
}

// Prototip yöntemi
Araba.prototype.calistir = function () {
    console.log(`${this.marka} ${this.model} çalıştırıldı.`);
};

const araba1 = new Araba("BMW", "X5", 2022);
araba1.calistir(); // BMW X5 çalıştırıldı.
```

---

## **2. ES6 `class` ile Constructor Kullanımı**

ES6'da `class` yapısı, constructor function’a daha okunaklı bir alternatif sunar.

### **Temel Örnek**
```javascript
class Araba {
    constructor(marka, model, yil) {
        this.marka = marka;
        this.model = model;
        this.yil = yil;
    }

    calistir() {
        console.log(`${this.marka} ${this.model} çalıştırıldı.`);
    }
}

const araba1 = new Araba("Mercedes", "A180", 2023);
console.log(araba1.model); // A180
araba1.calistir(); // Mercedes A180 çalıştırıldı.
```

---

### **Get ve Set Metodları**
`class` yapısında özelliklere erişimi kontrol etmek için **getter** ve **setter** kullanılabilir.

```javascript
class Araba {
    constructor(marka, model, yil) {
        this.marka = marka;
        this.model = model;
        this._yil = yil; // Gizlenmek istenen özellik
    }

    get yil() {
        return this._yil;
    }

    set yil(yeniYil) {
        if (yeniYil > 2000) {
            this._yil = yeniYil;
        } else {
            console.log("Geçersiz yıl!");
        }
    }
}

const araba = new Araba("Audi", "A4", 2019);
console.log(araba.yil); // 2019
araba.yil = 2025; // Setter kullanılır
console.log(araba.yil); // 2025
araba.yil = 1990; // Geçersiz yıl!
```

---

## **3. Factory Function ile Nesne Oluşturma**

Factory functions, bir şablon fonksiyonu kullanarak nesneler oluşturur. `new` anahtar kelimesine ihtiyaç duyulmaz.

```javascript
function arabaOlustur(marka, model, yil) {
    return {
        marka,
        model,
        yil,
        calistir() {
            console.log(`${this.marka} ${this.model} çalıştırıldı.`);
        }
    };
}

const araba1 = arabaOlustur("Ford", "Focus", 2020);
console.log(araba1.model); // Focus
araba1.calistir(); // Ford Focus çalıştırıldı.
```

---

## **4. Object.create() ile Nesne Oluşturma**

`Object.create()`, bir nesne oluştururken başka bir nesneyi prototip olarak kullanır.

```javascript
const arac = {
    calistir() {
        console.log(`${this.marka} ${this.model} çalıştırıldı.`);
    }
};

const araba = Object.create(arac);
araba.marka = "Volkswagen";
araba.model = "Golf";
araba.calistir(); // Volkswagen Golf çalıştırıldı.
```

---

## **5. Statik (Static) Metodlar**
Statik metodlar, belirli bir sınıfın nesnesine değil, sınıfın kendisine ait olan metodlardır.

```javascript
class HesapMakinesi {
    static topla(a, b) {
        return a + b;
    }

    static carp(a, b) {
        return a * b;
    }
}

console.log(HesapMakinesi.topla(5, 3)); // 8
console.log(HesapMakinesi.carp(4, 2)); // 8
```

---

## **6. Kalıtım (Inheritance) ile Constructor Kullanımı**

Bir sınıfın başka bir sınıftan türetilmesi için `extends` kullanılır. Üst sınıftaki özellikler ve metodlar alt sınıfa aktarılır.

```javascript
class Hayvan {
    constructor(ad) {
        this.ad = ad;
    }

    sesCikar() {
        console.log(`${this.ad} ses çıkardı.`);
    }
}

class Kedi extends Hayvan {
    constructor(ad, renk) {
        super(ad); // Üst sınıfın constructor'ını çağırır
        this.renk = renk;
    }

    miyavla() {
        console.log(`${this.ad} miyavladı.`);
    }
}

const kedi = new Kedi("Pamuk", "Beyaz");
kedi.sesCikar(); // Pamuk ses çıkardı.
kedi.miyavla(); // Pamuk miyavladı.
```

---

## **7. Özet: Hangi Yöntemi Ne Zaman Kullanmalıyız?**

| **Yöntem**                 | **Kullanım Durumu**                                                                 |
|----------------------------|------------------------------------------------------------------------------------|
| **Constructor Function**   | Daha eski projelerde veya modern ES6 `class` desteklemeyen tarayıcılarda kullanılır. |
| **ES6 `class`**            | Daha okunaklı ve modern projelerde tercih edilir.                                   |
| **Factory Function**       | Daha esnek bir yapı gerektiğinde veya kalıtıma ihtiyaç duymadığınız durumlarda.      |
| **Object.create()**        | Prototip tabanlı mirasın gerektiği durumlarda.                                      |

---

Eğer belirli bir yöntem veya kavramla ilgili daha fazla detay istersen, örneklerle açıklamaya devam edebilirim! 😊