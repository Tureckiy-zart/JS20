"use strict";

// *Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// *подставляет его текущее значение в span#name-output. Если инпут пустой, в
// *спане должна отображаться строка 'незнакомец'.

const output = document.getElementById("name-output");
const input = document.getElementById("name-input");

const changeInnerTxt = () => ((output.textContent = input.value) && (input.removeEventListener("input", changeInnerTxt)))
input.addEventListener("change", changeInnerTxt);






// =======================================================
// const commentForm = document.forms.commentForm;
// console.dir(document.forms);
// console.log(commentForm);
// const button = commentForm.elements.addComment;
// // console.dir(button);
// console.dir(commentForm.children);
//  console.dir(document.forms.commentForm);
//  console.dir(document.forms.commentForm.elements.name.value);
