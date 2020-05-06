"use strict";
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};
const { input, span } = refs;

const changeFontSize = (e) =>
  (span.style.fontSize = `${e.target.value * 1.5}px`);
input.addEventListener("input", changeFontSize);

// function  changeFontSize (e) {
//   span.style.fontSize = `${e.target.value*1.5}px`
//   console.dir(input.value);
// }
