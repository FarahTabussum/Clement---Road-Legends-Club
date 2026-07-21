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

const slider = document.getElementById("edition-slider");
const dots = document.querySelectorAll(".dot");

slider.addEventListener("scroll", () => {
  const cardWidth = slider.children[0].offsetWidth + 20; // card + gap

  const page = Math.round(slider.scrollLeft / (cardWidth * 2));

  dots.forEach((dot) => {
    dot.classList.remove("bg-black");
    dot.classList.add("bg-gray-400");
  });

  dots[page % 3].classList.remove("bg-gray-400");
  dots[page % 3].classList.add("bg-black");
});
