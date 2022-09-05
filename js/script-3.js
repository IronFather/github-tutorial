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

// // 2) ВОЗВРАТ КЛЮЧЕЙ ЧЕРЕЗ Object.values()

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

// // ЗАДАЧА ПОЛУЧИТЬ ВСЕ ИМЕНА ДРУЗЕЙ ПО СТАТУСУ ОНЛАЙН (ДВА МАССИВА)

const friends = [
    { name: `Mango`, online: false},
    { name: `Kivi`, online: true},
    { name: `Poly`, online: false},
    { name: `Ajax`, online: true},
]

console.table(friends);

const getFriendsByStatusOnline = function(allFriends) {
//     // перебрать объекты в массиве
//     //         // НО ВНАЧАЛЕ СОЗДАТЬ ДВА ПУСТЫХ МАССИВА
    const FriendsByStatusOnline = {
        online: [],
        offline: [],
    };
        for (const friend of allFriends) {
        console.log(friend.online);

            if (friend.online) {
                // УКАЗЫВАТЬ === false - ПЛОХАЯ ПРАКТИКА
            FriendsByStatusOnline.online.push(friend);
            } else {
                FriendsByStatusOnline.offline.push(friend);
            }
        }

    return FriendsByStatusOnline;
    }

console.log(getFriendsByStatusOnline(friends));