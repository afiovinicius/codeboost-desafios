// header background
let header = document.getElementById("header");
window.onscroll = function (evt) {
  if (window.scrollY > 12) {
    header.classList.add("bgOn");
  } else {
    header.classList.remove("bgOn");
  }
};

// menu
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// sub-menu
const subMenu = document.querySelectorAll(".btn-dropdown");
const dropDownMenus = document.querySelectorAll("._nav .drop-down");
const dropAction = document.querySelectorAll("._nav .drop-down");

subMenu.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    subMenu.forEach((btnr) => {
      btnr.classList.remove("active");
    });

    dropDownMenus.forEach((dropr) => {
      dropr.classList.remove("active");
    });

    btn.parentElement.lastElementChild.classList.add("active");

    dropDownMenus[index].classList.add("active");
  });
});

window.addEventListener("click", (e) => {
  dropAction.forEach((menu) => {
    if (e.target !== menu && !e.target.classList.contains("btn-dropdown")) {
      menu.classList.remove("active");
    }
  });
});
