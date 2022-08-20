// let base = prompt("Напиши число");
// let power = prompt("Напиши ступінь");
// const result = (base ** power);

// console.log(result)

// RANDOM
// let max = 82
// let min = 0
// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

// КОНКАТЕНАЦИЯ - СШИВАНИЕ СТРОК
// let firstName = prompt("firstName");
// let lastName = prompt("lastName");
// const fullName = firstName + " " + lastName

// console.log(fullName);


// // ШАБЛОННЫЕ СТРОКИ
// let firstName = prompt("firstName");
// let lastName = prompt("lastName");
// // const welcomeMessage = " "Welcome" + firstName + " " + lastName" НЕ УДОБНО
// const welcomeMessage = `Welcome ${firstName} ${lastName} to our hotel!`;

// console.log(welcomeMessage);

// // НОРМАЛИЗАЦИЯ ПОЛЬЗОВАТЕЛЬСКОГО ВВОДА
// const brand = "SamSung"
// const normalizeBrand = brand.toLowerCase()
// console.log(normalizeBrand);

// let brand = "SamSung"
// brand = brand.toLowerCase()
// console.log(brand);

// // ПОИСК В СТРОКЕ
// const some1 = "спам";
// const some2 = "распродажа";
// const some3 = "кино";
// const sentence = "frevvr freer bb СПАМ маумау вмум efvfeb vbgrb vebr vbgrbgrb распродажа вумуи кпуи"
// console.log(sentence.includes(some1)); //false
// console.log(sentence.toLowerCase().includes(some1)); //true

// // ЗАДАЧА 1
// const x1 = 10
// const x2 = 30
// const number = 32

// console.log(`Число ${number} меньше числа ${x1}? `, number < x1);
// console.log(`Число ${number} больше числа ${x2}? `, number > x2);
// console.log(`Число ${number} больше числа ${x1} и меньше числа ${x2}? `, number > x1 && number < x2);
// console.log(`Число ${number} меньше числа ${x1} или больше числа ${x2}? `, number < x1 || number > x2);

// // варіант запису ерез перемінну
// const result = number < x1 || number > x2;
// console.log(result);

// // ЗАДАЧА 2
// // Можно ли открыть чат для такого пользователя:
// const isFriend = true;
// const isOnline = true;
// const isDnd = false

// const canOpenChat = isFriend && isOnline && !isDnd;
// console.log(`Можно открыть чат?`, canOpenChat);

// // ЗАДАЧА 3
// // Если пользователь PRO или VIP надо дать доступ

// const sub = "free";

// const result = sub === "pro" || sub === "vip";
// console.log(result);

// // ОПЕРАТОР ВЕТВЛЕНИЯ IF
// if (42 > 30) {
//     console.log('You won!');
// } else {
//     console.log('You lost!')
// }

// const salary = 5000;

// if (salary < 500) {
//     console.log('Level 1');
// } else if (salary > 500 && salary < 1500) {
//     console.log('Level 2');
// } else (salary > 1500) {
//     console.log('Level 3')
// }

// ТЕРНАРНЫЙ ОПЕРАТОР
// const message = условие ? выражение1 (если true) : выражение2 (если false)

// const balance = 2000;

// const message = balance > 1500 ? `Доход` : `Убыток`
// console.log(message)

// ВЕБІНАР 2
// Задача HOTEL

// const stars = 12;
// let price;

// if (stars === 1) {
//     price = 20;
// }
// else if (stars === 2) {
//     price = 30;
// }
// else if (stars === 3) {
//     price = 50;
// }
// else if (stars === 4) {
//     price = 70;
// }
// else if (stars === 5) {
//     price = 120;
// }
// else {
//     console.log("Такого количества звезд нет");
// }

// варіант з switch

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
    
//     case 2:
//         price = 30;
//         break;
    
//     case 3:
//         price = 50;
//         break;
    
//     case 4:
//         price = 70;
//         break;
    
//     case 5:
//         price = 120;
//         break;
    
//     default:
//         console.log("Такого количества звезд нет");
// }

// console.log(price);

// ЕСЛИ НЕСКОЛЬКО ПАРАМЕТРОВ ТО ЧЕРЕЗ ИЛИ ||
// 1_ELSE IF

// if (stars === 1 ||stars === 2) {
//     price = 20;
// }
// else if (stars === 2 || stars === 3) {
//     price = 30;
// }
// else if (stars === 5) {
//     price = 120;
// }
// else {
//     console.log("Такого количества звезд нет");
// }

// // 2_SWITCH
// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
    
//     case 3:
//     case 4:
//         price = 50;
//         break;
    
//     case 5:
//         price = 120;
//         break;
    
//     default:
//         console.log("Такого количества звезд нет");
// }

// ЗАДАЧА ДОСТАВКА
// самовывоз 1, курьер 2, почта 3

// РЕШЕНИЕ
// 1. переменная=выбор покупателя - option
// 2. переменная=сообщение в зав от выбора
// break;
// defalt
// log

// const option = 7;
// let message = "";

// switch (option) {
//     case 1:
//         message = "заберите завтра";
//         break;
    
//     case 2:
//         message = "курьер доставит завтра";
//         break;
    
//     case 3:
//         message = "Новая Почта завтра";
//         break;
    
//     default:
//         message = "Мы перезвоним Вам"
// }

// console.log(message);

// ЦИКЛЫ
// FOR (ИНИЦИАЛИЗАЦИЯ; УСЛОВИЕ; ПОСТ - ВЫРАЖЕНИЕ) {}
// 1.ИНИЦИАЛИЗАЦИЯ - ОБЪЯВЛЕНИЕ СЧЕТЧИКА (i - итерация)
// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }
// i += 1 означает i = i + 1
// += увеличивает і на заданное число, -= уменьшает і на заданное число, (зло, лучьше не делать ++ увеличивает i на 1)

// ЗАДАЧА
// переменная количество работников
// у каждого случайная сумма зарплаты от 500 до 5000
// надо вывести общую сумму зарплат totalSalary

// // 1 сделать вары
// let employees = 4;
// let totalSalary = 0;
// const salaryMax = 5000;
// const salaryMin = 500;

// // 2 перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
//     // сгенерить случайное число зарплаты каждого
//     const salary = Math.round(Math.random() * (salaryMax - salaryMin) + salaryMin);
//     console.log(`ЗП работника ${i} - ${salary}`);
//     // 3 прибавить к totalSalary
//     totalSalary += salary;
//     console.log(totalSalary);
// }

// // 4 log
// console.log(totalSalary);

// // ЗАДАЧА (ЧЕТНЫЕ) РЕШЕНИЕ 1
// // есть диапозон чисел от min до max
// // в нем есть четные числа
// // надо их определить
// // и подсчитать их сумму

// // 1 переменные
// const min = 6;
// const max = 157;
// let total = 0;

// // фор от мин до макс с шагом один
// for (let i = min; i <= max; i += 1) {
//     console.log(i);

//     // найти четное число. остаток от деления, пример 7 % 3 = 1 т.к. 7 минус 2 раза по три равно один
// // число четное когда остаток от деления ноль
    
// if (i % 2 === 0) {
//     console.log('четное', i)
//     total += i;
// }
// // лог
// }
//  console.log(`total` , total);

// ЗАДАЧА (ЧЕТНЫЕ) РЕШЕНИЕ 2
// есть диапозон чисел от min до max
// в нем есть четные числа
// надо их определить
// и подсчитать их сумму

// // 1 переменные
// const min = 6;
// const max = 13;
// let total = 0;

// // фор от мин до макс с шагом один
// for (let i = min; i <= max; i += 1) {
//     console.log(i);

//     // найти четное число. остаток от деления, пример 7 % 3 = 1 т.к. 7 минус 2 раза по три равно один
// // число четное когда остаток от деления ноль
    
//     if (i % 2 !== 0) {
//     console.log('НЕ четное', i)
//     continue
//     }
    
// console.log('четное', i)
// total += i;
// }
// // лог
//  console.log(`total` , total);

// // ЗАДАЧА
// let balance = 10000;
// const payment = 9000;

// if (payment <= balance) {
//     console.log('достаточно средств для покупки');
//     balance -= payment;
//     console.log(`на счету осталось ${balance} кредитов`);
// } else {
//     console.log("недостаточно средств на счету")
// }

//     console.log("операция завершена")

// !!!!!!!!!!! ПРАВИЛО !!!!!!!!!! Скобки [ обозначают включительно. Скобки ( не включают число, стоящее после или перед этой скобкой

// ЗАДАЧА ДИСКОНТ В ЗАВИСИМОСТИ ОТ

let totalSpent = 5300;
let payment = 500;
let discount = 0;
   
if (totalSpent >= 100 && totalSpent < 1000) {
    console.log('Скидка 2%');
    discount = 0.02;
}
else if (totalSpent >= 1000 && totalSpent < 5000) {
    console.log('Скидка 5%');
    discount = 0.05;
}
else if (totalSpent >= 5000) {
    console.log('Скидка 10%');
    discount = 0.1;
}

else {
    console.log('Скидка не предусмотрена');
    discount = 0;
}

payment = payment - payment * discount

console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

totalSpent += payment;

console.log(totalSpent);