"use strict";
// * Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
// * В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль
// * значения полей login и email объекта который его вызвал.
// ===============================================
{
  const Account = function ({ login = "", email = "" }) {
    (this.login = login), (this.email = email);
  };
  Account.prototype.getInfo = function getInfo() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  };
  // console.log(Account.prototype.getInfo); // function

  const mango = new Account({ login: "MangoZeDog", email: "mango@dog.woof" });
  const poly = new Account({ login: "Poly", email: "poly@mail.com" });

  mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
  poly.getInfo(); // Login: Poly, Email: poly@mail.com
}

// ==================================

{
  // Костыль

  const getInfo = function getInfo() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  };
  const Account = function ({ login = "", email = "" }) {
    (this.login = login), (this.email = email), (this.getInfo = getInfo);
  };

  const mango = new Account({ login: "MangoZeDog", email: "mango@dog.woof" });
  const poly = new Account({ login: "Poly", email: "poly@mail.com" });

  mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
  poly.getInfo(); // Login: Poly, Email: poly@mail.com
}

// //! ==============Object.create()=========РАботает=================
{
  const acc = {
    makeUser: function ({ login = "", email = "" }) {
      (this.login = login), (this.email = email);
    },
    getInfo: function () {
      console.log(`Login: ${this.login}, Email: ${this.email}`);
    },
  };

  const mango2 = Object.create(acc);
  mango2.login = "MangoZeDog";
  mango2.email = "mango@dog.woof";

  console.log("mango2 :", mango2);
  mango2.getInfo();
  //====================Object.setPrototypeOf()====================

  //   const A = Object.setPrototypeOf();
}

// // ============================================================
