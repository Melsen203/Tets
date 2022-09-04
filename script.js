const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".hidden-menu");

hamburger.addEventListener ("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
} )