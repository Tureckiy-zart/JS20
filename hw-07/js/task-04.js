"use strict";
// * Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// * Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// * Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// * Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const toAdd = document.querySelector(".counterToAdd");
const counterAdd = `<div class ="counterStyle" id="counter">
                      <button class ="btn" type="button" data-action="decrement"> -1 </button>
                      <span id="value">0</span>
                      <button class ="btn" type="button" data-action="increment"> +1 </button>
                    </div>`;
toAdd.insertAdjacentHTML("afterbegin", counterAdd);

const refs = {
  decrement: document.querySelector('button[data-action="decrement"]'),
  increment: document.querySelector('button[data-action="increment"]'),
  innerValue: document.querySelector("#value"),
};
const { decrement, increment, innerValue } = refs;

let counter = 0;

const decrementFoo = () => {innerValue.textContent = counter -= 1}
function incrementFoo() {innerValue.textContent = counter += 1}

decrement.addEventListener("click", decrementFoo);
increment.addEventListener("click", incrementFoo);

// const doStuffOnClick = () => {
//   console.log("");
// };

// addListenerBtnRef.addEventListener("click", () => {
//   targetBtnRef.addEventListener("click", doStuffOnClick);
// });

// removeListenerBtnRef.addEventListener("click", () => {
//   targetBtnRef.removeEventListener("click", doStuffOnClick);
// });
