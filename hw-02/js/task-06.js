"use strict";

// При загрузке страницы пользователю предлагается в prompt 'Введите число'. Ввод сохраняется
// в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
//  пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
// необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
// Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный
//  набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай
//  alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt
//  записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

let input;
const numbers = [];
let total = 0;
const ifNAN = "Было введено не число, попробуйте еще раз";
const totalCount= 'The total amount of numbers entered equals to'

let userInput;
  do {
    userInput = prompt("Введите число:");
    if (!parseInt(userInput) && userInput !== null) {
      alert(ifNAN);
    } else {
      const pushInNumbers =
        userInput === null ? "continue" : numbers.push(userInput);
    }
  } while (userInput !== null);

  for (const number of numbers) {
    total += Number(number);
  }
  if (
    numbers.length > 0 &&
    alert(`${totalCount} ${total}`) // поячему не сработает если поставить totalCount
  );
console.log(numbers);
console.log(total);


// let userInput;
// function addInArray(char) {
//   do {
//     userInput = char;
//     if (!parseInt(userInput) && userInput !== null) {
//       alert(ifNAN);
//     } else {
//       const pushInNumbers =
//         (userInput === null) ? "continue" : numbers.push(userInput);
//     }
//   } while (userInput !== null);

//   for (const number of numbers) {
//     total += Number(number);
//   }
//   if (
//     numbers.length > 0 &&
//     alert(`The total amount of numbers entered equals to ${total}`)
//   );
// }
// console.log(numbers);
// addInArray(prompt("Введите число:"));

// const arr1 = [1, 2, 2, 2, 2, 2, "lol", 2, 3, 4, 5];
// const arr2 = [8, 7, 6];
// const arr3 = [8, 7, 6];
// const arr4 = arr1;
// console.log(arr3 === arr2);
// console.log(arr4 === arr1);

// console.log(arr4);
// const rev = arr2.reverse();
// const concut = arr1.concat(rev);
// console.log(concut);

// const a = 5;
// let b = a;
// console.log(b === a);
// b = [12, 5];
// console.log(b);
// console.log(a);

// const idx = arr1.indexOf("lol");
// const incl = arr1.includes("lol");
// console.log(idx);
// console.log(incl);
// if (idx && incl && console.log(`'DA' index: ${idx}`));
// arr1.push(...arr2);
// console.log(arr1);
// arr1.shift();
// arr1.shift();
// arr1.shift();
// arr1.shift();
// arr1.shift();
// arr1.shift();
// arr1.unshift(1);
// console.log(arr1);
// // ==============================================
// const arr6 = [1, 2, 3];
// const newArr = [...arr6]
// console.log(newArr);
// newArr[5]=12;
// console.log(newArr);
// console.log(arr6);
// // ==============================================

// const words = 'Lorem ipsum dolor sit amet'
// // ==============================================
// // const mareArr = words.split(' ')

// // console.log(mareArr);

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// const mareArr = clients.join(' ')
// console.log(mareArr);

// // findOutlier([0, 1, 2]), 1)
// // findOutlier([1, 2, 3], 2)
// // Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
// // Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
// // Test.assertEquals(findOutlier([1,1,0,1,1]), 0)

// // Напиши скрипт который просит посетителя
// // ввести число в prompt до тех пор, пока
// // посетитель на нажмет Cancel и каждый раз
// // добавляет введенное значение к общей сумме.

// // При загрузке страницы пользователю предлагается
// // в prompt ввести число. Ввод добавляется к значению переменной total.
// // Операция ввода числа продолжается до тех пор,
// // пока пользователь не нажмет кнопку Cancel в prompt.
// // После того как пользователь прекратил ввод нажав
// // кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// // 🔔 Делать проверку того, что пользователь ввел
// // именно число, а не произвольный набор символов, не нужно.
// // Если хочешь, в случае некорректного ввода, показывай alert
// // с текстом 'Было введено не число, попробуйте еще раз',
// // при этом результат prompt плюсовать к общей сумме не нужно,
// // после чего снова пользователю предлагается ввести число в prompt.
