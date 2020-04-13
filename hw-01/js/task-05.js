"use strict";
let cost;
let userChoise = prompt("Страна доставки").toLowerCase();

switch (userChoise) {
  case null:
    alert("Отменено пользователем");
    break;

  case "Китай".toLowerCase():
    cost = 100;
    console.log(userChoise);
    alert(`Доставка в Китай будет стоить ${cost} кредитов.`);
    break;

  case "Чили".toLowerCase():
    cost = 200;
    console.log(userChoise);
    alert(`Доставка в Чили  будет стоить ${cost} кредитов.`);
    break;

  case "Индия".toLowerCase():
    cost = 300;
    console.log(userChoise);
    alert(`Доставка в Индия будет стоить ${cost} кредитов.`);
    break;

  case "Австралия ".toLowerCase():
    cost = 400;
    console.log(userChoise);
    alert(`Доставка в Австралия будет стоить ${cost} кредитов.`);
    break;

  case "Ямайка".toLowerCase():
    cost = 500;
    console.log(userChoise);
    alert(`Доставка в Индия будет стоить ${cost} кредитов.`);
    break;

  default:
    alert(`Нэ робэ!`);
}
