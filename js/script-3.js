// ОБЪЕКТЫ

// Объект как словарь, имеет термин (или ключ) и его определение (значение)
// ключи разделяются ЗАПЯТОЙ

// {} - литерал объекта ( У МАССИВА -[] )

// В объекте ключ уникален. при повторении остается последний

// const playlist = {
//     name: "Мой супер плейлист",
//     rating: 5,
//     tracks: [`трек-1`, `трек-2`, `трек-3`],
//     trackCount: 3,
// }

// console.log(playlist);

// // узнать, что это объект можно если:
// // 1) {} стоят после равно (const playlist = {})

// // 2) const fn = function(myObject) {
// //     console.log(myObject);
// // }

// // fn({a: 1, b: 2})
// // // последнее есть присвоением литералов объекта, аргументы записуются в параметры

// // 3) const fn = function(myObject) {
// //    return = {};
// // }

// // варианты получения свойств ключей объекта (99% случаев)
// // через точку
// console.log(playlist.rating);
// // строка в скобках
// console.log(playlist[`rating`]);
// // если ключ в переменной то только через имя переменной в скобках (1% случаев)
// const propertyTracks = `tracks`;
// console.log(playlist[propertyTracks]);

// СОКРАЩЕНИЕ КОГДА КЛЮЧ И СВОЙСТВО ДУБЛИРУЮТСЯ

// const username = `Mango`;
// const email =  `mango@gmail.com`;

// const client = {
//     // username: username;
//     // email: email;

//     // сокращаем
//     username,
//     email,
// }

// console.log(client);

// // ВЫЧИСЛЯЕМЫЕ СВОЙСТВА (input)
// const inputName = `color`;
// const inputValue = `tomato`;
// // имя переменной как ключ в скобки [] имя переменной как свойство просто копируем
// const smtData = {
//     [inputName]: inputValue, 
// }

// console.log(smtData);

// =================================================================================================

// // ДОБАВЛЕНИЕ/ПЕРЕОПРЕДЕЛЕНИЕ СВОЙСТВ
// const playlist = {
//     name: "Мой супер плейлист",
//     rating: 5,
//     tracks: [`трек-1`, `трек-2`, `трек-3`],
//     trackCount: 3,
// }

// playlist.author = `Mozart`;
// playlist.rating = 15;
// console.table(playlist);

// // ОБЪЕКТЫ НЕ РАВНЫ ЕСЛИ СРАВНИВАЮТСЯ НЕ ССЫЛКИ НА ОДИН ОБЪЕКТ (ТАК ЖЕ КАК И МАССИВЫ)

// console.log({a: 1} === {a: 1}); // false

// // но по ссылке равны
// const a =  {a: 1};
// const b = a;
// console.log(b === a); // true

// // !!! В JS ВСЕ ЯВЛЯЕТСЯ ОБЪЕКТОМ !!!
// // МОЖНО ДОБАВЛЯТЬ ЧЕРЕЗ ТОЧКУ НОВЫЕ ЗНАЧЕНИЯ В МАССИВЫ ТАК И В ОБЪЕКТАХ
// const playlist = [1, 2, 3]

// playlist.a = 5;
// console.table(playlist);

// const fn = function() {
//     console.log(`hello!`);
// }

// fn.hello = `;-)`;
// console.log(fn.hello);

// МЕТОД - ЭТО ОБЫЧНОЕ СВОЙСТВО, В КОТОРОМ ЛЕЖИТ ФУНКЦИЯ, КОТОРАЯ РАБОТАЕТ СО СВОЙСТВАМИ КАКОГО-ТО ОБЪЕКТА

// const playlist = {
//     name: "Мой супер плейлист",
//     rating: 5,
//     tracks: [`трек-1`, `трек-2`, `трек-3`],
//     trackCount: 3,
//     getName: function() {
//         console.log(`Ага это getName!`);
//     }
// }

// console.log(playlist);
// playlist.getName();

// олд скул -   getName: function() { // современный синтаксис   getName() {

// =================================================================================================

// // ЗАДАЧА ПОМЕНЯТЬ НАЗВАНИЕ В name
// // в мптодах обїекта нельзя использовать имя самого объекта

// const playlist = {
//     name: "Мой супер плейлист",
//     rating: 5,
//     tracks: [`трек-1`, `трек-2`, `трек-3`],
//     trackCount: 3,

// changeName(newName) {
//     console.log('This внутри change Name:', this);

//     this.name = newName;
// },

// addTrack(newTrack) {
//     this.tracks.push(newTrack);
//     // не забываем обновить счетчик Count НО ЭТО ВСЕ РАВНО ПЛОХОЕ РЕШЕНИЕ Т.К.
//     // КОЛИЧЕСТВО ТРЕКОВ = ДЛИНА МАССИВА (ПОЭТОМУ МОЖНО ОБХОДИТЬСЯ И БЕЗ trackCount)
//     this.trackCount = this.tracks.length;
// },
// // в частности вместо trackCount можна...
// getTrackCount() {
// return this.tracks.length;
// },

// updateRating(newRating) {
//     this.rating = newRating;
// },
// }

// playlist.changeName(`Книга про триатлон`);

// // this - это обращение только внутри метода, там где есть функция

// // getTrackCount до добавления трека
// console.log(playlist.getTrackCount());

// playlist.addTrack(`трек-99`);
// playlist.updateRating(135);
// console.log(`New playlist`, playlist);

// // getTrackCount после добавления трека
// console.log(playlist.getTrackCount());

// =================================================================================================

// ПЕРЕБОР МАССИВОВ
// for ...in лучше не юзать, он бесполезен

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// }

// let totalFeedback = 0;

// // 1) ВОЗВРАТ КЛЮЧЕЙ ЧЕРЕЗ Object.keys()
// const keys = Object.keys(feedback);
// console.table(keys);

// for(const key of keys) {
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }

// =================================================================================================

// // ПОЛУЧИТЬ ЗНАЧЕНИЯ КЛЮЧЕЙ
// // 1. НЕПРАВИЛЬНО
// // console.log(feedback.key); key разыскивается среди ключей (имен свойств good, neutral и bad) т.к. key -это имя переменной

// // 2.ПРАВИЛЬНО
// // console.log(feedback[key])


// console.log('totalFeedback', totalFeedback);

// // 2) ВОЗВРАТ ЗНАЧЕНИЙ КЛЮЧЕЙ ЧЕРЕЗ Object.values()

// const values = Object.values(feedback);

// console.log(values);

// for(const value of values) {
//     console.log(value);

//     totalFeedback += value;
// }

// console.log(`totalFeedback`, totalFeedback);

// =================================================================================================

// // МАССИВ ОБЪЕКТОВ

// const friends = [
//     { name: `Mango`, online: false},
//     { name: `Kivi`, online: true},
//     { name: `Poly`, online: false},
//     { name: `Ajax`, online: false},
// ]

// console.table(friends);


// for(const friend of friends) {
//     console.log(friend); 
//     // перебор пообъектно!!!

//     friend.newprop = 555;
// // friend.newprop - добавил свойство newprop со значением 555 КАЖДОМУ ОБЪЕКТУ
// // ПОТОМУ ЧТО в массиве объектов в for of мы получаем ссылку на каждый объект

// // можно получить...
// console.log(friend.name); 
// }

// // ЗАДАЧА НАЙТИ ДРУГА ПО ИМЕНИ
// const findFriendByName = function (allFriends, name) {
// // перебрать объекты
// for(const friend of allFriends) {
//     console.log(friend);
//     // но можна перебрать по именам... 
//     console.log(friend.name);

//     //  дальше if
//         if(friend.name === name) {
//             return `НАШЛИ!!!` 
//         } 
//     }

//     return `НЕ НАШЛИ!!!`
// }

// console.log(findFriendByName(friends, `Poly`));
// console.log(findFriendByName(friends, `Chelsy`));
// // includes не подходит, он работает только с примитивами, а у нас объекты в массиве

// =================================================================================================

// // ЗАДАЧА ПОЛУЧИТЬ ВСЕ ИМЕНА ДРУЗЕЙ

// const friends = [
//     { name: `Mango`, online: false},
//     { name: `Kivi`, online: true},
//     { name: `Poly`, online: false},
//     { name: `Ajax`, online: false},
// ]

// console.table(friends);

// const getAllName = function(allFriends) {
//     // перебрать объекты в массиве
//         // НО ВНАЧАЛЕ СОЗДАТЬ ПУСТОЙ МАССИВ
//     const names = [];

//     for(const friend of allFriends) {
//     // console.log(friend);
//     // можно сразу перебрать объекты в массиве по именам
//     console.log(friend.name);
//     // добавляем имена в созданный пустой массив names 
//     names.push(friend.name);
//     }

//     // console.log(names);
//     // но можна и через return
//     return names;
// }

// console.log(getAllName(friends));

// =================================================================================================

// // ЗАДАЧА ПОЛУЧИТЬ ВСЕ ИМЕНА ДРУЗЕЙ, КТО В ОНЛАЙН

// const friends = [
//     { name: `Mango`, online: false},
//     { name: `Kivi`, online: true},
//     { name: `Poly`, online: false},
//     { name: `Ajax`, online: true},
// ]

// console.table(friends);

// const getOnlineFriends = function(allFriends) {
//     // перебрать объекты в массиве
//     //         // НО ВНАЧАЛЕ СОЗДАТЬ ПУСТОЙ МАССИВ
//     const onlineFriends = [];
//         for(const friend of allFriends) {
//         console.log(friend.online);

//             if (friend.online) {
//                 // УКАЗЫВАТЬ === true - ПЛОХАЯ ПРАКТИКА
//             onlineFriends.push(friend);
//             }
//         }

//     return onlineFriends;
//     }

// console.log(getOnlineFriends(friends));

// =================================================================================================

// // ЗАДАЧА ПОЛУЧИТЬ ВСЕ ИМЕНА ДРУЗЕЙ, КТО В ОФЛАЙН

// const friends = [
//     { name: `Mango`, online: false},
//     { name: `Kivi`, online: true},
//     { name: `Poly`, online: false},
//     { name: `Ajax`, online: true},
// ]

// console.table(friends);

// const getOfflineFriends = function(allFriends) {
//     // перебрать объекты в массиве
//     //         // НО ВНАЧАЛЕ СОЗДАТЬ ПУСТОЙ МАССИВ
//     const offlineFriends = [];
//         for(const friend of allFriends) {
//         console.log(friend.online);

//             if (!friend.online) {
//                 // УКАЗЫВАТЬ === false - ПЛОХАЯ ПРАКТИКА
//             offlineFriends.push(friend);
//             }
//         }

//     return offlineFriends;
//     }

// console.log(getOfflineFriends(friends));

// =================================================================================================

// // // ЗАДАЧА ПОЛУЧИТЬ ВСЕ ИМЕНА ДРУЗЕЙ ПО СТАТУСУ ОНЛАЙН (ДВА МАССИВА)

// const friends = [
//     { name: `Mango`, online: false},
//     { name: `Kivi`, online: true},
//     { name: `Poly`, online: false},
//     { name: `Ajax`, online: true},
// ]

// console.table(friends);

// const getFriendsByStatusOnline = function(allFriends) {
// //     // перебрать объекты в массиве
// //     //         // НО ВНАЧАЛЕ СОЗДАТЬ ДВА ПУСТЫХ МАССИВА
//     const FriendsByStatusOnline = {
//         online: [],
//         offline: [],
//     };
//         for (const friend of allFriends) {
//         console.log(friend.online);

//             if (friend.online) {
//                 // УКАЗЫВАТЬ === false - ПЛОХАЯ ПРАКТИКА
//             FriendsByStatusOnline.online.push(friend);
//             continue;
//             } 
//                 FriendsByStatusOnline.offline.push(friend);
//             }
//         }

//     return FriendsByStatusOnline;
//     }

// console.log(getFriendsByStatusOnline(friends));

// OpenCart CMS - opencart.com - готовые решения для кодинга интернет-магазинов

// "Найти галеру" (А.Репета) - найти работу )))))))))

// =================================================================================================

// // CONCAT

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// console.log(numbers);

// // SPREAD - РАСПЫЛЕНИЕ МАССИВА ВНУТРИ ДРУГОГО МАССИВА В ВЫБРАННОМ МЕСТЕ (СИМВОЛ REST ...)

// ...REST = ...SPREAD

// const numbers = [...[1, 2, 3], 45, 98, ...[4, 5, 6], 123, 543, ...[7, 8, 9]];
// console.log(numbers);

// Math.max и Math.min находят максимальное и минимальное число в наборе чисел, но не в массиве

// console.log(Math.max(32, 23, 134, 54, 67));
// console.log(Math.min(32, 23, 134, 54, 67));

// // для поиска максимального и минимального числа в массиве:

// const numbers = [32, 23, 134, 54, 67];
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));
// // под капотом происходит распыление массива в набор цифр, по сути это:
// // console.log(Math.max(32, 23, 134, 54, 67));
// // console.log(Math.min(32, 23, 134, 54, 67));

// =================================================================================================

// SPREAD - операция не деструктивная, создается:
// 1) копия элементов массива, если это ПРИМИТИВЫ: 

// const a = [1, 2, 3];

// const b = [... a];

// console.log(a === b); //false

// 2) или ставится ссылка, если элементы массива ОБЪЕКТЫ: 

// const a = [{a: 1}, {b: 2}, {c: 3}];

// const b = [... a];

// console.log(`a:`, a);
// console.log(`b:`, b);

// // НО:
// console.log(a[0] === b[0]); //true т.к. копируются ссылки на объекты и они равны (ячейка одна)
// console.log(a === b); //false т.к. массивы разные ячейки

// =================================================================================================

// // ЗАДАЧА СШИТЬ МАССИВЫ

// const lastWeek = [1, 2, 3];
// const currentWeek = [4, 5, 6];
// const nextWeek = [7, 8, 9];

// const allWeek = [...lastWeek, ...currentWeek, ...nextWeek];
// console.log(allWeek);

// чем правее стоит в распылении объект, тем значенее его свойства важнее и при повторении свойства значение переопределяется на последнее

// =================================================================================================

// // РАСПЫЛЕНИЕ ОБЪЕКТОВ

// const a = {x: 1, y: 2, g: 3};
// const b = {x: 0, z: 5};

// // const c = Object.assign({}, a, b)
// // берется цель {} (после assign) и в него распыляются объекты в порядке, указанном после {}, в наш случае - a, b
// // Далее тоже самое, но на современном языке:

// const c = {
//     ...a,
//     ...b,
// };

// console.log(c);

// =================================================================================================

// ДЕСТРУКТУРИЗАЦИЯ
// придумали, чтобы очистить код от визуального мусора (повторений)
// слева от объекта {} - говорит об деструктуризации (или распаковке)

// const playlist = {
//     name: "Мой супер плейлист",
//     rating: 5,
//     tracks: [`трек-1`, `трек-2`, `трек-3`],
//     trackCount: 3,
// }
    
// const {name, rating, tracks, trackCount} = playlist;

// console.log(name, rating, tracks, trackCount);

// // ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ (РЕДКО)

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// console.log(red, green, blue);

// =================================================================================================

// // ЗАДАЧА НАЙТИ КЛЮЧ ПО ЗНАЧЕНИЮ

// const authors = {
//     kiwi: 7,
//     poly: 5,
//     ajax: 4,
// }

// Object.entries возвращает массив массивов
// 1)
// const entries = Object.entries(authors);

// for (const entry of entries) {
//     console.log(entry);

//     const name = entry[0];
// const rating = entry[1];

// console.log(name, rating);
// }

// // 2)

// const entries = Object.entries(authors);

// for (const entry of entries) {
// const [name, rating] = entry;

// console.log(name, rating);
// }

// // 3)

// const entries = Object.entries(authors);

// for (const [name, rating] of entries) {

// console.log(name, rating);
// }

// =================================================================================================

// REST
// сперва делаеш деструктуризацию части свойств, затем все оставшее из подлежащего деструктуризированию собираеш в одну переменную

// const {name, tag, location, ... restPror} = profile;


// =================================================================================================


// // ПАТТЕРН (уместен когда вызов функции с 3 и более настройками (параметрами/аргументами))

// const fn = function (params) {}

// fn(10, 5, true, [], {}) // Магия, нечитабельно и неясно

// fn({ 
//     age: 10,
//     friends: 5,
//     hobbies: [],
//     games: {},
// })

// // внутри функции передаем объект, функция его деструктуризирует по свойствам
// const showProfileInfo = function (userProfile) {
//     const {age, friends, hobbies, games} = userProfile;

//     console.log(age, friends, hobbies, games);
// }

// // такая деструктуризация может быть и в подписи функции

// const showProfileInfo = function ({age, friends, hobbies, games}) {

//     console.log(age, friends, hobbies, games);
// }

// =================================================================================================
// =================================================================================================

// НЕ ВАЖНО, ГДЕ ФУНКЦИЯ ОБЪЯВЛЕНА, ВАЖНО КТО ЕЕ ВЫЗЫВАЕТ

// =================================================================================================
// =================================================================================================

// В середине объекта обращение через this

// =================================================================================================

// .constructor возвращает тип данных

// =================================================================================================

// __proto__ - prototype показует тип данных и содержание базы данных с методами

// =================================================================================================

// Метод Object.entries(obj) возвращает массив записей, 
// каждым элементом которого будет еще один массив из 2-х элементов: 
// имени свойства и значения этого свойства из объекта obj.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'rating']
  
//   const values = Object.values(book);
//   console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]
  
//   const entries = Object.entries(book);
//   console.log(entries);
//   // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// =================================================================================================

// Object.freeze() - заморозка объекта, которая не позволяет менять/добавлять свойства и значения в него

// =================================================================================================

// Object.seal() - заморозка объекта, которая не позволяет добавлять свойства и значения в него, НО МЕНЯТЬ СУЩЕСТВУЮЩИЕ МОЖНО

// =================================================================================================

// ИМЕННАЯ ДЕСТРУКТУРИЗАЦИЯ - деструктуризация с одномоментным переименованием элемента 
// используют когда такая переменная уже есть. Вариант name => desName (деструктуризированное имя)

// =================================================================================================

