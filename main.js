const open = document.querySelector(".open");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const contact = document.querySelector(".nav_item_contact");
const pricing = document.querySelector(".nav_item_pricing");
const about = document.querySelector(".nav_item_about");

open.addEventListener("click", () => {
  overlay.classList.add("show");
});

close.addEventListener("click", () => {
  overlay.classList.remove("show");
  console.log("click");
});

contact.addEventListener("click", () => {
  overlay.classList.remove("show");
});

pricing.addEventListener("click", () => {
  overlay.classList.remove("show");
});

about.addEventListener("click", () => {
  overlay.classList.remove("show");
});
