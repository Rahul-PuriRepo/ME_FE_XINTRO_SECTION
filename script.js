const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", () => {
  nav.classList.add("active");
  overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
});

const navButtons = document.querySelectorAll(".nav-link");
const dropdowns = document.querySelectorAll(".dropdown-list");

navButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();

    dropdowns.forEach((dropdown, i) => {
      if (i !== index) {
        dropdown.style.display = "none";
        navButtons[i].classList.remove("link-open");
        navButtons[i].querySelector("img").src =
          "./assets/images/icon-arrow-down.svg";
      }
    });

    const current = dropdowns[index];
    const arrow = button.querySelector("img");

    if (current.style.display === "block") {
      current.style.display = "none";
      button.classList.remove("link-open");
      arrow.src = "./assets/images/icon-arrow-down.svg";
    } else {
      current.style.display = "block";
      button.classList.add("link-open");
      arrow.src = "./assets/images/icon-arrow-up.svg";
    }
  });
});

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => e.stopPropagation());
});

document.addEventListener("click", () => {
  dropdowns.forEach((dropdown, index) => {
    dropdown.style.display = "none";
    navButtons[index].classList.remove("link-open");
    navButtons[index].querySelector("img").src =
      "./assets/images/icon-arrow-down.svg";
  });
});