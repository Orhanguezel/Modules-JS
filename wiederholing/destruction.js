// destruction
// destruction is a way to extract multiple values from an object or array and assign them to variables in a single statement.

const hesapla = (a,b) => {
    const toplam = a + b
    const carpim = a * b
    const cikarma = a - b
    const bolme = a / b

    const dizi = [toplam, carpim, cikarma, bolme]
    return dizi
}

let [a, b, c, d] = hesapla(3, 4)

console.log(`Toplam: `, a
            , `Çarpım: `, b
            , `Çıkarma: `, c
            , `Bölme: `, d
)


const person = {
    firstName: "Mustafa",
    lastName: "Kara",
    age: 25,
    salary: 5000
}

let isim, soyisim, yas, maas

/*isim = person.firstName
soyisim = person.lastName
yas = person.age
maas = person.salary



let {firstName, lastName, age, salary} = person

console.log(`
İsim: ${firstName}, 
Soyisim: ${lastName}, 
Yaş: ${age}, 
Maaş: ${salary}`)


*/

let {firstName: isim2, lastName: soyisim2, age: yas2, salary: maas2} = person

console.log(`
İsim: ${isim2},
Soyisim: ${soyisim2},
Yaş: ${yas2},
Maaş: ${maas2}
`)









