document.addEventListener('DOMContentLoaded', () => {
    const task1 = document.getElementById('task1');
    const task2 = document.getElementById('task2');
    const task3 = document.getElementById('task3');
    const task4 = document.getElementById('task4');
    const task5 = document.getElementById('task5');

    const list1 = document.getElementById('list1');
    const list2 = document.getElementById('list2');
    const list3 = document.getElementById('list3');
    const list4 = document.getElementById('list4');
    const list5 = document.getElementById('list5');

    task1.addEventListener('click', sorting);
    task2.addEventListener('click', filtering);
    task3.addEventListener('click', mapping);
    task4.addEventListener('click', reducing);
    task5.addEventListener('click', promise);
});


function fetchData() {
    return fetch('./data.txt')
        .then(response => {
            if (!response.ok) throw new Error('Veri alınamadı');
            return response.text();
        });
}

// Görev 1: Alfabetik Sıralama
function sorting() {
    fetchData()
        .then(text => {
            const sortedData = text.split('\n').sort((a, b) => a.localeCompare(b));
            list1.innerHTML = ''; // Listeyi temizle
            sortedData.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                list1.appendChild(li);
            });
        })
        .catch(error => console.error('Hata:', error.message));
}

// Görev 2: Filtreleme
function filtering() {
    fetchData()
        .then(text => {
            const word = prompt('Enter a word to filter'); // Kullanıcıdan kelime al
            const filteredData = text.split('\n').filter(item => item.includes(word));
            list2.innerHTML = ''; // Listeyi temizle
            filteredData.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                list2.appendChild(li);
            });
        })
        .catch(error => console.error('Hata:', error.message));
}

// Görev 3: Büyük Harfe Çevirme
function mapping() {
    fetchData()
        .then(text => {
            const mappedData = text.split('\n').map(item => item.toUpperCase());
            list3.innerHTML = ''; // Listeyi temizle
            mappedData.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                list3.appendChild(li);
            });
        })
        .catch(error => console.error('Hata:', error.message));
}

// Görev 4: Uzunluklara Göre Toplama (Reduce Kullanımı)
function reducing() {
    fetchData()
        .then(text => {
            const lengths = text.split('\n').map(item => item.length);
            const totalLength = lengths.reduce((acc, curr) => acc + curr, 0);
            list4.innerHTML = ''; // Listeyi temizle
            const li = document.createElement('li');
            li.textContent = `Total Length: ${totalLength}`;
            list4.appendChild(li);
        })
        .catch(error => console.error('Hata:', error.message));
}

// Görev 5: Promise Kullanımı ile Rastgele Veri Çekme
function promise() {
    fetchData()
        .then(text => {
            const dataArray = text.split('\n');
            const randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
            list5.innerHTML = ''; // Listeyi temizle
            const li = document.createElement('li');
            li.textContent = `Random Item: ${randomItem}`;
            list5.appendChild(li);
        })
        .catch(error => console.error('Hata:', error.message));
}

