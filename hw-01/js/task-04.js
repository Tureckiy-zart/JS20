"use strict";
const credits = 23580;
const prisePerDroid = 3000;
let totalPrice;
let countToBuy;
let message;

let maxValue = credits / prisePerDroid;
maxValue = Number(maxValue); //привести в число
alert(`Вы можите купить максимум ${Math.floor(maxValue)} дроидов`);
console.log(typeof maxValue);

countToBuy = prompt("Введите кол-во дроидов для покупки :");
totalPrice = countToBuy * prisePerDroid;

if (countToBuy === null) {
  message = "Отменено пользователем!";
  console.log(message);
} else if (totalPrice > credits) {
  const totalShortfall = totalPrice - credits;
  alert(`Общая сумма превышет колличество кредитов на ${totalShortfall}`);
} else {
  let creditsAmount = credits - totalPrice;
  alert(
    `Вы купили ${countToBuy} дроидов, на счету осталось ${creditsAmount} кредитов.`
  );
}

// На счету пользователя есть 23580 кредитов,
// значение хранится в переменной credits
// (создай и присвой). Пользователь решает
// купить ремонтных дроидов, которые стоят
//  по 3000 кредитов за штуку. Цена одного
//  дроида хранится в переменной pricePerDroid
//  (создай и присвой).
// При посещении страницы, используя prompt,
// необходимо спросить количество дроидов
// которые пользователь хочет купить и
// сохранить в переменную.
// Напиши скрипт который:
// Если в prompt была нажата кнопка Cancel,
// выводит в консоль сообщение 'Отменено пользователем!'.

// В противном случае, рассчитывает общую цену
// заказа и сохраняет в переменной totalPrice.

// Проверяет сможет ли пользователь оплатить  заказ:
// если сумма к оплате превышает количество
// кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать
//  остаток кредитов на счету и вывести сообщение
// 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// const min = 10;
// const max = 30;
// const value = 15;

// const isInRange = value < 10 || value > 30;

// if (isInRange) {
//   console.log("wwwooooooooowwww");
// } else {
//   console.log("number is not in range");
// }

// console.log(isInRange);
// console.log(typeof isInRange);

// console.log(0 || 4);
// console.log( 0 || NaN || 0 || 5);
