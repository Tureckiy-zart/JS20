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
  currentItem = event.target.closest("li");
  if (event.target === event.currentTarget) return;
  const imgRefSrc = event.target.dataset.source;
  const imgRefAlt = event.target.alt;
  setLargeImgSrc(imgRefSrc, imgRefAlt);
  addEventListeners();
  {
    // if (event.target.nodeName !== "IMG") return;
    // refs.modalWIndow.classList.add("is-open");
    // refs.modalWIndowImg.src = event.target.dataset.source;
    // refs.modalWIndowImg.alt = event.target.alt;
  }
};

function addEventListeners() {
  refs.closeBtn.addEventListener("click", closeModal);
  refs.modalWIndow.addEventListener("click", closeOnOverlay);
  refs.prevBtn.addEventListener("click", prevSlide);
  refs.nextBtn.addEventListener("click", nextSlide);
  refs.modalWIndow.addEventListener("contextmenu", contextOff);
  window.addEventListener("keydown", scrollGallety);
}
function removeEventListeners() {
  refs.closeBtn.removeEventListener("click", closeModal);
  refs.modalWIndow.removeEventListener("click", closeOnOverlay);
  refs.modalWIndow.removeEventListener("contextmenu", contextOff);
  refs.prevBtn.removeEventListener("click", prevSlide);
  refs.nextBtn.removeEventListener("click", nextSlide);
  window.removeEventListener("keydown", scrollGallety);
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

const closeOnOverlay = (event) => {
  event.target.nodeName !== "IMG" &&
    event.target.nodeName !== "BUTTON" &&
    closeModal();
};

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

//   // next.textContent = ">>>";
//   // prev.textContent = "<<<";

function prevSlide() {
  if (currentItem.previousElementSibling === null) {
    currentItem = currentItem.closest("ul").lastElementChild;
  }
  if ((currentItem = currentItem.previousElementSibling));

  let prevImage = currentItem.querySelector(".gallery__image"); //!!
  refs.modalWIndowImg.src = prevImage.dataset.source;
  refs.modalWIndowImg.alt = prevImage.alt;
}