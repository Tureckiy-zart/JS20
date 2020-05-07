"use strict";
// * Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
// * В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль
// * значения полей login и email объекта который его вызвал.
// ===============================================
{
  const Account = function ({ login = "", email = "" }) {
    (this.login = login), (this.email = email);
  };
  Account.prototype.getInfo = function getInfo(login, email) {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  };
  // console.log(Account.prototype.getInfo); // function

  const mango = new Account({login:"MangoZeDog",email: "mango@dog.woof"});
  const poly = new Account({login:"Poly",email: "poly@mail.com"});

  mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
  poly.getInfo(); // Login: Poly, Email: poly@mail.com
  console.dir(mango);
  console.log(mango);
}
// const arr  =[ 1,2,3,40]
// const arr2 = arr.map(user => 5)
// console.log(arr2);

function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь отсортировано: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

// ==================================

// {
//   // Костыль

//   const getInfo = function getInfo(login, email) {
//     console.log(`Login: ${this.login}, Email: ${this.email}`);
//   };

//   const Account = function (login = "", email = "") {
//     (this.login = login), (this.email = email), (this.getInfo = getInfo);
//   };

//   const mango = new Account("MangoZeDog", "mango@dog.woof");
//   const poly = new Account("Poly", "poly@mail.com");

//   mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
//   poly.getInfo(); // Login: Poly, Email: poly@mail.com
//   console.dir(mango);
//   console.log(mango);
// }

// //! ==============Object.create()==========================
// {
//   const Account = function (login = "", email = "") {
//     (this.login = login), (this.email = email);
//   };

//   const mango = Object.create(Account);

//   mango.login = "MangoZeDog";
//   mango.email = "mango@dog.woof";
//   mango.getInfo = function getInfo() {
//     console.log(`Login: ${this.login}, Email: ${this.email}`);
//   };
//   console.log(mango);
//   mango.getInfo();
//   //====================Object.setPrototypeOf()====================

//   const Account = function (login = "", email = "") {
//     (this.login = login), (this.email = email);
//   };

//   const A = Object.setPrototypeOf();
// }

// // ============================================================
