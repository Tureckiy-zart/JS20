"use strict";
/*
* Напиши функцию calculateTotalPrice(allProdcuts, productName), 
* которая получает массив объектов и имя продукта (значение свойства name).
* Возвращает общую стоимость продукта (цена * количество).

* Вызовы функции для проверки работоспособности твоей реализации.
*/
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = (allProdcuts, productName) => {
  for (const product of allProdcuts) {
    product.name === productName &&
      console.log(`Сумма покупки:  ${product.price * product.quantity}`);
  }
};

const calculateTotalPrice1 = (allProdcuts, productName) => {
  allProdcuts.map((product) => {
    product.name === productName &&
      console.log(`Сумма покупки:  ${product.price * product.quantity}`);
  });
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
//  */
console.log("==============solution 1=============");
calculateTotalPrice(products, "Радар"); // 5200

calculateTotalPrice(products, "Дроид"); // 2800

console.log("==============solution 2 =============");

calculateTotalPrice1(products, "Радар"); // 5200

calculateTotalPrice1(products, "Дроид"); // 2800
