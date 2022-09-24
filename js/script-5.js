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

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// // user.showTag(); //USER.showTag(); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ++++++++++++++++++++++++++++++++

// const outerShowTag = user.showTag;

// outerShowTag(); // ???????????.outerShowTag(); - UNDEFINED -------------------------

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 5555555555555555555555555555555

/*
 * вызывается КАК КОНТЕКСТ В CALLBACK-ФУНКЦИЯХ
// При вызове функции в качестве аргумента дается ссылка на другую функцию (колбек), 
// и важно как колбек вызывается (вторая функция),
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

    // action(); // - UNDEFINED -------------------------

// };

// invokeAction(user.showTag); 

// user.showTag АРГУМЕНТ

// Контекст- это кто вызвал функцию
// Функция вызываетя, когда после имени функции есть скобки

// При вызове функции (invokeAction) в качестве аргумента дается ссылка на другую функцию - user.showTag (колбек), 
// и важно как колбек вызывается (вторая функция) - action() - строка 228

// ПРИ ПЕРЕДАЧИ ССЫЛКИ НА ФУНКЦИЮ КАК КОЛБЕК (В АРГУМЕНТЕ ДРУГОЙ ФУНКЦИИ), КОНТЕКСТ НЕ СОХРАНЯЕТСЯ
// ====================================================================================================================

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

  // ПРИ ПЕРЕДАЧИ ССЫЛКИ НА ФУНКЦИЮ КАК КОЛБЕК (В АРГУМЕНТЕ ДРУГОЙ ФУНКЦИИ), КОНТЕКСТ НЕ СОХРАНЯЕТСЯ


    // =================================================================================================
  /*
 * CALL и APPLY

  // CALL - принудительная привязка функции к объекту с аргументами
  // APPLY - принудительная привязка функции к объекту с  МАССИВОМ аргументов
 */
// const showThis = function (a, b, arr) {
//     console.log(a, b, arr);
//     console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };

// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

// const objB = {
//     x: 788,
//     y: 25,
// };

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// showThis();

// const changeColor = function (color) {
//   console.log("changeColor -> this", this);
//   this.color = color;
// };

// const hat = {
//   color: "black",
// };

// // changeColor.call(hat, 'orange');
// // console.log(hat);

// const sweater = {
//   color: "green",
// };

// // changeColor.call(sweater, 'blue');
// // console.log(sweater);


// // BIND - создание копии функции с привязкой к конкретному объекту (навсегда)
// /*
//  * bind
//  */

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// // changeHatColor('yellow');
// // console.log(hat);

// // changeSweaterColor('red');
// // console.log(sweater);

// /*
//  * counter
//  */

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

// // updateCounter(10, counter.increment.bind(counter));
// // updateCounter(5, counter.decrement.bind(counter));

// // console.log(counter);

// !!!!!!! проблему передачи функции в качестве колбека решается с помощью bind - counter.increment.bind(counter) !!!!!!!!

// =====================================================================================================================

// PROTOTYPE РЕПЕТА

// План занятия
// Прототипное наследование
// Прототип объекта и Object.create()
// Классы
// объявление
// конструктор
// методы
// static
// приватные свойства
// синтаксис публичных свойства и методы классов
// Геттеры и сеттеры
// Наследование
// extends
// super

// =====================================================================================================================

// Прототипное наследование - возможность связать объекты по ссылке
// Свойство __proto__ есть у каждого объекта

// Object.prototype - главное хранилище, конечная точка цепочки прототипов
// в прототипах не копии, а ссылки

/*
 * Прототип объекта
 *
 * - Object.create() // Через Object.create() создаются прототипы ПУСТЫМИ !!! 
 * - Через Object.create() нельзя привязать уже созданный объект - плохая практика !!!
 * 
 * Переписать свойство своего прототипа невозможно, это приведет к созданию собственного
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

// const objC = {
//   z: 5,
// };

// console.log(objC);

// const objB = Object.create(objC);
// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA.z);

// console.log('objA', objA);

// console.log(objA.hasOwnProperty('x'));

// const dummyObj = Object.create({ message: 'Это свойство объекта прототипа' });
// dummyObj.message = 'Это собственное свойство объекта';
// console.log('dummyObj', dummyObj);

// console.log(dummyObj.message);

//  'Это собственное свойство объекта'
//  'Это свойство на объекте-прототипе'

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */

// const objA = Object.create({ z: 5 });
// objA.y = 100;
// console.log('objA', objA);

// console.log(objA.x);


// Интерфейс програмирования - набор свойств и методов для работы с... (например посмотри содежание __proto__)
// =====================================================================================================================

/*
 * Классы
 * 🐷 - объявление
 * 🐷 - конструктор
 * 🐷 - методы
 * 🐷 - static
 * 🐷 - приватные свойства
 * 🐷 - синтаксис публичных свойства и методы классов
 * 🐷 - геттеры и сеттеры
 */

// Название класса - С БОЛЬШОЙ БУКВЫ, СУЩЕСТВИТЕЛЬНОЕ, ЕДИНСТВЕННОЕ ЧИСЛО:

// class Car {
// //   static description = 'Класс описывающий автомобиль';

// //   static logInfo(carObj) {
// //       console.log('Car.logInfo -> carObj', carObj);
// //   }

//   constructor({ brand, model, price } = {}) { // !!!!!! - Деструктуризация и указание пустых кавычек (на случай пустых аргументов при вызове)
//       this.brand = brand;
//       this._model = model;
//       this._price = price;
//   }

//   get price() {
//       return this._price;
//   }

//   set price(newPrice) {
//       this._price = newPrice;
//   }

//   get model() {
//       return this._model;
//   }

//   set model(newModel) {
//       this._model = newModel;
//   }
// }

// new Car - создание экземпляра - ПУСТОГО ОБЪЕКТА !!! через добавление new
// const carInstance = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });

// console.log(carInstance.model);
// carInstance.model = 'Q4';
// console.log(carInstance.model);

// console.log(carInstance.price);
// carInstance.price = 50000;
// console.log(carInstance.price);

// console.log(carInstance);

// все, что создается внутри функции класса, передается в экземпляры как копии (???)

// Свойство prototype есть только у функции, у объекта - __proto__
// Создавая что-то в классе через prototype (например user.prototype = ...) мы создаем и для экземпляров, 
// иначе (например user.newsth = ...) только для класса (статическое свойство - то которое отсутствует у єкземпляров и в prototype)


// =====================================================================================================================

/*
 * Наследование
 *  - extends
 *  - super()
 */

// class Hero {
//   constructor({ name = 'hero', xp = 0 } = {}) {
//       this.name = name;
//       this.xp = xp;
//   }

//   gainXp(amount) {
//       console.log(`${this.name} получает ${amount} опыта`);
//       this.xp += amount;
//   }
// }

// class Warrior extends Hero {
//   constructor({ weapon, ...restProps } = {}) {
//       super(restProps);

//       this.weapon = weapon;
//   }

//   attack() {
//       console.log(`${this.name} атакует используя ${this.weapon}`);
//   }
// }

// class Berserk extends Warrior {
//   constructor({ warcry, ...restProps } = {}) {
//       super(restProps);

//       this.warcry = warcry;
//   }

//   babyRage() {
//       console.log(this.warcry);
//   }
// }

// const ajax = new Berserk({
//   name: 'ajax',
//   xp: 500,
//   weapon: 'axe',
//   warcry: 'waaaaaaaah',
// });

// // console.log(ajax);

// // ajax.babyRage();
// // ajax.attack();
// // ajax.gainXp();

// class Mage extends Hero {
//   constructor({ spells, ...restProps } = {}) {
//       super(restProps);

//       this.spells = spells;
//   }

//   cast() {
//       console.log(`${this.name} что-то там кастует 🧙‍♂️`);
//   }
// }

// const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });
// console.log(mango);
// mango.attack();
// mango.gainXp(1000);

// const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });
// console.log(poly);
// poly.cast();
// poly.gainXp(200);

// console.log(
//     'mango.__proto__ === Warrior.prototype ',
//     mango.__proto__ === Warrior.prototype,
// );
// // console.log(Object.getPrototypeOf(mango) === Warrior.prototype);

// console.log(
//     'Warrior.prototype.__proto__ === Hero.prototype ',
//     Warrior.prototype.__proto__ === Hero.prototype,
// );

// console.log(
//     'Hero.prototype.__proto__ === Object.prototype ',
//     Hero.prototype.__proto__ === Object.prototype,
// );

// =====================================================================================================================

// ПОРЯДОК ЭЛЕМЕНТОВ В КЛАССЕ (CODE COLLACATION)
// 1. ВСЕ СТАТИЧЕСКИЕ СВОЙСТВА И МЕТОДЫ (!!!! ststic + ТОЧКА С ЗАПЯТОЙ В КОНЦЕ ТОЛЬКО ПОСЛЕ СВОЙСТВ)
// 2. КОНСТРУКТОР
// 3. ОСТАЛЬНЫЕ МЕТОДЫ

// =====================================================================================================================

// СТАТИЧЕСКИЕ СВОЙСТВА НА КЛАССЕ, ПРИВАТНЫЕ НА ЭКЗЕМПЛЯРЕ

// Все публичное становиться достоянием экземпляров

// =====================================================================================================================

// ГЕТТЕРЫ И СЕТТЕРЫ

// Геттеры и сеттеры - это более краткий синтаксис объявления методов для взаимодействия со свойствами. 
// Геттер и сеттер имитируют обычное публичное свойство класса, 
// но позволяют изменять другие свойства более удобным способом. 
// Геттер выполняется при попытке получить значение свойства, а сеттер - при попытке его изменить.
// Геттеры и сеттеры хорошо использовать для простых операций чтения и изменения значения свойств, 
// особенно приватных, как их публичный интерфейс. 
// Для работы со свойством которое хранит массив или объект они не подойдут.

// =====================================================================================================================

// ПРАКТИЧЕСКОЕ ЗАНЯТИЕ 1

// this - Контекст вызова
// this - это тот кто вызывает функцию
// Не важно где обьявлена ф-ция, важно кто ее вызывает

// ============================================
// this in global functions and global scope

// const sayHello = () => {
//     console.log("sayHello", this);
// };

// function sayHello() {
//     console.log("sayHello", this);
// }

// sayHello();
// this.sayHello();
// window.sayHello();

// ============================================
// this in objects and methods

// let vova = {
//     name: "Vova",
//     age: 25,
//     status: "Moderator",

//     say() {
//         console.log(this);
//         // this.showInfo();
//     },

//     showInfo() {
//         console.log(this.name, this.age, this.status);
//     },
// };

// vova.showInfo();
// vova.say();

// ======================================
// this in callback functions lost contecst
// let vova = {
//     name: "Vova",
//     age: 25,
//     status: "Moderator",

//     showInfo() {
//         console.log(this.name, this.age, this.status);
//     },
// };

// function greetUser(clb) {
//     console.log(`Викликаю clb з greetUser ${clb()}`);
// }

// greetUser(vova.showInfo);
// vova.showInfo();

// ======================================
// this in arrow functions контекст береться з місця її написання

// const greet = () => {
//     console.log("greet", this);
// };
// greet();

// let vova = {
//     name: "Vova",
//     age: 25,
//     status: "Moderator",

//     showInfo() {
//         const greet = () => {
//             console.log("greet", this);
//         };

//         greet(); // vova
//     },
// };

// vova.showInfo();

// ---------------------------------------------------

// // const greet = () => {
// //     console.log("greet", this);
// // };
// // greet();

// let vova = {
//     name: "Vova",
//     age: 25,
//     status: "Moderator",

//     // showInfo() {
//     //     console.log("showInfo", this);
//     // },

//     // showInfo: function () {
//     //     console.log("showInfo", this);
//     // },

//     showInfo: () => {
//         console.log("showInfo", this);
//     },
// };

// vova.showInfo();

//-------------------------------------------------

// const greet = () => {
//     console.log("greet", this);
// };

// let vova = {
//     name: "Vova",
//     age: 25,
//     status: "Moderator",

//     greet,
// };

// vova.greet();

// =============================================
// this in event listeners
// nevet use this in eventListeners use event.target

// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//     console.log(this);
// });

// btn.addEventListener("click", function () {
//     console.log(this);
// });

// ======================================
//  this in ES5 Clases
// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.showInfo = function () {
//         console.log(this.name, this.age);
//     };
// }

// const vova = new User("Vova", 25);
// const sara = new User("Sara", 30);
// vova.showInfo();
// sara.showInfo();

// ==================================
// this in ES6 Clases
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     showInfo() {
//         console.log(this.name, this.age);
//     }
// }

// const vova = new User("Vova", 25);
// const sara = new User("Sara", 30);
// vova.showInfo();
// sara.showInfo();

// ====================================

// function fnA() {
//     console.log("fnA");

//     function fnB() {
//         console.log("fnB");
//     }

//     fnB();
// }

// fnA();
