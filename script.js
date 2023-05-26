const navOpen = document.getElementById("menu-open")
const navClose = document.getElementById("menu-close")
const navItems = document.querySelector(".nav__items")

navOpen.addEventListener("click", () => {
    console.log("nav-open")
    navItems.style.top = "20px"
    navOpen.style.display = "none";
    navClose.style.display = "block"
})
navClose.addEventListener("click", () => {
    navItems.style.top = "-2000px"
    navClose.style.display = "none"
    navOpen.style.display = "block";

})