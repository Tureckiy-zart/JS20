const pRef = document.querySelector(".js_text");
const textParser = {
  arr: ["cat", "dog", "monkey is an animal"],
  splitWord(array) {
    let countLetter = 0;
    let countItem = 0;
    const ID = setInterval(() => {
      if (this.arr.length === countItem) {
        clearInterval(ID);
        return;
      }
      console.log(this.arr[countItem]);
      const letter = this.arr[countItem][countLetter];
      this.print(letter, countItem, countLetter);
      if (this.arr[countItem].length - 1 === countLetter) {
        countLetter = 0;
        // console.log(this.arr[countItem].length - 1);

        countItem++;
        return;
      }
      countLetter++;
    }, 100);
  },
  print(letter, countItem, countLetter) {
    pRef.textContent += letter;
    if (this.arr[countItem].length - 1 === countLetter) {
      pRef.textContent += " ";
      console.log(this.arr[countItem].length - 1);
    }
    console.log(this.arr[countItem].length);
    console.log(countLetter);
  },
};
textParser.splitWord();
