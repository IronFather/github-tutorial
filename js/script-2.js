// МАССИВЫ

// МОДУЛЬ 2

// const friends = ["mango", "kiwi", "poly", "ajax"];

// console.table(friends);
// console.log(friends.length);
// const lastIndex = friends.length - 1;
// console.table(lastIndex);

// // обращение/поиск по индексу
// console.log(friends[3]);

// // замена/изменение элемента в массиве (по индексу) - !!! это не переопределение переменной (иначе было бы let)
// // это изменение кусочка массива в памяти переменной
// friends[1] = "apple";
// console.log(friends); 
// // (4) ['mango', 'apple', 'poly', 'ajax']

// // передача по значению
// let a = 10
// let b = a;

// console.log(a);
// console.log(b);

// // изменение а не приводит к изменению b так как b - копия первоначального а
// a = 20;
// console.log(a);
// console.log(b);

// передача по ссылке (pointer)

// const balls = ["1qw", "sdf", "sdy", "fgv"];

// console.table(balls);

// const goals = balls;

// balls[2] = "ukr";
// console.table(goals);

// console.log(balls === goals);
// // они равны так как сравнение происходит по одной ячейке в памяти (сравнение ссылок по сути)

// console.log(["1qw", "sdf", "ukr", "fgv"] === ["1qw", "sdf", "ukr", "fgv"]);
// // массивы не равны так как по сути мы сравниваем две разные ячейки памяти а не ссылки на один и тот же массив

// // Итерация по массиву или перебирание элементов в массиве
// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
// console.log(clients[i]);
// }
// // акцент обращения - [i]


// // const clients = ["Mango", "Ajax", "Poly"];
// // for (let i = 0; i < clients.length; i += 1) {
// //     clients[i] += "-2";
// // }
// // console.table(clients);
// // // внесение изменений во все элементы массива clients[i] += " - 2";

// // for of
// const clients = ["Mango", "Ajax", "Poly"];
// for (const client of clients) {
//     console.log(client);
// }
// // гораздо удобнее использовать если не нужен индекс или не нужно изменять элемент массива

// // ЗАДАЧА ПОСЧИТАТЬ СУММУ ПОКУПОК

// const boxes = [23, 45, 78, 98, 28, 45, 76, 99]
// // 1. определить переменную total до цикла (!!!!!!)
// // 2. перебрать массив
// // 3. каждый элемент приплюсовать к total 

// let total = 0;

// for (let i = 0; i < boxes.length; i += 1) {
//     console.log(boxes[i]);
//     total += boxes[i];
//     boxes[5] = 976;
// }

// console.log('total:', total);

// // НО ЛУЧШЕ ИСПОЛЬЗОВАТЬ ПРОСТО FOR OF ЕСЛИ НАДО ПРОСТО ПОДСЧИТАТЬ TOTAL

// const boxes = [23, 45, 78, 98, 28, 45, 76, 99]
// let total = 0;

// for (const value of boxes) {
//     total += value;
// }

// console.log('total:', total);

// ЗАДАЧА ДОБАВИТЬ ПО КАЖДОМУ ПУНКТУ 20% НАЛОГА (ТУТ FOR)

// const boxes = [23, 45, 78, 98, 28, 45, 76, 99]
// let total = 0;

// for (let i = 0; i < boxes.length; i += 1) {
//     console.log(boxes[i]);
//     boxes[i] = Math.round(boxes[i] * 1.2);
//     total += boxes[i];
// }

// console.log('total:', total);

// // ЗАДАЧА НАЙТИ ЧЕТНЫЕ И ПОДСЧИТАТЬ СУММУ

//     const carts = [24, 54, 654, 32, 43, 17, 85, 65, 64, 23, 98, 3, 64, 32, 54, 36, 75]

//     // total
//     let total = 0;

//     // перебрать массив
// for (let i = 0; i < carts.length; i += 1) {
//     // для удобства назначаем переменну cart = cart[i] чтобы не повторять cart[i]:
//     const cart = carts[i];
//     console.log(cart);
//     // перебрать на четные
//     if(cart % 2 === 0) {
//         console.log(`Четное!!!`);
//     // если четное плюсуем к total ВНУТРИ IF
// total += cart;
//     }
// }

// console.log('CУММА ЧЕТНЫХ :>> ', total);

// // ДЛЯ ПРОВЕРКИ (В КОДЕ НЕ ПИСАТЬ)
// // ДУБЛИРУЮ
// const carts = [24, 54, 654, 32, 43, 17, 85, 65, 64, 23, 98, 3, 64, 32, 54, 36, 75]
//     // total
//     let total = 0;
//     // перебрать массив
// for (let i = 0; i < carts.length; i += 1) {
//     // для удобства назначаем переменну cart = cart[i] чтобы не повторять cart[i]:
//     const cart = carts[i];
//     console.log(cart);
// total += cart; 
// } 
// console.log('CУММА ВСЕХ :>> ', total);

// // ПРИМЕНЕНИЕ CONTINUE
// const carts = [24, 54, 654, 32, 43, 17, 85, 65, 64, 23, 98, 3, 64, 32, 54, 36, 75]
//     let total = 0;

// for (const cart of carts) {
//     console.log(cart);
//     if(cart % 2 !== 0) {
//     console.log(`Эту итерацию нужно пропустить!`);
//     continue;
//     }

//     if(cart % 2 === 0) {
//     total += cart;
//     }
// } 
// console.log('CУММА ВСЕХ:', total)

// ЗАДАЧА ПОИСК ЛОГИНА
// ИСПОЛЬЗОВАНИЕ BREAK В IF (ВЫТЕСНЯЯ ELSE)
// ВАРИАНТ 1

// const logins = [`vrtbtbhb`, `dcvfhv`, `fvebrgb`, `sxdw`]
// const loginToFind = `fvebrgb`;
// let message = ``;

// for(let i = 0; i < logins.length; i += 1) {
// const login = logins[i];

// console.log(`Login`, login);
// console.log(`${login} === ${loginToFind} : `, login === loginToFind);

//     if(login === loginToFind) {
//         message = `Пароль ${loginToFind} найден`;
//         break; 
//     }

//     message = `Пароль ${loginToFind} НЕ найден`;
// }

// console.log(message);

// // // ВАРИАНТ 2 - ЛУЧШЕ ЧЕМ 1

// const logins = [`vrtbtbhb`, `dcvfhv`, `fvebrgb`, `sxdw`]
// const loginToFind = `fvebrgb`;
// // ОТ ОБРАТНОГО УКАЗЫВАЕМ СПЕРВА СООБЩЕНИЕ ДЛЯ ВСЕХ НЕСОВПАДЕНИЙ ДО МОМЕНТА НАХОЖДЕНИЯ
// let message = `Пароль ${loginToFind} НЕ найден`;

// for(let i = 0; i < logins.length; i += 1) {
// const login = logins[i];

// console.log(`Login`, login);
// console.log(`${login} === ${loginToFind} : `, login === loginToFind);

//     if(login === loginToFind) {
//         message = `Пароль ${loginToFind} найден`;
//         break; 
//     }
// }

// console.log(message);

// // ВАРИАНТ 3 (FOR OF)

// const logins = [`vrtbtbhb`, `dcvfhv`, `fvebrgb`, `sxdw`]
// const loginToFind = `fvebrgb`;

// for(const login of logins) {
// console.log(`Login`, login);
// console.log(`${login} === ${loginToFind} : `, login === loginToFind);

//     if(login === loginToFind) {
//     message = `Пароль ${loginToFind} найден`;
//     break; 
//     }   
// }

// console.log(message);

// // ВАРИАНТ 4 (INCLUDES) ДЛЯ ПОИСКА ПРИМИТИВОВ В МАССИВЕ (возвращает true или false)

// const logins = [`vrtbtbhb`, `dcvfhv`, `fvebrgb`, `sxdw`]
// const loginToFind = `fvebrgb`;

// console.log(logins.includes(`ddede`));

// ВАРИАНТ 5 (ТЕРНАРНЫЙ ОПЕРАТОР) 

// const logins = [`vrtbtbhb`, `dcvfhv`, `fvebrgb`, `sxdw`]
// const loginToFind = `fvebrgb`;

// const message = logins.includes(loginToFind) ? `ага` : `неа`;
// console.log(message);

// // ЗАДАЧА НАЙТИ НАИМЕНЬШЕЕ ЧИСЛО
// const numbers = [24, 54, 654, 32, 43, 17, 85, 65, 64, 23, 98, 3, 64, 32, 54, 36, 75]
//     let smallestNumber = numbers[0];

// for(const number of numbers) {
//     if(number < smallestNumber) {
//         smallestNumber = number
//     } 
// }
// console.log(smallestNumber);

// ЗАДАЧА СШИТЬ ЭЛЕМЕНТЫ МАССИВА В ОДНО СТРОКОВОЕ ЗНАЧЕНИЕ
// // ВАРИАНТ НЕПРАВИЛЬНЫЙ (SLICE)

// const friends = ["mango", "kiwi", "poly", "ajax"];
// let string = ``;

// for (const friend of friends) {
// string += friend + `,`
// }

// string = string.slice(0, string.length - 1);
// console.log(string);

// // ВАРИАНТ ПРАВИЛЬНЫЙ (JOIN)

// const friends = ["mango", "kiwi", "poly", "ajax"];
// const string = friends.join(`,`)

// console.log(string);

// // ЗАДАЧА ЗАМЕНИТЬ РЕГИСТР КАЖДОГО СИМВОЛА НА ПРОТИВОПОЛОЖНЫЙ
// // ВАРИАНТ 1 (OLD SCHOOL)

// const string = `JavaScript`;
// const letters = string.split(``);
// let invertedString = ``;

// console.log(letters);

// for(const letter of letters) {
//     console.log(letter);

//     if(letter === letter.toLowerCase()) {
//         console.log('Эта буква в нижнем регистре! - ', letter);

//         invertedString += letter.toUpperCase()
//     }
//     else {
//         invertedString += letter.toLowerCase()
//     }

//     console.log(invertedString);
// }

// // ВАРИАНТ 2 (ТЕРНАЛЬНЫЙ ОПЕРАТОР)

// const string = `JavaScript`;
// const letters = string.split(``);
// let invertedString = ``;

// console.log(letters);

// for(const letter of letters) {
//     console.log(letter);

//     // добавляем переменную isEqual для лучшей читаемости
//     const isEqual = letter === letter.toLowerCase();

//     invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase()

// }

// console.log(invertedString);

// // ЗАДАЧА СДЕЛАТЬ SLUG В URL ИЗ НАЗВАНИЯ СТРОКИ

// const title = `Top 10 benefits of React framework`;
// // const normalizeTitle = title.toLowerCase();
// // const words = normalizeTitle.split(` `);
// // const slug = words.join(`-`)

// // console.log(slug);

// // ЦЕПОЧКИ ВЫЗОВОВ
// // это декоративный код или абстракция, когда код по сути закрыт

// const slug = title.toLowerCase().split(` `).join(`-`);
// console.log(slug);

// // ЗАДАЧА СУММА ЭЛЕМЕНТОВ ДВУХ МАССИВОВ
// const array1 = [2, 6, 8, 9];
// const array2 = [21, 16, 38, 94];
// let total = 0;

// // ВАРИАНТ 1 (НЕПРАВИЛЬНЫЙ)
// for(let i = 0; i < array1.length; i += 1) {
//     total += array1[i];
// }

// for(let i = 0; i < array2.length; i += 1) {
//     total += array2[i];
// }

// console.log(total);

// // ВАРИАНТ 2 (ПРАВИЛЬНЫЙ)

// const numbers = array1.concat(array2);
// console.log(numbers);

// for(const number of numbers) {
// total += number;
// }

// console.log(total);

// // ЗАДАЧА КОЛЛЕКЦИЯ КАРТОЧЕК В TRELLO

// const cards = [
//     `Карточка-1`,
//     `Карточка-2`,
//     `Карточка-3`,
//     `Карточка-4`,
//     `Карточка-5`,
// ]

// console.table(cards);

// // УДАЛИТЬ КАРТОЧКУ
// const cardToRemove =  `Карточка-3`;
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
// console.table(cards);

// // ДОБАВИТЬ КАРТОЧКУ
// // push shift для крайних позиций, spliсe - для серединки

// const cardToInsert =  `Карточка-6`;
// const index = 2;
// cards.splice(index, 0, cardToInsert);
// console.table(cards);

// // ОБНОВИТЬ/ЗАМЕНИТЬ КАРТОЧКУ
// const cardToUpdate =  `Карточка-7`;
// const index = 0;
// cards.splice(index, 1, cardToUpdate);
// console.table(cards);

// ФУНКЦИИ
// Объявить функцию => купить/создать мясорубку
// Вызвать функцию => включить мясорубку
// Повторное использование кода

// функциональное выражение
// const add = function() {}
// при объявлении функция не работает (не включена мясорубка/не вызвана функция)
// параметры - значения внутри скобок функции, аргументы - значения во время вызова функции

// const add = function(x, y) {
//     console.log(x);
//     console.log(y);

// console.log(`Работает add`);

// // return = возврат вовне результата из функции для отображения в результате вызова функции
// // фарш на выходе после перемалывания мяса (аргументов) 
// return x + y;
// }

// // аргументы в скобках = мясо
// add(5, 7)
// const rl1 = add(23, 48)
// console.log(`result:`, rl1);

// const rl2 = add(45, 72)
// console.log(`result:`, rl2);

// const rl3 = add(345, 115)
// console.log(`result:`, rl3);

// // return полностью прерывает функцию

// ЗАДАЧА НАПИСАТЬ ФУНКЦИЮ calculateTotalPrice
// 1 ТАК БЫЛО
// const carts = [24, 54, 654, 32, 43, 17, 85, 65, 64, 23, 98, 3, 64, 32, 54, 36, 75]

// let total = 0;

// for(const cart of carts) {
//     total += cart;
//     console.log(cart);
// }

// console.log('Total', total);

// // 1 ТАК ДЕЛАЕМ ЧЕРЕЗ ФУНКЦИЮ
// const calculateTotalPrice = function(items){
//     console.log(`items внутри функции`, items);

//     let total = 0;

// for(const item of items) {
//     total += item;
//     }

// return total;
// }

// console.log(calculateTotalPrice([23, 45, 65, 76]));
// console.log(calculateTotalPrice([34, 345, 231]));
// console.log(calculateTotalPrice([235 ,4, 33, 46]));

// // ФУНКЦИИ БЕЗ RETURN ВОЗМОЖНЫ (ПОЛУЧИТЬ МАССИВ, ПЕРЕБРАТЬ, ЛОГИРОВАТЬ В КОНСОЛЬ)

// const logItems = function (items) {
//     for(const item of items)
//     console.log(item);
// }

// // ТЕРНАРНЫЙ ОПЕРАТОР ЧЕРЕЗ RETURN
// // логины вне функции где-то вверху
// const logins = [`fvfvkfv`, `vfevf`, `vfvv`];

// const findLogin = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind) ? `Пользователь найден' : 'Пользователь не найден';
// };

// console.log(findLogin(logins, `fevgrbrgbg`));
// // тут вызов logins по сути перезаписует logins в allLogins

// ФУНКЦИЯ НАЙТИ НАИМЕНЬШЕЕ ЧИСЛО

// const findSmallestNumber = function(numbers) {
//     let smallestNumber = numbers[0];

//     for(const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//         return smallestNumber;
//     }

    // arguments - встроенная локальная переменная, ПСЕВДОМАССИВ который не имеет всех методов массива 
    // Применяют, например, когда несколько массивов с разным количеством элементов

    // ПРЕОБРАЗОВАНИЕ АРГУМЕНТОВ (ARGUMENTS) КАК ПСЕВДОМАССИВА В МАССИВ

    // OLD CHOOL - Array.from() 

    // СОВРЕМЕННЫЙ СИНТАКСИС - rest (ВСЕГДА В КОНЦЕ)
    // function(..."после точек идет название переменной")

    // ВАРИАНТ РАЗДЕЛЕНИЯ АРГУМЕНТОВ НА ПАРАМЕТРЫ (НАПРИМЕР СТРОКУ) И МАССИВ ОТДЕЛЬНО
    // function(a, b, c ...args)
    // console.log(`${a}, ${b}, ${c}`);
    // console.log(args);

    // ЗАДАЧА - ФИЛЬТЕР ПОВТОРЯЮЩИХСЯ ЧИСЕЛ В МАССИВЕ И АРГУМЕНТАХ, КОТОРЫЕ ВЫЗЫВАЮТСЯ ОДНОЙ ФУНКЦИЕЙ ОДНОВРЕМЕННО

    const filterNumbers = function(array, ...args) {
        console.log('array', array);
        console.log(`args`, args);
        const newArray = [];

        for(const element of array) {
            console.log(element);

            if(args.includes(element)) {
                newArray.push(element);
                console.log(`${element} есть везде!`);
            }
        }

        return newArray;
    }

    console.log(filterNumbers([1, 4, 5, 9], 56, 4, 33, 42, 9));