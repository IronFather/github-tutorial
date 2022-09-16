// CALLBACK - функция обратного (отложенного вызова)
// ДЛЯ ВЫПОЛНЕНИЯ КОДА ПО УСЛОВИЮ

// функции можно передавать в параметры другой функции (как ссылка)
// функция высшего порядка - функция которая принимает другую функцию как параметр

// в параметрах функции высшего порядка обозначаем callback для ссылки на callback-функцию
// callback-функция создается отдельно и передается в параметры (callback) как аргумент через вызов функции высшего порядка

// ========================================================================================

// const fnA = function (message, callback) {
//     console.log(callback);
//     callback(100);
// };

// const fnB = function (number) {
//     console.log(`etbbbr:`, number);
// }

// fnA (`rregtgt`, fnB)

// ======================================================================================

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// }

// const addMath = function (x, y) {
//     return x + y;
// }

// const subMath = function (x, y) {
//     return x - y;
// }

// doMath (1235, 4326, addMath);
// doMath (765, 349, subMath);

// ======================================================================================


// // ИНЛАЙН CALLBACK ФУНКЦИЯ (еще называют АНОНИМНОЙ так как без const имени) - по сути для одноразового использования

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// }

// doMath (1235, 4326, function (x, y) {
//     return x + y
// });
// doMath (765, 349, function (x, y) {
//     return x - y
// });

// ======================================================================================

// функции высшего порядка могут быть без возврата когда возврат вынесен в колбеках через логирование

// ======================================================================================

// СПЕЦФУНКЦИЯ setTimeout (function (по сути callback), 2000) - выполнение функции в примере через 2 секунды (2000), 
// при этом выполнение всего кода ниже не приостанавливается

// ======================================================================================
// // ФИЛЬТРАЦИЯ (С ПОМОЩЬЮ CALLBACK)

// const filter = function(array, callback) {
// const filteredArray = [];

// for (const el of array) {

//     console.log(el);
//     const passed = callback(el);

//     if (passed) {
//         filteredArray.push(el);
//     }

// }

// console.log(filteredArray);
// }


// const callback1 = function (value) {
//     return value >= 3;
// }

// const r1 = filter([1, 2, 4, 7, 8, 34], callback1);
// console.log(r1);

// filter([1, 2, 4, 7, 8, 34])

// ======================================================================================

// ЗАМЫКАНИЕ возврат из функции другой функции

// return внутренней функции (fnB), которая прописана в теле "материнской" функции fnA
// если fnC = fnA то console.log(fnC) открывает доступ к внутренней функции fnB, хотя та была доступна локально
// доступность открывается ко всем локальным переменным fnA через замыкающую функцию fnC
// В замыкание попадают переменные, которые используются внутренней функцией (именно они становятся доступными)

// ======================================================================================

// // СТРЕЛОЧНЫЕ ФУНКЦИИ

// const add = function (a, b, c) {
//     console.log(`fvfffvfdv`);
//     return a + b + c;
// }

// const add1 = (a, b, c) => {
//     console.log(`fvfffvfdv`);
//     return a + b + c;
// }

// const add2 = (a, b, c) => a + b + c;

// у стрелочных функций недьзя вызвать аргументы console.log(arguments)
// можно через console.log(...args)

// в стрелочніх функциях если результатом функции (return) есть объект то его нужно обернуть в обычные скобки
// ({}) иначе {} будут прочитаны не как оюъект а как тело функции

// явный возврат (explisit) через return
// неявный возврат (implisit) без return после стрелки => чему способствует отсутствие в теле функции другого кроме return

// в стрел функциях нету своего this т.е. контекст внутри стрелки определяется местом ее объявления а не вызова 
// стрелки не бывают методом объекта
// ======================================================================================

// FOREACH

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number) {
//     // funcion колбек для действий с КАЖДЫМ ЭЛЕМЕНТОМ после перебора
//   console.log('number', number);
// });

// console.log(numbers);

// у FOREACH есть два аргумента 1) CALLBACK и 2) ОБЪЕКТ в контексте которого будет вызываться этот колбек (thisArg)

// ======================================================================================

// MAP

/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(number => {
//   return number * 13;
// })

// console.log('numbers', numbers);
// console.log('doubledNums', doubledNums);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

/*
 * Получаем массив имён всех игроков
 */

// const playerNames = players.map(player => player.name);
// console.log('playerNames', playerNames);

// const playerIds = players.map(player => player.id);
// // console.log('playerIds', playerIds);

// const res = players.map(({ name, online }) => ({ name, online }));
// console.log('res', res);

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */

// const upatedPlayers = players.map(player => ({
//   ...player,
//   points: player.points * 1.1,
// }));

// console.table(upatedPlayers);
// console.log(upatedPlayers);

/*
 * Увеличиваем кол-во часов игрока по id
 */

// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 320,
//       points: player.points + 33,
//     };
//   }

//   return player;
// });

// const updatedPlayers = players.map(player =>
//   playerIdToUpdate === player.id
//     ? { ...player, timePlayed: player.timePlayed + 100 }
//     : player,
// );
// console.table(updatedPlayers);

// ======================================================================================

// FILTER
// ИЩЕТ МНОГОЕ ИЗ МНОГИХ

/*
 * Array.prototype.filter()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает новый массив (с элементами или пустой)
 * - Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции
 *    - если коллбек вернул true элемент добавляется в возвращаемый массив
 *    - если коллбек вернул false элемент НЕ добавляется в возвращаемый массив
 */

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(number => number < 10 || number > 20);
// // console.log(filteredNumbers);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

/*
//  * Получаем массив всех онлайн игроков
//  */

// const onlinePlayers = players.filter(({ online }) => online);
// // console.table(onlinePlayers);

// /*
//  * Получаем массив всех оффлайн игроков
//  */

// const offlinePlayers = players.filter(player => !player.online);
// // console.table(offlinePlayers);

// /*
//  * Получаем список хардкорных игроков с временем больше 250
//  */

// const hardcorePlayers = players.filter(player => player.timePlayed > 250);
// // console.table(hardcorePlayers);

// ======================================================================================

// FIND
//  ИЩЕТ ОДИН ЭЛЕМЕНТ (ПЕРВЫЙБ ВЫПОЛНЯЮЩИЙ УСЛОВИЕ)
/*
 * Array.prototype.find()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает первый элемент удовлетворяющий условию или undefined
 */

// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find(number => number === 10);
// // console.log(number);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

// /*
//  * Ищем игрока по id
//  */
// const playerIdToFind = 'player-3';
// const playerWithId = players.find(({ id }) => id === playerIdToFind);
// // console.log(playerWithId);

// const finPlayerById = (allPlayer, playerId) => {
//   return allPlayer.find(({ id }) => id === playerId);
// };

// // console.log(finPlayerById(players, 'player-1'));
// // console.log(finPlayerById(players, 'player-4'));

// /*
//  * Ищем игрока по имени
//  */
// const playerNameToFind = 'Poly';
// const playerWithName = players.find(player => player.name === playerNameToFind);
// // console.log(playerWithName);

// ======================================================================================

// EVERY и SOME

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
//   ];
  
//   /*
//    * Array.prototype.every()
//    * - Поэлементо перебирает оригинальный массив
//    * - Возвращает true если все элементы массива удовлетворяют условию
//    */
  
//   const isAllOnline = players.every(player => player.online);
//   console.log('isAllOnline: ', isAllOnline);
  
//   /*
//    * Array.prototype.some()
//    * - Поэлементо перебирает оригинальный массив
//    * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
//    */
//   const isAnyOnline = players.some(player => player.online);
//   console.log('isAnyOnline: ', isAnyOnline);
  
//   const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
//   console.log('anyHardcorePlayers: ', anyHardcorePlayers);


// ======================================================================================

// REDUCE - ШВЕЙЦАРСКИЙ НОЖ ДЛЯ РАБОТЫ С КОЛЛЕКЦИЕЙ
// БЕРЕТ МНОГО - ВЫДАЕТ ЧТО-ТО ОДНО

/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0,
// );
// console.log(totalSalary);

/*
 * Считаем общее количество часов
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0,
// );

// console.log(totalTimePlayed);

/*
 * Считаем общую сумму товаров корзины
 */
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//   (total, { price, quantity }) => total + price * quantity,
//   0,
// );

// // console.log(totalAmount);

// /*
//  * Собираем все теги из твитов
//  */
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags);

// // acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// // acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// // return  [...['js', 'nodejs'], ...['html', 'css']]
// //  ['js', 'nodejs', 'html', 'css']

// /*
//  * Ведём статистику тегов
//  */
// // const tagsStats = allTags.reduce((acc, tag) => {
// //   console.log(acc);

// //   if (acc[tag]) {
// //     acc[tag] += 1;

// //     return acc;
// //   }

// //   acc[tag] = 1;

// //   return acc;
// // }, {});

// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});
// // console.log(tagsStats);

// // если свойство с ключом tag есть. увеличить его значение на 1
// // если свойствоства нет с таким ключом что в tag, сделать и записать 1

// ======================================================================================

// SORT
// КАК ПРАВИЛО ДЛЯ СОРТИРОВКИ НЕБОЛЬШИХ МАССИВОВ Т.К. СРАВНИВАЕТ БЛИЗЛЕЖАЩИЕ ЭЛЕМЕНТЫ ПОПАРНО (ТРУДОЗАТРАТНО)
// SORT в отличии от фильтра не выкидывает часть отобраного, он сортирует (меняет местами) элементы

/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log('numbers', numbers);

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log('letters', letters);

/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
 */

// numbers.sort((curEl, nextEl) => {
//     return nextEl - curEl;
// });

/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */

// const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('ascSortedNumbers', ascSortedNumbers);

/*
//  * Кастомная сортировка сложных типов
//  */
// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//     { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//     { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// // По игровому времени
// const sortedByBestPlayers = [...players].sort(
//     (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed,
// );
// // console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = [...players].sort(
//     (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed,
// );
// // console.table(sortedByWorstPlayers);

// const byName = [...players].sort((a, b) => {
//     const result = a.name[0] > b.name[0];

//     if (result) {
//         return 1;
//     }

//     if (!result) {
//         return -1;
//     }
// });

// console.table(byName);
// ======================================================================================

// ПЕРЕБИРАЮЩИЕ МЕТОДЫ

// =================================================================================================

// // map()
// const planets = ["Земля", "Марс", "Венера", "Юпитер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// // Оригинальный массив не изменился
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']

// // ЗАДАЧА ИЗ МАССИВА ОБЪЕКТОВ ВЫТЯНУТЬ МАССИВ ЗНАЧЕНИЙ СВОЙСТВА ИЗ ВСЕХ ОБЪЕКТОВ

// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Поли", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Киви", score: 94 },
//     { name: "Хьюстон", score: 64 },
//   ];
  
//   const names = students.map(student => student.name);
//   console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']

// =================================================================================================

// flatMap()

// // ЗАДАЧА
// // В массиве `students` хранится список студентов со списком предметов 
// // которые посещает студент в свойстве `courses`. Несколько студентов могут 
// // посещать один и тот же предмет. Необходимо составить список всех предметов
// //  которые посещает эта группа студентов, пока даже повторяющихся.


// const students = [
//     { name: "Манго", courses: ["математика", "физика"] },
//     { name: "Поли", courses: ["информатика", "математика"] },
//     { name: "Киви", courses: ["физика", "биология"] },
//   ];
  
//   students.map(student => student.courses);
//   // [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]
  
//   students.flatMap(student => student.courses);
//   // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// =================================================================================================

