const open = document.querySelector(".open");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
  overlay.classList.add("show");
});

close.addEventListener("click", () => {
  overlay.classList.remove("show");
});
