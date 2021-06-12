//*********************************************
//*               SPLASHPAGE EFFECT           *
//*********************************************

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


//*********************************************
//*              PROJECT FILTERING            *
//*********************************************


var filterBtns = document.querySelectorAll(".filter-container>button");

for (button of filterBtns) {
  button.addEventListener('click', setFilter)
}

function setFilter(e) {
  for (button of filterBtns) {
    button.classList.remove("selected");
  }
  e.currentTarget.classList.add("selected");
}


//*********************************************
//*                  GSAP                     *
//*********************************************


var sidebarLinks = document.querySelectorAll("#sidebar li");

gsap.registerPlugin (ScrollTrigger);

ScrollTrigger.create({
  trigger: ".filter-container",
  start: "top center",
  onEnter: projectsActive,
  onEnterBack: projectsActive
});

ScrollTrigger.create({
  trigger: "#changing-text",
  start: "top center",
  onEnter: welcomeActive,
  onEnterBack: welcomeActive
});

function welcomeActive() {
  for (link of sidebarLinks) {
    link.classList.remove("active");
  }
  sidebarLinks[0].classList.add("active");
}

function projectsActive() {
  for (link of sidebarLinks) {
    link.classList.remove("active");
  }
  sidebarLinks[1].classList.add("active");
}

gsap.to (".project-card", {
  scrollTrigger: {
    trigger: "#changing-text",
    start: "top top"
  },
  opacity:1,
  y: -20,
  duration:0.7
});