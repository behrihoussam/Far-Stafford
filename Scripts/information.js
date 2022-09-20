const informationImages = document.querySelectorAll(
    ".company_information--item"
);
const informationPopups = document.querySelectorAll(
    ".company_information--item_popup"
);

informationImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        informationPopups.forEach((popup, idx) => {
            popup.classList.add("active");
            popup.scrollIntoView();
            if (index !== idx) {
                popup.classList.remove("active");
                return;
            }
        });
    });
});
