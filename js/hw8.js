
// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість.
//  Нехай елементи массива
//  в рядку будут розділені комою.



// 👉 Спочатку через for

// 1 способ
const strynf = ["i", "love", "nazar"]

const prob = ","
let summb =""
for (let i = 0; i < strynf.length; i++) {
    summb +=strynf[i] 
    if (i< strynf.length -1) {
        summb+=prob
    }

}
console.log(summb);


// 2 способ
const stryn = ["i", "love", "nazar"]
// const prob = " "
let summ =""
for (let i = 0; i < stryn.length; i++) {
    summ +=stryn[i] 
    if (i< stryn.length -1) {
        summ+=","
    }

}

console.log(summ);
    
// 👉 Потім через join()



const stryt = ["i", "love", "nazar"]
const arrey = stryt.join(",")
console.log(arrey);







//  2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

const card = [
    'Карточка-1',
    
    'Карточка-2',
    
    'Карточка-3',
    
    'Карточка-4',
    
    'Карточка-5',
    
    ];

    // 3. Видалити

card.splice(2,1)
console.log(card);



// 4. Додати 

card.splice(2,0,"карточка назарI")
console.log(card);

// 5. Оновити
card.splice(0,1,"kartocka ivancik")
console.log(card);
