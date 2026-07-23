// card slider

// Select the slider by its ID directly
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("receive-slider");
  const cards = slider.querySelectorAll(".min-w-full");
  let current = 0;

  document.getElementById("receive-next").onclick = () => {
    if (current < cards.length - 1) {
      current++;
      slider.style.transform = `translateX(-${current * 100}%)`;
    }
  };

  document.getElementById("receive-prev").onclick = () => {
    if (current > 0) {
      current--;
      slider.style.transform = `translateX(-${current * 100}%)`;
    }
  };
});

// section 5 card swap

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("testimonial-slider");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  const totalCards = 3;

  function goToSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.remove("bg-gray-300");
        dot.classList.add("bg-black");
      } else {
        dot.classList.remove("bg-black");
        dot.classList.add("bg-gray-300");
      }
    });

    currentIndex = index;
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      goToSlide(index);
    });
  });

  let startX = 0;
  let endX = 0;

  slider.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  });

  // THIS IS WHAT YOU WERE MISSING
  slider.addEventListener("touchmove", function (e) {
    endX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", function () {
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < totalCards - 1) {
        goToSlide(currentIndex + 1);
      } else if (diff < 0 && currentIndex > 0) {
        goToSlide(currentIndex - 1);
      }
    }
  });
});

// modal

const openBtns = document.querySelectorAll(
  "#openLockModal, #openLockModalMobile",
);

const closeBtn = document.getElementById("closeLockModal");

const modal = document.getElementById("lockModal");
const overlay = document.getElementById("lockOverlay");

openBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.remove("hidden");

    requestAnimationFrame(() => {
      overlay.classList.remove("opacity-0");
      modal.classList.remove("translate-x-full");
    });
  });
});

function closeModal() {
  overlay.classList.add("opacity-0");
  modal.classList.add("translate-x-full");

  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 300);
}

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// quantity

const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const quantity = document.getElementById("quantity");

let count = 1;

plusBtn.addEventListener("click", () => {
  count++;
  quantity.textContent = count;
});

minusBtn.addEventListener("click", () => {
  if (count > 1) {
    count--;
    quantity.textContent = count;
  }
});
