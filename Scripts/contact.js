const contactButtons = document.querySelectorAll(".contact_us--button");
const contactMenu = document.querySelector(".contact_us");
const contactMenuCloseButton = document.querySelector(".close_button");
const backdrop = document.querySelector(".backdrop")

contactButtons.forEach((button) => {
    button.addEventListener("click", () => {
        contactMenu.classList.add("show");
        backdrop.classList.add("show");
    });
})
const hideMenu = (clickedItem) => {
    clickedItem.addEventListener("click", () => {
        if (contactMenu.classList.contains("show")) {
            contactMenu.classList.remove("show");
        }
        backdrop.classList.remove("show");
    });

}
hideMenu(backdrop);
hideMenu(contactMenuCloseButton);