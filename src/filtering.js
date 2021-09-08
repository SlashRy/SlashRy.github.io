var filterBtns = document.querySelectorAll("#filter-section>button");
let projectCards = document.getElementsByClassName("project-card")

for (button of filterBtns) {
    button.addEventListener("click", setFilter);
}

function setFilter(e) {
    for (button of filterBtns) {
        button.classList.remove("filtering");
    }
    e.currentTarget.classList.add("filtering");
}

for (btn of filterBtns)
    btn.addEventListener('click', filter)

function filter(tag) {
    for (card of projectCards) {
        if (card.classList.contains(this.classList[0]))
            card.classList.add("visible")
        else
            card.classList.remove("visible")
    }
}