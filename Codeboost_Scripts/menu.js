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
const btnDropdown = document.querySelectorAll(".js-btn-dropdown");
const dropdown = document.querySelectorAll(".sub-menu");

btnDropdown.forEach((btn, index) => {
  let botao = btn.firstElementChild;

  botao.addEventListener("click", (event) => {
    event.preventDefault();

    botao.parentElement.classList.toggle("active");
  });

  dropdown.forEach((drop) => {
    drop.addEventListener("mouseleave", () => {
      drop.parentElement.classList.remove("active");
    });
  });
});

window.addEventListener("click", function (e) {
  dropdown.forEach((drop) => {
    if (!drop.parentElement.contains(e.target)) {
      drop.parentElement.classList.remove("active");
    }
  });
});
