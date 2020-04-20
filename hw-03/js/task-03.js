"use strict";
// ===================Conditions============================
// Напиши функцию findBestEmployee(employees), которая принимает объект
// сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач).
// отрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".
// ===================Solution==============================

const findBestEmployee = function (employees) {
  const allValues = Object.values(employees);
  const highestScore = Math.max(...allValues);
//!!
//  for (const key in employees) {
//     if ((employees[key] === highestScore) && `Чемпион: ${key}`)
//  }
//!!

  for (const key in employees) {
    if (employees[key] === highestScore) {
      console.log(employees[key]);
      
      return `Чемпион: ${key}`
    }
  }
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
