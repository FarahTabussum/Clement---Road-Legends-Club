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
  const page = Math.round(slider.scrollLeft / slider.clientWidth);

  dots.forEach((dot) => {
    dot.classList.remove("bg-black");
    dot.classList.add("bg-gray-300");
  });

  if (page < dots.length) {
    dots[page].classList.remove("bg-gray-300");
    dots[page].classList.add("bg-black");
  }
});

// black dots

const testimonialSlider = document.getElementById("testimonial-slider");
const testimonialDots = document.querySelectorAll(".testimonial-dot");

testimonialSlider.addEventListener("scroll", () => {
  const page = Math.round(
    testimonialSlider.scrollLeft / testimonialSlider.clientWidth,
  );

  testimonialDots.forEach((dot) => {
    // Remove BOTH possible colors first
    dot.classList.remove("bg-amber-50", "bg-gray-400");

    // Make every dot gray
    dot.classList.add("bg-gray-400");
  });

  // Make only the active dot amber
  if (testimonialDots[page]) {
    testimonialDots[page].classList.remove("bg-gray-400");
    testimonialDots[page].classList.add("bg-amber-50");
  }
});

// FAQ dropdown

const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector(".faq-icon");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.style.transform = "rotate(0deg)";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.style.transform = "rotate(45deg)"; // plus becomes an X
    }
  });
});
