export const tamplateMarkup = (item) => {
  return `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
        </a>
      </li>
`;
};

// this in fn: {name: 'Resort hotel', showThis: ƒ}
// this in showThis: {name: 'Resort hotel',showThis: ƒ}

// export const tamplateMarkup = (data) => {

// export const tamplateMarkup = function (data) {
// import data from "./gallery-items.js";
// //
// const testData = {
//   context:data,
//   tamplateMarkup2() {
//     const context = data;
//     // this = data;
//     // console.log(context);
//     const makeLi = () => {
//       return `
//     <li class="gallery__item">
//         <a class="gallery__link" href="${context.original}">
//         <img
//           class="gallery__image"
//           src="${context.preview}"
//           data-source="${context.original}"
//           alt="${context.description}"
//         />
//         </a>
//       </li>
//     }
// `;
//     };
//   },
// };
// testData.tamplateMarkup2();

// const hotel = {
//   name: "Resort hotel",
//   showThis() {
//     const context = this;
//     const fn = () => {
//       console.log("this in fn: ", this);
//     };
//     fn();
//     console.log("this in showThis: ", this);
//   },
// };
// hotel.showThis();


// function tamplateMarkup2() {
//   console.log(this);
//   return `
//               <li class="gallery__item">
//                   <a class="gallery__link" href="${this.original}">
//                   <img
//                     class="gallery__image"
//                     src="${this.preview}"
//                     data-source="${this.original}"
//                     alt="${this.description}"
//                   />
//                   </a>
//                 </li>
//           `;
// }

// hotel.showThis();
// export default tamplateMarkup2.bind(testData);
// console.dir(tamplateMarkup2.bind(testData));
// tamplateMarkup2(data);
// console.log(testData);

// function showContext() {
//   console.dir(this);
// }
// showContext();
// // testData.showThis = showContext;
// // testData.showThis();
// showContext.bind(testData)

// // testData.tamplateMarkup()
// // console.dir(testData.tamplateMarkup.bind(this));
// console.dir(testData.tamplateMarkup());
// testData.tamplateMarkup.bind(this);

  