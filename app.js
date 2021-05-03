const splashText = document.querySelector("#changingText")
const words = ["DEVELOPER", "STUDENT", "BIG TECHBOI", "GYM LEADER"]
let i = 0
let j = 0
let currPhrase = []
let isDeleting = false
let isEnd = false

function writeSplash() {
  isEnd = false
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currPhrase.push(words[i][j])
      splashText.innerHTML = currPhrase.join("");
      j++
    }
    if (isDeleting && j <= words[i].length) {
      currPhrase.pop(words[i][j])
      splashText.innerHTML = currPhrase.join("");
      j--
    }
    if (j == words[i].length) {
      isDeleting = true
      isEnd = true
    }
    if (isDeleting && j == 0) {
      currPhrase = []
      isDeleting = false
      i++
      if (i == words.length) {
        i = 0
      }
    }
  }
  const time = (isEnd) ? 5000 : (isDeleting) ? 100 : 175
  setTimeout(writeSplash, time)
}

writeSplash()
