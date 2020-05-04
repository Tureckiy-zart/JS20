"use strict";

// const items = [...document.querySelectorAll('.item')] //!ARRAY
const item = document.querySelectorAll(".item"); //!Nodelist

{
  const lengthCount = (toCount) => `В списке ${toCount.length} категории`;
  console.log(lengthCount(item));
}
{
  const getCategory3 = (allLi) => {
    const sdf = allLi.forEach((item) => {
      const innerContentUl = item.firstElementChild.textContent;
      const categoriesCount = item.lastElementChild.querySelectorAll("li")
        .length;
      { //либо так 
        // const itemsTitle = item.querySelector("h2").textContent;
        // const categoriesCount = item.querySelector("ul").querySelectorAll("li").length;
      }
      console.log(`Категория:  ${innerContentUl}
                 Количество элементов: ${categoriesCount}`);
    });
  };
  getCategory3(item);
}
{
  // =======сраное говно не работает. нужно перестать стараться выебать вселенную ====
  // const refs = {
  //   item: document.querySelectorAll(".item"),
  //   item_h2: document.querySelector(".item").querySelector("h2"),
  //   item_ul_li: document.querySelector(".item").querySelector("ul").querySelectorAll("li"),
  //   // item_ul: document.querySelector(".item").querySelector("ul"),
  //   // item_ul__li: (item_ul).querySelectorAll('li')
  // };
  // const { item, item_h2, item_ul, item_ul_li } = refs;
  // // const logCat = (item) => `В списке ${item.length} категории`;
  // // console.log(logCat(item));
  // const getCategory3 = (items) => {
  //   const sdf = items.forEach(() => {
  //     const innerContentUl = item_h2.textContent;
  //     const categoriesCount = item_ul_li.length;
  //     console.log(
  //       `Категория: ${innerContentUl}, Количество элементов: ${categoriesCount}`
  //     );
  //   });
  // };
  // // debugger
  // getCategory3(item);
}

{
  // const boddy = document.querySelector('body')
  // console.dir(boddy.children );
  // console.dir(boddy.firstChild);
  // console.dir(boddy.firstElementChild);
  // console.dir(boddy.lastChild);
  // console.dir(boddy.lastElementChild );
  // console.dir(boddy.previousSibling );
  // console.dir(boddy.previousSibling.previousSibling );
  // console.dir(boddy.previousElementSibling );
  // console.dir(boddy.nextSibling  );
  // console.dir(boddy.nextElementSibling   );
  // const categories = document.querySelector('#categories').querySelectorAll('.item')
  // // console.log(categories.firstChild);
  // const categories2 = document.querySelector('.js-item')
  // console.log(categories2);
  // console.dir(categories2.classList.contains('.ul_cat'));
  // console.dir(categories2.classList.contains('item'));
  // categories2.classList.add('item111111')
  // categories2.classList.add('i11')
  // console.log(categories2);
  // categories2.classList.remove('i11')
  // categories2.classList.add('i11')
  // categories2.classList.replace('i11', 'i222')
  // categories2.classList.toggle('i222')
  // categories2.classList.toggle('i222')
  // categories2.setAttribute('name', 'value')
  // categories2.setAttribute('name2', 'value2')
  // console.log(categories2.attributes);
  // const newEl = document.createElement('span')
  // console.log(newEl);
  // newEl.textContent = 'some terxt'
  // newEl.setAttribute('nwe', 'qwe')
  // newEl.classList.toggle('mi-mi-mi')
  // categories.appendChild('newEl ')
}
