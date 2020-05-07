"use strict";
//* Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// *Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// *Каждый созданный div:
// *Имеет случайный rgb цвет фона
// *Размеры самого первого div - 30px на 30px
// *Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// *Создай функцию destroyBoxes(), которая очищает div#boxes.
{
  /* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */
}
// ==========сслыки========================================
const refs = {
  div: document.querySelector("#controls"),
  input: document.querySelector("#controls > input"),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector("#boxes"),
};
let inputValue;
// ==========достали значаение input========================================
const getValue = (e) => inputValue = e.currentTarget.value;
refs.input.addEventListener("input", getValue);

function renderHTML(e) {
  e.preventDefault();
  createBoxes(inputValue);
  // refs.renderBtn.removeEventListener("click", renderHTML);
  // refs.input.reset() //!!
}
refs.renderBtn.addEventListener("click", renderHTML);

refs.destroyBtn.addEventListener("click", clearHTML);
function clearHTML(e) {
  e.preventDefault();
  refs.boxes.innerHTML = "";
  // refs.destroyBtn.removeEventListener("click", clearHTML);
  // console.log(e);
}

function createBoxes(amount) {
  let tempFragment = document.createDocumentFragment();
  let divAdd;
  let divWidth = 20;
  let divHeight = 20;
  for (let i = 0; i < amount; i++) {
    divAdd = document.createElement("div");
    divAdd.style.width = `${(divWidth += 10)}px`;
    divAdd.style.height = `${(divHeight += 10)}px`;
    divAdd.style.backgroundColor = `#${generateColor()}`;  //??!!!!
    tempFragment.append(divAdd);
  }
  refs.boxes.append(tempFragment);
}
// createBoxes(getValue);
const generateColor = () => Math.floor(Math.random() * 16777216).toString(16);    //? почему при  факншэн экспершшен работает на 56й строке??????????????
