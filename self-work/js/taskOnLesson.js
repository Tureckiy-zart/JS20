"use strict";
// Нужно написать функцию, принимающую строку
// в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».

// countValues('Hello');
// countValues('Bootcamp');

// Многоквартирный дом характеризуется следующими тремя показателями: этажность(1 - 25),
// число подъездов(1 - 10), количество квартир на лестничной площадке(1 - 20).
// Скрипт запрашивает эти показатели и номер квартиры.
// Выводится номер подъезда, в котором находится указанная квартира.

// const bookStore = {
//   booksList: ["fantasy", "detective", "adventure"],
//   booksCategory: {
//     fantasy: {
//       items: [],
//       totalQuantity: 0,
//       totalPriceSum: 0,
//     },
//     detective: {
//       items: [],
//       totalQuantity: 0,
//       totalPriceSum: 0,
//     },
//     adventure: {
//       items: [],
//       totalQuantity: 0,
//       totalPriceSum: 0,
//     },
//   },
//   totalQuantity: 0,
//   totalPriceSum: 0,
// };

// const services = {
//   addBook(category, book) {
//     const { totalQuantity, totalPriceSum, items } = bookStore.booksCategory[
//       category
//     ];
//     console.log(bookStore.booksCategory[category]);
//     console.log(totalQuantity, totalPriceSum);

//     const { quantity, price } = book;

//     // let {
//     //   totalQuantity: mainTotalQuantity,
//     //   totalPriceSum: mainTotalPriceSum,
//     // } = bookStore;
//     // console.log(mainTotalQuantity, mainTotalPriceSum);

//     bookStore.booksCategory[category].items = [
//       ...bookStore.booksCategory[category].items,
//       book,
//     ];
// console.log(bookStore.booksCat
// const arr = [
//   { id: 1, name: "A", car: "bmw" },
//   { id: 2, name: "B", car: "audi" },
//   { _id: 3, name: "C", car: "porshe" },
// ];

// function fn1(array) {
//   let allClients = "";
//   for (const item of array) {
//     const { id, name, car } = item;
//     allClients = allClients + fn2(id, name, car);
//     console.log(item);
//   }
//   console.log(allClients);
// }
// function fn2(id, name, car) {
//   return `
//   <li ${id}>
//   <p>${name}</p>
//   <p>${car}</p>
//   </li>`;
// }

// fn1(arr);

// let x
// if(true){
//   console.log(x);

// }

// const name = "anna";
// const arw = name.split("").reverse();
// const asd = arw.join("") === name ? console.log(true) : console.log(false);
// console.log(asd);

const array1 = new Array(1, 2, 3, 4, 5);
console.log("array :", array1);
// const string1 = new String("gycjgcha");
// console.log("string :", string1);
// console.dir(string1);
// console.log("object :", object);

// =============================

// 1.
// const parent = {
//     eyes: 2,
//     nose: 1,
//     hear: 2,
//     mouth: 1,
//     canSpeak: true,
//     smile() {
//         return console.log("smile");;
//     }
// }
// console.dir(parent);

// 2.
// const array = new Array(1, 2, 3, 4, 5);
// console.log('array :', array);

// const myObject = new Object({ a: 2, b: 3 });
// console.log('myObject :', myObject);

// 3.
// const parent = new Object({
//     eyes: 2,
//     nose: 1,
//     hear: 2,
//     mouth: 1,
// })

// const Human = function (name, age) {
//     this.name = name;
//     this.age = age;
// }
// Human.prototype.getInfo = function () {
//     console.log('this :', this);
// }

// const guard = Object.create(Human);
// const vasya = new guard("Vasya", 13)

// console.log('vasya :', vasya);

// const borys = new Parent("Boris", 25);
// const petro = new Parent("Petro", 39);
// console.log('borys :', borys);
// console.log('petro :', petro);

// console.dir(parent);

// parent.prototype.speak = function () {
//     console.log('hello');
// }

// console.dir(parent);

// console.dir(Object);

// 4.
// const parent = {
//     eyes: 2,
//     nose: 1,
//     hear: 2,
//     mouth: 1,
//     canSpeak: true,
//     smile() {
//         return console.log("smile");
//     },
// }
// const children = {
//     canSpeak: false,
// }
// children.__proto__ = parent; //так не пишем
// delete children.canSpeak;
// console.dir(children.canSpeak);
// const children = Object.create(parent); // пишем так

// children.canSpeek = false;

// // console.log('children :', children);

// // console.dir(children);

// // children.smile();
// // console.log('children.eyes :', children.eyes);

// // console.dir(children.hasOwnProperty('eyes'));
// // console.dir(children.hasOwnProperty('canSpeek'));

// for (const key in children) {
//     children.hasOwnProperty(`${key}`) && console.log(`===>${key}`, children[key]);
// }

// ======================




