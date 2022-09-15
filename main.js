//Hamburger menu

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

//ease-in
const upperItems = document.querySelectorAll(".upper_hidden");
const bottomItems = document.querySelectorAll(".bottom_hidden");
const cards = document.querySelectorAll(".card");
const appearPics = document.querySelectorAll(".appear_sections");

function showElements() {
  const scrolled = window.scrollY; //ユーザーがスクロールした分
  upperItems.forEach((uItem) => {
    const topItem = uItem.offsetTop;
    if (scrolled + window.innerHeight > topItem) {
      uItem.classList.add("appear_upper");
    }
  });

  bottomItems.forEach((bItem) => {
    const topItemDelay = bItem.offsetTop;
    if (scrolled + window.innerHeight > topItemDelay) {
      bItem.classList.add("appear_bottom");
    }
  });

  cards.forEach((card) => {
    const topCard = card.offsetTop;
    if (scrolled + window.innerHeight > topCard) {
      card.classList.add("appear_card");
    }
  });

  appearPics.forEach((appearPic) => {
    const topPic = appearPic.offsetTop;
    if (scrolled + window.innerHeight > topPic) {
      appearPic.classList.add("appear");
    }
  });
}

window.addEventListener("scroll", showElements);
