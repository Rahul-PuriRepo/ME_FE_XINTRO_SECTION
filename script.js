const navButtons = document.querySelectorAll(".nav-link");
const dropdowns = document.querySelectorAll(".dropdown-list");

navButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();

    dropdowns.forEach((dropdown, i) => {
      if (i !== index) {
        dropdown.style.display = "none";

        const img = navButtons[i].querySelector("img");
        img.src = "./assets/images/icon-arrow-down.svg";
      }
    });

    const currentDropdown = dropdowns[index];
    const currentArrow = button.querySelector("img");

    if (currentDropdown.style.display === "block") {
      currentDropdown.style.display = "none";
      currentArrow.src = "./assets/images/icon-arrow-down.svg";
    } else {
      currentDropdown.style.display = "block";
      currentArrow.src = "./assets/images/icon-arrow-up.svg";
    }
  });
});

document.addEventListener("click", () => {
  dropdowns.forEach((dropdown, index) => {
    dropdown.style.display = "none";

    const img = navButtons[index].querySelector("img");
    img.src = "./assets/images/icon-arrow-down.svg";
  });
});