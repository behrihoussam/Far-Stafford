const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const valueItems = document.querySelectorAll(".value_item");

let activeIndex = 1;
const updateSlider = () => {
    valueItems.forEach((value, index) => {
        if (index < activeIndex) {
            value.classList.add("values_active");
        }
        else {
            value.classList.remove("values_active");
        }

        let prevSibling = value.previousElementSibling;
        let nextSibling = value.nextElementSibling;
        if (value.classList.contains("values_active")) {
            prevSibling.classList.remove("values_active");
            nextSibling.classList.remove("values_active");
        }
    })
}
next.addEventListener("click", () => {
    activeIndex++
    if (activeIndex > valueItems.length) {
        activeIndex = valueItems.length;
    }
    updateSlider();
})
prev.addEventListener("click", () => {
    activeIndex--
    if (activeIndex < 1) {
        activeIndex = 1;
    }
    updateSlider();
})