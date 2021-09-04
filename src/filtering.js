var filterBtns = document.querySelectorAll("#filter-section>button");

for (button of filterBtns) {
    button.addEventListener("click", setFilter);
}

function setFilter(e) {
    for (button of filterBtns) {
        button.classList.remove("filtering");
    }
    e.currentTarget.classList.add("filtering");
}
