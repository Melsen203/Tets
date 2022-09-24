const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".hidden-menu");

hamburger.addEventListener ("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
} )