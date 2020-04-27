'use strict'
//? ================Примитивы==================================================//
//?==============Ranodm + проверка на чётность =======
const value = Number.parseInt(Math.random() * 100);
// console.log(`Math.random: ${value}`);
let type;
value % 2 === 0 ? (type = "odd") : (type = "even");
console.log(`${value} is ${type}`);
//?===================Случайное целое число  в диапазоне от min до max==================================
//https://learn.javascript.ru/task/random-int-min-max
 //использовать Math.floor для получения случайного числа от min до max+1:
  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  console.log(randomInteger(0, 19));
//   Теперь все интервалы отображаются следующим образом:
//   число от 1  ... до 1.9999999999  округлится до 1
//   число от 2  ... до 2.9999999999  округлится до 2
//   число от 3  ... до 3.9999999999  округлится до 3
//   Все интервалы имеют одинаковую длину, что выравнивает вероятность получения случайных чисел.

//?====================Проверка на тип данных======================================================
function getData(data) {
    if (data.constructor.name === "Array") {
      return console.log(data= data, name = data[0]);
      // return { 
      //   data: data,
      //   name: data[0],
      // };
    }
    if (data.constructor.name === "String") {
      console.log("String");
    }
  }
  const array = ["Andrii" ,1,2,3];
  const string = "CGDGHMS";
 
  getData(string);
  getData(array);
// ?=====================Глубокая деструктуризация обекта===========================================
const shape = {
    type: "segment",
    coordinates: {
      start: [10, 15],
      end: [2, 154],
    },
  };
  const {
    coordinates: {
      start: [stX, stY],
      end: [enX, enY],
    },
  } = shape;
  console.log(
    `start X: ${stX * 2} Y:${(stY * 2) / 4}, end X:${enX} Y:${(enY * 2) / 4} `
  );
  // =================================================================================================
  

//!=======================================привязка this к callback функции=============================
  const hotel = {
    name: 'Resort Hotel',
    showThis() {
      console.log(this);
    },
  };
    const fn = function(callback) {
    callback();
  };
    // Передаем копию метода showThis с контекстом привязанным к hotel
  fn(hotel.showThis.bind(hotel)); // {name: "Resort Hotel", showThis: ƒ}
  
//   =================================================================================================