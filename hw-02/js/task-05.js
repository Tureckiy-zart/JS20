"use strict";
// * Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// * Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово
// * то функция возвращает true, если запрещенных слов нет функция возвращает false.
// * Слова в строке могут быть в произвольном регистре.

const spams = ["spam", "sale", "boom", "lol", "fuck", "duck"];
let back = "";

const checkForSpam = function (message) {
  // debugger
  let newMessage = message.toLowerCase().split(" ");
//   let messageOutput = ' ';
   
//  for (const spam of spams) {
// // console.log(messageOutput);
// if (newMessage.includes(spam)) {
//   return true;
// } else {
//   return false
// }


// }
// }
 
 
  for (const spam of spams) {

    // ** if ((newMessage.includes(spam)  ? "continue" : numbers.push(userInputInteger))
    // if (newMessage.includes(spam) !== true ? 'true' : 'false')
      if (newMessage.includes(spam)) {
        back = "true"
        return back;
      } else {return false};
      // let count="";
      // count += spam;
      // console.log(count);
      
      // console.dir(message);
    }
  }
  console.dir (back);

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology spa m s ale news")); // false

console.log(checkForSpam("JavaScript [SPAM] weekly newsletter duc k")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// =========================================================================

// const checkForSpam = function (message) {
//   const spams = ["spam", "sale"];
//   const words = message.toLowerCase().split(" ");

//   for (const word of words) {
//     for (const i=0; i<spams.length; i++)
//     console.log(spams[i]);

//     //   if (word.includes(spams[i])) {
//     //     return true;
//     //   } else {
//     //     return false;    // если раскоментировать то делает билибидру - меняет 73ю строку на фолс
//     //   }
//     }

//   // return dddd
// };

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

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
