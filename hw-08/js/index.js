// addEventListener clik ставить на на верхний див lightbox
//========================================================
import { refs } from "./refs.js";
import { markupGallery, openModal } from "./functions.js";
import data from "./gallery-items.js";
//========================================================
refs.gallery.insertAdjacentHTML("beforeend", markupGallery(data));
refs.gallery.addEventListener("click", openModal);







// console.dir(refs.gallery.children[0]);
