const containerMenu = document.querySelectorAll(".container-modal div");
const closeTag = document.querySelector(".opening .close-tag i");
const openingMenu = document.querySelector(".opening-modal");
const opening = document.querySelector(".opening");

containerMenu.forEach((a) => {
  a.addEventListener("click", () => {
    openingMenu.classList.toggle("active");
    opening.classList.toggle("active");
    opening.classList.add("hide-effect");
  });
});

window.addEventListener("keydown", (a) => {
  if (a.keyCode == 27) {
    openingMenu.classList.toggle("active");
    opening.classList.toggle("active");
  }
});

closeTag.addEventListener("click", () => {
  opening.classList.toggle("active");
  openingMenu.classList.toggle("active");
});

openingMenu.addEventListener("click", () => {
  opening.classList.toggle("active");
  openingMenu.classList.toggle("active");
});
