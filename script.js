const hamburger = document.querySelector(".riordina");
const navbar = document.querySelector(".desc-wrap");

hamburger.addEventListener ("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
} )