const toggleMenuShowButton = document.querySelector(".show");
const toggleMenuHideButton = document.querySelector(".hide");
const menuToggleBackground = document.querySelector(".menu-bar__dark-background");
const toggleMenu = document.querySelector(".menu-bar__toggle-menu");
const informationButton = document.querySelector(".menu-bar__toggle-menu__link--us");

const showMenu = () => {
    menuToggleBackground.classList.remove("hidden");
    toggleMenu.classList.remove("hidden");
    toggleMenu.style.animation = "showAnimation 0.3s forwards";

    // Para evitar que el usuario pueda mover el contenido de la página al abrir el menu desplegable
    document.body.style.overflow = "hidden";
}

const hideMenu = () => {
    menuToggleBackground.classList.add("hidden");
    toggleMenu.classList.add("hidden");
    toggleMenu.style.animation = "hideAnimation 0.3s forwards";
    document.body.style.overflow = "";
}

// Toggle Menu buttons
toggleMenuShowButton.addEventListener("click", () => showMenu());
toggleMenuHideButton.addEventListener("click", () => hideMenu());

// Toggle Menu background
menuToggleBackground.addEventListener("click", () => hideMenu());
informationButton.addEventListener("click", () => hideMenu());