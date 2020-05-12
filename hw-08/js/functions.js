import { tamplateMarkup } from "./template.js";
import { refs } from "./refs.js";
// import  tamplateMarkup2 from "./template.js";
import data from "./gallery-items.js";
let currentItem = null;
//=======================
export const markupGallery = (newGallery) =>
  newGallery.reduce((acc, item) => (acc += tamplateMarkup(item)), "");
refs.gallery.insertAdjacentHTML("beforeend", markupGallery(data));
//=======================

export const openModal = (event) => {
  event.preventDefault();
  // if (event.target.nodeName !== "IMG") return;
  currentItem = event.target.closest("li");

  if (event.target === event.currentTarget) return;

  const imgRefSrc = event.target.dataset.source;
  const imgRefAlt = event.target.alt;

  setLargeImgSrc(imgRefSrc, imgRefAlt);
  addEventListeners();
  {
    // refs.modalWIndow.classList.add("is-open");
    // refs.modalWIndowImg.src = event.target.dataset.source;
    // refs.modalWIndowImg.alt = event.target.alt;
  }
};

function addEventListeners() {
  refs.closeBtn.addEventListener("click", closeModal);
  refs.modalWIndow.addEventListener("click", closeOnOverlay);
  window.addEventListener("keydown", scrollGallety);
  refs.modalWIndow.addEventListener("contextmenu", contextOff);
}
function removeEventListeners() {
  refs.closeBtn.removeEventListener("click", closeModal);
  refs.modalWIndow.removeEventListener("click", closeOnOverlay);
  window.removeEventListener("keydown", scrollGallety);
  refs.modalWIndow.removeEventListener("contextmenu", contextOff);
}
function setLargeImgSrc(url, alt) {
  refs.modalWIndow.classList.add("is-open");
  refs.modalWIndowImg.src = url;
  refs.modalWIndowImg.alt = alt;
}
function closeModal() {
  refs.modalWIndow.classList.remove("is-open");
  refs.modalWIndowImg.src = "";
  refs.modalWIndowImg.alt = "";
  removeEventListeners();
}
const contextOff = (event) => event.preventDefault();

const closeOnOverlay = (event) =>
  event.target.nodeName !== "IMG" && closeModal();

// let count = 0;

// const allImg = document.querySelectorAll('.gallery__link')
// console.log(allImg);

{
  // function scrollGallety() {
  //   // event.code === "ArrowRight" && nextSlide();
  //   for(let i =0; i<refs.gallery.children.length; i++ ){
  //     // while (i<refs.gallery.children.length)
  //   if (event.code === "ArrowRight") {
  //     // let currentImg = this.event.target;
  //     //  let thisImg = event.target.parentNode.firstElementChild;
  //     let thisImg1 =
  //       event.target.parentNode.nextElementSibling.firstElementChild
  //         .firstElementChild;
  //     //  console.log(thisImg);
  //     console.log(thisImg1);
  //     refs.modalWIndowImg.src = thisImg1.dataset.source;
  // // console.log(currentImg);
  // console.log(refs.modalWIndowImg.src);
  //    //  return   thisImg = thisImg1
  //     // count
  //     //  const child = refs.gallery.children;
  //     //  console.dir(child.length);
  //     //  console.log(thisImg);
  //     //   thisImg=thisImg[i+1]
  //     //  }
  //     // console.log(thisImg);
  //     // console.log(refs.gallery.children.firstElementChild);
  //     // console.log(refs.gallery.children[i].firstElementChild);
  //     // console.dir(refs.gallery.children[1]);
  //     // refs.gallery.children[1]
  //   }
  //   // event.code === "ArrowLeft" && prevSlide();
  //   event.code === "Escape" && closeModal();
  //   // const prev = document.querySelector("#prev");
  //   // const next = document.querySelector("#next");
  //   // next.textContent = ">>>";
  //   // prev.textContent = "<<<";
  // }
  // // function nextSlide (){
  // //   let thisImg = event.target;
  // //   console.log(thisImg);
  // }
  //========================================
}

function scrollGallety() {
  event.code === "ArrowRight" && nextSlide();
  event.code === "ArrowLeft" && prevSlide();
  event.code === "Escape" && closeModal();
}

function nextSlide() {
  if (currentItem.nextElementSibling === null) {
    currentItem = currentItem.closest("ul").firstElementChild;
  }
  if ((currentItem = currentItem.nextElementSibling));

  let nextImage = currentItem.querySelector(".gallery__image");
  refs.modalWIndowImg.src = nextImage.dataset.source;
  refs.modalWIndowImg.alt = nextImage.alt;
}

function prevSlide() {
  if (currentItem.previousElementSibling === null) {
    currentItem = currentItem.closest("ul").lastElementChild;
  }
  if ((currentItem = currentItem.previousElementSibling));

  let prevImage = currentItem.querySelector(".gallery__image");
  refs.modalWIndowImg.src = prevImage.dataset.source;
  refs.modalWIndowImg.alt = prevImage.alt;
}

{
  const child = refs.gallery.children;
  // console.log(child);
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
