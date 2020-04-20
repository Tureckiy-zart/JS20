"use strict";
// ===================Conditions============================
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее. Каждое
// поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
// !! ===================Solution1============================
// const countTotalSalary = function (employees) {
//   const salary = Object.values(employees);
//   let total = 0;
//   for (let item of salary) {
//     total += item;
//   }
//   console.log(total);
// };
// !! ===================Solution2============================

const countTotalSalary = function (employees) {
  let toatlSalary = 0;
  for (let value in employees) {
    toatlSalary += employees[value];
  }
  return `Общая ЗП: ${toatlSalary}`
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
