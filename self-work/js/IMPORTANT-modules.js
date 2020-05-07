// "use strict";
// //? ================Примитивы==================================================//

// // if поверка как тернарник только с 1м условием выхода
// this.speed < this.maxSpeed && (this.speed += value);

// //?==============Ranodm + проверка на чётность =======
// const value = Number.parseInt(Math.random() * 100);
// // console.log(`Math.random: ${value}`);
// let type;
// value % 2 === 0 ? (type = "odd") : (type = "even");
// console.log(`${value} is ${type}`);
// //?===================Случайное целое число  в диапазоне от min до max==================================
// //https://learn.javascript.ru/task/random-int-min-max
// //использовать Math.floor для получения случайного числа от min до max+1:
// function randomInteger(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }
// console.log(randomInteger(0, 19));
// //   Теперь все интервалы отображаются следующим образом:
// //   число от 1  ... до 1.9999999999  округлится до 1
// //   число от 2  ... до 2.9999999999  округлится до 2
// //   число от 3  ... до 3.9999999999  округлится до 3
// //   Все интервалы имеют одинаковую длину, что выравнивает вероятность получения случайных чисел.

// //?====================Проверка на тип данных======================================================
// function getData(data) {
//   if (data.constructor.name === "Array") {
//     return console.log((data = data), (name = data[0]));
//     // return {
//     //   data: data,
//     //   name: data[0],
//     // };
//   }
//   if (data.constructor.name === "String") {
//     console.log("String");
//   }
// }
// const array = ["Andrii", 1, 2, 3];
// const string = "CGDGHMS";

// getData(string);
// getData(array);

// //!================================================Объекты Object==================================================
// быстрое создание массива
const array = new Array(200);
console.log(array[2]);

console.time("map");
array.map((el) => el);
console.timeEnd("map");

console.time("dirty reduce");
array.reduce((acc, el) => acc.push(el), []);
console.timeEnd("dirty reduce");

console.time("clean reduce");
array.reduce((acc, el) => [...acc, el], []);
console.timeEnd("clean reduce");

// //? ==================Расширенное понимание ======================Object.create()=========================
// //?===================Является прототипом сам у себя и имеет собственные свойства=============================
// // D:\1_JS\videos form lessons\05 - object create\object create.mp4
const user = Object.create({}) //! {} -прототип - означает, что прототип будет тустой 
const user1 = Object.create(null) //! (null) БЕЗ ПРОТОТИПА ВООБЩЕ
// console.dir(user);
// console.dir(user1);
//     
  //   {
//     name: {
//       value: "user",
//       enumerable: false, //! скрытые свойства позволяют упавлять свойствами обекта
//       writable: false,
//       configurable: true,
//     },
//     age: {
//       value: 25,
//       enumerable: false,
//       writable: false,
//       configurable: false,
//     },
//   }
// );

// console.log(user.hasOwnProperty("age"));
// console.log(Object.keys(user));
// user.getName();
// user.method();

// user.name = "Nikita";
// console.log(user);
// // ==================================================================================================

// // ?=====================Глубокая деструктуризация обекта===========================================

// const shape = {
//   type: "segment",
//   coordinates: {
//     start: [10, 15],
//     end: [2, 154],
//   },
// };
// const {
//   coordinates: {
//     start: [stX, stY],
//     end: [enX, enY],
//   },
// } = shape;
// console.log(
//   `start X: ${stX * 2} Y:${(stY * 2) / 4}, end X:${enX} Y:${(enY * 2) / 4} `
// );
// // =================================================================================================

//!=======================================привязка this к callback функции=============================
// const hotel = {
//   name: "Resort Hotel",
//   showThis() {
//     console.log(this);
//   },
// };
// const fn = function (callback) {
//   callback();
// };
// // Передаем копию метода showThis с контекстом привязанным к hotel
// fn(hotel.showThis.bind(hotel)); // {name: "Resort Hotel", showThis: ƒ}

//   =================================================================================================
// Object.fromEntries(array) - Собрать обьект из массива вассивов [['name', 'Alex']]
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const sss = Object.entries(tweets);
console.log(sss);
console.log(WeakSet.prototype);

//!==============================DOM=======================
Методы для создания узлов:
document.createElement(tag) – создаёт элемент с заданным тегом,
document.createTextNode(value) – создаёт текстовый узел (редко используется),
elem.cloneNode(deep) – клонирует элемент, если deep==true, то со всеми дочерними элементами.

Вставка и удаление:
node.append(...nodes or strings) – вставляет в node в конец,
node.prepend(...nodes or strings) – вставляет в node в начало,
node.before(...nodes or strings) –- вставляет прямо перед node,
node.after(...nodes or strings) –- вставляет сразу после node,
node.replaceWith(...nodes or strings) –- заменяет node.
node.remove() –- удаляет node.

Устаревшие методы:
parent.appendChild(node)
parent.insertBefore(node, nextSibling)
parent.removeChild(node)
parent.replaceChild(newElem, node)
Все эти методы возвращают node.

Если нужно вставить фрагмент HTML, то elem.insertAdjacentHTML(where, html) вставляет в зависимости от where:

"beforebegin" – вставляет html прямо перед elem,
"afterbegin" – вставляет html в elem в начало,
"beforeend" – вставляет html в elem в конец,
"afterend" – вставляет html сразу после elem.
Также существуют похожие методы elem.insertAdjacentText и elem.insertAdjacentElement, они вставляют текстовые строки и элементы, но они редко используются.