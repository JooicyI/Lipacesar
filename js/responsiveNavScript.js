document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menuToggle");
    const menu = document.querySelector(".nav-menu");
    const submenuToggles = document.querySelectorAll(".has-submenu .submenu-toggle");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("open");
    });

    submenuToggles.forEach(toggle => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            const parent = toggle.closest(".has-submenu");
            const submenu = parent.querySelector(".submenu") || parent.querySelector(".dropdownNoticias");
            submenu.classList.toggle("open");
        });
    });
});