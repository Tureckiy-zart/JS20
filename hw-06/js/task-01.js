"use strict";
import users from "./users.js";

console.log(
  "================================Задание 1============================================"
);
// Получить массив имен всех пользователей (поле name).
const getUserNamesByArrowFunction = (users) => users.map(({ name }) => name); // {name} диструктуризация  = user.name
console.log(getUserNamesByArrowFunction(users));
{
  //   const getUserNames = (users) => {
  //     const userName = users.map(({ name }) => name); // {name} диструктуризация  = user.name
  //     return userName;
  //   };
  //   console.log(getUserNames(users));
}

// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

console.log(
  "================================Задание 2============================================"
);

{
  // * Получить массив объектов пользователей по цвету глаз
  // * (поле eyeColor).

  const getUsersWithEyeColorArr = (users, color) =>
    users.filter(({ eyeColor }) => color === eyeColor);
  console.table(getUsersWithEyeColorArr(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
  console.log("=======================================================");

  const getUsersWithEyeColor = (users, color) => {
    const eyeColors = users.filter(({ eyeColor }) => color === eyeColor);
    return eyeColors;
  };

  console.table(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
  console.log("=======================================================");
}
console.log(
  "================================Задание 3============================================"
);
const getUsersWithGender = (users, genders) =>
  users.filter(({ gender, name }) => gender === genders).map(({name}) => name);

console.table(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

console.log(
  "================================Задание 4============================================"
);

//* Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = (users) => users.filter(({ isActive }) => !isActive);
console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
console.log(
  "================================Задание 5============================================"
);

// *Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, emails) =>
  users.find(({ email }) => email === emails);

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

console.log(
  "================================Задание 6============================================"
);

//* Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) =>
  users.filter(({ age }) => age > min && age < max);

console.table(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.table(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

console.log(
  "=================================Задание 7=================================================="
);

//* Получить общую сумму баланса (поле balance) всех пользователей.
const calculateTotalBalance = (users) =>
  users.reduce((totalBalance, { balance }) => (totalBalance += balance), 0);

console.log(calculateTotalBalance(users)); // 20916
console.log(
  "=================================Задание 8=================================================="
);

// *Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) =>
  users.filter(({ friends }) => friends.includes(friendName)).map(({name}) => name);

console.table(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.table(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
console.log(
  "=================================Задание 9=================================================="
);

//* Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = (users) =>
  users
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map((user) => user.name);

console.table(getNamesSortedByFriendsCount(users));
// * [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

console.log(
  "=================================Задание 10=================================================="
);

// *Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = (users) => {
  return users
    .reduce((skillsAcc, { skills }) => {
      skillsAcc.push(...skills);
      return skillsAcc;
    }, [])
    .filter((value, index, user) => user.indexOf(value) === index)
    .sort();
};
console.table(getSortedUniqueSkills(users));

//!!!! ТАК НЕ РОБЭ!!!!!!!!!!!!!!!!!!!
// const getSortedUniqueSkills2 = (users) => {
//   return users.reduce(
//     (acc, item) =>
//       !acc.includes(item.skills) ? acc.push(...item.skills) : acc,
//     return acc;
//     []
//   );
//   //   .filter((value, index, user) => user.indexOf(value) === index)
//   //   .sort();
// };
// console.table(getSortedUniqueSkills2(users));

