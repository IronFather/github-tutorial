// 1-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const buttonEl = document.querySelector(`.my-button`);

// console.log(buttonEl);

// const clickToButton = () => {
//     console.log(`Ой, мене натиснули`);
// }

// buttonEl.addEventListener(`click`, clickToButton);

// 2-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const singleBtn = document.querySelector(`#single`);

// console.log(singleBtn);

// const handleClick = () => {
//     console.log(`Не тисніть на мене`);
// };

// singleBtn.addEventListener(`click`, handleClick);

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// ===============================================

// const multiBtn = document.querySelector(`#multiple`);
// console.log(multiBtn);

// const firstCb = () => {
//     console.log(`Перший пішов`);
// }

// const secondCb = () => {
//     console.log(`Припини!`);
// }

// const thirdCb = () => {
//     console.log(`Це вже нахабство!`);
// }

// multiBtn.addEventListener(`click`, firstCb);
// multiBtn.addEventListener(`click`, secondCb);
// multiBtn.addEventListener(`click`, thirdCb);


// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);

// 3-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const addListenerBtn = document.querySelector(`[data-action="add"]`);
// const removeListenerBtn = document.querySelector(`[data-action="remove"]`);

// console.log(addListenerBtn);
// console.log(removeListenerBtn);

// const btnEl = document.querySelector(`#btn`);
// console.log(btnEl);

// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector("#btn");


// const clickEl = () => {
//     console.log(`упс, натиснули!`);
// }
// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener(`click`, () => {
//     btnEl.addEventListener(`click`, clickEl);
//     console.log(`click event listener was added to btn`);
// });

// removeListenerBtn.addEventListener(`click`, () => {
//     btnEl.removeEventListener(`click`, clickEl);
//     console.log(`click event listener was removed from btn`);
// });

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });
// ===============================================

// const mango = {
//     username: "Mango",
//     showUsername() {
//         console.log(this);
//         console.log(`моє ім'я: ${this.username}`);
//     }
//   };

//   mango.showUsername();
  
// const btnEl = document.querySelector("#btn");

// btnEl.addEventListener(`click`, mango.showUsername);


// btnEl.addEventListener(`click`, mango.showUsername.bind(mango));

  
//   // ✅ Работает
//   mango.showUsername();
  
//   // ❌ this будет ссылаться на button если использовать showUsername как callback
//   btn.addEventListener("click", mango.showUsername); // не работает
  
//   // ✅ Не забывайте привязывать контекст методов объекта
//   btn.addEventListener("click", mango.showUsername.bind(mango));

// 4-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const btnEl = document.querySelector(`.btn`);
// console.log(btnEl);

// const handleClick = event => {
//     console.log(`event: `, event);
//     console.log(`event.type: `, event.type);
//     console.log(`curretTurget: `, event.curretTurget);
// }
// btnEl.addEventListener(`click`, handleClick)

// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);

// 5-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const formEl = document.querySelector(`.register-form`);
// console.log(formEl);

// formEl.addEventListener(`submit`, (event) => {
//     event.preventDefault();
//     // event.currentTarget;
//     const {
//         elements: {username, password}} = event.currentTarget;
//         console.log(username.value, password.value);
// })

// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });

// formEl.addEventListener("keydown", event => {
//     console.log("Keydown: ", event);
//   });

// formEl.addEventListener("keyup", event => {
//     console.log("Keyup: ", event);
//   });

// formEl.addEventListener("keydown", event => {
//     console.log("key: ", event.key);
//     console.log("code: ", event.code);
//   });

// 6-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// 7-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

// change-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// setOutput();

// input-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });

// focus и blur-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const setFocusBtnEl = document.querySelector(`[data-action="set"]`);
// const removeFocusBtnEl = document.querySelector(`[data-action="remove"]`);
// const inputEl = document.querySelector(`text-input`);

// setFocusBtnEl.addEventListener("click", () => {
//   inputEl.focus();
// });

// removeFocusBtnEl.addEventListener("click", () => {
//   inputEl.blur();
// });

// inputEl.addEventListener("focus", () => {
//   inputEl.value = "Уся увага намені";
// });

// inputEl.addEventListener("blur", () => {
//   inputEl.value = "";
// });


// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener("click", () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
// });

// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });

// 01-event-listeners.js-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// addListenerBtn.addEventListener("click", event => {
//     console.log(event);
//     console.log('Вешая слушителя на кнопку');
// });

// addListenerBtn.addEventListener("click", () => {
//     console.log(`вешаю слушителя на целевую кнопку`);

//     targetBtn.addEventListener("click", () => {
// console.log("клик по целевой кнопке");
//     })
// });

// removeListenerBtn.addEventListener("click", () => {
//     console.log(`убираю слушателя с целевой кнопки`);

//     targetBtn.removeEventListener("click", () => {

//     })
// })

// addListenerBtn.addEventListener("click", () => {
//     console.log(`вешаю слушителя на целевую кнопку`);

//     targetBtn.addEventListener("click", onTargetBtnClick)
// });

// removeListenerBtn.addEventListener("click", () => {
//     console.log(`убираю слушателя с целевой кнопки`);

//     targetBtn.removeEventListener("click", onTargetBtnClick);
// });

// function onTargetBtnClick(event) {
//     console.log(`клик по целевой кнопке`);
// }

// ---------------------------------------------------

// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// addListenerBtn.addEventListener('click', event => {
//   console.log(event);
//   console.log('Вешаю слушателя события на целевую кнопку');

//   targetBtn.addEventListener('click', onTargetBtnClick);
// });

// removeListenerBtn.addEventListener('click', event => {
//   console.log(event);
//   console.log('Снимаю слушателя события с целевой кнопки');

//   targetBtn.removeEventListener('click', onTargetBtnClick);
// });

// function onTargetBtnClick(event) {
//   console.log(event);
//   console.log('Клик по целевой кнопке');
// }

// 02-forms.js-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const formEl = document.querySelector(`.js-register-form`);
// // console.log(formEl);

// formEl.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
// event.preventDefault();

// console.dir(event.currentTarget);
// console.log(`это сабмит формы`);

// const formElements = event.currentTarget.elements;

// const formData = new FormData(event.currentTarget);

// console.log(formData);
// }

// ---------------------------------------------------
/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

// const form = document.querySelector(".js-register-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   console.log(form.elements);

//   const formData = new FormData(form);
//   console.log(formData);

//   formData.forEach((value, name) => {
//     console.log("onFormSubmit -> name", name);
//     console.log("onFormSubmit -> value", value);
//   });
// }

// 03-input-events.js &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const refs = {
//     inputEl: document.querySelector(`.js-input`),
//     spanEl: document.querySelector(`.js-button > span`),
//     checkboxEl: document.querySelector(`.js-license`),
//     btnEl: document.querySelector(`.js-button`),
// }

// refs.inputEl.addEventListener("focus", onInputFocus);
// refs.inputEl.addEventListener("blur", onInputBlur);
// refs.inputEl.addEventListener("change", onInputChange);
// refs.inputEl.addEventListener("input", onInputChange);
// refs.checkboxEl.addEventListener("change", onCheckboxChange);

// function onInputFocus() {
//     console.log(`фокус на импуте`);
// }

// function onInputBlur() {
//     console.log(`фокус потерян`);
// }

// function onInputChange(event) {
//     console.log(event.currentTarget.value);

//     refs.spanEl.textContent = event.currentTarget.value;
// }

// function onCheckboxChange(event) {
//     console.log(event.currentTarget.checked);
//     console.log(`refs.btnEl.disabled :`, refs.btnEl.disabled); 

//     refs.btnEl.disabled = !event.currentTarget.checked;
// }

// ---------------------------------------------------

/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

// const refs = {
//     input: document.querySelector('.js-input'),
//     nameLabel: document.querySelector('.js-button > span'),
//     licenseCheckbox: document.querySelector('.js-license'),
//     btn: document.querySelector('.js-button'),
//   };
  
//   // refs.input.addEventListener('focus', onInputFocus);
//   // refs.input.addEventListener('blur', onInputBlur);
//   // refs.input.addEventListener('change', onInputChange);
//   // refs.input.addEventListener('input', onInputChange);
  
//   refs.input.addEventListener('input', onInputChange);
//   refs.licenseCheckbox.addEventListener('change', onLicenseChange);
  
//   function onInputFocus() {
//     console.log('Инпут получил фокус - событие focus');
//   }
  
//   function onInputBlur() {
//     console.log('Инпут потерял фокус - событие blur');
//   }
  
//   function onInputChange(event) {
//     refs.nameLabel.textContent = event.currentTarget.value;
//   }
  
//   function onLicenseChange(event) {
//     refs.btn.disabled = !event.currentTarget.checked;
//   }

// 04-keyboard-events.js-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const refs = {
//     outputEl: document.querySelector('.js-output'),
//     clearBtnEl: document.querySelector('.js-clear'),
// }

// window.addEventListener(`keydown`, onKeyPress);

// function onKeyPress(event) {
    // console.log(event.key);
    // console.log(event.code);

    // refs.outputEl.textContent += event.key;

// }

// refs.clearBtnEl.addEventListener(`click`, onClearOutput);

// function onClearOutput() {
//     refs.outputEl.textContent = "";
// }


// ---------------------------------------------------

/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

// const refs = {
//     output: document.querySelector('.js-output'),
//     clearBtn: document.querySelector('.js-clear'),
//   };
  
//   window.addEventListener('keypress', onKeypress);
//   refs.clearBtn.addEventListener('click', onClearOutput);
  
//   function onKeypress(event) {
//     // console.log('event.key: ', event.key);
//     // console.log('event.code: ', event.code);
  
//     refs.output.textContent += event.key;
//   }
  
//   function onClearOutput() {
//     refs.output.textContent = '';
//   }

// 05-mouse-events.js-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
const boxEl = document.querySelector('.js-box');

// boxEl.addEventListener('mouseenter', onMouseEnter);
// boxEl.addEventListener('mouseleave', onMouseLeave);

// function onMouseEnter(events) {
// const box = event.currentTarget;
// box.classList.add(`box--active`);
// }

// function onMouseLeave(event) {
//     const box = event.currentTarget;
//     box.classList.remove(`box--active`);
//     }

    // boxEl.addEventListener('mouseover', onMouseEnter);
    // boxEl.addEventListener('mouseout', onMouseLeave);
    
    // function onMouseEnter(events) {
    // const box = event.currentTarget;
    // box.classList.add(`box--active`);
    // }
    
    // function onMouseLeave(event) {
    //     const box = event.currentTarget;
    //     box.classList.remove(`box--active`);
    //     }

    // boxEl.addEventListener('mousemove', onMouseMove);
    // function onMouseMove(event) {
    //       console.log(event);
    //     }

// ---------------------------------------------------

/*
 * События мыши
 * - mouseenter и mouseleave (это ховер через JS)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseover', onMouseEnter);
// boxRef.addEventListener('mouseout', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);

// function onMouseEnter(event) {
//   const box = event.currentTarget;
//   box.classList.add('box--active');
// }

// function onMouseLeave(event) {
//   const box = event.currentTarget;
//   box.classList.remove('box--active');
// }

// function onMouseMove(event) {
//   console.log(event);
// }

// 06-modal.js-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const refs = {
openModalBtnEl: document.querySelector(`[data-action="open-modal"]`),
closeModalBtnEl: document.querySelector(`[data-action="close-modal"]`),
backdropEl: document.querySelector(`.js-backdrop`),
}

refs.openModalBtnEl.addEventListener(`click`, onOpenModal);
refs.closeModalBtnEl.addEventListener(`click`, onCloseModal);
refs.backdropEl.addEventListener(`click`, onBackdropClick);

function onOpenModal() {
    document.body.classList.add(`show-modal`);
}

function onCloseModal() {
    document.body.classList.remove(`show-modal`)
}

function onBackdropClick() {
    console.log(`клик по бекдроп`);

    console.log(event.currentTarget);
    console.log(event.target);

    if(event.currentTarget === event.turget) {
        console.log(`я попал в бекдроп)`);
    }

}

// ---------------------------------------------------

/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

// const refs = {
//     openModalBtn: document.querySelector('[data-action="open-modal"]'),
//     closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//     backdrop: document.querySelector('.js-backdrop'),
//   };
  
//   refs.openModalBtn.addEventListener('click', onOpenModal);
//   refs.closeModalBtn.addEventListener('click', onCloseModal);
//   refs.backdrop.addEventListener('click', onBackdropClick);
  
//   function onOpenModal() {
//     window.addEventListener('keydown', onEscKeyPress);
//     document.body.classList.add('show-modal');
//   }
  
//   function onCloseModal() {
//     window.removeEventListener('keydown', onEscKeyPress);
//     document.body.classList.remove('show-modal');
//   }
  
//   function onBackdropClick(event) {
//     if (event.currentTarget === event.target) {
//       console.log('Кликнули именно в бекдроп!!!!');
//       onCloseModal();
//     }
//   }
  
//   function onEscKeyPress(event) {
//     const ESC_KEY_CODE = 'Escape';
//     const isEscKey = event.code === ESC_KEY_CODE;
  
//     if (isEscKey) {
//       onCloseModal();
//     }
//   }

// -&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// ---------------------------------------------------
