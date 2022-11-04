const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */

// const navEl = document.querySelector('.site-nav');
// console.log('navEl', navEl);

// const navLinksEl = document.querySelectorAll('.site-nav__link');
// console.log('navLinksEl', navLinksEl);

// const aEl = document.querySelectorAll(`a`);
// console.log(aEl);
/*
 * Document.querySelector* и Element.querySelector*
 */

// console.log(document);

// const body = document.body;
// console.log(body);

// const secondEl = document.querySelector(".second");
// console.log(secondEl);

// const firstEl = secondEl.;
// console.log(firstEl);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// const idEl = document.querySelector('#menu');
// // console.log(idEl);

// idEl.style.textTransform = 'uppercase';
// idEl.style.fontSize = '24px';
// console.log(idEl);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const secondLiEl = document.querySelector(".js-second");
// console.log(secondLiEl);

// secondLiEl.style.color = `red`;
// secondLiEl.nextElementSibling.style.color = `blue`;

// const allLiEl = document.querySelectorAll(".menu-item");
// console.log(allLiEl);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);


// //===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// // //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// // //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';

// const text = document.querySelector(".article-text");
// console.log(text.textContent); // text inside p.article-text

// const titleEl = document.querySelector(`.article-title`);
// const articleDescEl = document.querySelector(`.article-text`);

// titleEl.textContent = `Welcome to club Tri Kozaky!`;
// console.log(titleEl.textContent);

// articleDescEl.textContent = `You will be Ironman`;
// console.log(articleDescEl);

// =============================================================================================== -->

// const textEl = document.querySelector(`#paragraph`);

// console.log(textEl.classList.contains(`big`));
// console.log(textEl.classList.contains(`blue`));

// console.table(textEl.classList);

// textEl.classList.add(`asdfg`);
// console.table(textEl.classList);

// const asdfgEl = document.querySelector(`.asdfg`);
// asdfgEl.style.color = `red`;
// asdfgEl.style.textTransform = `uppercase`;

// console.log(asdfgEl.textContent);

// textEl.classList.remove(`big`);
// console.table(textEl.classList);

// textEl.classList.replace(`blue`, `yellow`);
// console.table(textEl.classList);

// =============================================================================================== -->

// const upperEl = document.querySelector(`.article-title`);

// upperEl.style.textTransform = `uppercase`;
// upperEl.style.color = `green`;
// upperEl.style.fontSize = `58px`;
// upperEl.style.textAlign = "center";
// =============================================================================================== -->


// const imageEl = document.querySelector(".image");

// imageEl.classList.add(`super`);
// console.log(imageEl.classList);

// console.log(imageEl.attributes);
// console.log(imageEl.hasAttribute(`src`));



// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(imageEl.getAttribute("alt")); // "Lake and clouds"

// imageEl.removeAttribute(`alt`);
// imageEl.setAttribute(`alt`, `ohohohoho`);
// console.log(imageEl.attributes);
// console.log(imageEl.hasAttribute(`alt`));
// console.log(imageEl.getAttribute(`alt`));

// imageEl.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature

// =============================================================================================== -->


// const openBtnEl = document.querySelector(`button[data-action="open"]`);
// console.log(openBtnEl);

// const closeBtnEl = document.querySelector(`button[data-action="close"]`);
// console.log(closeBtnEl);

// console.log(openBtnEl.dataset.action);
// console.log(closeBtnEl.dataset.action);

const dishesEl = document.querySelector(`.dishes`);

// dishesEl.forEach((dish) => {
//     console.log(dish.dataset.id);
// })

// =============================================================================================== -->

// const newPEl = document.createElement(`p`);
// console.log(newPEl);

// newPEl.textContent = `I want to be an Ironman`;
// console.log(newPEl.textContent);

// const newImgEl = document.createElement(`img`);
// newImgEl.src = `https://placeimg.com/640/480/nature`;
// newImgEl.alt = `very cool`
// newImgEl.classList.add(`card`);
// console.log(newImgEl.attributes);


// const liEl = document.querySelector(`.dishes > li[data-id="7"]`)
// liEl.after(newImgEl)
// =============================================================================================== -->

// const list = document.querySelector(".usernames");

// // Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// // Adds a title before the list
// const title = document.createElement("h2");
// title.textContent = "USERNAMES";
// list.before(title);

// // Adds a paragraph after the list
// const text = document.createElement("p");
// text.textContent =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
// list.after(text);
// =============================================================================================== -->

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);
// =============================================================================================== -->

// const qwe = document.querySelector(`.article .link`);
// console.log(qwe.innerHTML);
// =============================================================================================== -->
// const newTitleEl = document.querySelector(`.article .title`);

// newTitleEl.innerHTML = `Yurii Yashchuk will be ready for new job`;

// =============================================================================================== -->


// =============================================================================================== -->


// =============================================================================================== -->


// =============================================================================================== -->


// =============================================================================================== -->
