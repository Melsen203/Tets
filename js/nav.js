const menu = document.querySelector(".menu-input");
const hidden = document.querySelector(".hidden-menu");

menu.addEventListener ("click", () => {
    menu.classList.toggle("active");
    hidden.classList.toggle("active");
} )