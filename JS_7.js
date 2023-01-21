// MODULE 1





// Всплытие событий-&&&&&&&&&&&&&&&&&&&&&&&&&&&& 1

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert("Parent click handler");
// });

// child.addEventListener("click", () => {
//   alert("Child click handler");
// });

// descendant.addEventListener("click", () => {
//   alert("Descendant click handler");
// });

// Свойство event.target-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 2

// const parent = document.querySelector("#parent");

// parent.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });

// Прекращение всплытия stopPropagation()-&&&&&&&&&&&&&&&&&&&&&&& 3

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert(
//     "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// child.addEventListener("click", () => {
//   alert(
//     "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// descendant.addEventListener("click", (event) => {
//   event.stopPropagation();
//   alert("Descendant click handler");
// });

// Если необходимо полностью остановить обработку события, 
// используется метод stopImmediatePropagation()

// event.target-ПАЛИТРА ЦВЕТОВ-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 4

// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i+=1) {
//     const color = getRandomColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }

// 02-delegation.html-&&&&&&&&&&&&&&&&&&&&&&&&&&

// const containerEl = document.querySelector(`.js-container`);
// containerEl.addEventListener(`click`, onContainerClick);

// function onContainerClick(evt) {
//   if(evt.target.nodeName !== `BUTTON`) {
//     return;
//   }

//   console.log(evt.target.textContent);
// }


// -------------------------------------------------------------------
/*
 * Делегирование событий
 * - общий слушатель
 * - фильтр цели клика
 */

// ВЫБОР ОДНОГО ИЗ МНОЖЕСТВА____________________________________________

// const containerEl = document.querySelector('.js-container');
// let currentBtn = null;

// containerEl.addEventListener('click', onClick);

// function onClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   // console.log(evt.target.textContent);

//   const activeBtnEl = document.querySelector(`.actibe_btn`);

// if(activeBtnEl) {
//   activeBtnEl.classList.remove(`actibe_btn`);

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add(`actibe_btn`);
//   currentBtn = nextActiveBtn.dataset.value;
//   console.log(currentBtn); // НЕ РАБОТАЕТ ((((((
// }
// }

/*
 * Код добавления кнопок
 */

// const addBtnEl = document.querySelector(`.js-add-btn`);

// addBtnEl.addEventListener(`click`, onAddBtnClick);
// let numberOfCounter = 7;
// function onAddBtnClick() {
//   const newBtn = document.createElement(`button`);
//   newBtn.type = "button";
//   newBtn.class = "new-button";
//   newBtn.textContent = `Кнопка ${numberOfCounter}`;

//   containerEl.appendChild(newBtn);
//   numberOfCounter += 1;
// }
// -------------------------------------------------------
// const addBtn = document.querySelector('.js-add-btn');
// let labelCounter = 6;

// addBtn.addEventListener('click', onAddBtnClick);

// function onAddBtnClick() {
//   const btn = document.createElement('button');
//   btn.textContent = `Кнопка ${labelCounter}`;
//   btn.type = 'button';

//   container.appendChild(btn);
//   labelCounter += 1;
// }

// ВЫБОР МНОЖЕСТВА ИЗ МНОЖЕСТВА_______________________________

// const containerEl = document.querySelector('.js-container');
// let currentBtnArr = new Set();

// containerEl.addEventListener('click', onClick);

// function onClick(evt) {

//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   console.log(evt.target.textContent);

// const btn = evt.target;
// const tag = evt.target.dataset.value;


// const activeBtn = btn.classList.contains("active_btn");

// if(activeBtn) {
//   currentBtnArr.delete(tag);
// } else {
//   currentBtnArr.add(tag);
// }

// btn.classList.toggle("active_btn");
// console.log(currentBtnArr);
// }

// -------------------------------------------------------------


// 03-colorpicker.js-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#e91e63', rgb: '233,30,99' },
//   { hex: '#9c27b0', rgb: '156,39,176' },
//   { hex: '#673ab7', rgb: '103,58,183' },
//   { hex: '#3f51b5', rgb: '63,81,181' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#00bcd4', rgb: '0,188,212' },
//   { hex: '#009688', rgb: '0,150,136' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
//   { hex: '#ff9800', rgb: '255,152,0' },
//   { hex: '#795548', rgb: '121,85,72' },
//   { hex: '#607d8b', rgb: '96,125,139' },
// ];


// const palleteContainer = document.querySelector(`.js-palette`);
// const cardsMarkup = createColorCardsMarkup(colors);
// palleteContainer.insertAdjacentHTML("beforeend", cardsMarkup);

// function createColorCardsMarkup(colors) {
//   return colors
//     .map(({ hex, rgb }) => {
//       return `
//     <div class="color-card">
//     <div
//      class="color-swatch"
//      data-hex="${hex}"
//      data-rgb="${rgb}"
//      style="background-color: ${hex}"
//    ></div>
//       <div class="color-meta">
//         <p>HEX: ${hex}</p>
//         <p>RGB: ${rgb}</p>
//       </div>
//     </div>
//     `;
//     })
//     .join('');
// } 

// -----------------------------------------------------------------------

// const paletteContainer = document.querySelector('.js-palette');
// const cardsMarkup = createColorCardsMarkup(colors);

// paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// paletteContainer.addEventListener('click', onPaletteContainerClick);

// function createColorCardsMarkup(colors) {
//   return colors
//     .map(({ hex, rgb }) => {
//       return `
//     <div class="color-card">
//      <div><div><div> <div
//      class="color-swatch"
//      data-hex="${hex}"
//      data-rgb="${rgb}"
//      style="background-color: ${hex}"
//    ></div></div></div></div>
//       <div class="color-meta">
//         <p>HEX: ${hex}</p>
//         <p>RGB: ${rgb}</p>
//       </div>
//     </div>
//     `;
//     })
//     .join('');
// }

// function onPaletteContainerClick(evt) {
//   const isColorSwatchEl = evt.target.classList.contains('color-swatch');

//   if (!isColorSwatchEl) {
//     return;
//   }

//   const swatchEl = evt.target;
//   const parentColorCard = swatchEl.closest('.color-card');

//   removeActiveCardClass();
//   addActiveCardClass(parentColorCard);
//   setBodyBgColor(swatchEl.dataset.hex);
// }

// function setBodyBgColor(color) {
//   document.body.style.backgroundColor = color;
// }

// function removeActiveCardClass() {
//   const currentActiveCard = document.querySelector('.color-card.is-active');

//   if (currentActiveCard) {
//     currentActiveCard.classList.remove('is-active');
//   }
// }

// function addActiveCardClass(card) {
//   card.classList.add('is-active');
// }

// 7.1 АРТЕМ БАРДАЧЕВ -&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

/** Task 1. Calculator */

// const formEl = document.querySelector(`.form`);
// const quantityEl = document.querySelector(`.amount`);
// const totalPriceEl = document.createElement(`span`);

// formEl.append(totalPriceEl);
// totalPriceEl.before(`Загальна вартість: `);
// totalPriceEl.after(` грн.`);

// function onFormInput(formEl) {

//   const {elements: {price,quantity}} = formEl;

//   // console.log(price.value, quantity.value);

//   const totalPrice = Number(price.value * quantity.value).toFixed(2);

//   totalPriceEl.innerHTML = totalPrice;
//   quantityEl.innerHTML = quantity.value;
// };

// formEl.addEventListener(`input`, e => {
//   onFormInput(e.currentTarget)
// });

// document.addEventListener(`DOMContentLoaded`, e => {
//   onFormInput(formEl)
// });
// ------------------------------------------------------------

// const form = document.querySelector('.form');
// const quantityRef = document.querySelector('.amount');
// const totalRef = document.createElement('span');

// const imagesContainer = document.querySelector('.images-gallery');

// form.append(totalRef)

// totalRef.before('Загальна вартість: ');
// totalRef.after(' ГРН.');

// const formHandler = (form) => {

//   const {
//     elements: {
//       price,
//       quantity
//     }
//   } = form;

//   const totalPrice = Number(price.value * quantity.value).toFixed(2);

//   totalRef.innerHTML = totalPrice;
//   quantityRef.innerHTML = quantity.value;
// }

// form.addEventListener('input', e => {
//   formHandler(e.currentTarget)
// });

// /** Task 2. Image gallery */
// const images =  [
//   {
//     "title": "Коник стрибунець",
//     "src": "https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg" 
//   },
//   {
//     "title": "Фрукт",
//     "src": "https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg"
//   },
//   {
//     "title": "Люди",
//     "src": "https://cdn.pixabay.com/photo/2022/11/05/22/43/against-light-7572922_1280.jpg"
//   },
//   {
//     "title": "Годиник",
//     "src": "https://cdn.pixabay.com/photo/2022/11/06/13/36/architecture-7574031_1280.jpg" 
//   },
//   {
//     "title": "Метро",
//     "src": "https://cdn.pixabay.com/photo/2022/10/31/17/57/subway-7560452_1280.jpg"
//   },
//   {
//     "title": "Хмари",
//     "src": "https://cdn.pixabay.com/photo/2022/10/24/09/54/switzerland-7543063_1280.jpg"
//   },
// ]

// const imgModal = document.querySelector('.image-modal-overlay');
// const modalContent = document.querySelector('.image-modal');

// images.forEach(({src, title}) => {

//   const imgEl = document.createElement('img');
//   imgEl.src = src;
//   imgEl.alt = title;

//   imagesContainer.append(imgEl)

// });

// imagesContainer.addEventListener('click', e => {
//   if(e.target.nodeName === 'IMG') {
//     modalContent.innerHTML = e.target.getAttribute('alt')
//     imgModal.classList.add('visible')
//   }
// });

// imgModal.addEventListener('click', e => {
//   e.currentTarget.classList.remove('visible')
// })

// document.addEventListener('DOMContentLoaded', e => {
//   formHandler(form)
// })


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&