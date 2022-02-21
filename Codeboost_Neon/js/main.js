// Scroll
// window.scrollTo(0, 0);

// header background
let header = document.getElementById("header");
window.onscroll = function (evt) {
  if (window.scrollY > 10) {
    header.classList.add("bgOn");
  } else {
    header.classList.remove("bgOn");
  }
};

// menu
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// sub-menu
const subMenu = document.getElementById("menu");
function openMenu(event) {
  const openMenu = document.getElementById("drop-down");
  openMenu.classList.toggle("open-menu");
}

subMenu.addEventListener("click", openMenu);

// Slide
var swiper = new Swiper(".slid_depoimentos", {
  slidesPerView: 3,
  spaceBetween: 32,
  pagination: {
    el: ".s_depoiment .bar_top .swiper-pagination",
    clickable: true,
  },
});
