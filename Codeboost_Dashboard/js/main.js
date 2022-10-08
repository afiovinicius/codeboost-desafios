/* 
===== índice =====
  1° Consts
  2° Functions
==================
*/

/* 
===== Consts ===== 
*/
const btnOptionsProfile = document.querySelectorAll(".btn_options_profile");
const dropdownOptions = document.querySelectorAll(".list_options");
const btnOpenAndClose = document.getElementById("btn_sidebar");
const btnItemSidebar = document.querySelectorAll(".list_sidebar li");
const boxContent = document.querySelectorAll(".s_content");
/* 
===== Functions ===== 
*/
// Menu Profile
btnOptionsProfile.forEach((btn, index) => {
  let actionOptions = btn;

  actionOptions.addEventListener("click", (event) => {
    event.preventDefault();
    actionOptions.parentElement.classList.toggle("active");
  });

  dropdownOptions.forEach((drop) => {
    drop.addEventListener("mouseleave", () => {
      drop.parentElement.classList.remove("active");
    });
  });
});

window.addEventListener("click", function (e) {
  dropdownOptions.forEach((drop) => {
    if (!drop.parentElement.contains(e.target)) {
      drop.parentElement.classList.remove("active");
    }
  });
});
// Button Open Sidebar
function toggleSidebar(event) {
  if (event.type === "touchstart") event.preventDefault();
  const openSidebar = document.getElementById("sidebar");
  openSidebar.classList.toggle("active");
}
btnOpenAndClose.addEventListener("click", toggleSidebar);
btnOpenAndClose.addEventListener("touchstart", toggleSidebar);
// Sections Transitions
btnItemSidebar.forEach((navt, index) => {
  navt.addEventListener("click", (e) => {
    e.preventDefault();

    btnItemSidebar.forEach((navtr) => {
      navtr.classList.remove("active");
    });

    boxContent.forEach((boxcr) => {
      boxcr.classList.remove("active");
    });

    navt.classList.add("active");

    boxContent[index].classList.add("active");
  });
});
