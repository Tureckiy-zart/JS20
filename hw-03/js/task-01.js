"use strict";
{console.log(
  "======================================================================="
);
console.log(
  "============================Solution 1================================="
);
console.log(
  "======================================================================="
);
}
class User {
  constructor({ name = "John Dou", age = 150, hobby = "fishing", premium = true }) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.premium = premium;
  }
  changeProp(mood, hobby, premium) {
    this.mood = mood;
    this.hobby = hobby;
    this.premium = premium;
  }
  logKeys() {
    const keys = Object.keys(this);
    for (const key of keys) {
      console.log(`${key} is:  ${this[key]}`);
    }
  }
}
const user1 = new User({
  name: "Mango",
  age: 20,
  premium: true,
});
const user2 = new User({
  name: "Polly",
  premium: false,
});

const user3 = new User({
})
console.log(user3);
{
  user1.changeProp("happy", "skydiving", "false");
user2.changeProp("lonlyness", "drving", "true");

user1.logKeys();
console.log("==============");
user2.logKeys();
console.log("==============");
user3.logKeys();
console.log("==============");
console.log(user1);
console.log("==============");
console.log(user2);
}

{console.log(
  "======================================================================="
);
console.log(
  "============================Solution 2================================="
);
console.log(
  "======================================================================="
);}

// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
//! выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// ===================Solution 1============================
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,

//   changeProp(mood, hobby, premium) {
//     this.mood = mood;
//     this.hobby = hobby;
//     this.premium = premium;
//   },
//   logKeys() {
//     const keys = Object.keys(this);
//     for (const key of keys) {
//       console.log(`${key} is:  ${this[key]}`);
//     }
//     const entries = Object.entries(this);
//     console.log(entries);
//   },
// };
// user.changeProp("happy", "skydiving", "false");
// user.logKeys();
// console.log(user);

// const a = user.name;
// const b = user['name'];
// console.log("value" , b);
