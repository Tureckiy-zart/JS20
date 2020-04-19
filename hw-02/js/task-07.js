"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
console.log(logins);
const isLoginValid = (login) => login.length >= 4 && login.length <= 16;

const isLoginUnique = (allLogins, login) => allLogins.includes(login);

const addLogin = function (allLogins, login) {
  const isLoginValidTrue = !isLoginValid(login);
  const isLoginUniqueTrue = isLoginUnique(allLogins, login);
  if (isLoginValidTrue) {
    return "'Ошибка! Логин должен быть от 4 до 16 символов'";
  }
  if (isLoginUniqueTrue) {
    return "Такой логин уже используется";
  }
  allLogins.push(login);
  return "'Логин успешно добавлен!'";
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajуx")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(logins);


