document.addEventListener("DOMContentLoaded", () => {
    // Animación para fade in de secciones al cargar
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.classList.add("fade-in");
    });

    // Event listener para el botón
    document.querySelector("#hero button").addEventListener("click", () => {
        alert("¡Te has registrado!");
    });
});


