const toggleButton = document.querySelector("#toggle-button");

const contents = document.querySelectorAll("body")[0];

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");

  contents.classList.toggle("night");
});
