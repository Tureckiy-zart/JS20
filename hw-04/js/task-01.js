"use strict";
const printMessage = function(message) {
  console.log(message);
};

const higherOrderFunction = function(printMessage) {
  const string = 'HOCs are awesome';
  printMessage(string);
};

higherOrderFunction(printMessage);