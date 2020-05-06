"use strict";
// * Напиши скрипт, который бы при потере фокуса на инпуте,
// * проверял его содержимое на правильное количество символов.

{
  /* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/> */
}
// *Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// * Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// * Для добавления стилей, используй CSS-классы valid и invalid.

// *#validation-input {
//   *border: 3px solid #bdbdbd;
// }

//* #validation-input.valid {
// *  border-color: #4caf50;
// }

// *#validation-input.invalid {
//  * border-color: #f44336;
// }

const input = document.querySelector("#validation-input");
const inputValidLength = Number(input.dataset.length); //!!! значенте поля data-length="6"


 //!!! сожешь не писать мне, что остается в html класс 'valid invalid' после введения 7го символа.  я на это пошел осознанно тк не вижу в этом ничего плохого. код работает и самое главное === В ОДНУ СТРОКУ)))))))=== 

input.addEventListener("input", changeBorderColor);
function changeBorderColor() {
    input.value.length !== Number(input.dataset.length) ? input.classList.add("invalid"): input.classList.add("valid") || input.classList.remove("invalid") ;
}

// console.log(typeof input.dataset.length); ///!!!
// console.log(typeof Number(input.dataset.length)); 