const listButton = document.querySelectorAll(".list-button");

function activeLink() {
  listButton.forEach((elm) => {
    elm.classList.remove("active");
    this.classList.add("active");
  });
}

listButton.forEach((elm) => {
  elm.addEventListener("click", activeLink);
});
