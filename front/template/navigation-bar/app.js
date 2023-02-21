const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

// Ajouter un écouteur d'événements pour le bouton de menu
navToggle.addEventListener("click", () => {
  // Ajouter/supprimer la classe "active" pour le bouton de menu et la barre de navigation
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Trouver tous les éléments avec la classe "has-submenu"
const hasSubmenu = document.querySelectorAll(".has-submenu");

// Ajouter un écouteur d'événements pour chaque élément "has-submenu"
hasSubmenu.forEach((item) => {
  item.addEventListener("click", (e) => {
    // Empêcher le comportement par défaut du lien
    e.preventDefault();
    // Ajouter/supprimer la classe "active" pour le sous-menu correspondant
    item.querySelector(".submenu").classList.toggle("active");
  });
});