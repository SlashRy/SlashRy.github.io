const splashText = document.querySelector("#changing-text");
const words = ["DEVELOPER", "LEARNER", "CREATOR"];
let i = 0;
let j = 0;
let currWord = [];
let isDeleting = false;
let isEnd = false;

function writeSplash() {
  isEnd = false;
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currWord.push(words[i][j]);
      splashText.innerHTML = currWord.join("");
      j++;
    }
    if (isDeleting && j <= words[i].length) {
      currWord.pop(words[i][j]);
      splashText.innerHTML = currWord.join("");
      j--;
    }
    if (j == words[i].length) {
      isDeleting = true;
      isEnd = true;
    }
    if (isDeleting && j == 0) {
      currWord = [];
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  }
  const time = isEnd ? 3000 : isDeleting ? 100 : 115;
  setTimeout(writeSplash, time);
}

writeSplash();


var filterBtns = document.querySelectorAll(".filter-container>button");

for (button of filterBtns) {
  button.addEventListener('click', setFilter)
}

console.log(filterBtns);

function setFilter(e) {
  for (button of filterBtns) {
    button.classList.remove("selected");
  }
  e.currentTarget.classList.add("selected");
}