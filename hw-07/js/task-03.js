"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsUl = document.querySelector("#ingredients");
console.log("===============Шаблонная строка======самый норм===================");
{
  const addElement = (ingredients) =>
    ingredients.map((item) => `<li>${item}</li>`).join(""); //! тут все просто
  ingredientsUl.insertAdjacentHTML("afterbegin", `<h2>Ингредиенты</h2>`); //! хз чего не работает
  ingredientsUl.innerHTML = addElement(ingredients);
}
console.log("=====через createElement====самый бред=============");
{
  //! Создание
  const div = document.createElement("div");
  div.classList.add = "NewDiv";
  const li1 = document.createElement("li");
  li1.textContent = "NewКартошка";
  const li2 = document.createElement("li");
  li2.textContent = "NewГрибы";
  div.insertAdjacentHTML("afterbegin", `<h4>Ингредиенты</h4>`);
  console.log(div);
  //! Добавление в html
  div.append(li1, li2);
  ingredientsUl.after(div);
}
console.log("=====через Fragment()=================");

const fragment = document.createDocumentFragment(); // или const fragment2 = new DocumentFragment();
const noNameIdeasLeft = (items) => {
  const lastTry = items.forEach((item, idx) => {
      const newLi = document.createElement("li");
      newLi.textContent = item;    //newLi.textContent = ingredients[idx];
    fragment.append(newLi);
  });
  return ingredientsUl.append(fragment);
};

noNameIdeasLeft(ingredients);

console.log("=====через хз что()=================");

const createIngredientsItems = (ingredientsArr) => {
  return ingredientsArr.reduce((listItem, ingredient) => {
    const item = document.createElement("li"); //! на каждой итерации создаёт элемент
    item.textContent = ingredient; //! записывает в текстовый узел элемента название
    listItem.push(item); //!  записывает в акумулятор полученный выше элемент и его текстовый узел
    return listItem;
  }, []);
};

const newList = createIngredientsItems(ingredients); //! получаем массив элементов. можно не создавать эту переменную

ingredientsUl.append(...newList); //! записывает в HTML полученый массив при помощи распыления
