"use strict";
// ===================Solution 1============================
const logItems = function (array) {
  for(let i = 0; i < array.length; i+=1){
      console.log(`${i+1}: ${array[i]} `);
  }
};
// ===================Solution 2 ============================
const logItems2 = function (array) {
  let count = 0;
  for (const item of array) {
    count += 1;
    console.log(`${count} : ${item}`);
  }
//   return count;
};

console.log("==============FOR===============================");
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
console.log("=============================================");
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

console.log("=================FOR OF============================");
logItems2(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
console.log("=============================================");
logItems2([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);



