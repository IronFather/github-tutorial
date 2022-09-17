"use strict";

// МОДУЛЬ 5

// THIS 

// =================================================================================================
// 1)  КОНСПЕКТ

// const bookShelf = {
//     authors: ["Бернард Корнуэлл", "Роберт Шекли"],
//     getAuthors() {
//       return this.authors;
//     },
//     addAuthor(authorName) {
//       this.authors.push(authorName);
//     },
//   };
  
//   console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли"]
//   bookShelf.addAuthor("Ли Танит");
//   console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли", "Ли Танит"]

// =================================================================================================

// function showThis() {
//     console.log("this in showThis: ", this);
//   }
  
//   // Вызываем в глобальном контексте
//   showThis(); // this in showThis: Window
  
//   const user = {
//     username: "Mango",
//   };
  
//   // Записываем ссылку на функцию в свойство объекта
//   // Обратите внимание, что это не вызов - нет ()
//   user.showContext = showThis;
  
//   // Вызываем функцию в контексте объекта
//   // this будет указывать на текущий объект, в контексте
//   // которого осуществляется вызов, а не на глобальный объект.
//   user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// =================================================================================================

// const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
  
//   function makeMessage(callback) {
//     // callback() это вызов метода getFullName без объекта
//     console.log(`Обрабатываем заявку от ${callback()}.`);
//   }
  
//   makeMessage(customer.getFullName); // Будет ошибка при вызове функции

  // =================================================================================================

  // const hotel = {
  //   username: "Resort hotel",
  //   showThis() {
  //     const foo = () => {
  //       // Стрелки запоминают контекст во время объявления,
  //       // из родительской области видимости
  //       console.log("this in foo: ", this);
  //     };
  
  //     foo();
  //     console.log("this in showThis: ", this);
  //   },
  // };
  
  // hotel.showThis();
  // // this in foo: {username: 'Resort hotel', showThis: ƒ}
  // // this in showThis: {username: 'Resort hotel',showThis: ƒ}


  // =================================================================================================

// 2) РЕПЕТА

// THIS - это ССЫЛКА НА ОБЪЕКТ, в контексте которого была вызвана эта функция
// у всех функций есть внутри это ключевое слово this
// функции по сути это объекты, которые привизуальной одинаковости не равны (разные ячейки памяти)
  

/*
 * Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП
 */

// console.log('[] === []: ', [] === []);
// console.log('{} === {}: ', {} === {});
// console.log(
//     'function() {} === function() {}: ',
//     function () {} === function () {},
// );

// const fnA = function () {
//     console.log('hello');
// };

// const fnB = fnA;
// console.log('fnB === fnA: ', fnB === fnA);

/*
 * Контекст (this)
 *    - !!!!!!!!!!!!!!!!! Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст !!!!!!!!!!!!!!!!!.
 *    - !!!!!!!!!!!!!!!!! Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно. !!!!!!!!!!!!!!!!!.
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* 
// 111111111111111111111111111111 

 * вызывается КАК МЕТОД ОБЪЕКТА (user.showTag();). В КОНТЕКСТЕ ОБЪЕКТА. ++++++++++++++++++++++++++++++++
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag(); // USER.showTag()

// -------------------------------------------------------------------------------------------------------------------
/*

// 222222222222222222222222222222

 * вызывается БЕЗ КОНТЕКСТА (foo();) - UNDEFINED ----------------------------------------------------------------------

 * - В строгом режиме (запущен скрипт type="module")= undefined
 * - Не в строгом режиме = window
 */

// ***** разница между методом и функцией...
// Простой способ запомнить: 
// F unction → F ree (Свободные означает не принадлежность к объекту или классу) 
// M ethod → ​​ M ember (член объекта или класса)


// const foo = function () {
//     console.log('foo -> this', this);
// };

// foo();

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
/*

// 33333333333333333333333333333333333

 * вызывается как МЕТОД ОБЪЕКТА НО ОБЪЯВЛЕНА КАК ВНЕШНЯЯ ФУНКЦИЯ -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * В контексте объекта.
 */

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };

// 
// // showTag(); // 3.1 - МЕТОД ОБЪЕКТА КАК ВНЕШНЯЯ ФУНКЦИЯ БЕЗ КОНТЕКСТА
// ????????????.showTag(); - UNDEFINED -------------------------

// const user = {
//     tag: 'Mango',
// };

// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag(); //3.2 - МЕТОД ОБЪЕКТА КАК ВНЕШНЯЯ ФУНКЦИЯ С КОНТЕКСТОМ
// USER.showUserTag(); !!!!!!!!!!!! ++++++++++++++++++++++++++

// ********* метод объекта - это функция, которая является свойством объекта

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 444444444444444444444444444444
/*
 * вызывается МЕТОД ОБЪЕКТА ЧЕРЕЗ ПЕРЕМЕННУЮ-ПОСРЕДНИКА, КОТОРАЯ БЕЗ КОНТЕКСТА ++++++++++++++++++++++++++
 */

const user = {
    tag: 'Mango',
    showTag() {
        console.log('showTag -> this', this);
        console.log('showTag -> this.tag', this.tag);
    },
};

// user.showTag(); //USER.showTag(); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ++++++++++++++++++++++++++++++++

const outerShowTag = user.showTag;

outerShowTag(); // ???????????.outerShowTag(); - UNDEFINED -------------------------

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 5555555555555555555555555555555

/*
 * вызывается КАК КОНТЕКСТ В CALLBACK-ФУНКЦИЯХ
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// invokeAction(user.showTag);

// КОНТЕКСТ - ЭТО КТО ВЫЗВАЛ ФУНКЦИЮ
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
 * Тренируемся 1
 */

// const fn = function () {
//     console.log('fn -> this', this);
// };

// fn(); // Какой this ???

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
 * Тренируемся 2
 */

// const book = {
//     title: 'React for beginners',
//     showThis() {
//         console.log('showThis -> this', this);
//     },
//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//     },
// };

// book.showThis(); // Какой this ???

// const outerShowThis = book.showThis;
// outerShowThis(); // Какой this ???

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Какой this ???

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
 * Тренируемся 3
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         // this.color = color;
//     };

//     // changeColor(); // Какой this ???

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;

//     // sweater.updateColor('red'); // Какой this ???

//     return sweater.updateColor;
// };

// const swapColor = makeChangeColor();

// swapColor('blue'); // Какой this ???

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
 * Тренируемся 4
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//     };

//     return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor('yellow'); // Какой this ???

// const hat = {
//     color: 'blue',
//     updateColor: updateColor,
// };

// hat.updateColor('orange'); // Какой this ???

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
 * Тренируемся 5
 */

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

  // =================================================================================================