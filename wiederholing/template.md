### **JavaScript Template Literals (Şablon Dizeleri)**

Template literals (şablon dizeleri), JavaScript'te **daha okunabilir ve dinamik** string (dize) oluşturmak için kullanılan bir yöntemdir. ES6 (ECMAScript 2015) ile tanıtılmıştır ve string oluşturma işlemlerini daha kolay ve esnek hale getirir.

---

## **1. Template Literals Nedir?**

Template literals, **backtick** (`` ` ``) işaretleri arasında yazılır. Bu yöntemle:
1. **String interpolation** (değişken veya ifade yerleştirme),
2. **Çok satırlı string oluşturma**,
3. **Dinamik string oluşturma** gibi işlemler yapılabilir.

---

## **2. Söz Dizimi**
Template literals, **`` ` ``** işaretleri arasında yazılır:
```javascript
const mesaj = `Merhaba, Dünya!`;
console.log(mesaj); // Merhaba, Dünya!
```

---

## **3. Dinamik Değerlerle Kullanımı (Interpolation)**

Template literals, **${}** ile değişken veya ifadeleri string içine kolayca yerleştirmenizi sağlar. Bu yöntem, string birleştirme (`+`) ihtiyacını ortadan kaldırır.

### **Örnek: Değişken Eklemek**
```javascript
const isim = "Ali";
const yas = 25;

const mesaj = `Benim adım ${isim} ve ${yas} yaşındayım.`;
console.log(mesaj); // Benim adım Ali ve 25 yaşındayım.
```

### **Örnek: İfade Eklemek**
```javascript
const a = 5;
const b = 10;

const sonuc = `5 + 10 = ${a + b}`;
console.log(sonuc); // 5 + 10 = 15
```

---

## **4. Çok Satırlı Stringler**

Template literals ile **çok satırlı string** oluşturmak çok kolaydır. Normal stringlerde `\n` veya `+` ile yapılması gereken işlemler burada gereksizdir.

### **Örnek: Çok Satırlı String**
```javascript
const mesaj = `Bu birinci satırdır.
Bu ikinci satırdır.
Bu üçüncü satırdır.`;

console.log(mesaj);
// Çıktı:
// Bu birinci satırdır.
// Bu ikinci satırdır.
// Bu üçüncü satırdır.
```

---

## **5. Template Literals ve Fonksiyonlarla Kullanımı**

### **Örnek: Fonksiyon Sonucu Kullanımı**
```javascript
const topla = (a, b) => a + b;

const mesaj = `5 + 3 = ${topla(5, 3)}`;
console.log(mesaj); // 5 + 3 = 8
```

---

## **6. Tagged Templates (Etiketlenmiş Şablonlar)**

Template literals, bir fonksiyon ile **tagged template** olarak kullanılabilir. Bu yöntem, stringlerde özel işlemler yapmak için kullanılır.

### **Nasıl Çalışır?**
1. String parçaları ve interpolated değerler, bir fonksiyona parametre olarak gönderilir.
2. Fonksiyon, bu parametreleri işleyerek özel bir string döndürebilir.

### **Örnek**
```javascript
function etiket(strings, ...values) {
    console.log(strings); // ["Bu birinci kısım ", " ve bu ikinci kısım ", ""]
    console.log(values); // [5, 10]

    return `Toplam: ${values[0] + values[1]}`;
}

const sonuc = etiket`Bu birinci kısım ${5} ve bu ikinci kısım ${10}`;
console.log(sonuc); // Toplam: 15
```

---

## **7. Kullanım Alanları**

### **7.1. HTML Şablonları**
Template literals, HTML şablonları oluşturmak için idealdir:
```javascript
const baslik = "Hoşgeldiniz!";
const paragraf = "Bu bir şablon örneğidir.";

const html = `
    <div>
        <h1>${baslik}</h1>
        <p>${paragraf}</p>
    </div>
`;

console.log(html);
// Çıktı:
// <div>
//     <h1>Hoşgeldiniz!</h1>
//     <p>Bu bir şablon örneğidir.</p>
// </div>
```

---

### **7.2. Dinamik Dosya Yolları**
```javascript
const dosyaAdi = "dosya";
const uzanti = "txt";

const yol = `/home/kullanici/${dosyaAdi}.${uzanti}`;
console.log(yol); // /home/kullanici/dosya.txt
```

---

### **7.3. String Birleştirme Yerine Kullanımı**
```javascript
const isim = "Ayşe";
const mesaj = `Merhaba, ${isim}!`;
console.log(mesaj); // Merhaba, Ayşe!
```

---

## **8. Template Literals ve Normal Stringlerin Farkları**

| **Özellik**                | **Normal String**                          | **Template Literal**                     |
|----------------------------|--------------------------------------------|------------------------------------------|
| **Tanımlama**              | Tek tırnak ('') veya çift tırnak ("")      | Backtick (`` ` ``) kullanılır           |
| **Dinamik Değer**          | String birleştirme (`+`) ile yapılır       | `${}` ile kolayca eklenir               |
| **Çok Satırlı String**     | `\n` kullanılması gerekir                 | Doğrudan yazılabilir                    |
| **Fonksiyon ve İfade Ekleme** | Karmaşıklaşabilir                       | `${}` ile doğrudan eklenir              |

---

## **9. Template Literals'in Avantajları**

1. **Okunabilirlik:** String oluşturma işlemleri daha sade ve okunaklı hale gelir.
2. **Çok Satır Kolaylığı:** Çok satırlı stringlerde ek bir karakter kullanmaya gerek yoktur.
3. **Dinamik İçerik:** `${}` ile değişken, ifade veya fonksiyon sonuçları kolayca stringe eklenir.
4. **HTML Şablonları:** HTML veya benzer string şablonları kolayca oluşturulabilir.
5. **Tagged Templates:** Gelişmiş işlemler için etiketlenmiş şablonlarla esneklik sağlar.

---

Eğer daha fazla örnek veya açıklama isterseniz, detaylandırabilirim! 