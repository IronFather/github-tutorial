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

// 7-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



// 7-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



// 7-&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
