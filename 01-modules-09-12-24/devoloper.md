**JavaScript Modülleri (Modules)**

JavaScript modülleri, kodları küçük, taşınabilir ve yeniden kullanılabilir birimler halinde düzenlemek için kullanılır. Büyük uygulamalarda, modüler yapı hem kodun okunabilirliğini artırır hem de bakımı kolaylaştırır. Aşağıda, modüllerin temel kavramlarını ve nasıl çalıştığını Türkçe olarak açıklayacağım.

---

### **Modüllerin Arka Planı**
JavaScript'in başlangıç dönemlerinde genellikle küçük, izole script'ler yazılıyordu. Ancak zamanla, tarayıcı tabanlı uygulamalar büyüdü ve JavaScript diğer platformlarda da (örneğin Node.js) kullanılmaya başlandı. Bu durum, JavaScript programlarını modüllere ayırma ihtiyacını ortaya çıkardı.

Node.js ve birçok framework (Webpack, Babel, RequireJS gibi) uzun zamandır modülleri desteklemekteydi. Şimdi ise tüm modern tarayıcılar, modül özelliklerini doğal olarak destekliyor. Bu sayede kütüphanelere olan bağımlılık azalıyor ve tarayıcılar daha verimli çalışıyor.

---

### **Basit Bir Modül Yapısı**
Örnek bir yapı:

```
index.html
main.js
modules/
    canvas.js
    square.js
```

Bu yapıda:
- **`canvas.js`**: Canvas oluşturma ve raporlama listesi oluşturma fonksiyonlarını içerir.
- **`square.js`**: Kare çizme, alan hesaplama ve çevre hesaplama gibi fonksiyonları içerir.

#### **`canvas.js` içeriği:**
```javascript
export function create(id, parent, width, height) {
  const wrapper = document.createElement('div');
  wrapper.id = id;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  wrapper.appendChild(canvas);
  parent.appendChild(wrapper);
  return { ctx: canvas.getContext('2d'), id };
}

export function createReportList(wrapperId) {
  const list = document.createElement('ul');
  document.getElementById(wrapperId).appendChild(list);
  return list.id;
}
```

#### **`square.js` içeriği:**
```javascript
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);
  return { length, x, y, color };
}

export function reportArea(length, listId) {
  const area = length * length;
  const item = document.createElement('li');
  item.textContent = `Square area: ${area}`;
  document.getElementById(listId).appendChild(item);
}

export function reportPerimeter(length, listId) {
  const perimeter = 4 * length;
  const item = document.createElement('li');
  item.textContent = `Square perimeter: ${perimeter}`;
  document.getElementById(listId).appendChild(item);
}
```

#### **`main.js` içeriği:**
```javascript
import { create, createReportList } from "./modules/canvas.js";
import { draw, reportArea, reportPerimeter } from "./modules/square.js";

const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square.length, reportList);
reportPerimeter(square.length, reportList);
```

#### **`index.html` içeriği:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Modüller</title>
</head>
<body>
  <script type="module" src="main.js"></script>
</body>
</html>
```

---

### **`export` ve `import` Kullanımı**
#### **`export` ile Modül Özelliklerini Dışa Aktarma**
Bir modülden fonksiyon, değişken veya sınıf gibi özellikleri `export` anahtar kelimesiyle dışa aktarabilirsiniz.

Örnek:
```javascript
export const name = "module";
export function doSomething() {
  console.log("Doing something...");
}
```

#### **`import` ile Modül Özelliklerini İçeri Alma**
Bir modülden özellikleri `import` ile içeri alabilirsiniz.

Örnek:
```javascript
import { name, doSomething } from './module.js';

console.log(name); // "module"
doSomething(); // "Doing something..."
```

---

### **Default Export ve Named Export Farkı**
#### **Named Export:**
Birden fazla özellik dışa aktarabilirsiniz. İçe aktarırken isimlerini belirtmelisiniz.
```javascript
// module.js
export const a = 1;
export const b = 2;
```

```javascript
// main.js
import { a, b } from './module.js';
console.log(a, b); // 1, 2
```

#### **Default Export:**
Bir modülden yalnızca bir öğe varsayılan olarak dışa aktarılabilir.
```javascript
// module.js
export default function sayHello() {
  console.log("Hello!");
}
```

```javascript
// main.js
import sayHello from './module.js';
sayHello(); // "Hello!"
```

---

### **Dynamic Import (Dinamik İçe Aktarma)**
Dinamik import, modülleri yalnızca ihtiyaç duyulduğunda yüklemenizi sağlar.

Örnek:
```javascript
const button = document.querySelector("button");
button.addEventListener("click", async () => {
  const module = await import("./modules/square.js");
  module.draw(ctx, 50, 50, 100, "red");
});
```

---

### **Tarayıcı ve Node.js’de Modül Kullanımı**
- **Tarayıcı:** Modüller, `<script type="module">` ile yüklenir.
- **Node.js:** `import` kullanılabilmesi için `package.json` dosyasına `"type": "module"` eklenmelidir.

---

### **Sonuç ve Avantajlar**
JavaScript modülleri:
1. Kodun kapsüller halinde organize edilmesini sağlar.
2. Modüler yapı sayesinde yeniden kullanılabilirlik sunar.
3. Büyük projelerde kod karmaşıklığını azaltır.

Bu bilgiler ışığında, modül kullanımı ile projelerinizde düzen ve performans artışı sağlayabilirsiniz. Yardıma ihtiyaç duyarsanız çekinmeden yazabilirsiniz! 😊