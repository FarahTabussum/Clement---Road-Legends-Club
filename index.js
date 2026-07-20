const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  if (mobileMenu.classList.contains("hidden")) {
    menuIcon.src = "images/burger-menu.svg";
    menuIcon.alt = "Menu";
  } else {
    menuIcon.src = "images/cross.svg";
    menuIcon.alt = "Close";
  }
});
