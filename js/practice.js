// // DOM (Document Object Model)
// Document Object Model, сокращённо DOM – объектная модель документа, которая представляет все содержимое страницы в виде объектов, которые можно менять.
// Объект document – основная «входная точка». С его помощью мы можем что-то создавать или менять на странице.

// // BOM (Browser Object Model)
// Объектная модель браузера (Browser Object Model, BOM) – это дополнительные объекты, предоставляемые браузером (окружением), чтобы работать со всем, кроме документа.


// Существует 12 типов узлов. Но на практике мы в основном работаем с 3 из них:
// 1. Element: html-элемент
// 2. Attr: атрибут html-элемента
// 3. Document: корневой узел html-документа
// 4. DocumentType: DTD или тип схемы XML-документа
// 5. DocumentFragment: место для временного хранения частей документа
// 6. EntityReference: ссылка на сущность XML-документа
// 7. ProcessingInstruction: инструкция обработки веб-страницы
// 8. Comment: элемент комментария
// 9. Text: текст элемента
// 10. CDATASection: секция CDATA в документе XML
// 11. Entity: необработанная сущность DTD
// 12. Notation: нотация, объявленная в DTD



// document – «входная точка» в DOM.
// узлы-элементы – HTML-теги, основные строительные блоки.
// текстовые узлы – содержат текст.
// комментарии – иногда в них можно включить информацию, которая не будет показана, но доступна в DOM для чтения JS.
// https://dom.spec.whatwg.org/#node




// CSS Selectors
// https://code.tutsplus.com/ru/tutorials/the-30-css-selectors-you-must-memorize--net-16048



// События https://devdocs.io/dom-events/
// https://www.w3schools.com/jsref/dom_obj_event.asp
// Событие – это сигнал от браузера о том, что что-то произошло. 
// События используются для реакции на действия посетителя и исполнения кода. 
// Cобытия становятся в очередь и обрабатываются в порядке поступления, асинхронно, независимо.


// Слушатели событий
// elem.addEventListener()
// elem.removeEventListener()


// Объект события
// event.type - тип события
// event.target - элемент, на котором произошло событие
// event.currentTarget - элемент, на котором сработал обработчик


// Действия браузера по умолчанию
// event.preventDefault()


// События клавиатуры
// https://keycode.info/


// ====================================================================================================================

// https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048

// DOM - document object model
// BOM - browser object model

// console.log(window.document);
// console.log(document);
// console.log(document.body);

// ========================
// Selectors
// document.querySelector
// document.querySelectorAll - NodeList

// const h1Ref = document.querySelector(".main__title");

// console.log(h1Ref);

// const formRef = document.querySelectorAll("form");
// console.log(formRef);

// const menuRef = document.querySelectorAll("ul");
// console.log(menuRef);

// const menuRef = document.querySelectorAll("ul")[1];
// console.log(menuRef);

// const menuRef = document.querySelectorAll("ul")[2];
// console.log(menuRef);

// const menuRef = document.querySelectorAll("ul");
// console.log(menuRef);

// NodeList - collection can use forEach
// ============================
// Old school

// getElementsByClassName - returns HTMLCollection

// const ulRef = document.getElementsByClassName("list");

// console.log(ulRef);

// const ul = Array.from(ulRef);
// console.log(ul);

// document.getElementsByName
// document.getElementsByTagName

// ================================
// Get by ID

// document.getElementById
// const titleRef = document.getElementById("title");
// const titleRef = document.querySelector("#title");

// console.log(titleRef);

// =================================
// Use this as good code
// document.querySelector
// document.querySelectorAll

// =================================

// nodeType
// nodeName

// parents;
// children;
// siblings - братсестер;

// ===========================

// const ulRef = document.querySelectorAll(".list")[1];
// // console.log(ulRef);

// console.log(ulRef.children);
// console.log(ulRef.childNodes);
// console.log(ulRef.parentElement);
// console.log(ulRef.lastChild);
// console.log(ulRef.lastElementChild);
// console.log(ulRef.parentNode);

// ulRef.nodeName
// ulRef.nodeType

// console.log(ulRef.nodeName);
// console.log(ulRef.nodeType);

// ===========================================

// const ulRef = document.querySelectorAll(".list")[1];
// // console.log(ulRef);

// const liRef = ulRef.querySelectorAll("li")[1];

// console.log(liRef);

//=====================================

// console.log(ulRef.children.children.children);

//=====================================

