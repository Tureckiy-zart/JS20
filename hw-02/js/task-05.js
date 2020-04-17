"use strict";
// let cost;
// let userChoise = prompt("Страна доставки").toLowerCase();
// userChoise
// switch (userChoise) {
//   case null:
//     alert("Отменено пользователем");
//     break;

//   case "Китай".toLowerCase():
//     cost = 100;
//     console.log(userChoise);
//     alert(`Доставка в Китай будет стоить ${cost} кредитов.`);
//     break;

//   case "Чили".toLowerCase():
//     cost = 200;
//     console.log(userChoise);
//     alert(`Доставка в Чили  будет стоить ${cost} кредитов.`);
//     break;

//   case "Индия".toLowerCase():
//     cost = 300;
//     console.log(userChoise);
//     alert(`Доставка в Индия будет стоить ${cost} кредитов.`);
//     break;

//   case "Австралия ".toLowerCase():
//     cost = 400;
//     console.log(userChoise);
//     alert(`Доставка в Австралия будет стоить ${cost} кредитов.`);
//     break;

//   case "Ямайка".toLowerCase():
//     cost = 500;
//     console.log(userChoise);
//     alert(`Доставка в Индия будет стоить ${cost} кредитов.`);
//     break;

//   default:
//     alert(`Нэ робэ!`);
// }

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово
// то функция возвращает true, если запрещенных слов нет функция возвращает false.
//  Слова в строке могут быть в произвольном регистре.

const checkForSpam = function (message) {
  const spams = ["spam", "sale"];
  const words = message.toLowerCase().split(" ");

  for (const word of words) {
    for (const i=0; i<spams.length; i++) 
    console.log(spams[i]);
    
    //   if (word.includes(spams[i])) {
    //     return true;
    //   } else {
    //     return false;    // если раскоментировать то делает билибидру - меняет 73ю строку на фолс
    //   }
    }
  
  // return dddd
};


// debugger

//   for (const word of words) {
//           if (word.includes(spams[i])) {
//         return true;
//       } else {
//         return false;    // если раскоментировать то делает билибидру - меняет 73ю строку на фолс
//       }
//     return
//   }
   
// };

// };  
// for (const spam of spams) {(word.includes(spam)) ? true : false}}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
