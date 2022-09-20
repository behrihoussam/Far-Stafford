let prevScrollpos = window.pageYOffset;
const navBar = document.getElementById("navbar");

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navBar.style.top = "0";
        navBar.style.visibility = "visible";
        navBar.style.opacity = "1";
    } else if (prevScrollpos >= 400) {
        navBar.style.top = "-250px";
        navBar.style.visibility = "hidden";
        navBar.style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
    if (prevScrollpos <= 100) {
        navBar.classList.add("main_navbar--top");
    }
    else {
        navBar.classList.remove("main_navbar--top");
    }
}

const navbarMenu = document.querySelector(".main_navbar--menu-button");
const navbarList = document.querySelector(".main_navbar--list");
const navbarListButton = document.querySelector(".main_navbar--button");

navbarMenu.addEventListener("click", () => {
    navbarList.classList.toggle("navbarMenu");
    navbarListButton.classList.toggle("navbarMenu");
});

document.addEventListener("click", (event) => {
    let menuButton = navbarMenu.contains(event.target);
    let menuList = navbarList.contains(event.target);
    let menuListButton = navbarListButton.contains(event.target);
    if (!menuButton && !menuList && !menuListButton) {
        navbarList.classList.remove("navbarMenu");
        navbarListButton.classList.remove("navbarMenu");
    }
})
window.addEventListener("scroll", () => {
    if (navbarList.classList.contains("navbarMenu") &&
        navbarListButton.classList.contains("navbarMenu")) {
        navbarList.classList.remove("navbarMenu");
        navbarListButton.classList.remove("navbarMenu");
    }
})