// "use strict";
//   //!! Фибоначчи
//   console.log(    "========================Фибоначчи============================================="  );

//   const fiboAll = [];
//   function fibonacci(maxFibo) {
//     let fibo = 1;
//     for (let i = 0; i < maxFibo; i += fibo) {
//       fiboAll.push(i);
//       fiboAll.push((fibo += i));
//     }
//     fiboAll.shift(1);
//   }
//  console.log(fibonacci(Number.POSITIVE_INFINITY));
//    fibonacci(Math.pow(1000, 10000000));

//   console.log(fiboAll);

//   console.log(    "========================узнать число фибо в порядке последовательности================"  );

//   function findFibo(array, number) {
//     for (let index = 0; index < array.length; index++) {
//       return console.log(`№ ${number} в последованности Фибоначчи: ${array[number - 1]}`);
//     }
//   }
//   findFibo(fiboAll, 2953);
//   findFibo(fiboAll, 2954);
// }

// {
//   const bookStore = {
//     booksList: ["fantasy", "detective", "adventure"],
//     booksCategory: {
//       fantasy: {
//         items: [],
//         totalQuantity: 0,
//         totalPriceSum: 0,
//       },
//       detective: {
//         items: [],
//         totalQuantity: 0,
//         totalPriceSum: 0,
//       },
//       adventure: {
//         items: [],
//         totalQuantity: 0,
//         totalPriceSum: 0,
//       },
//     },
//     totalQuantity: 0,
//     totalPriceSum: 0,
//     //* Пересчет
//     rePrice() {
//       //* изменяем общую сумму и кол-во категории
//       this.totalQuantity = 0;
//       this.totalPriceSum = 0;
//       for (const category in this.booksCategory) {
//         this.booksCategory[category].totalPriceSum = 0;
//         this.booksCategory[category].totalQuantity = 0;
//         console.log(this.booksCategory);

//         for (const item of this.booksCategory[category].items) {
//           this.booksCategory[category].totalPriceSum +=
//             item.price * item.quantity;
//           this.booksCategory[category].totalQuantity += item.quantity;
//         }
//         this.totalQuantity += this.booksCategory[category].totalQuantity;
//         this.totalPriceSum += this.booksCategory[category].totalPriceSum;
//       }
//     },
//     //* Добавляем книжку
//     addBook(category, book) {
//       //* деструктуризация
//       let { totalQuantity, totalPriceSum, items } = this.booksCategory[
//         category
//       ];
//       //* деструктуризация
//       const { price, quantity } = book;
//       //* добавляем книжку в массив
//       // items = [...items, book];
//       // items.push(book);
//       this.booksCategory[category].items = [
//         ...this.booksCategory[category].items,
//         book,
//       ];
//       this.rePrice();
//       // console.log("Add");
//       // console.log(bookStore);
//     },
//     //* Удаляем книжку
//     dellBook(category, id) {
//       const newArray = [];
//       for (const item of this.booksCategory[category].items) {
//         // console.log(item);
//         if (item.id !== id) {
//           newArray.push(item);
//         }
//       }
//       this.booksCategory[category].items = newArray;
//       // console.log(this.booksCategory[category].items);
//       this.rePrice();
//       // console.log("Dell");
//       // console.log(bookStore);
//     },
//     changePrice(name, newPrice) {
//       for (const category in this.booksCategory) {
//         // console.log(this.booksCategory[category].items);
//         for (const item of this.booksCategory[category].items) {
//           // console.log(item);
//           if (item.name === name) {
//             item.price = newPrice;
//           }
//         }
//       }
//       this.rePrice();
//     },
//     changeQuantity(author, newQuantity) {
//       for (const category in this.booksCategory) {
//         // console.log(this.booksCategory[category].items);
//         for (const item of this.booksCategory[category].items) {
//           // console.log(item);
//           if (item.author === author) {
//             item.quantity = newQuantity;
//           }
//         }
//       }
//       this.rePrice();
//     },
//     addCategory(categoryName) {
//       // console.log(this.booksCategory[categoryName]);
//       if (this.booksCategory[categoryName] === undefined) {
//         this.booksCategory[categoryName] = {
//           items: [],
//           totalQuantity: 0,
//           totalPriceSum: 0,
//         };
//       }
//     },
//     delCategory(categoryName) {
//       delete this.booksCategory[categoryName];
//       this.rePrice();
//     },
//   };
//   //* Вызов ф-ц
//   bookStore.addBook("fantasy", {
//     id: "113",
//     name: "Green Mile",
//     author: "Tom",
//     price: 199,
//     quantity: 1,
//   });
//   bookStore.addBook("fantasy", {
//     id: "115",
//     name: "Green Mile 2",
//     author: "Alex",
//     price: 260,
//     quantity: 2,
//   });
//   bookStore.addBook("fantasy", {
//     id: "122",
//     name: "Green Mile 3",
//     author: "Messy",
//     price: 213,
//     quantity: 2,
//   });
//   bookStore.addBook("adventure", {
//     id: "12",
//     name: "Green Mile 5",
//     author: "Alexandra",
//     price: 66,
//     quantity: 5,
//   });
//   // bookStore.dellBook("fantasy", "115");
//   // console.log(bookStore);
//   // bookStore.rePrice();
//   // bookStore.changePrice("Green Mile 2", 999);
//   // bookStore.changeQuantity("Alexandra", 1);
//   // bookStore.addCategory("tales");
//   // bookStore.delCategory("tales");
//   bookStore.delCategory("fantasy");
//   console.log(bookStore);
//   // Есть книжный магазин.
//   // создать методы для:
//   // для добавления книг в определенную категорию.
//   // (объект который необходимо добавлять выглядит так: book = { id: '', name: '', author: '', price: 0, quantity: 0 }.
//   // при добавлении каждого объекта посчитать totalQuantity и totalPrice,
//   // а также общую стоимость всех книг и общее количество книг)
//   // для удаления книги из выбранной категории по уникальному идентификатору;
//   // для изменения цены конретной книги;
//   // для изменения количества книг по конкретному автору;
//   //? для фильтрации книг по автору цене и кол-ве
//   // для добавления новой категории книг
//   // для удаления категории книг
// }
// {hotel.name = 'name'}
// for ( const some in [hotel])
// console.log({ hotel });

// hotel[some] = 4646;
// console.log(hotel['name'] = 'sadf');
// console.table(hotel);

// console.log(names);

// {let user = {     // объект
//   name: "John",  // под ключом "name" хранится значение "John"
//   age: 30        // под ключом "age" хранится значение 30
// };
// console.log(user[age]);
// // }

// // function makeUser(name, age) {
// //   return {
// //     name,
// //     age: 0,
// //     // ...другие свойства
// //   };
// // }

// // let user = makeUser("John", 30);
// // console.log(user[age]); // John30

// // const maxNumber = Math.pow(10, 1000); // max positive number
// // console.log(maxNumber);

// // if (maxNumber === Infinity) {
// //   console.log("Let's call it Infinity!");
// expected output: "Let's call it Infinity!"
// }

// console.log(1 / maxNumber);
// expected output: 0

// console.log(fiboAll);

// (0 1 1 2 3 5 8 13 21 34 55)

// 8. (*) Даны размер ипотечного кредита, процентная ставка, кол-во лет. Найти переплату по кредиту.

// _________________________________
// 9) Створіть змінну num і надайте їй значення 3. Виведіть значення цієї змінної на екран за допомогою методу alert

// 10) Створіть змінні a = 10 і b = 2. Виведіть на екран їх суму, різницю, добуток і частку (результат ділення)

// 11) Створіть змінні c = 15 і d = 2. Підсумуйте їх, а результат надайте змінної result. Виведіть на екран значення змінної result

// 12) Створіть змінні a = 10, b = 2 і c = 5. Виведіть на екран їх суму.

// 13) Створіть змінні a = 17 і b = 10. Відніміть від a змінну b і результат надайте зміннії c. Потім створіть змінну d, надайте їй значення 7. Складіть змінні c і d, а результат запишіть в змінну result. Виведіть на екран значення змінної result.

// 14) Запитайте ім'я користувача за допомогою методи prompt. Виведіть за допомогою alert повідомлення 'Ваше ім'я
// %значення що отримали з prompt%'
// function date(t) {
//     for(let i; i<10; i++){
//     }
//   }
//   date(10)
// console.log(new Date());
// 15) Створіть три змінні - година, хвилина, секунда. З їх допомогою виведіть поточний час в форматі 'година: хвилина: секунда'.

// 16) Створіть змінну, надайте їй число. Зведіть це число в квадрат. Виведіть його на екран
// const number = function countNumber(a ,b) {
// const counte = Math.pow(a,b)
//   return console.log(`number: ${a} , increm: ${b} , coumted: ${counte}`)
// }
// number(3,2)
// var pow = 2;
// const increm = 5.5;
// console.log(Math.pow(pow, increm) );

// 17) Переробіть цей код так, щоб в ньому використовувалися операції + =, - =, * =, / =.
//  Кількість рядків коду при цьому не повинно змінитися.

// var num = 47;
// num += 7;
// console.log((num));
// num -= 18;
// console.log((num));
// num *= 10;
// console.log((num));
// num /= 15;
// console.log((num));

//===================== task 09 =====================

// /*
// В переменную value записывается случайное число.

// Объяви переменную type, в которую, используя ветвления запиши строку:
//   - "even" если value четное
//   - "odd" если value не четное
// PS: попробуй использовать тернарный оператор
// */

// =================================================================================================
{
  const person = {
    names: {
      name1: "Jay",
      name2: "Ama",
    },
    ages: {
      jay: 35,
      Ama: 2,
    },
    premisions: {},
  };

  const { names, ages, premisions } = person;
  const {
    names: { name1: futher, name2: dauter } = {},
    ages: { jay, Ama },
  } = person;
  console.log(names);
  console.log(futher, dauter);
  console.log(ages);
  console.log(Ama);
  console.log(premisions);
}
// =======================================
// console.log(Object.prototype.toString());
// =======================================

// const animalTalk = {
//   say: function() {
//     console.log(`${this.name} say ${this.voice}`);
//   }};

// const dog = {
//   name: "dog",
//   voice: "woof",
// };

// // animalTalk.call(dog)
// Object.setPrototypeOf(dog, animalTalk)
// dog.say()

var fruits = ["Яблоко", "предпоследний", "Банан", "последний"];
console.log(fruits[0] + fruits[1]);
console.log(fruits[fruits.length - 1]);

fruits.forEach(function (item, index, fruits) {
  console.log(item, index, fruits);
});

const foo = function showThis() {
  console.log("this in showThis: ", this);
};

// Вызываем в глобальном контексте
// showThis();
// this in showThis: Window

const user = { name: "Mango" };

// user.showContext = showThis;
const sddsd = foo.bind(user);
sddsd();
console.log(user);

const object = {
  name: "some name",
  showThis: function showThis() {
    //! this = object
    const fn = function fn() {
      console.log("this in fn: ", this); //?почему fn не взял контекст у showThis
      const fn2 = () => {
        console.log("this in fn2: ", this);
      };
      fn2();
    };
    object.fn();
    console.log("this in showThis: ", this);
  },
};
object.showThis();
