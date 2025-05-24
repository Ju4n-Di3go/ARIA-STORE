// promociones.js
// Este script está preparado para futuras mejoras o interactividad

document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("mouseenter", () => {
            tarjeta.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
        });

        tarjeta.addEventListener("mouseleave", () => {
            tarjeta.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });

    // Puedes añadir aquí filtros, botones u otros efectos
});
