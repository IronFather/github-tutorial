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

// Check clases
{
    /* <h1 class="heading main__title" id="title">Main titile</h1> */
}

const h1Ref = document.querySelector("h1");

// console.log(h1Ref);
// console.log(h1Ref.classList); // DOMTokenList
// console.log(h1Ref.classList.length); // DOMTokenList
// console.log(h1Ref.classList.contains("main__title")); // DOMTokenList
// console.log(h1Ref.classList.contains("pizza")); // DOMTokenList
//=======================================
// Add class

// h1Ref.classList.add("green");
h1Ref.classList.add("red");

//=================================
// Remove class
// h1Ref.classList.remove("green");

// =================================
// Toggle
// если нету - добвляет
// если есть - убирает
// h1Ref.classList.toggle("green");

// =================================
// Replace

// if (h1Ref.classList.contains("red")) {
//     h1Ref.classList.add("super--class");
// }
// =================================
{
    /* <div id="links">
    <a class="link__google" href="http://google.com">Google</a>
    <br />
    <a class="link__yahoo" href="http://yahoo.com">Yahoo</a>
    <br />
    <a class="link__css" href="/Lesson_02.HTML_CSS/html/news.html">News page</a>
</div> */
}

// ========================
// Set Attibute

// const yahhoRef = document.querySelectorAll("a")[1];
// yahhoRef.setAttribute("target", "_blank");
// console.log(yahhoRef);

// const imgRef = document.querySelectorAll("img");

// imgRef.forEach((img) => {
//     img.setAttribute("width", 150);
//     img.setAttribute("alt", "meal");
// });
//====================================
// Only for links and images

// const imgRef = document.querySelectorAll("img");

// imgRef.forEach((img) => {
//     img.alt = "food";
//     img.width = 250;
// });

// const yahhoRef = document.querySelectorAll("a")[1];
// yahhoRef.target = "_blank";

// =============================
// Get Attribute

// const yahhoRef = document.querySelectorAll("a")[1];
// const href = yahhoRef.getAttribute("href");

// console.log(href);
// =============================

// innerText
// textContent
// innerHeight
// innerWidth
// innerHtml

// const h1 = document.querySelector("#title");
// console.log(h1);

// h1.innerText = "Hello";
// h1.textContent = "Hello i am main";

// const ulRef = document.querySelectorAll(".list")[2];
// console.log(ulRef);

// const liRef = ulRef.querySelectorAll("li")[0];
// liRef.textContent = "Pizza 100";
// liRef.innerText = "Pizza Plus";

// ===================================
// const h1 = document.querySelector("#title");
// h1.innerHTML = '<span style="color: teal" class="span__class">Some text</span>';

// const ulRef = document.querySelectorAll(".list")[2];

// let html = "";
// const friends = [
//     { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
//     { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//     { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
//     { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
// ];

// friends.forEach(({ name }) => {
//     html += `<li class"list__item">${name}</li>`;
// });

// ulRef.innerHTML = html;

// ========================

// const h1 = document.querySelector("#title");
// h1.insertAdjacentElement
// h1.insertAdjacentHTML
// h1.insertAdjacentText

// h1.insertAdjacentHTML('afterbegin')
// h1.insertAdjacentHTML('afterend')
// h1.insertAdjacentHTML('beforebegin')
// h1.insertAdjacentHTML('beforeend')

// h1.insertAdjacentHTML(
//     "beforeend",
//     '</br><span style="color: teal" class="span__class">Some text</span>'
// );
// ========================

// document.body.style.display = "";

// const h1 = document.querySelector("#title");
// h1.style.color = "green";
// h1.style.fontSize = "75px";
// h1.style.textDecoration = "underline";
// h1.style.backgroundColor = "teal";

// ========================

/*
Create any element algorythm
1. document.createElement()
2. document.setAtribute and clases
3. add Text (если нужно);
4. Insert into dom(привяжи в DOM, свяжи с другим элементом)
*/

// const aRef = document.createElement("a");
// console.log(aRef);

// aRef.href = "https://tproger.ru/translations/configure-webpack4/";
// aRef.target = "_blank";
// aRef.classList.add("super__link");

// aRef.textContent = "webpack4";

// const divLinksRef = document.querySelector("#links");
// console.log(divLinksRef);
// divLinksRef.append(aRef);

// document.body.append
// document.body.prepend
// document.body.before
// document.body.after

// document.body.append(aRef);

// ====================================
// const imgRef = document.createElement("img");

// imgRef.src =
//     "https://images.pexels.com/photos/2108837/pexels-photo-2108837.jpeg?auto=compress&cs=tinysrgb&w=1600";

// imgRef.alt = "kebab";
// imgRef.width = 450;

// const imgSectionRef = document.querySelector(".images__examples");
// imgSectionRef.append(imgRef);

// ====================================


/*
Create any element algorythm
1. document.createElement()
2. document.setAtribute and clases
3. add Text (если нужно);
4. Insert into dom(привяжи в DOM, свяжи с другим элементом)
*/

// const aRef = document.createElement("a");
// console.log(aRef);

// aRef.href = "https://tproger.ru/translations/configure-webpack4/";
// aRef.target = "_blank";
// aRef.classList.add("super__link");

// aRef.textContent = "webpack4";

// const divLinksRef = document.querySelector("#links");
// console.log(divLinksRef);
// divLinksRef.append(aRef);

// document.body.append
// document.body.prepend
// document.body.before
// document.body.after

// document.body.append(aRef);

// ====================================
// const imgRef = document.createElement("img");

// imgRef.src =
//     "https://images.pexels.com/photos/2108837/pexels-photo-2108837.jpeg?auto=compress&cs=tinysrgb&w=1600";

// imgRef.alt = "kebab";
// imgRef.width = 450;

// const imgSectionRef = document.querySelector(".images__examples");
// imgSectionRef.append(imgRef);
