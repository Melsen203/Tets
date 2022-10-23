const search = document.querySelector(".search-input");
const hiddensearch = document.querySelector(".search-bar-hide");
const close = document.querySelector(".close-btn");

search.addEventListener ("click", () => {
    search.classList.toggle("active");
    hiddensearch.classList.toggle("active");
    close.classList.toggle("active");
} )

close.addEventListener ("click", () => {
    close.classList.toggle("active");
    hiddensearch.classList.toggle("active");
    close.classList.toggle("active");
} )