"use strict";
//* Напиши скрипт для создания галлереи изображений по массиву данных.
// *В HTML есть список ul#gallery.
// *<ul id="gallery"></ul>
// *Используй массив объектов images для создания тегов img вложенных в li.
// * Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// *Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//* Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector("#gallery");
const addGallery = () => images.map(({ url, alt }) => `<li><img src="${url} alt="${alt}"></li>`).join('')
    
    gallery.insertAdjacentHTML("afterbegin", addGallery(images));
    // gallery.insertAdjacentHTML("afterbegin", [...newArr].join("")); ///[...newArr].join("") = убрать запятую тк insertAdjacentHTML выводит как строку
  
function style() {
  gallery.style.display = 'flex';
  gallery.style.listStyle = 'none';

  let item = gallery.querySelectorAll('img');
  function size(arr) {
    arr.forEach(el => {
      el.style.width = '300px';
      el.style.height = '200px';
    });
  }

  size(item);
}
style();