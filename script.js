document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".mobile-menu-button");
    const menu = document.querySelector("nav ul");

    button.addEventListener("click", function() {
        menu.classList.toggle("show-menu");
    });
});
