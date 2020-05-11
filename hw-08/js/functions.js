import { tamplateMarkup } from "./template.js";
import { refs } from "./refs.js";

// import  tamplateMarkup2 from "./template.js";

export const markupGallery = (newGallery) =>
  newGallery.reduce((acc, item) => (acc += tamplateMarkup(item)), "");

export const openModal = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  refs.modalWIndow.classList.add("is-open");
  refs.modalWIndowImg.src = event.target.dataset.source;
  refs.modalWIndowImg.alt = event.target.alt;
  
  refs.closeBtn.addEventListener("click", closeModalWIndow);
  refs.modalWIndow.addEventListener("click", closeOnOverlay);
  window.addEventListener("keydown", scrollGallety);
  // window.addEventListener('keydown', keyFunction);
};

const closeOnOverlay = (event) => (event.target.nodeName !== "IMG") && (closeModalWIndow());

function closeModalWIndow() {
  refs.modalWIndow.classList.remove("is-open");
  refs.modalWIndowImg.src = "";
  refs.modalWIndowImg.alt = "";
  
  refs.closeBtn.removeEventListener("click", closeModalWIndow);
  refs.modalWIndow.removeEventListener("click", closeOnOverlay);
  window.removeEventListener("keydown", scrollGallety);
}

function scrollGallety() {
  event.code === "ArrowRight" && nextSlide();
  event.code === "ArrowLeft" && prevSlide();
  event.code === "Escape" && closeModalWIndow();
  // const prev = document.querySelector("#prev");
  // const next = document.querySelector("#next");
  // next.textContent = ">>>";
  // prev.textContent = "<<<";
}


//========================================s

{
  const child = refs.gallery.children;
  console.log(child);

  var obj = child;
  var to = -1; // Счетчик, указывающий на текущую картинки

  function nextSlide() {
    // Открытие следующей картинки(движение вправо)
    if (to < child.length - 1) to++;
    else to = 0;
    obj = child[to];
    console.log(obj);
  }
  function prevSlide() {
    // Открытие предыдущей картинки(движение влево)
    if (to > 0) to--;
    else to = child.length - 1;
    obj.src = child[to];
    console.log(obj);
  }
}
{
// const markupGallery = (newGallery) => newGallery.map(item => tamplateMarkup2(item)).join('')

// var imgs = new Array('https://www.primefaces.org/primeng/assets/showcase/images/logo.png', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', 'https://material.io/tools/icons/static/ic_material_192px_light.svg');

// var image = document.getElementById("image");

// image.src = imgs[0];
// image.dataset.current = 0;

// function slide(ind) {
//   let current = +image.dataset.current;
//   current += ind;
//   if (current >= imgs.length)
//     current = 0;
//   if (current < 0)
//     current = imgs.length - 1;
//   image.src = imgs[current];
//   image.dataset.current = current;
// }

// function imgsrc(event) {
//   var w = document.body.clientWidth;
//   var p = event.clientX;
//   if (p > (w / 2)) {
//     slide(1);
//   } else {
//     slide(-1);
//   }
// }
}