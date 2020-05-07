//!   ================  подчсет колличества повторяющихся свойств=================================
{const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
const allTags = tweets.reduce(function (tags, tweet) {
  tags.push(...tweet.tags);
  return tags;
}, []);
console.log(allTags);
}

/*
 * Ведём статистику тегов
 */
// const tagsStats = allTags.reduce(function(acc, tag) {
//   console.log('TAG: ', tag);
//   console.log('ACC: ', acc);

//   if (acc.hasOwnProperty(tag)) {
//     console.log('такое свойство есть, увеличиваем значение');

//     acc[tag] += 1;

//     return acc;
//   }

//   console.log('Такого свойства нет, добавляем на обьект');
//   acc[tag] = 1;

//   return acc;
// }, {});

// Грязная версия, мутирует аргумент который придет в acc
// const tagsStats = allTags.reduce(function(acc, tag) {
//   acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1;

//   return acc;
// }, {});

// Чистая версия, каждый раз создает новый обьект
const tagsStats = allTags.reduce(function (acc, tag) {
  return {
    ...acc,
    [tag]: acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1,
  };
}, {});

// console.log(tagsStats);
//!   ================  Reduce своими руками=================================
// Array.prototype.reduce = function(callback, initialValue = this[0]) {
//   let accumulator = initialValue;
//   for (let i = 0; i < this.length; i += 1) {
//     accumulator = callback(accumulator, this[i], i, this);
//   }
//   return accumulator;
// };



//!   ================суммма чисел строки=================================
let result = 0;
for(let s = prompt("Введите число", ""), i = 0; i < s.length; i++){
  result += +s[i];
}
console.log(result || "Сумма чисел равна 0");





//! ===================добавить/удалить слушателя addEventListener=========================

const doStuffOnClick = () => {
  console.log("Click");
};

addListenerBtnRef.addEventListener("click", () => {
  targetBtnRef.addEventListener("click", doStuffOnClick);
});

removeListenerBtnRef.addEventListener("click", () => {
  targetBtnRef.removeEventListener("click", doStuffOnClick);
});
