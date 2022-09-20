
const applyMenu = document.querySelector(".apply");
const applyCloseButton = document.querySelector(".close_button--apply");
const applyButton = document.querySelector(".apply_button");

const toggleMenu = () => {
    applyButton.addEventListener("click", () => {
        applyMenu.style.display = "block";
    });
    applyCloseButton.addEventListener("click", () => {
        applyMenu.style.display = "none";
    });

}
toggleMenu();