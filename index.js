// Función que aplica la clase cuando el botón está en la vista
document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.querySelector('.contact-button');

    // Crear el observador de intersección
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view'); // Agrega la clase cuando está en vista
                observer.unobserve(entry.target); // Dejar de observar después de la primera aparición
            }
        });
    }, { threshold: 0.1 }); // Se activa cuando el 10% del botón es visible

    // Iniciar la observación
    observer.observe(contactButton);
});
