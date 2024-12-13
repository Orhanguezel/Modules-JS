Anladım! Şimdi size öğrenme amacıyla 5 farklı görev hazırlayacağım. Her bir görevde soruyu soracağım, cevabı sizin bulmanızı bekleyeceğim ve ardından doğruluğu kontrol edeceğiz. İşte bu yaklaşımda görevler:

---

### **Görev 1: Alfabetik Sıralama**

`data.txt` dosyasındaki verileri alfabetik sıraya koymak için bir fonksiyon yazın. Fonksiyonunuzun, sıralanmış verileri bir HTML listesinin içine eklemesi gerekiyor.

Soru:
```javascript
// data.txt dosyasındaki verileri alfabetik sıraya koyarak bir <ul> içine yazdıran fonksiyonu yazın.
```

---

### **Görev 2: Belirli Bir Harfle Başlayanları Filtreleme**

`data.txt` dosyasındaki verilerden, yalnızca belirli bir harfle başlayanları ekrana yazdırın. Harf, kullanıcı tarafından belirlenmelidir. Filtrelenmiş verileri bir listeye ekleyin.

Soru:
```javascript
// Belirli bir harfle başlayan verileri listelemek için bir fonksiyon yazın.
// Kullanıcıdan harfi almayı unutmayın!
```

---

### **Görev 3: En Uzun İsmi Bulma**

`data.txt` dosyasındaki en uzun ismi bulun ve bu ismi ekrana yazdırın. Eğer birden fazla isim aynı uzunlukta ise, hepsini listeleyin.

Soru:
```javascript
// En uzun ismi veya isimleri bulan bir fonksiyon yazın.
```

---

### **Görev 4: Ters Alfabetik Sıralama**

`data.txt` dosyasındaki verileri ters alfabetik sıraya koyun ve sıralanmış listeyi bir HTML listesi içinde gösterin.

Soru:
```javascript
// Verileri ters alfabetik sıraya koyarak bir listeye yazdıran fonksiyon yazın.
```

---

### **Görev 5: Benzersiz Verileri Listeleme**

`data.txt` dosyasındaki tekrar eden isimleri kaldırın ve yalnızca benzersiz isimleri ekrana yazdırın.

Soru:
```javascript
// Benzersiz isimleri bulan ve bir listeye ekleyen bir fonksiyon yazın.
```

---

### **HTML Yapısı:**
Bu görevleri çözeceğiniz HTML dosyası aşağıdaki gibidir:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Görevler</title>
    <script src="main.js" defer></script>
  </head>
  <body>
    <h1>Görevler</h1>

    <!-- Görev 1 -->
    <button id="task1">Görev 1: Alfabetik Sıralama</button>
    <ul id="list1"></ul>

    <!-- Görev 2 -->
    <button id="task2">Görev 2: Belirli Harfle Başlayanlar</button>
    <ul id="list2"></ul>

    <!-- Görev 3 -->
    <button id="task3">Görev 3: En Uzun İsim</button>
    <div id="longestName"></div>

    <!-- Görev 4 -->
    <button id="task4">Görev 4: Ters Alfabetik Sıralama</button>
    <ul id="list4"></ul>

    <!-- Görev 5 -->
    <button id="task5">Görev 5: Benzersiz Veriler</button>
    <ul id="list5"></ul>
  </body>
</html>
```

---

### **`data.txt` Örneği:**
Aşağıdaki gibi bir `data.txt` dosyası oluşturabilirsiniz:

```
Ahmet
Zeynep
Mehmet
Ayşe
Fatma
Ahmet
Ayşe
Berk
Ada
Erdem
Gizem
```

---

### **Görev Çözümleri**
Her görevi tek tek çözün. Çözümden sonra kodunuzu test etmek için `main.js` dosyasına ekleyebilir ve sonuçları kontrol edebilirsiniz. Doğruluk kontrolü için çözümleri sonradan tartışırız!